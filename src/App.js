import React, { Component } from 'react';

import 'onsenui'
import {Page, Navigator, Button, Input} from 'react-onsenui'

class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page>
        <div style={{padding: 20}}>
          This is a second Page
          <Button onClick={() => this.props.navigator.popPage()}> Pop </Button>
        </div>
      </Page>

    );
  }
}

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeText(event) {
    this.setState({text: event.target.value});
  }

  pushPage() {
    this.props.navigator.pushPage({
      component: PageTwo
    });
  }

  render() {
    return (
      <Page>
        <div style={{padding: 20}}>
          <Input
            placeholder='Input field'
            style={{height: 20}}
            value={this.state.text}
            onChange={this.onChangeText.bind(this)} /> <br />
          <p>
            You typed {this.state.text}
          </p>
          <Button onClick={this.pushPage.bind(this)}> Push page </Button>
        </div>
      </Page>

    );
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
    <Navigator
      initialRoute={{
        component: PageOne
      }}
      renderPage={this.renderPage.bind(this)}
    />
    );
  }
}


