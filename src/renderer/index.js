/*
Copyright 2016 Mozilla
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import Reconciler from 'react-reconciler';

export const DUMMY_INSTANCE = Object.create(null);
export const ROOT_HOST_CONTEXT = Object.create(null);
export const CHILD_HOST_CONTEXT = Object.create(null);

// @see https://github.com/facebook/react/tree/master/packages/react-noop-renderer
// @see https://github.com/facebook/react/blob/master/packages/react-reconciler/src/forks/ReactFiberHostConfig.custom.js

export default Reconciler({
  getPublicInstance(instance) {
    console.log('getPublicInstance', instance);
    return instance;
  },

  getRootHostContext(rootContainerInstance) {
    console.log('getRootHostContext', rootContainerInstance);
    return ROOT_HOST_CONTEXT;
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    console.log('getChildHostContext', parentHostContext, type, rootContainerInstance);
    return CHILD_HOST_CONTEXT;
  },

  prepareForCommit() {
    console.log('prepareForCommit');
  },

  resetAfterCommit() {
    console.log('resetAfterCommit');
  },

  createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createInstance', type, props, rootContainerInstance, hostContext, internalInstanceHandle);
    return DUMMY_INSTANCE;
  },

  createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createTextInstance', text, rootContainerInstance, hostContext, internalInstanceHandle);
    return DUMMY_INSTANCE;
  },

  appendInitialChild(parentInstance, childInstance) {
    console.log('appendInitialChild', parentInstance, childInstance);
  },

  finalizeInitialChildren(instance, type, props, rootContainerInstance) {
    console.log('finalizeInitialChildren', instance, type, props, rootContainerInstance);
  },

  prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
    console.log('prepareUpdate', instance, type, oldProps, newProps, rootContainerInstance, hostContext);
    return false;
  },

  shouldSetTextContent(type, props) {
    console.log('shouldSetTextContent', type, props);
    return false;
  },

  shouldDeprioritizeSubtree(type, props) {
    console.log('shouldDeprioritizeSubtree', type, props);
    return false;
  },

  scheduleTimeout: null,
  cancelTimeout: null,
  noTimeout: null,

  now() {
    return performance.now()
  },

  isPrimaryRenderer: true,
  warnsIfNotActing: true,

  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  getFundamentalComponentInstance(fundamentalInstance) {
    console.log('getFundamentalComponentInstance', fundamentalInstance);
    const { impl, props, state } = fundamentalInstance;
    return impl.getInstance(null, props, state);
  },

  mountFundamentalComponent(fundamentalInstance) {
    console.log('mountFundamentalComponent', fundamentalInstance);
    const { impl, instance, props, state } = fundamentalInstance;
    const onMount = impl.onUpdate;
    if (onMount !== undefined) {
      onMount(null, instance, props, state);
    }
  },

  shouldUpdateFundamentalComponent(fundamentalInstance) {
    console.log('shouldUpdateFundamentalComponent', fundamentalInstance);
    const { impl, instance, prevProps, props, state } = fundamentalInstance;
    const shouldUpdate = impl.shouldUpdate;
    if (shouldUpdate !== undefined) {
      return shouldUpdate(null, instance, prevProps, props, state);
    }
    return true;
  },

  updateFundamentalComponent(fundamentalInstance) {
    console.log('updateFundamentalComponent', fundamentalInstance);
    const { impl, instance, prevProps, props, state } = fundamentalInstance;
    const onUpdate = impl.onUpdate;
    if (onUpdate !== undefined) {
      onUpdate(null, instance, prevProps, props, state);
    }
  },

  unmountFundamentalComponent(fundamentalInstance) {
    console.log('unmountFundamentalComponent', fundamentalInstance);
    const { impl, instance, props, state } = fundamentalInstance;
    const onUnmount = impl.onUnmount;
    if (onUnmount !== undefined) {
      onUnmount(null, instance, props, state);
    }
  },

  getInstanceFromNode() {
    console.log('getInstanceFromNode', arguments);
    throw new Error('Not yet implemented.');
  },

  beforeRemoveInstance() {
    console.log('beforeRemoveInstance', arguments);
  },

  // -------------------
  //      Mutation
  //     (optional)
  // -------------------

  appendChild(parentInstance, childInstance) {
    console.log('appendChild', parentInstance, childInstance);
  },

  appendChildToContainer(parentInstance, childInstance) {
    console.log('appendChildToContainer', parentInstance, childInstance);
  },

  insertBefore(parentInstance, childInstance, beforeChild) {
    console.log('insertBefore', parentInstance, childInstance, beforeChild);
  },

  insertInContainerBefore(parentInstance, childInstance, beforeChild) {
    console.log('insertBefore', parentInstance, childInstance, beforeChild);
  },

  removeChild(parentInstance, childInstance) {
    console.log('removeChild', parentInstance, childInstance);
  },

  removeChildFromContainer(parentInstance, childInstance) {
    console.log('removeChildFromContainer', parentInstance, childInstance);
  },

  commitMount(instance, type, newProps, internalInstanceHandle) {
    console.log('commitMount', instance, type, newProps, internalInstanceHandle);
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    console.log('commitUpdate', instance, updatePayload, type, oldProps, newProps, internalInstanceHandle);
  },

  commitTextUpdate(textInstance, oldText, newText) {
    console.log('commitTextUpdate', textInstance, oldText, newText);
  },

  resetTextContent(textInstance) {
    console.log('resetTextContent', textInstance);
  },

  hideInstance(instance) {
    console.log("hideInstance", instance);
  },

  hideTextInstance(textInstance) {
    console.log("hideTextInstance", textInstance);
  },

  unhideInstance(instance, props) {
    console.log("unhideInstance", instance, props);
  },

  unhideTextInstance(textInstance, text) {
    console.log("unhideTextInstance", textInstance, text);
  },
});
