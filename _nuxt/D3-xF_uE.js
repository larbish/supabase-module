import{_ as g}from"./idDRXoOs.js";import h from"./Dd1Bt4iG.js";import{u as B}from"./vgJWTt6j.js";import{d as D,aS as x,aV as v,ag as w,c as a,e as n,F as C,ah as L,h as o,w as c,k as i,t as _,E as l}from"./PWgtWo4G.js";import"./C90DJYJG.js";import"./D9Y2kBuF.js";import"./BneCoJRQ.js";const k=(s,e={year:"numeric",month:"long",day:"numeric"})=>new Date(s).toLocaleDateString("en",e),R={style:{"margin-top":"50px"}},G=D({__name:"Releases",async setup(s){let e,r;const{fetchReleases:p}=B(),{data:u}=([e,r]=x(()=>v("releases",()=>p({}))),e=await e,r(),e);return(m,S)=>{const d=w("Badge"),f=g,y=h;return a(),n("div",R,[(a(!0),n(C,null,L(l(u),t=>(a(),n("div",{key:t.name,style:{"margin-bottom":"50px"}},[o(f,{id:t.name},{default:c(()=>[i(_(t.name)+" ",1),o(d,{style:{"margin-left":"10px"}},{default:c(()=>[i(_(("formatDateByLocale"in m?m.formatDateByLocale:l(k))(t.date)),1)]),_:2},1024)]),_:2},1032,["id"]),o(y,{value:t},null,8,["value"])]))),128))])}}});export{G as default};
