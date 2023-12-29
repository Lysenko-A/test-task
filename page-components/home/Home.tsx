'use client';

import { signOut } from 'next-auth/react';
import { AspectRatio, Box, Button } from '@mantine/core';
import { ExitIcon } from '@radix-ui/react-icons';

import { ROUTERS } from '@/constants/routers';

import { FileInput, Slider } from './components';
import styles from './home.module.css';

export const Home = () => {
  const handleSignOut = () => {
    void signOut({ callbackUrl: ROUTERS.login });
  };

  return (
    <>
      <Box className={styles.wrapper}>
        <AspectRatio ratio={16 / 9} className={styles.video}>
          <iframe
            src='https://www.youtube.com/embed/U9rAmaxdvNw?si=5SoXBdf4vuYQ4HZ2'
            title='Demo video'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </AspectRatio>

        <Box className={styles.bgBox}>
          <FileInput />
        </Box>

        <Box>
          <Slider />
        </Box>

        <Box className={styles.bgBoxRevers}>
          <Button className={styles.btnBox}>Create CV with AI</Button>
        </Box>
      </Box>

      <Button className={styles.btn} onClick={handleSignOut}>
        <ExitIcon />
      </Button>
    </>
  );
};
