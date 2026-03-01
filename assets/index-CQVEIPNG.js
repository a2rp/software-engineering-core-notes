(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function o(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=o(m);fetch(m.href,j)}})();function dx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Al={exports:{}},tt={},_l={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function px(){if(lp)return te;lp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=W&&f[W]||f["@@iterator"],typeof f=="function"?f:null)}var oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,B={};function q(f,b,ee){this.props=f,this.context=b,this.refs=B,this.updater=ee||oe}q.prototype.isReactComponent={},q.prototype.setState=function(f,b){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,b,"setState")},q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function me(){}me.prototype=q.prototype;function de(f,b,ee){this.props=f,this.context=b,this.refs=B,this.updater=ee||oe}var ne=de.prototype=new me;ne.constructor=de,X(ne,q.prototype),ne.isPureReactComponent=!0;var P=Array.isArray,Z=Object.prototype.hasOwnProperty,$={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function D(f,b,ee){var re,le={},ae=null,pe=null;if(b!=null)for(re in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(ae=""+b.key),b)Z.call(b,re)&&!I.hasOwnProperty(re)&&(le[re]=b[re]);var ce=arguments.length-2;if(ce===1)le.children=ee;else if(1<ce){for(var fe=Array(ce),Te=0;Te<ce;Te++)fe[Te]=arguments[Te+2];le.children=fe}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)le[re]===void 0&&(le[re]=ce[re]);return{$$typeof:a,type:f,key:ae,ref:pe,props:le,_owner:$.current}}function ye(f,b){return{$$typeof:a,type:f.type,key:b,ref:f.ref,props:f.props,_owner:f._owner}}function Re(f){return typeof f=="object"&&f!==null&&f.$$typeof===a}function ie(f){var b={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(ee){return b[ee]})}var ze=/\/+/g;function Se(f,b){return typeof f=="object"&&f!==null&&f.key!=null?ie(""+f.key):b.toString(36)}function Ge(f,b,ee,re,le){var ae=typeof f;(ae==="undefined"||ae==="boolean")&&(f=null);var pe=!1;if(f===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(f.$$typeof){case a:case c:pe=!0}}if(pe)return pe=f,le=le(pe),f=re===""?"."+Se(pe,0):re,P(le)?(ee="",f!=null&&(ee=f.replace(ze,"$&/")+"/"),Ge(le,b,ee,"",function(Te){return Te})):le!=null&&(Re(le)&&(le=ye(le,ee+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(ze,"$&/")+"/")+f)),b.push(le)),1;if(pe=0,re=re===""?".":re+":",P(f))for(var ce=0;ce<f.length;ce++){ae=f[ce];var fe=re+Se(ae,ce);pe+=Ge(ae,b,ee,fe,le)}else if(fe=J(f),typeof fe=="function")for(f=fe.call(f),ce=0;!(ae=f.next()).done;)ae=ae.value,fe=re+Se(ae,ce++),pe+=Ge(ae,b,ee,fe,le);else if(ae==="object")throw b=String(f),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function Ze(f,b,ee){if(f==null)return f;var re=[],le=0;return Ge(f,re,"","",function(ae){return b.call(ee,ae,le++)}),re}function qe(f){if(f._status===-1){var b=f._result;b=b(),b.then(function(ee){(f._status===0||f._status===-1)&&(f._status=1,f._result=ee)},function(ee){(f._status===0||f._status===-1)&&(f._status=2,f._result=ee)}),f._status===-1&&(f._status=0,f._result=b)}if(f._status===1)return f._result.default;throw f._result}var je={current:null},E={transition:null},F={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:E,ReactCurrentOwner:$};function R(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Ze,forEach:function(f,b,ee){Ze(f,function(){b.apply(this,arguments)},ee)},count:function(f){var b=0;return Ze(f,function(){b++}),b},toArray:function(f){return Ze(f,function(b){return b})||[]},only:function(f){if(!Re(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},te.Component=q,te.Fragment=o,te.Profiler=m,te.PureComponent=de,te.StrictMode=p,te.Suspense=T,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,te.act=R,te.cloneElement=function(f,b,ee){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=X({},f.props),le=f.key,ae=f.ref,pe=f._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,pe=$.current),b.key!==void 0&&(le=""+b.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(fe in b)Z.call(b,fe)&&!I.hasOwnProperty(fe)&&(re[fe]=b[fe]===void 0&&ce!==void 0?ce[fe]:b[fe])}var fe=arguments.length-2;if(fe===1)re.children=ee;else if(1<fe){ce=Array(fe);for(var Te=0;Te<fe;Te++)ce[Te]=arguments[Te+2];re.children=ce}return{$$typeof:a,type:f.type,key:le,ref:ae,props:re,_owner:pe}},te.createContext=function(f){return f={$$typeof:S,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},te.createElement=D,te.createFactory=function(f){var b=D.bind(null,f);return b.type=f,b},te.createRef=function(){return{current:null}},te.forwardRef=function(f){return{$$typeof:z,render:f}},te.isValidElement=Re,te.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:qe}},te.memo=function(f,b){return{$$typeof:Y,type:f,compare:b===void 0?null:b}},te.startTransition=function(f){var b=E.transition;E.transition={};try{f()}finally{E.transition=b}},te.unstable_act=R,te.useCallback=function(f,b){return je.current.useCallback(f,b)},te.useContext=function(f){return je.current.useContext(f)},te.useDebugValue=function(){},te.useDeferredValue=function(f){return je.current.useDeferredValue(f)},te.useEffect=function(f,b){return je.current.useEffect(f,b)},te.useId=function(){return je.current.useId()},te.useImperativeHandle=function(f,b,ee){return je.current.useImperativeHandle(f,b,ee)},te.useInsertionEffect=function(f,b){return je.current.useInsertionEffect(f,b)},te.useLayoutEffect=function(f,b){return je.current.useLayoutEffect(f,b)},te.useMemo=function(f,b){return je.current.useMemo(f,b)},te.useReducer=function(f,b,ee){return je.current.useReducer(f,b,ee)},te.useRef=function(f){return je.current.useRef(f)},te.useState=function(f){return je.current.useState(f)},te.useSyncExternalStore=function(f,b,ee){return je.current.useSyncExternalStore(f,b,ee)},te.useTransition=function(){return je.current.useTransition()},te.version="18.3.1",te}var op;function no(){return op||(op=1,_l.exports=px()),_l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function ux(){if(cp)return tt;cp=1;var a=no(),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(z,T,Y){var G,W={},J=null,oe=null;Y!==void 0&&(J=""+Y),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(oe=T.ref);for(G in T)p.call(T,G)&&!j.hasOwnProperty(G)&&(W[G]=T[G]);if(z&&z.defaultProps)for(G in T=z.defaultProps,T)W[G]===void 0&&(W[G]=T[G]);return{$$typeof:c,type:z,key:J,ref:oe,props:W,_owner:m.current}}return tt.Fragment=o,tt.jsx=S,tt.jsxs=S,tt}var dp;function hx(){return dp||(dp=1,Al.exports=ux()),Al.exports}var e=hx(),wa={},Ml={exports:{}},lr={},Dl={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function xx(){return pp||(pp=1,(function(a){function c(E,F){var R=E.length;E.push(F);e:for(;0<R;){var f=R-1>>>1,b=E[f];if(0<m(b,F))E[f]=F,E[R]=b,R=f;else break e}}function o(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var F=E[0],R=E.pop();if(R!==F){E[0]=R;e:for(var f=0,b=E.length,ee=b>>>1;f<ee;){var re=2*(f+1)-1,le=E[re],ae=re+1,pe=E[ae];if(0>m(le,R))ae<b&&0>m(pe,le)?(E[f]=pe,E[ae]=R,f=ae):(E[f]=le,E[re]=R,f=re);else if(ae<b&&0>m(pe,R))E[f]=pe,E[ae]=R,f=ae;else break e}}return F}function m(E,F){var R=E.sortIndex-F.sortIndex;return R!==0?R:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;a.unstable_now=function(){return j.now()}}else{var S=Date,z=S.now();a.unstable_now=function(){return S.now()-z}}var T=[],Y=[],G=1,W=null,J=3,oe=!1,X=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(E){for(var F=o(Y);F!==null;){if(F.callback===null)p(Y);else if(F.startTime<=E)p(Y),F.sortIndex=F.expirationTime,c(T,F);else break;F=o(Y)}}function P(E){if(B=!1,ne(E),!X)if(o(T)!==null)X=!0,qe(Z);else{var F=o(Y);F!==null&&je(P,F.startTime-E)}}function Z(E,F){X=!1,B&&(B=!1,me(D),D=-1),oe=!0;var R=J;try{for(ne(F),W=o(T);W!==null&&(!(W.expirationTime>F)||E&&!ie());){var f=W.callback;if(typeof f=="function"){W.callback=null,J=W.priorityLevel;var b=f(W.expirationTime<=F);F=a.unstable_now(),typeof b=="function"?W.callback=b:W===o(T)&&p(T),ne(F)}else p(T);W=o(T)}if(W!==null)var ee=!0;else{var re=o(Y);re!==null&&je(P,re.startTime-F),ee=!1}return ee}finally{W=null,J=R,oe=!1}}var $=!1,I=null,D=-1,ye=5,Re=-1;function ie(){return!(a.unstable_now()-Re<ye)}function ze(){if(I!==null){var E=a.unstable_now();Re=E;var F=!0;try{F=I(!0,E)}finally{F?Se():($=!1,I=null)}}else $=!1}var Se;if(typeof de=="function")Se=function(){de(ze)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,Ze=Ge.port2;Ge.port1.onmessage=ze,Se=function(){Ze.postMessage(null)}}else Se=function(){q(ze,0)};function qe(E){I=E,$||($=!0,Se())}function je(E,F){D=q(function(){E(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(E){E.callback=null},a.unstable_continueExecution=function(){X||oe||(X=!0,qe(Z))},a.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<E?Math.floor(1e3/E):5},a.unstable_getCurrentPriorityLevel=function(){return J},a.unstable_getFirstCallbackNode=function(){return o(T)},a.unstable_next=function(E){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var R=J;J=F;try{return E()}finally{J=R}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=J;J=E;try{return F()}finally{J=R}},a.unstable_scheduleCallback=function(E,F,R){var f=a.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?f+R:f):R=f,E){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=R+b,E={id:G++,callback:F,priorityLevel:E,startTime:R,expirationTime:b,sortIndex:-1},R>f?(E.sortIndex=R,c(Y,E),o(T)===null&&E===o(Y)&&(B?(me(D),D=-1):B=!0,je(P,R-f))):(E.sortIndex=b,c(T,E),X||oe||(X=!0,qe(Z))),E},a.unstable_shouldYield=ie,a.unstable_wrapCallback=function(E){var F=J;return function(){var R=J;J=F;try{return E.apply(this,arguments)}finally{J=R}}}})(Ol)),Ol}var up;function mx(){return up||(up=1,Dl.exports=xx()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function fx(){if(hp)return lr;hp=1;var a=no(),c=mx();function o(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(r,s){S(r,s),S(r+"Capture",s)}function S(r,s){for(m[r]=s,r=0;r<s.length;r++)p.add(s[r])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},W={};function J(r){return T.call(W,r)?!0:T.call(G,r)?!1:Y.test(r)?W[r]=!0:(G[r]=!0,!1)}function oe(r,s,n,t){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function X(r,s,n,t){if(s===null||typeof s=="undefined"||oe(r,s,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,n,t,i,l,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=r,this.type=s,this.sanitizeURL=l,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){q[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];q[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){q[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){q[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){q[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){q[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){q[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){q[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){q[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function de(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(me,de);q[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(me,de);q[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(me,de);q[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){q[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),q.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){q[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,n,t){var i=q.hasOwnProperty(s)?q[s]:null;(i!==null?i.type!==0:t||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(X(s,n,i,t)&&(n=null),t||i===null?J(s)&&(n===null?r.removeAttribute(s):r.setAttribute(s,""+n)):i.mustUseProperty?r[i.propertyName]=n===null?i.type===3?!1:"":n:(s=i.attributeName,t=i.attributeNamespace,n===null?r.removeAttribute(s):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,t?r.setAttributeNS(t,s,n):r.setAttribute(s,n))))}var P=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),$=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),ie=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),E=Symbol.iterator;function F(r){return r===null||typeof r!="object"?null:(r=E&&r[E]||r["@@iterator"],typeof r=="function"?r:null)}var R=Object.assign,f;function b(r){if(f===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);f=s&&s[1]||""}return`
`+f+r}var ee=!1;function re(r,s){if(!r||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var t=y}Reflect.construct(r,[],s)}else{try{s.call()}catch(y){t=y}r.call(s.prototype)}else{try{throw Error()}catch(y){t=y}r()}}catch(y){if(y&&t&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=t.stack.split(`
`),d=i.length-1,u=l.length-1;1<=d&&0<=u&&i[d]!==l[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==l[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==l[u]){var h=`
`+i[d].replace(" at new "," at ");return r.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",r.displayName)),h}while(1<=d&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(r=r?r.displayName||r.name:"")?b(r):""}function le(r){switch(r.tag){case 5:return b(r.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return r=re(r.type,!1),r;case 11:return r=re(r.type.render,!1),r;case 1:return r=re(r.type,!0),r;default:return""}}function ae(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case $:return"Portal";case ye:return"Profiler";case D:return"StrictMode";case Se:return"Suspense";case Ge:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ie:return(r.displayName||"Context")+".Consumer";case Re:return(r._context.displayName||"Context")+".Provider";case ze:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ze:return s=r.displayName||null,s!==null?s:ae(r.type)||"Memo";case qe:s=r._payload,r=r._init;try{return ae(r(s))}catch{}}return null}function pe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(s);case 8:return s===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function fe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Te(r){var s=fe(r)?"checked":"value",n=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),t=""+r[s];if(!r.hasOwnProperty(s)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return i.call(this)},set:function(d){t=""+d,l.call(this,d)}}),Object.defineProperty(r,s,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Yr(r){r._valueTracker||(r._valueTracker=Te(r))}function vs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var n=s.getValue(),t="";return r&&(t=fe(r)?r.checked?"true":"false":r.value),r=t,r!==n?(s.setValue(r),!0):!1}function Nr(r){if(r=r||(typeof document!="undefined"?document:void 0),typeof r=="undefined")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ba(r,s){var n=s.checked;return R({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:r._wrapperState.initialChecked})}function xo(r,s){var n=s.defaultValue==null?"":s.defaultValue,t=s.checked!=null?s.checked:s.defaultChecked;n=ce(s.value!=null?s.value:n),r._wrapperState={initialChecked:t,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function mo(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function $a(r,s){mo(r,s);var n=ce(s.value),t=s.type;if(n!=null)t==="number"?(n===0&&r.value===""||r.value!=n)&&(r.value=""+n):r.value!==""+n&&(r.value=""+n);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ua(r,s.type,n):s.hasOwnProperty("defaultValue")&&Ua(r,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function fo(r,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var t=s.type;if(!(t!=="submit"&&t!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,n||s===r.value||(r.value=s),r.defaultValue=s}n=r.name,n!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,n!==""&&(r.name=n)}function Ua(r,s,n){(s!=="number"||Nr(r.ownerDocument)!==r)&&(n==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+n&&(r.defaultValue=""+n))}var yn=Array.isArray;function Ds(r,s,n,t){if(r=r.options,s){s={};for(var i=0;i<n.length;i++)s["$"+n[i]]=!0;for(n=0;n<r.length;n++)i=s.hasOwnProperty("$"+r[n].value),r[n].selected!==i&&(r[n].selected=i),i&&t&&(r[n].defaultSelected=!0)}else{for(n=""+ce(n),s=null,i=0;i<r.length;i++){if(r[i].value===n){r[i].selected=!0,t&&(r[i].defaultSelected=!0);return}s!==null||r[i].disabled||(s=r[i])}s!==null&&(s.selected=!0)}}function Ha(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(o(91));return R({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function go(r,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(o(92));if(yn(n)){if(1<n.length)throw Error(o(93));n=n[0]}s=n}s==null&&(s=""),n=s}r._wrapperState={initialValue:ce(n)}}function vo(r,s){var n=ce(s.value),t=ce(s.defaultValue);n!=null&&(n=""+n,n!==r.value&&(r.value=n),s.defaultValue==null&&r.defaultValue!==n&&(r.defaultValue=n)),t!=null&&(r.defaultValue=""+t)}function yo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function jo(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?jo(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mt,bo=(function(r){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,n,t,i){MSApp.execUnsafeLocalFunction(function(){return r(s,n,t,i)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mt=mt||document.createElement("div"),mt.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function jn(r,s){if(s){var n=r.firstChild;if(n&&n===r.lastChild&&n.nodeType===3){n.nodeValue=s;return}}r.textContent=s}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xu=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(r){xu.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),bn[s]=bn[r]})});function No(r,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||bn.hasOwnProperty(r)&&bn[r]?(""+s).trim():s+"px"}function wo(r,s){r=r.style;for(var n in s)if(s.hasOwnProperty(n)){var t=n.indexOf("--")===0,i=No(n,s[n],t);n==="float"&&(n="cssFloat"),t?r.setProperty(n,i):r[n]=i}}var mu=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(r,s){if(s){if(mu[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(o(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(o(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(o(61))}if(s.style!=null&&typeof s.style!="object")throw Error(o(62))}}function qa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function Ya(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ka=null,Os=null,Fs=null;function ko(r){if(r=Un(r)){if(typeof Ka!="function")throw Error(o(280));var s=r.stateNode;s&&(s=Ot(s),Ka(r.stateNode,r.type,s))}}function So(r){Os?Fs?Fs.push(r):Fs=[r]:Os=r}function Co(){if(Os){var r=Os,s=Fs;if(Fs=Os=null,ko(r),s)for(r=0;r<s.length;r++)ko(s[r])}}function To(r,s){return r(s)}function Eo(){}var Xa=!1;function Io(r,s,n){if(Xa)return r(s,n);Xa=!0;try{return To(r,s,n)}finally{Xa=!1,(Os!==null||Fs!==null)&&(Eo(),Co())}}function Nn(r,s){var n=r.stateNode;if(n===null)return null;var t=Ot(n);if(t===null)return null;n=t[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break e;default:r=!1}if(r)return null;if(n&&typeof n!="function")throw Error(o(231,s,typeof n));return n}var Za=!1;if(z)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Za=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Za=!1}function fu(r,s,n,t,i,l,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(n,y)}catch(w){this.onError(w)}}var kn=!1,ft=null,gt=!1,Ja=null,gu={onError:function(r){kn=!0,ft=r}};function vu(r,s,n,t,i,l,d,u,h){kn=!1,ft=null,fu.apply(gu,arguments)}function yu(r,s,n,t,i,l,d,u,h){if(vu.apply(this,arguments),kn){if(kn){var y=ft;kn=!1,ft=null}else throw Error(o(198));gt||(gt=!0,Ja=y)}}function ys(r){var s=r,n=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(n=s.return),r=s.return;while(r)}return s.tag===3?n:null}function zo(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Po(r){if(ys(r)!==r)throw Error(o(188))}function ju(r){var s=r.alternate;if(!s){if(s=ys(r),s===null)throw Error(o(188));return s!==r?null:r}for(var n=r,t=s;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Po(i),r;if(l===t)return Po(i),s;l=l.sibling}throw Error(o(188))}if(n.return!==t.return)n=i,t=l;else{for(var d=!1,u=i.child;u;){if(u===n){d=!0,n=i,t=l;break}if(u===t){d=!0,t=i,n=l;break}u=u.sibling}if(!d){for(u=l.child;u;){if(u===n){d=!0,n=l,t=i;break}if(u===t){d=!0,t=l,n=i;break}u=u.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==t)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?r:s}function Ro(r){return r=ju(r),r!==null?Lo(r):null}function Lo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Lo(r);if(s!==null)return s;r=r.sibling}return null}var Ao=c.unstable_scheduleCallback,_o=c.unstable_cancelCallback,bu=c.unstable_shouldYield,Nu=c.unstable_requestPaint,Le=c.unstable_now,wu=c.unstable_getCurrentPriorityLevel,ei=c.unstable_ImmediatePriority,Mo=c.unstable_UserBlockingPriority,vt=c.unstable_NormalPriority,ku=c.unstable_LowPriority,Do=c.unstable_IdlePriority,yt=null,Rr=null;function Su(r){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:Eu,Cu=Math.log,Tu=Math.LN2;function Eu(r){return r>>>=0,r===0?32:31-(Cu(r)/Tu|0)|0}var jt=64,bt=4194304;function Sn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Nt(r,s){var n=r.pendingLanes;if(n===0)return 0;var t=0,i=r.suspendedLanes,l=r.pingedLanes,d=n&268435455;if(d!==0){var u=d&~i;u!==0?t=Sn(u):(l&=d,l!==0&&(t=Sn(l)))}else d=n&~i,d!==0?t=Sn(d):l!==0&&(t=Sn(l));if(t===0)return 0;if(s!==0&&s!==t&&(s&i)===0&&(i=t&-t,l=s&-s,i>=l||i===16&&(l&4194240)!==0))return s;if((t&4)!==0&&(t|=n&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=t;0<s;)n=31-wr(s),i=1<<n,t|=r[n],s&=~i;return t}function Iu(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(r,s){for(var n=r.suspendedLanes,t=r.pingedLanes,i=r.expirationTimes,l=r.pendingLanes;0<l;){var d=31-wr(l),u=1<<d,h=i[d];h===-1?((u&n)===0||(u&t)!==0)&&(i[d]=Iu(u,s)):h<=s&&(r.expiredLanes|=u),l&=~u}}function ri(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Oo(){var r=jt;return jt<<=1,(jt&4194240)===0&&(jt=64),r}function si(r){for(var s=[],n=0;31>n;n++)s.push(r);return s}function Cn(r,s,n){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-wr(s),r[s]=n}function Pu(r,s){var n=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<n;){var i=31-wr(n),l=1<<i;s[i]=0,t[i]=-1,r[i]=-1,n&=~l}}function ni(r,s){var n=r.entangledLanes|=s;for(r=r.entanglements;n;){var t=31-wr(n),i=1<<t;i&s|r[t]&s&&(r[t]|=s),n&=~i}}var ge=0;function Fo(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Wo,ti,Bo,$o,Uo,ai=!1,wt=[],Kr=null,Xr=null,Zr=null,Tn=new Map,En=new Map,Jr=[],Ru="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(r,s){switch(r){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Tn.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(s.pointerId)}}function In(r,s,n,t,i,l){return r===null||r.nativeEvent!==l?(r={blockedOn:s,domEventName:n,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},s!==null&&(s=Un(s),s!==null&&ti(s)),r):(r.eventSystemFlags|=t,s=r.targetContainers,i!==null&&s.indexOf(i)===-1&&s.push(i),r)}function Lu(r,s,n,t,i){switch(s){case"focusin":return Kr=In(Kr,r,s,n,t,i),!0;case"dragenter":return Xr=In(Xr,r,s,n,t,i),!0;case"mouseover":return Zr=In(Zr,r,s,n,t,i),!0;case"pointerover":var l=i.pointerId;return Tn.set(l,In(Tn.get(l)||null,r,s,n,t,i)),!0;case"gotpointercapture":return l=i.pointerId,En.set(l,In(En.get(l)||null,r,s,n,t,i)),!0}return!1}function Vo(r){var s=js(r.target);if(s!==null){var n=ys(s);if(n!==null){if(s=n.tag,s===13){if(s=zo(n),s!==null){r.blockedOn=s,Uo(r.priority,function(){Bo(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){r.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kt(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var n=li(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(n===null){n=r.nativeEvent;var t=new n.constructor(n.type,n);Qa=t,n.target.dispatchEvent(t),Qa=null}else return s=Un(n),s!==null&&ti(s),r.blockedOn=n,!1;s.shift()}return!0}function Go(r,s,n){kt(r)&&n.delete(s)}function Au(){ai=!1,Kr!==null&&kt(Kr)&&(Kr=null),Xr!==null&&kt(Xr)&&(Xr=null),Zr!==null&&kt(Zr)&&(Zr=null),Tn.forEach(Go),En.forEach(Go)}function zn(r,s){r.blockedOn===s&&(r.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Au)))}function Pn(r){function s(i){return zn(i,r)}if(0<wt.length){zn(wt[0],r);for(var n=1;n<wt.length;n++){var t=wt[n];t.blockedOn===r&&(t.blockedOn=null)}}for(Kr!==null&&zn(Kr,r),Xr!==null&&zn(Xr,r),Zr!==null&&zn(Zr,r),Tn.forEach(s),En.forEach(s),n=0;n<Jr.length;n++)t=Jr[n],t.blockedOn===r&&(t.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)Vo(n),n.blockedOn===null&&Jr.shift()}var Ws=P.ReactCurrentBatchConfig,St=!0;function _u(r,s,n,t){var i=ge,l=Ws.transition;Ws.transition=null;try{ge=1,ii(r,s,n,t)}finally{ge=i,Ws.transition=l}}function Mu(r,s,n,t){var i=ge,l=Ws.transition;Ws.transition=null;try{ge=4,ii(r,s,n,t)}finally{ge=i,Ws.transition=l}}function ii(r,s,n,t){if(St){var i=li(r,s,n,t);if(i===null)ki(r,s,t,Ct,n),Ho(r,t);else if(Lu(i,r,s,n,t))t.stopPropagation();else if(Ho(r,t),s&4&&-1<Ru.indexOf(r)){for(;i!==null;){var l=Un(i);if(l!==null&&Wo(l),l=li(r,s,n,t),l===null&&ki(r,s,t,Ct,n),l===i)break;i=l}i!==null&&t.stopPropagation()}else ki(r,s,t,null,n)}}var Ct=null;function li(r,s,n,t){if(Ct=null,r=Ya(t),r=js(r),r!==null)if(s=ys(r),s===null)r=null;else if(n=s.tag,n===13){if(r=zo(s),r!==null)return r;r=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ct=r,null}function qo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case ei:return 1;case Mo:return 4;case vt:case ku:return 16;case Do:return 536870912;default:return 16}default:return 16}}var es=null,oi=null,Tt=null;function Qo(){if(Tt)return Tt;var r,s=oi,n=s.length,t,i="value"in es?es.value:es.textContent,l=i.length;for(r=0;r<n&&s[r]===i[r];r++);var d=n-r;for(t=1;t<=d&&s[n-t]===i[l-t];t++);return Tt=i.slice(r,1<t?1-t:void 0)}function Et(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function It(){return!0}function Yo(){return!1}function cr(r){function s(n,t,i,l,d){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(n=r[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?It:Yo,this.isPropagationStopped=Yo,this}return R(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=It)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=It)},persist:function(){},isPersistent:It}),s}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=cr(Bs),Rn=R({},Bs,{view:0,detail:0}),Du=cr(Rn),di,pi,Ln,zt=R({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ln&&(Ln&&r.type==="mousemove"?(di=r.screenX-Ln.screenX,pi=r.screenY-Ln.screenY):pi=di=0,Ln=r),di)},movementY:function(r){return"movementY"in r?r.movementY:pi}}),Ko=cr(zt),Ou=R({},zt,{dataTransfer:0}),Fu=cr(Ou),Wu=R({},Rn,{relatedTarget:0}),ui=cr(Wu),Bu=R({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),$u=cr(Bu),Uu=R({},Bs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Hu=cr(Uu),Vu=R({},Bs,{data:0}),Xo=cr(Vu),Gu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Qu[r])?!!s[r]:!1}function hi(){return Yu}var Ku=R({},Rn,{key:function(r){if(r.key){var s=Gu[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Et(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qu[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(r){return r.type==="keypress"?Et(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Et(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Xu=cr(Ku),Zu=R({},zt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=cr(Zu),Ju=R({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),eh=cr(Ju),rh=R({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=cr(rh),nh=R({},zt,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),th=cr(nh),ah=[9,13,27,32],xi=z&&"CompositionEvent"in window,An=null;z&&"documentMode"in document&&(An=document.documentMode);var ih=z&&"TextEvent"in window&&!An,Jo=z&&(!xi||An&&8<An&&11>=An),ec=" ",rc=!1;function sc(r,s){switch(r){case"keyup":return ah.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $s=!1;function lh(r,s){switch(r){case"compositionend":return nc(s);case"keypress":return s.which!==32?null:(rc=!0,ec);case"textInput":return r=s.data,r===ec&&rc?null:r;default:return null}}function oh(r,s){if($s)return r==="compositionend"||!xi&&sc(r,s)?(r=Qo(),Tt=oi=es=null,$s=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Jo&&s.locale!=="ko"?null:s.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!ch[r.type]:s==="textarea"}function ac(r,s,n,t){So(t),s=_t(s,"onChange"),0<s.length&&(n=new ci("onChange","change",null,n,t),r.push({event:n,listeners:s}))}var _n=null,Mn=null;function dh(r){wc(r,0)}function Pt(r){var s=qs(r);if(vs(s))return r}function ph(r,s){if(r==="change")return s}var ic=!1;if(z){var mi;if(z){var fi="oninput"in document;if(!fi){var lc=document.createElement("div");lc.setAttribute("oninput","return;"),fi=typeof lc.oninput=="function"}mi=fi}else mi=!1;ic=mi&&(!document.documentMode||9<document.documentMode)}function oc(){_n&&(_n.detachEvent("onpropertychange",cc),Mn=_n=null)}function cc(r){if(r.propertyName==="value"&&Pt(Mn)){var s=[];ac(s,Mn,r,Ya(r)),Io(dh,s)}}function uh(r,s,n){r==="focusin"?(oc(),_n=s,Mn=n,_n.attachEvent("onpropertychange",cc)):r==="focusout"&&oc()}function hh(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Pt(Mn)}function xh(r,s){if(r==="click")return Pt(s)}function mh(r,s){if(r==="input"||r==="change")return Pt(s)}function fh(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var kr=typeof Object.is=="function"?Object.is:fh;function Dn(r,s){if(kr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var n=Object.keys(r),t=Object.keys(s);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!T.call(s,i)||!kr(r[i],s[i]))return!1}return!0}function dc(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pc(r,s){var n=dc(r);r=0;for(var t;n;){if(n.nodeType===3){if(t=r+n.textContent.length,r<=s&&t>=s)return{node:n,offset:s-r};r=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function uc(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?uc(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function hc(){for(var r=window,s=Nr();s instanceof r.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)r=s.contentWindow;else break;s=Nr(r.document)}return s}function gi(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function gh(r){var s=hc(),n=r.focusedElem,t=r.selectionRange;if(s!==n&&n&&n.ownerDocument&&uc(n.ownerDocument.documentElement,n)){if(t!==null&&gi(n)){if(s=t.start,r=t.end,r===void 0&&(r=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(r,n.value.length);else if(r=(s=n.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var i=n.textContent.length,l=Math.min(t.start,i);t=t.end===void 0?l:Math.min(t.end,i),!r.extend&&l>t&&(i=t,t=l,l=i),i=pc(n,l);var d=pc(n,t);i&&d&&(r.rangeCount!==1||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==d.node||r.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(i.node,i.offset),r.removeAllRanges(),l>t?(r.addRange(s),r.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),r.addRange(s)))}}for(s=[],r=n;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)r=s[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var vh=z&&"documentMode"in document&&11>=document.documentMode,Us=null,vi=null,On=null,yi=!1;function xc(r,s,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yi||Us==null||Us!==Nr(t)||(t=Us,"selectionStart"in t&&gi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),On&&Dn(On,t)||(On=t,t=_t(vi,"onSelect"),0<t.length&&(s=new ci("onSelect","select",null,s,n),r.push({event:s,listeners:t}),s.target=Us)))}function Rt(r,s){var n={};return n[r.toLowerCase()]=s.toLowerCase(),n["Webkit"+r]="webkit"+s,n["Moz"+r]="moz"+s,n}var Hs={animationend:Rt("Animation","AnimationEnd"),animationiteration:Rt("Animation","AnimationIteration"),animationstart:Rt("Animation","AnimationStart"),transitionend:Rt("Transition","TransitionEnd")},ji={},mc={};z&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Lt(r){if(ji[r])return ji[r];if(!Hs[r])return r;var s=Hs[r],n;for(n in s)if(s.hasOwnProperty(n)&&n in mc)return ji[r]=s[n];return r}var fc=Lt("animationend"),gc=Lt("animationiteration"),vc=Lt("animationstart"),yc=Lt("transitionend"),jc=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(r,s){jc.set(r,s),j(s,[r])}for(var bi=0;bi<bc.length;bi++){var Ni=bc[bi],yh=Ni.toLowerCase(),jh=Ni[0].toUpperCase()+Ni.slice(1);rs(yh,"on"+jh)}rs(fc,"onAnimationEnd"),rs(gc,"onAnimationIteration"),rs(vc,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(yc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Nc(r,s,n){var t=r.type||"unknown-event";r.currentTarget=n,yu(t,s,void 0,r),r.currentTarget=null}function wc(r,s){s=(s&4)!==0;for(var n=0;n<r.length;n++){var t=r[n],i=t.event;t=t.listeners;e:{var l=void 0;if(s)for(var d=t.length-1;0<=d;d--){var u=t[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==l&&i.isPropagationStopped())break e;Nc(i,u,y),l=h}else for(d=0;d<t.length;d++){if(u=t[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==l&&i.isPropagationStopped())break e;Nc(i,u,y),l=h}}}if(gt)throw r=Ja,gt=!1,Ja=null,r}function Ne(r,s){var n=s[zi];n===void 0&&(n=s[zi]=new Set);var t=r+"__bubble";n.has(t)||(kc(s,r,2,!1),n.add(t))}function wi(r,s,n){var t=0;s&&(t|=4),kc(n,r,t,s)}var At="_reactListening"+Math.random().toString(36).slice(2);function Wn(r){if(!r[At]){r[At]=!0,p.forEach(function(n){n!=="selectionchange"&&(bh.has(n)||wi(n,!1,r),wi(n,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[At]||(s[At]=!0,wi("selectionchange",!1,s))}}function kc(r,s,n,t){switch(qo(s)){case 1:var i=_u;break;case 4:i=Mu;break;default:i=ii}n=i.bind(null,s,n,r),i=void 0,!Za||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(i=!0),t?i!==void 0?r.addEventListener(s,n,{capture:!0,passive:i}):r.addEventListener(s,n,!0):i!==void 0?r.addEventListener(s,n,{passive:i}):r.addEventListener(s,n,!1)}function ki(r,s,n,t,i){var l=t;if((s&1)===0&&(s&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var u=t.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=t.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;u!==null;){if(d=js(u),d===null)return;if(h=d.tag,h===5||h===6){t=l=d;continue e}u=u.parentNode}}t=t.return}Io(function(){var y=l,w=Ya(n),k=[];e:{var N=jc.get(r);if(N!==void 0){var L=ci,_=r;switch(r){case"keypress":if(Et(n)===0)break e;case"keydown":case"keyup":L=Xu;break;case"focusin":_="focus",L=ui;break;case"focusout":_="blur",L=ui;break;case"beforeblur":case"afterblur":L=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=eh;break;case fc:case gc:case vc:L=$u;break;case yc:L=sh;break;case"scroll":L=Du;break;case"wheel":L=th;break;case"copy":case"cut":case"paste":L=Hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Zo}var M=(s&4)!==0,Ae=!M&&r==="scroll",g=M?N!==null?N+"Capture":null:N;M=[];for(var x=y,v;x!==null;){v=x;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=Nn(x,g),C!=null&&M.push(Bn(x,C,v)))),Ae)break;x=x.return}0<M.length&&(N=new L(N,_,null,n,w),k.push({event:N,listeners:M}))}}if((s&7)===0){e:{if(N=r==="mouseover"||r==="pointerover",L=r==="mouseout"||r==="pointerout",N&&n!==Qa&&(_=n.relatedTarget||n.fromElement)&&(js(_)||_[Dr]))break e;if((L||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,L?(_=n.relatedTarget||n.toElement,L=y,_=_?js(_):null,_!==null&&(Ae=ys(_),_!==Ae||_.tag!==5&&_.tag!==6)&&(_=null)):(L=null,_=y),L!==_)){if(M=Ko,C="onMouseLeave",g="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(M=Zo,C="onPointerLeave",g="onPointerEnter",x="pointer"),Ae=L==null?N:qs(L),v=_==null?N:qs(_),N=new M(C,x+"leave",L,n,w),N.target=Ae,N.relatedTarget=v,C=null,js(w)===y&&(M=new M(g,x+"enter",_,n,w),M.target=v,M.relatedTarget=Ae,C=M),Ae=C,L&&_)r:{for(M=L,g=_,x=0,v=M;v;v=Vs(v))x++;for(v=0,C=g;C;C=Vs(C))v++;for(;0<x-v;)M=Vs(M),x--;for(;0<v-x;)g=Vs(g),v--;for(;x--;){if(M===g||g!==null&&M===g.alternate)break r;M=Vs(M),g=Vs(g)}M=null}else M=null;L!==null&&Sc(k,N,L,M,!1),_!==null&&Ae!==null&&Sc(k,Ae,_,M,!0)}}e:{if(N=y?qs(y):window,L=N.nodeName&&N.nodeName.toLowerCase(),L==="select"||L==="input"&&N.type==="file")var O=ph;else if(tc(N))if(ic)O=mh;else{O=hh;var U=uh}else(L=N.nodeName)&&L.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(O=xh);if(O&&(O=O(r,y))){ac(k,O,n,w);break e}U&&U(r,N,y),r==="focusout"&&(U=N._wrapperState)&&U.controlled&&N.type==="number"&&Ua(N,"number",N.value)}switch(U=y?qs(y):window,r){case"focusin":(tc(U)||U.contentEditable==="true")&&(Us=U,vi=y,On=null);break;case"focusout":On=vi=Us=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,xc(k,n,w);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":xc(k,n,w)}var H;if(xi)e:{switch(r){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else $s?sc(r,n)&&(Q="onCompositionEnd"):r==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Jo&&n.locale!=="ko"&&($s||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&$s&&(H=Qo()):(es=w,oi="value"in es?es.value:es.textContent,$s=!0)),U=_t(y,Q),0<U.length&&(Q=new Xo(Q,r,null,n,w),k.push({event:Q,listeners:U}),H?Q.data=H:(H=nc(n),H!==null&&(Q.data=H)))),(H=ih?lh(r,n):oh(r,n))&&(y=_t(y,"onBeforeInput"),0<y.length&&(w=new Xo("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=H))}wc(k,s)})}function Bn(r,s,n){return{instance:r,listener:s,currentTarget:n}}function _t(r,s){for(var n=s+"Capture",t=[];r!==null;){var i=r,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Nn(r,n),l!=null&&t.unshift(Bn(r,l,i)),l=Nn(r,s),l!=null&&t.push(Bn(r,l,i))),r=r.return}return t}function Vs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Sc(r,s,n,t,i){for(var l=s._reactName,d=[];n!==null&&n!==t;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===t)break;u.tag===5&&y!==null&&(u=y,i?(h=Nn(n,l),h!=null&&d.unshift(Bn(n,h,u))):i||(h=Nn(n,l),h!=null&&d.push(Bn(n,h,u)))),n=n.return}d.length!==0&&r.push({event:s,listeners:d})}var Nh=/\r\n?/g,wh=/\u0000|\uFFFD/g;function Cc(r){return(typeof r=="string"?r:""+r).replace(Nh,`
`).replace(wh,"")}function Mt(r,s,n){if(s=Cc(s),Cc(r)!==s&&n)throw Error(o(425))}function Dt(){}var Si=null,Ci=null;function Ti(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc!="undefined"?function(r){return Tc.resolve(null).then(r).catch(Ch)}:Ei;function Ch(r){setTimeout(function(){throw r})}function Ii(r,s){var n=s,t=0;do{var i=n.nextSibling;if(r.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0){r.removeChild(i),Pn(s);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=i}while(n);Pn(s)}function ss(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Ec(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var n=r.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return r;s--}else n==="/$"&&s++}r=r.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Lr="__reactFiber$"+Gs,$n="__reactProps$"+Gs,Dr="__reactContainer$"+Gs,zi="__reactEvents$"+Gs,Th="__reactListeners$"+Gs,Eh="__reactHandles$"+Gs;function js(r){var s=r[Lr];if(s)return s;for(var n=r.parentNode;n;){if(s=n[Dr]||n[Lr]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(r=Ec(r);r!==null;){if(n=r[Lr])return n;r=Ec(r)}return s}r=n,n=r.parentNode}return null}function Un(r){return r=r[Lr]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(o(33))}function Ot(r){return r[$n]||null}var Pi=[],Qs=-1;function ns(r){return{current:r}}function we(r){0>Qs||(r.current=Pi[Qs],Pi[Qs]=null,Qs--)}function be(r,s){Qs++,Pi[Qs]=r.current,r.current=s}var ts={},Qe=ns(ts),sr=ns(!1),bs=ts;function Ys(r,s){var n=r.type.contextTypes;if(!n)return ts;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===s)return t.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=s[l];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=i),i}function nr(r){return r=r.childContextTypes,r!=null}function Ft(){we(sr),we(Qe)}function Ic(r,s,n){if(Qe.current!==ts)throw Error(o(168));be(Qe,s),be(sr,n)}function zc(r,s,n){var t=r.stateNode;if(s=s.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var i in t)if(!(i in s))throw Error(o(108,pe(r)||"Unknown",i));return R({},n,t)}function Wt(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ts,bs=Qe.current,be(Qe,r),be(sr,sr.current),!0}function Pc(r,s,n){var t=r.stateNode;if(!t)throw Error(o(169));n?(r=zc(r,s,bs),t.__reactInternalMemoizedMergedChildContext=r,we(sr),we(Qe),be(Qe,r)):we(sr),be(sr,n)}var Or=null,Bt=!1,Ri=!1;function Rc(r){Or===null?Or=[r]:Or.push(r)}function Ih(r){Bt=!0,Rc(r)}function as(){if(!Ri&&Or!==null){Ri=!0;var r=0,s=ge;try{var n=Or;for(ge=1;r<n.length;r++){var t=n[r];do t=t(!0);while(t!==null)}Or=null,Bt=!1}catch(i){throw Or!==null&&(Or=Or.slice(r+1)),Ao(ei,as),i}finally{ge=s,Ri=!1}}return null}var Ks=[],Xs=0,$t=null,Ut=0,mr=[],fr=0,Ns=null,Fr=1,Wr="";function ws(r,s){Ks[Xs++]=Ut,Ks[Xs++]=$t,$t=r,Ut=s}function Lc(r,s,n){mr[fr++]=Fr,mr[fr++]=Wr,mr[fr++]=Ns,Ns=r;var t=Fr;r=Wr;var i=32-wr(t)-1;t&=~(1<<i),n+=1;var l=32-wr(s)+i;if(30<l){var d=i-i%5;l=(t&(1<<d)-1).toString(32),t>>=d,i-=d,Fr=1<<32-wr(s)+i|n<<i|t,Wr=l+r}else Fr=1<<l|n<<i|t,Wr=r}function Li(r){r.return!==null&&(ws(r,1),Lc(r,1,0))}function Ai(r){for(;r===$t;)$t=Ks[--Xs],Ks[Xs]=null,Ut=Ks[--Xs],Ks[Xs]=null;for(;r===Ns;)Ns=mr[--fr],mr[fr]=null,Wr=mr[--fr],mr[fr]=null,Fr=mr[--fr],mr[fr]=null}var dr=null,pr=null,Ce=!1,Sr=null;function Ac(r,s){var n=jr(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=r,s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)}function _c(r,s){switch(r.tag){case 5:var n=r.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dr=r,pr=ss(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dr=r,pr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=Ns!==null?{id:Fr,overflow:Wr}:null,r.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=jr(18,null,null,0),n.stateNode=s,n.return=r,r.child=n,dr=r,pr=null,!0):!1;default:return!1}}function _i(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Mi(r){if(Ce){var s=pr;if(s){var n=s;if(!_c(r,s)){if(_i(r))throw Error(o(418));s=ss(n.nextSibling);var t=dr;s&&_c(r,s)?Ac(t,n):(r.flags=r.flags&-4097|2,Ce=!1,dr=r)}}else{if(_i(r))throw Error(o(418));r.flags=r.flags&-4097|2,Ce=!1,dr=r}}}function Mc(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dr=r}function Ht(r){if(r!==dr)return!1;if(!Ce)return Mc(r),Ce=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ti(r.type,r.memoizedProps)),s&&(s=pr)){if(_i(r))throw Dc(),Error(o(418));for(;s;)Ac(r,s),s=ss(s.nextSibling)}if(Mc(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var n=r.data;if(n==="/$"){if(s===0){pr=ss(r.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}r=r.nextSibling}pr=null}}else pr=dr?ss(r.stateNode.nextSibling):null;return!0}function Dc(){for(var r=pr;r;)r=ss(r.nextSibling)}function Zs(){pr=dr=null,Ce=!1}function Di(r){Sr===null?Sr=[r]:Sr.push(r)}var zh=P.ReactCurrentBatchConfig;function Hn(r,s,n){if(r=n.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var t=n.stateNode}if(!t)throw Error(o(147,r));var i=t,l=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(d){var u=i.refs;d===null?delete u[l]:u[l]=d},s._stringRef=l,s)}if(typeof r!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,r))}return r}function Vt(r,s){throw r=Object.prototype.toString.call(s),Error(o(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Oc(r){var s=r._init;return s(r._payload)}function Fc(r){function s(g,x){if(r){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function n(g,x){if(!r)return null;for(;x!==null;)s(g,x),x=x.sibling;return null}function t(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=hs(g,x),g.index=0,g.sibling=null,g}function l(g,x,v){return g.index=v,r?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return r&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,C){return x===null||x.tag!==6?(x=El(v,g.mode,C),x.return=g,x):(x=i(x,v),x.return=g,x)}function h(g,x,v,C){var O=v.type;return O===I?w(g,x,v.props.children,C,v.key):x!==null&&(x.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===qe&&Oc(O)===x.type)?(C=i(x,v.props),C.ref=Hn(g,x,v),C.return=g,C):(C=ma(v.type,v.key,v.props,null,g.mode,C),C.ref=Hn(g,x,v),C.return=g,C)}function y(g,x,v,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Il(v,g.mode,C),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function w(g,x,v,C,O){return x===null||x.tag!==7?(x=Ps(v,g.mode,C,O),x.return=g,x):(x=i(x,v),x.return=g,x)}function k(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=El(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Z:return v=ma(x.type,x.key,x.props,null,g.mode,v),v.ref=Hn(g,null,x),v.return=g,v;case $:return x=Il(x,g.mode,v),x.return=g,x;case qe:var C=x._init;return k(g,C(x._payload),v)}if(yn(x)||F(x))return x=Ps(x,g.mode,v,null),x.return=g,x;Vt(g,x)}return null}function N(g,x,v,C){var O=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:u(g,x,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return v.key===O?h(g,x,v,C):null;case $:return v.key===O?y(g,x,v,C):null;case qe:return O=v._init,N(g,x,O(v._payload),C)}if(yn(v)||F(v))return O!==null?null:w(g,x,v,C,null);Vt(g,v)}return null}function L(g,x,v,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,u(x,g,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Z:return g=g.get(C.key===null?v:C.key)||null,h(x,g,C,O);case $:return g=g.get(C.key===null?v:C.key)||null,y(x,g,C,O);case qe:var U=C._init;return L(g,x,v,U(C._payload),O)}if(yn(C)||F(C))return g=g.get(v)||null,w(x,g,C,O,null);Vt(x,C)}return null}function _(g,x,v,C){for(var O=null,U=null,H=x,Q=x=0,Ue=null;H!==null&&Q<v.length;Q++){H.index>Q?(Ue=H,H=null):Ue=H.sibling;var he=N(g,H,v[Q],C);if(he===null){H===null&&(H=Ue);break}r&&H&&he.alternate===null&&s(g,H),x=l(he,x,Q),U===null?O=he:U.sibling=he,U=he,H=Ue}if(Q===v.length)return n(g,H),Ce&&ws(g,Q),O;if(H===null){for(;Q<v.length;Q++)H=k(g,v[Q],C),H!==null&&(x=l(H,x,Q),U===null?O=H:U.sibling=H,U=H);return Ce&&ws(g,Q),O}for(H=t(g,H);Q<v.length;Q++)Ue=L(H,g,Q,v[Q],C),Ue!==null&&(r&&Ue.alternate!==null&&H.delete(Ue.key===null?Q:Ue.key),x=l(Ue,x,Q),U===null?O=Ue:U.sibling=Ue,U=Ue);return r&&H.forEach(function(xs){return s(g,xs)}),Ce&&ws(g,Q),O}function M(g,x,v,C){var O=F(v);if(typeof O!="function")throw Error(o(150));if(v=O.call(v),v==null)throw Error(o(151));for(var U=O=null,H=x,Q=x=0,Ue=null,he=v.next();H!==null&&!he.done;Q++,he=v.next()){H.index>Q?(Ue=H,H=null):Ue=H.sibling;var xs=N(g,H,he.value,C);if(xs===null){H===null&&(H=Ue);break}r&&H&&xs.alternate===null&&s(g,H),x=l(xs,x,Q),U===null?O=xs:U.sibling=xs,U=xs,H=Ue}if(he.done)return n(g,H),Ce&&ws(g,Q),O;if(H===null){for(;!he.done;Q++,he=v.next())he=k(g,he.value,C),he!==null&&(x=l(he,x,Q),U===null?O=he:U.sibling=he,U=he);return Ce&&ws(g,Q),O}for(H=t(g,H);!he.done;Q++,he=v.next())he=L(H,g,Q,he.value,C),he!==null&&(r&&he.alternate!==null&&H.delete(he.key===null?Q:he.key),x=l(he,x,Q),U===null?O=he:U.sibling=he,U=he);return r&&H.forEach(function(cx){return s(g,cx)}),Ce&&ws(g,Q),O}function Ae(g,x,v,C){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:e:{for(var O=v.key,U=x;U!==null;){if(U.key===O){if(O=v.type,O===I){if(U.tag===7){n(g,U.sibling),x=i(U,v.props.children),x.return=g,g=x;break e}}else if(U.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===qe&&Oc(O)===U.type){n(g,U.sibling),x=i(U,v.props),x.ref=Hn(g,U,v),x.return=g,g=x;break e}n(g,U);break}else s(g,U);U=U.sibling}v.type===I?(x=Ps(v.props.children,g.mode,C,v.key),x.return=g,g=x):(C=ma(v.type,v.key,v.props,null,g.mode,C),C.ref=Hn(g,x,v),C.return=g,g=C)}return d(g);case $:e:{for(U=v.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else s(g,x);x=x.sibling}x=Il(v,g.mode,C),x.return=g,g=x}return d(g);case qe:return U=v._init,Ae(g,x,U(v._payload),C)}if(yn(v))return _(g,x,v,C);if(F(v))return M(g,x,v,C);Vt(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,v),x.return=g,g=x):(n(g,x),x=El(v,g.mode,C),x.return=g,g=x),d(g)):n(g,x)}return Ae}var Js=Fc(!0),Wc=Fc(!1),Gt=ns(null),qt=null,en=null,Oi=null;function Fi(){Oi=en=qt=null}function Wi(r){var s=Gt.current;we(Gt),r._currentValue=s}function Bi(r,s,n){for(;r!==null;){var t=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,t!==null&&(t.childLanes|=s)):t!==null&&(t.childLanes&s)!==s&&(t.childLanes|=s),r===n)break;r=r.return}}function rn(r,s){qt=r,Oi=en=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(tr=!0),r.firstContext=null)}function gr(r){var s=r._currentValue;if(Oi!==r)if(r={context:r,memoizedValue:s,next:null},en===null){if(qt===null)throw Error(o(308));en=r,qt.dependencies={lanes:0,firstContext:r}}else en=en.next=r;return s}var ks=null;function $i(r){ks===null?ks=[r]:ks.push(r)}function Bc(r,s,n,t){var i=s.interleaved;return i===null?(n.next=n,$i(s)):(n.next=i.next,i.next=n),s.interleaved=n,Br(r,t)}function Br(r,s){r.lanes|=s;var n=r.alternate;for(n!==null&&(n.lanes|=s),n=r,r=r.return;r!==null;)r.childLanes|=s,n=r.alternate,n!==null&&(n.childLanes|=s),n=r,r=r.return;return n.tag===3?n.stateNode:null}var is=!1;function Ui(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function $r(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ls(r,s,n){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,(ue&2)!==0){var i=t.pending;return i===null?s.next=s:(s.next=i.next,i.next=s),t.pending=s,Br(r,n)}return i=t.interleaved,i===null?(s.next=s,$i(t)):(s.next=i.next,i.next=s),t.interleaved=s,Br(r,n)}function Qt(r,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var t=s.lanes;t&=r.pendingLanes,n|=t,s.lanes=n,ni(r,n)}}function Uc(r,s){var n=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=d:l=l.next=d,n=n.next}while(n!==null);l===null?i=l=s:l=l.next=s}else i=l=s;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,effects:t.effects},r.updateQueue=n;return}r=n.lastBaseUpdate,r===null?n.firstBaseUpdate=s:r.next=s,n.lastBaseUpdate=s}function Yt(r,s,n,t){var i=r.updateQueue;is=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?l=y:d.next=y,d=h;var w=r.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(l!==null){var k=i.baseState;d=0,w=y=h=null,u=l;do{var N=u.lane,L=u.eventTime;if((t&N)===N){w!==null&&(w=w.next={eventTime:L,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var _=r,M=u;switch(N=s,L=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){k=_.call(L,k,N);break e}k=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,N=typeof _=="function"?_.call(L,k,N):_,N==null)break e;k=R({},k,N);break e;case 2:is=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,N=i.effects,N===null?i.effects=[u]:N.push(u))}else L={eventTime:L,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=L,h=k):w=w.next=L,d|=N;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(w===null&&(h=k),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,s=i.shared.interleaved,s!==null){i=s;do d|=i.lane,i=i.next;while(i!==s)}else l===null&&(i.shared.lanes=0);Ts|=d,r.lanes=d,r.memoizedState=k}}function Hc(r,s,n){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var t=r[s],i=t.callback;if(i!==null){if(t.callback=null,t=n,typeof i!="function")throw Error(o(191,i));i.call(t)}}}var Vn={},Ar=ns(Vn),Gn=ns(Vn),qn=ns(Vn);function Ss(r){if(r===Vn)throw Error(o(174));return r}function Hi(r,s){switch(be(qn,s),be(Gn,r),be(Ar,Vn),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Va(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Va(s,r)}we(Ar),be(Ar,s)}function sn(){we(Ar),we(Gn),we(qn)}function Vc(r){Ss(qn.current);var s=Ss(Ar.current),n=Va(s,r.type);s!==n&&(be(Gn,r),be(Ar,n))}function Vi(r){Gn.current===r&&(we(Ar),we(Gn))}var Ee=ns(0);function Kt(r){for(var s=r;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gi=[];function qi(){for(var r=0;r<Gi.length;r++)Gi[r]._workInProgressVersionPrimary=null;Gi.length=0}var Xt=P.ReactCurrentDispatcher,Qi=P.ReactCurrentBatchConfig,Cs=0,Ie=null,De=null,Be=null,Zt=!1,Qn=!1,Yn=0,Ph=0;function Ye(){throw Error(o(321))}function Yi(r,s){if(s===null)return!1;for(var n=0;n<s.length&&n<r.length;n++)if(!kr(r[n],s[n]))return!1;return!0}function Ki(r,s,n,t,i,l){if(Cs=l,Ie=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Xt.current=r===null||r.memoizedState===null?_h:Mh,r=n(t,i),Qn){l=0;do{if(Qn=!1,Yn=0,25<=l)throw Error(o(301));l+=1,Be=De=null,s.updateQueue=null,Xt.current=Dh,r=n(t,i)}while(Qn)}if(Xt.current=ra,s=De!==null&&De.next!==null,Cs=0,Be=De=Ie=null,Zt=!1,s)throw Error(o(300));return r}function Xi(){var r=Yn!==0;return Yn=0,r}function _r(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=r:Be=Be.next=r,Be}function vr(){if(De===null){var r=Ie.alternate;r=r!==null?r.memoizedState:null}else r=De.next;var s=Be===null?Ie.memoizedState:Be.next;if(s!==null)Be=s,De=r;else{if(r===null)throw Error(o(310));De=r,r={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Ie.memoizedState=Be=r:Be=Be.next=r}return Be}function Kn(r,s){return typeof s=="function"?s(r):s}function Zi(r){var s=vr(),n=s.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=r;var t=De,i=t.baseQueue,l=n.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}t.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,t=t.baseState;var u=d=null,h=null,y=l;do{var w=y.lane;if((Cs&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),t=y.hasEagerState?y.eagerState:r(t,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=t):h=h.next=k,Ie.lanes|=w,Ts|=w}y=y.next}while(y!==null&&y!==l);h===null?d=t:h.next=u,kr(t,s.memoizedState)||(tr=!0),s.memoizedState=t,s.baseState=d,s.baseQueue=h,n.lastRenderedState=t}if(r=n.interleaved,r!==null){i=r;do l=i.lane,Ie.lanes|=l,Ts|=l,i=i.next;while(i!==r)}else i===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function Ji(r){var s=vr(),n=s.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=r;var t=n.dispatch,i=n.pending,l=s.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do l=r(l,d.action),d=d.next;while(d!==i);kr(l,s.memoizedState)||(tr=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),n.lastRenderedState=l}return[l,t]}function Gc(){}function qc(r,s){var n=Ie,t=vr(),i=s(),l=!kr(t.memoizedState,i);if(l&&(t.memoizedState=i,tr=!0),t=t.queue,el(Kc.bind(null,n,t,r),[r]),t.getSnapshot!==s||l||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Xn(9,Yc.bind(null,n,t,i,s),void 0,null),$e===null)throw Error(o(349));(Cs&30)!==0||Qc(n,s,i)}return i}function Qc(r,s,n){r.flags|=16384,r={getSnapshot:s,value:n},s=Ie.updateQueue,s===null?(s={lastEffect:null,stores:null},Ie.updateQueue=s,s.stores=[r]):(n=s.stores,n===null?s.stores=[r]:n.push(r))}function Yc(r,s,n,t){s.value=n,s.getSnapshot=t,Xc(s)&&Zc(r)}function Kc(r,s,n){return n(function(){Xc(s)&&Zc(r)})}function Xc(r){var s=r.getSnapshot;r=r.value;try{var n=s();return!kr(r,n)}catch{return!0}}function Zc(r){var s=Br(r,1);s!==null&&Ir(s,r,1,-1)}function Jc(r){var s=_r();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:r},s.queue=r,r=r.dispatch=Ah.bind(null,Ie,r),[s.memoizedState,r]}function Xn(r,s,n,t){return r={tag:r,create:s,destroy:n,deps:t,next:null},s=Ie.updateQueue,s===null?(s={lastEffect:null,stores:null},Ie.updateQueue=s,s.lastEffect=r.next=r):(n=s.lastEffect,n===null?s.lastEffect=r.next=r:(t=n.next,n.next=r,r.next=t,s.lastEffect=r)),r}function ed(){return vr().memoizedState}function Jt(r,s,n,t){var i=_r();Ie.flags|=r,i.memoizedState=Xn(1|s,n,void 0,t===void 0?null:t)}function ea(r,s,n,t){var i=vr();t=t===void 0?null:t;var l=void 0;if(De!==null){var d=De.memoizedState;if(l=d.destroy,t!==null&&Yi(t,d.deps)){i.memoizedState=Xn(s,n,l,t);return}}Ie.flags|=r,i.memoizedState=Xn(1|s,n,l,t)}function rd(r,s){return Jt(8390656,8,r,s)}function el(r,s){return ea(2048,8,r,s)}function sd(r,s){return ea(4,2,r,s)}function nd(r,s){return ea(4,4,r,s)}function td(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ad(r,s,n){return n=n!=null?n.concat([r]):null,ea(4,4,td.bind(null,s,r),n)}function rl(){}function id(r,s){var n=vr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Yi(s,t[1])?t[0]:(n.memoizedState=[r,s],r)}function ld(r,s){var n=vr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Yi(s,t[1])?t[0]:(r=r(),n.memoizedState=[r,s],r)}function od(r,s,n){return(Cs&21)===0?(r.baseState&&(r.baseState=!1,tr=!0),r.memoizedState=n):(kr(n,s)||(n=Oo(),Ie.lanes|=n,Ts|=n,r.baseState=!0),s)}function Rh(r,s){var n=ge;ge=n!==0&&4>n?n:4,r(!0);var t=Qi.transition;Qi.transition={};try{r(!1),s()}finally{ge=n,Qi.transition=t}}function cd(){return vr().memoizedState}function Lh(r,s,n){var t=ps(r);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},dd(r))pd(s,n);else if(n=Bc(r,s,n,t),n!==null){var i=er();Ir(n,r,t,i),ud(n,s,t)}}function Ah(r,s,n){var t=ps(r),i={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(r))pd(s,i);else{var l=r.alternate;if(r.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var d=s.lastRenderedState,u=l(d,n);if(i.hasEagerState=!0,i.eagerState=u,kr(u,d)){var h=s.interleaved;h===null?(i.next=i,$i(s)):(i.next=h.next,h.next=i),s.interleaved=i;return}}catch{}finally{}n=Bc(r,s,i,t),n!==null&&(i=er(),Ir(n,r,t,i),ud(n,s,t))}}function dd(r){var s=r.alternate;return r===Ie||s!==null&&s===Ie}function pd(r,s){Qn=Zt=!0;var n=r.pending;n===null?s.next=s:(s.next=n.next,n.next=s),r.pending=s}function ud(r,s,n){if((n&4194240)!==0){var t=s.lanes;t&=r.pendingLanes,n|=t,s.lanes=n,ni(r,n)}}var ra={readContext:gr,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},_h={readContext:gr,useCallback:function(r,s){return _r().memoizedState=[r,s===void 0?null:s],r},useContext:gr,useEffect:rd,useImperativeHandle:function(r,s,n){return n=n!=null?n.concat([r]):null,Jt(4194308,4,td.bind(null,s,r),n)},useLayoutEffect:function(r,s){return Jt(4194308,4,r,s)},useInsertionEffect:function(r,s){return Jt(4,2,r,s)},useMemo:function(r,s){var n=_r();return s=s===void 0?null:s,r=r(),n.memoizedState=[r,s],r},useReducer:function(r,s,n){var t=_r();return s=n!==void 0?n(s):s,t.memoizedState=t.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},t.queue=r,r=r.dispatch=Lh.bind(null,Ie,r),[t.memoizedState,r]},useRef:function(r){var s=_r();return r={current:r},s.memoizedState=r},useState:Jc,useDebugValue:rl,useDeferredValue:function(r){return _r().memoizedState=r},useTransition:function(){var r=Jc(!1),s=r[0];return r=Rh.bind(null,r[1]),_r().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,n){var t=Ie,i=_r();if(Ce){if(n===void 0)throw Error(o(407));n=n()}else{if(n=s(),$e===null)throw Error(o(349));(Cs&30)!==0||Qc(t,s,n)}i.memoizedState=n;var l={value:n,getSnapshot:s};return i.queue=l,rd(Kc.bind(null,t,l,r),[r]),t.flags|=2048,Xn(9,Yc.bind(null,t,l,n,s),void 0,null),n},useId:function(){var r=_r(),s=$e.identifierPrefix;if(Ce){var n=Wr,t=Fr;n=(t&~(1<<32-wr(t)-1)).toString(32)+n,s=":"+s+"R"+n,n=Yn++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=Ph++,s=":"+s+"r"+n.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Mh={readContext:gr,useCallback:id,useContext:gr,useEffect:el,useImperativeHandle:ad,useInsertionEffect:sd,useLayoutEffect:nd,useMemo:ld,useReducer:Zi,useRef:ed,useState:function(){return Zi(Kn)},useDebugValue:rl,useDeferredValue:function(r){var s=vr();return od(s,De.memoizedState,r)},useTransition:function(){var r=Zi(Kn)[0],s=vr().memoizedState;return[r,s]},useMutableSource:Gc,useSyncExternalStore:qc,useId:cd,unstable_isNewReconciler:!1},Dh={readContext:gr,useCallback:id,useContext:gr,useEffect:el,useImperativeHandle:ad,useInsertionEffect:sd,useLayoutEffect:nd,useMemo:ld,useReducer:Ji,useRef:ed,useState:function(){return Ji(Kn)},useDebugValue:rl,useDeferredValue:function(r){var s=vr();return De===null?s.memoizedState=r:od(s,De.memoizedState,r)},useTransition:function(){var r=Ji(Kn)[0],s=vr().memoizedState;return[r,s]},useMutableSource:Gc,useSyncExternalStore:qc,useId:cd,unstable_isNewReconciler:!1};function Cr(r,s){if(r&&r.defaultProps){s=R({},s),r=r.defaultProps;for(var n in r)s[n]===void 0&&(s[n]=r[n]);return s}return s}function sl(r,s,n,t){s=r.memoizedState,n=n(t,s),n=n==null?s:R({},s,n),r.memoizedState=n,r.lanes===0&&(r.updateQueue.baseState=n)}var sa={isMounted:function(r){return(r=r._reactInternals)?ys(r)===r:!1},enqueueSetState:function(r,s,n){r=r._reactInternals;var t=er(),i=ps(r),l=$r(t,i);l.payload=s,n!=null&&(l.callback=n),s=ls(r,l,i),s!==null&&(Ir(s,r,i,t),Qt(s,r,i))},enqueueReplaceState:function(r,s,n){r=r._reactInternals;var t=er(),i=ps(r),l=$r(t,i);l.tag=1,l.payload=s,n!=null&&(l.callback=n),s=ls(r,l,i),s!==null&&(Ir(s,r,i,t),Qt(s,r,i))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var n=er(),t=ps(r),i=$r(n,t);i.tag=2,s!=null&&(i.callback=s),s=ls(r,i,t),s!==null&&(Ir(s,r,t,n),Qt(s,r,t))}};function hd(r,s,n,t,i,l,d){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,l,d):s.prototype&&s.prototype.isPureReactComponent?!Dn(n,t)||!Dn(i,l):!0}function xd(r,s,n){var t=!1,i=ts,l=s.contextType;return typeof l=="object"&&l!==null?l=gr(l):(i=nr(s)?bs:Qe.current,t=s.contextTypes,l=(t=t!=null)?Ys(r,i):ts),s=new s(n,l),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sa,r.stateNode=s,s._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=l),s}function md(r,s,n,t){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,t),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,t),s.state!==r&&sa.enqueueReplaceState(s,s.state,null)}function nl(r,s,n,t){var i=r.stateNode;i.props=n,i.state=r.memoizedState,i.refs={},Ui(r);var l=s.contextType;typeof l=="object"&&l!==null?i.context=gr(l):(l=nr(s)?bs:Qe.current,i.context=Ys(r,l)),i.state=r.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(sl(r,s,l,n),i.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&sa.enqueueReplaceState(i,i.state,null),Yt(r,n,i,t),i.state=r.memoizedState),typeof i.componentDidMount=="function"&&(r.flags|=4194308)}function nn(r,s){try{var n="",t=s;do n+=le(t),t=t.return;while(t);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:r,source:s,stack:i,digest:null}}function tl(r,s,n){return{value:r,source:null,stack:n!=null?n:null,digest:s!=null?s:null}}function al(r,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var Oh=typeof WeakMap=="function"?WeakMap:Map;function fd(r,s,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var t=s.value;return n.callback=function(){ca||(ca=!0,jl=t),al(r,s)},n}function gd(r,s,n){n=$r(-1,n),n.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var i=s.value;n.payload=function(){return t(i)},n.callback=function(){al(r,s)}}var l=r.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){al(r,s),typeof t!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),n}function vd(r,s,n){var t=r.pingCache;if(t===null){t=r.pingCache=new Oh;var i=new Set;t.set(s,i)}else i=t.get(s),i===void 0&&(i=new Set,t.set(s,i));i.has(n)||(i.add(n),r=Zh.bind(null,r,s,n),s.then(r,r))}function yd(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function jd(r,s,n,t,i){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=$r(-1,1),s.tag=2,ls(n,s,1))),n.lanes|=1),r):(r.flags|=65536,r.lanes=i,r)}var Fh=P.ReactCurrentOwner,tr=!1;function Je(r,s,n,t){s.child=r===null?Wc(s,null,n,t):Js(s,r.child,n,t)}function bd(r,s,n,t,i){n=n.render;var l=s.ref;return rn(s,i),t=Ki(r,s,n,t,l,i),n=Xi(),r!==null&&!tr?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~i,Ur(r,s,i)):(Ce&&n&&Li(s),s.flags|=1,Je(r,s,t,i),s.child)}function Nd(r,s,n,t,i){if(r===null){var l=n.type;return typeof l=="function"&&!Tl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=l,wd(r,s,l,t,i)):(r=ma(n.type,null,t,s,s.mode,i),r.ref=s.ref,r.return=s,s.child=r)}if(l=r.child,(r.lanes&i)===0){var d=l.memoizedProps;if(n=n.compare,n=n!==null?n:Dn,n(d,t)&&r.ref===s.ref)return Ur(r,s,i)}return s.flags|=1,r=hs(l,t),r.ref=s.ref,r.return=s,s.child=r}function wd(r,s,n,t,i){if(r!==null){var l=r.memoizedProps;if(Dn(l,t)&&r.ref===s.ref)if(tr=!1,s.pendingProps=t=l,(r.lanes&i)!==0)(r.flags&131072)!==0&&(tr=!0);else return s.lanes=r.lanes,Ur(r,s,i)}return il(r,s,n,t,i)}function kd(r,s,n){var t=s.pendingProps,i=t.children,l=r!==null?r.memoizedState:null;if(t.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(an,ur),ur|=n;else{if((n&1073741824)===0)return r=l!==null?l.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,be(an,ur),ur|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:n,be(an,ur),ur|=t}else l!==null?(t=l.baseLanes|n,s.memoizedState=null):t=n,be(an,ur),ur|=t;return Je(r,s,i,n),s.child}function Sd(r,s){var n=s.ref;(r===null&&n!==null||r!==null&&r.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function il(r,s,n,t,i){var l=nr(n)?bs:Qe.current;return l=Ys(s,l),rn(s,i),n=Ki(r,s,n,t,l,i),t=Xi(),r!==null&&!tr?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~i,Ur(r,s,i)):(Ce&&t&&Li(s),s.flags|=1,Je(r,s,n,i),s.child)}function Cd(r,s,n,t,i){if(nr(n)){var l=!0;Wt(s)}else l=!1;if(rn(s,i),s.stateNode===null)ta(r,s),xd(s,n,t),nl(s,n,t,i),t=!0;else if(r===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=gr(y):(y=nr(n)?bs:Qe.current,y=Ys(s,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==t||h!==y)&&md(s,d,t,y),is=!1;var N=s.memoizedState;d.state=N,Yt(s,t,d,i),h=s.memoizedState,u!==t||N!==h||sr.current||is?(typeof w=="function"&&(sl(s,n,w,t),h=s.memoizedState),(u=is||hd(s,n,u,t,N,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=t,s.memoizedState=h),d.props=t,d.state=h,d.context=y,t=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),t=!1)}else{d=s.stateNode,$c(r,s),u=s.memoizedProps,y=s.type===s.elementType?u:Cr(s.type,u),d.props=y,k=s.pendingProps,N=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=gr(h):(h=nr(n)?bs:Qe.current,h=Ys(s,h));var L=n.getDerivedStateFromProps;(w=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||N!==h)&&md(s,d,t,h),is=!1,N=s.memoizedState,d.state=N,Yt(s,t,d,i);var _=s.memoizedState;u!==k||N!==_||sr.current||is?(typeof L=="function"&&(sl(s,n,L,t),_=s.memoizedState),(y=is||hd(s,n,y,t,N,_,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(t,_,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(t,_,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=1024),s.memoizedProps=t,s.memoizedState=_),d.props=t,d.state=_,d.context=h,t=y):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=1024),t=!1)}return ll(r,s,n,t,l,i)}function ll(r,s,n,t,i,l){Sd(r,s);var d=(s.flags&128)!==0;if(!t&&!d)return i&&Pc(s,n,!1),Ur(r,s,l);t=s.stateNode,Fh.current=s;var u=d&&typeof n.getDerivedStateFromError!="function"?null:t.render();return s.flags|=1,r!==null&&d?(s.child=Js(s,r.child,null,l),s.child=Js(s,null,u,l)):Je(r,s,u,l),s.memoizedState=t.state,i&&Pc(s,n,!0),s.child}function Td(r){var s=r.stateNode;s.pendingContext?Ic(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Ic(r,s.context,!1),Hi(r,s.containerInfo)}function Ed(r,s,n,t,i){return Zs(),Di(i),s.flags|=256,Je(r,s,n,t),s.child}var ol={dehydrated:null,treeContext:null,retryLane:0};function cl(r){return{baseLanes:r,cachePool:null,transitions:null}}function Id(r,s,n){var t=s.pendingProps,i=Ee.current,l=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=r!==null&&r.memoizedState===null?!1:(i&2)!==0),u?(l=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(i|=1),be(Ee,i&1),r===null)return Mi(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=t.children,r=t.fallback,l?(t=s.mode,l=s.child,d={mode:"hidden",children:d},(t&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=fa(d,t,0,null),r=Ps(r,t,n,null),l.return=s,r.return=s,l.sibling=r,s.child=l,s.child.memoizedState=cl(n),s.memoizedState=ol,r):dl(s,d));if(i=r.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Wh(r,s,d,t,u,i,n);if(l){l=t.fallback,d=s.mode,i=r.child,u=i.sibling;var h={mode:"hidden",children:t.children};return(d&1)===0&&s.child!==i?(t=s.child,t.childLanes=0,t.pendingProps=h,s.deletions=null):(t=hs(i,h),t.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=hs(u,l):(l=Ps(l,d,n,null),l.flags|=2),l.return=s,t.return=s,t.sibling=l,s.child=t,t=l,l=s.child,d=r.child.memoizedState,d=d===null?cl(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=r.childLanes&~n,s.memoizedState=ol,t}return l=r.child,r=l.sibling,t=hs(l,{mode:"visible",children:t.children}),(s.mode&1)===0&&(t.lanes=n),t.return=s,t.sibling=null,r!==null&&(n=s.deletions,n===null?(s.deletions=[r],s.flags|=16):n.push(r)),s.child=t,s.memoizedState=null,t}function dl(r,s){return s=fa({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function na(r,s,n,t){return t!==null&&Di(t),Js(s,r.child,null,n),r=dl(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Wh(r,s,n,t,i,l,d){if(n)return s.flags&256?(s.flags&=-257,t=tl(Error(o(422))),na(r,s,d,t)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(l=t.fallback,i=s.mode,t=fa({mode:"visible",children:t.children},i,0,null),l=Ps(l,i,d,null),l.flags|=2,t.return=s,l.return=s,t.sibling=l,s.child=t,(s.mode&1)!==0&&Js(s,r.child,null,d),s.child.memoizedState=cl(d),s.memoizedState=ol,l);if((s.mode&1)===0)return na(r,s,d,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var u=t.dgst;return t=u,l=Error(o(419)),t=tl(l,t,void 0),na(r,s,d,t)}if(u=(d&r.childLanes)!==0,tr||u){if(t=$e,t!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Br(r,i),Ir(t,r,i,-1))}return Cl(),t=tl(Error(o(421))),na(r,s,d,t)}return i.data==="$?"?(s.flags|=128,s.child=r.child,s=Jh.bind(null,r),i._reactRetry=s,null):(r=l.treeContext,pr=ss(i.nextSibling),dr=s,Ce=!0,Sr=null,r!==null&&(mr[fr++]=Fr,mr[fr++]=Wr,mr[fr++]=Ns,Fr=r.id,Wr=r.overflow,Ns=s),s=dl(s,t.children),s.flags|=4096,s)}function zd(r,s,n){r.lanes|=s;var t=r.alternate;t!==null&&(t.lanes|=s),Bi(r.return,s,n)}function pl(r,s,n,t,i){var l=r.memoizedState;l===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=i)}function Pd(r,s,n){var t=s.pendingProps,i=t.revealOrder,l=t.tail;if(Je(r,s,t.children,n),t=Ee.current,(t&2)!==0)t=t&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&zd(r,n,s);else if(r.tag===19)zd(r,n,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(be(Ee,t),(s.mode&1)===0)s.memoizedState=null;else switch(i){case"forwards":for(n=s.child,i=null;n!==null;)r=n.alternate,r!==null&&Kt(r)===null&&(i=n),n=n.sibling;n=i,n===null?(i=s.child,s.child=null):(i=n.sibling,n.sibling=null),pl(s,!1,i,n,l);break;case"backwards":for(n=null,i=s.child,s.child=null;i!==null;){if(r=i.alternate,r!==null&&Kt(r)===null){s.child=i;break}r=i.sibling,i.sibling=n,n=i,i=r}pl(s,!0,n,null,l);break;case"together":pl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ta(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ur(r,s,n){if(r!==null&&(s.dependencies=r.dependencies),Ts|=s.lanes,(n&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(o(153));if(s.child!==null){for(r=s.child,n=hs(r,r.pendingProps),s.child=n,n.return=s;r.sibling!==null;)r=r.sibling,n=n.sibling=hs(r,r.pendingProps),n.return=s;n.sibling=null}return s.child}function Bh(r,s,n){switch(s.tag){case 3:Td(s),Zs();break;case 5:Vc(s);break;case 1:nr(s.type)&&Wt(s);break;case 4:Hi(s,s.stateNode.containerInfo);break;case 10:var t=s.type._context,i=s.memoizedProps.value;be(Gt,t._currentValue),t._currentValue=i;break;case 13:if(t=s.memoizedState,t!==null)return t.dehydrated!==null?(be(Ee,Ee.current&1),s.flags|=128,null):(n&s.child.childLanes)!==0?Id(r,s,n):(be(Ee,Ee.current&1),r=Ur(r,s,n),r!==null?r.sibling:null);be(Ee,Ee.current&1);break;case 19:if(t=(n&s.childLanes)!==0,(r.flags&128)!==0){if(t)return Pd(r,s,n);s.flags|=128}if(i=s.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ee,Ee.current),t)break;return null;case 22:case 23:return s.lanes=0,kd(r,s,n)}return Ur(r,s,n)}var Rd,ul,Ld,Ad;Rd=function(r,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)r.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ul=function(){},Ld=function(r,s,n,t){var i=r.memoizedProps;if(i!==t){r=s.stateNode,Ss(Ar.current);var l=null;switch(n){case"input":i=Ba(r,i),t=Ba(r,t),l=[];break;case"select":i=R({},i,{value:void 0}),t=R({},t,{value:void 0}),l=[];break;case"textarea":i=Ha(r,i),t=Ha(r,t),l=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=Dt)}Ga(n,t);var d;n=null;for(y in i)if(!t.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var u=i[y];for(d in u)u.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in t){var h=t[y];if(u=i!=null?i[y]:void 0,t.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(l||(l=[]),l.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(l=l||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&Ne("scroll",r),l||u===h||(l=[])):(l=l||[]).push(y,h))}n&&(l=l||[]).push("style",n);var y=l;(s.updateQueue=y)&&(s.flags|=4)}},Ad=function(r,s,n,t){n!==t&&(s.flags|=4)};function Zn(r,s){if(!Ce)switch(r.tailMode){case"hidden":s=r.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?r.tail=null:n.sibling=null;break;case"collapsed":n=r.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function Ke(r){var s=r.alternate!==null&&r.alternate.child===r.child,n=0,t=0;if(s)for(var i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=r,i=i.sibling;else for(i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=t,r.childLanes=n,s}function $h(r,s,n){var t=s.pendingProps;switch(Ai(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(s),null;case 1:return nr(s.type)&&Ft(),Ke(s),null;case 3:return t=s.stateNode,sn(),we(sr),we(Qe),qi(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(Ht(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Sr!==null&&(wl(Sr),Sr=null))),ul(r,s),Ke(s),null;case 5:Vi(s);var i=Ss(qn.current);if(n=s.type,r!==null&&s.stateNode!=null)Ld(r,s,n,t,i),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!t){if(s.stateNode===null)throw Error(o(166));return Ke(s),null}if(r=Ss(Ar.current),Ht(s)){t=s.stateNode,n=s.type;var l=s.memoizedProps;switch(t[Lr]=s,t[$n]=l,r=(s.mode&1)!==0,n){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(i=0;i<Fn.length;i++)Ne(Fn[i],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":xo(t,l),Ne("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},Ne("invalid",t);break;case"textarea":go(t,l),Ne("invalid",t)}Ga(n,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var u=l[d];d==="children"?typeof u=="string"?t.textContent!==u&&(l.suppressHydrationWarning!==!0&&Mt(t.textContent,u,r),i=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Mt(t.textContent,u,r),i=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&Ne("scroll",t)}switch(n){case"input":Yr(t),fo(t,l,!0);break;case"textarea":Yr(t),yo(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=Dt)}t=i,s.updateQueue=t,t!==null&&(s.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=jo(n)),r==="http://www.w3.org/1999/xhtml"?n==="script"?(r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=d.createElement(n,{is:t.is}):(r=d.createElement(n),n==="select"&&(d=r,t.multiple?d.multiple=!0:t.size&&(d.size=t.size))):r=d.createElementNS(r,n),r[Lr]=s,r[$n]=t,Rd(r,s,!1,!1),s.stateNode=r;e:{switch(d=qa(n,t),n){case"dialog":Ne("cancel",r),Ne("close",r),i=t;break;case"iframe":case"object":case"embed":Ne("load",r),i=t;break;case"video":case"audio":for(i=0;i<Fn.length;i++)Ne(Fn[i],r);i=t;break;case"source":Ne("error",r),i=t;break;case"img":case"image":case"link":Ne("error",r),Ne("load",r),i=t;break;case"details":Ne("toggle",r),i=t;break;case"input":xo(r,t),i=Ba(r,t),Ne("invalid",r);break;case"option":i=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},i=R({},t,{value:void 0}),Ne("invalid",r);break;case"textarea":go(r,t),i=Ha(r,t),Ne("invalid",r);break;default:i=t}Ga(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var h=u[l];l==="style"?wo(r,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&bo(r,h)):l==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&jn(r,h):typeof h=="number"&&jn(r,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?h!=null&&l==="onScroll"&&Ne("scroll",r):h!=null&&ne(r,l,h,d))}switch(n){case"input":Yr(r),fo(r,t,!1);break;case"textarea":Yr(r),yo(r);break;case"option":t.value!=null&&r.setAttribute("value",""+ce(t.value));break;case"select":r.multiple=!!t.multiple,l=t.value,l!=null?Ds(r,!!t.multiple,l,!1):t.defaultValue!=null&&Ds(r,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(r.onclick=Dt)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ke(s),null;case 6:if(r&&s.stateNode!=null)Ad(r,s,r.memoizedProps,t);else{if(typeof t!="string"&&s.stateNode===null)throw Error(o(166));if(n=Ss(qn.current),Ss(Ar.current),Ht(s)){if(t=s.stateNode,n=s.memoizedProps,t[Lr]=s,(l=t.nodeValue!==n)&&(r=dr,r!==null))switch(r.tag){case 3:Mt(t.nodeValue,n,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Mt(t.nodeValue,n,(r.mode&1)!==0)}l&&(s.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Lr]=s,s.stateNode=t}return Ke(s),null;case 13:if(we(Ee),t=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ce&&pr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Dc(),Zs(),s.flags|=98560,l=!1;else if(l=Ht(s),t!==null&&t.dehydrated!==null){if(r===null){if(!l)throw Error(o(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Lr]=s}else Zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ke(s),l=!1}else Sr!==null&&(wl(Sr),Sr=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=n,s):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ee.current&1)!==0?Oe===0&&(Oe=3):Cl())),s.updateQueue!==null&&(s.flags|=4),Ke(s),null);case 4:return sn(),ul(r,s),r===null&&Wn(s.stateNode.containerInfo),Ke(s),null;case 10:return Wi(s.type._context),Ke(s),null;case 17:return nr(s.type)&&Ft(),Ke(s),null;case 19:if(we(Ee),l=s.memoizedState,l===null)return Ke(s),null;if(t=(s.flags&128)!==0,d=l.rendering,d===null)if(t)Zn(l,!1);else{if(Oe!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(d=Kt(r),d!==null){for(s.flags|=128,Zn(l,!1),t=d.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),s.subtreeFlags=0,t=n,n=s.child;n!==null;)l=n,r=t,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=r,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,r=d.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n=n.sibling;return be(Ee,Ee.current&1|2),s.child}r=r.sibling}l.tail!==null&&Le()>ln&&(s.flags|=128,t=!0,Zn(l,!1),s.lanes=4194304)}else{if(!t)if(r=Kt(d),r!==null){if(s.flags|=128,t=!0,n=r.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),Zn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ce)return Ke(s),null}else 2*Le()-l.renderingStartTime>ln&&n!==1073741824&&(s.flags|=128,t=!0,Zn(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(n=l.last,n!==null?n.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Le(),s.sibling=null,n=Ee.current,be(Ee,t?n&1|2:n&1),s):(Ke(s),null);case 22:case 23:return Sl(),t=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(s.flags|=8192),t&&(s.mode&1)!==0?(ur&1073741824)!==0&&(Ke(s),s.subtreeFlags&6&&(s.flags|=8192)):Ke(s),null;case 24:return null;case 25:return null}throw Error(o(156,s.tag))}function Uh(r,s){switch(Ai(s),s.tag){case 1:return nr(s.type)&&Ft(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return sn(),we(sr),we(Qe),qi(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Vi(s),null;case 13:if(we(Ee),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(o(340));Zs()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return we(Ee),null;case 4:return sn(),null;case 10:return Wi(s.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var aa=!1,Xe=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,A=null;function tn(r,s){var n=r.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){Pe(r,s,t)}else n.current=null}function hl(r,s,n){try{n()}catch(t){Pe(r,s,t)}}var _d=!1;function Vh(r,s){if(Si=St,r=hc(),gi(r)){if("selectionStart"in r)var n={start:r.selectionStart,end:r.selectionEnd};else e:{n=(n=r.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=r,N=null;r:for(;;){for(var L;k!==n||i!==0&&k.nodeType!==3||(u=d+i),k!==l||t!==0&&k.nodeType!==3||(h=d+t),k.nodeType===3&&(d+=k.nodeValue.length),(L=k.firstChild)!==null;)N=k,k=L;for(;;){if(k===r)break r;if(N===n&&++y===i&&(u=d),N===l&&++w===t&&(h=d),(L=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=L}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ci={focusedElem:r,selectionRange:n},St=!1,A=s;A!==null;)if(s=A,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,A=r;else for(;A!==null;){s=A;try{var _=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,Ae=_.memoizedState,g=s.stateNode,x=g.getSnapshotBeforeUpdate(s.elementType===s.type?M:Cr(s.type,M),Ae);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(C){Pe(s,s.return,C)}if(r=s.sibling,r!==null){r.return=s.return,A=r;break}A=s.return}return _=_d,_d=!1,_}function Jn(r,s,n){var t=s.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&r)===r){var l=i.destroy;i.destroy=void 0,l!==void 0&&hl(s,n,l)}i=i.next}while(i!==t)}}function ia(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&r)===r){var t=n.create;n.destroy=t()}n=n.next}while(n!==s)}}function xl(r){var s=r.ref;if(s!==null){var n=r.stateNode;switch(r.tag){case 5:r=n;break;default:r=n}typeof s=="function"?s(r):s.current=r}}function Md(r){var s=r.alternate;s!==null&&(r.alternate=null,Md(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Lr],delete s[$n],delete s[zi],delete s[Th],delete s[Eh])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Dd(r){return r.tag===5||r.tag===3||r.tag===4}function Od(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dd(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ml(r,s,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(r,s):n.insertBefore(r,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(r,n)):(s=n,s.appendChild(r)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=Dt));else if(t!==4&&(r=r.child,r!==null))for(ml(r,s,n),r=r.sibling;r!==null;)ml(r,s,n),r=r.sibling}function fl(r,s,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,s?n.insertBefore(r,s):n.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(fl(r,s,n),r=r.sibling;r!==null;)fl(r,s,n),r=r.sibling}var He=null,Tr=!1;function os(r,s,n){for(n=n.child;n!==null;)Fd(r,s,n),n=n.sibling}function Fd(r,s,n){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(yt,n)}catch{}switch(n.tag){case 5:Xe||tn(n,s);case 6:var t=He,i=Tr;He=null,os(r,s,n),He=t,Tr=i,He!==null&&(Tr?(r=He,n=n.stateNode,r.nodeType===8?r.parentNode.removeChild(n):r.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Tr?(r=He,n=n.stateNode,r.nodeType===8?Ii(r.parentNode,n):r.nodeType===1&&Ii(r,n),Pn(r)):Ii(He,n.stateNode));break;case 4:t=He,i=Tr,He=n.stateNode.containerInfo,Tr=!0,os(r,s,n),He=t,Tr=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&hl(n,s,d),i=i.next}while(i!==t)}os(r,s,n);break;case 1:if(!Xe&&(tn(n,s),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(u){Pe(n,s,u)}os(r,s,n);break;case 21:os(r,s,n);break;case 22:n.mode&1?(Xe=(t=Xe)||n.memoizedState!==null,os(r,s,n),Xe=t):os(r,s,n);break;default:os(r,s,n)}}function Wd(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var n=r.stateNode;n===null&&(n=r.stateNode=new Hh),s.forEach(function(t){var i=ex.bind(null,r,t);n.has(t)||(n.add(t),t.then(i,i))})}}function Er(r,s){var n=s.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];try{var l=r,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,Tr=!1;break e;case 3:He=u.stateNode.containerInfo,Tr=!0;break e;case 4:He=u.stateNode.containerInfo,Tr=!0;break e}u=u.return}if(He===null)throw Error(o(160));Fd(l,d,i),He=null,Tr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Pe(i,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Bd(s,r),s=s.sibling}function Bd(r,s){var n=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Er(s,r),Mr(r),t&4){try{Jn(3,r,r.return),ia(3,r)}catch(M){Pe(r,r.return,M)}try{Jn(5,r,r.return)}catch(M){Pe(r,r.return,M)}}break;case 1:Er(s,r),Mr(r),t&512&&n!==null&&tn(n,n.return);break;case 5:if(Er(s,r),Mr(r),t&512&&n!==null&&tn(n,n.return),r.flags&32){var i=r.stateNode;try{jn(i,"")}catch(M){Pe(r,r.return,M)}}if(t&4&&(i=r.stateNode,i!=null)){var l=r.memoizedProps,d=n!==null?n.memoizedProps:l,u=r.type,h=r.updateQueue;if(r.updateQueue=null,h!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&mo(i,l),qa(u,d);var y=qa(u,l);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?wo(i,k):w==="dangerouslySetInnerHTML"?bo(i,k):w==="children"?jn(i,k):ne(i,w,k,y)}switch(u){case"input":$a(i,l);break;case"textarea":vo(i,l);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var L=l.value;L!=null?Ds(i,!!l.multiple,L,!1):N!==!!l.multiple&&(l.defaultValue!=null?Ds(i,!!l.multiple,l.defaultValue,!0):Ds(i,!!l.multiple,l.multiple?[]:"",!1))}i[$n]=l}catch(M){Pe(r,r.return,M)}}break;case 6:if(Er(s,r),Mr(r),t&4){if(r.stateNode===null)throw Error(o(162));i=r.stateNode,l=r.memoizedProps;try{i.nodeValue=l}catch(M){Pe(r,r.return,M)}}break;case 3:if(Er(s,r),Mr(r),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Pn(s.containerInfo)}catch(M){Pe(r,r.return,M)}break;case 4:Er(s,r),Mr(r);break;case 13:Er(s,r),Mr(r),i=r.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=Le())),t&4&&Wd(r);break;case 22:if(w=n!==null&&n.memoizedState!==null,r.mode&1?(Xe=(y=Xe)||w,Er(s,r),Xe=y):Er(s,r),Mr(r),t&8192){if(y=r.memoizedState!==null,(r.stateNode.isHidden=y)&&!w&&(r.mode&1)!==0)for(A=r,w=r.child;w!==null;){for(k=A=w;A!==null;){switch(N=A,L=N.child,N.tag){case 0:case 11:case 14:case 15:Jn(4,N,N.return);break;case 1:tn(N,N.return);var _=N.stateNode;if(typeof _.componentWillUnmount=="function"){t=N,n=N.return;try{s=t,_.props=s.memoizedProps,_.state=s.memoizedState,_.componentWillUnmount()}catch(M){Pe(t,n,M)}}break;case 5:tn(N,N.return);break;case 22:if(N.memoizedState!==null){Hd(k);continue}}L!==null?(L.return=N,A=L):Hd(k)}w=w.sibling}e:for(w=null,k=r;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=No("display",d))}catch(M){Pe(r,r.return,M)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(M){Pe(r,r.return,M)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===r)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===r)break e;for(;k.sibling===null;){if(k.return===null||k.return===r)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Er(s,r),Mr(r),t&4&&Wd(r);break;case 21:break;default:Er(s,r),Mr(r)}}function Mr(r){var s=r.flags;if(s&2){try{e:{for(var n=r.return;n!==null;){if(Dd(n)){var t=n;break e}n=n.return}throw Error(o(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(jn(i,""),t.flags&=-33);var l=Od(r);fl(r,l,i);break;case 3:case 4:var d=t.stateNode.containerInfo,u=Od(r);ml(r,u,d);break;default:throw Error(o(161))}}catch(h){Pe(r,r.return,h)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Gh(r,s,n){A=r,$d(r)}function $d(r,s,n){for(var t=(r.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&t){var d=i.memoizedState!==null||aa;if(!d){var u=i.alternate,h=u!==null&&u.memoizedState!==null||Xe;u=aa;var y=Xe;if(aa=d,(Xe=h)&&!y)for(A=i;A!==null;)d=A,h=d.child,d.tag===22&&d.memoizedState!==null?Vd(i):h!==null?(h.return=d,A=h):Vd(i);for(;l!==null;)A=l,$d(l),l=l.sibling;A=i,aa=u,Xe=y}Ud(r)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,A=l):Ud(r)}}function Ud(r){for(;A!==null;){var s=A;if((s.flags&8772)!==0){var n=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Xe||ia(5,s);break;case 1:var t=s.stateNode;if(s.flags&4&&!Xe)if(n===null)t.componentDidMount();else{var i=s.elementType===s.type?n.memoizedProps:Cr(s.type,n.memoizedProps);t.componentDidUpdate(i,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Hc(s,l,t);break;case 3:var d=s.updateQueue;if(d!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}Hc(s,d,n)}break;case 5:var u=s.stateNode;if(n===null&&s.flags&4){n=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&Pn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Xe||s.flags&512&&xl(s)}catch(N){Pe(s,s.return,N)}}if(s===r){A=null;break}if(n=s.sibling,n!==null){n.return=s.return,A=n;break}A=s.return}}function Hd(r){for(;A!==null;){var s=A;if(s===r){A=null;break}var n=s.sibling;if(n!==null){n.return=s.return,A=n;break}A=s.return}}function Vd(r){for(;A!==null;){var s=A;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{ia(4,s)}catch(h){Pe(s,n,h)}break;case 1:var t=s.stateNode;if(typeof t.componentDidMount=="function"){var i=s.return;try{t.componentDidMount()}catch(h){Pe(s,i,h)}}var l=s.return;try{xl(s)}catch(h){Pe(s,l,h)}break;case 5:var d=s.return;try{xl(s)}catch(h){Pe(s,d,h)}}}catch(h){Pe(s,s.return,h)}if(s===r){A=null;break}var u=s.sibling;if(u!==null){u.return=s.return,A=u;break}A=s.return}}var qh=Math.ceil,la=P.ReactCurrentDispatcher,gl=P.ReactCurrentOwner,yr=P.ReactCurrentBatchConfig,ue=0,$e=null,_e=null,Ve=0,ur=0,an=ns(0),Oe=0,et=null,Ts=0,oa=0,vl=0,rt=null,ar=null,yl=0,ln=1/0,Hr=null,ca=!1,jl=null,cs=null,da=!1,ds=null,pa=0,st=0,bl=null,ua=-1,ha=0;function er(){return(ue&6)!==0?Le():ua!==-1?ua:ua=Le()}function ps(r){return(r.mode&1)===0?1:(ue&2)!==0&&Ve!==0?Ve&-Ve:zh.transition!==null?(ha===0&&(ha=Oo()),ha):(r=ge,r!==0||(r=window.event,r=r===void 0?16:qo(r.type)),r)}function Ir(r,s,n,t){if(50<st)throw st=0,bl=null,Error(o(185));Cn(r,n,t),((ue&2)===0||r!==$e)&&(r===$e&&((ue&2)===0&&(oa|=n),Oe===4&&us(r,Ve)),ir(r,t),n===1&&ue===0&&(s.mode&1)===0&&(ln=Le()+500,Bt&&as()))}function ir(r,s){var n=r.callbackNode;zu(r,s);var t=Nt(r,r===$e?Ve:0);if(t===0)n!==null&&_o(n),r.callbackNode=null,r.callbackPriority=0;else if(s=t&-t,r.callbackPriority!==s){if(n!=null&&_o(n),s===1)r.tag===0?Ih(qd.bind(null,r)):Rc(qd.bind(null,r)),Sh(function(){(ue&6)===0&&as()}),n=null;else{switch(Fo(t)){case 1:n=ei;break;case 4:n=Mo;break;case 16:n=vt;break;case 536870912:n=Do;break;default:n=vt}n=rp(n,Gd.bind(null,r))}r.callbackPriority=s,r.callbackNode=n}}function Gd(r,s){if(ua=-1,ha=0,(ue&6)!==0)throw Error(o(327));var n=r.callbackNode;if(on()&&r.callbackNode!==n)return null;var t=Nt(r,r===$e?Ve:0);if(t===0)return null;if((t&30)!==0||(t&r.expiredLanes)!==0||s)s=xa(r,t);else{s=t;var i=ue;ue|=2;var l=Yd();($e!==r||Ve!==s)&&(Hr=null,ln=Le()+500,Is(r,s));do try{Kh();break}catch(u){Qd(r,u)}while(!0);Fi(),la.current=l,ue=i,_e!==null?s=0:($e=null,Ve=0,s=Oe)}if(s!==0){if(s===2&&(i=ri(r),i!==0&&(t=i,s=Nl(r,i))),s===1)throw n=et,Is(r,0),us(r,t),ir(r,Le()),n;if(s===6)us(r,t);else{if(i=r.current.alternate,(t&30)===0&&!Qh(i)&&(s=xa(r,t),s===2&&(l=ri(r),l!==0&&(t=l,s=Nl(r,l))),s===1))throw n=et,Is(r,0),us(r,t),ir(r,Le()),n;switch(r.finishedWork=i,r.finishedLanes=t,s){case 0:case 1:throw Error(o(345));case 2:zs(r,ar,Hr);break;case 3:if(us(r,t),(t&130023424)===t&&(s=yl+500-Le(),10<s)){if(Nt(r,0)!==0)break;if(i=r.suspendedLanes,(i&t)!==t){er(),r.pingedLanes|=r.suspendedLanes&i;break}r.timeoutHandle=Ei(zs.bind(null,r,ar,Hr),s);break}zs(r,ar,Hr);break;case 4:if(us(r,t),(t&4194240)===t)break;for(s=r.eventTimes,i=-1;0<t;){var d=31-wr(t);l=1<<d,d=s[d],d>i&&(i=d),t&=~l}if(t=i,t=Le()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*qh(t/1960))-t,10<t){r.timeoutHandle=Ei(zs.bind(null,r,ar,Hr),t);break}zs(r,ar,Hr);break;case 5:zs(r,ar,Hr);break;default:throw Error(o(329))}}}return ir(r,Le()),r.callbackNode===n?Gd.bind(null,r):null}function Nl(r,s){var n=rt;return r.current.memoizedState.isDehydrated&&(Is(r,s).flags|=256),r=xa(r,s),r!==2&&(s=ar,ar=n,s!==null&&wl(s)),r}function wl(r){ar===null?ar=r:ar.push.apply(ar,r)}function Qh(r){for(var s=r;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var i=n[t],l=i.getSnapshot;i=i.value;try{if(!kr(l(),i))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(r,s){for(s&=~vl,s&=~oa,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var n=31-wr(s),t=1<<n;r[n]=-1,s&=~t}}function qd(r){if((ue&6)!==0)throw Error(o(327));on();var s=Nt(r,0);if((s&1)===0)return ir(r,Le()),null;var n=xa(r,s);if(r.tag!==0&&n===2){var t=ri(r);t!==0&&(s=t,n=Nl(r,t))}if(n===1)throw n=et,Is(r,0),us(r,s),ir(r,Le()),n;if(n===6)throw Error(o(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,zs(r,ar,Hr),ir(r,Le()),null}function kl(r,s){var n=ue;ue|=1;try{return r(s)}finally{ue=n,ue===0&&(ln=Le()+500,Bt&&as())}}function Es(r){ds!==null&&ds.tag===0&&(ue&6)===0&&on();var s=ue;ue|=1;var n=yr.transition,t=ge;try{if(yr.transition=null,ge=1,r)return r()}finally{ge=t,yr.transition=n,ue=s,(ue&6)===0&&as()}}function Sl(){ur=an.current,we(an)}function Is(r,s){r.finishedWork=null,r.finishedLanes=0;var n=r.timeoutHandle;if(n!==-1&&(r.timeoutHandle=-1,kh(n)),_e!==null)for(n=_e.return;n!==null;){var t=n;switch(Ai(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Ft();break;case 3:sn(),we(sr),we(Qe),qi();break;case 5:Vi(t);break;case 4:sn();break;case 13:we(Ee);break;case 19:we(Ee);break;case 10:Wi(t.type._context);break;case 22:case 23:Sl()}n=n.return}if($e=r,_e=r=hs(r.current,null),Ve=ur=s,Oe=0,et=null,vl=oa=Ts=0,ar=rt=null,ks!==null){for(s=0;s<ks.length;s++)if(n=ks[s],t=n.interleaved,t!==null){n.interleaved=null;var i=t.next,l=n.pending;if(l!==null){var d=l.next;l.next=i,t.next=d}n.pending=t}ks=null}return r}function Qd(r,s){do{var n=_e;try{if(Fi(),Xt.current=ra,Zt){for(var t=Ie.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zt=!1}if(Cs=0,Be=De=Ie=null,Qn=!1,Yn=0,gl.current=null,n===null||n.return===null){Oe=1,et=s,_e=null;break}e:{var l=r,d=n.return,u=n,h=s;if(s=Ve,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var L=yd(d);if(L!==null){L.flags&=-257,jd(L,d,u,l,s),L.mode&1&&vd(l,y,s),s=L,h=y;var _=s.updateQueue;if(_===null){var M=new Set;M.add(h),s.updateQueue=M}else _.add(h);break e}else{if((s&1)===0){vd(l,y,s),Cl();break e}h=Error(o(426))}}else if(Ce&&u.mode&1){var Ae=yd(d);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),jd(Ae,d,u,l,s),Di(nn(h,u));break e}}l=h=nn(h,u),Oe!==4&&(Oe=2),rt===null?rt=[l]:rt.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var g=fd(l,h,s);Uc(l,g);break e;case 1:u=h;var x=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cs===null||!cs.has(v)))){l.flags|=65536,s&=-s,l.lanes|=s;var C=gd(l,u,s);Uc(l,C);break e}}l=l.return}while(l!==null)}Xd(n)}catch(O){s=O,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Yd(){var r=la.current;return la.current=ra,r===null?ra:r}function Cl(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),$e===null||(Ts&268435455)===0&&(oa&268435455)===0||us($e,Ve)}function xa(r,s){var n=ue;ue|=2;var t=Yd();($e!==r||Ve!==s)&&(Hr=null,Is(r,s));do try{Yh();break}catch(i){Qd(r,i)}while(!0);if(Fi(),ue=n,la.current=t,_e!==null)throw Error(o(261));return $e=null,Ve=0,Oe}function Yh(){for(;_e!==null;)Kd(_e)}function Kh(){for(;_e!==null&&!bu();)Kd(_e)}function Kd(r){var s=ep(r.alternate,r,ur);r.memoizedProps=r.pendingProps,s===null?Xd(r):_e=s,gl.current=null}function Xd(r){var s=r;do{var n=s.alternate;if(r=s.return,(s.flags&32768)===0){if(n=$h(n,s,ur),n!==null){_e=n;return}}else{if(n=Uh(n,s),n!==null){n.flags&=32767,_e=n;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Oe=6,_e=null;return}}if(s=s.sibling,s!==null){_e=s;return}_e=s=r}while(s!==null);Oe===0&&(Oe=5)}function zs(r,s,n){var t=ge,i=yr.transition;try{yr.transition=null,ge=1,Xh(r,s,n,t)}finally{yr.transition=i,ge=t}return null}function Xh(r,s,n,t){do on();while(ds!==null);if((ue&6)!==0)throw Error(o(327));n=r.finishedWork;var i=r.finishedLanes;if(n===null)return null;if(r.finishedWork=null,r.finishedLanes=0,n===r.current)throw Error(o(177));r.callbackNode=null,r.callbackPriority=0;var l=n.lanes|n.childLanes;if(Pu(r,l),r===$e&&(_e=$e=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||da||(da=!0,rp(vt,function(){return on(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=yr.transition,yr.transition=null;var d=ge;ge=1;var u=ue;ue|=4,gl.current=null,Vh(r,n),Bd(n,r),gh(Ci),St=!!Si,Ci=Si=null,r.current=n,Gh(n),Nu(),ue=u,ge=d,yr.transition=l}else r.current=n;if(da&&(da=!1,ds=r,pa=i),l=r.pendingLanes,l===0&&(cs=null),Su(n.stateNode),ir(r,Le()),s!==null)for(t=r.onRecoverableError,n=0;n<s.length;n++)i=s[n],t(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,r=jl,jl=null,r;return(pa&1)!==0&&r.tag!==0&&on(),l=r.pendingLanes,(l&1)!==0?r===bl?st++:(st=0,bl=r):st=0,as(),null}function on(){if(ds!==null){var r=Fo(pa),s=yr.transition,n=ge;try{if(yr.transition=null,ge=16>r?16:r,ds===null)var t=!1;else{if(r=ds,ds=null,pa=0,(ue&6)!==0)throw Error(o(331));var i=ue;for(ue|=4,A=r.current;A!==null;){var l=A,d=l.child;if((A.flags&16)!==0){var u=l.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(A=y;A!==null;){var w=A;switch(w.tag){case 0:case 11:case 15:Jn(8,w,l)}var k=w.child;if(k!==null)k.return=w,A=k;else for(;A!==null;){w=A;var N=w.sibling,L=w.return;if(Md(w),w===y){A=null;break}if(N!==null){N.return=L,A=N;break}A=L}}}var _=l.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var Ae=M.sibling;M.sibling=null,M=Ae}while(M!==null)}}A=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,A=d;else e:for(;A!==null;){if(l=A,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Jn(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,A=g;break e}A=l.return}}var x=r.current;for(A=x;A!==null;){d=A;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,A=v;else e:for(d=x;A!==null;){if(u=A,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ia(9,u)}}catch(O){Pe(u,u.return,O)}if(u===d){A=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,A=C;break e}A=u.return}}if(ue=i,as(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(yt,r)}catch{}t=!0}return t}finally{ge=n,yr.transition=s}}return!1}function Zd(r,s,n){s=nn(n,s),s=fd(r,s,1),r=ls(r,s,1),s=er(),r!==null&&(Cn(r,1,s),ir(r,s))}function Pe(r,s,n){if(r.tag===3)Zd(r,r,n);else for(;s!==null;){if(s.tag===3){Zd(s,r,n);break}else if(s.tag===1){var t=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(cs===null||!cs.has(t))){r=nn(n,r),r=gd(s,r,1),s=ls(s,r,1),r=er(),s!==null&&(Cn(s,1,r),ir(s,r));break}}s=s.return}}function Zh(r,s,n){var t=r.pingCache;t!==null&&t.delete(s),s=er(),r.pingedLanes|=r.suspendedLanes&n,$e===r&&(Ve&n)===n&&(Oe===4||Oe===3&&(Ve&130023424)===Ve&&500>Le()-yl?Is(r,0):vl|=n),ir(r,s)}function Jd(r,s){s===0&&((r.mode&1)===0?s=1:(s=bt,bt<<=1,(bt&130023424)===0&&(bt=4194304)));var n=er();r=Br(r,s),r!==null&&(Cn(r,s,n),ir(r,n))}function Jh(r){var s=r.memoizedState,n=0;s!==null&&(n=s.retryLane),Jd(r,n)}function ex(r,s){var n=0;switch(r.tag){case 13:var t=r.stateNode,i=r.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(o(314))}t!==null&&t.delete(s),Jd(r,n)}var ep;ep=function(r,s,n){if(r!==null)if(r.memoizedProps!==s.pendingProps||sr.current)tr=!0;else{if((r.lanes&n)===0&&(s.flags&128)===0)return tr=!1,Bh(r,s,n);tr=(r.flags&131072)!==0}else tr=!1,Ce&&(s.flags&1048576)!==0&&Lc(s,Ut,s.index);switch(s.lanes=0,s.tag){case 2:var t=s.type;ta(r,s),r=s.pendingProps;var i=Ys(s,Qe.current);rn(s,n),i=Ki(null,s,t,r,i,n);var l=Xi();return s.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,nr(t)?(l=!0,Wt(s)):l=!1,s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ui(s),i.updater=sa,s.stateNode=i,i._reactInternals=s,nl(s,t,r,n),s=ll(null,s,t,!0,l,n)):(s.tag=0,Ce&&l&&Li(s),Je(null,s,i,n),s=s.child),s;case 16:t=s.elementType;e:{switch(ta(r,s),r=s.pendingProps,i=t._init,t=i(t._payload),s.type=t,i=s.tag=sx(t),r=Cr(t,r),i){case 0:s=il(null,s,t,r,n);break e;case 1:s=Cd(null,s,t,r,n);break e;case 11:s=bd(null,s,t,r,n);break e;case 14:s=Nd(null,s,t,Cr(t.type,r),n);break e}throw Error(o(306,t,""))}return s;case 0:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Cr(t,i),il(r,s,t,i,n);case 1:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Cr(t,i),Cd(r,s,t,i,n);case 3:e:{if(Td(s),r===null)throw Error(o(387));t=s.pendingProps,l=s.memoizedState,i=l.element,$c(r,s),Yt(s,t,null,n);var d=s.memoizedState;if(t=d.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){i=nn(Error(o(423)),s),s=Ed(r,s,t,n,i);break e}else if(t!==i){i=nn(Error(o(424)),s),s=Ed(r,s,t,n,i);break e}else for(pr=ss(s.stateNode.containerInfo.firstChild),dr=s,Ce=!0,Sr=null,n=Wc(s,null,t,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),t===i){s=Ur(r,s,n);break e}Je(r,s,t,n)}s=s.child}return s;case 5:return Vc(s),r===null&&Mi(s),t=s.type,i=s.pendingProps,l=r!==null?r.memoizedProps:null,d=i.children,Ti(t,i)?d=null:l!==null&&Ti(t,l)&&(s.flags|=32),Sd(r,s),Je(r,s,d,n),s.child;case 6:return r===null&&Mi(s),null;case 13:return Id(r,s,n);case 4:return Hi(s,s.stateNode.containerInfo),t=s.pendingProps,r===null?s.child=Js(s,null,t,n):Je(r,s,t,n),s.child;case 11:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Cr(t,i),bd(r,s,t,i,n);case 7:return Je(r,s,s.pendingProps,n),s.child;case 8:return Je(r,s,s.pendingProps.children,n),s.child;case 12:return Je(r,s,s.pendingProps.children,n),s.child;case 10:e:{if(t=s.type._context,i=s.pendingProps,l=s.memoizedProps,d=i.value,be(Gt,t._currentValue),t._currentValue=d,l!==null)if(kr(l.value,d)){if(l.children===i.children&&!sr.current){s=Ur(r,s,n);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var u=l.dependencies;if(u!==null){d=l.child;for(var h=u.firstContext;h!==null;){if(h.context===t){if(l.tag===1){h=$r(-1,n&-n),h.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),Bi(l.return,n,s),u.lanes|=n;break}h=h.next}}else if(l.tag===10)d=l.type===s.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(o(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Bi(d,n,s),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===s){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}Je(r,s,i.children,n),s=s.child}return s;case 9:return i=s.type,t=s.pendingProps.children,rn(s,n),i=gr(i),t=t(i),s.flags|=1,Je(r,s,t,n),s.child;case 14:return t=s.type,i=Cr(t,s.pendingProps),i=Cr(t.type,i),Nd(r,s,t,i,n);case 15:return wd(r,s,s.type,s.pendingProps,n);case 17:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Cr(t,i),ta(r,s),s.tag=1,nr(t)?(r=!0,Wt(s)):r=!1,rn(s,n),xd(s,t,i),nl(s,t,i,n),ll(null,s,t,!0,r,n);case 19:return Pd(r,s,n);case 22:return kd(r,s,n)}throw Error(o(156,s.tag))};function rp(r,s){return Ao(r,s)}function rx(r,s,n,t){this.tag=r,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(r,s,n,t){return new rx(r,s,n,t)}function Tl(r){return r=r.prototype,!(!r||!r.isReactComponent)}function sx(r){if(typeof r=="function")return Tl(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ze)return 11;if(r===Ze)return 14}return 2}function hs(r,s){var n=r.alternate;return n===null?(n=jr(r.tag,s,r.key,r.mode),n.elementType=r.elementType,n.type=r.type,n.stateNode=r.stateNode,n.alternate=r,r.alternate=n):(n.pendingProps=s,n.type=r.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=r.flags&14680064,n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,s=r.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=r.sibling,n.index=r.index,n.ref=r.ref,n}function ma(r,s,n,t,i,l){var d=2;if(t=r,typeof r=="function")Tl(r)&&(d=1);else if(typeof r=="string")d=5;else e:switch(r){case I:return Ps(n.children,i,l,s);case D:d=8,i|=8;break;case ye:return r=jr(12,n,s,i|2),r.elementType=ye,r.lanes=l,r;case Se:return r=jr(13,n,s,i),r.elementType=Se,r.lanes=l,r;case Ge:return r=jr(19,n,s,i),r.elementType=Ge,r.lanes=l,r;case je:return fa(n,i,l,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Re:d=10;break e;case ie:d=9;break e;case ze:d=11;break e;case Ze:d=14;break e;case qe:d=16,t=null;break e}throw Error(o(130,r==null?r:typeof r,""))}return s=jr(d,n,s,i),s.elementType=r,s.type=t,s.lanes=l,s}function Ps(r,s,n,t){return r=jr(7,r,t,s),r.lanes=n,r}function fa(r,s,n,t){return r=jr(22,r,t,s),r.elementType=je,r.lanes=n,r.stateNode={isHidden:!1},r}function El(r,s,n){return r=jr(6,r,null,s),r.lanes=n,r}function Il(r,s,n){return s=jr(4,r.children!==null?r.children:[],r.key,s),s.lanes=n,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function nx(r,s,n,t,i){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zl(r,s,n,t,i,l,d,u,h){return r=new nx(r,s,n,u,h),s===1?(s=1,l===!0&&(s|=8)):s=0,l=jr(3,null,null,s),r.current=l,l.stateNode=r,l.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(l),r}function tx(r,s,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:t==null?null:""+t,children:r,containerInfo:s,implementation:n}}function sp(r){if(!r)return ts;r=r._reactInternals;e:{if(ys(r)!==r||r.tag!==1)throw Error(o(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(nr(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(o(171))}if(r.tag===1){var n=r.type;if(nr(n))return zc(r,n,s)}return s}function np(r,s,n,t,i,l,d,u,h){return r=zl(n,t,!0,r,i,l,d,u,h),r.context=sp(null),n=r.current,t=er(),i=ps(n),l=$r(t,i),l.callback=s!=null?s:null,ls(n,l,i),r.current.lanes=i,Cn(r,i,t),ir(r,t),r}function ga(r,s,n,t){var i=s.current,l=er(),d=ps(i);return n=sp(n),s.context===null?s.context=n:s.pendingContext=n,s=$r(l,d),s.payload={element:r},t=t===void 0?null:t,t!==null&&(s.callback=t),r=ls(i,s,d),r!==null&&(Ir(r,i,d,l),Qt(r,i,d)),d}function va(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function tp(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var n=r.retryLane;r.retryLane=n!==0&&n<s?n:s}}function Pl(r,s){tp(r,s),(r=r.alternate)&&tp(r,s)}function ax(){return null}var ap=typeof reportError=="function"?reportError:function(r){console.error(r)};function Rl(r){this._internalRoot=r}ya.prototype.render=Rl.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(o(409));ga(r,s,null,null)},ya.prototype.unmount=Rl.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Es(function(){ga(null,r,null,null)}),s[Dr]=null}};function ya(r){this._internalRoot=r}ya.prototype.unstable_scheduleHydration=function(r){if(r){var s=$o();r={blockedOn:null,target:r,priority:s};for(var n=0;n<Jr.length&&s!==0&&s<Jr[n].priority;n++);Jr.splice(n,0,r),n===0&&Vo(r)}};function Ll(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ja(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ip(){}function ix(r,s,n,t,i){if(i){if(typeof t=="function"){var l=t;t=function(){var y=va(d);l.call(y)}}var d=np(s,t,r,0,null,!1,!1,"",ip);return r._reactRootContainer=d,r[Dr]=d.current,Wn(r.nodeType===8?r.parentNode:r),Es(),d}for(;i=r.lastChild;)r.removeChild(i);if(typeof t=="function"){var u=t;t=function(){var y=va(h);u.call(y)}}var h=zl(r,0,!1,null,null,!1,!1,"",ip);return r._reactRootContainer=h,r[Dr]=h.current,Wn(r.nodeType===8?r.parentNode:r),Es(function(){ga(s,h,n,t)}),h}function ba(r,s,n,t,i){var l=n._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var u=i;i=function(){var h=va(d);u.call(h)}}ga(s,d,r,i)}else d=ix(n,s,r,i,t);return va(d)}Wo=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var n=Sn(s.pendingLanes);n!==0&&(ni(s,n|1),ir(s,Le()),(ue&6)===0&&(ln=Le()+500,as()))}break;case 13:Es(function(){var t=Br(r,1);if(t!==null){var i=er();Ir(t,r,1,i)}}),Pl(r,1)}},ti=function(r){if(r.tag===13){var s=Br(r,134217728);if(s!==null){var n=er();Ir(s,r,134217728,n)}Pl(r,134217728)}},Bo=function(r){if(r.tag===13){var s=ps(r),n=Br(r,s);if(n!==null){var t=er();Ir(n,r,s,t)}Pl(r,s)}},$o=function(){return ge},Uo=function(r,s){var n=ge;try{return ge=r,s()}finally{ge=n}},Ka=function(r,s,n){switch(s){case"input":if($a(r,n),s=n.name,n.type==="radio"&&s!=null){for(n=r;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var t=n[s];if(t!==r&&t.form===r.form){var i=Ot(t);if(!i)throw Error(o(90));vs(t),$a(t,i)}}}break;case"textarea":vo(r,n);break;case"select":s=n.value,s!=null&&Ds(r,!!n.multiple,s,!1)}},To=kl,Eo=Es;var lx={usingClientEntryPoint:!1,Events:[Un,qs,Ot,So,Co,kl]},nt={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:nt.bundleType,version:nt.version,rendererPackageName:nt.rendererPackageName,rendererConfig:nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ro(r),r===null?null:r.stateNode},findFiberByHostInstance:nt.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{yt=Na.inject(ox),Rr=Na}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx,lr.createPortal=function(r,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(s))throw Error(o(200));return tx(r,s,null,n)},lr.createRoot=function(r,s){if(!Ll(r))throw Error(o(299));var n=!1,t="",i=ap;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(t=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),s=zl(r,1,!1,null,null,n,!1,t,i),r[Dr]=s.current,Wn(r.nodeType===8?r.parentNode:r),new Rl(s)},lr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(o(188)):(r=Object.keys(r).join(","),Error(o(268,r)));return r=Ro(s),r=r===null?null:r.stateNode,r},lr.flushSync=function(r){return Es(r)},lr.hydrate=function(r,s,n){if(!ja(s))throw Error(o(200));return ba(null,r,s,!0,n)},lr.hydrateRoot=function(r,s,n){if(!Ll(r))throw Error(o(405));var t=n!=null&&n.hydratedSources||null,i=!1,l="",d=ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),s=np(s,null,r,1,n!=null?n:null,i,!1,l,d),r[Dr]=s.current,Wn(r),t)for(r=0;r<t.length;r++)n=t[r],i=n._getVersion,i=i(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,i]:s.mutableSourceEagerHydrationData.push(n,i);return new ya(s)},lr.render=function(r,s,n){if(!ja(s))throw Error(o(200));return ba(null,r,s,!1,n)},lr.unmountComponentAtNode=function(r){if(!ja(r))throw Error(o(40));return r._reactRootContainer?(Es(function(){ba(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},lr.unstable_batchedUpdates=kl,lr.unstable_renderSubtreeIntoContainer=function(r,s,n,t){if(!ja(n))throw Error(o(200));if(r==null||r._reactInternals===void 0)throw Error(o(38));return ba(r,s,n,!1,t)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var xp;function gx(){if(xp)return Ml.exports;xp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ml.exports=fx(),Ml.exports}var mp;function vx(){if(mp)return wa;mp=1;var a=gx();return wa.createRoot=a.createRoot,wa.hydrateRoot=a.hydrateRoot,wa}var yx=vx(),K=no();const xr=dx(K);var or=function(){return or=Object.assign||function(c){for(var o,p=1,m=arguments.length;p<m;p++){o=arguments[p];for(var j in o)Object.prototype.hasOwnProperty.call(o,j)&&(c[j]=o[j])}return c},or.apply(this,arguments)};function Ia(a,c,o){if(o||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return a.concat(j||Array.prototype.slice.call(c))}var ke="-ms-",lt="-moz-",xe="-webkit-",_p="comm",_a="rule",to="decl",jx="@import",bx="@namespace",Mp="@keyframes",Nx="@layer",Dp=Math.abs,ao=String.fromCharCode,Vl=Object.assign;function wx(a,c){return Fe(a,0)^45?(((c<<2^Fe(a,0))<<2^Fe(a,1))<<2^Fe(a,2))<<2^Fe(a,3):0}function Op(a){return a.trim()}function Vr(a,c){return(a=c.exec(a))?a[0]:a}function se(a,c,o){return a.replace(c,o)}function ka(a,c,o){return a.indexOf(c,o)}function Fe(a,c){return a.charCodeAt(c)|0}function Ms(a,c,o){return a.slice(c,o)}function zr(a){return a.length}function Fp(a){return a.length}function at(a,c){return c.push(a),a}function kx(a,c){return a.map(c).join("")}function fp(a,c){return a.filter(function(o){return!Vr(o,c)})}var Ma=1,dn=1,Wp=0,br=0,Me=0,vn="";function Da(a,c,o,p,m,j,S,z){return{value:a,root:c,parent:o,type:p,props:m,children:j,line:Ma,column:dn,length:S,return:"",siblings:z}}function ms(a,c){return Vl(Da("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function cn(a){for(;a.root;)a=ms(a.root,{children:[a]});at(a,a.siblings)}function Sx(){return Me}function Cx(){return Me=br>0?Fe(vn,--br):0,dn--,Me===10&&(dn=1,Ma--),Me}function Pr(){return Me=br<Wp?Fe(vn,br++):0,dn++,Me===10&&(dn=1,Ma++),Me}function fs(){return Fe(vn,br)}function Sa(){return br}function Oa(a,c){return Ms(vn,a,c)}function ct(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tx(a){return Ma=dn=1,Wp=zr(vn=a),br=0,[]}function Ex(a){return vn="",a}function Fl(a){return Op(Oa(br-1,Gl(a===91?a+2:a===40?a+1:a)))}function Ix(a){for(;(Me=fs())&&Me<33;)Pr();return ct(a)>2||ct(Me)>3?"":" "}function zx(a,c){for(;--c&&Pr()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Oa(a,Sa()+(c<6&&fs()==32&&Pr()==32))}function Gl(a){for(;Pr();)switch(Me){case a:return br;case 34:case 39:a!==34&&a!==39&&Gl(Me);break;case 40:a===41&&Gl(a);break;case 92:Pr();break}return br}function Px(a,c){for(;Pr()&&a+Me!==57;)if(a+Me===84&&fs()===47)break;return"/*"+Oa(c,br-1)+"*"+ao(a===47?a:Pr())}function Rx(a){for(;!ct(fs());)Pr();return Oa(a,br)}function Lx(a){return Ex(Ca("",null,null,null,[""],a=Tx(a),0,[0],a))}function Ca(a,c,o,p,m,j,S,z,T){for(var Y=0,G=0,W=S,J=0,oe=0,X=0,B=1,q=1,me=1,de=0,ne="",P=m,Z=j,$=p,I=ne;q;)switch(X=de,de=Pr()){case 40:if(X!=108&&Fe(I,W-1)==58){ka(I+=se(Fl(de),"&","&\f"),"&\f",Dp(Y?z[Y-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:I+=Fl(de);break;case 9:case 10:case 13:case 32:I+=Ix(X);break;case 92:I+=zx(Sa()-1,7);continue;case 47:switch(fs()){case 42:case 47:at(Ax(Px(Pr(),Sa()),c,o,T),T),(ct(X||1)==5||ct(fs()||1)==5)&&zr(I)&&Ms(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*B:z[Y++]=zr(I)*me;case 125*B:case 59:case 0:switch(de){case 0:case 125:q=0;case 59+G:me==-1&&(I=se(I,/\f/g,"")),oe>0&&(zr(I)-W||B===0&&X===47)&&at(oe>32?vp(I+";",p,o,W-1,T):vp(se(I," ","")+";",p,o,W-2,T),T);break;case 59:I+=";";default:if(at($=gp(I,c,o,Y,G,m,z,ne,P=[],Z=[],W,j),j),de===123)if(G===0)Ca(I,c,$,$,P,j,W,z,Z);else{switch(J){case 99:if(Fe(I,3)===110)break;case 108:if(Fe(I,2)===97)break;default:G=0;case 100:case 109:case 115:}G?Ca(a,$,$,p&&at(gp(a,$,$,0,0,m,z,ne,m,P=[],W,Z),Z),m,Z,W,z,p?P:Z):Ca(I,$,$,$,[""],Z,0,z,Z)}}Y=G=oe=0,B=me=1,ne=I="",W=S;break;case 58:W=1+zr(I),oe=X;default:if(B<1){if(de==123)--B;else if(de==125&&B++==0&&Cx()==125)continue}switch(I+=ao(de),de*B){case 38:me=G>0?1:(I+="\f",-1);break;case 44:z[Y++]=(zr(I)-1)*me,me=1;break;case 64:fs()===45&&(I+=Fl(Pr())),J=fs(),G=W=zr(ne=I+=Rx(Sa())),de++;break;case 45:X===45&&zr(I)==2&&(B=0)}}return j}function gp(a,c,o,p,m,j,S,z,T,Y,G,W){for(var J=m-1,oe=m===0?j:[""],X=Fp(oe),B=0,q=0,me=0;B<p;++B)for(var de=0,ne=Ms(a,J+1,J=Dp(q=S[B])),P=a;de<X;++de)(P=Op(q>0?oe[de]+" "+ne:se(ne,/&\f/g,oe[de])))&&(T[me++]=P);return Da(a,c,o,m===0?_a:z,T,Y,G,W)}function Ax(a,c,o,p){return Da(a,c,o,_p,ao(Sx()),Ms(a,2,-2),0,p)}function vp(a,c,o,p,m){return Da(a,c,o,to,Ms(a,0,p),Ms(a,p+1,-1),p,m)}function Bp(a,c,o){switch(wx(a,c)){case 5103:return xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+a+a;case 4855:return xe+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return lt+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+a+lt+a+ke+a+a;case 5936:switch(Fe(a,c+11)){case 114:return xe+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return xe+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return xe+a+ke+se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return xe+a+ke+a+a;case 6165:return xe+a+ke+"flex-"+a+a;case 5187:return xe+a+se(a,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ke+"flex-$1$2")+a;case 5443:return xe+a+ke+"flex-item-"+se(a,/flex-|-self/g,"")+(Vr(a,/flex-|baseline/)?"":ke+"grid-row-"+se(a,/flex-|-self/g,""))+a;case 4675:return xe+a+ke+"flex-line-pack"+se(a,/align-content|flex-|-self/g,"")+a;case 5548:return xe+a+ke+se(a,"shrink","negative")+a;case 5292:return xe+a+ke+se(a,"basis","preferred-size")+a;case 6060:return xe+"box-"+se(a,"-grow","")+xe+a+ke+se(a,"grow","positive")+a;case 4554:return xe+se(a,/([^-])(transform)/g,"$1"+xe+"$2")+a;case 6187:return se(se(se(a,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),a,"")+a;case 5495:case 3959:return se(a,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return se(se(a,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+xe+a+a;case 4200:if(!Vr(a,/flex-|baseline/))return ke+"grid-column-align"+Ms(a,c)+a;break;case 2592:case 3360:return ke+se(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(p,m){return c=m,Vr(p.props,/grid-\w+-end/)})?~ka(a+(o=o[c].value),"span",0)?a:ke+se(a,"-start","")+a+ke+"grid-row-span:"+(~ka(o,"span",0)?Vr(o,/\d+/):+Vr(o,/\d+/)-+Vr(a,/\d+/))+";":ke+se(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(p){return Vr(p.props,/grid-\w+-start/)})?a:ke+se(se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return se(a,/(.+)-inline(.+)/,xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(a)-1-c>6)switch(Fe(a,c+1)){case 109:if(Fe(a,c+4)!==45)break;case 102:return se(a,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+lt+(Fe(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~ka(a,"stretch",0)?Bp(se(a,"stretch","fill-available"),c,o)+a:a}break;case 5152:case 5920:return se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,S,z,T,Y){return ke+m+":"+j+Y+(S?ke+m+"-span:"+(z?T:+T-+j)+Y:"")+a});case 4949:if(Fe(a,c+6)===121)return se(a,":",":"+xe)+a;break;case 6444:switch(Fe(a,Fe(a,14)===45?18:11)){case 120:return se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(Fe(a,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ke+"$2box$3")+a;case 100:return se(a,":",":"+ke)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(a,"scroll-","scroll-snap-")+a}return a}function za(a,c){for(var o="",p=0;p<a.length;p++)o+=c(a[p],p,a,c)||"";return o}function _x(a,c,o,p){switch(a.type){case Nx:if(a.children.length)break;case jx:case bx:case to:return a.return=a.return||a.value;case _p:return"";case Mp:return a.return=a.value+"{"+za(a.children,p)+"}";case _a:if(!zr(a.value=a.props.join(",")))return""}return zr(o=za(a.children,p))?a.return=a.value+"{"+o+"}":""}function Mx(a){var c=Fp(a);return function(o,p,m,j){for(var S="",z=0;z<c;z++)S+=a[z](o,p,m,j)||"";return S}}function Dx(a){return function(c){c.root||(c=c.return)&&a(c)}}function Ox(a,c,o,p){if(a.length>-1&&!a.return)switch(a.type){case to:a.return=Bp(a.value,a.length,o);return;case Mp:return za([ms(a,{value:se(a.value,"@","@"+xe)})],p);case _a:if(a.length)return kx(o=a.props,function(m){switch(Vr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(ms(a,{props:[se(m,/:(read-\w+)/,":"+lt+"$1")]})),cn(ms(a,{props:[m]})),Vl(a,{props:fp(o,p)});break;case"::placeholder":cn(ms(a,{props:[se(m,/:(plac\w+)/,":"+xe+"input-$1")]})),cn(ms(a,{props:[se(m,/:(plac\w+)/,":"+lt+"$1")]})),cn(ms(a,{props:[se(m,/:(plac\w+)/,ke+"input-$1")]})),cn(ms(a,{props:[m]})),Vl(a,{props:fp(o,p)});break}return""})}}var Fx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},pn=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",$p="active",Up="data-styled-version",Fa="6.3.10",io=`/*!sc*/
`,ot=typeof window!="undefined"&&typeof document!="undefined",Wx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function ht(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ta=new Map,Pa=new Map,Ea=1,it=function(a){if(Ta.has(a))return Ta.get(a);for(;Pa.has(Ea);)Ea++;var c=Ea++;return Ta.set(a,c),Pa.set(c,a),c},Bx=function(a,c){Ea=c+1,Ta.set(a,c),Pa.set(c,a)},lo=Object.freeze([]),un=Object.freeze({});function $x(a,c,o){return o===void 0&&(o=un),a.theme!==o.theme&&a.theme||c||o.theme}var Hp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Ux=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hx=/(^-|-$)/g;function yp(a){return a.replace(Ux,"-").replace(Hx,"")}var Vx=/(a)(d)/gi,jp=function(a){return String.fromCharCode(a+(a>25?39:97))};function ql(a){var c,o="";for(c=Math.abs(a);c>52;c=c/52|0)o=jp(c%52)+o;return(jp(c%52)+o).replace(Vx,"$1-$2")}var Wl,Rs=function(a,c){for(var o=c.length;o;)a=33*a^c.charCodeAt(--o);return a},Vp=function(a){return Rs(5381,a)};function Gx(a){return ql(Vp(a)>>>0)}function qx(a){return a.displayName||a.name||"Component"}function Bl(a){return typeof a=="string"&&!0}var Gp=typeof Symbol=="function"&&Symbol.for,qp=Gp?Symbol.for("react.memo"):60115,Qx=Gp?Symbol.for("react.forward_ref"):60112,Yx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xx=((Wl={})[Qx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wl[qp]=Qp,Wl);function bp(a){return("type"in(c=a)&&c.type.$$typeof)===qp?Qp:"$$typeof"in a?Xx[a.$$typeof]:Yx;var c}var Zx=Object.defineProperty,Jx=Object.getOwnPropertyNames,Np=Object.getOwnPropertySymbols,em=Object.getOwnPropertyDescriptor,rm=Object.getPrototypeOf,wp=Object.prototype;function Yp(a,c,o){if(typeof c!="string"){if(wp){var p=rm(c);p&&p!==wp&&Yp(a,p,o)}var m=Jx(c);Np&&(m=m.concat(Np(c)));for(var j=bp(a),S=bp(c),z=0;z<m.length;++z){var T=m[z];if(!(T in Kx||o&&o[T]||S&&T in S||j&&T in j)){var Y=em(c,T);try{Zx(a,T,Y)}catch{}}}}return a}function hn(a){return typeof a=="function"}function oo(a){return typeof a=="object"&&"styledComponentId"in a}function As(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function kp(a,c){return a.join("")}function dt(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Ql(a,c,o){if(o===void 0&&(o=!1),!o&&!dt(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=Ql(a[p],c[p]);else if(dt(c))for(var p in c)a[p]=Ql(a[p],c[p]);return a}function co(a,c){Object.defineProperty(a,"toString",{value:c})}var sm=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var o=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)o+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)o-=this.groupSizes[p];return this._cGroup=c,this._cIndex=o,o},a.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw ht(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var z=this.indexOfGroup(c+1),T=0,Y=(S=0,o.length);S<Y;S++)this.tag.insertRule(z,o[S])&&(this.groupSizes[c]++,z++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},a.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],p=this.indexOfGroup(c),m=p+o;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);o>0&&this._cGroup>c&&(this._cIndex-=o)}},a.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,S=m;S<j;S++)o+=this.tag.getRule(S)+io;return o},a})(),nm="style[".concat(pn,"][").concat(Up,'="').concat(Fa,'"]'),tm=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sp=function(a){return typeof ShadowRoot!="undefined"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},Yl=function(a){if(!a)return document;if(Sp(a))return a;if("getRootNode"in a){var c=a.getRootNode();if(Sp(c))return c}return document},am=function(a,c,o){for(var p,m=o.split(","),j=0,S=m.length;j<S;j++)(p=m[j])&&a.registerName(c,p)},im=function(a,c){for(var o,p=((o=c.textContent)!==null&&o!==void 0?o:"").split(io),m=[],j=0,S=p.length;j<S;j++){var z=p[j].trim();if(z){var T=z.match(tm);if(T){var Y=0|parseInt(T[1],10),G=T[2];Y!==0&&(Bx(G,Y),am(a,G,T[3]),a.getTag().insertRules(Y,m)),m.length=0}else m.push(z)}}},$l=function(a){for(var c=Yl(a.options.target).querySelectorAll(nm),o=0,p=c.length;o<p;o++){var m=c[o];m&&m.getAttribute(pn)!==$p&&(im(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function lm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Kp=function(a){var c=document.head,o=a||c,p=document.createElement("style"),m=(function(z){var T=Array.from(z.querySelectorAll("style[".concat(pn,"]")));return T[T.length-1]})(o),j=m!==void 0?m.nextSibling:null;p.setAttribute(pn,$p),p.setAttribute(Up,Fa);var S=lm();return S&&p.setAttribute("nonce",S),o.insertBefore(p,j),p},om=(function(){function a(c){this.element=Kp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){var p;if(o.sheet)return o.sheet;for(var m=(p=o.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,S=m.length;j<S;j++){var z=m[j];if(z.ownerNode===o)return z}throw ht(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},a})(),cm=(function(){function a(c){this.element=Kp(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var p=document.createTextNode(o);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),dm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,o){return c<=this.length&&(c===this.length?this.rules.push(o):this.rules.splice(c,0,o),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Cp=ot,pm={isServer:!ot,useCSSOMInjection:!Wx},Xp=(function(){function a(c,o,p){c===void 0&&(c=un),o===void 0&&(o={});var m=this;this.options=or(or({},pm),c),this.gs=o,this.names=new Map(p),this.server=!!c.isServer,!this.server&&ot&&Cp&&(Cp=!1,$l(this)),co(this,function(){return(function(j){for(var S=j.getTag(),z=S.length,T="",Y=function(W){var J=(function(me){return Pa.get(me)})(W);if(J===void 0)return"continue";var oe=j.names.get(J);if(oe===void 0||!oe.size)return"continue";var X=S.getGroup(W);if(X.length===0)return"continue";var B=pn+".g"+W+'[id="'+J+'"]',q="";oe.forEach(function(me){me.length>0&&(q+=me+",")}),T+=X+B+'{content:"'+q+'"}'+io},G=0;G<z;G++)Y(G);return T})(m)})}return a.registerId=function(c){return it(c)},a.prototype.rehydrate=function(){!this.server&&ot&&$l(this)},a.prototype.reconstructWithOptions=function(c,o){o===void 0&&(o=!0);var p=new a(or(or({},this.options),c),this.gs,o&&this.names||void 0);return!this.server&&ot&&c.target!==this.options.target&&Yl(this.options.target)!==Yl(c.target)&&$l(p),p},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var p=o.useCSSOMInjection,m=o.target;return o.isServer?new dm(m):p?new om(m):new cm(m)})(this.options),new sm(c)));var c},a.prototype.hasNameForId=function(c,o){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(o))!==null&&m!==void 0&&m},a.prototype.registerName=function(c,o){it(c);var p=this.names.get(c);p?p.add(o):this.names.set(c,new Set([o]))},a.prototype.insertRules=function(c,o,p){this.registerName(c,o),this.getTag().insertRules(it(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(it(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),um=/&/g,Gr=47,Ls=42;function Tp(a){if(a.indexOf("}")===-1)return!1;for(var c=a.length,o=0,p=0,m=!1,j=0;j<c;j++){var S=a.charCodeAt(j);if(p!==0||m||S!==Gr||a.charCodeAt(j+1)!==Ls)if(m)S===Ls&&a.charCodeAt(j+1)===Gr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&a.charCodeAt(j-1)===92){if(p===0){if(S===123)o++;else if(S===125&&--o<0)return!0}}else p===0?p=S:p===S&&(p=0);else m=!0,j++}return o!==0||p!==0}function Zp(a,c){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Zp(o.children,c)),o})}function hm(a){var c,o,p,m=un,j=m.options,S=j===void 0?un:j,z=m.plugins,T=z===void 0?lo:z,Y=function(X,B,q){return q.startsWith(o)&&q.endsWith(o)&&q.replaceAll(o,"").length>0?".".concat(c):X},G=T.slice();G.push(function(X){X.type===_a&&X.value.includes("&")&&(p||(p=new RegExp("\\".concat(o,"\\b"),"g")),X.props[0]=X.props[0].replace(um,o).replace(p,Y))}),S.prefix&&G.push(Ox),G.push(_x);var W=[],J=Mx(G.concat(Dx(function(X){return W.push(X)}))),oe=function(X,B,q,me){B===void 0&&(B=""),q===void 0&&(q=""),me===void 0&&(me="&"),c=me,o=B,p=void 0;var de=(function(P){if(!Tp(P))return P;for(var Z=P.length,$="",I=0,D=0,ye=0,Re=!1,ie=0;ie<Z;ie++){var ze=P.charCodeAt(ie);if(ye!==0||Re||ze!==Gr||P.charCodeAt(ie+1)!==Ls)if(Re)ze===Ls&&P.charCodeAt(ie+1)===Gr&&(Re=!1,ie++);else if(ze!==34&&ze!==39||ie!==0&&P.charCodeAt(ie-1)===92){if(ye===0)if(ze===123)D++;else if(ze===125){if(--D<0){for(var Se=ie+1;Se<Z;){var Ge=P.charCodeAt(Se);if(Ge===59||Ge===10)break;Se++}Se<Z&&P.charCodeAt(Se)===59&&Se++,D=0,ie=Se-1,I=Se;continue}D===0&&($+=P.substring(I,ie+1),I=ie+1)}else ze===59&&D===0&&($+=P.substring(I,ie+1),I=ie+1)}else ye===0?ye=ze:ye===ze&&(ye=0);else Re=!0,ie++}if(I<Z){var Ze=P.substring(I);Tp(Ze)||($+=Ze)}return $})((function(P){if(P.indexOf("//")===-1)return P;for(var Z=P.length,$=[],I=0,D=0,ye=0,Re=0;D<Z;){var ie=P.charCodeAt(D);if(ie!==34&&ie!==39||D!==0&&P.charCodeAt(D-1)===92)if(ye===0)if(ie===Gr&&D+1<Z&&P.charCodeAt(D+1)===Ls){for(D+=2;D+1<Z&&(P.charCodeAt(D)!==Ls||P.charCodeAt(D+1)!==Gr);)D++;D+=2}else if(ie===40&&D>=3&&(32|P.charCodeAt(D-1))==108&&(32|P.charCodeAt(D-2))==114&&(32|P.charCodeAt(D-3))==117)Re=1,D++;else if(Re>0)ie===41?Re--:ie===40&&Re++,D++;else if(ie===Ls&&D+1<Z&&P.charCodeAt(D+1)===Gr)D>I&&$.push(P.substring(I,D)),I=D+=2;else if(ie===Gr&&D+1<Z&&P.charCodeAt(D+1)===Gr){for(D>I&&$.push(P.substring(I,D));D<Z&&P.charCodeAt(D)!==10;)D++;I=D}else D++;else D++;else ye===0?ye=ie:ye===ie&&(ye=0),D++}return I===0?P:(I<Z&&$.push(P.substring(I)),$.join(""))})(X)),ne=Lx(q||B?"".concat(q," ").concat(B," { ").concat(de," }"):de);return S.namespace&&(ne=Zp(ne,S.namespace)),W=[],za(ne,J),W};return oe.hash=T.length?T.reduce(function(X,B){return B.name||ht(15),Rs(X,B.name)},5381).toString():"",oe}var xm=new Xp,Kl=hm(),Jp=xr.createContext({shouldForwardProp:void 0,styleSheet:xm,stylis:Kl});Jp.Consumer;xr.createContext(void 0);function Ep(){return xr.useContext(Jp)}var mm=(function(){function a(c,o){var p=this;this.inject=function(m,j){j===void 0&&(j=Kl);var S=p.name+j.hash;m.hasNameForId(p.id,S)||m.insertRules(p.id,S,j(p.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,co(this,function(){throw ht(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=Kl),this.name+c.hash},a})();function fm(a,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in Fx||a.startsWith("--")?String(c).trim():"".concat(c,"px")}var gm=function(a){return a>="A"&&a<="Z"};function Ip(a){for(var c="",o=0;o<a.length;o++){var p=a[o];if(o===1&&p==="-"&&a[0]==="-")return a;gm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var eu=function(a){return a==null||a===!1||a===""},ru=function(a){var c=[];for(var o in a){var p=a[o];a.hasOwnProperty(o)&&!eu(p)&&(Array.isArray(p)&&p.isCss||hn(p)?c.push("".concat(Ip(o),":"),p,";"):dt(p)?c.push.apply(c,Ia(Ia(["".concat(o," {")],ru(p),!1),["}"],!1)):c.push("".concat(Ip(o),": ").concat(fm(o,p),";")))}return c};function _s(a,c,o,p,m){if(m===void 0&&(m=[]),typeof a=="string")return a&&m.push(a),m;if(eu(a))return m;if(oo(a))return m.push(".".concat(a.styledComponentId)),m;if(hn(a)){if(!hn(S=a)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(a),m;var j=a(c);return _s(j,c,o,p,m)}var S;if(a instanceof mm)return o?(a.inject(o,p),m.push(a.getName(p))):m.push(a),m;if(dt(a)){for(var z=ru(a),T=0;T<z.length;T++)m.push(z[T]);return m}if(!Array.isArray(a))return m.push(a.toString()),m;for(T=0;T<a.length;T++)_s(a[T],c,o,p,m);return m}function vm(a){for(var c=0;c<a.length;c+=1){var o=a[c];if(hn(o)&&!oo(o))return!1}return!0}var ym=Vp(Fa),jm=(function(){function a(c,o,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&vm(c),this.componentId=o,this.baseHash=Rs(ym,o),this.baseStyle=p,Xp.registerId(o)}return a.prototype.generateAndInjectStyles=function(c,o,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))m=As(m,this.staticRulesId);else{var j=kp(_s(this.rules,c,o,p)),S=ql(Rs(this.baseHash,j)>>>0);if(!o.hasNameForId(this.componentId,S)){var z=p(j,".".concat(S),void 0,this.componentId);o.insertRules(this.componentId,S,z)}m=As(m,S),this.staticRulesId=S}else{for(var T=Rs(this.baseHash,p.hash),Y="",G=0;G<this.rules.length;G++){var W=this.rules[G];if(typeof W=="string")Y+=W;else if(W){var J=kp(_s(W,c,o,p));T=Rs(Rs(T,String(G)),J),Y+=J}}if(Y){var oe=ql(T>>>0);if(!o.hasNameForId(this.componentId,oe)){var X=p(Y,".".concat(oe),void 0,this.componentId);o.insertRules(this.componentId,oe,X)}m=As(m,oe)}}return{className:m,css:typeof window=="undefined"?o.getTag().getGroup(it(this.componentId)):""}},a})(),su=xr.createContext(void 0);su.Consumer;var Ul={};function bm(a,c,o){var p=oo(a),m=a,j=!Bl(a),S=c.attrs,z=S===void 0?lo:S,T=c.componentId,Y=T===void 0?(function(P,Z){var $=typeof P!="string"?"sc":yp(P);Ul[$]=(Ul[$]||0)+1;var I="".concat($,"-").concat(Gx(Fa+$+Ul[$]));return Z?"".concat(Z,"-").concat(I):I})(c.displayName,c.parentComponentId):T,G=c.displayName,W=G===void 0?(function(P){return Bl(P)?"styled.".concat(P):"Styled(".concat(qx(P),")")})(a):G,J=c.displayName&&c.componentId?"".concat(yp(c.displayName),"-").concat(c.componentId):c.componentId||Y,oe=p&&m.attrs?m.attrs.concat(z).filter(Boolean):z,X=c.shouldForwardProp;if(p&&m.shouldForwardProp){var B=m.shouldForwardProp;if(c.shouldForwardProp){var q=c.shouldForwardProp;X=function(P,Z){return B(P,Z)&&q(P,Z)}}else X=B}var me=new jm(o,J,p?m.componentStyle:void 0);function de(P,Z){return(function($,I,D){var ye=$.attrs,Re=$.componentStyle,ie=$.defaultProps,ze=$.foldedComponentIds,Se=$.styledComponentId,Ge=$.target,Ze=xr.useContext(su),qe=Ep(),je=$.shouldForwardProp||qe.shouldForwardProp,E=$x(I,Ze,ie)||un,F=(function(ae,pe,ce){for(var fe,Te=or(or({},pe),{className:void 0,theme:ce}),Yr=0;Yr<ae.length;Yr+=1){var vs=hn(fe=ae[Yr])?fe(Te):fe;for(var Nr in vs)Nr==="className"?Te.className=As(Te.className,vs[Nr]):Nr==="style"?Te.style=or(or({},Te.style),vs[Nr]):Te[Nr]=vs[Nr]}return"className"in pe&&typeof pe.className=="string"&&(Te.className=As(Te.className,pe.className)),Te})(ye,I,E),R=F.as||Ge,f={};for(var b in F)F[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&F.theme===E||(b==="forwardedAs"?f.as=F.forwardedAs:je&&!je(b,R)||(f[b]=F[b]));var ee=(function(ae,pe){var ce=Ep(),fe=ae.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return fe})(Re,F),re=ee.className,le=As(ze,Se);return re&&(le+=" "+re),F.className&&(le+=" "+F.className),f[Bl(R)&&!Hp.has(R)?"class":"className"]=le,D&&(f.ref=D),K.createElement(R,f)})(ne,P,Z)}de.displayName=W;var ne=xr.forwardRef(de);return ne.attrs=oe,ne.componentStyle=me,ne.displayName=W,ne.shouldForwardProp=X,ne.foldedComponentIds=p?As(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=J,ne.target=p?m.target:a,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=p?(function(Z){for(var $=[],I=1;I<arguments.length;I++)$[I-1]=arguments[I];for(var D=0,ye=$;D<ye.length;D++)Ql(Z,ye[D],!0);return Z})({},m.defaultProps,P):P}}),co(ne,function(){return".".concat(ne.styledComponentId)}),j&&Yp(ne,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function zp(a,c){for(var o=[a[0]],p=0,m=c.length;p<m;p+=1)o.push(c[p],a[p+1]);return o}var Pp=function(a){return Object.assign(a,{isCss:!0})};function Nm(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(hn(a)||dt(a))return Pp(_s(zp(lo,Ia([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?_s(p):Pp(_s(zp(p,c)))}function Xl(a,c,o){if(o===void 0&&(o=un),!c)throw ht(1,c);var p=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return a(c,o,Nm.apply(void 0,Ia([m],j,!1)))};return p.attrs=function(m){return Xl(a,c,or(or({},o),{attrs:Array.prototype.concat(o.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return Xl(a,c,or(or({},o),m))},p}var nu=function(a){return Xl(bm,a)},ve=nu;Hp.forEach(function(a){ve[a]=nu(a)});const Hl={Wrapper:ve.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ve.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ve.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Rp={Wrapper:ve.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-bg) 88%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        /* software engineering vibe: subtle "pipeline" stripes */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 68%, transparent),
                transparent
            );
            opacity: 0.95;
        }
    `,Main:ve.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background:
                radial-gradient(
                    90px 70px at 20% 20%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    90px 70px at 85% 80%,
                    color-mix(in srgb, var(--color-accent) 12%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 22%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .miniStats {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;

            @media (width < 860px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 10px 22px var(--color-shadow);

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            .sIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }

            .sText {
                line-height: 1;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 78%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},wm="/software-engineering-core-notes/images/transparentLogo.png";var tu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lp=xr.createContext&&xr.createContext(tu),km=["attr","size","title"];function Sm(a,c){if(a==null)return{};var o=Cm(a,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(a);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(o[p]=a[p])}return o}function Cm(a,c){if(a==null)return{};var o={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;o[p]=a[p]}return o}function Ra(){return Ra=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(a[p]=o[p])}return a},Ra.apply(this,arguments)}function Ap(a,c){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),o.push.apply(o,p)}return o}function La(a){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?Ap(Object(o),!0).forEach(function(p){Tm(a,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Ap(Object(o)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(o,p))})}return a}function Tm(a,c,o){return c=Em(c),c in a?Object.defineProperty(a,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[c]=o,a}function Em(a){var c=Im(a,"string");return typeof c=="symbol"?c:c+""}function Im(a,c){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var p=o.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function au(a){return a&&a.map((c,o)=>xr.createElement(c.tag,La({key:o},c.attr),au(c.child)))}function V(a){return c=>xr.createElement(zm,Ra({attr:La({},a.attr)},c),au(a.child))}function zm(a){var c=o=>{var{attr:p,size:m,title:j}=a,S=Sm(a,km),z=m||o.size||"1em",T;return o.className&&(T=o.className),a.className&&(T=(T?T+" ":"")+a.className),xr.createElement("svg",Ra({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,p,S,{className:T,style:La(La({color:a.color||o.color},o.style),a.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),j&&xr.createElement("title",null,j),a.children)};return Lp!==void 0?xr.createElement(Lp.Consumer,null,o=>c(o)):c(tu)}function Pm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function Rm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function xn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function iu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(a)}function Zl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Wa(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function mn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function pt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(a)}function We(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function fn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(a)}function lu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function ou(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Lm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(a)}function Am(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function _m(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function Mm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(a)}function po(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function Dm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(a)}function uo(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function gs(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function Om(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(a)}function Jl(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function cu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Fm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function Wm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function rr(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function du(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function pu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function uu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function eo(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(a)}function Bm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(a)}function $m(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(a)}function Um(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function ro(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(a)}function ut(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function qr(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Hm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(a)}function Vm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function so(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function Aa(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(a)}function Qr(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Gm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function qm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(a)}function Qm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function Ym(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function hu(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(a)}function xt(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(a)}function ho(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Km(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(a)}function Xm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(a)}function gn(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function Zm(a){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const Jm=()=>{const[a,c]=K.useState(!1),[o,p]=K.useState("dark");K.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";p(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),K.useEffect(()=>{o==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",o)},[o]);const m=K.useMemo(()=>o==="light"?"dark":"light",[o]),j=()=>{p(m)};return e.jsx(Rp.Wrapper,{children:e.jsxs(Rp.Main,{children:[e.jsxs("div",{className:"leftSide",children:[e.jsxs("div",{className:"logoNameWrapper",children:[e.jsxs("div",{className:"logoWrapper",children:[!a&&e.jsx("div",{className:"logoSkeleton"}),e.jsx("img",{src:wm,alt:"software-engineering-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),e.jsxs("div",{className:"nameWrapper",children:[e.jsx("div",{className:"title",children:"software-engineering-core-notes"}),e.jsx("div",{className:"subTitle",children:"At-a-glance software engineering revision"})]})]}),e.jsxs("div",{className:"miniStats","aria-label":"Quick focus areas",children:[e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(gs,{})}),e.jsx("span",{className:"sText",children:"Workflow"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(mn,{})}),e.jsx("span",{className:"sText",children:"Quality"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(xt,{})}),e.jsx("span",{className:"sText",children:"Delivery"})]})]})]}),e.jsx("div",{className:"rightSide",children:e.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[e.jsx("span",{className:"icon",children:o==="light"?e.jsx(Um,{}):e.jsx(Ym,{})}),e.jsx("span",{className:"label",children:o==="light"?"Light":"Dark"})]})})]})})},ef={Wrapper:ve.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},rf=()=>e.jsxs(ef.Wrapper,{children:[e.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),e.jsxs("div",{className:"right",children:["By ",e.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),sf={Wrapper:ve.section`
        width: 100%;
        padding: 20px 0 10px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 22px;
            margin-bottom: 8px;
            letter-spacing: 0.3px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 4;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 12px 28px var(--color-shadow);
            position: relative;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                var(--color-accent),
                transparent
            );
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 10px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .note {
            font-size: 12.5px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
        }

        .list li {
            font-size: 13.5px;
            color: var(--color-text-secondary);
            position: relative;
            padding-left: 14px;
        }

        .list li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},nf=()=>e.jsxs(sf.Wrapper,{id:"aboutSoftwareEngineering",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Software Engineering"}),e.jsx("p",{className:"sub",children:"Software Engineering is the discipline of building software in a structured, reliable, and maintainable way. It is not just writing code. It includes planning, requirements, design, testing, deployment, and long-term maintenance."}),e.jsx("p",{className:"sub",children:"A programmer writes features. A software engineer designs systems that survive real users, scaling, deadlines, and change. The goal is predictable delivery and sustainable quality."}),e.jsx("p",{className:"sub",children:"This page focuses on SDLC, requirements, architecture basics, version control, testing, DevOps, and quality practices that matter in real production environments."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Lifecycle Thinking"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Requirements"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Design"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintain"})]}),e.jsx("p",{className:"note",children:"Software is a process, not a one-time event."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(ou,{})}),e.jsx("h3",{className:"h3",children:"Engineering Principles"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"SOLID principles"}),e.jsx("li",{children:"Low coupling and high cohesion"}),e.jsx("li",{children:"Clean code practices"}),e.jsx("li",{children:"Version control and code reviews"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(pt,{})}),e.jsx("h3",{className:"h3",children:"Quality and Delivery"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Unit and integration testing"}),e.jsx("li",{children:"CI and CD pipelines"}),e.jsx("li",{children:"Monitoring and maintenance"}),e.jsx("li",{children:"Technical debt management"})]})]})]})]}),tf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .flow {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: flex;
            gap: 10px;
            align-items: flex-start;

            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .tag {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            flex: 0 0 auto;
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
            margin-bottom: 2px;
        }

        .d {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},af=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"whatIsSoftwareEngineering",title:"What is Software Engineering",sub:"Definition, programming vs engineering, why it exists, and SDLC meaning with real examples."}),[]);return e.jsxs(tf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Zl,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Foundations"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xt,{})}),e.jsx("h3",{className:"h3",children:"Definition"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software Engineering"})," is the disciplined way of building software so it is"," ",e.jsx("b",{children:"reliable"}),", ",e.jsx("b",{children:"maintainable"}),","," ",e.jsx("b",{children:"testable"}),", and ",e.jsx("b",{children:"deliverable"})," in the real world. It includes planning, designing, coding, testing, deployment, and maintenance."]}),e.jsx("p",{className:"p",children:"Simple example: Writing a login screen is programming. Making sure login works securely, handles failures, logs issues, scales to many users, and can be changed later without breaking other features is software engineering."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Ship"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Operate"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Improve"})]}),e.jsx("p",{className:"note",children:"Engineering is about building things that survive time, change, and real users."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ou,{})}),e.jsx("h3",{className:"h3",children:"Programming vs Software Engineering"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Programming"}),e.jsxs("div",{className:"v",children:["Writing code to solve a problem or build a feature.",e.jsx("span",{className:"small",children:"Example: Write a function to calculate total cart price."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Software Engineering"}),e.jsxs("div",{className:"v",children:["Building a full system around code so it stays correct, usable, and easy to change.",e.jsx("span",{className:"small",children:"Example: Cart system with validations, tests, API contracts, logs, monitoring, and rollback plan."})]})]})]}),e.jsx("p",{className:"note",children:"Think: programming is a part of software engineering, not the full thing."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(mn,{})}),e.jsx("h3",{className:"h3",children:"Why SE exists"})]}),e.jsx("p",{className:"p",children:"Software Engineering exists because real software is built by teams, used by many users, and must keep working for years."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Scale of work"})," - projects have thousands of files and many developers."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Change is constant"})," - new features, bug fixes, refactors, new requirements."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Quality matters"})," - bugs cause money loss, trust loss, security issues."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Time and budget"})," - delivery must be predictable."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Production reality"})," - failures happen, so we need logs, monitoring, and rollback plans."]})]}),e.jsx("p",{className:"note",children:"Without SE practices, software becomes slow to change, easy to break, and costly to maintain."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"SDLC meaning - Software Development Life Cycle"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SDLC"})," stands for"," ",e.jsx("b",{children:"Software Development Life Cycle"}),". It is the step-by-step process used to build software from idea to production and beyond."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Requirements"}),e.jsxs("div",{className:"d",children:["Understand what to build and why.",e.jsx("span",{className:"small",children:'Example: "Users should reset password using email OTP."'})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Design"}),e.jsxs("div",{className:"d",children:["Plan the structure of the solution.",e.jsx("span",{className:"small",children:"Example: database tables, API endpoints, UI flow, security rules."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Implementation"}),e.jsxs("div",{className:"d",children:["Write the code and integrate components.",e.jsx("span",{className:"small",children:"Example: build OTP service, email sending, UI screens, backend validation."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Testing"}),e.jsxs("div",{className:"d",children:["Verify correctness and catch bugs early.",e.jsx("span",{className:"small",children:"Example: unit tests for OTP logic, integration test for reset flow."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Deployment"}),e.jsxs("div",{className:"d",children:["Release to users safely.",e.jsx("span",{className:"small",children:"Example: deploy backend, migrate database, release frontend build."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"6"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Maintenance"}),e.jsxs("div",{className:"d",children:["Monitor, fix issues, improve performance, and add features.",e.jsx("span",{className:"small",children:"Example: bugfix for edge case, improve logs, optimize DB query."})]})]})]})]}),e.jsx("p",{className:"note",children:"SDLC is not always strict steps. In Agile, these steps repeat in small cycles every sprint."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Programming writes code. Software engineering builds a system around that code so it stays reliable and maintainable. SDLC is the full lifecycle from requirements to maintenance."})]})]})})]})},lf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px;
            border-radius: 16px;

            background: var(--color-surface);
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .title {
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .chev {
            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .cIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .h3 {
            font-size: 14px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 6px;
        }

        .note {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 8px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 6px;
        }

        .pill {
            padding: 5px 9px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
        }

        .dash {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .section {
            margin-top: 6px;
        }

        .secTitle {
            font-size: 12.5px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .list {
            display: grid;
            gap: 4px;
        }

        .list li {
            font-size: 12.5px;
            color: var(--color-text-secondary);
            padding-left: 12px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 7px;
        }

        .bottomNote {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .bnTitle {
            font-size: 13px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .bnSub {
            font-size: 12.5px;
            color: var(--color-text-muted);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},of=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"sdlcModels",title:"SDLC Models",sub:"Waterfall, V Model, Iterative, Incremental, Spiral, Agile, DevOps - with when to use and pros-cons summary."}),[]);return e.jsxs(lf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Process"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Waterfall Model"})]}),e.jsx("p",{className:"p",children:"A linear model where each phase completes before the next begins."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Requirements"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Design"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"})]}),e.jsx("p",{className:"note",children:"Example: Government or banking systems with fixed requirements."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements are stable and clear"}),e.jsx("li",{children:"Compliance heavy environments"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Simple and structured"}),e.jsx("li",{children:"Clear documentation"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Hard to adapt to change"}),e.jsx("li",{children:"Late feedback from users"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(mn,{})}),e.jsx("h3",{className:"h3",children:"V Model"})]}),e.jsx("p",{className:"p",children:"Extension of Waterfall where each development phase has a corresponding testing phase."}),e.jsx("p",{className:"note",children:"Example: Safety critical systems like medical or aviation software."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High reliability required"}),e.jsx("li",{children:"Strict validation process"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Strong focus on testing"}),e.jsx("li",{children:"Early defect detection"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Rigid like Waterfall"}),e.jsx("li",{children:"Not ideal for evolving requirements"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ut,{})}),e.jsx("h3",{className:"h3",children:"Iterative Model"})]}),e.jsx("p",{className:"p",children:"Build a basic version first, then improve in repeated cycles."}),e.jsx("p",{className:"note",children:"Example: First release simple app, then enhance features in versions."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements partially known"}),e.jsx("li",{children:"Feedback driven development"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Early working version"}),e.jsx("li",{children:"Improves through feedback"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Can increase cost"}),e.jsx("li",{children:"Architecture may degrade without control"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Incremental Model"})]}),e.jsx("p",{className:"p",children:"Deliver system in small functional increments."}),e.jsx("p",{className:"note",children:"Example: E-commerce site releasing cart first, then payment, then recommendation."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Large system divided into modules"}),e.jsx("li",{children:"Faster time to market needed"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Faster delivery"}),e.jsx("li",{children:"Lower initial risk"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsx("ul",{className:"list",children:e.jsx("li",{children:"Requires strong architecture planning"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Spiral Model"})]}),e.jsx("p",{className:"p",children:"Focuses on risk analysis in every cycle."}),e.jsx("p",{className:"note",children:"Example: Large enterprise systems with high uncertainty."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High risk projects"}),e.jsx("li",{children:"Complex systems"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsx("ul",{className:"list",children:e.jsx("li",{children:"Strong risk management"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Costly"}),e.jsx("li",{children:"Complex to manage"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ut,{})}),e.jsx("h3",{className:"h3",children:"Agile Model"})]}),e.jsx("p",{className:"p",children:"Short iterations called sprints with frequent feedback."}),e.jsx("p",{className:"note",children:"Example: Startups building SaaS products."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements change frequently"}),e.jsx("li",{children:"Customer collaboration needed"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Flexible"}),e.jsx("li",{children:"Fast feedback"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Less predictability"}),e.jsx("li",{children:"Needs strong team coordination"})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"DevOps Model"})]}),e.jsx("p",{className:"p",children:"Integrates development and operations to enable continuous integration and continuous delivery."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Monitor"})]}),e.jsx("p",{className:"note",children:"Example: CI pipeline automatically testing and deploying new commits."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Cloud native systems"}),e.jsx("li",{children:"Frequent releases"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fast release cycles"}),e.jsx("li",{children:"Automation reduces errors"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requires automation maturity"}),e.jsx("li",{children:"Tooling complexity"})]})]})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Waterfall and V are rigid. Iterative and Incremental allow gradual improvement. Spiral focuses on risk. Agile focuses on flexibility. DevOps focuses on continuous delivery and operations integration."})]})]})})]})},cf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 900px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 12;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .useCase {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            border-radius: 16px;
            padding: 12px;
        }

        .ucTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
            margin-bottom: 10px;
        }

        .ucGrid {
            display: grid;
            gap: 8px;
        }

        .ucRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
        }

        .code {
            margin-top: 10px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            background: color-mix(in srgb, var(--color-code-bg) 86%, #000);
        }

        .pre {
            margin: 0;
            padding: 12px;
            white-space: pre-wrap;
            word-break: break-word;
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.6;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .kv {
                grid-template-columns: 1fr;
            }

            .ucRow {
                grid-template-columns: 1fr;
            }
        }
    `},df=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"requirementsEngineering",title:"Requirements Engineering",sub:"Functional vs non-functional requirements, gathering techniques, SRS, use cases, and acceptance criteria."}),[]);return e.jsxs(cf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(fn,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"SDLC"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(pu,{})}),e.jsx("h3",{className:"h3",children:"What it means"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Requirements Engineering"})," is the process of understanding what needs to be built, documenting it clearly, validating it with stakeholders, and managing changes over time. It reduces confusion and prevents building the wrong thing."]}),e.jsx("p",{className:"p",children:'Practical goal: make requirements so clear that dev, QA, and client can all agree on what "done" means.'}),e.jsx("p",{className:"note",children:"Most project failures happen due to unclear or changing requirements, not because of bad code."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Functional vs Non-functional requirements"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Functional requirements"}),e.jsxs("div",{className:"v",children:["What the system should do - features and behavior.",e.jsx("span",{className:"small",children:'Example: "User can reset password using email OTP."'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Non-functional requirements"}),e.jsxs("div",{className:"v",children:["How well the system should perform - quality attributes like performance, security, and reliability.",e.jsx("span",{className:"small",children:'Example: "Password reset page should load under 2 seconds." "OTP should expire in 5 minutes." "System must log all reset attempts."'})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Functional = What"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Non-functional = How well"})]}),e.jsx("p",{className:"note",children:"Many teams write functional requirements and forget non-functional ones. That is where production problems start."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Requirement gathering techniques"})]}),e.jsx("p",{className:"p",children:"Gathering requirements means extracting needs from stakeholders and users. Use multiple techniques because one technique never captures everything."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Interviews"}),e.jsxs("div",{className:"v",children:["Talk to users and stakeholders directly.",e.jsx("span",{className:"small",children:"Example: ask support team what common complaints users have."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Workshops"}),e.jsxs("div",{className:"v",children:["Group discussion to align everyone.",e.jsx("span",{className:"small",children:"Example: product owner, dev, QA define the checkout flow together."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Observation"}),e.jsxs("div",{className:"v",children:["Watch how users do work today.",e.jsx("span",{className:"small",children:"Example: observe how employees do inventory updates using Excel."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Questionnaires"}),e.jsxs("div",{className:"v",children:["Collect feedback from many users quickly.",e.jsx("span",{className:"small",children:"Example: survey users about what payment methods they use."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Prototype or mockups"}),e.jsxs("div",{className:"v",children:["Show UI or flow and collect corrections early.",e.jsx("span",{className:"small",children:"Example: clickable Figma prototype for sign up screens."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Existing system study"}),e.jsxs("div",{className:"v",children:["Analyze current product or competitors.",e.jsx("span",{className:"small",children:"Example: read existing API docs and logs to see current behavior."})]})]})]}),e.jsx("p",{className:"note",children:"Pro tip: always confirm requirements with real examples and edge cases."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(uo,{})}),e.jsx("h3",{className:"h3",children:"SRS - Software Requirement Specification"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SRS"})," means"," ",e.jsx("b",{children:"Software Requirement Specification"}),". It is the document that clearly describes the system requirements so every team member is on the same page."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it contains"}),e.jsx("div",{className:"v",children:"Scope, features, constraints, functional requirements, non-functional requirements, assumptions, and acceptance criteria."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it is useful"}),e.jsx("div",{className:"v",children:"Prevents misunderstanding, helps estimation, guides testing, and acts as a reference when changes happen."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example line"}),e.jsx("div",{className:"v",children:'"System shall allow user to reset password using email OTP. OTP expires in 5 minutes and max 3 attempts allowed per hour."'})]})]}),e.jsx("p",{className:"note",children:"In Agile teams, SRS may be lighter and replaced by user stories and acceptance criteria. But the clarity requirement still stays."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(fn,{})}),e.jsx("h3",{className:"h3",children:"Use case basics"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"use case"})," describes how a user (actor) interacts with the system to achieve a goal. It focuses on steps and outcomes, including failure paths."]}),e.jsxs("div",{className:"useCase",children:[e.jsx("div",{className:"ucTitle",children:'Example use case - "Reset Password"'}),e.jsxs("div",{className:"ucGrid",children:[e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Actor"}),e.jsx("div",{className:"v",children:"Registered user"})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Reset password securely using OTP"})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Main flow"}),e.jsxs("div",{className:"v",children:["1. User enters email",e.jsx("br",{}),"2. System sends OTP",e.jsx("br",{}),"3. User enters OTP",e.jsx("br",{}),"4. System verifies OTP",e.jsx("br",{}),"5. User sets new password",e.jsx("br",{}),"6. System updates password and confirms"]})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Alternate flow"}),e.jsx("div",{className:"v",children:"OTP invalid or expired - show error and allow resend after cooldown"})]})]})]}),e.jsx("p",{className:"note",children:"Use cases are very useful for finding missing requirements and edge cases."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(pt,{})}),e.jsx("h3",{className:"h3",children:"Acceptance criteria"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Acceptance criteria"})," are clear conditions that must be true for a feature to be considered complete and acceptable. They guide developers and testers and prevent scope confusion."]}),e.jsxs("p",{className:"p",children:["A common format is ",e.jsx("b",{children:"Given - When - Then"}),"."]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`Given the user is on the reset password page
When the user enters a registered email and clicks "Send OTP"
Then the system sends an OTP to the email within 10 seconds

Given an OTP was sent
When the user enters the correct OTP within 5 minutes
Then the system allows the user to set a new password

Given an OTP was sent
When the user enters an incorrect OTP 3 times
Then the system blocks further attempts for 1 hour`})]}),e.jsx("p",{className:"note",children:'Acceptance criteria is where "done" becomes measurable. It reduces bugs and rework.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:'Functional tells what to build. Non-functional tells how well it must behave. Gather requirements using interviews, workshops, observation, prototypes. SRS documents requirements. Use cases describe interaction flows. Acceptance criteria defines what "done" means.'})]})]})})]})},pf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .archGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .archCard {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .aTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .aIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .aIcon svg {
            width: 18px;
            height: 18px;
        }

        .aTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
            letter-spacing: 0.2px;
        }

        .aText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            margin-bottom: 8px;
        }

        .aList {
            display: grid;
            gap: 8px;
        }

        .aList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .aList b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .archCard {
                grid-column: span 12;
            }
        }
    `},uf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"systemDesignFundamentals",title:"System Design Fundamentals",sub:"HLD vs LLD, architecture types, coupling vs cohesion, and practical tradeoffs."}),[]);return e.jsxs(pf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(rr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Design"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(eo,{})}),e.jsx("h3",{className:"h3",children:"High Level Design vs Low Level Design"})]}),e.jsx("p",{className:"p",children:"In real projects, design happens at two levels. First you decide the big picture, then you design the internals of each module."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"HLD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"HLD"})," is ",e.jsx("b",{children:"High Level Design"}),". It focuses on system structure and component boundaries.",e.jsx("span",{className:"small",children:"Example: Web app, API service, database, cache, and how they talk to each other."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"LLD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"LLD"})," is ",e.jsx("b",{children:"Low Level Design"}),". It focuses on internal classes, modules, data models, and detailed logic.",e.jsx("span",{className:"small",children:"Example: API endpoint validation flow, service classes, DTOs, DB schema fields, and edge cases."})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"HLD is the map"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"LLD is the building plan"})]}),e.jsx("p",{className:"note",children:"Interviews often mix the words. For software engineering, this section is about understanding the difference clearly."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cu,{})}),e.jsx("h3",{className:"h3",children:"Architecture types"})]}),e.jsx("p",{className:"p",children:'Architecture means how software components are organized and how they communicate. There is no "best" architecture. There is only "best for the current constraints".'}),e.jsxs("div",{className:"archGrid",children:[e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(Wa,{})}),e.jsx("div",{className:"aTitle",children:"Monolith"})]}),e.jsx("p",{className:"aText",children:"Single codebase and single deployment unit. UI, API, and business logic often live together."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Good for"})," small teams, fast start, simpler debugging."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Risk"})," becomes harder to scale teams and releases as it grows."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," early stage e-commerce app deployed as one server."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(so,{})}),e.jsx("div",{className:"aTitle",children:"Microservices"})]}),e.jsx("p",{className:"aText",children:"Many small services, each owning a specific business capability. Each can be deployed independently."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Good for"})," large teams, independent scaling, independent releases."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Risk"})," complexity increases - networking, monitoring, failures, data consistency."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," separate services for auth, catalog, orders, payments."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(so,{})}),e.jsx("div",{className:"aTitle",children:"Client server"})]}),e.jsx("p",{className:"aText",children:"Client requests data or actions, server processes and responds. Most web apps follow this model."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Client"})," browser app, mobile app, desktop app."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Server"})," API, database access, auth, business logic."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," React app calls REST API which talks to database."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(rr,{})}),e.jsx("div",{className:"aTitle",children:"Layered architecture"})]}),e.jsx("p",{className:"aText",children:"Code is organized into layers. Each layer has a responsibility and depends on the layer below it."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Common layers"})," UI, controller, service, repository, database."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Benefit"})," clearer separation of concerns and easier testing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," Controller calls Service, Service calls Repository."]})]})]})]}),e.jsx("p",{className:"note",children:"You can combine architectures. Example: a system can be microservices and each service can be layered inside."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qm,{})}),e.jsx("h3",{className:"h3",children:"Coupling vs Cohesion"})]}),e.jsx("p",{className:"p",children:"These two words define how clean your design is. Most design problems are actually coupling problems."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Coupling"}),e.jsxs("div",{className:"v",children:["How much one module depends on another module.",e.jsx("span",{className:"small",children:"Goal: low coupling so changes do not break many parts."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Cohesion"}),e.jsxs("div",{className:"v",children:["How well the code inside a module belongs together.",e.jsx("span",{className:"small",children:"Goal: high cohesion so one module does one job clearly."})]})]})]}),e.jsx("p",{className:"note",children:"Easy rule: keep related things together, keep unrelated things separate."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Gm,{})}),e.jsx("h3",{className:"h3",children:"Design tradeoffs"})]}),e.jsx("p",{className:"p",children:"Every design decision has a cost. Tradeoff means you gain something but lose something else."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Speed vs Maintainability"})," - quick hacks deliver fast but create future pain."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Simplicity vs Flexibility"})," - more options and plugins mean more complexity."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Cost vs Reliability"})," - redundancy improves uptime but increases cost."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency vs Availability"})," - distributed systems often force a choice during failures."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Monolith vs Microservices"})," - monolith is simpler at first, microservices help scaling teams later."]})]}),e.jsx("p",{className:"note",children:"Good engineers explain tradeoffs and choose based on requirements, not preferences."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"HLD is the system picture. LLD is internal structure. Choose architecture based on constraints. Aim for low coupling and high cohesion. Always explain tradeoffs."})]})]})})]})},hf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},xf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"umlBasics",title:"UML Basics",sub:"UML meaning and the most used diagrams - use case, class, sequence, activity, and state."}),[]);return e.jsxs(hf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(eo,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Design Docs"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(eo,{})}),e.jsx("h3",{className:"h3",children:"What is UML - Unified Modeling Language"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"UML"})," stands for"," ",e.jsx("b",{children:"Unified Modeling Language"}),". It is a standard way to visually describe a software system. UML diagrams help teams communicate clearly using pictures instead of long text."]}),e.jsx("p",{className:"p",children:"Beginners tip: UML is not mandatory for every project. Use it when the system is complex, when multiple developers are involved, or when you want clarity before coding."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Explain"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Plan"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Discuss"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Document"})]}),e.jsx("p",{className:"note",children:'UML helps you answer "What will we build" and "How will parts interact" before writing code.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Use case diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"use case diagram"})," shows ",e.jsx("b",{children:"who"})," uses the system and ",e.jsx("b",{children:"what"})," they can do. It focuses on user goals, not internal code."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Actors and their actions (use cases)."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Requirement clarity and scope."})]})]}),e.jsx("p",{className:"p",children:"Example for an e-commerce app:"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:'Actor: Customer - use cases: "Browse products", "Add to cart", "Checkout"'}),e.jsx("li",{children:'Actor: Admin - use cases: "Add product", "Update price", "View orders"'})]}),e.jsx("p",{className:"note",children:"Use case diagram is a map of features from the user point of view."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wa,{})}),e.jsx("h3",{className:"h3",children:"Class diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"class diagram"})," shows the static structure of the system - classes, their fields, methods, and relationships."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Classes, properties, methods, associations, inheritance."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Object model planning, data modeling, architecture clarity."})]})]}),e.jsx("p",{className:"p",children:"Example for a library system:"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Class: Book - fields: title, author, isbn - methods: isAvailable()"}),e.jsx("li",{children:"Class: Member - fields: name, id - methods: borrowBook()"}),e.jsx("li",{children:"Relationship: Member borrows Book (association)"})]}),e.jsx("p",{className:"note",children:"Class diagram is like a blueprint of objects and relationships."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Sequence diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"sequence diagram"})," shows how objects or services interact over time. It focuses on the order of messages and calls."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Time order of requests and responses between components."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"API flows, microservice interactions, request lifecycle."})]})]}),e.jsx("p",{className:"p",children:"Example: User login flow"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"User - sends login request to UI"}),e.jsx("li",{children:"UI - calls Auth API"}),e.jsx("li",{children:"Auth API - checks DB"}),e.jsx("li",{children:"DB - returns user record"}),e.jsx("li",{children:"Auth API - returns token or session to UI"})]}),e.jsx("p",{className:"note",children:'Sequence diagram is perfect when you want to explain "what calls what" in order.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Pm,{})}),e.jsx("h3",{className:"h3",children:"Activity diagram"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"activity diagram"})," shows workflow steps and decisions. It is like a flowchart but more structured for software processes."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Steps, decisions, parallel actions, start and end."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Business logic flows and process documentation."})]})]}),e.jsx("p",{className:"p",children:"Example: Checkout flow"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Start - user clicks checkout"}),e.jsx("li",{children:"Validate cart items"}),e.jsx("li",{children:"Decision: payment success?"}),e.jsx("li",{children:"If yes - create order and show success"}),e.jsx("li",{children:"If no - show error and retry"})]}),e.jsx("p",{className:"note",children:"Activity diagram is best for explaining workflow and decision logic."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Om,{})}),e.jsx("h3",{className:"h3",children:"State diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"state diagram"})," shows different states of an object and transitions between those states. It is useful when something changes over time based on events."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"States, events, transitions, and final state."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Order status, payment status, ticket lifecycle, user account lifecycle."})]})]}),e.jsx("p",{className:"p",children:"Example: Order states in e-commerce"}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Created"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Paid"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Shipped"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Delivered"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Returned"})]}),e.jsx("p",{className:"note",children:'State diagrams are very useful for systems where valid transitions matter. Example: you should not go from "Delivered" back to "Shipped".'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Use case - user goals. Class - structure. Sequence - interaction order. Activity - workflow. State - lifecycle states."})]})]})})]})},mf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon.warn {
            color: var(--color-warning);
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .exBox {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .exText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},ff=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"estimationAndPlanning",title:"Estimation and Planning",sub:"Effort estimation basics, LOC vs function points, story points, velocity, planning poker, and risk basics with examples."}),[]);return e.jsxs(mf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(hu,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Delivery"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(lu,{})}),e.jsx("h3",{className:"h3",children:"Effort estimation basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Effort estimation"})," means predicting how much work is needed to deliver something. Work usually includes coding, testing, review, documentation, bug fixes, and deployment effort."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Effort"}),e.jsxs("div",{className:"v",children:["How much work it takes",e.jsx("span",{className:"small",children:"Example: 2 developer-days"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Duration"}),e.jsxs("div",{className:"v",children:["How long it will take on calendar",e.jsx("span",{className:"small",children:"Example: 2 days effort can become 4 days duration because of meetings, reviews, dependencies."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Uncertainty"}),e.jsxs("div",{className:"v",children:["Unknowns that can change the estimate",e.jsx("span",{className:"small",children:"Example: API might change, data may be messy, requirements may shift."})]})]})]}),e.jsx("p",{className:"note",children:'Good estimates include a range, not a single exact number. Example: "2 to 4 days" instead of "3 days".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Fm,{})}),e.jsx("h3",{className:"h3",children:"LOC vs Function Points"})]}),e.jsx("p",{className:"p",children:"Two classic ways to estimate size:"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"LOC"})," - Lines of Code",e.jsx("span",{className:"small",children:"Measures code length. Easy to count later, hard to predict early. Encourages writing more code which is not always good."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Function Points"}),e.jsx("span",{className:"small",children:"Measures functionality delivered to users. Useful earlier in the project because it focuses on features, not code."})]})]}),e.jsx("p",{className:"note",children:'Simple example: A "search feature" can be 50 lines or 500 lines depending on design, so LOC is not stable early.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(iu,{})}),e.jsx("h3",{className:"h3",children:"Story points"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Story points"})," are a relative estimation unit used in Agile. It represents"," ",e.jsx("b",{children:"effort + complexity + uncertainty"}),". It is not a time unit."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Effort"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Complexity"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Uncertainty"})]}),e.jsx("p",{className:"p",children:"Example: If login screen is 2 points, then password reset might be 5 points if it includes email OTP, security, and edge cases."}),e.jsx("p",{className:"note",children:"Story points work best when your team keeps them consistent across sprints."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ho,{})}),e.jsx("h3",{className:"h3",children:"Velocity"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Velocity"})," is how many story points a team completes in one sprint. It helps predict how much work can be done in future sprints."]}),e.jsxs("div",{className:"exBox",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"exText",children:"Sprint length is 2 weeks. Team completed 28 story points. So velocity is 28 points per sprint."})]}),e.jsx("p",{className:"note",children:"Velocity is a team metric, not a performance rating for individuals."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Planning poker"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Planning poker"})," is a team estimation technique where each person privately picks a story point value, then everyone reveals together. If values differ a lot, the team discusses and estimates again."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it works"}),e.jsx("div",{className:"v",children:"It avoids one loud person deciding the estimate. It also exposes hidden complexity when someone votes high."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common scale"}),e.jsxs("div",{className:"v",children:["Fibonacci-like: 1, 2, 3, 5, 8, 13",e.jsx("span",{className:"small",children:"Big jumps force discussion when work is uncertain."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example flow"}),e.jsxs("div",{className:"v",children:['Feature: "Add search filters"',e.jsx("span",{className:"small",children:"Votes: 3, 3, 8, 5. Discuss why 8. Maybe API changes needed. Re-estimate and settle on 5."})]})]})]}),e.jsx("p",{className:"note",children:"If your estimates keep changing, it usually means requirements are unclear or dependencies are unknown."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon warn",children:e.jsx(xn,{})}),e.jsx("h3",{className:"h3",children:"Risk management basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Risk"})," is anything that can delay delivery or reduce quality. Risk management means finding risks early and making a plan to handle them."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Identify"}),e.jsxs("div",{className:"v",children:["List possible problems early",e.jsx("span",{className:"small",children:"Example: dependency team not ready, unclear requirements, performance unknown."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Analyze"}),e.jsxs("div",{className:"v",children:["Check probability and impact",e.jsx("span",{className:"small",children:"Example: payment gateway delay is high impact, medium probability."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Mitigate"}),e.jsxs("div",{className:"v",children:["Reduce risk with actions",e.jsx("span",{className:"small",children:"Example: build mock API, create fallback, do spike prototype, add buffer time."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Monitor"}),e.jsxs("div",{className:"v",children:["Track risks during the project",e.jsx("span",{className:"small",children:"Example: weekly check on dependency delivery status."})]})]})]}),e.jsx("p",{className:"note",children:'A good plan is not "no risks". A good plan is "risks are known and handled".'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Estimation is about predicting effort with uncertainty. Story points are relative size. Velocity is completed points per sprint. Planning poker aligns team understanding. Risk management prevents surprises."})]})]})})]})},gf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .example {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 8px;
        }

        .exRow {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px solid
                color-mix(in srgb, var(--color-border) 70%, transparent);
        }

        .exRow:last-child {
            border-bottom: 0;
        }

        .exKey {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .exVal {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .exFooter {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},vf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"projectManagementBasics",title:"Project Management Basics",sub:"Scope, timeline, budget, stakeholders, RACI, Gantt, and critical path with beginner-friendly examples."}),[]);return e.jsxs(gf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(fn,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Planning"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(hu,{})}),e.jsx("h3",{className:"h3",children:"Scope"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scope"})," means what work is included in the project and what is not included. Clear scope prevents confusion and reduces unexpected work."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"In scope"}),e.jsxs("div",{className:"v",children:["Features we will deliver in this project.",e.jsx("span",{className:"small",children:"Example: Login, signup, forgot password."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Out of scope"}),e.jsxs("div",{className:"v",children:["Work explicitly not included.",e.jsx("span",{className:"small",children:"Example: Social login, multi-language support."})]})]})]}),e.jsx("p",{className:"note",children:"Scope creep means scope keeps increasing without adjusting time or budget."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(lu,{})}),e.jsx("h3",{className:"h3",children:"Timeline"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Timeline"})," is the schedule of the project. It includes milestones, deadlines, and the order of work."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Milestone"})," - a major checkpoint",e.jsx("span",{className:"small",children:'Example: "MVP ready" by end of week 2.'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Deadline"})," - latest acceptable date",e.jsx("span",{className:"small",children:'Example: "Release to users" by March 15.'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Dependencies"})," - tasks that block other tasks",e.jsx("span",{className:"small",children:"Example: API must be ready before frontend integration."})]})]}),e.jsx("p",{className:"note",children:"Timelines should include buffer for testing, review, and unexpected issues."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Mm,{})}),e.jsx("h3",{className:"h3",children:"Budget"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Budget"})," is the money allocated to complete the project. It includes people cost, tooling, infrastructure, and risk buffer."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"People cost"})," - developer time, QA, design"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Tools"})," - paid services, licenses, APIs"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Infrastructure"})," - servers, database, storage"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Contingency"})," - extra buffer for surprises"]})]}),e.jsx("p",{className:"note",children:"If scope increases, budget or timeline must also increase."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Stakeholders"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Stakeholders"})," are people who care about the project outcome. They influence requirements, priorities, and acceptance."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Users"})," - people who use the product"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Client"})," - paying party or business owner"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Product manager"})," - decides priorities"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Engineering team"})," - builds and maintains"]}),e.jsxs("li",{children:[e.jsx("b",{children:"QA"})," - validates quality"]})]}),e.jsx("p",{className:"note",children:"Managing stakeholders means managing expectations."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cu,{})}),e.jsx("h3",{className:"h3",children:"RACI matrix"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"RACI"}),' is a responsibility matrix used to clarify who does what. It reduces confusion and prevents "everyone thought someone else will do it".']}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"R"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Responsible"})," - the person who does the work"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"A"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Accountable"})," - the person who owns the final result (one owner)"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"C"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Consulted"})," - people who give input before work is finalized"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"I"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Informed"})," - people who should be updated after decisions"]})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Mini example"}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"Task"}),e.jsx("span",{className:"exVal",children:"Deploy backend to production"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"R"}),e.jsx("span",{className:"exVal",children:"Developer"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"A"}),e.jsx("span",{className:"exVal",children:"Tech lead"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"C"}),e.jsx("span",{className:"exVal",children:"QA, DevOps"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"I"}),e.jsx("span",{className:"exVal",children:"Product manager, client"})]})]}),e.jsx("p",{className:"note",children:'Best rule: only one "A" for each task.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(iu,{})}),e.jsx("h3",{className:"h3",children:"Gantt chart"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"Gantt chart"})," is a timeline view of tasks. It shows task duration, overlap, and dependencies."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Useful for planning long projects with many tasks."}),e.jsx("li",{children:"Helps visualize parallel work."}),e.jsx("li",{children:"Makes delays easier to spot."})]}),e.jsx("p",{className:"note",children:"In Agile, we may use sprint boards more often, but Gantt is still useful for high level planning."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"Critical path"})]}),e.jsxs("p",{className:"p",children:["The ",e.jsx("b",{children:"critical path"})," is the longest chain of dependent tasks that decides the shortest possible project duration. If any task on the critical path is delayed, the whole project gets delayed."]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Simple example"}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"A"}),e.jsx("span",{className:"exVal",children:"Design (2 days)"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"B"}),e.jsx("span",{className:"exVal",children:"Backend API (4 days) depends on A"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"C"}),e.jsx("span",{className:"exVal",children:"Frontend integration (3 days) depends on B"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"D"}),e.jsx("span",{className:"exVal",children:"Testing (2 days) depends on C"})]}),e.jsx("div",{className:"exFooter",children:"Total = 11 days. Any delay in A, B, C, or D delays delivery."})]}),e.jsx("p",{className:"note",children:"Non-critical tasks have slack time. Critical path tasks have zero slack."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Scope defines what to build, timeline defines when, budget defines cost, stakeholders define expectations. RACI clarifies responsibility, Gantt shows schedule, critical path shows what cannot slip."})]})]})})]})},yf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .p2 {
            font-size: 13.2px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 800;
            font-size: 12.5px;
            color: var(--color-text-primary);
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .olist {
            margin-top: 6px;
            padding-left: 18px;
            list-style: decimal;
            display: grid;
            gap: 8px;
        }

        .olist li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .code {
            margin-top: 10px;
            border-radius: 16px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .pre {
            padding: 12px;
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 12.5px;
            line-height: 1.6;
            overflow-x: auto;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .smallCode .pre {
            font-size: 12.2px;
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .panel {
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .pTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .pIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .pIcon svg {
            width: 16px;
            height: 16px;
        }

        .pTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .tip {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .tIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .tIcon svg {
            width: 18px;
            height: 18px;
        }

        .tTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .tSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},jf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"versionControl",title:"Version Control",sub:"Git basics, branching strategy, merge vs rebase, pull request flow, and code review importance."}),[]);return e.jsxs(yf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(gs,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Workflow"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"What is Version Control"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Version Control"})," means tracking changes to files over time so you can ",e.jsx("b",{children:"see history"}),","," ",e.jsx("b",{children:"restore older versions"}),", and"," ",e.jsx("b",{children:"collaborate safely"}),". It is like a time machine for your codebase."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:"Without version control, teams overwrite each other, bugs are hard to trace, and rollback is painful."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common terms"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"commit"})," - a saved snapshot of changes",e.jsx("br",{}),e.jsx("span",{className:"mono",children:"history"})," - timeline of commits",e.jsx("br",{}),e.jsx("span",{className:"mono",children:"diff"})," - the exact changes between versions"]})]})]}),e.jsx("p",{className:"note",children:"Version control is not only for code, it is for any file that changes over time."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"Git basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Git"})," is a"," ",e.jsx("b",{children:"distributed version control system"}),". Distributed means every developer has a full copy of the repository history on their machine."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Repository"})," - a project folder tracked by Git",e.jsx("span",{className:"small",children:'Often called "repo"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Commit"})," - a snapshot of changes with a message",e.jsx("span",{className:"small",children:'Example: "Fix login validation bug"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Branch"})," - a separate line of work",e.jsx("span",{className:"small",children:"Example: work on a feature without breaking main branch"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Remote"})," - a server copy of the repo, like GitHub",e.jsx("span",{className:"small",children:'Example remote name: "origin"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Push"})," - upload commits to remote"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pull"})," - download commits from remote"]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Typical beginner commands"}),e.jsx("pre",{className:"pre",children:`git init
git add .
git commit -m "first commit"
git branch
git checkout -b feature/login
git push -u origin feature/login`})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"Branching strategy"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"branching strategy"})," is a set of rules about how your team creates and manages branches so work stays organized and releases are safe."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Main branch"}),e.jsxs("div",{className:"v",children:["Usually called"," ",e.jsx("span",{className:"mono",children:"main"})," or"," ",e.jsx("span",{className:"mono",children:"master"}),". Should be stable."]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Feature branch"}),e.jsxs("div",{className:"v",children:["A branch for one feature.",e.jsx("span",{className:"small",children:"Example: feature/cart-discount"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Fix branch"}),e.jsxs("div",{className:"v",children:["A branch for bug fixes.",e.jsx("span",{className:"small",children:"Example: fix/payment-timeout"})]})]})]}),e.jsx("p",{className:"note",children:"Basic best practice: keep main stable, do work in feature branches, then merge via review."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Jl,{})}),e.jsx("h3",{className:"h3",children:"Merge vs Rebase"})]}),e.jsxs("p",{className:"p",children:["Both ",e.jsx("b",{children:"merge"})," and ",e.jsx("b",{children:"rebase"})," are ways to bring changes from one branch into another. The difference is how history looks."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTop",children:[e.jsx("span",{className:"pIcon",children:e.jsx(Jl,{})}),e.jsx("div",{className:"pTitle",children:"Merge"})]}),e.jsxs("p",{className:"p2",children:["Merge creates a new ",e.jsx("b",{children:"merge commit"})," ","that combines histories. It keeps the real timeline."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Pros - safe and simple, history preserved"}),e.jsx("li",{children:"Cons - history can look messy with many merges"})]}),e.jsx("div",{className:"code smallCode",children:e.jsx("pre",{className:"pre",children:`git checkout main
git pull
git merge feature/login`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTop",children:[e.jsx("span",{className:"pIcon",children:e.jsx(Hm,{})}),e.jsx("div",{className:"pTitle",children:"Rebase"})]}),e.jsx("p",{className:"p2",children:"Rebase rewrites commit history by placing your commits on top of another branch, making it look like you started from the latest main."}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Pros - clean linear history"}),e.jsx("li",{children:"Cons - rewrites history, can be risky if branch is shared"})]}),e.jsx("div",{className:"code smallCode",children:e.jsx("pre",{className:"pre",children:`git checkout feature/login
git fetch origin
git rebase origin/main`})})]})]}),e.jsx("p",{className:"note",children:"Rule: use rebase for your local branch cleanup, avoid rebasing branches already used by others."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Vm,{})}),e.jsx("h3",{className:"h3",children:"Pull request flow"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"PR"})," means ",e.jsx("b",{children:"Pull Request"}),". It is a request to merge your branch into a target branch like main. It is the standard collaboration flow on GitHub, GitLab, Bitbucket."]}),e.jsxs("ol",{className:"olist",children:[e.jsx("li",{children:"Create a feature branch"}),e.jsx("li",{children:"Make commits with clear messages"}),e.jsx("li",{children:"Push branch to remote"}),e.jsx("li",{children:"Open PR with description and screenshots if needed"}),e.jsx("li",{children:"Review, fix comments, run checks"}),e.jsx("li",{children:"Merge into main after approval"})]}),e.jsx("p",{className:"note",children:"PR keeps main protected and forces review and automated checks."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(po,{})}),e.jsx("h3",{className:"h3",children:"Code review importance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code review"})," means another developer checks your code before it merges. It reduces bugs, improves readability, and spreads knowledge across the team."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Bug catching"})," - someone notices edge cases you missed"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency"})," - naming, style, structure stays consistent"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Security"})," - reviewers can spot risky patterns"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Learning"})," - junior and senior both learn from each other"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Ownership"})," - code is shared, not only in one person head"]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tIcon",children:e.jsx(mn,{})}),e.jsxs("div",{className:"tText",children:[e.jsx("div",{className:"tTitle",children:"Good review checklist"}),e.jsx("div",{className:"tSub",children:"Correctness, readability, tests, edge cases, performance, and security."})]})]})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Git tracks changes. Branches isolate work. Merge keeps real history. Rebase makes history linear. PR means Pull Request. Code review keeps quality high and knowledge shared."})]})]})})]})},bf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .p2 {
            font-size: 13.2px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .ex {
            font-size: 12.8px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .solidGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .solidItem {
            grid-column: span 12;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .solidHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .letter {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            flex: 0 0 auto;
        }

        .name {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Nf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"softwareArchitecturePrinciples",title:"Software Architecture Principles",sub:"SOLID, DRY, KISS, YAGNI, and Separation of Concerns with beginner friendly examples."}),[]);return e.jsxs(bf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(rr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Core principles"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"What are architecture principles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software architecture principles"})," are simple rules that help you design code and systems that are easy to understand, easy to change, and harder to break. These principles reduce bugs, reduce effort, and make teamwork smoother."]}),e.jsx("p",{className:"p",children:'Think of these like "traffic rules" for code. If everyone follows the same rules, the system stays predictable even when many developers work on it.'}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Readable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintainable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Testable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Scalable"})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"SOLID principles (full form and meaning)"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SOLID"})," is a set of five object-oriented design principles that make code easier to maintain and extend. Each letter stands for one principle."]}),e.jsxs("div",{className:"solidGrid",children:[e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"S"}),e.jsx("div",{className:"name",children:"SRP - Single Responsibility Principle"})]}),e.jsxs("p",{className:"p2",children:["A class or module should have"," ",e.jsx("b",{children:"one main reason to change"}),". It should do one job well."]}),e.jsx("p",{className:"ex",children:'Example: A "UserService" should not also format UI HTML. Keep business logic separate from UI formatting.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"O"}),e.jsx("div",{className:"name",children:"OCP - Open/Closed Principle"})]}),e.jsxs("p",{className:"p2",children:["Software entities should be"," ",e.jsx("b",{children:"open for extension"})," but",e.jsx("b",{children:" closed for modification"}),". Add new behavior without editing old working code too much."]}),e.jsx("p",{className:"ex",children:'Example: Add a new payment method by adding a new strategy class instead of editing a big "if else" chain.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"L"}),e.jsx("div",{className:"name",children:"LSP - Liskov Substitution Principle"})]}),e.jsx("p",{className:"p2",children:"A child class should be usable anywhere the parent class is expected without breaking behavior."}),e.jsx("p",{className:"ex",children:'Example: If "Bird" has a "fly" method, then a "Penguin" should not inherit "Bird" if it cannot fly. Use better modeling.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"I"}),e.jsx("div",{className:"name",children:"ISP - Interface Segregation Principle"})]}),e.jsx("p",{className:"p2",children:"Do not force clients to depend on methods they do not use. Prefer many small interfaces over one large interface."}),e.jsx("p",{className:"ex",children:'Example: A "Printer" interface should not force "scan" methods. Create separate "Printable" and "Scannable" interfaces.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"D"}),e.jsx("div",{className:"name",children:"DIP - Dependency Inversion Principle"})]}),e.jsx("p",{className:"p2",children:"High-level modules should not depend on low-level modules directly. Both should depend on abstractions."}),e.jsx("p",{className:"ex",children:'Example: "OrderService" should depend on a "PaymentGateway" interface, not directly on "RazorpayGateway" class.'})]})]}),e.jsx("p",{className:"note",children:"You do not need to force SOLID everywhere. Use it where change and complexity exists."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Am,{})}),e.jsx("h3",{className:"h3",children:"DRY - Don't Repeat Yourself"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DRY"})," stands for"," ",e.jsx("b",{children:"Don't Repeat Yourself"}),". The same logic should not be written in multiple places. If something changes, you should update it in one place only."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Repeating code increases bugs because different copies drift over time."}),e.jsx("li",{children:"Repeating rules causes inconsistency in validations and calculations."})]}),e.jsx("p",{className:"ex",children:"Example: If you validate phone numbers in 3 places, and the rule changes, you might update only 2 places and the third becomes a bug."}),e.jsx("p",{className:"note",children:"DRY is not about making everything one function. It is about avoiding duplicate knowledge and rules."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Dm,{})}),e.jsx("h3",{className:"h3",children:"KISS - Keep It Simple"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"KISS"})," stands for ",e.jsx("b",{children:"Keep It Simple"}),". Prefer the simplest solution that works correctly. Simple code is easier to read, debug, test, and maintain."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fewer moving parts means fewer bugs."}),e.jsx("li",{children:"Simple designs help teams work faster."})]}),e.jsx("p",{className:"ex",children:'Example: If an "if else" is enough, do not add a complicated abstraction or framework pattern just to look advanced.'}),e.jsx("p",{className:"note",children:"Simple does not mean sloppy. Simple means clear and correct."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qm,{})}),e.jsx("h3",{className:"h3",children:"YAGNI - You Aren't Gonna Need It"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"YAGNI"})," stands for"," ",e.jsx("b",{children:"You Aren't Gonna Need It"}),". Do not build features or complexity before it is actually required. Build what is needed now, and keep the design flexible for later."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Extra features take time and add bugs."}),e.jsx("li",{children:'"Future proof" code often becomes unused and confusing.'})]}),e.jsx("p",{className:"ex",children:"Example: Do not add multi-tenant architecture on day 1 if you have only one customer. Add it when real requirements appear."}),e.jsx("p",{className:"note",children:"YAGNI saves time and keeps code clean. Premature complexity is a common project killer."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Separation of concerns"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Separation of concerns"})," means dividing a system into parts where each part handles one concern. A ",e.jsx("b",{children:"concern"})," is a specific responsibility like UI rendering, business rules, or database access."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"UI concern"}),e.jsxs("div",{className:"v",children:["Display data, handle user input, show errors.",e.jsx("span",{className:"small",children:"Example: React components, pages, forms."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Business concern"}),e.jsxs("div",{className:"v",children:["Rules and decisions.",e.jsx("span",{className:"small",children:"Example: pricing rules, discount logic, role checks."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Data concern"}),e.jsxs("div",{className:"v",children:["Storage and retrieval.",e.jsx("span",{className:"small",children:"Example: database queries, API calls."})]})]})]}),e.jsx("p",{className:"ex",children:"Example: Keep your React UI separate from API logic. Put API calls in a service file, and keep components focused on rendering and user interaction."}),e.jsx("p",{className:"note",children:"This improves testing, reduces merge conflicts, and makes changes safer."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"SOLID improves object-oriented design. DRY reduces duplication. KISS keeps solutions simple. YAGNI avoids premature complexity. Separation of concerns keeps responsibilities separate."})]})]})})]})},wf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .example {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .tableWrap {
            width: 100%;
            overflow: auto;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            margin-top: 10px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            min-width: 720px;
        }

        .table th,
        .table td {
            text-align: left;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .table th {
            color: var(--color-text-primary);
            font-weight: 900;
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
        }

        .table tr:last-child td {
            border-bottom: 0;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},kf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"designPatternsHighLevel",title:"Design Patterns (High Level)",sub:"Creational, Structural, Behavioral patterns - plus Singleton, Factory, Observer, and Strategy with examples."}),[]);return e.jsxs(wf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(rr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Architecture"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wa,{})}),e.jsx("h3",{className:"h3",children:"What is a design pattern"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"design pattern"})," is a reusable solution to a common software design problem. It is not copy-paste code. It is a repeatable idea or structure that helps you write code that is easier to change and maintain."]}),e.jsx("p",{className:"p",children:'Think of patterns like "recipes" for design. Same problem appears again and again, so we keep a known approach instead of inventing from zero each time.'}),e.jsx("p",{className:"note",children:'Patterns improve communication too. If someone says "use Factory", the team quickly understands the shape of the solution.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Aa,{})}),e.jsx("h3",{className:"h3",children:"Creational patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Creational patterns"})," focus on"," ",e.jsx("b",{children:"object creation"}),". They control how objects are created so code stays flexible and does not depend on concrete classes directly."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - create objects in a clean, controlled way"}),e.jsx("li",{children:"Helps when creation logic is complex or must be interchangeable"})]}),e.jsx("p",{className:"note",children:'Example idea: instead of doing "new" everywhere, use a creator that decides what to build.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(du,{})}),e.jsx("h3",{className:"h3",children:"Structural patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Structural patterns"})," focus on"," ",e.jsx("b",{children:"how objects and classes are composed"}),". They help you build bigger structures from smaller pieces without making the system messy."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - compose parts cleanly and reuse code"}),e.jsx("li",{children:"Common vibe - wrapping, connecting, adapting"})]}),e.jsx("p",{className:"note",children:"Example idea: wrap an old library so your app can use it with a cleaner interface."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Behavioral patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Behavioral patterns"})," focus on"," ",e.jsx("b",{children:"how objects communicate"})," and how responsibilities are distributed. They define clean ways to handle interactions, events, and workflows."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - keep communication clean and avoid tight coupling"}),e.jsx("li",{children:"Helps in event systems, workflows, and changing behavior at runtime"})]}),e.jsx("p",{className:"note",children:"Example idea: when one thing changes, many other things need to react without direct dependencies."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(_m,{})}),e.jsx("h3",{className:"h3",children:"Singleton"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Singleton"})," is a pattern where only"," ",e.jsx("b",{children:"one instance"})," of a class is created and reused everywhere. It acts like a global shared object."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["Some things should have a single shared state.",e.jsx("span",{className:"small",children:"Example: a config manager, a logger, a single database connection manager."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common risk"}),e.jsx("div",{className:"v",children:"It can become hidden global state and make testing harder. Use only when truly needed."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:"Your app needs logging. If every module creates its own logger, logs can be inconsistent. A Singleton logger keeps one configuration and one output pipeline."})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Jl,{})}),e.jsx("h3",{className:"h3",children:"Factory"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Factory"})," is a pattern where object creation is moved into a separate creator function or class. Instead of the caller doing direct construction, the factory decides what exact object to create."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["Caller should not care about the exact class being created.",e.jsx("span",{className:"small",children:"Example: payment method selection, notification channel selection."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it helps"}),e.jsx("div",{className:"v",children:"Add new types without changing code everywhere. Centralizes creation logic."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:'In an e-commerce app, you support "UPI", "Card", and "CashOnDelivery". A payment factory takes an input like "Card" and returns the correct handler. UI stays clean because it just asks the factory for the payment handler.'})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Observer"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Observer"})," is a pattern where one object called the ",e.jsx("b",{children:"subject"})," publishes changes, and many ",e.jsx("b",{children:"observers"})," subscribe and react to those changes automatically."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Terms"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Subject"})," - the thing being observed.",e.jsx("span",{className:"small",children:"Example: a data store, a button click event, a stock price feed."}),e.jsx("b",{children:"Observer"})," - listeners that react when subject changes.",e.jsx("span",{className:"small",children:"Example: UI components, notification service, logger."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsx("div",{className:"v",children:"Many components need updates when one thing changes, without hard wiring everything."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:"In a shopping cart, when quantity changes, total price should update, header cart count should update, and checkout button state should update. Using Observer, all these subscribe to cart changes instead of manually calling each update."})]}),e.jsx("p",{className:"note",children:"React state updates are conceptually similar to Observer behavior."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Aa,{})}),e.jsx("h3",{className:"h3",children:"Strategy"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Strategy"})," is a pattern where you define multiple algorithms or behaviors and select one at runtime based on need. It avoids large if-else blocks and makes behavior easy to swap."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["You need different ways to do the same job, based on context.",e.jsx("span",{className:"small",children:"Example: sorting methods, discount calculation, routing rules."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it helps"}),e.jsx("div",{className:"v",children:"Add new strategies without rewriting the main logic. Keeps code modular."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:'Discount calculation can vary: "FestivalDiscount", "MemberDiscount", "CouponDiscount". Strategy pattern lets you pick one calculation strategy without changing checkout logic.'})]}),e.jsx("p",{className:"note",children:"Strategy is about replacing a big conditional chain with pluggable behavior."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Quick revision table"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Pattern"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Main purpose"}),e.jsx("th",{children:"Common example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Singleton"}),e.jsx("td",{children:"Creational"}),e.jsx("td",{children:"Single shared instance"}),e.jsx("td",{children:"Logger, config manager"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Factory"}),e.jsx("td",{children:"Creational"}),e.jsx("td",{children:"Create correct object based on input"}),e.jsx("td",{children:"Payment method handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Observer"}),e.jsx("td",{children:"Behavioral"}),e.jsx("td",{children:"Notify multiple listeners on change"}),e.jsx("td",{children:"Event system, state updates"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Strategy"}),e.jsx("td",{children:"Behavioral"}),e.jsx("td",{children:"Swap algorithm at runtime"}),e.jsx("td",{children:"Discount rules, sorting"})]})]})]})}),e.jsx("p",{className:"note",children:"These are high-level mental models. The goal is to recognize when a pattern fits, not to memorize code."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Creational patterns decide how objects are created. Structural patterns decide how parts are composed. Behavioral patterns decide how parts communicate. Singleton and Factory are about creation. Observer and Strategy are about behavior and communication."})]})]})})]})},Sf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Cf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"testingFundamentals",title:"Testing Fundamentals",sub:"Unit, integration, system, acceptance tests, manual vs automation, TDD and CI explained clearly."}),[]);return e.jsxs(Sf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(pt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Quality"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(fn,{})}),e.jsx("h3",{className:"h3",children:"What testing means"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Testing"})," is the process of checking that a software system behaves as expected. The goal is to catch bugs early, reduce risk, and keep software stable while changes happen."]}),e.jsx("p",{className:"p",children:"Real example: you add a new discount rule in an e-commerce cart. Testing ensures the new rule works and also that old things like totals, taxes, and coupons do not break."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Find bugs early"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Reduce production risk"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Confidence in changes"})]}),e.jsx("p",{className:"note",children:"Testing is not just QA. Developers also own testing through unit tests and automation."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Aa,{})}),e.jsx("h3",{className:"h3",children:"Unit testing"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"unit test"})," checks the smallest testable part of code such as a function, method, or component in isolation."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Focus"}),e.jsx("div",{className:"v",children:"One function or module, not the full system."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Speed"}),e.jsx("div",{className:"v",children:"Very fast. Can run hundreds in seconds."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Test `calculateTotal(items)` returns correct total for different inputs."})]})]}),e.jsx("p",{className:"note",children:"Unit tests should be predictable. If they fail randomly, they become useless."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Integration testing"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"integration test"})," checks how multiple modules work together. It tests the connections between components."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Tests how your API talks to the database."}),e.jsx("li",{children:"Tests how frontend calls backend endpoints."}),e.jsx("li",{children:"Tests how login service works with email or OTP provider."})]}),e.jsx("p",{className:"note",children:"Integration tests are slower than unit tests but catch bugs that happen at boundaries."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"System testing"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"System testing"})," checks the complete system as a whole. It verifies that the entire application works from end to end."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Scope"}),e.jsx("div",{className:"v",children:"Full app with real services or close-to-real setup."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Create account - login - add product - pay - verify order confirmation."})]})]}),e.jsx("p",{className:"note",children:"System testing ensures features work together like real users expect."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(pt,{})}),e.jsx("h3",{className:"h3",children:"Acceptance testing"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Acceptance testing"}),' checks whether the software meets business requirements and is ready to release. It answers: "Is this acceptable for delivery"']}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Often based on ",e.jsx("b",{children:"acceptance criteria"})," ","written in user stories."]}),e.jsx("li",{children:"Can be done by QA, product owner, client, or end users."}),e.jsx("li",{children:'Example: "Password reset email must arrive within 30 seconds and the link must expire in 10 minutes."'})]}),e.jsx("p",{className:"note",children:"If acceptance test fails, the feature is not considered complete."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(fn,{})}),e.jsx("h3",{className:"h3",children:"Manual vs Automated testing"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Manual testing"}),e.jsxs("div",{className:"v",children:["A human tests by clicking, typing, and verifying results.",e.jsx("span",{className:"small",children:"Example: QA tests login, signup, and checkout by hand."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Automated testing"}),e.jsxs("div",{className:"v",children:["Tests are written as code and run automatically.",e.jsx("span",{className:"small",children:"Example: A test script logs in and verifies the dashboard loads correctly."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Manual is useful for exploratory testing and quick UI checks."}),e.jsx("li",{children:"Automation is best for repeated checks like regression testing."}),e.jsx("li",{children:"Good teams use both - manual for discovery, automation for stability."})]}),e.jsx("p",{className:"note",children:"Regression testing means checking that old features still work after new changes."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ut,{})}),e.jsx("h3",{className:"h3",children:"TDD - Test Driven Development"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"TDD"})," means ",e.jsx("b",{children:"Test Driven Development"}),". It is a development approach where you write tests first, then write code to pass the tests."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Red"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Green"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Refactor"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Red"})," - write a test, it fails because code is missing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Green"})," - write minimum code to make the test pass."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Refactor"})," - clean the code while keeping tests passing."]})]}),e.jsx("p",{className:"note",children:"TDD improves design because you think about inputs and outputs before implementation."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"CI - Continuous Integration"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"CI"})," means ",e.jsx("b",{children:"Continuous Integration"}),". It is the practice of automatically building and testing code whenever changes are pushed."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Catch bugs early by validating every change."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common steps"}),e.jsx("div",{className:"v",children:"Install dependencies - run tests - run lint - build artifacts."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"On every pull request, CI runs unit tests and fails the PR if something breaks."})]})]}),e.jsx("p",{className:"note",children:'CI helps teams merge changes safely. It reduces the "it works on my machine" problem.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Unit tests check small pieces. Integration tests check module connections. System tests check full app behavior. Acceptance tests check business readiness. TDD writes tests first. CI runs tests automatically on code changes."})]})]})})]})},Tf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .intro {
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            margin-bottom: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Ef=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"testQualityAttributes",title:"Quality Attributes",sub:"Scalability, availability, reliability, maintainability, security, and performance with examples."}),[]);return e.jsxs(Tf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Non-functional"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"intro",children:[e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Quality attributes"})," are the non-feature qualities of a system. They define how the system behaves in real life - under load, during failures, during changes, and against attacks."]}),e.jsxs("p",{className:"note",children:["These are also called"," ",e.jsx("b",{children:"non-functional requirements"}),"because they describe system qualities, not specific features."]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ho,{})}),e.jsx("h3",{className:"h3",children:"Scalability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scalability"})," means the system can handle more load (users, requests, data) by adding resources, without breaking or becoming too slow."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Load"}),e.jsxs("div",{className:"v",children:["The work the system must handle.",e.jsx("span",{className:"small",children:"Example: 10,000 users online, 2,000 requests per second."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Resources"}),e.jsx("div",{className:"v",children:"CPU, RAM, disk, network, servers, or database capacity."})]})]}),e.jsx("p",{className:"note",children:"Example: If a shopping app works for 1,000 users today, scalability means it should still work when 100,000 users arrive during a sale."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(so,{})}),e.jsx("h3",{className:"h3",children:"Availability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Availability"})," means the system is up and usable when users need it. It is about uptime."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High availability means fewer outages."}),e.jsxs("li",{children:["Usually measured as a percentage.",e.jsx("span",{className:"small",children:"Example: 99.9 percent uptime."})]})]}),e.jsx("p",{className:"note",children:"Example: If your API is down for 30 minutes, users cannot login or pay. Availability is the goal of staying online."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ro,{})}),e.jsx("h3",{className:"h3",children:"Reliability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Reliability"})," means the system works correctly and consistently over time. It is not only about being up, but also about being correct."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Reliable system gives correct results."}),e.jsx("li",{children:"It handles failures safely without data loss."})]}),e.jsx("p",{className:"note",children:"Example: A payment service can be available but unreliable if it sometimes double-charges or loses transactions."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xt,{})}),e.jsx("h3",{className:"h3",children:"Maintainability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Maintainability"})," means the software is easy to understand, fix, and improve over time. It decides how quickly you can ship changes safely."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Maintain"}),e.jsx("div",{className:"v",children:"Fix bugs, add features, improve performance, update dependencies."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good signs"}),e.jsx("div",{className:"v",children:"Clean code, good naming, tests, docs, modular design."})]})]}),e.jsx("p",{className:"note",children:"Example: If a small change takes 2 days because code is messy and has no tests, maintainability is low."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"Security"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Security"})," means protecting the system and its data from unauthorized access, misuse, and attacks."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Authentication"})," - proving who you are.",e.jsx("span",{className:"small",children:"Example: login with password or OTP (One Time Password)."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Authorization"})," - what you are allowed to do.",e.jsx("span",{className:"small",children:"Example: only admin can delete users."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Encryption"})," - data is converted into a secret form.",e.jsx("span",{className:"small",children:"Example: HTTPS (Hypertext Transfer Protocol Secure) uses TLS (Transport Layer Security)."})]})]}),e.jsx("p",{className:"note",children:"Example: A reliable app without security can still be hacked and lose user data."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Zm,{})}),e.jsx("h3",{className:"h3",children:"Performance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Performance"})," means how fast and efficiently the system responds and uses resources."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Latency"}),e.jsxs("div",{className:"v",children:["Time taken for one request.",e.jsx("span",{className:"small",children:"Example: API response in 120 ms (milliseconds)."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Throughput"}),e.jsxs("div",{className:"v",children:["Requests handled per unit time.",e.jsx("span",{className:"small",children:"Example: 1,000 requests per second."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Resource usage"}),e.jsx("div",{className:"v",children:"CPU, RAM, disk I/O (Input Output), network usage."})]})]}),e.jsx("p",{className:"note",children:"Example: A page that loads in 8 seconds is slow. Improving performance means reducing load time and resource usage."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(xn,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Availability is being up. Reliability is being correct. Scalability is handling growth. Maintainability is easy changes. Security protects data. Performance is speed and efficiency."})]})]})]})})]})},If={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .flow {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: flex;
            gap: 10px;
            align-items: flex-start;

            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .tag {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            flex: 0 0 auto;
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
            margin-bottom: 2px;
        }

        .d {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},zf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"devOpsBasics",title:"DevOps Basics",sub:"CI and CD meaning, deployment pipeline, Docker and containers, containers vs VMs, and monitoring basics."}),[]);return e.jsxs(If.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Aa,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Production"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"What is DevOps - meaning and goal"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DevOps"})," is a culture and set of practices that improves collaboration between"," ",e.jsx("b",{children:"Development"})," and ",e.jsx("b",{children:"Operations"}),". The goal is to deliver software ",e.jsx("b",{children:"faster"}),","," ",e.jsx("b",{children:"safer"}),", and ",e.jsx("b",{children:"more reliably"}),"."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Development"})," builds features and fixes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Operations"})," runs software in production and keeps it stable."]}),e.jsx("li",{children:"DevOps reduces friction by automating builds, tests, deployments, and monitoring."})]}),e.jsx("p",{className:"note",children:"DevOps is not only tools. Tools support the process, but teamwork and automation mindset is the main point."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"CI and CD meaning"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"CI"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"CI"})," means"," ",e.jsx("b",{children:"Continuous Integration"}),". Developers merge small code changes frequently and run automated checks.",e.jsx("span",{className:"small",children:"Typical CI tasks: lint, unit tests, build, security checks."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"CD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"CD"})," can mean"," ",e.jsx("b",{children:"Continuous Delivery"})," or"," ",e.jsx("b",{children:"Continuous Deployment"}),".",e.jsx("span",{className:"small",children:"Continuous Delivery: code is always ready to release, but release may be manual."}),e.jsx("span",{className:"small",children:"Continuous Deployment: every successful change is deployed automatically."})]})]})]}),e.jsx("p",{className:"note",children:"CI makes sure changes do not break the codebase. CD makes sure releases are repeatable and fast."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Km,{})}),e.jsx("h3",{className:"h3",children:"Deployment pipeline"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"deployment pipeline"})," is an automated sequence of steps that turns code into a running production release. It gives a predictable path from commit to production."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Commit"}),e.jsx("div",{className:"d",children:"Developer pushes code to Git repository."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Build"}),e.jsxs("div",{className:"d",children:["Compile or bundle the app and produce artifacts.",e.jsx("span",{className:"small",children:"Example: Vite build creates dist folder."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Test"}),e.jsxs("div",{className:"d",children:["Run automated tests to catch issues early.",e.jsx("span",{className:"small",children:"Example: unit tests and integration tests."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Package"}),e.jsxs("div",{className:"d",children:["Create a deployable package.",e.jsx("span",{className:"small",children:"Example: Docker image or zipped build."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Deploy"}),e.jsxs("div",{className:"d",children:["Release to environment.",e.jsx("span",{className:"small",children:"Example: staging then production."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"6"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Verify"}),e.jsx("div",{className:"d",children:"Run smoke checks and monitor health metrics."})]})]})]}),e.jsx("p",{className:"note",children:"Pipeline keeps releases consistent. It reduces human mistakes during deployment."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wa,{})}),e.jsx("h3",{className:"h3",children:"Docker basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Docker"})," is a tool used to build and run",e.jsx("b",{children:"containers"}),". It packages an app with its dependencies so it runs the same way on every machine."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Image"}),e.jsxs("div",{className:"v",children:["A read-only template containing app code and dependencies.",e.jsx("span",{className:"small",children:"Think: a snapshot you can use to create containers."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Container"}),e.jsxs("div",{className:"v",children:["A running instance of an image.",e.jsx("span",{className:"small",children:"Think: container is what actually runs."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Dockerfile"}),e.jsxs("div",{className:"v",children:["A file that describes how to build an image.",e.jsx("span",{className:"small",children:"Example: base image, install deps, copy code, start command."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Registry"}),e.jsxs("div",{className:"v",children:["A place to store and download images.",e.jsx("span",{className:"small",children:"Example: Docker Hub or private registry."})]})]})]}),e.jsx("p",{className:"note",children:"Real-life example: your Node API runs fine on your laptop but fails on server due to missing dependency. Docker fixes this by packaging everything needed."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Containers vs VMs"})]}),e.jsx("p",{className:"p",children:"Both containers and VMs isolate applications, but they do it differently."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"VM"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"VM"})," means ",e.jsx("b",{children:"Virtual Machine"}),". It runs a full guest operating system on a hypervisor.",e.jsx("span",{className:"small",children:"Heavier, slower to start, but strong isolation."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Container"}),e.jsxs("div",{className:"v",children:["Shares the host OS kernel and isolates processes.",e.jsx("span",{className:"small",children:"Lightweight, fast start, efficient for microservices."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Containers are great for packaging and fast scaling."}),e.jsx("li",{children:"VMs are useful when you need different OS or stronger isolation."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx($m,{})}),e.jsx("h3",{className:"h3",children:"Monitoring basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Monitoring"})," means watching a system in production to detect problems early. It helps teams know if the app is healthy, slow, or failing."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Metrics"}),e.jsxs("div",{className:"v",children:["Numeric values collected over time.",e.jsx("span",{className:"small",children:"Examples: CPU usage, memory, request count, response time."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Logs"}),e.jsxs("div",{className:"v",children:["Text records of events.",e.jsx("span",{className:"small",children:'Example: "payment failed", "user login", "API error stack trace".'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Alerts"}),e.jsxs("div",{className:"v",children:["Notifications triggered when something crosses a threshold.",e.jsx("span",{className:"small",children:"Example: alert when error rate crosses 2 percent."})]})]})]}),e.jsx("p",{className:"note",children:'Monitoring is how you avoid "users found the bug before us" situation.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"DevOps improves delivery by automation. CI checks code often. CD makes releases repeatable. Pipelines connect commit to production. Docker packages apps into containers. Monitoring keeps production healthy."})]})]})})]})},Pf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 0.95em;
            color: var(--color-text-primary);
        }

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .codeBlock {
            margin-top: 10px;
            border-radius: 16px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            overflow: hidden;
        }

        .codeTitle {
            padding: 10px 12px;
            font-size: 12.5px;
            font-weight: 900;
            color: var(--color-text-primary);
            border-bottom: 1px solid var(--color-code-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 88%,
                transparent
            );
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Rf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"codeQualityAndReviews",title:"Code Quality and Reviews",sub:"Clean code principles, code smells, refactoring basics, and technical debt with examples."}),[]);return e.jsxs(Pf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(pt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Quality"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(po,{})}),e.jsx("h3",{className:"h3",children:"What is code quality and why reviews matter"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code quality"})," means how easy it is to"," ",e.jsx("b",{children:"read"}),", ",e.jsx("b",{children:"change"}),", ",e.jsx("b",{children:"test"}),", and"," ",e.jsx("b",{children:"maintain"})," your code while keeping it correct. High-quality code reduces bugs and makes future changes faster."]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code review"})," is when another developer checks your changes before merging. Reviews are used to catch mistakes, improve clarity, and share team standards."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Correctness"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Readability"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintainability"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Testability"})]}),e.jsx("p",{className:"note",children:"Reviews are not about ego. They are a safety net and a learning tool."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Clean code principles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Clean code"})," means code that reads like a clear explanation. It should be easy for you and your teammate to understand after weeks or months."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Meaningful names"})," - use names that explain purpose.",e.jsxs("span",{className:"small",children:["Bad: ",e.jsx("span",{className:"mono",children:"d"})," ","Good:"," ",e.jsx("span",{className:"mono",children:"daysSinceSignup"})]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Small functions"})," - one function should do one job.",e.jsxs("span",{className:"small",children:["A function named"," ",e.jsx("span",{className:"mono",children:"createInvoice"})," ","should not also send emails and update analytics."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Clear control flow"})," - avoid too many nested conditions."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Single responsibility"})," - one module should have one reason to change."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency"})," - follow the same style across files, folders, and naming."]})]}),e.jsx("p",{className:"note",children:"Clean code is not about being fancy. It is about being clear."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xn,{})}),e.jsx("h3",{className:"h3",children:"Code smells"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"code smell"})," is a warning sign that code might be hard to maintain or risky to change. It does not always mean the code is wrong, but it suggests improvement is needed."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Long function"})," - one function is doing too much."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Duplicate code"})," - same logic repeated in many places."]}),e.jsxs("li",{children:[e.jsx("b",{children:"God object"})," - one class or module knows everything and does everything."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Too many parameters"})," - function signature is hard to understand."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Magic numbers"})," - unexplained constants like ",e.jsx("span",{className:"mono",children:"37"})," or"," ",e.jsx("span",{className:"mono",children:"9999"})," inside logic."]})]}),e.jsx("p",{className:"note",children:"Smells usually lead to bugs later because nobody understands what will break."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ut,{})}),e.jsx("h3",{className:"h3",children:"Refactoring basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Refactoring"})," means improving the internal structure of code without changing its external behavior. The output should stay the same, but the code becomes easier to understand and modify."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Make code easier to maintain and less likely to break."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Safe approach"}),e.jsxs("div",{className:"v",children:["Small steps + tests.",e.jsx("span",{className:"small",children:"Tests act like a safety harness while refactoring."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common refactors"}),e.jsx("div",{className:"v",children:"Extract function, rename variables, remove duplication, simplify conditionals."})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Mini example"}),e.jsx("pre",{className:"code",children:`// Before - repeated logic
if (user.role === "admin") {
    canEdit = true;
} else if (user.role === "manager") {
    canEdit = true;
}

// After - refactor to a clearer rule
const canEdit = ["admin", "manager"].includes(user.role);`})]}),e.jsx("p",{className:"note",children:"Refactoring is easier when code has good tests. Without tests, refactoring feels risky."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xt,{})}),e.jsx("h3",{className:"h3",children:"Technical debt"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Technical debt"})," is the extra future work you create when you take shortcuts today. You save time now, but you pay later with slower development, more bugs, and painful changes."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Hardcoding values, skipping tests, writing unclear code just to ship fast."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it happens"}),e.jsx("div",{className:"v",children:"Deadlines, unclear requirements, lack of reviews, lack of time for refactoring."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"How to manage"}),e.jsx("div",{className:"v",children:"Track it, prioritize it, pay it off regularly, do refactoring in small parts."})]})]}),e.jsx("p",{className:"note",children:"Debt is not always bad. Sometimes you accept small debt to ship. The mistake is ignoring it forever."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Clean code reduces confusion. Smells warn about future bugs. Refactoring improves structure without changing behavior. Technical debt is future pain created by shortcuts today. Reviews help catch all of these early."})]})]})})]})},Lf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Af=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"documentation",title:"Documentation",sub:"API documentation, README structure, architecture docs, and change logs with beginner friendly examples."}),[]);return e.jsxs(Lf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(uo,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Must know"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Zl,{})}),e.jsx("h3",{className:"h3",children:"What is documentation"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Documentation"})," is written information that explains how a software system works, how to use it, and how to maintain it. Good documentation reduces confusion, speeds up onboarding, and prevents repeated mistakes."]}),e.jsx("p",{className:"p",children:"Simple example: If you leave a project after 6 months, documentation is what helps you or another developer understand how to run it, how features are designed, and how changes should be made safely."}),e.jsx("p",{className:"note",children:"Documentation is not only for users. It is also for developers, testers, DevOps teams, and future you."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(du,{})}),e.jsx("h3",{className:"h3",children:"API documentation"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"API"})," means"," ",e.jsx("b",{children:"Application Programming Interface"}),". API documentation explains how to call an API and what to expect in return. It is used by frontend developers, other services, mobile apps, and external clients."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"Endpoints, methods, request body, response body, status codes, authentication, examples."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"GET /users/me"}),e.jsx("span",{className:"small",children:"Returns current logged-in user details."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:"Without API docs, developers guess inputs and outputs, which causes bugs and slow integration."})]})]}),e.jsx("p",{className:"note",children:"Common formats: OpenAPI (formerly called Swagger) and Postman collections."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Zl,{})}),e.jsx("h3",{className:"h3",children:"README structure"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"README"})," is the first document people read in a repository. It should explain what the project is and how to run it."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Project title and one-line description"}),e.jsx("span",{className:"small",children:'Example: "Software Engineering Core Notes - quick revision single page"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Purpose and coverage"}),e.jsx("span",{className:"small",children:"What topics or features are included"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Tech stack"}),e.jsx("span",{className:"small",children:"Example: React, Vite, styled-components"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"How to run locally"}),e.jsx("span",{className:"small",children:"Example: npm install then npm run dev"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Build and deploy steps"}),e.jsx("span",{className:"small",children:"Example: GitHub Pages deploy command"})]})]}),e.jsx("p",{className:"note",children:"Good README makes a repo usable in minutes, not hours."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(rr,{})}),e.jsx("h3",{className:"h3",children:"Architecture docs"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Architecture documents"})," explain the system design at a higher level. They help teams understand how components connect and why decisions were made."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"System overview, major components, data flow, database design overview, external services, and deployment flow."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common diagrams"}),e.jsx("div",{className:"v",children:"Component diagram, sequence diagram, flow diagram, and deployment diagram."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:'"Frontend calls API gateway, API gateway routes to auth service and product service, database stores users and products."'})]})]}),e.jsx("p",{className:"note",children:"Architecture docs are not only drawings. They should include the reasoning and tradeoffs behind choices."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(pu,{})}),e.jsx("h3",{className:"h3",children:"Change logs"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"change log"})," is a record of changes made across versions of a project. It helps users and developers quickly see what changed between releases."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"Version number, date, and grouped changes like Added, Changed, Fixed, Removed."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example entry"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"1.0.2"}),e.jsx("span",{className:"small",children:"Fixed login redirect bug. Added caching for notes search."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:'Without a change log, teams waste time asking "what changed" and debugging unknown updates.'})]})]}),e.jsx("p",{className:"note",children:"Change log is different from git commit history. Change log is human-friendly summary of releases."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"README helps run the project. API docs help integrate. Architecture docs explain system structure. Change logs track releases."})]})]})})]})},_f={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 12;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
            margin-bottom: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .split {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .boxTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .bIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bIcon svg {
            width: 16px;
            height: 16px;
        }

        .bTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .warn {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .wIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-warning);
            flex: 0 0 auto;
        }

        .wIcon svg {
            width: 18px;
            height: 18px;
        }

        .wTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .wSub {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.55;
        }

        .noteBox {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .nbTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 8px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .vulnGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .vCard {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .vTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .vSub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
            margin-bottom: 8px;
        }

        .vFix {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .kv {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }

            .vCard {
                grid-column: span 12;
            }
        }
    `},Mf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"securityBasics",title:"Security Basics",sub:"Authentication vs authorization, encryption fundamentals, OWASP basics, and common vulnerabilities with examples."}),[]);return e.jsxs(_f.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Must know"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsx("div",{className:"inner",children:e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Xm,{})}),e.jsx("h3",{className:"h3",children:"Authentication vs Authorization"})]}),e.jsx("p",{className:"p",children:"These two are confused a lot, but they solve two different problems."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Authentication"}),e.jsxs("div",{className:"v",children:["Verifying ",e.jsx("b",{children:"who"})," you are.",e.jsx("span",{className:"small",children:"Example: login with password, OTP, Google sign-in."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Authorization"}),e.jsxs("div",{className:"v",children:["Deciding ",e.jsx("b",{children:"what"})," you can access after you are authenticated.",e.jsx("span",{className:"small",children:"Example: admin can delete users, normal user cannot."})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Authentication = who are you"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Authorization = what can you do"})]}),e.jsx("p",{className:"note",children:"Quick example: Entering a building gate check is authentication. Entering only allowed rooms is authorization."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(uu,{})}),e.jsx("h3",{className:"h3",children:"Encryption basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Encryption"})," means converting readable data (called ",e.jsx("b",{children:"plaintext"}),") into unreadable data (called ",e.jsx("b",{children:"ciphertext"}),") so only authorized parties can read it."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Plaintext"}),e.jsxs("div",{className:"v",children:["Original readable data.",e.jsx("span",{className:"small",children:'Example: "myPassword123"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Ciphertext"}),e.jsxs("div",{className:"v",children:["Encrypted unreadable output.",e.jsx("span",{className:"small",children:"Example: looks like random characters, not readable."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Key"}),e.jsxs("div",{className:"v",children:["Secret value used to encrypt and decrypt.",e.jsx("span",{className:"small",children:"Without the key, ciphertext should not be readable."})]})]})]}),e.jsxs("div",{className:"split",children:[e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"boxTop",children:[e.jsx("span",{className:"bIcon",children:e.jsx(Wm,{})}),e.jsx("div",{className:"bTitle",children:"Symmetric encryption"})]}),e.jsx("p",{className:"p",children:"Same key is used for encryption and decryption."}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fast, good for large data."}),e.jsx("li",{children:"Main problem is sharing the key securely."})]}),e.jsx("p",{className:"note",children:"Example use: encrypting files, data at rest (stored data)."})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"boxTop",children:[e.jsx("span",{className:"bIcon",children:e.jsx(po,{})}),e.jsx("div",{className:"bTitle",children:"Asymmetric encryption"})]}),e.jsxs("p",{className:"p",children:["Uses two keys: ",e.jsx("b",{children:"public key"})," and"," ",e.jsx("b",{children:"private key"}),"."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Public key can be shared, private key must be secret."}),e.jsx("li",{children:"Slower, but solves secure key sharing problem."})]}),e.jsx("p",{className:"note",children:"Example use: TLS (Transport Layer Security) handshake on HTTPS."})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"wIcon",children:e.jsx(xn,{})}),e.jsxs("div",{className:"wText",children:[e.jsx("div",{className:"wTitle",children:"Hashing is not encryption"}),e.jsxs("div",{className:"wSub",children:[e.jsx("b",{children:"Hashing"})," converts data into a fixed-length value and is one-way. Passwords should be stored as hashed values, not encrypted values."]})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"OWASP basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"OWASP"})," stands for"," ",e.jsx("b",{children:"Open Web Application Security Project"}),". It is a community-driven organization that provides guidance, tools, and awareness about web application security."]}),e.jsxs("p",{className:"p",children:["The most famous thing from OWASP is the"," ",e.jsx("b",{children:"OWASP Top 10"}),", which is a list of common and high-impact security risks in web apps. It is used widely in audits, interviews, and real security checklists."]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("div",{className:"nbTitle",children:"Simple way to use OWASP"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Use OWASP Top 10 as a checklist during development and review."}),e.jsx("li",{children:"Validate input, enforce auth rules, secure configs, and log safely."}),e.jsx("li",{children:"Keep dependencies updated and use security headers."})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xn,{})}),e.jsx("h3",{className:"h3",children:"Common vulnerabilities"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"vulnerability"})," is a weakness in software that an attacker can exploit to cause harm. Below are common categories you should know and be able to explain."]}),e.jsxs("div",{className:"vulnGrid",children:[e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"SQL Injection"}),e.jsx("div",{className:"vSub",children:"Attacker injects SQL (Structured Query Language) into inputs to access or modify database data."}),e.jsx("div",{className:"vFix",children:"Fix: use parameterized queries, ORM, and validate inputs."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"XSS"}),e.jsxs("div",{className:"vSub",children:[e.jsx("b",{children:"XSS"})," is Cross-Site Scripting. Attacker injects script into a page that runs in user browser."]}),e.jsx("div",{className:"vFix",children:"Fix: escape output, sanitize input, use CSP (Content Security Policy)."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"CSRF"}),e.jsxs("div",{className:"vSub",children:[e.jsx("b",{children:"CSRF"})," is Cross-Site Request Forgery. Attacker tricks a logged-in user browser into sending a request."]}),e.jsx("div",{className:"vFix",children:"Fix: CSRF tokens, SameSite cookies, re-check auth for sensitive actions."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Broken Access Control"}),e.jsx("div",{className:"vSub",children:"Users can access actions or data they should not. This is authorization failure."}),e.jsx("div",{className:"vFix",children:"Fix: server-side authorization checks on every request."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Insecure Password Storage"}),e.jsx("div",{className:"vSub",children:"Storing passwords in plaintext or weak hashes."}),e.jsx("div",{className:"vFix",children:"Fix: use strong hashing with salt, like bcrypt."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Security Misconfiguration"}),e.jsx("div",{className:"vSub",children:"Unsafe default settings like open admin panels, debug mode in production, weak CORS."}),e.jsx("div",{className:"vFix",children:"Fix: secure defaults, remove debug, restrict access, review configs."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Auth is identity, authz is permission. Encryption protects data. OWASP is the common security checklist. Most attacks happen because input is not validated or access rules are not enforced."})]})]})]})})})]})},Df={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 8px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .table {
            width: 100%;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            margin-top: 10px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr 220px;
        }

        .row + .row {
            border-top: 1px solid var(--color-border);
        }

        .cell {
            padding: 10px 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        .headRow .cell {
            font-weight: 900;
            color: var(--color-text-primary);
            background: color-mix(
                in srgb,
                var(--color-surface) 76%,
                transparent
            );
        }

        .strong {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 1fr;
            }

            .cell {
                border-top: 1px solid var(--color-border);
            }

            .headRow .cell {
                border-top: 0;
            }
        }
    `},Of=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"softwareMaintenance",title:"Software Maintenance",sub:"Corrective, adaptive, perfective, and preventive maintenance with real examples."}),[]);return e.jsxs(Df.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(xt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Post release"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(mn,{})}),e.jsx("h3",{className:"h3",children:"What is software maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software maintenance"})," means the work done on software after it is released to users. This includes fixing bugs, updating software to work in new environments, improving performance, and preventing future issues."]}),e.jsx("p",{className:"p",children:"In real life, most software cost is not only building it once, but maintaining it for years. Maintenance keeps software usable, secure, and easy to change."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Fix"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Adapt"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Improve"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Prevent"})]}),e.jsx("p",{className:"note",children:"Maintenance is not only bug fixing. It is also upgrades, improvements, and prevention work."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Rm,{})}),e.jsx("h3",{className:"h3",children:"Corrective maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Corrective maintenance"})," means fixing problems in existing software after they are found. The problem can be a bug, crash, wrong output, or unexpected behavior."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Restore correct behavior and remove defects."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Checkout page crashes when user applies a coupon - fix the crash and add validation."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Typical signals"}),e.jsx("div",{className:"v",children:"Bugs reported by users, error logs, test failures."})]})]}),e.jsx("p",{className:"note",children:"Think: something is broken - fix it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ut,{})}),e.jsx("h3",{className:"h3",children:"Adaptive maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Adaptive maintenance"})," means changing software so it continues to work when the environment changes. The software might be fine, but the outside world changed."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Keep software compatible with new platforms, rules, or dependencies."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Payment provider changes API format - update your integration to match the new API."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Environment means"}),e.jsx("div",{className:"v",children:"OS (Operating System), browser, device, library updates, API changes, law changes."})]})]}),e.jsx("p",{className:"note",children:"Think: software is correct, but the world changed - adapt."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ho,{})}),e.jsx("h3",{className:"h3",children:"Perfective maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Perfective maintenance"})," means improving software to make it better for users and the business. This can be performance improvements, usability improvements, or small feature additions."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Improve value, speed, user experience, and maintainability."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Examples"}),e.jsx("div",{className:"v",children:"Speed up search results by adding an index, reduce page load time, improve UI flow, add filters to product list."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:'What "perfective" means'}),e.jsx("div",{className:"v",children:'Make the system closer to "ideal" based on feedback and goals.'})]})]}),e.jsx("p",{className:"note",children:"Think: nothing is broken, but we improve it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"Preventive maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Preventive maintenance"})," means doing work to reduce the chance of future problems. It focuses on improving internal quality and removing risks before they become bugs or outages."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Prevent future failures and reduce maintenance cost later."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Examples"}),e.jsx("div",{className:"v",children:"Refactor messy code, update vulnerable dependencies, add missing tests, improve logging, remove unused code paths."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Risk examples"}),e.jsx("div",{className:"v",children:"Security risk, performance risk, scaling risk, fragile code, missing monitoring."})]})]}),e.jsx("p",{className:"note",children:"Think: it works now, but future can break it - prevent."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(mn,{})}),e.jsx("h3",{className:"h3",children:"Quick comparison"})]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row headRow",children:[e.jsx("div",{className:"cell",children:"Type"}),e.jsx("div",{className:"cell",children:"Meaning"}),e.jsx("div",{className:"cell",children:"Easy memory"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Corrective"}),e.jsx("div",{className:"cell",children:"Fix defects and bugs found after release"}),e.jsx("div",{className:"cell",children:"Something broke - fix it"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Adaptive"}),e.jsx("div",{className:"cell",children:"Update software for new environment changes"}),e.jsx("div",{className:"cell",children:"World changed - adapt"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Perfective"}),e.jsx("div",{className:"cell",children:"Improve performance, usability, and value"}),e.jsx("div",{className:"cell",children:"Improve it"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Preventive"}),e.jsx("div",{className:"cell",children:"Reduce future risk by strengthening internals"}),e.jsx("div",{className:"cell",children:"Prevent it"})]})]}),e.jsx("p",{className:"note",children:'No short forms are required here. Only "OS" was used once and expanded as Operating System.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Corrective fixes bugs, adaptive keeps compatibility, perfective improves value, preventive reduces future risks."})]})]})})]})},Ff={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        .callout {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .callTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .callText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            border-radius: 16px;
            padding: 12px;
        }

        .bTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},Wf=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"ethicsAndProfessionalPractice",title:"Ethics and Professional Practice",sub:"Software ethics, data privacy, licensing basics, and open source vs proprietary with practical examples."}),[]);return e.jsxs(Ff.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Professionalism"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(xn,{})}),e.jsx("h3",{className:"h3",children:"Software ethics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Ethics"})," means doing the right thing even when it is legal to do something harmful. In software, ethics is about how your product affects users, society, safety, and trust."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Honesty"}),e.jsxs("div",{className:"v",children:["Do not hide important behavior.",e.jsx("span",{className:"small",children:"Example: Do not silently collect contacts or location without clear user consent."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Safety"}),e.jsxs("div",{className:"v",children:["Avoid designs that can harm users.",e.jsx("span",{className:"small",children:"Example: A medical app must not show wrong dosage due to rounding or UI bugs."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Fairness"}),e.jsxs("div",{className:"v",children:["Avoid discrimination and biased outcomes.",e.jsx("span",{className:"small",children:"Example: A hiring filter should not reject candidates unfairly due to biased training data."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Respect"}),e.jsxs("div",{className:"v",children:["Treat user time, money, and data as valuable.",e.jsx("span",{className:"small",children:"Example: Avoid dark patterns like misleading buttons or hidden subscriptions."})]})]})]}),e.jsx("p",{className:"note",children:"Engineering ethics is basically: build trust, reduce harm, and be transparent about risk."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(uu,{})}),e.jsx("h3",{className:"h3",children:"Data privacy"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Privacy"})," means a user should control how their personal information is collected, used, stored, and shared. Privacy is different from security."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Privacy"}),e.jsxs("div",{className:"v",children:["Rules about what data you should collect and why.",e.jsx("span",{className:"small",children:"Example: Collect only what is needed for the feature."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Security"}),e.jsxs("div",{className:"v",children:["Protection from unauthorized access or leaks.",e.jsx("span",{className:"small",children:"Example: Encrypt data and restrict database access."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Personal data"})," - information that can identify a person.",e.jsx("span",{className:"small",children:"Example: name, phone number, email, address, device ID, location."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consent"})," - user clearly agrees after understanding what will happen."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Data minimization"})," - collect the minimum data required."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Retention"})," - how long you keep data before deleting it."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Anonymization"})," - removing identity from data so it cannot be linked back."]})]}),e.jsx("p",{className:"note",children:'Privacy habit: ask "do we need this data" before you store it.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(uo,{})}),e.jsx("h3",{className:"h3",children:"Licensing basics"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"license"})," is the legal permission that defines how software can be used, copied, modified, and shared. Without a license, you do not have permission to use or redistribute code."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Copyright"})," - the default legal ownership of code written by someone."]}),e.jsxs("li",{children:[e.jsx("b",{children:"License terms"})," - rules that tell you what is allowed."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Attribution"})," - giving credit as required by the license."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Distribution"})," - sharing the software with others."]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("div",{className:"callTitle",children:"Practical example"}),e.jsx("div",{className:"callText",children:"If you copy a library into your project, you must follow its license. Some licenses require you to include the license text in your app or repo. Some require you to open source your changes if you distribute the software."})]}),e.jsx("p",{className:"note",children:"Always check the license before using a library in production."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gs,{})}),e.jsx("h3",{className:"h3",children:"Open source vs proprietary"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Open source"})," means the source code is publicly available and can be used under an open source license. ",e.jsx("b",{children:"Proprietary"})," means the code is owned privately and usage is restricted by the owner."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Open source"}),e.jsxs("div",{className:"v",children:["Code is visible, community can contribute, reuse depends on license.",e.jsx("span",{className:"small",children:"Example: Linux kernel, many libraries on GitHub."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Proprietary"}),e.jsxs("div",{className:"v",children:["Code is closed, usage is controlled, typically paid or limited.",e.jsx("span",{className:"small",children:"Example: many commercial apps and enterprise tools."})]})]})]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"bTitle",children:"Pros of open source"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Transparency and auditability"}),e.jsx("li",{children:"Community improvements and bug fixes"}),e.jsx("li",{children:"Often lower cost to start"}),e.jsx("li",{children:"Less vendor lock-in"})]})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"bTitle",children:"Pros of proprietary"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Clear ownership and support contracts"}),e.jsx("li",{children:"Centralized roadmap and control"}),e.jsx("li",{children:"Often optimized user experience"}),e.jsx("li",{children:"Legal clarity for enterprise usage"})]})]})]}),e.jsx("p",{className:"note",children:"Open source does not mean free of rules. It means the rules are written in the license."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Ethics is about reducing harm and building trust. Privacy is about correct data handling. Licenses define what you are allowed to do with code. Open source and proprietary are ownership models, both with rules and tradeoffs."})]})]})})]})},Bf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    135deg,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 34%, transparent) 1px,
                    transparent 1px,
                    transparent 12px
                );
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .flow {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: flex;
            gap: 10px;
            align-items: flex-start;

            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .tag {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            flex: 0 0 auto;
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
            margin-bottom: 2px;
        }

        .d {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .code {
            margin-top: 10px;
            border-radius: 16px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            overflow: hidden;
        }

        .monoTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .mono {
            padding: 12px;
            margin: 0;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.8px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},$f=()=>{const[a,c]=K.useState(!1),o=K.useMemo(()=>({id:"agileDeepDive",title:"Agile Deep Dive",sub:"Scrum roles, sprint cycle, backlog, Kanban, standup, and retrospective with meanings and examples."}),[]);return e.jsxs(Bf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Agile"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(We,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"What is Agile"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Agile"})," is a way of building software in small steps with frequent feedback. Instead of doing a big plan and shipping once, Agile teams deliver smaller improvements regularly, learn from users, and adjust quickly."]}),e.jsx("p",{className:"p",children:"Example: Instead of building a full e-commerce app for 6 months and launching at the end, an Agile team ships a basic checkout first, then adds coupons, then adds order tracking, then improves performance."}),e.jsx("p",{className:"note",children:"Agile is a mindset. Scrum and Kanban are common frameworks used to apply it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(gn,{})}),e.jsx("h3",{className:"h3",children:"Scrum roles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scrum"})," is a framework for Agile work. It defines roles, events, and artifacts so teams can deliver in fixed time cycles called sprints."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Product Owner"}),e.jsxs("div",{className:"v",children:["Decides what to build next based on business value. Owns prioritization.",e.jsx("span",{className:"small",children:'Example: chooses that "password reset" is more important than "dark mode"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Scrum Master"}),e.jsxs("div",{className:"v",children:["Helps the team follow Scrum, removes blockers, and improves process. Not a manager.",e.jsx("span",{className:"small",children:"Example: resolves delays, improves meetings, clears dependencies"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Development Team"}),e.jsxs("div",{className:"v",children:["Cross-functional people who build the product. Usually developers, testers, designers, etc.",e.jsx("span",{className:"small",children:"Example: builds feature, tests it, reviews it, ships it"})]})]})]}),e.jsx("p",{className:"note",children:"Scrum roles ensure clarity - who decides priorities, who supports the process, and who builds."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ro,{})}),e.jsx("h3",{className:"h3",children:"Sprint cycle"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"sprint"})," is a fixed time box where the team commits to a small set of work and finishes it. Most sprints are 1 to 2 weeks."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Sprint Planning"}),e.jsxs("div",{className:"d",children:["Team selects work from backlog and defines sprint goal.",e.jsx("span",{className:"small",children:'Example goal: "Deliver login and signup flows"'})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Daily Standup"}),e.jsx("div",{className:"d",children:"Short daily sync to track progress and blockers."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Build and Test"}),e.jsx("div",{className:"d",children:"Implement tasks, review code, test features, and integrate."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Sprint Review"}),e.jsx("div",{className:"d",children:"Demo completed work to stakeholders and get feedback."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Retrospective"}),e.jsx("div",{className:"d",children:"Team reflects on what went well and what to improve next sprint."})]})]})]}),e.jsx("p",{className:"note",children:"Sprint cycle repeats. Feedback from review and retrospective affects next sprint."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(fn,{})}),e.jsx("h3",{className:"h3",children:"Backlog"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"backlog"})," is a prioritized list of work. It contains everything that could be built: features, improvements, bugs, and technical tasks."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Product Backlog"}),e.jsxs("div",{className:"v",children:["Master list of all planned work. Owned and prioritized by Product Owner.",e.jsx("span",{className:"small",children:'Example items: "Add wishlist", "Fix slow search", "Improve checkout"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Sprint Backlog"}),e.jsxs("div",{className:"v",children:["The subset of backlog items chosen for the sprint. Owned by the team.",e.jsx("span",{className:"small",children:'Example: "Wishlist UI", "Wishlist API", "Wishlist tests"'})]})]})]}),e.jsxs("p",{className:"p",children:["Backlog items are often written as"," ",e.jsx("b",{children:"user stories"}),". A user story describes value from user perspective."]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"monoTitle",children:"Example user story"}),e.jsx("pre",{className:"mono",children:"As a user, I want to reset my password so I can regain access to my account."})]}),e.jsx("p",{className:"note",children:"Backlog grooming or refinement means regularly cleaning, rewriting, splitting, and re-prioritizing backlog items."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Lm,{})}),e.jsx("h3",{className:"h3",children:"Kanban"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Kanban"})," is an Agile method focused on continuous flow instead of fixed sprints. Work moves through visible stages on a board."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"To Do"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"In Progress"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Review"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Done"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"WIP limit"})," means Work In Progress limit. It restricts how many tasks can be in progress at once."]}),e.jsx("li",{children:"Focus is to reduce waiting time and deliver continuously."})]}),e.jsx("p",{className:"note",children:"Kanban is great for support teams, maintenance work, and continuous delivery pipelines."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Bm,{})}),e.jsx("h3",{className:"h3",children:"Standup"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"standup"})," is a short daily meeting. It is called standup because it is meant to be quick. Main goal is alignment and blocker visibility."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What I did"}),e.jsx("div",{className:"v",children:"Share progress since last standup."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What I will do"}),e.jsx("div",{className:"v",children:"Share plan for today."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Blockers"}),e.jsxs("div",{className:"v",children:["Anything preventing progress.",e.jsx("span",{className:"small",children:"Example: waiting for API endpoint, access issues, unclear requirement"})]})]})]}),e.jsx("p",{className:"note",children:"Standup is not a status report to a manager. It is for the team to coordinate."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ro,{})}),e.jsx("h3",{className:"h3",children:"Retrospective"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"retrospective"})," is a meeting after the sprint where the team reflects on process and collaboration. The goal is continuous improvement, not blaming people."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What went well"}),e.jsxs("div",{className:"v",children:["Identify practices to keep.",e.jsx("span",{className:"small",children:"Example: faster code reviews, clear tickets, fewer merge conflicts"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What went wrong"}),e.jsxs("div",{className:"v",children:["Identify pain points.",e.jsx("span",{className:"small",children:"Example: unclear requirements, too many tasks started at once"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Action items"}),e.jsxs("div",{className:"v",children:["Concrete improvements for next sprint.",e.jsx("span",{className:"small",children:"Example: add definition of done checklist, set WIP limits, improve ticket templates"})]})]})]}),e.jsx("p",{className:"note",children:"A good retrospective always ends with 1 to 3 small action items that the team actually follows."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Scrum is sprint-based delivery with defined roles. Kanban is continuous flow with visual stages and WIP limits. Standup shows progress and blockers. Retrospective improves the process."})]})]})})]})},Uf=()=>e.jsxs(Hl.Wrapper,{children:[e.jsx(Hl.Header,{children:e.jsx(Jm,{})}),e.jsxs(Hl.Main,{children:[e.jsxs("div",{className:"contentWrapper",children:[e.jsx(nf,{}),e.jsx(af,{}),e.jsx(of,{}),e.jsx(df,{}),e.jsx(uf,{}),e.jsx(xf,{}),e.jsx(ff,{}),e.jsx(vf,{}),e.jsx(jf,{}),e.jsx(Nf,{}),e.jsx(kf,{}),e.jsx(Cf,{}),e.jsx(Ef,{}),e.jsx(zf,{}),e.jsx(Rf,{}),e.jsx(Af,{}),e.jsx(Mf,{}),e.jsx(Of,{}),e.jsx(Wf,{}),e.jsx($f,{})]}),e.jsx("div",{className:"footerWrapper",children:e.jsx(rf,{})})]})]});yx.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(Uf,{})}));
