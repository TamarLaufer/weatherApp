import React, { useState } from "react";
import lightLogo from "../logo3-removebg.png";
import darkLogo from "../logo4-removebg.png";
import "../style/header.css";
import "../style/darkModeStyle.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShowCelsius,
  toggleShowCelsius,
  selectDarkTheme,
  toggleDarkTheme,
} from "../features/counter/counterSlice";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import screenNames from "../utils/screenNames";

const Header = () => {
  const dispatch = useDispatch();
  const showCelsiusFlag = useSelector(selectShowCelsius);
  const showThemeFlag = useSelector(selectDarkTheme);
  const divId = showThemeFlag ? "darkMode" : "lightMode";
  const toggleSwitcher = () => {
    return dispatch(toggleShowCelsius());
  };

  const toggleSwitcherTheme = () => {
    return dispatch(toggleDarkTheme());
  };

  const renderImage = (lightMode) => {
    return lightMode ? darkLogo : lightLogo;
  };
  return (
    <div className='navbar-container' id={divId}>
      <div className='logo-container'>
        <Link to={screenNames.home}>
          <img
            src={renderImage(showThemeFlag)}
            width='100'
            height='90'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Link>
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={showCelsiusFlag}
              onChange={toggleSwitcher}
              name='checkedB'
              color='primary'
            />
          }
          label='Show Celsius'
        />
        <FormControlLabel
          control={
            <Switch
              checked={showThemeFlag}
              onChange={toggleSwitcherTheme}
              name='checkedB'
              color='primary'
            />
          }
          label='Dark/Light'
        />
      </div>
      <div></div>
      <div className='buttons-container'>
        <Link to={screenNames.home}>
          <button type='button' className='home'>
            Home
          </button>
        </Link>
        <Link to={screenNames.favorite}>
          <button type='button' className='favirites'>
            Favirites
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
