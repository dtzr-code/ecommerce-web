(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{146:function(e,t,i){},147:function(e,t,i){},152:function(e,t,i){},154:function(e,t,i){},156:function(e,t,i){},157:function(e,t,i){},160:function(e,t,i){},161:function(e,t,i){},162:function(e,t,i){},163:function(e,t,i){},168:function(e,t,i){"use strict";i.r(t);var c=i(2),a=i.n(c),s=i(36),n=i.n(s),r=i(17),o=(i(146),i(147),i(110)),l=(o.a.initializeApp({apiKey:"AIzaSyAsalS_YVKcNz7I5vzm0Ni8wgtIWvMTRN0",authDomain:"ecommerce-b1ad2.firebaseapp.com",projectId:"ecommerce-b1ad2",storageBucket:"ecommerce-b1ad2.appspot.com",messagingSenderId:"816377875665",appId:"1:816377875665:web:c7d8938714f64eb18449f0"}).firestore(),o.a.auth()),d=(i(152),[{id:1,title:"The size of your bank balance influences your gym habits",description:"The healthcare charity Nuffield Health found that people who earned big incomes were likely to go to the gym more than those gym members on low incomes."},{id:2,title:"People use the gym to pick up dates",description:"A new study commissioned by Kettler found that of the 2 000 participants who took part in the study a whopping 50% of the gym goers only go the gym to check out the opposite sex or meet with friends."},{id:3,title:"Gym goers eat more chocolate",description:"According to Market Research World, those people who go to the gym are, thought to be 18% more likely to indulge in chocolate bars."},{id:4,title:"Genetics can make you hate the gym",description:"Researchers at Iowa State University found that people\u2019s ability to withstand the pain and exertion of exercise could be up to 50% genetically influenced."},{id:5,title:"Romance at the gym",description:"A study conducted by Nuffield Health found that of their 2 000 participants, 10.5% of members actually live with someone they met at the gym."},{id:6,title:"Redundant gym memberships",description:"Gym memberships don\u2019t come cheap, which is why, in the U.S., health club industry revenue reached $21.4 billion (+/- R210 billion) in 2011."},{id:7,title:"The number of people who have a gym membership",description:"Apparently around four and half million adults in the United Kingdom have a gym membership, whilst in American it is estimated that 45 million adults have a gym membership or are members of a health club."}]),u=i(121),j=i(3);var h=function(){return Object(j.jsx)("div",{className:"factsPage__wrapper",children:Object(j.jsx)(u.Parallax,{bgImage:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",strength:100,style:{height:"100vh"},children:Object(j.jsxs)("div",{className:"background__overlay",children:[Object(j.jsxs)("h1",{children:["ALL YOU ",Object(j.jsx)("span",{children:"NEED"})," TO KNOW"]}),Object(j.jsx)("div",{className:"facts__wrapper",children:d.map((function(e){return Object(j.jsx)("div",{className:"fact__container",children:Object(j.jsxs)("div",{className:"fact__desc",children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{children:e.description})]})},e.id)}))})]})})})};i(154);var m=function(){return Object(j.jsx)("div",{className:"footer__wrapper",children:Object(j.jsxs)("div",{className:"footer__details",children:[Object(j.jsx)("h1",{children:"Contact Us"}),Object(j.jsxs)("div",{className:"footer__container",children:[Object(j.jsxs)("div",{className:"email__container",children:[Object(j.jsx)("input",{type:"email",placeholder:"Email"}),Object(j.jsx)("button",{type:"submit",children:"OK"})]}),Object(j.jsxs)("p",{children:["Sign up to receive 10% off your first order. By signing up I agree to the ",Object(j.jsx)("a",{href:"#",children:"Terms & Conditions"})]})]})]})})},p=i(49),b=i(122),O=i(77),f=i(67),x=i(130),g=i(111),y=i(52),v=Object(y.b)({name:"cart",initialState:{items:[]},reducers:{addToCart:function(e,t){if(e.items.find((function(e){return e.id===t.payload.id}))){var i=e.items.findIndex((function(e){return e.id===t.payload.id}));e.items[i].quantity+=1}else e.items.push(Object(g.a)(Object(g.a)({},t.payload),{},{quantity:1}))},increaseQty:function(e,t){var i=e.items.findIndex((function(e){return e.id===t.payload.id}));e.items[i].quantity+=1},decreaseQty:function(e,t){var i=e.items.findIndex((function(e){return e.id===t.payload.id}));e.items[i].quantity>1?e.items[i].quantity-=1:alert("Minimum quanitity is 1. Remove item instead.")},removeFromCart:function(e,t){var i=e.items.findIndex((function(e){return e.id===t.payload.id})),c=Object(x.a)(e.items);i>=0?c.splice(i,1):console.warn("Can't remove from product (id:".concat(t.payload.id,") as its not found in the cart")),e.items=c},clearCart:function(e){e.items=[]}}}),_=v.actions,N=_.addToCart,w=_.removeFromCart,k=_.clearCart,C=_.increaseQty,S=_.decreaseQty,M=function(e){return e.cart.items},T=function(e){return e.cart.items.reduce((function(e,t){return e+t.price*t.quantity}),0)},A=v.reducer,q=Object(y.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),P=q.actions,E=P.login,I=P.logout,H=function(e){return e.user.user},B=q.reducer,U=i(105),z=i.n(U),R=i(123),G=(i(156),i(180));i(157);var W=function(e){var t=e.openModal,i=e.setOpenModal,a=(Object(r.b)(),Object(r.c)(H),Object(c.useRef)(null)),s=Object(c.useRef)(null),n=Object(c.useRef)(null),o=Object(c.useRef)(null),d=Object(c.useState)(!0),u=Object(p.a)(d,2),h=u[0],m=u[1];return Object(j.jsx)(G.a,{onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:t,children:Object(j.jsxs)("div",{class:"container ".concat(h?"":"right-panel-active"),id:"container",children:[Object(j.jsx)("div",{class:"form-container sign-up-container",children:Object(j.jsxs)("form",{action:"#",children:[Object(j.jsx)("h1",{className:"sign__h1",children:"Create Account"}),Object(j.jsx)("span",{children:"or use your email for registration"}),Object(j.jsx)("input",{ref:n,type:"email",placeholder:"Email"}),Object(j.jsx)("input",{ref:o,type:"password",placeholder:"Password"}),Object(j.jsx)("button",{className:"signup__button",onClick:function(e){e.preventDefault(),l.createUserWithEmailAndPassword(n.current.value,o.current.value).then(alert("Sign up successful!")).catch((function(e){alert(e.message)}))},children:"Sign Up"})]})}),Object(j.jsx)("div",{class:"form-container sign-in-container",children:Object(j.jsxs)("form",{action:"#",children:[Object(j.jsx)("h1",{className:"sign__h1",children:"Sign in"}),Object(j.jsx)("input",{ref:a,type:"email",placeholder:"Email"}),Object(j.jsx)("input",{ref:s,type:"password",placeholder:"Password"}),Object(j.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(j.jsx)("button",{className:"signin__button",onClick:function(e){e.preventDefault(),l.signInWithEmailAndPassword(a.current.value,s.current.value).then((function(){alert("Login successfully!"),window.location.reload()})).catch((function(e){alert(e.message)}))},children:"Sign In"})]})}),Object(j.jsx)("div",{class:"overlay-container",children:Object(j.jsxs)("div",{class:"overlay",children:[Object(j.jsxs)("div",{class:"overlay-panel overlay-left",children:[Object(j.jsx)("h1",{className:"sign__h1",children:"Welcome Back!"}),Object(j.jsx)("p",{className:"sign__p",children:"To keep connected with us please login with your personal info"}),Object(j.jsx)("button",{onClick:function(){return m(!0)},class:"ghost",className:"signIn",children:"Sign In"})]}),Object(j.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(j.jsx)("h1",{className:"sign__h1",children:"Hello, Friend!"}),Object(j.jsx)("p",{className:"sign__p",children:"Enter your personal details and start journey with us"}),Object(j.jsx)("button",{onClick:function(){return m(!1)},class:"ghost",className:"signUp",children:"Sign Up"})]})]})})]})})},D=Object(O.a)("".concat("pk_test_51J1YVxL3fRcUBWQKeGVALCUqUUO53Mrrpdw5Dg7d4rMJGPhFJ16XfHAcM0dwsH4GUPC8XzqQcqvFCQ1Oo2CSlMs0007bvipQ9x"));var L=function(e){var t=e.open,i=e.setOpen,a=Object(r.c)(H),s=Object(r.c)(M),n=Object(r.c)(T),o=Object(r.b)(),l=Object(c.useState)(!1),d=Object(p.a)(l,2),u=d[0],h=d[1],m=function(){var e=Object(R.a)(z.a.mark((function e(t){var i,c,n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D;case 2:return i=e.sent,e.next=5,fetch("http://localhost:5000/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:s,email:a.email})});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,e.next=11,i.redirectToCheckout({sessionId:n.id});case 11:(r=e.sent).error&&alert(r.error.message);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"cart__container",children:Object(j.jsxs)("div",{className:"cart__wrapper",children:[Object(j.jsxs)("div",{className:"cart__header",children:[Object(j.jsx)("h1",{children:"Your Cart"}),Object(j.jsx)("p",{className:"close--icon",onClick:function(){return i(!t)},children:"x"})]}),Object(j.jsx)("div",{className:"item--wrapper",children:s.map((function(e){return Object(j.jsxs)("div",{className:"single__product--wrapper",children:[Object(j.jsx)("img",{className:"product_img",src:e.image,alt:"product_img"}),Object(j.jsxs)("div",{className:"product__details",children:[Object(j.jsx)("p",{className:"product_name",children:e.name}),Object(j.jsxs)("p",{className:"product_price",children:[" $",e.price," "]}),Object(j.jsxs)("div",{className:"product__settings",children:[Object(j.jsxs)("div",{className:"product__counter",children:[Object(j.jsx)("button",{className:"cart__button",onClick:function(){return t=e.id,void o(S({id:t}));var t},children:"-"}),Object(j.jsx)("p",{children:e.quantity}),Object(j.jsx)("button",{className:"cart__button",onClick:function(){return t=e.id,void o(C({id:t}));var t},children:"+"})]}),Object(j.jsx)("p",{onClick:function(){return t=e.id,void o(w({id:t}));var t},children:"REMOVE"})]})]}),Object(j.jsxs)("h2",{className:"product__price",children:["$",e.price*e.quantity]})]},e.id)}))}),Object(j.jsxs)("div",{className:"subtotal",children:[Object(j.jsx)("p",{children:"Sub-total: "}),Object(j.jsxs)("p",{children:["$",n]})]}),Object(j.jsx)("button",{onClick:a?m:function(){h(!u)},className:"checkout--button",children:a?"Checkout":"Sign In To Checkout"}),u?Object(j.jsx)(W,{openModal:u,setOpenModal:h}):null]})})},Q=i(181);var F=function(e){var t=e.openModal,i=e.setOpenModal,c=Object(r.b)();return Object(j.jsxs)(G.a,{onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:t,size:"tiny",children:[Object(j.jsx)(G.a.Header,{children:"Logout"}),Object(j.jsx)(G.a.Content,{children:Object(j.jsx)("p",{children:"Are you sure you want to logout of your account?"})}),Object(j.jsxs)(G.a.Actions,{children:[Object(j.jsx)(Q.a,{negative:!0,onClick:function(){return i(!1)},children:"No"}),Object(j.jsx)(Q.a,{positive:!0,onClick:function(){l.signOut(),c(I()),c(k())},children:"Yes"})]})]})},J=(i(160),Object(O.a)("".concat("pk_test_51J1YVxL3fRcUBWQKeGVALCUqUUO53Mrrpdw5Dg7d4rMJGPhFJ16XfHAcM0dwsH4GUPC8XzqQcqvFCQ1Oo2CSlMs0007bvipQ9x")));var $=function(){var e=Object(r.c)(H),t=Object(c.useState)(!1),i=Object(p.a)(t,2),a=i[0],s=i[1],n=Object(r.c)(M),o=Object(c.useState)(!1),l=Object(p.a)(o,2),d=l[0],u=l[1],h=Object(c.useState)(!1),m=Object(p.a)(h,2);return m[0],m[1],Object(j.jsx)("div",{className:"Hero__Wrapper",children:Object(j.jsx)("div",{className:"Hero__Image",children:Object(j.jsxs)("div",{className:"Background__Overlay",children:[a?Object(j.jsx)(b.Elements,{stripe:J,children:Object(j.jsx)(L,{open:a,setOpen:s})}):null,Object(j.jsx)("div",{className:"Nav__Wrapper",children:Object(j.jsxs)("div",{className:"Hero__Nav",children:[Object(j.jsxs)("div",{className:"Hero__Links__1",children:[Object(j.jsx)("a",{href:"/",className:"shop",children:"Shop"}),Object(j.jsx)("a",{href:"/",className:"posts",children:"Posts"}),Object(j.jsx)("a",{href:"/",className:"about",children:"About us"})]}),Object(j.jsxs)("div",{className:"Hero__Links__2",children:[Object(j.jsx)("div",{className:"user__popup",children:e?Object(j.jsx)("p",{children:e.email}):Object(j.jsx)("p",{children:"Welcome, sign in!"})}),Object(j.jsx)(f.a,{onClick:function(){u(!d)},name:"user outline"}),d&&!e?Object(j.jsx)(W,{openModal:d,setOpenModal:u}):Object(j.jsx)(F,{openModal:d,setOpenModal:u}),Object(j.jsxs)("span",{className:"count",children:[" ",n?n.length:0," "]}),Object(j.jsx)(f.a,{onClick:function(){s(!a)},name:"shopping cart"})]})]})}),Object(j.jsx)("h1",{className:"Tagline",children:"The only bad workout is the one you didn\u2019t do."})]})})})},K=(i(161),i.p+"static/media/protein.662cb05a.png"),V=i.p+"static/media/granola.3fb2b6bd.png",Y=i.p+"static/media/bar1.a4c4879d.png",X=i.p+"static/media/bar2.b0d6a96b.png",Z=i.p+"static/media/bar3.3da1186e.png",ee=i.p+"static/media/bar4.9566ffd2.png",te=[{id:1,name:"Protein Powder",description:"Premium whey packed with 21g of protein per serving, for the everyday protein you need from a quality source \u2014 with all-natural nutritionals, it's ideal for all of your fitness goals.",price:80,image:K},{id:2,name:"Protein Granola",description:"Great for breakfast or as a post-workout snack, Protein Granola is full to the brim with soy and milk protein, which helps to grow and maintain important muscle.1 Whatever your fitness ambitions, it\u2019s a tasty protein boost whenever you need it most.",price:60,image:V}],ie=[{id:3,name:"Protein Brownie",description:"Chocolate Chip: High protein chocolate brownie with chocolate chips, with sugar and sweetener.",price:83,flavors:["Chocolate","White Chocolate"],image:Y},{id:4,name:"Vegan Baked Cookie (Box of 12)",description:"The perfect plant-based treat to support your workout goals,1 these cookies are baked with quality ingredients \u2014 including coconut oil, pea protein, and a sprinkling of dark chocolate chunks.",price:81,flavors:["chocolate","Double Chocolate","Salted Caramel"],image:X},{id:5,name:"Pop Rolls (Box of 18)",description:"Packed with over 7g of high-quality protein and under 100 calories in every bar, they\u2019re the perfect way to curb sweet-tooth cravings and keep your diet on track.",price:70,flavors:["Dark Choc Hazelnut","White Chocolate Peanuts","Salted Caramel"],image:Z},{id:6,name:"Crispy Layered Bar (Box of 12)",description:"Featuring irresistible layers of taste and texture, including a crispy layer topped with a protein dough and caramel, it\u2019s created to be a guilt-free and delicious snack to support your fitness ambitions",price:75,flavors:["White Chocolate Peanut"],image:ee}];var ce=function(){var e=Object(r.b)(),t=function(t,i,c,a,s){e(N({id:t,name:i,price:c,description:a,image:s}))};return Object(j.jsxs)("div",{className:"popular__container",children:[Object(j.jsx)("h1",{children:" MEET THE BEST OF THE BEST "}),Object(j.jsxs)("div",{className:"items__wrapper",children:[Object(j.jsx)("div",{className:"items--contents",children:te.map((function(e){return Object(j.jsxs)("div",{className:"products--container",children:[Object(j.jsx)("div",{className:"image--wrapper",children:Object(j.jsx)("img",{className:"protein--image",src:e.image})}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsxs)("h1",{className:"name",children:[" ",e.name," "]}),Object(j.jsxs)("h2",{className:"price",children:[" $",e.price]}),Object(j.jsx)("p",{className:"product-desc",children:e.description}),Object(j.jsx)("a",{href:"/",className:"learnMore",children:"Learn More"}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"submit",onClick:function(){return t(e.id,e.name,e.price,e.description,e.image)},className:"buy",children:"Buy"}),Object(j.jsx)("button",{type:"submit",className:"subscribe",children:"Suscribe $75/month"})]})]})]},e.id)}))}),Object(j.jsxs)("h1",{className:"bars__h1",children:["THE ",Object(j.jsx)("span",{children:"PERFECT"})," COMBINATION"]}),Object(j.jsx)("div",{className:"bars--wrapper",children:ie.map((function(e){return Object(j.jsxs)("div",{className:"bars--container",children:[Object(j.jsx)("div",{className:"bars__image--wrapper",children:Object(j.jsx)("img",{className:"bars--image",src:e.image})}),Object(j.jsxs)("div",{className:"bars__description",children:[Object(j.jsxs)("h2",{className:"bars__name",children:[" ",e.name]}),Object(j.jsxs)("h2",{className:"bars__price",children:[" $",e.price]}),Object(j.jsx)("p",{className:"bars__product-desc",children:e.description})]}),Object(j.jsx)("div",{className:"bars__buttons",children:Object(j.jsx)("button",{type:"submit",onClick:function(){return t(e.id,e.name,e.price,e.description,e.image)},className:"buy",children:"Buy"})})]},e.id)}))})]})]})},ae=[{id:1,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-837480_11-0ae5342.jpg?webp=true&quality=90&resize=440%2C400",name:"Chicken, red pepper & almond traybake",intro:"A tasty one-pan roast chicken supper with lemon, cumin, paprika, coriander and other North African flavours"},{id:2,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-3774_12-60c88b3.jpg?webp=true&quality=90&resize=440%2C400",name:"Miniature omelettes with ricotta",intro:"These little omelettes \u2013 called frittatine in Italian \u2013 make a wonderful appetizer"},{id:3,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-4273_11-b4f5d7b.jpg?webp=true&quality=90&resize=440%2C400",name:"Herbed chicken skewers",intro:"A superhealthy chicken dish with a 'no-cook' relish"},{id:4,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-404452_10-1a0e42b.jpg?webp=true&quality=90&resize=440%2C400",name:"Dippy eggs with Marmite soldiers",intro:"A tasty one-pan roast chicken supper with lemon, cumin, paprika, coriander and other North African flavours"},{id:5,image:"https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Protein-pancakes-b64bd40.jpg?webp=true&quality=90&resize=620%2C563",name:"Easy protein pancakes",intro:"Up your protein with these pancakes made with eggs, oats, milk and protein powder. A great breakfast after a workout, enjoy with nut butter or fruit"},{id:6,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-374480_11-0d2c41f.jpg?webp=true&quality=90&resize=440%2C400",name:"Spiced scrambled eggs",intro:"Make a wholesome start to the morning with creamy scrambled eggs on toast, perfect for using up a stray tomato or two"}];i(162);var se=function(){return Object(j.jsxs)("div",{className:"receipes__wrapper",children:[Object(j.jsx)("h1",{children:"Receipes for the gainz"}),Object(j.jsx)("div",{className:"receipes__container",children:ae.map((function(e){return Object(j.jsxs)("div",{className:"receipe__container",children:[Object(j.jsx)("div",{className:"img--container",children:Object(j.jsx)("img",{className:"receipe_img",src:e.image})}),Object(j.jsx)("a",{className:"readmore",href:"/",children:"Read More"}),Object(j.jsxs)("div",{className:"receipe__details",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsx)("p",{children:e.intro})]})]},e.id)}))})]})};function ne(){var e=Object(r.b)();return Object(c.useEffect)((function(){return l.onAuthStateChanged((function(t){e(t?E({uid:t.uid,email:t.email}):I())}))}),[e,l]),Object(j.jsxs)("div",{style:{backgroundColor:"black",height:"100vp"},children:[Object(j.jsx)($,{}),Object(j.jsx)(ce,{}),Object(j.jsx)(h,{}),Object(j.jsx)(se,{}),Object(j.jsx)(m,{})]})}var re=i(126),oe=i(19);i(163);var le=function(){var e=Object(oe.f)(),t={currentTime:(new Date).toLocaleString()}.currentTime.split(",")[0],i=Object(r.c)(M),c=Object(r.c)(T),a=Object(r.b)();return Object(j.jsx)("div",{className:"orders__container",children:Object(j.jsxs)("div",{className:"orders__wrapper",children:[Object(j.jsxs)("div",{className:"orders_tagline",children:[Object(j.jsx)("h1",{children:" Order Confirmation "}),Object(j.jsx)("h1",{children:"Thank you for your order!"}),Object(j.jsx)("p",{children:"We have received your order and will contact you as soon as your package is shipped."})]}),Object(j.jsxs)("div",{className:"order__summary",children:[Object(j.jsxs)("div",{className:"summary_tagline",children:[Object(j.jsx)("h3",{children:"Order Summary"}),Object(j.jsx)("p",{children:t})]}),Object(j.jsx)("div",{className:"orders__details",children:Object(j.jsx)("div",{className:"order__items",children:i.map((function(e){return Object(j.jsxs)("div",{className:"item__container",children:[Object(j.jsx)("div",{className:"img__wrapper",children:Object(j.jsx)("img",{className:"order__img",src:e.image,alt:e.name})}),Object(j.jsxs)("p",{className:"item__name",children:[e.name," "]}),Object(j.jsxs)("div",{className:"item__detail",children:[Object(j.jsxs)("p",{className:"bold",children:[" SGD $",e.price]}),Object(j.jsxs)("p",{children:["Quantity: ",e.quantity]})]})]},e.id)}))})}),Object(j.jsx)("h1",{children:" Order Total"}),Object(j.jsx)("span",{}),Object(j.jsxs)("div",{className:"order__total",children:[Object(j.jsx)("h2",{children:" Total Price: "}),"SGD $",c]})]}),Object(j.jsxs)("button",{className:"back",onClick:function(){e.push("/"),a(k())},children:[Object(j.jsx)(f.a,{size:"big",name:"arrow circle left"})," Back To Shopping!"]})]})})};var de=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){return document.title="Gymmerce",l.onAuthStateChanged((function(t){e(t?E({uid:t.uid,email:t.email}):I())}))}),[e,l]),Object(j.jsx)(re.a,{children:Object(j.jsxs)(oe.c,{children:[Object(j.jsx)(oe.a,{exact:!0,path:"/",children:Object(j.jsx)(ne,{})}),Object(j.jsx)(oe.a,{exact:!0,path:"/success",children:Object(j.jsx)(le,{})})]})})},ue=(i(165),i(75)),je=i(29),he=i(129),me=i(127),pe={key:"root",storage:i.n(me).a,whitelist:["cart"]},be=Object(je.b)({cart:A,user:B}),Oe=Object(he.a)(pe,be),fe=Object(y.a)({reducer:Oe}),xe=Object(ue.a)(fe),ge=i(128);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{store:fe,children:Object(j.jsx)(ge.a,{loading:null,persistor:xe,children:Object(j.jsx)(de,{})})})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.4b391d1c.chunk.js.map