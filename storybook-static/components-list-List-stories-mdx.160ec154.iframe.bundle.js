(self.webpackChunk_spfxappdev_fluentui_react_controls=self.webpackChunk_spfxappdev_fluentui_react_controls||[]).push([[391],{"./node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.1/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG}),__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/blocks/dist/index.mjs")},"./stories/components/list/List.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTemplate:()=>BasicTemplate,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");var D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.1/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/blocks/dist/index.mjs"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/list/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-runtime.js");let BasicTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.B,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.c,{clickable:!0,children:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.c,{children:"Item 2 (not clickable)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.c,{disabled:!0,hoverEffect:!1,children:"Item 3 (diabled, no effect)"})]});function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre"},(0,D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/List & List Items",component:___WEBPACK_IMPORTED_MODULE_2__.B}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"list-and-list-items",children:"List and List Items"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"List"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ListItem"})," components were developed to display multiple lines in a vertical layout that merge seamlessly into a single continuous element.\r\nThey are ideal for displaying homogeneous data types in the form of rows of information, such as a contact list, a playlist or a menu.\r\nEach line, referred to as a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ListItem"}),", contains specific details or content relevant to the context of the list.\r\nIn addition, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ListItem"})," component retains its usefulness outside the boundaries of a list and offers flexibility for use in different components and interfaces."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.B}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"import { List, ListItem } from '@spfxappdev/fluentui-react-controls';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"sample-code",children:"Sample Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"<List bordered separator>\r\n    <ListItem clickable={true}>Item 1</ListItem>\r\n    <ListItem>Item 2 (not clickable)</ListItem>\r\n    <ListItem disabled hoverEffect={false}>Item 3 (diabled, no effect)</ListItem>\r\n</List>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{args:{bordered:!0,separator:!0},name:"Basic",children:BasicTemplate.bind({})})})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let basic=BasicTemplate.bind({});basic.storyName="Basic",basic.args={bordered:!0,separator:!0},basic.parameters={storySource:{source:"args => <List {...args}>\n    <ListItem clickable={true}>Item 1</ListItem>\n    <ListItem>Item 2 (not clickable)</ListItem>\n    <ListItem disabled hoverEffect={false}>Item 3 (diabled, no effect)</ListItem>\n  </List>"}};let componentMeta={title:"Components/List & List Items",component:___WEBPACK_IMPORTED_MODULE_2__.B,tags:["stories-mdx"],includeStories:["basic"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["BasicTemplate","basic"]},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./stories/components/list/List.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PQzfQWtrZHUf_beH9gcQ{display:block}.UXrlQv0RSH3JOlgr7C9S{border:1px solid rgba(0,0,0,.12)}.eyK5vaVJQHzApj3Liz2B{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;width:auto;min-width:0;max-width:100%;flex:10000 1 0%;padding:8px 16px}.ty7LJ5TeIC1Hf2Wksw7w{cursor:pointer}.QZ_qKYl74_ofhYuXpVJQ .Zb3ln2jdZI654_gRl0Sh,.ty7LJ5TeIC1Hf2Wksw7w .Zb3ln2jdZI654_gRl0Sh{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border-radius:inherit;opacity:0;transition:background-color .3s cubic-bezier(0.25, 0.8, 0.5, 1),opacity .4s cubic-bezier(0.25, 0.8, 0.5, 1)}.QZ_qKYl74_ofhYuXpVJQ:hover .Zb3ln2jdZI654_gRl0Sh,.ty7LJ5TeIC1Hf2Wksw7w:hover .Zb3ln2jdZI654_gRl0Sh{background:currentColor;opacity:.15}.OTzTKNASdqJuQLCLs_su{display:block}.OTzTKNASdqJuQLCLs_su .eyK5vaVJQHzApj3Liz2B{border-bottom:1px solid rgba(0,0,0,.12)}.OTzTKNASdqJuQLCLs_su .eyK5vaVJQHzApj3Liz2B:last-of-type{border-bottom-width:0px}","",{version:3,sources:["webpack://./stories/components/list/List.module.scss"],names:[],mappings:"AAAA,sBACE,aAAA,CAIA,sBACE,gCAAA,CAGF,sBACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CAEA,sBACE,cAAA,CAKA,wFACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,qBAAA,CACA,SAAA,CACA,2GAAA,CAIF,oGACE,uBAAA,CACA,WAAA,CAKN,sBACE,aAAA,CAEA,4CACE,uCAAA,CAGF,yDACE,uBAAA",sourcesContent:[".list {\r\n  display: block;\r\n\r\n  $list: &;\r\n\r\n  &--bordered {\r\n    border: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n  &-item {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    width: auto;\r\n    min-width: 0;\r\n    max-width: 100%;\r\n    flex: 10000 1 0%;\r\n    padding: 8px 16px;\r\n\r\n    &--clickable {\r\n      cursor: pointer;\r\n    }\r\n\r\n    &--hoverable,\r\n    &--clickable {\r\n      .hoverhelper {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        pointer-events: none;\r\n        border-radius: inherit;\r\n        opacity: 0;\r\n        transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),\r\n          opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\r\n      }\r\n\r\n      &:hover .hoverhelper {\r\n        background: currentColor;\r\n        opacity: 0.15;\r\n      }\r\n    }\r\n  }\r\n\r\n  &--separator {\r\n    display: block;\r\n\r\n    #{$list}-item {\r\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n    }\r\n\r\n    #{$list}-item:last-of-type {\r\n      border-bottom-width: 0px;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={list:"PQzfQWtrZHUf_beH9gcQ","list--bordered":"UXrlQv0RSH3JOlgr7C9S","list-item":"eyK5vaVJQHzApj3Liz2B","list-item--clickable":"ty7LJ5TeIC1Hf2Wksw7w","list-item--hoverable":"QZ_qKYl74_ofhYuXpVJQ",hoverhelper:"Zb3ln2jdZI654_gRl0Sh","list--separator":"OTzTKNASdqJuQLCLs_su"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/.pnpm/react@17.0.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/** @license React v17.0.1
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_require__("./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/components/list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>List,c:()=>ListItem});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),List_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./stories/components/list/List.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(List_module.A,options);let list_List_module=List_module.A&&List_module.A.locals?List_module.A.locals:void 0;var lib=__webpack_require__("./node_modules/.pnpm/@spfxappdev+utility@1.4.1/node_modules/@spfxappdev/utility/lib/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var List=function(props){var additionalCssClasses={};return additionalCssClasses[list_List_module["list--bordered"]]=props.bordered,additionalCssClasses[list_List_module["list--separator"]]=props.separator,react.createElement("div",_object_spread_props(_object_spread({},props),{className:(0,lib.cssClasses)(list_List_module.list,additionalCssClasses,props.className)}),props.children)};try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{bordered:{defaultValue:null,description:"Applies a default border to the component",name:"bordered",required:!1,type:{name:"boolean"}},separator:{defaultValue:null,description:"Applies a separator between contained items",name:"separator",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/list/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"stories/components/list/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}function ListItem_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ListItem_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ListItem_define_property(target,key,source[key])})}return target}function ListItem_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ListItem_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ListItem_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var ListItem=function(props){var mergedProps=ListItem_object_spread({},{hoverEffect:!0},props),additionalCssClasses={};return additionalCssClasses[list_List_module["list-item--clickable"]]=mergedProps.clickable,additionalCssClasses[list_List_module["list-item--hoverable"]]=mergedProps.hoverEffect,react.createElement("div",ListItem_object_spread_props(ListItem_object_spread({},mergedProps),{className:(0,lib.cssClasses)(list_List_module["list-item"],additionalCssClasses,mergedProps.className),onClick:function(event){mergedProps.clickable&&(0,lib.isFunction)(mergedProps.onClick)&&mergedProps.onClick(event)}}),mergedProps.hoverEffect&&react.createElement("div",{className:(0,lib.cssClasses)(list_List_module.hoverhelper),tabIndex:-1}),mergedProps.children)};try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},hoverEffect:{defaultValue:null,description:"",name:"hoverEffect",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/list/ListItem.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"stories/components/list/ListItem.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-list-List-stories-mdx.160ec154.iframe.bundle.js.map