import{d as n,aV as s,a_ as o,b8 as i}from"./PWgtWo4G.js";import{u as c}from"./vgJWTt6j.js";const f=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(e){const{fetchContributors:u}=c(),{data:a,refresh:t,pending:r}=await s(`github-contributors-${o(e.query)}`,()=>u(e.query));return{contributors:a,refresh:t,pending:r}},render({contributors:e,refresh:u,pending:a}){var r;const t=i();return(r=t==null?void 0:t.default)==null?void 0:r.call(t,{contributors:e,refresh:u,pending:a})}});export{f as default};
