import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { InputIcon } from "../InputIcon";

import styles from "./Search.less";
export class Search extends Component {
  state = {
    term: String()
  };
  componentDidMount() {
    this.setState({
      term: this.props.value
    });
  }

  onChange = evt => {
    this.setState(
      {
        term: evt.target.value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(
            this.props.name,
            this.state.term,
            this.props.datatype
          );
        }
      }
    );
  };
  onSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(
        this.props.name,
        this.state.term,
        this.props.datatype
      );
    }
  };

  render() {
    return (
      <div className={cx(styles.Search, this.props.className)}>
        <Input
          {...this.props}
          type="search"
          className={styles.Input}
          onChange={this.onChange}
        />
        <InputIcon onClick={this.onSubmit}>
          <i className="fa fa-search" />
        </InputIcon>
      </div>
    );
  }
}
