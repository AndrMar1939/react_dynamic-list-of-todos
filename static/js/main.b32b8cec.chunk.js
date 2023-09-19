(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a,n=c(9),s=c.n(n),l=c(6),i=c(5),o=c(2),d=c(1);c(15),c(16);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var r=c(3),j=c.n(r),u=c(0),b=function(e){var t=e.todo,c=e.activeTodo,a=e.onModalOpen,n=t.id,s=t.title,l=t.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":n===(null===c||void 0===c?void 0:c.id)}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:n}),Object(u.jsx)("td",{className:"is-vcentered",children:l&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!l,"has-text-success":l}),children:s})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye":n!==(null===c||void 0===c?void 0:c.id),"fa-eye-slash":n===(null===c||void 0===c?void 0:c.id)})})})})})]})},h=function(e){var t=e.todos,c=e.activeTodo,a=e.onModalToggle,n=e.onActiveTodoSet,s=function(e){a(),n(e)};return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(b,{todo:e,activeTodo:c,onModalOpen:s},e.id)}))})]})},O=function(e){var t=e.filter,c=e.onFilterSet,n=e.onInputClear;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsx)("select",{"data-cy":"statusSelect",name:"filterByStatus",value:t.filterByStatus,onChange:c,children:Object.keys(a).map((function(e){return Object(u.jsx)("option",{value:a[e],children:e},e)}))})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",name:"filterByTitle",className:"input",placeholder:"Search...",value:t.filterByTitle,onChange:c}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.filterByTitle&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(18);var f=function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},x=function(){return Object(u.jsx)("article",{className:"message is-danger",children:Object(u.jsx)("div",{className:"message-header",children:Object(u.jsx)("p",{children:"Error"})})})},v=function(e){var t=e.activeTodo,c=e.onModalToggle,a=e.onActiveTodoSet,n=Object(d.useState)(null),s=Object(o.a)(n,2),l=s[0],i=s[1],r=Object(d.useState)(!1),b=Object(o.a)(r,2),h=b[0],O=b[1],v=t?t.userId:null,p=Object(d.useState)(!1),N=Object(o.a)(p,2),y=N[0],g=N[1];Object(d.useLayoutEffect)((function(){v&&(g(!1),O(!0),function(e){return m("/users/".concat(e))}(v).then(i).catch((function(){return g(!0)})).finally((function(){O(!1)})))}),[]);return Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),h?Object(u.jsx)(f,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){a(null),c(),i(null)}})]}),y?Object(u.jsx)(x,{}):Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:j()({"has-text-danger":!(null!==t&&void 0!==t&&t.completed),"has-text-success":null===t||void 0===t?void 0:t.completed}),children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},p=c(10),N={filterByTitle:"",filterByStatus:a.All},y=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(d.useState)(!1),r=Object(o.a)(s,2),j=r[0],b=r[1],y=Object(d.useState)(!1),g=Object(o.a)(y,2),T=g[0],S=g[1],k=Object(d.useState)(null),B=Object(o.a)(k,2),C=B[0],w=B[1],A=Object(d.useState)(N),M=Object(o.a)(A,2),E=M[0],I=M[1],L=Object(d.useState)(!1),_=Object(o.a)(L,2),F=_[0],J=_[1],P=function(e,t){var c=t.filterByTitle,n=t.filterByStatus,s=Object(p.a)(e);switch(c&&(s=s.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),n){case a.All:return s;case a.Active:return s.filter((function(e){return!e.completed}));case a.Completed:return s.filter((function(e){return e.completed}));default:return s}}(c,E),D=function(){S((function(e){return!e}))},q=function(e){w(e)};return Object(d.useEffect)((function(){b(!0),J(!1),m("/todos").then(n).catch((function(){return J(!0)})).finally((function(){b(!1)}))}),[]),F?Object(u.jsx)(x,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(O,{filter:E,onFilterSet:function(e){var t=e.target,c=t.name,a=t.value;I((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},c,a.trimStart()))}))},onInputClear:function(){I((function(e){return Object(i.a)(Object(i.a)({},e),{},{filterByTitle:""})}))}})}),Object(u.jsx)("div",{className:"block",children:j?Object(u.jsx)(f,{}):Object(u.jsx)(h,{todos:P,activeTodo:C,onModalToggle:D,onActiveTodoSet:q})})]})})}),T&&Object(u.jsx)(v,{activeTodo:C,onModalToggle:D,onActiveTodoSet:q})]})};s.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b32b8cec.chunk.js.map