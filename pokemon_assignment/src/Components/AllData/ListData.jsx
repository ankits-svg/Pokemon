import {
  Box,
  Button,
  Fade,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Character } from "./Character";
import { SingleCard } from "./SingleCard";

export const ListData = () => {
  const [loading, setLoading] = useState(true);
  const [pokedata, setPokedata] = useState([]);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [base, setBase] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=10"
  );
 
//   const [find,setFind]=useState({})
  // console.log("pokedata:",pokedata)

  const getData = () => {
    setLoading(true)
    fetch(base)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setNext(res.next);
        setPrev(res.previous);
        // setPk(res.results)
        InsideData(res.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const InsideData = (res) => {
    res.map((el) => {
      fetch(el.url)
        .then((res) => res.json())
        .then((res) => {
          // console.log("res.url:",res)
          setPokedata((el) => {
            el = [...el, res];
            return el;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  useEffect(() => {
    getData();
  }, [base]);
// let match;
//   const searchByName=()=>{
//     console.log("pokedata:",pokedata)
//      match=pokedata.filter((el)=>el.name.includes(name))
//     console.log(match)
//     // setFind(match)
//     // getData(match)
//   }
  return (
    <Box className="list">
      
      <Box className="page">
        {prev && (
          <Button
            color="white"
            colorScheme="cyan"
            onClick={() => {
              setPokedata([]);
              setBase(prev);
            }}
          >
            Prev
          </Button>
        )}
        {/* <Text>0 of total</Text> */}
        {next && (
          <Button
            color={"white"}
            colorScheme="cyan"
            onClick={() => {
              setPokedata([]);
              setBase(next);
            }}
          >
            Next
          </Button>
        )}
      </Box>
      <Character pokedata={pokedata} loading={loading} />
    </Box>
  );
};
