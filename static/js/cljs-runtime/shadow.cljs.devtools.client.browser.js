goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50138 = arguments.length;
var i__5767__auto___50139 = (0);
while(true){
if((i__5767__auto___50139 < len__5766__auto___50138)){
args__5772__auto__.push((arguments[i__5767__auto___50139]));

var G__50140 = (i__5767__auto___50139 + (1));
i__5767__auto___50139 = G__50140;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49858){
var G__49859 = cljs.core.first(seq49858);
var seq49858__$1 = cljs.core.next(seq49858);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49859,seq49858__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49860 = cljs.core.seq(sources);
var chunk__49861 = null;
var count__49862 = (0);
var i__49863 = (0);
while(true){
if((i__49863 < count__49862)){
var map__49868 = chunk__49861.cljs$core$IIndexed$_nth$arity$2(null,i__49863);
var map__49868__$1 = cljs.core.__destructure_map(map__49868);
var src = map__49868__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49869){var e_50141 = e49869;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50141);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50141.message)].join('')));
}

var G__50142 = seq__49860;
var G__50143 = chunk__49861;
var G__50144 = count__49862;
var G__50145 = (i__49863 + (1));
seq__49860 = G__50142;
chunk__49861 = G__50143;
count__49862 = G__50144;
i__49863 = G__50145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49860);
if(temp__5804__auto__){
var seq__49860__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49860__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49860__$1);
var G__50146 = cljs.core.chunk_rest(seq__49860__$1);
var G__50147 = c__5565__auto__;
var G__50148 = cljs.core.count(c__5565__auto__);
var G__50149 = (0);
seq__49860 = G__50146;
chunk__49861 = G__50147;
count__49862 = G__50148;
i__49863 = G__50149;
continue;
} else {
var map__49870 = cljs.core.first(seq__49860__$1);
var map__49870__$1 = cljs.core.__destructure_map(map__49870);
var src = map__49870__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49870__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49871){var e_50150 = e49871;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50150);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50150.message)].join('')));
}

var G__50151 = cljs.core.next(seq__49860__$1);
var G__50152 = null;
var G__50153 = (0);
var G__50154 = (0);
seq__49860 = G__50151;
chunk__49861 = G__50152;
count__49862 = G__50153;
i__49863 = G__50154;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49872 = cljs.core.seq(js_requires);
var chunk__49873 = null;
var count__49874 = (0);
var i__49875 = (0);
while(true){
if((i__49875 < count__49874)){
var js_ns = chunk__49873.cljs$core$IIndexed$_nth$arity$2(null,i__49875);
var require_str_50155 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50155);


var G__50156 = seq__49872;
var G__50157 = chunk__49873;
var G__50158 = count__49874;
var G__50159 = (i__49875 + (1));
seq__49872 = G__50156;
chunk__49873 = G__50157;
count__49874 = G__50158;
i__49875 = G__50159;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49872);
if(temp__5804__auto__){
var seq__49872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49872__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49872__$1);
var G__50160 = cljs.core.chunk_rest(seq__49872__$1);
var G__50161 = c__5565__auto__;
var G__50162 = cljs.core.count(c__5565__auto__);
var G__50163 = (0);
seq__49872 = G__50160;
chunk__49873 = G__50161;
count__49874 = G__50162;
i__49875 = G__50163;
continue;
} else {
var js_ns = cljs.core.first(seq__49872__$1);
var require_str_50164 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50164);


var G__50165 = cljs.core.next(seq__49872__$1);
var G__50166 = null;
var G__50167 = (0);
var G__50168 = (0);
seq__49872 = G__50165;
chunk__49873 = G__50166;
count__49874 = G__50167;
i__49875 = G__50168;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49877){
var map__49878 = p__49877;
var map__49878__$1 = cljs.core.__destructure_map(map__49878);
var msg = map__49878__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49878__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49878__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49879(s__49880){
return (new cljs.core.LazySeq(null,(function (){
var s__49880__$1 = s__49880;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49880__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__49885 = cljs.core.first(xs__6360__auto__);
var map__49885__$1 = cljs.core.__destructure_map(map__49885);
var src = map__49885__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49885__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__49880__$1,map__49885,map__49885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49878,map__49878__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49879_$_iter__49881(s__49882){
return (new cljs.core.LazySeq(null,((function (s__49880__$1,map__49885,map__49885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49878,map__49878__$1,msg,info,reload_info){
return (function (){
var s__49882__$1 = s__49882;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49882__$1);
if(temp__5804__auto____$1){
var s__49882__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49882__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49882__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49884 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49883 = (0);
while(true){
if((i__49883 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__49883);
cljs.core.chunk_append(b__49884,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50169 = (i__49883 + (1));
i__49883 = G__50169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49884),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49879_$_iter__49881(cljs.core.chunk_rest(s__49882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49884),null);
}
} else {
var warning = cljs.core.first(s__49882__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49879_$_iter__49881(cljs.core.rest(s__49882__$2)));
}
} else {
return null;
}
break;
}
});})(s__49880__$1,map__49885,map__49885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49878,map__49878__$1,msg,info,reload_info))
,null,null));
});})(s__49880__$1,map__49885,map__49885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__49878,map__49878__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49879(cljs.core.rest(s__49880__$1)));
} else {
var G__50170 = cljs.core.rest(s__49880__$1);
s__49880__$1 = G__50170;
continue;
}
} else {
var G__50171 = cljs.core.rest(s__49880__$1);
s__49880__$1 = G__50171;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49886_50172 = cljs.core.seq(warnings);
var chunk__49887_50173 = null;
var count__49888_50174 = (0);
var i__49889_50175 = (0);
while(true){
if((i__49889_50175 < count__49888_50174)){
var map__49892_50176 = chunk__49887_50173.cljs$core$IIndexed$_nth$arity$2(null,i__49889_50175);
var map__49892_50177__$1 = cljs.core.__destructure_map(map__49892_50176);
var w_50178 = map__49892_50177__$1;
var msg_50179__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892_50177__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892_50177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892_50177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892_50177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50182)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50180),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50181),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50179__$1)].join(''));


var G__50183 = seq__49886_50172;
var G__50184 = chunk__49887_50173;
var G__50185 = count__49888_50174;
var G__50186 = (i__49889_50175 + (1));
seq__49886_50172 = G__50183;
chunk__49887_50173 = G__50184;
count__49888_50174 = G__50185;
i__49889_50175 = G__50186;
continue;
} else {
var temp__5804__auto___50187 = cljs.core.seq(seq__49886_50172);
if(temp__5804__auto___50187){
var seq__49886_50188__$1 = temp__5804__auto___50187;
if(cljs.core.chunked_seq_QMARK_(seq__49886_50188__$1)){
var c__5565__auto___50189 = cljs.core.chunk_first(seq__49886_50188__$1);
var G__50190 = cljs.core.chunk_rest(seq__49886_50188__$1);
var G__50191 = c__5565__auto___50189;
var G__50192 = cljs.core.count(c__5565__auto___50189);
var G__50193 = (0);
seq__49886_50172 = G__50190;
chunk__49887_50173 = G__50191;
count__49888_50174 = G__50192;
i__49889_50175 = G__50193;
continue;
} else {
var map__49893_50194 = cljs.core.first(seq__49886_50188__$1);
var map__49893_50195__$1 = cljs.core.__destructure_map(map__49893_50194);
var w_50196 = map__49893_50195__$1;
var msg_50197__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49893_50195__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49893_50195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49893_50195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49893_50195__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50200)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50198),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50199),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50197__$1)].join(''));


var G__50201 = cljs.core.next(seq__49886_50188__$1);
var G__50202 = null;
var G__50203 = (0);
var G__50204 = (0);
seq__49886_50172 = G__50201;
chunk__49887_50173 = G__50202;
count__49888_50174 = G__50203;
i__49889_50175 = G__50204;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49876_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49876_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49894){
var map__49895 = p__49894;
var map__49895__$1 = cljs.core.__destructure_map(map__49895);
var msg = map__49895__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49895__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49895__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49896 = cljs.core.seq(updates);
var chunk__49898 = null;
var count__49899 = (0);
var i__49900 = (0);
while(true){
if((i__49900 < count__49899)){
var path = chunk__49898.cljs$core$IIndexed$_nth$arity$2(null,i__49900);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50010_50205 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50014_50206 = null;
var count__50015_50207 = (0);
var i__50016_50208 = (0);
while(true){
if((i__50016_50208 < count__50015_50207)){
var node_50209 = chunk__50014_50206.cljs$core$IIndexed$_nth$arity$2(null,i__50016_50208);
if(cljs.core.not(node_50209.shadow$old)){
var path_match_50210 = shadow.cljs.devtools.client.browser.match_paths(node_50209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50210)){
var new_link_50211 = (function (){var G__50042 = node_50209.cloneNode(true);
G__50042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50042;
})();
(node_50209.shadow$old = true);

(new_link_50211.onload = ((function (seq__50010_50205,chunk__50014_50206,count__50015_50207,i__50016_50208,seq__49896,chunk__49898,count__49899,i__49900,new_link_50211,path_match_50210,node_50209,path,map__49895,map__49895__$1,msg,updates,reload_info){
return (function (e){
var seq__50043_50212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50045_50213 = null;
var count__50046_50214 = (0);
var i__50047_50215 = (0);
while(true){
if((i__50047_50215 < count__50046_50214)){
var map__50051_50216 = chunk__50045_50213.cljs$core$IIndexed$_nth$arity$2(null,i__50047_50215);
var map__50051_50217__$1 = cljs.core.__destructure_map(map__50051_50216);
var task_50218 = map__50051_50217__$1;
var fn_str_50219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50051_50217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50051_50217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50221 = goog.getObjectByName(fn_str_50219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50220)].join(''));

(fn_obj_50221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50221.cljs$core$IFn$_invoke$arity$2(path,new_link_50211) : fn_obj_50221.call(null,path,new_link_50211));


var G__50222 = seq__50043_50212;
var G__50223 = chunk__50045_50213;
var G__50224 = count__50046_50214;
var G__50225 = (i__50047_50215 + (1));
seq__50043_50212 = G__50222;
chunk__50045_50213 = G__50223;
count__50046_50214 = G__50224;
i__50047_50215 = G__50225;
continue;
} else {
var temp__5804__auto___50226 = cljs.core.seq(seq__50043_50212);
if(temp__5804__auto___50226){
var seq__50043_50227__$1 = temp__5804__auto___50226;
if(cljs.core.chunked_seq_QMARK_(seq__50043_50227__$1)){
var c__5565__auto___50228 = cljs.core.chunk_first(seq__50043_50227__$1);
var G__50229 = cljs.core.chunk_rest(seq__50043_50227__$1);
var G__50230 = c__5565__auto___50228;
var G__50231 = cljs.core.count(c__5565__auto___50228);
var G__50232 = (0);
seq__50043_50212 = G__50229;
chunk__50045_50213 = G__50230;
count__50046_50214 = G__50231;
i__50047_50215 = G__50232;
continue;
} else {
var map__50052_50233 = cljs.core.first(seq__50043_50227__$1);
var map__50052_50234__$1 = cljs.core.__destructure_map(map__50052_50233);
var task_50235 = map__50052_50234__$1;
var fn_str_50236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052_50234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052_50234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50238 = goog.getObjectByName(fn_str_50236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50237)].join(''));

(fn_obj_50238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50238.cljs$core$IFn$_invoke$arity$2(path,new_link_50211) : fn_obj_50238.call(null,path,new_link_50211));


var G__50239 = cljs.core.next(seq__50043_50227__$1);
var G__50240 = null;
var G__50241 = (0);
var G__50242 = (0);
seq__50043_50212 = G__50239;
chunk__50045_50213 = G__50240;
count__50046_50214 = G__50241;
i__50047_50215 = G__50242;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50209);
});})(seq__50010_50205,chunk__50014_50206,count__50015_50207,i__50016_50208,seq__49896,chunk__49898,count__49899,i__49900,new_link_50211,path_match_50210,node_50209,path,map__49895,map__49895__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50210], 0));

goog.dom.insertSiblingAfter(new_link_50211,node_50209);


var G__50243 = seq__50010_50205;
var G__50244 = chunk__50014_50206;
var G__50245 = count__50015_50207;
var G__50246 = (i__50016_50208 + (1));
seq__50010_50205 = G__50243;
chunk__50014_50206 = G__50244;
count__50015_50207 = G__50245;
i__50016_50208 = G__50246;
continue;
} else {
var G__50247 = seq__50010_50205;
var G__50248 = chunk__50014_50206;
var G__50249 = count__50015_50207;
var G__50250 = (i__50016_50208 + (1));
seq__50010_50205 = G__50247;
chunk__50014_50206 = G__50248;
count__50015_50207 = G__50249;
i__50016_50208 = G__50250;
continue;
}
} else {
var G__50251 = seq__50010_50205;
var G__50252 = chunk__50014_50206;
var G__50253 = count__50015_50207;
var G__50254 = (i__50016_50208 + (1));
seq__50010_50205 = G__50251;
chunk__50014_50206 = G__50252;
count__50015_50207 = G__50253;
i__50016_50208 = G__50254;
continue;
}
} else {
var temp__5804__auto___50255 = cljs.core.seq(seq__50010_50205);
if(temp__5804__auto___50255){
var seq__50010_50256__$1 = temp__5804__auto___50255;
if(cljs.core.chunked_seq_QMARK_(seq__50010_50256__$1)){
var c__5565__auto___50257 = cljs.core.chunk_first(seq__50010_50256__$1);
var G__50258 = cljs.core.chunk_rest(seq__50010_50256__$1);
var G__50259 = c__5565__auto___50257;
var G__50260 = cljs.core.count(c__5565__auto___50257);
var G__50261 = (0);
seq__50010_50205 = G__50258;
chunk__50014_50206 = G__50259;
count__50015_50207 = G__50260;
i__50016_50208 = G__50261;
continue;
} else {
var node_50262 = cljs.core.first(seq__50010_50256__$1);
if(cljs.core.not(node_50262.shadow$old)){
var path_match_50263 = shadow.cljs.devtools.client.browser.match_paths(node_50262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50263)){
var new_link_50264 = (function (){var G__50053 = node_50262.cloneNode(true);
G__50053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50053;
})();
(node_50262.shadow$old = true);

(new_link_50264.onload = ((function (seq__50010_50205,chunk__50014_50206,count__50015_50207,i__50016_50208,seq__49896,chunk__49898,count__49899,i__49900,new_link_50264,path_match_50263,node_50262,seq__50010_50256__$1,temp__5804__auto___50255,path,map__49895,map__49895__$1,msg,updates,reload_info){
return (function (e){
var seq__50054_50265 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50056_50266 = null;
var count__50057_50267 = (0);
var i__50058_50268 = (0);
while(true){
if((i__50058_50268 < count__50057_50267)){
var map__50062_50269 = chunk__50056_50266.cljs$core$IIndexed$_nth$arity$2(null,i__50058_50268);
var map__50062_50270__$1 = cljs.core.__destructure_map(map__50062_50269);
var task_50271 = map__50062_50270__$1;
var fn_str_50272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062_50270__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50062_50270__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50274 = goog.getObjectByName(fn_str_50272,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50273)].join(''));

(fn_obj_50274.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50274.cljs$core$IFn$_invoke$arity$2(path,new_link_50264) : fn_obj_50274.call(null,path,new_link_50264));


var G__50275 = seq__50054_50265;
var G__50276 = chunk__50056_50266;
var G__50277 = count__50057_50267;
var G__50278 = (i__50058_50268 + (1));
seq__50054_50265 = G__50275;
chunk__50056_50266 = G__50276;
count__50057_50267 = G__50277;
i__50058_50268 = G__50278;
continue;
} else {
var temp__5804__auto___50279__$1 = cljs.core.seq(seq__50054_50265);
if(temp__5804__auto___50279__$1){
var seq__50054_50280__$1 = temp__5804__auto___50279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50054_50280__$1)){
var c__5565__auto___50281 = cljs.core.chunk_first(seq__50054_50280__$1);
var G__50282 = cljs.core.chunk_rest(seq__50054_50280__$1);
var G__50283 = c__5565__auto___50281;
var G__50284 = cljs.core.count(c__5565__auto___50281);
var G__50285 = (0);
seq__50054_50265 = G__50282;
chunk__50056_50266 = G__50283;
count__50057_50267 = G__50284;
i__50058_50268 = G__50285;
continue;
} else {
var map__50063_50286 = cljs.core.first(seq__50054_50280__$1);
var map__50063_50287__$1 = cljs.core.__destructure_map(map__50063_50286);
var task_50288 = map__50063_50287__$1;
var fn_str_50289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50063_50287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50063_50287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50291 = goog.getObjectByName(fn_str_50289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50290)].join(''));

(fn_obj_50291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50291.cljs$core$IFn$_invoke$arity$2(path,new_link_50264) : fn_obj_50291.call(null,path,new_link_50264));


var G__50292 = cljs.core.next(seq__50054_50280__$1);
var G__50293 = null;
var G__50294 = (0);
var G__50295 = (0);
seq__50054_50265 = G__50292;
chunk__50056_50266 = G__50293;
count__50057_50267 = G__50294;
i__50058_50268 = G__50295;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50262);
});})(seq__50010_50205,chunk__50014_50206,count__50015_50207,i__50016_50208,seq__49896,chunk__49898,count__49899,i__49900,new_link_50264,path_match_50263,node_50262,seq__50010_50256__$1,temp__5804__auto___50255,path,map__49895,map__49895__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50263], 0));

goog.dom.insertSiblingAfter(new_link_50264,node_50262);


var G__50296 = cljs.core.next(seq__50010_50256__$1);
var G__50297 = null;
var G__50298 = (0);
var G__50299 = (0);
seq__50010_50205 = G__50296;
chunk__50014_50206 = G__50297;
count__50015_50207 = G__50298;
i__50016_50208 = G__50299;
continue;
} else {
var G__50300 = cljs.core.next(seq__50010_50256__$1);
var G__50301 = null;
var G__50302 = (0);
var G__50303 = (0);
seq__50010_50205 = G__50300;
chunk__50014_50206 = G__50301;
count__50015_50207 = G__50302;
i__50016_50208 = G__50303;
continue;
}
} else {
var G__50304 = cljs.core.next(seq__50010_50256__$1);
var G__50305 = null;
var G__50306 = (0);
var G__50307 = (0);
seq__50010_50205 = G__50304;
chunk__50014_50206 = G__50305;
count__50015_50207 = G__50306;
i__50016_50208 = G__50307;
continue;
}
}
} else {
}
}
break;
}


var G__50308 = seq__49896;
var G__50309 = chunk__49898;
var G__50310 = count__49899;
var G__50311 = (i__49900 + (1));
seq__49896 = G__50308;
chunk__49898 = G__50309;
count__49899 = G__50310;
i__49900 = G__50311;
continue;
} else {
var G__50312 = seq__49896;
var G__50313 = chunk__49898;
var G__50314 = count__49899;
var G__50315 = (i__49900 + (1));
seq__49896 = G__50312;
chunk__49898 = G__50313;
count__49899 = G__50314;
i__49900 = G__50315;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49896);
if(temp__5804__auto__){
var seq__49896__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49896__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49896__$1);
var G__50316 = cljs.core.chunk_rest(seq__49896__$1);
var G__50317 = c__5565__auto__;
var G__50318 = cljs.core.count(c__5565__auto__);
var G__50319 = (0);
seq__49896 = G__50316;
chunk__49898 = G__50317;
count__49899 = G__50318;
i__49900 = G__50319;
continue;
} else {
var path = cljs.core.first(seq__49896__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50064_50320 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50068_50321 = null;
var count__50069_50322 = (0);
var i__50070_50323 = (0);
while(true){
if((i__50070_50323 < count__50069_50322)){
var node_50324 = chunk__50068_50321.cljs$core$IIndexed$_nth$arity$2(null,i__50070_50323);
if(cljs.core.not(node_50324.shadow$old)){
var path_match_50325 = shadow.cljs.devtools.client.browser.match_paths(node_50324.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50325)){
var new_link_50326 = (function (){var G__50096 = node_50324.cloneNode(true);
G__50096.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50325),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50096;
})();
(node_50324.shadow$old = true);

(new_link_50326.onload = ((function (seq__50064_50320,chunk__50068_50321,count__50069_50322,i__50070_50323,seq__49896,chunk__49898,count__49899,i__49900,new_link_50326,path_match_50325,node_50324,path,seq__49896__$1,temp__5804__auto__,map__49895,map__49895__$1,msg,updates,reload_info){
return (function (e){
var seq__50097_50327 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50099_50328 = null;
var count__50100_50329 = (0);
var i__50101_50330 = (0);
while(true){
if((i__50101_50330 < count__50100_50329)){
var map__50105_50331 = chunk__50099_50328.cljs$core$IIndexed$_nth$arity$2(null,i__50101_50330);
var map__50105_50332__$1 = cljs.core.__destructure_map(map__50105_50331);
var task_50333 = map__50105_50332__$1;
var fn_str_50334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50105_50332__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50105_50332__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50336 = goog.getObjectByName(fn_str_50334,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50335)].join(''));

(fn_obj_50336.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50336.cljs$core$IFn$_invoke$arity$2(path,new_link_50326) : fn_obj_50336.call(null,path,new_link_50326));


var G__50337 = seq__50097_50327;
var G__50338 = chunk__50099_50328;
var G__50339 = count__50100_50329;
var G__50340 = (i__50101_50330 + (1));
seq__50097_50327 = G__50337;
chunk__50099_50328 = G__50338;
count__50100_50329 = G__50339;
i__50101_50330 = G__50340;
continue;
} else {
var temp__5804__auto___50341__$1 = cljs.core.seq(seq__50097_50327);
if(temp__5804__auto___50341__$1){
var seq__50097_50342__$1 = temp__5804__auto___50341__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50097_50342__$1)){
var c__5565__auto___50343 = cljs.core.chunk_first(seq__50097_50342__$1);
var G__50344 = cljs.core.chunk_rest(seq__50097_50342__$1);
var G__50345 = c__5565__auto___50343;
var G__50346 = cljs.core.count(c__5565__auto___50343);
var G__50347 = (0);
seq__50097_50327 = G__50344;
chunk__50099_50328 = G__50345;
count__50100_50329 = G__50346;
i__50101_50330 = G__50347;
continue;
} else {
var map__50106_50348 = cljs.core.first(seq__50097_50342__$1);
var map__50106_50349__$1 = cljs.core.__destructure_map(map__50106_50348);
var task_50350 = map__50106_50349__$1;
var fn_str_50351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50106_50349__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50106_50349__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50353 = goog.getObjectByName(fn_str_50351,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50352)].join(''));

(fn_obj_50353.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50353.cljs$core$IFn$_invoke$arity$2(path,new_link_50326) : fn_obj_50353.call(null,path,new_link_50326));


var G__50354 = cljs.core.next(seq__50097_50342__$1);
var G__50355 = null;
var G__50356 = (0);
var G__50357 = (0);
seq__50097_50327 = G__50354;
chunk__50099_50328 = G__50355;
count__50100_50329 = G__50356;
i__50101_50330 = G__50357;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50324);
});})(seq__50064_50320,chunk__50068_50321,count__50069_50322,i__50070_50323,seq__49896,chunk__49898,count__49899,i__49900,new_link_50326,path_match_50325,node_50324,path,seq__49896__$1,temp__5804__auto__,map__49895,map__49895__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50325], 0));

goog.dom.insertSiblingAfter(new_link_50326,node_50324);


var G__50358 = seq__50064_50320;
var G__50359 = chunk__50068_50321;
var G__50360 = count__50069_50322;
var G__50361 = (i__50070_50323 + (1));
seq__50064_50320 = G__50358;
chunk__50068_50321 = G__50359;
count__50069_50322 = G__50360;
i__50070_50323 = G__50361;
continue;
} else {
var G__50362 = seq__50064_50320;
var G__50363 = chunk__50068_50321;
var G__50364 = count__50069_50322;
var G__50365 = (i__50070_50323 + (1));
seq__50064_50320 = G__50362;
chunk__50068_50321 = G__50363;
count__50069_50322 = G__50364;
i__50070_50323 = G__50365;
continue;
}
} else {
var G__50366 = seq__50064_50320;
var G__50367 = chunk__50068_50321;
var G__50368 = count__50069_50322;
var G__50369 = (i__50070_50323 + (1));
seq__50064_50320 = G__50366;
chunk__50068_50321 = G__50367;
count__50069_50322 = G__50368;
i__50070_50323 = G__50369;
continue;
}
} else {
var temp__5804__auto___50370__$1 = cljs.core.seq(seq__50064_50320);
if(temp__5804__auto___50370__$1){
var seq__50064_50371__$1 = temp__5804__auto___50370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50064_50371__$1)){
var c__5565__auto___50372 = cljs.core.chunk_first(seq__50064_50371__$1);
var G__50373 = cljs.core.chunk_rest(seq__50064_50371__$1);
var G__50374 = c__5565__auto___50372;
var G__50375 = cljs.core.count(c__5565__auto___50372);
var G__50376 = (0);
seq__50064_50320 = G__50373;
chunk__50068_50321 = G__50374;
count__50069_50322 = G__50375;
i__50070_50323 = G__50376;
continue;
} else {
var node_50377 = cljs.core.first(seq__50064_50371__$1);
if(cljs.core.not(node_50377.shadow$old)){
var path_match_50378 = shadow.cljs.devtools.client.browser.match_paths(node_50377.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50378)){
var new_link_50379 = (function (){var G__50107 = node_50377.cloneNode(true);
G__50107.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50378),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50107;
})();
(node_50377.shadow$old = true);

(new_link_50379.onload = ((function (seq__50064_50320,chunk__50068_50321,count__50069_50322,i__50070_50323,seq__49896,chunk__49898,count__49899,i__49900,new_link_50379,path_match_50378,node_50377,seq__50064_50371__$1,temp__5804__auto___50370__$1,path,seq__49896__$1,temp__5804__auto__,map__49895,map__49895__$1,msg,updates,reload_info){
return (function (e){
var seq__50108_50380 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50110_50381 = null;
var count__50111_50382 = (0);
var i__50112_50383 = (0);
while(true){
if((i__50112_50383 < count__50111_50382)){
var map__50116_50384 = chunk__50110_50381.cljs$core$IIndexed$_nth$arity$2(null,i__50112_50383);
var map__50116_50385__$1 = cljs.core.__destructure_map(map__50116_50384);
var task_50386 = map__50116_50385__$1;
var fn_str_50387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116_50385__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116_50385__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50389 = goog.getObjectByName(fn_str_50387,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50388)].join(''));

(fn_obj_50389.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50389.cljs$core$IFn$_invoke$arity$2(path,new_link_50379) : fn_obj_50389.call(null,path,new_link_50379));


var G__50390 = seq__50108_50380;
var G__50391 = chunk__50110_50381;
var G__50392 = count__50111_50382;
var G__50393 = (i__50112_50383 + (1));
seq__50108_50380 = G__50390;
chunk__50110_50381 = G__50391;
count__50111_50382 = G__50392;
i__50112_50383 = G__50393;
continue;
} else {
var temp__5804__auto___50394__$2 = cljs.core.seq(seq__50108_50380);
if(temp__5804__auto___50394__$2){
var seq__50108_50395__$1 = temp__5804__auto___50394__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50108_50395__$1)){
var c__5565__auto___50396 = cljs.core.chunk_first(seq__50108_50395__$1);
var G__50397 = cljs.core.chunk_rest(seq__50108_50395__$1);
var G__50398 = c__5565__auto___50396;
var G__50399 = cljs.core.count(c__5565__auto___50396);
var G__50400 = (0);
seq__50108_50380 = G__50397;
chunk__50110_50381 = G__50398;
count__50111_50382 = G__50399;
i__50112_50383 = G__50400;
continue;
} else {
var map__50117_50401 = cljs.core.first(seq__50108_50395__$1);
var map__50117_50402__$1 = cljs.core.__destructure_map(map__50117_50401);
var task_50403 = map__50117_50402__$1;
var fn_str_50404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50117_50402__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50117_50402__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50406 = goog.getObjectByName(fn_str_50404,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50405)].join(''));

(fn_obj_50406.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50406.cljs$core$IFn$_invoke$arity$2(path,new_link_50379) : fn_obj_50406.call(null,path,new_link_50379));


var G__50407 = cljs.core.next(seq__50108_50395__$1);
var G__50408 = null;
var G__50409 = (0);
var G__50410 = (0);
seq__50108_50380 = G__50407;
chunk__50110_50381 = G__50408;
count__50111_50382 = G__50409;
i__50112_50383 = G__50410;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50377);
});})(seq__50064_50320,chunk__50068_50321,count__50069_50322,i__50070_50323,seq__49896,chunk__49898,count__49899,i__49900,new_link_50379,path_match_50378,node_50377,seq__50064_50371__$1,temp__5804__auto___50370__$1,path,seq__49896__$1,temp__5804__auto__,map__49895,map__49895__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50378], 0));

goog.dom.insertSiblingAfter(new_link_50379,node_50377);


var G__50411 = cljs.core.next(seq__50064_50371__$1);
var G__50412 = null;
var G__50413 = (0);
var G__50414 = (0);
seq__50064_50320 = G__50411;
chunk__50068_50321 = G__50412;
count__50069_50322 = G__50413;
i__50070_50323 = G__50414;
continue;
} else {
var G__50415 = cljs.core.next(seq__50064_50371__$1);
var G__50416 = null;
var G__50417 = (0);
var G__50418 = (0);
seq__50064_50320 = G__50415;
chunk__50068_50321 = G__50416;
count__50069_50322 = G__50417;
i__50070_50323 = G__50418;
continue;
}
} else {
var G__50419 = cljs.core.next(seq__50064_50371__$1);
var G__50420 = null;
var G__50421 = (0);
var G__50422 = (0);
seq__50064_50320 = G__50419;
chunk__50068_50321 = G__50420;
count__50069_50322 = G__50421;
i__50070_50323 = G__50422;
continue;
}
}
} else {
}
}
break;
}


var G__50423 = cljs.core.next(seq__49896__$1);
var G__50424 = null;
var G__50425 = (0);
var G__50426 = (0);
seq__49896 = G__50423;
chunk__49898 = G__50424;
count__49899 = G__50425;
i__49900 = G__50426;
continue;
} else {
var G__50427 = cljs.core.next(seq__49896__$1);
var G__50428 = null;
var G__50429 = (0);
var G__50430 = (0);
seq__49896 = G__50427;
chunk__49898 = G__50428;
count__49899 = G__50429;
i__49900 = G__50430;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50118){
var map__50119 = p__50118;
var map__50119__$1 = cljs.core.__destructure_map(map__50119);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50119__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50120){
var map__50121 = p__50120;
var map__50121__$1 = cljs.core.__destructure_map(map__50121);
var _ = map__50121__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50122,done,error){
var map__50123 = p__50122;
var map__50123__$1 = cljs.core.__destructure_map(map__50123);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50123__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50124,done,error){
var map__50125 = p__50124;
var map__50125__$1 = cljs.core.__destructure_map(map__50125);
var msg = map__50125__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50126){
var map__50127 = p__50126;
var map__50127__$1 = cljs.core.__destructure_map(map__50127);
var src = map__50127__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50127__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50128 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50128) : done.call(null,G__50128));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50129){
var map__50130 = p__50129;
var map__50130__$1 = cljs.core.__destructure_map(map__50130);
var msg__$1 = map__50130__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50130__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50131){var ex = e50131;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50132){
var map__50133 = p__50132;
var map__50133__$1 = cljs.core.__destructure_map(map__50133);
var env = map__50133__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50134){
var map__50135 = p__50134;
var map__50135__$1 = cljs.core.__destructure_map(map__50135);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50135__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50135__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50136){
var map__50137 = p__50136;
var map__50137__$1 = cljs.core.__destructure_map(map__50137);
var svc = map__50137__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50137__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
