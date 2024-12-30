import{r as a,U as z,l as J,v as me}from"./chunk-K6AXKMTT-BxoATuLT.js";import{I as he,R as $e,g as ye,e as Ee}from"./tailwind--Tq6Lkz8.js";const we=(...e)=>{console!=null&&console.warn&&(P(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},Z={},A=(...e)=>{P(e[0])&&Z[e[0]]||(P(e[0])&&(Z[e[0]]=new Date),we(...e))},re=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout(()=>{e.off("initialized",t)},0),n()};e.on("initialized",t)}},W=(e,n,t)=>{e.loadNamespaces(n,re(e,t))},Q=(e,n,t,r)=>{if(P(t)&&(t=[t]),e.options.preload&&e.options.preload.indexOf(n)>-1)return W(e,t,r);t.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(n,re(e,r))},Te=(e,n,t={})=>!n.languages||!n.languages.length?(A("i18n.languages were undefined or empty",n.languages),!0):n.hasLoadedNamespace(e,{lng:t.lng,precheck:(r,o)=>{var i;if(((i=t.bindI18n)==null?void 0:i.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,e))return!1}}),P=e=>typeof e=="string",Fe=e=>typeof e=="object"&&e!==null,Le=(e,n)=>{const t=a.useRef();return a.useEffect(()=>{t.current=e},[e,n]),t.current},oe=(e,n,t,r)=>e.getFixedT(n,t,r),Pe=(e,n,t,r)=>a.useCallback(oe(e,n,t,r),[e,n,t,r]),bt=(e,n={})=>{var q,G,Y,X;const{i18n:t}=n,{i18n:r,defaultNS:o}=a.useContext(he)||{},i=t||r||Ee();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new $e),!i){A("You will need to pass in an i18next instance by using initReactI18next");const m=(E,w)=>P(w)?w:Fe(w)&&P(w.defaultValue)?w.defaultValue:Array.isArray(E)?E[E.length-1]:E,y=[m,{},!1];return y.t=m,y.i18n={},y.ready=!1,y}(q=i.options.react)!=null&&q.wait&&A("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...ye(),...i.options.react,...n},{useSuspense:u,keyPrefix:s}=c;let l=e||o||((G=i.options)==null?void 0:G.defaultNS);l=P(l)?[l]:l||["translation"],(X=(Y=i.reportNamespaces).addUsedNamespaces)==null||X.call(Y,l);const d=(i.isInitialized||i.initializedStoreOnce)&&l.every(m=>Te(m,i,c)),p=Pe(i,n.lng||null,c.nsMode==="fallback"?l:l[0],s),v=()=>p,f=()=>oe(i,n.lng||null,c.nsMode==="fallback"?l:l[0],s),[g,b]=a.useState(v);let $=l.join();n.lng&&($=`${n.lng}${$}`);const T=Le($),F=a.useRef(!0);a.useEffect(()=>{const{bindI18n:m,bindI18nStore:y}=c;F.current=!0,!d&&!u&&(n.lng?Q(i,n.lng,l,()=>{F.current&&b(f)}):W(i,l,()=>{F.current&&b(f)})),d&&T&&T!==$&&F.current&&b(f);const E=()=>{F.current&&b(f)};return m&&(i==null||i.on(m,E)),y&&(i==null||i.store.on(y,E)),()=>{F.current=!1,i&&(m==null||m.split(" ").forEach(w=>i.off(w,E))),y&&i&&y.split(" ").forEach(w=>i.store.off(w,E))}},[i,$]),a.useEffect(()=>{F.current&&d&&b(v)},[i,s,d]);const x=[g,i,d];if(x.t=g,x.i18n=i,x.ready=d,d||!d&&!u)return x;throw new Promise(m=>{n.lng?Q(i,n.lng,l,()=>m()):W(i,l,()=>m())})},ie=typeof document<"u"?z.useLayoutEffect:()=>{};function Se(e){const n=a.useRef(null);return ie(()=>{n.current=e},[e]),a.useCallback((...t)=>{const r=n.current;return r==null?void 0:r(...t)},[])}const H=e=>{var n;return(n=e==null?void 0:e.ownerDocument)!==null&&n!==void 0?n:document},L=e=>e&&"window"in e&&e.window===e?e:H(e).defaultView||window;function ke(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function xe(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function se(e){let n=null;return()=>(n==null&&(n=e()),n)}const Ce=se(function(){return xe(/^Mac/i)}),He=se(function(){return ke(/Android/i)});function Me(e){return e.mozInputSource===0&&e.isTrusted?!0:He()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class je{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function ae(e){let n=a.useRef({isFocused:!1,observer:null});ie(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=Se(r=>{e==null||e(r)});return a.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,i=c=>{n.current.isFocused=!1,o.disabled&&t(new je("blur",c)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var c;(c=n.current.observer)===null||c===void 0||c.disconnect();let u=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:u})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:u}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function Ne(e){let{isDisabled:n,onFocus:t,onBlur:r,onFocusChange:o}=e;const i=a.useCallback(s=>{if(s.target===s.currentTarget)return r&&r(s),o&&o(!1),!0},[r,o]),c=ae(i),u=a.useCallback(s=>{const l=H(s.target);s.target===s.currentTarget&&l.activeElement===s.target&&(t&&t(s),o&&o(!0),c(s))},[o,t,c]);return{focusProps:{onFocus:!n&&(t||o||r)?u:void 0,onBlur:!n&&(r||o)?i:void 0}}}let M=null,B=new Set,C=new Map,S=!1,K=!1;const Oe={Tab:!0,Escape:!0};function _(e,n){for(let t of B)t(e,n)}function Ie(e){return!(e.metaKey||!Ce()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function N(e){S=!0,Ie(e)&&(M="keyboard",_("keyboard",e))}function h(e){M="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(S=!0,_("pointer",e))}function ue(e){Me(e)&&(S=!0,M="virtual")}function ce(e){e.target===window||e.target===document||(!S&&!K&&(M="virtual",_("virtual",e)),S=!1,K=!1)}function le(){S=!1,K=!0}function U(e){if(typeof window>"u"||C.get(L(e)))return;const n=L(e),t=H(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){S=!0,r.apply(this,arguments)},t.addEventListener("keydown",N,!0),t.addEventListener("keyup",N,!0),t.addEventListener("click",ue,!0),n.addEventListener("focus",ce,!0),n.addEventListener("blur",le,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",h,!0),t.addEventListener("pointermove",h,!0),t.addEventListener("pointerup",h,!0)):(t.addEventListener("mousedown",h,!0),t.addEventListener("mousemove",h,!0),t.addEventListener("mouseup",h,!0)),n.addEventListener("beforeunload",()=>{fe(e)},{once:!0}),C.set(n,{focus:r})}const fe=(e,n)=>{const t=L(e),r=H(e);n&&r.removeEventListener("DOMContentLoaded",n),C.has(t)&&(t.HTMLElement.prototype.focus=C.get(t).focus,r.removeEventListener("keydown",N,!0),r.removeEventListener("keyup",N,!0),r.removeEventListener("click",ue,!0),t.removeEventListener("focus",ce,!0),t.removeEventListener("blur",le,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",h,!0),r.removeEventListener("pointermove",h,!0),r.removeEventListener("pointerup",h,!0)):(r.removeEventListener("mousedown",h,!0),r.removeEventListener("mousemove",h,!0),r.removeEventListener("mouseup",h,!0)),C.delete(t))};function De(e){const n=H(e);let t;return n.readyState!=="loading"?U(e):(t=()=>{U(e)},n.addEventListener("DOMContentLoaded",t)),()=>fe(e,t)}typeof document<"u"&&De();function de(){return M!=="pointer"}const Re=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ae(e,n,t){var r;const o=typeof window<"u"?L(t==null?void 0:t.target).HTMLInputElement:HTMLInputElement,i=typeof window<"u"?L(t==null?void 0:t.target).HTMLTextAreaElement:HTMLTextAreaElement,c=typeof window<"u"?L(t==null?void 0:t.target).HTMLElement:HTMLElement,u=typeof window<"u"?L(t==null?void 0:t.target).KeyboardEvent:KeyboardEvent;return e=e||(t==null?void 0:t.target)instanceof o&&!Re.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||(t==null?void 0:t.target)instanceof i||(t==null?void 0:t.target)instanceof c&&(t==null?void 0:t.target.isContentEditable),!(e&&n==="keyboard"&&t instanceof u&&!Oe[t.key])}function We(e,n,t){U(),a.useEffect(()=>{let r=(o,i)=>{Ae(!!(t!=null&&t.isTextInput),o,i)&&e(de())};return B.add(r),()=>{B.delete(r)}},n)}function Be(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:o}=e,i=a.useRef({isFocusWithin:!1}),c=a.useCallback(l=>{i.current.isFocusWithin&&!l.currentTarget.contains(l.relatedTarget)&&(i.current.isFocusWithin=!1,t&&t(l),o&&o(!1))},[t,o,i]),u=ae(c),s=a.useCallback(l=>{!i.current.isFocusWithin&&document.activeElement===l.target&&(r&&r(l),o&&o(!0),i.current.isFocusWithin=!0,u(l))},[r,o,u]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:s,onBlur:c}}}let O=!1,I=0;function V(){O=!0,setTimeout(()=>{O=!1},50)}function ee(e){e.pointerType==="touch"&&V()}function Ke(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",ee):document.addEventListener("touchend",V),I++,()=>{I--,!(I>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",ee):document.removeEventListener("touchend",V))}}function Ue(e){let{onHoverStart:n,onHoverChange:t,onHoverEnd:r,isDisabled:o}=e,[i,c]=a.useState(!1),u=a.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;a.useEffect(Ke,[]);let{hoverProps:s,triggerHoverEnd:l}=a.useMemo(()=>{let d=(f,g)=>{if(u.pointerType=g,o||g==="touch"||u.isHovered||!f.currentTarget.contains(f.target))return;u.isHovered=!0;let b=f.currentTarget;u.target=b,n&&n({type:"hoverstart",target:b,pointerType:g}),t&&t(!0),c(!0)},p=(f,g)=>{if(u.pointerType="",u.target=null,g==="touch"||!u.isHovered)return;u.isHovered=!1;let b=f.currentTarget;r&&r({type:"hoverend",target:b,pointerType:g}),t&&t(!1),c(!1)},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=f=>{O&&f.pointerType==="mouse"||d(f,f.pointerType)},v.onPointerLeave=f=>{!o&&f.currentTarget.contains(f.target)&&p(f,f.pointerType)}):(v.onTouchStart=()=>{u.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=f=>{!u.ignoreEmulatedMouseEvents&&!O&&d(f,"mouse"),u.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=f=>{!o&&f.currentTarget.contains(f.target)&&p(f,"mouse")}),{hoverProps:v,triggerHoverEnd:p}},[n,t,r,o,u]);return a.useEffect(()=>{o&&l({currentTarget:u.target},u.pointerType)},[o]),{hoverProps:s,isHovered:i}}function Ve(e={}){let{autoFocus:n=!1,isTextInput:t,within:r}=e,o=a.useRef({isFocused:!1,isFocusVisible:n||de()}),[i,c]=a.useState(!1),[u,s]=a.useState(()=>o.current.isFocused&&o.current.isFocusVisible),l=a.useCallback(()=>s(o.current.isFocused&&o.current.isFocusVisible),[]),d=a.useCallback(f=>{o.current.isFocused=f,c(f),l()},[l]);We(f=>{o.current.isFocusVisible=f,l()},[],{isTextInput:t});let{focusProps:p}=Ne({isDisabled:r,onFocusChange:d}),{focusWithinProps:v}=Be({isDisabled:!r,onFocusWithinChange:d});return{isFocused:i,isFocusVisible:u,focusProps:r?v:p}}var ze=Object.defineProperty,_e=(e,n,t)=>n in e?ze(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,D=(e,n,t)=>(_e(e,typeof n!="symbol"?n+"":n,t),t);let qe=class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},pe=new qe;function Ge(e){return pe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Ye(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function ve(){let e=[],n={addEventListener(t,r,o,i){return t.addEventListener(r,o,i),n.add(()=>t.removeEventListener(r,o,i))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return Ye(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let i=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:i})})},group(t){let r=ve();return t(r),this.add(()=>r.dispose())},add(t){return e.includes(t)||e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function Xe(){let[e]=a.useState(ve);return a.useEffect(()=>()=>e.dispose(),[e]),e}let Je=(e,n)=>{pe.isServer?a.useEffect(e,n):a.useLayoutEffect(e,n)};function Ze(e){let n=a.useRef(e);return Je(()=>{n.current=e},[e]),n}let te=function(e){let n=Ze(e);return z.useCallback((...t)=>n.current(...t),[n])};function Qe(e){let n=e.width/2,t=e.height/2;return{top:e.clientY-t,right:e.clientX+n,bottom:e.clientY+t,left:e.clientX-n}}function et(e,n){return!(!e||!n||e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)}function tt({disabled:e=!1}={}){let n=a.useRef(null),[t,r]=a.useState(!1),o=Xe(),i=te(()=>{n.current=null,r(!1),o.dispose()}),c=te(u=>{if(o.dispose(),n.current===null){n.current=u.currentTarget,r(!0);{let s=Ge(u.currentTarget);o.addEventListener(s,"pointerup",i,!1),o.addEventListener(s,"pointermove",l=>{if(n.current){let d=Qe(l);r(et(d,n.current.getBoundingClientRect()))}},!1),o.addEventListener(s,"pointercancel",i,!1)}}});return{pressed:t,pressProps:e?{}:{onPointerDown:c,onPointerUp:i,onClick:i}}}function ne(...e){return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}function ge(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ge),r}var nt=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(nt||{}),rt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(rt||{});function ot(){let e=st();return a.useCallback(n=>it({mergeRefs:e,...n}),[e])}function it({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:o,visible:i=!0,name:c,mergeRefs:u}){u=u??at;let s=be(n,e);if(i)return j(s,t,r,c,u);let l=o??0;if(l&2){let{static:d=!1,...p}=s;if(d)return j(p,t,r,c,u)}if(l&1){let{unmount:d=!0,...p}=s;return ge(d?0:1,{0(){return null},1(){return j({...p,hidden:!0,style:{display:"none"}},t,r,c,u)}})}return j(s,t,r,c,u)}function j(e,n={},t,r,o){let{as:i=t,children:c,refName:u="ref",...s}=R(e,["unmount","static"]),l=e.ref!==void 0?{[u]:e.ref}:{},d=typeof c=="function"?c(n):c;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(n)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let p={};if(n){let v=!1,f=[];for(let[g,b]of Object.entries(n))typeof b=="boolean"&&(v=!0),b===!0&&f.push(g.replace(/([A-Z])/g,$=>`-${$.toLowerCase()}`));if(v){p["data-headlessui-state"]=f.join(" ");for(let g of f)p[`data-${g}`]=""}}if(i===a.Fragment&&(Object.keys(k(s)).length>0||Object.keys(k(p)).length>0))if(!a.isValidElement(d)||Array.isArray(d)&&d.length>1){if(Object.keys(k(s)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(k(s)).concat(Object.keys(k(p))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=d.props,f=v==null?void 0:v.className,g=typeof f=="function"?(...T)=>ne(f(...T),s.className):ne(f,s.className),b=g?{className:g}:{},$=be(d.props,k(R(s,["ref"])));for(let T in p)T in $&&delete p[T];return a.cloneElement(d,Object.assign({},$,p,l,{ref:o(lt(d),l.ref)},b))}return a.createElement(i,Object.assign({},R(s,["ref"]),i!==a.Fragment&&l,i!==a.Fragment&&p),d)}function st(){let e=a.useRef([]),n=a.useCallback(t=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(t):r.current=t)},[]);return(...t)=>{if(!t.every(r=>r==null))return e.current=t,n}}function at(...e){return e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}function be(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])for(let r in t)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(t[r]=[o=>{var i;return(i=o==null?void 0:o.preventDefault)==null?void 0:i.call(o)}]);for(let r in t)Object.assign(n,{[r](o,...i){let c=t[r];for(let u of c){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;u(o,...i)}}});return n}function ut(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];for(let r in t)Object.assign(n,{[r](...o){let i=t[r];for(let c of i)c==null||c(...o)}});return n}function ct(e){var n;return Object.assign(a.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function k(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function R(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function lt(e){return z.version.split(".")[0]>="19"?e.props.ref:e.ref}let ft=a.Fragment;function dt(e,n){let{...t}=e,r=!1,{isFocusVisible:o,focusProps:i}=Ve(),{isHovered:c,hoverProps:u}=Ue({isDisabled:r}),{pressed:s,pressProps:l}=tt({disabled:r}),d=ut({ref:n},i,u,l),p=a.useMemo(()=>({hover:c,focus:o,active:s}),[c,o,s]);return ot()({ourProps:d,theirProps:t,slot:p,defaultTag:ft,name:"DataInteractive"})}let pt=ct(dt);const ht=a.forwardRef(function(n,t){return J.jsx(pt,{children:J.jsx(me,{...n,to:n.href,ref:t})})});export{Ve as $,rt as A,ct as K,ot as L,nt as O,ut as _,Ue as a,Ge as b,ve as c,ge as d,pe as e,ne as f,ht as g,A as h,P as i,we as j,Fe as k,k as m,Je as n,te as o,Xe as p,Ze as s,Ye as t,bt as u,tt as w};