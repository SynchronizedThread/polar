// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../color ../../definitions ../../enums ../../enums ../../LineTess ../../number ../../TileClipper ../../Utils ../../WGLDisplayRecord ./WGLMeshTemplate".split(" "),function(D,K,O,P,Q,L,q,R,f,A,S,M,T,U){Object.defineProperty(K,"__esModule",{value:!0});var I=P.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),F=f.allocTriangles(20),J=f.allocTriangles(20),G=[f.allocExtrudeVectors(),f.allocExtrudeVectors()],
N=f.allocExtrudeVectors(),H=L.TILE_SIZE+8,n=new f.Tessellator({distanceAlongCorrection:!0}),E=new S.TileClipper(0,0,0,1,8);E.setExtent(L.TILE_SIZE);D=function(D){function r(c,b,a,d,e,l,g,h,m,f,t){var k=D.call(this)||this;k.capType=l;k.joinType=g;k.fillColor=h;k.tl=m;k.br=f;k.hasPattern=t;k.geometryType=q.WGLGeometryType.LINE;k.halfWidth=0<d?.5*(d+1/e):0;k._materialStore=c;k.vvFlags=b;k.materialId=k._materialStore.createSpriteMaterial(a,k.geometryType,b);return k}O(r,D);r.fromSimpleLine=function(c,
b,a,d,e){var l=a.color,g=M.getCapType(a.cap||"round"),h=M.getJoinType(a.join||"round"),l=l&&"none"!==a.style&&Q.premultiplyAlphaRGBA(l)||0;"none"===a.style&&(l=0);if(!d)return new r(c,b,d,a.width,e,g,h,l,0,0,!1);var m=d.rect,f=m.x+1+d.width,t=m.y+1+d.height,m=A.i1616to32(m.x+1,m.y+1),f=A.i1616to32(f,t);return new r(c,b,d,a.width,e,g,h,l,m,f,!0)};r.fromPictureLineSymbol=function(c,b,a,d){I.error("PictureLineSymbol support does not exist!");return null};r.prototype.writeMesh=function(c,b,a,d,e,l,g){if(this.vvFlags&
R.WGLVVFlag.COLOR||0!==this.fillColor){l=this._materialStore.get(this.materialId);var h=b.indexVector,f=b.get("geometry");b=b.get("visibility");var n=this.halfWidth,t=new T(d,this.geometryType,this.materialId),k=this._getOffset(f,l);t.vertexFrom=k;t.indexFrom=h.length;c.push(t);switch(a){case "esriGeometryPolyline":c=this._clipLines(e.geometry.paths);this._write(t,h,f,b,k,d,n,c,l,g);break;case "esriGeometryPolygon":c=this._clipLines(e.geometry.rings);this._write(t,h,f,b,k,d,n,c,l,g);break;default:I.error("Unable to handle geometryType: "+
a)}}};r.prototype._clipLines=function(c){for(var b=[],a=!1,d=0;d<c.length;){var e=[],f=c[d];E.reset(2);var g=f[0],h=g[0],g=g[1];if(a)E.moveTo(h,g);else{if(-8>h||h>H||-8>g||g>H){a=!0;continue}e.push({x:h,y:g})}for(var m=!1,n=f.length,t=1;t<n;++t)if(h+=f[t][0],g+=f[t][1],a)E.lineTo(h,g);else{if(-8>h||h>H||-8>g||g>H){m=!0;break}e.push({x:h,y:g})}if(m)a=!0;else{if(a){if(e=E.resultWithStarts())for(a=0;a<e.length;a++)b.push(e[a])}else b.push({line:e,start:0});d++;a=!1}}return b};r.prototype._getOffset=
function(c,b){b=b.materialKeyInfo.hasVV()?11:8;return c.length/b};r.prototype._write=function(c,b,a,d,e,l,g,h,m,r){for(var t=0,k=0;k<h.length;k++){var q=h[k],B=q.line;if(!(2>B.length))for(var p=B[0],w=B[B.length-1],x=w.x-p.x,p=w.y-p.y,x=1E-6>x*x+p*p,z=q.start%65535,q=G[1],p=0;p<B.length;p++){var y=B[p],w=q===G[p%2]?G[(p+1)%2]:G[p%2],u=0===p,v=p===B.length-1;v&&x&&!this.hasPattern?f.copyExtrudeVectors(w,N):(this._computeExtrudeVectors(w,p,B,x),t+=this._writeVertices(a,d,l,g,y.x,y.y,w,z,t,m,r),!w.capCenter||
x&&v||this._writePieIndices(c,b,e,w),x&&u&&!this.hasPattern&&f.copyExtrudeVectors(N,w));u||this._writeBridgeIndices(c,b,e,q,w);if(!v){var v=B[p+1],u=[v.x-y.x,v.y-y.y],C=f.length(u),u=[u[0]/C,u[1]/C],C=z+C;if(65535<C){var A=(65535-z)/(C-z),z=y.x+(v.x-y.x)*A,y=y.y+(v.y-y.y)*A,v=q;n.buttCap(v,u,u);t+=this._writeVertices(a,d,l,g,z,y,v,65535,t,m,r);n.bridge(F,w,v);this._writeBridgeIndices(c,b,e,w,v);n.buttCap(v,u,u);z=C-65535}else z=C,q=w}}}c.vertexCount=t};r.prototype._writeVertices=function(c,b,a,d,
e,f,g,h,n,r,t){var k=0,l=A.i1616to32(e,f),m=g.vectors;g=m.items;for(m=m.count;k<m;++k){var p=g[k].vector,q=p[0],p=p[1],x=g[k].texCoords,z=x[0],y=x[1],u=g[k].direction,x=u[0],v=u[1],u=A.i1616to32(h,31*d),q=A.i8888to32(Math.round(31*q),Math.round(31*p),Math.round(31*z),Math.round(31*y)),p=A.i8888to32(Math.round(31*x),Math.round(31*v),0,0);c.push(l);c.push(a);c.push(this.fillColor);c.push(q);c.push(u);c.push(this.tl);c.push(this.br);c.push(p);this._writeVV(c,t,r);b.push(255);g[k].base={index:n+k,point:[e,
f]}}return k};r.prototype._writeVV=function(c,b,a){a.materialKeyInfo.hasVV()&&(c.push(b[q.VVType.SIZE]),c.push(b[q.VVType.COLOR]),c.push(b[q.VVType.OPACITY]))};r.prototype._writeBridgeIndices=function(c,b,a,d,e){n.bridge(F,d,e);for(d=0;d<F.count;++d)e=F.items[d],b.push(a+e.v1.base.index),b.push(a+e.v2.base.index),b.push(a+e.v3.base.index),c.indexCount+=3};r.prototype._writePieIndices=function(c,b,a,d){n.pie(J,d);for(d=0;d<J.count;++d){var e=J.items[d];b.push(a+e.v1.base.index);b.push(a+e.v2.base.index);
b.push(a+e.v3.base.index);c.indexCount+=3}};r.prototype._computeExtrudeVectors=function(c,b,a,d){var e=a[b],l=[void 0,void 0],g=[void 0,void 0];if(0<b&&b<a.length-1){var h=a[(b+a.length-1)%a.length],m=a[(b+1)%a.length];f.normalize(l,[e.x-h.x,e.y-h.y]);f.normalize(g,[m.x-e.x,m.y-e.y])}else if(0===b)m=a[(b+1)%a.length],f.normalize(g,[m.x-e.x,m.y-e.y]),d?(h=a[a.length-2],f.normalize(l,[e.x-h.x,e.y-h.y])):l=g;else if(b===a.length-1)h=a[(b+a.length-1)%a.length],f.normalize(l,[e.x-h.x,e.y-h.y]),d?(h=a[1],
f.normalize(g,[h.x-e.x,h.y-e.y])):g=l;else{console.error("Vertex index 'i' out of range.");return}d||0!==b?d||b!==a.length-1?this._computeJoinExtrudeVectors(c,l,g):this._computeCapExtrudeVectors(c,l,g,f.CapPosition.END):this._computeCapExtrudeVectors(c,l,g,f.CapPosition.START)};r.prototype._computeCapExtrudeVectors=function(c,b,a,d){switch(this.capType){case q.CapType.BUTT:n.buttCap(c,b,a);break;case q.CapType.ROUND:var e=f.getNumberOfSlices(Math.PI);n.roundCap(c,b,a,d,e,d===f.CapPosition.START?-1:
1);break;case q.CapType.SQUARE:n.squareCap(c,b,a,d);break;default:I.error("Encountered unknown cap type: "+this.capType+", defaulting to BUTT"),n.buttCap(c,b,a)}};r.prototype._computeJoinExtrudeVectors=function(c,b,a){var d=f.getRads(b,a);if(d>Math.PI-.05)n.rectJoin(c,b,a);else if(this.joinType===q.JoinType.MITER||.1>d).05>d?n.fastMiterJoin(c,b,a):d<f.MITER_SAFE_RADS?n.miterJoin(c,b,a):n.bevelJoin(c,b,a,f.SYSTEM_MAG_LIMIT);else if(this.joinType===q.JoinType.BEVEL)n.bevelJoin(c,b,a,1);else if(this.joinType===
q.JoinType.ROUND){var e=f.getNumberOfSlices(d);2.3>d?2>e||.5>d?n.bevelJoin(c,b,a,1):n.roundJoin(c,b,a,e):n.unitRoundJoin(c,b,a,e)}};return r}(U.default);K.default=D});