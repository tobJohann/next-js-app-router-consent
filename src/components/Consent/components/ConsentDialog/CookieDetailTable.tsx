import { ConsentObject } from '@/components/features/Consent/types/types.consent'
import useConsentProvider from '../../hooks/useConsentProvider'
import {
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
  Switch,
} from '@mui/material'

type Props = {
  path: [label: keyof ConsentObject, index: number]
}
const CookieDetailTable: React.FC<Props> = ({ path }) => {
  const { handleChange, data } = useConsentProvider()

  const [label, index] = path
  if (!data[label].details) return null
  const detail = data[label].details[index]
  const { checked, name, cookies, reason, provider, duration, policy } = detail

  const handleClick = () => {
    handleChange(path, !detail.checked)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableRow>
          <TableCell>Akzeptieren</TableCell>
          <TableCell>
            <Switch onClick={handleClick} checked={checked} disabled={data[label].disabled} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cookies</TableCell>
          <TableCell>{cookies.join(', ')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Anbieter</TableCell>
          <TableCell>{provider}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Zweck</TableCell>
          <TableCell>{reason}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cookie Laufzeit</TableCell>
          <TableCell>{duration}</TableCell>
        </TableRow>
        {policy && (
          <TableRow>
            <TableCell>Datenschutzerlkärung</TableCell>
            <TableCell>
              <Typography
                sx={{
                  textDecoration: 'underline',
                }}
                variant={'body2'}
                component={'a'}
                href={policy}
              >
                {policy}
              </Typography>
            </TableCell>
          </TableRow>
        )}
      </Table>
    </TableContainer>
  )
}

export default CookieDetailTable
