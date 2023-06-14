import { Badge, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from './style.module.css'

export const ListCards = ({name,abilities,sprites,id,game_indices
}) => {
  return (
    <Box key={name} className={style.card1}>
                    <Badge variant={'subtle'} colorScheme='green'>{name}</Badge>
                    {/* <Image src={sprites.back_default} alt={id}/> */}
                    <Text>Abilities 1:{abilities[0].ability.name}</Text>
                    <Text>Abilities 2:{abilities[1].ability.name}</Text>
                    <Text>Group:</Text>
                    <Text>Habitat:</Text>
                    <Text>Location:</Text>
                    <Text>Species:</Text>
                    </Box>
  )
}
// abilities,characteristics, group, habitat, location, Species etc.
