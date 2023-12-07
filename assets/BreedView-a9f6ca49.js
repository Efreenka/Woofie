import{u as B,v as V,a as C,c as u,r as g,m as q,l as U,_ as N}from"./index-96871a1d.js";import{d as S,h as k,l as T,o as d,c as m,a as t,m as f,v,u as i,t as n,e as x,q as z,y as F,z as I,s as D,i as H,f as r,w as l,g as b,r as L,x as O,T as R}from"./index-3d22521a.js";const p=_=>(F("data-v-b7abe56c"),_=_(),I(),_),j={class:"container-form"},E=["onSubmit"],J={class:"field"},A=p(()=>t("label",{for:"name"},"Název plemene:",-1)),G={class:"input-error-field"},K={key:0,class:"error"},Q={class:"field"},X=p(()=>t("label",{for:"minHeight"},"Výška:",-1)),Y={class:"min-max-field"},Z={class:"input-error-field-custom"},ee={key:0,class:"error-custom"},te=p(()=>t("span",null,"-",-1)),se={class:"input-error-field-custom"},oe={key:0,class:"error-custom"},ie={class:"field"},ne=p(()=>t("label",{for:"minWeight"},"Váha:",-1)),ae={class:"min-max-field"},re={class:"input-error-field-custom"},le={key:0,class:"error-custom"},de=p(()=>t("span",null,"-",-1)),me={class:"input-error-field-custom"},ce={key:0,class:"error-custom"},ue={class:"field"},pe=p(()=>t("label",{for:"minPrice"},"Cena:",-1)),_e={class:"min-max-field"},he={class:"input-error-field-custom"},ge={key:0,class:"error-custom"},fe=p(()=>t("span",null,"-",-1)),ve={class:"input-error-field-custom"},xe={key:0,class:"error-custom"},be={class:"field"},ye=p(()=>t("label",{for:"lifeSpan"},"Životnost:",-1)),$e={class:"input-error-field"},we={key:0,class:"error"},Me={class:"field"},Pe=p(()=>t("label",{for:"purpose"},"Využití plemene:",-1)),He={class:"input-error-field"},We={key:0,class:"error"},Se=p(()=>t("input",{class:"submit-breed-button",type:"submit",value:"Odeslat"},null,-1)),y="Pole není vyplněno!",Ve=S({__name:"BreedCreateForm",emits:["closeModal"],setup(_,{emit:h}){const $=B(),{addBreed:w}=$,e=k({id:V(),name:"",minHeight:null,maxHeight:null,minWeight:null,maxWeight:null,minPrice:null,maxPrice:null,lifeSpan:null,purpose:""}),M=P=>/^\S[\p{L}\s]*$/u.test(P),W=T(()=>({name:{required:u.withMessage(y,g),minLength:u.withMessage("Toto pole by mělo mít alespoň 3 znaky!",q(3)),vatidateName:u.withMessage("Pole musí obsahovat pouze písmena, žádná mezera před jménem!",M)},minHeight:{required:u.withMessage(y,g)},maxHeight:{required:u.withMessage(y,g)},minWeight:{required:u.withMessage(y,g)},maxWeight:{required:u.withMessage(y,g)},minPrice:{required:u.withMessage(y,g)},maxPrice:{required:u.withMessage(y,g)},lifeSpan:{required:u.withMessage(y,g)},purpose:{required:u.withMessage(y,g)}})),o=C(W,e),c=async()=>{if(await o.value.$validate()){const s=k({id:e.id,name:e.name,minHeight:e.minHeight,maxHeight:e.maxHeight,minWeight:e.minWeight,maxWeight:e.maxWeight,minPrice:e.minPrice,maxPrice:e.maxPrice,lifeSpan:e.lifeSpan,purpose:e.purpose});w(s),e.id=V(),e.name="",e.minHeight=null,e.maxHeight=null,e.minWeight=null,e.maxWeight=null,e.minPrice=null,e.maxPrice=null,e.lifeSpan=null,e.purpose="",h("closeModal")}else U.error("Chyba! Vyplňte správně formulář!",{autoClose:5e3})};return(P,s)=>(d(),m("div",j,[t("form",{onSubmit:z(c,["prevent"]),class:"form"},[t("div",J,[A,t("div",G,[f(t("input",{type:"text",id:"name",placeholder:"Název plemene","onUpdate:modelValue":s[0]||(s[0]=a=>e.name=a)},null,512),[[v,e.name]]),i(o).name.$errors.length>0?(d(),m("span",K,n(i(o).name.$errors[0].$message),1)):x("",!0)])]),t("div",Q,[X,t("div",Y,[t("div",Z,[f(t("input",{type:"number",id:"minHeight",placeholder:"Min. výška","onUpdate:modelValue":s[1]||(s[1]=a=>e.minHeight=a),class:"input-custom",min:"0",max:"1000"},null,512),[[v,e.minHeight]]),i(o).minHeight.$errors.length>0?(d(),m("span",ee,n(i(o).minHeight.$errors[0].$message),1)):x("",!0)]),te,t("div",se,[f(t("input",{type:"number",id:"maxHeight",placeholder:"Max. výška","onUpdate:modelValue":s[2]||(s[2]=a=>e.maxHeight=a),class:"input-custom",min:"0",max:"1000"},null,512),[[v,e.maxHeight]]),i(o).maxHeight.$errors.length>0?(d(),m("span",oe,n(i(o).maxHeight.$errors[0].$message),1)):x("",!0)])])]),t("div",ie,[ne,t("div",ae,[t("div",re,[f(t("input",{type:"number",id:"minWeight",placeholder:"Min. váha","onUpdate:modelValue":s[3]||(s[3]=a=>e.minWeight=a),class:"input-custom",min:"0",max:"1000"},null,512),[[v,e.minWeight]]),i(o).minWeight.$errors.length>0?(d(),m("span",le,n(i(o).minWeight.$errors[0].$message),1)):x("",!0)]),de,t("div",me,[f(t("input",{type:"number",id:"maxWeight",placeholder:"Max. váha","onUpdate:modelValue":s[4]||(s[4]=a=>e.maxWeight=a),class:"input-custom",min:"0",max:"1000"},null,512),[[v,e.maxWeight]]),i(o).maxWeight.$errors.length>0?(d(),m("span",ce,n(i(o).maxWeight.$errors[0].$message),1)):x("",!0)])])]),t("div",ue,[pe,t("div",_e,[t("div",he,[f(t("input",{type:"number",id:"minPrice",placeholder:"Min. cena","onUpdate:modelValue":s[5]||(s[5]=a=>e.minPrice=a),class:"input-custom",min:"0"},null,512),[[v,e.minPrice]]),i(o).minPrice.$errors.length>0?(d(),m("span",ge,n(i(o).minPrice.$errors[0].$message),1)):x("",!0)]),fe,t("div",ve,[f(t("input",{type:"number",id:"maxPrice",placeholder:"Max. cena","onUpdate:modelValue":s[6]||(s[6]=a=>e.maxPrice=a),class:"input-custom",min:"0"},null,512),[[v,e.maxPrice]]),i(o).maxPrice.$errors.length>0?(d(),m("span",xe,n(i(o).maxPrice.$errors[0].$message),1)):x("",!0)])])]),t("div",be,[ye,t("div",$e,[f(t("input",{type:"number",id:"lifeSpan",placeholder:"Životnost","onUpdate:modelValue":s[7]||(s[7]=a=>e.lifeSpan=a),min:"0",max:"1000"},null,512),[[v,e.lifeSpan]]),i(o).lifeSpan.$errors.length>0?(d(),m("span",we,n(i(o).lifeSpan.$errors[0].$message),1)):x("",!0)])]),t("div",Me,[Pe,t("div",He,[f(t("input",{type:"text",id:"purpose",placeholder:"Využití plemene","onUpdate:modelValue":s[8]||(s[8]=a=>e.purpose=a)},null,512),[[v,e.purpose]]),i(o).purpose.$errors.length>0?(d(),m("span",We,n(i(o).purpose.$errors[0].$message),1)):x("",!0)])]),Se],40,E)]))}});const ke=(_,h)=>{const $=_.__vccOpts||_;for(const[w,e]of h)$[w]=e;return $},Be=ke(Ve,[["__scopeId","data-v-b7abe56c"]]),Ce={class:"table"},qe=S({__name:"BreedTable",emits:["showModal"],setup(_,{emit:h}){const $=B(),{breeds:w}=D($);return(e,M)=>{const W=H("font-awesome-icon"),o=H("o-field"),c=H("o-table-column"),P=H("o-table");return d(),m("div",null,[t("section",Ce,[r(o,{grouped:"","group-multiline":"",class:"buttonField"},{default:l(()=>[t("button",{class:"addBreedButton",id:"show-modal",onClick:M[0]||(M[0]=s=>h("showModal"))},[r(W,{icon:["fas","plus"]})])]),_:1}),r(P,{data:i(w)},{default:l(()=>[r(c,{field:"name",label:"Jméno",position:"centered"},{default:l(s=>[b(n(s.row.name),1)]),_:1}),r(c,{field:"minHeight",label:"Min. výška",position:"centered"},{default:l(s=>[b(n(s.row.minHeight),1)]),_:1}),r(c,{field:"maxHeight",label:"Max. výška",position:"centered"},{default:l(s=>[b(n(s.row.maxHeight),1)]),_:1}),r(c,{field:"minWeight",label:"Min. váha",position:"centered"},{default:l(s=>[b(n(s.row.minWeight),1)]),_:1}),r(c,{field:"maxWeight",label:"Max. váha",position:"centered"},{default:l(s=>[b(n(s.row.maxWeight),1)]),_:1}),r(c,{field:"minPrice",label:"Min. cena",position:"centered"},{default:l(s=>[b(n(s.row.minPrice),1)]),_:1}),r(c,{field:"maxPrice",label:"Max. cena",position:"centered"},{default:l(s=>[b(n(s.row.maxPrice),1)]),_:1}),r(c,{field:"lifeSpan",label:"Životnost",position:"centered"},{default:l(s=>[b(n(s.row.lifeSpan),1)]),_:1}),r(c,{field:"purpose",label:"Využití",position:"centered"},{default:l(s=>[b(n(s.row.purpose),1)]),_:1})]),_:1},8,["data"])])])}}});const Ue={class:"containerBreed"},Ne={class:"a"},Te=t("h3",null,"Registrace plemene",-1),Ie=S({__name:"BreedView",setup(_){const h=L(!1),$=()=>{h.value=!0},w=()=>{h.value=!1};return(e,M)=>(d(),m("div",Ue,[t("div",Ne,[(d(),O(R,{to:"body"},[r(N,{show:h.value,onCloseModal:w},{header:l(()=>[Te]),body:l(()=>[r(Be,{onCloseModal:w})]),_:1},8,["show"])]))]),r(qe,{onShowModal:$})]))}});export{Ie as default};
