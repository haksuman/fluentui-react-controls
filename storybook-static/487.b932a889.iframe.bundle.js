"use strict";(self.webpackChunk_spfxappdev_fluentui_react_controls=self.webpackChunk_spfxappdev_fluentui_react_controls||[]).push([[487],{"./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),BaseButton=__webpack_require__("./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js"),BaseComponent=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/BaseComponent.js"),customizable=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/customizations/customizable.js"),lib=__webpack_require__("./node_modules/.pnpm/@uifabric+styling@7.25.1_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/styling/lib/index.js"),memoize=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/memoize.js"),BaseButton_styles=__webpack_require__("./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js"),SplitButton_styles=__webpack_require__("./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js"),getStyles=(0,memoize.J9)(function(theme,customStyles){var _a,baseButtonStyles=(0,BaseButton_styles.$)(theme),splitButtonStyles=(0,SplitButton_styles.$)(theme),palette=theme.palette,iconButtonStyles={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:theme.semanticColors.link},rootHovered:{color:palette.themeDarkAlt,backgroundColor:palette.neutralLighter,selectors:((_a={})[lib.up]={borderColor:"Highlight",color:"Highlight"},_a)},rootHasMenu:{width:"auto"},rootPressed:{color:palette.themeDark,backgroundColor:palette.neutralLight},rootExpanded:{color:palette.themeDark,backgroundColor:palette.neutralLight},rootChecked:{color:palette.themeDark,backgroundColor:palette.neutralLight},rootCheckedHovered:{color:palette.themeDark,backgroundColor:palette.neutralQuaternaryAlt},rootDisabled:{color:palette.neutralTertiaryAlt}};return(0,lib.TW)(baseButtonStyles,iconButtonStyles,splitButtonStyles,customStyles)}),IconButton=function(_super){function IconButton(){return null!==_super&&_super.apply(this,arguments)||this}return(0,tslib_es6.C6)(IconButton,_super),IconButton.prototype.render=function(){var _a=this.props,styles=_a.styles,theme=_a.theme;return react.createElement(BaseButton.S,(0,tslib_es6.Cl)({},this.props,{variantClassName:"ms-Button--icon",styles:getStyles(theme,styles),onRenderText:BaseComponent.K,onRenderDescription:BaseComponent.K}))},IconButton=(0,tslib_es6.Cg)([(0,customizable.T)("IconButton",["theme","styles"],!0)],IconButton)}(react.Component)},"./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FocusTrapZone});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),getDocument=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/dom/getDocument.js");function modalize(target){for(var _a,affectedNodes=[],targetDocument=(0,getDocument.Y)(target)||document;target!==targetDocument.body;){for(var _i=0,_b=target.parentElement.children;_i<_b.length;_i++){var sibling=_b[_i];sibling!==target&&(null===(_a=sibling.getAttribute("aria-hidden"))||void 0===_a?void 0:_a.toLowerCase())!=="true"&&affectedNodes.push(sibling)}if(!target.parentElement)break;target=target.parentElement}return affectedNodes.forEach(function(node){node.setAttribute("aria-hidden","true")}),function(){unmodalize(affectedNodes),affectedNodes=[]}}function unmodalize(affectedNodes){affectedNodes.forEach(function(node){node.setAttribute("aria-hidden","false")})}var elementContains=__webpack_require__("./node_modules/.pnpm/@fluentui+dom-utilities@1.1.2/node_modules/@fluentui/dom-utilities/lib/elementContains.js"),lib_focus=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/focus.js"),initializeComponentRef=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/initializeComponentRef.js"),properties=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/properties.js"),on=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/dom/on.js"),FocusTrapZone=function(_super){function FocusTrapZone(props){var _this=_super.call(this,props)||this;return _this._root=react.createRef(),_this._firstBumper=react.createRef(),_this._lastBumper=react.createRef(),_this._hasFocus=!1,_this._onRootFocus=function(ev){_this.props.onFocus&&_this.props.onFocus(ev),_this._hasFocus=!0},_this._onRootBlur=function(ev){_this.props.onBlur&&_this.props.onBlur(ev);var relatedTarget=ev.relatedTarget;null===ev.relatedTarget&&(relatedTarget=_this._getDocument().activeElement),(0,elementContains.s)(_this._root.current,relatedTarget)||(_this._hasFocus=!1)},_this._onFirstBumperFocus=function(){_this._onBumperFocus(!0)},_this._onLastBumperFocus=function(){_this._onBumperFocus(!1)},_this._onBumperFocus=function(isFirstBumper){if(!_this.props.disabled){var currentBumper=isFirstBumper===_this._hasFocus?_this._lastBumper.current:_this._firstBumper.current;if(_this._root.current){var nextFocusable=isFirstBumper===_this._hasFocus?(0,lib_focus.Cm)(_this._root.current,currentBumper,!0,!1):(0,lib_focus.oR)(_this._root.current,currentBumper,!0,!1);nextFocusable&&(_this._isBumper(nextFocusable)?_this.focus():nextFocusable.focus())}}},_this._onFocusCapture=function(ev){_this.props.onFocusCapture&&_this.props.onFocusCapture(ev),ev.target===ev.currentTarget||_this._isBumper(ev.target)||(_this._previouslyFocusedElementInTrapZone=ev.target)},_this._forceFocusInTrap=function(ev){if(!_this.props.disabled&&FocusTrapZone._focusStack.length&&_this===FocusTrapZone._focusStack[FocusTrapZone._focusStack.length-1]){var focusedElement=_this._getDocument().activeElement;if(!(0,elementContains.s)(_this._root.current,focusedElement)){var doc_1=_this._getDocument();doc_1&&doc_1.activeElement===doc_1.body?setTimeout(function(){doc_1&&doc_1.activeElement===doc_1.body&&(_this.focus(),_this._hasFocus=!0)},0):(_this.focus(),_this._hasFocus=!0),ev.preventDefault(),ev.stopPropagation()}}},_this._forceClickInTrap=function(ev){if(!_this.props.disabled&&FocusTrapZone._focusStack.length&&_this===FocusTrapZone._focusStack[FocusTrapZone._focusStack.length-1]){var clickedElement=ev.target;clickedElement&&!(0,elementContains.s)(_this._root.current,clickedElement)&&(_this.focus(),_this._hasFocus=!0,ev.preventDefault(),ev.stopPropagation())}},(0,initializeComponentRef.f)(_this),_this}return(0,tslib_es6.C6)(FocusTrapZone,_super),FocusTrapZone.prototype.componentDidMount=function(){this._bringFocusIntoZone(),this._updateEventHandlers(this.props),!this.props.disabled&&this._root.current&&this.props.enableAriaHiddenSiblings&&(this._unmodalize=modalize(this._root.current))},FocusTrapZone.prototype.UNSAFE_componentWillReceiveProps=function(nextProps){var elementToFocusOnDismiss=nextProps.elementToFocusOnDismiss;elementToFocusOnDismiss&&this._previouslyFocusedElementOutsideTrapZone!==elementToFocusOnDismiss&&(this._previouslyFocusedElementOutsideTrapZone=elementToFocusOnDismiss),this._updateEventHandlers(nextProps)},FocusTrapZone.prototype.componentDidUpdate=function(prevProps){var prevForceFocusInsideTrap=void 0===prevProps.forceFocusInsideTrap||prevProps.forceFocusInsideTrap,newForceFocusInsideTrap=void 0===this.props.forceFocusInsideTrap||this.props.forceFocusInsideTrap,prevDisabled=void 0!==prevProps.disabled&&prevProps.disabled,newDisabled=void 0!==this.props.disabled&&this.props.disabled;!prevForceFocusInsideTrap&&newForceFocusInsideTrap||prevDisabled&&!newDisabled?(this._bringFocusIntoZone(),!this._unmodalize&&this._root.current&&this.props.enableAriaHiddenSiblings&&(this._unmodalize=modalize(this._root.current))):(prevForceFocusInsideTrap&&!newForceFocusInsideTrap||!prevDisabled&&newDisabled)&&(this._returnFocusToInitiator(),this._unmodalize&&this._unmodalize())},FocusTrapZone.prototype.componentWillUnmount=function(){this.props.disabled&&!this.props.forceFocusInsideTrap&&(0,elementContains.s)(this._root.current,this._getDocument().activeElement)||this._returnFocusToInitiator(),this._disposeClickHandler&&(this._disposeClickHandler(),this._disposeClickHandler=void 0),this._disposeFocusHandler&&(this._disposeFocusHandler(),this._disposeFocusHandler=void 0),this._unmodalize&&this._unmodalize(),delete this._previouslyFocusedElementInTrapZone,delete this._previouslyFocusedElementOutsideTrapZone},FocusTrapZone.prototype.render=function(){var _a=this.props,className=_a.className,_b=_a.disabled,ariaLabelledBy=_a.ariaLabelledBy,divProps=(0,properties.G1)(this.props,properties.JM),bumperProps={"aria-hidden":!0,style:{pointerEvents:"none",position:"fixed"},tabIndex:void 0!==_b&&_b?-1:0,"data-is-visible":!0};return react.createElement("div",(0,tslib_es6.Cl)({},divProps,{className:className,ref:this._root,"aria-labelledby":ariaLabelledBy,onFocusCapture:this._onFocusCapture,onFocus:this._onRootFocus,onBlur:this._onRootBlur}),react.createElement("div",(0,tslib_es6.Cl)({},bumperProps,{ref:this._firstBumper,onFocus:this._onFirstBumperFocus})),this.props.children,react.createElement("div",(0,tslib_es6.Cl)({},bumperProps,{ref:this._lastBumper,onFocus:this._onLastBumperFocus})))},FocusTrapZone.prototype.focus=function(){var _a=this.props,focusPreviouslyFocusedInnerElement=_a.focusPreviouslyFocusedInnerElement,firstFocusableSelector=_a.firstFocusableSelector,firstFocusableTarget=_a.firstFocusableTarget;if(focusPreviouslyFocusedInnerElement&&this._previouslyFocusedElementInTrapZone&&(0,elementContains.s)(this._root.current,this._previouslyFocusedElementInTrapZone)){this._focusAsync(this._previouslyFocusedElementInTrapZone);return}var focusSelector="string"==typeof firstFocusableSelector?firstFocusableSelector:firstFocusableSelector&&firstFocusableSelector(),_firstFocusableChild=null;this._root.current&&("string"==typeof firstFocusableTarget?_firstFocusableChild=this._root.current.querySelector(firstFocusableTarget):firstFocusableTarget?_firstFocusableChild=firstFocusableTarget(this._root.current):focusSelector&&(_firstFocusableChild=this._root.current.querySelector("."+focusSelector)),_firstFocusableChild||(_firstFocusableChild=(0,lib_focus.eX)(this._root.current,this._root.current.firstChild,!1,!1,!1,!0))),_firstFocusableChild&&this._focusAsync(_firstFocusableChild)},FocusTrapZone.prototype._focusAsync=function(element){this._isBumper(element)||(0,lib_focus.lo)(element)},FocusTrapZone.prototype._bringFocusIntoZone=function(){var _a=this.props,elementToFocusOnDismiss=_a.elementToFocusOnDismiss,_b=_a.disabled,_c=_a.disableFirstFocus;(void 0===_b||!_b)&&(FocusTrapZone._focusStack.push(this),this._previouslyFocusedElementOutsideTrapZone=elementToFocusOnDismiss||this._getDocument().activeElement,void 0!==_c&&_c||(0,elementContains.s)(this._root.current,this._previouslyFocusedElementOutsideTrapZone)||this.focus())},FocusTrapZone.prototype._returnFocusToInitiator=function(){var _this=this,ignoreExternalFocusing=this.props.ignoreExternalFocusing;FocusTrapZone._focusStack=FocusTrapZone._focusStack.filter(function(value){return _this!==value});var doc=this._getDocument(),activeElement=doc.activeElement;!ignoreExternalFocusing&&this._previouslyFocusedElementOutsideTrapZone&&"function"==typeof this._previouslyFocusedElementOutsideTrapZone.focus&&((0,elementContains.s)(this._root.current,activeElement)||activeElement===doc.body)&&this._focusAsync(this._previouslyFocusedElementOutsideTrapZone)},FocusTrapZone.prototype._updateEventHandlers=function(newProps){var _a=newProps.isClickableOutsideFocusTrap,isClickableOutsideFocusTrap=void 0!==_a&&_a,_b=newProps.forceFocusInsideTrap,forceFocusInsideTrap=void 0===_b||_b;forceFocusInsideTrap&&!this._disposeFocusHandler?this._disposeFocusHandler=(0,on.on)(window,"focus",this._forceFocusInTrap,!0):!forceFocusInsideTrap&&this._disposeFocusHandler&&(this._disposeFocusHandler(),this._disposeFocusHandler=void 0),isClickableOutsideFocusTrap||this._disposeClickHandler?isClickableOutsideFocusTrap&&this._disposeClickHandler&&(this._disposeClickHandler(),this._disposeClickHandler=void 0):this._disposeClickHandler=(0,on.on)(window,"click",this._forceClickInTrap,!0)},FocusTrapZone.prototype._isBumper=function(element){return element===this._firstBumper.current||element===this._lastBumper.current},FocusTrapZone.prototype._getDocument=function(){return(0,getDocument.Y)(this._root.current)},FocusTrapZone._focusStack=[],FocusTrapZone}(react.Component)},"./node_modules/.pnpm/office-ui-fabric-react@7.204.0_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Overlay});var styled=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/styled.js"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),classNamesFunction=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/classNamesFunction.js"),initializeComponentRef=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/initializeComponentRef.js"),lib_scroll=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/scroll.js"),properties=__webpack_require__("./node_modules/.pnpm/@uifabric+utilities@7.38.2_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/utilities/lib/properties.js"),getClassNames=(0,classNamesFunction.Z)(),OverlayBase=function(_super){function OverlayBase(props){var _this=_super.call(this,props)||this;(0,initializeComponentRef.f)(_this);var _a=_this.props.allowTouchBodyScroll;return _this._allowTouchBodyScroll=void 0!==_a&&_a,_this}return(0,tslib_es6.C6)(OverlayBase,_super),OverlayBase.prototype.componentDidMount=function(){this._allowTouchBodyScroll||(0,lib_scroll.mh)()},OverlayBase.prototype.componentWillUnmount=function(){this._allowTouchBodyScroll||(0,lib_scroll.fY)()},OverlayBase.prototype.render=function(){var _a=this.props,isDark=_a.isDarkThemed,className=_a.className,theme=_a.theme,styles=_a.styles,divProps=(0,properties.G1)(this.props,properties.JM),classNames=getClassNames(styles,{theme:theme,className:className,isDark:isDark});return react.createElement("div",(0,tslib_es6.Cl)({},divProps,{className:classNames.root}))},OverlayBase}(react.Component),lib=__webpack_require__("./node_modules/.pnpm/@uifabric+styling@7.25.1_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@uifabric/styling/lib/index.js"),GlobalClassNames={root:"ms-Overlay",rootDark:"ms-Overlay--dark"},Overlay=(0,styled.I)(OverlayBase,function(props){var _a,className=props.className,theme=props.theme,isNone=props.isNone,isDark=props.isDark,palette=theme.palette,classNames=(0,lib.Km)(GlobalClassNames,theme);return{root:[classNames.root,theme.fonts.medium,{backgroundColor:palette.whiteTranslucent40,top:0,right:0,bottom:0,left:0,position:"absolute",selectors:((_a={})[lib.up]={border:"1px solid WindowText",opacity:0},_a)},isNone&&{visibility:"hidden"},isDark&&[classNames.rootDark,{backgroundColor:palette.blackTranslucent40}],className]}},void 0,{scope:"Overlay"})}}]);