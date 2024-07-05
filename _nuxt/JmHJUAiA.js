import{d as S,ap as A,aq as f,c as o,e as d,n as l,E as t,aj as k,k as T,t as $,g,f as b,h as C,F as D,ah as E,ai as h,ak as x,ab as z,ao as le,w as O,aL as ce,V as re,l as ue,am as de,an as ee,ac as R,D as U,aM as q,at as N,z as M,aN as pe,aO as ge,r as B,H as me,aP as ye,aQ as be,a as fe,u as ve,aR as he,x as ke,aS as te,aT as xe,aU as _e,aw as ae,aV as ne,aW as we,aX as $e,s as se,aY as Ce}from"./PWgtWo4G.js";import Se from"./Dd1Bt4iG.js";import"./C90DJYJG.js";import"./D9Y2kBuF.js";import"./BneCoJRQ.js";const Ae={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Ue={class:"flex flex-col lg:flex-row items-start gap-6"},Oe={class:"flex-1"},ze=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},i=e,{ui:r,attrs:n}=A("page.header",f(i,"ui"),s,f(i,"class"),!0);return(a,c)=>{var p;const m=z,y=le;return o(),d("div",x({class:t(r).wrapper},t(n)),[e.headline||a.$slots.headline?(o(),d("div",{key:0,class:l(t(r).headline)},[k(a.$slots,"headline",{},()=>[T($(e.headline),1)])],2)):g("",!0),b("div",Ue,[e.icon||a.$slots.icon?(o(),d("div",{key:0,class:l(t(r).icon.wrapper)},[k(a.$slots,"icon",{},()=>[C(m,{name:e.icon,class:l(t(r).icon.base)},null,8,["name","class"])])],2)):g("",!0),b("div",Oe,[b("div",{class:l(t(r).container)},[b("h1",{class:l(t(r).title)},[k(a.$slots,"title",{},()=>[T($(e.title),1)])],2),(p=e.links)!=null&&p.length||a.$slots.links?(o(),d("div",{key:0,class:l(t(r).links)},[k(a.$slots,"links",{},()=>[(o(!0),d(D,null,E(e.links,(v,u)=>(o(),h(y,x({key:u},{...v,target:v.target||"_blank",color:v.color||"white"},{onClick:v.click}),null,16,["onClick"]))),128))])],2)):g("",!0)],2),e.description||a.$slots.description?(o(),d("div",{key:0,class:l(t(r).description)},[k(a.$slots,"description",{},()=>[T($(e.description),1)])],2)):g("",!0),k(a.$slots,"default")])])],16)}}}),je=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},i=e,{ui:r,attrs:n}=A("content.surround.link",f(i,"ui"),s,f(i,"class"),!0);return(a,c)=>{const m=z,y=ce;return o(),h(y,x({to:e.link._path,class:t(r).wrapper},t(n)),{default:O(()=>[e.icon||e.link.icon?(o(),d("div",{key:0,class:l(t(r).icon.wrapper)},[C(m,{name:e.icon||e.link.icon,class:l(t(r).icon.base)},null,8,["name","class"])],2)):g("",!0),b("p",{class:l(t(r).title)},$(e.link.title),3),b("p",{class:l(t(r).description)},$(e.link.description),3)]),_:1},16,["to","class"])}}}),Ie={key:1,class:"hidden sm:block"},Te=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},i=e,{ui:r,attrs:n}=A("content.surround",f(i,"ui"),s,f(i,"class"),!0),[a,c]=i.surround||[];return(m,y)=>{const p=je;return o(),d("div",x({class:t(r).wrapper},t(n)),[t(a)?(o(),h(p,{key:0,link:t(a),ui:t(r).link,icon:t(r).icon.prev},null,8,["link","ui","icon"])):(o(),d("span",Ie," ")),t(c)?(o(),h(p,{key:2,link:t(c),ui:t(r).link,icon:t(r).icon.next,class:"text-right"},null,8,["link","ui","icon"])):g("",!0)],16)}}}),Le=(e,s)=>(console.warn("[@nuxt/ui-pro] `DocsSurround` is deprecated, use `ContentSurround` instead."),re(Te,s.attrs,s.slots)),Pe=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},i=e,{ui:r,attrs:n}=A("page.body",f(i,"ui"),s,f(i,"class"),!0);return(a,c)=>(o(),d("div",x({class:[t(r).wrapper,e.prose&&t(r).prose]},t(n)),[k(a.$slots,"default")],16))}}),P=de(ee.ui.strategy,ee.ui.divider,Ae),Be=S({components:{UIcon:z,UAvatar:R},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>P.default.size,validator(e){return Object.keys(P.border.size.horizontal).includes(e)||Object.keys(P.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:i}=A("divider",f(e,"ui"),P),r=U(()=>q(N(s.value.wrapper.base,s.value.wrapper[e.orientation]),e.class)),n=U(()=>N(s.value.container.base,s.value.container[e.orientation])),a=U(()=>N(s.value.border.base,s.value.border[e.orientation],s.value.border.size[e.orientation][e.size],s.value.border.type[e.type]));return{ui:s,attrs:i,wrapperClass:r,containerClass:n,borderClass:a}}});function De(e,s,i,r,n,a){const c=z,m=R;return o(),d("div",x({class:e.wrapperClass},e.attrs),[b("div",{class:l(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(o(),d(D,{key:0},[b("div",{class:l(e.containerClass)},[k(e.$slots,"default",{},()=>[e.label?(o(),d("span",{key:0,class:l(e.ui.label)},$(e.label),3)):e.icon?(o(),h(c,{key:1,name:e.icon,class:l(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(o(),h(m,x({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):g("",!0)])],2),b("div",{class:l(e.borderClass)},null,2)],64)):g("",!0)],16)}const He=ue(Be,[["render",De]]),Ne=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s=M(),i=U(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:s.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),r=e,{ui:n,attrs:a}=A("page.links",f(r,"ui"),i,f(r,"class"),!0);return(c,m)=>{const y=z,p=R,v=ge;return o(),d("div",x({class:t(n).wrapper},t(a)),[e.title||c.$slots.title?(o(),d("p",{key:0,class:l(t(n).title)},[k(c.$slots,"title",{},()=>[T($(e.title),1)])],2)):g("",!0),b("div",{class:l(t(n).container)},[k(c.$slots,"default",{},()=>[(o(!0),d(D,null,E(e.links,(u,_)=>(o(),h(v,x({key:_},t(pe)(u),{class:t(n).base,"active-class":t(n).active,"inactive-class":t(n).inactive,onClick:u.click}),{default:O(()=>[u.icon?(o(),h(y,{key:0,name:u.icon,class:l(t(q)(t(n).icon.base,u.iconClass))},null,8,["name","class"])):g("",!0),u.avatar?(o(),h(p,x({key:1},{size:t(n).avatar.size,...u.avatar},{class:t(q)(t(n).avatar.base,u.avatarClass)}),null,16,["class"])):g("",!0),b("span",{class:l(t(n).label)},[T($(u.label)+" ",1),u.target==="_blank"?(o(),h(y,{key:0,name:t(n).externalIcon.name,class:l(t(n).externalIcon.base)},null,8,["name","class"])):g("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),qe=()=>{const e=B(),s=B([]),i=B([]),r=a=>{a.forEach(c=>{const m=c.target.id;c.isIntersecting?s.value=[...s.value,m]:s.value=s.value.filter(y=>y!==m)})},n=a=>{a.forEach(c=>{e.value&&e.value.observe(c)})};return me(s,(a,c)=>{a.length===0?i.value=c:i.value=a}),ye(()=>e.value=new IntersectionObserver(r)),be(()=>{var a;return(a=e.value)==null?void 0:a.disconnect()}),{visibleHeadings:s,activeHeadings:i,updateHeadings:n}},Ee=["href","onClick"],oe=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(e,{emit:s}){const i={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},r=e,n=s,a=fe(),c=ve(),{activeHeadings:m,updateHeadings:y}=qe(),{ui:p,attrs:v}=A("content.toc.links",f(r,"ui"),i,f(r,"class"),!0);c.hooks.hookOnce("page:finish",()=>{y([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const u=_=>{const j=encodeURIComponent(_);a.push(`#${j}`),n("move",_)};return(_,j)=>{var L;const H=oe;return(L=e.links)!=null&&L.length?(o(),d("ul",x({key:0,class:t(p).wrapper},t(v)),[(o(!0),d(D,null,E(e.links,w=>(o(),d("li",{key:w.text,class:l([t(p).wrapper,w.depth===3&&t(p).depth])},[b("a",{href:`#${w.id}`,class:l([t(p).base,t(m).includes(w.id)?t(p).active:t(p).inactive]),onClick:he(V=>u(w.id),["prevent"])},$(w.text),11,Ee),w.children?(o(),h(H,{key:0,links:w.children,ui:t(p)},null,8,["links","ui"])):g("",!0)],2))),128))],16)):g("",!0)}}}),Re=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s=M(),i=U(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),r=e,{ui:n,attrs:a}=A("content.toc",f(r,"ui"),i,f(r,"class"),!0),c=B(!1);return(m,y)=>{var u,_;const p=z,v=oe;return o(),d("nav",x({class:t(n).wrapper},t(a)),[b("div",{class:l([(u=e.links)!=null&&u.length?t(n).container.base:t(n).container.empty])},[k(m.$slots,"top"),(_=e.links)!=null&&_.length?(o(),d("button",{key:0,class:l(t(n).button.base),tabindex:"-1",onClick:y[0]||(y[0]=j=>c.value=!t(c))},[b("span",{class:l(t(n).button.label)},$(e.title),3),C(p,{name:t(n).button.trailingIcon.name,class:l(["lg:!hidden",[t(n).button.trailingIcon.base,t(c)?t(n).button.trailingIcon.active:t(n).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):g("",!0),C(v,{links:e.links,ui:t(n).links,class:l([t(c)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),k(m.$slots,"bottom")],2)],16)}}}),Me=(e,s)=>(console.warn("[@nuxt/ui-pro] `DocsToc` is deprecated, use `ContentToc` instead."),re(Re,s.attrs,s.slots)),Ve={key:1},Xe=S({__name:"[...slug]",async setup(e){let s,i;const r=ke(),{toc:n}=M(),{data:a}=([s,i]=te(()=>ne(r.path,()=>se(r.path).findOne(),"$aROEKgqrzL")),s=await s,i(),s);if(!a.value)throw xe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:c}=([s,i]=te(()=>ne(`${r.path}-surround`,()=>se().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ce(r.path)))),s=await s,i(),s);_e({titleTemplate:"%s - Nuxt x Supabase - Docs",title:a.value.title,ogTitle:`${a.value.title} - Nuxt x Supabase - Docs`,description:a.value.description,ogDescription:a.value.description});const m=U(()=>we(a.value)),y=U(()=>{var p,v,u;return[((p=n==null?void 0:n.bottom)==null?void 0:p.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${n.bottom.edit}/${(v=a==null?void 0:a.value)==null?void 0:v._file}`,target:"_blank"},...((u=n==null?void 0:n.bottom)==null?void 0:u.links)||[]].filter(Boolean)});return(p,v)=>{const u=ze,_=Se,j=Le,H=Pe,L=He,w=Ne,V=Me,ie=$e;return o(),h(ie,null,ae({default:O(()=>[C(u,{title:t(a).title,description:t(a).description,links:t(a).links,headline:t(m)},null,8,["title","description","links","headline"]),C(H,{prose:""},{default:O(()=>{var I;return[t(a).body?(o(),h(_,{key:0,value:t(a)},null,8,["value"])):g("",!0),(I=t(c))!=null&&I.length?(o(),d("hr",Ve)):g("",!0),C(j,{surround:t(c)},null,8,["surround"])]}),_:1})]),_:2},[t(a).toc!==!1?{name:"right",fn:O(()=>{var I,F,J,K;return[C(V,{title:(I=t(n))==null?void 0:I.title,links:(J=(F=t(a).body)==null?void 0:F.toc)==null?void 0:J.links},ae({_:2},[(K=t(n))!=null&&K.bottom?{name:"bottom",fn:O(()=>{var Q,W,X,Y,G,Z;return[b("div",{class:l(["hidden lg:block space-y-6",{"!mt-6":(X=(W=(Q=t(a).body)==null?void 0:Q.toc)==null?void 0:W.links)==null?void 0:X.length}])},[(Z=(G=(Y=t(a).body)==null?void 0:Y.toc)==null?void 0:G.links)!=null&&Z.length?(o(),h(L,{key:0,type:"dashed"})):g("",!0),C(w,{title:t(n).bottom.title,links:t(y)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Xe as default};
