import * as React from 'react';
import './index.css';

// 创建context
const LayoutContext = React.createContext({});


// 构建业务树
const generator = ({ tagName, clsTagName }) =>
  BasicComponent =>
    class Adapter extends React.Component {
      static Header;

      static Footer;

      static Content;

      renderComponent = () => <BasicComponent
      tagName={tagName}
      clsTagName={clsTagName}
      {...this.props} />;

      render() {
        return <LayoutContext.Consumer>{this.renderComponent}</LayoutContext.Consumer>;
      }
    };


class BasicLayout extends React.Component {
  state = {}

  render() {
    const {
      tagName: Tag,
      children,
      clsTagName,
      ...others
    } = this.props;

    return (
      <LayoutContext.Provider value={{ siderHook: {} }}>
        <Tag class={clsTagName} {...others}>
          {children || clsTagName}
        </Tag>
      </LayoutContext.Provider>
    );
  }
}

// 构建业务
const Basic = props => {
  const {
    className: clsName,
    tagName,
    clsTagName,
    children,
    ...others
  } = props;

  return React.createElement(tagName, {
    class: `mido-layout-wrap-${clsTagName} ${clsName || ''}`,
    ...others
  },
    children || clsTagName
  );
};

const Layout = generator({
  tagName: 'view',
  clsTagName: 'mido-layout-wrap'
})(BasicLayout);

Layout.Header = generator({ tagName: 'view', clsTagName: 'header' })(Basic);
Layout.Content = generator({ tagName: 'view', clsTagName: 'main' })(Basic);
Layout.Footer = generator({ tagName: 'view', clsTagName: 'footer' })(Basic);

export default Layout;
