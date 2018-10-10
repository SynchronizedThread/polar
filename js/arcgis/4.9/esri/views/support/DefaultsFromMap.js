// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/arrayUtils ../../core/Handles ../../core/Logger ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/support/heightModelInfoUtils ../../geometry/support/webMercatorUtils ../../portal/support/geometryServiceUtils".split(" "),function(A,B,t,g,u,h,v,w,x,f,p,q,y){function k(f){return f?JSON.stringify(f.toJSON()):"undefined"}function r(f){switch(f){case 0:return"Waiting";
case 1:return"Found";case 2:return"Exhausted"}return"Unknown: "+f}var z=w.getLogger("esri.views.support.DefaultsFromMap");return function(l){function c(){var a=null!==l&&l.apply(this,arguments)||this;a._handles=new v;a._waitTask=null;a._isStarted=!1;a._spatialReferenceCandidates=null;a._extentCandidates=null;a.logDebugInformation=!1;a.isSpatialReferenceDone=!1;a.isTileInfoDone=!1;a.isHeightModelInfoSearching=!1;a.spatialReference=null;a.extent=null;a.heightModelInfo=null;a.vcsWkid=null;a.latestVcsWkid=
null;a.mapCollectionPaths=m.DefaultMapCollectionPaths.slice();a.tileInfo=null;return a}t(c,l);m=c;c.prototype.initialize=function(){var a=this;this.watch("mapCollectionPaths",function(){a._isStarted&&(a.reset(),a.start())})};c.prototype.destroy=function(){this._set("view",null);this._handles&&(this._handles.destroy(),this._handles=null,this._isStarted=!1);this._cancelLoading()};c.prototype.reset=function(){this._handles.removeAll();this._isStarted=!1;this._set("isSpatialReferenceDone",!1);this._set("isTileInfoDone",
!1);this._set("isHeightModelInfoSearching",!1);this._set("spatialReference",null);this._set("extent",null);this._set("heightModelInfo",null);this._set("vcsWkid",null);this._set("latestVcsWkid",null);this._set("tileInfo",null);this._extentCandidates=this._spatialReferenceCandidates=null};c.prototype.start=function(){this._handles.removeAll();this._isStarted=!0;for(var a=this._updateLayerChange.bind(this),b=0,d=this.mapCollectionPaths;b<d.length;b++)this._handles.add(x.on(this.view,"map."+d[b],"change",
a,a,a,!0))};c.prototype._ownerNameFromCollectionName=function(a){var b=a.lastIndexOf(".");return-1===b?"view":"view."+a.slice(0,b)};c.prototype._ensureLoadedOwnersFromCollectionName=function(a){a=this._ownerNameFromCollectionName(a).split(".");for(var b,d=0;d<a.length;d++){b=this.get(a.slice(0,d+1).join("."));if(!b)break;if(b.load&&!b.isFulfilled())return{owner:null,loading:b.load()}}return{owner:b}};c.prototype._cancelLoading=function(){this._waitTask=null;this._extentProjectTask&&(this._extentProjectTask.cancel(),
this._extentProjectTask=null)};c.prototype._updateWhen=function(a){var b=this,d=!0,n=!1,e=a.always(function(){d?n=!0:e===b._waitTask&&b._update()}),d=!1;n||(this._waitTask=e);return n};c.prototype._updateLayerChange=function(){this.isSpatialReferenceDone&&!this.spatialReference&&this._set("isSpatialReferenceDone",!1);this._update()};c.prototype._update=function(){var a=this;this._cancelLoading();if(this.view){if(!this.isSpatialReferenceDone){this._debugLog("Starting search for spatial reference...");
var b=this._processMapCollections(function(b){return a._processSpatialReferenceSource(b)});this._debugLog("Search ended with status '"+r(b)+"'");if(0!==b){var d=null,b=this._spatialReferenceCandidates;!b||1>b.length?(d=this.defaultSpatialReference,this._debugLog("No spatial reference found, locking to default ("+k(d)+")")):(this.defaultSpatialReference&&1<b.length&&-1<h.findIndex(b,function(b){return b.equals(a.defaultSpatialReference)})&&(b=[this.defaultSpatialReference]),d=b[0],this._debugLog("Locking to "+
k(d)));this._set("spatialReference",d);this._set("isSpatialReferenceDone",!0);d&&(b=this.logDebugInformation,this.logDebugInformation=!1,this._processMapCollections(function(b){return a._findExtent(b,d)}),this.extent||this._projectExtentCandidate(),this.logDebugInformation=b)}}null==this.heightModelInfo&&this.view.isHeightModelInfoRequired&&(this._debugLog("Starting search for height model info..."),b=this._processMapCollections(function(b){return a._processHeightModelInfoSource(b)},function(a){return p.mayHaveHeightModelInfo(a)}),
this._debugLog("Search ended with status "+r(b)),this._set("isHeightModelInfoSearching",0===b));null==this.tileInfo&&(b=!1,this.view.isTileInfoRequired()&&(b=this._deriveTileInfo()),b||this._set("isTileInfoDone",!0))}};c.prototype._processMapCollections=function(a,b){for(var d=0,c=this.mapCollectionPaths;d<c.length;d++){var e="map."+c[d],f=this._ensureLoadedOwnersFromCollectionName(e);this._debugLog("Processing collection "+e+"...");if(f.loading&&!this._updateWhen(f.loading))return this._debugLog("Collection "+
e+" owner is loading -\x3e wait"),0;f=f.owner;if(!f||f.isRejected&&f.isRejected())this._debugLog("Collection "+e+" owner is invalid or rejected -\x3e skip");else if(f=this.view.get(e)){if(e=this._processMapCollection(f,a,b),2!==e)return e}else this._debugLog("Collection "+e+" does not exist -\x3e skip")}return 2};c.prototype._processMapCollection=function(a,b,d){for(var c=0;c<a.length;c++){var e=a.getItemAt(c);if(null==d||d(e)){if(e.load&&!e.isFulfilled()&&!this._updateWhen(e.load()))return this._debugLog("Source "+
e.id+" is loading -\x3e wait"),0;if(!e.load||e.isResolved()){if(b(e))return 1;if(e.layers&&(e=this._processMapCollection(e.layers,b),2!==e))return e}}else this._debugLog("Source "+e.id+" is skipped due to predicate")}return 2};c.prototype._processSpatialReferenceSource=function(a){var b=this._getSupportedSpatialReferences(a);if(0===b.length)return!1;this._spatialReferenceCandidates?(b=h.intersect(b,this._spatialReferenceCandidates,function(a,b){return a.equals(b)}),0<b.length?this._spatialReferenceCandidates=
b:this._debugLog("Layer "+a.id+" is ignored because its supported spatial\n          references are not compatible with the previous candidates")):this._spatialReferenceCandidates=b;return 1===this._spatialReferenceCandidates.length};c.prototype._findExtent=function(a,b){var d=a.fullExtents||(a.fullExtent?[a.fullExtent]:[]),c=h.find(d,function(a){return a.spatialReference.equals(b)});if(c)return this._set("extent",c),!0;0<this._getSupportedSpatialReferences(a).length&&(d=d.map(function(b){return{extent:b,
layer:a}}),this._extentCandidates=(this._extentCandidates||[]).concat(d));return!1};c.prototype._projectExtentCandidate=function(){var a=this;if(this._extentCandidates&&this._extentCandidates.length){var b=this.spatialReference,d=h.find(this._extentCandidates,function(a){return q.canProject(a.extent.spatialReference,b)});d?this._set("extent",q.project(d.extent,b)):(d=this._extentCandidates[0],this._extentProjectTask=y.projectGeometry(d.extent,b,d.layer.portalItem).then(function(b){a._set("extent",
b)}))}};c.prototype._getSupportedSpatialReferences=function(a){var b=this,d=a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===d.length)return this._debugLog("Layer "+a.id+" is ignored because it does not have any spatial references"),[];d=d.filter(function(d){return b.view.isSpatialReferenceSupported(d,a,function(a){return b._debugLog(a)})});0===d.length?this._debugLog("Layer "+a.id+" has spatial references but none of them are supported (or layer doesn't require locking)"):
this._debugLog("Layer "+a.id+" has spatial references. Resulting candidate set: "+d.map(k).join(", "));return d};c.prototype._processHeightModelInfoSource=function(a){var b=p.deriveHeightModelInfoFromLayer(a);return b?(this._set("heightModelInfo",b),this._set("isHeightModelInfoSearching",!1),a.spatialReference&&(this._set("vcsWkid",a.spatialReference.vcsWkid),this._set("latestVcsWkid",a.spatialReference.latestVcsWkid)),!0):!1};c.prototype._deriveTileInfo=function(){if(!this.isSpatialReferenceDone)return!0;
var a=this.get("view.map");if(!a)return!0;var b=a.basemap,d=b&&b.get("baseLayers.0"),a=a.get("layers.0"),c=!1,e=null;b&&"failed"!==b.loadStatus?b.loaded?d&&"failed"!==d.loadStatus?d.loaded?e=d.tileInfo:(this._updateWhen(d.load()),c=!0):a&&"failed"!==a.loadStatus?a.loaded?e=a.tileInfo:(this._updateWhen(a.load()),c=!0):c=!0:(this._updateWhen(b.load()),c=!0):a&&"failed"!==a.loadStatus&&(a.loaded?e=a.tileInfo:(this._updateWhen(a.load()),c=!0));e&&!e.spatialReference.equals(this.spatialReference)&&(e=
null);c||this._set("tileInfo",e);return c};c.prototype._debugLog=function(a){this.logDebugInformation&&z.info(a)};var m;c.DefaultMapCollectionPaths=["basemap.baseLayers","layers","ground.layers","basemap.referenceLayers"];g([f.property()],c.prototype,"logDebugInformation",void 0);g([f.property({readOnly:!0})],c.prototype,"isSpatialReferenceDone",void 0);g([f.property({readOnly:!0})],c.prototype,"isTileInfoDone",void 0);g([f.property({readOnly:!0})],c.prototype,"isHeightModelInfoSearching",void 0);
g([f.property({constructOnly:!0})],c.prototype,"view",void 0);g([f.property({readOnly:!0})],c.prototype,"spatialReference",void 0);g([f.property({readOnly:!0})],c.prototype,"extent",void 0);g([f.property({readOnly:!0})],c.prototype,"heightModelInfo",void 0);g([f.property({readOnly:!0})],c.prototype,"vcsWkid",void 0);g([f.property({readOnly:!0})],c.prototype,"latestVcsWkid",void 0);g([f.property()],c.prototype,"mapCollectionPaths",void 0);g([f.property()],c.prototype,"defaultSpatialReference",void 0);
g([f.property({readOnly:!0})],c.prototype,"tileInfo",void 0);return c=m=g([f.subclass("esri.views.support.DefaultsFromMap")],c)}(f.declared(u))});