(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{5947:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orderSingle/[id]",function(){return n(2961)}])},7720:function(e,s,n){"use strict";var i=n(5893),r=n(7294),c=n(5007),t=n(796),l=n(7741),d=n(9633),a=n(4687),u=n(1163),o=n(5273);s.Z=function(e){let{image:s,price:n,quantity:h,number:x,name:j,productId:m,removeBtn:p,maxCount:_,orderQuantity:g}=e,{loginData:v}=(0,c.v9)(d.YN),{guestUserId:f}=(0,c.v9)(t.KY),k=(0,c.I0)(),{pathname:N}=(0,u.useRouter)(),w=e=>{k((0,l.IV)({userToken:v.access_token,productId:e,guestUserId:f}))},b=(e,s,n,i)=>{"-"===n&&(s>1?k((0,l.u_)({userToken:v.access_token,productId:e,productCount:1*s-1,guestUserId:f})):k((0,l.IV)({userToken:v.access_token,productId:e,guestUserId:f}))),"+"===n&&s<i&&k((0,l.u_)({userToken:v.access_token,productId:e,productCount:1*s+1,guestUserId:f}))};return(0,r.useEffect)(()=>{},[N]),(0,i.jsxs)("div",{className:"basket__item",children:[(0,i.jsx)("p",{children:x}),(0,i.jsx)("div",{className:"basket__item-img",children:(0,i.jsx)("img",{src:o.S+s,alt:"img"})}),(0,i.jsx)("h4",{children:j}),(0,i.jsxs)("p",{className:"price",children:[n," ₽"]}),(0,i.jsx)("div",{className:"counter",children:(0,i.jsx)("div",{className:"counter-flex",children:"/checkout"!==N&&"/orderSingle/[id]"!==N?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:()=>b(m,h,"-",_),children:(0,i.jsx)(a.V_,{})}),(0,i.jsx)("span",{children:h}),(0,i.jsx)("button",{onClick:()=>b(m,h,"+",_),children:(0,i.jsx)(a.pO,{})})]}):(0,i.jsx)("span",{children:g||h})})}),(0,i.jsxs)("p",{className:"total-price",children:[g?g*n:h*n," ₽"]}),"/checkout"!==N&&"/orderSingle/[id]"!==N?(0,i.jsx)("button",{className:"remove-btn",onClick:()=>w(m),children:(0,i.jsx)(a.HF,{})}):""]})}},8232:function(e,s,n){"use strict";var i=n(5893),r=n(1664),c=n.n(r),t=n(7294);s.Z=function(e){let{title:s,links:n}=e;return(0,i.jsx)("div",{className:"brendcrumbs",children:(0,i.jsxs)("div",{className:"brendcrumbs__container _container",children:[(0,i.jsx)(c(),{href:"/",children:"Главная"}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})}),(null==n?void 0:n.length)?n.map((e,s)=>(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)(c(),{href:e.link,children:e.name}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})})]},s)):"",(0,i.jsx)("p",{children:s})]})})}},2961:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return h}});var i=n(5893),r=n(7294),c=n(7720),t=n(5007),l=n(9633),d=n(6978),a=n(8232),u=function(e){var s;let{id:n}=e,[u,o]=(0,r.useState)(!1),h=(0,t.I0)(),{orderSingleData:x,loginData:j}=(0,t.v9)(l.YN);return(0,r.useEffect)(()=>{x.id||u||h((0,d.T$)({userToken:j.access_token,orderId:1*n}))},[x]),(0,i.jsx)(i.Fragment,{children:x.id?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{title:"#".concat(x.id),links:[{name:"Мои заказы",link:"/orders"}]}),(0,i.jsx)("section",{className:"order-single",children:(0,i.jsxs)("div",{className:"order-single__container _container",children:[(0,i.jsxs)("h1",{children:["Заказ № #",x.id]}),(0,i.jsxs)("div",{className:"basket__products",children:[(0,i.jsxs)("div",{className:"basket__products-title",children:[(0,i.jsx)("p",{children:"№"}),(0,i.jsx)("p",{children:"Фото"}),(0,i.jsx)("p",{children:"Наименование"}),(0,i.jsx)("p",{children:"Цена"}),(0,i.jsx)("p",{children:"Количество"}),(0,i.jsx)("p",{children:"Сумма"})]}),null==x?void 0:null===(s=x.products)||void 0===s?void 0:s.map((e,s)=>(0,i.jsx)(c.Z,{removeBtn:!1,image:e.item.image,price:e.item.price,quantity:e.item.quantity,orderQuantity:e.quantity,number:s+1,name:e.item.name,productId:e.item.id},e.item.id))]}),(0,i.jsx)("div",{className:"order-single__total",children:(0,i.jsxs)("p",{children:["Общая сумма:",(0,i.jsxs)("span",{children:[x.grant_total," ₽"]})]})}),(0,i.jsxs)("div",{className:"order-single__characteristics",children:[(0,i.jsxs)("p",{children:["Способ доставки:",(0,i.jsx)("span",{children:"Доставка курьером"})]}),(0,i.jsxs)("p",{children:["Способ оплаты:",(0,i.jsx)("span",{children:"Наличными при получении"})]}),(0,i.jsxs)("p",{children:["Дата заказа:",(0,i.jsx)("span",{children:new Date(x.created_at).toLocaleDateString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})})]}),(0,i.jsxs)("p",{children:["Статус:",(0,i.jsx)("span",{children:"1"===x.status?"В обработке":"2"===x.status?"Забронирован":"Доставлен"})]}),(0,i.jsxs)("p",{children:["Телефон получателя:",(0,i.jsx)("span",{children:x.user.phone})]}),(0,i.jsxs)("p",{children:["Город:",(0,i.jsx)("span",{children:x.city})]}),(0,i.jsxs)("p",{children:["Дата и время доставки:",(0,i.jsx)("span",{children:"Март 12, 2023, 13:20"})]}),(0,i.jsxs)("p",{className:"comments",children:["Примечания",(0,i.jsx)("span",{children:x.note})]})]})]})})]}):""})},o=n(1163),h=function(){let e=(0,o.useRouter)(),{id:s}=e.query,{usersData:n}=(0,t.v9)(l.YN);return(0,r.useEffect)(()=>{if(!n.name){e.push("/");return}},[s]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Suspense,{children:s&&(0,i.jsx)(u,{id:s})})})}},1163:function(e,s,n){e.exports=n(3035)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5947)}),_N_E=e.O()}]);