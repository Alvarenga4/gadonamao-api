(this["webpackJsonpprojeto-gadonamao-admin-user-frontend"]=this["webpackJsonpprojeto-gadonamao-admin-user-frontend"]||[]).push([[14],{417:function(e,t,c){"use strict";c.r(t);var a=c(152),n=c(1),i=c(209),s=c.n(i),r=c(215),o=c.n(r),d=c(224),l=c.n(d),j=c(171),u=c(10),b=c(76),x=c(26),h=c(50),m=c(51),O=c(52),f=c(60),p=c(61),v=c(62),g=c(32),C=c(49),k=c(8),F=d.Search.SearchBar,N=d.CSVExport.ExportCSVButton;t.default=function(){var e=Object(u.g)(),t=Object(C.b)(),c=t.update,i=t.datas,r=t.load,d=t.destroy;Object(n.useEffect)((function(){r("/anuncios")}),[r]);var S=Object(n.useCallback)((function(){localStorage.removeItem(g.a),e("admin-usuario/anuncio")}),[]),y=[{dataField:"_id",text:"ID",hidden:!0},{dataField:"titulo",text:"T\xedtulo"},{dataField:"compartilhado",text:"Compartilhado",hidden:j.isMobile,style:function(){return{width:"120px"}}},{dataField:"favoritado",text:"Favoritado",hidden:j.isMobile,style:function(){return{width:"120px"}}},{dataField:"reportado",text:"Reportado",hidden:j.isMobile,style:function(){return{width:"120px"}}},{dataField:"visualizado",text:"Visualizado",hidden:j.isMobile,style:function(){return{width:"120px"}}},{dataField:"vendido",text:"Vendido",hidden:j.isMobile,style:function(){return{width:"120px"}},formatter:function(e,t){return t.vendido?Object(k.jsx)("i",{className:"fas fa-check-circle text-success"}):Object(k.jsx)("i",{className:"fas fa-times-circle text-danger"})}},{dataField:"#",text:"#",sort:!1,csvExport:!1,formatter:function(e,t){return Object(k.jsxs)(k.Fragment,{children:[!t.vendido&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a,{target:"button-vendido-".concat(t._id),children:"Vendido"}),Object(k.jsx)(x.a,{id:"button-vendido-".concat(t._id),color:"success",size:"sm",className:"mt-2 mr-2",onClick:function(){return c(t._id,"/vendidos",{vendido:!0})},children:Object(k.jsx)("i",{className:"fas fa-check-circle"})})]}),Object(k.jsx)(b.a,{target:"button-delete-".concat(t._id),children:"Excluir"}),Object(k.jsx)(x.a,{id:"button-delete-".concat(t._id),color:"danger",className:"mt-2 mr-2",size:"sm",onClick:function(){return d(t._id,"/anuncios")},children:Object(k.jsx)("i",{className:"fas fa-trash"})})]})},style:function(){return{width:"120px"}}}];return Object(k.jsxs)(h.a,{children:[Object(k.jsx)(m.a,{children:Object(k.jsx)(O.a,{children:Object(k.jsxs)(f.a,{children:[Object(k.jsx)(p.a,{children:Object(k.jsx)(m.a,{children:Object(k.jsx)(O.a,{children:Object(k.jsx)("h3",{children:"An\xfancios"})})})}),Object(k.jsx)(v.a,{children:Object(k.jsx)(m.a,{children:Object(k.jsx)(O.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(O.a,{xs:12,sm:6,md:3,className:"mb-3 mb-xl-0",children:Object(k.jsx)(x.a,{block:!0,color:"success",onClick:S,children:"Criar An\xfancio"})}),localStorage.getItem(g.a)&&(JSON.parse(localStorage.getItem(g.a)).anuncioId?Object(k.jsx)(O.a,{xs:12,sm:6,md:6,className:"mb-3 mb-xl-0",children:Object(k.jsx)(x.a,{block:!0,color:"success",onClick:function(){return e("admin-usuario/anuncio")},children:"Continuar Alterando Anuncio"})}):Object(k.jsx)(O.a,{xs:12,sm:6,md:6,className:"mb-3 mb-xl-0",children:Object(k.jsx)(x.a,{block:!0,color:"success",onClick:function(){return e("admin-usuario/anuncio")},children:"Continuar Criando Anuncio"})}))]})})})})]})})}),Object(k.jsx)(m.a,{children:Object(k.jsx)(O.a,{children:Object(k.jsx)(f.a,{children:Object(k.jsx)(p.a,{children:Object(k.jsx)(l.a,{keyField:"_id",data:i,columns:y,exportCSV:{fileName:"gadonamao.csv",onlyExportFiltered:!0,exportAll:!1,separator:";",noAutoBOM:!1},search:!0,children:function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)(F,Object(a.a)({placeholder:"Buscar"},e.searchProps)),Object(k.jsx)("hr",{}),Object(k.jsx)(s.a,Object(a.a)({pagination:o()()},e.baseProps)),Object(k.jsx)(N,Object(a.a)(Object(a.a)({},e.csvProps),{},{children:"Export CSV!!"}))]})}},"_id")})})})})]})}}}]);
//# sourceMappingURL=14.181911f2.chunk.js.map