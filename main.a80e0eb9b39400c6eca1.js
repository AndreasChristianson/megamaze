(self.webpackChunkstatic_site_template=self.webpackChunkstatic_site_template||[]).push([[179],{419:(e,t,r)=>{"use strict";r(794);var n=r(935),o=r(294),a=r(163),i=1e3,c=1e3,l=function(e){return o.createElement(o.Fragment,null,new Array(31).fill(!0).map((function(e,t){return o.createElement("line",{key:t,y1:t/30*i,y2:t/30*i,x1:"0%",x2:"100%",stroke:"#777"})})),new Array(31).fill(!0).map((function(e,t){return o.createElement("line",{key:t,x1:t/30*c,x2:t/30*c,y1:"0%",y2:"100%",stroke:"#999"})})))},u=function(e){var t=e.gameState,r=t.page,n=t.score,a=e.changeState;return o.createElement(o.Fragment,null,o.createElement(r,{changePage:function(e){return a("page",e)},incrementScore:function(e){return a("score",n+e)}}))};function f(){var e,t,r=(e=['\n  * {\n    border: 0;\n    padding: 0;\n    margin: 0;\n    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;\n  }\n  \n  body{\n    background-color: #aaa;\n    @media (prefers-color-scheme: dark) {\n      background-color: #888;\n    }\n  }\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return r},r}var s=(0,a.vJ)(f()),h=r(427),m=a.ZP.svg.attrs({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(i," ").concat(c)}).withConfig({displayName:"Background__Svg",componentId:"sc-1ja7kg2-0"})(["height:100%;width:100%;"]),y=function(e){return o.createElement(m,null,o.createElement(l,null),o.createElement("image",{href:e.backgroundImage,height:i,width:c}),e.children)};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=function(e){var t=e.innerElement,r=e.width,n=void 0===r?1:r,a=e.height,l=void 0===a?1:a,u=e.x,f=e.y,s=e.children,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["innerElement","width","height","x","y","children"]),m=f*c/30,y="translate(".concat(u*i/30," ").concat(m,")"),g="".concat(n*c/30,"px"),d="".concat(l*i/30,"px"),b=t;return o.createElement("g",{transform:y},o.createElement(b,p({width:g,height:d},h),s))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b=a.ZP.rect.attrs((function(){return{rx:"1em",ry:"1em"}})).withConfig({displayName:"Text__Rect",componentId:"sc-162jir1-0"})([""]),v=(0,a.ZP)(b).attrs((function(e){return{fill:e.shadingColor,width:"100%",height:"100%"}})).withConfig({displayName:"Text__Shading",componentId:"sc-162jir1-1"})(["fill-opacity:",";"],(function(e){return e.shadingOpacity})),w=(0,a.ZP)(b).attrs((function(e){return{fill:"none","stroke-width":1,stroke:e.borderColor}})).withConfig({displayName:"Text__Border",componentId:"sc-162jir1-2"})(["stroke-width:1;"]),O=a.ZP.text.attrs((function(){return{x:"50%",y:"50%"}})).withConfig({displayName:"Text__SvgText",componentId:"sc-162jir1-3"})(["dominant-baseline:middle;text-anchor:middle;"]);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j=(0,a.ZP)((function(e){var t=e.children,r=e.width,n=e.height,a=e.x,i=e.y,c=e.onClick,l=e.borderColor,u=e.shadingColor,f=e.shadingOpacity,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","width","height","x","y","onClick","borderColor","shadingColor","shadingOpacity"]);return o.createElement(o.Fragment,null,o.createElement(g,{y:i,x:a,width:r,height:n,innerElement:"svg",onClick:c},u?o.createElement(v,d({shadingColor:u,shadingOpacity:f},s)):null,t),l?o.createElement(g,d({y:i,x:a,width:r,height:n,innerElement:w,borderColor:l},s)):null)})).withConfig({displayName:"Button__StyledText",componentId:"sc-1wh5wgx-0"})(["cursor:pointer;"]),E=function(e){var t=e.text,r=e.children,n=e.width,a=e.height,i=e.x,c=e.y,l=e.onClick,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["text","children","width","height","x","y","onClick"]);return o.createElement(j,x({width:n,height:a,y:c,x:i,shadingColor:"#333333",shadingOpacity:"0.3",borderColor:"black",onClick:l},u),t?o.createElement(O,null,t):o.createElement(o.Fragment,null,r))},k=r(454),P=(0,a.ZP)(O).withConfig({displayName:"Controls__Paragraph",componentId:"l9yrre-0"})(["font-size:2em;"]),C=(0,a.ZP)(P).withConfig({displayName:"Controls__Header",componentId:"l9yrre-1"})(["font-size:2em;text-decoration:underline;"]),S=function(e){var t=e.changePage;return o.createElement(y,{backgroundImage:k},o.createElement(E,{onClick:function(){return t(M)},x:2,y:2,width:26,height:26,shadingOpacity:"0.9"},o.createElement(C,{transform:"translate(0 -200)"},"Movement"),o.createElement(P,{transform:"translate(0 -100)"},"WASD, QWES, HJKL and the arrow keys"),o.createElement(C,{transform:"translate(0 100)"},"Shoot"),o.createElement(P,{transform:"translate(0 200)"},"left click")))},I=r(675),_=r(550),A=r(172);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(0,a.ZP)(g).withConfig({displayName:"Vim__VimDisplay",componentId:"sc-1e60oua-0"})(["background-image:url(",");background-size:100% 100%;"],_);var T=function(e){var t,r,n=e.x,a=e.y,i=(t=(0,o.useState)({x:n,y:a}),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],l=i[1],u=function(e,t,r){return Math.min(Math.max(e,t),r)},f=function(e,t){return l((function(r){var n=r.x,o=r.y;return{x:u(e+n,0,29),y:u(t+o,0,29)}}))};return(0,A.y)("Up, w, k",(function(){return f(0,-1)})),(0,A.y)("Down, s, j",(function(){return f(0,1)})),(0,A.y)("Left, q, a, h",(function(){return f(-1,0)})),(0,A.y)("Right, d, e, l",(function(){return f(1,0)})),o.createElement(g,N({},c,{innerElement:"svg"}),o.createElement("image",{href:_,height:"100%",width:"100%"}))},D=function(e){return e.changePage,o.createElement(y,{backgroundImage:I},o.createElement(T,{x:25,y:25}))},M=function(e){var t=e.changePage;return o.createElement(y,{backgroundImage:h},o.createElement(E,{onClick:function(){return t(S)},x:10,y:25,width:4,height:2,text:"Controls"}),o.createElement(E,{onClick:function(){return t(D)},x:18,y:25,width:4,height:2,text:"Play Game!"}))};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=a.ZP.div.withConfig({displayName:"MainPage__PageContainer",componentId:"sc-2if5lv-0"})(["position:absolute;top:50%;left:50%;max-width:1000px;max-height:1000px;width:100%;height:100%;transform:translate(-50%,-50%);"]),J=function(){var e,t,r=(e=(0,o.useState)({page:M,score:0}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],a=r[1];return o.createElement(U,null,o.createElement(s,null),o.createElement(u,{gameState:n,changeState:function(e,t){a((function(r){return B(B({},r),{},F({},e,t))}))}}))};n.render(o.createElement(J,null),document.getElementById("root"))},675:(e,t,r)=>{"use strict";e.exports=r.p+"c4ee33e31ef76369f17a.webp"},454:(e,t,r)=>{"use strict";e.exports=r.p+"0cc6f8247c5e0d51c2a9.webp"},427:(e,t,r)=>{"use strict";e.exports=r.p+"d57eb5fa0317d0c244fb.webp"},550:(e,t,r)=>{"use strict";e.exports=r.p+"337a95e20939ecb91fce.webp"}},0,[[419,666,216]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS10ZW1wbGF0ZS8uL3NyYy9jb25zdGFudHMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtdGVtcGxhdGUvLi9zcmMvR2xvYmFsU3R5bGVzLmpzeCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0JhY2tncm91bmQuanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvR3JpZEFsaWduZWQuanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvVGV4dC5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL0NvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL1ZpbS5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtdGVtcGxhdGUvLi9zcmMvcGFnZXMvTGV2ZWwxLmpzeCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9UaXRsZS5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtdGVtcGxhdGUvLi9zcmMvcGFnZXMvTWFpblBhZ2UuanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLXRlbXBsYXRlLy4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJwaXhlbEhlaWdodCIsInBpeGVsV2lkdGgiLCJHcmlkIiwicHJvcHMiLCJBcnJheSIsInJvd3MiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4Iiwia2V5IiwieTEiLCJ5MiIsIngxIiwieDIiLCJzdHJva2UiLCJjb2x1bW5zIiwiTmF2aWdhdGlvbiIsImdhbWVTdGF0ZSIsIlBhZ2UiLCJwYWdlIiwic2NvcmUiLCJjaGFuZ2VTdGF0ZSIsImNoYW5nZVBhZ2UiLCJuZXdQYWdlIiwiaW5jcmVtZW50U2NvcmUiLCJhbW91bnQiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlN2ZyIsInN0eWxlZCIsInhtbG5zIiwidmlld0JveCIsIkJhY2tncm91bmQiLCJocmVmIiwiYmFja2dyb3VuZEltYWdlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjaGlsZHJlbiIsIkdyaWRBbGlnbmVkIiwiaW5uZXJFbGVtZW50IiwieCIsInkiLCJ5UHgiLCJ0cmFuc2xhdGUiLCJ3aWR0aFB4IiwiaGVpZ2h0UHgiLCJJbm5lciIsInRyYW5zZm9ybSIsIlJlY3QiLCJyeCIsInJ5IiwiU2hhZGluZyIsImF0dHJzIiwic2hhZGluZ0NvbG9yIiwic2hhZGluZ09wYWNpdHkiLCJCb3JkZXIiLCJib3JkZXJDb2xvciIsIlN2Z1RleHQiLCJTdHlsZWRUZXh0Iiwib25DbGljayIsIkJ1dHRvbiIsInRleHQiLCJQYXJhZ3JhcGgiLCJIZWFkZXIiLCJDb250cm9scyIsImJhdHRsZSIsIlRpdGxlIiwidmltSW1hZ2UiLCJWaW0iLCJpbml0aWFsWCIsImluaXRpYWxZIiwidXNlU3RhdGUiLCJ2aW1Qb3NpdGlvbiIsInNldFZpbVBvc2l0aW9uIiwiYm91bmQiLCJ2YWx1ZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwiTWF0aCIsIm1pbiIsIm1heCIsImJvdW5kZWRJbmNyZW1lbnQiLCJkZWx0YVgiLCJkZWx0YVkiLCJ1c2VIb3RrZXlzIiwiTGV2ZWwxIiwibGV2ZWwiLCJ0aXRsZSIsIlBhZ2VDb250YWluZXIiLCJNYWluUGFnZSIsInNldEdhbWVTdGF0ZSIsIm9sZCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRF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QUFqQi9ELFdBRXJCLGdCQUFDVSxFQUFELENBQVlFLGdCQUFpQm9ELEdBQzNCLGdCQUFDbEIsRUFBRCxDQUFLNUIsRUFBRyxHQUFJQyxFQUFHLE9DSFJ5QixFQUFRLFNBQUMsR0FBRCxJQUFHNUMsRUFBSCxFQUFHQSxXQUFILE9BQ25CLGdCQUFDVSxFQUFELENBQVlFLGdCQUFpQnFELEdBQzNCLGdCQUFDM0IsRUFBRCxDQUNFRCxRQUFTLGtCQUFNckMsRUFBVzBDLElBQzFCeEIsRUFBRyxHQUNIQyxFQUFHLEdBQ0hMLE1BQU8sRUFDUEQsT0FBUSxFQUNSMEIsS0FBTSxhQUVSLGdCQUFDRCxFQUFELENBQ0VELFFBQVMsa0JBQU1yQyxFQUFXK0QsSUFDMUI3QyxFQUFHLEdBQ0hDLEVBQUcsR0FDSEwsTUFBTyxFQUNQRCxPQUFRLEVBQ1IwQixLQUFNLGlCLGl5QkNsQlosSUFBTTJCLEVBQWdCM0Qsb0JBQUgsa0VBQUdBLENBQUgsa0lBV040RCxFQUFXLFdBQU0sSSxJQUFBLEcsR0FDTWxCLGNBQVMsQ0FDekNwRCxLQUFNK0MsRUFDTjlDLE1BQU8sSSxFQUhtQixFLGt6QkFDckJILEVBRHFCLEtBQ1Z5RSxFQURVLEtBWTVCLE9BQ0UsZ0JBQUNGLEVBQUQsS0FDRSxnQkFBQzlELEVBQUQsTUFDQSxnQkFBQ1YsRUFBRCxDQUFZQyxVQUFXQSxFQUFXSSxZQVZsQixTQUFDWixFQUFLa0UsR0FDeEJlLEdBQWEsU0FBQ0MsR0FBRCxjQUNSQSxHQURRLFFBRVZsRixFQUFNa0UsWUNuQmJpQixTQUFnQixnQkFBQ0gsRUFBRCxNQUFjSSxTQUFTQyxlQUFlLFUiLCJmaWxlIjoibWFpbi5lY2Y1OTIxNjNmZWJjYmFkNjI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByb3dzID0gMzBcbmV4cG9ydCBjb25zdCBjb2x1bW5zID0gMzBcbmV4cG9ydCBjb25zdCBwaXhlbEhlaWdodCA9IDEwMDBcbmV4cG9ydCBjb25zdCBwaXhlbFdpZHRoID0gMTAwMFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbHVtbnMsIHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoLCByb3dzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dyaWQnXG5cbmV4cG9ydCBjb25zdCBHcmlkID0gKHByb3BzKSA9PiAoXG4gIDw+XG4gICAge25ldyBBcnJheShyb3dzICsgMSkuZmlsbCh0cnVlKS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICA8bGluZVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICB5MT17KGluZGV4IC8gcm93cykgKiBwaXhlbEhlaWdodH1cbiAgICAgICAgeTI9eyhpbmRleCAvIHJvd3MpICogcGl4ZWxIZWlnaHR9XG4gICAgICAgIHgxPVwiMCVcIlxuICAgICAgICB4Mj1cIjEwMCVcIlxuICAgICAgICBzdHJva2U9XCIjNzc3XCJcbiAgICAgIC8+XG4gICAgKSl9XG4gICAge25ldyBBcnJheShjb2x1bW5zICsgMSkuZmlsbCh0cnVlKS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICA8bGluZVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICB4MT17KGluZGV4IC8gY29sdW1ucykgKiBwaXhlbFdpZHRofVxuICAgICAgICB4Mj17KGluZGV4IC8gY29sdW1ucykgKiBwaXhlbFdpZHRofVxuICAgICAgICB5MT1cIjAlXCJcbiAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgc3Ryb2tlPVwiIzk5OVwiXG4gICAgICAvPlxuICAgICkpfVxuICA8Lz5cbilcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL0dyaWQnXG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnYW1lU3RhdGU6IHsgcGFnZTogUGFnZSwgc2NvcmUgfSxcbiAgICBjaGFuZ2VTdGF0ZSxcbiAgfSA9IHByb3BzXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobmV3UGFnZSkgPT4gY2hhbmdlU3RhdGUoJ3BhZ2UnLCBuZXdQYWdlKVxuICBjb25zdCBpbmNyZW1lbnRTY29yZSA9IChhbW91bnQpID0+IGNoYW5nZVN0YXRlKCdzY29yZScsIHNjb3JlICsgYW1vdW50KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlIGNoYW5nZVBhZ2U9e2NoYW5nZVBhZ2V9IGluY3JlbWVudFNjb3JlPXtpbmNyZW1lbnRTY29yZX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICAgIH1cbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dyaWQnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9HcmlkJ1xuXG5jb25zdCBTdmcgPSBzdHlsZWQuc3ZnLmF0dHJzKHtcbiAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIHZpZXdCb3g6IGAwIDAgJHtwaXhlbEhlaWdodH0gJHtwaXhlbFdpZHRofWAsXG59KWBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmQgPSAocHJvcHMpID0+IChcbiAgPFN2Zz5cbiAgICA8R3JpZCAvPlxuICAgIDxpbWFnZVxuICAgICAgaHJlZj17cHJvcHMuYmFja2dyb3VuZEltYWdlfVxuICAgICAgaGVpZ2h0PXtwaXhlbEhlaWdodH1cbiAgICAgIHdpZHRoPXtwaXhlbFdpZHRofVxuICAgIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L1N2Zz5cbilcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dyaWQnXG5cbmV4cG9ydCBjb25zdCBHcmlkQWxpZ25lZCA9ICh7XG4gIGlubmVyRWxlbWVudCxcbiAgd2lkdGggPSAxLFxuICBoZWlnaHQgPSAxLFxuICB4LFxuICB5LFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeFB4ID0gKHggKiBwaXhlbEhlaWdodCkgLyByb3dzXG4gIGNvbnN0IHlQeCA9ICh5ICogcGl4ZWxXaWR0aCkgLyBjb2x1bW5zXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoJHt4UHh9ICR7eVB4fSlgXG4gIGNvbnN0IHdpZHRoUHggPSBgJHsod2lkdGggKiBwaXhlbFdpZHRoKSAvIGNvbHVtbnN9cHhgXG4gIGNvbnN0IGhlaWdodFB4ID0gYCR7KGhlaWdodCAqIHBpeGVsSGVpZ2h0KSAvIHJvd3N9cHhgXG4gIGNvbnN0IElubmVyID0gaW5uZXJFbGVtZW50XG4gIHJldHVybiAoXG4gICAgPGcgdHJhbnNmb3JtPXt0cmFuc2xhdGV9PlxuICAgICAgPElubmVyIHdpZHRoPXt3aWR0aFB4fSBoZWlnaHQ9e2hlaWdodFB4fSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0lubmVyPlxuICAgIDwvZz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dyaWQnXG5pbXBvcnQgeyBHcmlkQWxpZ25lZCB9IGZyb20gJy4vR3JpZEFsaWduZWQnXG5cbmNvbnN0IFJlY3QgPSBzdHlsZWQucmVjdC5hdHRycygoKSA9PiAoe1xuICByeDogJzFlbScsXG4gIHJ5OiAnMWVtJyxcbn0pKWBgXG5cbmNvbnN0IFNoYWRpbmcgPSBzdHlsZWQoUmVjdCkuYXR0cnMoKHsgc2hhZGluZ0NvbG9yIH0pID0+ICh7XG4gIGZpbGw6IHNoYWRpbmdDb2xvcixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59KSlgXG4gIGZpbGwtb3BhY2l0eTogJHsoeyBzaGFkaW5nT3BhY2l0eSB9KSA9PiBzaGFkaW5nT3BhY2l0eX07XG5gXG5cbmNvbnN0IEJvcmRlciA9IHN0eWxlZChSZWN0KS5hdHRycygoeyBib3JkZXJDb2xvciB9KSA9PiAoe1xuICBmaWxsOiAnbm9uZScsXG4gICdzdHJva2Utd2lkdGgnOiAxLFxuICBzdHJva2U6IGJvcmRlckNvbG9yLFxufSkpYFxuICBzdHJva2Utd2lkdGg6IDE7XG5gXG5cbmV4cG9ydCBjb25zdCBTdmdUZXh0ID0gc3R5bGVkLnRleHQuYXR0cnMoKCkgPT4gKHtcbiAgeDogJzUwJScsXG4gIHk6ICc1MCUnLFxufSkpYFxuICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuYFxuXG5leHBvcnQgY29uc3QgVGV4dCA9ICh7XG4gIGNoaWxkcmVuLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICB4LFxuICB5LFxuICBvbkNsaWNrLFxuICBib3JkZXJDb2xvcixcbiAgc2hhZGluZ0NvbG9yLFxuICBzaGFkaW5nT3BhY2l0eSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWRBbGlnbmVkXG4gICAgICAgIHk9e3l9XG4gICAgICAgIHg9e3h9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlubmVyRWxlbWVudD1cInN2Z1wiXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHtzaGFkaW5nQ29sb3IgPyAoXG4gICAgICAgICAgPFNoYWRpbmdcbiAgICAgICAgICAgIHNoYWRpbmdDb2xvcj17c2hhZGluZ0NvbG9yfVxuICAgICAgICAgICAgc2hhZGluZ09wYWNpdHk9e3NoYWRpbmdPcGFjaXR5fVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0dyaWRBbGlnbmVkPlxuICAgICAge2JvcmRlckNvbG9yID8gKFxuICAgICAgICA8R3JpZEFsaWduZWRcbiAgICAgICAgICB5PXt5fVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGlubmVyRWxlbWVudD17Qm9yZGVyfVxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFRleHQsIFN2Z1RleHQgfSBmcm9tICcuL1RleHQnXG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dClgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7XG4gIHRleHQsXG4gIGNoaWxkcmVuLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICB4LFxuICB5LFxuICBvbkNsaWNrLFxuICAuLi5wcm9wc1xufSkgPT4gKFxuICA8U3R5bGVkVGV4dFxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICB5PXt5fVxuICAgIHg9e3h9XG4gICAgc2hhZGluZ0NvbG9yPVwiIzMzMzMzM1wiXG4gICAgc2hhZGluZ09wYWNpdHk9XCIwLjNcIlxuICAgIGJvcmRlckNvbG9yPVwiYmxhY2tcIlxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3RleHQgPyA8U3ZnVGV4dD57dGV4dH08L1N2Z1RleHQ+IDogPD57Y2hpbGRyZW59PC8+fVxuICA8L1N0eWxlZFRleHQ+XG4pXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYmF0dGxlIGZyb20gJy4uL2ltYWdlcy90aXRsZS53ZWJwJ1xuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja2dyb3VuZCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL1RpdGxlJ1xuaW1wb3J0IHsgU3ZnVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dCdcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFN2Z1RleHQpYFxuICBmb250LXNpemU6IDJlbTtcbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBhcmFncmFwaClgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRyb2xzID0gKHsgY2hhbmdlUGFnZSB9KSA9PiAoXG4gIDxCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17YmF0dGxlfT5cbiAgICA8QnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKFRpdGxlKX1cbiAgICAgIHg9ezJ9XG4gICAgICB5PXsyfVxuICAgICAgd2lkdGg9ezI2fVxuICAgICAgaGVpZ2h0PXsyNn1cbiAgICAgIHNoYWRpbmdPcGFjaXR5PVwiMC45XCJcbiAgICAgIC8vIHNoYWRpbmdDb2xvcj1cIndoaXRlXCJcbiAgICA+XG4gICAgICA8SGVhZGVyIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0yMDApXCI+eydNb3ZlbWVudCd9PC9IZWFkZXI+XG4gICAgICA8UGFyYWdyYXBoIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0xMDApXCI+XG4gICAgICAgIHsnV0FTRCwgUVdFUywgSEpLTCBhbmQgdGhlIGFycm93IGtleXMnfVxuICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8SGVhZGVyIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDEwMClcIj57J1Nob290J308L0hlYWRlcj5cbiAgICAgIDxQYXJhZ3JhcGggdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMjAwKVwiPnsnbGVmdCBjbGljayd9PC9QYXJhZ3JhcGg+XG4gICAgPC9CdXR0b24+XG4gIDwvQmFja2dyb3VuZD5cbilcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEdyaWRBbGlnbmVkIH0gZnJvbSAnLi9HcmlkQWxpZ25lZCdcbmltcG9ydCB2aW1JbWFnZSBmcm9tICcuLi9pbWFnZXMvdmltLXRpbnkud2VicCdcbmltcG9ydCB7IHVzZUhvdGtleXMgfSBmcm9tICdyZWFjdC1ob3RrZXlzLWhvb2snXG5pbXBvcnQgeyBjb2x1bW5zLCByb3dzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dyaWQnXG5cbmNvbnN0IFZpbURpc3BsYXkgPSBzdHlsZWQoR3JpZEFsaWduZWQpYFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt2aW1JbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFZpbSA9ICh7IHg6IGluaXRpYWxYLCB5OiBpbml0aWFsWSB9KSA9PiB7XG4gIGNvbnN0IFt2aW1Qb3NpdGlvbiwgc2V0VmltUG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgIHg6IGluaXRpYWxYLFxuICAgIHk6IGluaXRpYWxZLFxuICB9KVxuICBjb25zdCBib3VuZCA9ICh2YWx1ZSwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkgPT5cbiAgICBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpXG4gIGNvbnN0IGJvdW5kZWRJbmNyZW1lbnQgPSAoZGVsdGFYLCBkZWx0YVkpID0+XG4gICAgc2V0VmltUG9zaXRpb24oKHsgeCwgeSB9KSA9PiB7XG4gICAgICBjb25zdCBuZXdYID0gYm91bmQoZGVsdGFYICsgeCwgMCwgcm93cyAtIDEpXG4gICAgICBjb25zdCBuZXdZID0gYm91bmQoZGVsdGFZICsgeSwgMCwgY29sdW1ucyAtIDEpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IG5ld1gsXG4gICAgICAgIHk6IG5ld1ksXG4gICAgICB9XG4gICAgfSlcbiAgdXNlSG90a2V5cygnVXAsIHcsIGsnLCAoKSA9PiBib3VuZGVkSW5jcmVtZW50KDAsIC0xKSlcbiAgdXNlSG90a2V5cygnRG93biwgcywgaicsICgpID0+IGJvdW5kZWRJbmNyZW1lbnQoMCwgMSkpXG4gIHVzZUhvdGtleXMoJ0xlZnQsIHEsIGEsIGgnLCAoKSA9PiBib3VuZGVkSW5jcmVtZW50KC0xLCAwKSlcbiAgdXNlSG90a2V5cygnUmlnaHQsIGQsIGUsIGwnLCAoKSA9PiBib3VuZGVkSW5jcmVtZW50KDEsIDApKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRBbGlnbmVkIHsuLi52aW1Qb3NpdGlvbn0gaW5uZXJFbGVtZW50PVwic3ZnXCI+XG4gICAgICA8aW1hZ2UgaHJlZj17dmltSW1hZ2V9IGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiAvPlxuICAgIDwvR3JpZEFsaWduZWQ+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgbGV2ZWwgZnJvbSAnLi4vaW1hZ2VzL2xldmVsLTEud2VicCdcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm91bmQnXG5pbXBvcnQgeyBWaW0gfSBmcm9tICcuLi9jb21wb25lbnRzL1ZpbSdcbmltcG9ydCB7IGNvbHVtbnMsIHJvd3MgfSBmcm9tICcuLi9jb25zdGFudHMvZ3JpZCdcbmltcG9ydCB7IHVzZUhvdGtleXMgfSBmcm9tICdyZWFjdC1ob3RrZXlzLWhvb2snXG5cbmV4cG9ydCBjb25zdCBMZXZlbDEgPSAoeyBjaGFuZ2VQYWdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2xldmVsfT5cbiAgICAgIDxWaW0geD17MjV9IHk9ezI1fSAvPlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHRpdGxlIGZyb20gJy4uL2ltYWdlcy90aXRsZTIud2VicCdcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm91bmQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCB7IENvbnRyb2xzIH0gZnJvbSAnLi9Db250cm9scydcbmltcG9ydCB7IExldmVsMSB9IGZyb20gJy4vTGV2ZWwxJ1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSAoeyBjaGFuZ2VQYWdlIH0pID0+IChcbiAgPEJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXt0aXRsZX0+XG4gICAgPEJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShDb250cm9scyl9XG4gICAgICB4PXsxMH1cbiAgICAgIHk9ezI1fVxuICAgICAgd2lkdGg9ezR9XG4gICAgICBoZWlnaHQ9ezJ9XG4gICAgICB0ZXh0PXsnQ29udHJvbHMnfVxuICAgIC8+XG4gICAgPEJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShMZXZlbDEpfVxuICAgICAgeD17MTh9XG4gICAgICB5PXsyNX1cbiAgICAgIHdpZHRoPXs0fVxuICAgICAgaGVpZ2h0PXsyfVxuICAgICAgdGV4dD17J1BsYXkgR2FtZSEnfVxuICAgIC8+XG4gIDwvQmFja2dyb3VuZD5cbilcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi9HbG9iYWxTdHlsZXMnXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4vVGl0bGUnXG5cbmNvbnN0IFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuYFxuXG5leHBvcnQgY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtnYW1lU3RhdGUsIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgcGFnZTogVGl0bGUsXG4gICAgc2NvcmU6IDAsXG4gIH0pXG4gIGNvbnN0IGNoYW5nZVN0YXRlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKG9sZCkgPT4gKHtcbiAgICAgIC4uLm9sZCxcbiAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICB9KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXI+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8TmF2aWdhdGlvbiBnYW1lU3RhdGU9e2dhbWVTdGF0ZX0gY2hhbmdlU3RhdGU9e2NoYW5nZVN0YXRlfSAvPlxuICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0ICdmb250c291cmNlLW9wZW4tc2FucydcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IE1haW5QYWdlIH0gZnJvbSAnLi9wYWdlcy9NYWluUGFnZSdcblxuUmVhY3RET00ucmVuZGVyKDxNYWluUGFnZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=