import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import icon from '../../../public/images/icon_xtragon.png';
// import menuIcon from '../../../public/images/manu-icon.png';
import "./NavBar.scss";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  menuToggle = () => {
    const { isMenuOpen } = this.state;
    this.setState({ ...this.state, isMenuOpen: !isMenuOpen });
  };

  render() {
    return (
      <div className="container">
        <Link to="/" className="icon-container">
          {/* <img src={icon} alt="icon_xtragon"/> */}
          icon
        </Link>
        <div className="links-container">
          {this.props.routes.map((item, i) => (
            <Link to={item.route} key={i}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-icon">
          {/* <img src={menuIcon} alt="menu-icon"/> */}
          <div onClick={this.menuToggle}>X</div>
        </div>
        {this.state.isMenuOpen && (
          <Fragment>
            <div className="side-menu-container">
              {this.props.routes.map((item, i) => (
                <Link className="link-container" to={item.route} key={i}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="transparent-layout" onClick={this.menuToggle}></div>
          </Fragment>
        )}
      </div>
    );
  }
}
