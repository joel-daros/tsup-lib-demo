import React from "react";
import styles from "./Example.module.scss";

export type ExampleProps = {
  text?: String;
};

export function Example(props: ExampleProps) {
  const [count, setCount] = React.useState(0);

  return (
    <button
      className={styles.exampleClass}
      onClick={() => setCount(count + 1)}
      type="button"
    >
      {`${props.text} ${count}`}
    </button>
  );
}
