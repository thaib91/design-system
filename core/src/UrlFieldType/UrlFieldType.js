import React, { PureComponent } from "react";
import cx from "classnames";

import { Input } from "../Input";
import styles from "./UrlFieldType.less";
export class UrlFieldType extends PureComponent {
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
      <article
        className={cx(
          styles.UrlFieldType,
          this.props.maxLength && this.props.value.length > this.props.maxLength
            ? styles.Error
            : null
        )}
      >
        <div className={styles.UrlFieldTypeLabel}>
          <label>{this.props.label}</label>
          {this.props.maxLength && (
            <span>
              {this.props.value.length}/{this.props.maxLength}
            </span>
          )}
        </div>
        <Input type="url" onChange={this.onChange} value={this.props.value} />
      </article>
    );
  }
}
