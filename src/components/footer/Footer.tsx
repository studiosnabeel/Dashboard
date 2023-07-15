import React from 'react';
import styles from './footer.module.css';
import { Typography } from 'antd';

const { Link } = Typography;

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="tel:+123456789">+123456789</Link>
      <Link href="https://www.google.com" target={'_blank'}>
        Privacy Policy
      </Link>
      <Link href="https://www.google.com" target={'_blank'}>
        Terms of Use
      </Link>
    </div>
  );
};

export default Footer;
