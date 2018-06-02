module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([7],{220:function(e,t,r){e.exports=r(221)},221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"default",function(){return k});var n=r(6);var o=r.n(n);var a=r(0);var u=r.n(a);var i=r(222);var l=r.n(i);var c=r(122);var f=r(22);var p=r(33);var s=r(231);var v=r.n(s);function d(e){d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return d(e)}function y(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function u(e,t){try{var r=a[e](t);var u=r.value}catch(e){o(e);return}r.done?n(u):Promise.resolve(u).then(i,l)}function i(e){u("next",e)}function l(e){u("throw",e)}i()})}}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};var n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})));n.forEach(function(t){b(e,t,r[t])})}return e}function b(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function w(e,t,r){t&&g(e.prototype,t);r&&g(e,r);return e}function P(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j="undefined"===typeof window;var k=function(e){O(t,e);function t(){m(this,t);return P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}w(t,[{key:"componentWillMount",value:function e(){var t=this.props,r=t.user,n=t.setup;Object(p["g"])(h({},r,{setup:n}));if(!j&&!r.email){var o=window.localStorage.jwt;o&&Object(p["e"])(null,o,true)}}},{key:"render",value:function e(){var t=this.props,r=t.Component,n=t.pageProps;return u.a.createElement(f["a"],{store:c["a"]},u.a.createElement(i["Container"],null,u.a.createElement(r,n)))}}],[{key:"getInitialProps",value:function(){var e=y(o.a.mark(function e(t){var r,n,a,u,i;return o.a.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:r=t.Component,n=t.ctx;a={};u=false;if(j){a=n.req.user||{};u=n.req.doSetup||false}i={};if(!r.getInitialProps){o.next=9;break}o.next=8;return r.getInitialProps(n);case 8:i=o.sent;case 9:return o.abrupt("return",{Component:r,pageProps:i,user:a,setup:u});case 10:case"end":return o.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(l.a)},222:function(e,t,r){e.exports=r(223)},223:function(e,t,r){"use strict";var n=r(29);var o=r(2);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=_;t.Container=t.default=void 0;var a=o(r(6));var u=o(r(58));var i=o(r(224));var l=o(r(51));var c=o(r(17));var f=o(r(7));var p=o(r(8));var s=o(r(18));var v=o(r(19));var d=n(r(0));var y=o(r(20));var h=o(r(119));var b=r(15);var m=r(45);var g=function(e){(0,v.default)(t,e);function t(){(0,f.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,p.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,l.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,o=t.pageProps;var a=_(r);return d.default.createElement(w,null,d.default.createElement(n,(0,i.default)({},o,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var r,n,o,u;return a.default.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:r=t.Component,n=t.router,o=t.ctx;a.next=3;return(0,b.loadGetInitialProps)(r,o);case 3:u=a.sent;return a.abrupt("return",{pageProps:u});case 5:case"end":return a.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(d.Component);t.default=g;Object.defineProperty(g,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(g,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}});var w=function(e){(0,v.default)(t,e);function t(){(0,f.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,p.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,h.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return d.default.createElement(d.default.Fragment,null,t)}}]);return t}(d.Component);t.Container=w;Object.defineProperty(w,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:y.default.any}});var P=(0,b.execOnce)(function(){false});function _(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){P();return n},get pathname(){P();return t},get asPath(){P();return r},back:function t(){P();e.back()},push:function t(r,n){P();return e.push(r,n)},pushTo:function t(r,n){P();var o=n?r:null;var a=n||r;return e.push(o,a)},replace:function t(r,n){P();return e.replace(r,n)},replaceTo:function t(r,n){P();var o=n?r:null;var a=n||r;return e.replace(o,a)}}}},224:function(e,t,r){var n=r(89);function o(){e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return o.apply(this,arguments)}e.exports=o},231:function(e,t){}},[220]);return{page:e.default}});