import React, { useState } from 'react';
import styles from './index.module.css';
import { Button } from 'remax/alipay';
import { Layout, View, Popup, Modal } from '../../components';

const list = [];

for (let index = 0; index < 50; index++) {
  list.push(index)
}

export default () => {
  const [show, showFn] = useState(false);

  const [modalShow, modalFn] = useState(false);


  return (
    <View className={styles.app}>
      <Layout>
        <Layout.Header className="basic-header" />
        <Layout.Content style={{ backgroundColor: 'yellow' }}>
          <Button
            onClick={() => {
              showFn(true)
            }}
            type="primary"
          >popup</Button>
          <Button
            onClick={() => {
              modalFn(true)
            }}
            type="primary"
          >Modal</Button>
          <Popup
            show={show}
            onClose={() => {
              showFn(false)
            }}
          >
            <View className={styles.box}
              style={{
                height: '200px',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              hellow world
          </View>
          </Popup>
          <Modal
            show={modalShow}
            title="title"
            btnText="确定"
          >
            <View>
              hellow Modal
            </View>
          </Modal>
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: 'green' }} />
      </Layout>
    </View>
  )
}
