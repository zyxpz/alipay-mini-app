import React from '../../npm/react/index.js';
import '../../npm/remax/lib/render.js';
import '../../npm/remax/lib/createAppConfig.js';
import createPageConfig from '../../npm/remax/lib/createPageConfig.js';
import '../../npm/remax/lib/index.js';
import View from '../../npm/remax/lib/adapters/alipay/components/View.js';
import '../../npm/remax/lib/adapters/alipay/components/ScrollView.js';
import '../../npm/remax/lib/adapters/alipay/components/Swiper.js';
import '../../npm/remax/lib/adapters/alipay/components/SwiperItem.js';
import '../../npm/remax/lib/adapters/alipay/components/MovableView.js';
import '../../npm/remax/lib/adapters/alipay/components/MovableArea.js';
import '../../npm/remax/lib/adapters/alipay/components/CoverView.js';
import '../../npm/remax/lib/adapters/alipay/components/CoverImage.js';
import '../../npm/remax/lib/adapters/alipay/components/Icon.js';
import '../../npm/remax/lib/adapters/alipay/components/Text.js';
import '../../npm/remax/lib/adapters/alipay/components/RichText.js';
import '../../npm/remax/lib/adapters/alipay/components/Progress.js';
import '../../npm/remax/lib/adapters/alipay/components/Button.js';
import '../../npm/remax/lib/adapters/alipay/components/CheckboxGroup.js';
import '../../npm/remax/lib/adapters/alipay/components/Checkbox.js';
import '../../npm/remax/lib/adapters/alipay/components/Form.js';
import '../../npm/remax/lib/adapters/alipay/components/Input.js';
import '../../npm/remax/lib/adapters/alipay/components/Label.js';
import '../../npm/remax/lib/adapters/alipay/components/Picker.js';
import '../../npm/remax/lib/adapters/alipay/components/PickerView.js';
import '../../npm/remax/lib/adapters/alipay/components/PickerViewColumn.js';
import '../../npm/remax/lib/adapters/alipay/components/RadioGroup.js';
import '../../npm/remax/lib/adapters/alipay/components/Radio.js';
import '../../npm/remax/lib/adapters/alipay/components/Slider.js';
import '../../npm/remax/lib/adapters/alipay/components/Switch.js';
import '../../npm/remax/lib/adapters/alipay/components/TextArea.js';
import '../../npm/remax/lib/adapters/alipay/components/Navigator.js';
import '../../npm/remax/lib/adapters/alipay/components/Image.js';
import '../../npm/remax/lib/adapters/alipay/components/Map.js';
import '../../npm/remax/lib/adapters/alipay/components/Canvas.js';
import '../../npm/remax/lib/adapters/alipay/components/WebView.js';
import '../../npm/remax/lib/adapters/alipay/components/Lifestyle.js';
import '../../npm/remax/lib/adapters/alipay/components/ContactButton.js';
import '../../npm/remax/lib/adapters/alipay/api.js';
import styles from './index.module.js';
import Layout from '../../components/Layout/index.js';

var list = [];

for (var index = 0; index < 50; index++) {
  list.push(index);
}

var _page = function _page() {
  return React.createElement(View, {
    className: styles.app
  }, React.createElement(Layout, null, React.createElement(Layout.Header, {
    className: "basic-header"
  }), React.createElement(Layout.Content, {
    style: {
      backgroundColor: 'yellow'
    }
  }, list.map(function (item, key) {
    return React.createElement(View, {
      key: key
    }, item);
  })), React.createElement(Layout.Footer, {
    style: {
      backgroundColor: 'green'
    }
  })));
};

var index$1 = Page(createPageConfig(_page));

export default index$1;
