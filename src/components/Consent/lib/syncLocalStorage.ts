import { ConsentObject, StoredConsent } from '../types/types.consent'

export const LOCAL_STORAGE_KEY = 'consent-data'

const generateStorageObject = (consent: ConsentObject): StoredConsent => {
  const result: Record<string, { checked: boolean; details?: boolean[] }> = {}

  for (const [category, data] of Object.entries(consent)) {
    result[category] = {
      checked: data.checked,
      details: data.details?.map((d) => d.checked),
    }
  }

  return result
}
const mergeConsentWithStoredState = (
  defaultData: ConsentObject,
  storageData: StoredConsent,
): ConsentObject => {
  const result: ConsentObject = { ...defaultData }

  for (const [category, stored] of Object.entries(storageData)) {
    if (!result[category]) continue

    const categoryData = result[category]

    // Update category checked state
    categoryData.checked = stored.checked

    // Update detail checked states, if available
    if (Array.isArray(stored.details) && Array.isArray(categoryData.details)) {
      categoryData.details = categoryData.details.map((detail, i) => ({
        ...detail,
        checked: stored.details![i] ?? detail.checked,
      }))
    }

    // Set indeterminate if needed
    const details = categoryData.details
    if (details && details.length > 0) {
      const allChecked = details.every((d) => d.checked)
      const noneChecked = details.every((d) => !d.checked)
      categoryData.indeterminate = !allChecked && !noneChecked
    } else {
      categoryData.indeterminate = false
    }
  }

  return result
}

export const loadConsentFromStorage = (defaultConsent: ConsentObject): ConsentObject | null => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!stored) return null
    return mergeConsentWithStoredState(defaultConsent, JSON.parse(stored))
  } catch {
    return null
  }
}

export const saveConsentToStorage = (consent: ConsentObject) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(generateStorageObject(consent)))
  } catch {
    console.warn('Could not save consent')
  }
}
