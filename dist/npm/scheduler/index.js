import { createCommonjsModule } from '../../_virtual/_commonjsHelpers.js';
import './cjs/scheduler.production.min.js';
import './cjs/scheduler.development.js';
import require$$1 from '../../_virtual/scheduler.development.js_commonjs-proxy.js';

var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = require$$1;
  }
});
var scheduler_1 = scheduler.unstable_now;
var scheduler_2 = scheduler.unstable_ImmediatePriority;
var scheduler_3 = scheduler.unstable_UserBlockingPriority;
var scheduler_4 = scheduler.unstable_NormalPriority;
var scheduler_5 = scheduler.unstable_IdlePriority;
var scheduler_6 = scheduler.unstable_LowPriority;
var scheduler_7 = scheduler.unstable_runWithPriority;
var scheduler_8 = scheduler.unstable_next;
var scheduler_9 = scheduler.unstable_scheduleCallback;
var scheduler_10 = scheduler.unstable_cancelCallback;
var scheduler_11 = scheduler.unstable_wrapCallback;
var scheduler_12 = scheduler.unstable_getCurrentPriorityLevel;
var scheduler_13 = scheduler.unstable_shouldYield;
var scheduler_14 = scheduler.unstable_continueExecution;
var scheduler_15 = scheduler.unstable_pauseExecution;
var scheduler_16 = scheduler.unstable_getFirstCallbackNode;

export { scheduler as __moduleExports, scheduler_5 as unstable_IdlePriority, scheduler_2 as unstable_ImmediatePriority, scheduler_6 as unstable_LowPriority, scheduler_4 as unstable_NormalPriority, scheduler_3 as unstable_UserBlockingPriority, scheduler_10 as unstable_cancelCallback, scheduler_14 as unstable_continueExecution, scheduler_12 as unstable_getCurrentPriorityLevel, scheduler_16 as unstable_getFirstCallbackNode, scheduler_8 as unstable_next, scheduler_1 as unstable_now, scheduler_15 as unstable_pauseExecution, scheduler_7 as unstable_runWithPriority, scheduler_9 as unstable_scheduleCallback, scheduler_13 as unstable_shouldYield, scheduler_11 as unstable_wrapCallback };
