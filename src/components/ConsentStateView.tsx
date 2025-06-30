'use client'

import { Button, Stack } from '@mui/material'
import useConsentDialog from '@/components/Consent/hooks/useConsentDialog'
import useConsentProvider from '@/components/Consent/hooks/useConsentProvider'

const ConsentStateView = () => {

  const dialog = useConsentDialog()
  const consent = useConsentProvider()

  const data =
    Object.keys( consent.data ).map( key => ({ name: key, accepted: consent.data && consent.data[key].checked }) )


  return <Stack direction={'row'} spacing={2} justifyContent={'center'} my={3}>
    <Button onClick={dialog.toggle}>Toggle Consent Dialog</Button>
    {data.map( ( cookie, index ) =>
      <Button color={cookie.accepted ? 'success' : 'error'} key={index}>{cookie.name}</Button> )}
  </Stack>

}
export default ConsentStateView
