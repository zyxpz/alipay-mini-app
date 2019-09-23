import '../../react/index.js';
import { ReactReconcilerInst } from './render.js';
export { default as render } from './render.js';
export { default as createAppConfig } from './createAppConfig.js';
import './lifecycle.js';
export { default as createPageConfig } from './createPageConfig.js';

var unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;

export { unstable_batchedUpdates };
