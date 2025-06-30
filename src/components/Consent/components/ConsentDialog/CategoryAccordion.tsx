'use client'
import { useState } from 'react'
import { Stack, Typography, Box, Checkbox } from '@mui/material'
import useConsentProvider from '../../hooks/useConsentProvider'
import CategoryProductList from './CategoryProductList'
import { ConsentObject } from '../../types/types.consent'

const CategoryAccordion = () => {
  const { data, handleChange } = useConsentProvider()
  const [open, setOpen] = useState<null | keyof ConsentObject>(null)

  const handleExpandClick = (label: keyof ConsentObject) => {
    if (label === open) setOpen(null)
    else setOpen(label)
  }
  const handleConsentClick = (label: keyof ConsentObject) => () => {
    handleChange([label], !data[label].checked)
  }

  return (
    <Stack direction={'column'} alignItems={'flex-start'} my={4} spacing={2}>
      {Object.keys(data).map((label) => (
        <Box key={label} sx={{ display: 'flex', gap: '8px', width: '100%', cursor: 'pointer' }}>
          <Box mt={-1.5}>
            <Checkbox
              onClick={handleConsentClick(label)}
              checked={data[label].checked}
              disabled={data[label].disabled}
            />
          </Box>

          <Box>
            <Box onClick={handleConsentClick(label)}>
              <Typography
                sx={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.2, mb: -0.5 }}
                component={'h3'}
              >
                {data[label].name}
              </Typography>
              <Typography sx={{ fontSize: '.85rem' }}>{data[label].desc}</Typography>
            </Box>

            {data[label].details && data[label].details.length > 0 && (
              <CategoryProductList label={label} open={open} onClick={handleExpandClick} />
            )}
          </Box>
        </Box>
      ))}
    </Stack>
  )
}
export default CategoryAccordion
