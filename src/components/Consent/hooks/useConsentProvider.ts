import { useContext } from 'react'
import { ConsentContext } from '../context/ConsentContext'

const useConsentProvider = () => {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsentProvider must be used within a ConsentProvider')
  return ctx
}
export default useConsentProvider
