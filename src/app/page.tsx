import {Box,Container, Typography } from '@mui/material'
import ConsentStateView from '@/components/ConsentStateView'

const Home =()=>{

return(
  <Box sx={{
    display: 'flex',alignItems:'center',justifyContent:'center',
    height:'100vh'
  }}>
    <Container>
      <Typography variant={'h1'} textAlign={'center'}>Hey there :) </Typography>
      <ConsentStateView/>
    </Container>
  </Box>
)
}
export default Home
