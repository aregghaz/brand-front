(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[900],{7969:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brandSingle/[slug]",function(){return n(117)}])},8232:function(e,s,n){"use strict";var l=n(5893),t=n(1664),i=n.n(t),r=n(7294);s.Z=function(e){let{title:s,links:n}=e;return(0,l.jsx)("div",{className:"brendcrumbs",children:(0,l.jsxs)("div",{className:"brendcrumbs__container _container",children:[(0,l.jsx)(i(),{href:"/",children:"Главная"}),(0,l.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})}),(null==n?void 0:n.length)?n.map((e,s)=>(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(i(),{href:e.link,children:e.name}),(0,l.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})})]},s)):"",(0,l.jsx)("p",{children:s})]})})}},1449:function(e,s,n){"use strict";var l=n(5893);n(7294),s.Z=function(){return(0,l.jsxs)("div",{className:"load-screen",id:"load-screen",children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{}),(0,l.jsx)("span",{})]})}},564:function(e,s,n){"use strict";var l=n(5893),t=n(9184),i=n(9633),r=n(4687),c=n(7066),d=n(7294),o=n(5007);s.Z=function(){let{loginData:e}=(0,o.v9)(i.YN),[s,n]=(0,d.useState)("Забронируйте инструмент заранее, и мы отложим их специально для вас! Бронь будет действительна в течение 24 часов."),[a,u]=(0,d.useState)(!0),{preOrderData:h}=(0,o.v9)(t.nR),x=(0,o.I0)();return(0,d.useEffect)(()=>{},[h]),(0,l.jsx)("div",{className:"preorder-modal",children:(0,l.jsxs)("div",{className:"preorder-modal__container",children:[(0,l.jsxs)("div",{className:"preorder-modal__title",children:[(0,l.jsx)("h2",{children:"Забронировать"}),(0,l.jsx)("button",{onClick:()=>x((0,t.gW)()),children:(0,l.jsx)(r.Nn,{})})]}),(0,l.jsxs)("div",{className:"preorder-modal__body",children:[(0,l.jsx)("p",{children:s}),(0,l.jsx)("button",{onClick:()=>{a?c.Z.post("http://api.calcarela.com/api/auth/pre-order/".concat(h.id),{},{headers:{Authorization:"Bearer "+e.access_token}}).then(e=>{200===e.status&&(n("Спасибо! Ваша заявка принята, скоро мы с Вами свяжемся!"),u(!1),setTimeout(()=>{x((0,t.gW)())},5e3))}):x((0,t.gW)())},children:a?"Забронировать":"Закрыть"})]})]})})}},1918:function(e,s,n){"use strict";var l=n(5893),t=n(7294),i=n(5007),r=n(1664),c=n.n(r),d=n(7741),o=n(9633),a=n(9314),u=n(1935),h=n(4687),x=n(3308),m=n(9184),j=n(796),g=n(1163);s.Z=(0,t.memo)(function(e){let{title:s,img:n,price:r,salePrice:p,id:v,slug:_,total:f,book:b}=e,k=(0,i.I0)(),w=(0,t.useRef)(null),[N,C]=(0,t.useState)(!1),L=(0,g.useRouter)(),{loginData:I}=(0,i.v9)(o.YN),{uuId:T}=(0,i.v9)(x.aQ),{guestUserId:Z}=(0,i.v9)(j.KY),E=(0,t.useCallback)(()=>{k((0,d.HC)({productCount:"1",productId:v,userToken:I.access_token?I.access_token:null,guestUserId:Z})),C(!0),setTimeout(()=>{C(!1)},1e3)},[Z]),F=(0,t.useCallback)(()=>{k((0,u.Dq)({userToken:I.access_token,productId:v,guestUserId:!!T&&T})),C(!0),setTimeout(()=>{C(!1)},1e3),console.log(f>b.length)},[T]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"product-item",children:[(0,l.jsxs)(c(),{href:"/product/".concat(_),style:{backgroundImage:n&&"url("+n+")"},className:"product-item__img",onClick:()=>{k((0,a.Rc)({slug:_}))},scroll:!1,children:[p>0&&(0,l.jsxs)("div",{className:"discount_div",children:["- ",100-100*p/r," %"]}),(0,l.jsx)("img",{src:n,alt:s})]}),(0,l.jsxs)("div",{className:"product-item__text",children:[(0,l.jsx)("h4",{children:(0,l.jsx)(c(),{href:"/product/".concat(_),onClick:()=>{k((0,a.Rc)({slug:_}))},scroll:!1,title:s,children:s})}),(0,l.jsx)("div",{className:"product-item__prices",children:p?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:[p," ₽"]}),(0,l.jsxs)("span",{children:[r," ₽"]})]}):(0,l.jsxs)("p",{children:[r," ₽"]})}),(0,l.jsx)(c(),{href:"/",className:"credit-btn",children:"Оформить кредит в магазине!"}),(0,l.jsxs)("div",{className:"product-item__buttons",children:[(0,l.jsx)("button",{onClick:E,className:"buy-btn",disabled:(null==b?void 0:b.length)>=f,style:{maxWidth:(null==b?void 0:b.length)>=f&&"unset",backgroundColor:(null==b?void 0:b.length)>=f&&"#939393"},children:(null==b?void 0:b.length)>=f?"Забронировано":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.wh,{color:"#FFF"}),"Купить",N&&(0,l.jsx)("span",{className:"product-item__animate",ref:w,children:"1"})]})}),"/liked"!==L.pathname?(0,l.jsx)("button",{className:"like-btn",onClick:F,children:(0,l.jsx)(h.lM,{})}):(0,l.jsx)("button",{className:"like-btn",onClick:()=>{k((0,u.ns)({userToken:I.access_token,productId:v,guestUserId:T}))},children:(0,l.jsx)(h.yl,{})}),(null==b?void 0:b.length)>=f?"":(0,l.jsx)("button",{className:"preorder-btn",onClick:()=>{I.access_token?k((0,m.gW)({id:v,price:p||r,name:s,toggle:!0})):L.push("/login")},children:(0,l.jsx)(h.fC,{})})]})]})]})})})},117:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return j}});var l=n(5893),t=n(7294),i=n(1163),r=n(1449),c=n(1918),d=n(5007),o=n(6129),a=n(6802),u=n(8232),h=n(564),x=n(9184),m=function(e){var s,n,m,j;let{slug:g}=e,[p,v]=(0,t.useState)(!0),_=(0,d.I0)(),{singleBrendData:f}=(0,d.v9)(o.gg),[b,k]=(0,t.useState)(!1),[w,N]=(0,t.useState)(1),[C,L]=(0,t.useState)(30),I=(0,i.useRouter)(),{preOrderData:T}=(0,d.v9)(x.nR);(0,t.useEffect)(()=>{var e;(null==f?void 0:null===(e=f.products)||void 0===e?void 0:e.length)<C&&k(!0),b||(_((0,a.QD)({brendId:g,limit:C,page:w})),k(!0))},[f]),(0,t.useCallback)(()=>{w<f.lastPage&&(_((0,a.QD)({brendId:g,limit:20,page:w+1})),N(w+1),window.scrollTo(0,0),L(20))},[w,f]),(0,t.useCallback)(()=>{w>1&&(_((0,a.QD)({brendId:g,limit:20,page:w+1})),N(w-1),L(20),window.scrollTo(0,0))},[w,f]);let Z=(0,t.useCallback)(()=>{C<f.total+10&&(_((0,a.QD)({brendId:g,limit:C+30,page:1})),L(C+30))},[C,f]);return(0,t.useEffect)(()=>{window.scrollTo(0,0)},[I]),(0,t.useEffect)(()=>{},[T]),(0,l.jsx)(l.Fragment,{children:p?(0,l.jsxs)(l.Fragment,{children:[T.id&&(0,l.jsx)(h.Z,{}),(0,l.jsx)(u.Z,{title:null==f?void 0:null===(s=f.brand)||void 0===s?void 0:s.title,links:[{name:"Бренды",link:"/brands"}]}),(0,l.jsx)("section",{className:"brend-single",children:(0,l.jsxs)("div",{className:"brend-single__container _container",children:[(0,l.jsx)("h1",{children:null==f?void 0:null===(n=f.brand)||void 0===n?void 0:n.title}),(0,l.jsx)("div",{className:"brend-single__grid",children:null==f?void 0:null===(m=f.products)||void 0===m?void 0:m.map(e=>(0,l.jsx)(c.Z,{title:e.title,img:e.image?"http://api.calcarela.com"+e.image:null,price:e.price,salePrice:0!==e.special_price&&e.special_price,id:e.id,slug:e.slug},e.id))}),C===(null==f?void 0:null===(j=f.products)||void 0===j?void 0:j.length)&&(0,l.jsx)("div",{className:"catalog-single__more",children:(0,l.jsxs)("button",{className:"show-more",onClick:()=>{Z()},children:[(0,l.jsx)("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M1.06189 9.7385C1.02104 9.42042 1 9.09641 1 8.76755C1 4.47765 4.58172 1 9 1C11.5006 1 13.7332 2.11394 15.2002 3.85862M15.2002 3.85862V1M15.2002 3.85862V3.91276L12.2002 3.91283M16.9381 7.79661C16.979 8.11469 17 8.4387 17 8.76755C17 13.0575 13.4183 16.5351 9 16.5351C6.61061 16.5351 4.46589 15.518 3 13.9054M3 13.9054V13.6223H6M3 13.9054V16.5351",stroke:"#333333",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Показать еще"]})})]})})]}):(0,l.jsx)(r.Z,{})})};function j(){let{slug:e}=(0,i.useRouter)().query;return(0,t.useEffect)(()=>{},[e]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.Suspense,{children:e&&(0,l.jsx)(m,{slug:e})})})}},1163:function(e,s,n){e.exports=n(3035)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7969)}),_N_E=e.O()}]);