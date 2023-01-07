var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{Z:()=>Et});const r=function(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)r[n]=e(t[n]);return r};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function y(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}var h=y((function t(e,r,n){p(this,t),this.type=e,this.name=r,this.content=n}));b(h,"element","Element"),b(h,"props","Properties"),b(h,"text","TextNode");var d=function(t){u(r,h);var e=c(r);function r(t,n,o){var i;return p(this,r),(i=e.call(this,h.element,t,null)).props=o,i.children=n,i}return y(r)}(),m=function(t){u(r,h);var e=c(r);function r(t,n){return p(this,r),e.call(this,h.props,t,null!=n?n:"")}return y(r)}(),w=function(t){u(r,h);var e=c(r);function r(t){return p(this,r),e.call(this,h.text,"",null!=t?t:"")}return y(r)}();function g(t){var e,n=r(Object.keys(t.attributes),(function(e){var r=t.attributes[e];return new m(r.nodeName,r.nodeValue)})),i=new d(t.tagName.toLocaleLowerCase(),[],n),u=o(t.childNodes);try{for(u.s();!(e=u.n()).done;){var a=e.value;i.children.push(a.nodeType===Node.TEXT_NODE?new w(a.nodeValue):g(a))}}catch(t){u.e(t)}finally{u.f()}return i}function O(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function P(t,e){var r=null==e,n=t.tagName.toLocaleLowerCase()===e.name;if(r||!n)return g(t);for(var o=t.attributes,i=Object.values(o),u=e.props,a=function(){var e=l[c];if(!1===function(){var t,r=O(u);try{for(r.s();!(t=r.n()).done;){if(t.value.name!==e.nodeName)return!1}}catch(t){r.e(t)}finally{r.f()}}())return{v:g(t)}},c=0,l=i;c<l.length;c++){var f=a();if("object"===S(f))return f.v}var s,y=0,p=O(t.childNodes);try{for(p.s();!(s=p.n()).done;){var b=s.value;b.nodeType===Node.TEXT_NODE||y>=e.children.length||(e.children[y]=P(b,e.children[y]),y++)}}catch(t){p.e(t)}finally{p.f()}return e}function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,D(n.key),n)}}function x(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){var e="function"==typeof Map?new Map:void 0;return k=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return T(t,arguments,_(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),N(n,t)},k(t)}function T(t,e,r){return T=I()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&N(o,r.prototype),o},T.apply(null,arguments)}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function C(t,e,r){return(e=D(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===E(e)?e:String(e)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(a,k(Error));var e,r,n,o,i,u=(e=a,r=I(),function(){var t,n=_(e);if(r){var o=_(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return x(this,t)});function a(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=u.call(this,"[error] : ".concat(t,"<").concat(e,">"))).msg=t,r.type=e,r}return n=a,o&&A(n.prototype,o),i&&A(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}C(M,"ParameterInvalid","ParameterNotValid"),C(M,"HookExpressionInvalid","HookExpressionNotValid");function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||W(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){if(t){if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,e):void 0}}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===$(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var U=/^((\w+|\w+\[(\d+)\])(->)?)*$/,B=/^\w+$/,J=/^((\w+)\[(\d+)\])$/,q=/{{(.+?)}}/;function G(t,e){if(t=t.replace(/\s+/g,""),!U.test(t))throw new M("".concat(t," is not hook expression"),M.HookExpressionInvalid);var r,n=t.split("->"),o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e),i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=W(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}(n);try{for(i.s();!(r=i.n()).done;){var u=r.value;if(B.test(u)){if(!(-1!==Object.keys(o).indexOf(u)))throw new M("".concat(u," is not found"),M.HookExpressionInvalid);o=o[u]}else{var a=L(J.exec(u),4),c=a[2],l=a[3],f=-1!==Object.keys(o).indexOf(c),s=Array.isArray(o[c]),y=o[c].length>l;if(!f||!s||!y)throw new M("".concat(u," is not found"),M.HookExpressionInvalid);o=o[c][l]}}}catch(t){i.e(t)}finally{i.f()}return function(t){return"string"==typeof t?t:"number"==typeof t||"bigint"==typeof t?t.toString():null==t?"":"boolean"==typeof t?!0===t?"true":"false":"object"===R(t)?JSON.stringify(t):t}(o)}function X(t,e){for(;q.test(t);){var r=G(L(q.exec(t),2)[1],e);t=t.replace(q,r)}return t}function Z(t,e){return(t=JSON.parse(JSON.stringify(t))).props=r(t.props,(function(r){return"data-connectfor"===r.name&&-1!==["input","textarea","select"].indexOf(t.name)||(r.content=X(r.content,e)),r})),t.children=r(t.children,(function(t){return t.type===h.text?t.content=X(t.content,e):t=Z(t,e),t})),t}function z(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Q(t){if(t.type===h.text)return document.createTextNode(t.content);var e,r=document.createElement(t.name),n=z(t.props);try{for(n.s();!(e=n.n()).done;){var o=e.value;r.setAttribute(o.name,o.content)}}catch(t){n.e(t)}finally{n.f()}var i,u=z(t.children);try{for(u.s();!(i=u.n()).done;){var a=i.value;r.appendChild(Q(a))}}catch(t){u.e(t)}finally{u.f()}return r}function Y(t,e,r){for(var n in e.children){var o=e.children[n],i=t.children[n],u=r.childNodes[n];o.type===h.element?Y(i,o,u):o.type===h.text&&o.content!==i.content&&(u.nodeValue=o.content)}for(var a in t.props){var c=t.props[a],l=e.props[a];if(c.content!==l.content)return r.parentElement.replaceChild(Q(e),r),null}}function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t,e,r){return(e=lt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||it(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function ot(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=it(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw i}}}}function it(t,e){if(t){if("string"==typeof t)return ut(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ut(t,e):void 0}}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function at(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ct(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,lt(n.key),n)}}function lt(t){var e=function(t,e){if("object"!==nt(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==nt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===nt(e)?e:String(e)}function ft(t,e){yt(t,e),e.add(t)}function st(t,e,r){yt(t,e),e.set(t,r)}function yt(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function pt(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,ht(t,e,"get"))}function bt(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function vt(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,ht(t,e,"set"),r),r}function ht(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}var dt=new WeakMap,mt=new WeakMap,wt=new WeakMap,gt=new WeakMap,Ot=new WeakMap,jt=new WeakMap,St=new WeakSet;function Pt(t){var e,r=ot(t);try{for(r.s();!(e=r.n()).done;){var n=e.value,o=n.dataset.connectfor;if(-1===Object.keys(pt(this,wt)).indexOf(o))throw new M("".concat(o," is not found"),M.ParameterInvalid);var i=(new Date).getTime().toString(16);n.value=pt(this,wt)[o],n.addEventListener("input",pt(this,jt)),n.$$label=i,pt(this,gt)[i]=[n,o]}}catch(t){r.e(t)}finally{r.f()}}const Et={Init:function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(at(this,t),ft(this,St),st(this,dt,{writable:!0,value:void 0}),st(this,mt,{writable:!0,value:void 0}),st(this,wt,{writable:!0,value:void 0}),st(this,gt,{writable:!0,value:{}}),st(this,Ot,{writable:!0,value:[]}),st(this,jt,{writable:!0,value:function(t){var e,n=t.target,o=n.dataset.connectfor,i=[],u=ot(pt(r,Ot));try{for(u.s();!(e=u.n()).done;){var a=e.value;a[0]!==o&&"*"!==a[0]||i.push(a[1])}}catch(t){u.e(t)}finally{u.f()}r.set(o,n.value);for(var c=0,l=i;c<l.length;c++){(0,l[c])({key:o,value:n.value,setValue:function(t){return n.value=t}})}}}),this.root=document.querySelector(e),null===this.root||null===this.root)throw new M("root is not found",M.ParameterInvalid);if("object"!==nt(n)||null===n||Array.isArray(n))throw new M("modelGroup is not valid",M.ParameterInvalid);vt(this,mt,g(this.root)),vt(this,dt,g(this.root)),vt(this,wt,n),this.model=n,this.render(),bt(this,St,Pt).call(this,document.querySelectorAll("input[data-connectFor], textarea[data-connectFor], select[data-connectFor]"));var o=-1!==["textarea","input","select"].indexOf(this.root.nodeName.toLocaleLowerCase());o&&void 0!==this.root.dataset.connectfor&&bt(this,St,Pt).call(this,[this.root])}var e,r,n;return e=t,r=[{key:"disconnect",value:function(t){if(-1===Object.keys(pt(this,gt)).indexOf(t))throw new M("".concat(t," is not found"),M.ParameterInvalid);rt(pt(this,gt)[t],1)[0].removeEventListener("input",pt(this,jt)),pt(this,gt)[t]=null}},{key:"listenConnection",value:function(t,e){if(-1===Object.keys(pt(this,wt)).indexOf(t)&&"*"!==t)throw new M("".concat(t," is not found"),M.ParameterInvalid);pt(this,Ot).push([t,e])}},{key:"render",value:function(){var t=Z(pt(this,mt),pt(this,wt));Y(pt(this,dt),t,this.root),vt(this,dt,t)}},{key:"set",value:function(t,e){pt(this,wt)[t]=e,this.model=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(r),!0).forEach((function(e){et(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},pt(this,wt)),this.render()}},{key:"track",value:function(){vt(this,mt,P(this.root,pt(this,mt)))}},{key:"pull",value:function(){this.root=null,vt(this,mt,null),vt(this,dt,null),vt(this,wt,null),this.modelGroup=null,vt(this,Ot,null);for(var t=0,e=Object.values(pt(this,gt));t<e.length;t++)rt(e[t],1)[0].removeEventListener("input",pt(this,jt));vt(this,gt,null),vt(this,jt,null)}}],r&&ct(e.prototype,r),n&&ct(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()};var At=e.Z;export{At as default};