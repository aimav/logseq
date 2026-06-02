goog.provide('frontend.colors');
frontend.colors.color_list = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"grass","grass",1213050421),new cljs.core.Keyword(null,"orange","orange",73816386)], null);
frontend.colors.variable = (function frontend$colors$variable(var_args){
var G__110999 = arguments.length;
switch (G__110999) {
case 2:
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.colors.variable.cljs$core$IFn$_invoke$arity$2 = (function (color,value){
return frontend.colors.variable.cljs$core$IFn$_invoke$arity$3(color,value,false);
}));

(frontend.colors.variable.cljs$core$IFn$_invoke$arity$3 = (function (color,value,alpha_QMARK_){
return ["var(--rx-",cljs.core.name(color),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__111001 = value;
if(cljs.core.truth_(cljs.core.keyword_QMARK_)){
return cljs.core.name(G__111001);
} else {
return G__111001;
}
})()),(cljs.core.truth_(alpha_QMARK_)?"-alpha":""),")"].join('');
}));

(frontend.colors.variable.cljs$lang$maxFixedArity = 3);

frontend.colors.linear_gradient = (function frontend$colors$linear_gradient(color_name,color_stop,gradient_level){
var color_index = frontend.colors.color_list.indexOf(color_name);
var step = (function (dist){
return ["var(--rx-",cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.colors.color_list,cljs.core.mod((color_index + dist),cljs.core.count(frontend.colors.color_list)))),"-",cljs.core.name(color_stop),")"].join('');
});
var G__111002 = gradient_level;
switch (G__111002) {
case (2):
return ["linear-gradient(-45deg, ",step((-1))," -50%, ",step((0))," 50%, ",step((1))," 150%)"].join('');

break;
case (3):
return ["linear-gradient(-45deg, ",step((-1))," 0%, ",step((0))," 50%, ",step((1))," 100%)"].join('');

break;
case (4):
return ["linear-gradient(-45deg, ",step((-2))," -16.66%, ",step((-1))," 16.66%, ",step((0))," 50%, ",step((1))," 83.33%, ",step((2))," 116.66%)"].join('');

break;
case (5):
return ["linear-gradient(-45deg, ",step((-2))," 0%, ",step((-1))," 25%, ",step((0))," 50%, ",step((1))," 75%, ",step((2))," 100%)"].join('');

break;
case (6):
return ["linear-gradient(-45deg, ",step((-3))," -10%, ",step((-2))," 10%, ",step((-1))," 30%, ",step((0))," 50%, ",step((1))," 70%, ",step((2))," 90%, ",step((3))," 110%)"].join('');

break;
case (7):
return ["linear-gradient(-45deg, ",step((-3))," 0%, ",step((-2))," 16.66%, ",step((-1))," 33.33%, ",step((0))," 50%, ",step((1))," 66.66%, ",step((2))," 83.33%, ",step((3))," 100%)"].join('');

break;
default:
return ["linear-gradient(90deg, ",step((0)),", ",step((0)),")"].join('');

}
});
frontend.colors.get_accent_color = (function frontend$colors$get_accent_color(){
var temp__5804__auto__ = (function (){var G__111003 = document.documentElement;
var G__111003__$1 = (((G__111003 == null))?null:getComputedStyle(G__111003));
if((G__111003__$1 == null)){
return null;
} else {
return G__111003__$1.getPropertyValue("--lx-accent-09");
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var color = temp__5804__auto__;
if(clojure.string.blank_QMARK_(color)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(color,"#")){
return color;
} else {
var hsl_color = (function (){var G__111004 = color;
var G__111004__$1 = (((G__111004 == null))?null:clojure.string.replace(G__111004,"hsl(",""));
var G__111004__$2 = (((G__111004__$1 == null))?null:clojure.string.replace(G__111004__$1,")",""));
if((G__111004__$2 == null)){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__111004__$2,",");
}
})();
var temp__5804__auto____$1 = (function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(cljs.core.first(hsl_color))));
if(and__5041__auto__){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,hsl_color);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var hsl_color__$1 = temp__5804__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.util.hsl2hex,hsl_color__$1);
} else {
return null;
}
}
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.colors.js.map
