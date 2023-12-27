import React from "react";
import { TextInput } from "@mantine/core";

import styles from './input.module.css';

interface InputProps {
  label?: string;
  placeholder?: string;
  fieldProps: any;
  [k: string]: any;
}

const CLASSES = {
  input: styles.input,
  error: styles.error,
}

export const Input = (props: InputProps) => {
  const { label, placeholder, fieldProps, ...rest } = props;

  return (
    <TextInput
      variant="unstyled"
      size="lg"
      label={label}
      placeholder={placeholder}
      classNames={CLASSES}
      {...fieldProps}
      {...rest}
    />
  )
}