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
import now from 'performance-now';

export const DUMMY_INSTANCE = Object.create(null);
export const ROOT_HOST_CONTEXT = Object.create(null);
export const CHILD_HOST_CONTEXT = Object.create(null);

export default Reconciler({
  getRootHostContext(_rootContainerInstance) {
    // console.log('getRootHostContext', _rootContainerInstance);
    return ROOT_HOST_CONTEXT;
  },

  getChildHostContext(_parentHostContext, _type) {
    // console.log('getChildHostContext', _parentHostContext, _type);
    return CHILD_HOST_CONTEXT;
  },

  getPublicInstance(instance) {
    // console.log('getPublicInstance', instance);
    return instance;
  },

  prepareForCommit() {
    // console.log('prepareForCommit');
  },

  resetAfterCommit() {
    // console.log('resetAfterCommit');
  },

  createInstance(_type, _props, _rootContainerInstance, _hostContext, _internalInstanceHandle) {
    // console.log('createInstance', type, props, rootContainerInstance, _hostContext, _internalInstanceHandle);
    return DUMMY_INSTANCE;
  },

  createTextInstance(_text, _rootContainerInstance, _hostContext, _internalInstanceHandle) {
    // console.log('createTextInstance', text, rootContainerInstance, _hostContext, _internalInstanceHandle);
    return DUMMY_INSTANCE;
  },

  appendInitialChild(_parentInstance, _childInstance) {
    // console.log('appendInitialChild', parentInstance, childInstance);
  },

  finalizeInitialChildren(_instance, _type, _props, _rootContainerInstance) {
    // console.log('finalizeInitialChildren', _instance, _type, _props, _rootContainerInstance);
  },

  prepareUpdate(_instance, _type, _oldProps, _newProps, _rootContainerInstance, _hostContext) {
    // console.log('prepareUpdate', _instance, _type, _oldProps, _newProps, rootContainerInstance, _hostContext);
    return false;
  },

  shouldSetTextContent(_type, _props) {
    // console.log('shouldSetTextContent', _type, _props);
    return false;
  },

  shouldDeprioritizeSubtree(_type, _props) {
    // console.log('shouldDeprioritizeSubtree', _type, _props);
    return false;
  },

  now: () => now(),

  useSyncScheduling: true,

  mutation: {
    appendChildToContainer(_parentInstance, _childInstance) {
      // console.log('appendChildToContainer', parentInstance, childInstance);
    },

    removeChildFromContainer(_parentInstance, _childInstance) {
      // console.log('removeChildFromContainer', _parentInstance, _childInstance);
    },

    insertInContainerBefore(_parentInstance, _childInstance, _beforeChild) {
      // console.log('insertBefore', _parentInstance, _childInstance, _beforeChild);
    },

    appendChild(_parentInstance, _childInstance) {
      // console.log('appendChild', parentInstance, childInstance);
    },

    removeChild(_parentInstance, _childInstance) {
      // console.log('removeChild', _parentInstance, _childInstance);
    },

    insertBefore(_parentInstance, _childInstance, _beforeChild) {
      // console.log('insertBefore', _parentInstance, _childInstance, _beforeChild);
    },

    commitMount(_instance, _type, _newProps, _internalInstanceHandle) {
    },

    commitUpdate(_instance, _updatePayload, _type, _oldProps, _newProps, _internalInstanceHandle) {
    },

    commitTextUpdate(_textInstance, _oldText, _newText) {
    },

    resetTextContent(_textInstance) {
    },
  },
});
