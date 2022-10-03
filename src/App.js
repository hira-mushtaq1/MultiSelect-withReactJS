import "./App.css";
import PropertyBar from "./components/PropertyBar";
import styled from "styled-components";
import Add from "./components/Add";
import Add2 from "./components/Add2";
import Typography from "@mui/material/Typography";
import Cards from "./components/Card";
import TryOlx from "./components/TryOlx";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import { Box, ToggleButton, Select, MenuItem } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";

import { useState, useEffect } from "react";

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
`;

const Sell = styled.div`
  margin-left: 20px;
`;

const Wrapper = styled.div`
  padding: 0px 120px 0px 120px;
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const adsData = [
    {
      id: 1,
      addTitle: "tecno camon 19 neo",
      price: "Rs 35,000",
      location: "Township - Sector B1",
      city: "Lahore",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/290410516-240x180.webp",
    },
    {
      id: 2,
      addTitle: "Toyota Hilux Revo 3.0 Euro1 2017",
      price: "Rs 6,990,000",
      location: "PECHS",
      city: "Karachi",
      country: "Pakistan",
      category: "Vehicles",
      imgSrc: "https://images.olx.com.pk/thumbnails/288287008-240x180.webp",
    },
    {
      id: 3,
      addTitle: "LENOVO i5 5TH Laptop.",
      price: "Rs 23,000",
      location: "Manzoor Colony - Sector D",
      city: "Karachi",
      country: "Pakistan",
      category: "Computers and Laptop",
      imgSrc: "https://images.olx.com.pk/thumbnails/285344418-240x180.webp",
    },
    {
      id: 4,
      addTitle: "Civic prismatic 2002",
      price: "Rs 900,000",
      location: "New Karachi - Sector 4",
      city: "Karachi",
      country: "Pakistan",
      category: "Vehicles",
      imgSrc: "https://images.olx.com.pk/thumbnails/287026579-240x180.webp",
    },
    {
      id: 5,
      addTitle: "Iphone 13 Pro Max 128gb with Box",
      price: "Rs 228,500",
      location: "DHA Phase 6",
      city: "Lahore",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/289190423-240x180.webp",
    },
    {
      id: 6,
      addTitle: "KIA CLASSIC 2000 MODEL",
      price: "Rs 525,000",
      location: "Mozang",
      city: "Lahore",
      country: "Pakistan",
      category: "Vehicles",
      imgSrc: "https://images.olx.com.pk/thumbnails/289190679-240x180.webp",
    },
    {
      id: 7,
      addTitle: "vivo v19",
      price: "Rs 40,000",
      location: "Shera Kot",
      city: "Lahore",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/290372877-240x180.webp",
    },
    {
      id: 8,
      addTitle: "Iphone 7 plus 32gb",
      price: "Rs 32,000",
      location: "Clifton Cantonment",
      city: "Karachi",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/289192708-240x180.webp",
    },
    {
      id: 9,
      addTitle: "honda 125",
      price: "Rs 95,000",
      location: "Others",
      city: "Faisalabad",
      country: "Pakistan",
      category: "Vehicles",
      imgSrc: "https://images.olx.com.pk/thumbnails/289073344-240x180.webp",
    },
    {
      id: 10,
      addTitle: "google pixel 6 pro",
      price: "Rs 120,000",
      location: "Nadia Ghee Mill Chowk",
      city: "Lahore",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/289191335-240x180.webp",
    },
    {
      id: 11,
      addTitle: "Oppo F19 6/128",
      price: "Rs 26,000",
      location: "Behar Colony",
      city: "Karachi",
      country: "Pakistan",
      category: "Phones and Tablets",
      imgSrc: "https://images.olx.com.pk/thumbnails/289193332-240x180.webp",
    },
    {
      id: 12,
      addTitle: "Suzuki Alto 1000cc full original",
      price: "Rs 650,000",
      location: "Garden West",
      city: "Karachi",
      country: "Pakistan",
      category: "Vehicles",
      imgSrc: "https://images.olx.com.pk/thumbnails/288868974-240x180.webp",
    },
    {
      id: 13,
      addTitle: "6 person wooden dining set",
      price: "Rs 41,000",
      location: "Azeem Town",
      city: "Rawalpindi",
      country: "Pakistan",
      category: "Furniture",
      imgSrc: "https://images.olx.com.pk/thumbnails/288110716-240x180.webp",
    },
    {
      id: 14,
      addTitle: "Orignal Dining Table With 8 Chairs",
      price: "Rs 110,000",
      location: "Johar Town",
      city: "Lahore",
      country: "Pakistan",
      category: "Furniture",
      imgSrc: "https://images.olx.com.pk/thumbnails/288879067-240x180.webp",
    },
  ];

  const locations = [
    {
      country: "Pakistan",
      city: "Lahore",
    },
    {
      country: "Pakistan",
      city: "Karachi",
    },
    {
      country: "Pakistan",
      city: "Islamabad",
    },
    {
      country: "Pakistan",
      city: "Faislabad",
    },
  ];

  // state for input value
  const [cardState, setCardState] = useState("");

  // state for main data
  const [newState, setNewState] = useState([...adsData]);

  // state for togglebutton
  const [filteredlist, setfilteredlist] = useState([]);

  // state for multi select list
  const [list, setList] = useState([]);

  // state for cards
  let [cardStatus, setCardStatus] = useState();

  let categories = () => {
    let categoryList = newState.map((x, i) => x.category);
    categoryList = [...new Set([...categoryList])];
    setfilteredlist([...categoryList]);
    console.log(categoryList);
  };

  useEffect(() => {
    categories();
  }, []);

  function filterCards(filterCriteria) {
    // let c = list.map((e) => e);
    let b = adsData.filter(
      (x) =>
        x.category.includes(filterCriteria) ||
        x.addTitle.toLowerCase().includes(filterCriteria) ||
        x.city.includes(filterCriteria) ||
        x.country.includes(filterCriteria)
      // x.category.includes(c)
    );
    setNewState(b);
  }

  cardStatus = newState.map((v, i) => (
    <Cards
      addTitle={v.addTitle}
      price={v.price}
      location={v.location}
      city={v.city}
      imgSrc={v.imgSrc}
      key={i}
    />
  ));

  cardStatus == ""
    ? (cardStatus = (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png"
            alt=""
          />
        </div>
      ))
    : null;

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f7f8f8",
          width: "100%",
        }}
      >
        <Wrapper style={{ marginBottom: 20 }}>
          <PropertyBar />
        </Wrapper>

        <Wrapper>
          <Wrapper2>
            <svg height="35" viewBox="0 0 36.289 20.768" alt="Olx logo">
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
            </svg>

            <div>
              <div>
                <Select
                  defaultValue="Pakistan"
                  style={{ marginLeft: 30, outline: "2px solid black" }}
                  onChange={(e) => {
                    setCardState(e.target.value);
                    setCardStatus(filterCards(cardState));
                    console.log(e.target.value);
                  }}
                  sx={{
                    paddingRight: 15,
                    paddingTop: 0,
                    paddingBottom: 0,
                    backgroundColor: "white",
                  }}
                  renderValue={(value) => {
                    return (
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <SvgIcon color="lightgrey">
                          <SearchOutlinedIcon />
                        </SvgIcon>
                        {value}
                      </Box>
                    );
                  }}
                >
                  <MenuItem
                    value={""}
                    style={{ padding: "20px 20px 20px 20px" }}
                  >
                    <MyLocationRoundedIcon
                      color="primary"
                      style={{ marginRight: 10 }}
                    />
                    Use Current Location
                  </MenuItem>
                  <MenuItem
                    value={"Pakistan"}
                    style={{ padding: "15px 15px 15px 20px" }}
                  >
                    <FmdGoodOutlinedIcon style={{ marginRight: 10 }} />
                    See ads in all Pakistan
                  </MenuItem>
                  <MenuItem
                    disabled
                    value=""
                    style={{ padding: "15px 15px 15px 20px" }}
                  >
                    <p style={{ fontSize: 12 }}>CHOOSE REGION</p>
                  </MenuItem>
                  {locations.map((values, i) => (
                    <MenuItem
                      style={{ padding: "15px 15px 15px 20px" }}
                      key={i}
                      value={values.city}
                    >
                      <FmdGoodOutlinedIcon style={{ marginRight: 10 }} />
                      {values.city}, {values.country}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Wrapper2>
                <Paper
                  className="searchBar"
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 650,
                    border: "2px solid black",
                    marginLeft: 2,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    style={{ padding: 0 }}
                    placeholder="Find Cars, Mobile Phones and more..."
                    onChange={(e) => {
                      setCardState(e.target.value);
                      setCardStatus(filterCards(cardState));
                      console.log("a");
                    }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchOutlinedIcon />
                  </IconButton>
                </Paper>
                <div>
                  <Link
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: 30,
                    }}
                    href="#"
                  >
                    Login
                  </Link>
                </div>
                <Sell>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="48"
                    viewBox="0 0 1603 768"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058S231.721 16.943 434.442 16.943z"
                      fill="#fff"
                    />
                    <AddIcon fontSize="small" />
                    <path
                      d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-.016-.014C139.407 542.352 99.766 464.914 99.766 383.997c0-41.07 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845C18.8 280.243 6.201 331.224 6.201 383.997c0 104.027 50.962 203.61 139.799 273.175h.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783H427.237z"
                      fill="#ffce32"
                    />
                    <path
                      d="M1318.522 38.596c-45.72-14.369-93.752-21.658-142.762-21.658H427.249c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829 44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.01-97.197-67.703-154.957-85.852z"
                      fill="#23e5db"
                    />
                    <path
                      d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88a251.85 251.85 0 01-11.214 74.363c-38.348 124.311-168.398 211.129-316.262 211.129H726.949l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498a323.69 323.69 0 0014.423-95.559c0-98.044-43.805-190.216-123.317-259.551z"
                      fill="#3a77ff"
                    />
                  </svg>
                </Sell>
              </Wrapper2>
            </div>
          </Wrapper2>
          <Box sx={{ padding: "10px" }}>
            {filteredlist.map((item, id) => (
              <ToggleButton
                key={id}
                value={item}
                onClick={(e) => {
                  setCardState(e.target.value);
                  console.log(cardState);
                  setCardStatus(filterCards(cardState));
                  list.includes(e.target.value) === false
                    ? list.push(e.target.value)
                    : null;
                  setList([...list]);
                  console.log(list);
                }}
                sx={{
                  marginX: "10px",
                  backgroundColor: "rgb(58, 119, 255);",
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                {item}
              </ToggleButton>
            ))}
          </Box>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <Add />
        </Wrapper>
      </div>
      <Wrapper>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ margin: "40px 0px 20px 0px" }}
        >
          Fresh Recommendations
        </Typography>
      </Wrapper>

      <Wrapper>{cardStatus}</Wrapper>

      <div>
        <Add2 />
      </div>

      <div>
        <TryOlx />
      </div>
    </div>
  );
}

export default App;
