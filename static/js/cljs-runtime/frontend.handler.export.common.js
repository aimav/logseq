goog.provide('frontend.handler.export$.common');
/**
 * dynamic var, state used for exporting
 */
frontend.handler.export$.common._STAR_state_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1),new cljs.core.Keyword(null,"outside-em-symbol","outside-em-symbol",478063381),null,new cljs.core.Keyword(null,"indent-after-break-line?","indent-after-break-line?",-736379041),false,new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-level","current-level",-11925890),(1),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476),false,new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858),false], null),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block-is-first-heading-block?","current-block-is-first-heading-block?",2033274655),true], null),new cljs.core.Keyword(null,"export-options","export-options",672321679),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),"dashes",new cljs.core.Keyword(null,"remove-page-ref-brackets?","remove-page-ref-brackets?",-276534720),false,new cljs.core.Keyword(null,"remove-emphasis?","remove-emphasis?",-1751965539),false,new cljs.core.Keyword(null,"remove-tags?","remove-tags?",690905372),false,new cljs.core.Keyword(null,"remove-properties?","remove-properties?",1053410556),true,new cljs.core.Keyword(null,"keep-only-level<=N","keep-only-level<=N",-1010734857),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"newline-after-block","newline-after-block",137428571),false], null)], null);
frontend.handler.export$.common.get_blocks_contents = (function frontend$handler$export$common$get_blocks_contents(repo,root_block_uuid){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,root_block_uuid) : frontend.db.get_block_and_children.call(null,repo,root_block_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_block_uuid)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.common.get_page_content = (function frontend$handler$export$common$get_page_content(page){
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page.call(null,page))));
});
frontend.handler.export$.common.root_block_uuids__GT_content = (function frontend$handler$export$common$root_block_uuids__GT_content(repo,root_block_uuids){
var contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__104643_SHARP_){
return frontend.handler.export$.common.get_blocks_contents(repo,p1__104643_SHARP_);
}),root_block_uuids);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim_newline,contents));
});

frontend.handler.export$.common.block_uuid__GT_ast = (function frontend$handler$export$common$block_uuid__GT_ast(block_uuid){
var block = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1(block_uuid) : frontend.db.get_block_by_uuid.call(null,block_uuid)));
var content = frontend.modules.file.core.tree__GT_file_content(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
if(cljs.core.truth_(content)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.Properties_block_ast_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.remove_block_ast_pos,logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)))));
} else {
return null;
}
});
frontend.handler.export$.common.block_uuid__GT_ast_with_children = (function frontend$handler$export$common$block_uuid__GT_ast_with_children(block_uuid){
var content = frontend.handler.export$.common.get_blocks_contents(frontend.state.get_current_repo(),block_uuid);
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
if(cljs.core.truth_(content)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.Properties_block_ast_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.remove_block_ast_pos,logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)))));
} else {
return null;
}
});
frontend.handler.export$.common.page_name__GT_ast = (function frontend$handler$export$common$page_name__GT_ast(page_name){
var content = frontend.handler.export$.common.get_page_content(page_name);
var format = new cljs.core.Keyword(null,"markdown","markdown",1227225089);
if(cljs.core.truth_(content)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.Properties_block_ast_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.remove_block_ast_pos,logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)))));
} else {
return null;
}
});
frontend.handler.export$.common.update_level_in_block_ast_coll = (function frontend$handler$export$common$update_level_in_block_ast_coll(block_ast_coll,origin_level){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_ast){
var vec__104645 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104645,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104645,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ast_type,"Heading")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"level","level",1290497552),(function (p1__104644_SHARP_){
return ((p1__104644_SHARP_ - (1)) + origin_level);
}))], null);
} else {
return block_ast;
}
}),block_ast_coll);
});
frontend.handler.export$.common.plain_indent_inline_ast = (function frontend$handler$export$common$plain_indent_inline_ast(var_args){
var args__5772__auto__ = [];
var len__5766__auto___104990 = arguments.length;
var i__5767__auto___104991 = (0);
while(true){
if((i__5767__auto___104991 < len__5766__auto___104990)){
args__5772__auto__.push((arguments[i__5767__auto___104991]));

var G__104992 = (i__5767__auto___104991 + (1));
i__5767__auto___104991 = G__104992;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.handler.export$.common.plain_indent_inline_ast.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.handler.export$.common.plain_indent_inline_ast.cljs$core$IFn$_invoke$arity$variadic = (function (level,p__104650){
var map__104651 = p__104650;
var map__104651__$1 = cljs.core.__destructure_map(map__104651);
var spaces = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__104651__$1,new cljs.core.Keyword(null,"spaces","spaces",365984563),"  ");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces)].join('')], null);
}));

(frontend.handler.export$.common.plain_indent_inline_ast.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.export$.common.plain_indent_inline_ast.cljs$lang$applyTo = (function (seq104648){
var G__104649 = cljs.core.first(seq104648);
var seq104648__$1 = cljs.core.next(seq104648);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104649,seq104648__$1);
}));

frontend.handler.export$.common.mk_paragraph_ast = (function frontend$handler$export$common$mk_paragraph_ast(inline_coll,meta){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",inline_coll], null),meta);
});
frontend.handler.export$.common.priority__GT_string = (function frontend$handler$export$common$priority__GT_string(priority){
return ["[#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority),"]"].join('');
});
frontend.handler.export$.common.repetition_to_string = (function frontend$handler$export$common$repetition_to_string(p__104652){
var vec__104653 = p__104652;
var vec__104656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104653,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104656,(0),null);
var vec__104659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104653,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104659,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104653,(2),null);
var kind__$1 = (function (){var G__104662 = kind;
switch (G__104662) {
case "Dotted":
return ".";

break;
case "Plus":
return "+";

break;
case "DoublePlus":
return "++";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104662)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(duration)))].join('');
});
frontend.handler.export$.common.timestamp_to_string = (function frontend$handler$export$common$timestamp_to_string(p__104663){
var map__104664 = p__104663;
var map__104664__$1 = cljs.core.__destructure_map(map__104664);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104664__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104664__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104664__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104664__$1,new cljs.core.Keyword(null,"wday","wday",-543142502));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104664__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var map__104665 = date;
var map__104665__$1 = cljs.core.__destructure_map(map__104665);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104665__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104665__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104665__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__104666 = time;
var map__104666__$1 = cljs.core.__destructure_map(map__104666);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104666__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104666__$1,new cljs.core.Keyword(null,"min","min",444991522));
var vec__104667 = (cljs.core.truth_(active)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null));
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104667,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104667,(1),null);
var repetition__$1 = (cljs.core.truth_(repetition)?[" ",frontend.handler.export$.common.repetition_to_string(repetition)].join(''):"");
var hour__$1 = (cljs.core.truth_(hour)?frontend.util.zero_pad(hour):null);
var min__$1 = (cljs.core.truth_(min)?frontend.util.zero_pad(min):null);
var time__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = hour__$1;
if(cljs.core.truth_(and__5041__auto__)){
return min__$1;
} else {
return and__5041__auto__;
}
})())?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s:%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1,min__$1], 0)):(cljs.core.truth_(hour__$1)?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1], 0)):""
));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s%s-%s-%s %s%s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([open,cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),frontend.util.zero_pad(month),frontend.util.zero_pad(day),wday,time__$1,repetition__$1,close], 0));
});
frontend.handler.export$.common.hashtag_value__GT_string = (function frontend$handler$export$common$hashtag_value__GT_string(inline_coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inline){
var vec__104670 = inline;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104670,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104670,(1),null);
var G__104673 = ast_type;
switch (G__104673) {
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(ast_content);

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(ast_content);

break;
case "Plain":
return ast_content;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104673)].join('')));

}
}),inline_coll));
});
frontend.handler.export$.common.get_file_contents = (function frontend$handler$export$common$get_file_contents(repo){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__104674){
var vec__104675 = p__104674;
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104675,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,(frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(file_path) : frontend.db.get_file.call(null,file_path))], null);
}),(function (){var G__104678 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null)], null)], null);
var G__104679 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__104678,G__104679) : datascript.core.q.call(null,G__104678,G__104679));
})());
});
frontend.handler.export$.common.get_md_file_contents = (function frontend$handler$export$common$get_md_file_contents(repo){
return cljs.core.filterv((function (p__104680){
var vec__104681 = p__104680;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104681,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104681,(1),null);
var path__$1 = clojure.string.lower_case(path);
return cljs.core.re_find(/\.(?:md|markdown)$/,path__$1);
}),frontend.handler.export$.common.get_file_contents(repo));
});
frontend.handler.export$.common.get_file_contents_with_suffix = (function frontend$handler$export$common$get_file_contents_with_suffix(repo){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var md_files = frontend.handler.export$.common.get_md_file_contents(repo);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__104684){
var vec__104685 = p__104684;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104685,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104685,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"names","names",-1943074658),(function (){var G__104688 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null)], null);
var G__104689 = db;
var G__104690 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__104688,G__104689,G__104690) : datascript.core.q.call(null,G__104688,G__104689,G__104690));
})(),new cljs.core.Keyword(null,"format","format",-1306924766),logseq.graph_parser.util.get_format(path)], null);
}),md_files);
});
frontend.handler.export$.common.replace_block_reference_in_heading = (function frontend$handler$export$common$replace_block_reference_in_heading(p__104692){
var map__104693 = p__104692;
var map__104693__$1 = cljs.core.__destructure_map(map__104693);
var ast_content = map__104693__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104693__$1,new cljs.core.Keyword(null,"title","title",636505583));
var inline_coll = title;
var inline_coll_STAR_ = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__104691_SHARP_){
try{if(((cljs.core.vector_QMARK_(p1__104691_SHARP_)) && ((cljs.core.count(p1__104691_SHARP_) === 2)))){
try{var p1__104691_SHARP__0__104695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104691_SHARP_,(0));
if((p1__104691_SHARP__0__104695 === "Link")){
try{var p1__104691_SHARP__1__104696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104691_SHARP_,(1));
if((((!((p1__104691_SHARP__1__104696 == null))))?(((((p1__104691_SHARP__1__104696.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === p1__104691_SHARP__1__104696.cljs$core$ILookup$))))?true:(((!p1__104691_SHARP__1__104696.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104691_SHARP__1__104696):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104691_SHARP__1__104696))){
try{var p1__104691_SHARP__1__104696_url__104699 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__104691_SHARP__1__104696,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(p1__104691_SHARP__1__104696_url__104699)) && ((cljs.core.count(p1__104691_SHARP__1__104696_url__104699) === 2)))){
try{var p1__104691_SHARP__1__104696_url__104699_0__104700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104691_SHARP__1__104696_url__104699,(0));
if((p1__104691_SHARP__1__104696_url__104699_0__104700 === "Block_ref")){
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104691_SHARP__1__104696_url__104699,(1));
var vec__104708 = frontend.handler.export$.common.block_uuid__GT_ast(cljs.core.uuid(block_uuid));
var vec__104711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104708,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104711,(0),null);
var map__104714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104711,(1),null);
var map__104714__$1 = cljs.core.__destructure_map(map__104714);
var title_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104714__$1,new cljs.core.Keyword(null,"title","title",636505583));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),true));

return title_inline_coll;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104707){if((e104707 instanceof Error)){
var e__103681__auto__ = e104707;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104707;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104706){if((e104706 instanceof Error)){
var e__103681__auto__ = e104706;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104704){if((e104704 instanceof Error)){
var e__103681__auto__ = e104704;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104703){if((e104703 instanceof Error)){
var e__103681__auto__ = e104703;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104702){if((e104702 instanceof Error)){
var e__103681__auto__ = e104702;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104691_SHARP_], null);
} else {
throw e__103681__auto__;
}
} else {
throw e104702;

}
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),inline_coll_STAR_);
});
frontend.handler.export$.common.replace_block_reference_in_paragraph = (function frontend$handler$export$common$replace_block_reference_in_paragraph(inline_coll){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__104715_SHARP_){
try{if(((cljs.core.vector_QMARK_(p1__104715_SHARP_)) && ((cljs.core.count(p1__104715_SHARP_) === 2)))){
try{var p1__104715_SHARP__0__104717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104715_SHARP_,(0));
if((p1__104715_SHARP__0__104717 === "Link")){
try{var p1__104715_SHARP__1__104718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104715_SHARP_,(1));
if((((!((p1__104715_SHARP__1__104718 == null))))?(((((p1__104715_SHARP__1__104718.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === p1__104715_SHARP__1__104718.cljs$core$ILookup$))))?true:(((!p1__104715_SHARP__1__104718.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104715_SHARP__1__104718):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104715_SHARP__1__104718))){
try{var p1__104715_SHARP__1__104718_url__104721 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__104715_SHARP__1__104718,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(p1__104715_SHARP__1__104718_url__104721)) && ((cljs.core.count(p1__104715_SHARP__1__104718_url__104721) === 2)))){
try{var p1__104715_SHARP__1__104718_url__104721_0__104722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104715_SHARP__1__104718_url__104721,(0));
if((p1__104715_SHARP__1__104718_url__104721_0__104722 === "Block_ref")){
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104715_SHARP__1__104718_url__104721,(1));
var vec__104730 = frontend.handler.export$.common.block_uuid__GT_ast(cljs.core.uuid(block_uuid));
var vec__104733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104730,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104733,(0),null);
var map__104736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104733,(1),null);
var map__104736__$1 = cljs.core.__destructure_map(map__104736);
var title_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104736__$1,new cljs.core.Keyword(null,"title","title",636505583));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),true));

return title_inline_coll;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104729){if((e104729 instanceof Error)){
var e__103681__auto__ = e104729;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104728){if((e104728 instanceof Error)){
var e__103681__auto__ = e104728;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104726){if((e104726 instanceof Error)){
var e__103681__auto__ = e104726;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104726;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104725){if((e104725 instanceof Error)){
var e__103681__auto__ = e104725;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104725;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104724){if((e104724 instanceof Error)){
var e__103681__auto__ = e104724;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104715_SHARP_], null);
} else {
throw e__103681__auto__;
}
} else {
throw e104724;

}
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_coll], 0)));
});
frontend.handler.export$.common.replace_block_reference_in_list = (function frontend$handler$export$common$replace_block_reference_in_list(list_items){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__104737){
var map__104738 = p__104737;
var map__104738__$1 = cljs.core.__destructure_map(map__104738);
var item = map__104738__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104738__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104738__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.replace_block_references,block_ast_coll),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common.replace_block_reference_in_list.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.replace_block_reference_in_list.cljs$core$IFn$_invoke$arity$1(sub_items) : frontend.handler.export$.common.replace_block_reference_in_list.call(null,sub_items))], 0));
}),list_items);
});
frontend.handler.export$.common.replace_block_reference_in_quote = (function frontend$handler$export$common$replace_block_reference_in_quote(block_ast_coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.replace_block_references,block_ast_coll);
});
frontend.handler.export$.common.replace_block_reference_in_table = (function frontend$handler$export$common$replace_block_reference_in_table(p__104741){
var map__104742 = p__104741;
var map__104742__$1 = cljs.core.__destructure_map(map__104742);
var table = map__104742__$1;
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104742__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104742__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var header_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__104739_SHARP_){
try{if(((cljs.core.vector_QMARK_(p1__104739_SHARP_)) && ((cljs.core.count(p1__104739_SHARP_) === 2)))){
try{var p1__104739_SHARP__0__104744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104739_SHARP_,(0));
if((p1__104739_SHARP__0__104744 === "Link")){
try{var p1__104739_SHARP__1__104745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104739_SHARP_,(1));
if((((!((p1__104739_SHARP__1__104745 == null))))?(((((p1__104739_SHARP__1__104745.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === p1__104739_SHARP__1__104745.cljs$core$ILookup$))))?true:(((!p1__104739_SHARP__1__104745.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104739_SHARP__1__104745):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104739_SHARP__1__104745))){
try{var p1__104739_SHARP__1__104745_url__104748 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__104739_SHARP__1__104745,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(p1__104739_SHARP__1__104745_url__104748)) && ((cljs.core.count(p1__104739_SHARP__1__104745_url__104748) === 2)))){
try{var p1__104739_SHARP__1__104745_url__104748_0__104749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104739_SHARP__1__104745_url__104748,(0));
if((p1__104739_SHARP__1__104745_url__104748_0__104749 === "Block_ref")){
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104739_SHARP__1__104745_url__104748,(1));
var vec__104757 = frontend.handler.export$.common.block_uuid__GT_ast(cljs.core.uuid(block_uuid));
var vec__104760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104757,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104760,(0),null);
var map__104763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104760,(1),null);
var map__104763__$1 = cljs.core.__destructure_map(map__104763);
var title_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104763__$1,new cljs.core.Keyword(null,"title","title",636505583));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),true));

return title_inline_coll;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104756){if((e104756 instanceof Error)){
var e__103681__auto__ = e104756;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104755){if((e104755 instanceof Error)){
var e__103681__auto__ = e104755;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104753){if((e104753 instanceof Error)){
var e__103681__auto__ = e104753;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104753;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104752){if((e104752 instanceof Error)){
var e__103681__auto__ = e104752;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104752;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104751){if((e104751 instanceof Error)){
var e__103681__auto__ = e104751;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104739_SHARP_], null);
} else {
throw e__103681__auto__;
}
} else {
throw e104751;

}
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)));
}),header);
var groups_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__104740_SHARP_){
try{if(((cljs.core.vector_QMARK_(p1__104740_SHARP_)) && ((cljs.core.count(p1__104740_SHARP_) === 2)))){
try{var p1__104740_SHARP__0__104765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104740_SHARP_,(0));
if((p1__104740_SHARP__0__104765 === "Link")){
try{var p1__104740_SHARP__1__104766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104740_SHARP_,(1));
if((((!((p1__104740_SHARP__1__104766 == null))))?(((((p1__104740_SHARP__1__104766.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === p1__104740_SHARP__1__104766.cljs$core$ILookup$))))?true:(((!p1__104740_SHARP__1__104766.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104740_SHARP__1__104766):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,p1__104740_SHARP__1__104766))){
try{var p1__104740_SHARP__1__104766_url__104769 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__104740_SHARP__1__104766,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(p1__104740_SHARP__1__104766_url__104769)) && ((cljs.core.count(p1__104740_SHARP__1__104766_url__104769) === 2)))){
try{var p1__104740_SHARP__1__104766_url__104769_0__104770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104740_SHARP__1__104766_url__104769,(0));
if((p1__104740_SHARP__1__104766_url__104769_0__104770 === "Block_ref")){
var block_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__104740_SHARP__1__104766_url__104769,(1));
var vec__104778 = frontend.handler.export$.common.block_uuid__GT_ast(cljs.core.uuid(block_uuid));
var vec__104781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104778,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104781,(0),null);
var map__104784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104781,(1),null);
var map__104784__$1 = cljs.core.__destructure_map(map__104784);
var title_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104784__$1,new cljs.core.Keyword(null,"title","title",636505583));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),true));

return title_inline_coll;
} else {
throw cljs.core.match.backtrack;

}
}catch (e104777){if((e104777 instanceof Error)){
var e__103681__auto__ = e104777;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104776){if((e104776 instanceof Error)){
var e__103681__auto__ = e104776;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104776;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104774){if((e104774 instanceof Error)){
var e__103681__auto__ = e104774;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104773){if((e104773 instanceof Error)){
var e__103681__auto__ = e104773;
if((e__103681__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__103681__auto__;
}
} else {
throw e104773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e104772){if((e104772 instanceof Error)){
var e__103681__auto__ = e104772;
if((e__103681__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104740_SHARP_], null);
} else {
throw e__103681__auto__;
}
} else {
throw e104772;

}
}}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)));
}),row);
}),group);
}),groups);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table,new cljs.core.Keyword(null,"header","header",119441134),header_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"groups","groups",-136896102),groups_STAR_], 0));
});
frontend.handler.export$.common.replace_block_references = (function frontend$handler$export$common$replace_block_references(block_ast){
var vec__104785 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104785,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104785,(1),null);
var G__104788 = ast_type;
switch (G__104788) {
case "Heading":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common.replace_block_reference_in_heading(ast_content)], null);

break;
case "Paragraph":
return frontend.handler.export$.common.mk_paragraph_ast(frontend.handler.export$.common.replace_block_reference_in_paragraph(ast_content),cljs.core.meta(block_ast));

break;
case "List":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common.replace_block_reference_in_list(ast_content)], null);

break;
case "Quote":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common.replace_block_reference_in_quote(ast_content)], null);

break;
case "Table":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_type,frontend.handler.export$.common.replace_block_reference_in_table(ast_content)], null);

break;
default:
return block_ast;

}
});
frontend.handler.export$.common.replace_block_references_until_stable = (function frontend$handler$export$common$replace_block_references_until_stable(block_ast){
var _STAR_state_STAR__orig_val__104789 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__104790 = frontend.handler.export$.common._STAR_state_STAR_;
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__104790);

try{var block_ast__$1 = block_ast;
while(true){
var block_ast_STAR_ = frontend.handler.export$.common.replace_block_references(block_ast__$1);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null)))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block-ref-replaced?","block-ref-replaced?",-939904476)], null),false));

var G__104996 = block_ast_STAR_;
block_ast__$1 = G__104996;
continue;
} else {
return block_ast_STAR_;
}
break;
}
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__104789);
}});
frontend.handler.export$.common.replace_block_embeds_helper = (function frontend$handler$export$common$replace_block_embeds_helper(current_paragraph_inlines,block_uuid,blocks_tcoll,level){
var block_uuid_STAR_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(block_uuid,(2),(cljs.core.count(block_uuid) - (2)));
var ast_coll = frontend.handler.export$.common.update_level_in_block_ast_coll(frontend.handler.export$.common.block_uuid__GT_ast_with_children(cljs.core.uuid(block_uuid_STAR_)),level);
var G__104792 = blocks_tcoll;
var G__104792__$1 = ((cljs.core.seq(current_paragraph_inlines))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__104792,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines], null)):G__104792);
return (function (p1__104791_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,p1__104791_SHARP_,ast_coll);
})(G__104792__$1);

});
frontend.handler.export$.common.replace_page_embeds_helper = (function frontend$handler$export$common$replace_page_embeds_helper(current_paragraph_inlines,page_name,blocks_tcoll,level){
var page_name_STAR_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(page_name,(2),(cljs.core.count(page_name) - (2)));
var ast_coll = frontend.handler.export$.common.update_level_in_block_ast_coll(frontend.handler.export$.common.page_name__GT_ast(page_name_STAR_),level);
var G__104794 = blocks_tcoll;
var G__104794__$1 = ((cljs.core.seq(current_paragraph_inlines))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__104794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines], null)):G__104794);
return (function (p1__104793_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,p1__104793_SHARP_,ast_coll);
})(G__104794__$1);

});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_heading = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds_in_heading(p__104795){
var map__104796 = p__104795;
var map__104796__$1 = cljs.core.__destructure_map(map__104796);
var ast_content = map__104796__$1;
var inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104796__$1,new cljs.core.Keyword(null,"title","title",636505583));
var origin_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104796__$1,new cljs.core.Keyword(null,"level","level",1290497552));
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null),origin_level));

if(cljs.core.empty_QMARK_(inline_coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",ast_content], null)], null);
} else {
var G__104800 = inline_coll;
var vec__104801 = G__104800;
var seq__104802 = cljs.core.seq(vec__104801);
var first__104803 = cljs.core.first(seq__104802);
var seq__104802__$1 = cljs.core.next(seq__104802);
var inline = first__104803;
var other_inlines = seq__104802__$1;
var heading_exist_QMARK_ = false;
var current_paragraph_inlines = cljs.core.PersistentVector.EMPTY;
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__104800__$1 = G__104800;
var heading_exist_QMARK___$1 = heading_exist_QMARK_;
var current_paragraph_inlines__$1 = current_paragraph_inlines;
var r__$1 = r;
while(true){
var vec__104817 = G__104800__$1;
var seq__104818 = cljs.core.seq(vec__104817);
var first__104819 = cljs.core.first(seq__104818);
var seq__104818__$1 = cljs.core.next(seq__104818);
var inline__$1 = first__104819;
var other_inlines__$1 = seq__104818__$1;
var heading_exist_QMARK___$2 = heading_exist_QMARK___$1;
var current_paragraph_inlines__$2 = current_paragraph_inlines__$1;
var r__$2 = r__$1;
if(cljs.core.not(inline__$1)){
return cljs.core.persistent_BANG_(((cljs.core.seq(current_paragraph_inlines__$2))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,((heading_exist_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),current_paragraph_inlines__$2)], null))):r__$2));
} else {
if(((cljs.core.vector_QMARK_(inline__$1)) && ((cljs.core.count(inline__$1) === 2)))){
var inline_0__104821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(0));
if((inline_0__104821 === "Macro")){
var inline_1__104822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(1));
if((((!((inline_1__104822 == null))))?(((((inline_1__104822.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === inline_1__104822.cljs$core$ILookup$))))?true:(((!inline_1__104822.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__104822):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__104822))){
var inline_1__104822_arguments__104826 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__104822,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(inline_1__104822_arguments__104826)) && ((cljs.core.count(inline_1__104822_arguments__104826) === 1)))){
var inline_1__104822_name__104827 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__104822,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((inline_1__104822_name__104827 === "embed")){
var block_uuid_or_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__104822_arguments__104826,(0));
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"((")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"))")))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__104997 = other_inlines__$1;
var G__104998 = true;
var G__104999 = cljs.core.PersistentVector.EMPTY;
var G__105000 = frontend.handler.export$.common.replace_block_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,r__$2,origin_level);
G__104800__$1 = G__104997;
heading_exist_QMARK___$1 = G__104998;
current_paragraph_inlines__$1 = G__104999;
r__$1 = G__105000;
continue;
} else {
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"[[")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"]]")))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__105001 = other_inlines__$1;
var G__105002 = true;
var G__105003 = cljs.core.PersistentVector.EMPTY;
var G__105004 = frontend.handler.export$.common.replace_page_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,r__$2,origin_level);
G__104800__$1 = G__105001;
heading_exist_QMARK___$1 = G__105002;
current_paragraph_inlines__$1 = G__105003;
r__$1 = G__105004;
continue;
} else {
var G__105005 = other_inlines__$1;
var G__105006 = heading_exist_QMARK___$2;
var G__105007 = current_paragraph_inlines__$2;
var G__105008 = r__$2;
G__104800__$1 = G__105005;
heading_exist_QMARK___$1 = G__105006;
current_paragraph_inlines__$1 = G__105007;
r__$1 = G__105008;
continue;

}
}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__105009 = other_inlines__$1;
var G__105010 = heading_exist_QMARK___$2;
var G__105011 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105012 = r__$2;
G__104800__$1 = G__105009;
heading_exist_QMARK___$1 = G__105010;
current_paragraph_inlines__$1 = G__105011;
r__$1 = G__105012;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__105013 = other_inlines__$1;
var G__105014 = heading_exist_QMARK___$2;
var G__105015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105016 = r__$2;
G__104800__$1 = G__105013;
heading_exist_QMARK___$1 = G__105014;
current_paragraph_inlines__$1 = G__105015;
r__$1 = G__105016;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__105017 = other_inlines__$1;
var G__105018 = heading_exist_QMARK___$2;
var G__105019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105020 = r__$2;
G__104800__$1 = G__105017;
heading_exist_QMARK___$1 = G__105018;
current_paragraph_inlines__$1 = G__105019;
r__$1 = G__105020;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__105021 = other_inlines__$1;
var G__105022 = heading_exist_QMARK___$2;
var G__105023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105024 = r__$2;
G__104800__$1 = G__105021;
heading_exist_QMARK___$1 = G__105022;
current_paragraph_inlines__$1 = G__105023;
r__$1 = G__105024;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((((cljs.core.empty_QMARK_(current_paragraph_inlines__$2)) && (heading_exist_QMARK___$2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(origin_level)):current_paragraph_inlines__$2);
var G__105025 = other_inlines__$1;
var G__105026 = heading_exist_QMARK___$2;
var G__105027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105028 = r__$2;
G__104800__$1 = G__105025;
heading_exist_QMARK___$1 = G__105026;
current_paragraph_inlines__$1 = G__105027;
r__$1 = G__105028;
continue;

}
}
break;
}
}
});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_paragraph = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds_in_paragraph(inline_coll,meta){
var current_level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
var G__104833 = inline_coll;
var vec__104834 = G__104833;
var seq__104835 = cljs.core.seq(vec__104834);
var first__104836 = cljs.core.first(seq__104835);
var seq__104835__$1 = cljs.core.next(seq__104835);
var inline = first__104836;
var other_inlines = seq__104835__$1;
var current_paragraph_inlines = cljs.core.PersistentVector.EMPTY;
var just_after_embed_QMARK_ = false;
var blocks = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__104833__$1 = G__104833;
var current_paragraph_inlines__$1 = current_paragraph_inlines;
var just_after_embed_QMARK___$1 = just_after_embed_QMARK_;
var blocks__$1 = blocks;
while(true){
var vec__104853 = G__104833__$1;
var seq__104854 = cljs.core.seq(vec__104853);
var first__104855 = cljs.core.first(seq__104854);
var seq__104854__$1 = cljs.core.next(seq__104854);
var inline__$1 = first__104855;
var other_inlines__$1 = seq__104854__$1;
var current_paragraph_inlines__$2 = current_paragraph_inlines__$1;
var just_after_embed_QMARK___$2 = just_after_embed_QMARK___$1;
var blocks__$2 = blocks__$1;
if(cljs.core.not(inline__$1)){
var vec__104856 = cljs.core.persistent_BANG_(((cljs.core.seq(current_paragraph_inlines__$2))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",current_paragraph_inlines__$2], null)):blocks__$2));
var seq__104857 = cljs.core.seq(vec__104856);
var first__104858 = cljs.core.first(seq__104857);
var seq__104857__$1 = cljs.core.next(seq__104857);
var first_block = first__104858;
var other_blocks = seq__104857__$1;
if(cljs.core.truth_(first_block)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.with_meta(first_block,meta),other_blocks);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
if(((cljs.core.vector_QMARK_(inline__$1)) && ((cljs.core.count(inline__$1) === 2)))){
var inline_0__104860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(0));
if((inline_0__104860 === "Macro")){
var inline_1__104861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline__$1,(1));
if((((!((inline_1__104861 == null))))?(((((inline_1__104861.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === inline_1__104861.cljs$core$ILookup$))))?true:(((!inline_1__104861.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__104861):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inline_1__104861))){
var inline_1__104861_arguments__104865 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__104861,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((cljs.core.vector_QMARK_(inline_1__104861_arguments__104865)) && ((cljs.core.count(inline_1__104861_arguments__104865) === 1)))){
var inline_1__104861_name__104866 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inline_1__104861,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((inline_1__104861_name__104866 === "embed")){
var block_uuid_or_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inline_1__104861_arguments__104865,(0));
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"((")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"))")))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__105029 = other_inlines__$1;
var G__105030 = cljs.core.PersistentVector.EMPTY;
var G__105031 = true;
var G__105032 = frontend.handler.export$.common.replace_block_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,blocks__$2,current_level);
G__104833__$1 = G__105029;
current_paragraph_inlines__$1 = G__105030;
just_after_embed_QMARK___$1 = G__105031;
blocks__$1 = G__105032;
continue;
} else {
if(((clojure.string.starts_with_QMARK_(block_uuid_or_page_name,"[[")) && (clojure.string.ends_with_QMARK_(block_uuid_or_page_name,"]]")))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),true));

var G__105033 = other_inlines__$1;
var G__105034 = cljs.core.PersistentVector.EMPTY;
var G__105035 = true;
var G__105036 = frontend.handler.export$.common.replace_page_embeds_helper(current_paragraph_inlines__$2,block_uuid_or_page_name,blocks__$2,current_level);
G__104833__$1 = G__105033;
current_paragraph_inlines__$1 = G__105034;
just_after_embed_QMARK___$1 = G__105035;
blocks__$1 = G__105036;
continue;
} else {
var G__105037 = other_inlines__$1;
var G__105038 = current_paragraph_inlines__$2;
var G__105039 = false;
var G__105040 = blocks__$2;
G__104833__$1 = G__105037;
current_paragraph_inlines__$1 = G__105038;
just_after_embed_QMARK___$1 = G__105039;
blocks__$1 = G__105040;
continue;

}
}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__105041 = other_inlines__$1;
var G__105042 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105043 = false;
var G__105044 = blocks__$2;
G__104833__$1 = G__105041;
current_paragraph_inlines__$1 = G__105042;
just_after_embed_QMARK___$1 = G__105043;
blocks__$1 = G__105044;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__105045 = other_inlines__$1;
var G__105046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105047 = false;
var G__105048 = blocks__$2;
G__104833__$1 = G__105045;
current_paragraph_inlines__$1 = G__105046;
just_after_embed_QMARK___$1 = G__105047;
blocks__$1 = G__105048;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__105049 = other_inlines__$1;
var G__105050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105051 = false;
var G__105052 = blocks__$2;
G__104833__$1 = G__105049;
current_paragraph_inlines__$1 = G__105050;
just_after_embed_QMARK___$1 = G__105051;
blocks__$1 = G__105052;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__105053 = other_inlines__$1;
var G__105054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105055 = false;
var G__105056 = blocks__$2;
G__104833__$1 = G__105053;
current_paragraph_inlines__$1 = G__105054;
just_after_embed_QMARK___$1 = G__105055;
blocks__$1 = G__105056;
continue;

}
} else {
var current_paragraph_inlines_STAR_ = ((just_after_embed_QMARK___$2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines__$2,frontend.handler.export$.common.plain_indent_inline_ast(current_level)):current_paragraph_inlines__$2);
var G__105057 = other_inlines__$1;
var G__105058 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_paragraph_inlines_STAR_,inline__$1);
var G__105059 = false;
var G__105060 = blocks__$2;
G__104833__$1 = G__105057;
current_paragraph_inlines__$1 = G__105058;
just_after_embed_QMARK___$1 = G__105059;
blocks__$1 = G__105060;
continue;

}
}
break;
}
});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list_helper = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds_in_list_helper(list_items){
var _STAR_state_STAR__orig_val__104869 = frontend.handler.export$.common._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__104870 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null),cljs.core.inc);
(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__temp_val__104870);

try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__104871){
var map__104872 = p__104871;
var map__104872__$1 = cljs.core.__destructure_map(map__104872);
var item = map__104872__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104872__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104872__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_ast_coll], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list_helper.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list_helper.cljs$core$IFn$_invoke$arity$1(sub_items) : frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list_helper.call(null,sub_items))], 0));
}),list_items);
}finally {(frontend.handler.export$.common._STAR_state_STAR_ = _STAR_state_STAR__orig_val__104869);
}});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds_in_list(list_items){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List",frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list_helper(list_items)], null)], null);
});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_quote = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds_in_quote(block_ast_coll){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Quote",cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_ast_coll], 0)))],null))],null));
});
frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds = (function frontend$handler$export$common$replace_block_AMPERSAND_page_embeds(block_ast){
var vec__104873 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104873,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104873,(1),null);
var G__104876 = ast_type;
switch (G__104876) {
case "Heading":
return frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_heading(ast_content);

break;
case "Paragraph":
return frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_paragraph(ast_content,cljs.core.meta(block_ast));

break;
case "List":
return frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_list(ast_content);

break;
case "Quote":
return frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds_in_quote(ast_content);

break;
case "Table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_ast], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_ast], null);

}
});
/**
 * add meta :embed-depth to the embed replaced block-ast,
 *   to avoid too deep block-ref&embed (or maybe it's a cycle)
 */
frontend.handler.export$.common.replace_block_AMPERSAND_page_reference_AMPERSAND_embed = (function frontend$handler$export$common$replace_block_AMPERSAND_page_reference_AMPERSAND_embed(block_ast_coll){
var block_ast_coll__$1 = block_ast_coll;
var result_block_ast_tcoll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var block_ast_coll_to_replace_references = cljs.core.PersistentVector.EMPTY;
var block_ast_coll_to_replace_embeds = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(block_ast_coll_to_replace_references)){
var vec__104887 = block_ast_coll_to_replace_references;
var seq__104888 = cljs.core.seq(vec__104887);
var first__104889 = cljs.core.first(seq__104888);
var seq__104888__$1 = cljs.core.next(seq__104888);
var block_ast_to_replace_ref = first__104889;
var other_block_asts_to_replace_ref = seq__104888__$1;
var embed_depth = new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(block_ast_to_replace_ref),(0));
var block_ast_replaced = cljs.core.with_meta(frontend.handler.export$.common.replace_block_references_until_stable(block_ast_to_replace_ref),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386),embed_depth], null));
if((embed_depth >= (5))){
var G__105062 = block_ast_coll__$1;
var G__105063 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_block_ast_tcoll,block_ast_replaced);
var G__105064 = cljs.core.vec(other_block_asts_to_replace_ref);
var G__105065 = block_ast_coll_to_replace_embeds;
block_ast_coll__$1 = G__105062;
result_block_ast_tcoll = G__105063;
block_ast_coll_to_replace_references = G__105064;
block_ast_coll_to_replace_embeds = G__105065;
continue;
} else {
var G__105066 = block_ast_coll__$1;
var G__105067 = result_block_ast_tcoll;
var G__105068 = cljs.core.vec(other_block_asts_to_replace_ref);
var G__105069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_embeds,block_ast_replaced);
block_ast_coll__$1 = G__105066;
result_block_ast_tcoll = G__105067;
block_ast_coll_to_replace_references = G__105068;
block_ast_coll_to_replace_embeds = G__105069;
continue;
}
} else {
if(cljs.core.seq(block_ast_coll_to_replace_embeds)){
var vec__104890 = block_ast_coll_to_replace_embeds;
var seq__104891 = cljs.core.seq(vec__104890);
var first__104892 = cljs.core.first(seq__104891);
var seq__104891__$1 = cljs.core.next(seq__104891);
var block_ast_to_replace_embed = first__104892;
var other_block_asts_to_replace_embed = seq__104891__$1;
var embed_depth = new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(block_ast_to_replace_embed),(0));
var block_ast_coll_replaced = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (block_ast_coll__$1,result_block_ast_tcoll,block_ast_coll_to_replace_references,block_ast_coll_to_replace_embeds,vec__104890,seq__104891,first__104892,seq__104891__$1,block_ast_to_replace_embed,other_block_asts_to_replace_embed,embed_depth){
return (function (p1__104877_SHARP_){
return cljs.core.with_meta(p1__104877_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"embed-depth","embed-depth",874062386),(embed_depth + (1))], null));
});})(block_ast_coll__$1,result_block_ast_tcoll,block_ast_coll_to_replace_references,block_ast_coll_to_replace_embeds,vec__104890,seq__104891,first__104892,seq__104891__$1,block_ast_to_replace_embed,other_block_asts_to_replace_embed,embed_depth))
,frontend.handler.export$.common.replace_block_AMPERSAND_page_embeds(block_ast_to_replace_embed));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null)))){
(frontend.handler.export$.common._STAR_state_STAR_ = cljs.core.assoc_in(frontend.handler.export$.common._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace-ref-embed","replace-ref-embed",-2123548135),new cljs.core.Keyword(null,"block&page-embed-replaced?","block&page-embed-replaced?",-180485858)], null),false));

var G__105070 = block_ast_coll__$1;
var G__105071 = result_block_ast_tcoll;
var G__105072 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_references,block_ast_coll_replaced));
var G__105073 = cljs.core.vec(other_block_asts_to_replace_embed);
block_ast_coll__$1 = G__105070;
result_block_ast_tcoll = G__105071;
block_ast_coll_to_replace_references = G__105072;
block_ast_coll_to_replace_embeds = G__105073;
continue;
} else {
var G__105074 = block_ast_coll__$1;
var G__105075 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,result_block_ast_tcoll,block_ast_coll_replaced);
var G__105076 = cljs.core.vec(block_ast_coll_to_replace_references);
var G__105077 = cljs.core.vec(other_block_asts_to_replace_embed);
block_ast_coll__$1 = G__105074;
result_block_ast_tcoll = G__105075;
block_ast_coll_to_replace_references = G__105076;
block_ast_coll_to_replace_embeds = G__105077;
continue;
}
} else {
var vec__104893 = block_ast_coll__$1;
var seq__104894 = cljs.core.seq(vec__104893);
var first__104895 = cljs.core.first(seq__104894);
var seq__104894__$1 = cljs.core.next(seq__104894);
var block_ast = first__104895;
var other_block_ast = seq__104894__$1;
if(cljs.core.not(block_ast)){
return cljs.core.persistent_BANG_(result_block_ast_tcoll);
} else {
var G__105078 = other_block_ast;
var G__105079 = result_block_ast_tcoll;
var G__105080 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block_ast_coll_to_replace_references,block_ast);
var G__105081 = cljs.core.vec(block_ast_coll_to_replace_embeds);
block_ast_coll__$1 = G__105078;
result_block_ast_tcoll = G__105079;
block_ast_coll_to_replace_references = G__105080;
block_ast_coll_to_replace_embeds = G__105081;
continue;
}

}
}
break;
}
});
/**
 * [[ast-type ast-content] _pos] -> [ast-type ast-content]
 */
frontend.handler.export$.common.remove_block_ast_pos = cljs.core.first;
frontend.handler.export$.common.Properties_block_ast_QMARK_ = (function frontend$handler$export$common$Properties_block_ast_QMARK_(p__104896){
var vec__104897 = p__104896;
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104897,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104897,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,"Properties");
});
/**
 * works on block-ast
 *   replace all heading with paragraph when indent-style is no-indent
 */
frontend.handler.export$.common.replace_Heading_with_Paragraph = (function frontend$handler$export$common$replace_Heading_with_Paragraph(heading_ast){
var vec__104900 = heading_ast;
var heading_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104900,(0),null);
var map__104903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104900,(1),null);
var map__104903__$1 = cljs.core.__destructure_map(map__104903);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104903__$1,new cljs.core.Keyword(null,"title","title",636505583));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104903__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104903__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104903__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading_type,"Heading")){
var inline_coll = (function (){var G__104904 = title;
var G__104904__$1 = (cljs.core.truth_(priority)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",[frontend.handler.export$.common.priority__GT_string(priority)," "].join('')], null),G__104904):G__104904);
var G__104904__$2 = (cljs.core.truth_(marker)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)," "].join('')], null),G__104904__$1):G__104904__$1);
var G__104904__$3 = (cljs.core.truth_(size)?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"#")))," "].join('')], null),G__104904__$2):G__104904__$2);
return cljs.core.vec(G__104904__$3);

})();
return frontend.handler.export$.common.mk_paragraph_ast(inline_coll,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"origin-ast","origin-ast",915928394),heading_ast], null));
} else {
return heading_ast;
}
});
frontend.handler.export$.common.keep_only_level_LT__EQ_n = (function frontend$handler$export$common$keep_only_level_LT__EQ_n(block_ast_coll,n){
return cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__104905,ast){
var map__104906 = p__104905;
var map__104906__$1 = cljs.core.__destructure_map(map__104906);
var r = map__104906__$1;
var result_ast_tcoll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104906__$1,new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637));
var accepted_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104906__$1,new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288));
var vec__104907 = ast;
var heading_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104907,(0),null);
var map__104910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104907,(1),null);
var map__104910__$1 = cljs.core.__destructure_map(map__104910);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104910__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var is_heading_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(heading_type,"Heading");
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(is_heading_QMARK_));
if(and__5041__auto__){
return accepted_heading;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_ast_tcoll,ast),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),accepted_heading], null);
} else {
if((((!(is_heading_QMARK_))) && (cljs.core.not(accepted_heading)))){
return r;
} else {
if(((is_heading_QMARK_) && ((level <= n)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result_ast_tcoll,ast),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),true], null);
} else {
if(((is_heading_QMARK_) && ((level > n)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),result_ast_tcoll,new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),false], null);
} else {
return null;
}
}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-ast-tcoll","result-ast-tcoll",1530092637),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"accepted-heading","accepted-heading",-1816434288),false], null),block_ast_coll)));
});
/**
 * :mapcat-fns-on-inline-ast
 */
frontend.handler.export$.common.remove_emphasis = (function frontend$handler$export$common$remove_emphasis(inline_ast){
var vec__104911 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104911,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104911,(1),null);
var G__104914 = ast_type;
switch (G__104914) {
case "Emphasis":
var vec__104915 = ast_content;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104915,(0),null);
var inline_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104915,(1),null);
return inline_coll;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_ast], null);

}
});
/**
 * :map-fns-on-inline-ast
 */
frontend.handler.export$.common.remove_page_ref_brackets = (function frontend$handler$export$common$remove_page_ref_brackets(inline_ast){
var vec__104918 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104918,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104918,(1),null);
var G__104921 = ast_type;
switch (G__104921) {
case "Link":
var map__104922 = ast_content;
var map__104922__$1 = cljs.core.__destructure_map(map__104922);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104922__$1,new cljs.core.Keyword(null,"url","url",276297046));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104922__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Page_ref",cljs.core.first(url))) && (((cljs.core.empty_QMARK_(label)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",""], null)], null))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",cljs.core.second(url)], null);
} else {
return inline_ast;
}

break;
default:
return inline_ast;

}
});
/**
 * :mapcat-fns-on-inline-ast
 */
frontend.handler.export$.common.remove_tags = (function frontend$handler$export$common$remove_tags(inline_ast){
var vec__104923 = inline_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104923,(0),null);
var _ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104923,(1),null);
var G__104926 = ast_type;
switch (G__104926) {
case "Tag":
return cljs.core.PersistentVector.EMPTY;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline_ast], null);

}
});
frontend.handler.export$.common.remove_prefix_spaces_in_Plain = (function frontend$handler$export$common$remove_prefix_spaces_in_Plain(inline_coll){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__104927,ast){
var map__104928 = p__104927;
var map__104928__$1 = cljs.core.__destructure_map(map__104928);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104928__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var after_break_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104928__$1,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838));
var vec__104929 = ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104929,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104929,(1),null);
var G__104932 = ast_type;
switch (G__104932) {
case "Plain":
var trimmed_content = clojure.string.triml(ast_content);
if(cljs.core.truth_(after_break_line_QMARK_)){
if(cljs.core.empty_QMARK_(trimmed_content)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Plain",trimmed_content], null)),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);
}

break;
case "Break_Line":
case "Hard_Break_Line":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),true], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,ast),new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),false], null);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"after-break-line?","after-break-line?",-2088072838),true], null),inline_coll));
});
frontend.handler.export$.common.walk_block_ast_helper = (function frontend$handler$export$common$walk_block_ast_helper(inline_coll,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__104934_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_ast_coll,f){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_ast_coll], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104934_SHARP_], null),mapcat_fns_on_inline_ast);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__104933_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_ast,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inline_ast) : f.call(null,inline_ast));
}),p1__104933_SHARP_,map_fns_on_inline_ast);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (inline_coll__$1,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inline_coll__$1) : f.call(null,inline_coll__$1));
}),inline_coll,fns_on_inline_coll))], 0)));
});
frontend.handler.export$.common.walk_block_ast_for_list = (function frontend$handler$export$common$walk_block_ast_for_list(list_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__104935){
var map__104936 = p__104935;
var map__104936__$1 = cljs.core.__destructure_map(map__104936);
var item = map__104936__$1;
var block_ast_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104936__$1,new cljs.core.Keyword(null,"content","content",15833224));
var sub_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104936__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.walk_block_ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513),map_fns_on_inline_ast,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078),mapcat_fns_on_inline_ast], null)),block_ast_coll),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938),(frontend.handler.export$.common.walk_block_ast_for_list.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.export$.common.walk_block_ast_for_list.cljs$core$IFn$_invoke$arity$3(sub_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast) : frontend.handler.export$.common.walk_block_ast_for_list.call(null,sub_items,map_fns_on_inline_ast,mapcat_fns_on_inline_ast))], 0));
}),list_items);
});
frontend.handler.export$.common.walk_block_ast = (function frontend$handler$export$common$walk_block_ast(p__104938,block_ast){
var map__104939 = p__104938;
var map__104939__$1 = cljs.core.__destructure_map(map__104939);
var fns = map__104939__$1;
var map_fns_on_inline_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104939__$1,new cljs.core.Keyword(null,"map-fns-on-inline-ast","map-fns-on-inline-ast",-1834139513));
var mapcat_fns_on_inline_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104939__$1,new cljs.core.Keyword(null,"mapcat-fns-on-inline-ast","mapcat-fns-on-inline-ast",-988900078));
var fns_on_inline_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104939__$1,new cljs.core.Keyword(null,"fns-on-inline-coll","fns-on-inline-coll",-2007934714));
var vec__104940 = block_ast;
var ast_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104940,(0),null);
var ast_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104940,(1),null);
var G__104943 = ast_type;
switch (G__104943) {
case "Paragraph":
return frontend.handler.export$.common.mk_paragraph_ast(frontend.handler.export$.common.walk_block_ast_helper(ast_content,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll),cljs.core.meta(block_ast));

break;
case "Heading":
var map__104944 = ast_content;
var map__104944__$1 = cljs.core.__destructure_map(map__104944);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104944__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heading",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast_content,new cljs.core.Keyword(null,"title","title",636505583),frontend.handler.export$.common.walk_block_ast_helper(title,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll))], null);

break;
case "List":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List",frontend.handler.export$.common.walk_block_ast_for_list(ast_content,map_fns_on_inline_ast,mapcat_fns_on_inline_ast)], null);

break;
case "Quote":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quote",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.walk_block_ast,fns),ast_content)], null);

break;
case "Footnote_Definition":
var vec__104945 = cljs.core.rest(block_ast);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104945,(0),null);
var contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104945,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Footnote_Definition",name,frontend.handler.export$.common.walk_block_ast_helper(contents,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll)], null);

break;
case "Table":
var map__104948 = ast_content;
var map__104948__$1 = cljs.core.__destructure_map(map__104948);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104948__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104948__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var header_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__104937_SHARP_){
return frontend.handler.export$.common.walk_block_ast_helper(p1__104937_SHARP_,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll);
}),header);
var groups_STAR_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.handler.export$.common.walk_block_ast_helper(col,map_fns_on_inline_ast,mapcat_fns_on_inline_ast,fns_on_inline_coll);
}),row);
}),group);
}),groups);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast_content,new cljs.core.Keyword(null,"header","header",119441134),header_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"groups","groups",-136896102),groups_STAR_], 0))], null);

break;
default:
return block_ast;

}
});
frontend.handler.export$.common.simple_ast_malli_schema = malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"raw-text","raw-text",-959335662)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"space","space",348133475)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-count","line-count",871713181),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null));
frontend.handler.export$.common.raw_text = (function frontend$handler$export$common$raw_text(var_args){
var args__5772__auto__ = [];
var len__5766__auto___105087 = arguments.length;
var i__5767__auto___105088 = (0);
while(true){
if((i__5767__auto___105088 < len__5766__auto___105087)){
args__5772__auto__.push((arguments[i__5767__auto___105088]));

var G__105089 = (i__5767__auto___105088 + (1));
i__5767__auto___105088 = G__105089;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.handler.export$.common.raw_text.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"raw-text","raw-text",-959335662),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,contents)], null);
}));

(frontend.handler.export$.common.raw_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.handler.export$.common.raw_text.cljs$lang$applyTo = (function (seq104949){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq104949));
}));

frontend.handler.export$.common.space = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"space","space",348133475)], null);
frontend.handler.export$.common.newline_STAR_ = (function frontend$handler$export$common$newline_STAR_(line_count){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"line-count","line-count",871713181),line_count], null);
});
frontend.handler.export$.common.indent = (function frontend$handler$export$common$indent(level,extra_space_count){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890),extra_space_count], null);
});
frontend.handler.export$.common.simple_ast__GT_string = (function frontend$handler$export$common$simple_ast__GT_string(simple_ast){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.simple_ast_malli_schema,simple_ast))){
} else {
throw (new Error("Assert failed: (m/validate simple-ast-malli-schema simple-ast)"));
}

var G__104950 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(simple_ast);
var G__104950__$1 = (((G__104950 instanceof cljs.core.Keyword))?G__104950.fqn:null);
switch (G__104950__$1) {
case "raw-text":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(simple_ast);

break;
case "space":
return " ";

break;
case "newline":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(simple_ast),"\n"));

break;
case "indent":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(simple_ast),"\t"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra-space-count","extra-space-count",1763210890).cljs$core$IFn$_invoke$arity$1(simple_ast)," "))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104950__$1)].join('')));

}
});
frontend.handler.export$.common.merge_adjacent_spaces_AMPERSAND_newlines = (function frontend$handler$export$common$merge_adjacent_spaces_AMPERSAND_newlines(simple_ast_coll){
var r = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var last_ast = null;
var last_raw_text_space_suffix_QMARK_ = false;
var last_raw_text_newline_suffix_QMARK_ = false;
var G__104954 = simple_ast_coll;
var vec__104955 = G__104954;
var seq__104956 = cljs.core.seq(vec__104955);
var first__104957 = cljs.core.first(seq__104956);
var seq__104956__$1 = cljs.core.next(seq__104956);
var simple_ast = first__104957;
var other_ast_coll = seq__104956__$1;
var r__$1 = r;
var last_ast__$1 = last_ast;
var last_raw_text_space_suffix_QMARK___$1 = last_raw_text_space_suffix_QMARK_;
var last_raw_text_newline_suffix_QMARK___$1 = last_raw_text_newline_suffix_QMARK_;
var G__104954__$1 = G__104954;
while(true){
var r__$2 = r__$1;
var last_ast__$2 = last_ast__$1;
var last_raw_text_space_suffix_QMARK___$2 = last_raw_text_space_suffix_QMARK___$1;
var last_raw_text_newline_suffix_QMARK___$2 = last_raw_text_newline_suffix_QMARK___$1;
var vec__104974 = G__104954__$1;
var seq__104975 = cljs.core.seq(vec__104974);
var first__104976 = cljs.core.first(seq__104975);
var seq__104975__$1 = cljs.core.next(seq__104975);
var simple_ast__$1 = first__104976;
var other_ast_coll__$1 = seq__104975__$1;
if((simple_ast__$1 == null)){
return cljs.core.persistent_BANG_((cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2));
} else {
var tp = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var last_ast_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(last_ast__$2);
var G__104977 = tp;
var G__104977__$1 = (((G__104977 instanceof cljs.core.Keyword))?G__104977.fqn:null);
switch (G__104977__$1) {
case "space":
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"space","space",348133475),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),last_ast_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = last_raw_text_space_suffix_QMARK___$2;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return last_raw_text_newline_suffix_QMARK___$2;
}
}
})())){
var G__105092 = r__$2;
var G__105093 = last_ast__$2;
var G__105094 = last_raw_text_space_suffix_QMARK___$2;
var G__105095 = last_raw_text_newline_suffix_QMARK___$2;
var G__105096 = other_ast_coll__$1;
r__$1 = G__105092;
last_ast__$1 = G__105093;
last_raw_text_space_suffix_QMARK___$1 = G__105094;
last_raw_text_newline_suffix_QMARK___$1 = G__105095;
G__104954__$1 = G__105096;
continue;
} else {
var G__105097 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105098 = simple_ast__$1;
var G__105099 = false;
var G__105100 = false;
var G__105101 = other_ast_coll__$1;
r__$1 = G__105097;
last_ast__$1 = G__105098;
last_raw_text_space_suffix_QMARK___$1 = G__105099;
last_raw_text_newline_suffix_QMARK___$1 = G__105100;
G__104954__$1 = G__105101;
continue;
}

break;
case "newline":
var G__104978 = last_ast_type;
var G__104978__$1 = (((G__104978 instanceof cljs.core.Keyword))?G__104978.fqn:null);
switch (G__104978__$1) {
case "space":
case "indent":
var G__105103 = r__$2;
var G__105104 = simple_ast__$1;
var G__105105 = false;
var G__105106 = false;
var G__105107 = other_ast_coll__$1;
r__$1 = G__105103;
last_ast__$1 = G__105104;
last_raw_text_space_suffix_QMARK___$1 = G__105105;
last_raw_text_newline_suffix_QMARK___$1 = G__105106;
G__104954__$1 = G__105107;
continue;

break;
case "newline":
var last_newline_count = new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(last_ast__$2);
var current_newline_count = new cljs.core.Keyword(null,"line-count","line-count",871713181).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var kept_ast = (((last_newline_count > current_newline_count))?last_ast__$2:simple_ast__$1);
var G__105108 = r__$2;
var G__105109 = kept_ast;
var G__105110 = false;
var G__105111 = false;
var G__105112 = other_ast_coll__$1;
r__$1 = G__105108;
last_ast__$1 = G__105109;
last_raw_text_space_suffix_QMARK___$1 = G__105110;
last_raw_text_newline_suffix_QMARK___$1 = G__105111;
G__104954__$1 = G__105112;
continue;

break;
case "raw-text":
if(cljs.core.truth_(last_raw_text_newline_suffix_QMARK___$2)){
var G__105113 = r__$2;
var G__105114 = last_ast__$2;
var G__105115 = last_raw_text_space_suffix_QMARK___$2;
var G__105116 = last_raw_text_newline_suffix_QMARK___$2;
var G__105117 = other_ast_coll__$1;
r__$1 = G__105113;
last_ast__$1 = G__105114;
last_raw_text_space_suffix_QMARK___$1 = G__105115;
last_raw_text_newline_suffix_QMARK___$1 = G__105116;
G__104954__$1 = G__105117;
continue;
} else {
var G__105118 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105119 = simple_ast__$1;
var G__105120 = false;
var G__105121 = false;
var G__105122 = other_ast_coll__$1;
r__$1 = G__105118;
last_ast__$1 = G__105119;
last_raw_text_space_suffix_QMARK___$1 = G__105120;
last_raw_text_newline_suffix_QMARK___$1 = G__105121;
G__104954__$1 = G__105122;
continue;
}

break;
default:
var G__105123 = r__$2;
var G__105124 = simple_ast__$1;
var G__105125 = false;
var G__105126 = false;
var G__105127 = other_ast_coll__$1;
r__$1 = G__105123;
last_ast__$1 = G__105124;
last_raw_text_space_suffix_QMARK___$1 = G__105125;
last_raw_text_newline_suffix_QMARK___$1 = G__105126;
G__104954__$1 = G__105127;
continue;

}

break;
case "indent":
var G__104979 = last_ast_type;
var G__104979__$1 = (((G__104979 instanceof cljs.core.Keyword))?G__104979.fqn:null);
switch (G__104979__$1) {
case "space":
case "indent":
var G__105129 = r__$2;
var G__105130 = simple_ast__$1;
var G__105131 = false;
var G__105132 = false;
var G__105133 = other_ast_coll__$1;
r__$1 = G__105129;
last_ast__$1 = G__105130;
last_raw_text_space_suffix_QMARK___$1 = G__105131;
last_raw_text_newline_suffix_QMARK___$1 = G__105132;
G__104954__$1 = G__105133;
continue;

break;
case "newline":
var G__105134 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105135 = simple_ast__$1;
var G__105136 = false;
var G__105137 = false;
var G__105138 = other_ast_coll__$1;
r__$1 = G__105134;
last_ast__$1 = G__105135;
last_raw_text_space_suffix_QMARK___$1 = G__105136;
last_raw_text_newline_suffix_QMARK___$1 = G__105137;
G__104954__$1 = G__105138;
continue;

break;
case "raw-text":
if(cljs.core.truth_(last_raw_text_space_suffix_QMARK___$2)){
var G__105139 = r__$2;
var G__105140 = last_ast__$2;
var G__105141 = last_raw_text_space_suffix_QMARK___$2;
var G__105142 = last_raw_text_newline_suffix_QMARK___$2;
var G__105143 = other_ast_coll__$1;
r__$1 = G__105139;
last_ast__$1 = G__105140;
last_raw_text_space_suffix_QMARK___$1 = G__105141;
last_raw_text_newline_suffix_QMARK___$1 = G__105142;
G__104954__$1 = G__105143;
continue;
} else {
var G__105144 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105145 = simple_ast__$1;
var G__105146 = false;
var G__105147 = false;
var G__105148 = other_ast_coll__$1;
r__$1 = G__105144;
last_ast__$1 = G__105145;
last_raw_text_space_suffix_QMARK___$1 = G__105146;
last_raw_text_newline_suffix_QMARK___$1 = G__105147;
G__104954__$1 = G__105148;
continue;
}

break;
default:
var G__105149 = r__$2;
var G__105150 = simple_ast__$1;
var G__105151 = false;
var G__105152 = false;
var G__105153 = other_ast_coll__$1;
r__$1 = G__105149;
last_ast__$1 = G__105150;
last_raw_text_space_suffix_QMARK___$1 = G__105151;
last_raw_text_newline_suffix_QMARK___$1 = G__105152;
G__104954__$1 = G__105153;
continue;

}

break;
case "raw-text":
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(simple_ast__$1);
var empty_content_QMARK_ = cljs.core.empty_QMARK_(content);
var first_ch = cljs.core.first(content);
var last_ch = (function (){var num = cljs.core.count(content);
if((num > (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(num - (1)));
} else {
return null;
}
})();
var newline_prefix_QMARK_ = (function (){var G__104980 = first_ch;
var G__104980__$1 = (((G__104980 == null))?null:(function (){var fexpr__104981 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\r",null,"\n",null], null), null);
return (fexpr__104981.cljs$core$IFn$_invoke$arity$1 ? fexpr__104981.cljs$core$IFn$_invoke$arity$1(G__104980) : fexpr__104981.call(null,G__104980));
})());
if((G__104980__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__104980__$1);
}
})();
var newline_suffix_QMARK_ = (function (){var G__104982 = last_ch;
var G__104982__$1 = (((G__104982 == null))?null:(function (){var fexpr__104983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null);
return (fexpr__104983.cljs$core$IFn$_invoke$arity$1 ? fexpr__104983.cljs$core$IFn$_invoke$arity$1(G__104982) : fexpr__104983.call(null,G__104982));
})());
if((G__104982__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__104982__$1);
}
})();
var space_prefix_QMARK_ = (function (){var G__104984 = first_ch;
var G__104984__$1 = (((G__104984 == null))?null:(function (){var fexpr__104985 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null);
return (fexpr__104985.cljs$core$IFn$_invoke$arity$1 ? fexpr__104985.cljs$core$IFn$_invoke$arity$1(G__104984) : fexpr__104985.call(null,G__104984));
})());
if((G__104984__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__104984__$1);
}
})();
var space_suffix_QMARK_ = (function (){var G__104986 = last_ch;
var G__104986__$1 = (((G__104986 == null))?null:(function (){var fexpr__104987 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null);
return (fexpr__104987.cljs$core$IFn$_invoke$arity$1 ? fexpr__104987.cljs$core$IFn$_invoke$arity$1(G__104986) : fexpr__104987.call(null,G__104986));
})());
if((G__104986__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__104986__$1);
}
})();
if(empty_content_QMARK_){
var G__105154 = r__$2;
var G__105155 = last_ast__$2;
var G__105156 = last_raw_text_space_suffix_QMARK___$2;
var G__105157 = last_raw_text_newline_suffix_QMARK___$2;
var G__105158 = other_ast_coll__$1;
r__$1 = G__105154;
last_ast__$1 = G__105155;
last_raw_text_space_suffix_QMARK___$1 = G__105156;
last_raw_text_newline_suffix_QMARK___$1 = G__105157;
G__104954__$1 = G__105158;
continue;
} else {
if(cljs.core.truth_(newline_prefix_QMARK_)){
var G__104988 = last_ast_type;
var G__104988__$1 = (((G__104988 instanceof cljs.core.Keyword))?G__104988.fqn:null);
switch (G__104988__$1) {
case "space":
case "indent":
case "newline":
var G__105160 = r__$2;
var G__105161 = simple_ast__$1;
var G__105162 = space_suffix_QMARK_;
var G__105163 = newline_suffix_QMARK_;
var G__105164 = other_ast_coll__$1;
r__$1 = G__105160;
last_ast__$1 = G__105161;
last_raw_text_space_suffix_QMARK___$1 = G__105162;
last_raw_text_newline_suffix_QMARK___$1 = G__105163;
G__104954__$1 = G__105164;
continue;

break;
case "raw-text":
var G__105165 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105166 = simple_ast__$1;
var G__105167 = space_suffix_QMARK_;
var G__105168 = newline_suffix_QMARK_;
var G__105169 = other_ast_coll__$1;
r__$1 = G__105165;
last_ast__$1 = G__105166;
last_raw_text_space_suffix_QMARK___$1 = G__105167;
last_raw_text_newline_suffix_QMARK___$1 = G__105168;
G__104954__$1 = G__105169;
continue;

break;
default:
var G__105170 = r__$2;
var G__105171 = simple_ast__$1;
var G__105172 = space_suffix_QMARK_;
var G__105173 = newline_suffix_QMARK_;
var G__105174 = other_ast_coll__$1;
r__$1 = G__105170;
last_ast__$1 = G__105171;
last_raw_text_space_suffix_QMARK___$1 = G__105172;
last_raw_text_newline_suffix_QMARK___$1 = G__105173;
G__104954__$1 = G__105174;
continue;

}
} else {
if(cljs.core.truth_(space_prefix_QMARK_)){
var G__104989 = last_ast_type;
var G__104989__$1 = (((G__104989 instanceof cljs.core.Keyword))?G__104989.fqn:null);
switch (G__104989__$1) {
case "space":
case "indent":
var G__105176 = r__$2;
var G__105177 = simple_ast__$1;
var G__105178 = space_suffix_QMARK_;
var G__105179 = newline_suffix_QMARK_;
var G__105180 = other_ast_coll__$1;
r__$1 = G__105176;
last_ast__$1 = G__105177;
last_raw_text_space_suffix_QMARK___$1 = G__105178;
last_raw_text_newline_suffix_QMARK___$1 = G__105179;
G__104954__$1 = G__105180;
continue;

break;
case "newline":
case "raw-text":
var G__105181 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105182 = simple_ast__$1;
var G__105183 = space_suffix_QMARK_;
var G__105184 = newline_suffix_QMARK_;
var G__105185 = other_ast_coll__$1;
r__$1 = G__105181;
last_ast__$1 = G__105182;
last_raw_text_space_suffix_QMARK___$1 = G__105183;
last_raw_text_newline_suffix_QMARK___$1 = G__105184;
G__104954__$1 = G__105185;
continue;

break;
default:
var G__105186 = r__$2;
var G__105187 = simple_ast__$1;
var G__105188 = space_suffix_QMARK_;
var G__105189 = newline_suffix_QMARK_;
var G__105190 = other_ast_coll__$1;
r__$1 = G__105186;
last_ast__$1 = G__105187;
last_raw_text_space_suffix_QMARK___$1 = G__105188;
last_raw_text_newline_suffix_QMARK___$1 = G__105189;
G__104954__$1 = G__105190;
continue;

}
} else {
var G__105191 = (cljs.core.truth_(last_ast__$2)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(r__$2,last_ast__$2):r__$2);
var G__105192 = simple_ast__$1;
var G__105193 = space_suffix_QMARK_;
var G__105194 = newline_suffix_QMARK_;
var G__105195 = other_ast_coll__$1;
r__$1 = G__105191;
last_ast__$1 = G__105192;
last_raw_text_space_suffix_QMARK___$1 = G__105193;
last_raw_text_newline_suffix_QMARK___$1 = G__105194;
G__104954__$1 = G__105195;
continue;

}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104977__$1)].join('')));

}
}
break;
}
});
frontend.handler.export$.common.simple_asts__GT_string = (function frontend$handler$export$common$simple_asts__GT_string(simple_ast_coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.common.simple_ast__GT_string,frontend.handler.export$.common.merge_adjacent_spaces_AMPERSAND_newlines(frontend.handler.export$.common.merge_adjacent_spaces_AMPERSAND_newlines(simple_ast_coll))));
});

//# sourceMappingURL=frontend.handler.export.common.js.map
