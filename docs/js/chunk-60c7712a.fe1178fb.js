(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60c7712a"],{"552d":function(t,e,s){"use strict";s("b703")},"7fc6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("headers",[s("span",[t._v("请假详情")])]),s("div",{staticClass:"center"},[s("div",{staticClass:"info"},[s("div",{staticClass:"applicant"},[s("div",[t._v("申请人："+t._s(t.applicant))]),s("div",{staticClass:"circle"},[t._v("已通过")])]),s("div",{staticClass:"applicant-info"},[s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("所在班级：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.cla)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("发起时间：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.getTime)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("请假类型：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.type)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("请假时长：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.long)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("开始时间：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.start)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("结束时间：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.getEnd)}})])]),s("div",{staticClass:"applicant-other"},[s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("请假事由：")]),s("div",{staticClass:"text",domProps:{textContent:t._s(t.reason)}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("附 件：")]),s("div",[s("el-image",{staticStyle:{width:"70px",height:"20px"},attrs:{src:"https://img.ams1.imgbed.xyz/2021/03/12/1KTEH.png",previewSrcList:["https://img.ams1.imgbed.xyz/2021/03/12/1KTEH.png"]}})],1)])]),s("div",{staticClass:"applicant-leave"},[s("div",{staticClass:"text",staticStyle:{margin:"10px 0"}},[t._v("已联系学生家长及相关宿管")]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("是否离校：")]),s("div",{staticClass:"text",domProps:{textContent:t._s("不离校")}})]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-text"},[t._v("承诺书：")]),s("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.commitment,previewSrcList:[t.commitment]}})],1)])]),s("div",{staticClass:"timeline"},[s("el-timeline",{staticStyle:{"padding-inline-start":"10px",padding:"10px"}},[s("el-timeline-item",{attrs:{color:"rgb(105, 179, 215)",timestamp:"发起申请"}},[s("div",{staticClass:"timeline-content"},[s("div",{staticClass:"timeline-content-text"},[t._v("本人")]),s("div",{staticClass:"timeline-content-text",domProps:{textContent:t._s(t.getTime)}})])]),s("el-timeline-item",{attrs:{color:"rgb(105, 179, 215)",timestamp:t.counselor}},[s("div",{staticClass:"timeline-content"},[s("div",{staticClass:"timeline-content-text"},[t._v("辅导员")]),s("div",[s("div",{staticClass:"timeline-content-text",domProps:{textContent:t._s(t.getAgreeTime)}})])])])],1)],1)]),s("div",{staticClass:"footer"},[s("el-button",{staticStyle:{"background-color":"rgb(95, 166, 218)",color:"white"}},[t._v("我要销假")]),s("el-button",{staticStyle:{"background-color":"rgb(78, 181, 152)",color:"white"}},[t._v("我要请假")])],1)],1)},a=[],n=(s("5319"),s("ac1f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"simple-header"},[s("span",{staticClass:"el-icon-arrow-left icon",on:{click:function(e){return t.$router.push("/")}}}),s("div",{staticClass:"simple-header-name"},[t._t("default")],2),t._t("icon",[s("span",{staticClass:"icon_n"})])],2)}),c=[],o={name:"headers"},l=o,r=(s("9b99"),s("2877")),d=Object(r["a"])(l,n,c,!1,null,"4594d6ae",null),m=d.exports,v=s("7c15"),p=s("a5bb"),u={name:"result",components:{Headers:m},props:["values"],data:function(){return{applicant:"xxx",cla:"",type:"事假",long:"01 时 00 分",start:(new Date).format("yyyy-MM-dd hh:mm:ss"),reason:"出去吃饭",counselor:null,commitment:null}},created:function(){var t=this,e=localStorage.getItem("values");null===e?this.$router.replace("/"):e=JSON.parse(e),p["a"].load().then((function(s){s.get().then((function(s){var i=s.visitorId;Object(v["a"])({name:e.applicant,visitorId:i}).then((function(e){1!==e&&t.$router.replace("/")}))}))})),this.applicant=e["applicant"],this.cla=e["cla"],this.reason=e["reason"],this.counselor=e["counselor"],this.commitment=e["commitment"]},mounted:function(){var t=document.getElementsByClassName("el-timeline-item__timestamp").item(1),e=document.createElement("div");e.className="agree",e.innerText="已同意",t.appendChild(e)},computed:{getTime:function(){var t=new Date;return t.setHours(t.getHours()-1),t.setMinutes(t.getMinutes()+Math.ceil(10*Math.random())),t.format("yyyy-MM-dd hh:mm:ss")},getEnd:function(){var t=new Date;return t.setHours(t.getHours()+1),t.format("yyyy-MM-dd hh:mm:ss")},getAgreeTime:function(){var t=new Date;return t.setMinutes(t.getMinutes()+Math.ceil(10*Math.random())),t.setSeconds(t.getSeconds()+Math.ceil(10*Math.random())),t.format("yyyy-MM-dd hh:mm:ss")}}},C=u,f=(s("552d"),Object(r["a"])(C,i,a,!1,null,null,null));e["default"]=f.exports},"80fc":function(t,e,s){},"9b99":function(t,e,s){"use strict";s("80fc")},b703:function(t,e,s){}}]);
//# sourceMappingURL=chunk-60c7712a.fe1178fb.js.map