import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Menus = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem my={1} margin={3}>
        <BreadcrumbLink href="#">
          <Link to="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem my={1} margin={3}>
        <BreadcrumbLink href="#">
          <Link to="/tareas">Tareas</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem my={1} margin={3}>
        <BreadcrumbLink href="#">
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Menus;
