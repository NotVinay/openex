(this.webpackJsonpopenex=this.webpackJsonpopenex||[]).push([[0],{104:function(e,t,n){e.exports=n(132)},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=n(17),l=n(14),u=n(20),s=n(21),m=n(23),p=n(27),h=n(165),v=function(e){var t=e.children,n=e.window,r=Object(h.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return a.a.cloneElement(t,{elevation:r?4:0})},f=n(169),d=n(168),E=n(88),b=n(183),y=n(170),g=n(77),O=n.n(g),C=n(80),_=n.n(C),S=n(25),j=n.n(S),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={mobileMoreAnchorEl:null},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Boolean(this.state.mobileMoreAnchorEl),t=a.a.createElement(E.a,{anchorEl:this.state.mobileMoreAnchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:e,onClose:this.handleMobileMenuClose},a.a.createElement(b.a,null,a.a.createElement(p.b,{to:"/",activeStyle:{color:"#26a69a"},className:j.a.NavLink,exact:!0},"Home")),a.a.createElement(b.a,null,a.a.createElement(p.b,{to:"/converter",activeStyle:{color:"#26a69a"},className:j.a.NavLink},"Converter")),a.a.createElement(b.a,null,a.a.createElement(p.b,{to:"/about",activeStyle:{color:"#26a69a"},className:j.a.NavLink},"About")));return a.a.createElement(d.a,null,a.a.createElement(v,this.props,a.a.createElement(f.a,{color:"inherit"},a.a.createElement(d.a,null,a.a.createElement("img",{src:O.a,width:"125px"}),a.a.createElement("div",{className:j.a.Grow}),a.a.createElement("div",{className:j.a.SectionDesktop},a.a.createElement(p.b,{to:"/",activeStyle:{color:"#26a69a"},className:j.a.NavLink,exact:!0},"Home"),a.a.createElement(p.b,{to:"/converter",activeStyle:{color:"#26a69a"},className:j.a.NavLink},"Converter"),a.a.createElement(p.b,{to:"/about",activeStyle:{color:"#26a69a"},className:j.a.NavLink},"About")),a.a.createElement("div",{className:j.a.SectionMobile},a.a.createElement(y.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},a.a.createElement(_.a,null)))))),t)}}]),t}(r.Component),F=n(92),T=n(171),w=n(81),k=n.n(w);function x(){return a.a.createElement(F.a,{variant:"body2",align:"center"},"Get latest exchange rates, every time!",a.a.createElement("br",null),"Copyright \xa9 ",a.a.createElement(T.a,null,"OpenEx")," ",(new Date).getFullYear(),".")}var A=function(e){return a.a.createElement("footer",{className:k.a.Footer},a.a.createElement(x,null))},H=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null),e.children,a.a.createElement(A,null))},M=n(34),R=function(e){return e.children},D=n(52),I=n.n(D),P=["CAD","HKD","ISK","PHP","DKK","HUF","CZK","AUD","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","SGD","PLN","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","ILS","GBP","KRW","MYR"],L=function(){return function(e){e({type:"FETCH_COUNTRIES_START"}),I.a.get("https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all").then((function(t){var n=t.data.filter((function(e){return P.includes(e.currencies[0].code)}));e({type:"FETCH_COUNTRIES_SUCCESS",countries:n})})).catch((function(e){console.log("Error in getting the data",e)}))}},U=I.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io"}),B=function(e,t,n){return function(r){r({type:"FETCH_CONVERSION_START"}),U.get("/latest?base="+e.currencies[0].code+"&symbols="+t.currencies[0].code).then((function(a){var o=a.data.rates[t.currencies[0].code];console.log("Result: ",o),r(function(e,t,n,r){return{type:"FETCH_CONVERSION_SUCCESS",fromCountry:e,toCountry:t,amount:n,result:r}}(e,t,n,o))})).catch((function(e){console.log("Error in getting the data",e),r(function(e){return{type:"FETCH_CONVERSION_FAILED",error:e}}())}))}},K=n(31),V=n(10),G=n(172),Y=n(175),W=n(181),X=n(185),Z=n(182),z=n(177),J=n(176),Q=n(44),$=n(83),q=n.n($);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={from:"GB",to:"US",amount:0},n.handleChange=function(e){return function(t){n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,Object(V.a)({},e,t.target.value)))}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("form",{noValidate:!0,autoComplete:"off"},a.a.createElement(G.a,{container:!0,spacing:0,justify:"center",alignItems:"center",className:Q.Container},a.a.createElement(G.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},a.a.createElement(G.a,{item:!0,xs:12},a.a.createElement(X.a,{id:"amount",label:"Amount",type:"number",margin:"normal",variant:"outlined",value:this.state.amount,onChange:this.handleChange("amount"),className:Q.FormTextField})),a.a.createElement(G.a,{item:!0,xs:12,md:5},a.a.createElement(Y.a,{variant:"outlined",className:Q.FormSelect},a.a.createElement(Z.a,{htmlFor:"from-currency"}),a.a.createElement(W.a,{id:"from-currency",select:!0,label:"from-currency",value:this.state.from,onChange:this.handleChange("from"),helpertext:"Please select your base Currency",labelWidth:0},this.props.countries.map((function(e){var t=e.currencies[0];return a.a.createElement(b.a,{key:e.alpha2Code,value:e.alpha2Code},a.a.createElement(G.a,{container:!0,alignItems:"center"},a.a.createElement(J.a,{alt:"country.name",src:e.flag,style:{display:"inline-block"}}),a.a.createElement("span",{style:{marginLeft:5}},t.name+" ("+t.code+")")))}))))),a.a.createElement(G.a,{item:!0,xs:12,md:2},a.a.createElement(q.a,null)),a.a.createElement(G.a,{item:!0,xs:12,md:5},a.a.createElement(Y.a,{variant:"outlined",className:Q.FormSelect},a.a.createElement(Z.a,{htmlFor:"to-currency"}),a.a.createElement(W.a,{id:"to-currency",select:!0,label:"to-currency",value:this.state.to,onChange:this.handleChange("to"),helpertext:"Please select the currency you want to transform.",labelWidth:0},this.props.countries.map((function(e){var t=e.currencies[0];return a.a.createElement(b.a,{key:e.alpha2Code,value:e.alpha2Code},a.a.createElement(G.a,{container:!0,alignItems:"center"},a.a.createElement(J.a,{alt:"country.name",src:e.flag,style:{display:"inline-block"}}),a.a.createElement("span",{style:{marginLeft:5}},t.name+" ("+t.code+")")))}))))),a.a.createElement(G.a,{item:!0,xs:12},a.a.createElement(z.a,{variant:"contained",color:"primary",onClick:function(t){return e.props.conversionHandler(e.state.from,e.state.to,e.state.amount)}},"Convert")))))}}]),t}(r.Component),ne=n(84),re=n.n(ne),ae=function(){return a.a.createElement("div",{className:re.a.loader},"Loading...")},oe=n(178),ce=Object(K.b)((function(e){return{conversionFrom:e.converter.fromCountry,conversionTo:e.converter.toCountry,conversionAmount:e.converter.amount,conversionMultiplier:e.converter.result,loading:e.converter.loading,error:e.converter.error}}),null)((function(e){var t=a.a.createElement("div",null);if(e.loading)t=a.a.createElement(ae,null);else{if(e.error)return a.a.createElement(oe.a,{variant:"error",message:"Error in conversion."});if(e.conversionMultiplier&&null!==e.conversionAmount)return a.a.createElement(R,null,a.a.createElement(F.a,{variant:"h2",gutterBottom:!0},e.conversionAmount+" "+e.conversionFrom.currencies[0].code+" = "," ",(e.conversionAmount*e.conversionMultiplier).toFixed(2)," "," "+e.conversionTo.currencies[0].code),a.a.createElement(F.a,{variant:"subtitle1",gutterBottom:!0},"1 "+e.conversionFrom.currencies[0].code+" = "+e.conversionMultiplier," "+e.conversionTo.currencies[0].code),a.a.createElement(F.a,{variant:"subtitle2",gutterBottom:!0},"All figures are live mid-market rates as published by European Central Bank."))}return t})),ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).conversionHandler=function(e,t,r){var a=n.props.countries.filter((function(t){return t.alpha2Code==e}))[0],o=n.props.countries.filter((function(e){return e.alpha2Code==t}))[0];console.log(a,o),n.props.convert(a,o,r)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.loadCountries()}},{key:"render",value:function(){return this.props.conversionMultiplier&&a.a.createElement("div",null,this.props.conversionAmount+" "+this.props.conversionFrom.currencies[0].code+" = "," ",(this.props.conversionAmount*this.props.conversionMultiplier).toFixed(2)," "," "+this.props.conversionTo.currencies[0].code),a.a.createElement(R,null,a.a.createElement(te,{countries:this.props.countries,conversionHandler:this.conversionHandler}),a.a.createElement(ce,null))}}]),t}(r.Component),le=Object(K.b)((function(e){return{countries:e.countries.countries,countriesLoading:e.countries.loading}}),(function(e){return{loadCountries:function(){return e(L())},convert:function(t,n,r){return e(B(t,n,r))}}}))(ie),ue=n(85),se=n.n(ue),me=n(86),pe=n.n(me),he=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(R,null,a.a.createElement("div",{className:pe.a.HeroContainer},a.a.createElement(G.a,{container:!0,spacing:3},a.a.createElement(G.a,{item:!0,xs:12,md:6},"Left"),a.a.createElement(G.a,{item:!0,xs:12,md:6},"Right"))))}}]),t}(r.Component),ve=Object(K.b)((function(e){return{countries:e.countries.countries,countriesLoading:e.countries.loading}}),(function(e){return{loadCountries:function(){return e(L())},convert:function(t,n,r){return e(B(t,n,r))}}}))(he),fe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{basename:"/openex"},a.a.createElement("div",{className:se.a.App},a.a.createElement(H,null,a.a.createElement(M.a,{path:"/",exact:!0,component:ve}),a.a.createElement(M.a,{path:"/converter",component:le}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(39);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var be=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},ye={fromCountry:null,toCountry:null,amount:null,result:null,loading:!1,error:!1},ge=function(e,t){return be(e,{loading:!0})},Oe=function(e,t){return be(e,{fromCountry:t.fromCountry,toCountry:t.toCountry,amount:t.amount,result:t.result,loading:!1,error:!1})},Ce=function(e,t){return be(e,{fromCountry:null,toCountry:null,amount:null,result:null,loading:!1,error:!0})},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(console.log("In reducer fired",t),t.type){case"FETCH_CONVERSION_START":return ge(e);case"FETCH_CONVERSION_SUCCESS":return Oe(e,t);case"FETCH_CONVERSION_FAILED":return Ce(e)}return e},Se={countries:[],loading:!1,error:!1},je=function(e,t){return be(e,{loading:!0})},Ne=function(e,t){return be(e,{countries:t.countries,loading:!1,error:!1})},Fe=function(e,t){return be(e,{countries:null,loading:!1,error:!0})},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(console.log("In reducer fired",t),t.type){case"FETCH_COUNTRIES_START":return je(e);case"FETCH_COUNTRIES_SUCCESS":return Ne(e,t);case"FETCH_COUNTRIES_FAILED":return Fe(e)}return e},we=n(87),ke=n(89),xe=n(180),Ae=n(179),He=Object(ke.a)({palette:{primary:{main:Ae.a[400]},secondary:{main:"#11cb5f"}}}),Me=Object(de.c)({countries:Te,converter:_e}),Re=Object(de.e)(Me,Object(de.d)(Object(de.a)(we.a)));c.a.render(a.a.createElement(xe.a,{theme:He},a.a.createElement(K.a,{store:Re},a.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,n){e.exports={NavLink:"Header_NavLink__2Ym4a",Grow:"Header_Grow__3nvWr",SectionDesktop:"Header_SectionDesktop__2F_Vn",SectionMobile:"Header_SectionMobile__2oSKl"}},44:function(e,t,n){e.exports={Container:"ConverterForm_Container__lekXp",Dense:"ConverterForm_Dense__1Mhte",Menu:"ConverterForm_Menu__2zgVj",FormSelect:"ConverterForm_FormSelect__3-UYP",FormTextField:"ConverterForm_FormTextField__3QVmv"}},77:function(e,t,n){e.exports=n.p+"static/media/logo.60ec4245.svg"},81:function(e,t,n){e.exports={Footer:"Footer_Footer__37ibL"}},84:function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load1:"Spinner_load1__1BXDX"}},85:function(e,t,n){e.exports={App:"App_App__16ZpL"}},86:function(e,t,n){e.exports={HeroContainer:"Home_HeroContainer__T9pUT"}}},[[104,1,2]]]);
//# sourceMappingURL=main.2403c6e7.chunk.js.map