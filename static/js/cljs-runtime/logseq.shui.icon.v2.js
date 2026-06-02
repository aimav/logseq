goog.provide('logseq.shui.icon.v2');
goog.scope(function(){
  logseq.shui.icon.v2.goog$module$goog$object = goog.module.get('goog.object');
});
logseq.shui.icon.v2.get_adapt_icon_class = cljs.core.memoize((function (klass){
return logseq.shui.util.react__GT_rum(klass,true);
}));
logseq.shui.icon.v2.root = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__108491 = null;
var G__108491__1 = (function (name){
return daiquiri.interpreter.interpret((logseq.shui.icon.v2.root.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.icon.v2.root.cljs$core$IFn$_invoke$arity$2(name,null) : logseq.shui.icon.v2.root.call(null,name,null)));
});
var G__108491__2 = (function (name,p__108488){
var map__108489 = p__108488;
var map__108489__$1 = cljs.core.__destructure_map(map__108489);
var opts = map__108489__$1;
var extension_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108489__$1,new cljs.core.Keyword(null,"extension?","extension?",-1574402873));
var font_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108489__$1,new cljs.core.Keyword(null,"font?","font?",-1448494423));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(clojure.string.blank_QMARK_(name)){
return null;
} else {
var jsTablerIcons = logseq.shui.icon.v2.goog$module$goog$object.get(window,"tablerIcons");
if(cljs.core.truth_((function (){var or__5043__auto__ = extension_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = font_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.not(jsTablerIcons);
}
}
})())){
var attrs108490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),goog.string.format(["%s-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))?[" ",clojure.string.trim(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))].join(''):null)].join(''),(cljs.core.truth_(extension_QMARK_)?"tie tie":"ti ti"))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extension?","extension?",-1574402873),new cljs.core.Keyword(null,"font?","font?",-1448494423)], 0))], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs108490))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__icon"], null)], null),attrs108490], 0))):{'className':"ui__icon"}),((cljs.core.map_QMARK_(attrs108490))?null:[daiquiri.interpreter.interpret(attrs108490)]));
} else {
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = logseq.shui.icon.v2.goog$module$goog$object.get(tablerIcons,["Icon",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_PascalCase(name))].join(''));
if(cljs.core.truth_(temp__5804__auto__)){
var klass = temp__5804__auto__;
var f = logseq.shui.util.component_wrap(tablerIcons,["Icon",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_PascalCase(name))].join(''));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__icon.ti","span.ui__icon.ti",1689748997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ls-icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),f(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null),logseq.shui.util.map_keys__GT_camel_case(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"class","class",-2030961996)))], 0)))], null);
} else {
return null;
}
})());
}
}
});
G__108491 = function(name,p__108488){
switch(arguments.length){
case 1:
return G__108491__1.call(this,name);
case 2:
return G__108491__2.call(this,name,p__108488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__108491.cljs$core$IFn$_invoke$arity$1 = G__108491__1;
G__108491.cljs$core$IFn$_invoke$arity$2 = G__108491__2;
return G__108491;
})()
,null,"logseq.shui.icon.v2/root");

//# sourceMappingURL=logseq.shui.icon.v2.js.map
