'use client'

import { Suspense, useEffect, useState } from 'react'
import { GoogleTagManagerScripts } from './GoogleTagManagerScripts'
import { trackingConfig } from '@/components/features/Consent/lib/config.tracking'
import { grantConsentForEverything } from '@/components/features/Consent/lib/utils.tracking'

export const GoogleTagManager = () => {
  const [isGtagLoaded, setIsGtagLoaded] = useState(false)
  const [hasSetConsent, setHasSetConsent] = useState(false)

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.gtmId}`}
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        ></iframe>
      </noscript>
      {/* We need to use Suspense in order to access useSearchParams (see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout) */}
      <Suspense>
        <GoogleTagManagerScripts gaId={trackingConfig.gtmId} />
      </Suspense>
    </>
  )
}
export default GoogleTagManager
