import React from "react";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";

const layout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <header>
        <Header />
      </header>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
