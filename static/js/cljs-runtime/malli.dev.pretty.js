goog.provide('malli.dev.pretty');
malli.dev.pretty._printer = (function malli$dev$pretty$_printer(var_args){
var G__60355 = arguments.length;
switch (G__60355) {
case 0:
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Schema Error",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"colors","colors",1157174732),malli.dev.virhe._dark_colors,new cljs.core.Keyword(null,"unknown","unknown",-935977881),(function (x){
if(malli.core.schema_QMARK_(x)){
return malli.core.form.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}),new cljs.core.Keyword(null,"throwing-fn-top-level-ns-names","throwing-fn-top-level-ns-names",1959105244),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["malli","clojure","malli"], null),new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),options], 0)));
}));

(malli.dev.pretty._printer.cljs$lang$maxFixedArity = 1);

malli.dev.pretty._errors = (function malli$dev$pretty$_errors(explanation,printer){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"break","break",126570225),(function (){var iter__5520__auto__ = (function malli$dev$pretty$_errors_$_iter__60356(s__60357){
return (new cljs.core.LazySeq(null,(function (){
var s__60357__$1 = s__60357;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60357__$1);
if(temp__5804__auto__){
var s__60357__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60357__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60357__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60359 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60358 = (0);
while(true){
if((i__60358 < size__5519__auto__)){
var error = cljs.core._nth(c__5518__auto__,i__60358);
cljs.core.chunk_append(b__60359,malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer));

var G__60384 = (i__60358 + (1));
i__60358 = G__60384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60359),malli$dev$pretty$_errors_$_iter__60356(cljs.core.chunk_rest(s__60357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60359),null);
}
} else {
var error = cljs.core.first(s__60357__$2);
return cljs.core.cons(malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer),malli$dev$pretty$_errors_$_iter__60356(cljs.core.rest(s__60357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1(explanation)));
})());
});
malli.dev.pretty._explain = (function malli$dev$pretty$_explain(schema,value,printer){
return malli.dev.pretty._errors(malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,value),printer);
});
malli.dev.pretty._block = (function malli$dev$pretty$_block(text,body,printer){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.virhe._text(text,printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),body], null)], null);
});
malli.dev.pretty._link = (function malli$dev$pretty$_link(link,printer){
return malli.dev.virhe._color(new cljs.core.Keyword(null,"link","link",-1769163468),link,printer);
});
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","explain","malli.core/explain",36932858),(function (_,___$1,p__60360,printer){
var map__60361 = p__60360;
var map__60361__$1 = cljs.core.__destructure_map(map__60361);
var explanation = map__60361__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60361__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Value:",malli.dev.virhe._visit(malli.error.error_value.cljs$core$IFn$_invoke$arity$2(explanation,printer),printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.virhe._visit(malli.error.humanize.cljs$core$IFn$_invoke$arity$1(explanation),printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-input","malli.core/invalid-input",2010057279),(function (_,___$1,p__60362,printer){
var map__60363 = p__60362;
var map__60363__$1 = cljs.core.__destructure_map(map__60363);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"input","input",556931961));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60363__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function arguments:",malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Input Schema:",malli.dev.virhe._visit(input,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(input,args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-output","malli.core/invalid-output",-147363519),(function (_,___$1,p__60364,printer){
var map__60365 = p__60364;
var map__60365__$1 = cljs.core.__destructure_map(map__60365);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"value","value",305978217));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function return value:",malli.dev.virhe._visit(value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function arguments:",malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Output Schema:",malli.dev.virhe._visit(output,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(output,value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-arity","malli.core/invalid-arity",577014581),(function (_,___$1,p__60366,printer){
var map__60367 = p__60366;
var map__60367__$1 = cljs.core.__destructure_map(map__60367);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block(["Invalid function arity (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),"):"].join(''),malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.pretty.reporter = (function malli$dev$pretty$reporter(var_args){
var G__60369 = arguments.length;
switch (G__60369) {
case 0:
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0());
}));

(malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1 = (function (printer){
return (function (type,data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60370_60386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60371_60387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60372_60388 = true;
var _STAR_print_fn_STAR__temp_val__60373_60389 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60372_60388);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60373_60389);

try{malli.dev.virhe._print_doc(malli.dev.virhe._exception_doc(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)),printer),printer);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60371_60387);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60370_60386);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], 0));
});
}));

(malli.dev.pretty.reporter.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.thrower = (function malli$dev$pretty$thrower(var_args){
var G__60375 = arguments.length;
switch (G__60375) {
case 0:
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0());
}));

(malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1 = (function (printer){
var report = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1(printer);
return (function (type,data){
var message = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60376_60391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60377_60392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60378_60393 = true;
var _STAR_print_fn_STAR__temp_val__60379_60394 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60378_60393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60379_60394);

try{report(type,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60377_60392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60376_60391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
}));

(malli.dev.pretty.thrower.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.prettifier = (function malli$dev$pretty$prettifier(type,title,f,options){
var printer = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5043__auto__ = new cljs.core.Keyword("malli.dev.pretty","printer","malli.dev.pretty/printer",-1293932392).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"width","width",-384071477),(60));
}
})(),new cljs.core.Keyword(null,"title","title",636505583),title);
var actor = new cljs.core.Keyword("malli.dev.pretty","actor","malli.dev.pretty/actor",-1785917433).cljs$core$IFn$_invoke$arity$2(options,malli.dev.pretty.reporter);
return (function() { 
var G__60395__delegate = function (args){
var temp__5804__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
var fexpr__60380_60396 = (actor.cljs$core$IFn$_invoke$arity$1 ? actor.cljs$core$IFn$_invoke$arity$1(printer) : actor.call(null,printer));
(fexpr__60380_60396.cljs$core$IFn$_invoke$arity$2 ? fexpr__60380_60396.cljs$core$IFn$_invoke$arity$2(type,res) : fexpr__60380_60396.call(null,type,res));

return res;
} else {
return null;
}
};
var G__60395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60397__i = 0, G__60397__a = new Array(arguments.length -  0);
while (G__60397__i < G__60397__a.length) {G__60397__a[G__60397__i] = arguments[G__60397__i + 0]; ++G__60397__i;}
  args = new cljs.core.IndexedSeq(G__60397__a,0,null);
} 
return G__60395__delegate.call(this,args);};
G__60395.cljs$lang$maxFixedArity = 0;
G__60395.cljs$lang$applyTo = (function (arglist__60398){
var args = cljs.core.seq(arglist__60398);
return G__60395__delegate(args);
});
G__60395.cljs$core$IFn$_invoke$arity$variadic = G__60395__delegate;
return G__60395;
})()
;
});
malli.dev.pretty.explain = (function malli$dev$pretty$explain(var_args){
var G__60382 = arguments.length;
switch (G__60382) {
case 2:
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,null);
}));

(malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
var explain = (function (){
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,options));
});
return malli.dev.pretty.prettifier(new cljs.core.Keyword("malli.core","explain","malli.core/explain",36932858),"Validation Error",explain,options)();
}));

(malli.dev.pretty.explain.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=malli.dev.pretty.js.map
