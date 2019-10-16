import React from 'react';
import { View } from 'remax/alipay'

import './index.css';

export default (props) => {
  const {
    className = '',
    show = false,
    animation = true,
    mask = true,
    position = 'bottom',
    disableScroll = true,
    zIndex = 0,
    onClose = () => {},
    children
  } = props;

  const onMaskTap = () => {
    if (onClose) {
      onClose();
    }
  }
  return (
    <View className={`am-popup ${className} ${show ? 'am-popup-show' : ''} ${animation ? 'animation' : ''}`}
      disableScroll={disableScroll}>
      {
        mask ?
          <View class="am-popup-mask" onTap="onMaskTap" style={{ zIndex: `${zIndex}` }} onTap={onMaskTap}></View> :
          null
      }
      <View class={`am-popup-content am-popup-${position}`} style={{ zIndex: `${zIndex}` }}>
        {
          children
        }
      </View>
    </View >
  )
}