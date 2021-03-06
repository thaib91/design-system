import React, { Component } from "react";
import cx from "classnames";

import styles from "./DateTimeFieldType.less";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export class DateTimeFieldType extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     date: moment()
  //   }
  // }
  // componentDidMount() {
  //   if (this.props.value) {
  //     this.setState({
  //       date: moment(this.props.value)
  //     })
  //   }
  // }
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
  };
  render() {
    return (
      <label className={cx(styles.DateFieldType, this.props.className)}>
        <span className={styles.DateFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </span>
        <span className={styles.DateFieldTypeInput}>
          <input
            className={cx(styles.DatePicker, this.props.className)}
            type={this.props.type || "datetime-local"}
            onChange={this.onChange}
          />
          <i className={cx(styles.Icon, "fa fa-calendar")} />
        </span>
      </label>
    );
  }
}
