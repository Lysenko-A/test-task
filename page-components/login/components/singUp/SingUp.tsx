import React from 'react';
import Image from 'next/image';
import { Box, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import { Input, PasswordInput, Checkbox } from '@/components/form';
import { User } from '@/interfaces';

import facebookIcon from '@/public/facebook.svg';
import googleIcon from '@/public/google.svg';
import twitterIcon from '@/public/twitter.svg';
import loginImg from '@/public/login-image.png';

import { TABS_VALUE } from '../../constnats';
import commonStyles from '../../login.module.css';
import styles from './sing-up.module.css';

type FormValues = User;

export const SingUp = ({ onSetActiveTab }: { onSetActiveTab: (tab: string) => void }) => {
  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isSubscribe: false
    },
    validate: {
      firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 symbols' : null)
    }
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      const response = await fetch('/api/sing-up', {
        method: "POST",
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.email) {
          form.setErrors({
            email: data.email
          });
        }

        return;
      }

      onSetActiveTab(TABS_VALUE.login);
      form.reset();
    } catch (err) {}
  });

  const handleSetLoginTab = (event: React.MouseEvent) => {
    event.preventDefault();

    onSetActiveTab(TABS_VALUE.login);
  }

  return (
    <>
      <div className={commonStyles.formBox}>
        <Box className={commonStyles.titleBox}>
          <h1 className={commonStyles.title}>Create an account</h1>

          <Box className={styles.subTitle}>
            <span>Already have an account?</span>

            <a href='/' onClick={handleSetLoginTab}>Log in</a>
          </Box>
        </Box>

        <Box className={commonStyles.buttonGroup}>
          <Button
            leftSection={<Image src={facebookIcon} alt='Facebook Icon' />}
            variant='default'
            size='lg'
            radius='xl'
            fullWidth
          >
            Continue with Facebook
          </Button>

          <Button
            leftSection={<Image src={googleIcon} alt='Google Icon' />}
            variant='default'
            size='lg'
            radius='xl'
            fullWidth
          >
            Continue with Facebook
          </Button>
          <Button
            leftSection={<Image src={twitterIcon} alt='Twitter Icon' />}
            variant='default'
            size='lg'
            radius='xl'
            fullWidth
          >
            Continue with Facebook
          </Button>
        </Box>

        <Box className={commonStyles.divider}>Or</Box>

        <Box component='form' onSubmit={handleSubmit} className={styles.form}>
          <Input label='First Name' placeholder='Jane' fieldProps={form.getInputProps('firstName')} />

          <Input label='Last Name' placeholder='Doe' fieldProps={form.getInputProps('lastName')} />

          <Input label='Email' placeholder='jane@gmail.com' fieldProps={form.getInputProps('email')} />

          <PasswordInput label='Password' placeholder='********' fieldProps={form.getInputProps('password')} />

          <Box className={styles.footerForm}>
            <Checkbox
              label='Subscribe to our monthly newsletter'
              fieldProps={form.getInputProps('isSubscribe', { type: 'checkbox' })}
            />

            <div className={styles.termsBox}>
              <Box component='span' opacity='0.5' mr='4px'>By clicking below you agree to our</Box>

              <a href='/' onClick={handleSetLoginTab}>Terms of Service</a> and <a href='/' onClick={handleSetLoginTab}>Privacy Policy</a>
            </div>

            <Button className={commonStyles.submitBtn} type='submit' radius='xl' size="lg" fullWidth>
              Sing up
            </Button>

            <Box ta='center' fz={14}>
              <Box component='span' opacity='0.5' mr='4px'>Already have an account?</Box>

              <a href='/' onClick={handleSetLoginTab}>Log in</a>
            </Box>
          </Box>
        </Box>
      </div>

      <Box className={styles.imageBox}>
        <Image src={loginImg} alt='sing up image' />
      </Box>
    </>
  );
}
