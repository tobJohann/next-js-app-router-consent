'use client'

import { trackingConfig } from './config.tracking'
import { GtagEvent, GtagConsentObject } from '../types/types.tracking'

const logGAWarning = (message: string) => {
  console.warn(message)
}

const getGtag = async (timeout = 500, maxTries = 4): Promise<typeof window.gtag> => {
  let tries = 0
  return new Promise((resolve, reject) => {
    const checkGtag = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        return resolve(window.gtag)
      }

      if (++tries >= maxTries) {
        logGAWarning(`GTag not available after ${timeout}ms`)
        return reject(new Error('GTag is not available'))
      }

      setTimeout(checkGtag, timeout)
    }

    checkGtag()
  })
}

export const sendGAEvent = async (event: GtagEvent) => {
  const gtag = await getGtag()
  if (!gtag) return

  gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  })
}

export const handleGoogleConsent = async (consentObject: GtagConsentObject) => {
  const gtag = await getGtag()
  if (!gtag) return
  gtag('consent', 'update', consentObject)
  sendGAEvent({ action: 'init-g4a' })
}

export const grantConsentForEverything = async () => {
  const gtag = await getGtag()
  if (!gtag) return
  await gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted',
  })
}

export const markFeatureUsage = (feature: string) => {
  performance.mark('mark_feature_usage', {
    detail: { feature },
  })
}

export const pageview = async (url: string) => {
  const gtag = await getGtag()
  if (!gtag) return
  gtag('config', trackingConfig.gtmId, {
    page_path: url,
  })
}
