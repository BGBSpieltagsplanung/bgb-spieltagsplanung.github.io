"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[957],{2417:(a,e,t)=>{t.d(e,{FP:()=>c,I_:()=>s,LE:()=>r,Pi:()=>L,R7:()=>h,RR:()=>_,TT:()=>m,Zg:()=>o,bl:()=>w,d8:()=>p,ej:()=>d,gZ:()=>n,gn:()=>g,hc:()=>f,kY:()=>v,mb:()=>u,ov:()=>b,wX:()=>k});const l="false",i="NGdoLbyd_330",n="service_1z8boq8",s="template_uc9j4dn",o="z6CsuBOLcuYCsxNiZ",r="Auf geht's SCF",c="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",u="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",g="https://planthegame.ch",m="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",d=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let a=n[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?i:void 0},p=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},v=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},b=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},h=function(a){return"statics/images/"+a+"/Logo.png"},k=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},_=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},L=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},f=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],w=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},7957:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var l=t(9835),i=t(6970);const n={class:"q-pa-md",style:{"max-width":"500px"}},s={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},o={class:"q-pa-md q-gutter-sm"},r=(0,l._)("div",{class:"text-h6"},"Link erfassen",-1),c=(0,l._)("div",{class:"text-h6"},"Link ändern",-1),u=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function g(a,e,t,g,m,d){const p=(0,l.up)("q-toolbar-title"),v=(0,l.up)("q-btn"),b=(0,l.up)("q-toolbar"),h=(0,l.up)("q-item-label"),k=(0,l.up)("q-item-section"),_=(0,l.up)("q-item"),L=(0,l.up)("q-list"),f=(0,l.up)("q-card-section"),w=(0,l.up)("q-input"),y=(0,l.up)("q-separator"),S=(0,l.up)("q-card-actions"),x=(0,l.up)("q-card"),C=(0,l.up)("q-dialog"),M=(0,l.up)("q-avatar"),T=(0,l.up)("q-img"),W=(0,l.up)("q-page"),H=(0,l.Q2)("ripple"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(W,null,{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(b,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Wichtige Links ("+(0,i.zw)(m.linkObject.length)+")",1)])),_:1}),m.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(v,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>g.addLink=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.linkObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(L,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(_,{clickable:"",onClick:e=>d.onLinkClick(a.linkId,a.title,a.caption,a.url)},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Titel: "+(0,i.zw)(a.title),1)])),_:2},1024),(0,l.Wm)(h,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Untertitel: "+(0,i.zw)(a.caption),1)])),_:2},1024),(0,l.Wm)(h,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("URL: "+(0,i.zw)(a.url),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[H]])])),_:2},1024)),[[H]]))),128))]),(0,l._)("div",o,[(0,l.Wm)(C,{modelValue:g.addLink,"onUpdate:modelValue":e[5]||(e[5]=a=>g.addLink=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(f,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkTitleNew,"onUpdate:modelValue":e[1]||(e[1]=a=>g.txtLinkTitleNew=a),autofocus:"",label:"Titel *"},null,8,["modelValue"]),(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkCaptionNew,"onUpdate:modelValue":e[2]||(e[2]=a=>g.txtLinkCaptionNew=a),label:"Untertitel"},null,8,["modelValue"]),(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkUrlNew,"onUpdate:modelValue":e[3]||(e[3]=a=>g.txtLinkUrlNew=a),label:"URL"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(y),(0,l.Wm)(S,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(v,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,l.wy)((0,l.Wm)(v,{icon:"save",label:"Speichern",onClick:e[4]||(e[4]=a=>d.addLinkSave(g.txtLinkTitleNew,g.txtLinkCaptionNew,g.txtLinkUrlNew)),disable:""===g.txtLinkTitleNew},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(C,{modelValue:g.editLink,"onUpdate:modelValue":e[11]||(e[11]=a=>g.editLink=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(f,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkTitle,"onUpdate:modelValue":e[6]||(e[6]=a=>g.txtLinkTitle=a),label:"Title *"},null,8,["modelValue"]),(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkCaption,"onUpdate:modelValue":e[7]||(e[7]=a=>g.txtLinkCaption=a),autofocus:"",label:"Untertitel"},null,8,["modelValue"]),(0,l.Wm)(w,{filled:"",dense:"",modelValue:g.txtLinkUrl,"onUpdate:modelValue":e[8]||(e[8]=a=>g.txtLinkUrl=a),autofocus:"",label:"URL"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(y),(0,l.Wm)(S,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[m.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(v,{key:0,icon:"delete",color:"primary",onClick:e[9]||(e[9]=a=>g.delLink=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(v,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,l.wy)((0,l.Wm)(v,{icon:"save",label:"Speichern",onClick:e[10]||(e[10]=a=>d.editLinkSave(g.txtLinkId,g.txtLinkTitle,g.txtLinkCaption,g.txtLinkUrl)),disable:""===g.txtLinkTitle},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(C,{modelValue:g.delLink,"onUpdate:modelValue":e[13]||(e[13]=a=>g.delLink=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{icon:"delete",color:"primary","text-color":"white"}),u])),_:1}),(0,l.Wm)(S,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(v,{flat:"",label:"Nein",color:"primary"},null,512),[[B]]),(0,l.wy)((0,l.Wm)(v,{flat:"",label:"Ja",color:"primary",onClick:e[12]||(e[12]=a=>d.deleteLink(g.txtLinkId))},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(T,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(6822),t(9665),t(6727);var m=t(9302),d=t(2417),p=t(499),v=t(4308);const b=(0,p.iH)(""),h=(0,p.iH)(""),k=(0,p.iH)(""),_=(0,p.iH)(""),L=(0,p.iH)("");let f,w,y;const S={name:"ListLink",setup(){const a=(0,m.Z)();return{txtLinkId:(0,p.iH)(b),txtLinkTitle:(0,p.iH)(h),txtLinkCaption:(0,p.iH)(k),txtLinkUrl:(0,p.iH)(_),txtLinkTitleNew:(0,p.iH)(""),txtLinkCaptionNew:(0,p.iH)(""),txtLinkUrlNew:(0,p.iH)(""),onLinkCreated(){a.notify({type:"positive",message:"Link wurde erfolgreich erfasst!"})},onLinkUpdated(){a.notify({type:"positive",message:"Link wurden erfolgreich aktualisiert!"})},onLinkDeleted(){a.notify({message:"Link wurde erfolgreich gelöscht!",color:"orange"})},onLinkAlreadyExists(){a.notify({type:"negative",message:"Dieser Link besteht bereits!"})},addLink:(0,p.iH)(!1),editLink:(0,p.iH)(!1),delLink:(0,p.iH)(!1)}},data(){return{getCookie:d.ej,getAdminCode:d.kY,getUserCode:d.ov,URLMatchManagementAPI:d.gn,linkObject:[{linkId:"",title:"",caption:"",url:""}]}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableLink()}))}))},methods:{setVariables(){return L.value=(0,d.kY)((0,d.ej)("applicationCode")),w=d.gn+"/Tenant",y=d.gn+"/Link",this.linkObject=[],Promise.resolve()},getTenantId(){return new Promise(((a,e)=>{this.$axios.get(`${w}/code/${L.value}`).then((t=>{200===t.status?(f=t.data.id,a()):(console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code")))})).catch((a=>{console.log(a),e(a)}))}))},getTableLink(){this.linkObject=[],this.$axios.get(`${y}/${f}`).then((a=>{if(200===a.status)for(let e=0;e<a.data.length;e++)this.setLinkObject(a.data[e].id,a.data[e].title,a.data[e].caption,a.data[e].url);else console.log("Unexpected status code:",a.status)})).catch((a=>{console.log(a)}))},setLinkObject(a,e,t,l){this.linkObject.push({linkId:a,title:e,caption:t,url:l})},onLinkClick(a,e,t,l){b.value=a,h.value=e,k.value=t,_.value=l,this.editLink=!0},addLinkSave(a,e,t){const l=this.linkObject.map((a=>a.title)),i=l.includes(a);if(i)this.onLinkAlreadyExists();else{const l=(0,v.Z)(),i=new Date,n={id:l,creationTime:i,lastModificationTime:null,tenantId:f,title:a,caption:e,url:t};this.$axios.post(`${y}/${f}`,n).then((a=>{201===a.status?(this.onLinkUpdated(),this.getTableLink()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},editLinkSave(a,e,t,l){const i=this.linkObject.map((a=>a.name)),n=i.includes(e);if(n)this.onLinkAlreadyExists();else{const i={id:a,creationTime:null,lastModificationTime:null,tenantId:f,title:e,caption:t,url:l};this.$axios.put(`${y}/${f}/${a}`,i).then((a=>{200===a.status?(this.onLinkUpdated(),this.getTableLink()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},deleteLink(a){this.$axios.delete(`${y}/${f}/${a}`).then((a=>{200===a.status?(this.onLinkDeleted(),this.getTableLink(),this.editLink=!1):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}}};var x=t(1639),C=t(9885),M=t(1663),T=t(1973),W=t(8879),H=t(3246),B=t(490),U=t(1233),P=t(3115),V=t(2074),A=t(4458),q=t(3190),D=t(6611),O=t(926),Z=t(1821),E=t(1357),I=t(1487),F=t(1136),K=t(2146),j=t(9984),J=t.n(j);const N=(0,x.Z)(S,[["render",g]]),Q=N;J()(S,"components",{QPage:C.Z,QToolbar:M.Z,QToolbarTitle:T.Z,QBtn:W.Z,QList:H.Z,QItem:B.Z,QItemSection:U.Z,QItemLabel:P.Z,QDialog:V.Z,QCard:A.Z,QCardSection:q.Z,QInput:D.Z,QSeparator:O.Z,QCardActions:Z.Z,QAvatar:E.Z,QImg:I.Z}),J()(S,"directives",{Ripple:F.Z,ClosePopup:K.Z})}}]);