(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{27:function(i,e,t){},34:function(i,e,t){},35:function(i,e,t){},59:function(i,e,t){},61:function(i,e,t){},62:function(i,e,t){"use strict";t.r(e);var a=t(1),n=t.n(a),o=t(28),s=t.n(o),u=(t(34),t.p,t(35),t(4)),r=t(7),c=t(0),l=function(){return Object(c.jsx)("div",{className:"navigation",children:Object(c.jsx)("nav",{className:"nav__menu",children:Object(c.jsxs)("div",{className:"nav__list",children:[Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/news",className:"nav__link",children:"News"})}),Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/home",className:"nav__link",children:"Home"})}),Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/gallery",className:"nav__link",children:"Gallery"})}),Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/routes",className:"nav__link",children:"Routes"})}),Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/tools",className:"nav__link",children:"Tools"})}),Object(c.jsx)("span",{children:Object(c.jsx)(r.b,{to:"/main",className:"nav__link",children:"Main"})}),Object(c.jsx)("div",{className:"nav__burger"})]})})})},d=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"footer__item",children:[Object(c.jsx)("p",{className:"footer__copyright",children:"Copyrights 2021"}),Object(c.jsx)("p",{className:"footer__author",children:"Anvar"})]})})},m=function(i){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),m=r[0],p=r[1];console.log(a.useState);return Object(c.jsxs)("div",{children:["Some JS",Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:["Input URL",Object(c.jsx)("textarea",{name:"inputUrl",value:n,onChange:function(i){return o(i.target.value)}})]}),Object(c.jsx)("div",{}),Object(c.jsxs)("span",{children:["Output URL",Object(c.jsx)("textarea",{name:"outputUrl",value:m})]}),Object(c.jsx)("button",{name:"submit",onClick:function(i){return p(function(i){var e=i.indexOf("//")>-1?i.split("/")[2]:i.split("/")[0];return(e=e.split(":")[0]).split("?")[0]}(n))},children:" Submit "})]}),Object(c.jsx)(l,{}),Object(c.jsx)(d,{})]})},p=function(i){var e=Object(a.useState)(38),t=Object(u.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(11),r=Object(u.a)(s,2),m=r[0],p=r[1],b=Object(a.useState)(2800),f=Object(u.a)(b,2),j=f[0],x=f[1],h=Object(a.useState)(90),g=Object(u.a)(h,2),q=g[0],v=g[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"speedCalc",children:Object(c.jsxs)("div",{className:"speedCalc__container",children:[Object(c.jsx)("label",{children:"Chainring tooth "}),Object(c.jsx)("input",{name:"chainring",type:"number",className:"chainring",value:n,onChange:function(i){return o(i.target.value)}}),Object(c.jsx)("label",{children:"Cassette tooth "}),Object(c.jsx)("input",{name:"cassette",type:"number",className:"cassette",value:m,onChange:function(i){return p(i.target.value)}}),Object(c.jsx)("label",{children:"Wheel size (in cm for circle) "}),Object(c.jsx)("input",{name:"wheelSize",type:"number",className:"wheelSize",value:j,onChange:function(i){return x(i.target.value)}}),Object(c.jsx)("label",{children:"Cadence "}),Object(c.jsx)("input",{name:"cadence",type:"number",className:"cadence",value:q,onChange:function(i){return v(i.target.value)}}),Object(c.jsxs)("div",{className:"gearsRatio",children:["Gear ratio: ",n/m]}),Object(c.jsxs)("div",{className:"speedResult",children:["Km/h: ",6e-5*q*j*(n/m)," Merged"]})]})}),Object(c.jsx)(l,{}),Object(c.jsx)(d,{})]})},b=(t(22),t(23),t(13)),f=t.n(b),j=t(10),x=t(15),h=t(16),g=t(18),q=t(17),v=(a.Component,[{name:"photo1",url:"https://images.unsplash.com/photo-1595979805928-c8bac9684486?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{name:"photo2",url:"https://images.unsplash.com/photo-1612993232871-47e86e7de1f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{name:"photo3",url:"https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{name:"photo4",url:"https://images.unsplash.com/photo-1613078676786-000bd2619d5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{name:"photo5",url:"https://images.unsplash.com/photo-1613114016704-e573188468a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},{name:"photo6",url:"https://images.unsplash.com/photo-1613114016545-8352ff5b8d9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},{name:"photo7",url:"https://images.unsplash.com/photo-1613144123668-d9c705841eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},{name:"photo8",url:"https://images.unsplash.com/photo-1612703508477-00e02a9b170c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80"},{name:"photo9",url:"https://images.unsplash.com/photo-1613026468322-c1b22cd40fca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}]),O=function(i){Object(g.a)(t,i);var e=Object(q.a)(t);function t(){return Object(x.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(c.jsx)(f.a,Object(j.a)(Object(j.a)({},{className:"center__slider",centerMode:!0,infinite:!0,centerPadding:"60px",slidesToShow:3,speed:500}),{},{children:v.map((function(i){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{width:"100%",height:"640",src:i.url})})}))}))}}]),t}(a.Component),w=(t(59),function(){return Object(c.jsx)("body",{children:Object(c.jsxs)("div",{className:"page__content",children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(r.b,{to:"/home",className:"header__logo"}),Object(c.jsx)("div",{className:"slider",children:Object(c.jsx)("div",{className:"slider__item",children:Object(c.jsx)(O,{})})})]}),Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"maincontent",children:Object(c.jsx)("div",{className:"maincontent__box",children:Object(c.jsxs)("div",{className:"maincontent__items",children:[Object(c.jsx)("div",{className:"maincontent__item1  left",children:"1"}),Object(c.jsx)("div",{className:"maincontent__item2 right",children:"2"}),Object(c.jsx)("div",{className:"maincontent__item3 right",children:"3"}),Object(c.jsx)("div",{className:"maincontent__item4 right",children:"4"}),Object(c.jsx)("div",{className:"maincontent__item5 right",children:"5"})]})})}),Object(c.jsx)(d,{})]})]})})}),N=(t(27),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)(l,{}),Object(c.jsx)(d,{})]})}),y=t(2),M=function(){return Object(c.jsx)("div",{className:"authpage",children:Object(c.jsx)("h1",{children:"Auth Page"})})},_=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)(l,{}),Object(c.jsx)(d,{})]})};var E=function(i){var e=i.article,t=i.isOpen,n=i.onButtonClick;console.log(i);var o=Object(a.useState)(0),s=Object(u.a)(o,2),r=s[0],l=s[1],d=t&&Object(c.jsx)("section",{className:"card-text",children:e.text});return Object(a.useEffect)((function(){console.log("isOpen in Article",t)})),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsxs)("h2",{onClick:function(){l(r+1)},children:[e.title,"clicked ",r,Object(c.jsx)("button",{className:"btn btn-primary btn-lg float-end",onClick:n,children:t?"close":"open"})]})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("h6",{className:"card-subtitle text-muted",children:[" Creation date: ",new Date(e.date).toDateString()]}),d]})]})};t(60),t(61);function D(i){var e=i.articles,t=Object(a.useState)(null),n=Object(u.a)(t,2),o=n[0],s=n[1],r=Object(a.useState)(""),d=Object(u.a)(r,2),m=d[0],p=d[1];console.log("openArticleId",m);var b=e.map((function(i,e){return Object(c.jsxs)("li",{className:"article-list__li",children:[Object(c.jsx)(E,{article:i,isOpen:m===i.id,onButtonClick:function(){return function(i){return p(i)}(i.id)}}),console.log("article.id",i.id),console.log("openArticleId === article.id",m===i.id),console.log("typeof (openArticleId)",typeof m),console.log("typeof (article.id)",typeof i.id)]},i.id)}));return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"jumbotron",children:[Object(c.jsx)(l,{}),Object(c.jsxs)("h1",{className:"display-3",children:["Articles",Object(c.jsx)("button",{className:"btn-primary",onClick:function(){s(!o)},children:"Revert"})]})]}),Object(c.jsx)("ul",{children:o?b.slice().reverse():b.slice()})]})}var L=[{id:"56c782f18990ecf954f6e027",date:"2016-06-09T15:03:23.000Z",title:"React Is Awesome!!!",text:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. \n We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",comments:[{id:"qwerqwer",user:"Gilliam Underwood",text:"Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."},{id:"lkjhsdlfkg",user:"Dolly Franklin",text:"Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt."},{id:"zxcvzcxvzxcv",user:"Brennan Atkins",text:"Nisi sit nisi cillum dolor fugiat sint do nostrud ex cillum cupidatat. Culpa do duis non et excepteur labore dolor culpa qui tempor veniam. Ex labore deserunt qui sit aute ad incididunt do cupidatat eiusmod reprehenderit ad. Qui laborum qui voluptate velit et consectetur ipsum enim dolore minim. Est sint velit tempor reprehenderit. Qui consectetur ad minim consequat."},{id:"fghjfghjfghj",user:"Jodi Humphrey",text:"Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod."},{id:"ertyoertywte",user:"Joyce Weber",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."}]},{id:"56c782f17b4e0ba78c7ad717",date:"2016-04-09T18:03:23.000Z",title:"Quis occaecat",text:"Quis occaecat duis aliqua reprehenderit excepteur nisi deserunt excepteur elit magna. Magna cillum anim veniam deserunt voluptate occaecat irure fugiat laboris proident. Tempor do magna deserunt cillum laborum cillum ut.\n\nEst sunt cupidatat in deserunt sit aliqua duis. Mollit consequat duis aliquip occaecat pariatur non do eiusmod dolore amet deserunt ullamco. Ea minim tempor exercitation do tempor nostrud dolor minim veniam laboris commodo ex duis. Do nostrud voluptate ullamco consequat anim tempor voluptate incididunt aliqua tempor.\n\nIn irure quis nostrud do. Labore laboris irure culpa reprehenderit pariatur laboris in commodo culpa enim cillum magna. Magna ipsum pariatur sunt in reprehenderit ipsum duis officia voluptate adipisicing ad officia. Duis est sint mollit amet laborum magna non quis nulla ipsum in veniam sit. Amet velit consequat esse esse ea. Ipsum non do ut cillum in adipisicing labore non commodo do laborum sunt.",comments:[{id:"qwerqwertyy",user:"Gilliam Underwood",text:"Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."},{id:"sdfgsdfghu7u7urtv",user:"Jodi Humphrey",text:"Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod."}]},{id:"56c782f1978fdf9a0100df52",date:"2016-06-02T11:03:23.000Z",title:"Hello my new world",text:"Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.",comments:[{id:"kjfviudfv089w74",user:"Joyce Weber",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."},{id:"r23uyrghasdfb7",user:"Joyce Weber",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."}]},{id:"56c782f1e17f4f9311dfaa2c",date:"2016-05-19T23:03:23.000Z",title:"Voluptate est officia",text:"Voluptate est officia pariatur tempor labore consequat consequat consectetur culpa enim. Amet laborum commodo in ullamco magna aliquip. Cupidatat veniam adipisicing labore irure nostrud sunt proident aute in. Sit Lorem consequat cillum enim id excepteur aliqua nostrud sint quis aute est est dolor. Sunt culpa est magna ad qui consequat exercitation. Enim sit ex do cupidatat laborum.\n\nOccaecat do tempor ex in dolor cupidatat do quis laboris anim. Et duis esse pariatur magna ex ipsum ut do ut id cillum. Nostrud fugiat sit minim ea. Nisi nulla sunt et et voluptate. Velit reprehenderit enim nulla mollit dolore excepteur Lorem do Lorem do cillum est qui. Ipsum mollit duis laboris incididunt non sit sunt proident. Aute voluptate id sunt aute proident officia.\n\nEnim ut nulla cillum officia cupidatat eiusmod amet laborum do labore id. Laborum in laboris aliquip anim consectetur magna reprehenderit consequat eiusmod esse Lorem consequat aliqua. Eiusmod voluptate mollit sint consectetur eu deserunt laboris ad et sunt nulla fugiat quis non. Dolor qui do cupidatat proident mollit amet sint pariatur non aliquip enim ex.",comments:[{id:"rflsbvyeuwr334rg5",user:"Random Name",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."},{id:"234faasffasgfq3r3eda",user:"Felix Soyferman",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."}]},{id:"56c782f197fe2bad471b3740",date:"2016-06-04T15:03:23.000Z",title:"Ex sunt sunt aliqua",text:"Ex sunt sunt aliqua reprehenderit aliqua occaecat. Minim anim commodo officia veniam proident aute cillum eu sunt aute nostrud. Laboris fugiat velit ut pariatur occaecat adipisicing pariatur occaecat. Duis sint enim et consectetur quis pariatur laborum excepteur. Ipsum aliquip qui laborum commodo consectetur do velit veniam occaecat. Ad nisi dolor cillum elit magna dolor voluptate ea. Enim in duis ea consequat sunt Lorem aute.\n\nEst elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt. Velit mollit consectetur aliqua id tempor ut. Tempor cupidatat aliquip excepteur occaecat incididunt nulla Lorem sint.\n\nNon commodo anim deserunt in et aliquip incididunt ut consectetur sunt esse commodo deserunt et. Tempor fugiat laboris cillum laboris labore. Deserunt quis ad do labore amet culpa officia. Esse et officia nostrud tempor occaecat officia anim incididunt amet sunt excepteur Lorem. Aute occaecat magna velit nisi sit anim consequat velit qui pariatur. Esse incididunt id officia aliqua anim ut et.",comments:[{id:"23rfasdfasdvg",user:"Hello World",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."},{id:"fqasfd4r35tga",user:"Sofia Michailenko",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."}]},{id:"56c782f1a2c2c3268ddb3206",date:"2016-06-08T19:03:23.000Z",title:"Commodo laborum sit nostru",text:"Commodo laborum sit nostrud reprehenderit cupidatat officia laboris. Ipsum minim culpa in enim. Voluptate dolor ea irure nisi incididunt enim magna.\n\nCupidatat quis cillum velit culpa tempor esse irure nostrud ea consectetur officia fugiat irure qui. Enim quis officia do in. Velit veniam ipsum consequat aliqua duis voluptate. Minim nisi ex aute ad.\n\nNisi Lorem ex tempor adipisicing labore. Quis occaecat fugiat pariatur labore culpa cillum laboris. Labore occaecat ut laborum sit ex do sit. Deserunt consectetur elit aute laboris est deserunt officia ullamco sit laboris officia aliquip. Aliqua ut sunt nostrud voluptate excepteur quis incididunt Lorem ut.",comments:[{id:"23qwfasdf3",user:"Brad McKeon",text:"Non qui Lorem qui commodo sint in esse non aliqua pariatur mollit veniam. Elit labore ad nisi anim adipisicing tempor velit commodo adipisicing ipsum ut. Nostrud cillum aliquip adipisicing id do occaecat est eiusmod adipisicing duis. Magna dolore et non nisi in non cillum officia elit non esse proident irure aute. Proident mollit amet enim dolore eiusmod dolor qui. Eiusmod reprehenderit cillum sit deserunt nostrud enim duis excepteur. Excepteur pariatur sunt in ipsum id minim est mollit."},{id:"dadsafw4f45w",user:"Dolly Franklin",text:"Aliquip id nostrud adipisicing irure. Labore reprehenderit ea ex officia ullamco incididunt consequat elit amet quis commodo. Fugiat amet veniam cillum ut aliquip velit est esse minim fugiat eiusmod sint. Commodo ea in culpa deserunt."},{id:"234erasfdastw4a",user:"Brennan Atkins",text:"Nisi sit nisi cillum dolor fugiat sint do nostrud ex cillum cupidatat. Culpa do duis non et excepteur labore dolor culpa qui tempor veniam. Ex labore deserunt qui sit aute ad incididunt do cupidatat eiusmod reprehenderit ad. Qui laborum qui voluptate velit et consectetur ipsum enim dolore minim. Est sint velit tempor reprehenderit. Qui consectetur ad minim consequat."}]},{id:"56c782fghgfc2c3268ddb3206",date:"2016-06-08T19:03:23.000Z",title:"Lorem Ipsum dolor",text:"Commodo laborum sit nostrud reprehenderit cupidatat officia laboris. Ipsum minim culpa in enim. Voluptate dolor ea irure nisi incididunt enim magna.\n\nCupidatat quis cillum velit culpa tempor esse irure nostrud ea consectetur officia fugiat irure qui. Enim quis officia do in. Velit veniam ipsum consequat aliqua duis voluptate. Minim nisi ex aute ad.\n\nNisi Lorem ex tempor adipisicing labore. Quis occaecat fugiat pariatur labore culpa cillum laboris. Labore occaecat ut laborum sit ex do sit. Deserunt consectetur elit aute laboris est deserunt officia ullamco sit laboris officia aliquip. Aliqua ut sunt nostrud voluptate excepteur quis incididunt Lorem ut."}];var C=function(){var i=!0?Object(c.jsxs)(y.d,{children:[Object(c.jsx)(y.b,{path:"/news",exact:!0,children:Object(c.jsx)(D,{articles:L})}),Object(c.jsx)(y.b,{path:"/main",exact:!0,children:Object(c.jsx)(w,{})}),Object(c.jsx)(y.b,{path:"/gallery",exact:!0,children:Object(c.jsx)(N,{})}),Object(c.jsx)(y.b,{path:"/tools",exact:!0,children:Object(c.jsx)(p,{})}),Object(c.jsx)(y.b,{path:"/home",exact:!0,children:Object(c.jsx)(m,{})}),Object(c.jsx)(y.b,{path:"/routes",exact:!0,children:Object(c.jsx)(_,{})}),Object(c.jsx)(y.a,{to:"/main"})]}):Object(c.jsxs)(y.d,{children:[Object(c.jsx)(y.b,{path:"/",exact:!0,children:Object(c.jsx)(M,{})}),Object(c.jsx)(y.a,{to:"/"})]});return Object(c.jsx)(r.a,{children:Object(c.jsx)("div",{children:i})})},A=function(i){i&&i instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,o=e.getLCP,s=e.getTTFB;t(i),a(i),n(i),o(i),s(i)}))};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),A()}},[[62,1,2]]]);
//# sourceMappingURL=main.02974030.chunk.js.map