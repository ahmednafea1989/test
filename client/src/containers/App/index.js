import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import SignUp from "../SignUp";
import SignOut from "../SignOut";
import SignIn from "../SignIn";
import postQuestions from "../postQuestions";
import Quiz from "../Quiz";

import { connect } from "react-redux";

import Navbar from "./../../components/Navbar";

class App extends Component {
  //
  // state = {
  //   socket: io()
  // }
  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: "100vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <Navbar isLoggedIn={this.props.authenticated} />
          <Route exact path='/signin' component={SignIn} /> 
          <Route exact path='/signout' component={SignOut} />
          <Route exact path='/' component={SignUp} /> 
             <Route exact path='/postQuestions' component={postQuestions} />
             <Route exact path='/quiz' component={Quiz} />

        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, null)(App);
