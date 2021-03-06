import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import classes from "./Footer.module.css";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      Get latest exchange rates, every time!
      <br />
      {"Copyright © "}
      <Link>OpenEx</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <Copyright />
    </footer>
  );
};

export default Footer;
