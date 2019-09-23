import plainStyle from '../../../utils/plainStyle.js';

var alias = {
  className: 'class',
  onClick: 'onTap'
};

function getAlias(prop) {
  var aliasProp = alias[prop];

  if (aliasProp) {
    return aliasProp;
  }

  return prop;
}

function propsAlias(props) {
  var aliasProps = {};
  Object.keys(props).forEach(function (prop) {
    if (prop === 'style') {
      aliasProps.style = plainStyle(props.style);
    } else {
      aliasProps[getAlias(prop)] = props[prop];
    }
  });
  return aliasProps;
}

export default propsAlias;
