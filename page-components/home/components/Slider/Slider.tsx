'use client';

import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Box, Text } from '@mantine/core';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

import styles from './slider.module.css';
import { SLIDER_DATA } from './data';

const SLIDER_CLASSES = {
  controls: styles.controls
}

export const Slider = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      height="365px"
      slideSize="100%"
      slideGap="lg"
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      previousControlIcon={<ArrowLeftIcon width="29px" height="29px" />}
      nextControlIcon={<ArrowRightIcon width="29px" height="29px" />}
      classNames={SLIDER_CLASSES}
      loop
    >

      {SLIDER_DATA.map(({ id, name, avatarUrl, text }) => (
        <Carousel.Slide key={id}>
          <Box className={styles.card}>
            <Box className={styles.imgCard}>
              <Image src={avatarUrl} alt={name} />
            </Box>

            <Box className={styles.title}>{name}</Box>

            <Text className={styles.text}>{text}</Text>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
