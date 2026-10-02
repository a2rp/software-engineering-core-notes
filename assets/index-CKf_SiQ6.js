(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const C of j.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&p(C)}).observe(document,{childList:!0,subtree:!0});function o(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(g){if(g.ep)return;g.ep=!0;const j=o(g);fetch(g.href,j)}})();function lx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Rl={exports:{}},rt={},Al={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function ox(){if(tp)return se;tp=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=O&&m[O]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,G={};function X(m,b,K){this.props=m,this.context=b,this.refs=G,this.updater=K||Q}X.prototype.isReactComponent={},X.prototype.setState=function(m,b){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,b,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function he(){}he.prototype=X.prototype;function le(m,b,K){this.props=m,this.context=b,this.refs=G,this.updater=K||Q}var ae=le.prototype=new he;ae.constructor=le,te(ae,X.prototype),ae.isPureReactComponent=!0;var ee=Array.isArray,pe=Object.prototype.hasOwnProperty,Y={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function ze(m,b,K){var Z,ne={},re=null,ue=null;if(b!=null)for(Z in b.ref!==void 0&&(ue=b.ref),b.key!==void 0&&(re=""+b.key),b)pe.call(b,Z)&&!$.hasOwnProperty(Z)&&(ne[Z]=b[Z]);var ie=arguments.length-2;if(ie===1)ne.children=K;else if(1<ie){for(var ce=Array(ie),Oe=0;Oe<ie;Oe++)ce[Oe]=arguments[Oe+2];ne.children=ce}if(m&&m.defaultProps)for(Z in ie=m.defaultProps,ie)ne[Z]===void 0&&(ne[Z]=ie[Z]);return{$$typeof:a,type:m,key:re,ref:ue,props:ne,_owner:Y.current}}function nr(m,b){return{$$typeof:a,type:m.type,key:b,ref:m.ref,props:m.props,_owner:m._owner}}function jr(m){return typeof m=="object"&&m!==null&&m.$$typeof===a}function Mr(m){var b={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(K){return b[K]})}var pr=/\/+/g;function Ge(m,b){return typeof m=="object"&&m!==null&&m.key!=null?Mr(""+m.key):b.toString(36)}function tr(m,b,K,Z,ne){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case a:case c:ue=!0}}if(ue)return ue=m,ne=ne(ue),m=Z===""?"."+Ge(ue,0):Z,ee(ne)?(K="",m!=null&&(K=m.replace(pr,"$&/")+"/"),tr(ne,b,K,"",function(Oe){return Oe})):ne!=null&&(jr(ne)&&(ne=nr(ne,K+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(pr,"$&/")+"/")+m)),b.push(ne)),1;if(ue=0,Z=Z===""?".":Z+":",ee(m))for(var ie=0;ie<m.length;ie++){re=m[ie];var ce=Z+Ge(re,ie);ue+=tr(re,b,K,ce,ne)}else if(ce=F(m),typeof ce=="function")for(m=ce.call(m),ie=0;!(re=m.next()).done;)re=re.value,ce=Z+Ge(re,ie++),ue+=tr(re,b,K,ce,ne);else if(re==="object")throw b=String(m),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ue}function ur(m,b,K){if(m==null)return m;var Z=[],ne=0;return tr(m,Z,"","",function(re){return b.call(K,re,ne++)}),Z}function Be(m){if(m._status===-1){var b=m._result;b=b(),b.then(function(K){(m._status===0||m._status===-1)&&(m._status=1,m._result=K)},function(K){(m._status===0||m._status===-1)&&(m._status=2,m._result=K)}),m._status===-1&&(m._status=0,m._result=b)}if(m._status===1)return m._result.default;throw m._result}var ge={current:null},E={transition:null},D={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:E,ReactCurrentOwner:Y};function I(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:ur,forEach:function(m,b,K){ur(m,function(){b.apply(this,arguments)},K)},count:function(m){var b=0;return ur(m,function(){b++}),b},toArray:function(m){return ur(m,function(b){return b})||[]},only:function(m){if(!jr(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},se.Component=X,se.Fragment=o,se.Profiler=g,se.PureComponent=le,se.StrictMode=p,se.Suspense=T,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,se.act=I,se.cloneElement=function(m,b,K){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var Z=te({},m.props),ne=m.key,re=m.ref,ue=m._owner;if(b!=null){if(b.ref!==void 0&&(re=b.ref,ue=Y.current),b.key!==void 0&&(ne=""+b.key),m.type&&m.type.defaultProps)var ie=m.type.defaultProps;for(ce in b)pe.call(b,ce)&&!$.hasOwnProperty(ce)&&(Z[ce]=b[ce]===void 0&&ie!==void 0?ie[ce]:b[ce])}var ce=arguments.length-2;if(ce===1)Z.children=K;else if(1<ce){ie=Array(ce);for(var Oe=0;Oe<ce;Oe++)ie[Oe]=arguments[Oe+2];Z.children=ie}return{$$typeof:a,type:m.type,key:ne,ref:re,props:Z,_owner:ue}},se.createContext=function(m){return m={$$typeof:C,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:j,_context:m},m.Consumer=m},se.createElement=ze,se.createFactory=function(m){var b=ze.bind(null,m);return b.type=m,b},se.createRef=function(){return{current:null}},se.forwardRef=function(m){return{$$typeof:R,render:m}},se.isValidElement=jr,se.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:Be}},se.memo=function(m,b){return{$$typeof:q,type:m,compare:b===void 0?null:b}},se.startTransition=function(m){var b=E.transition;E.transition={};try{m()}finally{E.transition=b}},se.unstable_act=I,se.useCallback=function(m,b){return ge.current.useCallback(m,b)},se.useContext=function(m){return ge.current.useContext(m)},se.useDebugValue=function(){},se.useDeferredValue=function(m){return ge.current.useDeferredValue(m)},se.useEffect=function(m,b){return ge.current.useEffect(m,b)},se.useId=function(){return ge.current.useId()},se.useImperativeHandle=function(m,b,K){return ge.current.useImperativeHandle(m,b,K)},se.useInsertionEffect=function(m,b){return ge.current.useInsertionEffect(m,b)},se.useLayoutEffect=function(m,b){return ge.current.useLayoutEffect(m,b)},se.useMemo=function(m,b){return ge.current.useMemo(m,b)},se.useReducer=function(m,b,K){return ge.current.useReducer(m,b,K)},se.useRef=function(m){return ge.current.useRef(m)},se.useState=function(m){return ge.current.useState(m)},se.useSyncExternalStore=function(m,b,K){return ge.current.useSyncExternalStore(m,b,K)},se.useTransition=function(){return ge.current.useTransition()},se.version="18.3.1",se}var ap;function ro(){return ap||(ap=1,Al.exports=ox()),Al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function cx(){if(ip)return rt;ip=1;var a=ro(),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function C(R,T,q){var H,O={},F=null,Q=null;q!==void 0&&(F=""+q),T.key!==void 0&&(F=""+T.key),T.ref!==void 0&&(Q=T.ref);for(H in T)p.call(T,H)&&!j.hasOwnProperty(H)&&(O[H]=T[H]);if(R&&R.defaultProps)for(H in T=R.defaultProps,T)O[H]===void 0&&(O[H]=T[H]);return{$$typeof:c,type:R,key:F,ref:Q,props:O,_owner:g.current}}return rt.Fragment=o,rt.jsx=C,rt.jsxs=C,rt}var lp;function dx(){return lp||(lp=1,Rl.exports=cx()),Rl.exports}var e=dx(),va={},_l={exports:{}},rr={},Ml={exports:{}},Dl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function px(){return op||(op=1,(function(a){function c(E,D){var I=E.length;E.push(D);e:for(;0<I;){var m=I-1>>>1,b=E[m];if(0<g(b,D))E[m]=D,E[I]=b,I=m;else break e}}function o(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var D=E[0],I=E.pop();if(I!==D){E[0]=I;e:for(var m=0,b=E.length,K=b>>>1;m<K;){var Z=2*(m+1)-1,ne=E[Z],re=Z+1,ue=E[re];if(0>g(ne,I))re<b&&0>g(ue,ne)?(E[m]=ue,E[re]=I,m=re):(E[m]=ne,E[Z]=I,m=Z);else if(re<b&&0>g(ue,I))E[m]=ue,E[re]=I,m=re;else break e}}return D}function g(E,D){var I=E.sortIndex-D.sortIndex;return I!==0?I:E.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;a.unstable_now=function(){return j.now()}}else{var C=Date,R=C.now();a.unstable_now=function(){return C.now()-R}}var T=[],q=[],H=1,O=null,F=3,Q=!1,te=!1,G=!1,X=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(E){for(var D=o(q);D!==null;){if(D.callback===null)p(q);else if(D.startTime<=E)p(q),D.sortIndex=D.expirationTime,c(T,D);else break;D=o(q)}}function ee(E){if(G=!1,ae(E),!te)if(o(T)!==null)te=!0,Be(pe);else{var D=o(q);D!==null&&ge(ee,D.startTime-E)}}function pe(E,D){te=!1,G&&(G=!1,he(ze),ze=-1),Q=!0;var I=F;try{for(ae(D),O=o(T);O!==null&&(!(O.expirationTime>D)||E&&!Mr());){var m=O.callback;if(typeof m=="function"){O.callback=null,F=O.priorityLevel;var b=m(O.expirationTime<=D);D=a.unstable_now(),typeof b=="function"?O.callback=b:O===o(T)&&p(T),ae(D)}else p(T);O=o(T)}if(O!==null)var K=!0;else{var Z=o(q);Z!==null&&ge(ee,Z.startTime-D),K=!1}return K}finally{O=null,F=I,Q=!1}}var Y=!1,$=null,ze=-1,nr=5,jr=-1;function Mr(){return!(a.unstable_now()-jr<nr)}function pr(){if($!==null){var E=a.unstable_now();jr=E;var D=!0;try{D=$(!0,E)}finally{D?Ge():(Y=!1,$=null)}}else Y=!1}var Ge;if(typeof le=="function")Ge=function(){le(pr)};else if(typeof MessageChannel!="undefined"){var tr=new MessageChannel,ur=tr.port2;tr.port1.onmessage=pr,Ge=function(){ur.postMessage(null)}}else Ge=function(){X(pr,0)};function Be(E){$=E,Y||(Y=!0,Ge())}function ge(E,D){ze=X(function(){E(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(E){E.callback=null},a.unstable_continueExecution=function(){te||Q||(te=!0,Be(pe))},a.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nr=0<E?Math.floor(1e3/E):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return o(T)},a.unstable_next=function(E){switch(F){case 1:case 2:case 3:var D=3;break;default:D=F}var I=F;F=D;try{return E()}finally{F=I}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=F;F=E;try{return D()}finally{F=I}},a.unstable_scheduleCallback=function(E,D,I){var m=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?m+I:m):I=m,E){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=I+b,E={id:H++,callback:D,priorityLevel:E,startTime:I,expirationTime:b,sortIndex:-1},I>m?(E.sortIndex=I,c(q,E),o(T)===null&&E===o(q)&&(G?(he(ze),ze=-1):G=!0,ge(ee,I-m))):(E.sortIndex=b,c(T,E),te||Q||(te=!0,Be(pe))),E},a.unstable_shouldYield=Mr,a.unstable_wrapCallback=function(E){var D=F;return function(){var I=F;F=D;try{return E.apply(this,arguments)}finally{F=I}}}})(Dl)),Dl}var cp;function ux(){return cp||(cp=1,Ml.exports=px()),Ml.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function hx(){if(dp)return rr;dp=1;var a=ro(),c=ux();function o(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function j(r,s){C(r,s),C(r+"Capture",s)}function C(r,s){for(g[r]=s,r=0;r<s.length;r++)p.add(s[r])}var R=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},O={};function F(r){return T.call(O,r)?!0:T.call(H,r)?!1:q.test(r)?O[r]=!0:(H[r]=!0,!1)}function Q(r,s,n,t){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function te(r,s,n,t){if(s===null||typeof s=="undefined"||Q(r,s,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function G(r,s,n,t,i,l,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=r,this.type=s,this.sanitizeURL=l,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){X[r]=new G(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];X[s]=new G(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){X[r]=new G(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){X[r]=new G(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){X[r]=new G(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){X[r]=new G(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){X[r]=new G(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){X[r]=new G(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){X[r]=new G(r,5,!1,r.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function le(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(he,le);X[s]=new G(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(he,le);X[s]=new G(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(he,le);X[s]=new G(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){X[r]=new G(r,1,!1,r.toLowerCase(),null,!1,!1)}),X.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){X[r]=new G(r,1,!1,r.toLowerCase(),null,!0,!0)});function ae(r,s,n,t){var i=X.hasOwnProperty(s)?X[s]:null;(i!==null?i.type!==0:t||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(te(s,n,i,t)&&(n=null),t||i===null?F(s)&&(n===null?r.removeAttribute(s):r.setAttribute(s,""+n)):i.mustUseProperty?r[i.propertyName]=n===null?i.type===3?!1:"":n:(s=i.attributeName,t=i.attributeNamespace,n===null?r.removeAttribute(s):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,t?r.setAttributeNS(t,s,n):r.setAttribute(s,n))))}var ee=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),Y=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),ze=Symbol.for("react.strict_mode"),nr=Symbol.for("react.profiler"),jr=Symbol.for("react.provider"),Mr=Symbol.for("react.context"),pr=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),tr=Symbol.for("react.suspense_list"),ur=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),E=Symbol.iterator;function D(r){return r===null||typeof r!="object"?null:(r=E&&r[E]||r["@@iterator"],typeof r=="function"?r:null)}var I=Object.assign,m;function b(r){if(m===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);m=s&&s[1]||""}return`
`+m+r}var K=!1;function Z(r,s){if(!r||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var t=y}Reflect.construct(r,[],s)}else{try{s.call()}catch(y){t=y}r.call(s.prototype)}else{try{throw Error()}catch(y){t=y}r()}}catch(y){if(y&&t&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=t.stack.split(`
`),d=i.length-1,u=l.length-1;1<=d&&0<=u&&i[d]!==l[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==l[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==l[u]){var h=`
`+i[d].replace(" at new "," at ");return r.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",r.displayName)),h}while(1<=d&&0<=u);break}}}finally{K=!1,Error.prepareStackTrace=n}return(r=r?r.displayName||r.name:"")?b(r):""}function ne(r){switch(r.tag){case 5:return b(r.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return r=Z(r.type,!1),r;case 11:return r=Z(r.type.render,!1),r;case 1:return r=Z(r.type,!0),r;default:return""}}function re(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case $:return"Fragment";case Y:return"Portal";case nr:return"Profiler";case ze:return"StrictMode";case Ge:return"Suspense";case tr:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Mr:return(r.displayName||"Context")+".Consumer";case jr:return(r._context.displayName||"Context")+".Provider";case pr:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ur:return s=r.displayName||null,s!==null?s:re(r.type)||"Memo";case Be:s=r._payload,r=r._init;try{return re(r(s))}catch{}}return null}function ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(s);case 8:return s===ze?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ie(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ce(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Oe(r){var s=ce(r)?"checked":"value",n=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),t=""+r[s];if(!r.hasOwnProperty(s)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return i.call(this)},set:function(d){t=""+d,l.call(this,d)}}),Object.defineProperty(r,s,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Dr(r){r._valueTracker||(r._valueTracker=Oe(r))}function br(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var n=s.getValue(),t="";return r&&(t=ce(r)?r.checked?"true":"false":r.value),r=t,r!==n?(s.setValue(r),!0):!1}function ct(r){if(r=r||(typeof document!="undefined"?document:void 0),typeof r=="undefined")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wa(r,s){var n=s.checked;return I({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:r._wrapperState.initialChecked})}function po(r,s){var n=s.defaultValue==null?"":s.defaultValue,t=s.checked!=null?s.checked:s.defaultChecked;n=ie(s.value!=null?s.value:n),r._wrapperState={initialChecked:t,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function uo(r,s){s=s.checked,s!=null&&ae(r,"checked",s,!1)}function Ba(r,s){uo(r,s);var n=ie(s.value),t=s.type;if(n!=null)t==="number"?(n===0&&r.value===""||r.value!=n)&&(r.value=""+n):r.value!==""+n&&(r.value=""+n);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?$a(r,s.type,n):s.hasOwnProperty("defaultValue")&&$a(r,s.type,ie(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ho(r,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var t=s.type;if(!(t!=="submit"&&t!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,n||s===r.value||(r.value=s),r.defaultValue=s}n=r.name,n!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,n!==""&&(r.name=n)}function $a(r,s,n){(s!=="number"||ct(r.ownerDocument)!==r)&&(n==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+n&&(r.defaultValue=""+n))}var fn=Array.isArray;function Ls(r,s,n,t){if(r=r.options,s){s={};for(var i=0;i<n.length;i++)s["$"+n[i]]=!0;for(n=0;n<r.length;n++)i=s.hasOwnProperty("$"+r[n].value),r[n].selected!==i&&(r[n].selected=i),i&&t&&(r[n].defaultSelected=!0)}else{for(n=""+ie(n),s=null,i=0;i<r.length;i++){if(r[i].value===n){r[i].selected=!0,t&&(r[i].defaultSelected=!0);return}s!==null||r[i].disabled||(s=r[i])}s!==null&&(s.selected=!0)}}function Ua(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(o(91));return I({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function xo(r,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(o(92));if(fn(n)){if(1<n.length)throw Error(o(93));n=n[0]}s=n}s==null&&(s=""),n=s}r._wrapperState={initialValue:ie(n)}}function mo(r,s){var n=ie(s.value),t=ie(s.defaultValue);n!=null&&(n=""+n,n!==r.value&&(r.value=n),s.defaultValue==null&&r.defaultValue!==n&&(r.defaultValue=n)),t!=null&&(r.defaultValue=""+t)}function fo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function go(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?go(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var dt,vo=(function(r){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,n,t,i){MSApp.execUnsafeLocalFunction(function(){return r(s,n,t,i)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(dt=dt||document.createElement("div"),dt.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=dt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function gn(r,s){if(s){var n=r.firstChild;if(n&&n===r.lastChild&&n.nodeType===3){n.nodeValue=s;return}}r.textContent=s}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pu=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(r){pu.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),vn[s]=vn[r]})});function yo(r,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||vn.hasOwnProperty(r)&&vn[r]?(""+s).trim():s+"px"}function jo(r,s){r=r.style;for(var n in s)if(s.hasOwnProperty(n)){var t=n.indexOf("--")===0,i=yo(n,s[n],t);n==="float"&&(n="cssFloat"),t?r.setProperty(n,i):r[n]=i}}var uu=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(r,s){if(s){if(uu[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(o(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(o(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(o(61))}if(s.style!=null&&typeof s.style!="object")throw Error(o(62))}}function Ga(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function Qa(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ya=null,Rs=null,As=null;function bo(r){if(r=Wn(r)){if(typeof Ya!="function")throw Error(o(280));var s=r.stateNode;s&&(s=Rt(s),Ya(r.stateNode,r.type,s))}}function No(r){Rs?As?As.push(r):As=[r]:Rs=r}function wo(){if(Rs){var r=Rs,s=As;if(As=Rs=null,bo(r),s)for(r=0;r<s.length;r++)bo(s[r])}}function ko(r,s){return r(s)}function So(){}var Ka=!1;function Co(r,s,n){if(Ka)return r(s,n);Ka=!0;try{return ko(r,s,n)}finally{Ka=!1,(Rs!==null||As!==null)&&(So(),wo())}}function yn(r,s){var n=r.stateNode;if(n===null)return null;var t=Rt(n);if(t===null)return null;n=t[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break e;default:r=!1}if(r)return null;if(n&&typeof n!="function")throw Error(o(231,s,typeof n));return n}var Xa=!1;if(R)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Xa=!1}function hu(r,s,n,t,i,l,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(n,y)}catch(w){this.onError(w)}}var bn=!1,pt=null,ut=!1,Za=null,xu={onError:function(r){bn=!0,pt=r}};function mu(r,s,n,t,i,l,d,u,h){bn=!1,pt=null,hu.apply(xu,arguments)}function fu(r,s,n,t,i,l,d,u,h){if(mu.apply(this,arguments),bn){if(bn){var y=pt;bn=!1,pt=null}else throw Error(o(198));ut||(ut=!0,Za=y)}}function fs(r){var s=r,n=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(n=s.return),r=s.return;while(r)}return s.tag===3?n:null}function To(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Eo(r){if(fs(r)!==r)throw Error(o(188))}function gu(r){var s=r.alternate;if(!s){if(s=fs(r),s===null)throw Error(o(188));return s!==r?null:r}for(var n=r,t=s;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Eo(i),r;if(l===t)return Eo(i),s;l=l.sibling}throw Error(o(188))}if(n.return!==t.return)n=i,t=l;else{for(var d=!1,u=i.child;u;){if(u===n){d=!0,n=i,t=l;break}if(u===t){d=!0,t=i,n=l;break}u=u.sibling}if(!d){for(u=l.child;u;){if(u===n){d=!0,n=l,t=i;break}if(u===t){d=!0,t=l,n=i;break}u=u.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==t)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?r:s}function Io(r){return r=gu(r),r!==null?zo(r):null}function zo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=zo(r);if(s!==null)return s;r=r.sibling}return null}var Po=c.unstable_scheduleCallback,Lo=c.unstable_cancelCallback,vu=c.unstable_shouldYield,yu=c.unstable_requestPaint,Ce=c.unstable_now,ju=c.unstable_getCurrentPriorityLevel,Ja=c.unstable_ImmediatePriority,Ro=c.unstable_UserBlockingPriority,ht=c.unstable_NormalPriority,bu=c.unstable_LowPriority,Ao=c.unstable_IdlePriority,xt=null,zr=null;function Nu(r){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(xt,r,void 0,(r.current.flags&128)===128)}catch{}}var Nr=Math.clz32?Math.clz32:Su,wu=Math.log,ku=Math.LN2;function Su(r){return r>>>=0,r===0?32:31-(wu(r)/ku|0)|0}var mt=64,ft=4194304;function Nn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function gt(r,s){var n=r.pendingLanes;if(n===0)return 0;var t=0,i=r.suspendedLanes,l=r.pingedLanes,d=n&268435455;if(d!==0){var u=d&~i;u!==0?t=Nn(u):(l&=d,l!==0&&(t=Nn(l)))}else d=n&~i,d!==0?t=Nn(d):l!==0&&(t=Nn(l));if(t===0)return 0;if(s!==0&&s!==t&&(s&i)===0&&(i=t&-t,l=s&-s,i>=l||i===16&&(l&4194240)!==0))return s;if((t&4)!==0&&(t|=n&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=t;0<s;)n=31-Nr(s),i=1<<n,t|=r[n],s&=~i;return t}function Cu(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tu(r,s){for(var n=r.suspendedLanes,t=r.pingedLanes,i=r.expirationTimes,l=r.pendingLanes;0<l;){var d=31-Nr(l),u=1<<d,h=i[d];h===-1?((u&n)===0||(u&t)!==0)&&(i[d]=Cu(u,s)):h<=s&&(r.expiredLanes|=u),l&=~u}}function ei(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function _o(){var r=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),r}function ri(r){for(var s=[],n=0;31>n;n++)s.push(r);return s}function wn(r,s,n){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Nr(s),r[s]=n}function Eu(r,s){var n=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<n;){var i=31-Nr(n),l=1<<i;s[i]=0,t[i]=-1,r[i]=-1,n&=~l}}function si(r,s){var n=r.entangledLanes|=s;for(r=r.entanglements;n;){var t=31-Nr(n),i=1<<t;i&s|r[t]&s&&(r[t]|=s),n&=~i}}var me=0;function Mo(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Do,ni,Oo,Fo,Wo,ti=!1,vt=[],Yr=null,Kr=null,Xr=null,kn=new Map,Sn=new Map,Zr=[],Iu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(r,s){switch(r){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":kn.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function Cn(r,s,n,t,i,l){return r===null||r.nativeEvent!==l?(r={blockedOn:s,domEventName:n,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},s!==null&&(s=Wn(s),s!==null&&ni(s)),r):(r.eventSystemFlags|=t,s=r.targetContainers,i!==null&&s.indexOf(i)===-1&&s.push(i),r)}function zu(r,s,n,t,i){switch(s){case"focusin":return Yr=Cn(Yr,r,s,n,t,i),!0;case"dragenter":return Kr=Cn(Kr,r,s,n,t,i),!0;case"mouseover":return Xr=Cn(Xr,r,s,n,t,i),!0;case"pointerover":var l=i.pointerId;return kn.set(l,Cn(kn.get(l)||null,r,s,n,t,i)),!0;case"gotpointercapture":return l=i.pointerId,Sn.set(l,Cn(Sn.get(l)||null,r,s,n,t,i)),!0}return!1}function $o(r){var s=gs(r.target);if(s!==null){var n=fs(s);if(n!==null){if(s=n.tag,s===13){if(s=To(n),s!==null){r.blockedOn=s,Wo(r.priority,function(){Oo(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){r.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yt(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var n=ii(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(n===null){n=r.nativeEvent;var t=new n.constructor(n.type,n);qa=t,n.target.dispatchEvent(t),qa=null}else return s=Wn(n),s!==null&&ni(s),r.blockedOn=n,!1;s.shift()}return!0}function Uo(r,s,n){yt(r)&&n.delete(s)}function Pu(){ti=!1,Yr!==null&&yt(Yr)&&(Yr=null),Kr!==null&&yt(Kr)&&(Kr=null),Xr!==null&&yt(Xr)&&(Xr=null),kn.forEach(Uo),Sn.forEach(Uo)}function Tn(r,s){r.blockedOn===s&&(r.blockedOn=null,ti||(ti=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Pu)))}function En(r){function s(i){return Tn(i,r)}if(0<vt.length){Tn(vt[0],r);for(var n=1;n<vt.length;n++){var t=vt[n];t.blockedOn===r&&(t.blockedOn=null)}}for(Yr!==null&&Tn(Yr,r),Kr!==null&&Tn(Kr,r),Xr!==null&&Tn(Xr,r),kn.forEach(s),Sn.forEach(s),n=0;n<Zr.length;n++)t=Zr[n],t.blockedOn===r&&(t.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)$o(n),n.blockedOn===null&&Zr.shift()}var _s=ee.ReactCurrentBatchConfig,jt=!0;function Lu(r,s,n,t){var i=me,l=_s.transition;_s.transition=null;try{me=1,ai(r,s,n,t)}finally{me=i,_s.transition=l}}function Ru(r,s,n,t){var i=me,l=_s.transition;_s.transition=null;try{me=4,ai(r,s,n,t)}finally{me=i,_s.transition=l}}function ai(r,s,n,t){if(jt){var i=ii(r,s,n,t);if(i===null)wi(r,s,t,bt,n),Bo(r,t);else if(zu(i,r,s,n,t))t.stopPropagation();else if(Bo(r,t),s&4&&-1<Iu.indexOf(r)){for(;i!==null;){var l=Wn(i);if(l!==null&&Do(l),l=ii(r,s,n,t),l===null&&wi(r,s,t,bt,n),l===i)break;i=l}i!==null&&t.stopPropagation()}else wi(r,s,t,null,n)}}var bt=null;function ii(r,s,n,t){if(bt=null,r=Qa(t),r=gs(r),r!==null)if(s=fs(r),s===null)r=null;else if(n=s.tag,n===13){if(r=To(s),r!==null)return r;r=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return bt=r,null}function Vo(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case Ja:return 1;case Ro:return 4;case ht:case bu:return 16;case Ao:return 536870912;default:return 16}default:return 16}}var Jr=null,li=null,Nt=null;function Ho(){if(Nt)return Nt;var r,s=li,n=s.length,t,i="value"in Jr?Jr.value:Jr.textContent,l=i.length;for(r=0;r<n&&s[r]===i[r];r++);var d=n-r;for(t=1;t<=d&&s[n-t]===i[l-t];t++);return Nt=i.slice(r,1<t?1-t:void 0)}function wt(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function kt(){return!0}function Go(){return!1}function ar(r){function s(n,t,i,l,d){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var u in r)r.hasOwnProperty(u)&&(n=r[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kt:Go,this.isPropagationStopped=Go,this}return I(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kt)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kt)},persist:function(){},isPersistent:kt}),s}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=ar(Ms),In=I({},Ms,{view:0,detail:0}),Au=ar(In),ci,di,zn,St=I({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==zn&&(zn&&r.type==="mousemove"?(ci=r.screenX-zn.screenX,di=r.screenY-zn.screenY):di=ci=0,zn=r),ci)},movementY:function(r){return"movementY"in r?r.movementY:di}}),qo=ar(St),_u=I({},St,{dataTransfer:0}),Mu=ar(_u),Du=I({},In,{relatedTarget:0}),pi=ar(Du),Ou=I({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Fu=ar(Ou),Wu=I({},Ms,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bu=ar(Wu),$u=I({},Ms,{data:0}),Qo=ar($u),Uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Hu[r])?!!s[r]:!1}function ui(){return Gu}var qu=I({},In,{key:function(r){if(r.key){var s=Uu[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=wt(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Vu[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(r){return r.type==="keypress"?wt(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?wt(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Qu=ar(qu),Yu=I({},St,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=ar(Yu),Ku=I({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),Xu=ar(Ku),Zu=I({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=ar(Zu),eh=I({},St,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=ar(eh),sh=[9,13,27,32],hi=R&&"CompositionEvent"in window,Pn=null;R&&"documentMode"in document&&(Pn=document.documentMode);var nh=R&&"TextEvent"in window&&!Pn,Ko=R&&(!hi||Pn&&8<Pn&&11>=Pn),Xo=" ",Zo=!1;function Jo(r,s){switch(r){case"keyup":return sh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ds=!1;function th(r,s){switch(r){case"compositionend":return ec(s);case"keypress":return s.which!==32?null:(Zo=!0,Xo);case"textInput":return r=s.data,r===Xo&&Zo?null:r;default:return null}}function ah(r,s){if(Ds)return r==="compositionend"||!hi&&Jo(r,s)?(r=Ho(),Nt=li=Jr=null,Ds=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ko&&s.locale!=="ko"?null:s.data;default:return null}}var ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!ih[r.type]:s==="textarea"}function sc(r,s,n,t){No(t),s=zt(s,"onChange"),0<s.length&&(n=new oi("onChange","change",null,n,t),r.push({event:n,listeners:s}))}var Ln=null,Rn=null;function lh(r){jc(r,0)}function Ct(r){var s=$s(r);if(br(s))return r}function oh(r,s){if(r==="change")return s}var nc=!1;if(R){var xi;if(R){var mi="oninput"in document;if(!mi){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),mi=typeof tc.oninput=="function"}xi=mi}else xi=!1;nc=xi&&(!document.documentMode||9<document.documentMode)}function ac(){Ln&&(Ln.detachEvent("onpropertychange",ic),Rn=Ln=null)}function ic(r){if(r.propertyName==="value"&&Ct(Rn)){var s=[];sc(s,Rn,r,Qa(r)),Co(lh,s)}}function ch(r,s,n){r==="focusin"?(ac(),Ln=s,Rn=n,Ln.attachEvent("onpropertychange",ic)):r==="focusout"&&ac()}function dh(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ct(Rn)}function ph(r,s){if(r==="click")return Ct(s)}function uh(r,s){if(r==="input"||r==="change")return Ct(s)}function hh(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var wr=typeof Object.is=="function"?Object.is:hh;function An(r,s){if(wr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var n=Object.keys(r),t=Object.keys(s);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!T.call(s,i)||!wr(r[i],s[i]))return!1}return!0}function lc(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function oc(r,s){var n=lc(r);r=0;for(var t;n;){if(n.nodeType===3){if(t=r+n.textContent.length,r<=s&&t>=s)return{node:n,offset:s-r};r=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lc(n)}}function cc(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?cc(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function dc(){for(var r=window,s=ct();s instanceof r.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)r=s.contentWindow;else break;s=ct(r.document)}return s}function fi(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function xh(r){var s=dc(),n=r.focusedElem,t=r.selectionRange;if(s!==n&&n&&n.ownerDocument&&cc(n.ownerDocument.documentElement,n)){if(t!==null&&fi(n)){if(s=t.start,r=t.end,r===void 0&&(r=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(r,n.value.length);else if(r=(s=n.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var i=n.textContent.length,l=Math.min(t.start,i);t=t.end===void 0?l:Math.min(t.end,i),!r.extend&&l>t&&(i=t,t=l,l=i),i=oc(n,l);var d=oc(n,t);i&&d&&(r.rangeCount!==1||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==d.node||r.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(i.node,i.offset),r.removeAllRanges(),l>t?(r.addRange(s),r.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),r.addRange(s)))}}for(s=[],r=n;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)r=s[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var mh=R&&"documentMode"in document&&11>=document.documentMode,Os=null,gi=null,_n=null,vi=!1;function pc(r,s,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||Os==null||Os!==ct(t)||(t=Os,"selectionStart"in t&&fi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),_n&&An(_n,t)||(_n=t,t=zt(gi,"onSelect"),0<t.length&&(s=new oi("onSelect","select",null,s,n),r.push({event:s,listeners:t}),s.target=Os)))}function Tt(r,s){var n={};return n[r.toLowerCase()]=s.toLowerCase(),n["Webkit"+r]="webkit"+s,n["Moz"+r]="moz"+s,n}var Fs={animationend:Tt("Animation","AnimationEnd"),animationiteration:Tt("Animation","AnimationIteration"),animationstart:Tt("Animation","AnimationStart"),transitionend:Tt("Transition","TransitionEnd")},yi={},uc={};R&&(uc=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Et(r){if(yi[r])return yi[r];if(!Fs[r])return r;var s=Fs[r],n;for(n in s)if(s.hasOwnProperty(n)&&n in uc)return yi[r]=s[n];return r}var hc=Et("animationend"),xc=Et("animationiteration"),mc=Et("animationstart"),fc=Et("transitionend"),gc=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function es(r,s){gc.set(r,s),j(s,[r])}for(var ji=0;ji<vc.length;ji++){var bi=vc[ji],fh=bi.toLowerCase(),gh=bi[0].toUpperCase()+bi.slice(1);es(fh,"on"+gh)}es(hc,"onAnimationEnd"),es(xc,"onAnimationIteration"),es(mc,"onAnimationStart"),es("dblclick","onDoubleClick"),es("focusin","onFocus"),es("focusout","onBlur"),es(fc,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function yc(r,s,n){var t=r.type||"unknown-event";r.currentTarget=n,fu(t,s,void 0,r),r.currentTarget=null}function jc(r,s){s=(s&4)!==0;for(var n=0;n<r.length;n++){var t=r[n],i=t.event;t=t.listeners;e:{var l=void 0;if(s)for(var d=t.length-1;0<=d;d--){var u=t[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==l&&i.isPropagationStopped())break e;yc(i,u,y),l=h}else for(d=0;d<t.length;d++){if(u=t[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==l&&i.isPropagationStopped())break e;yc(i,u,y),l=h}}}if(ut)throw r=Za,ut=!1,Za=null,r}function ye(r,s){var n=s[Ii];n===void 0&&(n=s[Ii]=new Set);var t=r+"__bubble";n.has(t)||(bc(s,r,2,!1),n.add(t))}function Ni(r,s,n){var t=0;s&&(t|=4),bc(n,r,t,s)}var It="_reactListening"+Math.random().toString(36).slice(2);function Dn(r){if(!r[It]){r[It]=!0,p.forEach(function(n){n!=="selectionchange"&&(vh.has(n)||Ni(n,!1,r),Ni(n,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[It]||(s[It]=!0,Ni("selectionchange",!1,s))}}function bc(r,s,n,t){switch(Vo(s)){case 1:var i=Lu;break;case 4:i=Ru;break;default:i=ai}n=i.bind(null,s,n,r),i=void 0,!Xa||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(i=!0),t?i!==void 0?r.addEventListener(s,n,{capture:!0,passive:i}):r.addEventListener(s,n,!0):i!==void 0?r.addEventListener(s,n,{passive:i}):r.addEventListener(s,n,!1)}function wi(r,s,n,t,i){var l=t;if((s&1)===0&&(s&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var u=t.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=t.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;u!==null;){if(d=gs(u),d===null)return;if(h=d.tag,h===5||h===6){t=l=d;continue e}u=u.parentNode}}t=t.return}Co(function(){var y=l,w=Qa(n),k=[];e:{var N=gc.get(r);if(N!==void 0){var z=oi,L=r;switch(r){case"keypress":if(wt(n)===0)break e;case"keydown":case"keyup":z=Qu;break;case"focusin":L="focus",z=pi;break;case"focusout":L="blur",z=pi;break;case"beforeblur":case"afterblur":z=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Xu;break;case hc:case xc:case mc:z=Fu;break;case fc:z=Ju;break;case"scroll":z=Au;break;case"wheel":z=rh;break;case"copy":case"cut":case"paste":z=Bu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Yo}var _=(s&4)!==0,Te=!_&&r==="scroll",f=_?N!==null?N+"Capture":null:N;_=[];for(var x=y,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=yn(x,f),S!=null&&_.push(On(x,S,v)))),Te)break;x=x.return}0<_.length&&(N=new z(N,L,null,n,w),k.push({event:N,listeners:_}))}}if((s&7)===0){e:{if(N=r==="mouseover"||r==="pointerover",z=r==="mouseout"||r==="pointerout",N&&n!==qa&&(L=n.relatedTarget||n.fromElement)&&(gs(L)||L[Or]))break e;if((z||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,z?(L=n.relatedTarget||n.toElement,z=y,L=L?gs(L):null,L!==null&&(Te=fs(L),L!==Te||L.tag!==5&&L.tag!==6)&&(L=null)):(z=null,L=y),z!==L)){if(_=qo,S="onMouseLeave",f="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(_=Yo,S="onPointerLeave",f="onPointerEnter",x="pointer"),Te=z==null?N:$s(z),v=L==null?N:$s(L),N=new _(S,x+"leave",z,n,w),N.target=Te,N.relatedTarget=v,S=null,gs(w)===y&&(_=new _(f,x+"enter",L,n,w),_.target=v,_.relatedTarget=Te,S=_),Te=S,z&&L)r:{for(_=z,f=L,x=0,v=_;v;v=Ws(v))x++;for(v=0,S=f;S;S=Ws(S))v++;for(;0<x-v;)_=Ws(_),x--;for(;0<v-x;)f=Ws(f),v--;for(;x--;){if(_===f||f!==null&&_===f.alternate)break r;_=Ws(_),f=Ws(f)}_=null}else _=null;z!==null&&Nc(k,N,z,_,!1),L!==null&&Te!==null&&Nc(k,Te,L,_,!0)}}e:{if(N=y?$s(y):window,z=N.nodeName&&N.nodeName.toLowerCase(),z==="select"||z==="input"&&N.type==="file")var M=oh;else if(rc(N))if(nc)M=uh;else{M=dh;var W=ch}else(z=N.nodeName)&&z.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(M=ph);if(M&&(M=M(r,y))){sc(k,M,n,w);break e}W&&W(r,N,y),r==="focusout"&&(W=N._wrapperState)&&W.controlled&&N.type==="number"&&$a(N,"number",N.value)}switch(W=y?$s(y):window,r){case"focusin":(rc(W)||W.contentEditable==="true")&&(Os=W,gi=y,_n=null);break;case"focusout":_n=gi=Os=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,pc(k,n,w);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":pc(k,n,w)}var B;if(hi)e:{switch(r){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Ds?Jo(r,n)&&(U="onCompositionEnd"):r==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Ko&&n.locale!=="ko"&&(Ds||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ds&&(B=Ho()):(Jr=w,li="value"in Jr?Jr.value:Jr.textContent,Ds=!0)),W=zt(y,U),0<W.length&&(U=new Qo(U,r,null,n,w),k.push({event:U,listeners:W}),B?U.data=B:(B=ec(n),B!==null&&(U.data=B)))),(B=nh?th(r,n):ah(r,n))&&(y=zt(y,"onBeforeInput"),0<y.length&&(w=new Qo("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=B))}jc(k,s)})}function On(r,s,n){return{instance:r,listener:s,currentTarget:n}}function zt(r,s){for(var n=s+"Capture",t=[];r!==null;){var i=r,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=yn(r,n),l!=null&&t.unshift(On(r,l,i)),l=yn(r,s),l!=null&&t.push(On(r,l,i))),r=r.return}return t}function Ws(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Nc(r,s,n,t,i){for(var l=s._reactName,d=[];n!==null&&n!==t;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===t)break;u.tag===5&&y!==null&&(u=y,i?(h=yn(n,l),h!=null&&d.unshift(On(n,h,u))):i||(h=yn(n,l),h!=null&&d.push(On(n,h,u)))),n=n.return}d.length!==0&&r.push({event:s,listeners:d})}var yh=/\r\n?/g,jh=/\u0000|\uFFFD/g;function wc(r){return(typeof r=="string"?r:""+r).replace(yh,`
`).replace(jh,"")}function Pt(r,s,n){if(s=wc(s),wc(r)!==s&&n)throw Error(o(425))}function Lt(){}var ki=null,Si=null;function Ci(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,Nh=typeof queueMicrotask=="function"?queueMicrotask:typeof kc!="undefined"?function(r){return kc.resolve(null).then(r).catch(wh)}:Ti;function wh(r){setTimeout(function(){throw r})}function Ei(r,s){var n=s,t=0;do{var i=n.nextSibling;if(r.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0){r.removeChild(i),En(s);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=i}while(n);En(s)}function rs(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Sc(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var n=r.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return r;s--}else n==="/$"&&s++}r=r.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Pr="__reactFiber$"+Bs,Fn="__reactProps$"+Bs,Or="__reactContainer$"+Bs,Ii="__reactEvents$"+Bs,kh="__reactListeners$"+Bs,Sh="__reactHandles$"+Bs;function gs(r){var s=r[Pr];if(s)return s;for(var n=r.parentNode;n;){if(s=n[Or]||n[Pr]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(r=Sc(r);r!==null;){if(n=r[Pr])return n;r=Sc(r)}return s}r=n,n=r.parentNode}return null}function Wn(r){return r=r[Pr]||r[Or],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function $s(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(o(33))}function Rt(r){return r[Fn]||null}var zi=[],Us=-1;function ss(r){return{current:r}}function je(r){0>Us||(r.current=zi[Us],zi[Us]=null,Us--)}function ve(r,s){Us++,zi[Us]=r.current,r.current=s}var ns={},$e=ss(ns),Ke=ss(!1),vs=ns;function Vs(r,s){var n=r.type.contextTypes;if(!n)return ns;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===s)return t.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=s[l];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(r){return r=r.childContextTypes,r!=null}function At(){je(Ke),je($e)}function Cc(r,s,n){if($e.current!==ns)throw Error(o(168));ve($e,s),ve(Ke,n)}function Tc(r,s,n){var t=r.stateNode;if(s=s.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var i in t)if(!(i in s))throw Error(o(108,ue(r)||"Unknown",i));return I({},n,t)}function _t(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ns,vs=$e.current,ve($e,r),ve(Ke,Ke.current),!0}function Ec(r,s,n){var t=r.stateNode;if(!t)throw Error(o(169));n?(r=Tc(r,s,vs),t.__reactInternalMemoizedMergedChildContext=r,je(Ke),je($e),ve($e,r)):je(Ke),ve(Ke,n)}var Fr=null,Mt=!1,Pi=!1;function Ic(r){Fr===null?Fr=[r]:Fr.push(r)}function Ch(r){Mt=!0,Ic(r)}function ts(){if(!Pi&&Fr!==null){Pi=!0;var r=0,s=me;try{var n=Fr;for(me=1;r<n.length;r++){var t=n[r];do t=t(!0);while(t!==null)}Fr=null,Mt=!1}catch(i){throw Fr!==null&&(Fr=Fr.slice(r+1)),Po(Ja,ts),i}finally{me=s,Pi=!1}}return null}var Hs=[],Gs=0,Dt=null,Ot=0,hr=[],xr=0,ys=null,Wr=1,Br="";function js(r,s){Hs[Gs++]=Ot,Hs[Gs++]=Dt,Dt=r,Ot=s}function zc(r,s,n){hr[xr++]=Wr,hr[xr++]=Br,hr[xr++]=ys,ys=r;var t=Wr;r=Br;var i=32-Nr(t)-1;t&=~(1<<i),n+=1;var l=32-Nr(s)+i;if(30<l){var d=i-i%5;l=(t&(1<<d)-1).toString(32),t>>=d,i-=d,Wr=1<<32-Nr(s)+i|n<<i|t,Br=l+r}else Wr=1<<l|n<<i|t,Br=r}function Li(r){r.return!==null&&(js(r,1),zc(r,1,0))}function Ri(r){for(;r===Dt;)Dt=Hs[--Gs],Hs[Gs]=null,Ot=Hs[--Gs],Hs[Gs]=null;for(;r===ys;)ys=hr[--xr],hr[xr]=null,Br=hr[--xr],hr[xr]=null,Wr=hr[--xr],hr[xr]=null}var ir=null,lr=null,Ne=!1,kr=null;function Pc(r,s){var n=vr(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=r,s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)}function Lc(r,s){switch(r.tag){case 5:var n=r.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ir=r,lr=rs(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ir=r,lr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=ys!==null?{id:Wr,overflow:Br}:null,r.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=vr(18,null,null,0),n.stateNode=s,n.return=r,r.child=n,ir=r,lr=null,!0):!1;default:return!1}}function Ai(r){return(r.mode&1)!==0&&(r.flags&128)===0}function _i(r){if(Ne){var s=lr;if(s){var n=s;if(!Lc(r,s)){if(Ai(r))throw Error(o(418));s=rs(n.nextSibling);var t=ir;s&&Lc(r,s)?Pc(t,n):(r.flags=r.flags&-4097|2,Ne=!1,ir=r)}}else{if(Ai(r))throw Error(o(418));r.flags=r.flags&-4097|2,Ne=!1,ir=r}}}function Rc(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ir=r}function Ft(r){if(r!==ir)return!1;if(!Ne)return Rc(r),Ne=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ci(r.type,r.memoizedProps)),s&&(s=lr)){if(Ai(r))throw Ac(),Error(o(418));for(;s;)Pc(r,s),s=rs(s.nextSibling)}if(Rc(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var n=r.data;if(n==="/$"){if(s===0){lr=rs(r.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}r=r.nextSibling}lr=null}}else lr=ir?rs(r.stateNode.nextSibling):null;return!0}function Ac(){for(var r=lr;r;)r=rs(r.nextSibling)}function qs(){lr=ir=null,Ne=!1}function Mi(r){kr===null?kr=[r]:kr.push(r)}var Th=ee.ReactCurrentBatchConfig;function Bn(r,s,n){if(r=n.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var t=n.stateNode}if(!t)throw Error(o(147,r));var i=t,l=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(d){var u=i.refs;d===null?delete u[l]:u[l]=d},s._stringRef=l,s)}if(typeof r!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,r))}return r}function Wt(r,s){throw r=Object.prototype.toString.call(s),Error(o(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function _c(r){var s=r._init;return s(r._payload)}function Mc(r){function s(f,x){if(r){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function n(f,x){if(!r)return null;for(;x!==null;)s(f,x),x=x.sibling;return null}function t(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function i(f,x){return f=us(f,x),f.index=0,f.sibling=null,f}function l(f,x,v){return f.index=v,r?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function d(f){return r&&f.alternate===null&&(f.flags|=2),f}function u(f,x,v,S){return x===null||x.tag!==6?(x=Tl(v,f.mode,S),x.return=f,x):(x=i(x,v),x.return=f,x)}function h(f,x,v,S){var M=v.type;return M===$?w(f,x,v.props.children,S,v.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Be&&_c(M)===x.type)?(S=i(x,v.props),S.ref=Bn(f,x,v),S.return=f,S):(S=da(v.type,v.key,v.props,null,f.mode,S),S.ref=Bn(f,x,v),S.return=f,S)}function y(f,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=El(v,f.mode,S),x.return=f,x):(x=i(x,v.children||[]),x.return=f,x)}function w(f,x,v,S,M){return x===null||x.tag!==7?(x=Es(v,f.mode,S,M),x.return=f,x):(x=i(x,v),x.return=f,x)}function k(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Tl(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return v=da(x.type,x.key,x.props,null,f.mode,v),v.ref=Bn(f,null,x),v.return=f,v;case Y:return x=El(x,f.mode,v),x.return=f,x;case Be:var S=x._init;return k(f,S(x._payload),v)}if(fn(x)||D(x))return x=Es(x,f.mode,v,null),x.return=f,x;Wt(f,x)}return null}function N(f,x,v,S){var M=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:u(f,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:return v.key===M?h(f,x,v,S):null;case Y:return v.key===M?y(f,x,v,S):null;case Be:return M=v._init,N(f,x,M(v._payload),S)}if(fn(v)||D(v))return M!==null?null:w(f,x,v,S,null);Wt(f,v)}return null}function z(f,x,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,u(x,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return f=f.get(S.key===null?v:S.key)||null,h(x,f,S,M);case Y:return f=f.get(S.key===null?v:S.key)||null,y(x,f,S,M);case Be:var W=S._init;return z(f,x,v,W(S._payload),M)}if(fn(S)||D(S))return f=f.get(v)||null,w(x,f,S,M,null);Wt(x,S)}return null}function L(f,x,v,S){for(var M=null,W=null,B=x,U=x=0,Me=null;B!==null&&U<v.length;U++){B.index>U?(Me=B,B=null):Me=B.sibling;var de=N(f,B,v[U],S);if(de===null){B===null&&(B=Me);break}r&&B&&de.alternate===null&&s(f,B),x=l(de,x,U),W===null?M=de:W.sibling=de,W=de,B=Me}if(U===v.length)return n(f,B),Ne&&js(f,U),M;if(B===null){for(;U<v.length;U++)B=k(f,v[U],S),B!==null&&(x=l(B,x,U),W===null?M=B:W.sibling=B,W=B);return Ne&&js(f,U),M}for(B=t(f,B);U<v.length;U++)Me=z(B,f,U,v[U],S),Me!==null&&(r&&Me.alternate!==null&&B.delete(Me.key===null?U:Me.key),x=l(Me,x,U),W===null?M=Me:W.sibling=Me,W=Me);return r&&B.forEach(function(hs){return s(f,hs)}),Ne&&js(f,U),M}function _(f,x,v,S){var M=D(v);if(typeof M!="function")throw Error(o(150));if(v=M.call(v),v==null)throw Error(o(151));for(var W=M=null,B=x,U=x=0,Me=null,de=v.next();B!==null&&!de.done;U++,de=v.next()){B.index>U?(Me=B,B=null):Me=B.sibling;var hs=N(f,B,de.value,S);if(hs===null){B===null&&(B=Me);break}r&&B&&hs.alternate===null&&s(f,B),x=l(hs,x,U),W===null?M=hs:W.sibling=hs,W=hs,B=Me}if(de.done)return n(f,B),Ne&&js(f,U),M;if(B===null){for(;!de.done;U++,de=v.next())de=k(f,de.value,S),de!==null&&(x=l(de,x,U),W===null?M=de:W.sibling=de,W=de);return Ne&&js(f,U),M}for(B=t(f,B);!de.done;U++,de=v.next())de=z(B,f,U,de.value,S),de!==null&&(r&&de.alternate!==null&&B.delete(de.key===null?U:de.key),x=l(de,x,U),W===null?M=de:W.sibling=de,W=de);return r&&B.forEach(function(ix){return s(f,ix)}),Ne&&js(f,U),M}function Te(f,x,v,S){if(typeof v=="object"&&v!==null&&v.type===$&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:e:{for(var M=v.key,W=x;W!==null;){if(W.key===M){if(M=v.type,M===$){if(W.tag===7){n(f,W.sibling),x=i(W,v.props.children),x.return=f,f=x;break e}}else if(W.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Be&&_c(M)===W.type){n(f,W.sibling),x=i(W,v.props),x.ref=Bn(f,W,v),x.return=f,f=x;break e}n(f,W);break}else s(f,W);W=W.sibling}v.type===$?(x=Es(v.props.children,f.mode,S,v.key),x.return=f,f=x):(S=da(v.type,v.key,v.props,null,f.mode,S),S.ref=Bn(f,x,v),S.return=f,f=S)}return d(f);case Y:e:{for(W=v.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(f,x.sibling),x=i(x,v.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else s(f,x);x=x.sibling}x=El(v,f.mode,S),x.return=f,f=x}return d(f);case Be:return W=v._init,Te(f,x,W(v._payload),S)}if(fn(v))return L(f,x,v,S);if(D(v))return _(f,x,v,S);Wt(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(f,x.sibling),x=i(x,v),x.return=f,f=x):(n(f,x),x=Tl(v,f.mode,S),x.return=f,f=x),d(f)):n(f,x)}return Te}var Qs=Mc(!0),Dc=Mc(!1),Bt=ss(null),$t=null,Ys=null,Di=null;function Oi(){Di=Ys=$t=null}function Fi(r){var s=Bt.current;je(Bt),r._currentValue=s}function Wi(r,s,n){for(;r!==null;){var t=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,t!==null&&(t.childLanes|=s)):t!==null&&(t.childLanes&s)!==s&&(t.childLanes|=s),r===n)break;r=r.return}}function Ks(r,s){$t=r,Di=Ys=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Ze=!0),r.firstContext=null)}function mr(r){var s=r._currentValue;if(Di!==r)if(r={context:r,memoizedValue:s,next:null},Ys===null){if($t===null)throw Error(o(308));Ys=r,$t.dependencies={lanes:0,firstContext:r}}else Ys=Ys.next=r;return s}var bs=null;function Bi(r){bs===null?bs=[r]:bs.push(r)}function Oc(r,s,n,t){var i=s.interleaved;return i===null?(n.next=n,Bi(s)):(n.next=i.next,i.next=n),s.interleaved=n,$r(r,t)}function $r(r,s){r.lanes|=s;var n=r.alternate;for(n!==null&&(n.lanes|=s),n=r,r=r.return;r!==null;)r.childLanes|=s,n=r.alternate,n!==null&&(n.childLanes|=s),n=r,r=r.return;return n.tag===3?n.stateNode:null}var as=!1;function $i(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ur(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function is(r,s,n){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,(oe&2)!==0){var i=t.pending;return i===null?s.next=s:(s.next=i.next,i.next=s),t.pending=s,$r(r,n)}return i=t.interleaved,i===null?(s.next=s,Bi(t)):(s.next=i.next,i.next=s),t.interleaved=s,$r(r,n)}function Ut(r,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var t=s.lanes;t&=r.pendingLanes,n|=t,s.lanes=n,si(r,n)}}function Wc(r,s){var n=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=d:l=l.next=d,n=n.next}while(n!==null);l===null?i=l=s:l=l.next=s}else i=l=s;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,effects:t.effects},r.updateQueue=n;return}r=n.lastBaseUpdate,r===null?n.firstBaseUpdate=s:r.next=s,n.lastBaseUpdate=s}function Vt(r,s,n,t){var i=r.updateQueue;as=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?l=y:d.next=y,d=h;var w=r.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(l!==null){var k=i.baseState;d=0,w=y=h=null,u=l;do{var N=u.lane,z=u.eventTime;if((t&N)===N){w!==null&&(w=w.next={eventTime:z,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=r,_=u;switch(N=s,z=n,_.tag){case 1:if(L=_.payload,typeof L=="function"){k=L.call(z,k,N);break e}k=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=_.payload,N=typeof L=="function"?L.call(z,k,N):L,N==null)break e;k=I({},k,N);break e;case 2:as=!0}}u.callback!==null&&u.lane!==0&&(r.flags|=64,N=i.effects,N===null?i.effects=[u]:N.push(u))}else z={eventTime:z,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=z,h=k):w=w.next=z,d|=N;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(w===null&&(h=k),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,s=i.shared.interleaved,s!==null){i=s;do d|=i.lane,i=i.next;while(i!==s)}else l===null&&(i.shared.lanes=0);ks|=d,r.lanes=d,r.memoizedState=k}}function Bc(r,s,n){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var t=r[s],i=t.callback;if(i!==null){if(t.callback=null,t=n,typeof i!="function")throw Error(o(191,i));i.call(t)}}}var $n={},Lr=ss($n),Un=ss($n),Vn=ss($n);function Ns(r){if(r===$n)throw Error(o(174));return r}function Ui(r,s){switch(ve(Vn,s),ve(Un,r),ve(Lr,$n),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Va(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Va(s,r)}je(Lr),ve(Lr,s)}function Xs(){je(Lr),je(Un),je(Vn)}function $c(r){Ns(Vn.current);var s=Ns(Lr.current),n=Va(s,r.type);s!==n&&(ve(Un,r),ve(Lr,n))}function Vi(r){Un.current===r&&(je(Lr),je(Un))}var we=ss(0);function Ht(r){for(var s=r;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Hi=[];function Gi(){for(var r=0;r<Hi.length;r++)Hi[r]._workInProgressVersionPrimary=null;Hi.length=0}var Gt=ee.ReactCurrentDispatcher,qi=ee.ReactCurrentBatchConfig,ws=0,ke=null,Pe=null,Ae=null,qt=!1,Hn=!1,Gn=0,Eh=0;function Ue(){throw Error(o(321))}function Qi(r,s){if(s===null)return!1;for(var n=0;n<s.length&&n<r.length;n++)if(!wr(r[n],s[n]))return!1;return!0}function Yi(r,s,n,t,i,l){if(ws=l,ke=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Gt.current=r===null||r.memoizedState===null?Lh:Rh,r=n(t,i),Hn){l=0;do{if(Hn=!1,Gn=0,25<=l)throw Error(o(301));l+=1,Ae=Pe=null,s.updateQueue=null,Gt.current=Ah,r=n(t,i)}while(Hn)}if(Gt.current=Kt,s=Pe!==null&&Pe.next!==null,ws=0,Ae=Pe=ke=null,qt=!1,s)throw Error(o(300));return r}function Ki(){var r=Gn!==0;return Gn=0,r}function Rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ke.memoizedState=Ae=r:Ae=Ae.next=r,Ae}function fr(){if(Pe===null){var r=ke.alternate;r=r!==null?r.memoizedState:null}else r=Pe.next;var s=Ae===null?ke.memoizedState:Ae.next;if(s!==null)Ae=s,Pe=r;else{if(r===null)throw Error(o(310));Pe=r,r={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ae===null?ke.memoizedState=Ae=r:Ae=Ae.next=r}return Ae}function qn(r,s){return typeof s=="function"?s(r):s}function Xi(r){var s=fr(),n=s.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=r;var t=Pe,i=t.baseQueue,l=n.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}t.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,t=t.baseState;var u=d=null,h=null,y=l;do{var w=y.lane;if((ws&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),t=y.hasEagerState?y.eagerState:r(t,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=t):h=h.next=k,ke.lanes|=w,ks|=w}y=y.next}while(y!==null&&y!==l);h===null?d=t:h.next=u,wr(t,s.memoizedState)||(Ze=!0),s.memoizedState=t,s.baseState=d,s.baseQueue=h,n.lastRenderedState=t}if(r=n.interleaved,r!==null){i=r;do l=i.lane,ke.lanes|=l,ks|=l,i=i.next;while(i!==r)}else i===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function Zi(r){var s=fr(),n=s.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=r;var t=n.dispatch,i=n.pending,l=s.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do l=r(l,d.action),d=d.next;while(d!==i);wr(l,s.memoizedState)||(Ze=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),n.lastRenderedState=l}return[l,t]}function Uc(){}function Vc(r,s){var n=ke,t=fr(),i=s(),l=!wr(t.memoizedState,i);if(l&&(t.memoizedState=i,Ze=!0),t=t.queue,Ji(qc.bind(null,n,t,r),[r]),t.getSnapshot!==s||l||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Qn(9,Gc.bind(null,n,t,i,s),void 0,null),_e===null)throw Error(o(349));(ws&30)!==0||Hc(n,s,i)}return i}function Hc(r,s,n){r.flags|=16384,r={getSnapshot:s,value:n},s=ke.updateQueue,s===null?(s={lastEffect:null,stores:null},ke.updateQueue=s,s.stores=[r]):(n=s.stores,n===null?s.stores=[r]:n.push(r))}function Gc(r,s,n,t){s.value=n,s.getSnapshot=t,Qc(s)&&Yc(r)}function qc(r,s,n){return n(function(){Qc(s)&&Yc(r)})}function Qc(r){var s=r.getSnapshot;r=r.value;try{var n=s();return!wr(r,n)}catch{return!0}}function Yc(r){var s=$r(r,1);s!==null&&Er(s,r,1,-1)}function Kc(r){var s=Rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:r},s.queue=r,r=r.dispatch=Ph.bind(null,ke,r),[s.memoizedState,r]}function Qn(r,s,n,t){return r={tag:r,create:s,destroy:n,deps:t,next:null},s=ke.updateQueue,s===null?(s={lastEffect:null,stores:null},ke.updateQueue=s,s.lastEffect=r.next=r):(n=s.lastEffect,n===null?s.lastEffect=r.next=r:(t=n.next,n.next=r,r.next=t,s.lastEffect=r)),r}function Xc(){return fr().memoizedState}function Qt(r,s,n,t){var i=Rr();ke.flags|=r,i.memoizedState=Qn(1|s,n,void 0,t===void 0?null:t)}function Yt(r,s,n,t){var i=fr();t=t===void 0?null:t;var l=void 0;if(Pe!==null){var d=Pe.memoizedState;if(l=d.destroy,t!==null&&Qi(t,d.deps)){i.memoizedState=Qn(s,n,l,t);return}}ke.flags|=r,i.memoizedState=Qn(1|s,n,l,t)}function Zc(r,s){return Qt(8390656,8,r,s)}function Ji(r,s){return Yt(2048,8,r,s)}function Jc(r,s){return Yt(4,2,r,s)}function ed(r,s){return Yt(4,4,r,s)}function rd(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function sd(r,s,n){return n=n!=null?n.concat([r]):null,Yt(4,4,rd.bind(null,s,r),n)}function el(){}function nd(r,s){var n=fr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Qi(s,t[1])?t[0]:(n.memoizedState=[r,s],r)}function td(r,s){var n=fr();s=s===void 0?null:s;var t=n.memoizedState;return t!==null&&s!==null&&Qi(s,t[1])?t[0]:(r=r(),n.memoizedState=[r,s],r)}function ad(r,s,n){return(ws&21)===0?(r.baseState&&(r.baseState=!1,Ze=!0),r.memoizedState=n):(wr(n,s)||(n=_o(),ke.lanes|=n,ks|=n,r.baseState=!0),s)}function Ih(r,s){var n=me;me=n!==0&&4>n?n:4,r(!0);var t=qi.transition;qi.transition={};try{r(!1),s()}finally{me=n,qi.transition=t}}function id(){return fr().memoizedState}function zh(r,s,n){var t=ds(r);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},ld(r))od(s,n);else if(n=Oc(r,s,n,t),n!==null){var i=Qe();Er(n,r,t,i),cd(n,s,t)}}function Ph(r,s,n){var t=ds(r),i={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(ld(r))od(s,i);else{var l=r.alternate;if(r.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var d=s.lastRenderedState,u=l(d,n);if(i.hasEagerState=!0,i.eagerState=u,wr(u,d)){var h=s.interleaved;h===null?(i.next=i,Bi(s)):(i.next=h.next,h.next=i),s.interleaved=i;return}}catch{}finally{}n=Oc(r,s,i,t),n!==null&&(i=Qe(),Er(n,r,t,i),cd(n,s,t))}}function ld(r){var s=r.alternate;return r===ke||s!==null&&s===ke}function od(r,s){Hn=qt=!0;var n=r.pending;n===null?s.next=s:(s.next=n.next,n.next=s),r.pending=s}function cd(r,s,n){if((n&4194240)!==0){var t=s.lanes;t&=r.pendingLanes,n|=t,s.lanes=n,si(r,n)}}var Kt={readContext:mr,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Lh={readContext:mr,useCallback:function(r,s){return Rr().memoizedState=[r,s===void 0?null:s],r},useContext:mr,useEffect:Zc,useImperativeHandle:function(r,s,n){return n=n!=null?n.concat([r]):null,Qt(4194308,4,rd.bind(null,s,r),n)},useLayoutEffect:function(r,s){return Qt(4194308,4,r,s)},useInsertionEffect:function(r,s){return Qt(4,2,r,s)},useMemo:function(r,s){var n=Rr();return s=s===void 0?null:s,r=r(),n.memoizedState=[r,s],r},useReducer:function(r,s,n){var t=Rr();return s=n!==void 0?n(s):s,t.memoizedState=t.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},t.queue=r,r=r.dispatch=zh.bind(null,ke,r),[t.memoizedState,r]},useRef:function(r){var s=Rr();return r={current:r},s.memoizedState=r},useState:Kc,useDebugValue:el,useDeferredValue:function(r){return Rr().memoizedState=r},useTransition:function(){var r=Kc(!1),s=r[0];return r=Ih.bind(null,r[1]),Rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,n){var t=ke,i=Rr();if(Ne){if(n===void 0)throw Error(o(407));n=n()}else{if(n=s(),_e===null)throw Error(o(349));(ws&30)!==0||Hc(t,s,n)}i.memoizedState=n;var l={value:n,getSnapshot:s};return i.queue=l,Zc(qc.bind(null,t,l,r),[r]),t.flags|=2048,Qn(9,Gc.bind(null,t,l,n,s),void 0,null),n},useId:function(){var r=Rr(),s=_e.identifierPrefix;if(Ne){var n=Br,t=Wr;n=(t&~(1<<32-Nr(t)-1)).toString(32)+n,s=":"+s+"R"+n,n=Gn++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=Eh++,s=":"+s+"r"+n.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Rh={readContext:mr,useCallback:nd,useContext:mr,useEffect:Ji,useImperativeHandle:sd,useInsertionEffect:Jc,useLayoutEffect:ed,useMemo:td,useReducer:Xi,useRef:Xc,useState:function(){return Xi(qn)},useDebugValue:el,useDeferredValue:function(r){var s=fr();return ad(s,Pe.memoizedState,r)},useTransition:function(){var r=Xi(qn)[0],s=fr().memoizedState;return[r,s]},useMutableSource:Uc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1},Ah={readContext:mr,useCallback:nd,useContext:mr,useEffect:Ji,useImperativeHandle:sd,useInsertionEffect:Jc,useLayoutEffect:ed,useMemo:td,useReducer:Zi,useRef:Xc,useState:function(){return Zi(qn)},useDebugValue:el,useDeferredValue:function(r){var s=fr();return Pe===null?s.memoizedState=r:ad(s,Pe.memoizedState,r)},useTransition:function(){var r=Zi(qn)[0],s=fr().memoizedState;return[r,s]},useMutableSource:Uc,useSyncExternalStore:Vc,useId:id,unstable_isNewReconciler:!1};function Sr(r,s){if(r&&r.defaultProps){s=I({},s),r=r.defaultProps;for(var n in r)s[n]===void 0&&(s[n]=r[n]);return s}return s}function rl(r,s,n,t){s=r.memoizedState,n=n(t,s),n=n==null?s:I({},s,n),r.memoizedState=n,r.lanes===0&&(r.updateQueue.baseState=n)}var Xt={isMounted:function(r){return(r=r._reactInternals)?fs(r)===r:!1},enqueueSetState:function(r,s,n){r=r._reactInternals;var t=Qe(),i=ds(r),l=Ur(t,i);l.payload=s,n!=null&&(l.callback=n),s=is(r,l,i),s!==null&&(Er(s,r,i,t),Ut(s,r,i))},enqueueReplaceState:function(r,s,n){r=r._reactInternals;var t=Qe(),i=ds(r),l=Ur(t,i);l.tag=1,l.payload=s,n!=null&&(l.callback=n),s=is(r,l,i),s!==null&&(Er(s,r,i,t),Ut(s,r,i))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var n=Qe(),t=ds(r),i=Ur(n,t);i.tag=2,s!=null&&(i.callback=s),s=is(r,i,t),s!==null&&(Er(s,r,t,n),Ut(s,r,t))}};function dd(r,s,n,t,i,l,d){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,l,d):s.prototype&&s.prototype.isPureReactComponent?!An(n,t)||!An(i,l):!0}function pd(r,s,n){var t=!1,i=ns,l=s.contextType;return typeof l=="object"&&l!==null?l=mr(l):(i=Xe(s)?vs:$e.current,t=s.contextTypes,l=(t=t!=null)?Vs(r,i):ns),s=new s(n,l),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xt,r.stateNode=s,s._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=l),s}function ud(r,s,n,t){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,t),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,t),s.state!==r&&Xt.enqueueReplaceState(s,s.state,null)}function sl(r,s,n,t){var i=r.stateNode;i.props=n,i.state=r.memoizedState,i.refs={},$i(r);var l=s.contextType;typeof l=="object"&&l!==null?i.context=mr(l):(l=Xe(s)?vs:$e.current,i.context=Vs(r,l)),i.state=r.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(rl(r,s,l,n),i.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Xt.enqueueReplaceState(i,i.state,null),Vt(r,n,i,t),i.state=r.memoizedState),typeof i.componentDidMount=="function"&&(r.flags|=4194308)}function Zs(r,s){try{var n="",t=s;do n+=ne(t),t=t.return;while(t);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:r,source:s,stack:i,digest:null}}function nl(r,s,n){return{value:r,source:null,stack:n!=null?n:null,digest:s!=null?s:null}}function tl(r,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function hd(r,s,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var t=s.value;return n.callback=function(){ta||(ta=!0,yl=t),tl(r,s)},n}function xd(r,s,n){n=Ur(-1,n),n.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var i=s.value;n.payload=function(){return t(i)},n.callback=function(){tl(r,s)}}var l=r.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){tl(r,s),typeof t!="function"&&(os===null?os=new Set([this]):os.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),n}function md(r,s,n){var t=r.pingCache;if(t===null){t=r.pingCache=new _h;var i=new Set;t.set(s,i)}else i=t.get(s),i===void 0&&(i=new Set,t.set(s,i));i.has(n)||(i.add(n),r=Yh.bind(null,r,s,n),s.then(r,r))}function fd(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function gd(r,s,n,t,i){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=Ur(-1,1),s.tag=2,is(n,s,1))),n.lanes|=1),r):(r.flags|=65536,r.lanes=i,r)}var Mh=ee.ReactCurrentOwner,Ze=!1;function qe(r,s,n,t){s.child=r===null?Dc(s,null,n,t):Qs(s,r.child,n,t)}function vd(r,s,n,t,i){n=n.render;var l=s.ref;return Ks(s,i),t=Yi(r,s,n,t,l,i),n=Ki(),r!==null&&!Ze?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~i,Vr(r,s,i)):(Ne&&n&&Li(s),s.flags|=1,qe(r,s,t,i),s.child)}function yd(r,s,n,t,i){if(r===null){var l=n.type;return typeof l=="function"&&!Cl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=l,jd(r,s,l,t,i)):(r=da(n.type,null,t,s,s.mode,i),r.ref=s.ref,r.return=s,s.child=r)}if(l=r.child,(r.lanes&i)===0){var d=l.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(d,t)&&r.ref===s.ref)return Vr(r,s,i)}return s.flags|=1,r=us(l,t),r.ref=s.ref,r.return=s,s.child=r}function jd(r,s,n,t,i){if(r!==null){var l=r.memoizedProps;if(An(l,t)&&r.ref===s.ref)if(Ze=!1,s.pendingProps=t=l,(r.lanes&i)!==0)(r.flags&131072)!==0&&(Ze=!0);else return s.lanes=r.lanes,Vr(r,s,i)}return al(r,s,n,t,i)}function bd(r,s,n){var t=s.pendingProps,i=t.children,l=r!==null?r.memoizedState:null;if(t.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(en,or),or|=n;else{if((n&1073741824)===0)return r=l!==null?l.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,ve(en,or),or|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:n,ve(en,or),or|=t}else l!==null?(t=l.baseLanes|n,s.memoizedState=null):t=n,ve(en,or),or|=t;return qe(r,s,i,n),s.child}function Nd(r,s){var n=s.ref;(r===null&&n!==null||r!==null&&r.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function al(r,s,n,t,i){var l=Xe(n)?vs:$e.current;return l=Vs(s,l),Ks(s,i),n=Yi(r,s,n,t,l,i),t=Ki(),r!==null&&!Ze?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~i,Vr(r,s,i)):(Ne&&t&&Li(s),s.flags|=1,qe(r,s,n,i),s.child)}function wd(r,s,n,t,i){if(Xe(n)){var l=!0;_t(s)}else l=!1;if(Ks(s,i),s.stateNode===null)Jt(r,s),pd(s,n,t),sl(s,n,t,i),t=!0;else if(r===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=mr(y):(y=Xe(n)?vs:$e.current,y=Vs(s,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==t||h!==y)&&ud(s,d,t,y),as=!1;var N=s.memoizedState;d.state=N,Vt(s,t,d,i),h=s.memoizedState,u!==t||N!==h||Ke.current||as?(typeof w=="function"&&(rl(s,n,w,t),h=s.memoizedState),(u=as||dd(s,n,u,t,N,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=t,s.memoizedState=h),d.props=t,d.state=h,d.context=y,t=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),t=!1)}else{d=s.stateNode,Fc(r,s),u=s.memoizedProps,y=s.type===s.elementType?u:Sr(s.type,u),d.props=y,k=s.pendingProps,N=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=mr(h):(h=Xe(n)?vs:$e.current,h=Vs(s,h));var z=n.getDerivedStateFromProps;(w=typeof z=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||N!==h)&&ud(s,d,t,h),as=!1,N=s.memoizedState,d.state=N,Vt(s,t,d,i);var L=s.memoizedState;u!==k||N!==L||Ke.current||as?(typeof z=="function"&&(rl(s,n,z,t),L=s.memoizedState),(y=as||dd(s,n,y,t,N,L,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(t,L,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(t,L,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=1024),s.memoizedProps=t,s.memoizedState=L),d.props=t,d.state=L,d.context=h,t=y):(typeof d.componentDidUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===r.memoizedProps&&N===r.memoizedState||(s.flags|=1024),t=!1)}return il(r,s,n,t,l,i)}function il(r,s,n,t,i,l){Nd(r,s);var d=(s.flags&128)!==0;if(!t&&!d)return i&&Ec(s,n,!1),Vr(r,s,l);t=s.stateNode,Mh.current=s;var u=d&&typeof n.getDerivedStateFromError!="function"?null:t.render();return s.flags|=1,r!==null&&d?(s.child=Qs(s,r.child,null,l),s.child=Qs(s,null,u,l)):qe(r,s,u,l),s.memoizedState=t.state,i&&Ec(s,n,!0),s.child}function kd(r){var s=r.stateNode;s.pendingContext?Cc(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Cc(r,s.context,!1),Ui(r,s.containerInfo)}function Sd(r,s,n,t,i){return qs(),Mi(i),s.flags|=256,qe(r,s,n,t),s.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function ol(r){return{baseLanes:r,cachePool:null,transitions:null}}function Cd(r,s,n){var t=s.pendingProps,i=we.current,l=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=r!==null&&r.memoizedState===null?!1:(i&2)!==0),u?(l=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(i|=1),ve(we,i&1),r===null)return _i(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=t.children,r=t.fallback,l?(t=s.mode,l=s.child,d={mode:"hidden",children:d},(t&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=pa(d,t,0,null),r=Es(r,t,n,null),l.return=s,r.return=s,l.sibling=r,s.child=l,s.child.memoizedState=ol(n),s.memoizedState=ll,r):cl(s,d));if(i=r.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Dh(r,s,d,t,u,i,n);if(l){l=t.fallback,d=s.mode,i=r.child,u=i.sibling;var h={mode:"hidden",children:t.children};return(d&1)===0&&s.child!==i?(t=s.child,t.childLanes=0,t.pendingProps=h,s.deletions=null):(t=us(i,h),t.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=us(u,l):(l=Es(l,d,n,null),l.flags|=2),l.return=s,t.return=s,t.sibling=l,s.child=t,t=l,l=s.child,d=r.child.memoizedState,d=d===null?ol(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=r.childLanes&~n,s.memoizedState=ll,t}return l=r.child,r=l.sibling,t=us(l,{mode:"visible",children:t.children}),(s.mode&1)===0&&(t.lanes=n),t.return=s,t.sibling=null,r!==null&&(n=s.deletions,n===null?(s.deletions=[r],s.flags|=16):n.push(r)),s.child=t,s.memoizedState=null,t}function cl(r,s){return s=pa({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Zt(r,s,n,t){return t!==null&&Mi(t),Qs(s,r.child,null,n),r=cl(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Dh(r,s,n,t,i,l,d){if(n)return s.flags&256?(s.flags&=-257,t=nl(Error(o(422))),Zt(r,s,d,t)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(l=t.fallback,i=s.mode,t=pa({mode:"visible",children:t.children},i,0,null),l=Es(l,i,d,null),l.flags|=2,t.return=s,l.return=s,t.sibling=l,s.child=t,(s.mode&1)!==0&&Qs(s,r.child,null,d),s.child.memoizedState=ol(d),s.memoizedState=ll,l);if((s.mode&1)===0)return Zt(r,s,d,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var u=t.dgst;return t=u,l=Error(o(419)),t=nl(l,t,void 0),Zt(r,s,d,t)}if(u=(d&r.childLanes)!==0,Ze||u){if(t=_e,t!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,$r(r,i),Er(t,r,i,-1))}return Sl(),t=nl(Error(o(421))),Zt(r,s,d,t)}return i.data==="$?"?(s.flags|=128,s.child=r.child,s=Kh.bind(null,r),i._reactRetry=s,null):(r=l.treeContext,lr=rs(i.nextSibling),ir=s,Ne=!0,kr=null,r!==null&&(hr[xr++]=Wr,hr[xr++]=Br,hr[xr++]=ys,Wr=r.id,Br=r.overflow,ys=s),s=cl(s,t.children),s.flags|=4096,s)}function Td(r,s,n){r.lanes|=s;var t=r.alternate;t!==null&&(t.lanes|=s),Wi(r.return,s,n)}function dl(r,s,n,t,i){var l=r.memoizedState;l===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=n,l.tailMode=i)}function Ed(r,s,n){var t=s.pendingProps,i=t.revealOrder,l=t.tail;if(qe(r,s,t.children,n),t=we.current,(t&2)!==0)t=t&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Td(r,n,s);else if(r.tag===19)Td(r,n,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(ve(we,t),(s.mode&1)===0)s.memoizedState=null;else switch(i){case"forwards":for(n=s.child,i=null;n!==null;)r=n.alternate,r!==null&&Ht(r)===null&&(i=n),n=n.sibling;n=i,n===null?(i=s.child,s.child=null):(i=n.sibling,n.sibling=null),dl(s,!1,i,n,l);break;case"backwards":for(n=null,i=s.child,s.child=null;i!==null;){if(r=i.alternate,r!==null&&Ht(r)===null){s.child=i;break}r=i.sibling,i.sibling=n,n=i,i=r}dl(s,!0,n,null,l);break;case"together":dl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Jt(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,n){if(r!==null&&(s.dependencies=r.dependencies),ks|=s.lanes,(n&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(o(153));if(s.child!==null){for(r=s.child,n=us(r,r.pendingProps),s.child=n,n.return=s;r.sibling!==null;)r=r.sibling,n=n.sibling=us(r,r.pendingProps),n.return=s;n.sibling=null}return s.child}function Oh(r,s,n){switch(s.tag){case 3:kd(s),qs();break;case 5:$c(s);break;case 1:Xe(s.type)&&_t(s);break;case 4:Ui(s,s.stateNode.containerInfo);break;case 10:var t=s.type._context,i=s.memoizedProps.value;ve(Bt,t._currentValue),t._currentValue=i;break;case 13:if(t=s.memoizedState,t!==null)return t.dehydrated!==null?(ve(we,we.current&1),s.flags|=128,null):(n&s.child.childLanes)!==0?Cd(r,s,n):(ve(we,we.current&1),r=Vr(r,s,n),r!==null?r.sibling:null);ve(we,we.current&1);break;case 19:if(t=(n&s.childLanes)!==0,(r.flags&128)!==0){if(t)return Ed(r,s,n);s.flags|=128}if(i=s.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(we,we.current),t)break;return null;case 22:case 23:return s.lanes=0,bd(r,s,n)}return Vr(r,s,n)}var Id,pl,zd,Pd;Id=function(r,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)r.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pl=function(){},zd=function(r,s,n,t){var i=r.memoizedProps;if(i!==t){r=s.stateNode,Ns(Lr.current);var l=null;switch(n){case"input":i=Wa(r,i),t=Wa(r,t),l=[];break;case"select":i=I({},i,{value:void 0}),t=I({},t,{value:void 0}),l=[];break;case"textarea":i=Ua(r,i),t=Ua(r,t),l=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=Lt)}Ha(n,t);var d;n=null;for(y in i)if(!t.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var u=i[y];for(d in u)u.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in t){var h=t[y];if(u=i!=null?i[y]:void 0,t.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(l||(l=[]),l.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(l=l||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&ye("scroll",r),l||u===h||(l=[])):(l=l||[]).push(y,h))}n&&(l=l||[]).push("style",n);var y=l;(s.updateQueue=y)&&(s.flags|=4)}},Pd=function(r,s,n,t){n!==t&&(s.flags|=4)};function Yn(r,s){if(!Ne)switch(r.tailMode){case"hidden":s=r.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?r.tail=null:n.sibling=null;break;case"collapsed":n=r.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function Ve(r){var s=r.alternate!==null&&r.alternate.child===r.child,n=0,t=0;if(s)for(var i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=r,i=i.sibling;else for(i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=t,r.childLanes=n,s}function Fh(r,s,n){var t=s.pendingProps;switch(Ri(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(s),null;case 1:return Xe(s.type)&&At(),Ve(s),null;case 3:return t=s.stateNode,Xs(),je(Ke),je($e),Gi(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(Ft(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,kr!==null&&(Nl(kr),kr=null))),pl(r,s),Ve(s),null;case 5:Vi(s);var i=Ns(Vn.current);if(n=s.type,r!==null&&s.stateNode!=null)zd(r,s,n,t,i),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!t){if(s.stateNode===null)throw Error(o(166));return Ve(s),null}if(r=Ns(Lr.current),Ft(s)){t=s.stateNode,n=s.type;var l=s.memoizedProps;switch(t[Pr]=s,t[Fn]=l,r=(s.mode&1)!==0,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(i=0;i<Mn.length;i++)ye(Mn[i],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":po(t,l),ye("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},ye("invalid",t);break;case"textarea":xo(t,l),ye("invalid",t)}Ha(n,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var u=l[d];d==="children"?typeof u=="string"?t.textContent!==u&&(l.suppressHydrationWarning!==!0&&Pt(t.textContent,u,r),i=["children",u]):typeof u=="number"&&t.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Pt(t.textContent,u,r),i=["children",""+u]):g.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&ye("scroll",t)}switch(n){case"input":Dr(t),ho(t,l,!0);break;case"textarea":Dr(t),fo(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=Lt)}t=i,s.updateQueue=t,t!==null&&(s.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=go(n)),r==="http://www.w3.org/1999/xhtml"?n==="script"?(r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=d.createElement(n,{is:t.is}):(r=d.createElement(n),n==="select"&&(d=r,t.multiple?d.multiple=!0:t.size&&(d.size=t.size))):r=d.createElementNS(r,n),r[Pr]=s,r[Fn]=t,Id(r,s,!1,!1),s.stateNode=r;e:{switch(d=Ga(n,t),n){case"dialog":ye("cancel",r),ye("close",r),i=t;break;case"iframe":case"object":case"embed":ye("load",r),i=t;break;case"video":case"audio":for(i=0;i<Mn.length;i++)ye(Mn[i],r);i=t;break;case"source":ye("error",r),i=t;break;case"img":case"image":case"link":ye("error",r),ye("load",r),i=t;break;case"details":ye("toggle",r),i=t;break;case"input":po(r,t),i=Wa(r,t),ye("invalid",r);break;case"option":i=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},i=I({},t,{value:void 0}),ye("invalid",r);break;case"textarea":xo(r,t),i=Ua(r,t),ye("invalid",r);break;default:i=t}Ha(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var h=u[l];l==="style"?jo(r,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&vo(r,h)):l==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&gn(r,h):typeof h=="number"&&gn(r,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(g.hasOwnProperty(l)?h!=null&&l==="onScroll"&&ye("scroll",r):h!=null&&ae(r,l,h,d))}switch(n){case"input":Dr(r),ho(r,t,!1);break;case"textarea":Dr(r),fo(r);break;case"option":t.value!=null&&r.setAttribute("value",""+ie(t.value));break;case"select":r.multiple=!!t.multiple,l=t.value,l!=null?Ls(r,!!t.multiple,l,!1):t.defaultValue!=null&&Ls(r,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(r.onclick=Lt)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ve(s),null;case 6:if(r&&s.stateNode!=null)Pd(r,s,r.memoizedProps,t);else{if(typeof t!="string"&&s.stateNode===null)throw Error(o(166));if(n=Ns(Vn.current),Ns(Lr.current),Ft(s)){if(t=s.stateNode,n=s.memoizedProps,t[Pr]=s,(l=t.nodeValue!==n)&&(r=ir,r!==null))switch(r.tag){case 3:Pt(t.nodeValue,n,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Pt(t.nodeValue,n,(r.mode&1)!==0)}l&&(s.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Pr]=s,s.stateNode=t}return Ve(s),null;case 13:if(je(we),t=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ne&&lr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ac(),qs(),s.flags|=98560,l=!1;else if(l=Ft(s),t!==null&&t.dehydrated!==null){if(r===null){if(!l)throw Error(o(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Pr]=s}else qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ve(s),l=!1}else kr!==null&&(Nl(kr),kr=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=n,s):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(we.current&1)!==0?Le===0&&(Le=3):Sl())),s.updateQueue!==null&&(s.flags|=4),Ve(s),null);case 4:return Xs(),pl(r,s),r===null&&Dn(s.stateNode.containerInfo),Ve(s),null;case 10:return Fi(s.type._context),Ve(s),null;case 17:return Xe(s.type)&&At(),Ve(s),null;case 19:if(je(we),l=s.memoizedState,l===null)return Ve(s),null;if(t=(s.flags&128)!==0,d=l.rendering,d===null)if(t)Yn(l,!1);else{if(Le!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(d=Ht(r),d!==null){for(s.flags|=128,Yn(l,!1),t=d.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),s.subtreeFlags=0,t=n,n=s.child;n!==null;)l=n,r=t,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=r,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,r=d.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n=n.sibling;return ve(we,we.current&1|2),s.child}r=r.sibling}l.tail!==null&&Ce()>rn&&(s.flags|=128,t=!0,Yn(l,!1),s.lanes=4194304)}else{if(!t)if(r=Ht(d),r!==null){if(s.flags|=128,t=!0,n=r.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),Yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ne)return Ve(s),null}else 2*Ce()-l.renderingStartTime>rn&&n!==1073741824&&(s.flags|=128,t=!0,Yn(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(n=l.last,n!==null?n.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Ce(),s.sibling=null,n=we.current,ve(we,t?n&1|2:n&1),s):(Ve(s),null);case 22:case 23:return kl(),t=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(s.flags|=8192),t&&(s.mode&1)!==0?(or&1073741824)!==0&&(Ve(s),s.subtreeFlags&6&&(s.flags|=8192)):Ve(s),null;case 24:return null;case 25:return null}throw Error(o(156,s.tag))}function Wh(r,s){switch(Ri(s),s.tag){case 1:return Xe(s.type)&&At(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Xs(),je(Ke),je($e),Gi(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Vi(s),null;case 13:if(je(we),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(o(340));qs()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return je(we),null;case 4:return Xs(),null;case 10:return Fi(s.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var ea=!1,He=!1,Bh=typeof WeakSet=="function"?WeakSet:Set,P=null;function Js(r,s){var n=r.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){Se(r,s,t)}else n.current=null}function ul(r,s,n){try{n()}catch(t){Se(r,s,t)}}var Ld=!1;function $h(r,s){if(ki=jt,r=dc(),fi(r)){if("selectionStart"in r)var n={start:r.selectionStart,end:r.selectionEnd};else e:{n=(n=r.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=r,N=null;r:for(;;){for(var z;k!==n||i!==0&&k.nodeType!==3||(u=d+i),k!==l||t!==0&&k.nodeType!==3||(h=d+t),k.nodeType===3&&(d+=k.nodeValue.length),(z=k.firstChild)!==null;)N=k,k=z;for(;;){if(k===r)break r;if(N===n&&++y===i&&(u=d),N===l&&++w===t&&(h=d),(z=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=z}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:r,selectionRange:n},jt=!1,P=s;P!==null;)if(s=P,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,P=r;else for(;P!==null;){s=P;try{var L=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var _=L.memoizedProps,Te=L.memoizedState,f=s.stateNode,x=f.getSnapshotBeforeUpdate(s.elementType===s.type?_:Sr(s.type,_),Te);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(S){Se(s,s.return,S)}if(r=s.sibling,r!==null){r.return=s.return,P=r;break}P=s.return}return L=Ld,Ld=!1,L}function Kn(r,s,n){var t=s.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&r)===r){var l=i.destroy;i.destroy=void 0,l!==void 0&&ul(s,n,l)}i=i.next}while(i!==t)}}function ra(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&r)===r){var t=n.create;n.destroy=t()}n=n.next}while(n!==s)}}function hl(r){var s=r.ref;if(s!==null){var n=r.stateNode;switch(r.tag){case 5:r=n;break;default:r=n}typeof s=="function"?s(r):s.current=r}}function Rd(r){var s=r.alternate;s!==null&&(r.alternate=null,Rd(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Pr],delete s[Fn],delete s[Ii],delete s[kh],delete s[Sh])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ad(r){return r.tag===5||r.tag===3||r.tag===4}function _d(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ad(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function xl(r,s,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(r,s):n.insertBefore(r,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(r,n)):(s=n,s.appendChild(r)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=Lt));else if(t!==4&&(r=r.child,r!==null))for(xl(r,s,n),r=r.sibling;r!==null;)xl(r,s,n),r=r.sibling}function ml(r,s,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,s?n.insertBefore(r,s):n.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(ml(r,s,n),r=r.sibling;r!==null;)ml(r,s,n),r=r.sibling}var Fe=null,Cr=!1;function ls(r,s,n){for(n=n.child;n!==null;)Md(r,s,n),n=n.sibling}function Md(r,s,n){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(xt,n)}catch{}switch(n.tag){case 5:He||Js(n,s);case 6:var t=Fe,i=Cr;Fe=null,ls(r,s,n),Fe=t,Cr=i,Fe!==null&&(Cr?(r=Fe,n=n.stateNode,r.nodeType===8?r.parentNode.removeChild(n):r.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Cr?(r=Fe,n=n.stateNode,r.nodeType===8?Ei(r.parentNode,n):r.nodeType===1&&Ei(r,n),En(r)):Ei(Fe,n.stateNode));break;case 4:t=Fe,i=Cr,Fe=n.stateNode.containerInfo,Cr=!0,ls(r,s,n),Fe=t,Cr=i;break;case 0:case 11:case 14:case 15:if(!He&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&ul(n,s,d),i=i.next}while(i!==t)}ls(r,s,n);break;case 1:if(!He&&(Js(n,s),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(u){Se(n,s,u)}ls(r,s,n);break;case 21:ls(r,s,n);break;case 22:n.mode&1?(He=(t=He)||n.memoizedState!==null,ls(r,s,n),He=t):ls(r,s,n);break;default:ls(r,s,n)}}function Dd(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var n=r.stateNode;n===null&&(n=r.stateNode=new Bh),s.forEach(function(t){var i=Xh.bind(null,r,t);n.has(t)||(n.add(t),t.then(i,i))})}}function Tr(r,s){var n=s.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];try{var l=r,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:Fe=u.stateNode,Cr=!1;break e;case 3:Fe=u.stateNode.containerInfo,Cr=!0;break e;case 4:Fe=u.stateNode.containerInfo,Cr=!0;break e}u=u.return}if(Fe===null)throw Error(o(160));Md(l,d,i),Fe=null,Cr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Se(i,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Od(s,r),s=s.sibling}function Od(r,s){var n=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Tr(s,r),Ar(r),t&4){try{Kn(3,r,r.return),ra(3,r)}catch(_){Se(r,r.return,_)}try{Kn(5,r,r.return)}catch(_){Se(r,r.return,_)}}break;case 1:Tr(s,r),Ar(r),t&512&&n!==null&&Js(n,n.return);break;case 5:if(Tr(s,r),Ar(r),t&512&&n!==null&&Js(n,n.return),r.flags&32){var i=r.stateNode;try{gn(i,"")}catch(_){Se(r,r.return,_)}}if(t&4&&(i=r.stateNode,i!=null)){var l=r.memoizedProps,d=n!==null?n.memoizedProps:l,u=r.type,h=r.updateQueue;if(r.updateQueue=null,h!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&uo(i,l),Ga(u,d);var y=Ga(u,l);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?jo(i,k):w==="dangerouslySetInnerHTML"?vo(i,k):w==="children"?gn(i,k):ae(i,w,k,y)}switch(u){case"input":Ba(i,l);break;case"textarea":mo(i,l);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var z=l.value;z!=null?Ls(i,!!l.multiple,z,!1):N!==!!l.multiple&&(l.defaultValue!=null?Ls(i,!!l.multiple,l.defaultValue,!0):Ls(i,!!l.multiple,l.multiple?[]:"",!1))}i[Fn]=l}catch(_){Se(r,r.return,_)}}break;case 6:if(Tr(s,r),Ar(r),t&4){if(r.stateNode===null)throw Error(o(162));i=r.stateNode,l=r.memoizedProps;try{i.nodeValue=l}catch(_){Se(r,r.return,_)}}break;case 3:if(Tr(s,r),Ar(r),t&4&&n!==null&&n.memoizedState.isDehydrated)try{En(s.containerInfo)}catch(_){Se(r,r.return,_)}break;case 4:Tr(s,r),Ar(r);break;case 13:Tr(s,r),Ar(r),i=r.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(vl=Ce())),t&4&&Dd(r);break;case 22:if(w=n!==null&&n.memoizedState!==null,r.mode&1?(He=(y=He)||w,Tr(s,r),He=y):Tr(s,r),Ar(r),t&8192){if(y=r.memoizedState!==null,(r.stateNode.isHidden=y)&&!w&&(r.mode&1)!==0)for(P=r,w=r.child;w!==null;){for(k=P=w;P!==null;){switch(N=P,z=N.child,N.tag){case 0:case 11:case 14:case 15:Kn(4,N,N.return);break;case 1:Js(N,N.return);var L=N.stateNode;if(typeof L.componentWillUnmount=="function"){t=N,n=N.return;try{s=t,L.props=s.memoizedProps,L.state=s.memoizedState,L.componentWillUnmount()}catch(_){Se(t,n,_)}}break;case 5:Js(N,N.return);break;case 22:if(N.memoizedState!==null){Bd(k);continue}}z!==null?(z.return=N,P=z):Bd(k)}w=w.sibling}e:for(w=null,k=r;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=yo("display",d))}catch(_){Se(r,r.return,_)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(_){Se(r,r.return,_)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===r)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===r)break e;for(;k.sibling===null;){if(k.return===null||k.return===r)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Tr(s,r),Ar(r),t&4&&Dd(r);break;case 21:break;default:Tr(s,r),Ar(r)}}function Ar(r){var s=r.flags;if(s&2){try{e:{for(var n=r.return;n!==null;){if(Ad(n)){var t=n;break e}n=n.return}throw Error(o(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(gn(i,""),t.flags&=-33);var l=_d(r);ml(r,l,i);break;case 3:case 4:var d=t.stateNode.containerInfo,u=_d(r);xl(r,u,d);break;default:throw Error(o(161))}}catch(h){Se(r,r.return,h)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Uh(r,s,n){P=r,Fd(r)}function Fd(r,s,n){for(var t=(r.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&t){var d=i.memoizedState!==null||ea;if(!d){var u=i.alternate,h=u!==null&&u.memoizedState!==null||He;u=ea;var y=He;if(ea=d,(He=h)&&!y)for(P=i;P!==null;)d=P,h=d.child,d.tag===22&&d.memoizedState!==null?$d(i):h!==null?(h.return=d,P=h):$d(i);for(;l!==null;)P=l,Fd(l),l=l.sibling;P=i,ea=u,He=y}Wd(r)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,P=l):Wd(r)}}function Wd(r){for(;P!==null;){var s=P;if((s.flags&8772)!==0){var n=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:He||ra(5,s);break;case 1:var t=s.stateNode;if(s.flags&4&&!He)if(n===null)t.componentDidMount();else{var i=s.elementType===s.type?n.memoizedProps:Sr(s.type,n.memoizedProps);t.componentDidUpdate(i,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Bc(s,l,t);break;case 3:var d=s.updateQueue;if(d!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}Bc(s,d,n)}break;case 5:var u=s.stateNode;if(n===null&&s.flags&4){n=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&En(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}He||s.flags&512&&hl(s)}catch(N){Se(s,s.return,N)}}if(s===r){P=null;break}if(n=s.sibling,n!==null){n.return=s.return,P=n;break}P=s.return}}function Bd(r){for(;P!==null;){var s=P;if(s===r){P=null;break}var n=s.sibling;if(n!==null){n.return=s.return,P=n;break}P=s.return}}function $d(r){for(;P!==null;){var s=P;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{ra(4,s)}catch(h){Se(s,n,h)}break;case 1:var t=s.stateNode;if(typeof t.componentDidMount=="function"){var i=s.return;try{t.componentDidMount()}catch(h){Se(s,i,h)}}var l=s.return;try{hl(s)}catch(h){Se(s,l,h)}break;case 5:var d=s.return;try{hl(s)}catch(h){Se(s,d,h)}}}catch(h){Se(s,s.return,h)}if(s===r){P=null;break}var u=s.sibling;if(u!==null){u.return=s.return,P=u;break}P=s.return}}var Vh=Math.ceil,sa=ee.ReactCurrentDispatcher,fl=ee.ReactCurrentOwner,gr=ee.ReactCurrentBatchConfig,oe=0,_e=null,Ee=null,We=0,or=0,en=ss(0),Le=0,Xn=null,ks=0,na=0,gl=0,Zn=null,Je=null,vl=0,rn=1/0,Hr=null,ta=!1,yl=null,os=null,aa=!1,cs=null,ia=0,Jn=0,jl=null,la=-1,oa=0;function Qe(){return(oe&6)!==0?Ce():la!==-1?la:la=Ce()}function ds(r){return(r.mode&1)===0?1:(oe&2)!==0&&We!==0?We&-We:Th.transition!==null?(oa===0&&(oa=_o()),oa):(r=me,r!==0||(r=window.event,r=r===void 0?16:Vo(r.type)),r)}function Er(r,s,n,t){if(50<Jn)throw Jn=0,jl=null,Error(o(185));wn(r,n,t),((oe&2)===0||r!==_e)&&(r===_e&&((oe&2)===0&&(na|=n),Le===4&&ps(r,We)),er(r,t),n===1&&oe===0&&(s.mode&1)===0&&(rn=Ce()+500,Mt&&ts()))}function er(r,s){var n=r.callbackNode;Tu(r,s);var t=gt(r,r===_e?We:0);if(t===0)n!==null&&Lo(n),r.callbackNode=null,r.callbackPriority=0;else if(s=t&-t,r.callbackPriority!==s){if(n!=null&&Lo(n),s===1)r.tag===0?Ch(Vd.bind(null,r)):Ic(Vd.bind(null,r)),Nh(function(){(oe&6)===0&&ts()}),n=null;else{switch(Mo(t)){case 1:n=Ja;break;case 4:n=Ro;break;case 16:n=ht;break;case 536870912:n=Ao;break;default:n=ht}n=Zd(n,Ud.bind(null,r))}r.callbackPriority=s,r.callbackNode=n}}function Ud(r,s){if(la=-1,oa=0,(oe&6)!==0)throw Error(o(327));var n=r.callbackNode;if(sn()&&r.callbackNode!==n)return null;var t=gt(r,r===_e?We:0);if(t===0)return null;if((t&30)!==0||(t&r.expiredLanes)!==0||s)s=ca(r,t);else{s=t;var i=oe;oe|=2;var l=Gd();(_e!==r||We!==s)&&(Hr=null,rn=Ce()+500,Cs(r,s));do try{qh();break}catch(u){Hd(r,u)}while(!0);Oi(),sa.current=l,oe=i,Ee!==null?s=0:(_e=null,We=0,s=Le)}if(s!==0){if(s===2&&(i=ei(r),i!==0&&(t=i,s=bl(r,i))),s===1)throw n=Xn,Cs(r,0),ps(r,t),er(r,Ce()),n;if(s===6)ps(r,t);else{if(i=r.current.alternate,(t&30)===0&&!Hh(i)&&(s=ca(r,t),s===2&&(l=ei(r),l!==0&&(t=l,s=bl(r,l))),s===1))throw n=Xn,Cs(r,0),ps(r,t),er(r,Ce()),n;switch(r.finishedWork=i,r.finishedLanes=t,s){case 0:case 1:throw Error(o(345));case 2:Ts(r,Je,Hr);break;case 3:if(ps(r,t),(t&130023424)===t&&(s=vl+500-Ce(),10<s)){if(gt(r,0)!==0)break;if(i=r.suspendedLanes,(i&t)!==t){Qe(),r.pingedLanes|=r.suspendedLanes&i;break}r.timeoutHandle=Ti(Ts.bind(null,r,Je,Hr),s);break}Ts(r,Je,Hr);break;case 4:if(ps(r,t),(t&4194240)===t)break;for(s=r.eventTimes,i=-1;0<t;){var d=31-Nr(t);l=1<<d,d=s[d],d>i&&(i=d),t&=~l}if(t=i,t=Ce()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Vh(t/1960))-t,10<t){r.timeoutHandle=Ti(Ts.bind(null,r,Je,Hr),t);break}Ts(r,Je,Hr);break;case 5:Ts(r,Je,Hr);break;default:throw Error(o(329))}}}return er(r,Ce()),r.callbackNode===n?Ud.bind(null,r):null}function bl(r,s){var n=Zn;return r.current.memoizedState.isDehydrated&&(Cs(r,s).flags|=256),r=ca(r,s),r!==2&&(s=Je,Je=n,s!==null&&Nl(s)),r}function Nl(r){Je===null?Je=r:Je.push.apply(Je,r)}function Hh(r){for(var s=r;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var i=n[t],l=i.getSnapshot;i=i.value;try{if(!wr(l(),i))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ps(r,s){for(s&=~gl,s&=~na,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var n=31-Nr(s),t=1<<n;r[n]=-1,s&=~t}}function Vd(r){if((oe&6)!==0)throw Error(o(327));sn();var s=gt(r,0);if((s&1)===0)return er(r,Ce()),null;var n=ca(r,s);if(r.tag!==0&&n===2){var t=ei(r);t!==0&&(s=t,n=bl(r,t))}if(n===1)throw n=Xn,Cs(r,0),ps(r,s),er(r,Ce()),n;if(n===6)throw Error(o(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ts(r,Je,Hr),er(r,Ce()),null}function wl(r,s){var n=oe;oe|=1;try{return r(s)}finally{oe=n,oe===0&&(rn=Ce()+500,Mt&&ts())}}function Ss(r){cs!==null&&cs.tag===0&&(oe&6)===0&&sn();var s=oe;oe|=1;var n=gr.transition,t=me;try{if(gr.transition=null,me=1,r)return r()}finally{me=t,gr.transition=n,oe=s,(oe&6)===0&&ts()}}function kl(){or=en.current,je(en)}function Cs(r,s){r.finishedWork=null,r.finishedLanes=0;var n=r.timeoutHandle;if(n!==-1&&(r.timeoutHandle=-1,bh(n)),Ee!==null)for(n=Ee.return;n!==null;){var t=n;switch(Ri(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&At();break;case 3:Xs(),je(Ke),je($e),Gi();break;case 5:Vi(t);break;case 4:Xs();break;case 13:je(we);break;case 19:je(we);break;case 10:Fi(t.type._context);break;case 22:case 23:kl()}n=n.return}if(_e=r,Ee=r=us(r.current,null),We=or=s,Le=0,Xn=null,gl=na=ks=0,Je=Zn=null,bs!==null){for(s=0;s<bs.length;s++)if(n=bs[s],t=n.interleaved,t!==null){n.interleaved=null;var i=t.next,l=n.pending;if(l!==null){var d=l.next;l.next=i,t.next=d}n.pending=t}bs=null}return r}function Hd(r,s){do{var n=Ee;try{if(Oi(),Gt.current=Kt,qt){for(var t=ke.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}qt=!1}if(ws=0,Ae=Pe=ke=null,Hn=!1,Gn=0,fl.current=null,n===null||n.return===null){Le=1,Xn=s,Ee=null;break}e:{var l=r,d=n.return,u=n,h=s;if(s=We,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var z=fd(d);if(z!==null){z.flags&=-257,gd(z,d,u,l,s),z.mode&1&&md(l,y,s),s=z,h=y;var L=s.updateQueue;if(L===null){var _=new Set;_.add(h),s.updateQueue=_}else L.add(h);break e}else{if((s&1)===0){md(l,y,s),Sl();break e}h=Error(o(426))}}else if(Ne&&u.mode&1){var Te=fd(d);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),gd(Te,d,u,l,s),Mi(Zs(h,u));break e}}l=h=Zs(h,u),Le!==4&&(Le=2),Zn===null?Zn=[l]:Zn.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var f=hd(l,h,s);Wc(l,f);break e;case 1:u=h;var x=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(os===null||!os.has(v)))){l.flags|=65536,s&=-s,l.lanes|=s;var S=xd(l,u,s);Wc(l,S);break e}}l=l.return}while(l!==null)}Qd(n)}catch(M){s=M,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function Gd(){var r=sa.current;return sa.current=Kt,r===null?Kt:r}function Sl(){(Le===0||Le===3||Le===2)&&(Le=4),_e===null||(ks&268435455)===0&&(na&268435455)===0||ps(_e,We)}function ca(r,s){var n=oe;oe|=2;var t=Gd();(_e!==r||We!==s)&&(Hr=null,Cs(r,s));do try{Gh();break}catch(i){Hd(r,i)}while(!0);if(Oi(),oe=n,sa.current=t,Ee!==null)throw Error(o(261));return _e=null,We=0,Le}function Gh(){for(;Ee!==null;)qd(Ee)}function qh(){for(;Ee!==null&&!vu();)qd(Ee)}function qd(r){var s=Xd(r.alternate,r,or);r.memoizedProps=r.pendingProps,s===null?Qd(r):Ee=s,fl.current=null}function Qd(r){var s=r;do{var n=s.alternate;if(r=s.return,(s.flags&32768)===0){if(n=Fh(n,s,or),n!==null){Ee=n;return}}else{if(n=Wh(n,s),n!==null){n.flags&=32767,Ee=n;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Le=6,Ee=null;return}}if(s=s.sibling,s!==null){Ee=s;return}Ee=s=r}while(s!==null);Le===0&&(Le=5)}function Ts(r,s,n){var t=me,i=gr.transition;try{gr.transition=null,me=1,Qh(r,s,n,t)}finally{gr.transition=i,me=t}return null}function Qh(r,s,n,t){do sn();while(cs!==null);if((oe&6)!==0)throw Error(o(327));n=r.finishedWork;var i=r.finishedLanes;if(n===null)return null;if(r.finishedWork=null,r.finishedLanes=0,n===r.current)throw Error(o(177));r.callbackNode=null,r.callbackPriority=0;var l=n.lanes|n.childLanes;if(Eu(r,l),r===_e&&(Ee=_e=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||aa||(aa=!0,Zd(ht,function(){return sn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=gr.transition,gr.transition=null;var d=me;me=1;var u=oe;oe|=4,fl.current=null,$h(r,n),Od(n,r),xh(Si),jt=!!ki,Si=ki=null,r.current=n,Uh(n),yu(),oe=u,me=d,gr.transition=l}else r.current=n;if(aa&&(aa=!1,cs=r,ia=i),l=r.pendingLanes,l===0&&(os=null),Nu(n.stateNode),er(r,Ce()),s!==null)for(t=r.onRecoverableError,n=0;n<s.length;n++)i=s[n],t(i.value,{componentStack:i.stack,digest:i.digest});if(ta)throw ta=!1,r=yl,yl=null,r;return(ia&1)!==0&&r.tag!==0&&sn(),l=r.pendingLanes,(l&1)!==0?r===jl?Jn++:(Jn=0,jl=r):Jn=0,ts(),null}function sn(){if(cs!==null){var r=Mo(ia),s=gr.transition,n=me;try{if(gr.transition=null,me=16>r?16:r,cs===null)var t=!1;else{if(r=cs,cs=null,ia=0,(oe&6)!==0)throw Error(o(331));var i=oe;for(oe|=4,P=r.current;P!==null;){var l=P,d=l.child;if((P.flags&16)!==0){var u=l.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(P=y;P!==null;){var w=P;switch(w.tag){case 0:case 11:case 15:Kn(8,w,l)}var k=w.child;if(k!==null)k.return=w,P=k;else for(;P!==null;){w=P;var N=w.sibling,z=w.return;if(Rd(w),w===y){P=null;break}if(N!==null){N.return=z,P=N;break}P=z}}}var L=l.alternate;if(L!==null){var _=L.child;if(_!==null){L.child=null;do{var Te=_.sibling;_.sibling=null,_=Te}while(_!==null)}}P=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,P=d;else e:for(;P!==null;){if(l=P,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Kn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var x=r.current;for(P=x;P!==null;){d=P;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,P=v;else e:for(d=x;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ra(9,u)}}catch(M){Se(u,u.return,M)}if(u===d){P=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,P=S;break e}P=u.return}}if(oe=i,ts(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(xt,r)}catch{}t=!0}return t}finally{me=n,gr.transition=s}}return!1}function Yd(r,s,n){s=Zs(n,s),s=hd(r,s,1),r=is(r,s,1),s=Qe(),r!==null&&(wn(r,1,s),er(r,s))}function Se(r,s,n){if(r.tag===3)Yd(r,r,n);else for(;s!==null;){if(s.tag===3){Yd(s,r,n);break}else if(s.tag===1){var t=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(os===null||!os.has(t))){r=Zs(n,r),r=xd(s,r,1),s=is(s,r,1),r=Qe(),s!==null&&(wn(s,1,r),er(s,r));break}}s=s.return}}function Yh(r,s,n){var t=r.pingCache;t!==null&&t.delete(s),s=Qe(),r.pingedLanes|=r.suspendedLanes&n,_e===r&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>Ce()-vl?Cs(r,0):gl|=n),er(r,s)}function Kd(r,s){s===0&&((r.mode&1)===0?s=1:(s=ft,ft<<=1,(ft&130023424)===0&&(ft=4194304)));var n=Qe();r=$r(r,s),r!==null&&(wn(r,s,n),er(r,n))}function Kh(r){var s=r.memoizedState,n=0;s!==null&&(n=s.retryLane),Kd(r,n)}function Xh(r,s){var n=0;switch(r.tag){case 13:var t=r.stateNode,i=r.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(o(314))}t!==null&&t.delete(s),Kd(r,n)}var Xd;Xd=function(r,s,n){if(r!==null)if(r.memoizedProps!==s.pendingProps||Ke.current)Ze=!0;else{if((r.lanes&n)===0&&(s.flags&128)===0)return Ze=!1,Oh(r,s,n);Ze=(r.flags&131072)!==0}else Ze=!1,Ne&&(s.flags&1048576)!==0&&zc(s,Ot,s.index);switch(s.lanes=0,s.tag){case 2:var t=s.type;Jt(r,s),r=s.pendingProps;var i=Vs(s,$e.current);Ks(s,n),i=Yi(null,s,t,r,i,n);var l=Ki();return s.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xe(t)?(l=!0,_t(s)):l=!1,s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$i(s),i.updater=Xt,s.stateNode=i,i._reactInternals=s,sl(s,t,r,n),s=il(null,s,t,!0,l,n)):(s.tag=0,Ne&&l&&Li(s),qe(null,s,i,n),s=s.child),s;case 16:t=s.elementType;e:{switch(Jt(r,s),r=s.pendingProps,i=t._init,t=i(t._payload),s.type=t,i=s.tag=Jh(t),r=Sr(t,r),i){case 0:s=al(null,s,t,r,n);break e;case 1:s=wd(null,s,t,r,n);break e;case 11:s=vd(null,s,t,r,n);break e;case 14:s=yd(null,s,t,Sr(t.type,r),n);break e}throw Error(o(306,t,""))}return s;case 0:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Sr(t,i),al(r,s,t,i,n);case 1:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Sr(t,i),wd(r,s,t,i,n);case 3:e:{if(kd(s),r===null)throw Error(o(387));t=s.pendingProps,l=s.memoizedState,i=l.element,Fc(r,s),Vt(s,t,null,n);var d=s.memoizedState;if(t=d.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){i=Zs(Error(o(423)),s),s=Sd(r,s,t,n,i);break e}else if(t!==i){i=Zs(Error(o(424)),s),s=Sd(r,s,t,n,i);break e}else for(lr=rs(s.stateNode.containerInfo.firstChild),ir=s,Ne=!0,kr=null,n=Dc(s,null,t,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),t===i){s=Vr(r,s,n);break e}qe(r,s,t,n)}s=s.child}return s;case 5:return $c(s),r===null&&_i(s),t=s.type,i=s.pendingProps,l=r!==null?r.memoizedProps:null,d=i.children,Ci(t,i)?d=null:l!==null&&Ci(t,l)&&(s.flags|=32),Nd(r,s),qe(r,s,d,n),s.child;case 6:return r===null&&_i(s),null;case 13:return Cd(r,s,n);case 4:return Ui(s,s.stateNode.containerInfo),t=s.pendingProps,r===null?s.child=Qs(s,null,t,n):qe(r,s,t,n),s.child;case 11:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Sr(t,i),vd(r,s,t,i,n);case 7:return qe(r,s,s.pendingProps,n),s.child;case 8:return qe(r,s,s.pendingProps.children,n),s.child;case 12:return qe(r,s,s.pendingProps.children,n),s.child;case 10:e:{if(t=s.type._context,i=s.pendingProps,l=s.memoizedProps,d=i.value,ve(Bt,t._currentValue),t._currentValue=d,l!==null)if(wr(l.value,d)){if(l.children===i.children&&!Ke.current){s=Vr(r,s,n);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var u=l.dependencies;if(u!==null){d=l.child;for(var h=u.firstContext;h!==null;){if(h.context===t){if(l.tag===1){h=Ur(-1,n&-n),h.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),Wi(l.return,n,s),u.lanes|=n;break}h=h.next}}else if(l.tag===10)d=l.type===s.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(o(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Wi(d,n,s),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===s){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}qe(r,s,i.children,n),s=s.child}return s;case 9:return i=s.type,t=s.pendingProps.children,Ks(s,n),i=mr(i),t=t(i),s.flags|=1,qe(r,s,t,n),s.child;case 14:return t=s.type,i=Sr(t,s.pendingProps),i=Sr(t.type,i),yd(r,s,t,i,n);case 15:return jd(r,s,s.type,s.pendingProps,n);case 17:return t=s.type,i=s.pendingProps,i=s.elementType===t?i:Sr(t,i),Jt(r,s),s.tag=1,Xe(t)?(r=!0,_t(s)):r=!1,Ks(s,n),pd(s,t,i),sl(s,t,i,n),il(null,s,t,!0,r,n);case 19:return Ed(r,s,n);case 22:return bd(r,s,n)}throw Error(o(156,s.tag))};function Zd(r,s){return Po(r,s)}function Zh(r,s,n,t){this.tag=r,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(r,s,n,t){return new Zh(r,s,n,t)}function Cl(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Jh(r){if(typeof r=="function")return Cl(r)?1:0;if(r!=null){if(r=r.$$typeof,r===pr)return 11;if(r===ur)return 14}return 2}function us(r,s){var n=r.alternate;return n===null?(n=vr(r.tag,s,r.key,r.mode),n.elementType=r.elementType,n.type=r.type,n.stateNode=r.stateNode,n.alternate=r,r.alternate=n):(n.pendingProps=s,n.type=r.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=r.flags&14680064,n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,s=r.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=r.sibling,n.index=r.index,n.ref=r.ref,n}function da(r,s,n,t,i,l){var d=2;if(t=r,typeof r=="function")Cl(r)&&(d=1);else if(typeof r=="string")d=5;else e:switch(r){case $:return Es(n.children,i,l,s);case ze:d=8,i|=8;break;case nr:return r=vr(12,n,s,i|2),r.elementType=nr,r.lanes=l,r;case Ge:return r=vr(13,n,s,i),r.elementType=Ge,r.lanes=l,r;case tr:return r=vr(19,n,s,i),r.elementType=tr,r.lanes=l,r;case ge:return pa(n,i,l,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case jr:d=10;break e;case Mr:d=9;break e;case pr:d=11;break e;case ur:d=14;break e;case Be:d=16,t=null;break e}throw Error(o(130,r==null?r:typeof r,""))}return s=vr(d,n,s,i),s.elementType=r,s.type=t,s.lanes=l,s}function Es(r,s,n,t){return r=vr(7,r,t,s),r.lanes=n,r}function pa(r,s,n,t){return r=vr(22,r,t,s),r.elementType=ge,r.lanes=n,r.stateNode={isHidden:!1},r}function Tl(r,s,n){return r=vr(6,r,null,s),r.lanes=n,r}function El(r,s,n){return s=vr(4,r.children!==null?r.children:[],r.key,s),s.lanes=n,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function ex(r,s,n,t,i){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Il(r,s,n,t,i,l,d,u,h){return r=new ex(r,s,n,u,h),s===1?(s=1,l===!0&&(s|=8)):s=0,l=vr(3,null,null,s),r.current=l,l.stateNode=r,l.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(l),r}function rx(r,s,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:t==null?null:""+t,children:r,containerInfo:s,implementation:n}}function Jd(r){if(!r)return ns;r=r._reactInternals;e:{if(fs(r)!==r||r.tag!==1)throw Error(o(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(o(171))}if(r.tag===1){var n=r.type;if(Xe(n))return Tc(r,n,s)}return s}function ep(r,s,n,t,i,l,d,u,h){return r=Il(n,t,!0,r,i,l,d,u,h),r.context=Jd(null),n=r.current,t=Qe(),i=ds(n),l=Ur(t,i),l.callback=s!=null?s:null,is(n,l,i),r.current.lanes=i,wn(r,i,t),er(r,t),r}function ua(r,s,n,t){var i=s.current,l=Qe(),d=ds(i);return n=Jd(n),s.context===null?s.context=n:s.pendingContext=n,s=Ur(l,d),s.payload={element:r},t=t===void 0?null:t,t!==null&&(s.callback=t),r=is(i,s,d),r!==null&&(Er(r,i,d,l),Ut(r,i,d)),d}function ha(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function rp(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var n=r.retryLane;r.retryLane=n!==0&&n<s?n:s}}function zl(r,s){rp(r,s),(r=r.alternate)&&rp(r,s)}function sx(){return null}var sp=typeof reportError=="function"?reportError:function(r){console.error(r)};function Pl(r){this._internalRoot=r}xa.prototype.render=Pl.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(o(409));ua(r,s,null,null)},xa.prototype.unmount=Pl.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ss(function(){ua(null,r,null,null)}),s[Or]=null}};function xa(r){this._internalRoot=r}xa.prototype.unstable_scheduleHydration=function(r){if(r){var s=Fo();r={blockedOn:null,target:r,priority:s};for(var n=0;n<Zr.length&&s!==0&&s<Zr[n].priority;n++);Zr.splice(n,0,r),n===0&&$o(r)}};function Ll(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ma(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function np(){}function nx(r,s,n,t,i){if(i){if(typeof t=="function"){var l=t;t=function(){var y=ha(d);l.call(y)}}var d=ep(s,t,r,0,null,!1,!1,"",np);return r._reactRootContainer=d,r[Or]=d.current,Dn(r.nodeType===8?r.parentNode:r),Ss(),d}for(;i=r.lastChild;)r.removeChild(i);if(typeof t=="function"){var u=t;t=function(){var y=ha(h);u.call(y)}}var h=Il(r,0,!1,null,null,!1,!1,"",np);return r._reactRootContainer=h,r[Or]=h.current,Dn(r.nodeType===8?r.parentNode:r),Ss(function(){ua(s,h,n,t)}),h}function fa(r,s,n,t,i){var l=n._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var u=i;i=function(){var h=ha(d);u.call(h)}}ua(s,d,r,i)}else d=nx(n,s,r,i,t);return ha(d)}Do=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var n=Nn(s.pendingLanes);n!==0&&(si(s,n|1),er(s,Ce()),(oe&6)===0&&(rn=Ce()+500,ts()))}break;case 13:Ss(function(){var t=$r(r,1);if(t!==null){var i=Qe();Er(t,r,1,i)}}),zl(r,1)}},ni=function(r){if(r.tag===13){var s=$r(r,134217728);if(s!==null){var n=Qe();Er(s,r,134217728,n)}zl(r,134217728)}},Oo=function(r){if(r.tag===13){var s=ds(r),n=$r(r,s);if(n!==null){var t=Qe();Er(n,r,s,t)}zl(r,s)}},Fo=function(){return me},Wo=function(r,s){var n=me;try{return me=r,s()}finally{me=n}},Ya=function(r,s,n){switch(s){case"input":if(Ba(r,n),s=n.name,n.type==="radio"&&s!=null){for(n=r;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var t=n[s];if(t!==r&&t.form===r.form){var i=Rt(t);if(!i)throw Error(o(90));br(t),Ba(t,i)}}}break;case"textarea":mo(r,n);break;case"select":s=n.value,s!=null&&Ls(r,!!n.multiple,s,!1)}},ko=wl,So=Ss;var tx={usingClientEntryPoint:!1,Events:[Wn,$s,Rt,No,wo,wl]},et={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:et.bundleType,version:et.version,rendererPackageName:et.rendererPackageName,rendererConfig:et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Io(r),r===null?null:r.stateNode},findFiberByHostInstance:et.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{xt=ga.inject(ax),zr=ga}catch{}}return rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx,rr.createPortal=function(r,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(s))throw Error(o(200));return rx(r,s,null,n)},rr.createRoot=function(r,s){if(!Ll(r))throw Error(o(299));var n=!1,t="",i=sp;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(t=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),s=Il(r,1,!1,null,null,n,!1,t,i),r[Or]=s.current,Dn(r.nodeType===8?r.parentNode:r),new Pl(s)},rr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(o(188)):(r=Object.keys(r).join(","),Error(o(268,r)));return r=Io(s),r=r===null?null:r.stateNode,r},rr.flushSync=function(r){return Ss(r)},rr.hydrate=function(r,s,n){if(!ma(s))throw Error(o(200));return fa(null,r,s,!0,n)},rr.hydrateRoot=function(r,s,n){if(!Ll(r))throw Error(o(405));var t=n!=null&&n.hydratedSources||null,i=!1,l="",d=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),s=ep(s,null,r,1,n!=null?n:null,i,!1,l,d),r[Or]=s.current,Dn(r),t)for(r=0;r<t.length;r++)n=t[r],i=n._getVersion,i=i(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,i]:s.mutableSourceEagerHydrationData.push(n,i);return new xa(s)},rr.render=function(r,s,n){if(!ma(s))throw Error(o(200));return fa(null,r,s,!1,n)},rr.unmountComponentAtNode=function(r){if(!ma(r))throw Error(o(40));return r._reactRootContainer?(Ss(function(){fa(null,null,r,!1,function(){r._reactRootContainer=null,r[Or]=null})}),!0):!1},rr.unstable_batchedUpdates=wl,rr.unstable_renderSubtreeIntoContainer=function(r,s,n,t){if(!ma(n))throw Error(o(200));if(r==null||r._reactInternals===void 0)throw Error(o(38));return fa(r,s,n,!1,t)},rr.version="18.3.1-next-f1338f8080-20240426",rr}var pp;function xx(){if(pp)return _l.exports;pp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),_l.exports=hx(),_l.exports}var up;function mx(){if(up)return va;up=1;var a=xx();return va.createRoot=a.createRoot,va.hydrateRoot=a.hydrateRoot,va}var fx=mx(),V=ro();const dr=lx(V);var Pp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hp=dr.createContext&&dr.createContext(Pp),gx=["attr","size","title"];function vx(a,c){if(a==null)return{};var o=yx(a,c),p,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(a);for(g=0;g<j.length;g++)p=j[g],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(o[p]=a[p])}return o}function yx(a,c){if(a==null)return{};var o={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;o[p]=a[p]}return o}function Ca(){return Ca=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(a[p]=o[p])}return a},Ca.apply(this,arguments)}function xp(a,c){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(g){return Object.getOwnPropertyDescriptor(a,g).enumerable})),o.push.apply(o,p)}return o}function Ta(a){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?xp(Object(o),!0).forEach(function(p){jx(a,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):xp(Object(o)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(o,p))})}return a}function jx(a,c,o){return c=bx(c),c in a?Object.defineProperty(a,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[c]=o,a}function bx(a){var c=Nx(a,"string");return typeof c=="symbol"?c:c+""}function Nx(a,c){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var p=o.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function Lp(a){return a&&a.map((c,o)=>dr.createElement(c.tag,Ta({key:o},c.attr),Lp(c.child)))}function A(a){return c=>dr.createElement(wx,Ca({attr:Ta({},a.attr)},c),Lp(a.child))}function wx(a){var c=o=>{var{attr:p,size:g,title:j}=a,C=vx(a,gx),R=g||o.size||"1em",T;return o.className&&(T=o.className),a.className&&(T=(T?T+" ":"")+a.className),dr.createElement("svg",Ca({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,p,C,{className:T,style:Ta(Ta({color:a.color||o.color},o.style),a.style),height:R,width:R,xmlns:"http://www.w3.org/2000/svg"}),j&&dr.createElement("title",null,j),a.children)};return hp!==void 0?dr.createElement(hp.Consumer,null,o=>c(o)):c(Pp)}function kx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function Sx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function an(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Cx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function Rp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(a)}function Ul(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Ra(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function ln(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function tt(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(a)}function Re(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function on(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},child:[]},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"},child:[]}]})(a)}function Ap(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function _p(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Tx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function Ex(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(a)}function Ix(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function zx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function Px(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(a)}function so(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function Lx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(a)}function no(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function ms(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function Rx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(a)}function Vl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function Ax(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(a)}function _x(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function Mp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Mx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function Dx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Ox(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function Ye(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Dp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Op(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function Fp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Fx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function Hl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(a)}function Wx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(a)}function Bx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(a)}function $x(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function Gl(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(a)}function at(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function qr(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Ux(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"path",attr:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"},child:[]}]})(a)}function Vx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function ql(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function Ea(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(a)}function Qr(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Hx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function Gx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(a)}function qx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function Qx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function Wp(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(a)}function lt(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(a)}function to(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Yx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(a)}function Kx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(a)}function cn(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function Xx(a){return A({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}var sr=function(){return sr=Object.assign||function(c){for(var o,p=1,g=arguments.length;p<g;p++){o=arguments[p];for(var j in o)Object.prototype.hasOwnProperty.call(o,j)&&(c[j]=o[j])}return c},sr.apply(this,arguments)};function Ia(a,c,o){if(o||arguments.length===2)for(var p=0,g=c.length,j;p<g;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return a.concat(j||Array.prototype.slice.call(c))}var be="-ms-",nt="-moz-",xe="-webkit-",Bp="comm",Aa="rule",ao="decl",Zx="@import",$p="@keyframes",Jx="@layer",Up=Math.abs,io=String.fromCharCode,Ql=Object.assign;function em(a,c){return De(a,0)^45?(((c<<2^De(a,0))<<2^De(a,1))<<2^De(a,2))<<2^De(a,3):0}function Vp(a){return a.trim()}function Gr(a,c){return(a=c.exec(a))?a[0]:a}function J(a,c,o){return a.replace(c,o)}function ba(a,c,o){return a.indexOf(c,o)}function De(a,c){return a.charCodeAt(c)|0}function dn(a,c,o){return a.slice(c,o)}function _r(a){return a.length}function Hp(a){return a.length}function st(a,c){return c.push(a),a}function rm(a,c){return a.map(c).join("")}function mp(a,c){return a.filter(function(o){return!Gr(o,c)})}var _a=1,pn=1,Gp=0,yr=0,Ie=0,mn="";function Ma(a,c,o,p,g,j,C,R){return{value:a,root:c,parent:o,type:p,props:g,children:j,line:_a,column:pn,length:C,return:"",siblings:R}}function xs(a,c){return Ql(Ma("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function nn(a){for(;a.root;)a=xs(a.root,{children:[a]});st(a,a.siblings)}function sm(){return Ie}function nm(){return Ie=yr>0?De(mn,--yr):0,pn--,Ie===10&&(pn=1,_a--),Ie}function Ir(){return Ie=yr<Gp?De(mn,yr++):0,pn++,Ie===10&&(pn=1,_a++),Ie}function zs(){return De(mn,yr)}function Na(){return yr}function Da(a,c){return dn(mn,a,c)}function Yl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tm(a){return _a=pn=1,Gp=_r(mn=a),yr=0,[]}function am(a){return mn="",a}function Ol(a){return Vp(Da(yr-1,Kl(a===91?a+2:a===40?a+1:a)))}function im(a){for(;(Ie=zs())&&Ie<33;)Ir();return Yl(a)>2||Yl(Ie)>3?"":" "}function lm(a,c){for(;--c&&Ir()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Da(a,Na()+(c<6&&zs()==32&&Ir()==32))}function Kl(a){for(;Ir();)switch(Ie){case a:return yr;case 34:case 39:a!==34&&a!==39&&Kl(Ie);break;case 40:a===41&&Kl(a);break;case 92:Ir();break}return yr}function om(a,c){for(;Ir()&&a+Ie!==57;)if(a+Ie===84&&zs()===47)break;return"/*"+Da(c,yr-1)+"*"+io(a===47?a:Ir())}function cm(a){for(;!Yl(zs());)Ir();return Da(a,yr)}function dm(a){return am(wa("",null,null,null,[""],a=tm(a),0,[0],a))}function wa(a,c,o,p,g,j,C,R,T){for(var q=0,H=0,O=C,F=0,Q=0,te=0,G=1,X=1,he=1,le=0,ae="",ee=g,pe=j,Y=p,$=ae;X;)switch(te=le,le=Ir()){case 40:if(te!=108&&De($,O-1)==58){ba($+=J(Ol(le),"&","&\f"),"&\f",Up(q?R[q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:$+=Ol(le);break;case 9:case 10:case 13:case 32:$+=im(te);break;case 92:$+=lm(Na()-1,7);continue;case 47:switch(zs()){case 42:case 47:st(pm(om(Ir(),Na()),c,o,T),T);break;default:$+="/"}break;case 123*G:R[q++]=_r($)*he;case 125*G:case 59:case 0:switch(le){case 0:case 125:X=0;case 59+H:he==-1&&($=J($,/\f/g,"")),Q>0&&_r($)-O&&st(Q>32?gp($+";",p,o,O-1,T):gp(J($," ","")+";",p,o,O-2,T),T);break;case 59:$+=";";default:if(st(Y=fp($,c,o,q,H,g,R,ae,ee=[],pe=[],O,j),j),le===123)if(H===0)wa($,c,Y,Y,ee,j,O,R,pe);else switch(F===99&&De($,3)===110?100:F){case 100:case 108:case 109:case 115:wa(a,Y,Y,p&&st(fp(a,Y,Y,0,0,g,R,ae,g,ee=[],O,pe),pe),g,pe,O,R,p?ee:pe);break;default:wa($,Y,Y,Y,[""],pe,0,R,pe)}}q=H=Q=0,G=he=1,ae=$="",O=C;break;case 58:O=1+_r($),Q=te;default:if(G<1){if(le==123)--G;else if(le==125&&G++==0&&nm()==125)continue}switch($+=io(le),le*G){case 38:he=H>0?1:($+="\f",-1);break;case 44:R[q++]=(_r($)-1)*he,he=1;break;case 64:zs()===45&&($+=Ol(Ir())),F=zs(),H=O=_r(ae=$+=cm(Na())),le++;break;case 45:te===45&&_r($)==2&&(G=0)}}return j}function fp(a,c,o,p,g,j,C,R,T,q,H,O){for(var F=g-1,Q=g===0?j:[""],te=Hp(Q),G=0,X=0,he=0;G<p;++G)for(var le=0,ae=dn(a,F+1,F=Up(X=C[G])),ee=a;le<te;++le)(ee=Vp(X>0?Q[le]+" "+ae:J(ae,/&\f/g,Q[le])))&&(T[he++]=ee);return Ma(a,c,o,g===0?Aa:R,T,q,H,O)}function pm(a,c,o,p){return Ma(a,c,o,Bp,io(sm()),dn(a,2,-2),0,p)}function gp(a,c,o,p,g){return Ma(a,c,o,ao,dn(a,0,p),dn(a,p+1,-1),p,g)}function qp(a,c,o){switch(em(a,c)){case 5103:return xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+a+a;case 4789:return nt+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+a+nt+a+be+a+a;case 5936:switch(De(a,c+11)){case 114:return xe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return xe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return xe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return xe+a+be+a+a;case 6165:return xe+a+be+"flex-"+a+a;case 5187:return xe+a+J(a,/(\w+).+(:[^]+)/,xe+"box-$1$2"+be+"flex-$1$2")+a;case 5443:return xe+a+be+"flex-item-"+J(a,/flex-|-self/g,"")+(Gr(a,/flex-|baseline/)?"":be+"grid-row-"+J(a,/flex-|-self/g,""))+a;case 4675:return xe+a+be+"flex-line-pack"+J(a,/align-content|flex-|-self/g,"")+a;case 5548:return xe+a+be+J(a,"shrink","negative")+a;case 5292:return xe+a+be+J(a,"basis","preferred-size")+a;case 6060:return xe+"box-"+J(a,"-grow","")+xe+a+be+J(a,"grow","positive")+a;case 4554:return xe+J(a,/([^-])(transform)/g,"$1"+xe+"$2")+a;case 6187:return J(J(J(a,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),a,"")+a;case 5495:case 3959:return J(a,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return J(J(a,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+a+a;case 4200:if(!Gr(a,/flex-|baseline/))return be+"grid-column-align"+dn(a,c)+a;break;case 2592:case 3360:return be+J(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(p,g){return c=g,Gr(p.props,/grid-\w+-end/)})?~ba(a+(o=o[c].value),"span",0)?a:be+J(a,"-start","")+a+be+"grid-row-span:"+(~ba(o,"span",0)?Gr(o,/\d+/):+Gr(o,/\d+/)-+Gr(a,/\d+/))+";":be+J(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(p){return Gr(p.props,/grid-\w+-start/)})?a:be+J(J(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return J(a,/(.+)-inline(.+)/,xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(a)-1-c>6)switch(De(a,c+1)){case 109:if(De(a,c+4)!==45)break;case 102:return J(a,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+nt+(De(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~ba(a,"stretch",0)?qp(J(a,"stretch","fill-available"),c,o)+a:a}break;case 5152:case 5920:return J(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,g,j,C,R,T,q){return be+g+":"+j+q+(C?be+g+"-span:"+(R?T:+T-+j)+q:"")+a});case 4949:if(De(a,c+6)===121)return J(a,":",":"+xe)+a;break;case 6444:switch(De(a,De(a,14)===45?18:11)){case 120:return J(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(De(a,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+be+"$2box$3")+a;case 100:return J(a,":",":"+be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(a,"scroll-","scroll-snap-")+a}return a}function za(a,c){for(var o="",p=0;p<a.length;p++)o+=c(a[p],p,a,c)||"";return o}function um(a,c,o,p){switch(a.type){case Jx:if(a.children.length)break;case Zx:case ao:return a.return=a.return||a.value;case Bp:return"";case $p:return a.return=a.value+"{"+za(a.children,p)+"}";case Aa:if(!_r(a.value=a.props.join(",")))return""}return _r(o=za(a.children,p))?a.return=a.value+"{"+o+"}":""}function hm(a){var c=Hp(a);return function(o,p,g,j){for(var C="",R=0;R<c;R++)C+=a[R](o,p,g,j)||"";return C}}function xm(a){return function(c){c.root||(c=c.return)&&a(c)}}function mm(a,c,o,p){if(a.length>-1&&!a.return)switch(a.type){case ao:a.return=qp(a.value,a.length,o);return;case $p:return za([xs(a,{value:J(a.value,"@","@"+xe)})],p);case Aa:if(a.length)return rm(o=a.props,function(g){switch(Gr(g,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(xs(a,{props:[J(g,/:(read-\w+)/,":"+nt+"$1")]})),nn(xs(a,{props:[g]})),Ql(a,{props:mp(o,p)});break;case"::placeholder":nn(xs(a,{props:[J(g,/:(plac\w+)/,":"+xe+"input-$1")]})),nn(xs(a,{props:[J(g,/:(plac\w+)/,":"+nt+"$1")]})),nn(xs(a,{props:[J(g,/:(plac\w+)/,be+"input-$1")]})),nn(xs(a,{props:[g]})),Ql(a,{props:mp(o,p)});break}return""})}}var fm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr={},un=typeof process!="undefined"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",Qp="active",Yp="data-styled-version",Oa="6.1.18",lo=`/*!sc*/
`,Pa=typeof window!="undefined"&&typeof document!="undefined",gm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&cr!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==""?cr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&cr!==void 0&&cr.SC_DISABLE_SPEEDY!==void 0&&cr.SC_DISABLE_SPEEDY!==""&&cr.SC_DISABLE_SPEEDY!=="false"&&cr.SC_DISABLE_SPEEDY),Fa=Object.freeze([]),hn=Object.freeze({});function vm(a,c,o){return o===void 0&&(o=hn),a.theme!==o.theme&&a.theme||c||o.theme}var Kp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ym=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jm=/(^-|-$)/g;function vp(a){return a.replace(ym,"-").replace(jm,"")}var bm=/(a)(d)/gi,ya=52,yp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Xl(a){var c,o="";for(c=Math.abs(a);c>ya;c=c/ya|0)o=yp(c%ya)+o;return(yp(c%ya)+o).replace(bm,"$1-$2")}var Fl,Xp=5381,tn=function(a,c){for(var o=c.length;o;)a=33*a^c.charCodeAt(--o);return a},Zp=function(a){return tn(Xp,a)};function Nm(a){return Xl(Zp(a)>>>0)}function wm(a){return a.displayName||a.name||"Component"}function Wl(a){return typeof a=="string"&&!0}var Jp=typeof Symbol=="function"&&Symbol.for,eu=Jp?Symbol.for("react.memo"):60115,km=Jp?Symbol.for("react.forward_ref"):60112,Sm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ru={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tm=((Fl={})[km]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fl[eu]=ru,Fl);function jp(a){return("type"in(c=a)&&c.type.$$typeof)===eu?ru:"$$typeof"in a?Tm[a.$$typeof]:Sm;var c}var Em=Object.defineProperty,Im=Object.getOwnPropertyNames,bp=Object.getOwnPropertySymbols,zm=Object.getOwnPropertyDescriptor,Pm=Object.getPrototypeOf,Np=Object.prototype;function su(a,c,o){if(typeof c!="string"){if(Np){var p=Pm(c);p&&p!==Np&&su(a,p,o)}var g=Im(c);bp&&(g=g.concat(bp(c)));for(var j=jp(a),C=jp(c),R=0;R<g.length;++R){var T=g[R];if(!(T in Cm||o&&o[T]||C&&T in C||j&&T in j)){var q=zm(c,T);try{Em(a,T,q)}catch{}}}}return a}function xn(a){return typeof a=="function"}function oo(a){return typeof a=="object"&&"styledComponentId"in a}function Is(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function wp(a,c){if(a.length===0)return"";for(var o=a[0],p=1;p<a.length;p++)o+=a[p];return o}function it(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Zl(a,c,o){if(o===void 0&&(o=!1),!o&&!it(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=Zl(a[p],c[p]);else if(it(c))for(var p in c)a[p]=Zl(a[p],c[p]);return a}function co(a,c){Object.defineProperty(a,"toString",{value:c})}function ot(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Lm=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return a.prototype.indexOfGroup=function(c){for(var o=0,p=0;p<c;p++)o+=this.groupSizes[p];return o},a.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var p=this.groupSizes,g=p.length,j=g;c>=j;)if((j<<=1)<0)throw ot(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var C=g;C<j;C++)this.groupSizes[C]=0}for(var R=this.indexOfGroup(c+1),T=(C=0,o.length);C<T;C++)this.tag.insertRule(R,o[C])&&(this.groupSizes[c]++,R++)},a.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],p=this.indexOfGroup(c),g=p+o;this.groupSizes[c]=0;for(var j=p;j<g;j++)this.tag.deleteRule(p)}},a.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var p=this.groupSizes[c],g=this.indexOfGroup(c),j=g+p,C=g;C<j;C++)o+="".concat(this.tag.getRule(C)).concat(lo);return o},a})(),ka=new Map,La=new Map,Sa=1,ja=function(a){if(ka.has(a))return ka.get(a);for(;La.has(Sa);)Sa++;var c=Sa++;return ka.set(a,c),La.set(c,a),c},Rm=function(a,c){Sa=c+1,ka.set(a,c),La.set(c,a)},Am="style[".concat(un,"][").concat(Yp,'="').concat(Oa,'"]'),_m=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mm=function(a,c,o){for(var p,g=o.split(","),j=0,C=g.length;j<C;j++)(p=g[j])&&a.registerName(c,p)},Dm=function(a,c){for(var o,p=((o=c.textContent)!==null&&o!==void 0?o:"").split(lo),g=[],j=0,C=p.length;j<C;j++){var R=p[j].trim();if(R){var T=R.match(_m);if(T){var q=0|parseInt(T[1],10),H=T[2];q!==0&&(Rm(H,q),Mm(a,H,T[3]),a.getTag().insertRules(q,g)),g.length=0}else g.push(R)}}},kp=function(a){for(var c=document.querySelectorAll(Am),o=0,p=c.length;o<p;o++){var g=c[o];g&&g.getAttribute(un)!==Qp&&(Dm(a,g),g.parentNode&&g.parentNode.removeChild(g))}};function Om(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var nu=function(a){var c=document.head,o=a||c,p=document.createElement("style"),g=(function(R){var T=Array.from(R.querySelectorAll("style[".concat(un,"]")));return T[T.length-1]})(o),j=g!==void 0?g.nextSibling:null;p.setAttribute(un,Qp),p.setAttribute(Yp,Oa);var C=Om();return C&&p.setAttribute("nonce",C),o.insertBefore(p,j),p},Fm=(function(){function a(c){this.element=nu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var p=document.styleSheets,g=0,j=p.length;g<j;g++){var C=p[g];if(C.ownerNode===o)return C}throw ot(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},a})(),Wm=(function(){function a(c){this.element=nu(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var p=document.createTextNode(o);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),Bm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Sp=Pa,$m={isServer:!Pa,useCSSOMInjection:!gm},tu=(function(){function a(c,o,p){c===void 0&&(c=hn),o===void 0&&(o={});var g=this;this.options=sr(sr({},$m),c),this.gs=o,this.names=new Map(p),this.server=!!c.isServer,!this.server&&Pa&&Sp&&(Sp=!1,kp(this)),co(this,function(){return(function(j){for(var C=j.getTag(),R=C.length,T="",q=function(O){var F=(function(he){return La.get(he)})(O);if(F===void 0)return"continue";var Q=j.names.get(F),te=C.getGroup(O);if(Q===void 0||!Q.size||te.length===0)return"continue";var G="".concat(un,".g").concat(O,'[id="').concat(F,'"]'),X="";Q!==void 0&&Q.forEach(function(he){he.length>0&&(X+="".concat(he,","))}),T+="".concat(te).concat(G,'{content:"').concat(X,'"}').concat(lo)},H=0;H<R;H++)q(H);return T})(g)})}return a.registerId=function(c){return ja(c)},a.prototype.rehydrate=function(){!this.server&&Pa&&kp(this)},a.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new a(sr(sr({},this.options),c),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var p=o.useCSSOMInjection,g=o.target;return o.isServer?new Bm(g):p?new Fm(g):new Wm(g)})(this.options),new Lm(c)));var c},a.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},a.prototype.registerName=function(c,o){if(ja(c),this.names.has(c))this.names.get(c).add(o);else{var p=new Set;p.add(o),this.names.set(c,p)}},a.prototype.insertRules=function(c,o,p){this.registerName(c,o),this.getTag().insertRules(ja(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(ja(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Um=/&/g,Vm=/^\s*\/\/.*$/gm;function au(a,c){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=au(o.children,c)),o})}function Hm(a){var c,o,p,g=hn,j=g.options,C=j===void 0?hn:j,R=g.plugins,T=R===void 0?Fa:R,q=function(F,Q,te){return te.startsWith(o)&&te.endsWith(o)&&te.replaceAll(o,"").length>0?".".concat(c):F},H=T.slice();H.push(function(F){F.type===Aa&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(Um,o).replace(p,q))}),C.prefix&&H.push(mm),H.push(um);var O=function(F,Q,te,G){Q===void 0&&(Q=""),te===void 0&&(te=""),G===void 0&&(G="&"),c=G,o=Q,p=new RegExp("\\".concat(o,"\\b"),"g");var X=F.replace(Vm,""),he=dm(te||Q?"".concat(te," ").concat(Q," { ").concat(X," }"):X);C.namespace&&(he=au(he,C.namespace));var le=[];return za(he,hm(H.concat(xm(function(ae){return le.push(ae)})))),le};return O.hash=T.length?T.reduce(function(F,Q){return Q.name||ot(15),tn(F,Q.name)},Xp).toString():"",O}var Gm=new tu,Jl=Hm(),iu=dr.createContext({shouldForwardProp:void 0,styleSheet:Gm,stylis:Jl});iu.Consumer;dr.createContext(void 0);function Cp(){return V.useContext(iu)}var qm=(function(){function a(c,o){var p=this;this.inject=function(g,j){j===void 0&&(j=Jl);var C=p.name+j.hash;g.hasNameForId(p.id,C)||g.insertRules(p.id,C,j(p.rules,C,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,co(this,function(){throw ot(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=Jl),this.name+c.hash},a})(),Qm=function(a){return a>="A"&&a<="Z"};function Tp(a){for(var c="",o=0;o<a.length;o++){var p=a[o];if(o===1&&p==="-"&&a[0]==="-")return a;Qm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var lu=function(a){return a==null||a===!1||a===""},ou=function(a){var c,o,p=[];for(var g in a){var j=a[g];a.hasOwnProperty(g)&&!lu(j)&&(Array.isArray(j)&&j.isCss||xn(j)?p.push("".concat(Tp(g),":"),j,";"):it(j)?p.push.apply(p,Ia(Ia(["".concat(g," {")],ou(j),!1),["}"],!1)):p.push("".concat(Tp(g),": ").concat((c=g,(o=j)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in fm||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return p};function Ps(a,c,o,p){if(lu(a))return[];if(oo(a))return[".".concat(a.styledComponentId)];if(xn(a)){if(!xn(j=a)||j.prototype&&j.prototype.isReactComponent||!c)return[a];var g=a(c);return Ps(g,c,o,p)}var j;return a instanceof qm?o?(a.inject(o,p),[a.getName(p)]):[a]:it(a)?ou(a):Array.isArray(a)?Array.prototype.concat.apply(Fa,a.map(function(C){return Ps(C,c,o,p)})):[a.toString()]}function Ym(a){for(var c=0;c<a.length;c+=1){var o=a[c];if(xn(o)&&!oo(o))return!1}return!0}var Km=Zp(Oa),Xm=(function(){function a(c,o,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Ym(c),this.componentId=o,this.baseHash=tn(Km,o),this.baseStyle=p,tu.registerId(o)}return a.prototype.generateAndInjectStyles=function(c,o,p){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))g=Is(g,this.staticRulesId);else{var j=wp(Ps(this.rules,c,o,p)),C=Xl(tn(this.baseHash,j)>>>0);if(!o.hasNameForId(this.componentId,C)){var R=p(j,".".concat(C),void 0,this.componentId);o.insertRules(this.componentId,C,R)}g=Is(g,C),this.staticRulesId=C}else{for(var T=tn(this.baseHash,p.hash),q="",H=0;H<this.rules.length;H++){var O=this.rules[H];if(typeof O=="string")q+=O;else if(O){var F=wp(Ps(O,c,o,p));T=tn(T,F+H),q+=F}}if(q){var Q=Xl(T>>>0);o.hasNameForId(this.componentId,Q)||o.insertRules(this.componentId,Q,p(q,".".concat(Q),void 0,this.componentId)),g=Is(g,Q)}}return g},a})(),cu=dr.createContext(void 0);cu.Consumer;var Bl={};function Zm(a,c,o){var p=oo(a),g=a,j=!Wl(a),C=c.attrs,R=C===void 0?Fa:C,T=c.componentId,q=T===void 0?(function(ee,pe){var Y=typeof ee!="string"?"sc":vp(ee);Bl[Y]=(Bl[Y]||0)+1;var $="".concat(Y,"-").concat(Nm(Oa+Y+Bl[Y]));return pe?"".concat(pe,"-").concat($):$})(c.displayName,c.parentComponentId):T,H=c.displayName,O=H===void 0?(function(ee){return Wl(ee)?"styled.".concat(ee):"Styled(".concat(wm(ee),")")})(a):H,F=c.displayName&&c.componentId?"".concat(vp(c.displayName),"-").concat(c.componentId):c.componentId||q,Q=p&&g.attrs?g.attrs.concat(R).filter(Boolean):R,te=c.shouldForwardProp;if(p&&g.shouldForwardProp){var G=g.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;te=function(ee,pe){return G(ee,pe)&&X(ee,pe)}}else te=G}var he=new Xm(o,F,p?g.componentStyle:void 0);function le(ee,pe){return(function(Y,$,ze){var nr=Y.attrs,jr=Y.componentStyle,Mr=Y.defaultProps,pr=Y.foldedComponentIds,Ge=Y.styledComponentId,tr=Y.target,ur=dr.useContext(cu),Be=Cp(),ge=Y.shouldForwardProp||Be.shouldForwardProp,E=vm($,ur,Mr)||hn,D=(function(ne,re,ue){for(var ie,ce=sr(sr({},re),{className:void 0,theme:ue}),Oe=0;Oe<ne.length;Oe+=1){var Dr=xn(ie=ne[Oe])?ie(ce):ie;for(var br in Dr)ce[br]=br==="className"?Is(ce[br],Dr[br]):br==="style"?sr(sr({},ce[br]),Dr[br]):Dr[br]}return re.className&&(ce.className=Is(ce.className,re.className)),ce})(nr,$,E),I=D.as||tr,m={};for(var b in D)D[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&D.theme===E||(b==="forwardedAs"?m.as=D.forwardedAs:ge&&!ge(b,I)||(m[b]=D[b]));var K=(function(ne,re){var ue=Cp(),ie=ne.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ie})(jr,D),Z=Is(pr,Ge);return K&&(Z+=" "+K),D.className&&(Z+=" "+D.className),m[Wl(I)&&!Kp.has(I)?"class":"className"]=Z,ze&&(m.ref=ze),V.createElement(I,m)})(ae,ee,pe)}le.displayName=O;var ae=dr.forwardRef(le);return ae.attrs=Q,ae.componentStyle=he,ae.displayName=O,ae.shouldForwardProp=te,ae.foldedComponentIds=p?Is(g.foldedComponentIds,g.styledComponentId):"",ae.styledComponentId=F,ae.target=p?g.target:a,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=p?(function(pe){for(var Y=[],$=1;$<arguments.length;$++)Y[$-1]=arguments[$];for(var ze=0,nr=Y;ze<nr.length;ze++)Zl(pe,nr[ze],!0);return pe})({},g.defaultProps,ee):ee}}),co(ae,function(){return".".concat(ae.styledComponentId)}),j&&su(ae,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Ep(a,c){for(var o=[a[0]],p=0,g=c.length;p<g;p+=1)o.push(c[p],a[p+1]);return o}var Ip=function(a){return Object.assign(a,{isCss:!0})};function Jm(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(xn(a)||it(a))return Ip(Ps(Ep(Fa,Ia([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ps(p):Ip(Ps(Ep(p,c)))}function eo(a,c,o){if(o===void 0&&(o=hn),!c)throw ot(1,c);var p=function(g){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];return a(c,o,Jm.apply(void 0,Ia([g],j,!1)))};return p.attrs=function(g){return eo(a,c,sr(sr({},o),{attrs:Array.prototype.concat(o.attrs,g).filter(Boolean)}))},p.withConfig=function(g){return eo(a,c,sr(sr({},o),g))},p}var du=function(a){return eo(Zm,a)},fe=du;Kp.forEach(function(a){fe[a]=du(a)});const ef={Wrapper:fe.div`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 60;

        button {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border-light);
            border-radius: 50%;
            color: var(--color-bg);
            background: var(--color-primary);
            cursor: pointer;
            transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease;
        }

        button:hover {
            border-color: var(--color-text-primary);
            box-shadow: 0 0 18px color-mix(in srgb, var(--color-primary) 30%, transparent);
            text-shadow: 0 0 8px color-mix(in srgb, var(--color-bg) 35%, transparent);
        }

        @media (width < 600px) {
            right: 16px;
            bottom: 16px;
        }
    `},rf=({scrollContainerRef:a})=>{const[c,o]=V.useState(!1);return V.useEffect(()=>{const p=a==null?void 0:a.current;if(!p)return;const g=()=>{o(p.scrollTop>360)};return p.addEventListener("scroll",g,{passive:!0}),g(),()=>p.removeEventListener("scroll",g)},[a]),c?e.jsx(ef.Wrapper,{children:e.jsx("button",{type:"button",onClick:()=>{var p;return(p=a.current)==null?void 0:p.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Scroll to top",title:"Scroll to top",children:e.jsx(Cx,{"aria-hidden":"true"})})}):null},$l={Wrapper:fe.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:fe.header`
        /* border: 1px solid #f00; */
        height: 64px;
        flex-shrink: 0;
    `,Main:fe.main`
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
    `},zp={Wrapper:fe.header`
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

        position: fixed;
        left: 0;
        right: 0;
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
    `,Main:fe.div`
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
    `},sf=()=>{const[a,c]=V.useState(()=>localStorage.getItem("app-theme")||"dark");V.useEffect(()=>{document.documentElement.toggleAttribute("data-theme",a==="light"),localStorage.setItem("app-theme",a)},[a]);const o=V.useMemo(()=>a==="light"?"dark":"light",[a]);return e.jsx(zp.Wrapper,{children:e.jsxs(zp.Main,{children:[e.jsxs("div",{className:"leftSide",children:[e.jsxs("div",{className:"logoNameWrapper",children:[e.jsx("div",{className:"logoWrapper",children:e.jsx("img",{src:"/software-engineering-core-notes/logo.png",alt:"Software engineering core notes"})}),e.jsxs("div",{className:"nameWrapper",children:[e.jsx("div",{className:"title",children:"software-engineering-core-notes"}),e.jsx("div",{className:"subTitle",children:"At-a-glance software engineering revision"})]})]}),e.jsxs("div",{className:"miniStats","aria-label":"Quick focus areas",children:[e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(ms,{})}),e.jsx("span",{className:"sText",children:"Workflow"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(ln,{})}),e.jsx("span",{className:"sText",children:"Quality"})]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:"sIcon",children:e.jsx(lt,{})}),e.jsx("span",{className:"sText",children:"Delivery"})]})]})]}),e.jsx("div",{className:"rightSide",children:e.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>c(p=>p==="light"?"dark":"light"),"aria-label":"Switch to "+o+" theme",title:"Switch to "+o,children:[e.jsx("span",{className:"icon",children:a==="light"?e.jsx($x,{}):e.jsx(Qx,{})}),e.jsx("span",{className:"label",children:a==="light"?"Light":"Dark"})]})})]})})};function nf(a){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(a)}function tf(a){return A({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(a)}function af(a){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(a)}function lf(a){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(a)}function of(a){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}const cf={Wrapper:fe.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 15px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .footerCopy a {
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .footerCopy a:hover {
            color: var(--color-text-primary);
            text-shadow: 0 0 14px color-mix(in srgb, var(--color-primary) 30%, transparent);
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .footerLinks a {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-muted);
            transition: border-color 160ms ease, color 160ms ease, box-shadow 160ms ease;
        }

        .footerLinks a:hover {
            color: var(--color-primary);
            border-color: var(--color-border-light);
            box-shadow: 0 0 15px color-mix(in srgb, var(--color-primary) 18%, transparent);
        }

        .footerLinks svg {
            width: 16px;
            height: 16px;
        }

        @media (width < 600px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;

            .footerLinks {
                justify-content: flex-start;
            }
        }
    `},df=[["Portfolio","https://www.ashishranjan.net/",_x],["GitHub","https://github.com/a2rp",Ax],["CodePen","https://codepen.io/ash1198",nf],["LinkedIn","https://www.linkedin.com/in/aashishranjan",af],["Facebook","https://www.facebook.com/theash.ashish/",tf],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",of],["Support","https://a2rp-donation-page.netlify.app/",Dx],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Tx],["Patreon","https://patreon.com/a2rp",lf],["Email","mailto:ash.ranjan09@gmail.com",Fx]],pf=()=>e.jsxs(cf.Wrapper,{children:[e.jsxs("div",{className:"footerCopy",children:["Copyright © ",new Date().getFullYear()," ",e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),e.jsx("div",{className:"footerLinks","aria-label":"Social and support links",children:df.map(([a,c,o])=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":a,title:a,children:V.createElement(o,{"aria-hidden":!0})},a))})]}),uf={Wrapper:fe.section`
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
    `},hf=()=>e.jsxs(uf.Wrapper,{id:"aboutSoftwareEngineering",children:[e.jsxs("div",{className:"top",children:[e.jsx("h2",{className:"title",children:"Software Engineering"}),e.jsx("p",{className:"sub",children:"Software Engineering is the discipline of building software in a structured, reliable, and maintainable way. It is not just writing code. It includes planning, requirements, design, testing, deployment, and long-term maintenance."}),e.jsx("p",{className:"sub",children:"A programmer writes features. A software engineer designs systems that survive real users, scaling, deadlines, and change. The goal is predictable delivery and sustainable quality."}),e.jsx("p",{className:"sub",children:"This page focuses on SDLC, requirements, architecture basics, version control, testing, DevOps, and quality practices that matter in real production environments."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Lifecycle Thinking"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Requirements"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Design"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintain"})]}),e.jsx("p",{className:"note",children:"Software is a process, not a one-time event."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(_p,{})}),e.jsx("h3",{className:"h3",children:"Engineering Principles"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"SOLID principles"}),e.jsx("li",{children:"Low coupling and high cohesion"}),e.jsx("li",{children:"Clean code practices"}),e.jsx("li",{children:"Version control and code reviews"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"icon",children:e.jsx(tt,{})}),e.jsx("h3",{className:"h3",children:"Quality and Delivery"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Unit and integration testing"}),e.jsx("li",{children:"CI and CD pipelines"}),e.jsx("li",{children:"Monitoring and maintenance"}),e.jsx("li",{children:"Technical debt management"})]})]})]})]}),xf={Wrapper:fe.section`
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
    `},mf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"whatIsSoftwareEngineering",title:"What is Software Engineering",sub:"Definition, programming vs engineering, why it exists, and SDLC meaning with real examples."}),[]);return e.jsxs(xf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Ul,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Foundations"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(lt,{})}),e.jsx("h3",{className:"h3",children:"Definition"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software Engineering"})," is the disciplined way of building software so it is"," ",e.jsx("b",{children:"reliable"}),", ",e.jsx("b",{children:"maintainable"}),","," ",e.jsx("b",{children:"testable"}),", and ",e.jsx("b",{children:"deliverable"})," in the real world. It includes planning, designing, coding, testing, deployment, and maintenance."]}),e.jsx("p",{className:"p",children:"Simple example: Writing a login screen is programming. Making sure login works securely, handles failures, logs issues, scales to many users, and can be changed later without breaking other features is software engineering."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Ship"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Operate"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Improve"})]}),e.jsx("p",{className:"note",children:"Engineering is about building things that survive time, change, and real users."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(_p,{})}),e.jsx("h3",{className:"h3",children:"Programming vs Software Engineering"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Programming"}),e.jsxs("div",{className:"v",children:["Writing code to solve a problem or build a feature.",e.jsx("span",{className:"small",children:"Example: Write a function to calculate total cart price."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Software Engineering"}),e.jsxs("div",{className:"v",children:["Building a full system around code so it stays correct, usable, and easy to change.",e.jsx("span",{className:"small",children:"Example: Cart system with validations, tests, API contracts, logs, monitoring, and rollback plan."})]})]})]}),e.jsx("p",{className:"note",children:"Think: programming is a part of software engineering, not the full thing."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ln,{})}),e.jsx("h3",{className:"h3",children:"Why SE exists"})]}),e.jsx("p",{className:"p",children:"Software Engineering exists because real software is built by teams, used by many users, and must keep working for years."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Scale of work"})," - projects have thousands of files and many developers."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Change is constant"})," - new features, bug fixes, refactors, new requirements."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Quality matters"})," - bugs cause money loss, trust loss, security issues."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Time and budget"})," - delivery must be predictable."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Production reality"})," - failures happen, so we need logs, monitoring, and rollback plans."]})]}),e.jsx("p",{className:"note",children:"Without SE practices, software becomes slow to change, easy to break, and costly to maintain."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"SDLC meaning - Software Development Life Cycle"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SDLC"})," stands for"," ",e.jsx("b",{children:"Software Development Life Cycle"}),". It is the step-by-step process used to build software from idea to production and beyond."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Requirements"}),e.jsxs("div",{className:"d",children:["Understand what to build and why.",e.jsx("span",{className:"small",children:'Example: "Users should reset password using email OTP."'})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Design"}),e.jsxs("div",{className:"d",children:["Plan the structure of the solution.",e.jsx("span",{className:"small",children:"Example: database tables, API endpoints, UI flow, security rules."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Implementation"}),e.jsxs("div",{className:"d",children:["Write the code and integrate components.",e.jsx("span",{className:"small",children:"Example: build OTP service, email sending, UI screens, backend validation."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Testing"}),e.jsxs("div",{className:"d",children:["Verify correctness and catch bugs early.",e.jsx("span",{className:"small",children:"Example: unit tests for OTP logic, integration test for reset flow."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Deployment"}),e.jsxs("div",{className:"d",children:["Release to users safely.",e.jsx("span",{className:"small",children:"Example: deploy backend, migrate database, release frontend build."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"6"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Maintenance"}),e.jsxs("div",{className:"d",children:["Monitor, fix issues, improve performance, and add features.",e.jsx("span",{className:"small",children:"Example: bugfix for edge case, improve logs, optimize DB query."})]})]})]})]}),e.jsx("p",{className:"note",children:"SDLC is not always strict steps. In Agile, these steps repeat in small cycles every sprint."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Programming writes code. Software engineering builds a system around that code so it stays reliable and maintainable. SDLC is the full lifecycle from requirements to maintenance."})]})]})})]})},ff={Wrapper:fe.section`
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
    `},gf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"sdlcModels",title:"SDLC Models",sub:"Waterfall, V Model, Iterative, Incremental, Spiral, Agile, DevOps - with when to use and pros-cons summary."}),[]);return e.jsxs(ff.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Process"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Waterfall Model"})]}),e.jsx("p",{className:"p",children:"A linear model where each phase completes before the next begins."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Requirements"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Design"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"})]}),e.jsx("p",{className:"note",children:"Example: Government or banking systems with fixed requirements."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements are stable and clear"}),e.jsx("li",{children:"Compliance heavy environments"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Simple and structured"}),e.jsx("li",{children:"Clear documentation"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Hard to adapt to change"}),e.jsx("li",{children:"Late feedback from users"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ln,{})}),e.jsx("h3",{className:"h3",children:"V Model"})]}),e.jsx("p",{className:"p",children:"Extension of Waterfall where each development phase has a corresponding testing phase."}),e.jsx("p",{className:"note",children:"Example: Safety critical systems like medical or aviation software."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High reliability required"}),e.jsx("li",{children:"Strict validation process"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Strong focus on testing"}),e.jsx("li",{children:"Early defect detection"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Rigid like Waterfall"}),e.jsx("li",{children:"Not ideal for evolving requirements"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(at,{})}),e.jsx("h3",{className:"h3",children:"Iterative Model"})]}),e.jsx("p",{className:"p",children:"Build a basic version first, then improve in repeated cycles."}),e.jsx("p",{className:"note",children:"Example: First release simple app, then enhance features in versions."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements partially known"}),e.jsx("li",{children:"Feedback driven development"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Early working version"}),e.jsx("li",{children:"Improves through feedback"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Can increase cost"}),e.jsx("li",{children:"Architecture may degrade without control"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Incremental Model"})]}),e.jsx("p",{className:"p",children:"Deliver system in small functional increments."}),e.jsx("p",{className:"note",children:"Example: E-commerce site releasing cart first, then payment, then recommendation."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Large system divided into modules"}),e.jsx("li",{children:"Faster time to market needed"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Faster delivery"}),e.jsx("li",{children:"Lower initial risk"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsx("ul",{className:"list",children:e.jsx("li",{children:"Requires strong architecture planning"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Spiral Model"})]}),e.jsx("p",{className:"p",children:"Focuses on risk analysis in every cycle."}),e.jsx("p",{className:"note",children:"Example: Large enterprise systems with high uncertainty."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High risk projects"}),e.jsx("li",{children:"Complex systems"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsx("ul",{className:"list",children:e.jsx("li",{children:"Strong risk management"})})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Costly"}),e.jsx("li",{children:"Complex to manage"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(at,{})}),e.jsx("h3",{className:"h3",children:"Agile Model"})]}),e.jsx("p",{className:"p",children:"Short iterations called sprints with frequent feedback."}),e.jsx("p",{className:"note",children:"Example: Startups building SaaS products."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requirements change frequently"}),e.jsx("li",{children:"Customer collaboration needed"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Flexible"}),e.jsx("li",{children:"Fast feedback"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Less predictability"}),e.jsx("li",{children:"Needs strong team coordination"})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"DevOps Model"})]}),e.jsx("p",{className:"p",children:"Integrates development and operations to enable continuous integration and continuous delivery."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Build"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Test"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Deploy"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Monitor"})]}),e.jsx("p",{className:"note",children:"Example: CI pipeline automatically testing and deploying new commits."}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"When to use"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Cloud native systems"}),e.jsx("li",{children:"Frequent releases"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Pros"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fast release cycles"}),e.jsx("li",{children:"Automation reduces errors"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Cons"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Requires automation maturity"}),e.jsx("li",{children:"Tooling complexity"})]})]})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Waterfall and V are rigid. Iterative and Incremental allow gradual improvement. Spiral focuses on risk. Agile focuses on flexibility. DevOps focuses on continuous delivery and operations integration."})]})]})})]})},vf={Wrapper:fe.section`
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
    `},yf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"requirementsEngineering",title:"Requirements Engineering",sub:"Functional vs non-functional requirements, gathering techniques, SRS, use cases, and acceptance criteria."}),[]);return e.jsxs(vf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(on,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"SDLC"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Op,{})}),e.jsx("h3",{className:"h3",children:"What it means"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Requirements Engineering"})," is the process of understanding what needs to be built, documenting it clearly, validating it with stakeholders, and managing changes over time. It reduces confusion and prevents building the wrong thing."]}),e.jsx("p",{className:"p",children:'Practical goal: make requirements so clear that dev, QA, and client can all agree on what "done" means.'}),e.jsx("p",{className:"note",children:"Most project failures happen due to unclear or changing requirements, not because of bad code."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Functional vs Non-functional requirements"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Functional requirements"}),e.jsxs("div",{className:"v",children:["What the system should do - features and behavior.",e.jsx("span",{className:"small",children:'Example: "User can reset password using email OTP."'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Non-functional requirements"}),e.jsxs("div",{className:"v",children:["How well the system should perform - quality attributes like performance, security, and reliability.",e.jsx("span",{className:"small",children:'Example: "Password reset page should load under 2 seconds." "OTP should expire in 5 minutes." "System must log all reset attempts."'})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Functional = What"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Non-functional = How well"})]}),e.jsx("p",{className:"note",children:"Many teams write functional requirements and forget non-functional ones. That is where production problems start."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Requirement gathering techniques"})]}),e.jsx("p",{className:"p",children:"Gathering requirements means extracting needs from stakeholders and users. Use multiple techniques because one technique never captures everything."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Interviews"}),e.jsxs("div",{className:"v",children:["Talk to users and stakeholders directly.",e.jsx("span",{className:"small",children:"Example: ask support team what common complaints users have."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Workshops"}),e.jsxs("div",{className:"v",children:["Group discussion to align everyone.",e.jsx("span",{className:"small",children:"Example: product owner, dev, QA define the checkout flow together."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Observation"}),e.jsxs("div",{className:"v",children:["Watch how users do work today.",e.jsx("span",{className:"small",children:"Example: observe how employees do inventory updates using Excel."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Questionnaires"}),e.jsxs("div",{className:"v",children:["Collect feedback from many users quickly.",e.jsx("span",{className:"small",children:"Example: survey users about what payment methods they use."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Prototype or mockups"}),e.jsxs("div",{className:"v",children:["Show UI or flow and collect corrections early.",e.jsx("span",{className:"small",children:"Example: clickable Figma prototype for sign up screens."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Existing system study"}),e.jsxs("div",{className:"v",children:["Analyze current product or competitors.",e.jsx("span",{className:"small",children:"Example: read existing API docs and logs to see current behavior."})]})]})]}),e.jsx("p",{className:"note",children:"Pro tip: always confirm requirements with real examples and edge cases."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(no,{})}),e.jsx("h3",{className:"h3",children:"SRS - Software Requirement Specification"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SRS"})," means"," ",e.jsx("b",{children:"Software Requirement Specification"}),". It is the document that clearly describes the system requirements so every team member is on the same page."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it contains"}),e.jsx("div",{className:"v",children:"Scope, features, constraints, functional requirements, non-functional requirements, assumptions, and acceptance criteria."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it is useful"}),e.jsx("div",{className:"v",children:"Prevents misunderstanding, helps estimation, guides testing, and acts as a reference when changes happen."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example line"}),e.jsx("div",{className:"v",children:'"System shall allow user to reset password using email OTP. OTP expires in 5 minutes and max 3 attempts allowed per hour."'})]})]}),e.jsx("p",{className:"note",children:"In Agile teams, SRS may be lighter and replaced by user stories and acceptance criteria. But the clarity requirement still stays."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(on,{})}),e.jsx("h3",{className:"h3",children:"Use case basics"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"use case"})," describes how a user (actor) interacts with the system to achieve a goal. It focuses on steps and outcomes, including failure paths."]}),e.jsxs("div",{className:"useCase",children:[e.jsx("div",{className:"ucTitle",children:'Example use case - "Reset Password"'}),e.jsxs("div",{className:"ucGrid",children:[e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Actor"}),e.jsx("div",{className:"v",children:"Registered user"})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Reset password securely using OTP"})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Main flow"}),e.jsxs("div",{className:"v",children:["1. User enters email",e.jsx("br",{}),"2. System sends OTP",e.jsx("br",{}),"3. User enters OTP",e.jsx("br",{}),"4. System verifies OTP",e.jsx("br",{}),"5. User sets new password",e.jsx("br",{}),"6. System updates password and confirms"]})]}),e.jsxs("div",{className:"ucRow",children:[e.jsx("div",{className:"k",children:"Alternate flow"}),e.jsx("div",{className:"v",children:"OTP invalid or expired - show error and allow resend after cooldown"})]})]})]}),e.jsx("p",{className:"note",children:"Use cases are very useful for finding missing requirements and edge cases."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(tt,{})}),e.jsx("h3",{className:"h3",children:"Acceptance criteria"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Acceptance criteria"})," are clear conditions that must be true for a feature to be considered complete and acceptable. They guide developers and testers and prevent scope confusion."]}),e.jsxs("p",{className:"p",children:["A common format is ",e.jsx("b",{children:"Given - When - Then"}),"."]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Example"}),e.jsx("pre",{className:"pre",children:`Given the user is on the reset password page
When the user enters a registered email and clicks "Send OTP"
Then the system sends an OTP to the email within 10 seconds

Given an OTP was sent
When the user enters the correct OTP within 5 minutes
Then the system allows the user to set a new password

Given an OTP was sent
When the user enters an incorrect OTP 3 times
Then the system blocks further attempts for 1 hour`})]}),e.jsx("p",{className:"note",children:'Acceptance criteria is where "done" becomes measurable. It reduces bugs and rework.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:'Functional tells what to build. Non-functional tells how well it must behave. Gather requirements using interviews, workshops, observation, prototypes. SRS documents requirements. Use cases describe interaction flows. Acceptance criteria defines what "done" means.'})]})]})})]})},jf={Wrapper:fe.section`
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
    `},bf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"systemDesignFundamentals",title:"System Design Fundamentals",sub:"HLD vs LLD, architecture types, coupling vs cohesion, and practical tradeoffs."}),[]);return e.jsxs(jf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Ye,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Design"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Hl,{})}),e.jsx("h3",{className:"h3",children:"High Level Design vs Low Level Design"})]}),e.jsx("p",{className:"p",children:"In real projects, design happens at two levels. First you decide the big picture, then you design the internals of each module."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"HLD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"HLD"})," is ",e.jsx("b",{children:"High Level Design"}),". It focuses on system structure and component boundaries.",e.jsx("span",{className:"small",children:"Example: Web app, API service, database, cache, and how they talk to each other."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"LLD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"LLD"})," is ",e.jsx("b",{children:"Low Level Design"}),". It focuses on internal classes, modules, data models, and detailed logic.",e.jsx("span",{className:"small",children:"Example: API endpoint validation flow, service classes, DTOs, DB schema fields, and edge cases."})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"HLD is the map"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"LLD is the building plan"})]}),e.jsx("p",{className:"note",children:"Interviews often mix the words. For software engineering, this section is about understanding the difference clearly."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Mp,{})}),e.jsx("h3",{className:"h3",children:"Architecture types"})]}),e.jsx("p",{className:"p",children:'Architecture means how software components are organized and how they communicate. There is no "best" architecture. There is only "best for the current constraints".'}),e.jsxs("div",{className:"archGrid",children:[e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(Ra,{})}),e.jsx("div",{className:"aTitle",children:"Monolith"})]}),e.jsx("p",{className:"aText",children:"Single codebase and single deployment unit. UI, API, and business logic often live together."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Good for"})," small teams, fast start, simpler debugging."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Risk"})," becomes harder to scale teams and releases as it grows."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," early stage e-commerce app deployed as one server."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(ql,{})}),e.jsx("div",{className:"aTitle",children:"Microservices"})]}),e.jsx("p",{className:"aText",children:"Many small services, each owning a specific business capability. Each can be deployed independently."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Good for"})," large teams, independent scaling, independent releases."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Risk"})," complexity increases - networking, monitoring, failures, data consistency."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," separate services for auth, catalog, orders, payments."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(ql,{})}),e.jsx("div",{className:"aTitle",children:"Client server"})]}),e.jsx("p",{className:"aText",children:"Client requests data or actions, server processes and responds. Most web apps follow this model."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Client"})," browser app, mobile app, desktop app."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Server"})," API, database access, auth, business logic."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," React app calls REST API which talks to database."]})]})]}),e.jsxs("div",{className:"archCard",children:[e.jsxs("div",{className:"aTop",children:[e.jsx("span",{className:"aIcon",children:e.jsx(Ye,{})}),e.jsx("div",{className:"aTitle",children:"Layered architecture"})]}),e.jsx("p",{className:"aText",children:"Code is organized into layers. Each layer has a responsibility and depends on the layer below it."}),e.jsxs("ul",{className:"aList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Common layers"})," UI, controller, service, repository, database."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Benefit"})," clearer separation of concerns and easier testing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Example"})," Controller calls Service, Service calls Repository."]})]})]})]}),e.jsx("p",{className:"note",children:"You can combine architectures. Example: a system can be microservices and each service can be layered inside."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qx,{})}),e.jsx("h3",{className:"h3",children:"Coupling vs Cohesion"})]}),e.jsx("p",{className:"p",children:"These two words define how clean your design is. Most design problems are actually coupling problems."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Coupling"}),e.jsxs("div",{className:"v",children:["How much one module depends on another module.",e.jsx("span",{className:"small",children:"Goal: low coupling so changes do not break many parts."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Cohesion"}),e.jsxs("div",{className:"v",children:["How well the code inside a module belongs together.",e.jsx("span",{className:"small",children:"Goal: high cohesion so one module does one job clearly."})]})]})]}),e.jsx("p",{className:"note",children:"Easy rule: keep related things together, keep unrelated things separate."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Hx,{})}),e.jsx("h3",{className:"h3",children:"Design tradeoffs"})]}),e.jsx("p",{className:"p",children:"Every design decision has a cost. Tradeoff means you gain something but lose something else."}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Speed vs Maintainability"})," - quick hacks deliver fast but create future pain."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Simplicity vs Flexibility"})," - more options and plugins mean more complexity."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Cost vs Reliability"})," - redundancy improves uptime but increases cost."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency vs Availability"})," - distributed systems often force a choice during failures."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Monolith vs Microservices"})," - monolith is simpler at first, microservices help scaling teams later."]})]}),e.jsx("p",{className:"note",children:"Good engineers explain tradeoffs and choose based on requirements, not preferences."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"HLD is the system picture. LLD is internal structure. Choose architecture based on constraints. Aim for low coupling and high cohesion. Always explain tradeoffs."})]})]})})]})},Nf={Wrapper:fe.section`
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
    `},wf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"umlBasics",title:"UML Basics",sub:"UML meaning and the most used diagrams - use case, class, sequence, activity, and state."}),[]);return e.jsxs(Nf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Hl,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Design Docs"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Hl,{})}),e.jsx("h3",{className:"h3",children:"What is UML - Unified Modeling Language"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"UML"})," stands for"," ",e.jsx("b",{children:"Unified Modeling Language"}),". It is a standard way to visually describe a software system. UML diagrams help teams communicate clearly using pictures instead of long text."]}),e.jsx("p",{className:"p",children:"Beginners tip: UML is not mandatory for every project. Use it when the system is complex, when multiple developers are involved, or when you want clarity before coding."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Explain"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Plan"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Discuss"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Document"})]}),e.jsx("p",{className:"note",children:'UML helps you answer "What will we build" and "How will parts interact" before writing code.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Use case diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"use case diagram"})," shows ",e.jsx("b",{children:"who"})," uses the system and ",e.jsx("b",{children:"what"})," they can do. It focuses on user goals, not internal code."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Actors and their actions (use cases)."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Requirement clarity and scope."})]})]}),e.jsx("p",{className:"p",children:"Example for an e-commerce app:"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:'Actor: Customer - use cases: "Browse products", "Add to cart", "Checkout"'}),e.jsx("li",{children:'Actor: Admin - use cases: "Add product", "Update price", "View orders"'})]}),e.jsx("p",{className:"note",children:"Use case diagram is a map of features from the user point of view."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ra,{})}),e.jsx("h3",{className:"h3",children:"Class diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"class diagram"})," shows the static structure of the system - classes, their fields, methods, and relationships."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Classes, properties, methods, associations, inheritance."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Object model planning, data modeling, architecture clarity."})]})]}),e.jsx("p",{className:"p",children:"Example for a library system:"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Class: Book - fields: title, author, isbn - methods: isAvailable()"}),e.jsx("li",{children:"Class: Member - fields: name, id - methods: borrowBook()"}),e.jsx("li",{children:"Relationship: Member borrows Book (association)"})]}),e.jsx("p",{className:"note",children:"Class diagram is like a blueprint of objects and relationships."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Sequence diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"sequence diagram"})," shows how objects or services interact over time. It focuses on the order of messages and calls."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Time order of requests and responses between components."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"API flows, microservice interactions, request lifecycle."})]})]}),e.jsx("p",{className:"p",children:"Example: User login flow"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"User - sends login request to UI"}),e.jsx("li",{children:"UI - calls Auth API"}),e.jsx("li",{children:"Auth API - checks DB"}),e.jsx("li",{children:"DB - returns user record"}),e.jsx("li",{children:"Auth API - returns token or session to UI"})]}),e.jsx("p",{className:"note",children:'Sequence diagram is perfect when you want to explain "what calls what" in order.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(kx,{})}),e.jsx("h3",{className:"h3",children:"Activity diagram"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"activity diagram"})," shows workflow steps and decisions. It is like a flowchart but more structured for software processes."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"Steps, decisions, parallel actions, start and end."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Business logic flows and process documentation."})]})]}),e.jsx("p",{className:"p",children:"Example: Checkout flow"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Start - user clicks checkout"}),e.jsx("li",{children:"Validate cart items"}),e.jsx("li",{children:"Decision: payment success?"}),e.jsx("li",{children:"If yes - create order and show success"}),e.jsx("li",{children:"If no - show error and retry"})]}),e.jsx("p",{className:"note",children:"Activity diagram is best for explaining workflow and decision logic."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Rx,{})}),e.jsx("h3",{className:"h3",children:"State diagram"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"state diagram"})," shows different states of an object and transitions between those states. It is useful when something changes over time based on events."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shows"}),e.jsx("div",{className:"v",children:"States, events, transitions, and final state."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good for"}),e.jsx("div",{className:"v",children:"Order status, payment status, ticket lifecycle, user account lifecycle."})]})]}),e.jsx("p",{className:"p",children:"Example: Order states in e-commerce"}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Created"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Paid"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Shipped"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Delivered"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Returned"})]}),e.jsx("p",{className:"note",children:'State diagrams are very useful for systems where valid transitions matter. Example: you should not go from "Delivered" back to "Shipped".'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Use case - user goals. Class - structure. Sequence - interaction order. Activity - workflow. State - lifecycle states."})]})]})})]})},kf={Wrapper:fe.section`
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
    `},Sf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"estimationAndPlanning",title:"Estimation and Planning",sub:"Effort estimation basics, LOC vs function points, story points, velocity, planning poker, and risk basics with examples."}),[]);return e.jsxs(kf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Wp,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Delivery"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ap,{})}),e.jsx("h3",{className:"h3",children:"Effort estimation basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Effort estimation"})," means predicting how much work is needed to deliver something. Work usually includes coding, testing, review, documentation, bug fixes, and deployment effort."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Effort"}),e.jsxs("div",{className:"v",children:["How much work it takes",e.jsx("span",{className:"small",children:"Example: 2 developer-days"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Duration"}),e.jsxs("div",{className:"v",children:["How long it will take on calendar",e.jsx("span",{className:"small",children:"Example: 2 days effort can become 4 days duration because of meetings, reviews, dependencies."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Uncertainty"}),e.jsxs("div",{className:"v",children:["Unknowns that can change the estimate",e.jsx("span",{className:"small",children:"Example: API might change, data may be messy, requirements may shift."})]})]})]}),e.jsx("p",{className:"note",children:'Good estimates include a range, not a single exact number. Example: "2 to 4 days" instead of "3 days".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Mx,{})}),e.jsx("h3",{className:"h3",children:"LOC vs Function Points"})]}),e.jsx("p",{className:"p",children:"Two classic ways to estimate size:"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"LOC"})," - Lines of Code",e.jsx("span",{className:"small",children:"Measures code length. Easy to count later, hard to predict early. Encourages writing more code which is not always good."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Function Points"}),e.jsx("span",{className:"small",children:"Measures functionality delivered to users. Useful earlier in the project because it focuses on features, not code."})]})]}),e.jsx("p",{className:"note",children:'Simple example: A "search feature" can be 50 lines or 500 lines depending on design, so LOC is not stable early.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Rp,{})}),e.jsx("h3",{className:"h3",children:"Story points"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Story points"})," are a relative estimation unit used in Agile. It represents"," ",e.jsx("b",{children:"effort + complexity + uncertainty"}),". It is not a time unit."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Effort"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Complexity"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Uncertainty"})]}),e.jsx("p",{className:"p",children:"Example: If login screen is 2 points, then password reset might be 5 points if it includes email OTP, security, and edge cases."}),e.jsx("p",{className:"note",children:"Story points work best when your team keeps them consistent across sprints."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(to,{})}),e.jsx("h3",{className:"h3",children:"Velocity"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Velocity"})," is how many story points a team completes in one sprint. It helps predict how much work can be done in future sprints."]}),e.jsxs("div",{className:"exBox",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"exText",children:"Sprint length is 2 weeks. Team completed 28 story points. So velocity is 28 points per sprint."})]}),e.jsx("p",{className:"note",children:"Velocity is a team metric, not a performance rating for individuals."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Planning poker"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Planning poker"})," is a team estimation technique where each person privately picks a story point value, then everyone reveals together. If values differ a lot, the team discusses and estimates again."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it works"}),e.jsx("div",{className:"v",children:"It avoids one loud person deciding the estimate. It also exposes hidden complexity when someone votes high."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common scale"}),e.jsxs("div",{className:"v",children:["Fibonacci-like: 1, 2, 3, 5, 8, 13",e.jsx("span",{className:"small",children:"Big jumps force discussion when work is uncertain."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example flow"}),e.jsxs("div",{className:"v",children:['Feature: "Add search filters"',e.jsx("span",{className:"small",children:"Votes: 3, 3, 8, 5. Discuss why 8. Maybe API changes needed. Re-estimate and settle on 5."})]})]})]}),e.jsx("p",{className:"note",children:"If your estimates keep changing, it usually means requirements are unclear or dependencies are unknown."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon warn",children:e.jsx(an,{})}),e.jsx("h3",{className:"h3",children:"Risk management basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Risk"})," is anything that can delay delivery or reduce quality. Risk management means finding risks early and making a plan to handle them."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Identify"}),e.jsxs("div",{className:"v",children:["List possible problems early",e.jsx("span",{className:"small",children:"Example: dependency team not ready, unclear requirements, performance unknown."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Analyze"}),e.jsxs("div",{className:"v",children:["Check probability and impact",e.jsx("span",{className:"small",children:"Example: payment gateway delay is high impact, medium probability."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Mitigate"}),e.jsxs("div",{className:"v",children:["Reduce risk with actions",e.jsx("span",{className:"small",children:"Example: build mock API, create fallback, do spike prototype, add buffer time."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Monitor"}),e.jsxs("div",{className:"v",children:["Track risks during the project",e.jsx("span",{className:"small",children:"Example: weekly check on dependency delivery status."})]})]})]}),e.jsx("p",{className:"note",children:'A good plan is not "no risks". A good plan is "risks are known and handled".'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Estimation is about predicting effort with uncertainty. Story points are relative size. Velocity is completed points per sprint. Planning poker aligns team understanding. Risk management prevents surprises."})]})]})})]})},Cf={Wrapper:fe.section`
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
    `},Tf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"projectManagementBasics",title:"Project Management Basics",sub:"Scope, timeline, budget, stakeholders, RACI, Gantt, and critical path with beginner-friendly examples."}),[]);return e.jsxs(Cf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(on,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Planning"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wp,{})}),e.jsx("h3",{className:"h3",children:"Scope"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scope"})," means what work is included in the project and what is not included. Clear scope prevents confusion and reduces unexpected work."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"In scope"}),e.jsxs("div",{className:"v",children:["Features we will deliver in this project.",e.jsx("span",{className:"small",children:"Example: Login, signup, forgot password."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Out of scope"}),e.jsxs("div",{className:"v",children:["Work explicitly not included.",e.jsx("span",{className:"small",children:"Example: Social login, multi-language support."})]})]})]}),e.jsx("p",{className:"note",children:"Scope creep means scope keeps increasing without adjusting time or budget."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ap,{})}),e.jsx("h3",{className:"h3",children:"Timeline"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Timeline"})," is the schedule of the project. It includes milestones, deadlines, and the order of work."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Milestone"})," - a major checkpoint",e.jsx("span",{className:"small",children:'Example: "MVP ready" by end of week 2.'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Deadline"})," - latest acceptable date",e.jsx("span",{className:"small",children:'Example: "Release to users" by March 15.'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Dependencies"})," - tasks that block other tasks",e.jsx("span",{className:"small",children:"Example: API must be ready before frontend integration."})]})]}),e.jsx("p",{className:"note",children:"Timelines should include buffer for testing, review, and unexpected issues."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Px,{})}),e.jsx("h3",{className:"h3",children:"Budget"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Budget"})," is the money allocated to complete the project. It includes people cost, tooling, infrastructure, and risk buffer."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"People cost"})," - developer time, QA, design"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Tools"})," - paid services, licenses, APIs"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Infrastructure"})," - servers, database, storage"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Contingency"})," - extra buffer for surprises"]})]}),e.jsx("p",{className:"note",children:"If scope increases, budget or timeline must also increase."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Stakeholders"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Stakeholders"})," are people who care about the project outcome. They influence requirements, priorities, and acceptance."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Users"})," - people who use the product"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Client"})," - paying party or business owner"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Product manager"})," - decides priorities"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Engineering team"})," - builds and maintains"]}),e.jsxs("li",{children:[e.jsx("b",{children:"QA"})," - validates quality"]})]}),e.jsx("p",{className:"note",children:"Managing stakeholders means managing expectations."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Mp,{})}),e.jsx("h3",{className:"h3",children:"RACI matrix"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"RACI"}),' is a responsibility matrix used to clarify who does what. It reduces confusion and prevents "everyone thought someone else will do it".']}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"R"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Responsible"})," - the person who does the work"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"A"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Accountable"})," - the person who owns the final result (one owner)"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"C"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Consulted"})," - people who give input before work is finalized"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"I"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Informed"})," - people who should be updated after decisions"]})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Mini example"}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"Task"}),e.jsx("span",{className:"exVal",children:"Deploy backend to production"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"R"}),e.jsx("span",{className:"exVal",children:"Developer"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"A"}),e.jsx("span",{className:"exVal",children:"Tech lead"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"C"}),e.jsx("span",{className:"exVal",children:"QA, DevOps"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"I"}),e.jsx("span",{className:"exVal",children:"Product manager, client"})]})]}),e.jsx("p",{className:"note",children:'Best rule: only one "A" for each task.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Rp,{})}),e.jsx("h3",{className:"h3",children:"Gantt chart"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"Gantt chart"})," is a timeline view of tasks. It shows task duration, overlap, and dependencies."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Useful for planning long projects with many tasks."}),e.jsx("li",{children:"Helps visualize parallel work."}),e.jsx("li",{children:"Makes delays easier to spot."})]}),e.jsx("p",{className:"note",children:"In Agile, we may use sprint boards more often, but Gantt is still useful for high level planning."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"Critical path"})]}),e.jsxs("p",{className:"p",children:["The ",e.jsx("b",{children:"critical path"})," is the longest chain of dependent tasks that decides the shortest possible project duration. If any task on the critical path is delayed, the whole project gets delayed."]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Simple example"}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"A"}),e.jsx("span",{className:"exVal",children:"Design (2 days)"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"B"}),e.jsx("span",{className:"exVal",children:"Backend API (4 days) depends on A"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"C"}),e.jsx("span",{className:"exVal",children:"Frontend integration (3 days) depends on B"})]}),e.jsxs("div",{className:"exRow",children:[e.jsx("span",{className:"exKey",children:"D"}),e.jsx("span",{className:"exVal",children:"Testing (2 days) depends on C"})]}),e.jsx("div",{className:"exFooter",children:"Total = 11 days. Any delay in A, B, C, or D delays delivery."})]}),e.jsx("p",{className:"note",children:"Non-critical tasks have slack time. Critical path tasks have zero slack."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Scope defines what to build, timeline defines when, budget defines cost, stakeholders define expectations. RACI clarifies responsibility, Gantt shows schedule, critical path shows what cannot slip."})]})]})})]})},Ef={Wrapper:fe.section`
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
    `},If=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"versionControl",title:"Version Control",sub:"Git basics, branching strategy, merge vs rebase, pull request flow, and code review importance."}),[]);return e.jsxs(Ef.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(ms,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Workflow"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"What is Version Control"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Version Control"})," means tracking changes to files over time so you can ",e.jsx("b",{children:"see history"}),","," ",e.jsx("b",{children:"restore older versions"}),", and"," ",e.jsx("b",{children:"collaborate safely"}),". It is like a time machine for your codebase."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:"Without version control, teams overwrite each other, bugs are hard to trace, and rollback is painful."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common terms"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"commit"})," - a saved snapshot of changes",e.jsx("br",{}),e.jsx("span",{className:"mono",children:"history"})," - timeline of commits",e.jsx("br",{}),e.jsx("span",{className:"mono",children:"diff"})," - the exact changes between versions"]})]})]}),e.jsx("p",{className:"note",children:"Version control is not only for code, it is for any file that changes over time."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"Git basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Git"})," is a"," ",e.jsx("b",{children:"distributed version control system"}),". Distributed means every developer has a full copy of the repository history on their machine."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Repository"})," - a project folder tracked by Git",e.jsx("span",{className:"small",children:'Often called "repo"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Commit"})," - a snapshot of changes with a message",e.jsx("span",{className:"small",children:'Example: "Fix login validation bug"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Branch"})," - a separate line of work",e.jsx("span",{className:"small",children:"Example: work on a feature without breaking main branch"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Remote"})," - a server copy of the repo, like GitHub",e.jsx("span",{className:"small",children:'Example remote name: "origin"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Push"})," - upload commits to remote"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pull"})," - download commits from remote"]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"codeTitle",children:"Typical beginner commands"}),e.jsx("pre",{className:"pre",children:`git init
git add .
git commit -m "first commit"
git branch
git checkout -b feature/login
git push -u origin feature/login`})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"Branching strategy"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"branching strategy"})," is a set of rules about how your team creates and manages branches so work stays organized and releases are safe."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Main branch"}),e.jsxs("div",{className:"v",children:["Usually called"," ",e.jsx("span",{className:"mono",children:"main"})," or"," ",e.jsx("span",{className:"mono",children:"master"}),". Should be stable."]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Feature branch"}),e.jsxs("div",{className:"v",children:["A branch for one feature.",e.jsx("span",{className:"small",children:"Example: feature/cart-discount"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Fix branch"}),e.jsxs("div",{className:"v",children:["A branch for bug fixes.",e.jsx("span",{className:"small",children:"Example: fix/payment-timeout"})]})]})]}),e.jsx("p",{className:"note",children:"Basic best practice: keep main stable, do work in feature branches, then merge via review."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Vl,{})}),e.jsx("h3",{className:"h3",children:"Merge vs Rebase"})]}),e.jsxs("p",{className:"p",children:["Both ",e.jsx("b",{children:"merge"})," and ",e.jsx("b",{children:"rebase"})," are ways to bring changes from one branch into another. The difference is how history looks."]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTop",children:[e.jsx("span",{className:"pIcon",children:e.jsx(Vl,{})}),e.jsx("div",{className:"pTitle",children:"Merge"})]}),e.jsxs("p",{className:"p2",children:["Merge creates a new ",e.jsx("b",{children:"merge commit"})," ","that combines histories. It keeps the real timeline."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Pros - safe and simple, history preserved"}),e.jsx("li",{children:"Cons - history can look messy with many merges"})]}),e.jsx("div",{className:"code smallCode",children:e.jsx("pre",{className:"pre",children:`git checkout main
git pull
git merge feature/login`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTop",children:[e.jsx("span",{className:"pIcon",children:e.jsx(Ux,{})}),e.jsx("div",{className:"pTitle",children:"Rebase"})]}),e.jsx("p",{className:"p2",children:"Rebase rewrites commit history by placing your commits on top of another branch, making it look like you started from the latest main."}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Pros - clean linear history"}),e.jsx("li",{children:"Cons - rewrites history, can be risky if branch is shared"})]}),e.jsx("div",{className:"code smallCode",children:e.jsx("pre",{className:"pre",children:`git checkout feature/login
git fetch origin
git rebase origin/main`})})]})]}),e.jsx("p",{className:"note",children:"Rule: use rebase for your local branch cleanup, avoid rebasing branches already used by others."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Vx,{})}),e.jsx("h3",{className:"h3",children:"Pull request flow"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"PR"})," means ",e.jsx("b",{children:"Pull Request"}),". It is a request to merge your branch into a target branch like main. It is the standard collaboration flow on GitHub, GitLab, Bitbucket."]}),e.jsxs("ol",{className:"olist",children:[e.jsx("li",{children:"Create a feature branch"}),e.jsx("li",{children:"Make commits with clear messages"}),e.jsx("li",{children:"Push branch to remote"}),e.jsx("li",{children:"Open PR with description and screenshots if needed"}),e.jsx("li",{children:"Review, fix comments, run checks"}),e.jsx("li",{children:"Merge into main after approval"})]}),e.jsx("p",{className:"note",children:"PR keeps main protected and forces review and automated checks."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(so,{})}),e.jsx("h3",{className:"h3",children:"Code review importance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code review"})," means another developer checks your code before it merges. It reduces bugs, improves readability, and spreads knowledge across the team."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Bug catching"})," - someone notices edge cases you missed"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency"})," - naming, style, structure stays consistent"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Security"})," - reviewers can spot risky patterns"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Learning"})," - junior and senior both learn from each other"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Ownership"})," - code is shared, not only in one person head"]})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tIcon",children:e.jsx(ln,{})}),e.jsxs("div",{className:"tText",children:[e.jsx("div",{className:"tTitle",children:"Good review checklist"}),e.jsx("div",{className:"tSub",children:"Correctness, readability, tests, edge cases, performance, and security."})]})]})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Git tracks changes. Branches isolate work. Merge keeps real history. Rebase makes history linear. PR means Pull Request. Code review keeps quality high and knowledge shared."})]})]})})]})},zf={Wrapper:fe.section`
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
    `},Pf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"softwareArchitecturePrinciples",title:"Software Architecture Principles",sub:"SOLID, DRY, KISS, YAGNI, and Separation of Concerns with beginner friendly examples."}),[]);return e.jsxs(zf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Ye,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Core principles"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"What are architecture principles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software architecture principles"})," are simple rules that help you design code and systems that are easy to understand, easy to change, and harder to break. These principles reduce bugs, reduce effort, and make teamwork smoother."]}),e.jsx("p",{className:"p",children:'Think of these like "traffic rules" for code. If everyone follows the same rules, the system stays predictable even when many developers work on it.'}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Readable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintainable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Testable"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Scalable"})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"SOLID principles (full form and meaning)"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SOLID"})," is a set of five object-oriented design principles that make code easier to maintain and extend. Each letter stands for one principle."]}),e.jsxs("div",{className:"solidGrid",children:[e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"S"}),e.jsx("div",{className:"name",children:"SRP - Single Responsibility Principle"})]}),e.jsxs("p",{className:"p2",children:["A class or module should have"," ",e.jsx("b",{children:"one main reason to change"}),". It should do one job well."]}),e.jsx("p",{className:"ex",children:'Example: A "UserService" should not also format UI HTML. Keep business logic separate from UI formatting.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"O"}),e.jsx("div",{className:"name",children:"OCP - Open/Closed Principle"})]}),e.jsxs("p",{className:"p2",children:["Software entities should be"," ",e.jsx("b",{children:"open for extension"})," but",e.jsx("b",{children:" closed for modification"}),". Add new behavior without editing old working code too much."]}),e.jsx("p",{className:"ex",children:'Example: Add a new payment method by adding a new strategy class instead of editing a big "if else" chain.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"L"}),e.jsx("div",{className:"name",children:"LSP - Liskov Substitution Principle"})]}),e.jsx("p",{className:"p2",children:"A child class should be usable anywhere the parent class is expected without breaking behavior."}),e.jsx("p",{className:"ex",children:'Example: If "Bird" has a "fly" method, then a "Penguin" should not inherit "Bird" if it cannot fly. Use better modeling.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"I"}),e.jsx("div",{className:"name",children:"ISP - Interface Segregation Principle"})]}),e.jsx("p",{className:"p2",children:"Do not force clients to depend on methods they do not use. Prefer many small interfaces over one large interface."}),e.jsx("p",{className:"ex",children:'Example: A "Printer" interface should not force "scan" methods. Create separate "Printable" and "Scannable" interfaces.'})]}),e.jsxs("div",{className:"solidItem",children:[e.jsxs("div",{className:"solidHead",children:[e.jsx("span",{className:"letter",children:"D"}),e.jsx("div",{className:"name",children:"DIP - Dependency Inversion Principle"})]}),e.jsx("p",{className:"p2",children:"High-level modules should not depend on low-level modules directly. Both should depend on abstractions."}),e.jsx("p",{className:"ex",children:'Example: "OrderService" should depend on a "PaymentGateway" interface, not directly on "RazorpayGateway" class.'})]})]}),e.jsx("p",{className:"note",children:"You do not need to force SOLID everywhere. Use it where change and complexity exists."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ix,{})}),e.jsx("h3",{className:"h3",children:"DRY - Don't Repeat Yourself"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DRY"})," stands for"," ",e.jsx("b",{children:"Don't Repeat Yourself"}),". The same logic should not be written in multiple places. If something changes, you should update it in one place only."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Repeating code increases bugs because different copies drift over time."}),e.jsx("li",{children:"Repeating rules causes inconsistency in validations and calculations."})]}),e.jsx("p",{className:"ex",children:"Example: If you validate phone numbers in 3 places, and the rule changes, you might update only 2 places and the third becomes a bug."}),e.jsx("p",{className:"note",children:"DRY is not about making everything one function. It is about avoiding duplicate knowledge and rules."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Lx,{})}),e.jsx("h3",{className:"h3",children:"KISS - Keep It Simple"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"KISS"})," stands for ",e.jsx("b",{children:"Keep It Simple"}),". Prefer the simplest solution that works correctly. Simple code is easier to read, debug, test, and maintain."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fewer moving parts means fewer bugs."}),e.jsx("li",{children:"Simple designs help teams work faster."})]}),e.jsx("p",{className:"ex",children:'Example: If an "if else" is enough, do not add a complicated abstraction or framework pattern just to look advanced.'}),e.jsx("p",{className:"note",children:"Simple does not mean sloppy. Simple means clear and correct."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Gx,{})}),e.jsx("h3",{className:"h3",children:"YAGNI - You Aren't Gonna Need It"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"YAGNI"})," stands for"," ",e.jsx("b",{children:"You Aren't Gonna Need It"}),". Do not build features or complexity before it is actually required. Build what is needed now, and keep the design flexible for later."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Extra features take time and add bugs."}),e.jsx("li",{children:'"Future proof" code often becomes unused and confusing.'})]}),e.jsx("p",{className:"ex",children:"Example: Do not add multi-tenant architecture on day 1 if you have only one customer. Add it when real requirements appear."}),e.jsx("p",{className:"note",children:"YAGNI saves time and keeps code clean. Premature complexity is a common project killer."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Separation of concerns"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Separation of concerns"})," means dividing a system into parts where each part handles one concern. A ",e.jsx("b",{children:"concern"})," is a specific responsibility like UI rendering, business rules, or database access."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"UI concern"}),e.jsxs("div",{className:"v",children:["Display data, handle user input, show errors.",e.jsx("span",{className:"small",children:"Example: React components, pages, forms."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Business concern"}),e.jsxs("div",{className:"v",children:["Rules and decisions.",e.jsx("span",{className:"small",children:"Example: pricing rules, discount logic, role checks."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Data concern"}),e.jsxs("div",{className:"v",children:["Storage and retrieval.",e.jsx("span",{className:"small",children:"Example: database queries, API calls."})]})]})]}),e.jsx("p",{className:"ex",children:"Example: Keep your React UI separate from API logic. Put API calls in a service file, and keep components focused on rendering and user interaction."}),e.jsx("p",{className:"note",children:"This improves testing, reduces merge conflicts, and makes changes safer."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"SOLID improves object-oriented design. DRY reduces duplication. KISS keeps solutions simple. YAGNI avoids premature complexity. Separation of concerns keeps responsibilities separate."})]})]})})]})},Lf={Wrapper:fe.section`
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
    `},Rf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"designPatternsHighLevel",title:"Design Patterns (High Level)",sub:"Creational, Structural, Behavioral patterns - plus Singleton, Factory, Observer, and Strategy with examples."}),[]);return e.jsxs(Lf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Ye,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Architecture"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ra,{})}),e.jsx("h3",{className:"h3",children:"What is a design pattern"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"design pattern"})," is a reusable solution to a common software design problem. It is not copy-paste code. It is a repeatable idea or structure that helps you write code that is easier to change and maintain."]}),e.jsx("p",{className:"p",children:'Think of patterns like "recipes" for design. Same problem appears again and again, so we keep a known approach instead of inventing from zero each time.'}),e.jsx("p",{className:"note",children:'Patterns improve communication too. If someone says "use Factory", the team quickly understands the shape of the solution.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ea,{})}),e.jsx("h3",{className:"h3",children:"Creational patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Creational patterns"})," focus on"," ",e.jsx("b",{children:"object creation"}),". They control how objects are created so code stays flexible and does not depend on concrete classes directly."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - create objects in a clean, controlled way"}),e.jsx("li",{children:"Helps when creation logic is complex or must be interchangeable"})]}),e.jsx("p",{className:"note",children:'Example idea: instead of doing "new" everywhere, use a creator that decides what to build.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Dp,{})}),e.jsx("h3",{className:"h3",children:"Structural patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Structural patterns"})," focus on"," ",e.jsx("b",{children:"how objects and classes are composed"}),". They help you build bigger structures from smaller pieces without making the system messy."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - compose parts cleanly and reuse code"}),e.jsx("li",{children:"Common vibe - wrapping, connecting, adapting"})]}),e.jsx("p",{className:"note",children:"Example idea: wrap an old library so your app can use it with a cleaner interface."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Behavioral patterns overview"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Behavioral patterns"})," focus on"," ",e.jsx("b",{children:"how objects communicate"})," and how responsibilities are distributed. They define clean ways to handle interactions, events, and workflows."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Goal - keep communication clean and avoid tight coupling"}),e.jsx("li",{children:"Helps in event systems, workflows, and changing behavior at runtime"})]}),e.jsx("p",{className:"note",children:"Example idea: when one thing changes, many other things need to react without direct dependencies."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(zx,{})}),e.jsx("h3",{className:"h3",children:"Singleton"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Singleton"})," is a pattern where only"," ",e.jsx("b",{children:"one instance"})," of a class is created and reused everywhere. It acts like a global shared object."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["Some things should have a single shared state.",e.jsx("span",{className:"small",children:"Example: a config manager, a logger, a single database connection manager."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common risk"}),e.jsx("div",{className:"v",children:"It can become hidden global state and make testing harder. Use only when truly needed."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:"Your app needs logging. If every module creates its own logger, logs can be inconsistent. A Singleton logger keeps one configuration and one output pipeline."})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Vl,{})}),e.jsx("h3",{className:"h3",children:"Factory"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Factory"})," is a pattern where object creation is moved into a separate creator function or class. Instead of the caller doing direct construction, the factory decides what exact object to create."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["Caller should not care about the exact class being created.",e.jsx("span",{className:"small",children:"Example: payment method selection, notification channel selection."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it helps"}),e.jsx("div",{className:"v",children:"Add new types without changing code everywhere. Centralizes creation logic."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:'In an e-commerce app, you support "UPI", "Card", and "CashOnDelivery". A payment factory takes an input like "Card" and returns the correct handler. UI stays clean because it just asks the factory for the payment handler.'})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"Observer"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Observer"})," is a pattern where one object called the ",e.jsx("b",{children:"subject"})," publishes changes, and many ",e.jsx("b",{children:"observers"})," subscribe and react to those changes automatically."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Terms"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"Subject"})," - the thing being observed.",e.jsx("span",{className:"small",children:"Example: a data store, a button click event, a stock price feed."}),e.jsx("b",{children:"Observer"})," - listeners that react when subject changes.",e.jsx("span",{className:"small",children:"Example: UI components, notification service, logger."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsx("div",{className:"v",children:"Many components need updates when one thing changes, without hard wiring everything."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:"In a shopping cart, when quantity changes, total price should update, header cart count should update, and checkout button state should update. Using Observer, all these subscribe to cart changes instead of manually calling each update."})]}),e.jsx("p",{className:"note",children:"React state updates are conceptually similar to Observer behavior."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ea,{})}),e.jsx("h3",{className:"h3",children:"Strategy"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Strategy"})," is a pattern where you define multiple algorithms or behaviors and select one at runtime based on need. It avoids large if-else blocks and makes behavior easy to swap."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Problem it solves"}),e.jsxs("div",{className:"v",children:["You need different ways to do the same job, based on context.",e.jsx("span",{className:"small",children:"Example: sorting methods, discount calculation, routing rules."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it helps"}),e.jsx("div",{className:"v",children:"Add new strategies without rewriting the main logic. Keeps code modular."})]})]}),e.jsxs("div",{className:"example",children:[e.jsx("div",{className:"exTitle",children:"Example scenario"}),e.jsx("p",{className:"p",children:'Discount calculation can vary: "FestivalDiscount", "MemberDiscount", "CouponDiscount". Strategy pattern lets you pick one calculation strategy without changing checkout logic.'})]}),e.jsx("p",{className:"note",children:"Strategy is about replacing a big conditional chain with pluggable behavior."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Quick revision table"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Pattern"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Main purpose"}),e.jsx("th",{children:"Common example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Singleton"}),e.jsx("td",{children:"Creational"}),e.jsx("td",{children:"Single shared instance"}),e.jsx("td",{children:"Logger, config manager"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Factory"}),e.jsx("td",{children:"Creational"}),e.jsx("td",{children:"Create correct object based on input"}),e.jsx("td",{children:"Payment method handler"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Observer"}),e.jsx("td",{children:"Behavioral"}),e.jsx("td",{children:"Notify multiple listeners on change"}),e.jsx("td",{children:"Event system, state updates"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Strategy"}),e.jsx("td",{children:"Behavioral"}),e.jsx("td",{children:"Swap algorithm at runtime"}),e.jsx("td",{children:"Discount rules, sorting"})]})]})]})}),e.jsx("p",{className:"note",children:"These are high-level mental models. The goal is to recognize when a pattern fits, not to memorize code."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Creational patterns decide how objects are created. Structural patterns decide how parts are composed. Behavioral patterns decide how parts communicate. Singleton and Factory are about creation. Observer and Strategy are about behavior and communication."})]})]})})]})},Af={Wrapper:fe.section`
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
    `},_f=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"testingFundamentals",title:"Testing Fundamentals",sub:"Unit, integration, system, acceptance tests, manual vs automation, TDD and CI explained clearly."}),[]);return e.jsxs(Af.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(tt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Quality"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(on,{})}),e.jsx("h3",{className:"h3",children:"What testing means"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Testing"})," is the process of checking that a software system behaves as expected. The goal is to catch bugs early, reduce risk, and keep software stable while changes happen."]}),e.jsx("p",{className:"p",children:"Real example: you add a new discount rule in an e-commerce cart. Testing ensures the new rule works and also that old things like totals, taxes, and coupons do not break."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Find bugs early"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Reduce production risk"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Confidence in changes"})]}),e.jsx("p",{className:"note",children:"Testing is not just QA. Developers also own testing through unit tests and automation."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ea,{})}),e.jsx("h3",{className:"h3",children:"Unit testing"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"unit test"})," checks the smallest testable part of code such as a function, method, or component in isolation."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Focus"}),e.jsx("div",{className:"v",children:"One function or module, not the full system."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Speed"}),e.jsx("div",{className:"v",children:"Very fast. Can run hundreds in seconds."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Test `calculateTotal(items)` returns correct total for different inputs."})]})]}),e.jsx("p",{className:"note",children:"Unit tests should be predictable. If they fail randomly, they become useless."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Integration testing"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"integration test"})," checks how multiple modules work together. It tests the connections between components."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Tests how your API talks to the database."}),e.jsx("li",{children:"Tests how frontend calls backend endpoints."}),e.jsx("li",{children:"Tests how login service works with email or OTP provider."})]}),e.jsx("p",{className:"note",children:"Integration tests are slower than unit tests but catch bugs that happen at boundaries."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"System testing"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"System testing"})," checks the complete system as a whole. It verifies that the entire application works from end to end."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Scope"}),e.jsx("div",{className:"v",children:"Full app with real services or close-to-real setup."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Create account - login - add product - pay - verify order confirmation."})]})]}),e.jsx("p",{className:"note",children:"System testing ensures features work together like real users expect."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(tt,{})}),e.jsx("h3",{className:"h3",children:"Acceptance testing"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Acceptance testing"}),' checks whether the software meets business requirements and is ready to release. It answers: "Is this acceptable for delivery"']}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Often based on ",e.jsx("b",{children:"acceptance criteria"})," ","written in user stories."]}),e.jsx("li",{children:"Can be done by QA, product owner, client, or end users."}),e.jsx("li",{children:'Example: "Password reset email must arrive within 30 seconds and the link must expire in 10 minutes."'})]}),e.jsx("p",{className:"note",children:"If acceptance test fails, the feature is not considered complete."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(on,{})}),e.jsx("h3",{className:"h3",children:"Manual vs Automated testing"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Manual testing"}),e.jsxs("div",{className:"v",children:["A human tests by clicking, typing, and verifying results.",e.jsx("span",{className:"small",children:"Example: QA tests login, signup, and checkout by hand."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Automated testing"}),e.jsxs("div",{className:"v",children:["Tests are written as code and run automatically.",e.jsx("span",{className:"small",children:"Example: A test script logs in and verifies the dashboard loads correctly."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Manual is useful for exploratory testing and quick UI checks."}),e.jsx("li",{children:"Automation is best for repeated checks like regression testing."}),e.jsx("li",{children:"Good teams use both - manual for discovery, automation for stability."})]}),e.jsx("p",{className:"note",children:"Regression testing means checking that old features still work after new changes."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(at,{})}),e.jsx("h3",{className:"h3",children:"TDD - Test Driven Development"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"TDD"})," means ",e.jsx("b",{children:"Test Driven Development"}),". It is a development approach where you write tests first, then write code to pass the tests."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Red"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Green"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Refactor"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Red"})," - write a test, it fails because code is missing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Green"})," - write minimum code to make the test pass."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Refactor"})," - clean the code while keeping tests passing."]})]}),e.jsx("p",{className:"note",children:"TDD improves design because you think about inputs and outputs before implementation."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"CI - Continuous Integration"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"CI"})," means ",e.jsx("b",{children:"Continuous Integration"}),". It is the practice of automatically building and testing code whenever changes are pushed."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Catch bugs early by validating every change."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common steps"}),e.jsx("div",{className:"v",children:"Install dependencies - run tests - run lint - build artifacts."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"On every pull request, CI runs unit tests and fails the PR if something breaks."})]})]}),e.jsx("p",{className:"note",children:'CI helps teams merge changes safely. It reduces the "it works on my machine" problem.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Unit tests check small pieces. Integration tests check module connections. System tests check full app behavior. Acceptance tests check business readiness. TDD writes tests first. CI runs tests automatically on code changes."})]})]})})]})},Mf={Wrapper:fe.section`
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
    `},Df=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"testQualityAttributes",title:"Quality Attributes",sub:"Scalability, availability, reliability, maintainability, security, and performance with examples."}),[]);return e.jsxs(Mf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Non-functional"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"intro",children:[e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Quality attributes"})," are the non-feature qualities of a system. They define how the system behaves in real life - under load, during failures, during changes, and against attacks."]}),e.jsxs("p",{className:"note",children:["These are also called"," ",e.jsx("b",{children:"non-functional requirements"}),"because they describe system qualities, not specific features."]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(to,{})}),e.jsx("h3",{className:"h3",children:"Scalability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scalability"})," means the system can handle more load (users, requests, data) by adding resources, without breaking or becoming too slow."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Load"}),e.jsxs("div",{className:"v",children:["The work the system must handle.",e.jsx("span",{className:"small",children:"Example: 10,000 users online, 2,000 requests per second."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Resources"}),e.jsx("div",{className:"v",children:"CPU, RAM, disk, network, servers, or database capacity."})]})]}),e.jsx("p",{className:"note",children:"Example: If a shopping app works for 1,000 users today, scalability means it should still work when 100,000 users arrive during a sale."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ql,{})}),e.jsx("h3",{className:"h3",children:"Availability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Availability"})," means the system is up and usable when users need it. It is about uptime."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"High availability means fewer outages."}),e.jsxs("li",{children:["Usually measured as a percentage.",e.jsx("span",{className:"small",children:"Example: 99.9 percent uptime."})]})]}),e.jsx("p",{className:"note",children:"Example: If your API is down for 30 minutes, users cannot login or pay. Availability is the goal of staying online."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Gl,{})}),e.jsx("h3",{className:"h3",children:"Reliability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Reliability"})," means the system works correctly and consistently over time. It is not only about being up, but also about being correct."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Reliable system gives correct results."}),e.jsx("li",{children:"It handles failures safely without data loss."})]}),e.jsx("p",{className:"note",children:"Example: A payment service can be available but unreliable if it sometimes double-charges or loses transactions."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(lt,{})}),e.jsx("h3",{className:"h3",children:"Maintainability"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Maintainability"})," means the software is easy to understand, fix, and improve over time. It decides how quickly you can ship changes safely."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Maintain"}),e.jsx("div",{className:"v",children:"Fix bugs, add features, improve performance, update dependencies."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Good signs"}),e.jsx("div",{className:"v",children:"Clean code, good naming, tests, docs, modular design."})]})]}),e.jsx("p",{className:"note",children:"Example: If a small change takes 2 days because code is messy and has no tests, maintainability is low."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"Security"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Security"})," means protecting the system and its data from unauthorized access, misuse, and attacks."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Authentication"})," - proving who you are.",e.jsx("span",{className:"small",children:"Example: login with password or OTP (One Time Password)."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Authorization"})," - what you are allowed to do.",e.jsx("span",{className:"small",children:"Example: only admin can delete users."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Encryption"})," - data is converted into a secret form.",e.jsx("span",{className:"small",children:"Example: HTTPS (Hypertext Transfer Protocol Secure) uses TLS (Transport Layer Security)."})]})]}),e.jsx("p",{className:"note",children:"Example: A reliable app without security can still be hacked and lose user data."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Xx,{})}),e.jsx("h3",{className:"h3",children:"Performance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Performance"})," means how fast and efficiently the system responds and uses resources."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Latency"}),e.jsxs("div",{className:"v",children:["Time taken for one request.",e.jsx("span",{className:"small",children:"Example: API response in 120 ms (milliseconds)."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Throughput"}),e.jsxs("div",{className:"v",children:["Requests handled per unit time.",e.jsx("span",{className:"small",children:"Example: 1,000 requests per second."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Resource usage"}),e.jsx("div",{className:"v",children:"CPU, RAM, disk I/O (Input Output), network usage."})]})]}),e.jsx("p",{className:"note",children:"Example: A page that loads in 8 seconds is slow. Improving performance means reducing load time and resource usage."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(an,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Availability is being up. Reliability is being correct. Scalability is handling growth. Maintainability is easy changes. Security protects data. Performance is speed and efficiency."})]})]})]})})]})},Of={Wrapper:fe.section`
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
    `},Ff=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"devOpsBasics",title:"DevOps Basics",sub:"CI and CD meaning, deployment pipeline, Docker and containers, containers vs VMs, and monitoring basics."}),[]);return e.jsxs(Of.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Ea,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Production"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"What is DevOps - meaning and goal"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DevOps"})," is a culture and set of practices that improves collaboration between"," ",e.jsx("b",{children:"Development"})," and ",e.jsx("b",{children:"Operations"}),". The goal is to deliver software ",e.jsx("b",{children:"faster"}),","," ",e.jsx("b",{children:"safer"}),", and ",e.jsx("b",{children:"more reliably"}),"."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Development"})," builds features and fixes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Operations"})," runs software in production and keeps it stable."]}),e.jsx("li",{children:"DevOps reduces friction by automating builds, tests, deployments, and monitoring."})]}),e.jsx("p",{className:"note",children:"DevOps is not only tools. Tools support the process, but teamwork and automation mindset is the main point."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"CI and CD meaning"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"CI"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"CI"})," means"," ",e.jsx("b",{children:"Continuous Integration"}),". Developers merge small code changes frequently and run automated checks.",e.jsx("span",{className:"small",children:"Typical CI tasks: lint, unit tests, build, security checks."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"CD"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"CD"})," can mean"," ",e.jsx("b",{children:"Continuous Delivery"})," or"," ",e.jsx("b",{children:"Continuous Deployment"}),".",e.jsx("span",{className:"small",children:"Continuous Delivery: code is always ready to release, but release may be manual."}),e.jsx("span",{className:"small",children:"Continuous Deployment: every successful change is deployed automatically."})]})]})]}),e.jsx("p",{className:"note",children:"CI makes sure changes do not break the codebase. CD makes sure releases are repeatable and fast."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Yx,{})}),e.jsx("h3",{className:"h3",children:"Deployment pipeline"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"deployment pipeline"})," is an automated sequence of steps that turns code into a running production release. It gives a predictable path from commit to production."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Commit"}),e.jsx("div",{className:"d",children:"Developer pushes code to Git repository."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Build"}),e.jsxs("div",{className:"d",children:["Compile or bundle the app and produce artifacts.",e.jsx("span",{className:"small",children:"Example: Vite build creates dist folder."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Test"}),e.jsxs("div",{className:"d",children:["Run automated tests to catch issues early.",e.jsx("span",{className:"small",children:"Example: unit tests and integration tests."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Package"}),e.jsxs("div",{className:"d",children:["Create a deployable package.",e.jsx("span",{className:"small",children:"Example: Docker image or zipped build."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Deploy"}),e.jsxs("div",{className:"d",children:["Release to environment.",e.jsx("span",{className:"small",children:"Example: staging then production."})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"6"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Verify"}),e.jsx("div",{className:"d",children:"Run smoke checks and monitor health metrics."})]})]})]}),e.jsx("p",{className:"note",children:"Pipeline keeps releases consistent. It reduces human mistakes during deployment."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ra,{})}),e.jsx("h3",{className:"h3",children:"Docker basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Docker"})," is a tool used to build and run",e.jsx("b",{children:"containers"}),". It packages an app with its dependencies so it runs the same way on every machine."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Image"}),e.jsxs("div",{className:"v",children:["A read-only template containing app code and dependencies.",e.jsx("span",{className:"small",children:"Think: a snapshot you can use to create containers."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Container"}),e.jsxs("div",{className:"v",children:["A running instance of an image.",e.jsx("span",{className:"small",children:"Think: container is what actually runs."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Dockerfile"}),e.jsxs("div",{className:"v",children:["A file that describes how to build an image.",e.jsx("span",{className:"small",children:"Example: base image, install deps, copy code, start command."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Registry"}),e.jsxs("div",{className:"v",children:["A place to store and download images.",e.jsx("span",{className:"small",children:"Example: Docker Hub or private registry."})]})]})]}),e.jsx("p",{className:"note",children:"Real-life example: your Node API runs fine on your laptop but fails on server due to missing dependency. Docker fixes this by packaging everything needed."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Containers vs VMs"})]}),e.jsx("p",{className:"p",children:"Both containers and VMs isolate applications, but they do it differently."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"VM"}),e.jsxs("div",{className:"v",children:[e.jsx("b",{children:"VM"})," means ",e.jsx("b",{children:"Virtual Machine"}),". It runs a full guest operating system on a hypervisor.",e.jsx("span",{className:"small",children:"Heavier, slower to start, but strong isolation."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Container"}),e.jsxs("div",{className:"v",children:["Shares the host OS kernel and isolates processes.",e.jsx("span",{className:"small",children:"Lightweight, fast start, efficient for microservices."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Containers are great for packaging and fast scaling."}),e.jsx("li",{children:"VMs are useful when you need different OS or stronger isolation."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Bx,{})}),e.jsx("h3",{className:"h3",children:"Monitoring basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Monitoring"})," means watching a system in production to detect problems early. It helps teams know if the app is healthy, slow, or failing."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Metrics"}),e.jsxs("div",{className:"v",children:["Numeric values collected over time.",e.jsx("span",{className:"small",children:"Examples: CPU usage, memory, request count, response time."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Logs"}),e.jsxs("div",{className:"v",children:["Text records of events.",e.jsx("span",{className:"small",children:'Example: "payment failed", "user login", "API error stack trace".'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Alerts"}),e.jsxs("div",{className:"v",children:["Notifications triggered when something crosses a threshold.",e.jsx("span",{className:"small",children:"Example: alert when error rate crosses 2 percent."})]})]})]}),e.jsx("p",{className:"note",children:'Monitoring is how you avoid "users found the bug before us" situation.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"DevOps improves delivery by automation. CI checks code often. CD makes releases repeatable. Pipelines connect commit to production. Docker packages apps into containers. Monitoring keeps production healthy."})]})]})})]})},Wf={Wrapper:fe.section`
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
    `},Bf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"codeQualityAndReviews",title:"Code Quality and Reviews",sub:"Clean code principles, code smells, refactoring basics, and technical debt with examples."}),[]);return e.jsxs(Wf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(tt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Quality"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(so,{})}),e.jsx("h3",{className:"h3",children:"What is code quality and why reviews matter"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code quality"})," means how easy it is to"," ",e.jsx("b",{children:"read"}),", ",e.jsx("b",{children:"change"}),", ",e.jsx("b",{children:"test"}),", and"," ",e.jsx("b",{children:"maintain"})," your code while keeping it correct. High-quality code reduces bugs and makes future changes faster."]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Code review"})," is when another developer checks your changes before merging. Reviews are used to catch mistakes, improve clarity, and share team standards."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Correctness"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Readability"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Maintainability"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Testability"})]}),e.jsx("p",{className:"note",children:"Reviews are not about ego. They are a safety net and a learning tool."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Clean code principles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Clean code"})," means code that reads like a clear explanation. It should be easy for you and your teammate to understand after weeks or months."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Meaningful names"})," - use names that explain purpose.",e.jsxs("span",{className:"small",children:["Bad: ",e.jsx("span",{className:"mono",children:"d"})," ","Good:"," ",e.jsx("span",{className:"mono",children:"daysSinceSignup"})]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Small functions"})," - one function should do one job.",e.jsxs("span",{className:"small",children:["A function named"," ",e.jsx("span",{className:"mono",children:"createInvoice"})," ","should not also send emails and update analytics."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Clear control flow"})," - avoid too many nested conditions."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Single responsibility"})," - one module should have one reason to change."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency"})," - follow the same style across files, folders, and naming."]})]}),e.jsx("p",{className:"note",children:"Clean code is not about being fancy. It is about being clear."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(an,{})}),e.jsx("h3",{className:"h3",children:"Code smells"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"code smell"})," is a warning sign that code might be hard to maintain or risky to change. It does not always mean the code is wrong, but it suggests improvement is needed."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Long function"})," - one function is doing too much."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Duplicate code"})," - same logic repeated in many places."]}),e.jsxs("li",{children:[e.jsx("b",{children:"God object"})," - one class or module knows everything and does everything."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Too many parameters"})," - function signature is hard to understand."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Magic numbers"})," - unexplained constants like ",e.jsx("span",{className:"mono",children:"37"})," or"," ",e.jsx("span",{className:"mono",children:"9999"})," inside logic."]})]}),e.jsx("p",{className:"note",children:"Smells usually lead to bugs later because nobody understands what will break."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(at,{})}),e.jsx("h3",{className:"h3",children:"Refactoring basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Refactoring"})," means improving the internal structure of code without changing its external behavior. The output should stay the same, but the code becomes easier to understand and modify."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Make code easier to maintain and less likely to break."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Safe approach"}),e.jsxs("div",{className:"v",children:["Small steps + tests.",e.jsx("span",{className:"small",children:"Tests act like a safety harness while refactoring."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common refactors"}),e.jsx("div",{className:"v",children:"Extract function, rename variables, remove duplication, simplify conditionals."})]})]}),e.jsxs("div",{className:"codeBlock",children:[e.jsx("div",{className:"codeTitle",children:"Mini example"}),e.jsx("pre",{className:"code",children:`// Before - repeated logic
if (user.role === "admin") {
    canEdit = true;
} else if (user.role === "manager") {
    canEdit = true;
}

// After - refactor to a clearer rule
const canEdit = ["admin", "manager"].includes(user.role);`})]}),e.jsx("p",{className:"note",children:"Refactoring is easier when code has good tests. Without tests, refactoring feels risky."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(lt,{})}),e.jsx("h3",{className:"h3",children:"Technical debt"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Technical debt"})," is the extra future work you create when you take shortcuts today. You save time now, but you pay later with slower development, more bugs, and painful changes."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Hardcoding values, skipping tests, writing unclear code just to ship fast."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it happens"}),e.jsx("div",{className:"v",children:"Deadlines, unclear requirements, lack of reviews, lack of time for refactoring."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"How to manage"}),e.jsx("div",{className:"v",children:"Track it, prioritize it, pay it off regularly, do refactoring in small parts."})]})]}),e.jsx("p",{className:"note",children:"Debt is not always bad. Sometimes you accept small debt to ship. The mistake is ignoring it forever."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Clean code reduces confusion. Smells warn about future bugs. Refactoring improves structure without changing behavior. Technical debt is future pain created by shortcuts today. Reviews help catch all of these early."})]})]})})]})},$f={Wrapper:fe.section`
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
    `},Uf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"documentation",title:"Documentation",sub:"API documentation, README structure, architecture docs, and change logs with beginner friendly examples."}),[]);return e.jsxs($f.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(no,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Must know"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ul,{})}),e.jsx("h3",{className:"h3",children:"What is documentation"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Documentation"})," is written information that explains how a software system works, how to use it, and how to maintain it. Good documentation reduces confusion, speeds up onboarding, and prevents repeated mistakes."]}),e.jsx("p",{className:"p",children:"Simple example: If you leave a project after 6 months, documentation is what helps you or another developer understand how to run it, how features are designed, and how changes should be made safely."}),e.jsx("p",{className:"note",children:"Documentation is not only for users. It is also for developers, testers, DevOps teams, and future you."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Dp,{})}),e.jsx("h3",{className:"h3",children:"API documentation"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"API"})," means"," ",e.jsx("b",{children:"Application Programming Interface"}),". API documentation explains how to call an API and what to expect in return. It is used by frontend developers, other services, mobile apps, and external clients."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"Endpoints, methods, request body, response body, status codes, authentication, examples."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"GET /users/me"}),e.jsx("span",{className:"small",children:"Returns current logged-in user details."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:"Without API docs, developers guess inputs and outputs, which causes bugs and slow integration."})]})]}),e.jsx("p",{className:"note",children:"Common formats: OpenAPI (formerly called Swagger) and Postman collections."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ul,{})}),e.jsx("h3",{className:"h3",children:"README structure"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"README"})," is the first document people read in a repository. It should explain what the project is and how to run it."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Project title and one-line description"}),e.jsx("span",{className:"small",children:'Example: "Software Engineering Core Notes - quick revision single page"'})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Purpose and coverage"}),e.jsx("span",{className:"small",children:"What topics or features are included"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Tech stack"}),e.jsx("span",{className:"small",children:"Example: React, Vite, styled-components"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"How to run locally"}),e.jsx("span",{className:"small",children:"Example: npm install then npm run dev"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Build and deploy steps"}),e.jsx("span",{className:"small",children:"Example: GitHub Pages deploy command"})]})]}),e.jsx("p",{className:"note",children:"Good README makes a repo usable in minutes, not hours."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ye,{})}),e.jsx("h3",{className:"h3",children:"Architecture docs"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Architecture documents"})," explain the system design at a higher level. They help teams understand how components connect and why decisions were made."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"System overview, major components, data flow, database design overview, external services, and deployment flow."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common diagrams"}),e.jsx("div",{className:"v",children:"Component diagram, sequence diagram, flow diagram, and deployment diagram."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:'"Frontend calls API gateway, API gateway routes to auth service and product service, database stores users and products."'})]})]}),e.jsx("p",{className:"note",children:"Architecture docs are not only drawings. They should include the reasoning and tradeoffs behind choices."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Op,{})}),e.jsx("h3",{className:"h3",children:"Change logs"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"change log"})," is a record of changes made across versions of a project. It helps users and developers quickly see what changed between releases."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What it includes"}),e.jsx("div",{className:"v",children:"Version number, date, and grouped changes like Added, Changed, Fixed, Removed."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example entry"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:"1.0.2"}),e.jsx("span",{className:"small",children:"Fixed login redirect bug. Added caching for notes search."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it matters"}),e.jsx("div",{className:"v",children:'Without a change log, teams waste time asking "what changed" and debugging unknown updates.'})]})]}),e.jsx("p",{className:"note",children:"Change log is different from git commit history. Change log is human-friendly summary of releases."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"README helps run the project. API docs help integrate. Architecture docs explain system structure. Change logs track releases."})]})]})})]})},Vf={Wrapper:fe.section`
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
    `},Hf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"securityBasics",title:"Security Basics",sub:"Authentication vs authorization, encryption fundamentals, OWASP basics, and common vulnerabilities with examples."}),[]);return e.jsxs(Vf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Must know"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsx("div",{className:"inner",children:e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Kx,{})}),e.jsx("h3",{className:"h3",children:"Authentication vs Authorization"})]}),e.jsx("p",{className:"p",children:"These two are confused a lot, but they solve two different problems."}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Authentication"}),e.jsxs("div",{className:"v",children:["Verifying ",e.jsx("b",{children:"who"})," you are.",e.jsx("span",{className:"small",children:"Example: login with password, OTP, Google sign-in."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Authorization"}),e.jsxs("div",{className:"v",children:["Deciding ",e.jsx("b",{children:"what"})," you can access after you are authenticated.",e.jsx("span",{className:"small",children:"Example: admin can delete users, normal user cannot."})]})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Authentication = who are you"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Authorization = what can you do"})]}),e.jsx("p",{className:"note",children:"Quick example: Entering a building gate check is authentication. Entering only allowed rooms is authorization."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Fp,{})}),e.jsx("h3",{className:"h3",children:"Encryption basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Encryption"})," means converting readable data (called ",e.jsx("b",{children:"plaintext"}),") into unreadable data (called ",e.jsx("b",{children:"ciphertext"}),") so only authorized parties can read it."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Plaintext"}),e.jsxs("div",{className:"v",children:["Original readable data.",e.jsx("span",{className:"small",children:'Example: "myPassword123"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Ciphertext"}),e.jsxs("div",{className:"v",children:["Encrypted unreadable output.",e.jsx("span",{className:"small",children:"Example: looks like random characters, not readable."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Key"}),e.jsxs("div",{className:"v",children:["Secret value used to encrypt and decrypt.",e.jsx("span",{className:"small",children:"Without the key, ciphertext should not be readable."})]})]})]}),e.jsxs("div",{className:"split",children:[e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"boxTop",children:[e.jsx("span",{className:"bIcon",children:e.jsx(Ox,{})}),e.jsx("div",{className:"bTitle",children:"Symmetric encryption"})]}),e.jsx("p",{className:"p",children:"Same key is used for encryption and decryption."}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fast, good for large data."}),e.jsx("li",{children:"Main problem is sharing the key securely."})]}),e.jsx("p",{className:"note",children:"Example use: encrypting files, data at rest (stored data)."})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"boxTop",children:[e.jsx("span",{className:"bIcon",children:e.jsx(so,{})}),e.jsx("div",{className:"bTitle",children:"Asymmetric encryption"})]}),e.jsxs("p",{className:"p",children:["Uses two keys: ",e.jsx("b",{children:"public key"})," and"," ",e.jsx("b",{children:"private key"}),"."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Public key can be shared, private key must be secret."}),e.jsx("li",{children:"Slower, but solves secure key sharing problem."})]}),e.jsx("p",{className:"note",children:"Example use: TLS (Transport Layer Security) handshake on HTTPS."})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("span",{className:"wIcon",children:e.jsx(an,{})}),e.jsxs("div",{className:"wText",children:[e.jsx("div",{className:"wTitle",children:"Hashing is not encryption"}),e.jsxs("div",{className:"wSub",children:[e.jsx("b",{children:"Hashing"})," converts data into a fixed-length value and is one-way. Passwords should be stored as hashed values, not encrypted values."]})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"OWASP basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"OWASP"})," stands for"," ",e.jsx("b",{children:"Open Web Application Security Project"}),". It is a community-driven organization that provides guidance, tools, and awareness about web application security."]}),e.jsxs("p",{className:"p",children:["The most famous thing from OWASP is the"," ",e.jsx("b",{children:"OWASP Top 10"}),", which is a list of common and high-impact security risks in web apps. It is used widely in audits, interviews, and real security checklists."]}),e.jsxs("div",{className:"noteBox",children:[e.jsx("div",{className:"nbTitle",children:"Simple way to use OWASP"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Use OWASP Top 10 as a checklist during development and review."}),e.jsx("li",{children:"Validate input, enforce auth rules, secure configs, and log safely."}),e.jsx("li",{children:"Keep dependencies updated and use security headers."})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(an,{})}),e.jsx("h3",{className:"h3",children:"Common vulnerabilities"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"vulnerability"})," is a weakness in software that an attacker can exploit to cause harm. Below are common categories you should know and be able to explain."]}),e.jsxs("div",{className:"vulnGrid",children:[e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"SQL Injection"}),e.jsx("div",{className:"vSub",children:"Attacker injects SQL (Structured Query Language) into inputs to access or modify database data."}),e.jsx("div",{className:"vFix",children:"Fix: use parameterized queries, ORM, and validate inputs."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"XSS"}),e.jsxs("div",{className:"vSub",children:[e.jsx("b",{children:"XSS"})," is Cross-Site Scripting. Attacker injects script into a page that runs in user browser."]}),e.jsx("div",{className:"vFix",children:"Fix: escape output, sanitize input, use CSP (Content Security Policy)."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"CSRF"}),e.jsxs("div",{className:"vSub",children:[e.jsx("b",{children:"CSRF"})," is Cross-Site Request Forgery. Attacker tricks a logged-in user browser into sending a request."]}),e.jsx("div",{className:"vFix",children:"Fix: CSRF tokens, SameSite cookies, re-check auth for sensitive actions."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Broken Access Control"}),e.jsx("div",{className:"vSub",children:"Users can access actions or data they should not. This is authorization failure."}),e.jsx("div",{className:"vFix",children:"Fix: server-side authorization checks on every request."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Insecure Password Storage"}),e.jsx("div",{className:"vSub",children:"Storing passwords in plaintext or weak hashes."}),e.jsx("div",{className:"vFix",children:"Fix: use strong hashing with salt, like bcrypt."})]}),e.jsxs("div",{className:"vCard",children:[e.jsx("div",{className:"vTitle",children:"Security Misconfiguration"}),e.jsx("div",{className:"vSub",children:"Unsafe default settings like open admin panels, debug mode in production, weak CORS."}),e.jsx("div",{className:"vFix",children:"Fix: secure defaults, remove debug, restrict access, review configs."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Auth is identity, authz is permission. Encryption protects data. OWASP is the common security checklist. Most attacks happen because input is not validated or access rules are not enforced."})]})]})]})})})]})},Gf={Wrapper:fe.section`
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
    `},qf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"softwareMaintenance",title:"Software Maintenance",sub:"Corrective, adaptive, perfective, and preventive maintenance with real examples."}),[]);return e.jsxs(Gf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(lt,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Post release"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ln,{})}),e.jsx("h3",{className:"h3",children:"What is software maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Software maintenance"})," means the work done on software after it is released to users. This includes fixing bugs, updating software to work in new environments, improving performance, and preventing future issues."]}),e.jsx("p",{className:"p",children:"In real life, most software cost is not only building it once, but maintaining it for years. Maintenance keeps software usable, secure, and easy to change."}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Fix"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Adapt"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Improve"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Prevent"})]}),e.jsx("p",{className:"note",children:"Maintenance is not only bug fixing. It is also upgrades, improvements, and prevention work."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Sx,{})}),e.jsx("h3",{className:"h3",children:"Corrective maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Corrective maintenance"})," means fixing problems in existing software after they are found. The problem can be a bug, crash, wrong output, or unexpected behavior."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Restore correct behavior and remove defects."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Checkout page crashes when user applies a coupon - fix the crash and add validation."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Typical signals"}),e.jsx("div",{className:"v",children:"Bugs reported by users, error logs, test failures."})]})]}),e.jsx("p",{className:"note",children:"Think: something is broken - fix it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(at,{})}),e.jsx("h3",{className:"h3",children:"Adaptive maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Adaptive maintenance"})," means changing software so it continues to work when the environment changes. The software might be fine, but the outside world changed."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Keep software compatible with new platforms, rules, or dependencies."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsx("div",{className:"v",children:"Payment provider changes API format - update your integration to match the new API."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Environment means"}),e.jsx("div",{className:"v",children:"OS (Operating System), browser, device, library updates, API changes, law changes."})]})]}),e.jsx("p",{className:"note",children:"Think: software is correct, but the world changed - adapt."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(to,{})}),e.jsx("h3",{className:"h3",children:"Perfective maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Perfective maintenance"})," means improving software to make it better for users and the business. This can be performance improvements, usability improvements, or small feature additions."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Improve value, speed, user experience, and maintainability."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Examples"}),e.jsx("div",{className:"v",children:"Speed up search results by adding an index, reduce page load time, improve UI flow, add filters to product list."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:'What "perfective" means'}),e.jsx("div",{className:"v",children:'Make the system closer to "ideal" based on feedback and goals.'})]})]}),e.jsx("p",{className:"note",children:"Think: nothing is broken, but we improve it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Qr,{})}),e.jsx("h3",{className:"h3",children:"Preventive maintenance"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Preventive maintenance"})," means doing work to reduce the chance of future problems. It focuses on improving internal quality and removing risks before they become bugs or outages."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Prevent future failures and reduce maintenance cost later."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Examples"}),e.jsx("div",{className:"v",children:"Refactor messy code, update vulnerable dependencies, add missing tests, improve logging, remove unused code paths."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Risk examples"}),e.jsx("div",{className:"v",children:"Security risk, performance risk, scaling risk, fragile code, missing monitoring."})]})]}),e.jsx("p",{className:"note",children:"Think: it works now, but future can break it - prevent."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ln,{})}),e.jsx("h3",{className:"h3",children:"Quick comparison"})]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"row headRow",children:[e.jsx("div",{className:"cell",children:"Type"}),e.jsx("div",{className:"cell",children:"Meaning"}),e.jsx("div",{className:"cell",children:"Easy memory"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Corrective"}),e.jsx("div",{className:"cell",children:"Fix defects and bugs found after release"}),e.jsx("div",{className:"cell",children:"Something broke - fix it"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Adaptive"}),e.jsx("div",{className:"cell",children:"Update software for new environment changes"}),e.jsx("div",{className:"cell",children:"World changed - adapt"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Perfective"}),e.jsx("div",{className:"cell",children:"Improve performance, usability, and value"}),e.jsx("div",{className:"cell",children:"Improve it"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell strong",children:"Preventive"}),e.jsx("div",{className:"cell",children:"Reduce future risk by strengthening internals"}),e.jsx("div",{className:"cell",children:"Prevent it"})]})]}),e.jsx("p",{className:"note",children:'No short forms are required here. Only "OS" was used once and expanded as Operating System.'})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Corrective fixes bugs, adaptive keeps compatibility, perfective improves value, preventive reduces future risks."})]})]})})]})},Qf={Wrapper:fe.section`
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
    `},Yf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"ethicsAndProfessionalPractice",title:"Ethics and Professional Practice",sub:"Software ethics, data privacy, licensing basics, and open source vs proprietary with practical examples."}),[]);return e.jsxs(Qf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(Qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Professionalism"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(an,{})}),e.jsx("h3",{className:"h3",children:"Software ethics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Ethics"})," means doing the right thing even when it is legal to do something harmful. In software, ethics is about how your product affects users, society, safety, and trust."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Honesty"}),e.jsxs("div",{className:"v",children:["Do not hide important behavior.",e.jsx("span",{className:"small",children:"Example: Do not silently collect contacts or location without clear user consent."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Safety"}),e.jsxs("div",{className:"v",children:["Avoid designs that can harm users.",e.jsx("span",{className:"small",children:"Example: A medical app must not show wrong dosage due to rounding or UI bugs."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Fairness"}),e.jsxs("div",{className:"v",children:["Avoid discrimination and biased outcomes.",e.jsx("span",{className:"small",children:"Example: A hiring filter should not reject candidates unfairly due to biased training data."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Respect"}),e.jsxs("div",{className:"v",children:["Treat user time, money, and data as valuable.",e.jsx("span",{className:"small",children:"Example: Avoid dark patterns like misleading buttons or hidden subscriptions."})]})]})]}),e.jsx("p",{className:"note",children:"Engineering ethics is basically: build trust, reduce harm, and be transparent about risk."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Fp,{})}),e.jsx("h3",{className:"h3",children:"Data privacy"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Privacy"})," means a user should control how their personal information is collected, used, stored, and shared. Privacy is different from security."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Privacy"}),e.jsxs("div",{className:"v",children:["Rules about what data you should collect and why.",e.jsx("span",{className:"small",children:"Example: Collect only what is needed for the feature."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Security"}),e.jsxs("div",{className:"v",children:["Protection from unauthorized access or leaks.",e.jsx("span",{className:"small",children:"Example: Encrypt data and restrict database access."})]})]})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Personal data"})," - information that can identify a person.",e.jsx("span",{className:"small",children:"Example: name, phone number, email, address, device ID, location."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consent"})," - user clearly agrees after understanding what will happen."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Data minimization"})," - collect the minimum data required."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Retention"})," - how long you keep data before deleting it."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Anonymization"})," - removing identity from data so it cannot be linked back."]})]}),e.jsx("p",{className:"note",children:'Privacy habit: ask "do we need this data" before you store it.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(no,{})}),e.jsx("h3",{className:"h3",children:"Licensing basics"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"license"})," is the legal permission that defines how software can be used, copied, modified, and shared. Without a license, you do not have permission to use or redistribute code."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Copyright"})," - the default legal ownership of code written by someone."]}),e.jsxs("li",{children:[e.jsx("b",{children:"License terms"})," - rules that tell you what is allowed."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Attribution"})," - giving credit as required by the license."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Distribution"})," - sharing the software with others."]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("div",{className:"callTitle",children:"Practical example"}),e.jsx("div",{className:"callText",children:"If you copy a library into your project, you must follow its license. Some licenses require you to include the license text in your app or repo. Some require you to open source your changes if you distribute the software."})]}),e.jsx("p",{className:"note",children:"Always check the license before using a library in production."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(ms,{})}),e.jsx("h3",{className:"h3",children:"Open source vs proprietary"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Open source"})," means the source code is publicly available and can be used under an open source license. ",e.jsx("b",{children:"Proprietary"})," means the code is owned privately and usage is restricted by the owner."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Open source"}),e.jsxs("div",{className:"v",children:["Code is visible, community can contribute, reuse depends on license.",e.jsx("span",{className:"small",children:"Example: Linux kernel, many libraries on GitHub."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Proprietary"}),e.jsxs("div",{className:"v",children:["Code is closed, usage is controlled, typically paid or limited.",e.jsx("span",{className:"small",children:"Example: many commercial apps and enterprise tools."})]})]})]}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"bTitle",children:"Pros of open source"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Transparency and auditability"}),e.jsx("li",{children:"Community improvements and bug fixes"}),e.jsx("li",{children:"Often lower cost to start"}),e.jsx("li",{children:"Less vendor lock-in"})]})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"bTitle",children:"Pros of proprietary"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Clear ownership and support contracts"}),e.jsx("li",{children:"Centralized roadmap and control"}),e.jsx("li",{children:"Often optimized user experience"}),e.jsx("li",{children:"Legal clarity for enterprise usage"})]})]})]}),e.jsx("p",{className:"note",children:"Open source does not mean free of rules. It means the rules are written in the license."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Ethics is about reducing harm and building trust. Privacy is about correct data handling. Licenses define what you are allowed to do with code. Open source and proprietary are ownership models, both with rules and tradeoffs."})]})]})})]})},Kf={Wrapper:fe.section`
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
    `},Xf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"agileDeepDive",title:"Agile Deep Dive",sub:"Scrum roles, sprint cycle, backlog, Kanban, standup, and retrospective with meanings and examples."}),[]);return e.jsxs(Kf.Wrapper,{id:o.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(qr,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:o.title}),e.jsx("span",{className:"badge",children:"Agile"})]}),e.jsx("p",{className:"sub",children:o.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(Re,{})})]}),e.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(qr,{})}),e.jsx("h3",{className:"h3",children:"What is Agile"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Agile"})," is a way of building software in small steps with frequent feedback. Instead of doing a big plan and shipping once, Agile teams deliver smaller improvements regularly, learn from users, and adjust quickly."]}),e.jsx("p",{className:"p",children:"Example: Instead of building a full e-commerce app for 6 months and launching at the end, an Agile team ships a basic checkout first, then adds coupons, then adds order tracking, then improves performance."}),e.jsx("p",{className:"note",children:"Agile is a mindset. Scrum and Kanban are common frameworks used to apply it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(cn,{})}),e.jsx("h3",{className:"h3",children:"Scrum roles"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Scrum"})," is a framework for Agile work. It defines roles, events, and artifacts so teams can deliver in fixed time cycles called sprints."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Product Owner"}),e.jsxs("div",{className:"v",children:["Decides what to build next based on business value. Owns prioritization.",e.jsx("span",{className:"small",children:'Example: chooses that "password reset" is more important than "dark mode"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Scrum Master"}),e.jsxs("div",{className:"v",children:["Helps the team follow Scrum, removes blockers, and improves process. Not a manager.",e.jsx("span",{className:"small",children:"Example: resolves delays, improves meetings, clears dependencies"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Development Team"}),e.jsxs("div",{className:"v",children:["Cross-functional people who build the product. Usually developers, testers, designers, etc.",e.jsx("span",{className:"small",children:"Example: builds feature, tests it, reviews it, ships it"})]})]})]}),e.jsx("p",{className:"note",children:"Scrum roles ensure clarity - who decides priorities, who supports the process, and who builds."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Gl,{})}),e.jsx("h3",{className:"h3",children:"Sprint cycle"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"sprint"})," is a fixed time box where the team commits to a small set of work and finishes it. Most sprints are 1 to 2 weeks."]}),e.jsxs("div",{className:"flow",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"1"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Sprint Planning"}),e.jsxs("div",{className:"d",children:["Team selects work from backlog and defines sprint goal.",e.jsx("span",{className:"small",children:'Example goal: "Deliver login and signup flows"'})]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"2"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Daily Standup"}),e.jsx("div",{className:"d",children:"Short daily sync to track progress and blockers."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"3"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Build and Test"}),e.jsx("div",{className:"d",children:"Implement tasks, review code, test features, and integrate."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"4"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Sprint Review"}),e.jsx("div",{className:"d",children:"Demo completed work to stakeholders and get feedback."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"tag",children:"5"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"t",children:"Retrospective"}),e.jsx("div",{className:"d",children:"Team reflects on what went well and what to improve next sprint."})]})]})]}),e.jsx("p",{className:"note",children:"Sprint cycle repeats. Feedback from review and retrospective affects next sprint."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(on,{})}),e.jsx("h3",{className:"h3",children:"Backlog"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"backlog"})," is a prioritized list of work. It contains everything that could be built: features, improvements, bugs, and technical tasks."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Product Backlog"}),e.jsxs("div",{className:"v",children:["Master list of all planned work. Owned and prioritized by Product Owner.",e.jsx("span",{className:"small",children:'Example items: "Add wishlist", "Fix slow search", "Improve checkout"'})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Sprint Backlog"}),e.jsxs("div",{className:"v",children:["The subset of backlog items chosen for the sprint. Owned by the team.",e.jsx("span",{className:"small",children:'Example: "Wishlist UI", "Wishlist API", "Wishlist tests"'})]})]})]}),e.jsxs("p",{className:"p",children:["Backlog items are often written as"," ",e.jsx("b",{children:"user stories"}),". A user story describes value from user perspective."]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"monoTitle",children:"Example user story"}),e.jsx("pre",{className:"mono",children:"As a user, I want to reset my password so I can regain access to my account."})]}),e.jsx("p",{className:"note",children:"Backlog grooming or refinement means regularly cleaning, rewriting, splitting, and re-prioritizing backlog items."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Ex,{})}),e.jsx("h3",{className:"h3",children:"Kanban"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Kanban"})," is an Agile method focused on continuous flow instead of fixed sprints. Work moves through visible stages on a board."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"To Do"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"In Progress"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Review"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Done"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"WIP limit"})," means Work In Progress limit. It restricts how many tasks can be in progress at once."]}),e.jsx("li",{children:"Focus is to reduce waiting time and deliver continuously."})]}),e.jsx("p",{className:"note",children:"Kanban is great for support teams, maintenance work, and continuous delivery pipelines."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Wx,{})}),e.jsx("h3",{className:"h3",children:"Standup"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"standup"})," is a short daily meeting. It is called standup because it is meant to be quick. Main goal is alignment and blocker visibility."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What I did"}),e.jsx("div",{className:"v",children:"Share progress since last standup."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What I will do"}),e.jsx("div",{className:"v",children:"Share plan for today."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Blockers"}),e.jsxs("div",{className:"v",children:["Anything preventing progress.",e.jsx("span",{className:"small",children:"Example: waiting for API endpoint, access issues, unclear requirement"})]})]})]}),e.jsx("p",{className:"note",children:"Standup is not a status report to a manager. It is for the team to coordinate."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(Gl,{})}),e.jsx("h3",{className:"h3",children:"Retrospective"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"retrospective"})," is a meeting after the sprint where the team reflects on process and collaboration. The goal is continuous improvement, not blaming people."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What went well"}),e.jsxs("div",{className:"v",children:["Identify practices to keep.",e.jsx("span",{className:"small",children:"Example: faster code reviews, clear tickets, fewer merge conflicts"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What went wrong"}),e.jsxs("div",{className:"v",children:["Identify pain points.",e.jsx("span",{className:"small",children:"Example: unclear requirements, too many tasks started at once"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Action items"}),e.jsxs("div",{className:"v",children:["Concrete improvements for next sprint.",e.jsx("span",{className:"small",children:"Example: add definition of done checklist, set WIP limits, improve ticket templates"})]})]})]}),e.jsx("p",{className:"note",children:"A good retrospective always ends with 1 to 3 small action items that the team actually follows."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnTitle",children:"At a glance"}),e.jsx("div",{className:"bnSub",children:"Scrum is sprint-based delivery with defined roles. Kanban is continuous flow with visual stages and WIP limits. Standup shows progress and blockers. Retrospective improves the process."})]})]})})]})},Zf=()=>{const a=dr.useRef(null);return e.jsxs($l.Wrapper,{children:[e.jsx($l.Header,{children:e.jsx(sf,{})}),e.jsxs($l.Main,{ref:a,children:[e.jsxs("div",{className:"contentWrapper",children:[e.jsx(hf,{}),e.jsx(mf,{}),e.jsx(gf,{}),e.jsx(yf,{}),e.jsx(bf,{}),e.jsx(wf,{}),e.jsx(Sf,{}),e.jsx(Tf,{}),e.jsx(If,{}),e.jsx(Pf,{}),e.jsx(Rf,{}),e.jsx(_f,{}),e.jsx(Df,{}),e.jsx(Ff,{}),e.jsx(Bf,{}),e.jsx(Uf,{}),e.jsx(Hf,{}),e.jsx(qf,{}),e.jsx(Yf,{}),e.jsx(Xf,{})]}),e.jsx("div",{className:"footerWrapper",children:e.jsx(pf,{})})]}),e.jsx(rf,{scrollContainerRef:a})]})};fx.createRoot(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(Zf,{})}));
