/* Our planet. Decoded. Built from src/ by scripts/build.mjs. Do not edit. */
(()=>{var Zh=["#E76124","#133B64","#90A968","#F4C03D","#477AE2","#7F1518","#67CCEA","#D7B7AA","#CBE0AB","#DB1F26","#F5ED5A","#CFBCD5"];var In=s=>Zh[s%Zh.length],to={light:{bg:"#FFFFFF",fg:"#000000",muted:"#595959",line:"#B3B3B3"},dark:{bg:"#000000",fg:"#FFFFFF",muted:"#BFBFBF",line:"#4D4D4D"}},Jh="#B3B3B3",Ys={step:1/60,gravity:-30,friction:.4,restitution:.2},wt={theme:1,drop:2,dropRamp:1,dropSettle:.5,lift:1.2,categorise:2,categoriseBack:1,explode:.5,freeze:.5,sort:3,sortSettle:.5,sortReady:4.5,sortBack:1.2,look:1,finaleFade:.9,finale:3,logoFade:1,finaleBack:2.5,arrange:3.5,arrangeFlight:1.5,arrangeFrame:2,frameFade:.8,arrangeBack:1.5},fi={aspect:1.5,areaPerCube:6,spawnSeed:1},eo={speed:28,gap:1.8,spacing:1.25,drift:2,variation:.5},Fl={nodes:80,neighbours:2,depth:45,size:[.5,1],opacity:.1,colour:"#FFFFFF",sway:.035,cycle:30,turn:.25,seed:7,repelRadius:.35,repelPush:200,repelSpin:90,spring:5,damping:3.5,maxPush:14},Oi={outward:16,up:17,lowBonus:10,spin:8},_n={base:120,k:10,max:300,drag:6,heapRadius:2,releaseRadius:1,rampIn:.4,rampOut:.6,farRadius:5,farShare:.01,stragglers:7,spread:.88,rowZ:.2,zigzag:.2},We={pitch:1.25,floorGap:1.5,titleDrop:4.5,elevation:14,margin:.88,yaw:-.55,tilt:.05},no={delay:0,grow:.8,box:.8,labelFade:.6,leave:.2,length:120,gap:34,angle:40,labelWidth:260},io={introDwell:5,base:3,perWord:.25,minDwell:5,maxDwell:20,finaleDwell:8,idleReturn:90,pointerGrace:3,cursorSpeed:.55},Kh={fraction:.62},Ue={fov:3,margin:1.45,alpha:.6,countColours:["#4575B4","#91BFDB","#FEE090","#FC8D59","#D73027"],turn:2.5,pullBack:.6,pullBackShare:.45},jh={sensitivity:.008,keySpeed:1.6,maxPitch:1.8,spring:3.5},Dl={elevation:10,floorHeight:1/3},Qh={radius:4.5,push:120,lift:25,spin:16},tu="Simulated data.",Tp="Our planet. Decoded.",Cp="Decoding nature reveals its stories.";var eu=[{id:"intro",title:"Data cube",text:"Decoding nature reveals its stories.",theme:"dark",canvasLabel:"An empty black screen. The animation starts when you press Next."},{id:"data",title:"Data",callout:[{target:"topRight",text:"Each black cube represents a wildlife observation contributed by a member of the public."}],captionWhenReady:!0,text:"People all over the country submit observations of wildlife through a range of websites, mobile apps, recording schemes, and societies, many supported by UKCEH.",theme:"light",repel:!0,canvasLabel:"Many small black cubes fall and scatter across the floor."},{id:"categorise",title:"Categorise",callout:[{target:"topRight",text:"Each wildlife observation has attributes; for example these observations have been coloured according to which species was seen."}],text:"Data attributes provide information key for futher analysis; what was seen, where, when and by who?",theme:"light",repel:!0,canvasLabel:"The scattered cubes take on a different colour for each species."},{id:"sort",title:"Sort",callout:[{target:"backLeftHeap",text:"Some species have lots of observations."},{target:"backRightHeap",text:"Some species have few observations."}],calloutWhenReady:!0,text:"The more data we have for a species the more confident we can be about how its populations are changing, but it is often the rare species with little data that are most at risk of declines.",theme:"light",repel:!0,canvasLabel:"The cubes gather into one heap per species, so each heap has a single colour."},{id:"arrange",title:"Arrange",rotate:!0,text:"Data cubes are a bit like a pile of spreadsheets, one on top of another. Arranging the data in this way allows us to look for patterns in the data that might give us a clue about how species populations are changing.",theme:"light",callout:[{target:"cubeTopRight",text:"We can put all our wildlife observations into a data cube."},{target:"leftmost",text:"Each layer going up is one species' data.",reveal:"species",delay:1},{target:"rightmostBack",text:"Each layer going back is a different location.",reveal:"location",delay:1},{target:"lowest",text:"Each slice going left to right is a different year.",reveal:"time",delay:1}],calloutWhenReady:!0,canvasLabel:"The cubes arrange into a three-dimensional data cube with axes for species, location and time. Drag to rotate it."},{id:"insight1",title:"Insights",rotate:!0,note:"Simulated data. Darker means more records.",text:"Specialist species occur in fewer locations than generalists, often because they require a specific habitat to survive. Because of these special requirements they are more susceptible to declines in a changing environment.",theme:"light",insight:1,callout:[{target:"specialists",side:"left",text:"Some species are found in few locations - these are called specialists."},{target:"generalists",side:"right",text:"Some species are found in many locations - these are called generalists.",delay:1}],calloutWhenReady:!0,canvasLabel:"The data cube seen from the side, showing species against location.",summary:"Generalist species have records in many locations. The two specialist species have records in only one habitat."},{id:"insight2",title:"Insights",rotate:!0,note:"Simulated data. Red means more records, blue fewer.",text:"With the development of new species identification guides, recording websites, and mobile phone applications it has become far easier to share wildlife observations. As a result we have seen a growth in the number of records over the long term.",theme:"light",insight:2,callout:[{target:"cubeBox",side:"left",outline:!1,anchor:.15,text:"In the past, fewer people submitted observations of wildlife."},{target:"cubeBox",side:"right",outline:!1,anchor:.15,text:"In recent years we have received more data as more people get involved in wildlife recording.",delay:1}],calloutWhenReady:!0,canvasLabel:"The data cube seen from above, showing location against time.",summary:"The number of records rises from the earliest time to the latest, in locations across the cube."},{id:"insight3",title:"Insights",rotate:!0,note:"Simulated data. Darker means more records.",text:"Land-use change, climate change and other factors are changing the environment around us. Generalists are better equipped to adapt to these changes.",theme:"light",insight:3,callout:[{target:"generalists",side:"right",text:"Many generalists are adapting to our changing world."},{target:"specialists",side:"left",text:"Specialists find it harder to adapt and many are disappearing over time.",delay:1}],calloutWhenReady:!0,canvasLabel:"The data cube seen from the front, showing species against time.",summary:"Records rise overall, but the two specialist species have no records in the last third of the time axis."},{id:"conclusion",title:Cp,text:"",statement:!0,rotate:!0,theme:"light",canvasLabel:"The finished data cube, seen from the front and side. Decoding nature reveals its stories. Drag to rotate it."},{id:"finale",title:"UKCEH",text:Tp,credit:!0,theme:"dark",canvasLabel:"The cubes form the dots of the UKCEH logo. Our planet. Decoded."}];var Pn=s=>{throw new Error(`Data cube: ${s}`)};function Rp(s){(!s||typeof s!="object")&&Pn('no data found. Run "npm run data" and reload the page.');let{meta:t,species:e,data:n}=s;(!t||!Array.isArray(e)||!Array.isArray(n))&&Pn("missing meta, species or data.");let i=t.size;(!Number.isInteger(i)||i<1)&&Pn("meta.size must be a positive integer."),e.length!==i&&Pn(`expected ${i} species, found ${e.length}.`),n.length!==i&&Pn(`expected ${i} species layers, found ${n.length}.`);let r=[];n.forEach((a,l)=>{a.length!==i&&Pn(`species ${l} has ${a.length} time steps, expected ${i}.`),a.forEach((c,h)=>{c.length!==i&&Pn(`species ${l}, time ${h} has ${c.length} locations, expected ${i}.`),c.forEach((d,u)=>{d!==0&&d!==1&&Pn(`value at species ${l}, time ${h}, location ${u} is ${d}, expected 0 or 1.`),d===1&&r.push({id:r.length,species:l,time:h,location:u})})})});let o=t.displayOrder;return(!Array.isArray(o)||o.length!==i||new Set(o).size!==i||o.some(a=>!Number.isInteger(a)||a<0||a>=i))&&Pn("meta.displayOrder must list every species once."),r.length===0&&Pn("the cube has no records."),{size:i,seed:t.seed,species:e,displayOrder:o,habitatOf:t.habitatOf,cubes:r}}function nu(){return Rp(globalThis.DATA_CUBE)}function qn(s){let t=s;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function su(s,t=fi){let e=Math.sqrt(s*t.areaPerCube/t.aspect);return{width:e*t.aspect,depth:e}}function Ip(s){let t=s(),e=s()*2*Math.PI,n=s()*2*Math.PI,i=Math.sqrt(1-t),r=Math.sqrt(t);return{x:i*Math.sin(e),y:i*Math.cos(e),z:r*Math.sin(n),w:r*Math.cos(n)}}function ru(s,t=eo.spacing){let e=Math.PI*(3-Math.sqrt(5));return Array.from({length:s},(n,i)=>{let r=t*Math.sqrt(i+.5);return{x:r*Math.cos(i*e),z:r*Math.sin(i*e)}})}function iu(s){let t=Array.from({length:3},()=>({cycles:.5+s()*1.7,phase:s()*2*Math.PI}));return e=>{let n=t.reduce((i,r)=>i+Math.sin(2*Math.PI*r.cycles*e+r.phase),0);return Math.max(-1,Math.min(1,n/3*1.6))}}function Pp(s,t,e){let n=Math.min(Math.max(e,0),t/2);return n===0?1:Math.max(0,Math.min(s/n,1,(t-s)/n))}function ou(s,{duration:t,ramp:e=0},n){let i=Math.min(Math.max(e,0),t/2);return Math.max(1,Math.ceil(n.gap*s/(n.speed*(t-i))))}function au(s,t,e){return Math.ceil(ou(s,t,e)*(1+(e.variation??0)))}function lu(s,t,e=eo){let n=au(s,t,e);return ru(n,e.spacing).reduce((i,r)=>Math.max(i,Math.hypot(r.x,r.z)),0)}function cu(s,{duration:t,ramp:e=0,seed:n=fi.spawnSeed,stream:i=eo}){let r=qn(n),o=i.variation??0,a=iu(r),l=iu(r),c=2e3,h=new Float64Array(c+1);for(let v=0;v<c;v++){let S=(v+.5)/c*t;h[v+1]=h[v]+Pp(S,t,e)*(1+o*a(S))}let d=v=>{let S=v*h[c],M=0,L=c;for(;L-M>1;){let A=M+L>>1;h[A]<=S?M=A:L=A}let y=h[L]>h[M]?(S-h[M])/(h[L]-h[M]):0;return(M+y)/c*t},u=ou(s,{duration:t,ramp:e},i),f=au(s,{duration:t,ramp:e},i),p=ru(f,i.spacing),x=v=>Math.max(1,Math.min(f,Math.round(u*(1+o*l(v))))),g=i.gap/i.speed,m=new Float64Array(f),_=[];for(let v=0;v<s;v++){let S=d((v+.5)/s),M=x(S),L=0;for(let A=1;A<M;A++)m[A]<m[L]&&(L=A);let y=Math.max(S,m[L]);m[L]=y+g,_.push({lane:L,time:y})}let R=Array.from({length:s},(v,S)=>S);for(let v=s-1;v>0;v--){let S=Math.floor(r()*(v+1));[R[v],R[S]]=[R[S],R[v]]}return R.map(v=>({x:p[_[v].lane].x,z:p[_[v].lane].z,delay:_[v].time,velocity:{x:(r()-.5)*2*i.drift,y:-i.speed,z:(r()-.5)*2*i.drift},quaternion:Ip(r),spin:{x:(r()-.5)*6,y:(r()-.5)*6,z:(r()-.5)*6}}))}function nn(){return typeof location<"u"&&/[?&]motion=reduced(?:&|$)/.test(location.search||"")}function sn(s){return nn()?Math.min(s,.4):s}var ie={linear:s=>s,inOutQuad:s=>s<.5?2*s*s:1-(-2*s+2)**2/2,inOutCubic:s=>s<.5?4*s*s*s:1-(-2*s+2)**3/2,inCubic:s=>s*s*s,outCubic:s=>1-(1-s)**3},hu=s=>typeof requestAnimationFrame=="function"?requestAnimationFrame(s):setTimeout(()=>s(performance.now()),16);function fe({duration:s,easing:t=ie.inOutCubic,onUpdate:e}){let n=sn(s),i=performance.now(),r=!1;return{finished:new Promise(a=>{let l=c=>{if(r)return a(!1);let h=n>0?Math.min(1,(c-i)/(n*1e3)):1;e(h>=1?1:t(h)),h>=1?a(!0):hu(l)};hu(l)}),cancel:()=>{r=!0}}}var zi=s=>new Promise(t=>setTimeout(t,sn(s)*1e3));var Bl=(s,t)=>parseInt(s.slice(1+t*2,3+t*2),16);function Lp(s,t,e){let n=i=>Math.round(Bl(s,i)+(Bl(t,i)-Bl(s,i))*e);return"#"+[0,1,2].map(i=>n(i).toString(16).padStart(2,"0")).join("").toUpperCase()}function uu(s){let t={};for(let e of Object.keys(to.light))t[e]=Lp(to.light[e],to.dark[e],s);return t}function du(s,t="dark"){let e=t==="dark"?1:0,n=null;return s(uu(e),e),{get value(){return e},async animateTo(i,r){let o=i==="dark"?1:0;if(n?.cancel(),o===e)return;let a=e;n=fe({duration:r,easing:ie.inOutQuad,onUpdate:l=>{e=a+(o-a)*l,s(uu(e),e)}}),await n.finished}}}var Hu=0,gc=1,Wu=2;var Ar=1,qu=2,Rs=3,Ei=0,Ze=1,pn=2,On=0,Is=1,xc=2,yc=3,_c=4,Xu=5;var Xi=100,Yu=101,$u=102,Zu=103,Ju=104,Ku=200,ju=201,Qu=202,td=203,vc=204,bc=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,Fo=0,Do=1,Bo=2,_s=3,Uo=4,Oo=5,zo=6,Vo=7,Sc=0,hd=1,ud=2,wn=0,Mc=1,wc=2,Ec=3,Ac=4,Tc=5,Cc=6,Rc=7;var Ic=300,Ai=301,Yi=302,ma=303,ga=304,Tr=306,ko=1e3,Nn=1001,Go=1002,Le=1003,dd=1004;var Cr=1005;var Ne=1006,xa=1007;var Ti=1008;var tn=1009,Pc=1010,Lc=1011,Ps=1012,ya=1013,En=1014,mn=1015,An=1016,_a=1017,va=1018,Ls=1020,Nc=35902,Fc=35899,Dc=1021,Bc=1022,gn=1023,Fn=1026,Ci=1027,ba=1028,Sa=1029,Ri=1030,Ma=1031;var wa=1033,Rr=33776,Ir=33777,Pr=33778,Lr=33779,Ea=35840,Aa=35841,Ta=35842,Ca=35843,Ra=36196,Ia=37492,Pa=37496,La=37488,Na=37489,Nr=37490,Fa=37491,Da=37808,Ba=37809,Ua=37810,Oa=37811,za=37812,Va=37813,ka=37814,Ga=37815,Ha=37816,Wa=37817,qa=37818,Xa=37819,Ya=37820,$a=37821,Za=36492,Ja=36494,Ka=36495,ja=36283,Qa=36284,Fr=36285,tl=36286;var nr=2300,Ho=2301,Po=2302,lc=2303,cc=2400,hc=2401,uc=2402;var fd=3200,Uc=3201;var el=0,pd=1,ii="",qe="srgb",ir="srgb-linear",sr="linear",se="srgb";var Lo=7680;var md=519,gd=512,xd=513,yd=514,nl=515,_d=516,vd=517,il=518,bd=519,Sd=35044;var Oc="300 es",Mn=2e3,vs=2001;function Np(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Md(){let s=rr("canvas");return s.style.display="block",s}var fu={},bs=null;function zc(...s){let t="THREE."+s.shift();bs?bs("log",t,...s):console.log(t,...s)}function wd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=wd(s);let t="THREE."+s.shift();if(bs)bs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=wd(s);let t="THREE."+s.shift();if(bs)bs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Wi(...s){let t=s.join(" ");t in fu||(fu[t]=!0,Dt(...s))}function Ed(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ad={[Fo]:Do,[Bo]:zo,[Uo]:Vo,[_s]:Oo,[Do]:Fo,[zo]:Bo,[Vo]:Uo,[Oo]:_s},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var No=Math.PI/180,Wo=180/Math.PI;function Dr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Dp(s,t){return(s%t+t)%t}function Ul(s,t,e){return(1-e)*s+e*t}function $s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wc=class Wc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wc.prototype.isVector2=!0;var Xt=Wc,Fe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),R=Math.sin(_);m=Math.sin(m*_)/R,a=Math.sin(a*_)/R,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var q=qc,Ol=new q,pu=new Fe,Xc=class Xc{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],R=i[4],v=i[7],S=i[2],M=i[5],L=i[8];return r[0]=o*x+a*_+l*S,r[3]=o*g+a*R+l*M,r[6]=o*m+a*v+l*L,r[1]=c*x+h*_+d*S,r[4]=c*g+h*R+d*M,r[7]=c*m+h*v+d*L,r[2]=u*x+f*_+p*S,r[5]=u*g+f*R+p*M,r[8]=u*m+f*v+p*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;var kt=Xc,zl=new kt,mu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){let s={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?sr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ir]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:se,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),s}var Jt=Bp();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ss,qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=rr("canvas")),ss.width=t.width,ss.height=t.height;let i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Up=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vl(i[o].image)):r.push(Vl(i[o]))}else r=Vl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var Op=0,kl=new q,$e=class s extends Dn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Nn,i=Nn,r=Ne,o=Ti,a=gn,l=tn,c=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Dr(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Ic;$e.DEFAULT_ANISOTROPY=1;var Yc=class Yc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,v=(f+1)/2,S=(m+1)/2,M=(h+u)/4,L=(d+x)/4,y=(p+g)/4;return R>v&&R>S?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=M/n,r=L/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=y/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=L/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;var ge=Yc,Xo=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new $e(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pa=class pa{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Vp)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),pi.crossVectors(n,rn),pi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),pi.crossVectors(n,rn)),pi.normalize(),so.crossVectors(rn,pi),i[0]=pi.x,i[4]=so.x,i[8]=rn.x,i[1]=pi.y,i[5]=so.y,i[9]=rn.y,i[2]=pi.z,i[6]=so.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],R=n[7],v=n[11],S=n[15],M=i[0],L=i[4],y=i[8],A=i[12],N=i[1],U=i[5],T=i[9],E=i[13],w=i[2],P=i[6],F=i[10],O=i[14],V=i[3],D=i[7],z=i[11],W=i[15];return r[0]=o*M+a*N+l*w+c*V,r[4]=o*L+a*U+l*P+c*D,r[8]=o*y+a*T+l*F+c*z,r[12]=o*A+a*E+l*O+c*W,r[1]=h*M+d*N+u*w+f*V,r[5]=h*L+d*U+u*P+f*D,r[9]=h*y+d*T+u*F+f*z,r[13]=h*A+d*E+u*O+f*W,r[2]=p*M+x*N+g*w+m*V,r[6]=p*L+x*U+g*P+m*D,r[10]=p*y+x*T+g*F+m*z,r[14]=p*A+x*E+g*O+m*W,r[3]=_*M+R*N+v*w+S*V,r[7]=_*L+R*U+v*P+S*D,r[11]=_*y+R*T+v*F+S*z,r[15]=_*A+R*E+v*O+S*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*f-c*u,R=a*f-c*d,v=a*u-l*d,S=o*f-c*h,M=o*u-l*h,L=o*d-a*h;return e*(x*_-g*R+m*v)-n*(p*_-g*S+m*M)+i*(p*R-x*S+m*L)-r*(p*v-x*M+g*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*a-n*o,R=e*l-i*o,v=e*c-r*o,S=n*l-i*a,M=n*c-r*a,L=i*c-r*l,y=h*x-d*p,A=h*g-u*p,N=h*m-f*p,U=d*g-u*x,T=d*m-f*x,E=u*m-f*g,w=_*E-R*T+v*U+S*N-M*A+L*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=(a*E-l*T+c*U)*P,t[1]=(i*T-n*E-r*U)*P,t[2]=(x*L-g*M+m*S)*P,t[3]=(u*M-d*L-f*S)*P,t[4]=(l*N-o*E-c*A)*P,t[5]=(e*E-i*N+r*A)*P,t[6]=(g*v-p*L-m*R)*P,t[7]=(h*L-u*v+f*R)*P,t[8]=(o*T-a*N+c*y)*P,t[9]=(n*N-e*T-r*y)*P,t[10]=(p*M-x*v+m*_)*P,t[11]=(d*v-h*M-f*_)*P,t[12]=(a*A-o*U-l*y)*P,t[13]=(e*U-n*A+i*y)*P,t[14]=(x*R-p*S-g*_)*P,t[15]=(h*S-d*R+u*_)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,_=l*c,R=l*h,v=l*d,S=n.x,M=n.y,L=n.z;return i[0]=(1-(x+m))*S,i[1]=(f+v)*S,i[2]=(p-R)*S,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(u+m))*M,i[6]=(g+_)*M,i[7]=0,i[8]=(p+R)*L,i[9]=(g-_)*L,i[10]=(1-(u+x))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=rs.set(i[0],i[1],i[2]).length(),a=rs.set(i[4],i[5],i[6]).length(),l=rs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),vn.copy(this);let c=1/o,h=1/a,d=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Mn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===vs)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Mn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===vs)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};pa.prototype.isMatrix4=!0;var te=pa,rs=new q,vn=new te,zp=new q(0,0,0),Vp=new q(1,1,1),pi=new q,so=new q,rn=new q,xu=new te,yu=new Fe,Qn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kp=0,_u=new q,os=new Fe,Xn=new te,ro=new q,Zs=new q,Gp=new q,Hp=new Fe,vu=new q(1,0,0),bu=new q(0,1,0),Su=new q(0,0,1),Mu={type:"added"},Wp={type:"removed"},as={type:"childadded",child:null},Gl={type:"childremoved",child:null},_e=class s extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new q,e=new Qn,n=new Fe,i=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new kt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ro.copy(t):ro.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Zs,ro,this.up):Xn.lookAt(ro,Zs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Xn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),as.child=t,this.dispatchEvent(as),as.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_e.DEFAULT_UP=new q(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Dp(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Jt.workingToColorSpace(ze.copy(this),t),Math.round(Kt(ze.r*255,0,255))*65536+Math.round(Kt(ze.g*255,0,255))*256+Math.round(Kt(ze.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ze.copy(this),e);let n=ze.r,i=ze.g,r=ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=qe){Jt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,i=ze.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(oo);let n=Ul(mi.h,oo.h,e),i=Ul(mi.s,oo.s,e),r=Ul(mi.l,oo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ot;Ot.NAMES=Td;var ar=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new q,Yn=new q,Wl=new q,$n=new q,ls=new q,cs=new q,wu=new q,ql=new q,Xl=new q,Yl=new q,$l=new ge,Zl=new ge,Jl=new ge,Kn=class s{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),Yn.subVectors(n,e),Wl.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Yn),l=bn.dot(Wl),c=Yn.dot(Yn),h=Yn.dot(Wl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return $l.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),$l.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Yn.subVectors(t,e),bn.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ls.subVectors(i,n),cs.subVectors(r,n),ql.subVectors(t,n);let l=ls.dot(ql),c=cs.dot(ql);if(l<=0&&c<=0)return e.copy(n);Xl.subVectors(t,i);let h=ls.dot(Xl),d=cs.dot(Xl);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);Yl.subVectors(t,r);let f=ls.dot(Yl),p=cs.dot(Yl);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(cs,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return wu.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(wu,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),lo.subVectors(this.max,Js),hs.subVectors(t.a,Js),us.subVectors(t.b,Js),ds.subVectors(t.c,Js),gi.subVectors(us,hs),xi.subVectors(ds,us),Vi.subVectors(hs,ds);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Vi.z,Vi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Vi.z,0,-Vi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Vi.y,Vi.x,0];return!Kl(e,hs,us,ds,lo)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,hs,us,ds,lo))?!1:(co.crossVectors(gi,xi),e=[co.x,co.y,co.z],Kl(e,hs,us,ds,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new q,new q,new q,new q,new q,new q,new q,new q],Sn=new q,ao=new Bn,hs=new q,us=new q,ds=new q,gi=new q,xi=new q,Vi=new q,Js=new q,lo=new q,co=new q,ki=new q;function Kl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ki.fromArray(s,r);let a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ee=new q,ho=new Xt,Xp=0,Ye=class extends Dn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var lr=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var cr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=new Bn,Ks=new q,jl=new q,ti=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(jl)),this.expandByPoint(Ks.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$p=0,dn=new te,Ql=new _e,fs=new q,on=new Bn,js=new Bn,Pe=new q,ke=class s extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?cr:lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(on.min,js.min),on.expandByPoint(Pe),Pe.addVectors(on.max,js.max),on.expandByPoint(Pe)):(on.expandByPoint(js.min),on.expandByPoint(js.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),Pe.add(fs)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new q,l[y]=new q;let c=new q,h=new q,d=new q,u=new Xt,f=new Xt,p=new Xt,x=new q,g=new q;function m(y,A,N){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(U),a[y].add(x),a[A].add(x),a[N].add(x),l[y].add(g),l[A].add(g),l[N].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,A=_.length;y<A;++y){let N=_[y],U=N.start,T=N.count;for(let E=U,w=U+T;E<w;E+=3)m(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let R=new q,v=new q,S=new q,M=new q;function L(y){S.fromBufferAttribute(i,y),M.copy(S);let A=a[y];R.copy(A),R.sub(S.multiplyScalar(S.dot(A))).normalize(),v.crossVectors(M,A);let U=v.dot(l[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,U)}for(let y=0,A=_.length;y<A;++y){let N=_[y],U=N.start,T=N.count;for(let E=U,w=U+T;E<w;E+=3)L(t.getX(E+0)),L(t.getX(E+1)),L(t.getX(E+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,d=new q;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Ye(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tc=new q,Zp=new q,Jp=new kt,an=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tc.subVectors(n,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jp.getNormalMatrix(t),i=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kp=0,Un=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Is,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=bc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new an().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new q,ec=new q,uo=new q,fo=new q,Es=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ec).addScaledVector(uo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,_=n.y-o.y,R=n.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),L,y,A,N,U,T,E,w,P,F,O,V;if(v>=S&&v>=M?(A=l,T=d,P=p,V=m,l>=0?(L=c,y=h,N=u,U=f,E=x,w=g,F=_,O=R):(L=h,y=c,N=f,U=u,E=g,w=x,F=R,O=_)):S>=M?(A=c,T=u,P=x,V=_,c>=0?(L=h,y=l,N=f,U=d,E=g,w=p,F=R,O=m):(L=l,y=h,N=d,U=f,E=p,w=g,F=m,O=R)):(A=h,T=f,P=g,V=R,h>=0?(L=l,y=c,N=d,U=u,E=p,w=x,F=m,O=_):(L=c,y=l,N=u,U=d,E=x,w=p,F=_,O=m)),A===0)return null;let D=L/A,z=y/A,W=1/A,J=N-D*T,ot=U-z*T,lt=E-D*P,xt=w-z*P,Ct=F-D*V,K=O-z*V,Q=Ct*xt-K*lt,ht=J*K-ot*Ct,Mt=lt*ot-xt*J;if(i){if(Q<0||ht<0||Mt<0)return null}else if((Q<0||ht<0||Mt<0)&&(Q>0||ht>0||Mt>0))return null;let rt=Q+ht+Mt;if(rt===0)return null;let Bt=W*(Q*T+ht*P+Mt*V);return(rt>0?Bt<0:Bt>0)?null:this.at(Bt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eu=new te,Gi=new Es,po=new ti,Au=new q,mo=new q,go=new q,xo=new q,nc=new q,yo=new q,Tu=new q,_o=new q,Te=class extends _e{constructor(t=new ke,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(nc.fromBufferAttribute(d,t),o?yo.addScaledVector(nc,h):yo.addScaledVector(nc.sub(e),h))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(po.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(po,Au)===null||Gi.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,S=R;v<S;v+=3){let M=a.getX(v),L=a.getX(v+1),y=a.getX(v+2);i=vo(this,m,t,n,c,h,d,M,L,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),R=a.getX(g+1),v=a.getX(g+2);i=vo(this,o,t,n,c,h,d,_,R,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,S=R;v<S;v+=3){let M=v,L=v+1,y=v+2;i=vo(this,m,t,n,c,h,d,M,L,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,R=g+1,v=g+2;i=vo(this,o,t,n,c,h,d,_,R,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function jp(s,t,e,n,i,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ei,a),l===null)return null;_o.copy(a),_o.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:s}}function vo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,mo),s.getVertexPosition(l,go),s.getVertexPosition(c,xo);let h=jp(s,t,e,n,mo,go,xo,Tu);if(h){let d=new q;Kn.getBarycoord(Tu,mo,go,xo,d),i&&(h.uv=Kn.getInterpolatedAttribute(i,a,l,c,d,new Xt)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,d,new Xt)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,d,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new q,materialIndex:0};Kn.getNormal(mo,go,xo,u.normal),h.face=u,h.barycoord=d}return h}var hr=class extends $e{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Le,h=Le,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new te,Cu=new te,bo=[],Ru=new Bn,Qp=new te,Qs=new Te,tr=new ti,dr=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Ru.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),tr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ps),Cu.multiplyMatrices(n,ps),Qs.matrixWorld=Cu,Qs.raycast(t,bo);for(let o=0,a=bo.length;o<a;o++){let l=bo[o];l.instanceId=r,l.object=this,e.push(l)}bo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(i*this.count),i,this.count,ba,mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new ti,tm=new Xt(.5,.5),So=new q,As=class{constructor(t=new an,e=new an,n=new an,i=new an,r=new an,o=new an){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],R=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,f-h,m-p,S-_).normalize(),i[1].setComponents(c+o,f+h,m+p,S+_).normalize(),i[2].setComponents(c+a,f+d,m+x,S+R).normalize(),i[3].setComponents(c-a,f-d,m-x,S-R).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===Mn)i[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===vs)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=tm.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(So.x=i.normal.x>0?t.max.x:t.min.x,So.y=i.normal.y>0?t.max.y:t.min.y,So.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ei=class extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$o=new q,Zo=new q,Iu=new te,er=new Es,Mo=new ti,ic=new q,Pu=new q,fr=class extends _e{constructor(t=new ke,e=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)$o.fromBufferAttribute(e,i-1),Zo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Zo);t.setAttribute("lineDistance",new Ae(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Iu.copy(i).invert(),er.copy(t.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),R=wo(this,t,er,l,m,_,x);R&&e.push(R)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=wo(this,t,er,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=wo(this,t,er,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=wo(this,t,er,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wo(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if($o.fromBufferAttribute(a,i),Zo.fromBufferAttribute(a,r),e.distanceSqToSegment($o,Zo,ic,Pu)>n)return;ic.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ic);if(!(c<t.near||c>t.far))return{distance:c,point:Pu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Lu=new q,Nu=new q,vi=class extends fr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Lu.fromBufferAttribute(e,i),Nu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lu.distanceTo(Nu);t.setAttribute("lineDistance",new Ae(n,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pr=class extends $e{constructor(t=[],e=Ai,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mr=class extends $e{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends $e{constructor(t,e,n=En,i,r,o,a=Le,l=Le,c,h=Fn,d=1){if(h!==Fn&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends bi{constructor(t,e=En,n=Ai,i,r,o=Le,a=Le,l,c=Fn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fn=class s extends ke{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2));function p(x,g,m,_,R,v,S,M,L,y,A){let N=v/L,U=S/y,T=v/2,E=S/2,w=M/2,P=L+1,F=y+1,O=0,V=0,D=new q;for(let z=0;z<F;z++){let W=z*U-E;for(let J=0;J<P;J++){let ot=J*N-T;D[x]=ot*_,D[g]=W*R,D[m]=w,c.push(D.x,D.y,D.z),D[x]=0,D[g]=0,D[m]=M>0?1:-1,h.push(D.x,D.y,D.z),d.push(J/L),d.push(1-z/y),O+=1}}for(let z=0;z<y;z++)for(let W=0;W<L;W++){let J=u+W+P*z,ot=u+W+P*(z+1),lt=u+(W+1)+P*(z+1),xt=u+(W+1)+P*z;l.push(J,ot,xt),l.push(ot,lt,xt),V+=6}a.addGroup(f,V,A),f+=V,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ko=class s extends ke{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function _(){let v=new q,S=new q,M=0,L=(e-t)/n;for(let y=0;y<=r;y++){let A=[],N=y/r,U=N*(e-t)+t;for(let T=0;T<=i;T++){let E=T/i,w=E*l+a,P=Math.sin(w),F=Math.cos(w);S.x=U*P,S.y=-N*n+g,S.z=U*F,d.push(S.x,S.y,S.z),v.set(P,L,F).normalize(),u.push(v.x,v.y,v.z),f.push(E,1-N),A.push(p++)}x.push(A)}for(let y=0;y<i;y++)for(let A=0;A<r;A++){let N=x[A][y],U=x[A+1][y],T=x[A+1][y+1],E=x[A][y+1];(t>0||A!==0)&&(h.push(N,U,E),M+=3),(e>0||A!==r-1)&&(h.push(U,T,E),M+=3)}c.addGroup(m,M,0),m+=M}function R(v){let S=p,M=new Xt,L=new q,y=0,A=v===!0?t:e,N=v===!0?1:-1;for(let T=1;T<=i;T++)d.push(0,g*N,0),u.push(0,N,0),f.push(.5,.5),p++;let U=p;for(let T=0;T<=i;T++){let w=T/i*l+a,P=Math.cos(w),F=Math.sin(w);L.x=A*F,L.y=g*N,L.z=A*P,d.push(L.x,L.y,L.z),u.push(0,N,0),M.x=P*.5+.5,M.y=F*.5*N+.5,f.push(M.x,M.y),p++}for(let T=0;T<i;T++){let E=S+T,w=U+T;v===!0?h.push(w,w+1,E):h.push(w+1,w,E),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jo=class s extends Ko{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Eo=new q,Ao=new q,sc=new q,To=new Kn,qi=class extends ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(No*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=To;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),To.getNormal(sc),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let R=(_+1)%3,v=d[_],S=d[R],M=To[h[_]],L=To[h[R]],y=`${v}_${S}`,A=`${S}_${v}`;A in u&&u[A]?(sc.dot(u[A].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(L.x,L.y,L.z)),u[A]=null):y in u||(u[y]={index0:c[_],index1:c[R],normal:sc.clone()})}}for(let p in u)if(u[p]){let{index0:x,index1:g}=u[p];Eo.fromBufferAttribute(a,x),Ao.fromBufferAttribute(a,g),f.push(Eo.x,Eo.y,Eo.z),f.push(Ao.x,Ao.y,Ao.z)}this.setAttribute("position",new Ae(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ni=class s extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*u-o;for(let R=0;R<c;R++){let v=R*d-r;p.push(v,-_,0),x.push(0,0,1),g.push(R/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let R=_+c*m,v=_+c*(m+1),S=_+1+c*(m+1),M=_+1+c*m;f.push(R,v,M),f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var xr=class extends Un{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ot(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function $i(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Fu(i))i.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Fu(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ge(s){let t={};for(let e=0;e<s.length;e++){let n=$i(s[e]);for(let i in n)t[i]=n[i]}return t}function Fu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function em(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Cd={clone:$i,merge:Ge},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qo=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yr=class extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ts=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ta=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Si=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ea=class extends Si{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,R=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+_*o[c+S]+R*o[l+S]+v*o[d+S];return r}},na=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ia=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},sa=class extends Si{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,_=d[m],R=d[m+1],v=t*u+p*2,S=h[v],M=h[v+1],L=rm(n,e,_,S,i);r[p]=Rd(L,x,R,M,g)}return r}};function Rd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function sm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function rm(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Rd(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=sm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),rc(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break;case lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;rc(this.settings)&&(Du(this.settings.inTangents,t),Du(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ut("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Fp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,rc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Du(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ho;var Mi=class extends cn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=nr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};ra.prototype.ValueTypeName="color";var oa=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};oa.prototype.ValueTypeName="number";var aa=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fe.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends cn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=nr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};la.prototype.ValueTypeName="vector";var ca=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Id=new ca,ha=class{constructor(t){this.manager=t!==void 0?t:Id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},br=class extends vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oc=new te,Bu=new q,Uu=new q,ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Co=new q,Ro=new Fe,Ln=new q,Sr=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Ro,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Co,Ro,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Ro,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new q,Ou=new Xt,zu=new Xt,Ve=class extends Sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,zu),e.subVectors(zu,Ou)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Cs=class extends Sr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dc=class extends ua{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new dc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gs=-90,xs=1,da=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(gs,xs,t,e);i.layers=this.layers,this.add(i);let r=new Ve(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new Ve(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new Ve(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new Ve(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},fa=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kc="\\[\\]\\.:\\/",om=new RegExp("["+kc+"]","g"),Gc="[^"+kc+"]",am="[^"+kc.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",Gc),cm=/(WCOD+)?/.source.replace("WCOD",am),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],fc=class{constructor(t,e,n){let i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(om,"")}static parseTrackName(t){let e=dm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=fc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kb=new Float32Array(1);var Vu=new te,wr=class{constructor(t,e,n=0,i=1/0){this.ray=new Es(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vu),this}intersectObject(t,e=!0,n=[]){return pc(t,this,n,e),n.sort(ku),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)pc(t[i],this,n,e);return n.sort(ku),n}};function ku(s,t){return s.distance-t.distance}function pc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],t,e,!0)}}var $c=class $c{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};$c.prototype.isMatrix2=!0;var mc=$c;var Gu=new q,Io,ac,Er=class extends _e{constructor(t=new q(0,0,1),e=new q(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Io===void 0&&(Io=new ke,Io.setAttribute("position",new Ae([0,0,0,0,1,0],3)),ac=new jo(.5,1,5,1),ac.translate(0,-.5,0)),this.position.copy(e),this.line=new fr(Io,new ei({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Te(ac,new _i({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Gu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Gu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};function Hc(s,t,e,n){let i=pm(n);switch(e){case Dc:return s*t;case ba:return s*t/i.components*i.byteLength;case Sa:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case Ma:return s*t*2/i.components*i.byteLength;case Bc:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case wa:return s*t*4/i.components*i.byteLength;case Rr:case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(s,16)*Math.max(t,8)/4;case Ea:case Ta:return Math.max(s,8)*Math.max(t,8)/2;case Ra:case Ia:case La:case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Nr:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Za:case Ja:case Ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ja:case Qa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fr:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(s){switch(s){case tn:case Pc:return{byteLength:1,components:1};case Ps:case Lc:case An:return{byteLength:2,components:1};case _a:case va:return{byteLength:2,components:4};case En:case ya:case mn:return{byteLength:4,components:1};case Nc:case Fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jd(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gm(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:xm,alphahash_pars_fragment:ym,alphamap_fragment:_m,alphamap_pars_fragment:vm,alphatest_fragment:bm,alphatest_pars_fragment:Sm,aomap_fragment:Mm,aomap_pars_fragment:wm,batching_pars_vertex:Em,batching_vertex:Am,begin_vertex:Tm,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Im,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Dm,color_fragment:Bm,color_pars_fragment:Um,color_pars_vertex:Om,color_vertex:zm,common:Vm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Wm,emissivemap_fragment:qm,emissivemap_pars_fragment:Xm,colorspace_fragment:Ym,colorspace_pars_fragment:$m,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:jm,envmap_physical_pars_fragment:cg,envmap_vertex:Qm,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:xg,lights_fragment_end:yg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Mg,map_fragment:wg,map_pars_fragment:Eg,map_particle_fragment:Ag,map_particle_pars_fragment:Tg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Ig,morphcolor_vertex:Pg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Ng,morphtarget_vertex:Fg,normal_fragment_begin:Dg,normal_fragment_maps:Bg,normal_pars_fragment:Ug,normal_pars_vertex:Og,normal_vertex:zg,normalmap_pars_fragment:Vg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Wg,opaque_fragment:qg,packing:Xg,premultiplied_alpha_fragment:Yg,project_vertex:$g,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:x0,background_frag:y0,backgroundCube_vert:_0,backgroundCube_frag:v0,cube_vert:b0,cube_frag:S0,depth_vert:M0,depth_frag:w0,distance_vert:E0,distance_frag:A0,equirect_vert:T0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:I0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:N0,meshlambert_frag:F0,meshmatcap_vert:D0,meshmatcap_frag:B0,meshnormal_vert:U0,meshnormal_frag:O0,meshphong_vert:z0,meshphong_frag:V0,meshphysical_vert:k0,meshphysical_frag:G0,meshtoon_vert:H0,meshtoon_frag:W0,points_vert:q0,points_frag:X0,shadow_vert:Y0,shadow_frag:$0,sprite_vert:Z0,sprite_frag:J0},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Vn={basic:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ge([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ge([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ge([gt.points,gt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ge([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ge([gt.common,gt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ge([gt.sprite,gt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ge([gt.common,gt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ge([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Vn.physical={uniforms:Ge([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var sl={r:0,b:0,g:0},K0=new te,Qd=new kt;Qd.set(-1,0,0,0,1,0,0,0,1);function j0(s,t,e,n,i,r){let o=new Ot(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let R=_.isScene===!0?_.background:null;if(R&&R.isTexture){let v=_.backgroundBlurriness>0;R=t.get(R,v)}return R}function p(_){let R=!1,v=f(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),R=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===Tr)?(c===void 0&&(c=new Te(new fn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:$i(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qd),c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==se,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Te(new ni(2,2),new ln({name:"BackgroundMaterial",uniforms:$i(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,R){_.getRGB(sl,Vc(s)),e.buffers.color.setClear(sl.r,sl.g,sl.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,R=1){o.set(_),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:x,dispose:m}}function Q0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(U,T,E,w,P){let F=!1,O=d(U,w,E,T);r!==O&&(r=O,c(r.object)),F=f(U,w,E,P),F&&p(U,w,E,P),P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(U,T,E,w),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function d(U,T,E,w){let P=w.wireframe===!0,F=n[T.id];F===void 0&&(F={},n[T.id]=F);let O=U.isInstancedMesh===!0?U.id:0,V=F[O];V===void 0&&(V={},F[O]=V);let D=V[E.id];D===void 0&&(D={},V[E.id]=D);let z=D[P];return z===void 0&&(z=u(l()),D[P]=z),z}function u(U){let T=[],E=[],w=[];for(let P=0;P<e;P++)T[P]=0,E[P]=0,w[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:E,attributeDivisors:w,object:U,attributes:{},index:null}}function f(U,T,E,w){let P=r.attributes,F=T.attributes,O=0,V=E.getAttributes();for(let D in V)if(V[D].location>=0){let W=P[D],J=F[D];if(J===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function p(U,T,E,w){let P={},F=T.attributes,O=0,V=E.getAttributes();for(let D in V)if(V[D].location>=0){let W=F[D];W===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));let J={};J.attribute=W,W&&W.data&&(J.data=W.data),P[D]=J,O++}r.attributes=P,r.attributesNum=O,r.index=w}function x(){let U=r.newAttributes;for(let T=0,E=U.length;T<E;T++)U[T]=0}function g(U){m(U,0)}function m(U,T){let E=r.newAttributes,w=r.enabledAttributes,P=r.attributeDivisors;E[U]=1,w[U]===0&&(s.enableVertexAttribArray(U),w[U]=1),P[U]!==T&&(s.vertexAttribDivisor(U,T),P[U]=T)}function _(){let U=r.newAttributes,T=r.enabledAttributes;for(let E=0,w=T.length;E<w;E++)T[E]!==U[E]&&(s.disableVertexAttribArray(E),T[E]=0)}function R(U,T,E,w,P,F,O){O===!0?s.vertexAttribIPointer(U,T,E,P,F):s.vertexAttribPointer(U,T,E,w,P,F)}function v(U,T,E,w){x();let P=w.attributes,F=E.getAttributes(),O=T.defaultAttributeValues;for(let V in F){let D=F[V];if(D.location>=0){let z=P[V];if(z===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),z!==void 0){let W=z.normalized,J=z.itemSize,ot=t.get(z);if(ot===void 0)continue;let lt=ot.buffer,xt=ot.type,Ct=ot.bytesPerElement,K=xt===s.INT||xt===s.UNSIGNED_INT||z.gpuType===ya;if(z.isInterleavedBufferAttribute){let Q=z.data,ht=Q.stride,Mt=z.offset;if(Q.isInstancedInterleavedBuffer){for(let rt=0;rt<D.locationSize;rt++)m(D.location+rt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<D.locationSize;rt++)g(D.location+rt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let rt=0;rt<D.locationSize;rt++)R(D.location+rt,J/D.locationSize,xt,W,ht*Ct,(Mt+J/D.locationSize*rt)*Ct,K)}else{if(z.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)m(D.location+Q,z.meshPerAttribute);U.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Q=0;Q<D.locationSize;Q++)g(D.location+Q);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Q=0;Q<D.locationSize;Q++)R(D.location+Q,J/D.locationSize,xt,W,J*Ct,J/D.locationSize*Q*Ct,K)}}else if(O!==void 0){let W=O[V];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(D.location,W);break;case 3:s.vertexAttrib3fv(D.location,W);break;case 4:s.vertexAttrib4fv(D.location,W);break;default:s.vertexAttrib1fv(D.location,W)}}}}_()}function S(){A();for(let U in n){let T=n[U];for(let E in T){let w=T[E];for(let P in w){let F=w[P];for(let O in F)h(F[O].object),delete F[O];delete w[P]}}delete n[U]}}function M(U){if(n[U.id]===void 0)return;let T=n[U.id];for(let E in T){let w=T[E];for(let P in w){let F=w[P];for(let O in F)h(F[O].object),delete F[O];delete w[P]}}delete n[U.id]}function L(U){for(let T in n){let E=n[T];for(let w in E){let P=E[w];if(P[U.id]===void 0)continue;let F=P[U.id];for(let O in F)h(F[O].object),delete F[O];delete P[U.id]}}}function y(U){for(let T in n){let E=n[T],w=U.isInstancedMesh===!0?U.id:0,P=E[w];if(P!==void 0){for(let F in P){let O=P[F];for(let V in O)h(O[V].object),delete O[V];delete P[F]}delete E[w],Object.keys(E).length===0&&delete n[T]}}}function A(){N(),o=!0,r!==i&&(r=i,c(r.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function tx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ex(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==gn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let y=L===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==tn&&L!==mn&&!y&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:R,maxFragmentUniforms:v,maxSamples:S,samples:M}}function nx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new an,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,R=_*4,v=m.clippingState||null;l.value=v,v=h(p,u,R,f);for(let S=0;S!==R;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,v=f;R!==x;++R,v+=4)o.copy(d[R]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Fs=4,ix=6,sx=20,rx=256,Br=new Cs,Pd=new Ot,Zc=null,Jc=0,Kc=0,jc=!1,ox=new q,Zi=new q,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=ox}=r;Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,Jc,Kc),this._renderer.xr.enabled=jc,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:An,format:gn,colorSpace:ir,depthBuffer:!1},i=Ld(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ax(r)),this._blurMaterial=cx(r,t,e),this._ggxMaterial=lx(r,t,e)}return i}_compileMaterial(t){let e=new Te(new ke,t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,i,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Pd),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new fn,new _i({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,m=!0):(g.color.copy(Pd),m=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;Ns(i,v*S,R>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ai||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Br)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Fs?n-p+Fs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ns(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ns(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,Br)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Fs?i-this._lodMax+Fs:0),u=4*(this._cubeSize-h);Ns(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Br)}};function ax(s){let t=[],e=[],n=s,i=s-Fs+1+ix;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,R=m>2?0:-1,v=[_,R,0,_+2/3,R,0,_+2/3,R+1,0,_,R,0,_+2/3,R+1,0,_,R+1,0];p.set(v,f*u*m);for(let S=0;S<u;S++){let M=h[S*2]*2-1,L=h[S*2+1]*2-1;m===0?Zi.set(1,L,M):m===1?Zi.set(-M,1,-L):m===2?Zi.set(-M,L,1):m===3?Zi.set(-1,L,-M):m===4?Zi.set(-M,-1,L):Zi.set(M,L,-1),Zi.toArray(x,(m*u+S)*f)}}let g=new ke;g.setAttribute("position",new Ye(p,f)),g.setAttribute("outputDirection",new Ye(x,f)),e.push(new Te(g,null)),n>Fs&&n--}return{lodMeshes:e,sizeLods:t}}function Ld(s,t,e){let n=new Qe(s,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function lx(s,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function cx(s,t,e){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Nd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Fd(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:On});r.uniforms.tEquirect.value=e;let o=new Te(i,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Ne),new da(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function hx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ma||f===ga)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new al(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===ma||f===ga,x=f===Ai||f===Yi;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ol(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new ol(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===ma?u.mapping=Ai:f===ga&&(u.mapping=Yi),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ux(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wi("WebGLRenderer: "+n+" extension not supported."),i}}}function dx(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let R=0,v=_.length;R<v;R+=3){let S=_[R+0],M=_[R+1],L=_[R+2];u.push(S,M,M,L,L,S)}}else{let _=p.array;x=p.version;for(let R=0,v=_.length/3-1;R<v;R+=3){let S=R+0,M=R+1,L=R+2;u.push(S,M,M,L,L,S)}}let g=new(p.count>=65535?cr:lr)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function fx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function px(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mx(s,t,e){let n=new WeakMap,i=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let A=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],R=0;f===!0&&(R=1),p===!0&&(R=2),x===!0&&(R=3);let v=a.attributes.position.count*R,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*d),L=new or(M,v,S,d);L.type=mn,L.needsUpdate=!0;let y=R*4;for(let N=0;N<d;N++){let U=g[N],T=m[N],E=_[N],w=v*S*4*N;for(let P=0;P<U.count;P++){let F=P*y;f===!0&&(i.fromBufferAttribute(U,P),M[w+F+0]=i.x,M[w+F+1]=i.y,M[w+F+2]=i.z,M[w+F+3]=0),p===!0&&(i.fromBufferAttribute(T,P),M[w+F+4]=i.x,M[w+F+5]=i.y,M[w+F+6]=i.z,M[w+F+7]=0),x===!0&&(i.fromBufferAttribute(E,P),M[w+F+8]=i.x,M[w+F+9]=i.y,M[w+F+10]=i.z,M[w+F+11]=E.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new Xt(v,S)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function gx(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var xx={[Mc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function yx(s,t,e,n,i,r){let o=new Qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ke;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let h=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Te(c,h),u=new Cs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,_=[],R=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<_.length;M++){let L=_[M];L.setSize&&L.setSize(v,S)}},this.setEffects=function(v){_=v,R=_.length>0&&_[0].isRenderPass===!0;let S=o.width,M=o.height;_.length>0&&a===null&&(a=new Qe(S,M,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(S,M,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<_.length;L++){let y=_[L];y.setSize&&y.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===wn&&_.length===0)return!1;if(m=S,S!==null){let M=S.width,L=S.height;(o.width!==M||o.height!==L)&&this.setSize(M,L)}return R===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=wn,!0},this.hasRenderPass=function(){return R},this.end=function(v,S){v.toneMapping=g,x=!0;let M=o,L=a;for(let y=0;y<_.length;y++){let A=_[y];A.enabled!==!1&&(A.render(v,L,M,S),A.needsSwap!==!1&&(M=L,L=L===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},Jt.getTransfer(f)===se&&(h.defines.SRGB_TRANSFER="");let y=xx[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(m),v.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var tf=new $e,eh=new bi(1,1),ef=new or,nf=new Yo,sf=new pr,Dd=[],Bd=[],Ud=new Float32Array(16),Od=new Float32Array(9),zd=new Float32Array(4);function Bs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Dd[i];if(r===void 0&&(r=new Float32Array(i),Dd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function hl(s,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _x(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;zd.set(n),s.uniformMatrix2fv(this.addr,!1,zd),Re(e,n)}}function wx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Od.set(n),s.uniformMatrix3fv(this.addr,!1,Od),Re(e,n)}}function Ex(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Ud.set(n),s.uniformMatrix4fv(this.addr,!1,Ud),Re(e,n)}}function Ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Ix(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Fx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=e.isReversedDepthBuffer()?il:nl,r=eh):r=tf,e.setTexture2D(t||r,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nf,i)}function Bx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sf,i)}function Ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ef,i)}function Ox(s){switch(s){case 5126:return _x;case 35664:return vx;case 35665:return bx;case 35666:return Sx;case 35674:return Mx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Tx;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Ix;case 36294:return Px;case 36295:return Lx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Ux}}function zx(s,t){s.uniform1fv(this.addr,t)}function Vx(s,t){let e=Bs(t,this.size,2);s.uniform2fv(this.addr,e)}function kx(s,t){let e=Bs(t,this.size,3);s.uniform3fv(this.addr,e)}function Gx(s,t){let e=Bs(t,this.size,4);s.uniform4fv(this.addr,e)}function Hx(s,t){let e=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wx(s,t){let e=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qx(s,t){let e=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xx(s,t){s.uniform1iv(this.addr,t)}function Yx(s,t){s.uniform2iv(this.addr,t)}function $x(s,t){s.uniform3iv(this.addr,t)}function Zx(s,t){s.uniform4iv(this.addr,t)}function Jx(s,t){s.uniform1uiv(this.addr,t)}function Kx(s,t){s.uniform2uiv(this.addr,t)}function jx(s,t){s.uniform3uiv(this.addr,t)}function Qx(s,t){s.uniform4uiv(this.addr,t)}function ty(s,t,e){let n=this.cache,i=t.length,r=hl(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=eh:o=tf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function ey(s,t,e){let n=this.cache,i=t.length,r=hl(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nf,r[o])}function ny(s,t,e){let n=this.cache,i=t.length,r=hl(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||sf,r[o])}function iy(s,t,e){let n=this.cache,i=t.length,r=hl(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ef,r[o])}function sy(s){switch(s){case 5126:return zx;case 35664:return Vx;case 35665:return kx;case 35666:return Gx;case 35674:return Hx;case 35675:return Wx;case 35676:return qx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return $x;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Kx;case 36295:return jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}var nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sy(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function Vd(s,t){s.seq.push(t),s.map[t.id]=t}function ry(s,t,e){let n=s.name,i=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),o=Qc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vd(e,c===void 0?new nh(a,s,t):new ih(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new sh(a),Vd(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ry(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function kd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var oy=37297,ay=0;function ly(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Gd=new kt;function cy(s){Jt._getMatrix(Gd,Jt.workingColorSpace,s);let t=`mat3( ${Gd.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case sr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Hd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ly(s.getShaderSource(t),a)}else return r}function hy(s,t){let e=cy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var uy={[Mc]:"Linear",[wc]:"Reinhard",[Ec]:"Cineon",[Ac]:"ACESFilmic",[Cc]:"AgX",[Rc]:"Neutral",[Tc]:"Custom"};function dy(s,t){let e=uy[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new q;function fy(){Jt.getLuminanceCoefficients(rl);let s=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function my(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Or(s){return s!==""}function Wd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(s){return s.replace(xy,_y)}var yy=new Map;function _y(s,t){let e=Yt[t];if(e===void 0){let n=yy.get(t);if(n!==void 0)e=Yt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rh(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(s){return s.replace(vy,by)}function by(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Sy={[Ar]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function My(s){return Sy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wy={[Ai]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function Ey(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ay={[Yi]:"ENVMAP_MODE_REFRACTION"};function Ty(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cy={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function Ry(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[s.combine]||"ENVMAP_BLENDING_NONE"}function Iy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Py(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=My(e),c=Ey(e),h=Ty(e),d=Ry(e),u=Iy(e),f=py(e),p=my(r),x=i.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Or).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Or).join(`
`),m.length>0&&(m+=`
`)):(g=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),m=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==wn?dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,hy("linearToOutputTexel",e.outputColorSpace),fy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=rh(o),o=Wd(o,e),o=qd(o,e),a=rh(a),a=Wd(a,e),a=qd(a,e),o=Xd(o),a=Xd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=_+g+o,v=_+m+a,S=kd(i,i.VERTEX_SHADER,R),M=kd(i,i.FRAGMENT_SHADER,v);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(U){if(s.debug.checkShaderErrors){let T=i.getProgramInfoLog(x)||"",E=i.getShaderInfoLog(S)||"",w=i.getShaderInfoLog(M)||"",P=T.trim(),F=E.trim(),O=w.trim(),V=!0,D=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,M);else{let z=Hd(i,S,"vertex"),W=Hd(i,M,"fragment");Ut("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+z+`
`+W)}else P!==""?Dt("WebGLProgram: Program Info Log:",P):(F===""||O==="")&&(D=!1);D&&(U.diagnostics={runnable:V,programLog:P,vertexShader:{log:F,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(S),i.deleteShader(M),y=new Ds(i,x),A=gy(i,x)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(x,oy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var Ly=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ah(t),e.set(t,n)),n}},ah=class{constructor(t){this.id=Ly++,this.code=t,this.usedTimes=0}};function Ny(s){return s===Ri||s===Nr||s===Fr}function Fy(s,t,e,n,i,r){let o=new Ms,a=new oh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,N,U,T,E){let w=U.fog,P=T.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||F,O),D=V&&V.mapping===Tr?V.image.height:null,z=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Dt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let W=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=W!==void 0?W.length:0,ot=0;P.morphAttributes.position!==void 0&&(ot=1),P.morphAttributes.normal!==void 0&&(ot=2),P.morphAttributes.color!==void 0&&(ot=3);let lt,xt,Ct,K;if(z){let he=Vn[z];lt=he.vertexShader,xt=he.fragmentShader}else{lt=y.vertexShader,xt=y.fragmentShader;let he=a.getVertexShaderStage(y),ee=a.getFragmentShaderStage(y);a.update(y,he,ee),Ct=he.id,K=ee.id}let Q=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Mt=T.isInstancedMesh===!0,rt=T.isBatchedMesh===!0,Bt=!!y.map,xe=!!y.matcap,Gt=!!V,Vt=!!y.aoMap,Ht=!!y.lightMap,$t=!!y.bumpMap&&y.wireframe===!1,ce=!!y.normalMap,Se=!!y.displacementMap,Ke=!!y.emissiveMap,ye=!!y.metalnessMap,Me=!!y.roughnessMap,H=y.anisotropy>0,De=y.clearcoat>0,oe=y.dispersion>0,B=y.retroreflectivity>0,b=y.iridescence>0,X=y.sheen>0,Z=y.transmission>0,tt=H&&!!y.anisotropyMap,at=De&&!!y.clearcoatMap,ct=De&&!!y.clearcoatNormalMap,et=De&&!!y.clearcoatRoughnessMap,it=b&&!!y.iridescenceMap,ut=b&&!!y.iridescenceThicknessMap,Pt=X&&!!y.sheenColorMap,mt=X&&!!y.sheenRoughnessMap,dt=!!y.specularMap,Lt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,Wt=Z&&!!y.transmissionMap,G=Z&&!!y.thicknessMap,ft=!!y.gradientMap,nt=!!y.alphaMap,pt=y.alphaTest>0,vt=!!y.alphaHash,st=!!y.extensions,Nt=wn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let Rt={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:lt,fragmentShader:xt,defines:y.defines,customVertexShaderID:Ct,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:rt,batchingColor:rt&&T._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&T.instanceColor!==null,instancingMorph:Mt&&T.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:xe,envMap:Gt,envMapMode:Gt&&V.mapping,envMapCubeUVHeight:D,aoMap:Vt,lightMap:Ht,bumpMap:$t,normalMap:ce,displacementMap:Se,emissiveMap:Ke,normalMapObjectSpace:ce&&y.normalMapType===pd,normalMapTangentSpace:ce&&y.normalMapType===el,packedNormalMap:ce&&y.normalMapType===el&&Ny(y.normalMap.format),metalnessMap:ye,roughnessMap:Me,anisotropy:H,anisotropyMap:tt,clearcoat:De,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:et,dispersion:oe,retroreflection:B,iridescence:b,iridescenceMap:it,iridescenceThicknessMap:ut,sheen:X,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:dt,specularColorMap:Lt,specularIntensityMap:Ft,transmission:Z,transmissionMap:Wt,thicknessMap:G,gradientMap:ft,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:pt,alphaHash:vt,combine:y.combine,mapUv:Bt&&p(y.map.channel),aoMapUv:Vt&&p(y.aoMap.channel),lightMapUv:Ht&&p(y.lightMap.channel),bumpMapUv:$t&&p(y.bumpMap.channel),normalMapUv:ce&&p(y.normalMap.channel),displacementMapUv:Se&&p(y.displacementMap.channel),emissiveMapUv:Ke&&p(y.emissiveMap.channel),metalnessMapUv:ye&&p(y.metalnessMap.channel),roughnessMapUv:Me&&p(y.roughnessMap.channel),anisotropyMapUv:tt&&p(y.anisotropyMap.channel),clearcoatMapUv:at&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&p(y.sheenRoughnessMap.channel),specularMapUv:dt&&p(y.specularMap.channel),specularColorMapUv:Lt&&p(y.specularColorMap.channel),specularIntensityMapUv:Ft&&p(y.specularIntensityMap.channel),transmissionMapUv:Wt&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:nt&&p(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ce||H),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!P.attributes.uv&&(Bt||nt),fog:!!w,useFog:y.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&ce===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ot,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:Ke&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(A,y),_(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let A=f[y.type],N;if(A){let U=Vn[A];N=Cd.clone(U.uniforms)}else N=y.uniforms;return N}function v(y,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new Py(s,A,y,i),c.push(N),h.set(A,N)),N}function S(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:L}}function Dy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function By(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function $d(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=m),t++,_}function l(u,f,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let R=a(u,f,p,x,g,m);p.transmission>0?n.push(R):p.transparent===!0?i.push(R):e.push(R)}function c(u,f,p,x,g,m){let _=a(u,f,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||By),n.length>1&&n.sort(f||$d),i.length>1&&i.sort(f||$d)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Uy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Zd,s.set(n,[o])):i>=r.length?(o=new Zd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Oy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Ot};break;case"SpotLight":e={position:new q,direction:new q,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new q,halfWidth:new q,halfHeight:new q};break}return s[t.id]=e,e}}}function zy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Vy=0;function ky(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gy(s){let t=new Oy,e=zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,r=new te,o=new te;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,R=0,v=0,S=0,M=0,L=0,y=0,A=0,N=0;c.sort(ky);for(let T=0,E=c.length;T<E;T++){let w=c[T],P=w.color,F=w.intensity,O=w.distance,V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ri?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=P.r*F,d+=P.g*F,u+=P.b*F;else if(w.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(w.sh.coefficients[D],F);N++}else if(w.isSunLight){let D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,W=e.get(w);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=W,n.sunShadowMap[p]=V;let J=z.getViewportCount();for(let ot=0;ot<J;ot++)n.sunShadowMatrix[x+ot]=z.getMatrix(ot),n.sunShadowCascade[x+ot]=z._cascadeData[ot];x+=J,p++}n.sun[f]=D,f++}else if(w.isDirectionalLight){let D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,W=e.get(w);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.directionalShadow[g]=W,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=w.shadow.matrix,S++}n.directional[g]=D,g++}else if(w.isSpotLight){let D=t.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(P).multiplyScalar(F),D.distance=O,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,n.spot[_]=D;let z=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,z.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=z.matrix,w.castShadow){let W=e.get(w);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,L++}_++}else if(w.isRectAreaLight){let D=t.get(w);D.color.copy(P).multiplyScalar(F),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),n.rectArea[R]=D,R++}else if(w.isPointLight){let D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){let z=w.shadow,W=e.get(w);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=w.shadow.matrix,M++}n.point[m]=D,m++}else if(w.isHemisphereLight){let D=t.get(w);D.skyColor.copy(w.color).multiplyScalar(F),D.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[v]=D,v++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==R||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==S||U.numPointShadows!==M||U.numSpotShadows!==L||U.numSpotMaps!==y||U.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=R,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=_,U.rectAreaLength=R,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=S,U.numPointShadows=M,U.numSpotShadows=L,U.numSpotMaps=y,U.numLightProbes=N,n.version=Vy++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,R=c.length;_<R;_++){let v=c[_];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Jd(s){let t=new Gy(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Jd(s),t.set(i,[a])):r>=o.length?(a=new Jd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xy=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Yy=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Kd=new te,Ur=new q,th=new q;function $y(s,t,e){let n=new As,i=new Xt,r=new Xt,o=new ge,a=new Ts,l=new ta,c={},h=e.maxTextureSize,d={[Ei]:Ze,[Ze]:Ei,[pn]:pn},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Wy,fragmentShader:qy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ke;p.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Te(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let m=this.type;this.render=function(M,L,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===qu&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let A=s.getRenderTarget(),N=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),T=s.state;T.setBlending(On),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let E=m!==this.type;E&&L.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(P=>P.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,P=M.length;w<P;w++){let F=M[w],O=F.shadow;if(O===void 0){Dt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let V=O.getFrameExtents();i.multiply(V),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,O.mapSize.y=r.y));let D=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=D,O.map===null||E===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rs){if(F.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qe(i.x,i.y,{format:Ri,type:An,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new bi(i.x,i.y,mn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Fn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le}else F.isPointLight?(O.map=new al(i.x),O.map.depthTexture=new Jo(i.x,En)):(O.map=new Qe(i.x,i.y),O.map.depthTexture=new bi(i.x,i.y,En)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Fn,this.type===Ar?(O.map.depthTexture.compareFunction=D?il:nl,O.map.depthTexture.minFilter=Ne,O.map.depthTexture.magFilter=Ne):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,y);for(let W=0;W<z;W++){let J=O.getCamera(W);if(F.isPointLight){let ot=O.camera,lt=O.matrix,xt=F.distance||ot.far;xt!==ot.far&&(ot.far=xt,ot.updateProjectionMatrix()),Ur.setFromMatrixPosition(F.matrixWorld),ot.position.copy(Ur),th.copy(ot.position),th.add(Xy[W]),ot.up.copy(Yy[W]),ot.lookAt(th),ot.updateMatrixWorld(),lt.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Kd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Kd,ot.coordinateSystem,ot.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,W),s.clear();else{W===0&&(s.setRenderTarget(O.map),s.clear());let ot=O.getViewport(W);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),T.viewport(o)}n=O.getFrustum(W),v(L,y,J,F,this.type)}O.isPointLightShadow!==!0&&this.type===Rs&&_(O,y),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(A,N,U)};function _(M,L){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Qe(i.x,i.y,{format:Ri,type:An}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(L,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(L,null,y,f,x,null)}function R(M,L,y,A){let N=null,U=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)N=U;else if(N=y.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let T=N.uuid,E=L.uuid,w=c[T];w===void 0&&(w={},c[T]=w);let P=w[E];P===void 0&&(P=N.clone(),w[E]=P,L.addEventListener("dispose",S)),N=P}if(N.visible=L.visible,N.wireframe=L.wireframe,A===Rs?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:d[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let T=s.properties.get(N);T.light=y}return N}function v(M,L,y,A,N){if(M.visible===!1)return;if(M.layers.test(L.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===Rs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let E=t.update(M),w=M.material;if(Array.isArray(w)){let P=E.groups;for(let F=0,O=P.length;F<O;F++){let V=P[F],D=w[V.materialIndex];if(D&&D.visible){let z=R(M,D,A,N);M.onBeforeShadow(s,M,L,y,E,z,V),s.renderBufferDirect(y,null,E,z,M,V),M.onAfterShadow(s,M,L,y,E,z,V)}}}else if(w.visible){let P=R(M,w,A,N);M.onBeforeShadow(s,M,L,y,E,P,null),s.renderBufferDirect(y,null,E,P,M,null),M.onAfterShadow(s,M,L,y,E,P,null)}}let T=M.children;for(let E=0,w=T.length;E<w;E++)v(T[E],L,y,A,N)}function S(M){M.target.removeEventListener("dispose",S);for(let y in c){let A=c[y],N=M.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function Zy(s,t){function e(){let G=!1,ft=new ge,nt=null,pt=new ge(0,0,0,0);return{setMask:function(vt){nt!==vt&&!G&&(s.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){G=vt},setClear:function(vt,st,Nt,Rt,he){he===!0&&(vt*=Rt,st*=Rt,Nt*=Rt),ft.set(vt,st,Nt,Rt),pt.equals(ft)===!1&&(s.clearColor(vt,st,Nt,Rt),pt.copy(ft))},reset:function(){G=!1,nt=null,pt.set(-1,0,0,0)}}}function n(){let G=!1,ft=!1,nt=null,pt=null,vt=null;return{setReversed:function(st){if(ft!==st){let Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ft=st;let Rt=vt;vt=null,this.setClear(Rt)}},getReversed:function(){return ft},setTest:function(st){st?Q(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(st){nt!==st&&!G&&(s.depthMask(st),nt=st)},setFunc:function(st){if(ft&&(st=Ad[st]),pt!==st){switch(st){case Fo:s.depthFunc(s.NEVER);break;case Do:s.depthFunc(s.ALWAYS);break;case Bo:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case Uo:s.depthFunc(s.EQUAL);break;case Oo:s.depthFunc(s.GEQUAL);break;case zo:s.depthFunc(s.GREATER);break;case Vo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=st}},setLocked:function(st){G=st},setClear:function(st){vt!==st&&(vt=st,ft&&(st=1-st),s.clearDepth(st))},reset:function(){G=!1,nt=null,pt=null,vt=null,ft=!1}}}function i(){let G=!1,ft=null,nt=null,pt=null,vt=null,st=null,Nt=null,Rt=null,he=null;return{setTest:function(ee){G||(ee?Q(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!G&&(s.stencilMask(ee),ft=ee)},setFunc:function(ee,yn,Cn){(nt!==ee||pt!==yn||vt!==Cn)&&(s.stencilFunc(ee,yn,Cn),nt=ee,pt=yn,vt=Cn)},setOp:function(ee,yn,Cn){(st!==ee||Nt!==yn||Rt!==Cn)&&(s.stencilOp(ee,yn,Cn),st=ee,Nt=yn,Rt=Cn)},setLocked:function(ee){G=ee},setClear:function(ee){he!==ee&&(s.clearStencil(ee),he=ee)},reset:function(){G=!1,ft=null,nt=null,pt=null,vt=null,st=null,Nt=null,Rt=null,he=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,R=null,v=null,S=null,M=null,L=null,y=new Ot(0,0,0),A=0,N=!1,U=null,T=null,E=null,w=null,P=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=V>=1):D.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=V>=2);let z=null,W={},J=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),lt=new ge().fromArray(J),xt=new ge().fromArray(ot);function Ct(G,ft,nt,pt){let vt=new Uint8Array(4),st=s.createTexture();s.bindTexture(G,st),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<nt;Nt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(ft+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return st}let K={};K[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(_s),$t(!1),ce(gc),Q(s.CULL_FACE),Vt(On);function Q(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ht(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function Mt(G,ft){return u[G]!==ft?(s.bindFramebuffer(G,ft),u[G]=ft,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function rt(G,ft){let nt=p,pt=!1;if(G){nt=f.get(ft),nt===void 0&&(nt=[],f.set(ft,nt));let vt=G.textures;if(nt.length!==vt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Nt=vt.length;st<Nt;st++)nt[st]=s.COLOR_ATTACHMENT0+st;nt.length=vt.length,pt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(nt)}function Bt(G){return x!==G?(s.useProgram(G),x=G,!0):!1}let xe={[Xi]:s.FUNC_ADD,[Yu]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};xe[Zu]=s.MIN,xe[Ju]=s.MAX;let Gt={[Ku]:s.ZERO,[ju]:s.ONE,[Qu]:s.SRC_COLOR,[vc]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[bc]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[od]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[cd]:s.ONE_MINUS_CONSTANT_ALPHA};function Vt(G,ft,nt,pt,vt,st,Nt,Rt,he,ee){if(G===On){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(Q(s.BLEND),g=!0),G!==Xu){if(G!==m||ee!==N){if((_!==Xi||S!==Xi)&&(s.blendEquation(s.FUNC_ADD),_=Xi,S=Xi),ee)switch(G){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xc:s.blendFunc(s.ONE,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",G);break}else switch(G){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yc:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",G);break}R=null,v=null,M=null,L=null,y.set(0,0,0),A=0,m=G,N=ee}return}vt=vt||ft,st=st||nt,Nt=Nt||pt,(ft!==_||vt!==S)&&(s.blendEquationSeparate(xe[ft],xe[vt]),_=ft,S=vt),(nt!==R||pt!==v||st!==M||Nt!==L)&&(s.blendFuncSeparate(Gt[nt],Gt[pt],Gt[st],Gt[Nt]),R=nt,v=pt,M=st,L=Nt),(Rt.equals(y)===!1||he!==A)&&(s.blendColor(Rt.r,Rt.g,Rt.b,he),y.copy(Rt),A=he),m=G,N=!1}function Ht(G,ft){G.side===pn?ht(s.CULL_FACE):Q(s.CULL_FACE);let nt=G.side===Ze;ft&&(nt=!nt),$t(nt),G.blending===Is&&G.transparent===!1?Vt(On):Vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let pt=G.stencilWrite;a.setTest(pt),pt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(G){U!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),U=G)}function ce(G){G!==Hu?(Q(s.CULL_FACE),G!==T&&(G===gc?s.cullFace(s.BACK):G===Wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),T=G}function Se(G){G!==E&&(O&&s.lineWidth(G),E=G)}function Ke(G,ft,nt){G?(Q(s.POLYGON_OFFSET_FILL),(w!==ft||P!==nt)&&(w=ft,P=nt,o.getReversed()&&(ft=-ft),s.polygonOffset(ft,nt))):ht(s.POLYGON_OFFSET_FILL)}function ye(G){G?Q(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function Me(G){G===void 0&&(G=s.TEXTURE0+F-1),z!==G&&(s.activeTexture(G),z=G)}function H(G,ft,nt){nt===void 0&&(z===null?nt=s.TEXTURE0+F-1:nt=z);let pt=W[nt];pt===void 0&&(pt={type:void 0,texture:void 0},W[nt]=pt),(pt.type!==G||pt.texture!==ft)&&(z!==nt&&(s.activeTexture(nt),z=nt),s.bindTexture(G,ft||K[G]),pt.type=G,pt.texture=ft)}function De(){let G=W[z];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function b(){try{s.texSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function X(){try{s.texSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function at(){try{s.texStorage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ct(){try{s.texStorage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function et(){try{s.texImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function it(){try{s.texImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ut(G){return d[G]!==void 0?d[G]:s.getParameter(G)}function Pt(G,ft){d[G]!==ft&&(s.pixelStorei(G,ft),d[G]=ft)}function mt(G){lt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),lt.copy(G))}function dt(G){xt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),xt.copy(G))}function Lt(G,ft){let nt=c.get(ft);nt===void 0&&(nt=new WeakMap,c.set(ft,nt));let pt=nt.get(G);pt===void 0&&(pt=s.getUniformBlockIndex(ft,G.name),nt.set(G,pt))}function Ft(G,ft){let pt=c.get(ft).get(G);l.get(ft)!==pt&&(s.uniformBlockBinding(ft,pt,G.__bindingPointIndex),l.set(ft,pt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},z=null,W={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,R=null,v=null,S=null,M=null,L=null,y=new Ot(0,0,0),A=0,N=!1,U=null,T=null,E=null,w=null,P=null,lt.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ht,bindFramebuffer:Mt,drawBuffers:rt,useProgram:Bt,setBlending:Vt,setMaterial:Ht,setFlipSided:$t,setCullFace:ce,setLineWidth:Se,setPolygonOffset:Ke,setScissorTest:ye,activeTexture:Me,bindTexture:H,unbindTexture:De,compressedTexImage2D:oe,compressedTexImage3D:B,texImage2D:et,texImage3D:it,pixelStorei:Pt,getParameter:ut,updateUBOMapping:Lt,uniformBlockBinding:Ft,texStorage2D:at,texStorage3D:ct,texSubImage2D:b,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:tt,scissor:mt,viewport:dt,reset:Wt}}function Jy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,b){return p?new OffscreenCanvas(B,b):rr("canvas")}function g(B,b,X){let Z=1,tt=oe(B);if((tt.width>X||tt.height>X)&&(Z=X/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let at=Math.floor(Z*tt.width),ct=Math.floor(Z*tt.height);u===void 0&&(u=x(at,ct));let et=b?x(at,ct):u;return et.width=at,et.height=ct,et.getContext("2d").drawImage(B,0,0,at,ct),Dt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+at+"x"+ct+")."),et}else return"data"in B&&Dt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),B;return B}function m(B){return B.generateMipmaps}function _(B){s.generateMipmap(B)}function R(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(B,b,X,Z,tt,at=!1){if(B!==null){if(s[B]!==void 0)return s[B];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ct;Z&&(ct=t.get("EXT_texture_norm16"),ct||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=b;if(b===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8),X===s.UNSIGNED_SHORT&&ct&&(et=ct.R16_EXT),X===s.SHORT&&ct&&(et=ct.R16_SNORM_EXT)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),b===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8),X===s.UNSIGNED_SHORT&&ct&&(et=ct.RG16_EXT),X===s.SHORT&&ct&&(et=ct.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),b===s.RGB&&(X===s.UNSIGNED_SHORT&&ct&&(et=ct.RGB16_EXT),X===s.SHORT&&ct&&(et=ct.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),b===s.RGBA){let it=at?sr:Jt.getTransfer(tt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=it===se?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&ct&&(et=ct.RGBA16_EXT),X===s.SHORT&&ct&&(et=ct.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(B,b){let X;return B?b===null||b===En||b===Ls?X=s.DEPTH24_STENCIL8:b===mn?X=s.DEPTH32F_STENCIL8:b===Ps&&(X=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===En||b===Ls?X=s.DEPTH_COMPONENT24:b===mn?X=s.DEPTH_COMPONENT32F:b===Ps&&(X=s.DEPTH_COMPONENT16),X}function M(B,b){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Le&&B.minFilter!==Ne?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function L(B){let b=B.target;b.removeEventListener("dispose",L),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function y(B){let b=B.target;b.removeEventListener("dispose",y),U(b)}function A(B){let b=n.get(B);if(b.__webglInit===void 0)return;let X=B.source,Z=f.get(X);if(Z){let tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&N(B),Object.keys(Z).length===0&&f.delete(X)}n.remove(B)}function N(B){let b=n.get(B);s.deleteTexture(b.__webglTexture);let X=B.source,Z=f.get(X);delete Z[b.__cacheKey],o.memory.textures--}function U(B){let b=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let X=B.textures;for(let Z=0,tt=X.length;Z<tt;Z++){let at=n.get(X[Z]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(X[Z])}n.remove(B)}let T=0;function E(){T=0}function w(){return T}function P(B){T=B}function F(){let B=T;return B>=i.maxTextures&&Dt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+i.maxTextures),T+=1,B}function O(B){let b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function V(B,b){let X=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&X.__version!==B.version){let Z=B.image;if(Z===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(X,B,b);return}}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function D(B,b){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){ht(X,B,b);return}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function z(B,b){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){ht(X,B,b);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function W(B,b){let X=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&X.__version!==B.version){Mt(X,B,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}let J={[ko]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Go]:s.MIRRORED_REPEAT},ot={[Le]:s.NEAREST,[dd]:s.NEAREST_MIPMAP_NEAREST,[Cr]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},lt={[gd]:s.NEVER,[bd]:s.ALWAYS,[xd]:s.LESS,[nl]:s.LEQUAL,[yd]:s.EQUAL,[il]:s.GEQUAL,[_d]:s.GREATER,[vd]:s.NOTEQUAL};function xt(B,b){if(b.type===mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ne||b.magFilter===xa||b.magFilter===Cr||b.magFilter===Ti||b.minFilter===Ne||b.minFilter===xa||b.minFilter===Cr||b.minFilter===Ti)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,J[b.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,ot[b.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==Cr&&b.minFilter!==Ti||b.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ct(B,b){let X=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",L));let Z=b.source,tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));let at=O(b);if(at!==B.__cacheKey){tt[at]===void 0&&(tt[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[at].usedTimes++;let ct=tt[B.__cacheKey];ct!==void 0&&(tt[B.__cacheKey].usedTimes--,ct.usedTimes===0&&N(b)),B.__cacheKey=at,B.__webglTexture=tt[at].texture}return X}function K(B,b,X){return Math.floor(Math.floor(B/X)/b)}function Q(B,b,X,Z){let at=B.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,X,Z,b.data);else{at.sort((Pt,mt)=>Pt.start-mt.start);let ct=0;for(let Pt=1;Pt<at.length;Pt++){let mt=at[ct],dt=at[Pt],Lt=mt.start+mt.count,Ft=K(dt.start,b.width,4),Wt=K(mt.start,b.width,4);dt.start<=Lt+1&&Ft===Wt&&K(dt.start+dt.count-1,b.width,4)===Ft?mt.count=Math.max(mt.count,dt.start+dt.count-mt.start):(++ct,at[ct]=dt)}at.length=ct+1;let et=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),ut=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Pt=0,mt=at.length;Pt<mt;Pt++){let dt=at[Pt],Lt=Math.floor(dt.start/4),Ft=Math.ceil(dt.count/4),Wt=Lt%b.width,G=Math.floor(Lt/b.width),ft=Ft,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,Wt,G,ft,nt,X,Z,b.data)}B.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function ht(B,b,X){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);let tt=Ct(B,b),at=b.source;e.bindTexture(Z,B.__webglTexture,s.TEXTURE0+X);let ct=n.get(at);if(at.version!==ct.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let nt=Jt.getPrimaries(Jt.workingColorSpace),pt=b.colorSpace===ii?null:Jt.getPrimaries(b.colorSpace),vt=b.colorSpace===ii||nt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let it=g(b.image,!1,i.maxTextureSize);it=De(b,it);let ut=r.convert(b.format,b.colorSpace),Pt=r.convert(b.type),mt=v(b.internalFormat,ut,Pt,b.normalized,b.colorSpace,b.isVideoTexture);xt(Z,b);let dt,Lt=b.mipmaps,Ft=b.isVideoTexture!==!0,Wt=ct.__version===void 0||tt===!0,G=at.dataReady,ft=M(b,it);if(b.isDepthTexture)mt=S(b.format===Ci,b.type),Wt&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,mt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,mt,it.width,it.height,0,ut,Pt,null));else if(b.isDataTexture)if(Lt.length>0){Ft&&Wt&&e.texStorage2D(s.TEXTURE_2D,ft,mt,Lt[0].width,Lt[0].height);for(let nt=0,pt=Lt.length;nt<pt;nt++)dt=Lt[nt],Ft?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(s.TEXTURE_2D,nt,mt,dt.width,dt.height,0,ut,Pt,dt.data);b.generateMipmaps=!1}else Ft?(Wt&&e.texStorage2D(s.TEXTURE_2D,ft,mt,it.width,it.height),G&&Q(b,it,ut,Pt)):e.texImage2D(s.TEXTURE_2D,0,mt,it.width,it.height,0,ut,Pt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,mt,Lt[0].width,Lt[0].height,it.depth);for(let nt=0,pt=Lt.length;nt<pt;nt++)if(dt=Lt[nt],b.format!==gn)if(ut!==null)if(Ft){if(G)if(b.layerUpdates.size>0){let vt=Hc(dt.width,dt.height,b.format,b.type);for(let st of b.layerUpdates){let Nt=dt.data.subarray(st*vt/dt.data.BYTES_PER_ELEMENT,(st+1)*vt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,st,dt.width,dt.height,1,ut,Nt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,it.depth,ut,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,mt,dt.width,dt.height,it.depth,0,dt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,it.depth,ut,Pt,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,mt,dt.width,dt.height,it.depth,0,ut,Pt,dt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ft&&Wt&&e.texStorage2D(s.TEXTURE_2D,ft,mt,Lt[0].width,Lt[0].height);for(let nt=0,pt=Lt.length;nt<pt;nt++)dt=Lt[nt],b.format!==gn?ut!==null?Ft?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,mt,dt.width,dt.height,0,dt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(s.TEXTURE_2D,nt,mt,dt.width,dt.height,0,ut,Pt,dt.data)}else if(b.isDataArrayTexture)if(Ft){if(Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,mt,it.width,it.height,it.depth),G)if(b.layerUpdates.size>0){let nt=Hc(it.width,it.height,b.format,b.type);for(let pt of b.layerUpdates){let vt=it.data.subarray(pt*nt/it.data.BYTES_PER_ELEMENT,(pt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,it.width,it.height,1,ut,Pt,vt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ut,Pt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,it.width,it.height,it.depth,0,ut,Pt,it.data);else if(b.isData3DTexture)Ft?(Wt&&e.texStorage3D(s.TEXTURE_3D,ft,mt,it.width,it.height,it.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ut,Pt,it.data)):e.texImage3D(s.TEXTURE_3D,0,mt,it.width,it.height,it.depth,0,ut,Pt,it.data);else if(b.isFramebufferTexture){if(Wt)if(Ft)e.texStorage2D(s.TEXTURE_2D,ft,mt,it.width,it.height);else{let nt=it.width,pt=it.height;for(let vt=0;vt<ft;vt++)e.texImage2D(s.TEXTURE_2D,vt,mt,nt,pt,0,ut,Pt,null),nt>>=1,pt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(b),nt.onpaint=pt=>{let vt=pt.changedElements;for(let st of d)vt.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let vt=s.RGBA,st=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,st,Nt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ft&&Wt){let nt=oe(Lt[0]);e.texStorage2D(s.TEXTURE_2D,ft,mt,nt.width,nt.height)}for(let nt=0,pt=Lt.length;nt<pt;nt++)dt=Lt[nt],Ft?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ut,Pt,dt):e.texImage2D(s.TEXTURE_2D,nt,mt,ut,Pt,dt);b.generateMipmaps=!1}else if(Ft){if(Wt){let nt=oe(it);e.texStorage2D(s.TEXTURE_2D,ft,mt,nt.width,nt.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Pt,it)}else e.texImage2D(s.TEXTURE_2D,0,mt,ut,Pt,it);m(b)&&_(Z),ct.__version=at.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Mt(B,b,X){if(b.image.length!==6)return;let Z=Ct(B,b),tt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+X);let at=n.get(tt);if(tt.version!==at.__version||Z===!0){e.activeTexture(s.TEXTURE0+X);let ct=Jt.getPrimaries(Jt.workingColorSpace),et=b.colorSpace===ii?null:Jt.getPrimaries(b.colorSpace),it=b.colorSpace===ii||ct===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,Pt=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let st=0;st<6;st++)!ut&&!Pt?mt[st]=g(b.image[st],!0,i.maxCubemapSize):mt[st]=Pt?b.image[st].image:b.image[st],mt[st]=De(b,mt[st]);let dt=mt[0],Lt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),Wt=v(b.internalFormat,Lt,Ft,b.normalized,b.colorSpace),G=b.isVideoTexture!==!0,ft=at.__version===void 0||Z===!0,nt=tt.dataReady,pt=M(b,dt);xt(s.TEXTURE_CUBE_MAP,b);let vt;if(ut){G&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Wt,dt.width,dt.height);for(let st=0;st<6;st++){vt=mt[st].mipmaps;for(let Nt=0;Nt<vt.length;Nt++){let Rt=vt[Nt];b.format!==gn?Lt!==null?G?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Wt,Rt.width,Rt.height,0,Rt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Rt.width,Rt.height,Lt,Ft,Rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Wt,Rt.width,Rt.height,0,Lt,Ft,Rt.data)}}}else{if(vt=b.mipmaps,G&&ft){vt.length>0&&pt++;let st=oe(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Wt,st.width,st.height)}for(let st=0;st<6;st++)if(Pt){G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,mt[st].width,mt[st].height,Lt,Ft,mt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,mt[st].width,mt[st].height,0,Lt,Ft,mt[st].data);for(let Nt=0;Nt<vt.length;Nt++){let he=vt[Nt].image[st].image;G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,he.width,he.height,Lt,Ft,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Wt,he.width,he.height,0,Lt,Ft,he.data)}}else{G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,Ft,mt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,Lt,Ft,mt[st]);for(let Nt=0;Nt<vt.length;Nt++){let Rt=vt[Nt];G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,Lt,Ft,Rt.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Wt,Lt,Ft,Rt.image[st])}}}m(b)&&_(s.TEXTURE_CUBE_MAP),at.__version=tt.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function rt(B,b,X,Z,tt,at){let ct=r.convert(X.format,X.colorSpace),et=r.convert(X.type),it=v(X.internalFormat,ct,et,X.normalized,X.colorSpace),ut=n.get(b),Pt=n.get(X);if(Pt.__renderTarget=b,!ut.__hasExternalTextures){let mt=Math.max(1,b.width>>at),dt=Math.max(1,b.height>>at);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,at,it,mt,dt,b.depth,0,ct,et,null):e.texImage2D(tt,at,it,mt,dt,0,ct,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,B),Me(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,Pt.__webglTexture,0,ye(b)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,Pt.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(B,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,B),b.depthBuffer){let Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,at=S(b.stencilBuffer,tt),ct=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Me(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(b),at,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(b),at,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,at,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,B)}else{let Z=b.textures;for(let tt=0;tt<Z.length;tt++){let at=Z[tt],ct=r.convert(at.format,at.colorSpace),et=r.convert(at.type),it=v(at.internalFormat,ct,et,at.normalized,at.colorSpace);Me(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(b),it,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(b),it,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,it,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(B,b,X){let Z=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(b.depthTexture);if(tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b.depthTexture);let ut=r.convert(b.depthTexture.format),Pt=r.convert(b.depthTexture.type),mt;b.depthTexture.format===Fn?mt=s.DEPTH_COMPONENT24:b.depthTexture.format===Ci&&(mt=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,b.width,b.height,0,ut,Pt,null)}}else V(b.depthTexture,0);let at=tt.__webglTexture,ct=ye(b),et=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,it=b.depthTexture.format===Ci?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Fn)Me(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,at,0);else if(b.depthTexture.format===Ci)Me(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(B){let b=n.get(B),X=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){let Z=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)xe(b.__webglFramebuffer[Z],B,Z);else{let Z=B.texture.mipmaps;Z&&Z.length>0?xe(b.__webglFramebuffer[0],B,0):xe(b.__webglFramebuffer,B,0)}else if(X){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),Bt(b.__webglDepthbuffer[Z],B,!1);else{let tt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,at)}}else{let Z=B.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Bt(b.__webglDepthbuffer,B,!1);else{let tt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,at)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(B,b,X){let Z=n.get(B);b!==void 0&&rt(Z.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Gt(B)}function Ht(B){let b=B.texture,X=n.get(B),Z=n.get(b);B.addEventListener("dispose",y);let tt=B.textures,at=B.isWebGLCubeRenderTarget===!0,ct=tt.length>1;if(ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,o.memory.textures++),at){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let it=0;it<b.mipmaps.length;it++)X.__webglFramebuffer[et][it]=s.createFramebuffer()}else X.__webglFramebuffer[et]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<b.mipmaps.length;et++)X.__webglFramebuffer[et]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(ct)for(let et=0,it=tt.length;et<it;et++){let ut=n.get(tt[et]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(B.samples>0&&Me(B)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let it=tt[et];X.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let ut=r.convert(it.format,it.colorSpace),Pt=r.convert(it.type),mt=v(it.internalFormat,ut,Pt,it.normalized,it.colorSpace,B.isXRRenderTarget===!0),dt=ye(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,mt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,X.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(X.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)rt(X.__webglFramebuffer[et][it],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else rt(X.__webglFramebuffer[et],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(b)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let et=0,it=tt.length;et<it;et++){let ut=tt[et],Pt=n.get(ut),mt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(mt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,Pt.__webglTexture),xt(mt,ut),rt(X.__webglFramebuffer,B,ut,s.COLOR_ATTACHMENT0+et,mt,0),m(ut)&&_(mt)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(et=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,Z.__webglTexture),xt(et,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)rt(X.__webglFramebuffer[it],B,b,s.COLOR_ATTACHMENT0,et,it);else rt(X.__webglFramebuffer,B,b,s.COLOR_ATTACHMENT0,et,0);m(b)&&_(et),e.unbindTexture()}B.depthBuffer&&Gt(B)}function $t(B){let b=B.textures;for(let X=0,Z=b.length;X<Z;X++){let tt=b[X];if(m(tt)){let at=R(B),ct=n.get(tt).__webglTexture;e.bindTexture(at,ct),_(at),e.unbindTexture()}}}let ce=[],Se=[];function Ke(B){if(B.samples>0){if(Me(B)===!1){let b=B.textures,X=B.width,Z=B.height,tt=s.COLOR_BUFFER_BIT,at=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(B),et=b.length>1;if(et)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let it=B.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Pt=n.get(b[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,X,Z,0,0,X,Z,tt,s.NEAREST),l===!0&&(ce.length=0,Se.length=0,ce.push(s.COLOR_ATTACHMENT0+ut),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(ce.push(at),Se.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Pt=n.get(b[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let b=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ye(B){return Math.min(i.maxSamples,B.samples)}function Me(B){let b=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(B){let b=o.render.frame;h.get(B)!==b&&(h.set(B,b),B.update())}function De(B,b){let X=B.colorSpace,Z=B.format,tt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||X!==ir&&X!==ii&&(Jt.getTransfer(X)===se?(Z!==gn||tt!==tn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",X)),b}function oe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.getTextureUnits=w,this.setTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Vt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ky(s,t){function e(n,i=ii){let r,o=Jt.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===va)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pc)return s.BYTE;if(n===Lc)return s.SHORT;if(n===Ps)return s.UNSIGNED_SHORT;if(n===ya)return s.INT;if(n===En)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Dc)return s.ALPHA;if(n===Bc)return s.RGB;if(n===gn)return s.RGBA;if(n===Fn)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===ba)return s.RED;if(n===Sa)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===Ma)return s.RG_INTEGER;if(n===wa)return s.RGBA_INTEGER;if(n===Rr||n===Ir||n===Pr||n===Lr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Aa||n===Ta||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ia||n===Pa||n===La||n===Na||n===Nr||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ia)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Da||n===Ba||n===Ua||n===Oa||n===za||n===Va||n===ka||n===Ga||n===Ha||n===Wa||n===qa||n===Xa||n===Ya||n===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Qa||n===Fr||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Dn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new lh,m={},_=e.getContextAttributes(),R=null,v=null,S=[],M=[],L=new Xt,y=null,A=null,N=new Ve;N.viewport=new ge;let U=new Ve;U.viewport=new ge;let T=[N,U],E=new fa,w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=S[K];return Q===void 0&&(Q=new ws,S[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=S[K];return Q===void 0&&(Q=new ws,S[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=S[K];return Q===void 0&&(Q=new ws,S[K]=Q),Q.getHandSpace()};function F(K){let Q=M.indexOf(K.inputSource);if(Q===-1)return;let ht=S[Q];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let K=0;K<S.length;K++){let Q=M[K];Q!==null&&(M[K]=null,S[K].disconnect(Q))}w=null,P=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(R),f=null,u=null,d=null,i=null,v=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Mt=null,rt=null;_.depth&&(rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=_.stencil?Ci:Fn,Mt=_.stencil?Ls:En);let Bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Qe(u.textureWidth,u.textureHeight,{format:gn,type:tn,depthTexture:new bi(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qe(f.framebufferWidth,f.framebufferHeight,{format:gn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ct.setContext(i),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(K){for(let Q=0;Q<K.removed.length;Q++){let ht=K.removed[Q],Mt=M.indexOf(ht);Mt>=0&&(M[Mt]=null,S[Mt].disconnect(ht))}for(let Q=0;Q<K.added.length;Q++){let ht=K.added[Q],Mt=M.indexOf(ht);if(Mt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=M.length){M.push(ht),Mt=Bt;break}else if(M[Bt]===null){M[Bt]=ht,Mt=Bt;break}if(Mt===-1)break}let rt=S[Mt];rt&&rt.connect(ht)}}let D=new q,z=new q;function W(K,Q,ht){D.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);let Mt=D.distanceTo(z),rt=Q.projectionMatrix.elements,Bt=ht.projectionMatrix.elements,xe=rt[14]/(rt[10]-1),Gt=rt[14]/(rt[10]+1),Vt=(rt[9]+1)/rt[5],Ht=(rt[9]-1)/rt[5],$t=(rt[8]-1)/rt[0],ce=(Bt[8]+1)/Bt[0],Se=xe*$t,Ke=xe*ce,ye=Mt/(-$t+ce),Me=ye*-$t;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Me),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),rt[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let H=xe+ye,De=Gt+ye,oe=Se-Me,B=Ke+(Mt-Me),b=Vt*Gt/De*H,X=Ht*Gt/De*H;K.projectionMatrix.makePerspective(oe,B,b,X,H,De),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,ht=K.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),E.near=U.near=N.near=Q,E.far=U.far=N.far=ht,(w!==E.near||P!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,P=E.far),E.layers.mask=K.layers.mask|6,N.layers.mask=E.layers.mask&-5,U.layers.mask=E.layers.mask&-3;let Mt=K.parent,rt=E.cameras;J(E,Mt);for(let Bt=0;Bt<rt.length;Bt++)J(rt[Bt],Mt);rt.length===2?W(E,N,U):E.projectionMatrix.copy(N.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),ot(K,E,Mt)};function ot(K,Q,ht){ht===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)},this.getCameraTexture=function(K){return m[K]};let lt=null;function xt(K,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Mt=!1;ht.length!==E.cameras.length&&(E.cameras.length=0,Mt=!0);for(let Gt=0;Gt<ht.length;Gt++){let Vt=ht[Gt],Ht=null;if(f!==null)Ht=f.getViewport(Vt);else{let ce=d.getViewSubImage(u,Vt);Ht=ce.viewport,Gt===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let $t=T[Gt];$t===void 0&&($t=new Ve,$t.layers.enable(Gt),$t.viewport=new ge,T[Gt]=$t),$t.matrix.fromArray(Vt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Vt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Gt===0&&(E.matrix.copy($t.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Mt===!0&&E.cameras.push($t)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Gt=d.getDepthInformation(ht[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,i.renderState)}if(rt&&rt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Gt=0;Gt<ht.length;Gt++){let Vt=ht[Gt].camera;if(Vt){let Ht=m[Vt];Ht||(Ht=new gr,m[Vt]=Ht);let $t=d.getCameraImage(Vt);Ht.sourceTexture=$t}}}}for(let ht=0;ht<S.length;ht++){let Mt=M[ht],rt=S[ht];Mt!==null&&rt!==void 0&&rt.update(Mt,Q,c||o)}lt&&lt(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Ct=new jd;Ct.setAnimationLoop(xt),this.setAnimationLoop=function(K){lt=K},this.dispose=function(){}}},t_=new te,rf=new kt;rf.set(-1,0,0,0,1,0,0,0,1);function e_(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Vc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,R,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ze&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ze&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),R=_.envMap,v=_.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",_));let L=S.program;n.updateUBOMapping(v,L);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let S=d();v.__bindingPointIndex=S;let M=s.createBuffer(),L=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],M=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let y=0,A=M.length;y<A;y++){let N=M[y];if(Array.isArray(N))for(let U=0,T=N.length;U<T;U++)f(N[U],y,U,L);else f(N,y,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,M,L){if(x(v,S,M,L)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let N=0;for(let U=0;U<A.length;U++){let T=A[U],E=m(T);p(T,v.__data,N),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(N+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,L){let y=v.value,A=S+"_"+M;if(L[A]===void 0)return typeof y=="number"||typeof y=="boolean"?L[A]=y:ArrayBuffer.isView(y)?L[A]=y.slice():L[A]=y.clone(),!0;{let N=L[A];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return L[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function g(v){let S=v.uniforms,M=0,L=16;for(let A=0,N=S.length;A<N;A++){let U=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,E=U.length;T<E;T++){let w=U[T],P=Array.isArray(w.value)?w.value:[w.value];for(let F=0,O=P.length;F<O;F++){let V=P[F],D=m(V),z=M%L,W=z%D.boundary,J=z+W;M+=W,J!==0&&L-J<D.storage&&(M+=L-J),w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,M+=D.storage}}}let y=M%L;return y>0&&(M+=L-y),v.__size=M,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){let S=v.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function R(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:R}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function s_(){return zn===null&&(zn=new hr(i_,16,16,Ri,An),zn.name="DFG_LUT",zn.minFilter=Ne,zn.magFilter=Ne,zn.wrapS=Nn,zn.wrapT=Nn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var ll=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([wa,Ma,Sa]),m=new Set([tn,En,Ps,Ls,_a,va]),_=new Uint32Array(4),R=new Int32Array(4),v=new q,S=null,M=null,L=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,T=null,E=null,w=null,P=null;this._outputColorSpace=qe;let F=0,O=0,V=null,D=-1,z=null,W=new ge,J=new ge,ot=null,lt=new Ot(0),xt=0,Ct=e.width,K=e.height,Q=1,ht=null,Mt=null,rt=new ge(0,0,Ct,K),Bt=new ge(0,0,Ct,K),xe=!1,Gt=new As,Vt=!1,Ht=!1,$t=new te,ce=new q,Se=new ge,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Me(){return V===null?Q:1}let H=n;function De(C,k){return e.getContext(C,k)}let oe,B,b,X,Z,tt,at,ct,et,it,ut,Pt,mt,dt,Lt,Ft,Wt,G,ft,nt,pt,vt,st;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",yn,!1),H===null){let k="webgl2";if(H=De(k,C),H===null)throw De(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(C){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Ut("WebGLRenderer: "+C.message),C}function Nt(){oe=new ux(H),oe.init(),pt=new Ky(H,oe),B=new ex(H,oe,t,pt),b=new Zy(H,oe),B.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),E=H.createFramebuffer(),w=H.createFramebuffer(),P=H.createFramebuffer(),X=new px(H),Z=new Dy,tt=new Jy(H,oe,b,Z,B,pt,X),at=new hx(N),ct=new gm(H),vt=new Q0(H,ct),et=new dx(H,ct,X,vt),it=new gx(H,et,ct,vt,X),G=new mx(H,B,tt),Lt=new nx(Z),ut=new Fy(N,at,oe,B,vt,Lt),Pt=new e_(N,Z),mt=new Uy,dt=new Hy(oe),Wt=new j0(N,at,b,it,p,l),Ft=new $y(N,it,B),st=new n_(H,X,B,b),ft=new tx(H,oe,X),nt=new fx(H,oe,X),X.programs=ut.programs,N.capabilities=B,N.extensions=oe,N.properties=Z,N.renderLists=mt,N.shadowMap=Ft,N.state=b,N.info=X}x!==tn&&(A=new yx(x,e.width,e.height,a,i,r));let Rt=new ch(N,H);this.xr=Rt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(Ct,K,!1))},this.getSize=function(C){return C.set(Ct,K)},this.setSize=function(C,k,j=!0){if(Rt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=C,K=k,e.width=Math.floor(C*Q),e.height=Math.floor(k*Q),j===!0&&(e.style.width=C+"px",e.style.height=k+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Ct*Q,K*Q).floor()},this.setDrawingBufferSize=function(C,k,j){Ct=C,K=k,Q=j,e.width=Math.floor(C*j),e.height=Math.floor(k*j),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(x===tn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(rt)},this.setViewport=function(C,k,j,Y){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,k,j,Y),b.viewport(W.copy(rt).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(Bt)},this.setScissor=function(C,k,j,Y){C.isVector4?Bt.set(C.x,C.y,C.z,C.w):Bt.set(C,k,j,Y),b.scissor(J.copy(Bt).multiplyScalar(Q).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){b.setScissorTest(xe=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,j=!0){let Y=0;if(C){let $=!1;if(V!==null){let _t=V.texture.format;$=g.has(_t)}if($){let _t=V.texture.type,St=m.has(_t),yt=Wt.getClearColor(),At=Wt.getClearAlpha(),It=yt.r,qt=yt.g,Zt=yt.b;St?(_[0]=It,_[1]=qt,_[2]=Zt,_[3]=At,H.clearBufferuiv(H.COLOR,0,_)):(R[0]=It,R[1]=qt,R[2]=Zt,R[3]=At,H.clearBufferiv(H.COLOR,0,R))}else Y|=H.COLOR_BUFFER_BIT}k&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),T=C},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Wt.dispose(),mt.dispose(),dt.dispose(),Z.dispose(),at.dispose(),it.dispose(),vt.dispose(),st.dispose(),ut.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Vh),Rt.removeEventListener("sessionend",kh),Ui.stop()};function he(C){C.preventDefault(),zc("WebGLRenderer: Context Lost."),U=!0}function ee(){zc("WebGLRenderer: Context Restored."),U=!1;let C=X.autoReset,k=Ft.enabled,j=Ft.autoUpdate,Y=Ft.needsUpdate,$=Ft.type;Nt(),X.autoReset=C,Ft.enabled=k,Ft.autoUpdate=j,Ft.needsUpdate=Y,Ft.type=$}function yn(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Cn(C){let k=C.target;k.removeEventListener("dispose",Cn),vp(k)}function vp(C){bp(C),Z.remove(C)}function bp(C){let k=Z.get(C).programs;k!==void 0&&(k.forEach(function(j){ut.releaseProgram(j)}),C.isShaderMaterial&&ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,j,Y,$,_t){k===null&&(k=Ke);let St=$.isMesh&&$.matrixWorld.determinantAffine()<0,yt=wp(C,k,j,Y,$);b.setMaterial(Y,St);let At=j.index,It=1;if(Y.wireframe===!0){if(At=et.getWireframeAttribute(j),At===void 0)return;It=2}let qt=j.drawRange,Zt=j.attributes.position,Tt=qt.start*It,ne=(qt.start+qt.count)*It;_t!==null&&(Tt=Math.max(Tt,_t.start*It),ne=Math.min(ne,(_t.start+_t.count)*It)),At!==null?(Tt=Math.max(Tt,0),ne=Math.min(ne,At.count)):Zt!=null&&(Tt=Math.max(Tt,0),ne=Math.min(ne,Zt.count));let we=ne-Tt;if(we<0||we===1/0)return;vt.setup($,Y,yt,j,At);let de,le=ft;if(At!==null&&(de=ct.get(At),le=nt,le.setIndex(de)),$.isMesh)Y.wireframe===!0?(b.setLineWidth(Y.wireframeLinewidth*Me()),le.setMode(H.LINES)):le.setMode(H.TRIANGLES);else if($.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),b.setLineWidth(Be*Me()),$.isLineSegments?le.setMode(H.LINES):$.isLineLoop?le.setMode(H.LINE_LOOP):le.setMode(H.LINE_STRIP)}else $.isPoints?le.setMode(H.POINTS):$.isSprite&&le.setMode(H.TRIANGLES);if($.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Be=$._multiDrawStarts,bt=$._multiDrawCounts,He=$._multiDrawCount,jt=At?ct.get(At).bytesPerElement:1,un=Z.get(Y).currentProgram.getUniforms();for(let Rn=0;Rn<He;Rn++)un.setValue(H,"_gl_DrawID",Rn),le.render(Be[Rn]/jt,bt[Rn])}else if($.isInstancedMesh)le.renderInstances(Tt,we,$.count);else if(j.isInstancedBufferGeometry){let Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bt=Math.min(j.instanceCount,Be);le.renderInstances(Tt,we,bt)}else le.render(Tt,we)};function zh(C,k,j,Y){T!==null&&C.isNodeMaterial&&T.setObject(Y,C),Vt===!0&&Lt.setState(C,j,!1),C.transparent===!0&&C.side===pn&&C.forceSinglePass===!1?(C.side=Ze,C.needsUpdate=!0,Qr(C,k,Y),C.side=Ei,C.needsUpdate=!0,Qr(C,k,Y),C.side=pn):Qr(C,k,Y)}this.compile=function(C,k,j=null){j===null&&(j=C),T!==null&&T.renderStart(C,k,j),M=dt.get(j),M.init(k),y.push(M),j.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),C!==j&&C.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),T!==null&&T.updateLights(M.state.lightsArray),Ht=this.localClippingEnabled,Vt=Lt.init(this.clippingPlanes,Ht),Vt===!0&&Lt.setGlobalState(this.clippingPlanes,k),T!==null&&Ft.render(M.state.shadowsArray,j,k);let Y=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let _t=$.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){let yt=_t[St];zh(yt,j,k,$),Y.add(yt)}else zh(_t,j,k,$),Y.add(_t)}),M=y.pop(),T!==null&&T.renderEnd(),Y},this.compileAsync=function(C,k,j=null){let Y=this.compile(C,k,j);return new Promise($=>{function _t(){if(Y.forEach(function(St){let At=Z.get(St).currentProgram;(At===void 0||At.isReady())&&Y.delete(St)}),Y.size===0){$(C);return}setTimeout(_t,10)}oe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ll=null;function Sp(C){Ll&&Ll(C)}function Vh(){Ui.stop()}function kh(){Ui.start()}let Ui=new jd;Ui.setAnimationLoop(Sp),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(C){Ll=C,Rt.setAnimationLoop(C),C===null?Ui.stop():Ui.start()},Rt.addEventListener("sessionstart",Vh),Rt.addEventListener("sessionend",kh),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;T!==null&&T.renderStart(C,k);let j=Rt.enabled===!0&&Rt.isPresenting===!0,Y=A!==null&&(V===null||j)&&A.begin(N,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,k,V),M=dt.get(C,y.length),M.init(k),M.state.textureUnits=tt.getTextureUnits(),y.push(M),$t.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Gt.setFromProjectionMatrix($t,Mn,k.reversedDepth),Ht=this.localClippingEnabled,Vt=Lt.init(this.clippingPlanes,Ht),S=mt.get(C,L.length),S.init(),L.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){let St=N.xr.getDepthSensingMesh();St!==null&&Nl(St,k,-1/0,N.sortObjects)}Nl(C,k,0,N.sortObjects),S.finish(),T!==null&&T.updateLights(M.state.lightsArray),N.sortObjects===!0&&S.sort(ht,Mt),ye=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ye&&Wt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Lt.beginShadows();let $=M.state.shadowsArray;if(Ft.render($,C,k),Vt===!0&&Lt.endShadows(),(Y&&A.hasRenderPass())===!1){let St=S.opaque,yt=S.transmissive;if(M.setupLights(),k.isArrayCamera){let At=k.cameras;if(yt.length>0)for(let It=0,qt=At.length;It<qt;It++){let Zt=At[It];Hh(St,yt,C,Zt)}ye&&Wt.render(C);for(let It=0,qt=At.length;It<qt;It++){let Zt=At[It];Gh(S,C,Zt,Zt.viewport)}}else yt.length>0&&Hh(St,yt,C,k),ye&&Wt.render(C),Gh(S,C,k)}V!==null&&O===0&&(tt.updateMultisampleRenderTarget(V),tt.updateRenderTargetMipmap(V)),Y&&A.end(N),C.isScene===!0&&C.onAfterRender(N,C,k),vt.resetDefaultState(),D=-1,z=null,y.pop(),y.length>0?(M=y[y.length-1],tt.setTextureUnits(M.state.textureUnits),Vt===!0&&Lt.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,L.pop(),L.length>0?S=L[L.length-1]:S=null,T!==null&&T.renderEnd()};function Nl(C,k,j,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Gt)){Y&&Se.setFromMatrixPosition(C.matrixWorld).applyMatrix4($t);let St=it.update(C),yt=C.material;yt.visible&&S.push(C,St,yt,j,Se.z,null,k)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Gt))){let St=it.update(C),yt=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Se.copy(C.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Se.copy(St.boundingSphere.center)),Se.applyMatrix4(C.matrixWorld).applyMatrix4($t)),Array.isArray(yt)){let At=St.groups;for(let It=0,qt=At.length;It<qt;It++){let Zt=At[It],Tt=yt[Zt.materialIndex];Tt&&Tt.visible&&S.push(C,St,Tt,j,Se.z,Zt,k)}}else yt.visible&&S.push(C,St,yt,j,Se.z,null,k)}}let _t=C.children;for(let St=0,yt=_t.length;St<yt;St++)Nl(_t[St],k,j,Y)}function Gh(C,k,j,Y){let{opaque:$,transmissive:_t,transparent:St}=C;M.setupLightsView(j),Vt===!0&&Lt.setGlobalState(N.clippingPlanes,j),Y&&b.viewport(W.copy(Y)),$.length>0&&jr($,k,j),_t.length>0&&jr(_t,k,j),St.length>0&&jr(St,k,j),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Hh(C,k,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Tt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Qe(1,1,{generateMipmaps:!0,type:Tt?An:tn,minFilter:Ti,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let _t=M.state.transmissionRenderTarget[Y.id],St=Y.viewport||W;_t.setSize(St.z*N.transmissionResolutionScale,St.w*N.transmissionResolutionScale);let yt=N.getRenderTarget(),At=N.getActiveCubeFace(),It=N.getActiveMipmapLevel();N.setRenderTarget(_t),N.getClearColor(lt),xt=N.getClearAlpha(),xt<1&&N.setClearColor(16777215,.5),N.clear(),ye&&Wt.render(j);let qt=N.toneMapping;N.toneMapping=wn;let Zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Vt===!0&&Lt.setGlobalState(N.clippingPlanes,Y),jr(C,j,Y),tt.updateMultisampleRenderTarget(_t),tt.updateRenderTargetMipmap(_t),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ne=0,we=k.length;ne<we;ne++){let de=k[ne],{object:le,geometry:Be,material:bt,group:He}=de;if(bt.side===pn&&le.layers.test(Y.layers)){let jt=bt.side;bt.side=Ze,bt.needsUpdate=!0,Wh(le,j,Y,Be,bt,He),bt.side=jt,bt.needsUpdate=!0,Tt=!0}}Tt===!0&&(tt.updateMultisampleRenderTarget(_t),tt.updateRenderTargetMipmap(_t))}N.setRenderTarget(yt,At,It),N.setClearColor(lt,xt),Zt!==void 0&&(Y.viewport=Zt),N.toneMapping=qt}function jr(C,k,j){let Y=k.isScene===!0?k.overrideMaterial:null;for(let $=0,_t=C.length;$<_t;$++){let St=C[$],{object:yt,geometry:At,group:It}=St,qt=St.material;qt.allowOverride===!0&&Y!==null&&(qt=Y),yt.layers.test(j.layers)&&Wh(yt,k,j,At,qt,It)}}function Wh(C,k,j,Y,$,_t){T!==null&&$.isNodeMaterial&&T.setObject(C,$),C.onBeforeRender(N,k,j,Y,$,_t),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(N,k,j,Y,C,_t),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,N.renderBufferDirect(j,k,Y,$,C,_t),$.side=Ei,$.needsUpdate=!0,N.renderBufferDirect(j,k,Y,$,C,_t),$.side=pn):N.renderBufferDirect(j,k,Y,$,C,_t),C.onAfterRender(N,k,j,Y,$,_t)}function Qr(C,k,j){k.isScene!==!0&&(k=Ke);let Y=Z.get(C),$=M.state.lights,_t=M.state.shadowsArray,St=$.state.version,yt=ut.getParameters(C,$.state,_t,k,j,M.state.lightProbeGridArray),At=ut.getProgramCacheKey(yt),It=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let qt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=at.get(C.envMap||Y.environment,qt),Y.envMapRotation=Y.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,It===void 0&&(C.addEventListener("dispose",Cn),It=new Map,Y.programs=It);let Zt=It.get(At);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===St)return Xh(C,yt),Zt}else yt.uniforms=ut.getUniforms(C),T!==null&&C.isNodeMaterial&&T.build(C,j,yt),C.onBeforeCompile(yt,N),Zt=ut.acquireProgram(yt,At),It.set(At,Zt),Y.uniforms=yt.uniforms;let Tt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Tt.clippingPlanes=Lt.uniform),Xh(C,yt),Y.needsLights=Ap(C),Y.lightsStateVersion=St,Y.needsLights&&(Tt.ambientLightColor.value=$.state.ambient,Tt.lightProbe.value=$.state.probe,Tt.sunLights.value=$.state.sun,Tt.sunLightShadows.value=$.state.sunShadow,Tt.directionalLights.value=$.state.directional,Tt.directionalLightShadows.value=$.state.directionalShadow,Tt.spotLights.value=$.state.spot,Tt.spotLightShadows.value=$.state.spotShadow,Tt.rectAreaLights.value=$.state.rectArea,Tt.ltc_1.value=$.state.rectAreaLTC1,Tt.ltc_2.value=$.state.rectAreaLTC2,Tt.pointLights.value=$.state.point,Tt.pointLightShadows.value=$.state.pointShadow,Tt.hemisphereLights.value=$.state.hemi,Tt.sunShadowMatrix.value=$.state.sunShadowMatrix,Tt.sunShadowCascade.value=$.state.sunShadowCascade,Tt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Tt.spotLightMatrix.value=$.state.spotLightMatrix,Tt.spotLightMap.value=$.state.spotLightMap,Tt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=Zt,Y.uniformsList=null,Zt}function qh(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=Ds.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Xh(C,k){let j=Z.get(C);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Mp(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let j=0,Y=C.length;j<Y;j++){let $=C[j];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function wp(C,k,j,Y,$){k.isScene!==!0&&(k=Ke),tt.resetTextureUnits();let _t=k.fog,St=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,yt=V===null?N.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Jt.workingColorSpace,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,It=at.get(Y.envMap||St,At),qt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Zt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Tt=!!j.morphAttributes.position,ne=!!j.morphAttributes.normal,we=!!j.morphAttributes.color,de=wn;Y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(de=N.toneMapping);let le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Be=le!==void 0?le.length:0,bt=Z.get(Y),He=M.state.lights;if(Vt===!0&&(Ht===!0||C!==z)){let ue=C===z&&Y.id===D;Lt.setState(Y,C,ue)}let jt=!1;Y.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==He.state.version||bt.outputColorSpace!==yt||$.isBatchedMesh&&bt.batching===!1||!$.isBatchedMesh&&bt.batching===!0||$.isBatchedMesh&&bt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&bt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&bt.instancing===!1||!$.isInstancedMesh&&bt.instancing===!0||$.isSkinnedMesh&&bt.skinning===!1||!$.isSkinnedMesh&&bt.skinning===!0||$.isInstancedMesh&&bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&bt.instancingMorph===!1&&$.morphTexture!==null||bt.envMap!==It||Y.fog===!0&&bt.fog!==_t||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Lt.numPlanes||bt.numIntersection!==Lt.numIntersection)||bt.vertexAlphas!==qt||bt.vertexTangents!==Zt||bt.morphTargets!==Tt||bt.morphNormals!==ne||bt.morphColors!==we||bt.toneMapping!==de||bt.morphTargetsCount!==Be||!!bt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,bt.__version=Y.version);let un=bt.currentProgram;jt===!0&&(un=Qr(Y,k,$),T&&Y.isNodeMaterial&&T.onUpdateProgram(Y,un,bt));let Rn=!1,hi=!1,ns=!1,ae=un.getUniforms(),ve=bt.uniforms;if(b.useProgram(un.program)&&(Rn=!0,hi=!0,ns=!0),Y.id!==D&&(D=Y.id,hi=!0),bt.needsLights){let ue=Mp(M.state.lightProbeGridArray,$);bt.lightProbeGrid!==ue&&(bt.lightProbeGrid=ue,hi=!0)}if(Rn||z!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ae.setValue(H,"projectionMatrix",C.projectionMatrix),ae.setValue(H,"viewMatrix",C.matrixWorldInverse);let di=ae.map.cameraPosition;di!==void 0&&di.setValue(H,ce.setFromMatrixPosition(C.matrixWorld)),B.logarithmicDepthBuffer&&ae.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ae.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,hi=!0,ns=!0)}if(bt.needsLights&&(He.state.sunShadowMap.length>0&&ae.setValue(H,"sunShadowMap",He.state.sunShadowMap,tt),He.state.directionalShadowMap.length>0&&ae.setValue(H,"directionalShadowMap",He.state.directionalShadowMap,tt),He.state.spotShadowMap.length>0&&ae.setValue(H,"spotShadowMap",He.state.spotShadowMap,tt),He.state.pointShadowMap.length>0&&ae.setValue(H,"pointShadowMap",He.state.pointShadowMap,tt)),$.isSkinnedMesh){ae.setOptional(H,$,"bindMatrix"),ae.setOptional(H,$,"bindMatrixInverse");let ue=$.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),ae.setValue(H,"boneTexture",ue.boneTexture,tt))}$.isBatchedMesh&&(ae.setOptional(H,$,"batchingTexture"),ae.setValue(H,"batchingTexture",$._matricesTexture,tt),ae.setOptional(H,$,"batchingIdTexture"),ae.setValue(H,"batchingIdTexture",$._indirectTexture,tt),ae.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&ae.setValue(H,"batchingColorTexture",$._colorsTexture,tt));let ui=j.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&G.update($,j,un),(hi||bt.receiveShadow!==$.receiveShadow)&&(bt.receiveShadow=$.receiveShadow,ae.setValue(H,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(ve.envMapIntensity.value=k.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=s_()),hi){if(ae.setValue(H,"toneMappingExposure",N.toneMappingExposure),bt.needsLights&&Ep(ve,ns),_t&&Y.fog===!0&&Pt.refreshFogUniforms(ve,_t),Pt.refreshMaterialUniforms(ve,Y,Q,K,M.state.transmissionRenderTarget[C.id]),bt.needsLights&&bt.lightProbeGrid){let ue=bt.lightProbeGrid;ve.probesSH.value=ue.texture,ve.probesMin.value.copy(ue.boundingBox.min),ve.probesMax.value.copy(ue.boundingBox.max),ve.probesResolution.value.copy(ue.resolution)}Ds.upload(H,qh(bt),ve,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ds.upload(H,qh(bt),ve,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ae.setValue(H,"center",$.center),ae.setValue(H,"modelViewMatrix",$.modelViewMatrix),ae.setValue(H,"normalMatrix",$.normalMatrix),ae.setValue(H,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let ue=Y.uniformsGroups;for(let di=0,is=ue.length;di<is;di++){let $h=ue[di];st.update($h,un),st.bind($h,un)}}return un}function Ep(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ap(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,k,j){let Y=Z.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=k,Z.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){let j=Z.get(C);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,j=0){V=C,F=k,O=j;let Y=null,$=!1,_t=!1;if(C){let yt=Z.get(C);if(yt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,yt.__webglFramebuffer),W.copy(C.viewport),J.copy(C.scissor),ot=C.scissorTest,b.viewport(W),b.scissor(J),b.setScissorTest(ot),D=-1;return}else if(yt.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(yt.__hasExternalTextures)tt.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let qt=C.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&Z.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}let At=C.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);let It=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(It[k])?Y=It[k][j]:Y=It[k],$=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?Y=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(It)?Y=It[j]:Y=It,W.copy(C.viewport),J.copy(C.scissor),ot=C.scissorTest}else W.copy(rt).multiplyScalar(Q).floor(),J.copy(Bt).multiplyScalar(Q).floor(),ot=xe;if(j!==0&&(Y=E),b.bindFramebuffer(H.FRAMEBUFFER,Y)&&b.drawBuffers(C,Y),b.viewport(W),b.scissor(J),b.setScissorTest(ot),$){let yt=Z.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,j)}else if(_t){let yt=k;for(let At=0;At<C.textures.length;At++){let It=Z.get(C.textures[At]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+At,It.__webglTexture,j,yt)}}else if(C!==null&&j!==0){let yt=Z.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yt.__webglTexture,j)}D=-1};function Yh(C){let k=Z.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=B.textureFormatReadable(C.format),k.__typeReadable=B.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,j,Y,$,_t,St,yt=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){b.bindFramebuffer(H.FRAMEBUFFER,At);try{let It=C.textures[yt],qt=It.format,Zt=It.type;C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+yt);let Tt=Yh(It);if(Tt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&j>=0&&j<=C.height-$&&H.readPixels(k,j,Y,$,pt.convert(qt),pt.convert(Zt),_t)}finally{let It=V!==null?Z.get(V).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(C,k,j,Y,$,_t,St,yt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At)if(k>=0&&k<=C.width-Y&&j>=0&&j<=C.height-$){b.bindFramebuffer(H.FRAMEBUFFER,At);let It=C.textures[yt],qt=It.format,Zt=It.type;C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+yt);let Tt=Yh(It);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.bufferData(H.PIXEL_PACK_BUFFER,_t.byteLength,H.STREAM_READ),H.readPixels(k,j,Y,$,pt.convert(qt),pt.convert(Zt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let we=V!==null?Z.get(V).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,we);let de=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ed(H,de,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_t),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ne),H.deleteSync(de),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,j=0){let Y=Math.pow(2,-j),$=Math.floor(C.image.width*Y),_t=Math.floor(C.image.height*Y),St=k!==null?k.x:0,yt=k!==null?k.y:0;tt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,St,yt,$,_t),b.unbindTexture()},this.copyTextureToTexture=function(C,k,j=null,Y=null,$=0,_t=0){let St,yt,At,It,qt,Zt,Tt,ne,we,de=C.isCompressedTexture?C.mipmaps[_t]:C.image;if(j!==null)St=j.max.x-j.min.x,yt=j.max.y-j.min.y,At=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,qt=j.min.y,Zt=j.isBox3?j.min.z:0;else{let ve=Math.pow(2,-$);St=Math.floor(de.width*ve),yt=Math.floor(de.height*ve),C.isDataArrayTexture?At=de.depth:C.isData3DTexture?At=Math.floor(de.depth*ve):At=1,It=0,qt=0,Zt=0}Y!==null?(Tt=Y.x,ne=Y.y,we=Y.z):(Tt=0,ne=0,we=0);let le=pt.convert(k.format),Be=pt.convert(k.type),bt;k.isData3DTexture?(tt.setTexture3D(k,0),bt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),bt=H.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),bt=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let He=b.getParameter(H.UNPACK_ROW_LENGTH),jt=b.getParameter(H.UNPACK_IMAGE_HEIGHT),un=b.getParameter(H.UNPACK_SKIP_PIXELS),Rn=b.getParameter(H.UNPACK_SKIP_ROWS),hi=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,de.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,de.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,It),b.pixelStorei(H.UNPACK_SKIP_ROWS,qt),b.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);let ns=C.isDataArrayTexture||C.isData3DTexture,ae=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){let ve=Z.get(C),ui=Z.get(k),ue=Z.get(ve.__renderTarget),di=Z.get(ui.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,ue.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let is=0;is<At;is++)ns&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,$,Zt+is),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,_t,we+is)),H.blitFramebuffer(It,qt,St,yt,Tt,ne,St,yt,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Z.has(C)){let ve=Z.get(C),ui=Z.get(k);b.bindFramebuffer(H.READ_FRAMEBUFFER,w),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,P);for(let ue=0;ue<At;ue++)ns?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.__webglTexture,$,Zt+ue):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ve.__webglTexture,$),ae?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ui.__webglTexture,_t,we+ue):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ui.__webglTexture,_t),$!==0?H.blitFramebuffer(It,qt,St,yt,Tt,ne,St,yt,H.COLOR_BUFFER_BIT,H.NEAREST):ae?H.copyTexSubImage3D(bt,_t,Tt,ne,we+ue,It,qt,St,yt):H.copyTexSubImage2D(bt,_t,Tt,ne,It,qt,St,yt);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ae?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(bt,_t,Tt,ne,we,St,yt,At,le,Be,de.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(bt,_t,Tt,ne,we,St,yt,At,le,de.data):H.texSubImage3D(bt,_t,Tt,ne,we,St,yt,At,le,Be,de):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_t,Tt,ne,St,yt,le,Be,de.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_t,Tt,ne,de.width,de.height,le,de.data):H.texSubImage2D(H.TEXTURE_2D,_t,Tt,ne,St,yt,le,Be,de);b.pixelStorei(H.UNPACK_ROW_LENGTH,He),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt),b.pixelStorei(H.UNPACK_SKIP_PIXELS,un),b.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(H.UNPACK_SKIP_IMAGES,hi),_t===0&&k.generateMipmaps&&H.generateMipmap(bt),b.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){F=0,O=0,V=null,b.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var ul=class extends _e{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Xt(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Os=new q,of=new te,af=new te,lf=new q,cf=new q,dl=class{constructor(t={}){let e=this,n,i,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),of.copy(x.matrixWorldInverse),af.multiplyMatrices(x.projectionMatrix,of),h(p,p,x),this.sortObjects&&f(p)},this.setSize=function(p,x){n=p,i=x,r=n/2,o=i/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,g=p.children.length;x<g;x++)c(p.children[x])}function h(p,x,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Os.setFromMatrixPosition(p.matrixWorld),Os.applyMatrix4(af);let m=Os.z>=-1&&Os.z<=1&&p.layers.test(g.layers)===!0,_=p.element;if(_.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(e,x,g);let v=100*p.center.x,S=100*p.center.y;_.style.transformOrigin=`${v}% ${S}%`;let M=-p.rotation2D,L=Os.x*r+r,y=-Os.y*o+o;_.style.transform=`translate(${-v}%, ${-S}%) translate(${L}px, ${y}px) rotate(${M}rad)`,_.parentNode!==l&&l.appendChild(_),p.onAfterRender(e,x,g)}let R={distanceToCameraSquared:d(g,p)};a.objects.set(p,R)}for(let m=0,_=p.children.length;m<_;m++)h(p.children[m],x,g)}function d(p,x){return lf.setFromMatrixPosition(p.matrixWorld),cf.setFromMatrixPosition(x.matrixWorld),lf.distanceToSquared(cf)}function u(p){let x=[];return p.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function f(p){let x=u(p).sort(function(m,_){if(m.renderOrder!==_.renderOrder)return _.renderOrder-m.renderOrder;let R=a.objects.get(m).distanceToCameraSquared,v=a.objects.get(_).distanceToCameraSquared;return R-v}),g=x.length;for(let m=0,_=x.length;m<_;m++)x[m].element.style.zIndex=g-m}}};var hh=s=>s*Math.PI/180,r_=s=>s*180/Math.PI;function uh(s,t,e){let n=Math.tan(hh(s.fov)/2),i=Math.tan(hh(t.fov)/2),r=s.distance*n+(t.distance*i-s.distance*n)*e,o=Math.exp(Math.log(n)+(Math.log(i)-Math.log(n))*e);return{target:{x:s.target.x+(t.target.x-s.target.x)*e,y:s.target.y+(t.target.y-s.target.y)*e,z:s.target.z+(t.target.z-s.target.z)*e},distance:r/o,elevation:s.elevation+(t.elevation-s.elevation)*e,fov:r_(Math.atan(o)*2)}}function hf(s){return 2*s.distance*Math.tan(hh(s.fov)/2)}var dh=s=>s*Math.PI/180,uf={x:.94,y:.9},Ji=35;function df(s,t=s){let e;try{e=new ll({antialias:!0})}catch{return null}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.shadowMap.enabled=!0,s.appendChild(e.domElement);let n=new dl;Object.assign(n.domElement.style,{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden"}),s.appendChild(n.domElement);let i=new ar,r=new Ve(Ji,1,.1,2e3);i.add(new br(16777215,11579568,1.6));let o=new Mr(16777215,2.2);o.position.set(-8,22,12),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-5e-4,i.add(o);let a=.22,l=new Te(new ni(400,400),new xr({opacity:a,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,i.add(l);let c=1,h=null,d=new Xe,u=new Xe;d.add(u),i.add(d);let f=new Xe;i.add(f);let p={floor:null,cube:null,face:null},x=null,g=null,m=20,_=null,R="floor",v=null,S=new q;function M({target:D,distance:z,elevation:W,fov:J=Ji}){r.fov!==J&&(r.fov=J,r.updateProjectionMatrix());let ot=dh(W);r.position.set(D.x,D.y+Math.sin(ot)*z,D.z+Math.cos(ot)*z),r.lookAt(D),r.updateMatrixWorld()}let L=D=>({target:D.target.clone(),distance:D.distance,elevation:D.elevation,fov:D.fov??Ji});function y(){let{width:D,depth:z}=x,W=[];for(let Vt of[-D/2,D/2])for(let Ht of[0,2])for(let $t of[-z/2,z/2])W.push([Vt,Ht,$t]);let J={target:new q(0,.5,0),distance:100,elevation:Dl.elevation,fov:Ji},ot=Vt=>(M({...J,distance:Vt}),W.every(Ht=>(S.set(...Ht).project(r),Math.abs(S.x)<=uf.x&&Math.abs(S.y)<=uf.y))),lt=5,xt=400;for(let Vt=0;Vt<30;Vt++){let Ht=(lt+xt)/2;ot(Ht)?xt=Ht:lt=Ht}J.distance=xt;let Ct=-1+2*Dl.floorHeight,K=J.target.y,Q=0,ht=xt;for(let Vt=0;Vt<30;Vt++){let Ht=(Q+ht)/2;J.target.y=K+Ht,M(J),S.set(0,K,0).project(r),S.y>Ct?Q=Ht:ht=Ht}J.target.y=K+ht,M(J);let Mt=x.streamRadius??0,rt=[[-Mt,-Mt],[-Mt,Mt],[Mt,-Mt],[Mt,Mt]],Bt=1,xe=J.distance*4;for(let Vt=0;Vt<30;Vt++){let Ht=(Bt+xe)/2;Math.min(...rt.map(([ce,Se])=>S.set(ce,Ht-1,Se).project(r).y))>1.04?xe=Ht:Bt=Ht}m=xe+1.5;let Gt=Math.max(D,z)*.75;return Object.assign(o.shadow.camera,{left:-Gt,right:Gt,top:Gt,bottom:-Gt,near:1,far:90}),o.shadow.camera.updateProjectionMatrix(),J}function A(){let D=g.lookRadius*We.margin,z=dh(Ji),W=2*Math.atan(Math.tan(z/2)*r.aspect),J=D/Math.sin(Math.min(z,W)/2);return{target:new q(0,g.lookY,0),distance:J,elevation:We.elevation,fov:Ji}}function N(){let D=Ue.fov,z=g.edge/2*Ue.margin,W=Math.tan(dh(D)/2),J=Math.max(z/W,z/(W*r.aspect));return{target:new q(0,g.centreY,0),distance:J,elevation:0,fov:D}}function U(){let D=r.fov;r.fov=Ji,r.updateProjectionMatrix(),x&&(p.floor=y()),g&&(p.cube=A(),p.face=N()),r.fov=D,r.updateProjectionMatrix(),!v&&p[R]&&(_=L(p[R]),M(_))}function T(){let D=Math.max(1,t.clientWidth),z=Math.max(1,t.clientHeight),W=Math.max(1,s.clientWidth),J=Math.max(1,s.clientHeight),ot=t.getBoundingClientRect().top-s.getBoundingClientRect().top;e.setSize(W,J,!1),n.setSize(W,J),r.aspect=D/z,r.clearViewOffset(),r.updateProjectionMatrix(),U(),(W!==D||J!==z)&&(r.setViewOffset(D,z,0,-ot,W,J),r.updateProjectionMatrix())}let E=[];new ResizeObserver(()=>{T();for(let D of E)D()}).observe(s),T();let w=new Xt,P=!1;s.addEventListener("pointermove",D=>{let z=s.getBoundingClientRect();w.set((D.clientX-z.left)/z.width*2-1,-((D.clientY-z.top)/z.height)*2+1),P=!0}),s.addEventListener("pointerleave",()=>{P=!1});let F=new wr,O=new an(new q(0,1,0),-.5),V=new q;return{scene:i,camera:r,pivot:d,cubeGroup:u,faceGroup:f,labelParent:n.domElement,setArena(D){x=D,U()},setCubeFrame(D){g=D,U()},get spawnY(){return m},setClearColour:D=>e.setClearColor(D),stage(){let D=Math.max(1,t.clientWidth),z=Math.max(1,t.clientHeight);return{width:D,height:z,unitsPerPixel:p.face?hf(p.face)/z:.02}},onResize(D){E.push(D)},setView(D,z,W=1){if(v?.cancel(),R=D,!p[D]||!_)return Promise.resolve();let J=L(_),ot=W<1?uh(J,p[D],W):p[D];return v=fe({duration:z,easing:ie.inOutCubic,onUpdate:lt=>{let xt=uh(J,ot,lt);_={...xt,target:new q(xt.target.x,xt.target.y,xt.target.z)},M(_)}}),v.finished.then(lt=>{lt&&(v=null)})},fadeShadow(D,z){h?.cancel();let W=c;return W===D?Promise.resolve():(h=fe({duration:z,easing:ie.inOutQuad,onUpdate:J=>{c=W+(D-W)*J,l.material.opacity=a*c}}),h.finished.then(()=>{}))},pointerNdc(){return P?{x:w.x,y:w.y}:null},floorPoint(){return P?(F.setFromCamera(w,r),F.ray.intersectPlane(O,V)?{x:V.x,z:V.z}:null):null},toStage(D){let z=new q(D.x,D.y,D.z).applyMatrix4(u.matrixWorld).project(r);if(z.z>1)return null;let W=s.getBoundingClientRect(),J=t.getBoundingClientRect();return{depth:z.z,x:(z.x+1)/2*W.width+W.left-J.left,y:(1-z.y)/2*W.height+W.top-J.top}},render(){e.render(i,r),n.render(i,r)}}}var Pi=class s{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new I);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new I);let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new s);let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],p=n[8],x=i[0],g=i[1],m=i[2],_=i[3],R=i[4],v=i[5],S=i[6],M=i[7],L=i[8];return r[0]=o*x+a*_+l*S,r[1]=o*g+a*R+l*M,r[2]=o*m+a*v+l*L,r[3]=c*x+h*_+d*S,r[4]=c*g+h*R+d*M,r[5]=c*m+h*v+d*L,r[6]=u*x+f*_+p*S,r[7]=u*g+f*R+p*M,r[8]=u*m+f*v+p*L,e}scale(t,e){e===void 0&&(e=new s);let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new I);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){let f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new s);let e=3,n=6,i=o_,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,l=a,c,h=n,d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){let u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{let u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{let u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,p=i*l,x=r*o,g=r*a,m=r*l,_=this.elements;return _[0]=1-(u+p),_[1]=h-m,_[2]=d+g,_[3]=h+m,_[4]=1-(c+p),_[5]=f-x,_[6]=d-g,_[7]=f+x,_[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new s);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},o_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],I=class s{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new s);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new s(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new s(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Pi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new s),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new s),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=a_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=l_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(ff),ff.almostEquals(t,e)}clone(){return new s(this.x,this.y,this.z)}};I.ZERO=new I(0,0,0);I.UNIT_X=new I(1,0,0);I.UNIT_Y=new I(0,1,0);I.UNIT_Z=new I(0,0,1);var a_=new I,l_=new I,ff=new I,hn=class s{constructor(t){t===void 0&&(t={}),this.lowerBound=new I,this.upperBound=new I,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,pf),c=pf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=mf,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=mf,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(p<0||f>p)}},pf=new I,mf=[new I,new I,new I,new I,new I,new I,new I,new I],yl=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},_l=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}},Je=class s{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new I),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=c_,i=h_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new I);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,f=-o*n-a*i-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,p,x,g;return f=i*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),p=Math.sin(u),x=Math.sin((1-e)*u)/p,g=Math.sin(e*u)/p):(x=1-e,g=e),n.x=x*i+g*l,n.y=x*r+g*c,n.z=x*o+g*h,n.w=x*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new s);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}},c_=new I,h_=new I,u_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Et=class s{constructor(t){t===void 0&&(t={}),this.id=s.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Et.idCounter=0;Et.types=u_;var re=class s{constructor(t){t===void 0&&(t={}),this.position=new I,this.quaternion=new Je,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new I),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new I),n.vsub(t,i),e.conjugate(gf),gf.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new I),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new I),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new I),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},gf=new Je,_h=class s extends Et{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:Et.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new I;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new I;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){let r=new I,o=new I;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){let h=new I,d=-1,u=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),r.vmult(h,h);let x=h.dot(o);x>u&&(u=x,d=p)}let f=[];for(let p=0;p<n.faces[d].length;p++){let x=n.vertices[n.faces[d][p]],g=new I;g.copy(x),r.vmult(g,g),i.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){let c=new I,h=new I,d=new I,u=new I,f=new I,p=new I,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let m=0;m!==g.uniqueAxes.length;m++){n.vmult(g.uniqueAxes[m],c);let _=g.testSepAxis(c,t,e,n,i,r);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}else{let m=a?a.length:g.faces.length;for(let _=0;_<m;_++){let R=a?a[_]:_;c.copy(g.faceNormals[R]),n.vmult(c,c);let v=g.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){r.vmult(t.uniqueAxes[m],h);let _=g.testSepAxis(h,t,e,n,i,r);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}else{let m=l?l.length:t.faces.length;for(let _=0;_<m;_++){let R=l?l[_]:_;h.copy(t.faceNormals[R]),r.vmult(h,h);let v=g.testSepAxis(h,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}}for(let m=0;m!==g.uniqueEdges.length;m++){n.vmult(g.uniqueEdges[m],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],f),u.cross(f,p),!p.almostZero()){p.normalize();let R=g.testSepAxis(p,t,e,n,i,r);if(R===!1)return!1;R<x&&(x=R,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){let a=this;s.project(a,t,n,i,fh),s.project(e,t,r,o,ph);let l=fh[0],c=fh[1],h=ph[0],d=ph[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new I,i=new I;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){let l=new I,c=new I,h=new I,d=new I,u=new I,f=new I,p=new I,x=new I,g=this,m=[],_=i,R=m,v=-1,S=Number.MAX_VALUE;for(let N=0;N<g.faces.length;N++){l.copy(g.faceNormals[N]),n.vmult(l,l);let U=l.dot(t);U<S&&(S=U,v=N)}if(v<0)return;let M=g.faces[v];M.connectedFaces=[];for(let N=0;N<g.faces.length;N++)for(let U=0;U<g.faces[N].length;U++)M.indexOf(g.faces[N][U])!==-1&&N!==v&&M.connectedFaces.indexOf(N)===-1&&M.connectedFaces.push(N);let L=M.length;for(let N=0;N<L;N++){let U=g.vertices[M[N]],T=g.vertices[M[(N+1)%L]];U.vsub(T,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(U),n.vmult(f,f),e.vadd(f,f);let E=M.connectedFaces[N];p.copy(this.faceNormals[E]);let w=this.getPlaneConstantOfFace(E);x.copy(p),n.vmult(x,x);let P=w-x.dot(e);for(this.clipFaceAgainstPlane(_,R,x,P);_.length;)_.shift();for(;R.length;)_.push(R.shift())}p.copy(this.faceNormals[v]);let y=this.getPlaneConstantOfFace(v);x.copy(p),n.vmult(x,x);let A=y-x.dot(e);for(let N=0;N<_.length;N++){let U=x.dot(_[N])+A;if(U<=r&&(console.log(`clamped: depth=${U} to minDist=${r}`),U=r),U<=o){let T=_[N];if(U<=1e-6){let E={point:T,normal:x,depth:U};a.push(E)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){let d=new I;d.copy(c),e.push(d)}else{let d=new I;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){let d=new I;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new I);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new I);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let r=this.vertices,o,a,l,c,h,d,u=new I;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let p=u;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new I);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){let o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=i[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new I;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a],c=e[n[a][0]],h=new I;t.vsub(c,h);let d=l.dot(h),u=new I;o.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,i,r){let o=t.vertices.length,a=f_,l=0,c=0,h=p_,d=t.vertices;h.setZero(),re.vectorToLocalFrame(n,i,e,a),re.pointToLocalFrame(n,i,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},fh=[],ph=[],d_=new I,f_=new I,p_=new I,Hr=class s extends Et{constructor(t){super({type:Et.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=I,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new _h({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new I),s.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Ii.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ii,Ii),t.vadd(Ii,Ii),n(Ii.x,Ii.y,Ii.z)}calculateWorldAABB(t,e,n,i){let r=this.halfExtents;kn[0].set(r.x,r.y,r.z),kn[1].set(-r.x,r.y,r.z),kn[2].set(-r.x,-r.y,r.z),kn[3].set(-r.x,-r.y,-r.z),kn[4].set(r.x,-r.y,-r.z),kn[5].set(r.x,r.y,-r.z),kn[6].set(-r.x,r.y,-r.z),kn[7].set(r.x,-r.y,r.z);let o=kn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=kn[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},Ii=new I,kn=[new I,new I,new I,new I,new I,new I,new I,new I],Ih={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ph={AWAKE:0,SLEEPY:1,SLEEPING:2},zt=class s extends _l{constructor(t){t===void 0&&(t={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new I,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new I,this.previousPosition=new I,this.interpolatedPosition=new I,this.initPosition=new I,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new I,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new I,this.force=new I;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?s.STATIC:s.DYNAMIC,typeof t.type==typeof s.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new I,this.quaternion=new Je,this.initQuaternion=new Je,this.previousQuaternion=new Je,this.interpolatedQuaternion=new Je,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new I,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new I,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new I,this.invInertia=new I,this.invInertiaWorld=new Pi,this.invMassSolve=0,this.invInertiaSolve=new I,this.invInertiaWorldSolve=new Pi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new I(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new I(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new hn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new I,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,t===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(s.sleepyEvent)):e===s.SLEEPY&&n>i?this.wakeUp():e===s.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new I),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new I),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new I),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new I),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new I,r=new Je;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=m_,o=g_,a=this.quaternion,l=this.aabb,c=x_;for(let h=0;h!==i;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=y_,i=__;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new I),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=b_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new I),this.type!==s.DYNAMIC)return;let n=S_,i=M_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new I),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=e,i=w_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=E_;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new I),this.type!==s.DYNAMIC)return;let n=A_,i=T_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=C_;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Hr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new I;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;let p=d.elements,x=this.angularFactor,g=l.x*x.x,m=l.y*x.y,_=l.z*x.z;r.x+=t*(p[0]*g+p[1]*m+p[2]*_),r.y+=t*(p[3]*g+p[4]*m+p[5]*_),r.z+=t*(p[6]*g+p[7]*m+p[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};zt.idCounter=0;zt.COLLIDE_EVENT_NAME="collide";zt.DYNAMIC=Ih.DYNAMIC;zt.STATIC=Ih.STATIC;zt.KINEMATIC=Ih.KINEMATIC;zt.AWAKE=Ph.AWAKE;zt.SLEEPY=Ph.SLEEPY;zt.SLEEPING=Ph.SLEEPING;zt.wakeupEvent={type:"wakeup"};zt.sleepyEvent={type:"sleepy"};zt.sleepEvent={type:"sleep"};var m_=new I,g_=new Je,x_=new hn,y_=new Pi,__=new Pi,v_=new Pi,b_=new I,S_=new I,M_=new I,w_=new I,E_=new I,A_=new I,T_=new I,C_=new I,vh=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&zt.STATIC)!==0||t.sleepState===zt.SLEEPING)&&((e.type&zt.STATIC)!==0||e.sleepState===zt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=R_;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=I_,i=P_,r=L_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new I;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},R_=new I;new I;new Je;new I;var I_={keys:[]},P_=[],L_=[];new I;var L1=new I;new I;var bh=class extends vh{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},ks=class{constructor(){this.rayFromWorld=new I,this.rayToWorld=new I,this.hitNormalWorld=new I,this.hitPointWorld=new I,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},Cf,Rf,If,Pf,Lf,Nf,Ff,Lh={CLOSEST:1,ANY:2,ALL:4};Cf=Et.types.SPHERE;Rf=Et.types.PLANE;If=Et.types.BOX;Pf=Et.types.CYLINDER;Lf=Et.types.CONVEXPOLYHEDRON;Nf=Et.types.HEIGHTFIELD;Ff=Et.types.TRIMESH;var xn=class s{get[Cf](){return this._intersectSphere}get[Rf](){return this._intersectPlane}get[If](){return this._intersectBox}get[Pf](){return this._intersectConvex}get[Lf](){return this._intersectConvex}get[Nf](){return this._intersectHeightfield}get[Ff](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new I),e===void 0&&(e=new I),this.from=t.clone(),this.to=e.clone(),this.direction=new I,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new ks,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||s.ANY,this.result=e.result||new ks,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(xf),mh.length=0,t.broadphase.aabbQuery(t,xf,mh),this.intersectBodies(mh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=N_,r=F_;for(let o=0,a=t.shapes.length;o<a;o++){let l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(J_(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,l=this.direction,c=new I(0,0,1);e.vmult(c,c);let h=new I;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new I,x=new I,g=new I;o.vsub(n,p);let m=-c.dot(p)/f;l.scale(m,x),o.vadd(x,g),this.reportIntersection(c,g,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;let o=D_;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=B_,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new hn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),re.pointToWorldFrame(n,e,t.pillarOffset,fl),this._intersectConvex(t.pillarConvex,e,fl,i,r,yf),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),re.pointToWorldFrame(n,e,t.pillarOffset,fl),this._intersectConvex(t.pillarConvex,e,fl,i,r,yf)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=U_,p=O_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1);else{let x=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=z_,l=_f,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,p=this.from,x=this.to,g=p.distanceTo(x),m=c?c.length:h.length,_=this.result;for(let R=0;!_.shouldStop&&R<m;R++){let v=c?c[R]:R,S=h[v],M=u[v],L=e,y=n;l.copy(d[S[0]]),L.vmult(l,l),l.vadd(y,l),l.vsub(p,l),L.vmult(M,a);let A=f.dot(a);if(Math.abs(A)<this.precision)continue;let N=a.dot(l)/A;if(!(N<0)){f.scale(N,en),en.vadd(p,en),Tn.copy(d[S[0]]),L.vmult(Tn,Tn),y.vadd(Tn,Tn);for(let U=1;!_.shouldStop&&U<S.length-1;U++){Gn.copy(d[S[U]]),Hn.copy(d[S[U+1]]),L.vmult(Gn,Gn),L.vmult(Hn,Hn),y.vadd(Gn,Gn),y.vadd(Hn,Hn);let T=en.distanceTo(p);!(s.pointInTriangle(en,Tn,Gn,Hn)||s.pointInTriangle(en,Gn,Tn,Hn))||T>g||this.reportIntersection(a,en,r,i,v)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=G_,l=$_,c=Z_,h=_f,d=H_,u=W_,f=q_,p=Y_,x=X_,g=t.indices;t.vertices;let m=this.from,_=this.to,R=this.direction;c.position.copy(n),c.quaternion.copy(e),re.vectorToLocalFrame(n,e,R,d),re.pointToLocalFrame(n,e,m,u),re.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let v=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let S=0,M=l.length;!this.result.shouldStop&&S!==M;S++){let L=l[S];t.getNormal(L,a),t.getVertex(g[L*3],Tn),Tn.vsub(u,h);let y=d.dot(a),A=a.dot(h)/y;if(A<0)continue;d.scale(A,en),en.vadd(u,en),t.getVertex(g[L*3+1],Gn),t.getVertex(g[L*3+2],Hn);let N=en.distanceSquared(u);!(s.pointInTriangle(en,Gn,Tn,Hn)||s.pointInTriangle(en,Tn,Gn,Hn))||N>v||(re.vectorToWorldFrame(e,a,x),re.pointToWorldFrame(n,e,en,p),this.reportIntersection(x,p,r,i,L))}l.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case s.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case s.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ji),n.vsub(e,zr),t.vsub(e,gh);let r=ji.dot(ji),o=ji.dot(zr),a=ji.dot(gh),l=zr.dot(zr),c=zr.dot(gh),h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}};xn.CLOSEST=Lh.CLOSEST;xn.ANY=Lh.ANY;xn.ALL=Lh.ALL;var xf=new hn,mh=[],zr=new I,gh=new I,N_=new I,F_=new Je,en=new I,Tn=new I,Gn=new I,Hn=new I;new I;new ks;var yf={faceList:[0]},fl=new I,D_=new xn,B_=[],U_=new I,O_=new I,z_=new I,V_=new I,k_=new I,_f=new I,G_=new I,H_=new I,W_=new I,q_=new I,X_=new I,Y_=new I;new hn;var $_=[],Z_=new re,ji=new I,pl=new I;function J_(s,t,e){e.vsub(s,ji);let n=ji.dot(t);return t.scale(n,pl),pl.vadd(s,pl),e.distanceTo(pl)}var vl=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Sh=class s{constructor(t,e,n){n===void 0&&(n={}),n=vl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Sh.idCounter=0;var bl=class{constructor(){this.spatial=new I,this.rotational=new I}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Wr=class s{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new bl,this.jacobianElementB=new bl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,vf),a.scale(h,bf),n.invInertiaWorldSolve.vmult(o,Sf),i.invInertiaWorldSolve.vmult(l,Mf),t.multiplyVectors(vf,Sf)+e.multiplyVectors(bf,Mf)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve,c=r+o;return a.vmult(t.rotational,ml),c+=ml.dot(t.rotational),l.vmult(e.rotational,ml),c+=ml.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=K_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Wr.idCounter=0;var vf=new I,bf=new I,Sf=new I,Mf=new I,ml=new I,K_=new I,Mh=class extends Wr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new I,this.rj=new I,this.ni=new I}computeB(t){let e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=j_,c=Q_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=tv,x=this.jacobianElementA,g=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(x.spatial),l.negate(x.rotational),g.spatial.copy(m),g.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);let _=m.dot(p),R=this.restitution+1,v=R*u.dot(m)-R*h.dot(m)+f.dot(c)-d.dot(l),S=this.computeGiMf();return-_*e-v*n-t*S}getImpactVelocityAlongNormal(){let t=ev,e=nv,n=iv,i=sv,r=rv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}},j_=new I,Q_=new I,tv=new I,ev=new I,nv=new I,iv=new I,sv=new I,rv=new I;var N1=new I,F1=new I;var D1=new I,B1=new I;new I;new I;var U1=new I,O1=new I;var z1=new I,V1=new I,Sl=class extends Wr{constructor(t,e,n){super(t,e,-n,n),this.ri=new I,this.rj=new I,this.t=new I}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=ov,o=av,a=this.t;n.cross(a,r),i.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},ov=new I,av=new I,Gs=class s{constructor(t,e,n){n=vl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Gs.idCounter=0;var Hs=class s{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=s.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Hs.idCounter=0;var k1=new I,G1=new I,H1=new I,W1=new I,q1=new I,X1=new I,Y1=new I,$1=new I,Z1=new I,J1=new I,K1=new I;var j1=new I,Q1=new I;new I;new I;new I;var tE=new I,eE=new I,nE=new I;new xn;new I;var iE=new I,sE=new I,rE=[new I(1,0,0),new I(0,1,0),new I(0,0,1)],oE=new I;var aE=new I,lE=new I,cE=new I;var hE=new I,uE=new I,dE=new I,fE=new I;var pE=new I,mE=new I,gE=new I;var xE=new I,yE=new I;var _E=new I,vE=new I,bE=new I,SE=new I,ME=new I,wE=new I,EE=new I;var qr=class extends Et{constructor(){super({type:Et.types.PLANE}),this.worldNormal=new I,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){let e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new I),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){si.set(0,0,1),e.vmult(si,si);let r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),si.x===1?i.x=t.x:si.x===-1&&(n.x=t.x),si.y===1?i.y=t.y:si.y===-1&&(n.y=t.y),si.z===1?i.z=t.z:si.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},si=new I;var AE=new I,TE=new I,CE=new I,RE=new I,IE=new I,PE=new I,LE=new I,NE=new I,FE=new I;var DE=new I,BE=new hn;var UE=new I,OE=new hn,zE=new I,VE=new I,kE=new I,GE=new I,HE=new I,WE=new I,qE=new I,XE=new hn,YE=new I,$E=new re,ZE=new hn,wh=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Eh=class extends wh{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t,d,u,f,p,x,g;if(a!==0)for(let v=0;v!==c;v++)l[v].updateSolveMassProperties();let m=cv,_=hv,R=lv;m.length=a,_.length=a,R.length=a;for(let v=0;v!==a;v++){let S=o[v];R[v]=0,_[v]=S.computeB(h),m[v]=1/S.computeC()}if(a!==0){for(let M=0;M!==c;M++){let L=l[M],y=L.vlambda,A=L.wlambda;y.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let M=0;M!==a;M++){let L=o[M];d=_[M],u=m[M],g=R[M],x=L.computeGWlambda(),f=u*(d-x-L.eps*g),g+f<L.minForce?f=L.minForce-g:g+f>L.maxForce&&(f=L.maxForce-g),R[M]+=f,p+=f>0?f:-f,L.addToWlambda(f)}if(p*p<r)break}for(let M=0;M!==c;M++){let L=l[M],y=L.velocity,A=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),y.vadd(L.vlambda,y),L.wlambda.vmul(L.angularFactor,L.wlambda),A.vadd(L.wlambda,A)}let v=o.length,S=1/h;for(;v--;)o[v].multiplier=R[v]*S}return n}},lv=[],cv=[],hv=[];var JE=zt.STATIC;var Ah=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},Th=class extends Ah{constructor(){super(...arguments),this.type=I}constructObject(){return new I}},me={sphereSphere:Et.types.SPHERE,spherePlane:Et.types.SPHERE|Et.types.PLANE,boxBox:Et.types.BOX|Et.types.BOX,sphereBox:Et.types.SPHERE|Et.types.BOX,planeBox:Et.types.PLANE|Et.types.BOX,convexConvex:Et.types.CONVEXPOLYHEDRON,sphereConvex:Et.types.SPHERE|Et.types.CONVEXPOLYHEDRON,planeConvex:Et.types.PLANE|Et.types.CONVEXPOLYHEDRON,boxConvex:Et.types.BOX|Et.types.CONVEXPOLYHEDRON,sphereHeightfield:Et.types.SPHERE|Et.types.HEIGHTFIELD,boxHeightfield:Et.types.BOX|Et.types.HEIGHTFIELD,convexHeightfield:Et.types.CONVEXPOLYHEDRON|Et.types.HEIGHTFIELD,sphereParticle:Et.types.PARTICLE|Et.types.SPHERE,planeParticle:Et.types.PLANE|Et.types.PARTICLE,boxParticle:Et.types.BOX|Et.types.PARTICLE,convexParticle:Et.types.PARTICLE|Et.types.CONVEXPOLYHEDRON,cylinderCylinder:Et.types.CYLINDER,sphereCylinder:Et.types.SPHERE|Et.types.CYLINDER,planeCylinder:Et.types.PLANE|Et.types.CYLINDER,boxCylinder:Et.types.BOX|Et.types.CYLINDER,convexCylinder:Et.types.CONVEXPOLYHEDRON|Et.types.CYLINDER,heightfieldCylinder:Et.types.HEIGHTFIELD|Et.types.CYLINDER,particleCylinder:Et.types.PARTICLE|Et.types.CYLINDER,sphereTrimesh:Et.types.SPHERE|Et.types.TRIMESH,planeTrimesh:Et.types.PLANE|Et.types.TRIMESH},Ch=class{get[me.sphereSphere](){return this.sphereSphere}get[me.spherePlane](){return this.spherePlane}get[me.boxBox](){return this.boxBox}get[me.sphereBox](){return this.sphereBox}get[me.planeBox](){return this.planeBox}get[me.convexConvex](){return this.convexConvex}get[me.sphereConvex](){return this.sphereConvex}get[me.planeConvex](){return this.planeConvex}get[me.boxConvex](){return this.boxConvex}get[me.sphereHeightfield](){return this.sphereHeightfield}get[me.boxHeightfield](){return this.boxHeightfield}get[me.convexHeightfield](){return this.convexHeightfield}get[me.sphereParticle](){return this.sphereParticle}get[me.planeParticle](){return this.planeParticle}get[me.boxParticle](){return this.boxParticle}get[me.convexParticle](){return this.convexParticle}get[me.cylinderCylinder](){return this.convexConvex}get[me.sphereCylinder](){return this.sphereConvex}get[me.planeCylinder](){return this.planeConvex}get[me.boxCylinder](){return this.boxConvex}get[me.convexCylinder](){return this.convexConvex}get[me.heightfieldCylinder](){return this.heightfieldCylinder}get[me.particleCylinder](){return this.particleCylinder}get[me.sphereTrimesh](){return this.sphereTrimesh}get[me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Th,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Mh(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,x=p.length?p.pop():new Sl(n,i,u*f),g=p.length?p.pop():new Sl(n,i,u*f);return x.bi=g.bi=n,x.bj=g.bj=i,x.minForce=g.minForce=-u*f,x.maxForce=g.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ki.setZero(),zs.setZero(),Vs.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ki.vadd(e.ni,Ki),zs.vadd(e.ri,zs),Vs.vadd(e.rj,Vs)):(Ki.vsub(e.ni,Ki),zs.vadd(e.rj,zs),Vs.vadd(e.ri,Vs));let o=1/t;zs.scale(o,n.ri),Vs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ki.normalize(),Ki.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let l=fv,c=pv,h=uv,d=dv;for(let u=0,f=t.length;u!==f;u++){let p=t[u],x=e[u],g=null;p.material&&x.material&&(g=n.getContactMaterial(p.material,x.material)||null);let m=p.type&zt.KINEMATIC&&x.type&zt.STATIC||p.type&zt.STATIC&&x.type&zt.KINEMATIC||p.type&zt.KINEMATIC&&x.type&zt.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],h),h.vadd(p.position,h);let R=p.shapes[_];for(let v=0;v<x.shapes.length;v++){x.quaternion.mult(x.shapeOrientations[v],c),x.quaternion.vmult(x.shapeOffsets[v],d),d.vadd(x.position,d);let S=x.shapes[v];if(!(R.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&R.collisionFilterGroup)||h.distanceTo(d)>R.boundingSphereRadius+S.boundingSphereRadius)continue;let M=null;R.material&&S.material&&(M=n.getContactMaterial(R.material,S.material)||null),this.currentContactMaterial=M||g||n.defaultContactMaterial;let L=R.type|S.type,y=this[L];if(y){let A=!1;R.type<S.type?A=y.call(this,R,S,h,d,l,c,p,x,R,S,m):A=y.call(this,S,R,d,h,c,l,x,p,R,S,m),A&&m&&(n.shapeOverlapKeeper.set(R.id,S.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,gl),u.ni.scale(u.ni.dot(gl),wf),gl.vsub(wf,u.rj),-gl.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,p=u.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){let u=this.v3pool,f=Vv;n.vsub(i,xl),e.getSideNormals(f,o);let p=t.radius,x=!1,g=Gv,m=Hv,_=Wv,R=null,v=0,S=0,M=0,L=null;for(let F=0,O=f.length;F!==O&&x===!1;F++){let V=Uv;V.copy(f[F]);let D=V.length();V.normalize();let z=xl.dot(V);if(z<D+p&&z>0){let W=Ov,J=zv;W.copy(f[(F+1)%3]),J.copy(f[(F+2)%3]);let ot=W.length(),lt=J.length();W.normalize(),J.normalize();let xt=xl.dot(W),Ct=xl.dot(J);if(xt<ot&&xt>-ot&&Ct<lt&&Ct>-lt){let K=Math.abs(z-D-p);if((L===null||K<L)&&(L=K,S=xt,M=Ct,R=D,g.copy(V),m.copy(W),_.copy(J),v++,d))return!0}}}if(v){x=!0;let F=this.createContactEquation(a,l,t,e,c,h);g.scale(-p,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(R,g),m.scale(S,m),g.vadd(m,g),_.scale(M,_),g.vadd(_,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let y=u.get(),A=kv;for(let F=0;F!==2&&!x;F++)for(let O=0;O!==2&&!x;O++)for(let V=0;V!==2&&!x;V++)if(y.set(0,0,0),F?y.vadd(f[0],y):y.vsub(f[0],y),O?y.vadd(f[1],y):y.vsub(f[1],y),V?y.vadd(f[2],y):y.vsub(f[2],y),i.vadd(y,A),A.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;x=!0;let D=this.createContactEquation(a,l,t,e,c,h);D.ri.copy(A),D.ri.normalize(),D.ni.copy(D.ri),D.ri.scale(p,D.ri),D.rj.copy(y),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}u.release(y),y=null;let N=u.get(),U=u.get(),T=u.get(),E=u.get(),w=u.get(),P=f.length;for(let F=0;F!==P&&!x;F++)for(let O=0;O!==P&&!x;O++)if(F%3!==O%3){f[O].cross(f[F],N),N.normalize(),f[F].vadd(f[O],U),T.copy(n),T.vsub(U,T),T.vsub(i,T);let V=T.dot(N);N.scale(V,E);let D=0;for(;D===F%3||D===O%3;)D++;w.copy(n),w.vsub(E,w),w.vsub(U,w),w.vsub(i,w);let z=Math.abs(V),W=w.length();if(z<f[D].length()&&W<p){if(d)return!0;x=!0;let J=this.createContactEquation(a,l,t,e,c,h);U.vadd(E,J.rj),J.rj.copy(J.rj),w.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(p,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(N,U,T,E,w)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,f){let p=rb;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,p,u,f)){let x=[],g=ob;t.clipAgainstHull(n,r,e,i,o,p,-100,100,x);let m=0;for(let _=0;_!==x.length;_++){if(d)return!0;let R=this.createContactEquation(a,l,t,e,c,h),v=R.ri,S=R.rj;p.negate(R.ni),x[_].normal.negate(g),g.scale(x[_].depth,g),x[_].point.vadd(g,v),S.copy(x[_].point),v.vsub(n,v),S.vsub(i,S),v.vadd(n,v),v.vsub(a.position,v),S.vadd(i,S),S.vsub(l.position,S),this.result.push(R),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(R,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){let u=this.v3pool;n.vsub(i,qv);let f=e.faceNormals,p=e.faces,x=e.vertices,g=t.radius,m=!1;for(let _=0;_!==x.length;_++){let R=x[_],v=Zv;o.vmult(R,v),i.vadd(v,v);let S=$v;if(v.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;m=!0;let M=this.createContactEquation(a,l,t,e,c,h);M.ri.copy(S),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(g,M.ri),v.vsub(i,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let _=0,R=p.length;_!==R&&m===!1;_++){let v=f[_],S=p[_],M=Jv;o.vmult(v,M);let L=Kv;o.vmult(x[S[0]],L),L.vadd(i,L);let y=jv;M.scale(-g,y),n.vadd(y,y);let A=Qv;y.vsub(L,A);let N=A.dot(M),U=tb;if(n.vsub(L,U),N<0&&U.dot(M)>0){let T=[];for(let E=0,w=S.length;E!==w;E++){let P=u.get();o.vmult(x[S[E]],P),i.vadd(P,P),T.push(P)}if(Bv(T,M,n)){if(d)return!0;m=!0;let E=this.createContactEquation(a,l,t,e,c,h);M.scale(-g,E.ri),M.negate(E.ni);let w=u.get();M.scale(-N,w);let P=u.get();M.scale(-g,P),n.vsub(i,E.rj),E.rj.vadd(P,E.rj),E.rj.vadd(w,E.rj),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),u.release(w),u.release(P),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);for(let F=0,O=T.length;F!==O;F++)u.release(T[F]);return}else for(let E=0;E!==S.length;E++){let w=u.get(),P=u.get();o.vmult(x[S[(E+1)%S.length]],w),o.vmult(x[S[(E+2)%S.length]],P),i.vadd(w,w),i.vadd(P,P);let F=Xv;P.vsub(w,F);let O=Yv;F.unit(O);let V=u.get(),D=u.get();n.vsub(w,D);let z=D.dot(O);O.scale(z,V),V.vadd(w,V);let W=u.get();if(V.vsub(n,W),z>0&&z*z<F.lengthSquared()&&W.lengthSquared()<g*g){if(d)return!0;let J=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,J.rj),V.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(g,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(l.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let ot=0,lt=T.length;ot!==lt;ot++)u.release(T[ot]);u.release(w),u.release(P),u.release(V),u.release(W),u.release(D);return}u.release(w),u.release(P),u.release(V),u.release(W),u.release(D)}for(let E=0,w=T.length;E!==w;E++)u.release(T[E])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){let u=eb,f=nb;f.set(0,0,1),r.vmult(f,f);let p=0,x=ib;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;let _=this.createContactEquation(a,l,t,e,c,h),R=sb;f.scale(f.dot(x),R),u.vsub(R,R),R.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){let u=e.data,f=t.radius,p=e.elementSize,x=yb,g=xb;re.pointToLocalFrame(i,o,n,g);let m=Math.floor((g.x-f)/p)-1,_=Math.ceil((g.x+f)/p)+1,R=Math.floor((g.y-f)/p)-1,v=Math.ceil((g.y+f)/p)+1;if(_<0||v<0||m>u.length||R>u[0].length)return;m<0&&(m=0),_<0&&(_=0),R<0&&(R=0),v<0&&(v=0),m>=u.length&&(m=u.length-1),_>=u.length&&(_=u.length-1),v>=u[0].length&&(v=u[0].length-1),R>=u[0].length&&(R=u[0].length-1);let S=[];e.getRectMinMax(m,R,_,v,S);let M=S[0],L=S[1];if(g.z-f>L||g.z+f<M)return;let y=this.result;for(let A=m;A<_;A++)for(let N=R;N<v;N++){let U=y.length,T=!1;if(e.getConvexTrianglePillar(A,N,!1),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(T=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&T||(e.getConvexTrianglePillar(A,N,!0),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(T=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&T))return!0;if(y.length-U>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){let u=e.data,f=e.elementSize,p=t.boundingSphereRadius,x=mb,g=gb,m=pb;re.pointToLocalFrame(i,o,n,m);let _=Math.floor((m.x-p)/f)-1,R=Math.ceil((m.x+p)/f)+1,v=Math.floor((m.y-p)/f)-1,S=Math.ceil((m.y+p)/f)+1;if(R<0||S<0||_>u.length||v>u[0].length)return;_<0&&(_=0),R<0&&(R=0),v<0&&(v=0),S<0&&(S=0),_>=u.length&&(_=u.length-1),R>=u.length&&(R=u.length-1),S>=u[0].length&&(S=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let M=[];e.getRectMinMax(_,v,R,S,M);let L=M[0],y=M[1];if(!(m.z-p>y||m.z+p<L))for(let A=_;A<R;A++)for(let N=v;N<S;N++){let U=!1;if(e.getConvexTrianglePillar(A,N,!1),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,g,null)),d&&U||(e.getConvexTrianglePillar(A,N,!0),re.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,g,null)),d&&U))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){let u=hb;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let p=this.createContactEquation(l,a,e,t,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(t.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){let u=ab;u.set(0,0,1),a.quaternion.vmult(u,u);let f=lb;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,e,t,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=cb;u.scale(u.dot(i),g),i.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1,f=db,p=fb,x=null,g=ub;if(g.copy(i),g.vsub(n,g),r.conjugate(Ef),Ef.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let m=0,_=t.faces.length;m!==_;m++){let R=[t.worldVertices[t.faces[m][0]]],v=t.worldFaceNormals[m];i.vsub(R[0],Af);let S=-v.dot(Af);if(x===null||Math.abs(S)<Math.abs(x)){if(d)return!0;x=S,u=m,f.copy(v)}}if(u!==-1){let m=this.createContactEquation(l,a,e,t,c,h);f.scale(x,p),p.vadd(i,p),p.vsub(n,p),m.rj.copy(p),f.negate(m.ni),m.ri.set(0,0,0);let _=m.ri,R=m.rj;_.vadd(i,_),_.vsub(l.position,_),R.vadd(n,R),R.vsub(a.position,R),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){let u=Sv,f=Mv,p=wv,x=Ev,g=Av,m=Tv,_=Pv,R=bv,v=_v,S=Lv;re.pointToLocalFrame(i,o,n,g);let M=t.radius;_.lowerBound.set(g.x-M,g.y-M,g.z-M),_.upperBound.set(g.x+M,g.y+M,g.z+M),e.getTrianglesInAABB(_,S);let L=vv,y=t.radius*t.radius;for(let E=0;E<S.length;E++)for(let w=0;w<3;w++)if(e.getVertex(e.indices[S[E]*3+w],L),L.vsub(g,v),v.lengthSquared()<=y){if(R.copy(L),re.pointToWorldFrame(i,o,R,L),L.vsub(n,v),d)return!0;let P=this.createContactEquation(a,l,t,e,c,h);P.ni.copy(v),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(t.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.copy(L),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let E=0;E<S.length;E++)for(let w=0;w<3;w++){e.getVertex(e.indices[S[E]*3+w],u),e.getVertex(e.indices[S[E]*3+(w+1)%3],f),f.vsub(u,p),g.vsub(f,m);let P=m.dot(p);g.vsub(u,m);let F=m.dot(p);if(F>0&&P<0&&(g.vsub(u,m),x.copy(p),x.normalize(),F=m.dot(x),x.scale(F,m),m.vadd(u,m),m.distanceTo(g)<t.radius)){if(d)return!0;let V=this.createContactEquation(a,l,t,e,c,h);m.vsub(g,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(l.position,V.rj),re.vectorToWorldFrame(o,V.ni,V.ni),re.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}let A=Cv,N=Rv,U=Iv,T=yv;for(let E=0,w=S.length;E!==w;E++){e.getTriangleVertices(S[E],A,N,U),e.getNormal(S[E],T),g.vsub(A,m);let P=m.dot(T);if(T.scale(P,m),g.vsub(m,m),P=m.distanceTo(g),xn.pointInTriangle(m,A,N,U)&&P<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,h);m.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(l.position,F.rj),re.vectorToWorldFrame(o,F.ni,F.ni),re.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){let u=new I,f=mv;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,u);let x=new I;x.copy(u),re.pointToWorldFrame(i,o,x,u);let g=gv;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(f);let R=xv;f.scale(g.dot(f),R),u.vsub(R,R),_.ri.copy(R),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}},Ki=new I,zs=new I,Vs=new I,uv=new I,dv=new I,fv=new Je,pv=new Je,mv=new I,gv=new I,xv=new I,yv=new I,_v=new I;new I;var vv=new I,bv=new I,Sv=new I,Mv=new I,wv=new I,Ev=new I,Av=new I,Tv=new I,Cv=new I,Rv=new I,Iv=new I,Pv=new hn,Lv=[],gl=new I,wf=new I,Nv=new I,Fv=new I,Dv=new I;function Bv(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=Nv;s[(r+1)%i].vsub(o,a);let l=Fv;a.cross(t,l);let c=Dv;e.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var xl=new I,Uv=new I,Ov=new I,zv=new I,Vv=[new I,new I,new I,new I,new I,new I],kv=new I,Gv=new I,Hv=new I,Wv=new I,qv=new I,Xv=new I,Yv=new I,$v=new I,Zv=new I,Jv=new I,Kv=new I,jv=new I,Qv=new I,tb=new I;new I;new I;var eb=new I,nb=new I,ib=new I,sb=new I,rb=new I,ob=new I,ab=new I,lb=new I,cb=new I,hb=new I,Ef=new Je,ub=new I;new I;var db=new I,Af=new I,fb=new I,pb=new I,mb=new I,gb=[0],xb=new I,yb=new I,Ml=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let l=0;l<r;l++){let c=!1,h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Tf(t,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Tf(e,h)}}};function Tf(s,t){s.push((t&4294901760)>>16,t&65535)}var xh=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,Rh=class{constructor(){this.data={keys:[]}}get(t,e){let n=xh(t,e);return this.data[n]}set(t,e,n){let i=xh(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=xh(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},wl=class extends _l{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new I,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new I,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new bh,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Eh,this.constraints=[],this.narrowphase=new Ch(this),this.collisionMatrix=new yl,this.collisionMatrixPrevious=new yl,this.bodyOverlapKeeper=new Ml,this.shapeOverlapKeeper=new Ml,this.contactmaterials=[],this.contactMaterialTable=new Rh,this.defaultMaterial=new Hs("default"),this.defaultContactMaterial=new Gs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ks?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=xn.ALL,n.from=t,n.to=e,n.callback=i,yh.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=xn.ANY,n.from=t,n.to=e,n.result=i,yh.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=xn.CLOSEST,n.from=t,n.to=e,n.result=i,yh.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof zt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Ie.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=Mb,i=wb,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=zt.DYNAMIC,u=-1/0,f=this.constraints,p=Sb;l.length();let x=l.x,g=l.y,m=l.z,_=0;for(c&&(u=Ie.now()),_=0;_!==r;_++){let E=o[_];if(E.type===d){let w=E.force,P=E.mass;w.x+=P*x,w.y+=P*g,w.z+=P*m}}for(let E=0,w=this.subsystems.length;E!==w;E++)this.subsystems[E].update();c&&(u=Ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ie.now()-u);let R=f.length;for(_=0;_!==R;_++){let E=f[_];if(!E.collideConnected)for(let w=n.length-1;w>=0;w-=1)(E.bodyA===n[w]&&E.bodyB===i[w]||E.bodyB===n[w]&&E.bodyA===i[w])&&(n.splice(w,1),i.splice(w,1))}this.collisionMatrixTick(),c&&(u=Ie.now());let v=bb,S=e.length;for(_=0;_!==S;_++)v.push(e[_]);e.length=0;let M=this.frictionEquations.length;for(_=0;_!==M;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,v,this.frictionEquations,p),c&&(h.narrowphase=Ie.now()-u),c&&(u=Ie.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);let L=e.length;for(let E=0;E!==L;E++){let w=e[E],P=w.bi,F=w.bj,O=w.si,V=w.sj,D;if(P.material&&F.material?D=this.getContactMaterial(P.material,F.material)||this.defaultContactMaterial:D=this.defaultContactMaterial,D.friction,P.material&&F.material&&(P.material.friction>=0&&F.material.friction>=0&&P.material.friction*F.material.friction,P.material.restitution>=0&&F.material.restitution>=0&&(w.restitution=P.material.restitution*F.material.restitution)),a.addEquation(w),P.allowSleep&&P.type===zt.DYNAMIC&&P.sleepState===zt.SLEEPING&&F.sleepState===zt.AWAKE&&F.type!==zt.STATIC){let z=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),W=F.sleepSpeedLimit**2;z>=W*2&&(P.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===zt.DYNAMIC&&F.sleepState===zt.SLEEPING&&P.sleepState===zt.AWAKE&&P.type!==zt.STATIC){let z=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),W=P.sleepSpeedLimit**2;z>=W*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(P,F,!0),this.collisionMatrixPrevious.get(P,F)||(Vr.body=F,Vr.contact=w,P.dispatchEvent(Vr),Vr.body=P,F.dispatchEvent(Vr)),this.bodyOverlapKeeper.set(P.id,F.id),this.shapeOverlapKeeper.set(O.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ie.now()-u,u=Ie.now()),_=0;_!==r;_++){let E=o[_];E.wakeUpAfterNarrowphase&&(E.wakeUp(),E.wakeUpAfterNarrowphase=!1)}for(R=f.length,_=0;_!==R;_++){let E=f[_];E.update();for(let w=0,P=E.equations.length;w!==P;w++){let F=E.equations[w];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=Ie.now()-u),a.removeAllEquations();let y=Math.pow;for(_=0;_!==r;_++){let E=o[_];if(E.type&d){let w=y(1-E.linearDamping,t),P=E.velocity;P.scale(w,P);let F=E.angularVelocity;if(F){let O=y(1-E.angularDamping,t);F.scale(O,F)}}}this.dispatchEvent(vb),c&&(u=Ie.now());let N=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,N,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ie.now()-u),this.stepnumber+=1,this.dispatchEvent(_b);let T=!0;if(this.allowSleep)for(T=!1,_=0;_!==r;_++){let E=o[_];E.sleepTick(this.time),E.sleepState!==zt.SLEEPING&&(T=!0)}this.hasActiveBodies=T}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ri,oi),t){for(let r=0,o=ri.length;r<o;r+=2)kr.bodyA=this.getBodyById(ri[r]),kr.bodyB=this.getBodyById(ri[r+1]),this.dispatchEvent(kr);kr.bodyA=kr.bodyB=null}if(e){for(let r=0,o=oi.length;r<o;r+=2)Gr.bodyA=this.getBodyById(oi[r]),Gr.bodyB=this.getBodyById(oi[r+1]),this.dispatchEvent(Gr);Gr.bodyA=Gr.bodyB=null}ri.length=oi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ri,oi),n){for(let r=0,o=ri.length;r<o;r+=2){let a=this.getShapeById(ri[r]),l=this.getShapeById(ri[r+1]);ai.shapeA=a,ai.shapeB=l,a&&(ai.bodyA=a.body),l&&(ai.bodyB=l.body),this.dispatchEvent(ai)}ai.bodyA=ai.bodyB=ai.shapeA=ai.shapeB=null}if(i){for(let r=0,o=oi.length;r<o;r+=2){let a=this.getShapeById(oi[r]),l=this.getShapeById(oi[r+1]);li.shapeA=a,li.shapeB=l,a&&(li.bodyA=a.body),l&&(li.bodyB=l.body),this.dispatchEvent(li)}li.bodyA=li.bodyB=li.shapeA=li.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new hn;var yh=new xn,Ie=globalThis.performance||{};if(!Ie.now){let s=Date.now();Ie.timing&&Ie.timing.navigationStart&&(s=Ie.timing.navigationStart),Ie.now=()=>Date.now()-s}new I;var _b={type:"postStep"},vb={type:"preStep"},Vr={type:zt.COLLIDE_EVENT_NAME,body:null,contact:null},bb=[],Sb=[],Mb=[],wb=[],ri=[],oi=[],kr={type:"beginContact",bodyA:null,bodyB:null},Gr={type:"endContact",bodyA:null,bodyB:null},ai={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Df(s=Ys){let t=new wl({gravity:new I(0,s.gravity,0)});t.allowSleep=!0;let e=new Hs("cube");t.addContactMaterial(new Gs(e,e,{friction:s.friction,restitution:s.restitution}));let n=new zt({type:zt.STATIC,material:e,shape:new qr});n.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(n);let i=[],r=[],o=[],a=0;return{world:t,bodies:i,setBounds(l,c){for(let d of r)t.removeBody(d);r.length=0;let h=[[-l/2,0,[0,Math.PI/2,0]],[l/2,0,[0,-Math.PI/2,0]],[0,-c/2,[0,0,0]],[0,c/2,[0,Math.PI,0]]];for(let[d,u,f]of h){let p=new zt({type:zt.STATIC,material:e,shape:new qr});p.position.set(d,0,u),p.quaternion.setFromEuler(...f),t.addBody(p),r.push(p)}},addCube(l,c){let h=new zt({mass:1,material:e,shape:new Hr(new I(.5,.5,.5)),sleepSpeedLimit:.15,sleepTimeLimit:.5});return h.position.set(l.x,l.y,l.z),c&&h.quaternion.set(c.x,c.y,c.z,c.w),t.addBody(h),i.push(h),h},removeCube(l){t.removeBody(l);let c=i.indexOf(l);c>=0&&i.splice(c,1)},onStep(l){o.push(l)},step(l){for(a=Math.min(a+l,.1);a>=s.step;){for(let c of o)c(s.step);t.step(s.step),a-=s.step}},settle(l=600){let c=0;for(;c<l&&i.some(h=>h.sleepState!==zt.SLEEPING);)t.step(s.step),c++;return c}}}function Xr(s,t,e=_n){let n=t.length,i=s.width*e.spread,r=[];return t.forEach((o,a)=>{r[o]={x:-i/2+(a+.5)*i/n,z:s.depth*((e.rowZ??0)+(a%2===0?-1:1)*e.zigzag)}}),r}function Bf(s,t,e=_n){if(s<=0||s>=t)return 0;let n=Math.min(1,s/e.rampIn),i=Math.min(1,(t-s)/e.rampOut);return Math.min(n,i)}function Uf(s,t,e,n=1,i=_n){if(s.type!==zt.DYNAMIC||n<=0)return;let r=t.x-s.position.x,o=t.z-s.position.z,a=Math.hypot(r,o);if(a<1e-6)return;let l=i.releaseRadius??0,c=i.heapRadius>l?Math.max(0,Math.min(1,(a-l)/(i.heapRadius-l))):a>l?1:0,h=Math.min(i.max,i.base+i.k*a)*n*c;h>0&&s.wakeUp(),s.velocity.x+=r/a*h*e-s.velocity.x*i.drag*e,s.velocity.z+=o/a*h*e-s.velocity.z*i.drag*e}var El="#111111",Ab=40,Tb=3.5;function Cb(s){let t=new Ts({depthPacking:Uc});return t.onBeforeCompile=e=>{e.uniforms.uFadeBottom={value:Tb},e.uniforms.uFadeTop={value:20},t.userData.uniforms=e.uniforms,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vCubeHeight;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vCubeHeight = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        #else
          vCubeHeight = 0.0;
        #endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vCubeHeight;
uniform float uFadeBottom;
uniform float uFadeTop;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        float shadowStrength = 1.0 - smoothstep(uFadeBottom, uFadeTop, vCubeHeight);
        float shadowNoise = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (shadowNoise >= shadowStrength) discard;`)},t.syncFadeTop=()=>{t.userData.uniforms&&(t.userData.uniforms.uFadeTop.value=s())},t}function Of({scene:s,physics:t,cubes:e,arena:n,getSpawnY:i=()=>20}){let r=e.length,o=new yr({roughness:.55,metalness:0}),a={value:0};o.onBeforeCompile=T=>{T.uniforms.uMorph=a,T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
uniform float uMorph;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal = normalize(mix(objectNormal, normalize(position), uMorph));`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed = mix(transformed, normalize(position) * 0.5, uMorph);`)};let l=new dr(new fn(1,1,1,8,8,8),o,r);l.frustumCulled=!1,l.castShadow=!0;let c=Cb(()=>i());l.customDepthMaterial=c,s.add(l);let h=e.map(()=>({spawned:!1,body:null,pose:null})),d=new Ot,u=new _e,f=0,p=[],x=null,g=null,m=null,_=null;function R(){o.opacity=1,o.transparent=!1,o.depthWrite=!0,o.needsUpdate=!0}function v(T){o.color.setScalar(1-T),o.emissive.setScalar(T),o.needsUpdate=!1}function S(T){u.position.set(0,-100,0),u.scale.setScalar(0),u.updateMatrix(),l.setMatrixAt(T,u.matrix)}function M(T,E){l.setColorAt(T,d.set(E))}for(let T=0;T<r;T++)S(T),M(T,El);l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0;function L(T,E,w,P=1){u.position.set(E.x,E.y,E.z),u.quaternion.set(w.x,w.y,w.z,w.w),u.scale.setScalar(P),u.updateMatrix(),l.setMatrixAt(T,u.matrix)}function y(T,E,w){let P=Ys.gravity,F=i()+E.velocity.y*w+.5*P*w*w,O=t.addCube({x:E.x,y:F,z:E.z},E.quaternion);O.velocity.set(E.velocity.x,E.velocity.y+P*w,E.velocity.z),O.angularVelocity.set(E.spin.x,E.spin.y,E.spin.z),h[T].spawned=!0,h[T].body=O}function A(T){let E=_;E.elapsed+=T;let w=E.elapsed<E.total,P=w?Bf(E.elapsed,E.total):1,F=0;for(let O=0;O<r;O++){let V=h[O].body;if(!V)continue;let D=E.targets[O],z=Math.hypot(D.x-V.position.x,D.z-V.position.z)>_n.farRadius;z&&F++,(w||z)&&Uf(V,D,T,P,_n)}!w&&(F<=r*_n.farShare||E.elapsed>=E.total+_n.stragglers)&&(_=null,setTimeout(E.done,E.settle*1e3))}function N(T){let E=m;if(E.elapsed+=T,E.elapsed>=E.freezeAt){let w=Math.exp(-T*30),P=-Ys.gravity;for(let F=0;F<r;F++){let O=h[F].body;O&&(O.wakeUp(),O.velocity.scale(w,O.velocity),O.angularVelocity.scale(w,O.angularVelocity),O.force.y+=P*O.mass)}}if(E.elapsed>=E.total){m=null;for(let w=0;w<r;w++)h[w].body?.wakeUp();E.done()}}t.onStep(T=>{m&&N(T),_&&A(T)});let U={mesh:l,material:o,morph:a,count:r,clear(){for(let T=0;T<r;T++)h[T].body&&t.removeCube(h[T].body),h[T].spawned=!1,h[T].body=null,h[T].pose=null,S(T),M(T,El);p=[],x=null,_=null,m=null,g?.cancel(),R(),v(0),a.value=0,l.visible=!0,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0},drop(T=wt.drop,E=wt.dropSettle,w=wt.dropRamp){return U.clear(),p=cu(r,{duration:T,ramp:w}).map((F,O)=>({i:O,entry:F})).sort((F,O)=>F.entry.delay-O.entry.delay),f=0,new Promise(F=>{x=()=>setTimeout(F,E*1e3),p.length||x()})},tick(T){if(p.length){for(f+=T;p.length&&p[0].entry.delay<=f;){let{i:E,entry:w}=p.shift();y(E,w,f-w.delay)}if(!p.length){let E=x;x=null,E?.()}}},sync(){c.syncFadeTop();for(let T=0;T<r;T++){let E=h[T];E.body?L(T,E.body.position,E.body.quaternion):E.pose&&L(T,E.pose.p,E.pose.q,E.pose.s)}l.instanceMatrix.needsUpdate=!0},setColour(T,E){M(T,E),l.instanceColor.needsUpdate=!0},recolour(T,E=wt.categorise){g?.cancel();let w=qn(fi.spawnSeed+11),P=[],F=[],O=[];for(let V=0;V<r;V++)l.getColorAt(V,d),P.push(d.clone()),F.push(new Ot(T(V))),O.push(w()*E);return g=fe({duration:E,easing:ie.linear,onUpdate:V=>{let D=V*E;for(let z=0;z<r;z++)l.setColorAt(z,D>=O[z]?F[z]:P[z]);l.instanceColor.needsUpdate=!0}}),g.finished.then(()=>{})},positionOf(T){let E=h[T].body??h[T].pose;if(!E)return null;let w=E.position??E.p;return{x:w.x,y:w.y,z:w.z}},capture(){return h.map((T,E)=>{let w=T.body??T.pose;if(!w)return{spawned:!1};let P=w.position??w.p,F=w.quaternion??w.q;return l.getColorAt(E,d),{spawned:!0,p:{x:P.x,y:P.y,z:P.z},q:{x:F.x,y:F.y,z:F.z,w:F.w},s:w.s??1,colour:`#${d.getHexString()}`}})},fadeOut(T,E){let w=[];for(let F of T){let O=h[F],V=O.body??O.pose;if(!V)continue;let D=V.position??V.p,z=V.quaternion??V.q;O.body&&t.removeCube(O.body),O.body=null,O.pose={p:{x:D.x,y:D.y,z:D.z},q:{x:z.x,y:z.y,z:z.z,w:z.w},s:V.s??1},l.getColorAt(F,d),w.push({i:F,from:d.clone(),size:O.pose.s})}if(!w.length)return Promise.resolve();let P=new Ot("#ffffff");return fe({duration:E,easing:ie.inOutQuad,onUpdate:F=>{let O=Math.max(0,(F-.4)/.6);for(let{i:V,from:D,size:z}of w)l.setColorAt(V,d.copy(D).lerp(P,F)),h[V].pose.s=z*(1-O);l.instanceColor.needsUpdate=!0,U.sync()}}).finished.then(()=>{})},flyTo(T,{seconds:E,morph:w=0,glow:P=0,stagger:F=.25,scale:O=1}){let V=new Fe,D=new Fe,z=[],W=a.value,J=o.emissive.r,ot=qn(fi.spawnSeed+31);return h.forEach((lt,xt)=>{let Ct=lt.body,K=Ct?{p:{x:Ct.position.x,y:Ct.position.y,z:Ct.position.z},q:{x:Ct.quaternion.x,y:Ct.quaternion.y,z:Ct.quaternion.z,w:Ct.quaternion.w},s:1}:lt.pose&&{p:{...lt.pose.p},q:{...lt.pose.q},s:lt.pose.s??1};!K||!T[xt]||(Ct&&t.removeCube(Ct),lt.body=null,lt.pose={p:{...K.p},q:{...K.q},s:K.s},z.push({i:xt,from:K,to:T[xt],delay:ot()*F*E}))}),fe({duration:E,easing:ie.linear,onUpdate:lt=>{let xt=lt*E,Ct=ie.inOutCubic(lt);a.value=W+(w-W)*Ct,v(J+(P-J)*Ct);for(let{i:K,from:Q,to:ht,delay:Mt}of z){let rt=ie.inOutCubic(Math.min(1,Math.max(0,(xt-Mt)/(E-F*E)))),Bt=h[K].pose;Bt.p.x=Q.p.x+(ht.x-Q.p.x)*rt,Bt.p.y=Q.p.y+(ht.y-Q.p.y)*rt,Bt.p.z=Q.p.z+((ht.z??Q.p.z)-Q.p.z)*rt,V.set(Q.q.x,Q.q.y,Q.q.z,Q.q.w).slerp(D,rt),Bt.q.x=V.x,Bt.q.y=V.y,Bt.q.z=V.z,Bt.q.w=V.w,Bt.s=Q.s+((ht.scale??O)-Q.s)*rt}U.sync()}}).finished.then(()=>{})},setVisible(T){l.visible=T},async headless(T,E=()=>!1){let w=Math.round(T*60);for(let P=0;P<w&&(U.tick(1/60),t.step(1/60),!(P%10===9&&E()));P++)P%40===39&&await new Promise(F=>setTimeout(F,0));U.sync()},get pulling(){return!!_},get settled(){return p.length===0&&t.bodies.every(T=>T.sleepState===2)},reveal(T){return l.visible=!0,o.transparent=!0,o.depthWrite=!1,o.opacity=0,fe({duration:T,easing:ie.inOutQuad,onUpdate:E=>{o.opacity=E}}).finished.then(()=>R())},blendTo(T,E,w=wt.look){g?.cancel();let P=[],F=[];for(let V=0;V<r;V++)l.getColorAt(V,d),P.push(d.clone()),F.push(new Ot(T(V)));let O=o.opacity;return(E<1||O<1)&&(o.transparent=!0,o.depthWrite=!1,o.needsUpdate=!0),g=fe({duration:w,easing:ie.inOutQuad,onUpdate:V=>{o.opacity=O+(E-O)*V;for(let D=0;D<r;D++)l.setColorAt(D,d.copy(P[D]).lerp(F[D],V));l.instanceColor.needsUpdate=!0}}),g.finished.then(V=>{V&&E>=1&&R()})},explode(T=wt.explode,E=wt.freeze){let w=h.map(O=>O.body).filter(Boolean),P={x:0,z:0};for(let O of w)P.x+=O.position.x/w.length,P.z+=O.position.z/w.length;let F=qn(fi.spawnSeed+47);for(let O of w){O.wakeUp();let V=O.position.x-P.x,D=O.position.z-P.z,z=Math.hypot(V,D);if(z<.5){let ot=F()*Math.PI*2;V=Math.cos(ot),D=Math.sin(ot),z=1}let W=Oi.outward*(.5+F()),J=Oi.up*(.6+.8*F())+Oi.lowBonus/(1+Math.max(0,O.position.y));O.velocity.set(V/z*W,J,D/z*W),O.angularVelocity.set((F()-.5)*2*Oi.spin,(F()-.5)*2*Oi.spin,(F()-.5)*2*Oi.spin)}return new Promise(O=>{m={elapsed:0,freezeAt:T,total:T+E,done:O}})},steer(T,E=wt.sort,w=wt.sortSettle){let P=Array.from({length:r},(F,O)=>T(O));return new Promise(F=>{_={targets:P,elapsed:0,total:E,settle:w,done:F}})},restore(T,E=wt.sortBack){_=null,m=null;let w=[];h.forEach((O,V)=>{let D=T?.[V];if(!D?.spawned)return;let z=O.body,W=z?{p:{x:z.position.x,y:z.position.y,z:z.position.z},q:{x:z.quaternion.x,y:z.quaternion.y,z:z.quaternion.z,w:z.quaternion.w}}:O.pose;W&&(z&&t.removeCube(z),O.body=null,O.pose={p:{...W.p},q:{...W.q}},M(V,D.colour),w.push({i:V,from:W,to:D}))}),l.instanceColor.needsUpdate=!0;let P=new Fe,F=new Fe;return fe({duration:E,easing:ie.inOutCubic,onUpdate:O=>{for(let{i:V,from:D,to:z}of w){let W=h[V].pose;W.p.x=D.p.x+(z.p.x-D.p.x)*O,W.p.y=D.p.y+(z.p.y-D.p.y)*O,W.p.z=D.p.z+(z.p.z-D.p.z)*O,P.set(D.q.x,D.q.y,D.q.z,D.q.w),F.set(z.q.x,z.q.y,z.q.z,z.q.w),P.slerp(F,O),W.q.x=P.x,W.q.y=P.y,W.q.z=P.z,W.q.w=P.w}U.sync()}}).finished.then(()=>{for(let{i:O,to:V}of w)h[O].body=t.addCube(V.p,V.q),h[O].pose=null})},arrange(T,E,w,P=wt.arrange,F=wt.arrangeFlight){_=null;let O=qn(fi.spawnSeed+23),V=w>1?(P-F)/(w-1):0,D=[];h.forEach((J,ot)=>{let lt=J.body,xt=lt?{p:{x:lt.position.x,y:lt.position.y,z:lt.position.z},q:{x:lt.quaternion.x,y:lt.quaternion.y,z:lt.quaternion.z,w:lt.quaternion.w}}:J.pose;if(!xt)return;lt&&t.removeCube(lt),J.body=null,J.pose={p:{...xt.p},q:{...xt.q}};let Ct=E(ot)*V*.9+O()*V*.1;D.push({i:ot,from:{p:{...xt.p},q:{...xt.q}},to:T[ot],delay:Ct,arc:2+O()*2})});let z=new Fe,W=new Fe;return fe({duration:P,easing:ie.linear,onUpdate:J=>{let ot=J*P;for(let{i:lt,from:xt,to:Ct,delay:K,arc:Q}of D){let ht=Math.min(1,Math.max(0,(ot-K)/F)),Mt=ie.inOutCubic(ht),rt=h[lt].pose;rt.p.x=xt.p.x+(Ct.x-xt.p.x)*Mt,rt.p.y=xt.p.y+(Ct.y-xt.p.y)*Mt+Q*Math.sin(Math.PI*Mt),rt.p.z=xt.p.z+(Ct.z-xt.p.z)*Mt,z.set(xt.q.x,xt.q.y,xt.q.z,xt.q.w).slerp(W,Mt),rt.q.x=z.x,rt.q.y=z.y,rt.q.z=z.z,rt.q.w=z.w}U.sync()}}).finished.then(()=>{})},liftAway(T=wt.lift){let E=T*.35,w=[];return h.forEach((P,F)=>{if(P.body){let O=P.body.position,V=P.body.quaternion;P.pose={p:{x:O.x,y:O.y,z:O.z},q:{x:V.x,y:V.y,z:V.z,w:V.w}},t.removeCube(P.body),P.body=null}else if(!P.pose)return;w.push({i:F,from:{...P.pose.p},delay:F*7919%r/r*E})}),p=[],x=null,fe({duration:T,easing:ie.linear,onUpdate:P=>{let F=P*T;for(let{i:O,from:V,delay:D}of w){let z=Math.min(1,Math.max(0,(F-D)/(T-E)));h[O].pose.p.y=V.y+Ab*ie.inCubic(z)}U.sync()}}).finished.then(()=>U.clear())}};return U}function Rb(s=Fl,t=1.8){let e=qn(s.seed),n=Array.from({length:s.nodes},()=>({u:e()*2-1,v:e()*2-1,w:e()*2-1,size:s.size[0]+e()*(s.size[1]-s.size[0]),phase:[e()*6.283,e()*6.283,e()*6.283],period:[.7+e()*.6,.7+e()*.6,.7+e()*.6],turn:[(e()-.5)*.3,(e()-.5)*.3,(e()-.5)*.3]})),i=(a,l)=>Math.hypot((a.u-l.u)*t,a.v-l.v,(a.w-l.w)*.25),r=new Set,o=[];return n.forEach((a,l)=>{let c=n.map((h,d)=>({j:d,d:l===d?1/0:i(a,h)})).sort((h,d)=>h.d-d.d).slice(0,s.neighbours);for(let{j:h}of c){let d=l<h?`${l}-${h}`:`${h}-${l}`;r.has(d)||(r.add(d),o.push([l,h]))}}),{nodes:n,edges:o}}function zf({scene:s,camera:t,settings:e=Fl}){let{nodes:n,edges:i}=Rb(e),r=new Xe;r.position.set(0,0,-e.depth),t.add(r),t.parent||s.add(t);let o=new ei({color:e.colour,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),a=new qi(new fn(1,1,1)),l=n.map(S=>{let M=new vi(a,o);return M.scale.setScalar(S.size),M.renderOrder=-1,r.add(M),M}),c=new Float32Array(i.length*6),h=new ke;h.setAttribute("position",new Ye(c,3));let d=new vi(h,o);d.frustumCulled=!1,d.renderOrder=-1,r.add(d);let u=1,f=0,p=null,x=[],g=n.map(()=>({x:0,y:0,vx:0,vy:0,s:[0,0,0],sv:[0,0,0]})),m=new q;function _(){o.opacity=e.opacity*u,r.visible=u>.001}function R(){let S=Math.tan(t.fov*Math.PI/360)*e.depth,M=S*t.aspect,L=e.depth*.3;n.forEach((y,A)=>{let N=w=>Math.sin(f/(e.cycle*y.period[w])*6.283+y.phase[w]),U=(y.u+e.sway*N(0))*M+g[A].x,T=(y.v+e.sway*N(1))*S+g[A].y,E=(y.w+e.sway*2*N(2))*L;x[A]=[U,T,E],l[A].position.set(U,T,E),l[A].rotation.set(y.turn[0]*f+g[A].s[0],y.turn[1]*f+g[A].s[1],y.turn[2]*f+g[A].s[2])}),i.forEach(([y,A],N)=>{c.set(x[y],N*6),c.set(x[A],N*6+3)}),h.attributes.position.needsUpdate=!0,r.rotation.y=e.turn*Math.sin(f*.07),r.rotation.x=e.turn*.4*Math.sin(f*.05+1)}function v(S,M){t.updateMatrixWorld(!0),n.forEach((L,y)=>{let A=g[y],N=-e.spring*A.x-e.damping*A.vx,U=-e.spring*A.y-e.damping*A.vy;if(M){m.setFromMatrixPosition(l[y].matrixWorld).project(t);let E=(m.x-M.x)*t.aspect,w=m.y-M.y,P=Math.hypot(E,w);if(P<e.repelRadius){let F=(1-P/e.repelRadius)**2,O=P>1e-4?E/P:1,V=P>1e-4?w/P:0;N+=O*e.repelPush*F,U+=V*e.repelPush*F;for(let D=0;D<3;D++)A.sv[D]+=(Math.random()-.5)*e.repelSpin*F*S}}A.vx+=N*S,A.vy+=U*S,A.x+=A.vx*S,A.y+=A.vy*S;let T=Math.hypot(A.x,A.y);T>e.maxPush&&(A.x*=e.maxPush/T,A.y*=e.maxPush/T);for(let E=0;E<3;E++)A.sv[E]+=(-2*A.s[E]-1.5*A.sv[E])*S,A.s[E]+=A.sv[E]*S})}return _(),R(),{group:r,get amount(){return u},set amount(S){u=S,_()},update(S,M=null){u<=.001||(f+=S,v(S,M),R())},fadeTo(S,M){p?.cancel();let L=u;return L===S?Promise.resolve():(p=fe({duration:M,easing:ie.inOutQuad,onUpdate:y=>{u=L+(S-L)*y,_()}}),p.finished.then(()=>{}))}}}var Vf=Math.PI*2,kf=s=>s-Vf*Math.round(s/Vf);function Gf({element:s,pivot:t,settings:e=jh}){let n={yaw:0,pitch:0,yawSpeed:0,pitchSpeed:0,target:{yaw:0,pitch:0},dragging:!1,enabled:!1},i=null,r=[],o=new Set,a={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},l=()=>t.rotation.set(n.pitch,n.yaw,0,"YXZ");s?.addEventListener("pointerdown",d=>{!n.enabled||d.button>0||(n.dragging=!0,i={x:d.clientX,y:d.clientY},s.setPointerCapture?.(d.pointerId))}),s?.addEventListener("pointermove",d=>{!n.dragging||!i||(h.drag(d.clientX-i.x,d.clientY-i.y),i={x:d.clientX,y:d.clientY})}),s?.addEventListener("keydown",d=>{!n.enabled||d.ctrlKey||d.metaKey||d.altKey||!a[d.key]||(d.preventDefault(),o.add(d.key))}),s?.addEventListener("keyup",d=>o.delete(d.key)),s?.addEventListener("blur",()=>o.clear());let c=()=>{n.dragging=!1,i=null};s?.addEventListener("pointerup",c),s?.addEventListener("pointercancel",c);let h={state:n,get enabled(){return n.enabled},set enabled(d){n.enabled=d,d||(c(),o.clear()),s&&(s.style.cursor=d?"grab":"",s.style.touchAction=d?"none":"",d?(s.setAttribute?.("tabindex","0"),s.setAttribute?.("role","application"),s.setAttribute?.("aria-roledescription","turnable data cube")):(s.removeAttribute?.("tabindex"),s.setAttribute?.("role","img"),s.removeAttribute?.("aria-roledescription")))},setTarget(d){n.target={yaw:d.yaw,pitch:d.pitch},nn()&&h.jump()},jump(){n.yaw=n.target.yaw,n.pitch=n.target.pitch,n.yawSpeed=0,n.pitchSpeed=0,l(),r.length&&r.splice(0).forEach(d=>d())},drag(d,u){n.yaw+=d*e.sensitivity,n.pitch=Math.max(-e.maxPitch,Math.min(e.maxPitch,n.pitch+u*e.sensitivity)),n.yawSpeed=0,n.pitchSpeed=0,l()},update(d){if(n.dragging)return;if(o.size){for(let f of o){let[p,x]=a[f];n.yaw+=p*e.keySpeed*d,n.pitch=Math.max(-e.maxPitch,Math.min(e.maxPitch,n.pitch+x*e.keySpeed*d))}n.yawSpeed=0,n.pitchSpeed=0,l();return}let u=e.spring;for(let[f,p,x]of[["yaw","yawSpeed",n.target.yaw],["pitch","pitchSpeed",n.target.pitch]]){let g=f==="yaw"?kf(n[f]-x):n[f]-x,m=Math.exp(-u*d),_=n[p],R=(g+(_+u*g)*d)*m;n[p]=(_-u*(_+u*g)*d)*m,g=R,n[f]=x+g}l(),r.length&&h.atRest&&r.splice(0).forEach(f=>f())},arrive(d=4){return new Promise(u=>{r.push(u),setTimeout(u,d*1e3)})},get atRest(){return!n.dragging&&Math.abs(kf(n.yaw-n.target.yaw))<.001&&Math.abs(n.pitch-n.target.pitch)<.001}};return h}var Hf="#808080";function Wf(s,{height:t=1.5}={}){let e=null,n=Math.max(2,s.length*.7);if(typeof document<"u"){let o=document.createElement("canvas"),a=o.getContext("2d"),l="bold 120px Arial, Helvetica, sans-serif";a.font=l;let c=24;o.width=Math.ceil(a.measureText(s).width)+2*c,o.height=170,a.font=l,a.fillStyle=Hf,a.textBaseline="middle",a.fillText(s,c,o.height/2+6),e=new mr(o),e.colorSpace=qe,e.anisotropy=8,n=o.width/o.height}let i=new _i({map:e,color:e?16777215:Hf,transparent:!0,opacity:0,depthWrite:!1,side:pn,toneMapped:!1}),r=new Te(new ni(t*n,t),i);return r.userData.text=s,r}var Ib="#4D4D4D";function qf({parent:s,staticParent:t=null,edge:e,centreY:n,makeLabel:i,makeAxisText:r=Wf}){let o=new Xe;o.visible=!1,s.add(o);let a=new ei({color:Jh,transparent:!0,opacity:0}),l=new vi(new qi(new fn(e,e,e)),a);l.position.set(0,n,0),o.add(l);let c=e/2,h=n-c-1.3,d=c+1.3,u=new Er(new q(1,0,0),new q(-c,h,d),e,Ib,1.1,.6);for(let y of[u.line,u.cone])y.material.transparent=!0,y.material.opacity=0,y.material.depthWrite=!1;o.add(u);let f=Math.PI/2,p=[{text:"Time",axis:"time",position:[0,h-1.9,c],rotation:[0,0,0]},{text:"Species",axis:"species",position:[-c-1.3,n,c],rotation:[0,0,f]},{text:"Location",axis:"location",position:[c+1.3,h,0],rotation:[0,f,0]}].map(({text:y,axis:A,position:N,rotation:U})=>{let T=r(y);return T.position.set(...N),T.rotation.set(...U),o.add(T),{mesh:T,text:y,axis:A}}),x=["horizontal","vertical"].map(y=>{let A=i("");A.style.opacity="0",y==="vertical"&&(A.className+=" is-vertical");let N=new ul(A);return N.position.set(...y==="horizontal"?[0,n-c-1,0]:[-c-1.6,n,0]),t?.add(N),{role:y,element:A,object:N,text:""}}),g={time:1,species:1,location:1},m={},_=0,R=0,v=null,S=null,M=null;function L(){o.visible=_>.001||R>.001,a.opacity=_,u.line.material.opacity=R*g.time,u.cone.material.opacity=R*g.time;for(let{mesh:y,axis:A}of p)y.material.opacity=R*g[A]}return{group:o,labels:p,faceTitles:x,get amount(){return _},set amount(y){_=y,R=y,L()},get titles(){return R},fadeTo(y,A){v?.cancel(),S?.cancel();let N=_,U=R;return N===y&&U===y?Promise.resolve():(v=fe({duration:A,easing:ie.inOutQuad,onUpdate:T=>{_=N+(y-N)*T,R=U+(y-U)*T,L()}}),v.finished.then(()=>{}))},fadeBoxTo(y,A){v?.cancel();let N=_;return N===y?Promise.resolve():(v=fe({duration:A,easing:ie.inOutQuad,onUpdate:U=>{_=N+(y-N)*U,L()}}),v.finished.then(()=>{}))},setAxes(y){for(let A of Object.keys(g))m[A]?.cancel(),g[A]=y;L()},showAxis(y,A){m[y]?.cancel();let N=g[y];return m[y]=fe({duration:A,easing:ie.inOutQuad,onUpdate:U=>{g[y]=N+(1-N)*U,L()}}),m[y].finished.then(()=>{})},fadeTitlesTo(y,A){y>0&&this.setAxes(1),S?.cancel();let N=R;return N===y?Promise.resolve():(S=fe({duration:A,easing:ie.inOutQuad,onUpdate:U=>{R=N+(y-N)*U,L()}}),S.finished.then(()=>{}))},async showFaceTitles(y,A,N=.4){M?.cancel();let U={horizontal:y,vertical:A},T=x.map(E=>{let w=U[E.role],P=Number(E.element.style.opacity)||0,F=w!==E.text,O=F&&P>0?N/2:0;return(async()=>{if(F&&P>0&&await fe({duration:O,easing:ie.inOutQuad,onUpdate:D=>{E.element.style.opacity=String(P*(1-D))}}).finished,E.text=w??"",E.element.textContent=E.text,!w){E.element.style.opacity="0";return}let V=Number(E.element.style.opacity)||0;await fe({duration:N,easing:ie.inOutQuad,onUpdate:D=>{E.element.style.opacity=String(V+(1-V)*D)}}).finished})()});await Promise.all(T)},hideFaceTitles(y=.3){return this.showFaceTitles(null,null,y)}}}function Al({stage:s,image:t,dots:e,unitsPerPixel:n,fraction:i=Kh.fraction}){let r=t.width/t.height,o=Math.min(s.width*i,s.height*i*r),a=o/r,l=(s.width-o)/2,c=(s.height-a)/2,h=o/t.width;return{rect:{left:l,top:c,width:o,height:a},dots:e.map(d=>({x:(l+d.x*h-s.width/2)*n,y:-(c+d.y*h-s.height/2)*n,diameter:2*d.r*h*n}))}}function Pb(s){let t=s.length,e=t?s[0].length:0;if(t>e)throw new Error("assign needs at least as many columns as rows");let n=new Array(t+1).fill(0),i=new Array(e+1).fill(0),r=new Array(e+1).fill(0),o=new Array(e+1).fill(0);for(let l=1;l<=t;l++){r[0]=l;let c=0,h=new Array(e+1).fill(1/0),d=new Array(e+1).fill(!1);do{d[c]=!0;let u=r[c],f=1/0,p=0;for(let x=1;x<=e;x++){if(d[x])continue;let g=s[u-1][x-1]-n[u]-i[x];g<h[x]&&(h[x]=g,o[x]=c),h[x]<f&&(f=h[x],p=x)}for(let x=0;x<=e;x++)d[x]?(n[r[x]]+=f,i[x]-=f):h[x]-=f;c=p}while(r[c]!==0);do{let u=o[c];r[c]=r[u],c=u}while(c)}let a=new Array(t).fill(-1);for(let l=1;l<=e;l++)r[l]&&(a[r[l]-1]=l-1);return a}function Xf(s,t,e=Math.random){let n=t.dots,i=(o,a)=>(o.x-a.x)**2+(o.y-a.y)**2,r=new Array(s.length);if(s.length>=n.length){let o=s.map((c,h)=>h);for(let c=o.length-1;c>0;c--){let h=Math.floor(e()*(c+1));[o[c],o[h]]=[o[h],o[c]]}let a=o.slice(0,n.length);Pb(n.map(c=>a.map(h=>i(s[h],c)))).forEach((c,h)=>{r[a[c]]={x:n[h].x,y:n[h].y,scale:n[h].diameter,dot:h,removed:!1}}),s.forEach((c,h)=>{r[h]||(r[h]={x:c.x,y:c.y,scale:0,dot:-1,removed:!0})})}else{let o=new Set(n.keys());s.forEach((a,l)=>{let c=-1;for(let h of o)(c<0||i(a,n[h])<i(a,n[c]))&&(c=h);o.delete(c),r[l]={x:n[c].x,y:n[c].y,scale:n[c].diameter,dot:c,removed:!1}})}return r}function Yf(s){let t=0,e=null,n=()=>{s.style.opacity=String(t),s.hidden=t<=.001};return n(),{element:s,get amount(){return t},place(i){Object.assign(s.style,{left:`${i.left}px`,top:`${i.top}px`,width:`${i.width}px`,height:`${i.height}px`})},fadeTo(i,r){e?.cancel();let o=t;return o===i?Promise.resolve():(e=fe({duration:r,easing:ie.inOutQuad,onUpdate:a=>{t=o+(i-o)*a,n()}}),e.finished.then(()=>{}))}}}var Ws={image:{width:2506,height:868,file:"UKCEH_Logo_Tagline_Stacked_White_Data.png"},dots:[{x:86.8,y:351.9,r:41.4},{x:222.3,y:117.2,r:41.4},{x:357.7,y:80.9,r:41.4},{x:493.1,y:117.1,r:41.4},{x:628.5,y:351.9,r:41.4},{x:592.3,y:487.5,r:41.4},{x:493.1,y:586.7,r:41.4},{x:357.7,y:623,r:41.4},{x:222.3,y:586.7,r:41.4},{x:123.2,y:487.5,r:41.4},{x:123.1,y:216.4,r:41.3},{x:592.3,y:216.4,r:41.3},{x:201.3,y:351.9,r:31},{x:247.1,y:241.3,r:31},{x:357.7,y:195.4,r:31},{x:468.3,y:241.3,r:31},{x:514.1,y:351.9,r:31},{x:468.3,y:462.6,r:31},{x:357.7,y:508.4,r:31},{x:247.1,y:462.6,r:31},{x:301.1,y:319.3,r:17.1},{x:357.7,y:286.5,r:17.1},{x:414.4,y:319.2,r:17.1},{x:414.4,y:384.6,r:17.1},{x:357.7,y:417.4,r:17.1},{x:301.1,y:384.6,r:17.1}]};function Nh(s,t=We){let e=s*t.pitch,n=e/2,i=n+t.floorGap,r=t.titleDrop,o=i-r/2,a=Math.hypot(n,n+r/2,n);return{edge:e,centreY:i,radius:e*Math.sqrt(3)/2,lookY:o,lookRadius:a}}function Li(s,t,e,n=We){let{centreY:i}=Nh(e,n),r=[];t.forEach((a,l)=>{r[a]=l});let o=(e-1)/2;return s.map(a=>({x:(a.time-o)*n.pitch,y:i+(r[a.species]-o)*n.pitch,z:(a.location-o)*n.pitch}))}function $f(s,t){let e=[];return t.forEach((n,i)=>{e[n]=i}),s.map(n=>e[n.species])}function Zf(s,t,e,n=Qh,i=Math.random){let r=0;for(let o of s){if(o.type!==zt.DYNAMIC)continue;let a=o.position.x-t.x,l=o.position.z-t.z,c=Math.hypot(a,l);if(c>=n.radius)continue;let h=(1-c/n.radius)**2,d=i()*2*Math.PI,u=c>1e-4?a/c:Math.cos(d),f=c>1e-4?l/c:Math.sin(d);o.wakeUp();let p=h*e;o.applyImpulse({x:u*n.push*p,y:n.lift*p,z:f*n.push*p}),o.angularVelocity.x+=(i()-.5)*n.spin*p,o.angularVelocity.y+=(i()-.5)*n.spin*p,o.angularVelocity.z+=(i()-.5)*n.spin*p,r++}return r}function Jf({steps:s,ctx:t,onChange:e=()=>{}}){let n=new Map,i={index:0,busy:!1,error:null},r=()=>e(o()),o=()=>({index:i.index,step:s[i.index],busy:i.busy,error:i.error,canBack:!i.busy&&i.index>0,canNext:!i.busy&&i.index<s.length-1,canRestart:!i.busy&&i.index===s.length-1});async function a(l){i.busy=!0,i.error=null,r();try{await l()}catch(c){console.error(c),i.error=c}finally{i.busy=!1,r()}}return{get state(){return o()},snapshots:n,async next(){if(i.busy||i.index>=s.length-1)return!1;let l=s[i.index],c=s[i.index+1];return n.set(l.id,t.capture?.()),i.index+=1,await a(()=>c.enter(t,{from:l})),!0},async back(){if(i.busy||i.index<=0)return!1;let l=s[i.index],c=s[i.index-1];return i.index-=1,await a(()=>l.reverse(t,{to:c,snapshot:n.get(c.id)})),!0},async restart(){return i.busy||i.index===0?!1:(i.index=0,n.clear(),await a(()=>t.reset?.()),!0)}}}var Kf={async enter(s){if(await Promise.all([s.setTheme("light"),s.network?.fadeTo(0,wt.theme)]),nn()){s.field.setVisible(!1);let t=s.field.drop();await s.field.headless(wt.drop+8,()=>s.field.settled),await t,await s.field.reveal(.4);return}await s.field.drop()},async reverse(s,{to:t}){await s.field.liftAway(wt.lift),await Promise.all([s.setTheme(t.theme),s.network?.fadeTo(1,wt.theme)])}};var jf={async enter(s){let t=s.cube.cubes;await s.field.recolour(e=>In(t[e].species),wt.categorise)},async reverse(s){await s.field.recolour(()=>El,wt.categoriseBack)}};var Qf={async enter(s){let t=Xr(s.arena,s.cube.displayOrder),e=s.cube.cubes;if(nn()){s.field.setVisible(!1);let i=s.field.steer(r=>t[e[r].species],wt.sort,wt.sortSettle);await s.field.headless(wt.sort+_n.stragglers+.5,()=>!s.field.pulling),await i,await s.field.reveal(.4);return}await s.field.explode();let n=s.field.steer(i=>t[e[i].species],wt.sort,wt.sortSettle);await Promise.race([n,zi(wt.sortReady)])},async reverse(s,{snapshot:t}){await s.field.restore(t,wt.sortBack)}};var tp={async enter(s){let{cube:t,field:e,scene:n,frame:i,rotation:r}=s,o=Li(t.cubes,t.displayOrder,t.size),a=$f(t.cubes,t.displayOrder);r.setTarget({yaw:We.yaw,pitch:We.tilt}),i?.setAxes(0),await Promise.all([e.arrange(o,l=>a[l],t.size,wt.arrange,wt.arrangeFlight),n?.setView("cube",wt.arrange),n?.fadeShadow(0,wt.arrangeFlight),zi(wt.arrangeFrame).then(()=>i?.fadeTo(1,wt.frameFade))])},async reverse(s,{snapshot:t}){let{field:e,scene:n,frame:i,rotation:r}=s;r.setTarget({yaw:0,pitch:0}),await Promise.all([i?.fadeTo(0,wt.frameFade/2),n?.setView("floor",wt.arrangeBack),n?.fadeShadow(1,wt.arrangeBack),e.restore(t,wt.arrangeBack)])}};function Lb(s){let t=Li(s.cubes,s.displayOrder,s.size).map(i=>`${i.x.toFixed(3)},${i.z.toFixed(3)}`),e=new Map;for(let i of t)e.set(i,(e.get(i)??0)+1);let n=t.map(i=>e.get(i));return{counts:n,max:Math.max(1,...n)}}function Nb(s,t,e=Ue.countColours){let i=(t<=1?0:Math.min(1,Math.max(0,(s-1)/(t-1))))*(e.length-1),r=Math.min(e.length-2,Math.floor(i));return`#${new Ot(e[r]).lerp(new Ot(e[r+1]),i-r).getHexString()}`}var Qi={insight1:{yaw:Math.PI/2,pitch:0,byCount:!1,horizontal:"Location",vertical:"Species"},insight2:{yaw:0,pitch:Math.PI/2,byCount:!0,horizontal:"Time \u2192",vertical:"Location"},insight3:{yaw:0,pitch:0,byCount:!1,horizontal:"Time \u2192",vertical:"Species"}};async function ts(s,t){let{cube:e,field:n,scene:i,frame:r,rotation:o}=s,{counts:a,max:l}=Lb(e),c=t.byCount?h=>Nb(a[h],l):h=>In(e.cubes[h].species);await Promise.all([i?.setView("cube",Ue.pullBack,Ue.pullBackShare),r?.fadeTitlesTo(0,.2)]),o.setTarget({yaw:t.yaw,pitch:t.pitch}),await Promise.all([i?.setView("face",Ue.turn-Ue.pullBack),o.arrive(Ue.turn),n.blendTo(c,t.byCount?1:Ue.alpha,wt.look)]),await r?.showFaceTitles(t.horizontal,t.vertical,.5)}async function Fh(s,{restoreTitles:t=!0}={}){let{cube:e,field:n,scene:i,frame:r,rotation:o}=s;await Promise.all([r?.hideFaceTitles(.2),i?.setView("cube",Ue.pullBack,Ue.pullBackShare)]),o.setTarget({yaw:We.yaw,pitch:We.tilt}),await Promise.all([i?.setView("cube",Ue.turn-Ue.pullBack),o.arrive(Ue.turn),n.blendTo(a=>In(e.cubes[a].species),1,wt.look)]),t&&await r?.fadeTitlesTo(1,.4)}var ep={enter:s=>ts(s,Qi.insight1),reverse:s=>Fh(s)},np={enter:s=>ts(s,Qi.insight2),reverse:s=>ts(s,Qi.insight1)},ip={enter:s=>ts(s,Qi.insight3),reverse:s=>ts(s,Qi.insight2)};var sp={enter:s=>Fh(s,{restoreTitles:!1}),reverse:s=>ts(s,Qi.insight3)};var rp={async enter(s){let{cube:t,field:e,scene:n,frame:i,rotation:r,logo:o}=s;r.setTarget({yaw:0,pitch:0});let a=n.stage(),l=Al({stage:a,image:Ws.image,dots:Ws.dots,unitsPerPixel:a.unitsPerPixel}),c=e.capture().map(f=>({x:f.p.x,y:f.p.y-s.cubeCentre})),h=Xf(c,l),d=h.map((f,p)=>f.removed?p:-1).filter(f=>f>=0),u=h.map(f=>f.removed?void 0:{x:f.x,y:s.cubeCentre+f.y,z:0,scale:f.scale});s.finaleLayout=l,o.place(l.rect),await e.fadeOut(d,wt.finaleFade),await Promise.all([s.setTheme("dark",wt.finale),e.blendTo(f=>In(t.cubes[f].species),1,wt.finale/3),i?.fadeTo(0,1),i?.hideFaceTitles(.4),n?.setView("face",wt.finale),e.flyTo(u,{seconds:wt.finale,morph:1,glow:1})]),await o.fadeTo(1,wt.logoFade),e.setVisible(!1)},async reverse(s){let{cube:t,field:e,scene:n,frame:i,rotation:r,logo:o}=s;e.setVisible(!0),await o.fadeTo(0,.5),r.setTarget({yaw:We.yaw,pitch:We.tilt});let a=Li(t.cubes,t.displayOrder,t.size).map(l=>({...l,scale:1}));await Promise.all([s.setTheme("light",wt.finaleBack),e.flyTo(a,{seconds:wt.finaleBack,morph:0,glow:0}),e.blendTo(l=>In(t.cubes[l].species),1,wt.finaleBack),i?.fadeBoxTo(1,wt.finaleBack/2),n?.setView("cube",wt.finaleBack)])}};var op=.4,Tl={data:Kf,categorise:jf,sort:Qf,arrange:tp,insight1:ep,insight2:np,insight3:ip,conclusion:sp,finale:rp};function ap(s){return s.map(t=>({...t,async enter(e,n){if(!e.scene){await e.setTheme(t.theme);return}if(Tl[t.id])return Tl[t.id].enter(e,n);await Promise.all([e.setTheme(t.theme),zi(op)])},async reverse(e,n){if(!e.scene){await e.setTheme(n.to.theme);return}if(Tl[t.id])return Tl[t.id].reverse(e,n);await Promise.all([e.setTheme(n.to.theme),zi(op)])}}))}var Fb=900,Dh=1400,Cl=()=>{};function lp({steps:s,onNext:t,onBack:e,onRestart:n,onCaptionShown:i=Cl,onCaptionComplete:r=Cl,onKioskStart:o=Cl}){let a=T=>document.getElementById(T),l={app:a("app"),hero:a("hero"),heroText:a("hero-text"),canvasWrap:a("canvas-wrap"),status:a("status"),title:a("caption-title"),text:a("caption-text"),summary:a("caption-summary"),progress:a("progress"),progressLabel:a("progress-label"),insight:a("insight-indicator"),note:a("note"),credit:a("credit"),announcer:a("announcer"),kioskStart:a("kiosk-start"),kioskStatus:a("kiosk-status"),fallback:a("fallback"),body:document.querySelector(".caption-body"),back:a("back"),next:a("next")};s.forEach(()=>l.progress.appendChild(document.createElement("li")));let c={canNext:!1,canBack:!1,canRestart:!1},h=()=>nn()?0:80,d=[l.title,l.insight,l.note,l.credit],u=(T,E,w,P)=>Promise.all(T.map(F=>F.animate([{opacity:E,transform:`translateX(${E?0:h()}px)`},{opacity:w,transform:`translateX(${w?0:-h()}px)`}],{duration:sn(P/1e3)*1e3,easing:"ease",fill:"forwards"}).finished)),f=-1,p=0,x=null,g=0,m=null,_=!1,R=T=>{if(!T)return;let E=document.createElement("p");E.textContent=T,l.announcer.append(E)},v=T=>{R(T.text),R(T.summary)},S=T=>{l.announcer.replaceChildren(),R(T.insight?`${T.title}, part ${T.insight} of 3`:T.title)},M=T=>{let E=T.id==="intro"||s.indexOf(T)===s.length-1;if(l.app.classList.toggle("is-statement",!!T.statement),l.app.classList.toggle("is-finale",!!T.credit),l.credit.hidden=!T.credit,l.note.textContent=T.note??tu,l.note.classList.toggle("is-hidden",E),l.title.textContent=T.title,l.text.textContent=T.text,l.summary.textContent=T.summary??"",_&&(l.fallback.replaceChildren(...(T.callout??[]).map(w=>Object.assign(document.createElement("li"),{textContent:w.text}))),l.fallback.hidden=!T.callout),l.insight.hidden=!T.insight,l.insight.textContent="",T.insight)for(let w=1;w<=3;w++){let P=document.createElement("span");P.textContent=w,w===T.insight&&(P.className="current"),w>1&&l.insight.append(" \xB7 "),l.insight.append(P)}};async function L(T){let E=++p,{step:w}=T;g=0,await u([...d,l.text],1,0,f===0?0:Fb).catch(()=>{}),E===p&&(M(w),S(w),!(w.captionWhenReady&&c.busy&&(await new Promise(P=>{x=P}),E!==p))&&(await u(d,0,1,Dh).catch(()=>{}),E===p&&(w.callout&&i!==Cl?(g=E,m=w,i(w)):(v(w),await u([l.text],0,1,Dh).catch(()=>{}),E===p&&r(s.indexOf(w))))))}function y(){if(!g||g!==p)return Promise.resolve();g=0,v(m);let T=m,E=p;return u([l.text],0,1,Dh).catch(()=>{}).then(()=>{E===p&&r(s.indexOf(T))})}let A=(T,E)=>()=>{T()&&E()},N=A(()=>c.canNext||c.canRestart,()=>c.canRestart?n():t()),U=A(()=>c.canBack,e);return l.kioskStart.addEventListener("click",()=>o()),l.next.addEventListener("click",N),l.back.addEventListener("click",U),document.addEventListener("keydown",T=>{T.ctrlKey||T.metaKey||T.altKey||T.defaultPrevented||/^(INPUT|TEXTAREA|SELECT)$/.test(T.target.tagName)||(T.key==="PageDown"||T.key==="n"||T.key==="N"?(T.preventDefault(),N()):(T.key==="PageUp"||T.key==="b"||T.key==="B")&&(T.preventDefault(),U()))}),{revealText:y,announce:R,setKioskMode(T){l.kioskStatus.hidden=T!=="auto",l.kioskStart.hidden=T==="auto",T==="auto"&&R("Playing automatically. Press any key or click to take control.")},render(T){c=T;let{step:E,index:w}=T;!T.busy&&x&&(x(),x=null);let P=E.id==="intro",F=w===s.length-1;l.app.classList.toggle("is-intro",P),l.app.classList.toggle("is-busy",T.busy),l.heroText.textContent=s[0].text,l.canvasWrap.setAttribute("aria-label",E.rotate?`${E.canvasLabel} Use the arrow keys to turn it; it springs back when you let go.`:E.canvasLabel),l.progressLabel.textContent=`Step ${w+1} of ${s.length}`,[...l.progress.children].forEach((O,V)=>{O.classList.toggle("done",V<=w),V===w?O.setAttribute("aria-current","step"):O.removeAttribute("aria-current")}),w!==f&&(f<0?(M(E),S(E),v(E),r(w)):L(T),f=w),l.next.textContent=F?"Restart":"Next",l.back.setAttribute("aria-disabled",String(!T.canBack)),l.next.setAttribute("aria-disabled",String(!(T.canNext||T.canRestart)))},showFatal(T){l.status.hidden=!1,l.status.textContent=T,l.back.setAttribute("aria-disabled","true"),l.next.setAttribute("aria-disabled","true")},showNoWebGL(){_=!0,l.canvasWrap.hidden=!0,l.status.hidden=!1,l.status.textContent="The 3D view needs WebGL, which is not available in this browser. The steps and text below still work."}}}var Rl=s=>Math.max(0,Math.min(1,s));function Bh(s){let t=s.map((c,h)=>c?{...c,index:h}:null).filter(Boolean);if(!t.length)return-1;let e=c=>[...c].sort((h,d)=>h-d)[Math.floor(c.length/2)],n=e(t.map(c=>c.x)),i=e(t.map(c=>c.y)),r=c=>Math.hypot(c.x-n,c.y-i),o=[...t].sort((c,h)=>r(c)-r(h)),a=r(o[Math.min(o.length-1,Math.floor(t.length*.7))]);return t.filter(c=>r(c)<=a).reduce((c,h)=>h.x-h.y>c.x-c.y?h:c).index}function cp({layer:s,locate:t,pick:e,obstacles:n=()=>[],others:i=()=>[],settings:r=no}){let o="http://www.w3.org/2000/svg",a=document.createElementNS(o,"svg");a.setAttribute("class","callout-line"),a.setAttribute("aria-hidden","true");let l=document.createElementNS(o,"line"),c=document.createElementNS(o,"circle");c.setAttribute("r","3");let h=document.createElementNS(o,"rect");h.setAttribute("pathLength","1"),h.setAttribute("class","callout-box"),a.append(h,l,c);let d=document.createElement("p");d.className="callout-label",s.append(a,d);let u="idle",f=null,p=1,x=0,g=!0,m=0,_=-1,R=0,v=0,S=1,M=e,L=r.delay,y=null,A=null,N={side:1,angle:r.angle,length:r.length};function U(){u="idle",f=null,h.style.display="none",a.style.opacity="0",d.style.opacity="0",d.hidden=!0}U();function T(w){let P=s.clientWidth,F=s.clientHeight,O=d.offsetHeight||90,V=n().filter(Boolean),D=i().filter(Boolean),z=null;for(let W of[r.length,r.length+50,r.length+110])for(let J of[r.angle,55,70,25,-25,-45])for(let ot of[1,-1]){let lt=J*Math.PI/180,xt=w.x+ot*Math.cos(lt)*W,Ct=w.y-Math.sin(lt)*W,K=ot>0?xt+10:xt-10-r.labelWidth,Q={left:K-14,right:K+r.labelWidth+14,top:Ct-O/2-14,bottom:Ct+O/2+14};if(Q.left<8||Q.right>P-8||Q.top<8||Q.bottom>F-8)continue;let ht=D.some(rt=>!(Q.right<rt.left||Q.left>rt.right||Q.bottom<rt.top||Q.top>rt.bottom)),Mt=V.filter(rt=>rt.x>=Q.left&&rt.x<=Q.right&&rt.y>=Q.top&&rt.y<=Q.bottom).length+(ht?1e3:0);if((!z||Mt<z.covered)&&(z={side:ot,angle:J,length:W,covered:Mt}),Mt===0)return z}return z??N}function E(){let w,P=r.gap;if(f){let lt=f();if(!lt){a.style.opacity="0",d.style.opacity="0";return}h.style.display=g?"":"none",h.setAttribute("x",lt.left),h.setAttribute("y",lt.top),h.setAttribute("width",lt.right-lt.left),h.setAttribute("height",lt.bottom-lt.top),h.style.strokeDashoffset=String(1-x),w={x:p>0?lt.right:lt.left,y:lt.top+(lt.bottom-lt.top)*(lt.anchor??.5)},P=4}else w=t(_);if(!w){a.style.opacity="0",d.style.opacity="0";return}let F=s.clientWidth,{side:O}=N,V=N.angle*Math.PI/180,D=O*Math.cos(V),z=-Math.sin(V),W={x:w.x+D*P,y:w.y+z*P},J={x:w.x+D*N.length,y:w.y+z*N.length},ot={x:W.x+(J.x-W.x)*R,y:W.y+(J.y-W.y)*R};l.setAttribute("x1",W.x),l.setAttribute("y1",W.y),l.setAttribute("x2",ot.x),l.setAttribute("y2",ot.y),c.setAttribute("cx",W.x),c.setAttribute("cy",W.y),c.style.display=R>0?"":"none",l.style.display=R>0?"":"none",a.style.opacity=String(S),Object.assign(d.style,{left:O>0?`${J.x+10}px`:"auto",right:O>0?"auto":`${F-J.x+10}px`,top:`${J.y}px`,textAlign:O>0?"left":"right",width:`${r.labelWidth}px`,opacity:String(v*S)})}return{get phase(){return u},occupied(){if(u==="idle"||u==="waiting"||d.hidden)return null;let w=d.getBoundingClientRect(),P=s.getBoundingClientRect();return{left:w.left-P.left,right:w.right-P.left,top:w.top-P.top,bottom:w.bottom-P.top}},schedule(w,{pick:P=e,delay:F=r.delay,onShown:O=null,onLabel:V=null,region:D=null,side:z="right",outline:W=!0}={}){g=W,U(),f=D,p=z==="left"?-1:1,M=P,L=F,y=O,A=V,d.textContent=w,d.hidden=!1,m=0,u="waiting"},hide(){if(y=null,A=null,u!=="idle"){if(u==="waiting"){U();return}u="leaving",m=0}},update(w){if(u!=="idle"){if(m+=w,u==="waiting"&&m>=L){if(f)N={side:p,angle:r.angle/2,length:r.length},u=g?"boxing":"growing";else{if(_=M(),_<0){U();return}N=T(t(_)??{x:0,y:0}),u="growing"}m=0,R=0,x=0,v=0,S=1}if(u==="boxing")x=Rl(m/sn(r.box)),m>=sn(r.box)&&(u="growing",m=0,x=1);else if(u==="growing"){if(R=Rl(m/sn(r.grow)),R=R*R*(3-2*R),m>=sn(r.grow)){u="labelling",m=0,R=1;let P=A;A=null,P?.()}}else if(u==="labelling"){if(v=Rl(m/sn(r.labelFade)),m>=sn(r.labelFade)){u="shown";let P=y;y=null,P?.()}}else if(u==="leaving"&&(S=1-Rl(m/sn(r.leave)),S<=0)){U();return}u!=="waiting"&&E()}}}}function hp({controller:s,steps:t,config:e=io,eventMode:n=!1,reduced:i=()=>!1,timers:r={set:(l,c)=>setTimeout(l,c),clear:l=>clearTimeout(l)},now:o=()=>performance.now(),onChange:a=()=>{}}){let l="off",c=null,h=null,d=0,u=0,f={index:-1,busy:!1,captionDone:!1},p=y=>y?y.trim().split(/\s+/).length:0;function x(y){let A=t[y],N;return y===0?N=e.introDwell:y===t.length-1?N=e.finaleDwell:N=Math.min(e.maxDwell,Math.max(e.minDwell,e.base+e.perWord*p(A.text))),i()?N*2:N}let g=()=>{c!==null&&(r.clear(c),c=null)},m=()=>{h!==null&&(r.clear(h),h=null)};function _(){l!=="auto"||f.busy||!f.captionDone||c!==null||(c=r.set(R,x(f.index)*1e3))}function R(){c=null,l==="auto"&&(s.state.index>=t.length-1?s.restart():s.next())}function v(y){l=y,a(l)}function S(){l==="auto"&&(g(),v("manual"),n&&M())}function M(){m(),h=r.set(L,e.idleReturn*1e3)}function L(){h=null,l==="manual"&&(d=o(),v("auto"),s.state.index>0?(f.captionDone=!1,s.restart()):_())}return{get mode(){return l},get eventMode(){return n},start(){m(),d=o();let y=s.state;f.index=y.index,f.busy=y.busy,f.captionDone=y.index===0&&!y.busy,v("auto"),_()},stateChanged(y){y.index!==f.index&&(f.index=y.index,f.captionDone=!1,g()),f.busy=y.busy,_()},captionComplete(y){y===f.index&&(f.captionDone=!0,_())},input(y,A=!0){if(l==="auto"){if(y==="pointermove"&&(!A||o()-d<e.pointerGrace*1e3))return;S()}else l==="manual"&&n&&M()},update(y){u+=y},virtualPoint(y){return l!=="auto"||!t[f.index]?.repel||f.busy||!f.captionDone?null:{x:Math.sin(u*e.cursorSpeed)*.38*y.width,z:Math.sin(u*e.cursorSpeed*1.5+1)*.3*y.depth}}}}function up(s,t=document){let e=null;for(let n of["pointerdown","keydown","wheel","touchstart"])t.addEventListener(n,()=>s.input(n),{capture:!0,passive:!0});t.addEventListener("pointermove",n=>{let i=!e||Math.hypot(n.clientX-e.x,n.clientY-e.y)>4;e={x:n.clientX,y:n.clientY},s.input("pointermove",i)},{capture:!0,passive:!0})}var Kr=ap(eu),es=lp({steps:Kr,onNext:()=>Ni.next(),onBack:()=>Ni.back(),onRestart:()=>Ni.restart(),onCaptionComplete:s=>Bi?.captionComplete(s),onKioskStart:()=>Bi?.start(),onCaptionShown:s=>{s.calloutWhenReady&&Ni.state.busy?Yr=s:mp(s)}}),be;try{be=nu()}catch(s){throw console.error(s),es.showFatal(`${s.message} The animation cannot start.`),s}var Qt=df(document.getElementById("canvas-wrap"),document.querySelector(".stage"));Qt||es.showNoWebGL();var dp=du(s=>{let t=document.documentElement.style;for(let[e,n]of Object.entries(s))t.setProperty(`--${e}`,n);Qt?.setClearColour(s.bg)},Kr[0].theme),ci=su(be.cubes.length),$r=Df();$r.setBounds(ci.width,ci.depth);Qt?.setArena({...ci,streamRadius:lu(be.cubes.length,{duration:wt.drop,ramp:wt.dropRamp})});var Wn=Nh(be.size);Qt?.setCubeFrame(Wn);var Fi=Qt?Of({scene:Qt.cubeGroup,physics:$r,cubes:be.cubes,arena:ci,getSpawnY:()=>Qt.spawnY}):null,Il=Qt?qf({parent:Qt.cubeGroup,staticParent:Qt.faceGroup,edge:Wn.edge,centreY:Wn.centreY,makeLabel:s=>{let t=document.createElement("div");return t.className="axis-label",t.textContent=s,t}}):null,Pl=Yf(document.getElementById("logo")),Zr=Qt?Gf({element:document.getElementById("canvas-wrap"),pivot:Qt.pivot}):null;Qt?.pivot.position.set(0,Wn.centreY,0);Qt?.onResize(()=>{if(Di.finaleLayout&&Pl.amount>0){let s=Qt.stage();Di.finaleLayout=Al({stage:s,image:Ws.image,dots:Ws.dots,unitsPerPixel:s.unitsPerPixel}),Pl.place(Di.finaleLayout.rect)}});Qt?.cubeGroup.position.set(0,-Wn.centreY,0);var Uh=Qt?zf({scene:Qt.scene,camera:Qt.camera}):null,Di={cube:be,arena:ci,scene:Qt,physics:$r,field:Fi,network:Uh,frame:Il,rotation:Zr,logo:Pl,cubeCentre:Wn.centreY,repel:!1,setTheme:(s,t=wt.theme)=>dp.animateTo(s,t),capture:()=>Fi?.capture()??[],reset:async()=>{await Pl.fadeTo(0,.6),Fi?.clear(),Zr?.setTarget({yaw:0,pitch:0}),await Promise.all([Il?.fadeTo(0,.2),Il?.hideFaceTitles(.2),Qt?.setView("floor",wt.theme),Qt?.fadeShadow(1,wt.theme),dp.animateTo(Kr[0].theme,wt.theme),Uh?.fadeTo(1,wt.theme)])}},Oh=[-1,1].flatMap(s=>[-1,1].flatMap(t=>[-1,1].map(e=>({x:s*Wn.edge/2,y:Wn.centreY+t*Wn.edge/2,z:e*Wn.edge/2})))),Xs=s=>{if(s>=be.cubes.length)return Qt.toStage(Oh[s-be.cubes.length]);let t=Fi?.positionOf(s);return t?Qt.toStage(t):null},Jr=Qt&&Fi?[0,1,2,3].map(s=>cp({layer:document.getElementById("callouts"),locate:Xs,pick:()=>-1,obstacles:()=>be.cubes.map((t,e)=>Xs(e)),others:()=>Jr.filter((t,e)=>e!==s).map(t=>t.occupied())})):[],Yr=null;function Db(s){let e=Xr(ci,be.displayOrder).map((o,a)=>({...o,id:a})).filter(o=>o.x!==void 0),n=e.map(o=>o.z).sort((o,a)=>o-a),r=e.filter(o=>o.z<=n[Math.floor((n.length-1)/2)]).reduce((o,a)=>(s==="backLeftHeap"?a.x<o.x:a.x>o.x)?a:o);return new Set(be.cubes.map((o,a)=>o.species===r.id?a:-1).filter(o=>o>=0))}function Bb(s,t){let e=be.cubes.map((i,r)=>t.has(r)?null:Xs(r)),n=(i,r)=>i.reduce((o,a,l)=>a&&(o<0||r(a)>r(i[o]))?l:o,-1);if(s==="cubeTopRight")return be.cubes.length+n(Oh.map((i,r)=>Xs(be.cubes.length+r)),i=>i.x-i.y);if(s==="backLeftHeap"||s==="backRightHeap"){let i=Db(s);return Bh(e.map((r,o)=>i.has(o)?r:null))}if(s==="rightmost")return n(e,i=>i.x);if(s==="leftmost")return n(e,i=>-i.x);if(s==="lowest")return n(e,i=>i.y);if(s==="rightmostBack"){let i=e.filter(Boolean).map(o=>o.depth).sort((o,a)=>o-a),r=i[Math.floor(i.length*.75)];return n(e.map(o=>o&&o.depth>=r?o:null),o=>o.x)}return Bh(e)}function Ub(s,t){if(s==="cubeBox"){let h=Oh.map((d,u)=>Xs(be.cubes.length+u)).filter(Boolean);return h.length?{left:Math.min(...h.map(d=>d.x)),right:Math.max(...h.map(d=>d.x)),top:Math.min(...h.map(d=>d.y)),bottom:Math.max(...h.map(d=>d.y)),anchor:t}:null}let e=be.displayOrder,n=new Set(s==="specialists"?e.slice(-2):e.slice(0,2)),i=be.cubes.map((h,d)=>n.has(h.species)?d:-1).filter(h=>h>=0),r=i.map(h=>Xs(h)).filter(Boolean);if(!r.length)return null;let o=Fi.positionOf(i[0]),a=Qt.toStage(o),l=Qt.toStage({x:o.x,y:o.y+1,z:o.z}),c=.5*Math.hypot(l.x-a.x,l.y-a.y)+6;return{left:Math.min(...r.map(h=>h.x))-c,right:Math.max(...r.map(h=>h.x))+c,top:Math.min(...r.map(h=>h.y))-c,bottom:Math.max(...r.map(h=>h.y))+c}}function mp(s){let t=s.callout,e=new Set,n=i=>{if(i>=t.length||!Jr[i]){es.revealText();return}let{target:r,text:o,reveal:a,delay:l,side:c,outline:h,anchor:d}=t[i];Jr[i].schedule(o,{...c?{region:()=>Ub(r,d),side:c,outline:h}:{},delay:i===0?void 0:l??0,onLabel:()=>{a&&Il?.showAxis(a,no.labelFade),es.announce(o)},pick:()=>{let u=Bb(r,e);return e.add(u),u},onShown:()=>n(i+1)})};n(0)}var Ni=Jf({steps:Kr,ctx:Di,onChange:s=>{if(Di.repel=!!s.step.repel&&!nn(),Zr&&(Zr.enabled=!!s.step.rotate),s.index!==fp&&(Jr.forEach(t=>t.hide()),Yr=null,fp=s.index),!s.busy&&Yr){let t=Yr;Yr=null,mp(t)}es.render(s),Bi?.stateChanged(s)}}),fp=Ni.state.index;es.render(Ni.state);var gp=/[?&]kiosk(?:&|$)/.test(location.search),Bi=hp({controller:Ni,steps:Kr,eventMode:gp,reduced:nn,onChange:s=>{es.setKioskMode(s),s!=="auto"&&qs&&(qs.hidden=!0)}});up(Bi);var qs=document.getElementById("virtual-cursor");gp&&Bi.start();function Ob(s){if(!s||!Qt){qs.hidden=!0;return}let t=Qt.toStage({x:s.x,y:.5,z:s.z});if(!t){qs.hidden=!0;return}qs.hidden=!1,qs.style.transform=`translate(${t.x}px, ${t.y}px)`}function xp(s){Fi?.tick(s),Zr?.update(s),Jr.forEach(n=>n.update(s)),nn()||Uh?.update(s,Qt?.pointerNdc()),Bi.update(s);let t=Di.repel?Bi.virtualPoint(ci):null,e=Di.repel&&(t??Qt?.floorPoint());Ob(t),e&&Zf($r.bodies,e,s),$r.step(s),Fi?.sync()}var yp=!1;location.search.includes("debug")&&(globalThis.__dataCube={ctx:Di,controller:Ni,kiosk:Bi,KIOSK:io,arena:ci,speciesColour:In,DURATIONS:wt,spots:Xr(ci,be.displayOrder),cells:Li(be.cubes,be.displayOrder,be.size),pause:()=>{yp=!0},advance:s=>{for(let t=0;t<s-1e-9;t+=1/60)xp(1/60);Qt?.render()}});var pp=performance.now();function _p(s){let t=Math.min((s-pp)/1e3,.1);pp=s,yp||xp(t),Qt?.render(),requestAnimationFrame(_p)}requestAnimationFrame(_p);})();
