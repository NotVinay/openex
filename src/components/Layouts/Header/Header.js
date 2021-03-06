import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ElevationScroll from "./ElevationScroll/ElevationScroll";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import logo from "../../../assets/logo.svg";
import MoreIcon from "@material-ui/icons/MoreVert";
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
        <MenuItem>
          <NavLink
            to="/"
            activeStyle={{
              color: "#26a69a"
            }}
            className={classes.NavLink}
            exact
          >
            Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/converter"
            activeStyle={{
              color: "#26a69a"
            }}
            className={classes.NavLink}
          >
            Converter
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/historical-rates"
            activeStyle={{
              color: "#26a69a"
            }}
            className={classes.NavLink}
          >
            Historical Rates
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/about"
            activeStyle={{
              color: "#26a69a"
            }}
            className={classes.NavLink}
          >
            About
          </NavLink>
        </MenuItem>
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
                <NavLink
                  to="/"
                  activeStyle={{
                    color: "#26a69a"
                  }}
                  className={classes.NavLink}
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/converter"
                  activeStyle={{
                    color: "#26a69a"
                  }}
                  className={classes.NavLink}
                >
                  Converter
                </NavLink>
                <NavLink
                  to="/historical-rates"
                  activeStyle={{
                    color: "#26a69a"
                  }}
                  className={classes.NavLink}
                >
                  Historical Rates
                </NavLink>
                <NavLink
                  to="/about"
                  activeStyle={{
                    color: "#26a69a"
                  }}
                  className={classes.NavLink}
                >
                  About
                </NavLink>
              </div>
              <div className={classes.SectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
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
