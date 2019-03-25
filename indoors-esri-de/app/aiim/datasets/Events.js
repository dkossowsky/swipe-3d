var __extends=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;0<=s;s--)(o=e[s])&&(n=(i<3?o(n):3<i?o(t,r,n):o(t,r))||n);return 3<i&&n&&Object.defineProperty(t,r,n),n};define(["require","exports","esri/core/tsSupport/declareExtendsHelper","esri/core/tsSupport/decorateHelper","esri/core/tsSupport/assignHelper","../../context/Context","./Dataset","./FieldNames","../util/aiimUtil","esri/core/accessorSupport/decorators","esri/core/promiseUtils","esri/request","esri/tasks/support/Query","esri/tasks/QueryTask","dojo/date/locale"],function(e,t,a,o,r,m,i,y,h,n,s,d,l,u,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(r){function e(e){var t=r.call(this,e)||this;return t.dateEndField=y.default.EVENT_DATE_END,t.dateStartField=y.default.EVENT_DATE_START,t.imageUrlField=y.default.IMAGE_URL,t.objectIdField="objectid",t.supportsAttachment=!1,t.typeField=y.default.EVENT_TYPE,t}return a(e,r),e.prototype.checkSchema=function(){var a=this;return s.create(function(e,t){if(a.layer2D){var r=a.layer2D;r.when(function(){a.objectIdField=a.layer2D.objectIdField,a.layer2D.capabilities&&a.layer2D.capabilities.data&&(a.supportsAttachment=a.layer2D.capabilities.data.supportsAttachment),a.checkFieldNameProperty("dateStartField",r.fields),a.checkFieldNameProperty("dateEndField",r.fields),a.checkFieldNameProperty("imageUrlField",r.fields),a.checkFieldNameProperty("typeField",r.fields),e()})}else e()})},e.prototype.getEventInfo=function(e,t){var r=t.attributes;e.hasOwnProperty("_events_fieldnames")||(e._events_fieldnames={name:h.findAttributeName(r,y.default.NAME),description:h.findAttributeName(r,y.default.DESCRIPTION),date_start:h.findAttributeName(r,y.default.EVENT_DATE_START),date_end:h.findAttributeName(r,y.default.EVENT_DATE_END),unit_name:h.findAttributeName(r,y.default.UNIT_NAME),image_url:h.findAttributeName(r,y.default.IMAGE_URL)});var a="";t.geometry&&"number"==typeof t.geometry.latitude&&"number"==typeof t.geometry.longitude&&(a=t.geometry.latitude+";"+t.geometry.longitude);var o=e._events_fieldnames,i={objectId:h.getAttributeValue(r,this.objectIdField),name:h.getAttributeValue(r,o.name),description:h.getAttributeValue(r,o.description),location:h.getAttributeValue(r,o.unit_name),image_url:h.getAttributeValue(r,o.image_url),date_start:h.getAttributeValue(r,o.date_start),date_end:h.getAttributeValue(r,o.date_end),shortDate:"",longDate:"",mmm:"",d:"",yyyy:"",timeZone:"",timePeriod:"",geo:a,attachments:[]};if("number"==typeof i.date_start){var n=new Date(i.date_start);if(n instanceof Date&&!isNaN(n.getTime())){var s=m.default.getInstance().i18n,d=s.events.timePattern,l=_.format(n,{selector:"time",formatLength:"short"}),u=_.format(n,{selector:"time",timePattern:"z"});if(i.timePeriod=d.replace("{time}",l).replace("{timeZone}",u),e.forDetails?i.longDate=_.format(n,{selector:"date",formatLength:"long"}):(i.mmm=_.format(n,{selector:"date",datePattern:"MMM"}),i.d=_.format(n,{selector:"date",datePattern:"d"})),"number"==typeof i.date_end){var c=new Date(i.date_end);if(c instanceof Date&&!isNaN(c.getTime())){d=s.events.timePeriodPattern;var p=_.format(c,{selector:"time",formatLength:"short"}),f=d.replace("{fromTime}",l).replace("{toTime}",p).replace("{timeZone}",u);i.timePeriod=f}}}}return i},e.prototype.getSource=function(){return m.default.getInstance().aiim.datasets.categories.findSourceByKey("Events")},e.prototype.loadAttachments=function(t){var r=[];if("string"==typeof t.image_url&&(0===t.image_url.indexOf("http://")||0===t.image_url.indexOf("https://"))){var e={href:t.image_url};r.push(e),t.attachments=[e]}var a=this.url+"/"+t.objectId+"/attachments";return this.supportsAttachment?(a=m.default.checkMixedContent(a),d(a,{query:{f:"json"},responseType:"json"}).then(function(e){e&&e.data&&e.data.attachmentInfos&&e.data.attachmentInfos.forEach(function(e){"string"==typeof e.contentType&&"image"===e.contentType.substr(0,5)&&(e.href=h.appendTokenToUrl(a+"/"+e.id),r.push(e))}),t.attachments=r}).catch(function(e){console.warn("Error loading attachments:",a),console.error(e)})):s.resolve()},e.prototype.queryTypes=function(){var e=m.default.checkMixedContent(this.url),a=this.typeField,t=new u({url:e}),r=new l;return r.outFields=[a],r.returnDistinctValues=!0,r.returnGeometry=!1,r.returnZ=!1,r.where="1=1",t.execute(r).then(function(e){var r=[];return e&&e.features&&e.features.forEach(function(e){if(e&&e.attributes){var t=h.getAttributeValue(e.attributes,a);"string"==typeof t&&0<t.length&&-1===r.indexOf(t)&&r.push(t)}}),r})},o([n.property()],e.prototype,"dateEndField",void 0),o([n.property()],e.prototype,"dateStartField",void 0),o([n.property()],e.prototype,"imageUrlField",void 0),o([n.property()],e.prototype,"objectIdField",void 0),o([n.property()],e.prototype,"supportsAttachment",void 0),o([n.property()],e.prototype,"typeField",void 0),e=o([n.subclass("app.aiim.datasets.Events")],e)}(n.declared(i.default));t.default=c});