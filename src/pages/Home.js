import React from "react";
import UserLayOut from "../components/userLayOut/UserLayOut";
import Blogs from "../components/Blogs/Blogs";
import { Container } from "@mui/material";
import Slider from "../components/Slider/Slider";
import Parallax from "../components/Parallax/Parallax";
import ProductCard from "../components/ProductCard/ProductCard";
import WhatsAppIcon from "../components/WhatsApp/WhatsApp";

const Home = () => {
  return (
    <UserLayOut>
        <Parallax/>
        {/* <ProductCard/> */}
      <Container>
      
        <Blogs />
      </Container>
    {/* <WhatsAppIcon/> */}
      <Slider/>
    </UserLayOut>
  );
};

export default Home;
