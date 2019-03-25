var __extends=this&&this.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),__decorate=this&&this.__decorate||function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;0<=a;a--)(r=e[a])&&(s=(n<3?r(s):3<n?r(t,i,s):r(t,i))||s);return 3<n&&s&&Object.defineProperty(t,i,s),s};define(["require","exports","esri/core/tsSupport/declareExtendsHelper","esri/core/tsSupport/decorateHelper","esri/core/tsSupport/assignHelper","../context/Context","./Util","../aiim/util/aiimUtil","./maneuverTypes","../utils/mapUtils","esri/core/Accessor","esri/core/accessorSupport/decorators","esri/tasks/support/FeatureSet","esri/Graphic","esri/core/promiseUtils"],function(e,t,o,r,i,l,n,b,L,a,s,u,c,f,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var y=function(i){function e(e){var t=i.call(this,e)||this;return t.considerTransition=!1,t.util=new n.default,t.queryDistanceMeters=.1,t}return o(e,i),e.prototype.addRouteGraphics=function(e,l){var u=this;if(l.removeAll(),this.sections&&0<this.sections.length){var t=this.getActive2DLevelNumber(),c="2d"===e.type;this.sections.forEach(function(e){var t={symbolKey:"indoorsRouteSymbol",section:e},i=e.feature.clone(),o=u.viewModel.indoorsRouteSymbol;if(c){var r=t.section.toLevelNumber,n=t.section.toFacilityId,s=t.section.toZeroVOLevelNumber;u.isMatching2DLevel(n,r,s)||(o=u.viewModel.indoorsRouteSymbolAlternate,t.symbolKey="indoorsRouteSymbolAlternate")}else o=u.viewModel.indoorsRouteSymbolFor3D,t.symbolKey="indoorsRouteSymbolFor3D";var a=new f({attributes:i.attributes,geometry:i.geometry,symbol:o});a.xtnLevelInfo=t,l.add(a)}),this.sortRouteGraphics(e,l,t)}},e.prototype.afterSetLevel=function(n,e){var s=this;e&&0<e.length&&(e.forEach(function(e){var t=e.xtnLevelInfo;if(t)if("3d"===n.type)"indoorsRouteSymbolFor3D"!==t.symbolKey&&(e.symbol=s.viewModel.indoorsRouteSymbolFor3D,t.symbolKey="indoorsRouteSymbolFor3D");else{var i=t.section.toLevelNumber,o=t.section.toFacilityId,r=t.section.toZeroVOLevelNumber;s.isMatching2DLevel(o,i,r)?"indoorsRouteSymbol"!==t.symbolKey&&(e.symbol=s.viewModel.indoorsRouteSymbol,t.symbolKey="indoorsRouteSymbol"):"indoorsRouteSymbolAlternate"!==t.symbolKey&&(e.symbol=s.viewModel.indoorsRouteSymbolAlternate,t.symbolKey="indoorsRouteSymbolAlternate")}}),this.sortRouteGraphics(n,e,this.getActive2DLevelNumber()))},e.prototype.clearHighlights=function(){clearTimeout(this.timeoutHandle),this.viewModel.clearHighlights()},e.prototype.fixName=function(e){if("string"!=typeof e)return e;var t=["0","1","2","3","4","5","6","7","8","9"],i=e.indexOf("_#");if(-1!==i){var o=e,r=o.substring(0,i);o=o.substring(i+2);for(var n="",s=!0,a=0;a<o.length;a++){var l=o.charAt(a);s?-1===t.indexOf(l)&&(n+=l,s=!1):n+=l}e=r+n}return e},e.prototype.getActive2DLevelNumber=function(){var e,t=l.default.getInstance().aiim.facilityMode.activeFacilityInfo;return t&&(t.activeLevel?e=t.activeLevel.levelNumber:t.zeroVOLevel&&(e=t.zeroVOLevel.levelNumber)),null==e&&this.route&&(e=this.route.routeLevelNumber),e},e.prototype.getDirectionLines=function(){var e=this.response;if(e&&e.data&&e.data.directionLines)return e.data.directionLines},e.prototype.getDirectionPoints=function(){var e=this.response;if(e&&e.data&&e.data.directionPoints)return e.data.directionPoints},e.prototype.getLastPoint=function(e){var t,i=e&&e.geometry,o=i&&i.type,r="polyline"===o&&i.paths;if(r&&0<r.length){var n=r.length-1,s=r[n].length-1;t=i.getPoint(n,s)}else"point"===o&&(t=i);return t},e.prototype.getRoutes=function(){var e=this.response;if(e&&e.data&&e.data.routes)return e.data.routes},e.prototype.goToEvent=function(e,o){var r=this;try{if(this.clearHighlights(),o.point&&o.point.geometry){var n=o.point,s=l.default.getInstance().views.activeView,t=this.queryDistanceMeters;this.queryFacility(o,n.geometry,t).then(function(){var e=o.facilityId,t=o.levelNumber;if("string"==typeof e&&0<e.length&&"number"==typeof t){var i=l.default.getInstance().aiim.facilityMode;i&&i.activateLevelFilter(s,e,t)}a.goToFeature(s,n).then(function(){}),r.highlightEvent(o)})}}catch(e){console.log("Error zooming to route step:"),console.error(e)}},e.prototype.goToRoute=function(e){try{this.clearHighlights();var o=this.route;if(o&&o.geometry){var r=this.route,n=l.default.getInstance().views.activeView,t=r.geometry,i=null,s=this.getLastPoint(r);s&&(t=s,i=this.queryDistanceMeters),this.queryFacility(o,t,i).then(function(){var e=o.facilityId,t=o.routeLevelNumber;if(!o.multipleFacilities&&"string"==typeof e&&0<e.length&&"number"==typeof t){var i=l.default.getInstance().aiim.facilityMode;i&&i.activateLevelFilter(n,e,t)}a.goToFeature(n,r).then(function(){})})}}catch(e){console.log("Error zooming to route section:"),console.error(e)}},e.prototype.goToSection=function(o){var r=this;try{if(this.clearHighlights(),o&&o.feature&&o.feature.geometry){var n=o.feature,s=l.default.getInstance().views.activeView,e=n.geometry,t=null,i=this.getLastPoint(n);i&&(e=i,t=this.queryDistanceMeters),this.queryFacility(o,e,t).then(function(){var e=o.facilityId,t=o.toLevelNumber;if(!o.multipleFacilities&&"string"==typeof e&&0<e.length&&"number"==typeof t){var i=l.default.getInstance().aiim.facilityMode;i&&i.activateLevelFilter(s,e,t)}a.goToFeature(s,n).then(function(){}),r.highlightSection(o)})}}catch(e){console.log("Error zooming to route section:"),console.error(e)}},e.prototype.highlightEvent=function(e){var t=e.point.clone(),i=this.viewModel.indoorsEventSymbolHighlight;this.highlightFeature(t,i)},e.prototype.highlightFeature=function(e,t){var i=this;this.clearHighlights();var o=new f({attributes:e.attributes,geometry:e.geometry,symbol:t}),r=this.viewModel.get("_highlightLayer");r&&r.add(o),this.timeoutHandle=setTimeout(function(){i.clearHighlights()},3e3)},e.prototype.highlightSection=function(e){var t=e.feature.clone(),i=this.viewModel.indoorsRouteSymbolHighlight;this.highlightFeature(t,i)},e.prototype.isMatching2DLevel=function(e,t,i){var o=e,r=t,n=l.default.getInstance().aiim.facilityMode.activeFacilityInfo;if(n){if(n.facilityId===o){var s=void 0;return n.activeLevel?s=n.activeLevel.levelNumber:n.zeroVOLevel&&(s=n.zeroVOLevel.levelNumber),"number"!=typeof s||"number"!=typeof r||s===r}return!("string"==typeof o&&0<o.length)}return!0},e.prototype.process=function(){var l,f=this,v=[],y=0,p=0,h="esriMeters",g="esriNAUMinutes",m={routeParameters:this.viewModel.routeParameters,serviceDescription:this.viewModel.serviceDescription},e=this.getRoutes();if(e&&e.features&&1===e.features.length&&(e=c.fromJSON(e))&&e.features&&1===e.features.length){this.route=e.features[0];var t=b.getAttributeValue(this.route.attributes,"Name");this.routeName=this.fixName(this.fixName(t))}var d=this.getDirectionPoints();d&&d.features&&0<d.features.length&&(d=c.fromJSON(d));var i=this.getDirectionLines();if(i&&i.features&&0<i.features.length&&(i=c.fromJSON(i)),d&&d.features&&0<d.features.length){var n=0;d.features.forEach(function(o){o.xtnSectionID=n;var r=b.getAttributeValue(o.attributes,"ObjectID");i&&i.features&&0<i.features.length&&i.features.some(function(e,t){var i=b.getAttributeValue(e.attributes,"DirectionPointID");if(r===i)return n=t,o.xtnSectionID=n,!0})})}if(i&&i.features&&0<i.features.length){i.spatialReference;i.features.forEach(function(e,u){b.getAttributeValue(e.attributes,"DirectionLineType"),b.getAttributeValue(e.attributes,"DirectionPointID"),b.getAttributeValue(e.attributes,"RouteID");var t=b.getAttributeValue(e.attributes,"Meters"),i=b.getAttributeValue(e.attributes,"Minutes"),o=b.getAttributeValue(e.attributes,"FromLevel"),r=b.getAttributeValue(e.attributes,"ToLevel"),n=o!==r,s=f.util.formatDistance(m,t,!1,h),a=f.util.formatTime(m,i,!1,g);y+=t,p+=i;var c={id:u,isSection:!0,feature:e,fromLevelNumber:o,toLevelNumber:l=r,isLevelTransition:n,meters:t,minutes:i,distanceText:s,timeText:a,steps:[]};v.push(c),f.querySectionFacility(c,f.viewModel.get("_routeLayer")),d&&d.features&&0<d.features.length&&d.features.forEach(function(e){if(e.xtnSectionID===u){var t=b.getAttributeValue(e.attributes,"StopID"),i=b.getAttributeValue(e.attributes,"DisplayText"),o=b.getAttributeValue(e.attributes,"DirectionPointType"),r=b.getAttributeValue(e.attributes,"Level"),n=null,s=null,a=L.maneuverTypesByInt[o];a&&(n=a.type,a.icon&&(s=f.util.getIconUrl(a.icon)));var l={point:e,text:i,levelNumber:r,maneuverType:n,maneuverIconUrl:s,isStop:"number"==typeof t,isEvent:1e3<=o};c.steps.push(l),l.isStop&&(l.text=f.fixName(l.text))}})})}this.route&&(this.route.routeLevelNumber=l),this.totalDistanceText=this.util.formatDistance(m,y,!1,h),this.totalTimeText=this.util.formatTime(m,p,!1,g),this.sections=v},e.prototype.queryFacility=function(o,r,n){var s=this;return o&&o.hasOwnProperty("facilityId")?v.resolve():v.create(function(t,e){var i=l.default.getInstance().aiim.datasets.facilities;i&&o&&r?i.queryFacilityIdsByGeometry(r,n).then(function(e){e&&1===e.length?(o.facilityId=e[0],s._voToLn(o.facilityId,o).then(function(){t()})):(e&&1<e.length&&(o.facilityId=null,o.multipleFacilities=!0,console.warn("Multiple facilities found for route step",e)),t())}).catch(function(e){console.error("Error querying facility",e),t()}):t()})},e.prototype.querySectionFacility=function(i,o){var r=this,e=this.getLastPoint(i.feature);if(!e)return v.resolve();var t=this.queryDistanceMeters;return this.queryFacility(i,e,t).then(function(){var e,t=i.facilityId;"string"==typeof t&&0<t.length&&(e=l.default.getInstance().views.activeView)&&"2d"===e.type&&o&&r.afterSetLevel(e,o.graphics)}).catch(function(e){console.error("Error querying section facility",e)})},e.prototype.sortRouteGraphics=function(e,t,r){"2d"===e.type&&t.sort(function(e,t){if(e.xtnLevelInfo&&t.xtnLevelInfo){var i=e.xtnLevelInfo.section.toLevelNumber,o=t.xtnLevelInfo.section.toLevelNumber;if(i===r&&o!==r)return 1;if(i!==r&&o===r)return-1}return 0})},e.prototype._voToLn=function(n,s){if(s._voToLnCalled)return v.resolve();s._voToLnCalled=!0;var a=function(e,t){if(t&&"number"==typeof s[e]){var i=s[e];if("number"==typeof i){var o=t.levelNumbersByVO[i];"number"==typeof o?s[e]=o:console.error("Facility vertical_order to level_number inconsistency",s,t)}}};return v.create(function(o,e){var r=l.default.getInstance().aiim.datasets.levels;r.getFacilityData(n).then(function(e){if(s.isSection&&e){s.toFacilityId=n;var t=r.getZeroVOLevel(e);t&&(s.toZeroVOLevelNumber=t.levelNumber)}var i;a("levelNumber",i=e),a("fromLevelNumber",i),a("toLevelNumber",i),a("routeLevelNumber",i),o()}).catch(function(e){console.error("Error getting facility data",n,e),o()})})},r([u.property()],e.prototype,"considerTransition",void 0),r([u.property()],e.prototype,"response",void 0),r([u.property()],e.prototype,"route",void 0),r([u.property()],e.prototype,"routeName",void 0),r([u.property()],e.prototype,"sections",void 0),r([u.property()],e.prototype,"totalDistanceText",void 0),r([u.property()],e.prototype,"totalTimeText",void 0),r([u.property()],e.prototype,"viewModel",void 0),e=r([u.subclass("app.route.RouteResult")],e)}(u.declared(s));t.default=y});