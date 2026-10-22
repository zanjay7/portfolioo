(function(){
var r=document.documentElement,b=document.getElementById('t');
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
var cl=document.createElement('div'),o=document.createElement('div'),d=document.createElement('div');
cl.className='cl';o.className='goo';d.className='cd';
cl.innerHTML='<svg width="0" height="0" style="position:absolute"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="7"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8"/></filter></defs></svg>';
var K=[.4,.3,.22,.16,.12,.09,.065],F=[1,.92,.84,.76,.68,.6,.52],bl=[],bx=[],by=[];
K.forEach(function(){var e=document.createElement('div');e.className='bl';o.appendChild(e);bl.push(e);bx.push(0);by.push(0)});
var m=document.createElement('div');m.className='mf';cl.append(o,m,d);document.body.append(cl);r.classList.add('cur');
var x=0,y=0,px=0,py=0,D=40,on=false;cl.style.opacity=0;
addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;if(!on){px=x;py=y;for(var i=0;i<bx.length;i++){bx[i]=x;by[i]=y}on=true;cl.style.opacity=1}});
document.addEventListener('mouseleave',function(){on=false;cl.style.opacity=0});
document.addEventListener('mouseover',function(e){hv=e.target.closest('a,button');hr=hv?Math.max(parseFloat(getComputedStyle(hv).borderTopLeftRadius)||0,6):0;o.classList.toggle('h',!hv&&!!e.target.closest('.card,.chips span'))});
var hv=null,hr=0,mx=0,my=0,mw=40,mh=40,mr=20,wasH=false;
(function loop(){px+=(x-px)*.6;py+=(y-py)*.6;D+=((o.classList.contains('h')?78:40)-D)*.12;var tx=px,ty=py;for(var i=0;i<bl.length;i++){bx[i]+=(tx-bx[i])*K[i];by[i]+=(ty-by[i])*K[i];var s=D*F[i];bl[i].style.width=bl[i].style.height=s+'px';bl[i].style.transform='translate('+(bx[i]-s/2)+'px,'+(by[i]-s/2)+'px)';tx=bx[i];ty=by[i]}var rc=hv&&hv.isConnected?hv.getBoundingClientRect():null;if(rc&&!wasH){mx=bx[0];my=by[0];mw=mh=D;mr=D/2}wasH=!!rc;var k=.22,tw=rc?rc.width+8:40,th=rc?rc.height+8:40;mx+=((rc?rc.left+rc.width/2:px)-mx)*k;my+=((rc?rc.top+rc.height/2:py)-my)*k;mw+=(tw-mw)*k;mh+=(th-mh)*k;mr+=((rc?hr+4:20)-mr)*k;m.style.width=mw+'px';m.style.height=mh+'px';m.style.borderRadius=Math.min(mr,mw/2,mh/2)+'px';m.style.transform='translate('+(mx-mw/2)+'px,'+(my-mh/2)+'px)';m.style.opacity=rc?1:0;o.style.opacity=rc?0:1;d.style.transform='translate('+px+'px,'+py+'px)';requestAnimationFrame(loop)})();
}
var fine=matchMedia('(pointer:fine)').matches,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!fine){var tp_=document.querySelector('.tsp');if(tp_)tp_.textContent='Tap a key to meet the tool behind it.'}
var pg=document.createElement('div');pg.className='pg';document.body.append(pg);
var hs=document.querySelectorAll('h2'),hero=document.querySelector('.hero'),secs=document.querySelectorAll('section'),nl=document.querySelectorAll('nav a');
function sc(){var h=r.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+'%';
if(rm)return;
hs.forEach(function(e){var t=e.getBoundingClientRect().top,p=Math.min(1,Math.max(0,(innerHeight-t)/(innerHeight*.55)));e.style.setProperty('--p',p)});

var cur='';secs.forEach(function(s){if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});
nl.forEach(function(a){a.style.color=a.getAttribute('href')==='#'+cur?'var(--accent)':''});
}
addEventListener('scroll',sc,{passive:true});sc();
if(!rm){
r.classList.add('js');
var els=document.querySelectorAll('.grp,.item,.grid,section>p,.ab>p');
els.forEach(function(e){e.classList.add('rv')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)});
}
if(fine&&!rm){
var sp=document.createElement('div');sp.className='sp';document.body.append(sp);
addEventListener('mousemove',function(e){sp.style.setProperty('--mx',e.clientX+'px');sp.style.setProperty('--my',e.clientY+'px')});
document.querySelectorAll('.card').forEach(function(c){
c.addEventListener('mousemove',function(e){var q=c.getBoundingClientRect(),px=(e.clientX-q.left)/q.width-.5,py=(e.clientY-q.top)/q.height-.5;c.style.transform='perspective(700px) rotateX('+(-py*10)+'deg) rotateY('+(px*10)+'deg) translateY(-4px)'});
c.addEventListener('mouseleave',function(){c.style.transform=''});
});
document.querySelectorAll('.btn,nav button').forEach(function(m){
m.addEventListener('mousemove',function(e){var q=m.getBoundingClientRect();m.style.transform='translate('+((e.clientX-q.left-q.width/2)*.3)+'px,'+((e.clientY-q.top-q.height/2)*.3)+'px)'});
m.addEventListener('mouseleave',function(){m.style.transform=''});
});
}
var mn=document.getElementById('menu');
document.getElementById('m').addEventListener('click',function(){mn.classList.add('open')});
mn.addEventListener('click',function(e){if(e.target.closest('a,#mc'))mn.classList.remove('open')});
var ld=document.getElementById('ld'),cn=document.getElementById('cnt');
if(rm){ld.style.display='none'}else{var n=0,iv=setInterval(function(){n+=Math.ceil(Math.random()*6);if(n>=100){n=100;clearInterval(iv);setTimeout(function(){ld.classList.add('done')},250)}cn.textContent=n},40)}
var cv=document.getElementById('sky'),cx=cv.getContext('2d'),sts=[],W=0,H=0;
function rs(){var dp=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dp;cv.height=H*dp;cx.setTransform(dp,0,0,dp,0,0);sts=[];var n=Math.round(W*H/11000);for(var i=0;i<n;i++)sts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.3,p:Math.random()*6.28,s:Math.random()*1.5+.4})}
function dr(t){cx.clearRect(0,0,W,H);cx.fillStyle=r.getAttribute('data-theme')==='light'?'#000':'#fff';sts.forEach(function(q){cx.globalAlpha=rm?.7:.25+.75*Math.abs(Math.sin(t/1000*q.s+q.p));cx.beginPath();cx.arc(q.x,q.y,q.r,0,6.283);cx.fill()});cx.globalAlpha=1;requestAnimationFrame(dr)}
rs();addEventListener('resize',rs);requestAnimationFrame(dr);
var CY='<g fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v13c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-13"/></g>',TX=function(t,sz,y,f){return '<text x="12" y="'+y+'" text-anchor="middle" style="font:800 '+sz+'px system-ui"'+(f?' fill="var(--ib)"':'')+'>'+t+'</text>'};
var IC=[
['Python','<path d="M11.9 2C7.3 2 7.6 4 7.6 4v2.1h4.4v.7H5.8S3 6.4 3 11c0 4.6 2.5 4.4 2.5 4.4h1.5v-2.1s-.1-2.5 2.4-2.5h4.2s2.3 0 2.3-2.3V4.4S16.3 2 11.9 2zm-2.3 1.4a.8.8 0 1 1 0 1.5.8.8 0 0 1 0-1.5z"/><path d="M12.1 22c4.6 0 4.3-2 4.3-2v-2.1H12v-.7h6.2S21 17.6 21 13c0-4.6-2.5-4.4-2.5-4.4H17v2.1s.1 2.5-2.4 2.5h-4.2s-2.3 0-2.3 2.3v3.5S7.7 22 12.1 22zm2.3-1.4a.8.8 0 1 1 0-1.5.8.8 0 0 1 0 1.5z"/>'],
['Django',TX('dj',15,17)],
['Django REST Framework','<rect x="2" y="6" width="20" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>'+TX('DRF',8,15)],
['React','<circle cx="12" cy="12" r="2"/><g fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g>'],
['JavaScript','<rect x="2" y="2" width="20" height="20" rx="2"/>'+TX('JS',10,17.5,1)],
['HTML5','<path d="M3 2l1.7 18.5L12 22.5l7.3-2L21 2z"/>'+TX('5',10,16,1)],
['CSS3','<path d="M3 2l1.7 18.5L12 22.5l7.3-2L21 2z"/>'+TX('3',10,16,1)],
['Tailwind CSS','<path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>'],
['Bootstrap','<rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/>'+TX('B',13,16.5)],
['PostgreSQL',CY+TX('PG',7,16)],
['MySQL',CY+TX('My',7,16)],
['SQLite',CY+TX('SQL',6,16)],
['Redis','<path d="M12 3l9 3.5-9 3.5-9-3.5zM3 11l9 3.5 9-3.5M3 15.5l9 3.5 9-3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'],
['Celery','<path d="M12 21V8M12 8C8 8 6 5 6 3c3 0 6 1 6 5zM12 12c4 0 6-3 6-5-3 0-6 1-6 5zM12 16c-3 0-5-2-5-4 3 0 5 1 5 4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'],
['Docker','<rect x="5" y="9" width="3" height="3"/><rect x="9" y="9" width="3" height="3"/><rect x="13" y="9" width="3" height="3"/><rect x="9" y="5.5" width="3" height="3"/><rect x="13" y="5.5" width="3" height="3"/><path d="M2 12.5h18.5c1.4 0 2.2-.8 2.5-1.8-.9-.4-1.9-.2-2.5.4M2 12.5c.3 4 3 6.5 8.2 6.5 5 0 8.3-2.6 9.6-6.5" fill="none" stroke="currentColor" stroke-width="1.8"/>'],
['AWS',TX('aws',9,11)+'<path d="M4 16c5 3.5 11 3.5 16 0M17.5 15.5l2.5.5-.5-2.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'],
['Git','<path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z"/><path d="M9.5 9.5L12 12v4.5M12 12l2.5-2.5" stroke="var(--ib)" stroke-width="1.8" fill="none"/><g fill="var(--ib)"><circle cx="9.5" cy="9.5" r="1.2"/><circle cx="14.5" cy="9.5" r="1.2"/><circle cx="12" cy="16.5" r="1.2"/></g>'],
['GitHub','<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>'],
['Postman','<circle cx="12" cy="12" r="10"/><path d="M7.5 16.5l7-7" stroke="var(--ib)" stroke-width="2" stroke-linecap="round"/><circle cx="15.5" cy="8.5" r="1.8" fill="var(--ib)"/>'],
['Figma','<path d="M8 2h4v6H8a3 3 0 0 1 0-6z"/><path d="M12 2h4a3 3 0 0 1 0 6h-4z"/><path d="M8 8h4v6H8a3 3 0 0 1 0-6z"/><circle cx="15" cy="11" r="3"/><path d="M8 14h4v3a3 3 0 1 1-4-2.8z"/>'],
['Render','<path d="M12 2C6.5 2 3 6 3 11.5V22h6v-6.5c0-1.7 1.3-3 3-3h5.5c1.7 0 3-1.3 3-3C20.5 4.2 17 2 12 2z"/>'],
['Vercel','<path d="M12 3l10 18H2z"/>'],
['Cursor AI','<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 12l9-5M12 12v10M12 12L3 7" fill="none" stroke="currentColor" stroke-width="1.6"/>'],
['Emergent AI','<rect x="2" y="2" width="20" height="20" rx="5"/>'+TX('E',13,17,1)]
];
var allK=[],kb=document.getElementById('kb'),kf=document.getElementById('kfix'),KH=460;
for(var z=0;z>-18;z-=6){var bs=document.createElement('div');bs.className='ly bs';bs.style.cssText='left:0;top:0;width:546px;height:'+KH+'px;transform:translateZ('+(z-2)+'px)';kb.appendChild(bs)}
var shd=document.createElement('div');shd.className='sh';kb.appendChild(shd);
function mkKey(l,t,w,html,title,cls){var k=document.createElement('div');k.className='key '+(cls||'');k.style.left=l+'px';k.style.top=t+'px';if(w)k.style.width=w+'px';for(var n=0;n<4;n++){var ly=document.createElement('div');ly.className='ly';ly.style.margin=(n*1.05)+'px';ly.style.transform='translateZ('+(n*5)+'px)';k.appendChild(ly)}var tp=document.createElement('div');tp.className='tp';tp.title=title||'';tp.style.transform='translateZ(18px)';tp.innerHTML=html;k.appendChild(tp);kb.appendChild(k);allK.push(k)}
IC.forEach(function(t,i){mkKey(20+(i%6)*86,20+Math.floor(i/6)*86,0,'<svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">'+t[1]+'</svg><small>'+t[0].replace('Django REST Framework','DRF').replace('Tailwind CSS','Tailwind')+'</small>',t[0])});
mkKey(106,364,334,'','','sp');
var EX={
'Embedded C':'<g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></g>'+TX('C',9,15.5),
'Microcontroller':'<g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></g><rect x="9" y="9" width="6" height="6" rx="1"/>',
'Sensors':'<circle cx="12" cy="16" r="2"/><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M7.8 11.8a6 6 0 0 1 8.4 0M4.6 8.6a10.5 10.5 0 0 1 14.8 0"/></g>',
'NodeMCU':'<circle cx="12" cy="19" r="1.7"/><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M8.2 14.8a5.4 5.4 0 0 1 7.6 0M4.8 11.4a10.2 10.2 0 0 1 14.4 0M1.8 8a14.4 14.4 0 0 1 20.4 0"/></g>',
'Electrical Testing':'<path d="M13.5 2L4.5 13.5h6L9.5 22l9-11.5h-6z"/>',
'Quality Control':'<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M7.8 12.4l3 3 5.6-6.8"/></g>',
'Telecom':'<circle cx="12" cy="8" r="1.9"/><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 10v11M8.5 21h7M8 4.8a5.4 5.4 0 0 0 0 6.4M16 4.8a5.4 5.4 0 0 1 0 6.4M5 2.4a9.4 9.4 0 0 0 0 11.2M19 2.4a9.4 9.4 0 0 1 0 11.2"/></g>',
'Networking':'<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 7.4V13M12 13l-6 4.4M12 13l6 4.4"/></g>'
};
function icoOf(n){for(var q=0;q<IC.length;q++)if(IC[q][0]===n)return IC[q][1];return EX[n]||''}
document.querySelectorAll('.tech').forEach(function(el){el.innerHTML=el.getAttribute('data-t').split(',').map(function(n){n=n.trim();return '<span class="tc"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">'+icoOf(n)+'</svg>'+n+'</span>'}).join('')});

var P=[{rx:56,rz:-38,s:.85},{rx:50,rz:-22,s:.5},{rx:44,rz:-6,s:.68}],
NM=[0,0,1],
anc=['aH','aA','aT'].map(function(id){return document.getElementById(id)}),N=anc.length;
function ez(t){t=Math.min(1,Math.max(0,t));return t*t*(3-2*t)}
var cache=null;
function measure(){var y0=scrollY;cache=anc.map(function(a,ix){var q=a.getBoundingClientRect();return{x:q.left+q.width/2-(ix==1&&innerWidth>800?70:0),dy:q.top+y0+q.height/2,w:q.width,h:q.height}})}
measure();addEventListener('resize',measure);addEventListener('load',measure);
if(window.ResizeObserver){new ResizeObserver(measure).observe(document.body)}
setInterval(measure,1200);
var kz=0,kzv=0,kx=0,kxv=0,cs=null,lastT=performance.now(),lastSy=scrollY,flying=false,bgOn=false;
var spT=0,spC=0,lastAng=null;
function kick(k,pw){kzv+=((k._cx-273)/273)*1.9*pw;kxv+=-((k._cy-230)/230)*1.5*pw}
if(fine&&!rm){addEventListener('mousemove',function(e){
if(!cs)return;
var dx=e.clientX-cs.x,dy=e.clientY-cs.y,d=Math.hypot(dx,dy),R=330*cs.s+90;
if(d<R&&d>30){var a=Math.atan2(dy,dx);
if(lastAng!==null){var da=a-lastAng;if(da>Math.PI)da-=2*Math.PI;if(da<-Math.PI)da+=2*Math.PI;spT+=da*57.2958*.35;spT=Math.max(-28,Math.min(28,spT))}
lastAng=a}else lastAng=null},{passive:true})}
(function kloop(now){
now=now||performance.now();var dt=Math.min(50,now-lastT);lastT=now;
var vh=innerHeight,sy=scrollY,A=cache,S=[],q;
for(q=0;q<N;q++){S[q]=A[q].dy-vh/2;if(q&&S[q]<S[q-1]+1)S[q]=S[q-1]+1}
var i=0;while(i<N-1&&sy>=S[i+1])i++;
var j=Math.min(i+1,N-1),w=0;
if(i<N-1){w=ez(((sy-S[i])/(S[i+1]-S[i])-.25)/.5)}
function sc(z){return Math.min(P[z].s,A[z].w/650,A[z].h/500)}
var x=A[i].x+(A[j].x-A[i].x)*w,y=A[i].dy+(A[j].dy-A[i].dy)*w-sy,
rx=P[i].rx+(P[j].rx-P[i].rx)*w,rz=P[i].rz+(P[j].rz-P[i].rz)*w,
s=sc(i)+(sc(j)-sc(i))*w,nm=NM[i]+(NM[j]-NM[i])*w,fly=Math.sin(Math.PI*w);
s*=1-.4*fly;
/* after Tech Stack: keyboard becomes a big faded background */
var bgw=ez((sy-(S[N-1]+vh*.3))/(vh*.6)),bs=Math.min(1,innerWidth/640)*.95;
x+=(innerWidth/2-x)*bgw;y+=(vh/2-y)*bgw;s+=(bs-s)*bgw;nm*=1-bgw;
rx+=(50+Math.cos(sy/700)*4-rx)*bgw;rz+=(-20+Math.sin(sy/500)*10-rz)*bgw;
var fi=i+w;tsOn=Math.abs(fi-2)<.3&&bgw<.05;if(!tsOn&&tipOn)hideTip();
/* on the Tech Stack page the keyboard itself stays still */
var lockW=(fi>1.65?ez((fi-1.65)/.35):0)*(1-Math.min(1,bgw*5)),mo=1-lockW;
if(!cs){cs={x:x,y:y,rx:rx,rz:rz,s:s}}
var f=1-Math.pow(1-.14,dt/16.7),fy=1-Math.pow(1-.4,dt/16.7);f+=(1-f)*lockW;fy+=(1-fy)*lockW;
cs.x+=(x-cs.x)*f;cs.y+=(y-cs.y)*fy;cs.rx+=(rx-cs.rx)*f;cs.rz+=(rz-cs.rz)*f;cs.s+=(s-cs.s)*f;
var dsy=sy-lastSy;lastSy=sy;if(!rm&&lockW<.5)kzv+=Math.max(-5,Math.min(5,dsy))*.04;
kzv+=-kz*.14;kzv*=.86;kz+=kzv;kxv+=-kx*.14;kxv*=.86;kx+=kxv;
spT*=.975;spC+=(spT-spC)*.14;
var idz=0,idx=0,bob=0;if(!rm){idz=Math.sin(now/1700)*.6;idx=Math.cos(now/2300)*.5;bob=Math.sin(now/1400)*3}
var ov=(cs.y-vh/2)/vh;
var frz=cs.rz+(spC+kz+idz+ov*14)*mo,frx=cs.rx+(kx+idx-ov*5)*mo;
kf.style.transform='translate3d('+(cs.x-273)+'px,'+(cs.y-230+bob*mo)+'px,0) scale('+cs.s+')';
kb.style.transform='rotateX('+frx+'deg) rotateZ('+frz+'deg)';
kb.style.setProperty('--nm',nm);
kf.style.opacity=(1-.5*fly)*(1-.68*bgw);
var bgm=bgw>.02;if(bgm!==bgOn){bgOn=bgm;kf.style.zIndex=bgm?0:2}
var fl=fly>.35||bgm;if(fl!==flying){flying=fl;kf.classList.toggle('fly',fl)}
requestAnimationFrame(kloop)})();

/* smooth wheel scrolling */
var tg=scrollY,cu=scrollY,an=false;
function stp(){cu+=(tg-cu)*.11;if(Math.abs(tg-cu)<.4){cu=tg;an=false}scrollTo({top:cu,behavior:'instant'});if(an)requestAnimationFrame(stp)}
if(fine&&!rm){
addEventListener('wheel',function(e){if(e.ctrlKey||e.defaultPrevented)return;e.preventDefault();var dy=e.deltaY*(e.deltaMode===1?34:e.deltaMode===2?innerHeight:1);if(!an){cu=scrollY;tg=scrollY}tg=Math.max(0,Math.min(r.scrollHeight-innerHeight,tg+dy));if(!an){an=true;requestAnimationFrame(stp)}},{passive:false});
addEventListener('scroll',function(){if(!an){tg=cu=scrollY}},{passive:true});
}

var AC=null,NB=null,lastS=0;
function unlock(){try{if(!AC){var C=window.AudioContext||window.webkitAudioContext;if(!C)return;AC=new C()}if(AC.state==='suspended')AC.resume()}catch(err){}}
['pointerdown','keydown','touchstart','click'].forEach(function(ev){addEventListener(ev,unlock,{passive:true})});
function snd(up){try{
if(!AC||AC.state!=='running')return;
var t=AC.currentTime,sr=AC.sampleRate,len=Math.floor(sr*.045);
if(!NB){NB=AC.createBuffer(1,len,sr);var d=NB.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3)}
var vol=up?.35:1,pv=.92+Math.random()*.16;
var s=AC.createBufferSource();s.buffer=NB;s.playbackRate.value=pv;
var bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=(up?3600:2400)*pv;bp.Q.value=1.1;
var g=AC.createGain();g.gain.setValueAtTime(.55*vol,t);g.gain.exponentialRampToValueAtTime(.001,t+.05);
s.connect(bp);bp.connect(g);g.connect(AC.destination);s.start(t);
var o=AC.createOscillator(),og=AC.createGain();o.type='sine';
o.frequency.setValueAtTime((up?220:170)*pv,t);o.frequency.exponentialRampToValueAtTime(60,t+.06);
og.gain.setValueAtTime(.35*vol,t);og.gain.exponentialRampToValueAtTime(.001,t+.07);
o.connect(og);og.connect(AC.destination);o.start(t);o.stop(t+.08)
}catch(err){}}
var tsOn=false,tipOn=false,tipT=0,tipEl=document.getElementById('tip');
var DS={
'Python':'Indentation is my love language. Snake included, no venom.',
'Django':'The framework for perfectionists with deadlines. Batteries included, drama excluded.',
'Django REST Framework':'Turns database rows into JSON and coffee into endpoints.',
'React':'Re-renders my UI and occasionally my sanity.',
'JavaScript':'Makes the web move. Also makes 0.1 + 0.2 not equal 0.3.',
'HTML5':'The skeleton of every page. Not a programming language (please don’t tell it).',
'CSS3':'Centering a div since forever. Still a coin flip on the first try.',
'Tailwind CSS':'Class names so long they need their own scrollbar.',
'Bootstrap':'Looks good in five minutes. Looks like everyone else’s in six.',
'PostgreSQL':'The elephant that never forgets your data.',
'MySQL':'The friendly dolphin of databases. Everywhere, always.',
'SQLite':'An entire database in one file. Travels light.',
'Redis':'Remembers everything instantly. Forgets on restart, like me before coffee.',
'Celery':'Does the slow work in the background. Less crunchy than the vegetable.',
'Docker':'Fixes “works on my machine” by shipping the machine.',
'AWS':'Cloud computing, with a bill that is also in the clouds.',
'Git':'A time machine for code. Goodbye, final_v2_REAL.',
'GitHub':'Where my code lives and my green squares live rent-free.',
'Postman':'Sends requests, hopes for 200 OK, sometimes gets 500 tears.',
'Figma':'Where pixels get argued about before they get coded.',
'Render':'Deploy, relax, repeat. Free tier naps included.',
'Vercel':'Push to git, site goes live. Feels like cheating.',
'Cursor AI':'My pair programmer who never steals the snacks.',
'Emergent AI':'Describe the app in plain English, get a prototype. Magic with a prompt.'
};
function hideTip(){tipOn=false;tipEl.classList.remove('on');clearTimeout(tipT)}
function showTip(n){document.getElementById('tipN').textContent=n;document.getElementById('tipD').textContent=DS[n]||'';tipOn=true;tipEl.classList.add('on');clearTimeout(tipT);tipT=setTimeout(hideTip,4000)}
allK.forEach(function(k){k._cx=parseFloat(k.style.left)+(parseFloat(k.style.width)||76)/2;k._cy=parseFloat(k.style.top)+38});
function ripple(k){allK.forEach(function(o){if(o===k)return;var d=Math.hypot(o._cx-k._cx,o._cy-k._cy);if(d<190){setTimeout(function(){o.classList.add('r');setTimeout(function(){o.classList.remove('r')},170)},d*.55)}})}
function play(k,ki,pw){var n=performance.now();if(n-lastS>45){lastS=n;snd(false)}kick(k,pw);if(!rm)ripple(k);if(tsOn&&IC[ki])showTip(IC[ki][0])}
allK.forEach(function(k,ki){
k.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')play(k,ki,.45)});
k.addEventListener('pointerdown',function(){k.classList.add('p');play(k,ki,1)});
['pointerup','pointercancel'].forEach(function(ev){k.addEventListener(ev,function(){k.classList.remove('p')})});
k.addEventListener('pointerleave',function(){k.classList.remove('p');if(tipOn){clearTimeout(tipT);tipT=setTimeout(hideTip,1800)}});
});
if(!rm){setInterval(function(){var k=allK[Math.floor(Math.random()*allK.length)];k.classList.add('p');setTimeout(function(){k.classList.remove('p')},220)},350)}
b.addEventListener('click',function(){
var dark=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
r.setAttribute('data-theme',dark?'light':'dark');
});
})();
