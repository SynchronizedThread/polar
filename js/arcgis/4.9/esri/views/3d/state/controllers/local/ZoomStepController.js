// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../camera/constraintUtils ../../../lib/gl-matrix ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../../animation/easing".split(" "),function(g,h,l,m,e,n,k,p){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function c(d,b){var a=g.call(this,d.state,d.sceneIntersectionHelper,"interaction"===b?null:void 0)||this;a.view=d;a.mode=b;a.zoomLocation=e.vec3d.create();a.tmpCamera=new k;a.tmpRayDir=
e.vec3d.create();a.tmpCenter=e.vec3d.create();a.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new k,interactionDirection:null,tiltMode:0};return a}l(c,g);Object.defineProperty(c.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});c.prototype.zoomStep=function(d,b){if(this.active){var a=this.view.state,f=this.constraintOptions.interactionStartCamera;this.animation.finished?f.copyFrom(a.camera):
this.animation.cameraAt(1,f);this.tmpCamera.copyFrom(a.camera);0<d?(this.intersectionHelper.pickPointInScreen(b,this.zoomLocation)||this.intersectionHelper.pickFreePointInScreen(b,this.zoomLocation),this.intersectionHelper.pickPointFromSegment(this.tmpCamera.eye,this.tmpCamera.center,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.pickPointFromSegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:e.vec3d.set(this.tmpCamera.center,
this.zoomLocation);this.updateCamera(this.tmpCamera,Math.pow(.6,d),this.zoomLocation,b);this.begin(this.tmpCamera)}};c.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:p.outExpo}};c.prototype.updateCamera=function(d,b,a,f){e.vec3d.subtract(a,d.eye,this.tmpRayDir);f=e.vec3d.length(this.tmpRayDir);var c=f*b;1>=b&&4>c&&(c=4,b=c/f);1E-6>Math.abs(f-c)||(e.vec3d.scale(this.tmpRayDir,b),e.vec3d.subtract(a,this.tmpRayDir,d.eye),e.vec3d.lerp(d.center,a,1-b),m.applyAll(this.view,this.tmpCamera,
this.constraintOptions))};return c}(n.PointToPointAnimationController);h.ZoomStepController=g});