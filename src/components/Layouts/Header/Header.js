import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const header = props => {
  return (
    <Toolbar>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>Open Ex</Toolbar>
        </AppBar>
      </ElevationScroll>
    </Toolbar>
  );
};

export default header;
