(function(){"use strict";var e={192:function(e,n,o){var l=o(963),t=o(252);function r(e,n,o,l,r,i){const u=(0,t.up)("VueProject");return(0,t.wg)(),(0,t.j4)(u)}var i=o(577);const u={class:"container",style:{"text-align":"center"}},a=(0,t._)("h1",null,"Registro",-1),s=(0,t._)("h2",null,"Seus dados ",-1),c={class:"list-group"},d=["onClick"];function m(e,n,o,r,m,f){const p=(0,t.up)("FormTodo");return(0,t.wg)(),(0,t.iD)("div",u,[a,(0,t.Wm)(p,{onAddTodo:f.Logar},null,8,["onAddTodo"]),s,(0,t._)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(m.dados,((e,n)=>((0,t.wg)(),(0,t.iD)("div",{class:"list-group-item",key:n},[(0,t._)("p",null,(0,i.zw)(e.Nome),1),(0,t._)("p",null,(0,i.zw)(e.Telefone),1),(0,t._)("p",null,(0,i.zw)(e.email),1),(0,t._)("a",{href:"#",onClick:(0,l.iM)((e=>f.Removerdados(n)),["prevent"])},"Excluir",8,d)])))),128))])])}const f=e=>((0,t.dD)("data-v-1967b244"),e=e(),(0,t.Cn)(),e),p=f((()=>(0,t._)("br",null,null,-1))),h=f((()=>(0,t._)("h4",null,"Nome",-1))),v=f((()=>(0,t._)("br",null,null,-1))),b=(0,t.Uk)(),_=f((()=>(0,t._)("br",null,null,-1))),g=f((()=>(0,t._)("h4",null,"Telefone ",-1))),w=f((()=>(0,t._)("br",null,null,-1))),y=(0,t.Uk)(),T=f((()=>(0,t._)("br",null,null,-1))),j=f((()=>(0,t._)("h4",null,"E-mail",-1))),k=f((()=>(0,t._)("br",null,null,-1))),N=f((()=>(0,t._)("br",null,null,-1))),O=f((()=>(0,t._)("br",null,null,-1))),x=f((()=>(0,t._)("br",null,null,-1)));function D(e,n,o,r,i,u){return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("div",null,[h,(0,t.wy)((0,t._)("input",{class:"input-name",type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>i.Nome=e)},null,512),[[l.nr,i.Nome]]),v,b,_,g,(0,t.wy)((0,t._)("input",{class:"input-number",type:"text",placeholder:"(00)0000-0000","onUpdate:modelValue":n[1]||(n[1]=e=>i.Telefone=e)},null,512),[[l.nr,i.Telefone]]),w,y,T]),j,(0,t.wy)((0,t._)("input",{type:"email",class:"input-email",placeholder:"exemple@gmail.com","onUpdate:modelValue":n[2]||(n[2]=e=>i.email=e)},null,512),[[l.nr,i.email]]),k,N,(0,t._)("button",{class:"btn-primary",onClick:n[3]||(n[3]=(...e)=>u.Logar&&u.Logar(...e))},"Submit"),O,x],64)}var C={data(){return{Nome:"",Telefone:"",email:""}},methods:{Logar(){""==this.Nome&&0==this.Nome&&""==this.Telefone||this.Telefone==String&&""==this.email||"@gmail.com"!=this.email.length?(window.alert("Dados inválidos"),this.Nome="",this.Telefone="",this.email=""):(this.$emit("add-todo",{Nome:this.Nome,Telefone:this.Telefone,email:this.email}),this.Nome="",this.Telefone="",this.email="")}}},L=o(744);const U=(0,L.Z)(C,[["render",D],["__scopeId","data-v-1967b244"]]);var V=U,P={components:{FormTodo:V},data(){return{dados:[]}},methods:{Logar(e){this.dados.push(e)},Removerdados(e){this.dados.splice(e,1),console.log(Date.now(),this.dados)}}};const z=(0,L.Z)(P,[["render",m]]);var A=z,E={name:"App",components:{VueProject:A}};const F=(0,L.Z)(E,[["render",r]]);var R=F;(0,l.ri)(R).mount("#app")}},n={};function o(l){var t=n[l];if(void 0!==t)return t.exports;var r=n[l]={exports:{}};return e[l](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(n,l,t,r){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],t=e[c][1],r=e[c][2];for(var u=!0,a=0;a<l.length;a++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](l[a])}))?l.splice(a--,1):(u=!1,r<i&&(i=r));if(u){e.splice(c--,1);var s=t();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,t,r]}}(),function(){o.d=function(e,n){for(var l in n)o.o(n,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,l){var t,r,i=l[0],u=l[1],a=l[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(a)var c=a(o)}for(n&&n(l);s<i.length;s++)r=i[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},l=self["webpackChunkvuejs_cli"]=self["webpackChunkvuejs_cli"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(192)}));l=o.O(l)})();
//# sourceMappingURL=app.6144d62e.js.map