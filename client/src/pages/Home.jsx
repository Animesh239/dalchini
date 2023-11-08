import React from 'react'
import UserMenu from '../components/UserMenu'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
     <Typography variant='h4' sx={{ mb: '20px' }}>
        Note App
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
        <UserMenu />
      </Box>
    </>
  )
}

export default Home