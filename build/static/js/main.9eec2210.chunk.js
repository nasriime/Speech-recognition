(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),r=t(8),l=t.n(r),c=t(2),a=t(3),s=t(5),d=t(4),u=t(6),g=t(1),m=new(window.SpeechRecognition||window.webkitSpeechRecognition);m.continous=!0,m.interimResults=!0,m.lang="en-US";var p=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(d.a)(n).call(this))).state={listening:!1},e.toggleListen=e.toggleListen.bind(Object(g.a)(Object(g.a)(e))),e.handleListen=e.handleListen.bind(Object(g.a)(Object(g.a)(e))),e}return Object(u.a)(n,e),Object(a.a)(n,[{key:"toggleListen",value:function(){this.setState({listening:!this.state.listening},this.handleListen)}},{key:"handleListen",value:function(){console.log("listening?",this.state.listening),this.state.listening?(m.start(),m.onend=function(){console.log("...continue listening..."),m.start()}):(m.stop(),m.onend=function(){console.log("Stopped listening per click")}),m.onstart=function(){console.log("Listening!")};var e="";m.onresult=function(n){for(var t="",i=n.resultIndex;i<n.results.length;i++){var o=n.results[i][0].transcript;n.results[i].isFinal?e+=o+" ":t+=o}document.getElementById("interim").innerHTML=t,document.getElementById("final").innerHTML=e;var r=e.split(" "),l=r.slice(-3,-1);console.log("stopCmd",l),"stop"===l[0]&&"listening"===l[1]&&(m.stop(),m.onend=function(){console.log("Stopped listening per command");var e=r.slice(0,-3).join(" ");document.getElementById("final").innerHTML=e})},m.onerror=function(e){console.log("Error occurred in recognition: "+e.error)}}},{key:"render",value:function(){return o.a.createElement("div",{style:h},o.a.createElement("button",{id:"microphone-btn",style:b,onClick:this.toggleListen}),o.a.createElement("div",{id:"interim",style:f}),o.a.createElement("div",{id:"final",style:w}))}}]),n}(i.Component),h={display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},b={width:"60px",height:"60px",background:"lightblue",borderRadius:"50%",margin:"6em 0 2em 0"},f={color:"gray",border:"#ccc 1px solid",padding:"1em",margin:"1em",width:"300px"},w={color:"black",border:"#ccc 1px solid",padding:"1em",margin:"1em",width:"300px"},v=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:""},o.a.createElement(p,null))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t(15)}},[[9,2,1]]]);
//# sourceMappingURL=main.9eec2210.chunk.js.map