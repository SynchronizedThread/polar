// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ./symbols/ExtrudeSymbol3DLayer ./symbols/FillSymbol ./symbols/FillSymbol3DLayer ./symbols/Font ./symbols/IconSymbol3DLayer ./symbols/LabelSymbol3D ./symbols/LineSymbol3D ./symbols/LineSymbol3DLayer ./symbols/MarkerSymbol ./symbols/MeshSymbol3D ./symbols/ObjectSymbol3DLayer ./symbols/PathSymbol3DLayer ./symbols/PictureFillSymbol ./symbols/PictureMarkerSymbol ./symbols/PointSymbol3D ./symbols/PolygonSymbol3D ./symbols/SimpleFillSymbol ./symbols/SimpleLineSymbol ./symbols/SimpleMarkerSymbol ./symbols/Symbol ./symbols/Symbol3D ./symbols/Symbol3DLayer ./symbols/TextSymbol ./symbols/TextSymbol3DLayer ./symbols/WebStyleSymbol ./symbols/callouts/LineCallout3D ./symbols/callouts/LineCallout3DBorder ./symbols/support/Symbol3DVerticalOffset ./symbols/support/jsonUtils".split(" "),
function(J,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){Object.defineProperty(a,"__esModule",{value:!0});a.ExtrudeSymbol3DLayer=b;a.BaseFillSymbol=c;a.FillSymbol3DLayer=d;a.Font=e;a.IconSymbol3DLayer=f;a.LabelSymbol3D=g;a.LineSymbol3D=h;a.LineSymbol3DLayer=k;a.BaseMarkerSymbol=l;a.MeshSymbol3D=m;a.ObjectSymbol3DLayer=n;a.PathSymbol3DLayer=p;a.PictureFillSymbol=q;a.PictureMarkerSymbol=r;a.PointSymbol3D=t;a.PolygonSymbol3D=u;a.SimpleFillSymbol=v;a.SimpleLineSymbol=w;a.SimpleMarkerSymbol=
x;a.BaseSymbol=y;a.BaseSymbol3D=z;a.BaseSymbol3DLayer=A;a.TextSymbol=B;a.TextSymbol3DLayer=C;a.WebStyleSymbol=D;a.LineCallout3D=E;a.LineCallout3DBorder=F;a.Symbol3DVerticalOffset=G.Symbol3DVerticalOffset;a.fromJSON=H.fromJSON;a.isSymbol=function(I){return I instanceof a.BaseSymbol};a.isSymbol2D=function(a){if(!a)return!1;switch(a.type){case "picture-fill":case "picture-marker":case "simple-fill":case "simple-line":case "simple-marker":case "text":return!0;default:return!1}};a.isSymbol3D=function(a){if(!a)return!1;
switch(a.type){case "label-3d":case "line-3d":case "mesh-3d":case "point-3d":case "polygon-3d":return!0;default:return!1}}});