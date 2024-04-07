"use client"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Box from "@mui/material/Box"
import React from "react"
import CurrentDate from "@/components/utilities/CurrentDate"
import SearchIcon from "@mui/icons-material/Search"
import { InputBase, alpha, styled } from "@mui/material"
import HotDishes from "@/components/menus/hot_dishes"
import ColdDishes from "@/components/menus/cold_dishes"
import RightBar from "@/components/RightBar"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("sm")]: {
      width: "23ch",
    },
  },
}))

const Home = () => {
  const [value, setValue] = React.useState("1")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <div className="flex">
        <div className="flex flex-col  h-screen ms-28">
          <h1 className="font-semibold text-3xl px-4 py-5">Made Resto</h1>

          <div className="flex justify-between mt-4">
            <CurrentDate />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for food,coffe,etc..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>

          <Box sx={{ width: "100%", color: "white" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="inherit"
                  sx={{
                    "& .Mui-selected": {
                      color: "#ff9800",
                    },
                  }}
                >
                  <Tab label="Hot Dishes" value="1" />
                  <Tab label="Cold Dishes" value="2" />
                  <Tab label="Soup" value="3" />
                  <Tab label="Grill" value="4" />
                  <Tab label="Appetizer" value="5" />
                  <Tab label="Dessert" value="6" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div>
                  <h3 className="text-lg">Choose Dishes</h3>
                  <HotDishes />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div>
                  <h3 className="text-lg">Choose Dishes</h3>
                  <ColdDishes />
                </div>
              </TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item 4</TabPanel>
              <TabPanel value="5">Item 5</TabPanel>
              <TabPanel value="6">Item 6</TabPanel>
            </TabContext>
          </Box>
        </div>
        <RightBar />
      </div>
    </>
  )
}

export default Home
