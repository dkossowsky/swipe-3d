var __extends=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;0<=c;c--)(n=e[c])&&(i=(s<3?n(i):3<s?n(t,r,i):n(t,r))||i);return 3<s&&i&&Object.defineProperty(t,r,i),i};define(["require","exports","esri/core/tsSupport/declareExtendsHelper","esri/core/tsSupport/decorateHelper","../context/Context","./Burger","../search/Searchbox","./UserControl","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Widget"],function(e,t,o,n,s,i,c,a,l,u,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d="i-header",p="i-header-left",f="i-header-right",h="i-header-logo i-brand-logo",_=function(r){function e(e){var t=r.call(this)||this;return t._burger=null,t._searchbox=null,t._user=null,t}return o(e,r),e.prototype.postInitialize=function(){this._burger=new i.default,this._searchbox=new c,this._user=new a.default},e.prototype.getLogo=function(){var e=null;if(this._logo)e=this._logo;else{window.getComputedStyle(document.documentElement,null);var t=s.default.getInstance().uiMode.getLogoUrl();if("string"==typeof t&&0<t.length){var r='background-image: url("'+t+'")';e=u.tsx("span",{class:h,style:r}),this._logo=e}}return e},e.prototype.render=function(){return u.tsx("div",{key:d,class:d,role:"banner"},u.tsx("div",{key:p,class:p},this._burger.render(),this.getLogo(),this._searchbox.render()),u.tsx("div",{key:f,class:f},this._user.render()))},e=n([l.subclass("app.main.Header")],e)}(l.declared(r));t.default=_});