(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Guitar.stories.tsx":"./src/stories/Guitar.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Guitar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"C",(function(){return C})),__webpack_require__.d(__webpack_exports__,"A",(function(){return A})),__webpack_require__.d(__webpack_exports__,"G",(function(){return G})),__webpack_require__.d(__webpack_exports__,"E",(function(){return E})),__webpack_require__.d(__webpack_exports__,"D",(function(){return D}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.fill.js");var times=function times(n,cb){return Array(n).fill(0).map((function(_,i){return cb(i)}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","numberOfFrets","numberOfStrings"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Fretboard_Border=function Border(){return Object(jsx_runtime.jsx)("rect",{fill:"none",width:"100%",height:"100%",strokeWidth:"2",stroke:"black"})};Fretboard_Border.displayName="Border";var Fretboard_Fret=function Fret(_ref){var y=_ref.y;return Object(jsx_runtime.jsx)("line",{x1:"0",x2:"100%",y1:y,y2:y,stroke:"black",strokeWidth:"2"})};Fretboard_Fret.displayName="Fret";var Fretboard_String=function String(_ref2){var x=_ref2.x;return Object(jsx_runtime.jsx)("line",{x1:x,x2:x,y1:"0",y2:"100%",stroke:"black",strokeWidth:"2"})};Fretboard_String.displayName="String";var Fretboard_Fretboard=function Fretboard(_ref3){var children=_ref3.children,numberOfFrets=_ref3.numberOfFrets,numberOfStrings=_ref3.numberOfStrings,props=_objectWithoutProperties(_ref3,_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:290,overflow:"visible"},props,{children:[Object(jsx_runtime.jsx)(Fretboard_Border,{}),times(numberOfFrets-1,(function(i){return Object(jsx_runtime.jsx)(Fretboard_Fret,{y:(i+1)*(100/numberOfFrets)+"%"},i)})),times(numberOfStrings-2,(function(i){return Object(jsx_runtime.jsx)(Fretboard_String,{x:(i+1)*(100/(numberOfStrings-1))+"%"},i)})),children]}))};Fretboard_Fretboard.displayName="Fretboard";var lib_Fretboard=Fretboard_Fretboard;try{Fretboard_Fretboard.displayName="Fretboard",Fretboard_Fretboard.__docgenInfo={description:"",displayName:"Fretboard",props:{y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},numberOfFrets:{defaultValue:null,description:"",name:"numberOfFrets",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string | number"}},numberOfStrings:{defaultValue:null,description:"",name:"numberOfStrings",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Fretboard.tsx#Fretboard"]={docgenInfo:Fretboard_Fretboard.__docgenInfo,name:"Fretboard",path:"src/lib/Fretboard.tsx#Fretboard"})}catch(__react_docgen_typescript_loader_error){}var Text_excluded=["children","fontSize"];function Text_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Text_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Text_Text=function Text(_ref){var children=_ref.children,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?18:_ref$fontSize,props=Text_objectWithoutProperties(_ref,Text_excluded);return Object(jsx_runtime.jsx)("text",Object.assign({dy:"0.35em",textAnchor:"middle",fontSize:fontSize,fontFamily:"Arial, Helvetica, sans-serif"},props,{children:children}))};Text_Text.displayName="Text";var lib_Text=Text_Text;try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{fontSize:{defaultValue:{value:"18"},description:"",name:"fontSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/lib/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var BarredNote_BarredNote=function BarredNote(_ref){var bar=_ref.bar,note=_ref.note,x=_ref.x-18,y=_ref.y-18,width=_ref.stringSpacing*(bar-1)+36;return note.text?Object(jsx_runtime.jsxs)("svg",{x:x,y:y,width:width,children:[Object(jsx_runtime.jsx)("rect",{width:"100%",rx:18,ry:18,height:36,fillOpacity:note.opacity,fill:note.color||"black"}),Object(jsx_runtime.jsx)(lib_Text,{x:"50%",y:18,fill:note.textColor||"white",children:note.text})]}):Object(jsx_runtime.jsx)("rect",{x:x,y:y,width:width,rx:18,ry:18,height:36,fillOpacity:note.opacity,fill:note.color||"black"})};BarredNote_BarredNote.displayName="BarredNote";var lib_BarredNote=BarredNote_BarredNote;try{BarredNote_BarredNote.displayName="BarredNote",BarredNote_BarredNote.__docgenInfo={description:"",displayName:"BarredNote",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},note:{defaultValue:null,description:"",name:"note",required:!0,type:{name:"Note"}},bar:{defaultValue:null,description:"",name:"bar",required:!0,type:{name:"number"}},stringSpacing:{defaultValue:null,description:"",name:"stringSpacing",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/BarredNote.tsx#BarredNote"]={docgenInfo:BarredNote_BarredNote.__docgenInfo,name:"BarredNote",path:"src/lib/BarredNote.tsx#BarredNote"})}catch(__react_docgen_typescript_loader_error){}var MutedNote_MutedNote=function MutedNote(_ref){var x=_ref.x;return Object(jsx_runtime.jsxs)("svg",{x:x-17,y:-42.5,children:[Object(jsx_runtime.jsx)("line",{x1:"0",y1:"0",stroke:"black",strokeWidth:"2",y2:34,x2:34}),Object(jsx_runtime.jsx)("line",{y1:"0",x2:"0",stroke:"black",strokeWidth:"2",y2:34,x1:34})]})};MutedNote_MutedNote.displayName="MutedNote";var lib_MutedNote=MutedNote_MutedNote;try{MutedNote_MutedNote.displayName="MutedNote",MutedNote_MutedNote.__docgenInfo={description:"",displayName:"MutedNote",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/MutedNote.tsx#MutedNote"]={docgenInfo:MutedNote_MutedNote.__docgenInfo,name:"MutedNote",path:"src/lib/MutedNote.tsx#MutedNote"})}catch(__react_docgen_typescript_loader_error){}var SimpleNote_excluded=["x","y","note"];function SimpleNote_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function SimpleNote_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SimpleNote_SimpleNote=function SimpleNote(_ref){var x=_ref.x,y=_ref.y,note=_ref.note,props=SimpleNote_objectWithoutProperties(_ref,SimpleNote_excluded);return note.text?Object(jsx_runtime.jsxs)("svg",{x:x,y:y,overflow:"visible",children:[Object(jsx_runtime.jsx)("circle",Object.assign({r:18,fill:note.color||"black"},props)),Object(jsx_runtime.jsx)(lib_Text,{fontFamily:"Arial, Helvetica, sans-serif",fill:note.textColor||"white",children:note.text})]}):Object(jsx_runtime.jsx)("circle",Object.assign({cx:x,cy:y,r:18,fill:note.color||"black"},props))};SimpleNote_SimpleNote.displayName="SimpleNote";var lib_SimpleNote=SimpleNote_SimpleNote;try{SimpleNote_SimpleNote.displayName="SimpleNote",SimpleNote_SimpleNote.__docgenInfo={description:"",displayName:"SimpleNote",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}},note:{defaultValue:null,description:"",name:"note",required:!0,type:{name:"Note"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/SimpleNote.tsx#SimpleNote"]={docgenInfo:SimpleNote_SimpleNote.__docgenInfo,name:"SimpleNote",path:"src/lib/SimpleNote.tsx#SimpleNote"})}catch(__react_docgen_typescript_loader_error){}var OpenNote_OpenNote=function OpenNote(_ref){var x=_ref.x,note=_ref.note;return Object(jsx_runtime.jsx)(lib_SimpleNote,{x:x,fill:"none",strokeWidth:"2",r:17,stroke:note.color||"black",y:-25.5,note:Object.assign({},note,{textColor:note.textColor||"black"})})};OpenNote_OpenNote.displayName="OpenNote";var lib_OpenNote=OpenNote_OpenNote;try{OpenNote_OpenNote.displayName="OpenNote",OpenNote_OpenNote.__docgenInfo={description:"",displayName:"OpenNote",props:{x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},note:{defaultValue:null,description:"",name:"note",required:!0,type:{name:"Note"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/OpenNote.tsx#OpenNote"]={docgenInfo:OpenNote_OpenNote.__docgenInfo,name:"OpenNote",path:"src/lib/OpenNote.tsx#OpenNote"})}catch(__react_docgen_typescript_loader_error){}var NoteFactory_NoteFactory=function NoteFactory(_ref){var note=_ref.note,fretSpacing=_ref.fretSpacing,stringSpacing=_ref.stringSpacing,x=(note.string-1)*stringSpacing;if(note.muted)return Object(jsx_runtime.jsx)(lib_MutedNote,{x:x});if(!note.fret)return Object(jsx_runtime.jsx)(lib_OpenNote,{x:x,note:note});var y=fretSpacing*note.fret-fretSpacing/2;return note.bar&&note.bar>1?Object(jsx_runtime.jsx)(lib_BarredNote,{x:x,y:y,note:note,bar:note.bar,stringSpacing:stringSpacing}):Object(jsx_runtime.jsx)(lib_SimpleNote,{x:x,y:y,note:note})};NoteFactory_NoteFactory.displayName="NoteFactory";var lib_NoteFactory=NoteFactory_NoteFactory;try{NoteFactory_NoteFactory.displayName="NoteFactory",NoteFactory_NoteFactory.__docgenInfo={description:"",displayName:"NoteFactory",props:{note:{defaultValue:null,description:"",name:"note",required:!0,type:{name:"Note"}},fretSpacing:{defaultValue:null,description:"",name:"fretSpacing",required:!0,type:{name:"number"}},stringSpacing:{defaultValue:null,description:"",name:"stringSpacing",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/NoteFactory.tsx#NoteFactory"]={docgenInfo:NoteFactory_NoteFactory.__docgenInfo,name:"NoteFactory",path:"src/lib/NoteFactory.tsx#NoteFactory"})}catch(__react_docgen_typescript_loader_error){}var ChordSVG_excluded=["title","notes","watermark","startAtFret","numberOfFrets","numberOfStrings"];function ChordSVG_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function ChordSVG_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ChordSVG_ChordSVG=function ChordSVG(_ref){var title=_ref.title,notes=_ref.notes,watermark=_ref.watermark,startAtFret=_ref.startAtFret,_ref$numberOfFrets=_ref.numberOfFrets,numberOfFrets=void 0===_ref$numberOfFrets?5:_ref$numberOfFrets,_ref$numberOfStrings=_ref.numberOfStrings,numberOfStrings=void 0===_ref$numberOfStrings?6:_ref$numberOfStrings,props=ChordSVG_objectWithoutProperties(_ref,ChordSVG_excluded),top=(notes.find((function(n){return!n.fret}))?54:0)+(title?30:0)+20,bottom=20+(watermark?22:0);console.log(86);var fretboardH=86*numberOfFrets,fretSpacing=fretboardH/numberOfFrets,stringSpacing=290/(numberOfStrings-1),viewBoxH=top+fretboardH+bottom;return Object(jsx_runtime.jsxs)("svg",Object.assign({viewBox:"0 0 500 "+viewBoxH,xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},props,{children:[title&&Object(jsx_runtime.jsx)(lib_Text,{x:"50%",y:20,fontSize:30,children:title}),Object(jsx_runtime.jsxs)(lib_Fretboard,{x:"100",y:top,height:fretboardH,numberOfFrets:numberOfFrets,numberOfStrings:numberOfStrings,children:[startAtFret&&Object(jsx_runtime.jsx)(lib_Text,{x:-54,y:fretSpacing/2,fontSize:30,children:startAtFret+"fr"}),notes.map((function(note,i){return Object(jsx_runtime.jsx)(lib_NoteFactory,{note:note,fretSpacing:fretSpacing,stringSpacing:stringSpacing},i)}))]}),watermark&&Object(jsx_runtime.jsx)("svg",{x:"50%",overflow:"visible",height:22,y:top+fretboardH+22,children:Object(jsx_runtime.jsx)(lib_Text,{fill:"gray",fontSize:22,children:watermark})})]}))};ChordSVG_ChordSVG.displayName="ChordSVG";var lib_ChordSVG=ChordSVG_ChordSVG;try{ChordSVG_ChordSVG.displayName="ChordSVG",ChordSVG_ChordSVG.__docgenInfo={description:"",displayName:"ChordSVG",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},watermark:{defaultValue:null,description:"",name:"watermark",required:!1,type:{name:"string"}},startAtFret:{defaultValue:null,description:"",name:"startAtFret",required:!1,type:{name:"number"}},numberOfFrets:{defaultValue:{value:"5"},description:"",name:"numberOfFrets",required:!1,type:{name:"number"}},numberOfStrings:{defaultValue:{value:"6"},description:"",name:"numberOfStrings",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/ChordSVG.tsx#ChordSVG"]={docgenInfo:ChordSVG_ChordSVG.__docgenInfo,name:"ChordSVG",path:"src/lib/ChordSVG.tsx#ChordSVG"})}catch(__react_docgen_typescript_loader_error){}try{lib.displayName="lib",lib.__docgenInfo={description:"",displayName:"lib",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},watermark:{defaultValue:null,description:"",name:"watermark",required:!1,type:{name:"string"}},startAtFret:{defaultValue:null,description:"",name:"startAtFret",required:!1,type:{name:"number"}},numberOfFrets:{defaultValue:{value:"5"},description:"",name:"numberOfFrets",required:!1,type:{name:"number"}},numberOfStrings:{defaultValue:{value:"6"},description:"",name:"numberOfStrings",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/index.tsx#lib"]={docgenInfo:lib.__docgenInfo,name:"lib",path:"src/lib/index.tsx#lib"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Guitar/C Major",component:lib_ChordSVG};var Guitar_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(lib_ChordSVG,Object.assign({},args))};Guitar_stories_Template.displayName="Template";var C=Guitar_stories_Template.bind({});C.args={title:"C Major - C Shape",numberOfFrets:4,watermark:"Created with chord.love",notes:[{string:1,muted:!0},{fret:3,string:2,color:"red",text:"3"},{fret:2,string:3,text:"2"},{string:4},{fret:1,string:5,color:"red",text:"1"},{string:6}]};var A=Guitar_stories_Template.bind({});A.args={title:"C Major - A Shape",numberOfFrets:4,startAtFret:3,watermark:"Created with chord.love",notes:[{string:1,muted:!0},{fret:1,string:2,text:"1"},{fret:3,string:3,bar:3,text:"3"},{string:6,muted:!0}]};var G=Guitar_stories_Template.bind({});G.args={title:"C Major - G Shape",numberOfFrets:5,startAtFret:5,watermark:"Created with chord.love",notes:[{string:1,muted:!0},{string:2,muted:!0},{fret:1,string:3,bar:4,color:"gray",opacity:.5},{fret:1,string:3,text:"1"},{fret:1,string:4,text:"1",color:"red"},{fret:1,string:5,text:"1"},{fret:4,string:6,text:"4",color:"red"}]};var E=Guitar_stories_Template.bind({});E.args={title:"C Major - E Shape",numberOfFrets:4,startAtFret:8,watermark:"Created with chord.love",notes:[{fret:1,string:1,bar:6,color:"gray",opacity:.5},{fret:1,string:1,text:"1",color:"red"},{fret:3,string:2,text:"3"},{fret:3,string:3,text:"4",color:"red"},{fret:2,string:4,text:"2"},{fret:1,string:5,text:"1"},{fret:1,string:6,text:"1",color:"red"}]};var D=Guitar_stories_Template.bind({});D.args={title:"C Major - D Shape",numberOfFrets:5,startAtFret:10,watermark:"Created with chord.love",notes:[{fret:3,string:1,text:"2"},{string:2,muted:!0},{fret:1,string:3,text:"1",color:"red"},{fret:3,string:4,text:"3"},{fret:4,string:5,text:"4",color:"red"},{string:6,muted:!0}]},C.parameters=Object.assign({storySource:{source:"(args) => (\n  <ChordSVG {...args} />\n)"}},C.parameters),A.parameters=Object.assign({storySource:{source:"(args) => (\n  <ChordSVG {...args} />\n)"}},A.parameters),G.parameters=Object.assign({storySource:{source:"(args) => (\n  <ChordSVG {...args} />\n)"}},G.parameters),E.parameters=Object.assign({storySource:{source:"(args) => (\n  <ChordSVG {...args} />\n)"}},E.parameters),D.parameters=Object.assign({storySource:{source:"(args) => (\n  <ChordSVG {...args} />\n)"}},D.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);