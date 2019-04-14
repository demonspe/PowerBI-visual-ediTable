var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){function t(e,t,i){void 0===e&&(e=[]);var r=e;return n(r),t&&(r.identityFields=t),i&&(r.source=i),r}function n(e,t){e.grouped=t?function(){return t}:function(){return i(e)}}function i(e){for(var t,n=[],i=0,r=e.length;r>i;i++){var a=e[i];if(!t||t.identity!==a.identity){if(t={values:[]},a.identity){t.identity=a.identity;var o=a.source;void 0!==o.groupName?t.name=o.groupName:o.displayName&&(t.name=o.displayName)}n.push(t)}t.values.push(a)}return n}e.createValueColumns=t,e.setGrouped=n,e.groupValues=i}(t=e.DataViewTransform||(e.DataViewTransform={}))}(t=e.dataview||(e.dataview={}))}(t=e.utils||(e.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){function t(e,t){if(!e||!e.length)return-1;var n=e[0];if(n.values&&n.values.length>0)for(var r=0,a=n.values.length;a>r;++r){var o=n.values[r];if(o&&o.source&&i(o.source,t))return r}return-1}function n(e,t){if(e&&e.length)for(var n=0,r=e.length;r>n;n++)if(i(e[n].source,t))return n;return-1}function i(e,t){var n=e.roles;return n&&n[t]}function r(e,t){return null!=e&&null!=e.metadata&&e.metadata.columns&&e.metadata.columns.some(function(e){return e.roles&&void 0!==e.roles[t]})}function a(e,t){return e&&e.source&&e.source.roles&&e.source.roles[t]===!0}e.getMeasureIndexOfRole=t,e.getCategoryIndexOfRole=n,e.hasRole=i,e.hasRoleInDataView=r,e.hasRoleInValueColumn=a}(t=e.DataRoleHelper||(e.DataRoleHelper={}))}(t=e.dataview||(e.dataview={}))}(t=e.utils||(e.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){function t(e,t,n){if(!e)return n;var i=e[t];return void 0===i?n:i}function n(e,n,i){var r=t(e,n);return r&&r.solid?r.solid.color:i}e.getValue=t,e.getFillColorByPropertyName=n}(t=e.DataViewObject||(e.DataViewObject={}))}(t=e.dataview||(e.dataview={}))}(t=e.utils||(e.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t;!function(t){function n(t,n,i){return t?e.DataViewObject.getValue(t[n.objectName],n.propertyName,i):i}function i(e,t,n){return e&&e[t]?e[t]:n}function r(e,t,i){var r=n(e,t);return r&&r.solid?r.solid.color:i}function a(e,t,i){var r=n(e,t,i);return r&&r.solid?r.solid.color:void 0===r||null===r||"object"==typeof r&&!r.solid?i:r}t.getValue=n,t.getObject=i,t.getFillColor=r,t.getCommonValue=a}(t=e.DataViewObjects||(e.DataViewObjects={}))}(t=e.dataview||(e.dataview={}))}(t=e.utils||(e.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(t){var n;!function(t){var n;!function(t){var n,i=e.extensibility.utils.dataview.DataRoleHelper;!function(e){function t(e,t,n){if(e.categories&&e.categories.length>0){var r=e.categories[0];return r.source&&i.hasRole(r.source,t)&&i.hasRole(r.source,n)}return!1}function n(e){return void 0!==e.groupName?e.groupName:e.queryName}function r(e){var t=o(e);return null!=t&&t.imageUrl===!0}function a(e){var t=o(e);return null!=t&&t.webUrl===!0}function o(e){return e&&e.type&&e.type.misc}function u(e){return e&&e.metadata&&e.metadata.columns&&e.metadata.columns.length?e.metadata.columns.some(function(e){return r(e)===!0}):!1}e.categoryIsAlsoSeriesRole=t,e.getSeriesName=n,e.isImageUrlColumn=r,e.isWebUrlColumn=a,e.getMiscellaneousTypeDescriptor=o,e.hasImageUrlColumn=u}(n=t.converterHelper||(t.converterHelper={}))}(n=t.dataview||(t.dataview={}))}(n=t.utils||(t.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){var t=function(){function t(){}return t.getDefault=function(){return new this},t.createPropertyIdentifier=function(e,t){return{objectName:e,propertyName:t}},t.parse=function(t){var n,i=this.getDefault();if(!t||!t.metadata||!t.metadata.objects)return i;n=i.getProperties();for(var r in n)for(var a in n[r]){var o=i[r][a];i[r][a]=e.DataViewObjects.getCommonValue(t.metadata.objects,n[r][a],o)}return i},t.isPropertyEnumerable=function(e){return!t.InnumerablePropertyPrefix.test(e)},t.enumerateObjectInstances=function(e,t){var n=e&&e[t.objectName];if(!n)return[];var i={objectName:t.objectName,selector:null,properties:{}};for(var r in n)n.hasOwnProperty(r)&&(i.properties[r]=n[r]);return{instances:[i]}},t.prototype.getProperties=function(){var e=this,n={},i=Object.keys(this);return i.forEach(function(i){if(t.isPropertyEnumerable(i)){var r=Object.keys(e[i]);n[i]={},r.forEach(function(e){t.isPropertyEnumerable(i)&&(n[i][e]=t.createPropertyIdentifier(i,e))})}}),n},t}();t.InnumerablePropertyPrefix=/^_/,e.DataViewObjectsParser=t}(t=e.dataview||(e.dataview={}))}(t=e.utils||(e.utils={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),powerbi;!function(e){var t;!function(t){var n;!function(t){var n;!function(t){"use strict";var n=e.extensibility.utils.dataview.DataViewObjectsParser,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dataPoint=new r,t}return __extends(t,e),t}(n);t.VisualSettings=i;var r=function(){function e(){this.defaultColor="",this.showAllDataPoints=!0,this.fill="",this.fillRule="",this.fontSize=12}return e}();t.dataPointSettings=r}(n=t.ediTableA518F460AA974914B74E6D0FA28C7207||(t.ediTableA518F460AA974914B74E6D0FA28C7207={}))}(n=t.visual||(t.visual={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(e){var t;!function(e){var t;!function(e){"use strict";var t=function(){function e(e){if(this.target=e.element,this.target.style.overflow="auto",this.target.style.backgroundColor="#FFFFFF","undefined"!=typeof document){var t=document.createElement("h3");t.innerHTML="Редактируемая таблица",this.target.appendChild(t);var n=document.createElement("p");n.style.fontSize="11px",n.innerHTML="Столбцы в названии которых встречается 'id' заблокированы для редактирования. Они потребуются в дальнейшем для идентификации записи в базе, которую мы хотим обновить.",this.target.appendChild(n);var i=document.createElement("p");i.style.fontSize="11px",i.innerHTML="upd: Плохая новость: к сожалению реализация Visual не позволяет отправлять внешние http запросы :(",this.target.appendChild(i),this.table=document.createElement("table"),this.target.appendChild(this.table),this.target.appendChild(this.table)}}return e.prototype.update=function(e){var t=this,n=e.dataViews[0];e.viewport.height,e.viewport.width;this.target.removeChild(this.table),this.table=document.createElement("table"),this.table.classList.add("table");var i,r=document.createElement("tr");if("undefined"!=typeof this.table){n.table.columns.forEach(function(e){i=document.createElement("th"),i.innerHTML=e.displayName,r.appendChild(i)}),this.table.appendChild(r);var a;n.table.rows.forEach(function(e){var o=0;r=document.createElement("tr"),e.forEach(function(e){i=document.createElement("td"),-1===n.table.columns[o].displayName.search(/id/i)?(a=document.createElement("input"),a.classList.add("form-control"),a.type="text",a.value=e.toString(),a.onchange=function(e){alert("\nВы изменили поле.\nПо событию нужно отправлять запрос в базу для обнолвления данных.\nНо увы эти запросы не срабатывают :(\n                                "),fetch("https://api.ipify.org?format=json").then(function(e){return e.json()}).then(function(e){return alert(e.ip)});var t=new XMLHttpRequest;t.open("GET","https://api.ipify.org?format=json",!0),t.send(),t.onreadystatechange=function(){4==t.readyState&&alert("end")}},i.appendChild(a)):i.innerHTML=e.toString(),o++,r.appendChild(i)}),t.table.appendChild(r)})}this.target.appendChild(this.table)},e}();e.Visual=t}(t=e.ediTableA518F460AA974914B74E6D0FA28C7207||(e.ediTableA518F460AA974914B74E6D0FA28C7207={}))}(t=e.visual||(e.visual={}))}(t=e.extensibility||(e.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(e){var t;!function(t){var n;!function(t){t.ediTableA518F460AA974914B74E6D0FA28C7207={name:"ediTableA518F460AA974914B74E6D0FA28C7207",displayName:"EdiTable","class":"Visual",version:"1.0.0",apiVersion:"2.3.0",create:function(t){return new e.extensibility.visual.ediTableA518F460AA974914B74E6D0FA28C7207.Visual(t)},custom:!0}}(n=t.plugins||(t.plugins={}))}(t=e.visuals||(e.visuals={}))}(powerbi||(powerbi={}));