import React from "react";
import { Divider, Box, Container } from "@chakra-ui/react";

const SobreNosotros = () => {
  return (
    <Container maxW="2xl" bg="blue.900" centerContent>
      <Box bg="LightSteelBlue" w="99%" p={4} color="black">
        <h2>Sobre Nosotros</h2>
        <Divider orientation="horizontal" />

        <p>
          Esta aplicación de lista de tareas fue desarrollada con el objetivo de
          ayudarte a organizar y realizar un seguimiento de tus tareas diarias.
          Con esta aplicación, podrás agregar, eliminar y marcar tus tareas como
          completadas.
        </p>
        <p>
          La aplicación fue desarrollada utilizando las siguientes tecnologías:
        </p>
        <ul>
          <li>
            React: Una biblioteca de JavaScript para construir interfaces de
            usuario.
          </li>
          <li>
            React Router: Una biblioteca para la navegación dentro de una
            aplicación React.
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default SobreNosotros;
