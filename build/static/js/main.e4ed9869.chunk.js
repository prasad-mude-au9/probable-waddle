(this.webpackJsonpfprt=this.webpackJsonpfprt||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},55:function(e,t){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),i=n.n(a),o=n(21),c=n.n(o),r=n(30),l=n(27),d=n(53),h=n.n(d),j=n(54),u=n(55),p=n.n(u),b=n(45),g=Object(l.c)({prodetail:p.a,Hvideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INDIA_TRENDING_VIDEOS":return Object(b.a)(Object(b.a)({},e),{},{indaitrendingVideo:t.payload});default:return e}}}),m=Object(l.d)(g,Object(l.a)(h.a,j.logger)),O=n(12),x=n(9),v=(n(71),n(15)),f=n(16),y=n(18),S=n(17),k=n(108),w=n(102),C=n(103),I=(n(72),function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).handleLogout=function(t){t.preventDefault(),sessionStorage.clear(),e.props.history.push("/")},e.clearit=function(t){t.preventDefault(),sessionStorage.removeItem("todoeinvitt"),e.props.history.push("/dashboard")},e.state={},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{id:"stand",children:Object(s.jsx)(k.a,{position:"fixed",color:"primary",style:{backgroundColor:"rgba(0,0,0, 0.3)"},children:Object(s.jsxs)(w.a,{children:[Object(s.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(s.jsx)(C.a,{variant:"h6",children:"ImageViewer"})}),Object(s.jsx)("div",{style:{marginTop:"1vh"},children:Object(s.jsx)(C.a,{variant:"h8",style:{fontSize:"0.923vw"}})}),Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{children:sessionStorage.getItem("_ltk")?Object(s.jsxs)("div",{class:"dropdown",children:[Object(s.jsx)("button",{class:"dropbtn",children:sessionStorage.getItem("name")}),Object(s.jsxs)("div",{class:"dropdown-content",children:[Object(s.jsx)(O.b,{to:"/profile",children:"MyProfile"}),Object(s.jsx)(O.b,{onClick:this.handleLogout,children:"Logout"})]})]}):Object(s.jsxs)("div",{className:"dm",children:[Object(s.jsx)(O.b,{to:"/login",style:{color:"white",marginRight:"15px",border:"1px solid white",borderRadius:"5px",padding:"8px 15px"},children:"Log In"}),Object(s.jsx)(O.b,{to:"/register",style:{color:"white",border:"1px solid white",borderRadius:"5px",padding:"8px 15px"},children:"Sign up"})]})})})]})})})})}}]),n}(a.Component)),N=n(13),L=(n(74),n(49),n(104)),_=n(106);function T(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var D=Object(L.a)((function(e){return{paper:{position:"absolute",width:1e3,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),E=function(e){var t=D(),n=i.a.useState(T),a=Object(N.a)(n,1)[0],o=i.a.useState(!1),c=Object(N.a)(o,2),r=c[0],l=c[1],d=i.a.useState([]),h=Object(N.a)(d,2),j=h[0],u=h[1],p=i.a.useState([]),b=Object(N.a)(p,2),g=(b[0],b[1],i.a.useState(null)),m=Object(N.a)(g,2),O=(m[0],m[1],i.a.useState(null)),x=Object(N.a)(O,2),v=(x[0],x[1],i.a.useState(null)),f=Object(N.a)(v,2),y=(f[0],f[1],new FormData,function(){l(!1)});return Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:function(e){var n=e.tvideos;if(n.indaitrendingVideo)return n.indaitrendingVideo.map((function(e,n){return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{onClick:function(){return t=e,l(!0),u(t),void console.log(t);var t},className:"wdisplay",src:e.image,alt:"img"}),Object(s.jsx)(_.a,{open:r,onClose:y,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:(i=j,console.log(i),Object(s.jsxs)("div",{style:a,className:t.paper,children:[Object(s.jsx)("img",{style:{width:"24.5cm",height:"15cm"},src:i.image,alt:""}),Object(s.jsxs)("div",{style:{position:"absolute",bottom:"23px",border:"1px solid gray",width:"24.5cm",height:"2cm",backgroundColor:"black",opacity:".7",color:"white"},children:[Object(s.jsx)("h5",{style:{color:"white",zIndex:"10",marginTop:"5px"},children:i.title}),Object(s.jsx)("p",{children:i.description})]})]}))})]});var i}))}(e)})};function P(){return{type:"INDIA_TRENDING_VIDEOS",payload:fetch("http://localhost:7000/image/getImage",{method:"GET"}).then((function(e){return e.json()}))}}var V=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(P())}},{key:"render",value:function(){return console.log("<<<<>>>>",this.props.IvideosList),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"All Images"}),Object(s.jsx)(E,{tvideos:this.props.IvideosList})]})}}]),n}(a.Component);var R=Object(r.b)((function(e){return{IvideosList:e.Hvideos}}))(V);function A(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var M=Object(L.a)((function(e){return{paper:{position:"absolute",width:1e3,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),G=function(e){var t=M(),n=i.a.useState(A),a=Object(N.a)(n,1)[0],o=i.a.useState(!1),c=Object(N.a)(o,2),r=c[0],l=c[1],d=i.a.useState([]),h=Object(N.a)(d,2),j=h[0],u=h[1];console.log(e);var p=function(){l(!1)};return Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:function(e){var n=e.tvideos;if(n.indaitrendingVideo)return n.indaitrendingVideo.map((function(e,n){if(null!=e.player&&e.player._id===sessionStorage.getItem("id"))return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{onClick:function(){return t=e,l(!0),u(t),void console.log(t);var t},className:"wdisplay",src:e.image,alt:"img"}),Object(s.jsx)(_.a,{open:r,onClose:p,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:(i=j,console.log(i),Object(s.jsxs)("div",{style:a,className:t.paper,children:[Object(s.jsx)("img",{style:{width:"24.5cm",height:"15cm"},src:i.image,alt:""}),Object(s.jsxs)("div",{style:{position:"absolute",bottom:"23px",border:"1px solid gray",width:"24.5cm",height:"2cm",backgroundColor:"black",opacity:".7",color:"white"},children:[Object(s.jsx)("h5",{style:{color:"white",zIndex:"10",marginTop:"5px"},children:i.title}),Object(s.jsx)("p",{children:i.description})]})]}))})]});var i}))}(e)})},W=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(P())}},{key:"render",value:function(){return console.log("<<<<>>>>",this.props.IvideosList),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"MY Images"}),Object(s.jsx)(G,{tvideos:this.props.IvideosList})]})}}]),n}(a.Component);var F=Object(r.b)((function(e){return{IvideosList:e.Hvideos}}))(W);var H=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),i=Object(N.a)(n,2);return i[0],i[1],Object(s.jsx)("div",{className:"hashnav",children:sessionStorage.getItem("_ltk")?Object(s.jsx)("div",{children:Object(s.jsx)(F,{})}):Object(s.jsx)("div",{children:Object(s.jsx)(R,{})})})},J=(n(50),function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).handleChangeEmail=function(t){e.setState({email:t.target.value}),console.log(t.target.value),console.log(e.state.email)},e.handleChangePass=function(t){e.setState({password:t.target.value}),console.log(t.target.value),console.log(e.state.password)},e.handlesubmit=function(t){console.log(t),console.log(e.state),t.preventDefault(),fetch("http://localhost:7000/user/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){console.log(t),!1===t.auth?alert(t.message):(sessionStorage.setItem("_ltk",t.token),sessionStorage.setItem("name",t.name),sessionStorage.setItem("email",t.email),sessionStorage.setItem("id",t.id),e.props.history.push("/"))}))},e.state={email:"",password:""},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{style:{backgroundColor:"rgb(250, 251, 252)"},children:[Object(s.jsx)("div",{className:"head",children:Object(s.jsx)("h1",{style:{fontWeight:"700"},children:"Image Viewer"})}),Object(s.jsxs)("div",{className:"hmain",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Log in to continue to:"}),Object(s.jsx)("div",{style:{fontWeight:"bold"},children:"Image Viewer"})]}),Object(s.jsx)("form",{onSubmit:this.handlesubmit,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{onChange:this.handleChangeEmail,type:"email",placeholder:"Enter email"}),Object(s.jsx)("input",{onChange:this.handleChangePass,type:"password",placeholder:"Enter password"}),Object(s.jsx)("button",{type:"submit",style:{color:"white",backgroundColor:"blue",cursor:"pointer"},children:"Log in"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{style:{display:"flex",listStyleType:"none"},children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("span",{children:"Can't log in?"})})}),Object(s.jsx)("p",{style:{marginLeft:"5px",marginRight:"5px"},children:"\u2022"}),Object(s.jsx)("li",{children:Object(s.jsx)(O.b,{to:"/register",children:Object(s.jsx)("span",{children:"Sign up for an account"})})})]})})]})]})}}]),n}(a.Component)),U=(n(75),function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).handleChangeFName=function(t){e.setState({first_name:t.target.value}),console.log(t.target.value),console.log(e.state.first_name)},e.handleChangeLName=function(t){e.setState({last_name:t.target.value}),console.log(t.target.value),console.log(e.state.last_name)},e.handleChangeEmail=function(t){e.setState({email:t.target.value}),console.log(t.target.value),console.log(e.state.email)},e.handleChangePass=function(t){e.setState({password:t.target.value}),console.log(t.target.value),console.log(e.state.password)},e.handlesubmit=function(t){console.log(t),console.log(e.state),t.preventDefault(),fetch("http://localhost:7000/user/addUser",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){console.log(t),"errors"===Object.keys(t)[0]?alert("invalid ".concat(Object.keys(t.errors)[0])):"driver"===Object.keys(t)[0]?alert(" ".concat(Object.keys(t.keyValue)[0]," already registered")):(e.props.history.push("/login"),alert("Register Successfully"))}))},e.state={first_name:"",last_name:"",email:"",password:""},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{style:{backgroundColor:"rgb(250, 251, 252)"},children:[Object(s.jsx)("div",{className:"head",children:Object(s.jsx)("h1",{style:{fontWeight:"700"},children:"Image Viewer"})}),Object(s.jsxs)("div",{className:"hmain",children:[Object(s.jsx)("div",{style:{fontWeight:"500",marginTop:"-10px",marginBottom:"5px"},children:Object(s.jsx)("div",{children:"Sign up for your account"})}),Object(s.jsx)("form",{onSubmit:this.handlesubmit,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{onChange:this.handleChangeFName,type:"text",placeholder:"First name"}),Object(s.jsx)("input",{onChange:this.handleChangeLName,type:"text",placeholder:"Last name"}),Object(s.jsx)("input",{onChange:this.handleChangeEmail,type:"email",placeholder:"Enter email"}),Object(s.jsx)("input",{onChange:this.handleChangePass,type:"password",placeholder:"Enter password"}),Object(s.jsx)("button",{type:"submit",style:{color:"white",backgroundColor:"blue",cursor:"pointer"},children:"Sign up"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{style:{display:"flex",listStyleType:"none"},children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("span",{children:"Already have an account?"})})}),Object(s.jsx)("p",{style:{marginLeft:"5px",marginRight:"5px"},children:"\u2022"}),Object(s.jsx)("li",{children:Object(s.jsx)(O.b,{to:"/login",children:Object(s.jsx)("span",{children:"Log In"})})})]})})]})]})}}]),n}(a.Component)),z=n(105),B=n(107),Q=(n(76),n(77),function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(v.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={image:""},e.imgaeclick=function(t){setTimeout((function(){fetch("https://bharat7.herokuapp.com/user/updateus",{method:"PUT",headers:{"x-access-token":sessionStorage.getItem("_ltk"),Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.image)}).then((function(e){return e.json()})).then((function(e){console.log(e)})),console.log(e.state.image)}),1e4)},e.imageHandler=function(t){console.log(e.state.image),e.setState({image:URL.createObjectURL(t.target.files[0])}),console.log(e.state.image)},e}return Object(f.a)(n,[{key:"render",value:function(){null==sessionStorage.getItem("_ltk")&&this.props.history.push("/login");var e=this.state.image;return Object(s.jsx)("div",{className:"page",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"img-holder",children:Object(s.jsx)("img",{src:e,alt:"",id:"img",className:"img"})}),Object(s.jsx)("input",{type:"file",accept:"image/*",name:"image-upload",id:"input",onChange:this.imageHandler,onClick:this.imgaeclick}),Object(s.jsx)("div",{className:"labell1",children:Object(s.jsxs)("label",{className:"image-upload",htmlFor:"input",children:[Object(s.jsx)("i",{className:"material-icons",children:"add_photo_alternate"}),"Choose your Photo"]})})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://trello-clone-api7.herokuapp.com/user/getinuser",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("_ltk")}}).then((function(e){return e.json()})).then((function(t){console.log(t.image),e.setState({image:t.image})}))}}]),n}(a.Component)),Y=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).chnageever=function(t){e.setState({session:t.target.value})},e.viewpro=function(){e.setState({aa:"inline"}),e.setState({bb:"none"})},e.editpro=function(){e.setState({bb:"inline"}),e.setState({aa:"none"})},e.renderprofile=function(t){if(t)return Object.keys(t).map((function(n,a){return console.log(a),Object(s.jsxs)(z.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsxs)(z.a.Label,{children:[n,":",Object(s.jsx)("span",{children:"*"})]}),Object(s.jsx)(z.a.Control,{className:"labelf",type:"text",value:t[n],onChange:e.chnageever})]})}))},e.state={session:"check",aa:"none",bb:"none",user:""},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state.user;return console.log(e),null==sessionStorage.getItem("_ltk")&&this.props.history.push("/login"),Object(s.jsxs)("div",{className:"pro-container",children:[Object(s.jsxs)("div",{id:"main-pro",children:[Object(s.jsx)("div",{children:Object(s.jsx)(Q,{})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{style:{marginTop:"5.5vh",marginLeft:"2vw"},children:"MyProfile"}),Object(s.jsx)("h3",{style:{marginTop:"-1vh",marginLeft:"2vw"},children:this.state.user.first_name})]})]}),Object(s.jsxs)("div",{className:"pro-detail",children:[Object(s.jsx)("button",{onClick:this.viewpro,children:"View Profile"}),Object(s.jsx)("button",{onClick:this.editpro,children:"Quick Links"})]}),Object(s.jsx)("div",{style:{position:"relative",top:"25vh",display:this.state.aa},children:Object(s.jsxs)("div",{className:"set",children:[Object(s.jsx)("h5",{style:{position:"relative",left:"11vw",top:"15vh",color:"#485a64"},children:"Personal detail"}),Object(s.jsx)(B.a,{className:"card-cont1",children:Object(s.jsx)(z.a,{style:{margin:"1cm"},onSubmit:this.handlesubmit,children:this.renderprofile(e)})})]})})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://trello-clone-api7.herokuapp.com/user/getinuser",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("_ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}}]),n}(a.Component),q=function(){return Object(s.jsxs)(O.a,{children:[Object(s.jsx)(x.a,{exact:!0,path:"/",component:H}),Object(s.jsx)(x.a,{exact:!0,path:"/",component:I}),Object(s.jsx)(x.a,{exact:!0,path:"/login",component:J}),Object(s.jsx)(x.a,{exact:!0,path:"/register",component:U}),Object(s.jsx)(x.a,{exact:!0,path:"/profile",component:Y}),Object(s.jsx)(x.a,{exact:!0,path:"/image",component:Q}),Object(s.jsx)(x.a,{path:["/profile"],component:I})]})};c.a.render(Object(s.jsx)(r.a,{store:m,children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.e4ed9869.chunk.js.map