import React from "react";
import { PasswordInput as PasswordInputField } from '@mantine/core';

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

export const PasswordInput = (props: InputProps) => {
  const { label = '', placeholder = '', fieldProps, ...rest } = props;

  return (
    <PasswordInputField
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