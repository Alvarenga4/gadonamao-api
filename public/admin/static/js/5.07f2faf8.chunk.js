(this["webpackJsonpprojeto-gadonamao-admin-frontend"]=this["webpackJsonpprojeto-gadonamao-admin-frontend"]||[]).push([[5],{228:function(e,n,a){},229:function(e,n,a){},230:function(e,n,a){},232:function(e,n,a){},406:function(e,n,a){"use strict";a.r(n);var i=a(1),t=a.n(i),s=a(10),o=a(75),c=t.a.lazy((function(){return a.e(9).then(a.bind(null,407))})),r=t.a.lazy((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,395))})),m=t.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,396))})),l=t.a.lazy((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,397))})),d=t.a.lazy((function(){return a.e(6).then(a.bind(null,408))})),u=[{path:"admin/",name:"Dashboard",component:c},{path:"admin/:token",name:"Dashboard",component:c},{path:"admin/usuarios",name:"Usu\xe1rios",component:r},{path:"admin/sliders",name:"Sliders",component:m},{path:"admin/categorias",name:"Categorias",component:l},{path:"admin/categorias/categoria",name:"Categoria",component:d},{path:"admin/categorias/categoria/:id",name:"Categoria",component:d},{path:"admin/idades",name:"Idades",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,398))}))},{path:"admin/unidades",name:"Unidades",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,399))}))},{path:"admin/pelagems",name:"Pelagens",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,400))}))},{path:"admin/andrologias",name:"Andrologias",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,401))}))},{path:"admin/pesos",name:"Pesos",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,402))}))},{path:"admin/litros",name:"Litros",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,403))}))},{path:"admin/registros",name:"Registros",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,404))}))},{path:"admin/depoimentos",name:"Depoimentos",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,405))}))}],j=(a(228),a(8)),b=Object(j.jsx)("div",{className:"pt-3 text-center",children:Object(j.jsx)(o.a,{type:"grow"})});var h=function(){return Object(j.jsx)("div",{id:"content",className:"content p-1 p-md-4",children:Object(j.jsx)(i.Suspense,{loading:b,children:Object(j.jsx)(s.c,{children:u.map((function(e,n){var a=e.path,i=e.component;return Object(j.jsx)(s.a,{path:a,element:Object(j.jsx)(i,{})},n)}))})})})};a(229);var f=function(){return Object(j.jsx)("div",{id:"footer",className:"footer",children:Object(j.jsxs)("small",{children:[new Intl.DateTimeFormat("pt-BR",{year:"numeric"}).format(new Date),"\xa9 Todos os Direitos Reservados - Gado na M\xe3o | by Vertex Brands."]})})},p=a(52),x=a(53),O=a(26),g=a(48),z=a(32);a(230);var v=function(){var e=Object(z.b)().signOut,n=Object(i.useContext)(g.a).toggleSidebar;return Object(j.jsxs)("div",{id:"header",className:"header",children:[Object(j.jsx)(p.a,{light:!0,children:Object(j.jsx)(x.a,{onClick:n})}),Object(j.jsx)(O.a,{onClick:function(){return e()},children:Object(j.jsx)("i",{className:"fas fa-sign-out-alt"})})]})};var N=function(){return Object(j.jsxs)("div",{className:"w-100 mh-100",children:[Object(j.jsx)(v,{}),Object(j.jsx)(h,{}),Object(j.jsx)(f,{})]})},y=[{to:"admin/",name:"Dashboard",icon:"fas fa-chart-line",exact:!0},{to:"admin/usuarios",name:"Usu\xe1rios",icon:"fas fa-caret-square-right"},{to:"admin/sliders",name:"Sliders",icon:"fas fa-caret-square-right"},{to:"admin/categorias",name:"Categorias",icon:"fas fa-caret-square-right"},{to:"admin/idades",name:"Idades",icon:"fas fa-caret-square-right"},{to:"admin/unidades",name:"Unidades",icon:"fas fa-caret-square-right"},{to:"admin/pelagems",name:"Pelagens",icon:"fas fa-caret-square-right"},{to:"admin/andrologias",name:"Andrologias",icon:"fas fa-caret-square-right"},{to:"admin/pesos",name:"Pesos",icon:"fas fa-caret-square-right"},{to:"admin/litros",name:"Litros",icon:"fas fa-caret-square-right"},{to:"admin/registros",name:"Registros",icon:"fas fa-caret-square-right"},{to:"admin/depoimentos",name:"Depoimentos",icon:"fas fa-caret-square-right"}],P=a(190),C=a(31),k=a(12);a(232);function q(e,n){var a=e.children,t=e.header,s=e.items,o=void 0===s?[]:s,c=Object(i.useContext)(g.a),r=c.sidebarShow,m=c.toggleSidebar,l=c.minimizeSidebar,d=Object(i.useCallback)((function(){m()}),[]),u=Object(i.useCallback)((function(){m()}),[]),b=Object(i.useCallback)((function(){l()}),[]);return Object(i.useImperativeHandle)(n,(function(){return{open:d,close:u,minimize:b}})),Object(j.jsxs)("div",{id:"sidebar",className:"sidebar opacity-8 opacity-sm-10",style:{width:"".concat("minimized"===r?60:"opened"===r?250:0,"px")},children:[Object(j.jsx)("span",{role:"button",tabIndex:"0",className:"btn-close close d-sm-none",onClick:u,onKeyPress:u,children:Object(j.jsx)("i",{className:"fas fa-times"})}),Object(j.jsx)("span",{role:"button",tabIndex:"0",className:"btn-minimize close",onClick:"minimized"===r?function(){return d()}:function(){return b()},onKeyPress:"minimized"===r?function(){return d()}:function(){return b()},children:Object(j.jsx)("i",{className:"fas fa-arrow-left",style:{transition:"1s",transform:"minimized"===r?"scaleX(-1)":"scaleX(1)"}})}),Object(j.jsx)("div",{className:"header ".concat("minimized"===r?"minimized":""),children:t||("minimized"===r?Object(j.jsx)("i",{className:"fas fa-user-cog"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("i",{className:"fas fa-user-cog"}),Object(j.jsx)(k.a,{in:!("minimized"===r),children:Object(j.jsx)("strong",{className:"font-weight-800",children:"ADMIN"})})]}))}),a,o.map((function(e,n){var a=e.to,i=e.icon,t=e.name,s=e.exact;return Object(j.jsx)(k.a,{in:"opened"===r||"minimized"===r,children:a?Object(j.jsxs)(C.b,{to:a,className:"item-link",activeClassName:"active",end:s||!1,onClick:function(){P.isMobile&&u()},children:[Object(j.jsx)("i",{className:"".concat(i," ").concat("minimized"===r?"minimized":"")}),Object(j.jsx)(k.a,{in:!("minimized"===r),className:i?"ml-3":"",children:Object(j.jsx)("span",{children:t})})]}):Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("i",{className:"".concat(i," ").concat("minimized"===r?"minimized":"")})," ",Object(j.jsx)(k.a,{in:!("minimized"===r),className:i?"ml-3":"",children:Object(j.jsx)("span",{children:t})})]},n)},n)}))]})}var w=Object(i.forwardRef)(q);n.default=function(){return Object(j.jsxs)("div",{className:"vh-100 d-flex",children:[Object(j.jsx)(w,{items:y}),Object(j.jsx)(N,{})]})}}}]);
//# sourceMappingURL=5.07f2faf8.chunk.js.map