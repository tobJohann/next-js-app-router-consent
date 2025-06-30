'use client'

import { ConsentObject } from '../../types/types.consent'
import useConsentProvider from '../../hooks/useConsentProvider'
import { Box, Collapse, IconButton, Stack, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import CookieDetailTable from '@/components/features/Consent/components/ConsentDialog/CookieDetailTable'

type Props = {
  label: keyof ConsentObject
  open: null | keyof ConsentObject
  onClick?: (label: keyof ConsentObject) => void
}

const CategoryDetailList: React.FC<Props> = ({ label, open, onClick }) => {
  const { data } = useConsentProvider()
  const details = data[label].details
  if (!details) return null

  const isOpen = label === open

  const handleClick = () => {
    if (onClick) onClick(label)
  }

  return (
    <>
      <Box
        sx={{
          cursor: 'pointer',
          ml: -1.5,
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
        onClick={handleClick}
      >
        <IconButton
          sx={{
            transform: `rotate(${isOpen ? 45 : 0}deg)`,
            transition: 'all 250ms ease-in-out',
          }}
        >
          <Add sx={{ fill: 'var(--mui-palette-primary-main)' }} />
        </IconButton>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontSize: '.85rem',
            color: 'primary.main',
          }}
        >
          weitere Informationen
        </Typography>
      </Box>
      <Collapse in={isOpen}>
        <Stack direction={'column'} alignItems={'flex-start'} spacing={1} px={2} py={1}>
          {details.map((_, i) => (
            <CookieDetailTable key={i} path={[label, i]} />
          ))}
        </Stack>
      </Collapse>
    </>
  )
}
export default CategoryDetailList
