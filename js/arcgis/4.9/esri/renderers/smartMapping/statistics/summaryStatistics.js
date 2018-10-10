// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/promiseUtils ../../../layers/support/fieldUtils ./support/utils ../support/utils".split(" "),function(q,r,m,c,k,d,f){function n(b){if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))return c.reject(d.createError("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(b.valueExpression&&!b.sqlExpression&&!b.view)return c.reject(d.createError("summary-statistics:missing-parameters",
"View is required when 'valueExpression' is specified"));var a=m({},b);a.normalizationType=f.getNormalizationType(a);b=[0,1,2,3];var e=f.createLayerAdapter(a.layer,b);return(a.layer=e)?e.load().then(function(){var b=a.field,l=a.normalizationType,g=a.valueExpression||a.sqlExpression,b=b?e.getField(b):null,h=f.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(h=d.verifyBasicFieldValidity(e,h,"summary-statistics:invalid-parameters"))return c.reject(h);
if(b){if(g=d.verifyFieldType(e,b,"summary-statistics:invalid-parameters",p))return c.reject(g);if(k.isDateField(b)&&l)return c.reject(d.createError("summary-statistics:invalid-parameters","Normalization is not allowed for date fields"))}else if(g&&l)return c.reject(d.createError("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified"));return a}):c.reject(d.createError("summary-statistics:invalid-parameters","'layer' must be one of these types: "+
f.getLayerTypeLabels(b).join(", ")))}var p=k.numericTypes.concat(["date"]);return function(b){return n(b).then(function(a){return a.layer.summaryStatistics({field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:a.normalizationType,normalizationField:a.normalizationField,minValue:a.minValue,maxValue:a.maxValue,features:a.features,view:a.view})})}});