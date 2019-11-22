import spm from './data';

export default (params = {}) => {
  const {
    id = '',
    spmC = false,
    spmD = false,
    expo = false,
    noClick = false,
    random = '',
    other = {}
  } = params;

  let spmData = {
    'data-spmC': '',
    'data-spmD': '',
    'data-expo': true,
    'data-click': true,
    ...other
  };

  if (!id) {
    console.log('请输入id');
    return;
  }
  
  const data = spm[id];

  if (/spmC/.test(id)) {
    spmData["data-spmC"] = data
    delete spmData["data-spmD"];
    delete spmData["data-click"];
  } else {
    spmData['data-spmD'] = random ? `${data}-${random}` : data;;
    delete spmData['data-spmC'];
  }

  if (/spmC/.test(id) || noClick) {
    delete spmData['data-click']
  }

  return spmData;
}