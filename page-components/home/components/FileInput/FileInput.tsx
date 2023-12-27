import Image from 'next/image';
import { Box, FileInput as FileInputField, Title } from '@mantine/core';

import uploadIcon from '@/public/home/upload.svg';

import styles from './file-input.module.css';


const CLASSES = {
  root: styles.input,
  wrapper: styles.wrapper,
  input: styles.input,
  section: styles.section,
}

const FilePlaceholder = (
  <Box className={styles.preview}>
    <Box className={styles.imgBox}>
      <Image src={uploadIcon} alt="upload icon" />
    </Box>
    <Title order={2}>Upload CV</Title>
    <Box className={styles.subTitle}>(PDF or DOCX)</Box>
  </Box>
)

export const FileInput = () => {
  return (
    <FileInputField
      classNames={CLASSES}
      leftSection={FilePlaceholder}
      accept="application/pdf,.doc,.docx"
    />
  )
}
