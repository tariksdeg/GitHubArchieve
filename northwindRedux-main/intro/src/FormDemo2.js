import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email+ "  added");
    alertify.success(this.state.password+ "  added");
    alertify.success(this.state.city+ "  added");
    alertify.success(this.state.description+ "  added");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">desc </Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>Bursa</option>
              <option>İstanbul</option>
            </Input>
          </FormGroup>
          <Button  type="submit" value="Save">xxxxx</Button>
        </Form>
      </div>
    );
  }
}
