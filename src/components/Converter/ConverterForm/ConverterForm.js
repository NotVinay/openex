import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import * as classes from "./ConverterForm.module.css";

class ConverterForm extends Component {
  state = {
    from: "GB",
    to: "US",
    amount: 0
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
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
            <Grid item xs={12}>
              <TextField
                id="amount"
                label="Amount"
                type="number"
                margin="normal"
                variant="outlined"
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                className={classes.FormTextField}
              />
            </Grid>
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
            <Grid item xs={12} md={2}>
              to
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
              <Button
                variant="contained"
                color="primary"
                onClick={event =>
                  this.props.conversionHandler(
                    this.state.from,
                    this.state.to,
                    this.state.amount
                  )
                }
              >
                Convert
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default ConverterForm;
