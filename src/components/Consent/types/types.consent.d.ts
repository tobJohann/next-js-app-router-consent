export type ConsentObject = {
  [x: string]: CookieCategory
}
export type CookieCategory = {
  disabled?: boolean
  checked: boolean
  indeterminate?: boolean
  name: string
  desc: string
  details?: ProductCookie[]
}
export type ProductCookie = {
  checked: boolean
  name: string
  cookies: string[]
  provider: string
  reason: string
  duration: string
  policy?: string
  consent_name: string
}
export type StoredConsent = {
  [category: string]: {
    checked: boolean
    details?: boolean[]
  }
}
