'use client'
import useConsentProvider from './useConsentProvider'

const useConsentDialog = () => {
  const { dialog } = useConsentProvider()
  return dialog
}
export default useConsentDialog
