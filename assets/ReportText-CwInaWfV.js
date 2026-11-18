import{c as i,u as n,v as o,j as e}from"./index-ce7HNgMw.js";import{S as l,b as m}from"./Common-B3aXM0Za.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=i("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);function j(){const{period:s}=n(),a=String(o(s.overview,"W")??"").split(/\r?\n/).filter(t=>t.trim()!=="");return e.jsx(l,{title:"本月经营纪要",className:"report-text-section",children:e.jsx("div",{className:"report-text-card",children:a.length?e.jsx("div",{className:"report-memo-lines",children:a.map((t,c)=>e.jsxs("div",{className:"report-memo-item",children:[e.jsxs("span",{className:"report-memo-label",children:[e.jsx("i",{}),`纪要 ${String(c+1).padStart(2,"0")}`]}),e.jsx("p",{children:t.replace(/^[-•]\s*/,"")})]},c))}):e.jsx("p",{className:"report-text-empty",children:"暂无说明"})})})}function v(){return e.jsx("section",{className:"report-text-section investment-logic",children:e.jsxs("details",{open:!0,children:[e.jsx("summary",{children:"各字段计算逻辑"}),e.jsx("div",{className:"report-text-card",children:e.jsx("div",{className:"report-logic-lines",children:m.map(([s,r])=>e.jsxs("div",{className:"report-logic-item",children:[e.jsxs("strong",{children:[s,"："]}),e.jsx("p",{children:r})]},s))})})]})})}export{h as C,v as I,j as M,x as W};
