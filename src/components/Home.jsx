import React from "react";
import { Divider, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Divider my="2" orientation="horizontal" />
      <Center bg="LightSteelBlue" h="60px" color="black" fontSize={35}>
        BIENVENIDO
      </Center>
    </div>
  );
};

export default Home;
