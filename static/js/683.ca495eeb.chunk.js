"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[683],{683:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r=n(9439),a=n(2791),c=n(2855),u=n(6176),o=n(4420),i="ContactForm_formWrapper__ixY4D",s="ContactForm_input__Bl93P",l="ContactForm_button__eSwX9",m=n(3553),f=function(t){return t.filter.filter},d=function(t){return t.contact.contacts.items},h=function(t){return t.contact.contacts.isLoading},x=function(t){return t.contact.contacts.error},b=(0,m.P1)([d,f],(function(t,e){return console.log("items",t),t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),p=n(184),v=function(){var t=(0,o.I0)(),e=(0,o.v9)(d),n=(0,a.useState)(""),m=(0,r.Z)(n,2),f=m[0],h=m[1],x=(0,a.useState)(""),b=(0,r.Z)(x,2),v=b[0],_=b[1],j=function(t){var e=t.target,n=e.value,r=e.name;"name"===r?h(n):"number"===r&&_(n)};return(0,p.jsx)("form",{onSubmit:function(n){if(n.preventDefault(),function(t){return t.some((function(t){return t.name.toLowerCase()===f.toLowerCase()}))}(e))alert("".concat(f," is already in contacts"));else{var r={id:(0,c.x0)(),name:f,number:v};t((0,u.uK)(r)),h(""),_("")}},children:(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("label",{htmlFor:"nameInputId",children:"Name"}),(0,p.jsx)("input",{className:s,type:"text",name:"name",value:f,onChange:j,required:!0}),(0,p.jsx)("label",{htmlFor:"numberInputId",children:"Number"}),(0,p.jsx)("input",{className:s,type:"tel",name:"number",value:v,onChange:j}),(0,p.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})})},_="ContactList_items__1HfWM",j="ContactList_button__7kL4l",C=function(){var t=(0,o.I0)(),e=(0,o.v9)(b);return(0,p.jsx)("ul",{className:_,children:e.map((function(e){return(0,p.jsxs)("li",{children:[e.name," ",e.number,(0,p.jsx)("button",{className:j,type:"button",name:"delete",onClick:function(){return t((0,u.GK)(e.id))},children:"Delete"})]},e.id)}))})},g=n(1473),w=function(){var t=(0,o.I0)(),e=(0,o.v9)(f);return(0,p.jsx)("div",{children:(0,p.jsxs)("label",{children:["Find contacts by name",(0,p.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,g.C)(e.target.value))}})]})})},L=function(){var t=(0,o.I0)(),e=(0,o.v9)(h),n=(0,o.v9)(x);return(0,a.useEffect)((function(){t((0,u.yF)())}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{}),(0,p.jsx)(w,{}),e&&!n&&(0,p.jsx)("b",{children:"Loading..."}),(0,p.jsx)(C,{})]})}}}]);
//# sourceMappingURL=683.ca495eeb.chunk.js.map