// Para incluir uma OS, copie uma linha de "itens". Para incluir outro grupo, copie um bloco inteiro.
// Item sem link (url:'') aparece como "Link em breve".
const GRUPOS=[
  {titulo:'Metais Básicos',itens:[
    {os:'061',local:'Salobo',url:'https://dyegomorais-arch.github.io/agendamentos-061/'},
    {os:'516',local:'Carajás',url:'https://dyegomorais-arch.github.io/AGENDAMENTOS---516/index.html'},
    {os:'061',local:'Sossego',url:'https://dyegomorais-arch.github.io/agendamentos-061-sossego/'}
  ]},
  {titulo:'Outras OS',itens:[
    {os:'023',local:'',url:'https://dyegomorais-arch.github.io/agendamentos-023/'},
    {os:'025',local:'',url:'https://dyegomorais-arch.github.io/agendamentos-025/index.html'}
  ]}
];
const CH='portal_ultima';
let ultima=null;try{ultima=localStorage.getItem(CH)}catch(e){}
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e};
const box=document.getElementById('grupos');
GRUPOS.forEach((g,gi)=>{
  const p=el('section','painel');p.style.setProperty('--g',gi);
  const h=el('h2','',g.titulo);h.append(el('small','',g.itens.length+(g.itens.length>1?' sistemas':' sistema')));
  const cards=el('div','cards');
  g.itens.forEach(s=>{
    const id=s.os+'|'+s.local,ok=!!s.url;
    const a=el(ok?'a':'div','os'+(id===ultima?' last':'')+(ok?'':' soon'));
    if(ok){a.href=s.url;a.setAttribute('aria-label','Abrir OS '+s.os+(s.local?' - '+s.local:''));
      a.addEventListener('click',()=>{try{localStorage.setItem(CH,id)}catch(e){}});
      a.addEventListener('pointermove',e=>{const r=a.getBoundingClientRect();a.style.setProperty('--mx',(e.clientX-r.left)+'px');a.style.setProperty('--my',(e.clientY-r.top)+'px')})}
    const b=el('div','b');b.append(el('span','n',s.local||s.os));if(ok)b.append(el('i','go'));
    a.append(el('span','l',s.local?'OS '+s.os:'OS'),b);
    if(!ok)a.append(el('span','l','Link em breve'));
    if(id===ultima&&ok)a.append(el('span','ult','Último acesso'));
    cards.append(a);
  });
  p.append(h,cards);box.append(p);
});
(()=>{const c=document.getElementById('poeira'),r=Math.random;for(let i=0;i<22;i++){const e=document.createElement('i');e.style.cssText=`--l:${r()*100}%;--s:${2+r()*4}px;--d:${9+r()*10}s;--dl:${-r()*16}s;--x:${(r()-.5)*160}px`;c.appendChild(e)}})();
