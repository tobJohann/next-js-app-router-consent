'use client'
import { ReactNode } from 'react'
import ConsentDialog from '../components/ConsentDialog'

import useConsentLogic from '../hooks/useConsentLogic'
import { ConsentContext } from './ConsentContext'

interface ConsentProviderProps {
  children: ReactNode
}

const ConsentProvider: React.FC<ConsentProviderProps> = ({ children }) => {
  const ctx = useConsentLogic()

  return (
    <ConsentContext.Provider value={ctx}>
      {children}
      <ConsentDialog />
    </ConsentContext.Provider>
  )
}
export default ConsentProvider
