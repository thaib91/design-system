import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./ColorFieldType.less";
export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorInput: "#ffffff"
    };
  }
  render() {
    const { colorInput } = this.state;
    return (
      <article className={styles.ColorFieldType}>
        <div className={styles.ColorFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <Input type="text" onChange={this.onChange} value={colorInput} />
        <Input type="color" onChange={this.onChange} value={colorInput} />
      </article>
    );
  }
  onChange = evt => {
    this.setState({
      colorInput: evt.target.value
    });
  };
}
