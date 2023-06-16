import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Booked } from "../Head/Booked";


export const SingleCard = ({ el, type, image }) => {
  // console.log("el",el)
  
  const [hover, setHover] = useState(false);
  const [booked, setBooked] = useState(false);
  const [count, setCount] = useState(0);
  let arr=JSON.parse(localStorage.getItem("bookmark")) || []
  const toast = useToast();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const style = `thumb-container ${type}`;

  const handleenter = () => {
    setHover(true);
  };
  const handleleave = () => {
    setHover(false);
  };

  const handleRemove = ({id}) => {
    
    setBooked(!booked);
    arr.splice(id, 1);
    localStorage.setItem("bookmark", JSON.stringify(arr));
    setCount(arr.length);
    toast({
      title: "Lift one Bookmarked Item",
      description: `You have bookmarked ${arr.length} item`,
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };
  const handleBooked = ({ id, name }) => {
    
    let obj = { id, name };
    if(arr.filter((el)=>el.id!==obj.id)){
      arr.push(obj)
      arr.sort((a,b)=>a.id-b.id)
      localStorage.setItem("bookmark", JSON.stringify(arr));
      // console.log("arr:",arr)
      setBooked(!booked)
      toast({
        title: "Bookmarked now",
        description: `You have bookmarked ${arr.length} item`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }else{
      toast({
        title: "Already Bookmarked",
        description: `You have bookmarked ${arr.length} item`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    
   
    
  };
  
  return (
    <Box
      className={hover ? "hover-effect" : ""}
      onMouseEnter={handleenter}
      onMouseLeave={handleleave}
    >
      <Box className={style}>
        <Box className="box1">
          <Box className="front">
            <Badge font-weight="bold" variant="outline" colorScheme="white">
              #{el.id}
            </Badge>
            <Image src={image} alt={el.name} />
          </Box>
          <Box className="back">
            <Badge colorScheme="white" textTransform="uppercase">
              {el.name}
            </Badge>
            <Box
              justifyContent={"space-around"}
              display={"flex"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Button
                _hover={{ bg: "teal", color: "white" }}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                colorScheme="yellow"
                color={"white"}
              >
                Read more..
              </Button>
              {/* <Booked/> */}
              {/* <i class="fa-solid fa-bookmark fa-spin fa-spin-reverse fa-2xs"></i> */}
              {booked === true ? (
                <i
                  class="fa-solid fa-bookmark fa-spin fa-spin-reverse fa-16xs"
                  onClick={() => handleRemove(el.id)}
                  id="book"
                ></i>
              ) : (
               
                <i
                  class="fa-regular fa-bookmark"
                  id="book"
                  onClick={() => handleBooked({ id: el.id, name: el.name })}
                ></i>
              )}
            </Box>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader className={style}>{el.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight={"bold"} textAlign={"center"}>
                    Details Card
                  </Text>
                  <Card>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            hp
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {el.stats[0].base_stat}
                          </Text>
                          <Progress
                            value={el.stats[0].base_stat}
                            size="xs"
                            colorScheme="pink"
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Experience
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {el.base_experience}
                          </Text>
                          <Progress
                            value={el.base_experience}
                            size="xs"
                            colorScheme="pink"
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            attack
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {el.stats[1].base_stat}
                          </Text>
                          <Progress
                            value={el.stats[1].base_stat}
                            size="xs"
                            colorScheme="pink"
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Special
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {el.stats[2].base_stat}
                          </Text>
                          <Progress
                            value={el.stats[2].base_stat}
                            size="xs"
                            colorScheme="pink"
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Defence
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {el.stats[3].base_stat}
                          </Text>
                          <Progress
                            value={el.stats[3].base_stat}
                            size="xs"
                            colorScheme="pink"
                          />
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
