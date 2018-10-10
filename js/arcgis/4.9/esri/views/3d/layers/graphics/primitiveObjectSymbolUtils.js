// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../geometry/support/aaBoundingBox","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil"],function(m,c,e,k,a){Object.defineProperty(c,"__esModule",{value:!0});var f=e.fromValues(-.5,-.5,-.5,.5,.5,.5),g=e.fromValues(-.5,-.5,0,.5,.5,1),l=e.fromValues(-.5,-.5,0,.5,.5,.5);c.isValidPrimitive=function(a){switch(a){case "sphere":case "cube":case "diamond":case "cylinder":case "cone":case "inverted-cone":case "tetrahedron":return!0}return!1};c.primitiveBoundingBox=
function(a){switch(a){case "sphere":case "cube":case "diamond":return f;case "cylinder":case "cone":case "inverted-cone":return g;case "tetrahedron":return l}};c.primitiveGeometryData=function(c){switch(c){case "sphere":return a.createPolySphereGeometry(.5,2,!0);case "cube":return a.createBoxGeometry(1);case "cylinder":return a.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case "cone":return a.cgToGIS(a.createConeGeometry(1,.5,15,!1));case "inverted-cone":return a.cgToGIS(a.createConeGeometry(1,
.5,15,!0));case "tetrahedron":return a.cgToGIS(a.createTetrahedronGeometry(1));case "diamond":return a.cgToGIS(a.createDiamondGeometry(1))}};c.primitiveLodResources=function(c,e,f){var d=function(b,c,d){void 0===d&&(d=!1);return{levels:b.map(function(b,g){var h=c(b.tesselation);d&&a.cgToGIS(h);return{components:[{geometry:new k(h,f+("_lod"+g)),material:e}],faceCount:h.indexCount/3,minScreenSpaceRadius:b.minScreenSpaceRadius}})}};switch(c){case "sphere":return d([{tesselation:0,minScreenSpaceRadius:0},
{tesselation:1,minScreenSpaceRadius:5},{tesselation:2,minScreenSpaceRadius:15}],function(b){return a.createPolySphereGeometry(.5,b,!0)});case "cube":return d([{tesselation:0,minScreenSpaceRadius:0}],function(b){return a.createBoxGeometry(1)});case "cone":return d([{tesselation:4,minScreenSpaceRadius:0},{tesselation:8,minScreenSpaceRadius:10},{tesselation:16,minScreenSpaceRadius:20}],function(b){return a.createConeGeometry(1,.5,b,!1)},!0);case "inverted-cone":return d([{tesselation:4,minScreenSpaceRadius:0},
{tesselation:8,minScreenSpaceRadius:10},{tesselation:16,minScreenSpaceRadius:20}],function(b){return a.createConeGeometry(1,.5,b,!0)},!0);case "cylinder":return d([{tesselation:4,minScreenSpaceRadius:0},{tesselation:8,minScreenSpaceRadius:10},{tesselation:32,minScreenSpaceRadius:20}],function(b){return a.createCylinderGeometry(1,.5,b,[0,0,1],[0,0,.5])});case "tetrahedron":return d([{tesselation:0,minScreenSpaceRadius:0}],function(b){return a.createTetrahedronGeometry(1)},!0);case "diamond":return d([{tesselation:0,
minScreenSpaceRadius:0}],function(b){return a.createDiamondGeometry(1)},!0)}}});