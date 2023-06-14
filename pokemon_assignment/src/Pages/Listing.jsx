import { Box, Image, Img, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Badge } from '@chakra-ui/react'
import { ListCards } from './ListCards'

export const Listing = () => {
    const [load,setLoad]=useState(false)
    const [pokedata,setPokedata]=useState([])
    const [base, setBase] = useState(
        "https://pokeapi.co/api/v2/pokemon/?limit=10"
      );
      const [next,setNext]=useState()
      const [prev,setPrev]=useState()

    useEffect(() => {
        setLoad(true)
        fetch(base).then(res=>res.json()).then(res=>{
            setNext(res.next);
             setPrev(res.previous);
            
            getdetails(res.results)
            // console.log(res.results)
            setLoad(false);
        }).catch(err=>{
            console.log(err)
        })
    }, [base])

    const getdetails=(res)=>{
        res.map((el) => {
            fetch(el.url)
              .then((res) => res.json())
              .then((res) => {
              
                setPokedata((el) => {
                  el = [...el, res];
                  el.sort((a,b)=>a-b)
                  console.log("el:",el)
                  return el;
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
    }
  return (
    <Box className={style.list}>
        <Badge variant='solid' colorScheme='green'>
        Listing
        </Badge>
        {load===true ? <h1>...loading</h1> 
        : 
        (
           <Box className={style.card}>
            { pokedata.length && pokedata.map((el)=>{
            return <ListCards {...el} key={el.id}/>
        })}
           </Box>
        )
        }
    </Box>
  )
}
