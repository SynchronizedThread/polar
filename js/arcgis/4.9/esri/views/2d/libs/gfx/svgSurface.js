// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/dom","./Surface","./svg"],function(h,c,f,g,d){Object.defineProperty(c,"__esModule",{value:!0});c.createSurface=function(c,b,e){var a=new g.default;a.rawNode=d._createElementNS(d.xmlns.svg,"svg");a.rawNode.setAttribute("overflow","hidden");b&&a.rawNode.setAttribute("width",0>b?0:b);e&&a.rawNode.setAttribute("height",0>e?0:e);b=d._createElementNS(d.xmlns.svg,"defs");a.rawNode.appendChild(b);a.defNode=b;a._parent=f.byId(c);a._parent.appendChild(a.rawNode);return a}});