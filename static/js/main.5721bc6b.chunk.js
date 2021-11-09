(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{18:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(19),n=c.n(a),r=c(11),i=c(2),l=c(4),d=c(0),o=function(){return Object(d.jsxs)("div",{className:"d-flex flex-lg-nowrap flex-md-wrap justify-content-center navbar navbar-dark bg-dark text-white",children:[Object(d.jsx)("div",{className:"flex-grow-lg-1 mt-2",children:Object(d.jsxs)(r.b,{to:"/",className:"btn btn-outline-primary p-2 me-3 ms-3 mb-1",children:["Search hero \xa0\xa0 ",Object(d.jsx)("i",{className:"fas fa-mask icons ms-2"})]})}),Object(d.jsx)("div",{className:"flex-grow-lg-1 mt-2",children:Object(d.jsxs)(r.b,{to:"/search",className:"btn btn-outline-primary p-2 me-3 mb-1 btn-search",children:["Search comics ",Object(d.jsx)("i",{className:"fas fa-book-reader icons ms-2"})]})})]})},j=c(13),m=c(9),b=c.n(m),h=c(12),u=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=".concat(encodeURI(t),"&ts=1&apikey=ce4fc258367d34ad6bd1c03ef33d0502&hash=b53720958766d1cd8f2156e60edec20a&limit=20"),e.next=3,fetch(c);case 3:return s=e.sent,e.next=6,s.json();case 6:return a=e.sent,n=a.data,r=n.results.map((function(e){return{id:e.id,name:e.name,desc:e.description,img:e.thumbnail.path}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.name,c=e.id,s=e.img,a=e.desc;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card card-container",children:[Object(d.jsx)("img",{src:s+".jpg",className:"card-img-top heroImage",alt:t}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h3",{className:"card-title text-center",children:t}),Object(d.jsx)("h6",{className:"card-text",children:a}),Object(d.jsxs)("p",{className:"card-text mt-4",children:["Please use this code to search comics of this character: ",c]})]})]})})},f=function(e){var t=function(e){var t=Object(s.useState)({data:[],loading:!0}),c=Object(l.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){u(e).then((function(e){n({data:e,loading:!1})}))}),[e]),a}(e.name),c=t.data,a=t.loading;return Object(d.jsxs)("div",{children:[a&&Object(d.jsx)("div",{className:"jumbotron bg-dark rounded m-auto searching",children:Object(d.jsxs)("div",{className:"container p-5 text-center",children:[Object(d.jsx)("h1",{className:"display-4 text-bold text-white",children:"Searching Hero"}),Object(d.jsx)("div",{className:"spinner-border  text-dark mt-5",role:"status",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fas fa-spider fs-2 text-white"}),"."]})})]})}),!a&&0===c.length&&Object(d.jsx)("div",{className:"jumbotron d-flex bg-dark border border-dark rounded border-5 not-found",children:Object(d.jsx)("div",{className:"container text-center mt-5 not-found__help",children:Object(d.jsx)("div",{className:"text-bold text-white not-found__text",children:Object(d.jsxs)("p",{className:"mt-5 p-2",children:["Hmm... My spider-sense do not detect any character with that identity please try again.",Object(d.jsx)("br",{}),'Here a little help from your friendly neibourgh Stan Lee told me that you should write the names exactly as they were created, like "spider-man"']})})})}),Object(d.jsx)("div",{className:"hero-container",children:c.map((function(e){return Object(d.jsx)(x,Object(j.a)({},e),e.id)}))})]})},O=function(e){var t=e.setHeros,c=Object(s.useState)(""),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(d.jsx)("form",{className:"form-control form-container",onSubmit:function(e){e.preventDefault(),n.trim().length>2&&(t([n]),r(""))},children:Object(d.jsx)("input",{className:" form-control hero-input ",type:"text",autoComplete:"off",placeholder:"Search your hero",value:n,onChange:function(e){r(e.target.value)}})})},p=(c(18),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header"}),Object(d.jsx)(o,{}),Object(d.jsx)(O,{setHeros:a}),Object(d.jsx)("div",{className:"hero-background",children:c.map((function(e){return Object(d.jsx)(f,{name:e},e)}))})]})}),v=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s,a,n,r,i,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:0,s="https://gateway.marvel.com:443/v1/public/characters/".concat(t,"/comics?ts=1&apikey=ce4fc258367d34ad6bd1c03ef33d0502&hash=b53720958766d1cd8f2156e60edec20a&offset=").concat(c,"&limit=6"),e.next=4,fetch(s);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,r=n.data,i=null===r||void 0===r?void 0:r.results.map((function(e){return{title:e.title,desc:e.description,page:e.pageCount,img:e.thumbnail.path}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.title,c=e.desc,s=e.page,a=e.img;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card card-container",children:[Object(d.jsx)("img",{src:a+".jpg",className:"card-img-top heroImage",alt:t}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h3",{className:"card-title text-center",children:t}),Object(d.jsx)("h6",{className:"card-text",children:c}),Object(d.jsxs)("p",{className:"card-text mt-4",children:["Number of pages: ",s]})]})]})})},g=function(e){var t=e.id,c=e.offset,a=void 0===c?0:c,n=Object(s.useState)(a),r=Object(l.a)(n,2),i=r[0],o=r[1],m=function(e,t){var c=Object(s.useState)({data:[],loading:!0}),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){v(e,t).then((function(e){r({data:e,loading:!1})}))}),[e,t]),n}(t,i),b=m.data,h=m.loading;return console.log(b),Object(d.jsxs)("div",{children:[h&&Object(d.jsx)("div",{className:"jumbotron bg-dark border border-dark rounded border-5  m-auto searching",children:Object(d.jsxs)("div",{className:"container p-5 text-center",children:[Object(d.jsx)("h1",{className:"display-4 text-bold text-white",children:"Searching comics"}),Object(d.jsx)("div",{className:"spinner-border  text-dark mt-5",role:"status",children:Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fas fa-spider fs-2 text-white"})})})]})}),Object(d.jsxs)("div",{className:"d-flex flex-column flex-wrap hero-container",children:[Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:null===b||void 0===b?void 0:b.map((function(e){return Object(d.jsx)(N,Object(j.a)({},e),e.title)}))}),!h&&void 0!==(null===b||void 0===b?void 0:b.length)&&Object(d.jsxs)("div",{className:"d-flex bg-dark justify-content-center p-3 footer",children:[Object(d.jsx)("button",{className:"btn btn-primary  p-1 me-3 fs-4 btn-page",disabled:0===i,onClick:function(){return o(i-6)},children:"Go Back"}),Object(d.jsx)("button",{className:"btn btn-primary  me-3 fs-4 btn-page",onClick:function(){return o(i+6)},children:"More Comics"})]}),!h&&void 0===(null===b||void 0===b?void 0:b.length)&&Object(d.jsx)("div",{className:"jumbotron d-flex bg-dark border border-dark rounded border-5 not-found",children:Object(d.jsx)("div",{className:"container text-center mt-5 not-found__help",children:Object(d.jsx)("div",{className:"text-bold text-white not-found__text",children:Object(d.jsxs)("p",{className:"mt-5 p-2",children:["Hmm... My spider-sense do not detect any comics with that code please try again.",Object(d.jsx)("br",{}),"Here a little help from your friendly neibourgh Stan Lee told me that you should write the code of the comic, see the popular comic list."]})})})})]})]})},y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center p-2",children:"Popular Comics"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ol",{className:"d-flex flex-column",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Spider-man (Peter Parker)"}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009610"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Iron Man"}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009368"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Hulk "}),Object(d.jsx)("h4",{className:"me-3",children:" Code: 1009351"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Thor "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009664"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Captain America (Steve Rogers)"}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009220"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" X-men "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009726"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Wolverine "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009718"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Doctor Strange "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009282"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Deadpool "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1009268"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between popular-list-item",children:[Object(d.jsx)("h4",{className:"mb-3",children:" Eternals "}),Object(d.jsx)("h4",{className:"me-3",children:"Code: 1010807"})]})]})]})},w=function(e){var t=e.setComics,c=Object(s.useState)(""),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(d.jsx)("form",{className:"form-control form-container",onSubmit:function(e){e.preventDefault(),n.trim().length>2&&(t([n]),r(""))},children:Object(d.jsx)("input",{className:" form-control hero-input ",type:"text",autoComplete:"off",placeholder:"Search your favorite Comics",value:n,onChange:function(e){r(e.target.value)}})})},k=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header"}),Object(d.jsx)(o,{}),Object(d.jsx)(w,{setComics:a}),Object(d.jsxs)("div",{className:"hero-background",children:[0===c.length&&Object(d.jsx)("div",{className:"text-white bg-dark  popular-container",children:Object(d.jsx)(y,{})}),c.map((function(e){return Object(d.jsx)(g,{id:e},e)}))]})]})},C=function(){return Object(d.jsx)(r.a,{basename:"/marvel-comics",children:Object(d.jsx)("div",{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(i.a,{exact:!0,path:"/search",component:k})]})})})};n.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5721bc6b.chunk.js.map