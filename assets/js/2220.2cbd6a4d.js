"use strict";(self.webpackChunkafternoon_grocery_store=self.webpackChunkafternoon_grocery_store||[]).push([[2220],{2220:(t,a,s)=>{s.r(a),s.d(a,{default:()=>y});var i=s(6252),e=s(3577);const n={class:"categories-container"},o={class:"category-list"},c={class:"text"},l={class:"num"};var r=s(2262),u=s(2119),g=s(4413),f=s(5224),P=s(8212),p=s(3473);const m=(0,i.aZ)({components:{Common:P.Z,PostList:f.Z,Pagation:p.Z},setup(){const{classificationPosts:t,classificationSummary:a}=(0,g.usePageData)(),s=(0,u.useRouter)();return{classificationList:(0,r.Fl)((()=>{let s=[];const i=t.value.currentClassificationKey;if(i){const{items:t=[]}=a.value[i];s=Object.keys(t).map((a=>({label:a,length:t[a].length})))}return s})),classificationPosts:t,handlePagation:a=>{const{currentClassificationKey:i,currentClassificationValue:e}=t.value;s.push(`/${i}/${e}/${a}/`)}}}}),y=(0,s(3744).Z)(m,[["render",function(t,a,s,r,u,g){const f=(0,i.up)("RouterLink"),P=(0,i.up)("PostList"),p=(0,i.up)("Pagation"),m=(0,i.up)("Common");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.classificationList,(({label:a,length:s},n)=>((0,i.wg)(),(0,i.iD)("li",{key:n,class:(0,e.normalizeClass)(["category-item",{active:t.classificationPosts.currentClassificationValue===a}])},[(0,i.Wm)(f,{class:"category-link",to:`/${t.classificationPosts.currentClassificationKey}/${a}/1/`},{default:(0,i.w5)((()=>[(0,i._)("span",c,(0,e.toDisplayString)(a),1),(0,i._)("span",l,(0,e.toDisplayString)(s),1)])),_:2},1032,["to"])],2)))),128))]),(0,i.Wm)(P,{data:t.classificationPosts.pages,total:t.classificationPosts.total,"page-size":t.classificationPosts.pageSize,"current-page":t.classificationPosts.currentPage},null,8,["data","total","page-size","current-page"]),t.classificationPosts.total>10?((0,i.wg)(),(0,i.j4)(p,{key:0,currentPage:t.classificationPosts.currentPage,total:t.classificationPosts.total,onChange:t.handlePagation},null,8,["currentPage","total","onChange"])):(0,i.kq)("",!0)])),_:1})])}]])}}]);