(this["webpackJsonpfrontend-cra"]=this["webpackJsonpfrontend-cra"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(16),r=c.n(s),i=(c(47),c(25)),j=c(6),l=c(63),o=c(3),d=function(){return Object(o.jsxs)(l.a,{className:"m-4",children:[Object(o.jsx)(l.a.Header,{children:Object(o.jsx)("b",{children:"Nomes"})}),Object(o.jsx)(l.a.Body,{className:"p-2",children:Object(o.jsx)("div",{className:"text-center texto",children:Object(o.jsxs)("h1",{children:[Object(o.jsx)("p",{children:"Thiago Barboza Pierre "}),Object(o.jsx)("p",{children:"Tiago Netto "}),Object(o.jsx)("p",{children:"Diogo Souza "}),Object(o.jsx)("p",{children:"Alan Brito "}),Object(o.jsx)("p",{children:"Augusto Falc\xe3o "})]})})})]})},b=c(61),h=c(64),x=function(e){var t=e.title,c=e.routes,a=void 0===c?[]:c;return Object(o.jsxs)(b.a,{className:"preto",variant:"dark",children:[Object(o.jsx)(b.a.Brand,{href:"/",children:t}),Object(o.jsx)(h.a,{className:"mr-auto",children:a.map((function(e){return Object(o.jsx)(i.b,{className:"nav-link",to:e.path,children:e.name})}))})]})},m=c(58),O=c(41),u=function(e){var t=e.info,c=e.cardTitle;return Object(o.jsxs)(l.a,{className:"m-4",children:[Object(o.jsx)(l.a.Header,{children:Object(o.jsx)("b",{children:c})}),Object(o.jsxs)(l.a.Body,{className:"p-2",children:[Object(o.jsxs)(m.a,{variant:"dark",className:"p-2 preto",children:[t," "]}),Object(o.jsxs)("div",{className:"text-center texto",children:["There are no items yet."," ",Object(o.jsx)(O.a,{className:"rounded mx-auto d-block ",src:"https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif",roundedCircle:!0})]})]})]})},p=(c(55),function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{info:"ADD INFO",cardTitle:"Home",children:" "})})}),N=c(29),v=c(36),f=c(59),g=c(60),y=c(42),k=c(62),C=c(65),T=c(35),A=function(e){var t=e.title,c=e.className,a=e.children;return Object(o.jsxs)(l.a,{className:"mb-4 ".concat(c),children:[Object(o.jsx)(l.a.Header,{children:Object(o.jsx)(l.a.Title,{children:t})}),Object(o.jsx)(l.a.Body,{children:a})]})},B=[{path:"/",name:"Home",component:p,exact:!0},{path:"/Grupo",name:"Grupo",component:d,exact:!0},{path:"/Atividade4",name:"Atividade 4",component:function(){var e=Object(a.useState)([{isCompleted:!1}]),t=Object(v.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(v.a)(s,2),i=r[0],j=r[1],l=function(e){c.splice(e.target.value,1),n(Object(N.a)(c))};return Object(o.jsx)(A,{title:"Todo App",className:"m-4",children:Object(o.jsxs)(f.a,{children:[Object(o.jsxs)("h2",{children:["Lista de atividades",Object(o.jsx)(T.a,{className:"m-2"})]}),Object(o.jsxs)(g.a,{children:[Object(o.jsx)(y.a,{xl:12,md:9,children:Object(o.jsx)(k.a,{children:Object(o.jsx)(k.a.Group,{children:Object(o.jsx)(k.a.Control,{type:"text",value:i,onChange:function(e){return j(e.target.value)},placeholder:"Insira sua atividade do dia"})})})}),Object(o.jsx)(y.a,{children:Object(o.jsx)(m.a,{disabled:!i.trim(),onClick:function(){i.trim()?(n([].concat(Object(N.a)(c),[{title:i}])),j("")):alert("Ta vazio")},type:"button",children:"Adicionar Todo"})})]}),Object(o.jsx)(g.a,{children:Object(o.jsx)(C.a,{className:"m-3",children:c.map((function(e,t){return Object(o.jsxs)(C.a.Item,{style:{textDecoration:e.isCompleted?"line-through":""},variant:"primary",className:"m-1",children:[Object(o.jsx)("input",{className:"m-2",type:"checkbox",onClick:function(){return function(e){var t=Object(N.a)(c);t[e].isCompleted=!t[e].isCompleted,n(t)}(t)}}),e.title,Object(o.jsxs)(m.a,{type:"button",variant:"danger",className:"m-2",onClick:l,value:t,children:["Del",Object(o.jsx)(T.b,{className:"m-2"})]})]},e.title)}))})})]})})},exact:!0}],D=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(x,{title:"PITANG 2",routes:B}),Object(o.jsx)(j.c,{children:B.map((function(e){var t=e.component,c=e.path,a=e.exact;return Object(o.jsx)(j.a,{path:c,component:t,exact:a},c)}))})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a3c8cad0.chunk.js.map