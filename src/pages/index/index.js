import React from 'react';
import { View } from 'remax/alipay';
import styles from './index.module.css';

import { Layout } from '../../components';

const list = [];

for (let index = 0; index < 50; index++) {
  list.push(index)
}

export default () => (
  <View className={styles.app}>
    <Layout>
      <Layout.Header className="basic-header" />
      <Layout.Content style={{ backgroundColor: 'yellow' }}>
        {list.map((item, key) => <View key={key}>{item}</View>)}
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: 'green' }} />
    </Layout>
  </View>
);
