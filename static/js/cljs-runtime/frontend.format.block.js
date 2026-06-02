goog.provide('frontend.format.block');
/**
 * Wrapper around logseq.graph-parser.block/extract-blocks that adds in system state
 * and handles unexpected failure.
 */
frontend.format.block.extract_blocks = (function frontend$format$block$extract_blocks(blocks,content,format,p__102328){
var map__102329 = p__102328;
var map__102329__$1 = cljs.core.__destructure_map(map__102329);
var with_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102329__$1,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),true);
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102329__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
try{return logseq.graph_parser.block.extract_blocks(blocks,content,with_id_QMARK_,format,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-config","user-config",-1138679827),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),frontend.config.get_block_pattern(format),new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__102331 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__102331) : frontend.db.get_db.call(null,G__102331));
})(),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter(),new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name], null));
}catch (e102330){var e = e102330;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.format.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),29], null)),e);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"Extract-blocks"], null)], null)], null));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("An unexpected error occurred during block extraction.",new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.PersistentVector.EMPTY;
}});
/**
 * Wrapper around logseq.graph-parser.block/page-name->map that adds in db
 */
frontend.format.block.page_name__GT_map = (function frontend$format$block$page_name__GT_map(var_args){
var G__102333 = arguments.length;
switch (G__102333) {
case 2:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (original_page_name,with_id_QMARK_){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3(original_page_name,with_id_QMARK_,true);
}));

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3 = (function (original_page_name,with_id_QMARK_,with_timestamp_QMARK_){
return logseq.graph_parser.block.page_name__GT_map(original_page_name,with_id_QMARK_,(function (){var G__102334 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__102334) : frontend.db.get_db.call(null,G__102334));
})(),with_timestamp_QMARK_,frontend.state.get_date_formatter());
}));

(frontend.format.block.page_name__GT_map.cljs$lang$maxFixedArity = 3);

frontend.format.block.normalize_as_percentage = (function frontend$format$block$normalize_as_percentage(block){
var G__102336 = block;
var G__102336__$1 = (((G__102336 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102336));
var G__102336__$2 = (((G__102336__$1 == null))?null:cljs.core.re_matches(/(-?\d+\.?\d*)%/,G__102336__$1));
var G__102336__$3 = (((G__102336__$2 == null))?null:cljs.core.second(G__102336__$2));
if((G__102336__$3 == null)){
return null;
} else {
return (function (p1__102335_SHARP_){
return (p1__102335_SHARP_ / (100));
})(G__102336__$3);
}
});
frontend.format.block.normalize_as_date = (function frontend$format$block$normalize_as_date(block){
var G__102337 = block;
var G__102337__$1 = (((G__102337 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102337));
var G__102337__$2 = (((G__102337__$1 == null))?null:frontend.date.normalize_date(G__102337__$1));
if((G__102337__$2 == null)){
return null;
} else {
return cljs_time.format.unparse(frontend.date.custom_formatter,G__102337__$2);
}
});
/**
 * Normalizes supported formats such as dates and percentages.
 * Be careful, this function may harm query sort performance!
 * - nlp-date? - Enable NLP parsing on date items.
 *     Requires heavy computation (see `normalize-as-date` for details)
 */
frontend.format.block.normalize_block = (function frontend$format$block$normalize_block(block,nlp_date_QMARK_){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102338_SHARP_){
var G__102339 = ((cljs.core.set_QMARK_(block))?cljs.core.first(block):block);
return (p1__102338_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__102338_SHARP_.cljs$core$IFn$_invoke$arity$1(G__102339) : p1__102338_SHARP_.call(null,G__102339));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.format.block.normalize_as_percentage,(cljs.core.truth_(nlp_date_QMARK_)?frontend.format.block.normalize_as_date:null),cljs.core.identity], null)))));
});
frontend.format.block.parse_block = (function frontend$format$block$parse_block(var_args){
var G__102341 = arguments.length;
switch (G__102341) {
case 1:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2 = (function (p__102342,p__102343){
var map__102344 = p__102342;
var map__102344__$1 = cljs.core.__destructure_map(map__102344);
var block = map__102344__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102344__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102344__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102344__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var map__102345 = p__102343;
var map__102345__$1 = cljs.core.__destructure_map(map__102345);
var with_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102345__$1,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),true);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var block__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var ast = frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content,format,null);
var blocks = frontend.format.block.extract_blocks(ast,content,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),with_id_QMARK_], null));
var new_block = cljs.core.first(blocks);
var block__$2 = (function (){var G__102346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,new_block], 0));
if((cljs.core.count(blocks) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102346,new cljs.core.Keyword("block","warning","block/warning",2131709542),new cljs.core.Keyword(null,"multiple-blocks","multiple-blocks",1235340805));
} else {
return G__102346;
}
})();
var block__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971)], 0));
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
} else {
return block__$3;
}
}
}));

(frontend.format.block.parse_block.cljs$lang$maxFixedArity = 2);

frontend.format.block.parse_title_and_body = (function frontend$format$block$parse_title_and_body(var_args){
var G__102348 = arguments.length;
switch (G__102348) {
case 1:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1 = (function (block){
if(cljs.core.map_QMARK_(block)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block))], 0));
} else {
return null;
}
}));

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4 = (function (block_uuid,format,pre_block_QMARK_,content){
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var content__$1 = (cljs.core.truth_(pre_block_QMARK_)?content:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format))," ",clojure.string.triml(content)].join(''));
var temp__5802__auto__ = frontend.state.get_block_ast(block_uuid,content__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var result = temp__5802__auto__;
return result;
} else {
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content__$1,format,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var title = ((logseq.graph_parser.block.heading_block_QMARK_(cljs.core.first(ast)))?new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(ast))):null);
var body = cljs.core.vec((cljs.core.truth_(title)?cljs.core.rest(ast):ast));
var body__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.properties_ast_QMARK_,body);
var result = (function (){var G__102349 = ((cljs.core.seq(body__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","body","block/body",2004112880),body__$1], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102349,new cljs.core.Keyword("block","title","block/title",710445684),title);
} else {
return G__102349;
}
})();
frontend.state.add_block_ast_cache_BANG_(block_uuid,content__$1,result);

return result;
}
}
}));

(frontend.format.block.parse_title_and_body.cljs$lang$maxFixedArity = 4);

frontend.format.block.macro_subs = (function frontend$format$block$macro_subs(macro_content,arguments$){
var s = macro_content;
var args = arguments$;
var n = (1);
while(true){
if(cljs.core.seq(args)){
var G__102366 = clojure.string.replace(s,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),cljs.core.first(args));
var G__102367 = cljs.core.rest(args);
var G__102368 = (n + (1));
s = G__102366;
args = G__102367;
n = G__102368;
continue;
} else {
return s;
}
break;
}
});
frontend.format.block.break_line_paragraph_QMARK_ = (function frontend$format$block$break_line_paragraph_QMARK_(p__102351){
var vec__102352 = p__102351;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102352,(0),null);
var break_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102352,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")) && (cljs.core.every_QMARK_((function (p1__102350_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__102350_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null));
}),break_lines)));
});
frontend.format.block.trim_paragraph_special_break_lines = (function frontend$format$block$trim_paragraph_special_break_lines(ast){
var vec__102357 = ast;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102357,(0),null);
var paras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102357,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")){
var indexed_paras = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,paras);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102356_SHARP_){
return cljs.core.last(p1__102356_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__102355_SHARP_){
var vec__102360 = p1__102355_SHARP_;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102360,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102360,(1),null);
return (!((((index > (0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Timestamp",null,"Macro",null], null), null),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paras,(index - (1)))))))))));
}),indexed_paras))], null);
} else {
return ast;
}
});
frontend.format.block.trim_break_lines_BANG_ = (function frontend$format$block$trim_break_lines_BANG_(ast){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.format.block.break_line_paragraph_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.format.block.trim_paragraph_special_break_lines,ast));
});

//# sourceMappingURL=frontend.format.block.js.map
