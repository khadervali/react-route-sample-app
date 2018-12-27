import React, { Component } from "react";
import { Form, Button, Grid } from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    error: {},
    data: {
      email: "",
      password: ""
    },
    loading: false
  };
  render() {
    return (
      <div className="ui container">
        <Grid>
          <Grid.Column width={2} />
          <Grid.Column width={8}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field inline>
                <label>Email:</label>
                <Form.Input
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field inline>
                <label>Password:</label>
                <Form.Input
                  placeholder="Secure Passcode"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Button content="Submit" />
            </Form>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
