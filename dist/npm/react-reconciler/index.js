import { createCommonjsModule } from '../../_virtual/_commonjsHelpers.js';
import './cjs/react-reconciler.production.min.js';
import './cjs/react-reconciler.development.js';
import require$$1 from '../../_virtual/react-reconciler.development.js_commonjs-proxy.js';

var reactReconciler = createCommonjsModule(function (module) {

  {
    module.exports = require$$1;
  }
});

export default reactReconciler;
export { reactReconciler as __moduleExports };
