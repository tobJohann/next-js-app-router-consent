declare global {
  interface Window {
    gtag?: Gtag.Gtag
  }
}

declare namespace Gtag {
  interface Gtag {
    (...args: GtagFunctionArgs): void
  }

  type GtagFunctionArgs =
    | [GtagCommand, EventName | EventParams | CustomParams]
    | [GtagCommand, string, EventParams | CustomParams]

  type GtagCommand = 'config' | 'set' | 'js' | 'event' | 'consent'

  interface EventParams {
    [key: string]: unknown
  }

  interface CustomParams {
    [key: string]: unknown
  }

  type EventName = 'click' | 'submit' | 'purchase' | 'page_view' | 'screen_view'
  // Add other standard event names as needed
}

export type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export type GtagConsentObject = {
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
  ad_storage?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
  wait_for_update?: number
}
