goog.provide('borkdude.rewrite_edn.impl');
borkdude.rewrite_edn.impl.count_uncommented_children = (function borkdude$rewrite_edn$impl$count_uncommented_children(zloc){
return cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__90880_SHARP_){
return ((rewrite_clj.node.whitespace_or_comment_QMARK_(p1__90880_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uneval","uneval",1932037707),rewrite_clj.node.tag(p1__90880_SHARP_))));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node(zloc))));
});
borkdude.rewrite_edn.impl.maybe_right = (function borkdude$rewrite_edn$impl$maybe_right(zloc){
if(rewrite_clj.zip.rightmost_QMARK_(zloc)){
return zloc;
} else {
return rewrite_clj.zip.right(zloc);
}
});
borkdude.rewrite_edn.impl.skip_right = (function borkdude$rewrite_edn$impl$skip_right(zloc){
return rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
return (((!(rewrite_clj.zip.rightmost_QMARK_(zloc__$1)))) && (((rewrite_clj.node.whitespace_or_comment_QMARK_(rewrite_clj.zip.node(zloc__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uneval","uneval",1932037707),rewrite_clj.zip.tag(zloc__$1))))));
}),zloc);
});
borkdude.rewrite_edn.impl.indent = (function borkdude$rewrite_edn$impl$indent(zloc,key_count,first_key_loc){
var current_loc = cljs.core.meta(rewrite_clj.zip.node(zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),key_count)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_key_loc),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current_loc))))){
var zloc__$1 = rewrite_clj.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,((new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(first_key_loc) - (1)) - (1))));
return zloc__$1;
} else {
return zloc;
}
});
borkdude.rewrite_edn.impl.assoc_STAR_ = (function borkdude$rewrite_edn$impl$assoc_STAR_(forms,k,v){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var tag = rewrite_clj.zip.tag(zloc);
var zloc__$1 = rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
var t = rewrite_clj.zip.tag(zloc__$1);
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),t)));
}),zloc);
var node = rewrite_clj.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_clj.node.tag(node))) && ((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) == null)));
var zloc__$2 = ((nil_QMARK_)?rewrite_clj.zip.replace(zloc__$1,rewrite_clj.node.coerce(cljs.core.PersistentArrayMap.EMPTY)):zloc__$1);
var length = borkdude.rewrite_edn.impl.count_uncommented_children(zloc__$2);
var out_of_bounds_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),tag)) && ((k >= length)));
var empty_QMARK_ = ((nil_QMARK_) || ((length === (0))));
if(empty_QMARK_){
return rewrite_clj.zip.root(rewrite_clj.zip.append_child(rewrite_clj.zip.append_child(zloc__$2,rewrite_clj.node.coerce(k)),rewrite_clj.node.coerce(v)));
} else {
if(out_of_bounds_QMARK_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("IndexOutOfBounds",cljs.core.PersistentArrayMap.EMPTY);
} else {
var zloc__$3 = rewrite_clj.zip.down(zloc__$2);
var zloc__$4 = borkdude.rewrite_edn.impl.skip_right(zloc__$3);
var first_key_loc = (function (){var temp__5804__auto__ = rewrite_clj.zip.node(zloc__$4);
if(cljs.core.truth_(temp__5804__auto__)){
var first_key = temp__5804__auto__;
return cljs.core.meta(first_key);
} else {
return null;
}
})();
var key_count = (0);
var zloc__$5 = zloc__$4;
while(true){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var fexpr__90883 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__90883.cljs$core$IFn$_invoke$arity$1 ? fexpr__90883.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__90883.call(null,tag));
})();
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_clj.zip.rightmost_QMARK_(zloc__$5);
} else {
return and__5041__auto__;
}
})())){
return rewrite_clj.zip.root(rewrite_clj.zip.insert_right(rewrite_clj.zip.right(borkdude.rewrite_edn.impl.indent(rewrite_clj.zip.insert_right(zloc__$5,rewrite_clj.node.coerce(k)),key_count,first_key_loc)),rewrite_clj.node.coerce(v)));
} else {
var current_k = rewrite_clj.zip.sexpr(zloc__$5);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_count,k)))){
var zloc__$6 = rewrite_clj.zip.replace(zloc__$5,rewrite_clj.node.coerce(v));
return rewrite_clj.zip.root(zloc__$6);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var fexpr__90884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__90884.cljs$core$IFn$_invoke$arity$1 ? fexpr__90884.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__90884.call(null,tag));
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k);
} else {
return and__5041__auto__;
}
})())){
var zloc__$6 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(zloc__$5));
var zloc__$7 = rewrite_clj.zip.replace(zloc__$6,rewrite_clj.node.coerce(v));
return rewrite_clj.zip.root(zloc__$7);
} else {
var G__90900 = (key_count + (1));
var G__90901 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
key_count = G__90900;
zloc__$5 = G__90901;
continue;

}
}
}
break;
}

}
}
});
borkdude.rewrite_edn.impl.mark_for_positional_recalc = (function borkdude$rewrite_edn$impl$mark_for_positional_recalc(node){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(node,cljs.core.assoc,new cljs.core.Keyword("rewrite-edn","positional-recalc","rewrite-edn/positional-recalc",-129995178),true);
});
borkdude.rewrite_edn.impl.recalc_positional_metadata = (function borkdude$rewrite_edn$impl$recalc_positional_metadata(node){
if(cljs.core.truth_(new cljs.core.Keyword("rewrite-edn","positional-recalc","rewrite-edn/positional-recalc",-129995178).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)))){
return rewrite_clj.parser.parse_string_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1(node));
} else {
return node;
}
});
borkdude.rewrite_edn.impl.assoc = (function borkdude$rewrite_edn$impl$assoc(forms,k,v){
return borkdude.rewrite_edn.impl.mark_for_positional_recalc(borkdude.rewrite_edn.impl.assoc_STAR_(borkdude.rewrite_edn.impl.recalc_positional_metadata(forms),k,v));
});
borkdude.rewrite_edn.impl.get = (function borkdude$rewrite_edn$impl$get(zloc,k,default$){
var zloc__$1 = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(zloc);
var tag = rewrite_clj.zip.tag(zloc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"map","map",1371690461))){
var node = rewrite_clj.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_clj.node.tag(node))) && ((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) == null)));
var zloc__$2 = ((nil_QMARK_)?rewrite_clj.zip.replace(zloc__$1,rewrite_clj.node.coerce(cljs.core.PersistentArrayMap.EMPTY)):zloc__$1);
var empty_QMARK_ = ((nil_QMARK_) || ((cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node(zloc__$2))) === (0))));
var zloc__$3 = rewrite_clj.zip.down(zloc__$2);
var zloc__$4 = borkdude.rewrite_edn.impl.skip_right(zloc__$3);
if(empty_QMARK_){
return new cljs.core.Keyword(null,"empty","empty",767870958);
} else {
var key_count = (0);
var zloc__$5 = zloc__$4;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(zloc__$5)){
return rewrite_clj.node.coerce(default$);
} else {
var current_k = rewrite_clj.zip.sexpr(zloc__$5);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k)){
return cljs.core.first(borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(zloc__$5)));
} else {
var G__90902 = (key_count + (1));
var G__90903 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
key_count = G__90902;
zloc__$5 = G__90903;
continue;
}
}
break;
}
}
} else {
var coll = (function (){var G__90886 = rewrite_clj.zip.down(zloc__$1);
var G__90886__$1 = (((G__90886 == null))?null:cljs.core.iterate(rewrite_clj.zip.right,G__90886));
var G__90886__$2 = (((G__90886__$1 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__90886__$1));
if((G__90886__$2 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__90885_SHARP_){
return ((rewrite_clj.node.whitespace_or_comment_QMARK_(p1__90885_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uneval","uneval",1932037707),rewrite_clj.node.tag(p1__90885_SHARP_))));
}),G__90886__$2);
}
})();
if((k >= cljs.core.count(coll))){
return rewrite_clj.node.coerce(default$);
} else {
return rewrite_clj.node.coerce(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,k)));
}

}
});
borkdude.rewrite_edn.impl.get_in = (function borkdude$rewrite_edn$impl$get_in(zloc,ks,not_found){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (zloc__$1,k){
if((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(zloc__$1) == null)){
return rewrite_clj.node.coerce(not_found);
} else {
var v = borkdude.rewrite_edn.impl.get(zloc__$1,k,new cljs.core.Keyword("borkdude.rewrite-edn.impl","not-found","borkdude.rewrite-edn.impl/not-found",-1579767302));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("borkdude.rewrite-edn.impl","not-found","borkdude.rewrite-edn.impl/not-found",-1579767302),rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(v))))){
return rewrite_clj.node.coerce(not_found);
} else {
return v;
}
}
}),zloc,ks);
});
borkdude.rewrite_edn.impl.update = (function borkdude$rewrite_edn$impl$update(var_args){
var G__90888 = arguments.length;
switch (G__90888) {
case 3:
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3 = (function (forms,k,f){
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$4(forms,k,f,null);
}));

(borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$4 = (function (forms,k,f,args){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
var t = rewrite_clj.zip.tag(zloc__$1);
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),t)));
}),zloc);
var node = rewrite_clj.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_clj.node.tag(node))) && ((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) == null)));
var zloc__$2 = ((nil_QMARK_)?rewrite_clj.zip.replace(zloc__$1,rewrite_clj.node.coerce(cljs.core.PersistentArrayMap.EMPTY)):zloc__$1);
var empty_QMARK_ = ((nil_QMARK_) || ((cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.node(zloc__$2))) === (0))));
if(empty_QMARK_){
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$4(rewrite_clj.zip.root(rewrite_clj.zip.append_child(rewrite_clj.zip.append_child(zloc__$2,rewrite_clj.node.coerce(k)),rewrite_clj.node.coerce(null))),k,f,args);
} else {
var zloc__$3 = rewrite_clj.zip.down(zloc__$2);
var zloc__$4 = borkdude.rewrite_edn.impl.skip_right(zloc__$3);
var zloc__$5 = zloc__$4;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(zloc__$5)){
return rewrite_clj.zip.root(rewrite_clj.zip.insert_right(rewrite_clj.zip.right(rewrite_clj.zip.insert_right(zloc__$5,rewrite_clj.node.coerce(k))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.node.coerce(null),args)));
} else {
var current_k = rewrite_clj.zip.sexpr(zloc__$5);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k)){
var zloc__$6 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(zloc__$5));
var zloc__$7 = rewrite_clj.zip.replace(zloc__$6,rewrite_clj.node.coerce(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.zip.node(zloc__$6),args)));
return rewrite_clj.zip.root(zloc__$7);
} else {
var G__90905 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
zloc__$5 = G__90905;
continue;
}
}
break;
}
}
}));

(borkdude.rewrite_edn.impl.update.cljs$lang$maxFixedArity = 4);

borkdude.rewrite_edn.impl.update_in = (function borkdude$rewrite_edn$impl$update_in(forms,keys,f,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(keys))){
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$4(forms,cljs.core.first(keys),f,args);
} else {
return borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3(forms,cljs.core.first(keys),(function (p1__90889_SHARP_){
var G__90890 = p1__90889_SHARP_;
var G__90891 = cljs.core.rest(keys);
var G__90892 = f;
var G__90893 = args;
return (borkdude.rewrite_edn.impl.update_in.cljs$core$IFn$_invoke$arity$4 ? borkdude.rewrite_edn.impl.update_in.cljs$core$IFn$_invoke$arity$4(G__90890,G__90891,G__90892,G__90893) : borkdude.rewrite_edn.impl.update_in.call(null,G__90890,G__90891,G__90892,G__90893));
}));
}
});
borkdude.rewrite_edn.impl.assoc_in = (function borkdude$rewrite_edn$impl$assoc_in(forms,keys,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(keys))){
return borkdude.rewrite_edn.impl.assoc(forms,cljs.core.first(keys),v);
} else {
return borkdude.rewrite_edn.impl.mark_for_positional_recalc(borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3(borkdude.rewrite_edn.impl.recalc_positional_metadata(forms),cljs.core.first(keys),(function (p1__90894_SHARP_){
var G__90895 = p1__90894_SHARP_;
var G__90896 = cljs.core.rest(keys);
var G__90897 = v;
return (borkdude.rewrite_edn.impl.assoc_in.cljs$core$IFn$_invoke$arity$3 ? borkdude.rewrite_edn.impl.assoc_in.cljs$core$IFn$_invoke$arity$3(G__90895,G__90896,G__90897) : borkdude.rewrite_edn.impl.assoc_in.call(null,G__90895,G__90896,G__90897));
})));
}
});
borkdude.rewrite_edn.impl.map_keys = (function borkdude$rewrite_edn$impl$map_keys(f,forms){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.zip.tag(zloc)))?zloc:rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
return ((cljs.core.not(rewrite_clj.zip.rightmost(zloc__$1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.zip.tag(zloc__$1))));
}),zloc));
var zloc__$2 = rewrite_clj.zip.down(zloc__$1);
var zloc__$3 = borkdude.rewrite_edn.impl.skip_right(zloc__$2);
var zloc__$4 = zloc__$3;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(zloc__$4)){
return rewrite_clj.zip.root(zloc__$4);
} else {
var zloc__$5 = (function (){var new_key = rewrite_clj.node.coerce((function (){var G__90899 = rewrite_clj.zip.sexpr(zloc__$4);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__90899) : f.call(null,G__90899));
})());
return rewrite_clj.zip.right(rewrite_clj.zip.replace(zloc__$4,new_key));
})();
var G__90906 = borkdude.rewrite_edn.impl.skip_right(borkdude.rewrite_edn.impl.maybe_right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
zloc__$4 = G__90906;
continue;
}
break;
}
});
borkdude.rewrite_edn.impl.dissoc = (function borkdude$rewrite_edn$impl$dissoc(forms,k){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
var t = rewrite_clj.zip.tag(zloc__$1);
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),t)));
}),zloc);
var node = rewrite_clj.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_clj.node.tag(node))) && ((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) == null)));
if(nil_QMARK_){
return forms;
} else {
var zloc__$2 = rewrite_clj.zip.down(zloc__$1);
var zloc__$3 = borkdude.rewrite_edn.impl.skip_right(zloc__$2);
var zloc__$4 = zloc__$3;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(zloc__$4)){
return forms;
} else {
var current_k = rewrite_clj.zip.sexpr(zloc__$4);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k)){
return rewrite_clj.zip.root(rewrite_clj.zip.remove(rewrite_clj.zip.remove(rewrite_clj.zip.right(zloc__$4))));
} else {
var G__90907 = borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$4)));
zloc__$4 = G__90907;
continue;
}
}
break;
}
}
});
borkdude.rewrite_edn.impl.keys = (function borkdude$rewrite_edn$impl$keys(forms){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.zip.tag(zloc)))?zloc:rewrite_clj.zip.skip(rewrite_clj.zip.right,(function (zloc__$1){
return ((cljs.core.not(rewrite_clj.zip.rightmost(zloc__$1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.zip.tag(zloc__$1))));
}),zloc));
var zloc__$2 = rewrite_clj.zip.down(zloc__$1);
var zloc__$3 = borkdude.rewrite_edn.impl.skip_right(zloc__$2);
var zloc__$4 = zloc__$3;
var ks = cljs.core.List.EMPTY;
while(true){
if(rewrite_clj.zip.rightmost_QMARK_(zloc__$4)){
return ks;
} else {
var k = rewrite_clj.zip.node(zloc__$4);
var G__90908 = borkdude.rewrite_edn.impl.skip_right(borkdude.rewrite_edn.impl.maybe_right(borkdude.rewrite_edn.impl.skip_right(rewrite_clj.zip.right(zloc__$4))));
var G__90909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
zloc__$4 = G__90908;
ks = G__90909;
continue;
}
break;
}
});
borkdude.rewrite_edn.impl.conj_STAR_ = (function borkdude$rewrite_edn$impl$conj_STAR_(forms,v){
var zloc = rewrite_clj.zip.of_node.cljs$core$IFn$_invoke$arity$1(forms);
var node = rewrite_clj.zip.node(zloc);
var tag = rewrite_clj.node.tag(node);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === tag)) && ((rewrite_clj.node.sexpr.cljs$core$IFn$_invoke$arity$1(node) == null)));
if(nil_QMARK_){
return rewrite_clj.zip.root(rewrite_clj.zip.replace(zloc,rewrite_clj.node.coerce((new cljs.core.List(null,v,null,(1),null)))));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"set","set",304602554),null], null), null),tag)){
return rewrite_clj.zip.root(rewrite_clj.zip.append_child(zloc,rewrite_clj.node.coerce(v)));
} else {
if((tag === new cljs.core.Keyword(null,"list","list",765357683))){
return rewrite_clj.zip.root(rewrite_clj.zip.insert_child(zloc,rewrite_clj.node.coerce(v)));
} else {
if((tag === new cljs.core.Keyword(null,"map","map",1371690461))){
return borkdude.rewrite_edn.impl.assoc(forms,cljs.core.first(v),cljs.core.second(v));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported forms",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",2045992350),forms], null));

}
}
}
}
});
borkdude.rewrite_edn.impl.conj = (function borkdude$rewrite_edn$impl$conj(forms,v){
return borkdude.rewrite_edn.impl.mark_for_positional_recalc(borkdude.rewrite_edn.impl.conj_STAR_(borkdude.rewrite_edn.impl.recalc_positional_metadata(forms),v));
});
borkdude.rewrite_edn.impl.fnil = (function borkdude$rewrite_edn$impl$fnil(f,nil_replacement){
return (function() { 
var G__90910__delegate = function (x,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nil",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.node.coerce(nil_replacement),args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,args);
}
};
var G__90910 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__90911__i = 0, G__90911__a = new Array(arguments.length -  1);
while (G__90911__i < G__90911__a.length) {G__90911__a[G__90911__i] = arguments[G__90911__i + 1]; ++G__90911__i;}
  args = new cljs.core.IndexedSeq(G__90911__a,0,null);
} 
return G__90910__delegate.call(this,x,args);};
G__90910.cljs$lang$maxFixedArity = 1;
G__90910.cljs$lang$applyTo = (function (arglist__90912){
var x = cljs.core.first(arglist__90912);
var args = cljs.core.rest(arglist__90912);
return G__90910__delegate(x,args);
});
G__90910.cljs$core$IFn$_invoke$arity$variadic = G__90910__delegate;
return G__90910;
})()
;
});

//# sourceMappingURL=borkdude.rewrite_edn.impl.js.map
