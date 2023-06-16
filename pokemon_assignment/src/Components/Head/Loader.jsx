import React from 'react'
import loader from '../Image/loader.gif'
import { Image } from '@chakra-ui/react'
export const Loader = () => {
  return (
    <Image
      src={loader}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}
