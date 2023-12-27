'use client';

import React, { useState } from 'react';
import { Box, Tabs } from '@mantine/core';

import { SingUp, LoginForm } from './components';
import { TABS_VALUE } from './constnats';
import styles from './login.module.css';

export const Login = () => {
  const [activeTab, setActiveTab] = useState<string | null>(TABS_VALUE.login);

  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <Box component='main' className={styles.main}>
      <Tabs w="100%" value={activeTab} onChange={setActiveTab}>
        <Tabs.Panel className={styles.tabContent} value={TABS_VALUE.login}>
          <LoginForm onSetActiveTab={handleSetActiveTab} />
        </Tabs.Panel>

        <Tabs.Panel className={styles.tabContent} value={TABS_VALUE.singUp}>
          <SingUp onSetActiveTab={handleSetActiveTab}/>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
