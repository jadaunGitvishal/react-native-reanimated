/* eslint-disable camelcase */

import { ShadowNodeWrapper } from './commonTypes';

interface HostInstance {
  _internalInstanceHandle: {
    stateNode: {
      node: ShadowNodeWrapper;
    };
  };
}

let findHostInstance_DEPRECATED: (ref: React.Component) => HostInstance;
if (global._IS_FABRIC) {
  try {
    findHostInstance_DEPRECATED =
      require('react-native/Libraries/Renderer/shims/ReactFabric').findHostInstance_DEPRECATED;
  } catch (e) {
    throw new Error(
      '[Reanimated] Cannot import `findHostInstance_DEPRECATED`.'
    );
  }
}

export function getShadowNodeWrapperFromRef(
  ref: React.Component
): ShadowNodeWrapper {
  return findHostInstance_DEPRECATED(ref)._internalInstanceHandle.stateNode
    .node;
}
