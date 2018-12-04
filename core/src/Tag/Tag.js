import React from "react";
import cx from "classnames";

import styles from "./Tag.less";
export function Tag(props) {
  return (
    <span className={styles.Tag}>
      {props.link ? (
        <a href={props.link}>{props.children}</a>
      ) : (
        <span>{props.children}</span>
      )}
      <i
        className={cx("fa fa-times-circle", styles.Remove)}
        onClick={evt => {
          evt.stopPropagation();
          if (props.onRemove) {
            props.onRemove(props.name, props.value);
          }
        }}
      />
    </span>
  );
}
