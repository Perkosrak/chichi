(this.webpackJsonpchichi=this.webpackJsonpchichi||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/chichi.4219124a.jpg"},22:function(e,a,t){e.exports=t(37)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(18),r=t.n(c),o=t(19),m=t.n(o),i=(t(27),t(3)),s=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"chichi-logo"},l.a.createElement("img",{src:m.a,className:"navbar_logo",alt:"app_logo"}),l.a.createElement("span",{className:"name-logo"},"CHICHI")),l.a.createElement("ul",null,l.a.createElement("li",{className:"navbar-item"}," ",l.a.createElement(i.c,{to:"/main",activeClassName:"active"}," Home ")),l.a.createElement("li",{className:"navbar-item"}," ",l.a.createElement(i.c,{to:"/categories",activeClassName:"active"}," Categores ")),l.a.createElement("li",{className:"navbar-item"}," ",l.a.createElement(i.c,{to:"/charts",activeClassName:"active"}," Charts "))))},u=t(21),E=t(9),d=t(10),g=t(12),h=t(11),v=(t(33),function(e){return l.a.createElement("div",{className:"balance-container"},l.a.createElement("h3",null,"Balance"),l.a.createElement("div",{className:"amount"},"$ ",e.value))}),p=(t(34),function(){return l.a.createElement("nav",{className:"tab-items"},l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(i.c,{to:"/charges",activeClassName:"active"}," Charges ")),l.a.createElement("li",null," ",l.a.createElement(i.c,{to:"/incomes",activeClassName:"active"}," Incomes "))))});var f=function(e){var a=e.type;return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Category"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,a)))};var b=function(e){var a=e.category,t=e.description,n=void 0===t?"":t,c=e.date,r=e.money;return l.a.createElement("tr",null,l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,c),l.a.createElement("td",null,r))};window.localStorage.setItem("data",JSON.stringify([{category:"food",description:"lemon",date:"01-02-2020",income:1200,Charges:1200},{category:"food",description:"lemon",date:"01-02-2020",income:1200,Charges:1200},{category:"food",description:"lemon",date:"01-02-2020",income:1200,Charges:1200},{category:"food",description:"lemon",date:"01-02-2020",income:1200,Charges:1200}]));var y=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={data:JSON.parse(localStorage.getItem("data")),dog:"true"},e.addNew=function(a){console.log(e.state),console.log(a.target.category.value),console.log(a.target.description.value),console.log(a.target.date.value),console.log(a.target.money.value),e.setState({dog:"Chio"})},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("table",null,l.a.createElement(f,{type:"Income"}),l.a.createElement("tbody",null,this.state.data.map((function(e){return l.a.createElement(b,{category:e.category,description:e.description,date:e.date,money:e.income})})))))}}]),t}(n.Component),C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Charges"),l.a.createElement(y,null))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Incomes"),l.a.createElement(y,null))},w=(t(35),function(){return l.a.createElement("div",{className:"button-add-more"},l.a.createElement("button",{component:i.b,to:"/ButtonAddMore"},"Add more"))}),O=t(1),I=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={balance:Object(u.a)(JSON.parse(localStorage.getItem("data"))).reduce((function(e,a){return a.income+e}),0)},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{value:this.state.balance}),l.a.createElement(i.a,null,l.a.createElement("div",{className:"tab-items"},l.a.createElement(p,null),l.a.createElement(O.a,{path:"/charges",component:C}),l.a.createElement(O.a,{path:"/incomes",component:N})),l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(O.a,{path:"/button",component:w}))))}}]),t}(n.Component),j=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"It's a Categories Page"),l.a.createElement("p",null,"Categories of Cats and Dogs here!"))},S=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"It's a Charts Page"),l.a.createElement("p",null,"Diagrams of Cats and Dogs here!"))};t(36);var k=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"app_wrapper"},l.a.createElement(s,null),l.a.createElement(O.a,{path:"/main",component:I}),l.a.createElement(O.a,{path:"/categories",component:j}),l.a.createElement(O.a,{path:"/charts",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2a0c28ab.chunk.js.map