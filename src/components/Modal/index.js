import React from 'react';
import { View } from 'remax/alipay';
import Modal from 'mini-antui/es/modal';

export default props => {
  const {
    title,
    btnText,
    children,
    ...other
  }= props;

  return (
    <Modal {...other}>
      <View slot="header">{title}</View>
      {
        children
      }
      <View slot="footer">{btnText}</View>
    </Modal>
  )
}