(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{7177:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return t(4925)}])},8232:function(e,s,t){"use strict";var i=t(5893),n=t(1664),l=t.n(n),c=t(7294);s.Z=function(e){let{title:s,links:t}=e;return(0,i.jsx)("div",{className:"brendcrumbs",children:(0,i.jsxs)("div",{className:"brendcrumbs__container _container",children:[(0,i.jsx)(l(),{href:"/",children:"Главная"}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})}),(null==t?void 0:t.length)?t.map((e,s)=>(0,i.jsxs)(c.Fragment,{children:[(0,i.jsx)(l(),{href:e.link,children:e.name}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})})]},s)):"",(0,i.jsx)("p",{children:s})]})})}},556:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var i=t(5893),n=t(1664),l=t.n(n);t(7294);var c=t(5007),r=t(1936);function a(e){let{title:s,img:t,id:n,slug:a}=e,o=(0,c.I0)();return(0,i.jsxs)("div",{className:"category-item",children:[(0,i.jsx)(l(),{href:"/categorySingl/".concat(a),onClick:()=>{o((0,r.th)({categorySlug:a,limit:20})),o((0,r.kZ)({categoryId:n,limit:20}))},className:"category-item__img",children:(0,i.jsx)("img",{src:t,alt:s})}),(0,i.jsx)("h3",{children:(0,i.jsx)(l(),{href:"/categorySingl/".concat(a),onClick:()=>{o((0,r.th)({categorySlug:a,limit:20})),o((0,r.kZ)({categoryId:n,limit:20}))},children:s})})]})}},564:function(e,s,t){"use strict";var i=t(5893),n=t(9184),l=t(9633),c=t(4687),r=t(7066),a=t(7294),o=t(5007);s.Z=function(){let{loginData:e}=(0,o.v9)(l.YN),[s,t]=(0,a.useState)("Забронируйте инструмент заранее, и мы отложим их специально для вас! Бронь будет действительна в течение 24 часов."),[d,u]=(0,a.useState)(!0),{preOrderData:h}=(0,o.v9)(n.nR),m=(0,o.I0)();return(0,a.useEffect)(()=>{},[h]),(0,i.jsx)("div",{className:"preorder-modal",children:(0,i.jsxs)("div",{className:"preorder-modal__container",children:[(0,i.jsxs)("div",{className:"preorder-modal__title",children:[(0,i.jsx)("h2",{children:"Забронировать"}),(0,i.jsx)("button",{onClick:()=>m((0,n.gW)()),children:(0,i.jsx)(c.Nn,{})})]}),(0,i.jsxs)("div",{className:"preorder-modal__body",children:[(0,i.jsx)("p",{children:s}),(0,i.jsx)("button",{onClick:()=>{d?r.Z.post("http://api.calcarela.com/api/auth/pre-order/".concat(h.id),{},{headers:{Authorization:"Bearer "+e.access_token}}).then(e=>{200===e.status&&(t("Спасибо! Ваша заявка принята, скоро мы с Вами свяжемся!"),u(!1),setTimeout(()=>{m((0,n.gW)())},5e3))}):m((0,n.gW)())},children:d?"Забронировать":"Закрыть"})]})]})})}},1918:function(e,s,t){"use strict";var i=t(5893),n=t(7294),l=t(5007),c=t(1664),r=t.n(c),a=t(7741),o=t(9633),d=t(9314),u=t(1935),h=t(4687),m=t(3308),x=t(9184),g=t(796),j=t(1163);s.Z=(0,n.memo)(function(e){let{title:s,img:t,price:c,salePrice:p,id:v,slug:_,total:f,book:N}=e,k=(0,l.I0)(),b=(0,n.useRef)(null),[w,C]=(0,n.useState)(!1),y=(0,j.useRouter)(),{loginData:I}=(0,l.v9)(o.YN),{uuId:Z}=(0,l.v9)(m.aQ),{guestUserId:L}=(0,l.v9)(g.KY),S=(0,n.useCallback)(()=>{k((0,a.HC)({productCount:"1",productId:v,userToken:I.access_token?I.access_token:null,guestUserId:L})),C(!0),setTimeout(()=>{C(!1)},1e3)},[L]),F=(0,n.useCallback)(()=>{k((0,u.Dq)({userToken:I.access_token,productId:v,guestUserId:!!Z&&Z})),C(!0),setTimeout(()=>{C(!1)},1e3),console.log(f>N.length)},[Z]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"product-item",children:[(0,i.jsxs)(r(),{href:"/product/".concat(_),style:{backgroundImage:t&&"url("+t+")"},className:"product-item__img",onClick:()=>{k((0,d.Rc)({slug:_}))},scroll:!1,children:[p>0&&(0,i.jsxs)("div",{className:"discount_div",children:["- ",100-100*p/c," %"]}),(0,i.jsx)("img",{src:t,alt:s})]}),(0,i.jsxs)("div",{className:"product-item__text",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(r(),{href:"/product/".concat(_),onClick:()=>{k((0,d.Rc)({slug:_}))},scroll:!1,title:s,children:s})}),(0,i.jsx)("div",{className:"product-item__prices",children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:[p," ₽"]}),(0,i.jsxs)("span",{children:[c," ₽"]})]}):(0,i.jsxs)("p",{children:[c," ₽"]})}),(0,i.jsx)(r(),{href:"/",className:"credit-btn",children:"Оформить кредит в магазине!"}),(0,i.jsxs)("div",{className:"product-item__buttons",children:[(0,i.jsx)("button",{onClick:S,className:"buy-btn",disabled:(null==N?void 0:N.length)>=f,style:{maxWidth:(null==N?void 0:N.length)>=f&&"unset",backgroundColor:(null==N?void 0:N.length)>=f&&"#939393"},children:(null==N?void 0:N.length)>=f?"Забронировано":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.wh,{color:"#FFF"}),"Купить",w&&(0,i.jsx)("span",{className:"product-item__animate",ref:b,children:"1"})]})}),"/liked"!==y.pathname?(0,i.jsx)("button",{className:"like-btn",onClick:F,children:(0,i.jsx)(h.lM,{})}):(0,i.jsx)("button",{className:"like-btn",onClick:()=>{k((0,u.ns)({userToken:I.access_token,productId:v,guestUserId:Z}))},children:(0,i.jsx)(h.yl,{})}),(null==N?void 0:N.length)>=f?"":(0,i.jsx)("button",{className:"preorder-btn",onClick:()=>{I.access_token?k((0,x.gW)({id:v,price:p||c,name:s,toggle:!0})):y.push("/login")},children:(0,i.jsx)(h.fC,{})})]})]})]})})})},6646:function(e,s,t){"use strict";var i=t(5893),n=t(7294),l=t(2261);t(4276);var c=t(1918),r=t(5007),a=t(1704),o=t(1753);s.Z=(0,n.memo)(function(e){let{idx:s,fetch:t}=e,{getTags:d,tagsData:u}=(0,r.v9)(a.a0),h=(0,r.I0)();return(0,n.useEffect)(()=>{u.length<1&&!d&&(h((0,a.Y8)()),h((0,o.$)({limit:20,fetch:t})))},[u]),(0,i.jsx)(i.Fragment,{children:u.length?(0,i.jsx)("section",{className:"products",children:(0,i.jsxs)("div",{className:"products__container _container",children:[(0,i.jsx)("div",{className:"section-title",children:(0,i.jsx)("h2",{children:u[s].title})}),(0,i.jsx)("div",{className:"products__swiper",children:(0,i.jsx)(l.tq,{slidesPerView:"auto",loop:u[s].products.length>16,className:"swiper",children:u[s].products.map(e=>(0,i.jsx)(l.o5,{className:"swiper-slide",children:(0,i.jsx)(c.Z,{title:(null==e?void 0:e.title)&&e.title,img:(null==e?void 0:e.image)&&"http://api.calcarela.com"+(null==e?void 0:e.image),price:null==e?void 0:e.price,salePrice:(null==e?void 0:e.special_price)!==0&&(null==e?void 0:e.special_price),slug:null==e?void 0:e.slug,id:e.id,book:e.book,total:e.quantity})},null==e?void 0:e.id))})})]})}):""})})},4925:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var i=t(5893),n=t(5007),l=t(1704);t(1753),t(9314);var c=t(7294);t(3595),t(1936);var r=t(556),a=function(e){let{Item:s}=e;(0,n.I0)();let[t,l]=(0,c.useState)(!1);return(0,i.jsx)("section",{className:"catalog",children:(0,i.jsxs)("div",{className:"catalog__container _container",children:[(0,i.jsx)("h1",{children:"Каталог"}),(0,i.jsx)("div",{className:"catalog__grid",children:null==s?void 0:s.map(e=>(0,i.jsx)(r.Z,{img:"http://api.calcarela.com/"+e.image,title:e.title,id:e.id.toString(),slug:e.slug},e.id))})]})})},o=t(6646),d=t(8232),u=t(564),h=t(9184);function m(){(0,n.I0)();let{tagsData:e,getTags:s}=(0,n.v9)(l.a0),[t,r]=(0,c.useState)(!0),{preOrderData:m}=(0,n.v9)(h.nR);return(0,c.useEffect)(()=>{s?r(!1):r(!0)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{}),(0,i.jsx)(a,{}),(0,i.jsx)(o.Z,{idx:0,fetch:t}),m.id&&(0,i.jsx)(u.Z,{})]})}},1163:function(e,s,t){e.exports=t(3035)}},function(e){e.O(0,[576,888,774,179],function(){return e(e.s=7177)}),_N_E=e.O()}]);