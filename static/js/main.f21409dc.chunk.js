(this.webpackJsonpwebinv=this.webpackJsonpwebinv||[]).push([[0],{23:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t.n(n),i=t(17),c=t.n(i),r=(t(23),t(4)),o=t(5),d=t(7),l=t(6),u=t(18),j=t.n(u),m=t(1),h=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).openBtnRef=s.a.createRef(),n.waitTxtRef=s.a.createRef(),n.state={recipient:""},n}return Object(o.a)(t,[{key:"getParameterByName",value:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,t=new RegExp("[?&]untuk(=([^&#]*)|&|#|$)"),n=null!==(e=t.exec(a))&&void 0!==e?e:["?untuk=Guest","=Guest","Guest"];if(!n)return null;if(!n[2])return"";var s=decodeURIComponent(n[2].replace(/\+/g," "));this.setState({recipient:"Dear ".concat(s,",")})}},{key:"playMusic",value:function(){document.getElementById("audio").play();var e=document.getElementById("popUp");e.removeAttribute("data-aos"),e.classList.remove("fadeInDown"),e.style.display="none",document.getElementById("wrapper").style.display="block",document.body.style.overflowY="auto",j.a.init()}},{key:"componentDidMount",value:function(){var e=this;this.getParameterByName(),window.addEventListener("load",(function(){e.openBtnRef.current.style.display="inline-block",e.waitTxtRef.current.style.display="none"}))}},{key:"render",value:function(){return Object(m.jsxs)("section",{id:"popUp",className:"popup overlay-dark fadeInDown",children:[Object(m.jsx)("h2",{className:"text-center",style:{fontSize:"1.6rem"},children:this.state.recipient}),Object(m.jsx)("p",{children:"You are invited"}),Object(m.jsx)("p",{children:"To the Wedding Celebration of"}),Object(m.jsx)("p",{style:{fontSize:"2rem",fontFamily:"Homemade Apple"},children:"Yari & Liza"}),Object(m.jsx)("p",{ref:this.waitTxtRef,children:Object(m.jsx)("i",{children:"Please wait..."})}),Object(m.jsx)("a",{ref:this.openBtnRef,onClick:this.playMusic,style:{textDecoration:"none",position:"absolute",bottom:"14rem"},children:"Open Invitation"})]})}}]),t}(s.a.Component),b=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"header overlay-dark white-text",style:{backgroundImage:"url('./res/header.jpeg')"},children:[Object(m.jsx)("div",{className:"lead","data-aos":"fade-down","data-aos-duration":"1500",children:"The Wedding Of"}),Object(m.jsx)("h1",{style:{fontFamily:"Homemade Apple"},"data-aos":"zoom-in","data-aos-duration":"1500",children:"Yari & Liza"}),Object(m.jsx)("div",{className:"lead","data-aos":"fade-up","data-aos-duration":"1500",children:"#WeAreMarried!"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1900",children:"04 . 06 . 2022"})]})}}]),t}(n.Component),p=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"meet overlay-dark white-text",style:{backgroundImage:"url('./res/meet.jpeg')"},children:[Object(m.jsx)("h2",{className:"text-center section-title","data-aos":"fade-down","data-aos-duration":"1500",children:"Catatan Pendek untuk Cinta yang Panjang"}),Object(m.jsx)("p",{className:"text-center","data-aos":"fade-down","data-aos-duration":"1500",style:{color:"white"},children:'" Hari Ini Kita Cerita tentang Senja, Hujan dan Satu Janji "'}),Object(m.jsxs)("article",{"data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/treasurer.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"Menemukanmu"'}),Object(m.jsx)("p",{children:"Ping!. Setelah 12 tahun lamanya tak pernah mendengar kabarnya lagi lalu dia datang dengan Sebuah panggilan awal dimulainya cerita baru hidup kita."})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-right","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/backstreet.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"Senja"'}),Object(m.jsx)("p",{children:"Jarak telah membuat kita semakin jarang bertemu. Meski tetap saja setiap senja datang satu-satunya hal yang bisa memperlambat waktu adalah rindu."})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/gf.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"Hujan"'}),Object(m.jsx)("p",{children:"Sesekali aku mendatangi tempat-tempat yang sering kita kunjungi, hanya untuk mempercepat waktu, hanya untuk memastikan kita akan segera bertemu. Dan, tak kala hujan juga datang membawa pulang kehangatanmu di kepalaku. Sementara tubuhku harus tabah menikmati dinginnya waktu "})]})]}),Object(m.jsxs)("article",{"data-aos":"fade-right","data-aos-duration":"1500",children:[Object(m.jsx)("img",{src:"./res/propose.jpeg",alt:""}),Object(m.jsxs)("div",{className:"article-content white-text",children:[Object(m.jsx)("h3",{className:"section-subtitle",children:'"Janji"'}),Object(m.jsx)("p",{children:"Kelak, pada senja-senja yang tak lagi sepi, pada janji yang telah kita sepakati, kamu adalah seseorang yang kupeluk erat sepenuh hati. Tidak akan ada lagi jarak yang menakut-nakuti. Bila hari itu tiba, aku berharap waktu tetap saja melambat bersama kita. Agar aku bisa menikmati senja, juga hujan-hujan yang pernah membuatku merindu buta.  "})]})]})]})}}]),t}(n.Component),O=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"married overlay-dark white-text",style:{backgroundImage:"url('./res/married.jpeg')"},children:[Object(m.jsx)("h2",{className:"section-title text-center","data-aos":"fade-down","data-aos-duration":"1500",children:"We Are Getting Married"}),Object(m.jsxs)("p",{className:"text-center","data-aos":"fade-down","data-aos-duration":"1500",children:[Object(m.jsx)("q",{cite:"QS. An-Nahl: 72",children:"Dan Allah menjadikan bagimu pasangan (suami atau istri) dari jenis kamu sendiri, menjadikan anak dan cucu bagimu dari pasanganmu, serta memberimu rezeki dari yang baik-baik. Mengapa mereka beriman kepada yang batil dan mengingkari nikmat Allah?."}),Object(m.jsx)("br",{}),"(QS. An-Nahl: 72)"]}),Object(m.jsxs)("div",{className:"married-content","data-aos":"fade-up","data-aos-duration":"1500",children:[Object(m.jsxs)("article",{className:"couple",children:[Object(m.jsx)("img",{className:"circle",src:"./res/pp.jpeg",alt:""}),Object(m.jsx)("h3",{className:"section-subtitle text-center",children:"Yari Rinaldi S.Si."}),Object(m.jsxs)("p",{className:"text-center",children:["2",Object(m.jsx)("sup",{children:"nd"}),"son of",Object(m.jsx)("br",{}),"Agus Sugiarto and Rina Liana"]})]}),Object(m.jsx)("h3",{className:"section-subtitle-and text-center",children:"&"}),Object(m.jsxs)("article",{className:"couple",children:[Object(m.jsx)("img",{className:"circle",src:"./res/kebo.jpeg",alt:""}),Object(m.jsx)("h3",{className:"section-subtitle text-center",children:"Rahmi Meyliza Putri, S.E."}),Object(m.jsxs)("p",{className:"text-center",children:["2",Object(m.jsx)("sup",{children:"nd"})," daughter of",Object(m.jsx)("br",{}),"Baharuddin and Oliwati"]})]})]})]})}}]),t}(n.Component),x=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={session:"11.00 - 15.00"},n}return Object(o.a)(t,[{key:"getParameterByName",value:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,t=new RegExp("[?&]session(=([^&#]*)|&|#|$)"),n=null!==(e=t.exec(a))&&void 0!==e?e:["&session=1","=1","1"],s=decodeURIComponent(n[2].replace(/\+/g," "));s="2"===s?"15.00 - 17.00":"11.00 - 15.00",this.setState({session:s})}},{key:"componentDidMount",value:function(){this.getParameterByName()}},{key:"openMap",value:function(){window.open("https://www.google.co.id/maps/place/Walton+Indo+Sakti/@-6.309884,106.8871254,19z/data=!3m1!4b1!4m5!3m4!1s0x2e69ed69ccef91c9:0x627802086185df7f!8m2!3d-6.309884!4d106.8876726?hl=en&authuser=0","_blank").focus()}},{key:"addToCalendar",value:function(){var e="04062022",a="http://www.google.com/calendar/event?action=TEMPLATE&text=".concat("Yari & Liza Wedding","&dates=").concat(e,"/").concat(e,"&location=").concat("Kediaman Mempelai Wanita");window.open(a).focus()}},{key:"render",value:function(){return Object(m.jsxs)("section",{className:"agenda text-center",style:{backgroundImage:"url('./res/agenda.jpeg')"},children:[Object(m.jsx)("p",{"data-aos":"fade-down","data-aos-duration":"1500",children:"Saturday"}),Object(m.jsxs)("div",{className:"date",children:[Object(m.jsx)("h2",{"data-aos":"fade-right","data-aos-duration":"1500",children:"04"}),Object(m.jsxs)("div",{className:"month-year","data-aos":"fade-left","data-aos-duration":"1500",children:[Object(m.jsx)("p",{children:"June"}),Object(m.jsx)("p",{children:"2022"})]})]}),Object(m.jsx)("h3",{"data-aos":"fade-up","data-aos-duration":"1500",children:"Reception"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1500",children:this.state.session}),Object(m.jsx)("button",{id:"addToCalendarBtn","data-aos":"fade-up","data-aos-duration":"1500",onClick:this.addToCalendar,children:"Add to calender"}),Object(m.jsx)("p",{"data-aos":"fade-up","data-aos-duration":"1500",children:"Kediaman Mempelai Wanita"}),Object(m.jsxs)("div",{className:"location","data-aos":"fade-up","data-aos-duration":"1500",children:[Object(m.jsx)("p",{children:"Jl. Remaja, Ceger, Kec. Cipayung, Kota Jakarta Timur"}),Object(m.jsx)("button",{onClick:this.openMap,children:"Open Map"})]})]})}}]),t}(n.Component),g=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"pandemic overlay-dark",style:{backgroundImage:"url('./res/reminder.jpeg')"},children:[Object(m.jsxs)("p",{className:"text-center","data-aos":"zoom-in","data-aos-duration":"1500",children:['"Due to the COVID-19 pandemic, reception guests are requested to implement and comply with health protocols."',Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:"protocol","data-aos":"zoom-in","data-aos-duration":"1500",children:[Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/wash.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Using Hand Sanitizer"})]}),Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/mask.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Wearing mask"})]}),Object(m.jsxs)("div",{className:"protocol-item",children:[Object(m.jsx)("img",{src:"./res/distance.png",alt:"Wash hands icon"}),Object(m.jsx)("p",{children:"Social distancing"})]})]})]})}}]),t}(n.Component),f=t(9),k=t(12),v=t.n(k),y=t(13),w=t(15);t(27);w.a.initializeApp({apiKey:"AIzaSyDbT5doPwyZP54hckrKyWifE4i9lVKsV8g",authDomain:"wedinv-4e21d.firebaseapp.com",databaseURL:"https://wedinv-4e21d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"wedinv-4e21d",storageBucket:"wedinv-4e21d.appspot.com",messagingSenderId:"1083674240972",appId:"1:1083674240972:web:c452ce8742ca42d8e71f69"});var N=w.a.database().ref("/comments"),C=new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return N.orderByChild("millis")}},{key:"create",value:function(){var e=Object(y.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.push(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}()),S=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onChangeName=n.onChangeName.bind(Object(f.a)(n)),n.onChangeComment=n.onChangeComment.bind(Object(f.a)(n)),n.saveComment=n.saveComment.bind(Object(f.a)(n)),n.formRef=s.a.createRef(),n.state={name:"",comment:""},n}return Object(o.a)(t,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeComment",value:function(e){this.setState({comment:e.target.value})}},{key:"saveComment",value:function(){var e=Object(y.a)(v.a.mark((function e(){var a,t,n,s,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},t=new Date,n=t.toLocaleString("id-ID",a),s=this.state.name,i=this.state.comment,""===s.trim()||""===i.trim()){e.next=10;break}return c={name:s,comment:i,date:n,millis:Date.now()},e.next=9,C.create(c);case 9:this.formRef.current.reset();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"section-title text-center",children:"Send Wishes"}),Object(m.jsxs)("form",{ref:this.formRef,action:"#",method:"post",children:[Object(m.jsx)("input",{id:"name",className:"input",type:"text",name:"name",placeholder:"Your name",onChange:this.onChangeName,required:!0}),Object(m.jsx)("textarea",{id:"comment",className:"input",name:"commentVal",rows:"5",placeholder:"Pray for us please",onChange:this.onChangeComment,required:!0}),Object(m.jsx)("input",{id:"submitBtn",className:"input",type:"button",value:"Submit",onClick:this.saveComment})]})]})}}]),t}(s.a.Component),I=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onDataChange=n.onDataChange.bind(Object(f.a)(n)),n.state={comments:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){C.getAll().on("value",this.onDataChange)}},{key:"componentWillUnmount",value:function(){C.getAll().off("value",this.onDataChange)}},{key:"onDataChange",value:function(e){var a=[];e.forEach((function(e){var t=e.val();a.push({name:t.name,comment:t.comment,date:t.date})})),this.setState({comments:a})}},{key:"render",value:function(){var e=this.state.comments;return Object(m.jsx)("section",{className:"comment overlay-dark",style:{backgroundImage:"url('./res/comment.jpeg')"},children:Object(m.jsxs)("div",{id:"comment-content",className:"comment-content",children:[Object(m.jsx)(S,{}),Object(m.jsx)("div",{id:"comment-list",children:e&&e.reverse().map((function(e,a){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:e.name}),Object(m.jsx)("p",{style:{marginBottom:"4px"},children:e.comment}),Object(m.jsx)("p",{children:e.date}),Object(m.jsx)("hr",{})]},a)}))})]})})}}]),t}(n.Component),D=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsx)("footer",{children:Object(m.jsxs)("p",{className:"text-center",children:["Created with ",Object(m.jsx)("span",{children:"\u2665"})," by the bride and groom"]})})}}]),t}(n.Component);var R=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("audio",{id:"audio",src:"./res/song.mp3"}),Object(m.jsx)(h,{}),Object(m.jsxs)("div",{id:"wrapper",className:"wrapper",children:[Object(m.jsx)(b,{}),Object(m.jsx)(p,{}),Object(m.jsx)(O,{}),Object(m.jsx)(x,{}),Object(m.jsx)(g,{}),Object(m.jsx)(I,{}),Object(m.jsx)(D,{})]})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),A()}},[[31,1,2]]]);
//# sourceMappingURL=main.f21409dc.chunk.js.map