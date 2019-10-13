import React from "react";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
const layout = props => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <Container>
        <Box my={2}>
          {/* {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")} */}
        </Box>
      </Container>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
