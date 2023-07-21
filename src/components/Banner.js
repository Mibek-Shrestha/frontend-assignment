import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Sweety from "../assets/one.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Punky Junky
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Your Style, Your Way
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" md={4}>
        Explore Our Stunning Collection
      </Typography>
      <Button
        variant="contained"
        color="error"
        href=""
        sx={{
          backgroundColor: "#FF2625",
          padding: "10px",
        }}
      >
        New Stock
      </Button>

      <img
        src={Sweety}
        alt="sweet hert photo"
        style={{
          position: "relative",
          right: "-500px",
          top: "-130px",
          width: "700px",
          height: "630px",
          marginTop: "-330px",
          backgroundSize: "cover",
        }}
      />
      <br />
    </Box>
  );
};

export default HeroBanner;
