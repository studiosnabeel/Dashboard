'use client';
import React from 'react';
import { Space } from 'antd';
import styles from './page.module.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageContent from '@/components/content/PageContent';
import SideMenu from '@/components/sidemenu/SideMenu';

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Space className={styles.container} >
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>

      <Footer />
    </main>
  );
};

export default Home;
