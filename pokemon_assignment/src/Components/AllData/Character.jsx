import React, { useState } from "react";
import { Loader } from "../Head/Loader";
import { Box, Button, Input } from "@chakra-ui/react";
import { SingleCard } from "./SingleCard";

export const Character = ({ pokedata, loading,match }) => {
//   console.log("load:", loading, pokedata);
const [name,setName]=useState('')

  return (
    <>
    <Box className="search">
        
          

        <Input 
        type="text" 
        placeholder="Search by name" 
        onChange={(e)=>setName(e.target.value)}
        autoFocus
        />
      
    </Box>
      {loading === true ? (
        <Loader />
      ) : (
        <Box className="singlecard">
            {pokedata.length > 0 &&
            pokedata.filter((el)=>el.name.includes(name)).map((el) => {
              return (
                <Box>
                <SingleCard
                  key={el.id}
                  el={el}
                  type={el.types[0].type.name}
                  image={el.sprites.other.dream_world.front_default}
                />
                
                </Box>
              );
            })}
        </Box>
      )}
    </>
  );
};
