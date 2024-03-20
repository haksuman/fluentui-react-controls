"use strict";(self.webpackChunk_spfxappdev_fluentui_react_controls=self.webpackChunk_spfxappdev_fluentui_react_controls||[]).push([[320],{"./stories/plugins/dialog/DialogPlugin.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,alert:()=>DialogPlugin_stories_alert,basicPrompt:()=>basicPrompt,confirm:()=>DialogPlugin_stories_confirm,default:()=>DialogPlugin_stories,promptWithValidation:()=>promptWithValidation});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),lib=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.1/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./stories/components/index.ts"),pluginContainer=__webpack_require__("./stories/plugins/pluginContainer/index.ts");function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var AlertDialog=function(){function AlertDialog(){_class_call_check(this,AlertDialog)}return _create_class(AlertDialog,null,[{key:"open",value:function open(props){var containerId=pluginContainer.z.create(),content=react.createElement(components.Lt,_object_spread_props(_object_spread({},props),{hidden:!1,onDismiss:function(){pluginContainer.z.remove(containerId)}}));pluginContainer.z.render(containerId,content)}}]),AlertDialog}();function ConfirmDialog_class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function ConfirmDialog_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function ConfirmDialog_create_class(Constructor,protoProps,staticProps){return protoProps&&ConfirmDialog_defineProperties(Constructor.prototype,protoProps),staticProps&&ConfirmDialog_defineProperties(Constructor,staticProps),Constructor}function ConfirmDialog_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ConfirmDialog_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ConfirmDialog_define_property(target,key,source[key])})}return target}function ConfirmDialog_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ConfirmDialog_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ConfirmDialog_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var ConfirmDialog=function(){function ConfirmDialog(){ConfirmDialog_class_call_check(this,ConfirmDialog)}return ConfirmDialog_create_class(ConfirmDialog,null,[{key:"open",value:function open(props){var containerId=pluginContainer.z.create(),content=react.createElement(components.TM,ConfirmDialog_object_spread_props(ConfirmDialog_object_spread({},props),{hidden:!1,onConfirmed:function(){pluginContainer.z.remove(containerId),props&&"function"==typeof props.onConfirmed&&props.onConfirmed()},onCanceled:function(){pluginContainer.z.remove(containerId),props&&"function"==typeof props.onCanceled&&props.onCanceled()}}));pluginContainer.z.render(containerId,content)}}]),ConfirmDialog}(),utility_lib=__webpack_require__("./node_modules/.pnpm/@spfxappdev+utility@1.4.1/node_modules/@spfxappdev/utility/lib/index.js");function PromptDialog_class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function PromptDialog_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function PromptDialog_create_class(Constructor,protoProps,staticProps){return protoProps&&PromptDialog_defineProperties(Constructor.prototype,protoProps),staticProps&&PromptDialog_defineProperties(Constructor,staticProps),Constructor}function PromptDialog_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PromptDialog_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PromptDialog_define_property(target,key,source[key])})}return target}function PromptDialog_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function PromptDialog_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PromptDialog_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var PromptDialog=function(){function PromptDialog(){PromptDialog_class_call_check(this,PromptDialog)}return PromptDialog_create_class(PromptDialog,null,[{key:"open",value:function open(props){var containerId=pluginContainer.z.create(),content=react.createElement(components.X_,PromptDialog_object_spread_props(PromptDialog_object_spread({},props),{hidden:!1,onConfirmed:function(enteredValue){pluginContainer.z.remove(containerId),props&&"function"==typeof props.onConfirmed&&props.onConfirmed(enteredValue)},onCanceled:function(){pluginContainer.z.remove(containerId),props&&"function"==typeof props.onCanceled&&props.onCanceled()},textFieldProps:{onChange:function(ev,newVal){(0,utility_lib.isFunction)((0,utility_lib.getDeepOrDefault)(props,"textFieldProps.onChange"))&&props.textFieldProps.onChange(content.props,newVal)}}}));pluginContainer.z.render(containerId,content)}}]),PromptDialog}(),PrimaryButton=__webpack_require__("./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",h4:"h4"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Plugins/Dialog"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"dialog-plugins",children:"Dialog Plugins"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Dialog Plugins"})," are a set of utilities designed to simplify the process of opening Alert, Confirm, or Prompt dialogs within react applications without the need for complex state management.\r\nWith just a single line of code, these plugins enable developers to open dialogs."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"alert",children:"Alert"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Alert",args:{title:"Alert Title",content:"This is an alert!",buttonText:"OK"},children:args=>(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{AlertDialog.open(args)},children:"Show Alert"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"confirm",children:"Confirm"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examples-1",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Confirm",args:{title:"Confirm Title",content:"Are you sure?",confirmButtonText:"YES",cancelButtonText:"NO"},children:args=>(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{ConfirmDialog.open(args)},children:"Show Confirm"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"prompt",children:"Prompt"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"examples-2",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Basic Prompt",args:{title:"Prompt Title",content:"What's your name?",confirmButtonText:"OK",cancelButtonText:"Cancel"},children:args=>(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{PromptDialog.open(args)},children:"Show Prompt"})})})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"prompt-with-validation",children:"Prompt with validation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Prompt with validation",args:{title:"Prompt Title",content:"What's your name? (Minimum 3 characters)",confirmButtonText:"OK",cancelButtonText:"Cancel",hideCancelButton:!0},children:args=>(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{PromptDialog.open({...args,confirmButtonDisabled:newValue=>!newValue||newValue&&newValue.trim().length<3,textFieldProps:{required:!0,label:"Name",onChange:(ev,newValue)=>{console.log("SSC",ev)}}})},children:"Show Prompt"})})})})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let DialogPlugin_stories_alert=args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{AlertDialog.open(args)},children:"Show Alert"})});DialogPlugin_stories_alert.storyName="Alert",DialogPlugin_stories_alert.args={title:"Alert Title",content:"This is an alert!",buttonText:"OK"},DialogPlugin_stories_alert.parameters={storySource:{source:"args => {\n  return <div>\n        <PrimaryButton onClick={() => {\n      AlertDialog.open(args);\n    }}>Show Alert</PrimaryButton>\n        </div>;\n}"}};let DialogPlugin_stories_confirm=args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{ConfirmDialog.open(args)},children:"Show Confirm"})});DialogPlugin_stories_confirm.storyName="Confirm",DialogPlugin_stories_confirm.args={title:"Confirm Title",content:"Are you sure?",confirmButtonText:"YES",cancelButtonText:"NO"},DialogPlugin_stories_confirm.parameters={storySource:{source:"args => {\n  return <div>\n        <PrimaryButton onClick={() => {\n      ConfirmDialog.open(args);\n    }}>Show Confirm</PrimaryButton>\n        </div>;\n}"}};let basicPrompt=args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{PromptDialog.open(args)},children:"Show Prompt"})});basicPrompt.storyName="Basic Prompt",basicPrompt.args={title:"Prompt Title",content:"What's your name?",confirmButtonText:"OK",cancelButtonText:"Cancel"},basicPrompt.parameters={storySource:{source:"args => {\n  return <div>\n        <PrimaryButton onClick={() => {\n      PromptDialog.open(args);\n    }}>Show Prompt</PrimaryButton>\n        </div>;\n}"}};let promptWithValidation=args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(PrimaryButton.j,{onClick:()=>{PromptDialog.open({...args,confirmButtonDisabled:newValue=>!newValue||newValue&&newValue.trim().length<3,textFieldProps:{required:!0,label:"Name",onChange:(ev,newValue)=>{console.log("SSC",ev)}}})},children:"Show Prompt"})});promptWithValidation.storyName="Prompt with validation",promptWithValidation.args={title:"Prompt Title",content:"What's your name? (Minimum 3 characters)",confirmButtonText:"OK",cancelButtonText:"Cancel",hideCancelButton:!0},promptWithValidation.parameters={storySource:{source:'args => {\n  return <div>\n        <PrimaryButton onClick={() => {\n      PromptDialog.open({\n        ...args,\n        ...{\n          confirmButtonDisabled: newValue => {\n            return !newValue || newValue && newValue.trim().length < 3;\n          },\n          textFieldProps: {\n            required: true,\n            label: "Name",\n            onChange: (ev, newValue) => {\n              console.log("SSC", ev);\n            }\n          }\n        }\n      });\n    }}>Show Prompt</PrimaryButton>\n        </div>;\n}'}};let componentMeta={title:"Plugins/Dialog",tags:["stories-mdx"],includeStories:["alert","confirm","basicPrompt","promptWithValidation"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let DialogPlugin_stories=componentMeta,__namedExportsOrder=["alert","confirm","basicPrompt","promptWithValidation"]}}]);