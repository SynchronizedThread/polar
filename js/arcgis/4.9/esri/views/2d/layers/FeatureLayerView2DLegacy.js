// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/paramHelper ../../../core/Error ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../layers/graphics/QueryEngine ../../../layers/graphics/controllers/support/controllerUtils ../engine/DOMContainer ./LayerView2D ./support/FeaturesView2D ../../layers/RefreshableLayerView".split(" "),function(v,w,k,f,x,l,m,g,e,n,p,q,r,t,u){function h(d){return d&&
null!=d.update}return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._handles=new m;a.container=new q;return a}k(b,d);b.prototype.queryGraphics=function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()};b.prototype.queryFeatures=function(a){return this._queryEngine?this._queryEngine.queryFeatures(a):this._rejectQuery()};b.prototype.queryFeaturesJSON=function(a){return this._queryEngine?this._queryEngine.queryFeatures(a).then(function(a){return a.toJSON()}):
this._rejectQuery()};b.prototype.queryObjectIds=function(a){return this._queryEngine?this._queryEngine.queryObjectIds(a):this._rejectQuery()};b.prototype.queryFeatureCount=function(a){return this._queryEngine?this._queryEngine.queryFeatureCount(a):this._rejectQuery()};b.prototype.queryExtent=function(a){return this._queryEngine?this._queryEngine.queryExtent(a):this._rejectQuery()};b.prototype.hitTest=function(a,b){return this.suspended||!this.featuresView?g.resolve():this.featuresView.hitTest(a,b)};
b.prototype.update=function(a){h(this.controller)?this.controller.update(a):h(this.featuresView)&&this.featuresView.update(a)};b.prototype.attach=function(){var a=this;this.layer.createGraphicsController({layerView:this}).then(function(b){if(a.attached){a._set("controller",b);a.requestUpdate();var c=new t;c.mapView=a.view;c.graphics=b.graphics;c.layer=a.layer;c.renderer=a.layer.renderer;a._handles.add(a.layer.watch("renderer",function(){c.renderer=a.layer.renderer}));a._handles.add(a.layer.on("graphic-update",
function(a){return c.graphicUpdateHandler(a)}));a.featuresView=c;a._queryEngine=new n({layer:a.layer,dataSpatialReference:a.view.spatialReference,objectIdField:a.layer.objectIdField});a._queryEngine.features=b.graphics;a._queryEngine.objectIdField=a.layer.objectIdField;a.container.addChild(c.container)}})};b.prototype.detach=function(){this.container.removeAllChildren();this._handles.removeAll();this.featuresView&&(this.featuresView.destroy(),this.featuresView=null);this.controller&&(this.controller.destroy&&
this.controller.destroy(),this._set("controller",null))};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.doRefresh=function(){this.updateRequested||this.suspended||this.controller&&p.isRefreshable(this.controller.activeController)&&this.controller.activeController.refresh()};b.prototype.isUpdating=function(){return null==this.featuresView||!0===this.get("controller.updating")};
b.prototype._rejectQuery=function(){return g.reject(new l("FeatureLayerView2D","Not ready to execute query"))};f([e.property({readOnly:!0})],b.prototype,"controller",void 0);f([e.property()],b.prototype,"featuresView",void 0);f([e.property({dependsOn:["controller.updating","featuresView","featuresView.updating"]})],b.prototype,"updating",void 0);return b=f([e.subclass("esri.views.2d.layers.FeatureLayerView2DLegacy")],b)}(e.declared(r,u))});