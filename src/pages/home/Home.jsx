import React, { Component } from "react";
import "./Home.scss";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import AboutUs from "./components/about_us/AboutUs";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Header></Header>
        <Menu></Menu>
        <AboutUs></AboutUs>
      </div>
    );
  }
}
