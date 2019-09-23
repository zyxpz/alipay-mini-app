import { createCommonjsModule } from '../../_virtual/_commonjsHelpers.js';
import './cjs/scheduler-tracing.production.min.js';
import './cjs/scheduler-tracing.development.js';
import require$$1 from '../../_virtual/scheduler-tracing.development.js_commonjs-proxy.js';

var tracing = createCommonjsModule(function (module) {

  {
    module.exports = require$$1;
  }
});

export { tracing as __moduleExports };
