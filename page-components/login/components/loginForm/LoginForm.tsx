import React from 'react';
import Image from 'next/image';
import { Box, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

import { Input, PasswordInput } from '@/components/form';
import { User } from '@/interfaces';
import { ROUTERS } from '@/constants/routers';

import facebookIcon from '@/public/facebook.svg';
import googleIcon from '@/public/google.svg';
import twitterIcon from '@/public/twitter.svg';
import loginImg from '@/public/login-image.png';

import commonStyles from '../../login.module.css';
import { TABS_VALUE } from '../../constnats';
import styles from './login-form.module.css';

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = ({ onSetActiveTab }: { onSetActiveTab: (tab: string) => void }) => {
  const router = useRouter();

  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 symbols' : null)
    }
  });

  const handleSubmit = form.onSubmit((values) => {
    const currentUsers = JSON.parse(localStorage.getItem('users') || '[]') as User[];

    const existsUser = currentUsers.find((user) => user.email === values.email);

    if (!existsUser) {
      form.setErrors({ email: 'User does not exist' })

      return;
    }

    if (existsUser.password !== values.password) {
      form.setErrors({ password: 'Wrong password' })

      return;
    }

    router.push(ROUTERS.home);
  });

  const handleSetLoginTab = (event: React.MouseEvent) => {
    event.preventDefault();

    onSetActiveTab(TABS_VALUE.singUp);
  }

  return (
    <>
      <div className={commonStyles.formBox}>
        <Box className={commonStyles.titleBox}>
          <h1 className={commonStyles.title}>Log in</h1>
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

        <Box component='form' onSubmit={handleSubmit}>
          <Input label='Email' mb="1rem" placeholder='jane@gmail.com' fieldProps={form.getInputProps('email')} />

          <PasswordInput label='Password' mb="2rem" placeholder='********' fieldProps={form.getInputProps('password')} />

          <Button className={commonStyles.submitBtn} type='submit' radius='xl' size="lg" fullWidth>
            Sing up
          </Button>

          <Box ta='center' fz={14}>
            <Box component='span' opacity='0.5' mr='4px'>Don't have an account?</Box>

            <a href='/' onClick={handleSetLoginTab}>Sing up</a>
          </Box>
        </Box>
      </div>

      <Box className={styles.imageBox}>
        <Image src={loginImg} alt='sing up image' />
      </Box>
    </>
  );
}
