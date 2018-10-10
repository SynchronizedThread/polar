// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./Graphics3DGraphicElevationContext ./graphicUtils ../../lib/gl-matrix ../../webgl-engine/Stage".split(" "),function(m,E,F,y,z,g,A,B,C,v,f){m=function(){function c(a,b,f,g,e,k,l,d){this.type="object3d";this._addedToStage=!1;this.alignedTerrainElevation=0;this.needsElevationUpdates=
!1;this.graphics3DSymbolLayer=a;this.uniqueMaterials=g;this.uniqueGeometries=f;this.uniqueTextures=e;this.stageObject=b;this.elevationAligner=k;this.elevationContext=new B(l);this.stageLayer=this.stage=null;this._visible=!1;this.visibilityMode=null!=d?d:c.VisibilityModes.HIDE_FACERANGE}c.prototype.initialize=function(a,b){this.stageLayer=a;this.stage=b;if(this.uniqueMaterials)for(a=0;a<this.uniqueMaterials.length;a++)b.add(f.ModelContentType.MATERIAL,this.uniqueMaterials[a]);if(this.uniqueGeometries)for(a=
0;a<this.uniqueGeometries.length;a++)b.add(f.ModelContentType.GEOMETRY,this.uniqueGeometries[a]);if(this.uniqueTextures)for(a=0;a<this.uniqueTextures.length;a++)b.add(f.ModelContentType.TEXTURE,this.uniqueTextures[a]);b.add(f.ModelContentType.OBJECT,this.stageObject)};c.prototype.setVisibility=function(a){if(null!=this.stage)return this._visible!==a?((this._visible=a)?this._addedToStage?this.stageObject.unhideAllComponents():(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.visibilityMode===
c.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllComponents():(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1),(a=this.stage.view.getEdgeView())&&a.hasObject(this.stageObject)&&a.updateObjectVisibility(this.stageObject,this._visible),!0):!1};Object.defineProperty(c.prototype,"visible",{get:function(){return this._visible},enumerable:!0,configurable:!0});c.prototype.destroy=function(){var a=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var b=0;b<this.uniqueMaterials.length;b++)a.remove(f.ModelContentType.MATERIAL,
this.uniqueMaterials[b].id);if(this.uniqueGeometries)for(b=0;b<this.uniqueGeometries.length;b++)a.remove(f.ModelContentType.GEOMETRY,this.uniqueGeometries[b].id);if(this.uniqueTextures)for(b=0;b<this.uniqueTextures.length;b++)a.remove(f.ModelContentType.TEXTURE,this.uniqueTextures[b].id)}a.remove(f.ModelContentType.OBJECT,this.stageObject.id);this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);(a=this.stage.view.getEdgeView())&&a.hasObject(this.stageObject)&&
a.removeObject(this.stageObject);this._visible=!1;this.stage=this.stageLayer=null};c.prototype.alignWithElevation=function(a,b,c){this.elevationAligner&&(A.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),a=this.elevationAligner(this,this.elevationContext,a,b),null!=a&&(this.alignedTerrainElevation=a))};c.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()};c.prototype.getCenterObjectSpace=function(){return this.stageObject.getCenter(!0)};c.prototype.getBoundingBoxObjectSpace=
function(a){var b=this.stageObject;a||(a=g.create());g.setMin(a,b.getBBMin(!0));g.setMax(a,b.getBBMax(!0));return a};c.prototype.getProjectedBoundingBox=function(a,b,c,f){return z(this,void 0,void 0,function(){var e,m,r,d,t,u,h,w,n,x;return y(this,function(p){switch(p.label){case 0:e=this.getBoundingBoxObjectSpace(c);m=D;r=g.isPoint(e)?1:m.length;for(d=0;d<r;d++)t=m[d],k[0]=e[t[0]],k[1]=e[t[1]],k[2]=e[t[2]],v.mat4d.multiplyVec3(this.stageObject.objectTransformation,k),l[3*d+0]=k[0],l[3*d+1]=k[1],
l[3*d+2]=k[2];if(!a(l,0,r))return[2,null];g.empty(e);u=null;this.calculateRelativeScreenBounds&&(u=this.calculateRelativeScreenBounds());for(d=0;d<3*r;d+=3){for(h=0;3>h;h++)e[h]=Math.min(e[h],l[d+h]),e[h+3]=Math.max(e[h+3],l[d+h]);u&&f.push({location:l.slice(d,d+3),screenSpaceBoundingRect:u})}if(!b||!b.service||"absolute-height"===this.elevationContext.mode)return[3,5];g.center(e,q);w="relative-to-scene"===this.elevationContext.mode?"scene":"ground";n=void 0;if(!b.useViewElevation)return[3,1];n=b.service.getElevation(q[0],
q[1],w);return[3,4];case 1:return p.trys.push([1,3,,4]),x=C.demResolutionForBoundingBox(e,b),[4,b.service.queryElevation(q[0],q[1],x,w)];case 2:return n=p.sent(),[3,4];case 3:return p.sent(),n=null,[3,4];case 4:g.offset(e,0,0,-this.alignedTerrainElevation+n),p.label=5;case 5:return[2,e]}})})};c.prototype.addHighlight=function(a,b){b=this.stageObject.highlightAllComponents(b);a.addObject(this.stageObject,b)};c.prototype.removeHighlight=function(a){a.removeObject(this.stageObject)};return c}();(function(c){c=
c.VisibilityModes||(c.VisibilityModes={});c[c.REMOVE_OBJECT=0]="REMOVE_OBJECT";c[c.HIDE_FACERANGE=1]="HIDE_FACERANGE"})(m||(m={}));var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],k=v.vec3d.create(),q=v.vec3d.create(),D=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return m});