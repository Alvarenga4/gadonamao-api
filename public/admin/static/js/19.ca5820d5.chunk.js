(this["webpackJsonpprojeto-gadonamao-admin-frontend"]=this["webpackJsonpprojeto-gadonamao-admin-frontend"]||[]).push([[19],{404:function(e,t,c){"use strict";c.r(t);var a=c(149),s=c(22),r=c(1),n=c(151),i=c.n(n),j=c(152),o=c.n(j),l=c(153),d=c.n(l),b=c(74),O=c(26),x=c(49),h=c(50),u=c(51),m=c(58),f=c(59),p=c(60),g=c(85),v=c(63),C=c(64),k=c(66),N=c(68),S=c(70),_=c(65),E=c(46),y=c(8),F=l.Search.SearchBar,w=l.CSVExport.ExportCSVButton;t.default=function(){var e=Object(E.b)(),t=e.datas,c=e.load,n=e.destroy,j=e.update,l=e.store,B=Object(r.useState)(!1),V=Object(s.a)(B,2),A=V[0],P=V[1],z=Object(r.useState)(),J=Object(s.a)(z,2),R=J[0],D=J[1],I=Object(r.useState)(""),M=Object(s.a)(I,2),q=M[0],G=M[1];Object(r.useEffect)((function(){c("/registros")}),[c]);var H=Object(r.useCallback)((function(e){D(e._id),G(e.name),P(!0)}),[]),K=Object(r.useCallback)((function(){D(null),G(""),P(!0)}),[]),L=Object(r.useCallback)((function(){if(R)return j(R,"/registros",{name:q}),void P(!1);l("/registros",{name:q}),P(!1)}),[R,q]),Q=[{dataField:"_id",text:"ID",hidden:!0},{dataField:"name",text:"Nome"},{dataField:"#",text:"#",sort:!1,csvExport:!1,formatter:function(e,t){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(b.a,{target:"button-view-".concat(t._id),children:"Alterar"}),Object(y.jsx)(O.a,{id:"button-view-".concat(t._id),color:"info",size:"sm",className:"mt-2 mr-2",onClick:function(){return H(t)},children:Object(y.jsx)("i",{className:"fas fa-edit"})}),Object(y.jsx)(b.a,{target:"button-delete-".concat(t._id),children:"Excluir"}),Object(y.jsx)(O.a,{id:"button-delete-".concat(t._id),color:"danger",className:"mt-2 mr-2",size:"sm",onClick:function(){return n(t._id,"/registros")},children:Object(y.jsx)("i",{className:"fas fa-trash"})})]})},style:function(){return{width:"120px"}}}];return Object(y.jsxs)(x.a,{children:[Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(f.a,{children:Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsx)("h3",{children:"Registros"})})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{xs:12,sm:5,md:3,className:"mb-3 mb-xl-0",children:Object(y.jsx)(O.a,{block:!0,color:"success",onClick:K,children:"Cadastrar"})})})})})})]})})}),Object(y.jsx)(h.a,{children:Object(y.jsx)(u.a,{children:Object(y.jsx)(m.a,{children:Object(y.jsx)(f.a,{children:Object(y.jsx)(d.a,{keyField:"_id",data:t,columns:Q,exportCSV:{fileName:"gadonamao.csv",onlyExportFiltered:!0,exportAll:!1,separator:";",noAutoBOM:!1},search:!0,children:function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)(F,Object(a.a)({placeholder:"Buscar"},e.searchProps)),Object(y.jsx)("hr",{}),Object(y.jsx)(i.a,Object(a.a)({pagination:o()()},e.baseProps)),Object(y.jsx)(w,Object(a.a)(Object(a.a)({},e.csvProps),{},{children:"Export CSV!!"}))]})}},"_id")})})})}),Object(y.jsxs)(g.a,{isOpen:A,toggle:function(){return P(!A)},centered:!0,children:[Object(y.jsxs)(v.a,{children:[Object(y.jsx)("strong",{children:"Registro"}),Object(y.jsx)(O.a,{className:"close position-absolute top-4 right-4 py-1 px-2",onClick:function(){return P(!1)},children:Object(y.jsx)("i",{className:"fas fa-times"})})]}),Object(y.jsx)(C.a,{children:Object(y.jsx)(k.a,{children:Object(y.jsx)(N.a,{children:Object(y.jsx)(S.a,{type:"text",placeholder:"Nome",value:q,onChange:function(e){var t=e.target.value;return G(t)}})})})}),Object(y.jsx)(_.a,{children:Object(y.jsx)(O.a,{onClick:L,children:"Salvar"})})]})]})}}}]);
//# sourceMappingURL=19.ca5820d5.chunk.js.map