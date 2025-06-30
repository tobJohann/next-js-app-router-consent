import { loadConsentFromStorage } from '@/components/Consent/lib/syncLocalStorage'
import { data as defaultCookieData } from '@/components/Consent/data'
import { useEffect, useState } from 'react'
import { ConsentObject } from '@/components/Consent/types/types.consent'
import useConsentProvider from '@/components/Consent/hooks/useConsentProvider'

const useConsentState = () => {
  'use client'
  const [ loading, setLoading ] = useState( true )
  const [ data, setData ] = useState<null | ConsentObject>( null )


  useEffect( () => {
    const storedConsentData = loadConsentFromStorage( defaultCookieData )
    setData( storedConsentData )
    setLoading( false )
  }, [] )

  return { loading, data }

}

export default useConsentState
