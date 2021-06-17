import React, { Component } from 'react';
import {GraceHopperQuoteComponent} from "./CatComponent";

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <GraceHopperQuoteComponent />
        <img src="/cat.gif" />
      </div>
    );
  }
}
