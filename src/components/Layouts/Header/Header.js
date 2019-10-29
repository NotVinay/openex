import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ElevationScroll from "./ElevationScroll/ElevationScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../../assets/logo.svg";
import classes from "./Header.module.css";

class Header extends Component {
  state = {
    mobileMoreAnchorEl: null
  };
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  render() {
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem><NavLink to="/">Converter</NavLink></MenuItem>
        <MenuItem><NavLink to="/">Statistics</NavLink></MenuItem>
        <MenuItem><NavLink to="/">About</NavLink></MenuItem>
      </Menu>
    );
    return (
      <Toolbar>
        <ElevationScroll {...this.props}>
          <AppBar color="inherit">
            <Toolbar>
              <img src={logo} width="125px" />
              <div className={classes.Grow} />
              <div className={classes.SectionDesktop}>
                <NavLink to="/">Converter</NavLink>
                <NavLink to="/">Statistics</NavLink>
                <NavLink to="/">About</NavLink>
              </div>
              <div className={classes.SectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  Menu
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        {renderMobileMenu}
      </Toolbar>
    );
  }
}

export default Header;
