(this["webpackJsonpprojeto-gadonamao-admin-user-frontend"]=this["webpackJsonpprojeto-gadonamao-admin-user-frontend"]||[]).push([[6],{231:function(e,n,a){},232:function(e,n,a){},233:function(e,n,a){},235:function(e,n,a){},420:function(e,n,a){"use strict";a.r(n);var i=a(1),t=a.n(i),c=a(10),s=a(77),o=t.a.lazy((function(){return a.e(15).then(a.bind(null,422))})),r=t.a.lazy((function(){return Promise.all([a.e(1),a.e(14)]).then(a.bind(null,417))})),l=t.a.lazy((function(){return a.e(9).then(a.bind(null,418))})),m=t.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(12)]).then(a.bind(null,424))})),d=t.a.lazy((function(){return Promise.all([a.e(7),a.e(13)]).then(a.bind(null,423))})),j=t.a.lazy((function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,419))})),u=[{path:"/",name:"Dashboard",component:o},{path:"/:token",name:"Dashboard",component:o},{path:"/perfil",name:"Profile",component:t.a.lazy((function(){return a.e(8).then(a.bind(null,421))}))},{path:"/anuncios",name:"Anuncios",component:r},{path:"/anuncio",name:"Anuncio",component:l},{path:"/anuncio-detalhes",name:"AnuncioDetails",component:m},{path:"/anuncio-video-fotos/:id",name:"AnuncioVideoPhotos",component:d},{path:"/animais",name:"Animais",component:j}],b=(a(231),a(8)),h=Object(b.jsx)("div",{className:"pt-3 text-center",children:Object(b.jsx)(s.a,{type:"grow"})});var f=function(){return Object(b.jsx)("div",{id:"content",className:"content p-1 p-md-4",children:Object(b.jsx)(i.Suspense,{loading:h,children:Object(b.jsx)(c.c,{children:u.map((function(e,n){var a=e.path,i=e.component;return Object(b.jsx)(c.a,{path:a,element:Object(b.jsx)(i,{})},n)}))})})})};a(232);var x=function(){return Object(b.jsx)("div",{id:"footer",className:"footer",children:Object(b.jsxs)("small",{children:[new Intl.DateTimeFormat("pt-BR",{year:"numeric"}).format(new Date),"\xa9 Todos os Direitos Reservados - Gado na M\xe3o | by Vertex Brands."]})})},p=a(53),O=a(54),v=a(48);a(233);var z=function(){var e=Object(i.useContext)(v.a).toggleSidebar;return Object(b.jsx)("div",{id:"header",className:"header",children:Object(b.jsx)(p.a,{light:!0,children:Object(b.jsx)(O.a,{onClick:e})})})};var N=function(){return Object(b.jsxs)("div",{className:"w-100 mh-100",children:[Object(b.jsx)(z,{}),Object(b.jsx)(f,{}),Object(b.jsx)(x,{})]})},g=[{to:"/",name:"Dashboard",icon:"fas fa-chart-line",exact:!0},{to:"/perfil",name:"Perfil",icon:"fas fa-user"},{to:"/anuncios",name:"An\xfancios",icon:"fas fa-caret-square-right"},{to:"/animais",name:"Animais cadastrados",icon:"fas fa-caret-square-right"}],y=a(171),k=a(31),w=a(12);a(235);function C(e,n){var a=e.children,t=e.header,c=e.items,s=void 0===c?[]:c,o=Object(i.useContext)(v.a),r=o.sidebarShow,l=o.toggleSidebar,m=o.minimizeSidebar,d=Object(i.useCallback)((function(){l()}),[]),j=Object(i.useCallback)((function(){l()}),[]),u=Object(i.useCallback)((function(){m()}),[]);return Object(i.useImperativeHandle)(n,(function(){return{open:d,close:j,minimize:u}})),Object(b.jsxs)("div",{id:"sidebar",className:"sidebar opacity-8 opacity-sm-10",style:{width:"".concat("minimized"===r?60:"opened"===r?250:0,"px")},children:[Object(b.jsx)("span",{role:"button",tabIndex:"0",className:"btn-close close d-sm-none",onClick:j,onKeyPress:j,children:Object(b.jsx)("i",{className:"fas fa-times"})}),Object(b.jsx)("span",{role:"button",tabIndex:"0",className:"btn-minimize close",onClick:"minimized"===r?function(){return d()}:function(){return u()},onKeyPress:"minimized"===r?function(){return d()}:function(){return u()},children:Object(b.jsx)("i",{className:"fas fa-arrow-left",style:{transition:"1s",transform:"minimized"===r?"scaleX(-1)":"scaleX(1)"}})}),Object(b.jsx)("div",{className:"header ".concat("minimized"===r?"minimized":""),children:t||("minimized"===r?Object(b.jsx)("i",{className:"fas fa-user-cog"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("i",{className:"fas fa-user-cog"}),Object(b.jsx)(w.a,{in:!("minimized"===r),children:Object(b.jsx)("strong",{className:"font-weight-800",children:"ADMIN"})})]}))}),a,s.map((function(e,n){var a=e.to,i=e.icon,t=e.name,c=e.exact;return Object(b.jsx)(w.a,{in:"opened"===r||"minimized"===r,children:a?Object(b.jsxs)(k.b,{to:a,className:"item-link",activeClassName:"active",end:c||!1,onClick:function(){y.isMobile&&j()},children:[Object(b.jsx)("i",{className:"".concat(i," ").concat("minimized"===r?"minimized":"")}),Object(b.jsx)(w.a,{in:!("minimized"===r),className:i?"ml-3":"",children:Object(b.jsx)("span",{children:t})})]}):Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("i",{className:"".concat(i," ").concat("minimized"===r?"minimized":"")})," ",Object(b.jsx)(w.a,{in:!("minimized"===r),className:i?"ml-3":"",children:Object(b.jsx)("span",{children:t})})]},n)},n)}))]})}var P=Object(i.forwardRef)(C);n.default=function(){return Object(b.jsxs)("div",{className:"vh-100 d-flex",children:[Object(b.jsx)(P,{items:g}),Object(b.jsx)(N,{})]})}}}]);
//# sourceMappingURL=6.cdfccfd6.chunk.js.map