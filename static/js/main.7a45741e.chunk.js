(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),i=a.n(l),r=(a(15),a(16),function(){return o.a.createElement("div",{className:"todo-title"},o.a.createElement("p",{className:"title"},"Todo"),o.a.createElement("p",null,"made with \u2764\ufe0f in React."))}),c=a(1),s=a(4),d=a(5),u=a(7),m=a(6),h=a(8),p=function(e){var t=e.todo,a=e.handleDelete,n=e.index;return o.a.createElement("article",{className:"todo-single"},o.a.createElement("p",{className:"todo-single__index"},n),o.a.createElement("p",{className:"todo-single__todo"},t),o.a.createElement("div",{className:"todo-single__delete",onClick:a},o.a.createElement("p",null,"delete")))},v=function(e){var t=e.handleSubmit,a=e.title,n=e.handleTitle;return o.a.createElement("div",{className:"input-todo"},o.a.createElement("form",{onSubmit:t},o.a.createElement("input",{type:"text",name:"todoText",value:a,onChange:n,className:"input-todo__text",placeholder:"Ajouter un todo"}),o.a.createElement("button",{type:"submit",className:"input-todo__submit"},o.a.createElement("p",null,"Valider"))))},E=[],f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:E,title:""},a.handleTodoAdd=function(e){e.preventDefault();var t=Object(c.a)(a.state.todos),n={todo:a.state.title};t.push(n),a.setState({todos:t}),a.setState({title:""})},a.handleTitle=function(e){a.setState({title:e.target.value})},a.handleDelete=function(e){var t=Object(c.a)(a.state.todos);t.splice(e,1),a.setState({todos:t})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"Todos"},this.state.todos.map(function(t,a){return o.a.createElement(p,{key:a,index:a,todo:t.todo,handleDelete:function(t){return e.handleDelete(a)}})}),o.a.createElement(v,{title:this.state.title,handleSubmit:this.handleTodoAdd,handleTitle:this.handleTitle}))}}]),t}(o.a.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7a45741e.chunk.js.map