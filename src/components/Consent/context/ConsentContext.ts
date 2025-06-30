import { createContext } from 'react'
import { ConsentObject } from '../types/types.consent'

export type ConsentContext = {
  dialog: {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
  }

  data: ConsentObject

  handleChange: (
    path: [label: keyof ConsentObject] | [label: keyof ConsentObject, index: number],
    newValue: boolean,
  ) => void
  handleSubmit: () => void
  handleAcceptAll: () => void
}
export const ConsentContext = createContext({} as ConsentContext)
