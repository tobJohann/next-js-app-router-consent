'use client'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import useConsent from '../../hooks/useConsentProvider'
import CategoryAccordion from '@/components/features/Consent/components/ConsentDialog/CategoryAccordion'

const ConsentDialog = () => {
  const { handleSubmit, handleAcceptAll, dialog } = useConsent()

  return (
    <Dialog open={dialog.isOpen} maxWidth={'md'}>
      <DialogTitle>Cookies</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography
            variant={'body2'}
            sx={{ a: { textDecoration: 'underline', color: 'primary.main' } }}
          >
            Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere
            uns helfen, diese Website und Ihre Erfahrung zu verbessern. Personenbezogene Daten
            können verarbeitet werden (z. B. IP-Adressen), z.B. für personalisierte Anzeigen und
            Inhalte oder Anzeigen- und Inhaltsmessung.
            <br />
            <br />
            Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer{' '}
            <Link href={'/datenschutz'}>Datenschutzerklärung</Link>. Sie können Ihre Auswahl
            jederzeit widerrufen oder anpassen.
          </Typography>
        </DialogContentText>
        <CategoryAccordion />
        <DialogActions sx={{ mt: 4 }}>
          <Button size={'small'} className={'consent-update'} onClick={handleSubmit}>
            Auswahl Speichern
          </Button>
          <Button
            size={'small'}
            className={'consent-update'}
            onClick={handleAcceptAll}
            variant={'contained'}
          >
            Alle akzeptieren
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
export default ConsentDialog
