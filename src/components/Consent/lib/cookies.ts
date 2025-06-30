export const setCookie = (name: string, value: string, options?: { days?: number }) => {
  let cookieString = `${name}=${encodeURIComponent(value)}; path=/;`

  if (options?.days) {
    const expires = new Date()
    expires.setTime(expires.getTime() + options.days * 24 * 60 * 60 * 1000)
    cookieString += ` expires=${expires.toUTCString()};`
  }

  document.cookie = cookieString
}

export const getCookie = (name: string): string | null => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.startsWith(nameEQ)) {
      return decodeURIComponent(c.substring(nameEQ.length))
    }
  }
  return null
}
