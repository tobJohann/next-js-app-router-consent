import { useEffect, useState } from 'react'
import { data as defaultCookieData } from '../data'
import { ConsentObject } from '@/components/features/Consent/types/types.consent'
import { ConsentContext } from '@/components/features/Consent/context/ConsentContext'
import { handleGoogleConsent } from '@/components/features/Consent/lib/utils.tracking'
import { map } from '@/components/features/Consent/lib/map'
import {
  loadConsentFromStorage,
  saveConsentToStorage,
} from '@/components/features/Consent/lib/syncLocalStorage'

const useConsentLogic = (): ConsentContext => {
  const [data, setData] = useState(defaultCookieData)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const storedConsentData = loadConsentFromStorage(data)
    if (storedConsentData) {
      setData(storedConsentData)
      handleSubmit()
    } else setOpen(true)
  }, [])

  useEffect(() => {
    saveConsentToStorage(data)
  }, [data])

  const dialog = {
    isOpen: open,
    toggle: () => setOpen((prev) => !prev),
    close: () => setOpen(false),
    open: () => setOpen(true),
  }

  const handleDetailUpdate = (
    path: [label: keyof ConsentObject, index: number],
    newValue: boolean,
  ) => {
    const [label, index] = path
    const categoryDetails = data[label].details
    if (!categoryDetails || data[label].disabled) return null

    const updatedDetails = categoryDetails.map((d, i) =>
      i === index ? { ...d, checked: newValue } : d,
    )
    const allChecked = updatedDetails.every((d) => d.checked)
    const noneChecked = updatedDetails.every((d) => !d.checked)

    setData({
      ...data,
      [label]: {
        ...data[label],
        checked: allChecked,
        indeterminate: !allChecked && !noneChecked,
        details: updatedDetails,
      },
    })
  }

  const handleCategoryUpdate = (label: keyof ConsentObject, newValue: boolean) => {
    if (data[label].disabled) return null
    setData({
      ...data,
      [label]: {
        ...data[label],
        indeterminate: false,
        checked: newValue,
        details: data[label].details?.map((d) => ({ ...d, checked: newValue })),
      },
    })
  }

  const handleChange = (
    path: [label: keyof ConsentObject] | [label: keyof ConsentObject, index: number],
    newValue: boolean,
  ) => {
    const [label] = path
    if (path.length === 1) handleCategoryUpdate(label, newValue)
    else if (path.length === 2) handleDetailUpdate(path, newValue)
  }

  const handleAcceptAll = () => {
    const updated: ConsentObject = {}

    for (const [label, category] of Object.entries(data)) {
      if (category.disabled) {
        updated[label] = category
        continue
      }

      updated[label] = {
        ...category,
        checked: true,
        indeterminate: false,
        details: category.details?.map((d) => ({ ...d, checked: true })),
      }
    }

    setData(updated)
    handleSubmit()
  }
  const handleSubmit = () => {
    handleGoogleConsent({
      analytics_storage: map('statistics' in data && data.statistics.checked),
      ad_storage: map('marketing' in data && data.marketing.checked),
      ad_user_data: map('marketing' in data && data.marketing.checked),
      ad_personalization: map('marketing' in data && data.marketing.checked),
    })

    dialog.close()
  }

  return { data, dialog, handleChange, handleSubmit, handleAcceptAll }
}
export default useConsentLogic
