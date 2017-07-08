var About=React.createClass({displayName:"About",render:function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"About me")),React.createElement("div",{className:"col-sm-6"},React.createElement(AboutContent,{about:this.props.about.about})),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-3"},this.props.about.skill.map(function(e,t){return React.createElement(Skill,{key:t,skills:e})}))),React.createElement("hr",null))}}),Contact=React.createClass({displayName:"Contact",render:function(){function e(e){return e.download?React.createElement("div",{className:"col-md-4 text-center "+e.color},React.createElement("a",{className:"first-box",href:""+e.url,download:""+e.download},React.createElement("h1",null,React.createElement("span",{className:e.classname+" "+e.fcolor})),React.createElement("h5",null,e.name))):React.createElement("div",{className:"col-md-4 text-center "+e.color},React.createElement("a",{className:"first-box",href:""+e.url},React.createElement("h1",null,React.createElement("span",{className:e.classname+" "+e.fcolor})),React.createElement("h5",null,e.name)))}return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"Contact"),React.createElement("div",{className:"row",style:{padding:"0em 0em 4em 0em"}},React.createElement("div",{className:"col-md-5"},React.createElement(Map,null)),React.createElement("div",{className:"col-md-7"},this.props.contact.name.map(function(t){return e(t)})))))}}),Login=React.createClass({displayName:"Login",render:function(){return React.createElement("div",{className:"wrapper"},React.createElement("h1",null,"Hello,, ",this.props.wish),React.createElement("form",{className:"form-signin"},React.createElement("h2",{className:"form-signin-heading"},"Please login"),React.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Email Address",required:"",autofocus:""}),React.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",required:""}),React.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Login"),React.createElement("span",null,"or"),React.createElement("a",{href:"#"},"Sign Up")))}}),Map=React.createClass({displayName:"Map",render:function(){return React.createElement("div",null,React.createElement("iframe",{src:"https://www.google.com/maps/embed/v1/search?&q=bangalore+girinagar&key=AIzaSyA9aEUMENNHP2Z3Rk4Ia_XgQtAUcg3uLKU",style:Frame_Style}))}}),Frame_Style={width:"100%",height:"20em",border:"2px solid black"},Profile=React.createClass({displayName:"Profile",render:function(){return React.createElement("div",null,React.createElement(Header,{name:this.props.profile.name,position:this.props.profile.designation,location:this.props.profile.location}),React.createElement("hr",null))}}),Recommend=React.createClass({displayName:"Recommend",render:function(){return React.createElement("div",{className:"reco-main"},React.createElement("div",{className:"row"},React.createElement("div",{className:"reco-description"},React.createElement("p",null,this.props.reco.desc)),React.createElement("div",{className:"col-sm-4 col-md-4"},React.createElement(Img,{src:this.props.reco.image,style:Img_style,alt:"logo",className:"img-circle",id:"img-circle"})),React.createElement("div",{className:"col-sm-8 col-md-8"},React.createElement("p",null,this.props.reco.name),React.createElement("p",null,this.props.reco.desi))))}}),Img_style={width:"4em",height:"4em",margin:" 0 1em 1em 2em"},Signup=React.createClass({displayName:"Signup",render:function(){return React.createElement("div",{className:"wrapper"},React.createElement("form",{className:"form-signin"},React.createElement("h2",{className:"form-signin-heading"},"Sign up"),React.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Email Address",required:"",autofocus:""}),React.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",required:""}),React.createElement("input",{type:"password",className:"form-control",name:"password confirmation",placeholder:"Confirm Password",required:""}),React.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up")))}}),Tech=React.createClass({displayName:"Tech",render:function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"Intersted to work on")),React.createElement("div",null,React.createElement("h2",{className:"heading",id:"quote-text"},this.props.tech.quote.quote)),React.createElement("div",{className:"container-fluid"},this.props.tech.logos.map(function(e,t){return React.createElement(TechContent,{key:t,image:e})})),React.createElement("hr",null))}}),Timeline=React.createClass({displayName:"Timeline",render:function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"Career Path")),React.createElement("div",null,this.props.timeline.name.map(function(e,t){return React.createElement(TimelineContent,{key:t,comp:e})})),React.createElement("hr",null))}}),Tools=React.createClass({displayName:"Tools",render:function(){return React.createElement("div",null,React.createElement("div",null,React.createElement("h1",{className:"heading",id:"about_heading"},"Tools")),React.createElement("div",{className:"container-fluid"},this.props.tools.logos.map(function(e,t){return React.createElement(ToolsContent,{key:t,image:e})})),React.createElement("hr",null))}}),AboutContent=React.createClass({displayName:"AboutContent",render:function(){return React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-12"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-6 text-left"},React.createElement("p",null,this.props.about),React.createElement(Img,{src:"/assets/pic.png",alt:"logo",className:"img-circle",id:"img-circle"})))),React.createElement("div",{className:"col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"})))}}),Header=React.createClass({displayName:"Header",showBlog:function(){window.location.href=location.protocol+"//"+location.host+"/blogs/recent"},render:function(){return React.createElement("div",null,React.createElement("h1",null,"Hello."),React.createElement("h1",null,"I'm ",React.createElement("span",{className:"text-primary"},this.props.name),", a ",React.createElement("span",{className:"text-primary"}," ",this.props.position)," living in ",this.props.location),React.createElement("button",{onClick:this.showBlog,style:{position:"absolute",right:"2em",top:"2em"}},"My Blog"))}}),Recommendation=React.createClass({displayName:"Recommendation",render:function(){return React.createElement("div",null,React.createElement("div",{className:"container"},React.createElement("h1",{className:"heading",id:"about_heading"},"Recommendations"),this.props.recommend.name.map(function(e,t){return React.createElement("div",{className:"col-sm-4 col-md-4"},React.createElement(Recommend,{key:t,reco:e}))})),React.createElement("hr",null))}}),Skill=React.createClass({displayName:"Skill",render:function(){return React.createElement("div",{className:"skill-item"},React.createElement("div",{className:"progress-title"},this.props.skills.tech),React.createElement("div",{className:"progress"},React.createElement("div",{role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100",style:{width:this.props.skills.value+"%"},className:"progress-bar progress-bar-skill1"},React.createElement("span",{className:"sr-only"},this.props.skills.value))))}}),TechContent=React.createClass({displayName:"TechContent",render:function(){var e="/assets/"+this.props.image.logo;return React.createElement("div",{className:"col-sm-4 col-md-3",style:{padding:0}},React.createElement(Img,{src:e,className:"img-responsive",id:"img-tech"}))}}),TimelineContent=React.createClass({displayName:"TimelineContent",render:function(){return React.createElement("div",{className:"container"},React.createElement("div",{className:"timeline"},React.createElement("div",{className:"main"},React.createElement("h3",null,this.props.comp.name),React.createElement("h5",null,this.props.comp.designation),React.createElement("h5",null,this.props.comp.duration)),React.createElement("ul",null,this.props.comp.projects.map(function(e){return React.createElement("li",null,React.createElement("h4",null,e.title),React.createElement("p",null,e.description),React.createElement("p",null,e.skills),React.createElement("time",null,e.platform))}))))}}),ToolsContent=React.createClass({displayName:"ToolsContent",render:function(){var e="/assets/"+this.props.image.logo;return React.createElement("div",{className:"col-md-1 col-md-1"},React.createElement(Img,{src:e,className:"img-circle",id:"img-tech"}))}});