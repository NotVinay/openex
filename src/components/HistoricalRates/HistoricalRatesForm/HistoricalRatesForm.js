import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import * as classes from "./HistoricalRatesForm.module.css";
import SyncAltRoundedIcon from "@material-ui/icons/SyncAltRounded";

class ConverterForm extends Component {
  state = {
    from: "GB",
    to: "US",
    view: "W"
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleToggleChange = (event, newVal) => {
    if (newVal != null) {
      this.setState({ ...this.state, view: newVal });
    }
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          className={classes.Container}
        >
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} md={5}>
              <FormControl variant="outlined" className={classes.FormSelect}>
                <InputLabel htmlFor="from-currency"></InputLabel>
                <Select
                  id="from-currency"
                  select
                  label="from-currency"
                  value={this.state.from}
                  onChange={this.handleChange("from")}
                  helpertext="Please select your base Currency"
                  labelWidth={0}
                >
                  {this.props.countries.map(country => {
                    const currency = country.currencies[0];
                    return (
                      <MenuItem
                        key={country.alpha3Code}
                        value={country.alpha2Code}
                      >
                        <Grid container alignItems="center">
                          <Avatar
                            alt="country.name"
                            src={country.flag}
                            style={{ display: "inline-block" }}
                          />
                          <span style={{ marginLeft: 5 }}>
                            {currency.name + " (" + currency.code + ")"}
                          </span>
                        </Grid>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <SyncAltRoundedIcon />
            </Grid>
            <Grid item xs={12} md={5}>
              <FormControl variant="outlined" className={classes.FormSelect}>
                <InputLabel htmlFor="to-currency"></InputLabel>
                <Select
                  id="to-currency"
                  select
                  label="to-currency"
                  value={this.state.to}
                  onChange={this.handleChange("to")}
                  helpertext="Please select the currency you want to transform."
                  labelWidth={0}
                >
                  {this.props.countries.map(country => {
                    const currency = country.currencies[0];
                    return (
                      <MenuItem
                        key={country.alpha2Code}
                        value={country.alpha2Code}
                      >
                        <Grid container alignItems="center">
                          <Avatar
                            alt="country.name"
                            src={country.flag}
                            style={{ display: "inline-block" }}
                          />
                          <span style={{ marginLeft: 5 }}>
                            {currency.name + " (" + currency.code + ")"}
                          </span>
                        </Grid>
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                size="large"
                value={this.state.view}
                exclusive
                onChange={this.handleToggleChange}
              >
                <ToggleButton key="W" value="W">
                  Week
                </ToggleButton>
                <ToggleButton key="M" value="M">
                  Month
                </ToggleButton>
                <ToggleButton key="Y" value="Y">
                  Year
                </ToggleButton>
                <ToggleButton key="5Y" value="5Y">
                  5 Years
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={event =>
                  this.props.historicalRatesHandler(
                    this.state.from,
                    this.state.to,
                    this.state.view
                  )
                }
              >
                Get Historical Rates
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default ConverterForm;
