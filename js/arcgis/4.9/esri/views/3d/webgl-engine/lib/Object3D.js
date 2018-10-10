// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/gl-matrix ./ComponentUtils ./GeometryRecord ./HighlightUtils ./IdGen ./ModelContentType ./Util".split(" "),function(p,x,d,e,n,q,t,u,v){var m=v.assert,w=d.mat4d.identity();p=function(){function b(a){void 0===a&&(a={});this._bvObjectSpace=new r;this._bvWorldSpace=new r;this._bvDirty=!0;this._hasVolatileTransformation=!1;this._allComponentsHiddenDirty=!0;this.id=b._idGen.gen(a.idHint);this.name=a.name;this.castShadow=null!=a.castShadow?a.castShadow:!0;this.metadata=
a.metadata;this.objectTransformation=d.mat4d.identity();this._initializeGeometryRecords(a.geometries,a.materials,a.transformations,a.origins)}b.prototype._initializeGeometryRecords=function(a,c,f,b){if(Array.isArray(a)){m(c.length===a.length,"Object3D: materials don't match geometries");m(f.length===a.length,"Object3D: transformations don't match geometries");this.geometryRecords=Array(a.length);this.geometries=a.slice();for(var l=0;l<a.length;l++)m(Array.isArray(c[l]),"Object3D: materials parameter must be array of array"),
this.geometryRecords[l]=new n(a[l],c[l].slice(),d.mat4d.create(f[l]),{},b&&b[l]);this._hasVolatileTransformation=!1}else this.geometryRecords=[],this.geometries=[]};Object.defineProperty(b.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(a){m(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer");this._parentLayer=a},enumerable:!0,configurable:!0});b.prototype.getParentLayer=function(){return this.parentLayer};b.prototype.addParentLayer=function(a){this.parentLayer=
a};b.prototype.removeParentLayer=function(a){this.parentLayer=null};b.prototype.getNumGeometryRecords=function(){return this.geometryRecords.length};b.prototype.getFirstGeometryIndex=function(a){a=this.geometries.indexOf(a);m(-1<a,"Object3D.getFirstGeometryIndex: geometry not found");return a};b.prototype.findGeometryRecords=function(a){for(var c=[],f=0;f<this.geometries.length;f++)this.geometries[f]===a&&c.push(this.geometryRecords[f]);return c};b.prototype.getGeometryRecord=function(a){m(0<=a&&
a<this.geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range");return this.geometryRecords[a]};b.prototype.getGeometryRecords=function(){return this.geometryRecords};b.prototype.addGeometry=function(a,c,f,b,k,h){void 0===f&&(f=w);m(Array.isArray(c),"Object3D.addGeometry: materials must be array");this.geometries.push(a);a=new n(a,c.slice(),d.mat4d.create(f),b||{},k,h);this.geometryRecords.push(a);this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.customTransformation});
this._notifyDirty("objGeometryAdded",a);this._invalidateBoundingVolume();this._allComponentsHiddenDirty=!0;return a};b.prototype.hasGeometry=function(a){return-1<this.geometries.indexOf(a)};b.prototype.removeGeometry=function(a){var c=this.geometryRecords.splice(a,1)[0];this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.customTransformation});this.geometries.splice(a,1);this._notifyDirty("objGeometryRemoved",c);this._invalidateBoundingVolume();this._allComponentsHiddenDirty=
!0;return c};b.prototype.removeAllGeometries=function(){for(;0<this.getNumGeometryRecords();)this.removeGeometry(0)};b.prototype.geometryVertexAttrsUpdated=function(a){this._notifyDirty("vertexAttrsUpdated",this.geometryRecords[a]);this._invalidateBoundingVolume()};b.prototype.areAllComponentsHidden=function(){if(this._allComponentsHiddenDirty){this._allComponentsHiddenDirty=!1;this._allComponentsHidden=!0;for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a];if(!e.isAllHidden(b.instanceParameters.componentVisibilities,
b.geometry.data.componentOffsets)){this._allComponentsHidden=!1;break}}}return this._allComponentsHidden};b.prototype.areAllComponentsVisible=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a];if(!e.isAllVisible(b.instanceParameters.componentVisibilities,b.geometry.data.componentOffsets))return!1}return!0};b.prototype.hasComponents=function(){for(var a=!1,c=0;c<this.geometries.length&&!(a=e.hasComponents(this.geometries[c].data.componentOffsets));c++);return a};b.prototype.setComponentVisibility=
function(a,c,b){c=e.updateVisibility(a.instanceParameters.componentVisibilities,a.geometry.data.componentOffsets,c,b);a.instanceParameters.componentVisibilities=c;this._notifyDirty("visibilityChanged",a);this._allComponentsHiddenDirty=!0};b.prototype.setHidden=function(a,c){a.instanceParameters.hidden=!!c;this._notifyDirty("visibilityChanged",a)};b.prototype.isHidden=function(a){return!!a.instanceParameters.hidden};b.prototype.getComponentVisibility=function(a,c){return e.getVisibility(a.instanceParameters.componentVisibilities,
c)};b.prototype.hideAllComponents=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a],d=e.hideAllComponents(b.instanceParameters.componentVisibilities);b.instanceParameters.componentVisibilities=d}this._notifyDirty("visibilityChanged");this._allComponentsHiddenDirty=!0};b.prototype.unhideAllComponents=function(){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a],d=e.unhideAllComponents(b.instanceParameters.componentVisibilities);b.instanceParameters.componentVisibilities=
d}this._notifyDirty("visibilityChanged");this._allComponentsHiddenDirty=!0};b.prototype._setComponentHighlight=function(a,c,b,d){c=e.addHighlight(a.instanceParameters.componentHighlights,c,b,d);a.instanceParameters.componentHighlights=c};b.prototype.setComponentHighlight=function(a,c,b){var d=q.generateHighlightId();this._setComponentHighlight(a,c,b,d);this._notifyDirty("componentHighlightChanged");return d};b.prototype.highlightAllComponents=function(a){for(var c=q.generateHighlightId(),b=0,d=this.geometryRecords;b<
d.length;b++)this._setComponentHighlight(d[b],null,a,c);this._notifyDirty("componentHighlightChanged");return c};b.prototype.removeHighlights=function(a){for(var c=0,b=this.geometryRecords;c<b.length;c++){var d=b[c].instanceParameters,k=e.removeHighlight(d.componentHighlights,a);d.componentHighlights=k}this._notifyDirty("componentHighlightChanged")};b.prototype.getComponentFromTriangleNr=function(a,c){m(0<=a&&a<this.geometryRecords.length,"Object3d.getComponentFromTriangleNr: index out of range");
return e.componentFind(this.geometryRecords[a].geometry.data.componentOffsets,3*c)};b.prototype.setGeometryTransformation=function(a,c){m(0<=a&&a<this.geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var b=this.geometryRecords[a];c=new n(b.geometry,b.materials,d.mat4d.create(c),b.instanceParameters);this.geometryRecords[a]=c;this._notifyDirty("objGeometryReplaced",[b,c]);this._invalidateBoundingVolume()};b.prototype.getObjectTransformation=function(){return d.mat4d.create(this.objectTransformation)};
b.prototype.setObjectTransformation=function(a){d.mat4d.set(a,this.objectTransformation);this._invalidateBoundingVolume();this._notifyDirty("objTransformation")};b.prototype.getCombinedStaticTransformation=function(a,b){b=b||d.mat4d.create();d.mat4d.multiply(this.objectTransformation,a.getStaticTransformation(),b);return b};b.prototype.getCombinedShaderTransformation=function(a,b){b=b||d.mat4d.create();d.mat4d.multiply(this.objectTransformation,a.getShaderTransformation(),b);return b};b.prototype.hasVolativeTransformation=
function(){return this._hasVolatileTransformation};b.prototype.getCastShadow=function(){return this.castShadow};b.prototype.setCastShadow=function(a){this.castShadow=a};b.prototype.getMetadata=function(){return this.metadata};b.prototype.getName=function(){return this.name};b.prototype.getBBMin=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin};b.prototype.getBBMax=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax};
b.prototype.getCenter=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.center:this._bvWorldSpace.center};b.prototype.getBSRadius=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius};b.prototype._validateBoundingVolume=function(){if(this._bvDirty||this._hasVolatileTransformation){this._bvObjectSpace.init();this._bvWorldSpace.init();for(var a=0;a<this.geometryRecords.length;++a){var b=this.geometries[a],f=this.geometryRecords[a],
b=b.boundingInfo;this._calculateTransformedBoundingVolume(b,this._bvObjectSpace,f.getShaderTransformation());this._calculateTransformedBoundingVolume(b,this._bvWorldSpace,this.getCombinedShaderTransformation(f))}d.vec3d.lerp(this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5,this._bvObjectSpace.center);d.vec3d.lerp(this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5,this._bvWorldSpace.center);for(var f=d.vec3d.create(),l=d.vec3d.create(),k=d.mat4d.maxScale(this.objectTransformation),a=0;a<this.geometryRecords.length;++a){var b=
this.geometries[a],h=this.geometryRecords[a].getShaderTransformation(),g=d.mat4d.maxScale(h),b=b.boundingInfo;d.mat4d.multiplyVec3(h,b.getCenter(),f);h=d.vec3d.dist(f,this._bvObjectSpace.center);b=b.getBSRadius()*g;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,h+b);d.mat4d.multiplyVec3(this.objectTransformation,f,l);g=d.vec3d.dist(l,this._bvWorldSpace.center);this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,g+b*k)}this._bvDirty=!1}};b.prototype._calculateTransformedBoundingVolume=
function(a,b,f){var c=a.getBBMin();a=a.getBBMax();var k=d.vec3d.create(c),h=d.vec3d.create(a);d.mat4d.multiplyVec3(f,k);d.mat4d.multiplyVec3(f,h);for(var g=0;3>g;++g)b.bbMin[g]=Math.min(b.bbMin[g],k[g],h[g]),b.bbMax[g]=Math.max(b.bbMax[g],k[g],h[g]);for(g=0;3>g;++g){d.vec3d.set(c,k);d.vec3d.set(a,h);k[g]=a[g];h[g]=c[g];d.mat4d.multiplyVec3(f,k);d.mat4d.multiplyVec3(f,h);for(var e=0;3>e;++e)b.bbMin[e]=Math.min(b.bbMin[e],k[e],h[e]),b.bbMax[e]=Math.max(b.bbMax[e],k[e],h[e])}};b.prototype._invalidateBoundingVolume=
function(){this._bvDirty=!0;this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})};b.prototype._notifyDirty=function(a,b,d,e){this._parentLayer&&(d=d||u.OBJECT,this._parentLayer.notifyDirty(a,b,d,e||this))};b._idGen=new t;return b}();var r=function(){function b(){this.bbMin=d.vec3d.create();this.bbMax=d.vec3d.create();this.center=d.vec3d.create();this.bsRadius=0}b.prototype.init=function(){d.vec3d.set3(Number.MAX_VALUE,
Number.MAX_VALUE,Number.MAX_VALUE,this.bbMin);d.vec3d.set3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,this.bbMax);d.vec3d.set3(0,0,0,this.center);this.bsRadius=0};b.prototype.getCenter=function(){return this.center};b.prototype.getBSRadius=function(){return this.bsRadius};return b}();return p});