import React from "react";
import { Checkbox as CheckboxField } from "@mantine/core";

import styles from './checkbox.module.css';

interface InputProps {
  label?: string;
  fieldProps: any;
}

const CLASSES = {
  input: styles.input,
  error: styles.error,
  label: styles.label,
}

export const Checkbox = (props: InputProps) => {
  const { label = '', fieldProps} = props;

  return (
    <CheckboxField
      variant="outline"
      size="md"
      label={label}
      classNames={CLASSES}
      {...fieldProps}
    />
  )
}