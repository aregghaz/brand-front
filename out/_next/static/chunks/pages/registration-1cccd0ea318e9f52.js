(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{4508:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registration",function(){return a(6561)}])},8232:function(e,s,a){"use strict";var t=a(5893),n=a(1664),r=a.n(n),i=a(7294);s.Z=function(e){let{title:s,links:a}=e;return(0,t.jsx)("div",{className:"brendcrumbs",children:(0,t.jsxs)("div",{className:"brendcrumbs__container _container",children:[(0,t.jsx)(r(),{href:"/",children:"Главная"}),(0,t.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})}),(null==a?void 0:a.length)?a.map((e,s)=>(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(r(),{href:e.link,children:e.name}),(0,t.jsx)("svg",{width:6,height:10,viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M-5.13609e-08 1.175L3.7085 5L-3.85753e-07 8.825L1.1417 10L6 5L1.1417 -2.12363e-07L-5.13609e-08 1.175Z",fill:"#333333"})})]},s)):"",(0,t.jsx)("p",{children:s})]})})}},6561:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return g}});var t=a(5893),n=a(7294),r=a(2175),i=a(6310),l=a(6627),o=a.n(l),m=a(7066),c=a(5007),d=a(6978),h=a(9332),u=a(1664),p=a.n(u),x=a(9633),f=function(){let e=(0,c.I0)(),[s,a]=(0,n.useState)(!1),l=(0,h.useRouter)(),u=i.Ry().shape({name:i.Z_().required(),lastName:i.Z_().required(),email:i.Z_().email().required(),password:i.Z_().typeError("Must be a string").min(3,"Короткий пароль").matches(/[0-9]/,"Пароль должен содержать цифру").required("Обязательное поле"),confirmPassword:i.Z_().typeError("Must be a string").oneOf([i.iH("password")],"Пожалуйста, введите правильный пароль").required("Обязательное поле"),phone:i.Z_().required()});return(0,t.jsx)("section",{className:"registration",children:(0,t.jsxs)("div",{className:"registration__container _container",children:[(0,t.jsx)("div",{className:"registration__img",children:(0,t.jsx)("img",{src:"https://brend-instrument.ru/img/r9 2.png",alt:"img",width:658,height:632})}),(0,t.jsxs)("div",{className:"registration__right",children:[(0,t.jsx)("h1",{children:"Регистрация"}),(0,t.jsx)(r.J9,{initialValues:{name:"",lastName:"",fatherName:"",password:"",confirmPassword:"",phone:"",email:""},onSubmit:async(s,t)=>{let{resetForm:n}=t;await m.Z.post("https://back.brend-instrument.ru/api/auth/registration",{name:s.name,lastName:s.lastName,fatherName:s.fatherName,phone:s.phone,email:s.email,password:s.password,password_confirmation:s.confirmPassword,subscribed:!1}).then(s=>{let{data:a}=s;e((0,x.Ib)({loginData:{...a},save:!1})),e((0,d.BT)({userToken:a.access_token})),l.push("/"),n()}).catch(e=>{let{response:s}=e;a(!0)})},validateOnBlur:!0,validationSchema:u,children:e=>{let{values:a,errors:n,touched:i,handleChange:l,handleBlur:m,isValid:c,dirty:d,handleSubmit:h}=e;return(0,t.jsxs)(r.l0,{autoComplete:"off",className:"registration__form",onSubmit:h,children:[s&&(0,t.jsxs)("p",{className:"error-message",children:["Электронный адрес уже существует. Попробуйте другой адрес или ",(0,t.jsx)(p(),{href:"/rememberPass",children:"восстановите пароль"}),"."]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("label",{className:"input-text",children:["Фамилия *",(0,t.jsx)(r.gN,{type:"text",className:"input",name:"lastName",autoComplete:"off",style:{borderColor:n.lastName&&i.lastName?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsxs)("label",{className:"input-text",children:["Имя *",(0,t.jsx)(r.gN,{type:"text",className:"input",name:"name",autoComplete:"off",style:{borderColor:n.name&&i.name?"red":"inherit"},onChange:l,onBlur:m})]})]}),(0,t.jsxs)("label",{className:"input-text",children:["Отчество *",(0,t.jsx)(r.gN,{type:"text",className:"input",name:"fatherName",autoComplete:"off",style:{borderColor:n.fatherName&&i.fatherName?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsxs)("label",{className:"input-text",children:["введите эл. адрес *",(0,t.jsx)(r.gN,{type:"email",className:"input",name:"email",autoComplete:"off",inputProps:{autoCapitalize:"off"},style:{borderColor:n.email&&i.email?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsxs)("label",{className:"input-text",children:["Телефон *",(0,t.jsx)(o(),{mask:"+7 (999) 999-99-99",maskChar:null,type:"text",name:"phone",className:"input",autoComplete:"off",style:{borderColor:n.phone&&i.phone?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsxs)("label",{className:"input-text",children:["пароль *",(0,t.jsx)(r.gN,{type:"password",className:"input",name:"password",autoComplete:"off",style:{borderColor:n.password&&i.password?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsxs)("label",{className:"input-text",children:["Повторите пароль *",(0,t.jsx)(r.gN,{type:"password",className:"input",name:"confirmPassword",autoComplete:"off",style:{borderColor:n.confirmPassword&&i.confirmPassword?"red":"inherit"},onChange:l,onBlur:m})]}),(0,t.jsx)("label",{className:"input-btn",children:(0,t.jsx)("input",{type:"submit",value:"Регистрация",className:"input"})})]})}})]})]})})},N=a(8232),g=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.Z,{title:"Регистрация"}),(0,t.jsx)(f,{})]})}}},function(e){e.O(0,[332,888,774,179],function(){return e(e.s=4508)}),_N_E=e.O()}]);