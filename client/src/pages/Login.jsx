import React, { useContext , useEffect } from 'react'
import { Typography , Button } from '@mui/material'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { AuthContext } from '../context/AuthProvider'
import {useNavigate} from 'react-router-dom'
 
const Login = () => {
  const auth = getAuth()

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
 
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    console.log({res}, ['from Login.jsx']);
  }

  useEffect(() => {
    if (user?.uid) {
      navigate('/')
    }
  }, [user, navigate])

  return (
   <>
   <Typography variant='h5' sx={{mb: '10px'}}>Welcome to note app</Typography>
    <Button variant='outlined' onClick={handleLoginWithGoogle}>Login with Google</Button>
   </>
  )
}

export default Login