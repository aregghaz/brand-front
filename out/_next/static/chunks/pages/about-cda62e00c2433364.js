(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(9660)}])},8232:function(e,s,n){"use strict";var i=n(5893),l=n(1664),t=n.n(l),c=n(7294);s.Z=function(e){let{title:s,links:n}=e;return(0,i.jsx)("div",{className:"brendcrumbs",children:(0,i.jsxs)("div",{className:"brendcrumbs__container _container",children:[(0,i.jsx)(t(),{href:"/",children:"Главная"}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})}),(null==n?void 0:n.length)?n.map((e,s)=>(0,i.jsxs)(c.Fragment,{children:[(0,i.jsx)(t(),{href:e.link,children:e.name}),(0,i.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})})]},s)):"",(0,i.jsx)("p",{children:s})]})})}},1918:function(e,s,n){"use strict";var i=n(5893),l=n(7294),t=n(5007),c=n(1664),r=n.n(c),a=n(7741),d=n(9633),o=n(9314),u=n(1935),h=n(4687),m=n(3308),x=n(9184),g=n(796),p=n(1163);s.Z=(0,l.memo)(function(e){let{title:s,img:n,price:c,salePrice:j,id:_,slug:v,total:f,book:N}=e,b=(0,t.I0)(),k=(0,l.useRef)(null),[w,C]=(0,l.useState)(!1),F=(0,p.useRouter)(),{loginData:L}=(0,t.v9)(d.YN),{uuId:I}=(0,t.v9)(m.aQ),{guestUserId:Z}=(0,t.v9)(g.KY),T=(0,l.useCallback)(()=>{b((0,a.HC)({productCount:"1",productId:_,userToken:L.access_token?L.access_token:null,guestUserId:Z})),C(!0),setTimeout(()=>{C(!1)},1e3)},[Z]),E=(0,l.useCallback)(()=>{b((0,u.Dq)({userToken:L.access_token,productId:_,guestUserId:!!I&&I})),C(!0),setTimeout(()=>{C(!1)},1e3),console.log(f>N.length)},[I]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"product-item",children:[(0,i.jsxs)(r(),{href:"/product/".concat(v),style:{backgroundImage:n&&"url("+n+")"},className:"product-item__img",onClick:()=>{b((0,o.Rc)({slug:v}))},scroll:!1,children:[j>0&&(0,i.jsxs)("div",{className:"discount_div",children:["- ",100-100*j/c," %"]}),(0,i.jsx)("img",{src:n,alt:s})]}),(0,i.jsxs)("div",{className:"product-item__text",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(r(),{href:"/product/".concat(v),onClick:()=>{b((0,o.Rc)({slug:v}))},scroll:!1,title:s,children:s})}),(0,i.jsx)("div",{className:"product-item__prices",children:j?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:[j," ₽"]}),(0,i.jsxs)("span",{children:[c," ₽"]})]}):(0,i.jsxs)("p",{children:[c," ₽"]})}),(0,i.jsx)(r(),{href:"/",className:"credit-btn",children:"Оформить кредит в магазине!"}),(0,i.jsxs)("div",{className:"product-item__buttons",children:[(0,i.jsx)("button",{onClick:T,className:"buy-btn",disabled:(null==N?void 0:N.length)>=f,style:{maxWidth:(null==N?void 0:N.length)>=f&&"unset",backgroundColor:(null==N?void 0:N.length)>=f&&"#939393"},children:(null==N?void 0:N.length)>=f?"Забронировано":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.wh,{color:"#FFF"}),"Купить",w&&(0,i.jsx)("span",{className:"product-item__animate",ref:k,children:"1"})]})}),"/liked"!==F.pathname?(0,i.jsx)("button",{className:"like-btn",onClick:E,children:(0,i.jsx)(h.lM,{})}):(0,i.jsx)("button",{className:"like-btn",onClick:()=>{b((0,u.ns)({userToken:L.access_token,productId:_,guestUserId:I}))},children:(0,i.jsx)(h.yl,{})}),(null==N?void 0:N.length)>=f?"":(0,i.jsx)("button",{className:"preorder-btn",onClick:()=>{L.access_token?b((0,x.gW)({id:_,price:j||c,name:s,toggle:!0})):F.push("/login")},children:(0,i.jsx)(h.fC,{})})]})]})]})})})},6646:function(e,s,n){"use strict";var i=n(5893),l=n(7294),t=n(2261);n(4276);var c=n(1918),r=n(5007),a=n(1704),d=n(1753);s.Z=(0,l.memo)(function(e){let{idx:s,fetch:n}=e,{getTags:o,tagsData:u}=(0,r.v9)(a.a0),h=(0,r.I0)();return(0,l.useEffect)(()=>{u.length<1&&!o&&(h((0,a.Y8)()),h((0,d.$)({limit:20,fetch:n})))},[u]),(0,i.jsx)(i.Fragment,{children:u.length?(0,i.jsx)("section",{className:"products",children:(0,i.jsxs)("div",{className:"products__container _container",children:[(0,i.jsx)("div",{className:"section-title",children:(0,i.jsx)("h2",{children:u[s].title})}),(0,i.jsx)("div",{className:"products__swiper",children:(0,i.jsx)(t.tq,{slidesPerView:"auto",loop:u[s].products.length>16,className:"swiper",children:u[s].products.map(e=>(0,i.jsx)(t.o5,{className:"swiper-slide",children:(0,i.jsx)(c.Z,{title:(null==e?void 0:e.title)&&e.title,img:(null==e?void 0:e.image)&&"http://api.calcarela.com"+(null==e?void 0:e.image),price:null==e?void 0:e.price,salePrice:(null==e?void 0:e.special_price)!==0&&(null==e?void 0:e.special_price),slug:null==e?void 0:e.slug,id:e.id,book:e.book,total:e.quantity})},null==e?void 0:e.id))})})]})}):""})})},9660:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var i=n(5893);n(7294);var l=n(5273),t=function(){return(0,i.jsx)("section",{className:"abaut-page",children:(0,i.jsxs)("div",{className:"abaut-page__container _container",children:[(0,i.jsxs)("div",{className:"abaut-page__text",children:[(0,i.jsx)("h1",{children:"БРЕНД-Инструмент"}),(0,i.jsx)("p",{children:"\xabБРЕНД-Инструмент\xbb – это сервис по скупке и продаже строительного инструмента бывшего в употреблении. Если у Вас стройка, работа в цеху, или просто мелкий ремонт в доме или квартире, то ручной и электроинструмент будет для Вас главным помощником."}),(0,i.jsx)("p",{children:"В ассортименте нашего магазина представлены все инструменты ведущих брендов строительного оснащения, такие как: Makita, Hilti, Bosch из Германии, Италии и Японии и д.р."}),(0,i.jsx)("p",{children:"Доступные цены, склад в Москве, возможность консультаций – это главные преимущества нашего сервиса. Просто прикрутить саморез, просверлить отверстие или проштробить стену, теперь не будет для Вас большой проблемой. Не надо часами выбирать магазин для покупки инструмента – всё необходимое есть у нас."}),(0,i.jsx)("p",{children:"Вам ни к чему лишние затраты при ремонте, и строительстве, тогда Вы понимаете почему покупать бывший в упортеблении электроинструмент выгодно!Мы помогаем людям уменьшить свои затраты во время проведения стройки или ремонта!"})]}),(0,i.jsxs)("div",{className:"abaut-page__grid",children:[(0,i.jsx)("img",{src:"".concat(l.F,"/img/r3 1.png"),alt:"img"}),(0,i.jsx)("img",{src:"".concat(l.F,"/img/r10 1.png"),alt:"img"}),(0,i.jsx)("img",{src:"".concat(l.F,"/img/r9 1.png"),alt:"img"}),(0,i.jsx)("img",{src:"".concat(l.F,"/img/R1 1.png"),alt:"img"})]})]})})},c=n(8232),r=n(6646);function a(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{title:"О компании"}),(0,i.jsx)(t,{}),(0,i.jsx)(r.Z,{idx:0,fetch:!0})]})}},1163:function(e,s,n){e.exports=n(3035)}},function(e){e.O(0,[576,888,774,179],function(){return e(e.s=512)}),_N_E=e.O()}]);