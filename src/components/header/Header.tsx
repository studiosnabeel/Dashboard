'use client';
import React from 'react';
import { Image, Typography, Badge } from 'antd';
import styles from './header.module.css';
import { MailOutlined, BellFilled } from '@ant-design/icons';

const { Title } = Typography;

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        width={65}
        src="https://media.licdn.com/dms/image/D4D35AQEWdxF9e00NRg/profile-framedphoto-shrink_400_400/0/1686660708365?e=1690045200&v=beta&t=ncjV0CsNSCXRg4QJ7Le4TSSNdDIxWK5dm_0hkHFuL1E"
      />
      <Title style={{ color: '#3f454f' }}>Dashboard</Title>
      <div className={styles.iconsContainer}>
        <Badge dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
