goog.provide('frontend.handler.export$.text');
/**
 * also consider (get-in *state* [:export-options :indent-style])
 */
frontend.handler.export$.text.indent_with_2_spaces = (function frontend$handler$export$text$indent_with_2_spaces(level){
var indent_style = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null));
var G__105196 = indent_style;
switch (G__105196) {
case "dashes":
return frontend.handler.export$.common.indent(level,(2));

break;
case "spaces":
case "no-indent":
return frontend.handler.export$.common.indent(level,(0));

break;
default:
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown indent-style:",indent_style], 0)),"\n","false"].join('')));


}
});

frontend.handler.export$.text.block_heading = (function frontend$handler$export$text$block_heading(p__105197){
var map__105198 = p__105197;
var map__105198__$1 = cljs.core.__destructure_map(map__105198);
var _meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"_meta","_meta",937543236));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var _anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"_anchor","_anchor",-1041309458));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"title","title",636505583));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var _tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"_tags","_tags",58828915));
var _numbering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"_numbering","_numbering",1825467892));
var _unordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105198__$1,new cljs.core.Keyword(null,"_unordered","_unordered",1249595382));
var indent_style = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null));
var priority_STAR_ = (function (){var and__5041__auto__ = priority;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.export$.common.priority__GT_string(priority)], 0));
} else {
return and__5041__auto__;
}
})();
var heading_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indent_style,"dashes"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.indent((level - (1)),(0)),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-"], 0))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.indent((level - (1)),(0))], null));
var size_STAR_ = (function (){var and__5041__auto__ = size;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"#"))], 0))], null);
} else {
return and__5041__auto__;
}
})();
var marker_STAR_ = (function (){var and__5041__auto__ = marker;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker], 0));
} else {
return and__5041__auto__;
}
})();
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),level));

var simple_asts = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571)], null));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655)], null)));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((2))], null):null),heading_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,marker_STAR_,frontend.handler.export$.common.space,priority_STAR_,frontend.handler.export$.common.space], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null)], 0)))));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655)], null),false));

return simple_asts;
});
frontend.handler.export$.text.block_list_item = (function frontend$handler$export$text$block_list_item(p__105199){
var map__105200 = p__105199;
var map__105200__$1 = cljs.core.__destructure_map(map__105200);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105200__$1,new cljs.core.Keyword(null,"content","content",15833224));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105200__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105200__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var _name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105200__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105200__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var content_STAR_ = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.block_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)));
var number_STAR_ = frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(number)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),". "].join(''):"* ")], 0));
var checkbox_STAR_ = frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((!((checkbox == null))))?((cljs.core.boolean$(checkbox))?"[X]":"[ ]"):"")], 0));
var current_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1));
var indent = (((current_level > (1)))?frontend.handler.export$.common.indent((current_level - (1)),(0)):null);
var items_STAR_ = (frontend.handler.export$.text.block_list.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.export$.text.block_list.cljs$core$IFn$_invoke$arity$3(items,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365),true) : frontend.handler.export$.text.block_list.call(null,items,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365),true));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [indent,number_STAR_,checkbox_STAR_,frontend.handler.export$.common.space], null),content_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null),items_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));
});
frontend.handler.export$.text.block_list = (function frontend$handler$export$text$block_list(var_args){
var args__5772__auto__ = [];
var len__5766__auto___105359 = arguments.length;
var i__5767__auto___105360 = (0);
while(true){
if((i__5767__auto___105360 < len__5766__auto___105359)){
args__5772__auto__.push((arguments[i__5767__auto___105360]));

var G__105361 = (i__5767__auto___105360 + (1));
i__5767__auto___105360 = G__105361;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.handler.export$.text.block_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.handler.export$.text.block_list.cljs$core$IFn$_invoke$arity$variadic = (function (l,p__105203){
var map__105204 = p__105203;
var map__105204__$1 = cljs.core.__destructure_map(map__105204);
var in_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105204__$1,new cljs.core.Keyword(null,"in-list?","in-list?",-632658365));
var _STAR_state_STAR__orig_val__105205 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__105206 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),cljs.core.inc);
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__105206);

try{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.block_list_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l], 0))),(((((cljs.core.count(l) > (0))) && (cljs.core.not(in_list_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((2))], null):null)));
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__105205);
}}));

(frontend.handler.export$.text.block_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.export$.text.block_list.cljs$lang$applyTo = (function (seq105201){
var G__105202 = cljs.core.first(seq105201);
var seq105201__$1 = cljs.core.next(seq105201);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105202,seq105201__$1);
}));

frontend.handler.export$.text.block_property_drawer = (function frontend$handler$export$text$block_property_drawer(properties){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556)], null)))){
return null;
} else {
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
var indent = frontend.handler.export$.text.indent_with_2_spaces(level);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__105215){
var vec__105216 = p__105215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105216,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(r,indent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,"::"], 0)),frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),frontend.handler.export$.common.newline_STAR_((1))], 0));
}),cljs.core.PersistentVector.EMPTY,properties);
}
});
frontend.handler.export$.text.block_example = (function frontend$handler$export$text$block_example(l){
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (line){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["    "], 0)),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line], 0)),frontend.handler.export$.common.newline_STAR_((1))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l], 0)));
});
frontend.handler.export$.text.remove_max_prefix_spaces = (function frontend$handler$export$text$remove_max_prefix_spaces(lines){
var common_prefix_spaces = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,line){
if(clojure.string.blank_QMARK_(line)){
return r;
} else {
var leading_spaces = cljs.core.re_find(/^\s+/,line);
if((r == null)){
return leading_spaces;
} else {
if(clojure.string.starts_with_QMARK_(r,leading_spaces)){
return leading_spaces;
} else {
return r;
}
}
}
}),null,lines);
var pattern = cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(common_prefix_spaces)].join(''));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.replace_first(line,pattern,"");
}),lines);
});
frontend.handler.export$.text.block_src = (function frontend$handler$export$text$block_src(p__105225){
var map__105226 = p__105225;
var map__105226__$1 = cljs.core.__destructure_map(map__105226);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105226__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105226__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
var lines_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null))))?frontend.handler.export$.text.remove_max_prefix_spaces(lines):lines);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["```"], 0))], null),(cljs.core.truth_(language)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([language], 0))], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.raw_text,lines_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["```"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));
});
frontend.handler.export$.text.block_quote = (function frontend$handler$export$text$block_quote(block_coll){
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
var _STAR_state_STAR__orig_val__105230 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__105231 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"indent-after-break-line?","indent-after-break-line?",-736379041),true);
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__105231);

try{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
var block_simple_ast = (frontend.handler.export$.text.block_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.text.block_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(block) : frontend.handler.export$.text.block_ast__GT_simple_ast.call(null,block));
if(cljs.core.seq(block_simple_ast)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([">"], 0)),frontend.handler.export$.common.space], null),block_simple_ast));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_coll], 0))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((2))], null)));
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__105230);
}});
frontend.handler.export$.text.block_latex_fragment = (function frontend$handler$export$text$block_latex_fragment(ast_content){
return (frontend.handler.export$.text.inline_latex_fragment.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.text.inline_latex_fragment.cljs$core$IFn$_invoke$arity$1(ast_content) : frontend.handler.export$.text.inline_latex_fragment.call(null,ast_content));
});
frontend.handler.export$.text.block_latex_env = (function frontend$handler$export$text$block_latex_env(p__105241){
var vec__105243 = p__105241;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105243,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105243,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105243,(2),null);
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\\begin{",name,"}",options], 0)),frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)),frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\\end{",name,"}"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null);
});
frontend.handler.export$.text.block_displayed_math = (function frontend$handler$export$text$block_displayed_math(ast_content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["$$",ast_content,"$$"], 0)),frontend.handler.export$.common.space], null);
});
frontend.handler.export$.text.block_drawer = (function frontend$handler$export$text$block_drawer(p__105248){
var vec__105249 = p__105248;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105249,(0),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105249,(1),null);
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890)) - (1));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":",name,":"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (line){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line], 0))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lines], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":END:"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));
});
frontend.handler.export$.text.block_footnote_definition = (function frontend$handler$export$text$block_footnote_definition(p__105259){
var vec__105260 = p__105259;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105260,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105260,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[^",name,"]:"], 0)),frontend.handler.export$.common.space], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));
});
frontend.handler.export$.text.block_horizontal_rule = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null);
frontend.handler.export$.text.block_table = (function frontend$handler$export$text$block_table(p__105265){
var map__105266 = p__105265;
var map__105266__$1 = cljs.core.__destructure_map(map__105266);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105266__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105266__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
var sep_line = frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["|",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(header),"---")),"|"], 0));
var header_line = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (h){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["|"], 0)),frontend.handler.export$.common.space], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h], 0)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["|"], 0))], null)));
var group_lines = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (group){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (row){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level)], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (col){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["|"], 0)),frontend.handler.export$.common.space], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space], null)], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["|"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0)));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level)], null),((cljs.core.seq(header))?header_line:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(header))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level),sep_line,frontend.handler.export$.common.newline_STAR_((1))], null):null),group_lines], 0)));
});
frontend.handler.export$.text.block_comment = (function frontend$handler$export$text$block_comment(s){
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["<!---"], 0)),frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)),frontend.handler.export$.common.newline_STAR_((1)),frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-->"], 0)),frontend.handler.export$.common.newline_STAR_((1))], null);
});
frontend.handler.export$.text.block_raw_html = (function frontend$handler$export$text$block_raw_html(s){
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)),frontend.handler.export$.common.newline_STAR_((1))], null);
});
frontend.handler.export$.text.block_hiccup = (function frontend$handler$export$text$block_hiccup(s){
var level = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1)) - (1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.text.indent_with_2_spaces(level),frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)),frontend.handler.export$.common.space], null);
});
frontend.handler.export$.text.inline_link = (function frontend$handler$export$text$inline_link(p__105273){
var map__105274 = p__105273;
var map__105274__$1 = cljs.core.__destructure_map(map__105274);
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105274__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_text], 0))], null);
});
frontend.handler.export$.text.inline_nested_link = (function frontend$handler$export$text$inline_nested_link(p__105279){
var map__105280 = p__105279;
var map__105280__$1 = cljs.core.__destructure_map(map__105280);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105280__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0))], null);
});
frontend.handler.export$.text.inline_subscript = (function frontend$handler$export$text$inline_subscript(inline_coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["_{"], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common.space,(frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.text.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0))], null)], 0)));
});
frontend.handler.export$.text.inline_superscript = (function frontend$handler$export$text$inline_superscript(inline_coll){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["^{"], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common.space,(frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.text.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0))], null)], 0)));
});
frontend.handler.export$.text.inline_footnote_reference = (function frontend$handler$export$text$inline_footnote_reference(p__105285){
var map__105286 = p__105285;
var map__105286__$1 = cljs.core.__destructure_map(map__105286);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",name,"]"], 0))], null);
});
frontend.handler.export$.text.inline_cookie = (function frontend$handler$export$text$inline_cookie(ast_content){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__105289 = cljs.core.first(ast_content);
switch (G__105289) {
case "Absolute":
var vec__105290 = ast_content;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105290,(0),null);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105290,(1),null);
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105290,(2),null);
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),"]"].join('');

break;
case "Percent":
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(ast_content)),"%]"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__105289)].join('')));

}
})()], 0))], null);
});
frontend.handler.export$.text.inline_latex_fragment = (function frontend$handler$export$text$inline_latex_fragment(ast_content){
var vec__105293 = ast_content;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105293,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105293,(1),null);
var wrapper = (function (){var G__105296 = type;
switch (G__105296) {
case "Inline":
return "$";

break;
case "Displayed":
return "$$";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__105296)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.space,frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapper),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wrapper)].join('')], 0)),frontend.handler.export$.common.space], null);
});
frontend.handler.export$.text.inline_macro = (function frontend$handler$export$text$inline_macro(p__105297){
var map__105298 = p__105297;
var map__105298__$1 = cljs.core.__destructure_map(map__105298);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105298__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105298__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"cloze"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",arguments$):(function (){var l = (function (){var G__105302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{{",name], null);
var G__105302__$1 = (((cljs.core.count(arguments$) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__105302,"(",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",arguments$),")"], 0)):G__105302);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__105302__$1,"}}");

})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(l);
})())], 0))],null));
});
frontend.handler.export$.text.inline_entity = (function frontend$handler$export$text$inline_entity(p__105304){
var map__105305 = p__105304;
var map__105305__$1 = cljs.core.__destructure_map(map__105305);
var unicode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105305__$1,new cljs.core.Keyword(null,"unicode","unicode",-542572710));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unicode], 0))], null);
});
frontend.handler.export$.text.inline_timestamp = (function frontend$handler$export$text$inline_timestamp(ast_content){
var vec__105309 = ast_content;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105309,(0),null);
var timestamp_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105309,(1),null);
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var G__105313 = type;
switch (G__105313) {
case "Scheduled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SCHEDULED: ",frontend.handler.export$.common.timestamp_to_string(timestamp_content)], null);

break;
case "Deadline":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEADLINE: ",frontend.handler.export$.common.timestamp_to_string(timestamp_content)], null);

break;
case "Date":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.timestamp_to_string(timestamp_content)], null);

break;
case "Closed":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLOSED: ",frontend.handler.export$.common.timestamp_to_string(timestamp_content)], null);

break;
case "Clock":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLOCK: ",frontend.handler.export$.common.timestamp_to_string(cljs.core.second(timestamp_content))], null);

break;
case "Range":
var map__105314 = timestamp_content;
var map__105314__$1 = cljs.core.__destructure_map(map__105314);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105314__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105314__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common.timestamp_to_string(start)),"--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common.timestamp_to_string(stop))].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__105313)].join('')));

}
})())], 0))],null));
});
frontend.handler.export$.text.inline_email = (function frontend$handler$export$text$inline_email(p__105315){
var map__105316 = p__105315;
var map__105316__$1 = cljs.core.__destructure_map(map__105316);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105316__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105316__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain),">"].join('')], 0))], null);
});
frontend.handler.export$.text.emphasis_wrap_with = (function frontend$handler$export$text$emphasis_wrap_with(inline_coll,em_symbol){
var _STAR_state_STAR__orig_val__105319 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__105320 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),cljs.core.first(em_symbol));
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__105320);

try{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([em_symbol], 0))], null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([em_symbol], 0))], null)], 0)));
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__105319);
}});
frontend.handler.export$.text.inline_emphasis = (function frontend$handler$export$text$inline_emphasis(emphasis){
var vec__105321 = emphasis;
var vec__105324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105321,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105324,(0),null);
var inline_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105321,(1),null);
var outside_em_symbol = new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381).cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common._STAR_state_STAR_);
var G__105327 = type;
switch (G__105327) {
case "Bold":
return frontend.handler.export$.text.emphasis_wrap_with(inline_coll,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outside_em_symbol,"*"))?"__":"**"));

break;
case "Italic":
return frontend.handler.export$.text.emphasis_wrap_with(inline_coll,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outside_em_symbol,"*"))?"_":"*"));

break;
case "Underline":
var _STAR_state_STAR__orig_val__105329 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__105330 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),outside_em_symbol);
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__105330);

try{return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (inline){
return cljs.core.cons(frontend.handler.export$.common.space,(frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.text.inline_ast__GT_simple_ast.cljs$core$IFn$_invoke$arity$1(inline) : frontend.handler.export$.text.inline_ast__GT_simple_ast.call(null,inline)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__105329);
}
break;
case "Strike_through":
return frontend.handler.export$.text.emphasis_wrap_with(inline_coll,"~~");

break;
case "Highlight":
return frontend.handler.export$.text.emphasis_wrap_with(inline_coll,"^^");

break;
default:
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inline-emphasis","inline-emphasis",1774829182),emphasis,"is invalid"], 0)),"\n","false"].join('')));


}
});
frontend.handler.export$.text.inline_break_line = (function frontend$handler$export$text$inline_break_line(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null))))?frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n"], 0)):frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  \n"], 0))),(cljs.core.truth_(new cljs.core.Keyword(null,"indent-after-break-line?","indent-after-break-line?",-736379041).cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common._STAR_state_STAR_))?(function (){var current_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1));
if((current_level > (1))){
return frontend.handler.export$.text.indent_with_2_spaces((current_level - (1)));
} else {
return null;
}
})():null)], null);
});
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"frontend.handler.export.text","frontend.handler.export.text",-1199376101,null),new cljs.core.Symbol(null,"block-ast->simple-ast","block-ast->simple-ast",-1358162335,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),logseq.graph_parser.schema.mldoc.block_ast_schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),frontend.handler.export$.common.simple_ast_malli_schema], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"frontend/handler/export/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),346,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"end-line","end-line",1837326455),346,new cljs.core.Keyword(null,"end-column","end-column",1425389514),28], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

frontend.handler.export$.text.block_ast__GT_simple_ast = (function frontend$handler$export$text$block_ast__GT_simple_ast(block){
var newline_after_block_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571)], null));
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var vec__105332 = block;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105332,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105332,(1),null);
var G__105335 = ast_type;
switch (G__105335) {
case "Paragraph":
var map__105336 = cljs.core.meta(block);
var map__105336__$1 = cljs.core.__destructure_map(map__105336);
var origin_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105336__$1,new cljs.core.Keyword(null,"origin-ast","origin-ast",915928394));
var current_block_is_first_heading_block_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655)], null));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655)], null),false));

return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_((function (){var and__5041__auto__ = origin_ast;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = newline_after_block_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(current_block_is_first_heading_block_QMARK_);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((2))], null):null),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.inline_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var last_element = cljs.core.last(ast_content);
var vec__105337 = last_element;
var last_element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105337,(0),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = newline_after_block_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Break_Line",last_element_type);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.export$.text.inline_break_line();
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_((1))], null)], 0)));

break;
case "Paragraph_line":
throw (new Error(["Assert failed: ","Paragraph_line is mldoc internal ast","\n","false"].join('')));


break;
case "Paragraph_Sep":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.newline_STAR_(ast_content)], null);

break;
case "Heading":
return frontend.handler.export$.text.block_heading(ast_content);

break;
case "List":
return frontend.handler.export$.text.block_list(ast_content);

break;
case "Directive":
case "Results":
case "Export":
case "CommentBlock":
case "Custom":
return null;

break;
case "Example":
return frontend.handler.export$.text.block_example(ast_content);

break;
case "Src":
return frontend.handler.export$.text.block_src(ast_content);

break;
case "Quote":
return frontend.handler.export$.text.block_quote(ast_content);

break;
case "Latex_Fragment":
return frontend.handler.export$.text.block_latex_fragment(ast_content);

break;
case "Latex_Environment":
return frontend.handler.export$.text.block_latex_env(cljs.core.rest(block));

break;
case "Displayed_Math":
return frontend.handler.export$.text.block_displayed_math(ast_content);

break;
case "Drawer":
return frontend.handler.export$.text.block_drawer(cljs.core.rest(block));

break;
case "Property_Drawer":
return frontend.handler.export$.text.block_property_drawer(ast_content);

break;
case "Footnote_Definition":
return frontend.handler.export$.text.block_footnote_definition(cljs.core.rest(block));

break;
case "Horizontal_Rule":
return frontend.handler.export$.text.block_horizontal_rule;

break;
case "Table":
return frontend.handler.export$.text.block_table(ast_content);

break;
case "Comment":
return frontend.handler.export$.text.block_comment(ast_content);

break;
case "Raw_Html":
return frontend.handler.export$.text.block_raw_html(ast_content);

break;
case "Hiccup":
return frontend.handler.export$.text.block_hiccup(ast_content);

break;
default:
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block-ast->simple-ast","block-ast->simple-ast",1296273434),ast_type,"not implemented yet"], 0)),"\n","false"].join('')));


}
})()));
});
frontend.handler.export$.text.inline_ast__GT_simple_ast = (function frontend$handler$export$text$inline_ast__GT_simple_ast(inline){
var vec__105342 = inline;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105342,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105342,(1),null);
var G__105345 = ast_type;
switch (G__105345) {
case "Emphasis":
return frontend.handler.export$.text.inline_emphasis(ast_content);

break;
case "Break_Line":
case "Hard_Break_Line":
return frontend.handler.export$.text.inline_break_line();

break;
case "Verbatim":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Code":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["`",ast_content,"`"], 0))], null);

break;
case "Tag":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.common.hashtag_value__GT_string(ast_content))].join('')], 0))], null);

break;
case "Spaces":
return null;

break;
case "Plain":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Link":
return frontend.handler.export$.text.inline_link(ast_content);

break;
case "Nested_link":
return frontend.handler.export$.text.inline_nested_link(ast_content);

break;
case "Target":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["<<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ast_content),">>"].join('')], 0))], null);

break;
case "Subscript":
return frontend.handler.export$.text.inline_subscript(ast_content);

break;
case "Superscript":
return frontend.handler.export$.text.inline_superscript(ast_content);

break;
case "Footnote_Reference":
return frontend.handler.export$.text.inline_footnote_reference(ast_content);

break;
case "Cookie":
return frontend.handler.export$.text.inline_cookie(ast_content);

break;
case "Latex_Fragment":
return frontend.handler.export$.text.inline_latex_fragment(ast_content);

break;
case "Macro":
return frontend.handler.export$.text.inline_macro(ast_content);

break;
case "Entity":
return frontend.handler.export$.text.inline_entity(ast_content);

break;
case "Timestamp":
return frontend.handler.export$.text.inline_timestamp(ast_content);

break;
case "Radio_Target":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["<<<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ast_content),">>>"].join('')], 0))], null);

break;
case "Email":
return frontend.handler.export$.text.inline_email(ast_content);

break;
case "Inline_Hiccup":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Inline_Html":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_content], 0))], null);

break;
case "Export_Snippet":
case "Inline_Source_Block":
return null;

break;
default:
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inline-ast->simple-ast","inline-ast->simple-ast",-258439344),ast_type,"not implemented yet"], 0)),"\n","false"].join('')));


}
});
frontend.handler.export$.text.export_helper = (function frontend$handler$export$text$export_helper(content,format,options){
var remove_options = cljs.core.set(new cljs.core.Keyword(null,"remove-options","remove-options",768737839).cljs$core$IFn$_invoke$arity$1(options));
var other_options = new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(options);
var _STAR_state_STAR__orig_val__105349 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__105350 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"indent-style","indent-style",855468755).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "dashes";
}
})(),new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"emphasis","emphasis",293543451)),new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)),new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556),cljs.core.contains_QMARK_(remove_options,new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857).cljs$core$IFn$_invoke$arity$1(other_options),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571).cljs$core$IFn$_invoke$arity$1(other_options)], null)], null)], 0));
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__105350);

try{var ast = logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var ast__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.remove_block_ast_pos,ast);
var ast__$2 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.Properties_block_ast_QMARK_,ast__$1));
var ast_STAR_ = frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed(ast__$2);
var keep_level_LT__EQ_n = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857)], null));
var ast_STAR___$1 = (((keep_level_LT__EQ_n > (0)))?frontend.handler.export$.common.keep_only_level_LT__EQ_n(ast_STAR_,keep_level_LT__EQ_n):ast_STAR_);
var ast_STAR__STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.replace_Heading_with_Paragraph,ast_STAR___$1):ast_STAR___$1);
var config_for_walk_block_ast = (function (){var G__105351 = cljs.core.PersistentArrayMap.EMPTY;
var G__105351__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__105351,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),cljs.core.conj,frontend.handler.export$.common.remove_emphasis):G__105351);
var G__105351__$2 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__105351__$1,new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513),cljs.core.conj,frontend.handler.export$.common.remove_page_ref_brackets):G__105351__$1);
var G__105351__$3 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__105351__$2,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),cljs.core.conj,frontend.handler.export$.common.remove_tags):G__105351__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no-indent",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.Keyword(null,"indent-style","indent-style",855468755)], null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__105351__$3,new cljs.core.Keyword(null,"fns-on-inline-coll","fns-on-inline-coll",-2007934714),cljs.core.conj,frontend.handler.export$.common.remove_prefix_spaces_in_Plain);
} else {
return G__105351__$3;
}
})();
var ast_STAR__STAR__STAR_ = (((!(cljs.core.empty_QMARK_(config_for_walk_block_ast))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.walk_block_ast,config_for_walk_block_ast),ast_STAR__STAR_):ast_STAR__STAR_);
var simple_asts = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.text.block_ast__GT_simple_ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_STAR__STAR__STAR_], 0)));
return frontend.handler.export$.common.simple_asts__GT_string(simple_asts);
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__105349);
}});
/**
 * options:
 *   :indent-style "dashes" | "spaces" | "no-indent"
 *   :remove-options [:emphasis :page-ref :tag :property]
 *   :other-options {:keep-only-level<=N int :newline-after-block bool}
 */
frontend.handler.export$.text.export_blocks_as_markdown = (function frontend$handler$export$text$export_blocks_as_markdown(repo,root_block_uuids_or_page_name,options){
if(((cljs.core.coll_QMARK_(root_block_uuids_or_page_name)) || (typeof root_block_uuids_or_page_name === 'string'))){
} else {
throw (new Error("Assert failed: (or (coll? root-block-uuids-or-page-name) (string? root-block-uuids-or-page-name))"));
}

if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = new cljs.core.Keyword(null,"export-blocks-as-markdown","export-blocks-as-markdown",-915039746);
console.time(k__62654__auto__);

var res__62655__auto__ = (function (){var content = ((typeof root_block_uuids_or_page_name === 'string')?frontend.handler.export$.common.get_page_content(root_block_uuids_or_page_name):frontend.handler.export$.common.root_block_uuids__GT_content(repo,root_block_uuids_or_page_name));
var first_block = (function (){var G__105352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(root_block_uuids_or_page_name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105352) : frontend.db.entity.call(null,G__105352));
})();
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(first_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
return frontend.handler.export$.text.export_helper(content,format,options);
})();
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
var content = ((typeof root_block_uuids_or_page_name === 'string')?frontend.handler.export$.common.get_page_content(root_block_uuids_or_page_name):frontend.handler.export$.common.root_block_uuids__GT_content(repo,root_block_uuids_or_page_name));
var first_block = (function (){var G__105353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(root_block_uuids_or_page_name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105353) : frontend.db.entity.call(null,G__105353));
})();
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(first_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
return frontend.handler.export$.text.export_helper(content,format,options);
}
});
/**
 * options see also `export-blocks-as-markdown`
 */
frontend.handler.export$.text.export_files_as_markdown = (function frontend$handler$export$text$export_files_as_markdown(files,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__105354){
var map__105355 = p__105354;
var map__105355__$1 = cljs.core.__destructure_map(map__105355);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105355__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105355__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105355__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105355__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-files-as-markdown","export-files-as-markdown",1418547627),path], 0));
console.time(k__62654__auto__);

var res__62655__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,frontend.handler.export$.text.export_helper(content,format,options)], null);
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,frontend.handler.export$.text.export_helper(content,format,options)], null);
}
} else {
return null;
}
}),files);
});
/**
 * TODO: indent-style and remove-options
 */
frontend.handler.export$.text.export_repo_as_markdown_BANG_ = (function frontend$handler$export$text$export_repo_as_markdown_BANG_(repo){
var temp__5804__auto__ = (cljs.core.truth_(goog.DEBUG)?(function (){var k__62654__auto__ = new cljs.core.Keyword(null,"get-file-content","get-file-content",643543160);
console.time(k__62654__auto__);

var res__62655__auto__ = frontend.handler.export$.common.get_file_contents_with_suffix(repo);
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
})():frontend.handler.export$.common.get_file_contents_with_suffix(repo));
if(cljs.core.truth_(temp__5804__auto__)){
var files = temp__5804__auto__;
var files__$1 = frontend.handler.export$.text.export_files_as_markdown(files,null);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_markdown_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(zip_file_name,files__$1,repo),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5804__auto____$1 = goog.dom.getElement("export-as-markdown");
if(cljs.core.truth_(temp__5804__auto____$1)){
var anchor = temp__5804__auto____$1;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.export.text.js.map
