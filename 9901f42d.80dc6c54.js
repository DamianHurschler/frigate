(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(98)),i={id:"false_positives",title:"Reducing false positives"},l={unversionedId:"configuration/false_positives",id:"configuration/false_positives",isDocsHomePage:!1,title:"Reducing false positives",description:"Tune your object filters to adjust false positives: minarea, maxarea, min_score, threshold.",source:"@site/docs/configuration/false_positives.md",slug:"/configuration/false_positives",permalink:"/frigate/configuration/false_positives",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/configuration/false_positives.md",version:"current",sidebar:"docs",previous:{title:"Detectors",permalink:"/frigate/configuration/detectors"},next:{title:"Default available objects",permalink:"/frigate/configuration/objects"}},o=[],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Tune your object filters to adjust false positives: ",Object(c.b)("inlineCode",{parentName:"p"},"min_area"),", ",Object(c.b)("inlineCode",{parentName:"p"},"max_area"),", ",Object(c.b)("inlineCode",{parentName:"p"},"min_score"),", ",Object(c.b)("inlineCode",{parentName:"p"},"threshold"),"."),Object(c.b)("p",null,"For object filters in your configuration, any single detection below ",Object(c.b)("inlineCode",{parentName:"p"},"min_score")," will be ignored as a false positive. ",Object(c.b)("inlineCode",{parentName:"p"},"threshold")," is based on the median of the history of scores (padded to 3 values) for a tracked object. Consider the following frames when ",Object(c.b)("inlineCode",{parentName:"p"},"min_score")," is set to 0.6 and threshold is set to 0.85:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Frame"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Current Score"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Score History"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Computed Score"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Detected Object"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.0, 0, 0.7"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.55"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.0, 0.7, 0.0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.85"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7, 0.0, 0.85"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.90"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7, 0.85, 0.95, 0.90"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.875"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.88"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7, 0.85, 0.95, 0.90, 0.88"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.88"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.95"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.7, 0.85, 0.95, 0.90, 0.88, 0.95"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.89"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("p",null,"In frame 2, the score is below the ",Object(c.b)("inlineCode",{parentName:"p"},"min_score")," value, so frigate ignores it and it becomes a 0.0. The computed score is the median of the score history (padding to at least 3 values), and only when that computed score crosses the ",Object(c.b)("inlineCode",{parentName:"p"},"threshold")," is the object marked as a true positive. That happens in frame 4 in the example."))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,j=s["".concat(i,".").concat(O)]||s[O]||u[O]||c;return n?r.a.createElement(j,l(l({ref:t},b),{},{components:n})):r.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);