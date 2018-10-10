// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojox/gfx/_base dojox/gfx/matrix ../../../../core/lang ./Shape".split(" "),function(k,l,m,h,n,p,q){Object.defineProperty(l,"__esModule",{value:!0});k=function(g){function f(c){var b=g.call(this)||this;b.segments=[];b.tbbox=null;b.absolute=!0;b.last={};b.segmented=!1;b._validSegments={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0};b._2PI=2*Math.PI;b.rawNode=c;b.shape=p.clone(h.defaultPath);return b}m(f,g);f.prototype.setAbsoluteMode=function(c){this._confirmSegmented();
this.absolute="string"===typeof c?"absolute"===c:c;return this};f.prototype.getAbsoluteMode=function(){this._confirmSegmented();return this.absolute};f.prototype.getBoundingBox=function(){this._confirmSegmented();return this.bbox&&"l"in this.bbox?{x:this.bbox.l,y:this.bbox.t,width:this.bbox.r-this.bbox.l,height:this.bbox.b-this.bbox.t}:null};f.prototype._getRealBBox=function(){this._confirmSegmented();if(this.tbbox)return this.tbbox;var c=this.bbox,b=this._getRealMatrix();this.bbox=null;for(var d=
this.segments.length,e=0;e<d;++e)this._updateWithSegment(this.segments[e],b);b=this.bbox;this.bbox=c;return this.tbbox=b?[{x:b.l,y:b.t},{x:b.r,y:b.t},{x:b.r,y:b.b},{x:b.l,y:b.b}]:null};f.prototype.getLastPosition=function(){this._confirmSegmented();return"x"in this.last?this.last:null};f.prototype._applyTransform=function(){this.tbbox=null;g.prototype._applyTransform.call(this);return this};f.prototype._updateBBox=function(c,b,d){d&&(b=n.multiplyPoint(d,c,b),c=b.x,b=b.y);this.bbox&&"l"in this.bbox?
(this.bbox.l>c&&(this.bbox.l=c),this.bbox.r<c&&(this.bbox.r=c),this.bbox.t>b&&(this.bbox.t=b),this.bbox.b<b&&(this.bbox.b=b)):this.bbox={l:c,b:b,r:c,t:b}};f.prototype._updateWithSegment=function(c,b){var d=c.args,e=d.length,a;switch(c.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(a=0;a<e;a+=2)this._updateBBox(d[a],d[a+1],b);this.last.x=d[e-2];this.last.y=d[e-1];this.absolute=!0;break;case "H":for(a=0;a<e;++a)this._updateBBox(d[a],this.last.y,b);this.last.x=d[e-1];this.absolute=
!0;break;case "V":for(a=0;a<e;++a)this._updateBBox(this.last.x,d[a],b);this.last.y=d[e-1];this.absolute=!0;break;case "m":a=0;"x"in this.last||(this._updateBBox(this.last.x=d[0],this.last.y=d[1],b),a=2);for(;a<e;a+=2)this._updateBBox(this.last.x+=d[a],this.last.y+=d[a+1],b);this.absolute=!1;break;case "l":case "t":for(a=0;a<e;a+=2)this._updateBBox(this.last.x+=d[a],this.last.y+=d[a+1],b);this.absolute=!1;break;case "h":for(a=0;a<e;++a)this._updateBBox(this.last.x+=d[a],this.last.y,b);this.absolute=
!1;break;case "v":for(a=0;a<e;++a)this._updateBBox(this.last.x,this.last.y+=d[a],b);this.absolute=!1;break;case "c":for(a=0;a<e;a+=6)this._updateBBox(this.last.x+d[a],this.last.y+d[a+1],b),this._updateBBox(this.last.x+d[a+2],this.last.y+d[a+3],b),this._updateBBox(this.last.x+=d[a+4],this.last.y+=d[a+5],b);this.absolute=!1;break;case "s":case "q":for(a=0;a<e;a+=4)this._updateBBox(this.last.x+d[a],this.last.y+d[a+1],b),this._updateBBox(this.last.x+=d[a+2],this.last.y+=d[a+3],b);this.absolute=!1;break;
case "A":for(a=0;a<e;a+=7)this._updateBBox(d[a+5],d[a+6],b);this.last.x=d[e-2];this.last.y=d[e-1];this.absolute=!0;break;case "a":for(a=0;a<e;a+=7)this._updateBBox(this.last.x+=d[a+5],this.last.y+=d[a+6],b);this.absolute=!1}c=[c.action];for(a=0;a<e;++a)c.push(h.formatNumber(d[a],!0));if("string"===typeof this.shape.path)this.shape.path+=c.join("");else for(a=0,e=c.length;a<e;++a)this.shape.path.push(c[a]);"string"===typeof this.shape.path&&this.rawNode.setAttribute("d",this.shape.path)};f.prototype._pushSegment=
function(c,b){this.tbbox=null;var d=this._validSegments[c.toLowerCase()];"number"===typeof d&&(d?b.length>=d&&(c={action:c,args:b.slice(0,b.length-b.length%d)},this.segments.push(c),this._updateWithSegment(c)):(c={action:c,args:[]},this.segments.push(c),this._updateWithSegment(c)))};f.prototype._collectArgs=function(c,b){for(var d=0;d<b.length;++d){var e=b[d];"boolean"===typeof e?c.push(e?1:0):"number"===typeof e?c.push(e):e instanceof Array?this._collectArgs(c,e):"x"in e&&"y"in e&&c.push(e.x,e.y)}};
f.prototype._confirmSegmented=function(){if(!this.segmented){var c=this.shape.path;this.shape.path=[];this._setPath(c);this.shape.path=this.shape.path.join("");this.segmented=!0}};f.prototype._setPath=function(c){c=Array.isArray(c)?c:c.match(h.pathSvgRegExp);this.segments=[];this.absolute=!0;this.bbox={};this.last={};if(c){for(var b="",d=[],e=c.length,a=0;a<e;++a){var f=c[a],g=parseFloat(f);isNaN(g)?(b&&this._pushSegment(b,d),d=[],b=f):d.push(g)}this._pushSegment(b,d)}};f.prototype.setShape=function(c){g.prototype.setShape.call(this,
"string"===typeof c?{path:c}:c);this.segmented=!1;this.segments=[];this.shape.path?this.rawNode.setAttribute("d",this.shape.path):this.rawNode.removeAttribute("d");return this};f.nodeType="path";return f}(q.default);l.default=k});