var __extends=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;0<=c;c--)(n=e[c])&&(s=(i<3?n(s):3<i?n(t,r,s):n(t,r))||s);return 3<i&&s&&Object.defineProperty(t,r,s),s};define(["require","exports","esri/core/tsSupport/declareExtendsHelper","esri/core/tsSupport/decorateHelper","esri/core/tsSupport/assignHelper","../../context/Context","./Dataset","../util/aiimUtil","../../utils/mapUtils","esri/core/accessorSupport/decorators","esri/tasks/support/Query","esri/tasks/QueryTask","esri/core/promiseUtils"],function(e,t,o,n,r,c,i,s,a,l,u,f,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=function(r){function e(e){var t=r.call(this,e)||this;return t.type="table",t}return o(e,r),e.prototype.get311Url=function(e,t){var r="",o=function(e,t){null!=t&&(0<r.length&&(r+="&"),"center"!==e&&(e="field:"+e,t=encodeURIComponent(t)),r+=e+"="+t)},n=this.kvps.MOBILE_311_URL;if("string"==typeof n&&0<n.length){if(n=c.default.checkMixedContent(n),e&&t){var i=e.getAiimAddressInfo(t);o("building",i.facilityName),o("wing",i.sectionName),o("floor",i.levelShortName),o("room",i.unitName);var s=a.getGeometryValues(t.geometry);s&&(o("x",s.x),o("y",s.y),o("z",s.z),o("center",s.center)),0<r.length&&(-1===n.indexOf("?")?n+="?"+r:n+="&"+r)}return n}return null},e.prototype.has311App=function(){return!!this.get311Url()},e.prototype.load=function(e){var r=this;e=this.url=c.default.checkMixedContent(e);var i=this.kvps={};if("string"!=typeof e||0===e.length)return console.error("Error: Missing INDOORSCONFIG table."),p.resolve();var t=new f({url:e}),o=new u;return o.outFields=["*"],o.where="1 = 1",t.execute(o).then(function(e){if(e&&e.features&&0<e.features.length){var o=s.findFieldName(e.fields,"config_key"),n=s.findFieldName(e.fields,"config_value");e.features.forEach(function(e){var t=e.attributes[o],r=e.attributes[n];i[t]=r});var t=r.kvps.NETWORK_URL;"string"==typeof t&&0<t.length&&(t=c.default.checkMixedContent(t),c.default.getInstance().config.networkServiceUrl=t),"string"==typeof(t=r.kvps.CLOSESTFACILITY_URL)&&0<t.length&&(t=c.default.checkMixedContent(t),c.default.getInstance().config.closestFacilityServiceUrl=t)}}).catch(function(e){console.warn("Error querying INDOORSCONFIG table:"),console.error(e)})},n([l.property()],e.prototype,"kvps",void 0),n([l.property()],e.prototype,"type",void 0),e=n([l.subclass("app.aiim.datasets.IndoorsConfig")],e)}(l.declared(i.default));t.default=d});