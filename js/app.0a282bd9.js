(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tcc-arquitetura-software/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},"205e":function(e,t,n){"use strict";var r=n("4374"),a=n.n(r);a.a},4374:function(e,t,n){},4522:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Cabecalho"),n("main",[n("router-view")],1),n("Rodape")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{id:"btn-menu",type:"checkbox"}}),n("label",{attrs:{for:"btn-menu"}},[e._v("☰")]),n("nav",{staticClass:"menu"},[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[e._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Sobre")]),n("ul",[n("li",[n("a",{attrs:{href:"#"}},[e._v("História")])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Produtos")])])])]),n("li",[n("a",{attrs:{href:"#"}},[e._v("Contato")])])])])])}],l={name:"cabecalho"},c=l,s=(n("f330"),n("2877")),f=Object(s["a"])(c,i,u,!1,null,"eb8f44b6",null);f.options.__file="Cabecalho.vue";var p=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{attrs:{id:"page-footer"}},[e._v("\n  © P. H. Gomes\n")])},_=[],d={name:"rodape"},m=d,h=(n("a298"),Object(s["a"])(m,v,_,!1,null,"a9e4114a",null));h.options.__file="Rodape.vue";var b=h.exports,y={name:"app",components:{Cabecalho:p,Rodape:b}},g=y,O=(n("034f"),Object(s["a"])(g,a,o,!1,null,null,null));O.options.__file="App.vue";var j=O.exports,w=n("8c4f"),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Pois é....")]),n("p",[e._v("Isso aqui tá vazio por enquanto")]),n("a",{attrs:{href:"./produtos"}},[e._v("Pode clicar")])])}],$={name:"pagina-inicial"},E=$,S=(n("205e"),Object(s["a"])(E,x,P,!1,null,"2cf0098a",null));S.options.__file="PaginaInicial.vue";var C=S.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{id:"produtos"}},[n("li",[n("a",{attrs:{href:"./"}},[e._v("Voltar")])]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")]),n("li",[e._v("item")])])}],q={name:"lista-produtos"},H=q,R=(n("aecf"),Object(s["a"])(H,k,M,!1,null,"1e388ab4",null));R.options.__file="ListaProdutos.vue";var T=R.exports,I=[{path:"/",component:C},{path:"/produtos",component:T}];r["a"].use(w["a"]);var J=new w["a"]({routes:I,mode:"history"});r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)},router:J}).$mount("#app")},"5a00":function(e,t,n){},a298:function(e,t,n){"use strict";var r=n("4522"),a=n.n(r);a.a},aecf:function(e,t,n){"use strict";var r=n("e549"),a=n.n(r);a.a},c21b:function(e,t,n){},e549:function(e,t,n){},f330:function(e,t,n){"use strict";var r=n("5a00"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0a282bd9.js.map