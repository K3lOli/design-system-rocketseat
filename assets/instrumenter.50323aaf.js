import{v as St,x as mt,g as bt,y as _t,z as Me,A as F,B as Ue,C as Ke,b as Ve,D as Ot,c as R,r as Ge,k as re,E as Et,F as ne,G as ae,H as He,I as Tt,J as ze,K as $t,f as P,L as wt,M as Rt,_ as O,i as Ye,N as We,O as Xe,h as qe,P as At,Q as xt,R as Pt,S as Nt,T as Dt,U as jt,V as Ct,W as kt,X as Je,Y as D,Z as ie,$ as Lt,a0 as Qe,a1 as Bt,a2 as Ft,a3 as Mt,a4 as Ut,a5 as Ze,a6 as Kt,a7 as Vt,p as Gt,a8 as se,a9 as Ht,aa as zt,ab as Yt,o as Wt,w as _}from"./window.909044ec.js";var Xt=St,qt=mt;Xt("toPrimitive");qt();var Jt=bt,Qt=_t,Zt=TypeError,er=function(t){if(Jt(this),t==="string"||t==="default")t="string";else if(t!=="number")throw Zt("Incorrect hint");return Qt(this,t)},tr=Me,rr=F,nr=er,ar=Ue,fe=ar("toPrimitive"),ce=Date.prototype;tr(ce,fe)||rr(ce,fe,nr);var ir=Ke,sr=Ve,ve=Ot,et=function(t,e,r){var n,s;return ve&&ir(n=e.constructor)&&n!==r&&sr(s=n.prototype)&&s!==r.prototype&&ve(t,s),t},or=R,ur=or(1 .valueOf),lr=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,fr=R,cr=Ge,vr=re,dr=lr,de=fr("".replace),B="["+dr+"]",hr=RegExp("^"+B+B+"*"),gr=RegExp(B+B+"*$"),M=function(t){return function(e){var r=vr(cr(e));return t&1&&(r=de(r,hr,"")),t&2&&(r=de(r,gr,"")),r}},yr={start:M(1),end:M(2),trim:M(3)},pr=ne,oe=ae,tt=R,Ir=He,Sr=F,he=Me,mr=et,br=$t,_r=wt,rt=Rt,Or=P,Er=Et.f,Tr=Tt.f,$r=ze.f,wr=ur,Rr=yr.trim,J="Number",$=oe[J],U=$.prototype,Ar=oe.TypeError,xr=tt("".slice),j=tt("".charCodeAt),Pr=function(t){var e=rt(t,"number");return typeof e=="bigint"?e:Nr(e)},Nr=function(t){var e=rt(t,"number"),r,n,s,o,i,c,f,u;if(_r(e))throw Ar("Cannot convert a Symbol value to a number");if(typeof e=="string"&&e.length>2){if(e=Rr(e),r=j(e,0),r===43||r===45){if(n=j(e,2),n===88||n===120)return NaN}else if(r===48){switch(j(e,1)){case 66:case 98:s=2,o=49;break;case 79:case 111:s=8,o=55;break;default:return+e}for(i=xr(e,2),c=i.length,f=0;f<c;f++)if(u=j(i,f),u<48||u>o)return NaN;return parseInt(i,s)}}return+e};if(Ir(J,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var A=function(e){var r=arguments.length<1?0:$(Pr(e)),n=this;return br(U,n)&&Or(function(){wr(n)})?mr(Object(r),n,A):r},ge=pr?Er($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),K=0,C;ge.length>K;K++)he($,C=ge[K])&&!he(A,C)&&$r(A,C,Tr($,C));A.prototype=U,U.constructor=A,Sr(oe,J,A,{constructor:!0})}var Dr=O,jr=ae,Cr=R,ye=He,kr=F,Lr=Ye.exports,Br=We,Fr=Xe,Mr=Ke,Ur=qe,V=Ve,G=P,Kr=At,Vr=xt,Gr=et,nt=function(t,e,r){var n=t.indexOf("Map")!==-1,s=t.indexOf("Weak")!==-1,o=n?"set":"add",i=jr[t],c=i&&i.prototype,f=i,u={},a=function(y){var p=Cr(c[y]);kr(c,y,y=="add"?function(I){return p(this,I===0?0:I),this}:y=="delete"?function(S){return s&&!V(S)?!1:p(this,S===0?0:S)}:y=="get"?function(I){return s&&!V(I)?void 0:p(this,I===0?0:I)}:y=="has"?function(I){return s&&!V(I)?!1:p(this,I===0?0:I)}:function(I,T){return p(this,I===0?0:I,T),this})},d=ye(t,!Mr(i)||!(s||c.forEach&&!G(function(){new i().entries().next()})));if(d)f=r.getConstructor(e,t,n,o),Lr.enable();else if(ye(t,!0)){var h=new f,l=h[o](s?{}:-0,1)!=h,v=G(function(){h.has(1)}),g=Kr(function(y){new i(y)}),m=!s&&G(function(){for(var y=new i,p=5;p--;)y[o](p,p);return!y.has(-0)});g||(f=e(function(y,p){Fr(y,c);var S=Gr(new i,y,f);return Ur(p)||Br(p,S[o],{that:S,AS_ENTRIES:n}),S}),f.prototype=c,c.constructor=f),(v||m)&&(a("delete"),a("has"),n&&a("get")),(m||l)&&a(o),s&&c.clear&&delete c.clear}return u[t]=f,Dr({global:!0,constructor:!0,forced:f!=i},u),Vr(f,t),s||r.setStrong(f,t,n),f},Hr=F,zr=function(t,e,r){for(var n in e)Hr(t,n,e[n],r);return t},Yr=ze.f,Wr=Pt,pe=zr,Xr=kt,qr=Xe,Jr=qe,Qr=We,Zr=Nt,k=Dt,en=jt,N=ne,Ie=Ye.exports.fastKey,at=Ct,Se=at.set,H=at.getterFor,it={getConstructor:function(t,e,r,n){var s=t(function(u,a){qr(u,o),Se(u,{type:e,index:Wr(null),first:void 0,last:void 0,size:0}),N||(u.size=0),Jr(a)||Qr(a,u[n],{that:u,AS_ENTRIES:r})}),o=s.prototype,i=H(e),c=function(u,a,d){var h=i(u),l=f(u,a),v,g;return l?l.value=d:(h.last=l={index:g=Ie(a,!0),key:a,value:d,previous:v=h.last,next:void 0,removed:!1},h.first||(h.first=l),v&&(v.next=l),N?h.size++:u.size++,g!=="F"&&(h.index[g]=l)),u},f=function(u,a){var d=i(u),h=Ie(a),l;if(h!=="F")return d.index[h];for(l=d.first;l;l=l.next)if(l.key==a)return l};return pe(o,{clear:function(){for(var a=this,d=i(a),h=d.index,l=d.first;l;)l.removed=!0,l.previous&&(l.previous=l.previous.next=void 0),delete h[l.index],l=l.next;d.first=d.last=void 0,N?d.size=0:a.size=0},delete:function(u){var a=this,d=i(a),h=f(a,u);if(h){var l=h.next,v=h.previous;delete d.index[h.index],h.removed=!0,v&&(v.next=l),l&&(l.previous=v),d.first==h&&(d.first=l),d.last==h&&(d.last=v),N?d.size--:a.size--}return!!h},forEach:function(a){for(var d=i(this),h=Xr(a,arguments.length>1?arguments[1]:void 0),l;l=l?l.next:d.first;)for(h(l.value,l.key,this);l&&l.removed;)l=l.previous},has:function(a){return!!f(this,a)}}),pe(o,r?{get:function(a){var d=f(this,a);return d&&d.value},set:function(a,d){return c(this,a===0?0:a,d)}}:{add:function(a){return c(this,a=a===0?0:a,a)}}),N&&Yr(o,"size",{get:function(){return i(this).size}}),s},setStrong:function(t,e,r){var n=e+" Iterator",s=H(e),o=H(n);Zr(t,e,function(i,c){Se(this,{type:n,target:i,state:s(i),kind:c,last:void 0})},function(){for(var i=o(this),c=i.kind,f=i.last;f&&f.removed;)f=f.previous;return!i.target||!(i.last=f=f?f.next:i.state.first)?(i.target=void 0,k(void 0,!0)):c=="keys"?k(f.key,!1):c=="values"?k(f.value,!1):k([f.key,f.value],!1)},r?"entries":"values",!r,!0),en(e)}},tn=nt,rn=it;tn("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},rn);var nn=nt,an=it;nn("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},an);var sn=O,on=D.filter,un=Je,ln=un("filter");sn({target:"Array",proto:!0,forced:!ln},{filter:function(e){return on(this,e,arguments.length>1?arguments[1]:void 0)}});var fn=O,cn=D.map,vn=Je,dn=vn("map");fn({target:"Array",proto:!0,forced:!dn},{map:function(e){return cn(this,e,arguments.length>1?arguments[1]:void 0)}});var hn=O,gn=D.findIndex,yn=ie,Q="findIndex",st=!0;Q in[]&&Array(1)[Q](function(){st=!1});hn({target:"Array",proto:!0,forced:st},{findIndex:function(e){return gn(this,e,arguments.length>1?arguments[1]:void 0)}});yn(Q);var pn=O,In=D.find,Sn=ie,Z="find",ot=!0;Z in[]&&Array(1)[Z](function(){ot=!1});pn({target:"Array",proto:!0,forced:ot},{find:function(e){return In(this,e,arguments.length>1?arguments[1]:void 0)}});Sn(Z);var mn=ne,ut=R,bn=Qe,_n=Bt,On=Lt.f,En=ut(On),Tn=ut([].push),me=function(t){return function(e){for(var r=_n(e),n=bn(r),s=n.length,o=0,i=[],c;s>o;)c=n[o++],(!mn||En(r,c))&&Tn(i,t?[c,r[c]]:r[c]);return i}},lt={entries:me(!0),values:me(!1)},$n=O,wn=lt.values;$n({target:"Object",stat:!0},{values:function(e){return wn(e)}});var Rn=P,ft=function(t,e){var r=[][t];return!!r&&Rn(function(){r.call(null,e||function(){return 1},1)})},An=D.forEach,xn=ft,Pn=xn("forEach"),Nn=Pn?[].forEach:function(e){return An(this,e,arguments.length>1?arguments[1]:void 0)},be=ae,_e=Ft,Dn=Mt,z=Nn,jn=Ut,ct=function(t){if(t&&t.forEach!==z)try{jn(t,"forEach",z)}catch{t.forEach=z}};for(var Y in _e)_e[Y]&&ct(be[Y]&&be[Y].prototype);ct(Dn);var Cn=O,kn=lt.entries;Cn({target:"Object",stat:!0},{entries:function(e){return kn(e)}});var Ln=O,Bn=Ze,vt=Qe,Fn=P,Mn=Fn(function(){vt(1)});Ln({target:"Object",stat:!0,forced:Mn},{keys:function(e){return vt(Bn(e))}});var Un=O,Kn=Kt.includes,Vn=P,Gn=ie,Hn=Vn(function(){return!Array(1).includes()});Un({target:"Array",proto:!0,forced:Hn},{includes:function(e){return Kn(this,e,arguments.length>1?arguments[1]:void 0)}});Gn("includes");var Oe=Vt,zn=TypeError,Yn=function(t,e){if(!delete t[e])throw zn("Cannot delete property "+Oe(e)+" of "+Oe(t))},Ee=Gt,Wn=Math.floor,ee=function(t,e){var r=t.length,n=Wn(r/2);return r<8?Xn(t,e):qn(t,ee(Ee(t,0,n),e),ee(Ee(t,n),e),e)},Xn=function(t,e){for(var r=t.length,n=1,s,o;n<r;){for(o=n,s=t[n];o&&e(t[o-1],s)>0;)t[o]=t[--o];o!==n++&&(t[o]=s)}return t},qn=function(t,e,r,n){for(var s=e.length,o=r.length,i=0,c=0;i<s||c<o;)t[i+c]=i<s&&c<o?n(e[i],r[c])<=0?e[i++]:r[c++]:i<s?e[i++]:r[c++];return t},Jn=ee,Qn=se,Te=Qn.match(/firefox\/(\d+)/i),Zn=!!Te&&+Te[1],ea=se,ta=/MSIE|Trident/.test(ea),ra=se,$e=ra.match(/AppleWebKit\/(\d+)\./),na=!!$e&&+$e[1],aa=O,dt=R,ia=Ht,sa=Ze,we=zt,oa=Yn,Re=re,ue=P,ua=Jn,la=ft,Ae=Zn,fa=ta,xe=Yt,Pe=na,w=[],Ne=dt(w.sort),ca=dt(w.push),va=ue(function(){w.sort(void 0)}),da=ue(function(){w.sort(null)}),ha=la("sort"),ht=!ue(function(){if(xe)return xe<70;if(!(Ae&&Ae>3)){if(fa)return!0;if(Pe)return Pe<603;var t="",e,r,n,s;for(e=65;e<76;e++){switch(r=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(s=0;s<47;s++)w.push({k:r+s,v:n})}for(w.sort(function(o,i){return i.v-o.v}),s=0;s<w.length;s++)r=w[s].k.charAt(0),t.charAt(t.length-1)!==r&&(t+=r);return t!=="DGBEFHACIJK"}}),ga=va||!da||!ha||!ht,ya=function(t){return function(e,r){return r===void 0?-1:e===void 0?1:t!==void 0?+t(e,r)||0:Re(e)>Re(r)?1:-1}};aa({target:"Array",proto:!0,forced:ga},{sort:function(e){e!==void 0&&ia(e);var r=sa(this);if(ht)return e===void 0?Ne(r):Ne(r,e);var n=[],s=we(r),o,i;for(i=0;i<s;i++)i in r&&ca(n,r[i]);for(ua(n,ya(e)),o=we(n),i=0;i<o;)r[i]=n[i++];for(;i<s;)oa(r,i++);return r}});var pa=Wt,Ia=TypeError,Sa=function(t){if(pa(t))throw Ia("The method doesn't accept regular expressions");return t},ma=Ue,ba=ma("match"),_a=function(t){var e=/./;try{"/./"[t](e)}catch{try{return e[ba]=!1,"/./"[t](e)}catch{}}return!1},Oa=O,Ea=R,Ta=Sa,$a=Ge,De=re,wa=_a,Ra=Ea("".indexOf);Oa({target:"String",proto:!0,forced:!wa("includes")},{includes:function(e){return!!~Ra(De($a(this)),De(Ta(e)),arguments.length>1?arguments[1]:void 0)}});var b;(function(t){t.DONE="done",t.ERROR="error",t.ACTIVE="active",t.WAITING="waiting"})(b||(b={}));var W;function x(t){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function Aa(t,e){if(t==null)return{};var r=xa(t,e),n,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)n=o[s],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}function xa(t,e){if(t==null)return{};var r={},n=Object.keys(t),s,o;for(o=0;o<n.length;o++)s=n[o],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function Pa(t){var e=Na(t,"string");return x(e)==="symbol"?e:String(e)}function Na(t,e){if(x(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(x(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function L(t){return Ca(t)||ja(t)||yt(t)||Da()}function Da(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ja(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ca(t){if(Array.isArray(t))return te(t)}function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ka(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function je(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function La(t,e,r){return e&&je(t.prototype,e),r&&je(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function gt(t,e){return Ma(t)||Fa(t,e)||yt(t,e)||Ba()}function Ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(t,e){if(!!t){if(typeof t=="string")return te(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(t,e)}}function te(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Fa(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],s=!0,o=!1,i,c;try{for(r=r.call(t);!(s=(i=r.next()).done)&&(n.push(i.value),!(e&&n.length===e));s=!0);}catch(f){o=!0,c=f}finally{try{!s&&r.return!=null&&r.return()}finally{if(o)throw c}}return n}}function Ma(t){if(Array.isArray(t))return t}const{addons:Ua}=__STORYBOOK_MODULE_ADDONS__,{once:Ka}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{FORCE_REMOUNT:Ce,IGNORED_EXCEPTION:Va,SET_CURRENT_STORY:Ga,STORY_RENDER_PHASE_CHANGED:Ha}=__STORYBOOK_MODULE_CORE_EVENTS__;var E={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},pt=((W=_.FEATURES)===null||W===void 0?void 0:W.interactionsDebugger)!==!0,ke={debugger:!pt,start:!1,back:!1,goto:!1,next:!1,end:!1},Le=new Error("This function ran after the play function completed. Did you forget to `await` it?"),Be=function(e){return Object.prototype.toString.call(e)==="[object Object]"},za=function(e){return Object.prototype.toString.call(e)==="[object Module]"},Ya=function(e){if(!Be(e)&&!za(e))return!1;if(e.constructor===void 0)return!0;var r=e.constructor.prototype;return!(!Be(r)||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)},Wa=function(e){try{return new e.constructor}catch{return{}}},q=function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},Fe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(r?e.shadowCalls:e.calls).filter(function(o){return o.retain});if(!!n.length){var s=new Map(Array.from(e.callRefsByResult.entries()).filter(function(o){var i=gt(o,2),c=i[1];return c.retain}));return{cursor:n.length,calls:n,callRefsByResult:s}}},Xa=function(){function t(){var e=this;ka(this,t),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=Ua.getChannel(),this.state=_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var r=function(u){var a=u.storyId,d=u.isPlaying,h=d===void 0?!0:d,l=u.isDebugging,v=l===void 0?!1:l,g=e.getState(a);e.setState(a,Object.assign({},q(),Fe(g,v),{shadowCalls:v?g.shadowCalls:[],chainedCallIds:v?g.chainedCallIds:new Set,playUntil:v?g.playUntil:void 0,isPlaying:h,isDebugging:v})),v||e.sync(a)};this.channel.on(Ce,r),this.channel.on(Ha,function(f){var u=f.storyId,a=f.newPhase,d=e.getState(u),h=d.isDebugging,l=d.forwardedException;if(e.setState(u,{renderPhase:a}),a==="playing"&&r({storyId:u,isDebugging:h}),a==="played"&&(e.setState(u,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),l))throw l}),this.channel.on(Ga,function(){e.initialized?e.cleanup():e.initialized=!0});var n=function(u){var a=u.storyId,d=u.playUntil;e.getState(a).isDebugging||e.setState(a,function(l){var v=l.calls;return{calls:[],shadowCalls:v.map(function(g){return Object.assign({},g,{status:b.WAITING})}),isDebugging:!0}});var h=e.getLog(a);e.setState(a,function(l){var v,g=l.shadowCalls,m=g.findIndex(function(y){return y.id===h[0].callId});return{playUntil:d||((v=g.slice(0,m).filter(function(y){return y.interceptable}).slice(-1)[0])===null||v===void 0?void 0:v.id)}}),e.channel.emit(Ce,{storyId:a,isDebugging:!0})},s=function(u){var a,d=u.storyId,h=e.getState(d),l=h.isDebugging,v=e.getLog(d),g=l?v.findIndex(function(m){var y=m.status;return y===b.WAITING}):v.length;n({storyId:d,playUntil:(a=v[g-2])===null||a===void 0?void 0:a.callId})},o=function(u){var a=u.storyId,d=u.callId,h=e.getState(a),l=h.calls,v=h.shadowCalls,g=h.resolvers,m=l.find(function(I){var T=I.id;return T===d}),y=v.find(function(I){var T=I.id;return T===d});if(!m&&y&&Object.values(g).length>0){var p,S=(p=e.getLog(a).find(function(I){return I.status===b.WAITING}))===null||p===void 0?void 0:p.callId;y.id!==S&&e.setState(a,{playUntil:y.id}),Object.values(g).forEach(function(I){return I()})}else n({storyId:a,playUntil:d})},i=function(u){var a=u.storyId,d=e.getState(a),h=d.resolvers;if(Object.values(h).length>0)Object.values(h).forEach(function(g){return g()});else{var l,v=(l=e.getLog(a).find(function(g){return g.status===b.WAITING}))===null||l===void 0?void 0:l.callId;v?n({storyId:a,playUntil:v}):c({storyId:a})}},c=function(u){var a=u.storyId;e.setState(a,{playUntil:void 0,isDebugging:!1}),Object.values(e.getState(a).resolvers).forEach(function(d){return d()})};this.channel.on(E.START,n),this.channel.on(E.BACK,s),this.channel.on(E.GOTO,o),this.channel.on(E.NEXT,i),this.channel.on(E.END,c)}return La(t,[{key:"getState",value:function(r){return this.state[r]||q()}},{key:"setState",value:function(r,n){var s=this.getState(r),o=typeof n=="function"?n(s):n;this.state=Object.assign({},this.state,X({},r,Object.assign({},s,o))),_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"cleanup",value:function(){this.state=Object.entries(this.state).reduce(function(r,n){var s=gt(n,2),o=s[0],i=s[1],c=Fe(i);return c&&(r[o]=Object.assign(q(),c)),r},{}),this.channel.emit(E.SYNC,{controlStates:ke,logItems:[]}),_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"getLog",value:function(r){var n=this.getState(r),s=n.calls,o=n.shadowCalls,i=L(o);s.forEach(function(f,u){i[u]=f});var c=new Set;return i.reduceRight(function(f,u){return u.args.forEach(function(a){a!=null&&a.__callId__&&c.add(a.__callId__)}),u.path.forEach(function(a){a.__callId__&&c.add(a.__callId__)}),u.interceptable&&!c.has(u.id)&&(f.unshift({callId:u.id,status:u.status}),c.add(u.id)),f},[])}},{key:"instrument",value:function(r,n){var s=this;if(!Ya(r))return r;var o=n.mutate,i=o===void 0?!1:o,c=n.path,f=c===void 0?[]:c;return Object.keys(r).reduce(function(u,a){var d=r[a];return typeof d!="function"?(u[a]=s.instrument(d,Object.assign({},n,{path:f.concat(a)})),u):typeof d.__originalFn__=="function"?(u[a]=d,u):(u[a]=function(){for(var h=arguments.length,l=new Array(h),v=0;v<h;v++)l[v]=arguments[v];return s.track(a,d,l,n)},u[a].__originalFn__=d,Object.defineProperty(u[a],"name",{value:a,writable:!1}),Object.keys(d).length>0&&Object.assign(u[a],s.instrument(Object.assign({},d),Object.assign({},n,{path:f.concat(a)}))),u)},i?r:Wa(r))}},{key:"track",value:function(r,n,s,o){var i,c,f,u,a=(s==null||(i=s[0])===null||i===void 0?void 0:i.__storyId__)||((c=_.window.__STORYBOOK_PREVIEW__)===null||c===void 0||(f=c.urlStore)===null||f===void 0||(u=f.selection)===null||u===void 0?void 0:u.storyId),d=this.getState(a),h=d.cursor,l=d.parentId;this.setState(a,{cursor:h+1});var v="".concat(l||a," [").concat(h,"] ").concat(r),g=o.path,m=g===void 0?[]:g,y=o.intercept,p=y===void 0?!1:y,S=o.retain,I=S===void 0?!1:S,T=typeof p=="function"?p(r,m):p,le={id:v,parentId:l,storyId:a,cursor:h,path:m,method:r,args:s,interceptable:T,retain:I},It=(T?this.intercept:this.invoke).call(this,n,le,o);return this.instrument(It,Object.assign({},o,{mutate:!0,path:[{__callId__:le.id}]}))}},{key:"intercept",value:function(r,n,s){var o=this,i=this.getState(n.storyId),c=i.chainedCallIds,f=i.isDebugging,u=i.playUntil,a=c.has(n.id);return!f||a||u?(u===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(r,n,s)):new Promise(function(d){o.setState(n.storyId,function(h){var l=h.resolvers;return{isLocked:!1,resolvers:Object.assign({},l,X({},n.id,d))}})}).then(function(){return o.setState(n.storyId,function(d){var h=d.resolvers,l=n.id;h[l];var v=Aa(h,[l].map(Pa));return{isLocked:!0,resolvers:v}}),o.invoke(r,n,s)})}},{key:"invoke",value:function(r,n,s){var o=this,i=this.getState(n.storyId),c=i.callRefsByResult,f=i.forwardedException,u=i.renderPhase,a=Object.assign({},n,{args:n.args.map(function(v){if(c.has(v))return c.get(v);if(v instanceof _.window.HTMLElement){var g=v.prefix,m=v.localName,y=v.id,p=v.classList,S=v.innerText,I=Array.from(p);return{__element__:{prefix:g,localName:m,id:y,classNames:I,innerText:S}}}return v})});n.path.forEach(function(v){v!=null&&v.__callId__&&o.setState(n.storyId,function(g){var m=g.chainedCallIds;return{chainedCallIds:new Set(Array.from(m).concat(v.__callId__))}})});var d=function(g){if(g instanceof Error){var m=g.name,y=g.message,p=g.stack,S={name:m,message:y,stack:p};if(o.update(Object.assign({},a,{status:b.ERROR,exception:S})),o.setState(n.storyId,function(I){return{callRefsByResult:new Map([].concat(L(Array.from(I.callRefsByResult.entries())),[[g,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&g!==Le)throw Va;return o.setState(n.storyId,{forwardedException:g}),g}throw g};try{if(f)throw this.setState(n.storyId,{forwardedException:void 0}),f;if(u==="played"&&!n.retain)throw Le;var h=s.getArgs?s.getArgs(n,this.getState(n.storyId)):n.args,l=r.apply(void 0,L(h.map(function(v){return typeof v!="function"||Object.keys(v).length?v:function(){var g=o.getState(n.storyId),m=g.cursor,y=g.parentId;o.setState(n.storyId,{cursor:0,parentId:n.id});var p=function(){return o.setState(n.storyId,{cursor:m,parentId:y})},S=v.apply(void 0,arguments);return S instanceof Promise?S.then(p,p):p(),S}})));return l&&["object","function","symbol"].includes(x(l))&&this.setState(n.storyId,function(v){return{callRefsByResult:new Map([].concat(L(Array.from(v.callRefsByResult.entries())),[[l,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},a,{status:l instanceof Promise?b.ACTIVE:b.DONE})),l instanceof Promise?l.then(function(v){return o.update(Object.assign({},a,{status:b.DONE})),v},d):l}catch(v){return d(v)}}},{key:"update",value:function(r){var n=this;clearTimeout(this.getState(r.storyId).syncTimeout),this.channel.emit(E.CALL,r),this.setState(r.storyId,function(s){var o=s.calls,i=o.concat(r).reduce(function(c,f){return Object.assign(c,X({},f.id,f))},{});return{calls:Object.values(i).sort(function(c,f){return c.id.localeCompare(f.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(r.storyId)},0)}})}},{key:"sync",value:function(r){var n=this.getState(r),s=n.isLocked,o=n.isPlaying,i=this.getLog(r),c=i.some(function(a){return a.status===b.ACTIVE});if(pt||s||c||i.length===0){this.channel.emit(E.SYNC,{controlStates:ke,logItems:i});return}var f=i.some(function(a){return[b.DONE,b.ERROR].includes(a.status)}),u={debugger:!0,start:f,back:f,goto:!0,next:o,end:o};this.channel.emit(E.SYNC,{controlStates:u,logItems:i})}}]),t}();function Ja(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var r,n,s,o,i=!1,c=!1;if(((r=_.window.location)===null||r===void 0||(n=r.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?i=!0:((s=_.window.location)===null||s===void 0||(o=s.search)===null||o===void 0?void 0:o.indexOf("instrument=false"))!==-1&&(c=!0),_.window.parent===_.window&&!i||c)return t;_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new Xa);var f=_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return f.instrument(t,e)}catch(u){return Ka.warn(u),t}}export{Ja as i};
//# sourceMappingURL=instrumenter.50323aaf.js.map
