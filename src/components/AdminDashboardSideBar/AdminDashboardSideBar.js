import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFillPostcardFill } from "react-icons/bs";
import "./style.css"

import { Link, NavLink } from "react-router-dom";

const sideBarLink = [
  {
    title: "DashBoard",
    link: "/admin/dashboard",
    tab:1
  },
  {
    title: "create post",
    link: "/admin/create-post",
    tab:2
  },
];

const AdminDashboardSideBar = ({ showSideBar, data }) => {

  const [tab, setTab]= useState(1)

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: "#fff",
          transition: "all .3s linear",
          width: showSideBar ? "70px" : "300px",
          padding: "99px 10px",
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        {sideBarLink.map((data, index) => {
          return (
            <>
              <Box
                key={data.title}
                sx={{
                  display: "flex",
                  padding: "10px",
                  borderRadius: "5px",
                  background: "#99baee75",

                  gap: "40px",
                  // justifyContent: "flex-start",
                  alignItems: "center",
                  textAlign: "center",
                }}


                // className={`active-link ${tab===1&&"active1"} ${ tab===2&&"active2"}`}
              >
                <NavLink
                  to={data.link}
                  style={{display: "flex", borderRadius:"5px", textDecoration:"none", gap: "40px",padding: "10px",background:"#99baee75", alignItems: "center", width: "100%", cursor: "pointer" }}
                >
                  {index === 0 && (
                    <LuLayoutDashboard
                      style={{
                        color: "#7DA9CE",
                        fontSize: "30px",
                        transform: "scale(1)",
                        fontWeight: 700,
                      }}
                    />
                  )}
                   {index === 1 && (
                    <BsFillPostcardFill
                      style={{
                        color: "#7DA9CE",
                        fontSize: "30px",
                        transform: "scale(1)",
                        fontWeight: 700,
                      }}
                    />
                  )}

                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "rgb(53, 53, 155)",
                      transition: "all .3s linear",
                      display: showSideBar ? "none" : "flex",
                    }}
                  >
                    {data.title}
                  </Typography>
                </NavLink>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default AdminDashboardSideBar;
