goog.provide('frontend.handler.editor.property');
goog.scope(function(){
  frontend.handler.editor.property.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.editor.property.clear_selection_BANG_ = (function frontend$handler$editor$property$clear_selection_BANG_(){
return frontend.state.clear_selection_BANG_();
});
frontend.handler.editor.property.get_edit_input_id_with_block_id = (function frontend$handler$editor$property$get_edit_input_id_with_block_id(block_id){
var temp__5804__auto__ = frontend.util.get_first_block_by_id(block_id);
if(cljs.core.truth_(temp__5804__auto__)){
var first_block = temp__5804__auto__;
return clojure.string.replace(frontend.handler.editor.property.goog$module$goog$object.get(first_block,"id"),"ls-block","edit-block");
} else {
return null;
}
});
frontend.handler.editor.property.text_range_by_lst_fst_line = (function frontend$handler$editor$property$text_range_by_lst_fst_line(content,p__102940){
var vec__102941 = p__102940;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102941,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102941,(1),null);
var G__102944 = direction;
var G__102944__$1 = (((G__102944 instanceof cljs.core.Keyword))?G__102944.fqn:null);
switch (G__102944__$1) {
case "up":
var last_new_line = (function (){var or__5043__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(content,"\n");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (-1);
}
})();
var end = ((last_new_line + pos) + (1));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),end);

break;
case "down":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3((function (){var or__5043__auto__ = cljs.core.first(clojure.string.split_lines(content));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),(0),pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102944__$1)].join('')));

}
});
frontend.handler.editor.property.edit_block_BANG_ = (function frontend$handler$editor$property$edit_block_BANG_(var_args){
var G__102946 = arguments.length;
switch (G__102946) {
case 3:
return frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,pos,id){
return frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(block,pos,id,null);
}));

(frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (block,pos,id,p__102947){
var map__102948 = p__102947;
var map__102948__$1 = cljs.core.__destructure_map(map__102948);
var opts = map__102948__$1;
var custom_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102948__$1,new cljs.core.Keyword(null,"custom-content","custom-content",-8240001));
var tail_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102948__$1,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),(0));
var retry_times = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102948__$1,new cljs.core.Keyword(null,"retry-times","retry-times",-2106468153),(0));
if((retry_times > (2))){
return null;
} else {
if(frontend.config.publishing_QMARK_){
return null;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
var block__$1 = (function (){var or__5043__auto__ = (function (){var G__102949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102949) : frontend.db.pull.call(null,G__102949));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})();
var edit_input_id = ((cljs.core.uuid_QMARK_(id))?frontend.handler.editor.property.get_edit_input_id_with_block_id(id):clojure.string.replace([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(id,(0),(cljs.core.count(id) - (36))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"ls-block","edit-block"));
var content = (function (){var or__5043__auto__ = custom_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "";
}
}
})();
var content_length = cljs.core.count(content);
var text_range = ((cljs.core.vector_QMARK_(pos))?frontend.handler.editor.property.text_range_by_lst_fst_line(content,pos):(((((tail_len > (0))) && ((cljs.core.count(content) >= tail_len))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(cljs.core.count(content) - tail_len)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),pos)) || ((content_length <= pos))))?content:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos)
)));
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block__$1),content));
frontend.handler.editor.property.clear_selection_BANG_();

if(cljs.core.truth_(edit_input_id)){
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4(edit_input_id,content__$1,block__$1,text_range);
} else {
return setTimeout((function (){
return frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(block__$1,pos,id,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"retry-times","retry-times",-2106468153),cljs.core.inc));
}),(10));
}
} else {
return null;
}
}
}
}));

(frontend.handler.editor.property.edit_block_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * col: a collection of [block-id property-key property-value].
 */
frontend.handler.editor.property.batch_set_block_property_BANG_ = (function frontend$handler$editor$property$batch_set_block_property_BANG_(col){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var col_SINGLEQUOTE__103030 = cljs.core.group_by(cljs.core.first,col);
var transact_data__102865__auto___103031 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___103032 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___103033 = (cljs.core.truth_(transact_data__102865__auto___103031)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
var before_editor_cursor__102868__auto___103034 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___103031)){
if(cljs.core.truth_(transaction_opts__102866__auto___103032)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___103032,opts__102867__auto___103033);
} else {
}

var seq__102950_103035 = cljs.core.seq(col_SINGLEQUOTE__103030);
var chunk__102951_103036 = null;
var count__102952_103037 = (0);
var i__102953_103038 = (0);
while(true){
if((i__102953_103038 < count__102952_103037)){
var vec__102970_103039 = chunk__102951_103036.cljs$core$IIndexed$_nth$arity$2(null,i__102953_103038);
var block_id_103040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102970_103039,(0),null);
var items_103041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102970_103039,(1),null);
var block_id_103042__$1 = ((typeof block_id_103040 === 'string')?cljs.core.uuid(block_id_103040):block_id_103040);
var new_properties_103043 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103041),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,items_103041));
var temp__5804__auto___103044__$1 = (function (){var G__102973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103042__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102973) : frontend.db.entity.call(null,G__102973));
})();
if(cljs.core.truth_(temp__5804__auto___103044__$1)){
var block_103045 = temp__5804__auto___103044__$1;
var format_103046 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_103045);
var content_103047 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_103045);
var properties_103048 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_103045);
var properties_text_values_103049 = new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block_103045);
var properties_103050__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_103048,new_properties_103043], 0)));
var properties_text_values_103051__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_text_values_103049,new_properties_103043], 0)));
var property_ks_103052 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(properties_103050__$1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block_103045),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103041)))));
var content_103053__$1 = frontend.util.property.remove_properties(format_103046,content_103047);
var kvs_103054 = (function (){var iter__5520__auto__ = ((function (seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103046,content_103047,properties_103048,properties_text_values_103049,properties_103050__$1,properties_text_values_103051__$1,property_ks_103052,content_103053__$1,block_103045,temp__5804__auto___103044__$1,block_id_103042__$1,new_properties_103043,vec__102970_103039,block_id_103040,items_103041,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102974(s__102975){
return (new cljs.core.LazySeq(null,((function (seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103046,content_103047,properties_103048,properties_text_values_103049,properties_103050__$1,properties_text_values_103051__$1,property_ks_103052,content_103053__$1,block_103045,temp__5804__auto___103044__$1,block_id_103042__$1,new_properties_103043,vec__102970_103039,block_id_103040,items_103041,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function (){
var s__102975__$1 = s__102975;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__102975__$1);
if(temp__5804__auto____$2){
var s__102975__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__102975__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102975__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102977 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102976 = (0);
while(true){
if((i__102976 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__102976);
cljs.core.chunk_append(b__102977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103051__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103050__$1,key);
}
})()], null));

var G__103058 = (i__102976 + (1));
i__102976 = G__103058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102977),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102974(cljs.core.chunk_rest(s__102975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102977),null);
}
} else {
var key = cljs.core.first(s__102975__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103051__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103050__$1,key);
}
})()], null),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102974(cljs.core.rest(s__102975__$2)));
}
} else {
return null;
}
break;
}
});})(seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103046,content_103047,properties_103048,properties_text_values_103049,properties_103050__$1,properties_text_values_103051__$1,property_ks_103052,content_103053__$1,block_103045,temp__5804__auto___103044__$1,block_id_103042__$1,new_properties_103043,vec__102970_103039,block_id_103040,items_103041,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
,null,null));
});})(seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103046,content_103047,properties_103048,properties_text_values_103049,properties_103050__$1,properties_text_values_103051__$1,property_ks_103052,content_103053__$1,block_103045,temp__5804__auto___103044__$1,block_id_103042__$1,new_properties_103043,vec__102970_103039,block_id_103040,items_103041,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
;
return iter__5520__auto__(property_ks_103052);
})();
var content_103055__$2 = frontend.util.property.insert_properties(format_103046,content_103053__$1,kvs_103054);
var content_103056__$3 = frontend.util.property.remove_empty_properties(content_103055__$2);
var block_103057__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103042__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_103050__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),property_ks_103052,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),properties_text_values_103051__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_103056__$3], null);
frontend.modules.outliner.core.save_block_BANG_(block_103057__$1);
} else {
}


var G__103059 = seq__102950_103035;
var G__103060 = chunk__102951_103036;
var G__103061 = count__102952_103037;
var G__103062 = (i__102953_103038 + (1));
seq__102950_103035 = G__103059;
chunk__102951_103036 = G__103060;
count__102952_103037 = G__103061;
i__102953_103038 = G__103062;
continue;
} else {
var temp__5804__auto___103063__$1 = cljs.core.seq(seq__102950_103035);
if(temp__5804__auto___103063__$1){
var seq__102950_103064__$1 = temp__5804__auto___103063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__102950_103064__$1)){
var c__5565__auto___103065 = cljs.core.chunk_first(seq__102950_103064__$1);
var G__103066 = cljs.core.chunk_rest(seq__102950_103064__$1);
var G__103067 = c__5565__auto___103065;
var G__103068 = cljs.core.count(c__5565__auto___103065);
var G__103069 = (0);
seq__102950_103035 = G__103066;
chunk__102951_103036 = G__103067;
count__102952_103037 = G__103068;
i__102953_103038 = G__103069;
continue;
} else {
var vec__102978_103070 = cljs.core.first(seq__102950_103064__$1);
var block_id_103071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102978_103070,(0),null);
var items_103072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102978_103070,(1),null);
var block_id_103073__$1 = ((typeof block_id_103071 === 'string')?cljs.core.uuid(block_id_103071):block_id_103071);
var new_properties_103074 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103072),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,items_103072));
var temp__5804__auto___103075__$2 = (function (){var G__102981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103073__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102981) : frontend.db.entity.call(null,G__102981));
})();
if(cljs.core.truth_(temp__5804__auto___103075__$2)){
var block_103076 = temp__5804__auto___103075__$2;
var format_103077 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_103076);
var content_103078 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_103076);
var properties_103079 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_103076);
var properties_text_values_103080 = new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block_103076);
var properties_103081__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_103079,new_properties_103074], 0)));
var properties_text_values_103082__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_text_values_103080,new_properties_103074], 0)));
var property_ks_103083 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(properties_103081__$1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block_103076),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103072)))));
var content_103084__$1 = frontend.util.property.remove_properties(format_103077,content_103078);
var kvs_103085 = (function (){var iter__5520__auto__ = ((function (seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103077,content_103078,properties_103079,properties_text_values_103080,properties_103081__$1,properties_text_values_103082__$1,property_ks_103083,content_103084__$1,block_103076,temp__5804__auto___103075__$2,block_id_103073__$1,new_properties_103074,vec__102978_103070,block_id_103071,items_103072,seq__102950_103064__$1,temp__5804__auto___103063__$1,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102982(s__102983){
return (new cljs.core.LazySeq(null,((function (seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103077,content_103078,properties_103079,properties_text_values_103080,properties_103081__$1,properties_text_values_103082__$1,property_ks_103083,content_103084__$1,block_103076,temp__5804__auto___103075__$2,block_id_103073__$1,new_properties_103074,vec__102978_103070,block_id_103071,items_103072,seq__102950_103064__$1,temp__5804__auto___103063__$1,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function (){
var s__102983__$1 = s__102983;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__102983__$1);
if(temp__5804__auto____$3){
var s__102983__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__102983__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102983__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102985 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102984 = (0);
while(true){
if((i__102984 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__102984);
cljs.core.chunk_append(b__102985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103082__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103081__$1,key);
}
})()], null));

var G__103089 = (i__102984 + (1));
i__102984 = G__103089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102985),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102982(cljs.core.chunk_rest(s__102983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102985),null);
}
} else {
var key = cljs.core.first(s__102983__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103082__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103081__$1,key);
}
})()], null),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__102982(cljs.core.rest(s__102983__$2)));
}
} else {
return null;
}
break;
}
});})(seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103077,content_103078,properties_103079,properties_text_values_103080,properties_103081__$1,properties_text_values_103082__$1,property_ks_103083,content_103084__$1,block_103076,temp__5804__auto___103075__$2,block_id_103073__$1,new_properties_103074,vec__102978_103070,block_id_103071,items_103072,seq__102950_103064__$1,temp__5804__auto___103063__$1,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
,null,null));
});})(seq__102950_103035,chunk__102951_103036,count__102952_103037,i__102953_103038,format_103077,content_103078,properties_103079,properties_text_values_103080,properties_103081__$1,properties_text_values_103082__$1,property_ks_103083,content_103084__$1,block_103076,temp__5804__auto___103075__$2,block_id_103073__$1,new_properties_103074,vec__102978_103070,block_id_103071,items_103072,seq__102950_103064__$1,temp__5804__auto___103063__$1,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
;
return iter__5520__auto__(property_ks_103083);
})();
var content_103086__$2 = frontend.util.property.insert_properties(format_103077,content_103084__$1,kvs_103085);
var content_103087__$3 = frontend.util.property.remove_empty_properties(content_103086__$2);
var block_103088__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103073__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_103081__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),property_ks_103083,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),properties_text_values_103082__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_103087__$3], null);
frontend.modules.outliner.core.save_block_BANG_(block_103088__$1);
} else {
}


var G__103090 = cljs.core.next(seq__102950_103064__$1);
var G__103091 = null;
var G__103092 = (0);
var G__103093 = (0);
seq__102950_103035 = G__103090;
chunk__102951_103036 = G__103091;
count__102952_103037 = G__103092;
i__102953_103038 = G__103093;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__102986_103094 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__102987_103095 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__102988_103096 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__102989_103097 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__102988_103096);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__102989_103097);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___103032,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___103033], 0));

var seq__102990_103098 = cljs.core.seq(col_SINGLEQUOTE__103030);
var chunk__102991_103099 = null;
var count__102992_103100 = (0);
var i__102993_103101 = (0);
while(true){
if((i__102993_103101 < count__102992_103100)){
var vec__103010_103102 = chunk__102991_103099.cljs$core$IIndexed$_nth$arity$2(null,i__102993_103101);
var block_id_103103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103010_103102,(0),null);
var items_103104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103010_103102,(1),null);
var block_id_103105__$1 = ((typeof block_id_103103 === 'string')?cljs.core.uuid(block_id_103103):block_id_103103);
var new_properties_103106 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103104),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,items_103104));
var temp__5804__auto___103107__$1 = (function (){var G__103013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103105__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__103013) : frontend.db.entity.call(null,G__103013));
})();
if(cljs.core.truth_(temp__5804__auto___103107__$1)){
var block_103108 = temp__5804__auto___103107__$1;
var format_103109 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_103108);
var content_103110 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_103108);
var properties_103111 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_103108);
var properties_text_values_103112 = new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block_103108);
var properties_103113__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_103111,new_properties_103106], 0)));
var properties_text_values_103114__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_text_values_103112,new_properties_103106], 0)));
var property_ks_103115 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(properties_103113__$1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block_103108),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103104)))));
var content_103116__$1 = frontend.util.property.remove_properties(format_103109,content_103110);
var kvs_103117 = (function (){var iter__5520__auto__ = ((function (seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103109,content_103110,properties_103111,properties_text_values_103112,properties_103113__$1,properties_text_values_103114__$1,property_ks_103115,content_103116__$1,block_103108,temp__5804__auto___103107__$1,block_id_103105__$1,new_properties_103106,vec__103010_103102,block_id_103103,items_103104,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103014(s__103015){
return (new cljs.core.LazySeq(null,((function (seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103109,content_103110,properties_103111,properties_text_values_103112,properties_103113__$1,properties_text_values_103114__$1,property_ks_103115,content_103116__$1,block_103108,temp__5804__auto___103107__$1,block_id_103105__$1,new_properties_103106,vec__103010_103102,block_id_103103,items_103104,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function (){
var s__103015__$1 = s__103015;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__103015__$1);
if(temp__5804__auto____$2){
var s__103015__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__103015__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__103015__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__103017 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__103016 = (0);
while(true){
if((i__103016 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__103016);
cljs.core.chunk_append(b__103017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103114__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103113__$1,key);
}
})()], null));

var G__103121 = (i__103016 + (1));
i__103016 = G__103121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103017),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103014(cljs.core.chunk_rest(s__103015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103017),null);
}
} else {
var key = cljs.core.first(s__103015__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103114__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103113__$1,key);
}
})()], null),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103014(cljs.core.rest(s__103015__$2)));
}
} else {
return null;
}
break;
}
});})(seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103109,content_103110,properties_103111,properties_text_values_103112,properties_103113__$1,properties_text_values_103114__$1,property_ks_103115,content_103116__$1,block_103108,temp__5804__auto___103107__$1,block_id_103105__$1,new_properties_103106,vec__103010_103102,block_id_103103,items_103104,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
,null,null));
});})(seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103109,content_103110,properties_103111,properties_text_values_103112,properties_103113__$1,properties_text_values_103114__$1,property_ks_103115,content_103116__$1,block_103108,temp__5804__auto___103107__$1,block_id_103105__$1,new_properties_103106,vec__103010_103102,block_id_103103,items_103104,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
;
return iter__5520__auto__(property_ks_103115);
})();
var content_103118__$2 = frontend.util.property.insert_properties(format_103109,content_103116__$1,kvs_103117);
var content_103119__$3 = frontend.util.property.remove_empty_properties(content_103118__$2);
var block_103120__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103105__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_103113__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),property_ks_103115,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),properties_text_values_103114__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_103119__$3], null);
frontend.modules.outliner.core.save_block_BANG_(block_103120__$1);
} else {
}


var G__103122 = seq__102990_103098;
var G__103123 = chunk__102991_103099;
var G__103124 = count__102992_103100;
var G__103125 = (i__102993_103101 + (1));
seq__102990_103098 = G__103122;
chunk__102991_103099 = G__103123;
count__102992_103100 = G__103124;
i__102993_103101 = G__103125;
continue;
} else {
var temp__5804__auto___103126__$1 = cljs.core.seq(seq__102990_103098);
if(temp__5804__auto___103126__$1){
var seq__102990_103127__$1 = temp__5804__auto___103126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__102990_103127__$1)){
var c__5565__auto___103128 = cljs.core.chunk_first(seq__102990_103127__$1);
var G__103129 = cljs.core.chunk_rest(seq__102990_103127__$1);
var G__103130 = c__5565__auto___103128;
var G__103131 = cljs.core.count(c__5565__auto___103128);
var G__103132 = (0);
seq__102990_103098 = G__103129;
chunk__102991_103099 = G__103130;
count__102992_103100 = G__103131;
i__102993_103101 = G__103132;
continue;
} else {
var vec__103018_103133 = cljs.core.first(seq__102990_103127__$1);
var block_id_103134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018_103133,(0),null);
var items_103135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018_103133,(1),null);
var block_id_103136__$1 = ((typeof block_id_103134 === 'string')?cljs.core.uuid(block_id_103134):block_id_103134);
var new_properties_103137 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103135),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,items_103135));
var temp__5804__auto___103138__$2 = (function (){var G__103021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103136__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__103021) : frontend.db.entity.call(null,G__103021));
})();
if(cljs.core.truth_(temp__5804__auto___103138__$2)){
var block_103139 = temp__5804__auto___103138__$2;
var format_103140 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block_103139);
var content_103141 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_103139);
var properties_103142 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_103139);
var properties_text_values_103143 = new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block_103139);
var properties_103144__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_103142,new_properties_103137], 0)));
var properties_text_values_103145__$1 = logseq.graph_parser.util.remove_nils_non_nested(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_text_values_103143,new_properties_103137], 0)));
var property_ks_103146 = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(properties_103144__$1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block_103139),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,items_103135)))));
var content_103147__$1 = frontend.util.property.remove_properties(format_103140,content_103141);
var kvs_103148 = (function (){var iter__5520__auto__ = ((function (seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103140,content_103141,properties_103142,properties_text_values_103143,properties_103144__$1,properties_text_values_103145__$1,property_ks_103146,content_103147__$1,block_103139,temp__5804__auto___103138__$2,block_id_103136__$1,new_properties_103137,vec__103018_103133,block_id_103134,items_103135,seq__102990_103127__$1,temp__5804__auto___103126__$1,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103022(s__103023){
return (new cljs.core.LazySeq(null,((function (seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103140,content_103141,properties_103142,properties_text_values_103143,properties_103144__$1,properties_text_values_103145__$1,property_ks_103146,content_103147__$1,block_103139,temp__5804__auto___103138__$2,block_id_103136__$1,new_properties_103137,vec__103018_103133,block_id_103134,items_103135,seq__102990_103127__$1,temp__5804__auto___103126__$1,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__){
return (function (){
var s__103023__$1 = s__103023;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__103023__$1);
if(temp__5804__auto____$3){
var s__103023__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__103023__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__103023__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__103025 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__103024 = (0);
while(true){
if((i__103024 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__103024);
cljs.core.chunk_append(b__103025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103145__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103144__$1,key);
}
})()], null));

var G__103152 = (i__103024 + (1));
i__103024 = G__103152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__103025),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103022(cljs.core.chunk_rest(s__103023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__103025),null);
}
} else {
var key = cljs.core.first(s__103023__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_text_values_103145__$1,key);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_103144__$1,key);
}
})()], null),frontend$handler$editor$property$batch_set_block_property_BANG__$_iter__103022(cljs.core.rest(s__103023__$2)));
}
} else {
return null;
}
break;
}
});})(seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103140,content_103141,properties_103142,properties_text_values_103143,properties_103144__$1,properties_text_values_103145__$1,property_ks_103146,content_103147__$1,block_103139,temp__5804__auto___103138__$2,block_id_103136__$1,new_properties_103137,vec__103018_103133,block_id_103134,items_103135,seq__102990_103127__$1,temp__5804__auto___103126__$1,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
,null,null));
});})(seq__102990_103098,chunk__102991_103099,count__102992_103100,i__102993_103101,format_103140,content_103141,properties_103142,properties_text_values_103143,properties_103144__$1,properties_text_values_103145__$1,property_ks_103146,content_103147__$1,block_103139,temp__5804__auto___103138__$2,block_id_103136__$1,new_properties_103137,vec__103018_103133,block_id_103134,items_103135,seq__102990_103127__$1,temp__5804__auto___103126__$1,_STAR_transaction_data_STAR__orig_val__102986_103094,_STAR_transaction_opts_STAR__orig_val__102987_103095,_STAR_transaction_data_STAR__temp_val__102988_103096,_STAR_transaction_opts_STAR__temp_val__102989_103097,transact_data__102865__auto___103031,transaction_opts__102866__auto___103032,opts__102867__auto___103033,before_editor_cursor__102868__auto___103034,col_SINGLEQUOTE__103030,repo,temp__5804__auto__))
;
return iter__5520__auto__(property_ks_103146);
})();
var content_103149__$2 = frontend.util.property.insert_properties(format_103140,content_103147__$1,kvs_103148);
var content_103150__$3 = frontend.util.property.remove_empty_properties(content_103149__$2);
var block_103151__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_103136__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties_103144__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),property_ks_103146,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),properties_text_values_103145__$1,new cljs.core.Keyword("block","content","block/content",-161885195),content_103150__$3], null);
frontend.modules.outliner.core.save_block_BANG_(block_103151__$1);
} else {
}


var G__103153 = cljs.core.next(seq__102990_103127__$1);
var G__103154 = null;
var G__103155 = (0);
var G__103156 = (0);
seq__102990_103098 = G__103153;
chunk__102991_103099 = G__103154;
count__102992_103100 = G__103155;
i__102993_103101 = G__103156;
continue;
}
} else {
}
}
break;
}

var r__102869__auto___103157 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___103158 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___103157], 0));
var tx_meta__102871__auto___103159 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___103157));
var all_tx__102872__auto___103160 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___103158,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___103033));
var o__102873__auto___103161 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___103162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___103161));
var opts_SHARP___102875__auto___103163 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___103162,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___103159], 0));
if(cljs.core.seq(all_tx__102872__auto___103160)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___103033))){
} else {
var result__102876__auto___103164 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___103160,opts_SHARP___102875__auto___103163,before_editor_cursor__102868__auto___103034);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___103160,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___103159,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___103164], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__102987_103095);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__102986_103094);
}}

var block_id = cljs.core.ffirst(col);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var input_pos = (function (){var or__5043__auto__ = frontend.state.get_edit_pos();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"max","max",61366548);
}
})();
var temp__5804__auto____$1 = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto____$1)){
var editing_block = temp__5804__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block),block_id__$1)){
return frontend.handler.editor.property.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(editing_block,input_pos,frontend.state.get_edit_input_id());
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.property.batch_add_block_property_BANG_ = (function frontend$handler$editor$property$batch_add_block_property_BANG_(block_ids,property_key,property_value){
return frontend.handler.editor.property.batch_set_block_property_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103026_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__103026_SHARP_,property_key,property_value],null));
}),block_ids));
});
frontend.handler.editor.property.batch_remove_block_property_BANG_ = (function frontend$handler$editor$property$batch_remove_block_property_BANG_(block_ids,property_key){
return frontend.handler.editor.property.batch_set_block_property_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103027_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__103027_SHARP_,property_key,null],null));
}),block_ids));
});
frontend.handler.editor.property.remove_block_property_BANG_ = (function frontend$handler$editor$property$remove_block_property_BANG_(block_id,key){
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
return frontend.handler.editor.property.batch_set_block_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,key__$1,null], null)], null));
});
frontend.handler.editor.property.set_block_property_BANG_ = (function frontend$handler$editor$property$set_block_property_BANG_(block_id,key,value){
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
return frontend.handler.editor.property.batch_set_block_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,key__$1,value], null)], null));
});

//# sourceMappingURL=frontend.handler.editor.property.js.map
