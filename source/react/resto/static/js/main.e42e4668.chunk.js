(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/shopping-cart-solid.701d6d1d.svg"},33:function(e,t,n){e.exports=n.p+"static/media/food-bg.698e5e80.jpg"},34:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),u=n(11),o=n(12),s=n(16),l=n(14),m=n(17),p=(n(39),function(e){var t=e.menuItem,n=e.onAddToCart,r=t.title,c=t.price,i=t.url,u=t.category;return a.a.createElement("li",{className:"menu__item"},a.a.createElement("div",{className:"menu__title"},r),a.a.createElement("img",{className:"menu__img",src:i,alt:r}),a.a.createElement("div",{className:"menu__category"},"Category: ",a.a.createElement("span",null,u)),a.a.createElement("div",{className:"menu__price"},"Price: ",a.a.createElement("span",null,c,"$")),a.a.createElement("button",{onClick:function(){return n()},className:"menu__btn"},"Add to cart"))}),d=n(8),f=a.a.createContext(),E=function(){return function(e){return function(t){return a.a.createElement(f.Consumer,null,function(n){return a.a.createElement(e,Object.assign({},t,{RestoService:n}))})}}},h=function(e){return{type:"MENU_LOADED",payload:e}},_=function(){return{type:"MENU_REQUESTED"}},v=function(){return{type:"MENU_ERROR"}},b=function(){return a.a.createElement("div",{className:"spinner"},"loading...")},g=function(){return a.a.createElement("div",{className:"error"},"Error")},O=(n(44),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.menuRequested(),this.props.RestoService.getMenuItems().then(function(t){return e.props.menuLoaded(t)}).catch(function(t){return e.props.menuError(t)})}},{key:"render",value:function(){var e=this.props,t=e.menuItems,n=e.loading,r=e.error,c=e.addedToCart;if(r)return a.a.createElement(g,null);if(n)return a.a.createElement(b,null);var i=t.map(function(e){return a.a.createElement(p,{key:e.id,menuItem:e,onAddToCart:function(){return c(e.id)}})});return a.a.createElement(N,{items:i})}}]),t}(r.Component)),y={menuLoaded:h,menuRequested:_,menuError:v,addedToCart:function(e){return{type:"ITEM_ADD_TO_CART",payload:e}}},j=E()(Object(d.b)(function(e){return{menuItems:e.menu,loading:e.loading,error:e.error}},y)(O)),N=function(e){var t=e.items;return a.a.createElement("ul",{className:"menu__list"},t)},k=j,R=function(){return a.a.createElement(k,null)},C=(n(45),function(e){return e.map(function(e){return{id:e.id,pcs:e.pcs}})}),w={deleteFromCart:function(e){return{type:"ITEM_REMOVE_FROM_CART",payload:e}}},x=E()(Object(d.b)(function(e){return{items:e.items}},w)(function(e){var t=e.items,n=e.deleteFromCart,r=e.RestoService;return 0===t.length?a.a.createElement("div",{className:"cart__title"}," \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 :( "):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"cart__title"},"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"),a.a.createElement("div",{className:"cart__list"},t.map(function(e){var t=e.title,r=e.price,c=e.url,i=e.id,u=e.pcs;return a.a.createElement("div",{key:i,className:"cart__item"},a.a.createElement("img",{src:c,className:"cart__item-img",alt:t}),a.a.createElement("div",{className:"cart__item-title"},t),a.a.createElement("div",{className:"cart__item-price"},r,"$ * ",u),a.a.createElement("div",{onClick:function(){return n(i)},className:"cart__close"},"\xd7"))})),a.a.createElement("button",{onClick:function(){r.setOrder(C(t))},className:"order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))})),M=function(){return a.a.createElement("div",{className:"cart"},a.a.createElement(x,null))},T=(n(46),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.props.menuItems.length&&(this.props.menuRequested(),this.props.RestoService.getMenuItems().then(function(t){return e.props.menuLoaded(t)}).catch(function(t){return e.props.menuError()}))}},{key:"render",value:function(){var e=this;if(this.props.loading)return a.a.createElement("div",{className:"item_page"},a.a.createElement(b,null));var t=this.props.menuItems.find(function(t){return+t.id===+e.props.match.params.id}),n=t.title,r=t.url,c=t.category,i=t.price;return a.a.createElement("div",{className:"item_page"},a.a.createElement("div",{className:"menu__item item_block"},a.a.createElement("div",{className:"menu__title"},n),a.a.createElement("img",{className:"menu__img",src:r,alt:n}),a.a.createElement("div",{className:"menu__category"},"Category: ",a.a.createElement("span",null,c)),a.a.createElement("div",{className:"menu__price"},"Price: ",a.a.createElement("span",null,i,"$")),a.a.createElement("button",{className:"menu__btn"},"Add to cart"),a.a.createElement("span",{className:"menu__category_Img ".concat(c)})))}}]),t}(r.Component)),I={menuLoaded:h,menuRequested:_,menuError:v},A=E()(Object(d.b)(function(e){return{menuItems:e.menu,loading:e.loading,error:e.error}},I)(T)),P=n(31),D=n.n(P),S=(n(47),n(15)),U=Object(d.b)(function(e){return{totalPrice:e.totalPrice}})(function(e){var t=e.totalPrice;return a.a.createElement("header",{className:"header"},a.a.createElement(S.b,{to:"/",className:"header__link"},"Menu"),a.a.createElement(S.b,{to:"/cart",className:"header__link"},a.a.createElement("img",{className:"header__cart",src:D.a,alt:"cart"}),"Total: ",t," $"))}),L=n(33),F=n.n(L),q=n(13),B=function(){return a.a.createElement("div",{style:{background:"url(".concat(F.a,") center center/cover no-repeat")},className:"app"},a.a.createElement(U,{total:50}),a.a.createElement(q.c,null,a.a.createElement(q.a,{path:"/",exact:!0,component:R}),a.a.createElement(q.a,{path:"/cart",component:M}),a.a.createElement(q.a,{path:"/:id",component:A})))},$=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={error:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?a.a.createElement(g,null):this.props.children}}]),t}(r.Component),J=n(7),Q=n.n(J),V=n(18),z=function(){function e(){Object(u.a)(this,e),this._apiBase="http://localhost:3000"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(V.a)(Q.a.mark(function e(t){var n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Server Error");case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMenuItems",value:function(){var e=Object(V.a)(Q.a.mark(function e(){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/menu/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(V.a)(Q.a.mark(function e(t){var n,r;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/menu/");case 2:return n=e.sent,console.log(n),r=n.find(function(e){return console.log("el.id: ".concat(e.id,", id: ").concat(t)),e.id===+t}),console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setOrder",value:function(){var e=Object(V.a)(Q.a.mark(function e(t){var n,r;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOrderNumber();case 2:return n=e.sent,r={id:n,order:t},e.next=6,fetch("".concat(this._apiBase,"/orders"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 6:if(e.sent.ok){e.next=9;break}throw new Error("json error");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getOrderNumber",value:function(){var e=Object(V.a)(Q.a.mark(function e(){var t,n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/orders/");case 2:return t=e.sent,n=t.length+1,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),G=n(23),H=n(19),K=n(10),W={menu:[],loading:!0,error:!1,items:[],totalPrice:0},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case"MENU_LOADED":return Object(K.a)({},e,{menu:t.payload,loading:!1,error:!1});case"MENU_REQUESTED":return Object(K.a)({},e,{menu:e.menu,loading:!0,error:!1});case"MENU_ERROR":return Object(K.a)({},e,{menu:e.menu,loading:!0,error:!0});case"ITEM_ADD_TO_CART":var n=t.payload,r=e.items.findIndex(function(e){return e.id===n});if(r>=0){var a=e.items.find(function(e){return e.id===n}),c=Object(K.a)({},a,{pcs:++a.pcs});return Object(K.a)({},e,{items:[].concat(Object(H.a)(e.items.slice(0,r)),[c],Object(H.a)(e.items.slice(r+1))),totalPrice:e.totalPrice+c.price})}var i=e.menu.find(function(e){return e.id===n}),u={title:i.title,price:i.price,url:i.url,id:i.id,pcs:1};return Object(K.a)({},e,{items:[].concat(Object(H.a)(e.items),[u]),totalPrice:e.totalPrice+u.price});case"ITEM_REMOVE_FROM_CART":var o=t.payload,s=e.items.findIndex(function(e){return e.id===o}),l=e.items[s].price*e.items[s].pcs;return Object(K.a)({},e,{items:[].concat(Object(H.a)(e.items.slice(0,s)),Object(H.a)(e.items.slice(s+1))),totalPrice:e.totalPrice-l});case"CLEAR_CART":return Object(K.a)({},e,{items:[]});default:return e}},Y=Object(G.b)(X),Z=(n(50),new z);i.a.render(a.a.createElement(d.a,{store:Y},a.a.createElement($,null,a.a.createElement(f.Provider,{value:Z},a.a.createElement(S.a,null,a.a.createElement(B,null))))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e42e4668.chunk.js.map