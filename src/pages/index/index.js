import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, ScrollView, View } from 'remax/alipay';
import { Layout, Popup, Modal, Demo } from '../../components';

import { setSpm } from '@/util';



const list = [];

for (let index = 0; index < 50; index++) {
  list.push(index)
}

export default () => {
  const [show, showFn] = useState(false);

  const [modalShow, modalFn] = useState(false);

  const [demoShow, demoFn] = useState(false)

  const [messageList, listFn] = useState([]);

  const spmD = setSpm({ id: 'pa.send.spmC' })
  return (
    <View className={styles.app}>
      <Layout>
        <Layout.Header className="basic-header" />
        <Layout.Content style={{ backgroundColor: 'yellow' }}>
          <View data-spmC='111' {...spmD}>
            {
              list.map((item, i) => {
                console.log(setSpm({
                  id: 'pa.send.spmD',
                  other: {
                    name: i
                  }
                }))
                return <View {
                  ...setSpm({
                    id: 'pa.send.spmD',
                    other: {
                      name: i
                    }
                  })
                } key={i}>{item}</View>
              })
            }
          </View>
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: 'green' }}>
        </Layout.Footer>
      </Layout>
    </View>
  )
}
