goog.provide('frontend.handler.editor');
goog.scope(function(){
  frontend.handler.editor.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_QMARK_ !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_asset_uploading_process !== 'undefined')){
} else {
frontend.handler.editor._STAR_asset_uploading_process = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.handler.editor.clear_selection_BANG_ = frontend.handler.editor.property.clear_selection_BANG_;
frontend.handler.editor.edit_block_BANG_ = frontend.handler.editor.property.edit_block_BANG_;
frontend.handler.editor.get_block_own_order_list_type = (function frontend$handler$editor$get_block_own_order_list_type(block){
var G__105646 = block;
var G__105646__$1 = (((G__105646 == null))?null:new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(G__105646));
if((G__105646__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366).cljs$core$IFn$_invoke$arity$1(G__105646__$1);
}
});
frontend.handler.editor.set_block_own_order_list_type_BANG_ = (function frontend$handler$editor$set_block_own_order_list_type_BANG_(block,type){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var uuid = temp__5804__auto__;
return frontend.handler.editor.property.set_block_property_BANG_(uuid,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366),cljs.core.name(type));
} else {
return null;
}
});
frontend.handler.editor.remove_block_own_order_list_type_BANG_ = (function frontend$handler$editor$remove_block_own_order_list_type_BANG_(block){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var uuid = temp__5804__auto__;
return frontend.handler.editor.property.remove_block_property_BANG_(uuid,new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366));
} else {
return null;
}
});
frontend.handler.editor.own_order_number_list_QMARK_ = (function frontend$handler$editor$own_order_number_list_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_block_own_order_list_type(block),"number");
});
frontend.handler.editor.make_block_as_own_order_list_BANG_ = (function frontend$handler$editor$make_block_as_own_order_list_BANG_(block){
var G__105647 = block;
if((G__105647 == null)){
return null;
} else {
return frontend.handler.editor.set_block_own_order_list_type_BANG_(G__105647,"number");
}
});
frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_ = (function frontend$handler$editor$toggle_blocks_as_own_order_list_BANG_(blocks){
if(cljs.core.seq(blocks)){
var has_ordered_QMARK_ = cljs.core.some(frontend.handler.editor.own_order_number_list_QMARK_,blocks);
var blocks_uuids = (function (){var G__105648 = blocks;
var G__105648__$1 = (((G__105648 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),G__105648));
if((G__105648__$1 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__105648__$1);
}
})();
var order_list_prop = new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366);
if(cljs.core.truth_(has_ordered_QMARK_)){
return frontend.handler.editor.property.batch_remove_block_property_BANG_(blocks_uuids,order_list_prop);
} else {
return frontend.handler.editor.property.batch_add_block_property_BANG_(blocks_uuids,order_list_prop,"number");
}
} else {
return null;
}
});
frontend.handler.editor.get_selection_and_format = (function frontend$handler$editor$get_selection_and_format(){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5804__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto____$1)){
var edit_id = temp__5804__auto____$1;
var temp__5804__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5804__auto____$2)){
var input = temp__5804__auto____$2;
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var selection = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_start,selection_end):null);
var selection_start__$1 = (selection_start + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__105649_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__105649_SHARP_);
}),selection)));
var selection_end__$1 = (selection_end - cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__105650_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__105650_SHARP_);
}),cljs.core.reverse(selection))));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selection-start","selection-start",-888859581),selection_start__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835),selection_end__$1,new cljs.core.Keyword(null,"selection","selection",975998651),(function (){var G__105651 = selection;
if((G__105651 == null)){
return null;
} else {
return clojure.string.trim(G__105651);
}
})(),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),edit_id,new cljs.core.Keyword(null,"input","input",556931961),input], null);
} else {
return null;
}
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
frontend.handler.editor.format_text_BANG_ = (function frontend$handler$editor$format_text_BANG_(pattern_fn){
var temp__5804__auto__ = frontend.handler.editor.get_selection_and_format();
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var map__105653 = m;
var map__105653__$1 = cljs.core.__destructure_map(map__105653);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105653__$1,new cljs.core.Keyword(null,"input","input",556931961));
var pattern = (pattern_fn.cljs$core$IFn$_invoke$arity$1 ? pattern_fn.cljs$core$IFn$_invoke$arity$1(format) : pattern_fn.call(null,format));
var pattern_count = cljs.core.count(pattern);
var pattern_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var x__5128__auto__ = (0);
var y__5129__auto__ = (selection_start - pattern_count);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),selection_start);
var pattern_suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,selection_end,(function (){var x__5131__auto__ = cljs.core.count(value);
var y__5132__auto__ = (selection_end + pattern_count);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
var already_wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pattern,pattern_prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern_suffix], 0));
var prefix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(selection_start - pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start));
var postfix = ((already_wrapped_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(selection_end + pattern_count)):cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
var inner_value = (function (){var G__105654 = selection;
if((!(already_wrapped_QMARK_))){
return (function (p1__105652_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__105652_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
})(G__105654);
} else {
return G__105654;
}
})();
var new_value = [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_value),postfix].join('');
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

if(already_wrapped_QMARK_){
return frontend.util.cursor.set_selection_to(input,(selection_start - pattern_count),(selection_end - pattern_count));
} else {
if(cljs.core.truth_(selection)){
return frontend.util.cursor.move_cursor_to(input,(selection_end + pattern_count));
} else {
return frontend.util.cursor.set_selection_to(input,(selection_start + pattern_count),(selection_end + pattern_count));

}
}
} else {
return null;
}
});
frontend.handler.editor.bold_format_BANG_ = (function frontend$handler$editor$bold_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_bold);
});
frontend.handler.editor.italics_format_BANG_ = (function frontend$handler$editor$italics_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_italic);
});
frontend.handler.editor.highlight_format_BANG_ = (function frontend$handler$editor$highlight_format_BANG_(){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
return frontend.handler.editor.format_text_BANG_((function (){
return frontend.config.get_highlight(format);
}));
} else {
return null;
}
});
frontend.handler.editor.strike_through_format_BANG_ = (function frontend$handler$editor$strike_through_format_BANG_(){
return frontend.handler.editor.format_text_BANG_(frontend.config.get_strike_through);
});
frontend.handler.editor.html_link_format_BANG_ = (function frontend$handler$editor$html_link_format_BANG_(var_args){
var G__105656 = arguments.length;
switch (G__105656) {
case 0:
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.html_link_format_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (text){
var temp__5804__auto__ = frontend.handler.editor.get_selection_and_format();
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var map__105657 = m;
var map__105657__$1 = cljs.core.__destructure_map(map__105657);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105657__$1,new cljs.core.Keyword(null,"input","input",556931961));
var empty_selection_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var selection_link_QMARK_ = (function (){var and__5041__auto__ = selection;
if(cljs.core.truth_(and__5041__auto__)){
return logseq.graph_parser.mldoc.mldoc_link_QMARK_(format,selection);
} else {
return and__5041__auto__;
}
})();
var vec__105658 = ((empty_selection_QMARK_)?frontend.config.get_empty_link_and_forward_pos(format):(cljs.core.truth_((function (){var and__5041__auto__ = text;
if(cljs.core.truth_(and__5041__auto__)){
return selection_link_QMARK_;
} else {
return and__5041__auto__;
}
})())?frontend.config.with_label_link(format,text,selection):(cljs.core.truth_(text)?frontend.config.with_label_link(format,selection,text):(cljs.core.truth_(selection_link_QMARK_)?frontend.config.with_default_link(format,selection):frontend.config.with_default_label(format,selection)
))));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105658,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105658,(1),null);
var new_value = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end)].join('');
var cur_pos = (function (){var or__5043__auto__ = selection_start;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.cursor.pos(input);
}
})();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,new_value);

return frontend.util.cursor.move_cursor_to(input,(cur_pos + forward_pos));
} else {
return null;
}
}));

(frontend.handler.editor.html_link_format_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.open_block_in_sidebar_BANG_ = (function frontend$handler$editor$open_block_in_sidebar_BANG_(block_id){
if(cljs.core.truth_(block_id)){
var temp__5804__auto__ = (function (){var G__105661 = ((typeof block_id === 'number')?block_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105661) : frontend.db.entity.call(null,G__105661));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var page_QMARK_ = (new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block) == null);
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),((page_QMARK_)?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210)));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.reset_cursor_range_BANG_ = (function frontend$handler$editor$reset_cursor_range_BANG_(node){
if(cljs.core.truth_(node)){
return frontend.state.set_cursor_range_BANG_(frontend.util.caret_range(node));
} else {
return null;
}
});
frontend.handler.editor.restore_cursor_pos_BANG_ = (function frontend$handler$editor$restore_cursor_pos_BANG_(id,markup){
var temp__5804__auto__ = goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
var cursor_range = frontend.state.get_cursor_range();
var pos = (function (){var or__5043__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = cursor_range;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.diff.find_position(markup,cursor_range);
} else {
return and__5041__auto__;
}
}
})();
frontend.util.cursor.move_cursor_to(node,pos);

return frontend.state.clear_editor_last_pos_BANG_();
} else {
return null;
}
});
frontend.handler.editor.highlight_block_BANG_ = (function frontend$handler$editor$highlight_block_BANG_(block_uuid){
var blocks = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid)));
var seq__105662 = cljs.core.seq(blocks);
var chunk__105663 = null;
var count__105664 = (0);
var i__105665 = (0);
while(true){
if((i__105665 < count__105664)){
var block = chunk__105663.cljs$core$IIndexed$_nth$arity$2(null,i__105665);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__106308 = seq__105662;
var G__106309 = chunk__105663;
var G__106310 = count__105664;
var G__106311 = (i__105665 + (1));
seq__105662 = G__106308;
chunk__105663 = G__106309;
count__105664 = G__106310;
i__105665 = G__106311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__105662);
if(temp__5804__auto__){
var seq__105662__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__105662__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__105662__$1);
var G__106312 = cljs.core.chunk_rest(seq__105662__$1);
var G__106313 = c__5565__auto__;
var G__106314 = cljs.core.count(c__5565__auto__);
var G__106315 = (0);
seq__105662 = G__106312;
chunk__105663 = G__106313;
count__105664 = G__106314;
i__105665 = G__106315;
continue;
} else {
var block = cljs.core.first(seq__105662__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"block-highlight");


var G__106316 = cljs.core.next(seq__105662__$1);
var G__106317 = null;
var G__106318 = (0);
var G__106319 = (0);
seq__105662 = G__106316;
chunk__105663 = G__106317;
count__105664 = G__106318;
i__105665 = G__106319;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.unhighlight_blocks_BANG_ = (function frontend$handler$editor$unhighlight_blocks_BANG_(){
var blocks = (function (){var G__105666 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName("block-highlight"));
var G__105666__$1 = (((G__105666 == null))?null:cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),G__105666));
if((G__105666__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__105666__$1);
}
})();
var seq__105667 = cljs.core.seq(blocks);
var chunk__105668 = null;
var count__105669 = (0);
var i__105670 = (0);
while(true){
if((i__105670 < count__105669)){
var block = chunk__105668.cljs$core$IIndexed$_nth$arity$2(null,i__105670);
goog.dom.classes.remove(block,"block-highlight");


var G__106320 = seq__105667;
var G__106321 = chunk__105668;
var G__106322 = count__105669;
var G__106323 = (i__105670 + (1));
seq__105667 = G__106320;
chunk__105668 = G__106321;
count__105669 = G__106322;
i__105670 = G__106323;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__105667);
if(temp__5804__auto__){
var seq__105667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__105667__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__105667__$1);
var G__106324 = cljs.core.chunk_rest(seq__105667__$1);
var G__106325 = c__5565__auto__;
var G__106326 = cljs.core.count(c__5565__auto__);
var G__106327 = (0);
seq__105667 = G__106324;
chunk__105668 = G__106325;
count__105669 = G__106326;
i__105670 = G__106327;
continue;
} else {
var block = cljs.core.first(seq__105667__$1);
goog.dom.classes.remove(block,"block-highlight");


var G__106328 = cljs.core.next(seq__105667__$1);
var G__106329 = null;
var G__106330 = (0);
var G__106331 = (0);
seq__105667 = G__106328;
chunk__105668 = G__106329;
count__105669 = G__106330;
i__105670 = G__106331;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.editor.another_block_with_same_id_exists_QMARK_ = (function frontend$handler$editor$another_block_with_same_id_exists_QMARK_(current_id,block_id){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof block_id === 'string';
if(and__5041__auto__){
return cljs.core.parse_uuid(block_id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_id,id);
if(and__5041__auto__){
var G__105671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105671) : frontend.db.entity.call(null,G__105671));
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
frontend.handler.editor.remove_non_existed_refs_BANG_ = (function frontend$handler$editor$remove_non_existed_refs_BANG_(refs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return ((((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(x))) && (((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(x) : frontend.db.entity.call(null,x)) == null)))))) || ((x == null)));
}),refs);
});
frontend.handler.editor.with_marker_time = (function frontend$handler$editor$with_marker_time(content,block,format,new_marker,old_marker){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.enable_timetracking_QMARK_();
if(and__5041__auto__){
return new_marker;
} else {
return and__5041__auto__;
}
})())){
try{var logbook_exists_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.drawer.get_logbook(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})();
var new_marker__$1 = clojure.string.trim(clojure.string.lower_case(cljs.core.name(new_marker)));
var old_marker__$1 = (cljs.core.truth_(old_marker)?clojure.string.trim(clojure.string.lower_case(cljs.core.name(old_marker))):null);
var new_content = (((((((old_marker__$1 == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"todo")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"doing")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"later")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"now")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["now"], 0))) && (cljs.core.not(logbook_exists_QMARK_)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(old_marker__$1,new_marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["doing"], 0))) && (cljs.core.not(logbook_exists_QMARK_))))))))))))?frontend.util.clock.clock_in(format,content):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"doing")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"todo")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_marker__$1,"now")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"later")))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["doing",null,"now",null], null), null),old_marker__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_marker__$1,"done"))))))))?frontend.util.clock.clock_out(format,content):content
));
return new_content;
}catch (e105672){var _e = e105672;
return content;
}} else {
return content;
}
});
frontend.handler.editor.with_timetracking = (function frontend$handler$editor$with_timetracking(block,value){
if(((frontend.state.enable_timetracking_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),value)))){
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var new_marker = cljs.core.last(frontend.util.safe_re_find(frontend.util.marker.marker_pattern(format),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()));
var new_value = frontend.handler.editor.with_marker_time(value,block,format,new_marker,new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block));
return new_value;
} else {
return value;
}
});
frontend.handler.editor.wrap_parse_block = (function frontend$handler$editor$wrap_parse_block(p__105673){
var map__105674 = p__105673;
var map__105674__$1 = cljs.core.__destructure_map(map__105674);
var block = map__105674__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105674__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var block__$1 = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
var G__105678 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105678) : frontend.db.pull.call(null,G__105678));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})();
var block__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$1))], 0));
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$2);
var properties__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089))) && (typeof new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties) === 'number')))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.Keyword(null,"heading","heading",-1312171873)):properties);
var real_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block__$2);
var content__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.seq(properties__$1);
if(and__5041__auto__){
var and__5041__auto____$1 = real_content;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(real_content,content);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?frontend.util.property.with_built_in_properties(properties__$1,content,format):content);
var content__$2 = frontend.util.drawer.with_logbook(block__$2,content__$1);
var content__$3 = frontend.handler.editor.with_timetracking(block__$2,content__$2);
var first_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,page);
var ast = frontend.format.mldoc.__GT_edn(clojure.string.trim(content__$3),logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
var first_elem_meta = cljs.core.second(cljs.core.ffirst(ast));
var properties_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),first_elem_type);
var markdown_heading_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",first_elem_type)) && ((new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(first_elem_meta) == null)))));
var block_with_title_QMARK_ = frontend.format.mldoc.block_with_title_QMARK_(first_elem_type);
var content__$4 = clojure.string.triml(content__$3);
var content__$5 = clojure.string.replace(content__$4,logseq.graph_parser.util.block_ref.__GT_block_ref(uuid),"");
var vec__105675 = ((((first_block_QMARK_) && (properties_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):((markdown_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content__$5], null):(function (){var content_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format)),((block_with_title_QMARK_)?" ":"\n"),content__$5].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$5,content_SINGLEQUOTE_], null);
})()
));
var content__$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105675,(0),null);
var content_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105675,(1),null);
var block__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","content","block/content",-161885195),content_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var block__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$3,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),null], null), null),logseq.db.schema.retract_attributes));
var block__$5 = frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1(block__$4);
var block__$6 = (cljs.core.truth_((function (){var and__5041__auto__ = first_block_QMARK_;
if(and__5041__auto__){
return new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block__$5);
} else {
return and__5041__auto__;
}
})())?block__$5:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block__$5,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521)));
var block__$7 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.editor.remove_non_existed_refs_BANG_);
var block__$8 = (cljs.core.truth_((function (){var and__5041__auto__ = left;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block__$7),left);
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$7,new cljs.core.Keyword("block","left","block/left",-443712566),left):block__$7);
var new_properties = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(properties__$1,frontend.util.property.hidden_properties()),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block__$8)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$8,new cljs.core.Keyword("block.temp","top?","block.temp/top?",-574427865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","bottom?","block.temp/bottom?",-752374337)], 0)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties], 0)),(cljs.core.truth_(level)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","level","block/level",1182509971),level], null):cljs.core.PersistentArrayMap.EMPTY)], 0));
});
frontend.handler.editor.save_block_inner_BANG_ = (function frontend$handler$editor$save_block_inner_BANG_(block,value,opts){
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),value);
var block__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block__$1,logseq.db.schema.retract_attributes);
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = "Save block: ";
console.time(k__62654__auto__);

var res__62655__auto__ = (function (){var original_block = (function (){var G__105679 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$2);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105679) : frontend.db.entity.call(null,G__105679));
})();
var original_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_block);
var original_props = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(original_block);
var uuid_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2),original_uuid);
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(block__$2),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2));
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,(function (){var G__105680 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null);
if(uuid_changed_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__105680,new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2),new cljs.core.Keyword(null,"to","to",192099007),original_uuid], null));
} else {
return G__105680;
}
})()], 0));
var transact_data__102865__auto___106332 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106333 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106334 = (cljs.core.truth_(transact_data__102865__auto___106332)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts_SINGLEQUOTE_,new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):opts_SINGLEQUOTE_);
var before_editor_cursor__102868__auto___106335 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106332)){
if(cljs.core.truth_(transaction_opts__102866__auto___106333)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106333,opts__102867__auto___106334);
} else {
}

frontend.modules.outliner.core.save_block_BANG_(block_SINGLEQUOTE_);

var temp__5804__auto___106336 = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_props,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
if(and__5041__auto____$1){
var G__105681 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var G__105681__$1 = (((G__105681 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__105681));
var G__105681__$2 = (((G__105681__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__105681__$1));
if((G__105681__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__105681__$2);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___106336)){
var page_name_106337 = temp__5804__auto___106336;
frontend.state.set_page_properties_changed_BANG_(page_name_106337);
} else {
}
} else {
var _STAR_transaction_data_STAR__orig_val__105682_106338 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105683_106339 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105684_106340 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105685_106341 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105684_106340);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105685_106341);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106333,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106334], 0));

frontend.modules.outliner.core.save_block_BANG_(block_SINGLEQUOTE_);

var temp__5804__auto___106342 = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_props,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
if(and__5041__auto____$1){
var G__105686 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var G__105686__$1 = (((G__105686 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__105686));
var G__105686__$2 = (((G__105686__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__105686__$1));
if((G__105686__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__105686__$2);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___106342)){
var page_name_106343 = temp__5804__auto___106342;
frontend.state.set_page_properties_changed_BANG_(page_name_106343);
} else {
}

var r__102869__auto___106344 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106345 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106344], 0));
var tx_meta__102871__auto___106346 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106344));
var all_tx__102872__auto___106347 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106345,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106334));
var o__102873__auto___106348 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106348));
var opts_SHARP___102875__auto___106350 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106349,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106346], 0));
if(cljs.core.seq(all_tx__102872__auto___106347)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106334))){
} else {
var result__102876__auto___106351 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106347,opts_SHARP___102875__auto___106350,before_editor_cursor__102868__auto___106335);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106347,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106346,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106351], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105683_106339);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105682_106338);
}}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var title = temp__5804__auto__;
if(typeof title === 'string'){
var temp__5804__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__105687 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105687) : frontend.db.entity.call(null,G__105687));
})());
if(cljs.core.truth_(temp__5804__auto____$1)){
var old_page_name = temp__5804__auto____$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),old_page_name,title], null));
} else {
return null;
}
} else {
return null;
}
} else {
return console.error(["Title is not a string: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));
}
} else {
return null;
}
})();
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
var original_block = (function (){var G__105688 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$2);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105688) : frontend.db.entity.call(null,G__105688));
})();
var original_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_block);
var original_props = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(original_block);
var uuid_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2),original_uuid);
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(block__$2),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2));
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,(function (){var G__105689 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null);
if(uuid_changed_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__105689,new cljs.core.Keyword(null,"uuid-changed","uuid-changed",-420125800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2),new cljs.core.Keyword(null,"to","to",192099007),original_uuid], null));
} else {
return G__105689;
}
})()], 0));
var transact_data__102865__auto___106352 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106353 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106354 = (cljs.core.truth_(transact_data__102865__auto___106352)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts_SINGLEQUOTE_,new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):opts_SINGLEQUOTE_);
var before_editor_cursor__102868__auto___106355 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106352)){
if(cljs.core.truth_(transaction_opts__102866__auto___106353)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106353,opts__102867__auto___106354);
} else {
}

frontend.modules.outliner.core.save_block_BANG_(block_SINGLEQUOTE_);

var temp__5804__auto___106356 = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_props,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
if(and__5041__auto____$1){
var G__105690 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var G__105690__$1 = (((G__105690 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__105690));
var G__105690__$2 = (((G__105690__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__105690__$1));
if((G__105690__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__105690__$2);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___106356)){
var page_name_106357 = temp__5804__auto___106356;
frontend.state.set_page_properties_changed_BANG_(page_name_106357);
} else {
}
} else {
var _STAR_transaction_data_STAR__orig_val__105691_106358 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105692_106359 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105693_106360 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105694_106361 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105693_106360);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105694_106361);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106353,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106354], 0));

frontend.modules.outliner.core.save_block_BANG_(block_SINGLEQUOTE_);

var temp__5804__auto___106362 = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_props,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
if(and__5041__auto____$1){
var G__105695 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
var G__105695__$1 = (((G__105695 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__105695));
var G__105695__$2 = (((G__105695__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__105695__$1));
if((G__105695__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__105695__$2);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___106362)){
var page_name_106363 = temp__5804__auto___106362;
frontend.state.set_page_properties_changed_BANG_(page_name_106363);
} else {
}

var r__102869__auto___106364 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106365 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106364], 0));
var tx_meta__102871__auto___106366 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106364));
var all_tx__102872__auto___106367 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106365,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106354));
var o__102873__auto___106368 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106368));
var opts_SHARP___102875__auto___106370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106369,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106366], 0));
if(cljs.core.seq(all_tx__102872__auto___106367)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106354))){
} else {
var result__102876__auto___106371 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106367,opts_SHARP___102875__auto___106370,before_editor_cursor__102868__auto___106355);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106367,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106366,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106371], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105692_106359);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105691_106358);
}}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var title = temp__5804__auto__;
if(typeof title === 'string'){
var temp__5804__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__105696 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105696) : frontend.db.entity.call(null,G__105696));
})());
if(cljs.core.truth_(temp__5804__auto____$1)){
var old_page_name = temp__5804__auto____$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(title)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title)),old_page_name)));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),old_page_name,title], null));
} else {
return null;
}
} else {
return null;
}
} else {
return console.error(["Title is not a string: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));
}
} else {
return null;
}
}
});
frontend.handler.editor.save_block_if_changed_BANG_ = (function frontend$handler$editor$save_block_if_changed_BANG_(var_args){
var G__105698 = arguments.length;
switch (G__105698) {
case 2:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block,value){
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value,null);
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (block,value,p__105699){
var map__105700 = p__105699;
var map__105700__$1 = cljs.core.__destructure_map(map__105700);
var opts = map__105700__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105700__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var map__105701 = block;
var map__105701__$1 = cljs.core.__destructure_map(map__105701);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var page__$1 = (function (){var G__105702 = repo__$1;
var G__105703 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__105702,G__105703) : frontend.db.entity.call(null,G__105702,G__105703));
})();
var block_id = ((cljs.core.map_QMARK_(properties))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.Keyword(null,"id","id",-1388402092)):null);
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format__$1,content));
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.editor.another_block_with_same_id_exists_QMARK_(uuid,block_id);
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("editor","op","editor/op",-441449246).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Block with the id %s already exists!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_id], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
if(cljs.core.truth_(force_QMARK_)){
return frontend.handler.editor.save_block_inner_BANG_(block,value,opts);
} else {
var content_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content__$1),clojure.string.trim(value));
if(cljs.core.truth_((function (){var and__5041__auto__ = content_changed_QMARK_;
if(and__5041__auto__){
return page__$1;
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.save_block_inner_BANG_(block,value,opts);
} else {
return null;
}

}
}
}));

(frontend.handler.editor.save_block_if_changed_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.compute_fst_snd_block_text = (function frontend$handler$editor$compute_fst_snd_block_text(value,selection_start,selection_end){
if(typeof value === 'string'){
var fst_block_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selection_start);
var snd_block_text = clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selection_end));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst_block_text,snd_block_text], null);
} else {
return null;
}
});
frontend.handler.editor.outliner_insert_block_BANG_ = (function frontend$handler$editor$outliner_insert_block_BANG_(config,current_block,new_block,p__105704){
var map__105705 = p__105704;
var map__105705__$1 = cljs.core.__destructure_map(map__105705);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105705__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105705__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var ordered_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105705__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105705__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var ref_query_top_block_QMARK_ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config));
} else {
return and__5041__auto__;
}
})();
var has_children_QMARK_ = (function (){var G__105706 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__105706) : frontend.db.has_children_QMARK_.call(null,G__105706));
})();
var sibling_QMARK___$1 = (cljs.core.truth_(ref_query_top_block_QMARK_)?false:((cljs.core.boolean_QMARK_(sibling_QMARK_))?sibling_QMARK_:(cljs.core.truth_(frontend.util.collapsed_QMARK_(current_block))?true:cljs.core.not(has_children_QMARK_)
)));
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

var G__105707_106373 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__105707_106373) : frontend.handler.editor.save_current_block_BANG_.call(null,G__105707_106373));

return frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),ordered_list_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__105708 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105709 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105710 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105711 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105710);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105711);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

var G__105712_106374 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),current_block], null);
(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(G__105712_106374) : frontend.handler.editor.save_current_block_BANG_.call(null,G__105712_106374));

frontend.modules.outliner.core.insert_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block], null),current_block,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),ordered_list_QMARK_], null));

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105709);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105708);
}}
});
frontend.handler.editor.block_self_alone_when_insert_QMARK_ = (function frontend$handler$editor$block_self_alone_when_insert_QMARK_(config,uuid){
var current_page = frontend.state.get_current_page();
var block_id = (function (){var or__5043__auto__ = (function (){var G__105713 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if((G__105713 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__105713);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__105714 = current_page;
if((G__105714 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__105714);
}
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,block_id);
});
frontend.handler.editor.insert_new_block_before_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_before_block_aux_BANG_(config,block,value,p__105715){
var map__105716 = p__105715;
var map__105716__$1 = cljs.core.__destructure_map(map__105716);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105716__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var edit_input_id = frontend.state.get_edit_input_id();
var input = goog.dom.getElement(edit_input_id);
var input_text_selected_QMARK_ = frontend.util.input_text_selected_QMARK_(input);
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),""], null);
var prev_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var left_block = (function (){var G__105717 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105717) : frontend.db.pull.call(null,G__105717));
})();
if(input_text_selected_QMARK_){
var selection_start_106375 = frontend.util.get_selection_start(input);
var selection_end_106376 = frontend.util.get_selection_end(input);
var vec__105718_106377 = frontend.handler.editor.compute_fst_snd_block_text(value,selection_start_106375,selection_end_106376);
var __106378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105718_106377,(0),null);
var new_content_106379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105718_106377,(1),null);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content_106379);
} else {
}

if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto___106380 = "outliner insert block";
console.time(k__62654__auto___106380);

var res__62655__auto___106381 = (function (){var sibling_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
return frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
})();
console.timeEnd(k__62654__auto___106380);

} else {
var sibling_QMARK__106382 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.outliner_insert_block_BANG_(config,left_block,prev_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__106382,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));
}

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(prev_block) : ok_handler.call(null,prev_block));
});
frontend.handler.editor.insert_new_block_aux_BANG_ = (function frontend$handler$editor$insert_new_block_aux_BANG_(config,p__105721,value,p__105722){
var map__105723 = p__105721;
var map__105723__$1 = cljs.core.__destructure_map(map__105723);
var block = map__105723__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105723__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var map__105724 = p__105722;
var map__105724__$1 = cljs.core.__destructure_map(map__105724);
var _opts = map__105724__$1;
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105724__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var block_self_QMARK_ = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config,uuid);
var input = goog.dom.getElement(frontend.state.get_edit_input_id());
var selection_start = frontend.util.get_selection_start(input);
var selection_end = frontend.util.get_selection_end(input);
var vec__105725 = frontend.handler.editor.compute_fst_snd_block_text(value,selection_start,selection_end);
var fst_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105725,(0),null);
var snd_block_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105725,(1),null);
var current_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","content","block/content",-161885195),fst_block_text);
var current_block__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,current_block,logseq.db.schema.retract_attributes);
var current_block__$2 = frontend.handler.editor.wrap_parse_block(current_block__$1);
var new_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","content","block/content",-161885195),snd_block_text], null);
var next_block = frontend.handler.editor.wrap_parse_block(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127)], null)),new_m], 0)));
var sibling_QMARK_ = ((block_self_QMARK_)?false:null);
frontend.handler.editor.outliner_insert_block_BANG_(config,current_block__$2,next_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true], null));

frontend.util.set_change_value(input,fst_block_text);

return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(next_block) : ok_handler.call(null,next_block));
});
frontend.handler.editor.clear_when_saved_BANG_ = (function frontend$handler$editor$clear_when_saved_BANG_(){
return frontend.commands.restore_state();
});
frontend.handler.editor.get_state = (function frontend$handler$editor$get_state(){
var vec__105728 = frontend.state.get_editor_args();
var map__105731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105728,(0),null);
var map__105731__$1 = cljs.core.__destructure_map(map__105731);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105731__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105728,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105728,(2),null);
var node = goog.dom.getElement(id);
if(cljs.core.truth_(node)){
var value = frontend.handler.editor.goog$module$goog$object.get(node,"value");
var pos = frontend.util.get_selection_start(node);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550)],[format,(function (){var or__5043__auto__ = (function (){var G__105732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105732) : frontend.db.pull.call(null,G__105732));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block;
}
})(),config,sidebar_QMARK_,value,pos,on_hide,node,block_id,id,block_parent_id]);
} else {
return null;
}
});
/**
 * Won't save previous block content - remember to save!
 */
frontend.handler.editor.insert_new_block_BANG_ = (function frontend$handler$editor$insert_new_block_BANG_(var_args){
var G__105734 = arguments.length;
switch (G__105734) {
case 1:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_state,block_value){
if((((!(frontend.config.publishing_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert","insert",1286475395),frontend.state.get_editor_op())))){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"insert","insert",1286475395));

var temp__5804__auto___106384 = frontend.handler.editor.get_state();
if(cljs.core.truth_(temp__5804__auto___106384)){
var state_106385 = temp__5804__auto___106384;
var map__105735_106386 = state_106385;
var map__105735_106387__$1 = cljs.core.__destructure_map(map__105735_106386);
var block_106388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105735_106387__$1,new cljs.core.Keyword(null,"block","block",664686210));
var value_106389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105735_106387__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id_106390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105735_106387__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config_106391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105735_106387__$1,new cljs.core.Keyword(null,"config","config",994861415));
var value_106392__$1 = ((typeof block_value === 'string')?block_value:value_106389);
var block_id_106393 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106388);
var block_106394__$1 = (function (){var or__5043__auto__ = (function (){var G__105739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106393], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105739) : frontend.db.pull.call(null,G__105739));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block_106388;
}
})();
var block_self_QMARK__106395 = frontend.handler.editor.block_self_alone_when_insert_QMARK_(config_106391,block_id_106393);
var input_106396 = goog.dom.getElement(frontend.state.get_edit_input_id());
var selection_start_106397 = frontend.util.get_selection_start(input_106396);
var selection_end_106398 = frontend.util.get_selection_end(input_106396);
var vec__105736_106399 = frontend.handler.editor.compute_fst_snd_block_text(value_106392__$1,selection_start_106397,selection_end_106398);
var fst_block_text_106400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105736_106399,(0),null);
var snd_block_text_106401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105736_106399,(1),null);
var insert_fn_106402 = ((block_self_QMARK__106395)?frontend.handler.editor.insert_new_block_aux_BANG_:((((clojure.string.blank_QMARK_(fst_block_text_106400)) && ((!(clojure.string.blank_QMARK_(snd_block_text_106401))))))?frontend.handler.editor.insert_new_block_before_block_aux_BANG_:frontend.handler.editor.insert_new_block_aux_BANG_
));
var G__105740_106403 = config_106391;
var G__105741_106404 = block_106394__$1;
var G__105742_106405 = value_106392__$1;
var G__105743_106406 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089),(function (last_block){
frontend.handler.editor.clear_when_saved_BANG_();

return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(last_block,(0),id_106390) : frontend.handler.editor.edit_block_BANG_.call(null,last_block,(0),id_106390));
})], null);
(insert_fn_106402.cljs$core$IFn$_invoke$arity$4 ? insert_fn_106402.cljs$core$IFn$_invoke$arity$4(G__105740_106403,G__105741_106404,G__105742_106405,G__105743_106406) : insert_fn_106402.call(null,G__105740_106403,G__105741_106404,G__105742_106405,G__105743_106406));
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.insert_new_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.api_insert_new_block_BANG_ = (function frontend$handler$editor$api_insert_new_block_BANG_(content,p__105745){
var map__105746 = p__105745;
var map__105746__$1 = cljs.core.__destructure_map(map__105746);
var custom_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105746__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"page","page",849072397));
var before_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105746__$1,new cljs.core.Keyword(null,"before?","before?",765621039),false);
var edit_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105746__$1,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),true);
var ordered_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105746__$1,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082));
if(cljs.core.truth_((function (){var or__5043__auto__ = page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return block_uuid;
}
})())){
var before_QMARK___$1 = (cljs.core.truth_(page)?false:before_QMARK_);
var sibling_QMARK___$1 = cljs.core.boolean$(sibling_QMARK_);
var sibling_QMARK___$2 = (cljs.core.truth_(before_QMARK___$1)?true:(cljs.core.truth_(page)?false:sibling_QMARK___$1));
var block = (cljs.core.truth_(page)?(function (){var G__105747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105747) : frontend.db.entity.call(null,G__105747));
})():(function (){var G__105748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105748) : frontend.db.entity.call(null,G__105748));
})());
if(cljs.core.truth_(block)){
var last_block = (((!(sibling_QMARK___$2)))?(function (){var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var blocks = (frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2 ? frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block) : frontend.db.sort_by_left.call(null,children,block));
var last_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks));
if(cljs.core.truth_(last_block_id)){
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(last_block_id) : frontend.db.pull.call(null,last_block_id));
} else {
return null;
}
})():null);
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var G__105752 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__105752) : frontend.db.get_page_format.call(null,G__105752));
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
}
})();
var content__$1 = ((cljs.core.seq(properties))?frontend.util.property.insert_properties(format,content,properties):content);
var new_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)),new cljs.core.Keyword("block","content","block/content",-161885195),content__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","format","block/format",-1212045901),format], 0));
var new_block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_block,new cljs.core.Keyword("block","page","block/page",822314108),(cljs.core.truth_(page)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(new_block))));
var new_block__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.editor.wrap_parse_block(new_block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5043__auto__ = custom_uuid;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.new_block_id();
}
})());
var vec__105749 = (cljs.core.truth_(before_QMARK___$1)?(function (){var first_child_QMARK_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105744_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,p1__105744_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
var block__$1 = (function (){var G__105753 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105753) : frontend.db.pull.call(null,G__105753));
})();
var sibling_QMARK___$3 = (cljs.core.truth_((function (){var or__5043__auto__ = first_child_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())?false:sibling_QMARK___$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,sibling_QMARK___$3], null);
})():((sibling_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__105754 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105754) : frontend.db.pull.call(null,G__105754));
})(),sibling_QMARK___$2], null):(cljs.core.truth_(last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__105755 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105755) : frontend.db.pull.call(null,G__105755));
})(),sibling_QMARK___$2], null):null
))));
var block_m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105749,(0),null);
var sibling_QMARK___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105749,(1),null);
if(cljs.core.truth_(block_m)){
frontend.handler.editor.outliner_insert_block_BANG_(cljs.core.PersistentArrayMap.EMPTY,block_m,new_block__$2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$3,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK_,new cljs.core.Keyword(null,"ordered-list?","ordered-list?",-1717075082),ordered_list_QMARK_], null));

if(cljs.core.truth_(edit_block_QMARK_)){
if(cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__5041__auto__;
}
})())){
setTimeout((function (){
var G__105756 = last_block;
var G__105757 = new cljs.core.Keyword(null,"max","max",61366548);
var G__105758 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__105756,G__105757,G__105758) : frontend.handler.editor.edit_block_BANG_.call(null,G__105756,G__105757,G__105758));
}),(20));
} else {
setTimeout((function (){
var G__105759 = new_block__$2;
var G__105760 = new cljs.core.Keyword(null,"max","max",61366548);
var G__105761 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_block__$2);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__105759,G__105760,G__105761) : frontend.handler.editor.edit_block_BANG_.call(null,G__105759,G__105760,G__105761));
}),(20));
}
} else {
}

return new_block__$2;
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
frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_ = (function frontend$handler$editor$insert_first_page_block_if_not_exists_BANG_(var_args){
var G__105763 = arguments.length;
switch (G__105763) {
case 1:
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (page_title){
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(page_title,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (page_title,opts){
if(((typeof page_title === 'string') && ((!(clojure.string.blank_QMARK_(page_title)))))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page_title,opts], null));
} else {
return null;
}
}));

(frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.properties_block = (function frontend$handler$editor$properties_block(properties,format,page){
var content = frontend.util.property.insert_properties(format,"",properties);
var refs = logseq.graph_parser.block.get_page_refs_from_properties(properties,(function (){var G__105764 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__105764) : frontend.db.get_db.call(null,G__105764));
})(),frontend.state.get_date_formatter(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"format","format",-1306924766),format));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[true,frontend.db.new_block_id(),properties,page,refs,cljs.core.keys(properties),format,content,page,page]);
});
frontend.handler.editor.update_timestamps_content_BANG_ = (function frontend$handler$editor$update_timestamps_content_BANG_(p__105765,content){
var map__105766 = p__105765;
var map__105766__$1 = cljs.core.__destructure_map(map__105766);
var block = map__105766__$1;
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105766__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105766__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105766__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(repeated_QMARK_)){
var scheduled_ast = frontend.handler.block.get_scheduled_ast(block);
var deadline_ast = frontend.handler.block.get_deadline_ast(block);
var content__$1 = (function (){var G__105767 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.handler.repeated.repeated_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheduled_ast,deadline_ast], null));
var G__105767__$1 = (((G__105767 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ts),frontend.handler.repeated.next_timestamp_text(ts)], null);
}),G__105767));
if((G__105767__$1 == null)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__105768){
var vec__105769 = p__105768;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105769,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105769,(1),null);
return clojure.string.replace(content__$1,old,new$);
}),content,G__105767__$1);
}
})();
var content__$2 = clojure.string.replace_first(content__$1,marker,(function (){var G__105772 = marker;
switch (G__105772) {
case "DOING":
return "TODO";

break;
case "NOW":
return "LATER";

break;
default:
return marker;

}
})());
var content__$3 = frontend.util.clock.clock_out(format,content__$2);
var content__$4 = frontend.util.drawer.insert_drawer(format,content__$3,"logbook",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format))?"-":"*")," State \"DONE\" from \"%s\" [%s]"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker,frontend.date.get_date_time_string_3()], 0)));
return content__$4;
} else {
return content;
}
});
frontend.handler.editor.check = (function frontend$handler$editor$check(p__105773){
var map__105774 = p__105773;
var map__105774__$1 = cljs.core.__destructure_map(map__105774);
var block = map__105774__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105774__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105774__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var repeated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105774__$1,new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105774__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var new_content = clojure.string.replace_first(content,marker,"DONE");
var new_content__$1 = (cljs.core.truth_(repeated_QMARK_)?frontend.handler.editor.update_timestamps_content_BANG_(block,content):new_content);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content__$1);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content__$1);
}
});
frontend.handler.editor.uncheck = (function frontend$handler$editor$uncheck(p__105775){
var map__105776 = p__105775;
var map__105776__$1 = cljs.core.__destructure_map(map__105776);
var block = map__105776__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105776__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105776__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var marker = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"now","now",-1650525531),frontend.state.get_preferred_workflow()))?"LATER":"TODO");
var new_content = clojure.string.replace_first(content,"DONE",marker);
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}
});
frontend.handler.editor.get_selected_blocks = (function frontend$handler$editor$get_selected_blocks(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(frontend.state.get_selection_blocks()));
});
/**
 * The set-marker will set a new marker on the selected block.
 *   if the `new-marker` is nil, it will generate it automatically.
 */
frontend.handler.editor.set_marker = (function frontend$handler$editor$set_marker(var_args){
var G__105778 = arguments.length;
switch (G__105778) {
case 1:
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2 = (function (p__105779,new_marker){
var map__105780 = p__105779;
var map__105780__$1 = cljs.core.__destructure_map(map__105780);
var block = map__105780__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105780__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105780__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105780__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var vec__105781 = frontend.util.marker.cycle_marker(content,marker,new_marker,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105781,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105781,(1),null);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}));

(frontend.handler.editor.set_marker.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.cycle_todos_BANG_ = (function frontend$handler$editor$cycle_todos_BANG_(){
var temp__5804__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5804__auto__){
var blocks = temp__5804__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105784_SHARP_){
var temp__5804__auto____$1 = dommy.core.attr(p1__105784_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"cycle-todos","cycle-todos",-1473215654)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"cycle-todos","cycle-todos",-1473215654)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

var seq__105785 = cljs.core.seq(ids);
var chunk__105786 = null;
var count__105787 = (0);
var i__105788 = (0);
while(true){
if((i__105788 < count__105787)){
var id = chunk__105786.cljs$core$IIndexed$_nth$arity$2(null,i__105788);
var block_106410 = (function (){var G__105791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105791) : frontend.db.pull.call(null,G__105791));
})();
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_106410)))){
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_106410);
} else {
}


var G__106411 = seq__105785;
var G__106412 = chunk__105786;
var G__106413 = count__105787;
var G__106414 = (i__105788 + (1));
seq__105785 = G__106411;
chunk__105786 = G__106412;
count__105787 = G__106413;
i__105788 = G__106414;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__105785);
if(temp__5804__auto____$1){
var seq__105785__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__105785__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__105785__$1);
var G__106415 = cljs.core.chunk_rest(seq__105785__$1);
var G__106416 = c__5565__auto__;
var G__106417 = cljs.core.count(c__5565__auto__);
var G__106418 = (0);
seq__105785 = G__106415;
chunk__105786 = G__106416;
count__105787 = G__106417;
i__105788 = G__106418;
continue;
} else {
var id = cljs.core.first(seq__105785__$1);
var block_106419 = (function (){var G__105792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105792) : frontend.db.pull.call(null,G__105792));
})();
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_106419)))){
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_106419);
} else {
}


var G__106420 = cljs.core.next(seq__105785__$1);
var G__106421 = null;
var G__106422 = (0);
var G__106423 = (0);
seq__105785 = G__106420;
chunk__105786 = G__106421;
count__105787 = G__106422;
i__105788 = G__106423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__105793 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105794 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105795 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105796 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105795);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105796);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

var seq__105797_106424 = cljs.core.seq(ids);
var chunk__105798_106425 = null;
var count__105799_106426 = (0);
var i__105800_106427 = (0);
while(true){
if((i__105800_106427 < count__105799_106426)){
var id_106428 = chunk__105798_106425.cljs$core$IIndexed$_nth$arity$2(null,i__105800_106427);
var block_106429 = (function (){var G__105803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id_106428], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105803) : frontend.db.pull.call(null,G__105803));
})();
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_106429)))){
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_106429);
} else {
}


var G__106430 = seq__105797_106424;
var G__106431 = chunk__105798_106425;
var G__106432 = count__105799_106426;
var G__106433 = (i__105800_106427 + (1));
seq__105797_106424 = G__106430;
chunk__105798_106425 = G__106431;
count__105799_106426 = G__106432;
i__105800_106427 = G__106433;
continue;
} else {
var temp__5804__auto___106434__$1 = cljs.core.seq(seq__105797_106424);
if(temp__5804__auto___106434__$1){
var seq__105797_106435__$1 = temp__5804__auto___106434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__105797_106435__$1)){
var c__5565__auto___106436 = cljs.core.chunk_first(seq__105797_106435__$1);
var G__106437 = cljs.core.chunk_rest(seq__105797_106435__$1);
var G__106438 = c__5565__auto___106436;
var G__106439 = cljs.core.count(c__5565__auto___106436);
var G__106440 = (0);
seq__105797_106424 = G__106437;
chunk__105798_106425 = G__106438;
count__105799_106426 = G__106439;
i__105800_106427 = G__106440;
continue;
} else {
var id_106441 = cljs.core.first(seq__105797_106435__$1);
var block_106442 = (function (){var G__105804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id_106441], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105804) : frontend.db.pull.call(null,G__105804));
})();
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_106442)))){
frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$1(block_106442);
} else {
}


var G__106443 = cljs.core.next(seq__105797_106435__$1);
var G__106444 = null;
var G__106445 = (0);
var G__106446 = (0);
seq__105797_106424 = G__106443;
chunk__105798_106425 = G__106444;
count__105799_106426 = G__106445;
i__105800_106427 = G__106446;
continue;
}
} else {
}
}
break;
}

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105794);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105793);
}}
} else {
return null;
}
});
frontend.handler.editor.cycle_todo_BANG_ = (function frontend$handler$editor$cycle_todo_BANG_(){
var temp__5802__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5802__auto__){
var blocks = temp__5802__auto__;
return frontend.handler.editor.cycle_todos_BANG_();
} else {
if(cljs.core.truth_(frontend.state.get_edit_block())){
var edit_input_id = frontend.state.get_edit_input_id();
var current_input = goog.dom.getElement(edit_input_id);
var content = frontend.state.get_edit_content();
var format = (function (){var or__5043__auto__ = (function (){var G__105808 = frontend.state.get_current_page();
return (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(G__105808) : frontend.db.get_page_format.call(null,G__105808));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var vec__105805 = frontend.util.marker.cycle_marker(content,null,null,format,frontend.state.get_preferred_workflow());
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105805,(0),null);
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105805,(1),null);
var new_pos = frontend.commands.compute_pos_delta_when_change_marker(content,marker,frontend.util.cursor.pos(current_input));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,new_content);

return frontend.util.cursor.move_cursor_to(current_input,new_pos);
} else {
return null;
}
}
});
frontend.handler.editor.set_priority = (function frontend$handler$editor$set_priority(p__105809,new_priority){
var map__105810 = p__105809;
var map__105810__$1 = cljs.core.__destructure_map(map__105810);
var block = map__105810__$1;
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105810__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105810__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var new_content = clojure.string.replace_first(content,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_priority], 0)));
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.delete_block_aux_BANG_ = (function frontend$handler$editor$delete_block_aux_BANG_(p__105811,children_QMARK_){
var map__105812 = p__105811;
var map__105812__$1 = cljs.core.__destructure_map(map__105812);
var _block = map__105812__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105812__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105812__$1,new cljs.core.Keyword("block","repo","block/repo",2119209932));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var block = (function (){var G__105813 = repo__$1;
var G__105814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__105815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__105813,G__105814,G__105815) : frontend.db.pull.call(null,G__105813,G__105814,G__105815));
})();
if(cljs.core.truth_(block)){
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));
} else {
var _STAR_transaction_data_STAR__orig_val__105816 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105817 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105818 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105819 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105818);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105819);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.modules.outliner.core.delete_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),children_QMARK_], null));

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105817);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105816);
}}
} else {
return null;
}
});
frontend.handler.editor.move_to_prev_block = (function frontend$handler$editor$move_to_prev_block(repo,sibling_block,format,id,value,move_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return sibling_block;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5804__auto__)){
var sibling_block_id = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__105820 = repo;
var G__105821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__105822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__105820,G__105821,G__105822) : frontend.db.pull.call(null,G__105820,G__105821,G__105822));
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var block = temp__5804__auto____$1;
var original_content = frontend.util.trim_safe(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var value_SINGLEQUOTE_ = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format,original_content));
var value__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_properties(format,value));
var new_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join('');
var tail_len = cljs.core.count(value__$1);
var pos = (function (){var x__5128__auto__ = (cljs.core.truth_(original_content)?frontend.handler.editor.goog$module$goog$object.get(logseq.graph_parser.utf8.encode(original_content),"length"):(0));
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var f = (function (){
var G__105823 = (function (){var G__105827 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105827) : frontend.db.pull.call(null,G__105827));
})();
var G__105824 = pos;
var G__105825 = id;
var G__105826 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-content","custom-content",-8240001),new_value,new cljs.core.Keyword(null,"tail-len","tail-len",699304522),tail_len], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$4(G__105823,G__105824,G__105825,G__105826) : frontend.handler.editor.edit_block_BANG_.call(null,G__105823,G__105824,G__105825,G__105826));
});
if(cljs.core.truth_(move_QMARK_)){
f();
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-block","prev-block",116851678),block,new cljs.core.Keyword(null,"new-content","new-content",525291180),new_value,new cljs.core.Keyword(null,"move-fn","move-fn",-2078853758),f], null);
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
frontend.handler.editor.block_has_no_ref_QMARK_ = (function frontend$handler$editor$block_has_no_ref_QMARK_(eid){
return cljs.core.empty_QMARK_(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(eid) : frontend.db.entity.call(null,eid))));
});
frontend.handler.editor.delete_block_BANG_ = (function frontend$handler$editor$delete_block_BANG_(var_args){
var G__105829 = arguments.length;
switch (G__105829) {
case 1:
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true);
}));

(frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,delete_children_QMARK_){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"delete","delete",-1768633620));

var map__105830_106448 = frontend.handler.editor.get_state();
var map__105830_106449__$1 = cljs.core.__destructure_map(map__105830_106448);
var id_106450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_id_106451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var block_parent_id_106452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var value_106453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"value","value",305978217));
var format_106454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var config_106455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105830_106449__$1,new cljs.core.Keyword(null,"config","config",994861415));
if(cljs.core.truth_(block_id_106451)){
var page_id_106456 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__105831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106451], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105831) : frontend.db.entity.call(null,G__105831));
})()));
var page_blocks_count_106457 = (function (){var and__5041__auto__ = page_id_106456;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_count.cljs$core$IFn$_invoke$arity$2(repo,page_id_106456) : frontend.db.get_page_blocks_count.call(null,repo,page_id_106456));
} else {
return and__5041__auto__;
}
})();
if((page_blocks_count_106457 > (1))){
var block_e_106458 = (function (){var G__105832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106451], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105832) : frontend.db.entity.call(null,G__105832));
})();
var has_children_QMARK__106459 = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block_e_106458));
var block_106460 = (function (){var G__105833 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_e_106458);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105833) : frontend.db.pull.call(null,G__105833));
})();
var left_106461 = frontend.modules.outliner.tree._get_left(frontend.modules.outliner.core.block(block_106460));
var left_has_children_QMARK__106462 = (function (){var and__5041__auto__ = left_106461;
if(cljs.core.truth_(and__5041__auto__)){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(left_106461));
if(cljs.core.truth_(temp__5804__auto__)){
var block_id__$1 = temp__5804__auto__;
var block__$1 = (function (){var G__105834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105834) : frontend.db.entity.call(null,G__105834));
})();
return cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = has_children_QMARK__106459;
if(and__5041__auto__){
return left_has_children_QMARK__106462;
} else {
return and__5041__auto__;
}
})())){
} else {
if(cljs.core.truth_(block_parent_id_106452)){
var block_parent_106463 = goog.dom.getElement(block_parent_id_106452);
var sibling_block_106464 = (cljs.core.truth_(new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config_106455))?frontend.util.get_prev_block_non_collapsed.cljs$core$IFn$_invoke$arity$2(block_parent_106463,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),frontend.util.rec_get_blocks_container(block_parent_106463)], null)):frontend.util.get_prev_block_non_collapsed_non_embed(block_parent_106463));
var map__105835_106465 = frontend.handler.editor.move_to_prev_block(repo,sibling_block_106464,format_106454,id_106450,value_106453,false);
var map__105835_106466__$1 = cljs.core.__destructure_map(map__105835_106465);
var prev_block_106467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105835_106466__$1,new cljs.core.Keyword(null,"prev-block","prev-block",116851678));
var new_content_106468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105835_106466__$1,new cljs.core.Keyword(null,"new-content","new-content",525291180));
var move_fn_106469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105835_106466__$1,new cljs.core.Keyword(null,"move-fn","move-fn",-2078853758));
var concat_prev_block_QMARK__106470 = cljs.core.boolean$((function (){var and__5041__auto__ = prev_block_106467;
if(cljs.core.truth_(and__5041__auto__)){
return new_content_106468;
} else {
return and__5041__auto__;
}
})());
var transact_opts_106471 = (function (){var G__105836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null);
if(concat_prev_block_QMARK__106470){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__105836,new cljs.core.Keyword(null,"concat-data","concat-data",670825070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106460)], null));
} else {
return G__105836;
}
})();
var transact_data__102865__auto___106472 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106473 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106474 = (cljs.core.truth_(transact_data__102865__auto___106472)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transact_opts_106471,new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):transact_opts_106471);
var before_editor_cursor__102868__auto___106475 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106472)){
if(cljs.core.truth_(transaction_opts__102866__auto___106473)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106473,opts__102867__auto___106474);
} else {
}

if(concat_prev_block_QMARK__106470){
var prev_block_SINGLEQUOTE__106476 = ((cljs.core.seq(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block_e_106458)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prev_block_106467,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106460),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","additional-properties","block.temp/additional-properties",-1828325767),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_106460)], 0)):prev_block_106467);
frontend.handler.editor.delete_block_aux_BANG_(block_106460,delete_children_QMARK_);

var G__105837_106477 = repo;
var G__105838_106478 = prev_block_SINGLEQUOTE__106476;
var G__105839_106479 = new_content_106468;
var G__105840_106480 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null);
(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(G__105837_106477,G__105838_106478,G__105839_106479,G__105840_106480) : frontend.handler.editor.save_block_BANG_.call(null,G__105837_106477,G__105838_106478,G__105839_106479,G__105840_106480));
} else {
frontend.handler.editor.delete_block_aux_BANG_(block_106460,delete_children_QMARK_);
}
} else {
var _STAR_transaction_data_STAR__orig_val__105841_106481 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105842_106482 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105843_106483 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105844_106484 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105843_106483);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105844_106484);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106473,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106474], 0));

if(concat_prev_block_QMARK__106470){
var prev_block_SINGLEQUOTE__106485 = ((cljs.core.seq(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block_e_106458)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prev_block_106467,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106460),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","additional-properties","block.temp/additional-properties",-1828325767),new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_106460)], 0)):prev_block_106467);
frontend.handler.editor.delete_block_aux_BANG_(block_106460,delete_children_QMARK_);

var G__105845_106486 = repo;
var G__105846_106487 = prev_block_SINGLEQUOTE__106485;
var G__105847_106488 = new_content_106468;
var G__105848_106489 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null);
(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(G__105845_106486,G__105846_106487,G__105847_106488,G__105848_106489) : frontend.handler.editor.save_block_BANG_.call(null,G__105845_106486,G__105846_106487,G__105847_106488,G__105848_106489));
} else {
frontend.handler.editor.delete_block_aux_BANG_(block_106460,delete_children_QMARK_);
}

var r__102869__auto___106490 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106491 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106490], 0));
var tx_meta__102871__auto___106492 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106490));
var all_tx__102872__auto___106493 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106491,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106474));
var o__102873__auto___106494 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106494));
var opts_SHARP___102875__auto___106496 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106495,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106492], 0));
if(cljs.core.seq(all_tx__102872__auto___106493)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106474))){
} else {
var result__102876__auto___106497 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106493,opts_SHARP___102875__auto___106496,before_editor_cursor__102868__auto___106475);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106493,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106492,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106497], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105842_106482);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105841_106481);
}}

(move_fn_106469.cljs$core$IFn$_invoke$arity$0 ? move_fn_106469.cljs$core$IFn$_invoke$arity$0() : move_fn_106469.call(null));
} else {
}
}
} else {
}
} else {
}

return frontend.state.set_editor_op_BANG_(null);
}));

(frontend.handler.editor.delete_block_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.delete_blocks_BANG_ = (function frontend$handler$editor$delete_blocks_BANG_(repo,block_uuids,blocks,dom_blocks){
if(cljs.core.seq(block_uuids)){
var uuid__GT_dom_block = cljs.core.zipmap(block_uuids,dom_blocks);
var block = cljs.core.first(blocks);
var block_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_dom_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var sibling_block = (cljs.core.truth_(block_parent)?frontend.util.get_prev_block_non_collapsed_non_embed(block_parent):null);
var transact_data__102865__auto___106498 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106499 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106500 = (cljs.core.truth_(transact_data__102865__auto___106498)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596)], null));
var before_editor_cursor__102868__auto___106501 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106498)){
if(cljs.core.truth_(transaction_opts__102866__auto___106499)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106499,opts__102867__auto___106500);
} else {
}

frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_transaction_data_STAR__orig_val__105849_106502 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105850_106503 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105851_106504 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105852_106505 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105851_106504);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105852_106505);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106499,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106500], 0));

frontend.modules.outliner.core.delete_blocks_BANG_(blocks,cljs.core.PersistentArrayMap.EMPTY);

var r__102869__auto___106506 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106507 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106506], 0));
var tx_meta__102871__auto___106508 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106506));
var all_tx__102872__auto___106509 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106507,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106500));
var o__102873__auto___106510 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106510));
var opts_SHARP___102875__auto___106512 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106511,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106508], 0));
if(cljs.core.seq(all_tx__102872__auto___106509)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106500))){
} else {
var result__102876__auto___106513 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106509,opts_SHARP___102875__auto___106512,before_editor_cursor__102868__auto___106501);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106509,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106508,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106513], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105850_106503);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105849_106502);
}}

if(cljs.core.truth_(sibling_block)){
return frontend.handler.editor.move_to_prev_block(repo,sibling_block,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),dommy.core.attr(sibling_block,"id"),"",true);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.set_block_property_aux_BANG_ = (function frontend$handler$editor$set_block_property_aux_BANG_(block_or_id,key,value){
var temp__5804__auto__ = ((typeof block_or_id === 'string')?(function (){var G__105853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_or_id)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105853) : frontend.db.entity.call(null,G__105853));
})():((cljs.core.uuid_QMARK_(block_or_id))?(function (){var G__105854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_or_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105854) : frontend.db.entity.call(null,G__105854));
})():block_or_id
));
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
var properties__$1 = (((value == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(properties,key):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,key,value));
var content__$1 = (((value == null))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,key,content):frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content,key,value));
var content__$2 = frontend.util.property.remove_empty_properties(content__$1);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","properties","block/properties",708347145),properties__$1,new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),(function (){var or__5043__auto__ = cljs.core.keys(properties__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("block","content","block/content",-161885195),content__$2], null);
} else {
return null;
}
});
frontend.handler.editor.set_block_query_properties_BANG_ = (function frontend$handler$editor$set_block_query_properties_BANG_(block_id,all_properties,key,add_QMARK_){
var temp__5804__auto__ = (function (){var G__105855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105855) : frontend.db.entity.call(null,G__105855));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var query_properties = frontend.handler.common.safe_read_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),""),"Failed to parse query properties");
var query_properties__$1 = ((cljs.core.seq(query_properties))?query_properties:all_properties);
var query_properties__$2 = (cljs.core.truth_(add_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(query_properties__$1,key)):cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),query_properties__$1));
var query_properties__$3 = cljs.core.vec(query_properties__$2);
if(cljs.core.seq(query_properties__$3)){
return frontend.handler.editor.property.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_properties__$3));
} else {
return frontend.handler.editor.property.remove_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199));
}
} else {
return null;
}
});
frontend.handler.editor.set_block_timestamp_BANG_ = (function frontend$handler$editor$set_block_timestamp_BANG_(block_id,key,value){
var key__$1 = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var value__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
var temp__5804__auto__ = (function (){var G__105856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105856) : frontend.db.pull.call(null,G__105856));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var map__105857 = block;
var map__105857__$1 = cljs.core.__destructure_map(map__105857);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105857__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var content__$1 = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_edit_content();
}
})();
var new_content = frontend.util.text.add_timestamp(frontend.util.text.remove_timestamp(content__$1,key__$1),key__$1,value__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content__$1,new_content)){
var input_id = frontend.state.get_edit_input_id();
if(cljs.core.truth_((function (){var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id__$1));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content);
} else {
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Almost the same as set-block-timestamp! except for:
 * - it doesn't save the block
 * - it extracts current content from current input
 */
frontend.handler.editor.set_editing_block_timestamp_BANG_ = (function frontend$handler$editor$set_editing_block_timestamp_BANG_(key,value){
var key__$1 = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
var value__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
var content = frontend.state.get_edit_content();
var new_content = frontend.util.text.add_timestamp(frontend.util.text.remove_timestamp(content,key__$1),key__$1,value__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,new_content)){
var input_id = frontend.state.get_edit_input_id();
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,new_content);
} else {
return null;
}
});
/**
 * Persist block uuid to file if the uuid is valid, and it's not persisted in file.
 * Accepts a list of uuids.
 */
frontend.handler.editor.set_blocks_id_BANG_ = (function frontend$handler$editor$set_blocks_id_BANG_(block_ids){
var block_ids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,block_ids);
var col = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_id){
var temp__5804__auto__ = (function (){var G__105858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105858) : frontend.db.entity.call(null,G__105858));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)], null);
}
} else {
return null;
}
}),block_ids__$1);
var col__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
return frontend.handler.editor.property.batch_set_block_property_BANG_(col__$1);
});
frontend.handler.editor.copy_block_ref_BANG_ = (function frontend$handler$editor$copy_block_ref_BANG_(var_args){
var G__105861 = arguments.length;
switch (G__105861) {
case 1:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__105859_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__105859_SHARP_);
}));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,tap_clipboard){
frontend.handler.editor.set_blocks_id_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));

return frontend.util.copy_to_clipboard_BANG_((tap_clipboard.cljs$core$IFn$_invoke$arity$1 ? tap_clipboard.cljs$core$IFn$_invoke$arity$1(block_id) : tap_clipboard.call(null,block_id)));
}));

(frontend.handler.editor.copy_block_ref_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.select_block_BANG_ = (function frontend$handler$editor$select_block_BANG_(block_uuid){
return frontend.handler.block.select_block_BANG_(block_uuid);
});
frontend.handler.editor.compose_copied_blocks_contents = (function frontend$handler$editor$compose_copied_blocks_contents(repo,block_ids){
var blocks = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_ids));
var top_level_block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks));
var content = frontend.handler.export$.text.export_blocks_as_markdown(repo,top_level_block_uuids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent-style","indent-style",855468755),frontend.state.get_export_block_text_indent_style(),new cljs.core.Keyword(null,"remove-options","remove-options",768737839),cljs.core.set(frontend.state.get_export_block_text_remove_options())], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_level_block_uuids,content], null);
});
frontend.handler.editor.get_all_blocks_by_ids = (function frontend$handler$editor$get_all_blocks_by_ids(repo,ids){
var ids__$1 = ids;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(ids__$1)){
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__105863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ids__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105863) : frontend.db.entity.call(null,G__105863));
})());
var blocks = frontend.modules.outliner.tree.get_sorted_block_and_children(repo,db_id);
var result__$1 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,blocks));
var G__106515 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),result__$1)),cljs.core.rest(ids__$1));
var G__106516 = result__$1;
ids__$1 = G__106515;
result = G__106516;
continue;
} else {
return result;
}
break;
}
});
frontend.handler.editor.copy_selection_blocks = (function frontend$handler$editor$copy_selection_blocks(html_QMARK_){
var temp__5804__auto__ = cljs.core.seq(frontend.state.get_selection_blocks());
if(temp__5804__auto__){
var blocks = temp__5804__auto__;
var repo = frontend.state.get_current_repo();
var ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__105864_SHARP_){
var temp__5804__auto____$1 = dommy.core.attr(p1__105864_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks));
var vec__105865 = frontend.handler.editor.compose_copied_blocks_contents(repo,ids);
var top_level_block_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105865,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105865,(1),null);
var block = (function (){var G__105868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ids)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105868) : frontend.db.entity.call(null,G__105868));
})();
if(cljs.core.truth_(block)){
var html_106517 = frontend.handler.export$.html.export_blocks_as_html(repo,top_level_block_uuids,null);
var copied_blocks_106518 = frontend.handler.editor.get_all_blocks_by_ids(repo,top_level_block_uuids);
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content,(cljs.core.truth_(html_QMARK_)?html_106517:null),copied_blocks_106518);

frontend.state.set_block_op_type_BANG_(new cljs.core.Keyword(null,"copy","copy",-1077617309));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.copy_block_refs = (function frontend$handler$editor$copy_block_refs(){
var temp__5804__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5804__auto__){
var selected_blocks = temp__5804__auto__;
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105869_SHARP_){
var temp__5804__auto____$1 = dommy.core.attr(p1__105869_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
var level = dommy.core.attr(p1__105869_SHARP_,"level");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.uuid(id),new cljs.core.Keyword(null,"level","level",1290497552),(level | (0))], null);
} else {
return null;
}
}),selected_blocks)));
var first_block = cljs.core.first(blocks);
var first_root_level_index = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__105870){
var vec__105871 = p__105870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105871,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105871,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block),(1));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,blocks)));
var root_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(first_block));
var adjusted_blocks = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__105874){
var map__105875 = p__105874;
var map__105875__$1 = cljs.core.__destructure_map(map__105875);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105875__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105875__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"level","level",1290497552),(((index < first_root_level_index))?(((level < cljs.core.deref(root_level)))?(function (){
cljs.core.reset_BANG_(root_level,level);

return (1);
})()
:((level - cljs.core.deref(root_level)) + (1))):level)], null);
}),blocks);
var block = (function (){var G__105876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105876) : frontend.db.pull.call(null,G__105876));
})();
var copy_str = (function (){var G__105877 = adjusted_blocks;
var G__105877__$1 = (((G__105877 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__105878){
var map__105879 = p__105878;
var map__105879__$1 = cljs.core.__destructure_map(map__105879);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105879__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var pred__105880 = cljs.core._EQ_;
var expr__105881 = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((pred__105880.cljs$core$IFn$_invoke$arity$2 ? pred__105880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),expr__105881) : pred__105880.call(null,new cljs.core.Keyword(null,"org","org",1495985),expr__105881)))){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*"))," ",logseq.graph_parser.util.block_ref.__GT_block_ref(id)].join('');
} else {
if(cljs.core.truth_((pred__105880.cljs$core$IFn$_invoke$arity$2 ? pred__105880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__105881) : pred__105880.call(null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),expr__105881)))){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),"\t")),"- ",logseq.graph_parser.util.block_ref.__GT_block_ref(id)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__105881)].join('')));
}
}
}),G__105877));
if((G__105877__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__105877__$1);
}
})();
frontend.handler.editor.set_blocks_id_BANG_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),blocks));

return frontend.util.copy_to_clipboard_BANG_(copy_str);
} else {
return null;
}
});
frontend.handler.editor.copy_block_embeds = (function frontend$handler$editor$copy_block_embeds(){
var temp__5804__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5804__auto__){
var blocks = temp__5804__auto__;
var ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105883_SHARP_){
var temp__5804__auto____$1 = dommy.core.attr(p1__105883_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var ids_str = (function (){var G__105884 = ids;
var G__105884__$1 = (((G__105884 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),G__105884));
if((G__105884__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",G__105884__$1);
}
})();
frontend.handler.editor.set_blocks_id_BANG_(ids);

return frontend.util.copy_to_clipboard_BANG_(ids_str);
} else {
return null;
}
});
frontend.handler.editor.get_selected_toplevel_block_uuids = (function frontend$handler$editor$get_selected_toplevel_block_uuids(){
var temp__5804__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5804__auto__){
var blocks = temp__5804__auto__;
var repo = frontend.state.get_current_repo();
var block_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105885_SHARP_){
var temp__5804__auto____$1 = dommy.core.attr(p1__105885_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return cljs.core.uuid(id);
} else {
return null;
}
}),blocks)));
var blocks__$1 = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_ids));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$1)));
var blocks_STAR_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var G__105886 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if((G__105886 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__105886,page_id);
}
}),blocks__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.core.get_top_level_blocks(blocks_STAR_));
} else {
return null;
}
});
frontend.handler.editor.cut_selection_blocks = (function frontend$handler$editor$cut_selection_blocks(copy_QMARK_){
if(cljs.core.truth_(copy_QMARK_)){
frontend.handler.editor.copy_selection_blocks(true);
} else {
}

frontend.state.set_block_op_type_BANG_(new cljs.core.Keyword(null,"cut","cut",-1042666209));

var temp__5804__auto__ = cljs.core.seq(frontend.handler.editor.get_selected_blocks());
if(temp__5804__auto__){
var blocks = temp__5804__auto__;
var dom_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-transclude"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-query"))));
}),blocks);
var dom_blocks__$1 = ((cljs.core.seq(dom_blocks))?dom_blocks:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",dommy.core.attr(block,"data-transclude"));
}),blocks));
if(cljs.core.seq(dom_blocks__$1)){
var repo = frontend.state.get_current_repo();
var block_uuids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__105887_SHARP_){
return cljs.core.uuid(dommy.core.attr(p1__105887_SHARP_,"blockid"));
}),dom_blocks__$1));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids);
var blocks__$1 = (function (){var G__105888 = repo;
var G__105889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__105890 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__105888,G__105889,G__105890) : frontend.db.pull_many.call(null,G__105888,G__105889,G__105890));
})();
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks__$1);
var sorted_blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
return frontend.modules.outliner.tree.get_sorted_block_and_children(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_blocks], 0));
return frontend.handler.editor.delete_blocks_BANG_(repo,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),sorted_blocks),sorted_blocks,dom_blocks__$1);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Didn't use link/plain-link as it is incorrectly detects words as urls.
 */
frontend.handler.editor.url_regex = /[^\s\(\[]+:\/\/[^\s\)\]]+/;
frontend.handler.editor.extract_nearest_link_from_text = (function frontend$handler$editor$extract_nearest_link_from_text(var_args){
var args__5772__auto__ = [];
var len__5766__auto___106519 = arguments.length;
var i__5767__auto___106520 = (0);
while(true){
if((i__5767__auto___106520 < len__5766__auto___106519)){
args__5772__auto__.push((arguments[i__5767__auto___106520]));

var G__106521 = (i__5767__auto___106520 + (1));
i__5767__auto___106520 = G__106521;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,pos,additional_patterns){
var page_pattern = /\[\[([^\]]+)]]/;
var tag_pattern = /#\S+/;
var page_matches = frontend.util.re_pos(page_pattern,text);
var block_matches = frontend.util.re_pos(logseq.graph_parser.util.block_ref.block_ref_re,text);
var tag_matches = frontend.util.re_pos(tag_pattern,text);
var additional_matches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__105891_SHARP_){
return frontend.util.re_pos(p1__105891_SHARP_,text);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([additional_patterns], 0));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_matches,block_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_matches,additional_matches], 0)));
var vec__105896 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__105899){
var vec__105900 = p__105899;
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105900,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105900,(1),null);
var end_pos = (start_pos + cljs.core.count(content));
if((pos < start_pos)){
return (pos - start_pos);
} else {
if((pos > end_pos)){
return (end_pos - pos);
} else {
return (0);

}
}
}),cljs.core._GT_,matches));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105896,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105896,(1),null);
if(cljs.core.truth_(match)){
if(cljs.core.truth_(cljs.core.some((function (p1__105892_SHARP_){
return cljs.core.re_find(p1__105892_SHARP_,match);
}),additional_patterns))){
return match;
} else {
if(clojure.string.starts_with_QMARK_(match,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),cljs.core.count(match));
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(2),(cljs.core.count(match) - (2)));

}
}
} else {
return null;
}
}));

(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.editor.extract_nearest_link_from_text.cljs$lang$applyTo = (function (seq105893){
var G__105894 = cljs.core.first(seq105893);
var seq105893__$1 = cljs.core.next(seq105893);
var G__105895 = cljs.core.first(seq105893__$1);
var seq105893__$2 = cljs.core.next(seq105893__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105894,G__105895,seq105893__$2);
}));

/**
 * Return the nearest page-name (not dereferenced, may be an alias), block, tag or url
 */
frontend.handler.editor.get_nearest_page_or_url = (function frontend$handler$editor$get_nearest_page_or_url(){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5804__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto____$1)){
var edit_id = temp__5804__auto____$1;
var temp__5804__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5804__auto____$2)){
var input = temp__5804__auto____$2;
var temp__5804__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5804__auto____$3)){
var pos = temp__5804__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text.cljs$core$IFn$_invoke$arity$variadic(value,pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.editor.url_regex], 0));
} else {
return null;
}
} else {
return null;
}
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
/**
 * Return the nearest page-name (not dereferenced, may be an alias), block or tag
 */
frontend.handler.editor.get_nearest_page = (function frontend$handler$editor$get_nearest_page(){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))){
var temp__5804__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto____$1)){
var edit_id = temp__5804__auto____$1;
var temp__5804__auto____$2 = goog.dom.getElement(edit_id);
if(cljs.core.truth_(temp__5804__auto____$2)){
var input = temp__5804__auto____$2;
var temp__5804__auto____$3 = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5804__auto____$3)){
var pos = temp__5804__auto____$3;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
return frontend.handler.editor.extract_nearest_link_from_text(value,pos);
} else {
return null;
}
} else {
return null;
}
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
frontend.handler.editor.follow_link_under_cursor_BANG_ = (function frontend$handler$editor$follow_link_under_cursor_BANG_(){
var temp__5804__auto__ = frontend.handler.editor.get_nearest_page_or_url();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find(frontend.handler.editor.url_regex,page))){
return window.open(page);
} else {
var page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page);
frontend.state.clear_edit_BANG_();

return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}
}
} else {
return null;
}
});
frontend.handler.editor.open_link_in_sidebar_BANG_ = (function frontend$handler$editor$open_link_in_sidebar_BANG_(){
var temp__5804__auto__ = frontend.handler.editor.get_nearest_page();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var page_name = clojure.string.lower_case(page);
var block_QMARK_ = frontend.util.uuid_string_QMARK_(page_name);
var temp__5804__auto____$1 = (frontend.db.get_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page.call(null,page_name));
if(cljs.core.truth_(temp__5804__auto____$1)){
var page__$1 = temp__5804__auto____$1;
if(block_QMARK_){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"block","block",664686210));
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1),new cljs.core.Keyword(null,"page","page",849072397));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.zoom_in_BANG_ = (function frontend$handler$editor$zoom_in_BANG_(){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5804__auto__ = (function (){var G__105903 = frontend.state.get_edit_block();
var G__105903__$1 = (((G__105903 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__105903));
var G__105903__$2 = (((G__105903__$1 == null))?null:(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
})(G__105903__$1));
var G__105903__$3 = (((G__105903__$2 == null))?null:(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105903__$2) : frontend.db.entity.call(null,G__105903__$2)));
if((G__105903__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__105903__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
var pos = frontend.state.get_edit_pos();
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);

return setTimeout((function (){
var G__105904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
var G__105905 = pos;
var G__105906 = id;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__105904,G__105905,G__105906) : frontend.handler.editor.edit_block_BANG_.call(null,G__105904,G__105905,G__105906));
}),(0));
} else {
return null;
}
} else {
return window.history.forward();
}
});
frontend.handler.editor.zoom_out_BANG_ = (function frontend$handler$editor$zoom_out_BANG_(){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var page = frontend.state.get_current_page();
var block_id = (function (){var and__5041__auto__ = typeof page === 'string';
if(and__5041__auto__){
return cljs.core.parse_uuid(page);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(block_id)){
var block_parent = (frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_parent.call(null,block_id));
var temp__5802__auto__ = (function (){var and__5041__auto__ = (new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_parent) == null);
if(and__5041__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_parent);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);

return setTimeout((function (){
var G__105907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var G__105908 = new cljs.core.Keyword(null,"max","max",61366548);
var G__105909 = block_id;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__105907,G__105908,G__105909) : frontend.handler.editor.edit_block_BANG_.call(null,G__105907,G__105908,G__105909));
}),(0));
} else {
var page_id = (function (){var G__105910 = (function (){var G__105911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__105911) : frontend.db.entity.call(null,G__105911));
})();
var G__105910__$1 = (((G__105910 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__105910));
if((G__105910__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__105910__$1);
}
})();
var temp__5804__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)));
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);

return setTimeout((function (){
var G__105912 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var G__105913 = new cljs.core.Keyword(null,"max","max",61366548);
var G__105914 = block_id;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__105912,G__105913,G__105914) : frontend.handler.editor.edit_block_BANG_.call(null,G__105912,G__105913,G__105914));
}),(0));
} else {
return null;
}
}
} else {
return null;
}
} else {
return window.history.back();
}
});
frontend.handler.editor.cut_block_BANG_ = (function frontend$handler$editor$cut_block_BANG_(block_id){
var temp__5804__auto__ = (function (){var G__105915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105915) : frontend.db.pull.call(null,G__105915));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var repo = frontend.state.get_current_repo();
var vec__105916 = frontend.handler.editor.compose_copied_blocks_contents(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
var _top_level_block_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105916,(0),null);
var md_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105916,(1),null);
var html = frontend.handler.export$.html.export_blocks_as_html(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),null);
var sorted_blocks = frontend.modules.outliner.tree.get_sorted_block_and_children(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),md_content,html,sorted_blocks);

frontend.state.set_block_op_type_BANG_(new cljs.core.Keyword(null,"cut","cut",-1042666209));

return frontend.handler.editor.delete_block_aux_BANG_(block,true);
} else {
return null;
}
});
frontend.handler.editor.highlight_selection_area_BANG_ = (function frontend$handler$editor$highlight_selection_area_BANG_(var_args){
var G__105920 = arguments.length;
switch (G__105920) {
case 1:
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (end_block){
return frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$2(end_block,false);
}));

(frontend.handler.editor.highlight_selection_area_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (end_block,append_QMARK_){
var temp__5804__auto__ = frontend.state.get_selection_start_block_or_first();
if(cljs.core.truth_(temp__5804__auto__)){
var start_block = temp__5804__auto__;
var blocks = frontend.util.get_nodes_between_two_nodes(start_block,end_block,"ls-block");
var direction = frontend.util.get_direction_between_two_nodes(start_block,end_block,"ls-block");
var blocks__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.reverse(blocks):blocks);
if(cljs.core.truth_(append_QMARK_)){
frontend.state.clear_edit_BANG_();

return frontend.state.conj_selection_block_BANG_(blocks__$1,direction);
} else {
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks__$1,direction);
}
} else {
return null;
}
}));

(frontend.handler.editor.highlight_selection_area_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.select_block_up_down = (function frontend$handler$editor$select_block_up_down(direction){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var element_106523 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
if(cljs.core.truth_(element_106523)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_106523);

frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_106523], null));
} else {
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((1) === cljs.core.count(frontend.state.get_selection_blocks()));
} else {
return and__5041__auto__;
}
})())){
var f_106524 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var element_106525 = (function (){var G__105921 = cljs.core.first(frontend.state.get_selection_blocks());
return (f_106524.cljs$core$IFn$_invoke$arity$1 ? f_106524.cljs$core$IFn$_invoke$arity$1(G__105921) : f_106524.call(null,G__105921));
})();
if(cljs.core.truth_(element_106525)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_106525);

frontend.state.conj_selection_block_BANG_(element_106525,direction);
} else {
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.selection_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,frontend.state.get_selection_direction());
} else {
return and__5041__auto__;
}
})())){
var f_106526 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed_skip);
var first_last_106527 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.first:cljs.core.last);
var element_106528 = (function (){var G__105922 = (function (){var G__105923 = frontend.state.get_selection_blocks();
return (first_last_106527.cljs$core$IFn$_invoke$arity$1 ? first_last_106527.cljs$core$IFn$_invoke$arity$1(G__105923) : first_last_106527.call(null,G__105923));
})();
return (f_106526.cljs$core$IFn$_invoke$arity$1 ? f_106526.cljs$core$IFn$_invoke$arity$1(G__105922) : f_106526.call(null,G__105922));
})();
if(cljs.core.truth_(element_106528)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_106528);

frontend.state.conj_selection_block_BANG_(element_106528,direction);
} else {
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
var f_106529 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var last_first_106530 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.last:cljs.core.first);
var element_106531 = (function (){var G__105924 = (function (){var G__105925 = frontend.state.get_selection_blocks();
return (last_first_106530.cljs$core$IFn$_invoke$arity$1 ? last_first_106530.cljs$core$IFn$_invoke$arity$1(G__105925) : last_first_106530.call(null,G__105925));
})();
return (f_106529.cljs$core$IFn$_invoke$arity$1 ? f_106529.cljs$core$IFn$_invoke$arity$1(G__105924) : f_106529.call(null,G__105924));
})();
if(cljs.core.truth_(element_106531)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(element_106531);

frontend.state.drop_last_selection_block_BANG_();
} else {
}
} else {
}
}
}
}

return null;
});
frontend.handler.editor.on_select_block = (function frontend$handler$editor$on_select_block(direction){
return (function (_event){
return frontend.handler.editor.select_block_up_down(direction);
});
});
frontend.handler.editor.save_block_aux_BANG_ = (function frontend$handler$editor$save_block_aux_BANG_(block,value,opts){
var value__$1 = clojure.string.trim(value);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,value__$1,opts);
});
frontend.handler.editor.save_block_BANG_ = (function frontend$handler$editor$save_block_BANG_(var_args){
var G__105927 = arguments.length;
switch (G__105927) {
case 3:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_or_uuid,content){
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,block_or_uuid,content,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo,block_or_uuid,content,p__105928){
var map__105929 = p__105928;
var map__105929__$1 = cljs.core.__destructure_map(map__105929);
var opts = map__105929__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105929__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var block = ((((cljs.core.uuid_QMARK_(block_or_uuid)) || (typeof block_or_uuid === 'string')))?frontend.db.model.query_block_by_uuid(block_or_uuid):block_or_uuid);
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"properties","properties",685819552))], null),((cljs.core.seq(properties))?frontend.util.property.insert_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content,properties):content));
}));

(frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__105930,value){
var map__105931 = p__105930;
var map__105931__$1 = cljs.core.__destructure_map(map__105931);
var _state = map__105931__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105931__$1,new cljs.core.Keyword(null,"block","block",664686210));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105931__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105931__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
if(cljs.core.truth_((function (){var G__105932 = repo__$1;
var G__105933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__105932,G__105933) : frontend.db.entity.call(null,G__105932,G__105933));
})())){
return frontend.handler.editor.save_block_aux_BANG_(block,value,opts);
} else {
return null;
}
}));

(frontend.handler.editor.save_block_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.editor.save_blocks_BANG_ = (function frontend$handler$editor$save_blocks_BANG_(blocks){
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

var seq__105934 = cljs.core.seq(blocks);
var chunk__105935 = null;
var count__105936 = (0);
var i__105937 = (0);
while(true){
if((i__105937 < count__105936)){
var vec__105944 = chunk__105935.cljs$core$IIndexed$_nth$arity$2(null,i__105937);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105944,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105944,(1),null);
frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,value);


var G__106533 = seq__105934;
var G__106534 = chunk__105935;
var G__106535 = count__105936;
var G__106536 = (i__105937 + (1));
seq__105934 = G__106533;
chunk__105935 = G__106534;
count__105936 = G__106535;
i__105937 = G__106536;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__105934);
if(temp__5804__auto__){
var seq__105934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__105934__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__105934__$1);
var G__106537 = cljs.core.chunk_rest(seq__105934__$1);
var G__106538 = c__5565__auto__;
var G__106539 = cljs.core.count(c__5565__auto__);
var G__106540 = (0);
seq__105934 = G__106537;
chunk__105935 = G__106538;
count__105936 = G__106539;
i__105937 = G__106540;
continue;
} else {
var vec__105947 = cljs.core.first(seq__105934__$1);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105947,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105947,(1),null);
frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,value);


var G__106541 = cljs.core.next(seq__105934__$1);
var G__106542 = null;
var G__106543 = (0);
var G__106544 = (0);
seq__105934 = G__106541;
chunk__105935 = G__106542;
count__105936 = G__106543;
i__105937 = G__106544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__105950 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__105951 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__105952 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__105953 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__105952);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__105953);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

var seq__105954_106545 = cljs.core.seq(blocks);
var chunk__105955_106546 = null;
var count__105956_106547 = (0);
var i__105957_106548 = (0);
while(true){
if((i__105957_106548 < count__105956_106547)){
var vec__105964_106549 = chunk__105955_106546.cljs$core$IIndexed$_nth$arity$2(null,i__105957_106548);
var block_106550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105964_106549,(0),null);
var value_106551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105964_106549,(1),null);
frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block_106550,value_106551);


var G__106552 = seq__105954_106545;
var G__106553 = chunk__105955_106546;
var G__106554 = count__105956_106547;
var G__106555 = (i__105957_106548 + (1));
seq__105954_106545 = G__106552;
chunk__105955_106546 = G__106553;
count__105956_106547 = G__106554;
i__105957_106548 = G__106555;
continue;
} else {
var temp__5804__auto___106556 = cljs.core.seq(seq__105954_106545);
if(temp__5804__auto___106556){
var seq__105954_106557__$1 = temp__5804__auto___106556;
if(cljs.core.chunked_seq_QMARK_(seq__105954_106557__$1)){
var c__5565__auto___106558 = cljs.core.chunk_first(seq__105954_106557__$1);
var G__106559 = cljs.core.chunk_rest(seq__105954_106557__$1);
var G__106560 = c__5565__auto___106558;
var G__106561 = cljs.core.count(c__5565__auto___106558);
var G__106562 = (0);
seq__105954_106545 = G__106559;
chunk__105955_106546 = G__106560;
count__105956_106547 = G__106561;
i__105957_106548 = G__106562;
continue;
} else {
var vec__105967_106563 = cljs.core.first(seq__105954_106557__$1);
var block_106564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105967_106563,(0),null);
var value_106565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105967_106563,(1),null);
frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block_106564,value_106565);


var G__106566 = cljs.core.next(seq__105954_106557__$1);
var G__106567 = null;
var G__106568 = (0);
var G__106569 = (0);
seq__105954_106545 = G__106566;
chunk__105955_106546 = G__106567;
count__105956_106547 = G__106568;
i__105957_106548 = G__106569;
continue;
}
} else {
}
}
break;
}

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__105951);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__105950);
}}
});
/**
 * skip-properties? if set true, when editing block is likely be properties, skip saving
 */
frontend.handler.editor.save_current_block_BANG_ = (function frontend$handler$editor$save_current_block_BANG_(var_args){
var G__105971 = arguments.length;
switch (G__105971) {
case 0:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__105972){
var map__105973 = p__105972;
var map__105973__$1 = cljs.core.__destructure_map(map__105973);
var opts = map__105973__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105973__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
var skip_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105973__$1,new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686));
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105973__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.editor_in_composition_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("editor","skip-saving-current-block?","editor/skip-saving-current-block?",-2017906002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}
})())){
} else {
if(cljs.core.truth_(frontend.state.get_current_repo())){
if(cljs.core.truth_(frontend.state.get_editor_action())){
} else {
try{var input_id_106571 = frontend.state.get_edit_input_id();
var block_106572 = frontend.state.get_edit_block();
var db_block_106573 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106572);
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
var G__105975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__105975) : frontend.db.pull.call(null,G__105975));
} else {
return null;
}
})();
var elem_106574 = (function (){var and__5041__auto__ = input_id_106571;
if(cljs.core.truth_(and__5041__auto__)){
return goog.dom.getElement(input_id_106571);
} else {
return and__5041__auto__;
}
})();
var db_content_106575 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(db_block_106573);
var db_content_without_heading_106576 = (function (){var and__5041__auto__ = db_content_106575;
if(cljs.core.truth_(and__5041__auto__)){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(db_content_106575,new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(db_block_106573));
} else {
return and__5041__auto__;
}
})();
var value_106577 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_106572)))?new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(current_block):(function (){var and__5041__auto__ = elem_106574;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.editor.goog$module$goog$object.get(elem_106574,"value");
} else {
return and__5041__auto__;
}
})());
if(cljs.core.truth_(value_106577)){
if(cljs.core.truth_(force_QMARK_)){
frontend.handler.editor.save_block_aux_BANG_(db_block_106573,value_106577,opts);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = skip_properties_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.db.model.top_block_QMARK_(block_106572);
if(and__5041__auto____$1){
if(cljs.core.truth_(elem_106574)){
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([elem_106574], 0));
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = block_106572;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = value_106577;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = db_content_without_heading_106576;
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(db_content_without_heading_106576),clojure.string.trim(value_106577));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
frontend.handler.editor.save_block_aux_BANG_(db_block_106573,value_106577,opts);
} else {
}
}
}
} else {
}
}catch (e105974){var error_106578 = e105974;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.editor",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block-failed","save-block-failed",610684026),error_106578,new cljs.core.Keyword(null,"line","line",212345235),1358], null)),null);
}}
} else {
}
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","skip-saving-current-block?","editor/skip-saving-current-block?",-2017906002),false);
}));

(frontend.handler.editor.save_current_block_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.clean_content_BANG_ = (function frontend$handler$editor$clean_content_BANG_(format,content){
return clojure.string.trim(frontend.util.property.remove_properties(format,frontend.util.drawer.remove_logbook(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,frontend.config.get_block_pattern(format)))));
});
frontend.handler.editor.insert_command_BANG_ = (function frontend$handler$editor$insert_command_BANG_(id,command_output,format,p__105976){
var map__105977 = p__105976;
var map__105977__$1 = cljs.core.__destructure_map(map__105977);
var option = map__105977__$1;
var restore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105977__$1,new cljs.core.Keyword(null,"restore?","restore?",1172240305),true);
if(typeof command_output === 'string'){
frontend.commands.insert_BANG_(id,command_output,option);
} else {
if(cljs.core.vector_QMARK_(command_output)){
frontend.commands.handle_steps(command_output,format);
} else {
if(cljs.core.fn_QMARK_(command_output)){
var s_106579 = (command_output.cljs$core$IFn$_invoke$arity$0 ? command_output.cljs$core$IFn$_invoke$arity$0() : command_output.call(null));
frontend.commands.insert_BANG_(id,s_106579,option);
} else {

}
}
}

if(cljs.core.truth_(restore_QMARK_)){
return frontend.commands.restore_state();
} else {
return null;
}
});
frontend.handler.editor.ensure_assets_dir_BANG_ = (function frontend$handler$editor$ensure_assets_dir_BANG_(repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (repo_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("assets",(function (assets_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assets_dir], 0))),(function (_){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo_dir,assets_dir], null));
}));
}));
}));
}));
});
/**
 * Get asset path from filename, ensure assets dir exists
 */
frontend.handler.editor.get_asset_path = (function frontend$handler$editor$get_asset_path(filename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(frontend.state.get_current_repo()),(function (p__105978){
var vec__105979 = p__105978;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105979,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105979,(1),null);
return promesa.protocols._promise(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assets_dir,filename], 0)));
}));
}));
});
/**
 * Save incoming(pasted) assets to assets directory.
 * 
 * Returns: [file-rpath file-obj file-fpath matched-alias]
 */
frontend.handler.editor.save_assets_BANG_ = (function frontend$handler$editor$save_assets_BANG_(var_args){
var G__105984 = arguments.length;
switch (G__105984) {
case 2:
return frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.ensure_assets_dir_BANG_(repo),(function (p__105985){
var vec__105986 = p__105985;
var repo_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105986,(0),null);
var assets_dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105986,(1),null);
return promesa.protocols._promise(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5(repo,repo_dir,assets_dir,files,(function (index,file_stem){
var file_base = clojure.string.replace(clojure.string.replace(clojure.string.replace(file_stem," ","_"),"%","_"),"/","_");
var file_name = [file_base,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
return clojure.string.replace(file_name,/_+/,"_");
})));
}));
}));
}));

(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (repo,repo_dir,asset_dir_rpath,files,gen_filename){
return promesa.core.all((function (){var iter__5520__auto__ = (function frontend$handler$editor$iter__105989(s__105990){
return (new cljs.core.LazySeq(null,(function (){
var s__105990__$1 = s__105990;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__105990__$1);
if(temp__5804__auto__){
var s__105990__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__105990__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__105990__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__105992 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__105991 = (0);
while(true){
if((i__105991 < size__5519__auto__)){
var vec__105993 = cljs.core._nth(c__5518__auto__,i__105991);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105993,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105993,(1),null);
cljs.core.chunk_append(b__105992,(function (){var file_name = (function (){var G__105999 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__105999) : frontend.util.node_path.basename.call(null,G__105999));
})();
var vec__105996 = (cljs.core.truth_(file_name)?(function (){var ext_base = (frontend.util.node_path.extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.extname.cljs$core$IFn$_invoke$arity$1(file_name) : frontend.util.node_path.extname.call(null,file_name));
var ext_full = ((cljs.core.not(frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$1(ext_base)))?(frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1(file_name) : frontend.util.full_path_extname.call(null,file_name)):ext_base);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),(cljs.core.count(file_name) - cljs.core.count(ext_full))),ext_full,ext_base], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null));
var file_stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105996,(0),null);
var ext_full = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105996,(1),null);
var ext_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105996,(2),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_stem) : gen_filename.call(null,index,file_stem))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext_full)].join('');
var file_rpath = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_dir_rpath),"/",filename].join('');
var matched_alias = frontend.handler.assets.get_matched_alias_by_ext(ext_base);
var file_rpath__$1 = (function (){var G__106000 = file_rpath;
if((!((matched_alias == null)))){
return clojure.string.replace(G__106000,/^[.\\/\\]*assets[\\/\\]+/,"");
} else {
return G__106000;
}
})();
var dir = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(matched_alias);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return repo_dir;
}
})();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = cljs.core.not_empty(file.path);
console.debug("Debug: Copy Asset #",dir,file_rpath__$1,from);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,file_rpath__$1,from),((function (i__105991,from,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (dest){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_rpath__$1,((typeof dest === 'string')?(new File([],dest)):file),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),matched_alias], null);
});})(i__105991,from,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
),((function (i__105991,from,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (p1__105982_SHARP_){
return console.error("Debug: Copy Asset Error#",p1__105982_SHARP_);
});})(i__105991,from,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(console.debug("Debug: Writing Asset #",dir,file_rpath__$1),((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.arrayBuffer(),((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (buffer){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(goog.crypt.base64.encodeByteArray((new Uint8Array(buffer))),((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (fpath){
return promesa.protocols._promise(frontend.fs.capacitor_fs._LT_write_file_with_base64(fpath,content));
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
):frontend.fs.write_file_BANG_(repo,dir,file_rpath__$1,file.stream(),null)),((function (i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__){
return (function (___37148__auto____$1){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_rpath__$1,file,logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),matched_alias], null));
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
});})(i__105991,file_name,vec__105996,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__105993,index,file,c__5518__auto__,size__5519__auto__,b__105992,s__105990__$2,temp__5804__auto__))
);
}
})());

var G__106581 = (i__105991 + (1));
i__105991 = G__106581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__105992),frontend$handler$editor$iter__105989(cljs.core.chunk_rest(s__105990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__105992),null);
}
} else {
var vec__106001 = cljs.core.first(s__105990__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106001,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106001,(1),null);
return cljs.core.cons((function (){var file_name = (function (){var G__106007 = file.name;
return (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(G__106007) : frontend.util.node_path.basename.call(null,G__106007));
})();
var vec__106004 = (cljs.core.truth_(file_name)?(function (){var ext_base = (frontend.util.node_path.extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.extname.cljs$core$IFn$_invoke$arity$1(file_name) : frontend.util.node_path.extname.call(null,file_name));
var ext_full = ((cljs.core.not(frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$1(ext_base)))?(frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1(file_name) : frontend.util.full_path_extname.call(null,file_name)):ext_base);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file_name,(0),(cljs.core.count(file_name) - cljs.core.count(ext_full))),ext_full,ext_base], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null));
var file_stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106004,(0),null);
var ext_full = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106004,(1),null);
var ext_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106004,(2),null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((gen_filename.cljs$core$IFn$_invoke$arity$2 ? gen_filename.cljs$core$IFn$_invoke$arity$2(index,file_stem) : gen_filename.call(null,index,file_stem))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext_full)].join('');
var file_rpath = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_dir_rpath),"/",filename].join('');
var matched_alias = frontend.handler.assets.get_matched_alias_by_ext(ext_base);
var file_rpath__$1 = (function (){var G__106008 = file_rpath;
if((!((matched_alias == null)))){
return clojure.string.replace(G__106008,/^[.\\/\\]*assets[\\/\\]+/,"");
} else {
return G__106008;
}
})();
var dir = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(matched_alias);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return repo_dir;
}
})();
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var from = cljs.core.not_empty(file.path);
console.debug("Debug: Copy Asset #",dir,file_rpath__$1,from);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.apis.copyFileToAssets(dir,file_rpath__$1,from),((function (from,file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__){
return (function (dest){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_rpath__$1,((typeof dest === 'string')?(new File([],dest)):file),logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),matched_alias], null);
});})(from,file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__))
),((function (from,file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__){
return (function (p1__105982_SHARP_){
return console.error("Debug: Copy Asset Error#",p1__105982_SHARP_);
});})(from,file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__))
);
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__){
return (function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(console.debug("Debug: Writing Asset #",dir,file_rpath__$1),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.arrayBuffer(),(function (buffer){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(goog.crypt.base64.encodeByteArray((new Uint8Array(buffer))),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),(function (fpath){
return promesa.protocols._promise(frontend.fs.capacitor_fs._LT_write_file_with_base64(fpath,content));
}));
}));
}));
})):frontend.fs.write_file_BANG_(repo,dir,file_rpath__$1,file.stream(),null)),(function (___37148__auto____$1){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_rpath__$1,file,logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_rpath__$1], 0)),matched_alias], null));
}));
}));
});})(file_name,vec__106004,file_stem,ext_full,ext_base,filename,file_rpath,matched_alias,file_rpath__$1,dir,vec__106001,index,file,s__105990__$2,temp__5804__auto__))
);
}
})(),frontend$handler$editor$iter__105989(cljs.core.rest(s__105990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,files));
})());
}));

(frontend.handler.editor.save_assets_BANG_.cljs$lang$maxFixedArity = 5);

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_assets_url_cache !== 'undefined')){
} else {
frontend.handler.editor._STAR_assets_url_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Make asset URL for UI element, to fill img.src
 */
frontend.handler.editor.make_asset_url = (function frontend$handler$editor$make_asset_url(path){
if(frontend.config.publishing_QMARK_){
return path;
} else {
var repo = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo);
var path__$1 = clojure.string.replace(path,/^(\.\.)?\//,"./");
var full_path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path__$1], 0));
var data_url_QMARK_ = clojure.string.starts_with_QMARK_(path__$1,"data:");
if(data_url_QMARK_){
return path__$1;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.assets.alias_enabled_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.assets.check_alias_path_QMARK_(path__$1);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.assets.resolve_asset_real_path_url(frontend.state.get_current_repo(),path__$1);
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return logseq.common.path.prepend_protocol("assets:",full_path);
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.mobile.util.convert_file_src(full_path);
} else {
var handle_path = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_path)].join('');
var cached_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.handler.editor._STAR_assets_url_cache),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handle_path));
if(cljs.core.truth_(cached_url)){
return promesa.core.resolved(cached_url);
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.await_get_nfs_file_handle(repo,handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = handle;
if(cljs.core.truth_(and__5041__auto__)){
return handle.getFile();
} else {
return and__5041__auto__;
}
})(),(function (file){
return promesa.protocols._promise((cljs.core.truth_(file)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(URL.createObjectURL(file),(function (url){
return promesa.protocols._promise((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.editor._STAR_assets_url_cache,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handle_path),url);

return url;
})()
);
}));
})):null));
}));
}));
}));
}

}
}
}
}
}
});
frontend.handler.editor.delete_asset_of_block_BANG_ = (function frontend$handler$editor$delete_asset_of_block_BANG_(p__106009){
var map__106010 = p__106009;
var map__106010__$1 = cljs.core.__destructure_map(map__106010);
var _opts = map__106010__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"full-text","full-text",1432444182));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var delete_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106010__$1,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572));
var block = frontend.db.model.query_block_by_uuid(block_id);
var _ = (function (){var or__5043__auto__ = block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)," not exists"].join('');
}
})();
var text = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var content = clojure.string.replace(text,full_text,"");
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,block,content);

if(cljs.core.truth_((function (){var and__5041__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return delete_local_QMARK_;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = (cljs.core.truth_(frontend.util.electron_QMARK_())?href:cljs.core.second(cljs.core.re_find(/\((.+)\)$/,full_text)));
if(cljs.core.truth_(temp__5804__auto__)){
var href__$1 = temp__5804__auto__;
var block_file_rpath = frontend.db.model.get_block_file_path(block);
var asset_fpath = ((clojure.string.starts_with_QMARK_(href__$1,"assets://"))?logseq.common.path.url_to_path(href__$1):frontend.config.get_repo_fpath(repo,logseq.common.path.resolve_relative_path(block_file_rpath,href__$1)));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.handler.editor","deleting-asset","frontend.handler.editor/deleting-asset",-1639767794),href__$1,asset_fpath], 0));

return frontend.fs.unlink_BANG_(repo,asset_fpath,null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Relative path to current file path.
 * 
 * Requires editing state
 */
frontend.handler.editor.resolve_relative_path = (function frontend$handler$editor$resolve_relative_path(file_path){
var temp__5802__auto__ = (function (){var or__5043__auto__ = frontend.db.model.get_block_file_path(frontend.state.get_edit_block());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(frontend.config.get_pages_directory())?logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_pages_directory(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["_.md"], 0)):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "pages/contents.md";
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var current_file_rpath = temp__5802__auto__;
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var current_file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_file_rpath], 0));
return logseq.common.path.get_relative_path(current_file_fpath,file_path);
} else {
return file_path;
}
});
/**
 * Paste asset and insert link to current editing block
 */
frontend.handler.editor.upload_asset = (function frontend$handler$editor$upload_asset(id,files,format,uploading_QMARK_,drop_or_paste_QMARK_){
var repo = frontend.state.get_current_repo();
if(frontend.config.local_db_QMARK_(repo)){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.save_assets_BANG_.cljs$core$IFn$_invoke$arity$2(repo,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files)),(function (res){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(res);
if(and__5041__auto__){
return cljs.core.first(res);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var vec__106011 = temp__5804__auto__;
var asset_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106011,(0),null);
var file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106011,(1),null);
var asset_file_fpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106011,(2),null);
var matched_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106011,(3),null);
var image_QMARK_ = frontend.config.ext_of_image_QMARK_(asset_file_name);
return frontend.handler.editor.insert_command_BANG_(id,frontend.handler.assets.get_asset_file_link(format,(cljs.core.truth_(matched_alias)?[(cljs.core.truth_(image_QMARK_)?"../assets/":""),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(matched_alias)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_file_name)].join(''):frontend.handler.editor.resolve_relative_path((function (){var or__5043__auto__ = asset_file_fpath;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return asset_file_name;
}
})())),(cljs.core.truth_(file_obj)?file_obj.name:(cljs.core.truth_(image_QMARK_)?"image":"asset")),image_QMARK_),format,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),(cljs.core.truth_(drop_or_paste_QMARK_)?"":frontend.commands.command_trigger),new cljs.core.Keyword(null,"restore?","restore?",1172240305),true,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"insert-asset","insert-asset",1232083817)], null));
} else {
return null;
}
})),(function (){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_asset_uploading_process,(0));
}));
} else {
return null;
}
});
frontend.handler.editor.autopair_map = cljs.core.PersistentHashMap.fromArrays(["=","`","*","~","/","(","_","{","[","^","+"],["=","`","*","~","/",")","_","}","]","^","+"]);
frontend.handler.editor.reversed_autopair_map = cljs.core.zipmap(cljs.core.vals(frontend.handler.editor.autopair_map),cljs.core.keys(frontend.handler.editor.autopair_map));
frontend.handler.editor.autopair_when_selected = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["=",null,"*",null,"/",null,"_",null,"^",null,"+",null], null), null);
frontend.handler.editor.delete_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.handler.editor.autopair_map,"$","$",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":",":"], 0));
frontend.handler.editor.autopair = (function frontend$handler$editor$autopair(input_id,prefix,_format,_option){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.autopair_map,prefix);
var selected = frontend.util.get_selected_text();
var postfix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var value__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),postfix].join('');
var input = goog.dom.getElement(input_id);
if(cljs.core.truth_(value__$1)){
var vec__106014 = frontend.commands.simple_replace_BANG_(input_id,value__$1,selected,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),((postfix).length),new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (new_value,prefix_pos){
if((prefix_pos >= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new_value,prefix_pos,(prefix_pos + (2))),(prefix_pos + (2))], null);
} else {
return null;
}
})], null));
var prefix__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106014,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106014,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix__$1,logseq.graph_parser.util.page_ref.left_brackets)){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"selected","selected",574897764),selected], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix__$1,logseq.graph_parser.util.block_ref.left_parens)){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"selected","selected",574897764),selected], null));
} else {
return null;
}
}
} else {
return null;
}
});
frontend.handler.editor.surround_by_QMARK_ = (function frontend$handler$editor$surround_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
return frontend.util.text.surround_by_QMARK_(value,pos,before,end);
} else {
return null;
}
});
frontend.handler.editor.autopair_left_paren_QMARK_ = (function frontend$handler$editor$autopair_left_paren_QMARK_(input,key){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"(");
if(and__5041__auto__){
var or__5043__auto__ = frontend.handler.editor.surround_by_QMARK_(input,new cljs.core.Keyword(null,"start","start",-355208981),"");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.handler.editor.surround_by_QMARK_(input,"\n","");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.handler.editor.surround_by_QMARK_(input," ","");
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.handler.editor.surround_by_QMARK_(input,"]","");
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return frontend.handler.editor.surround_by_QMARK_(input,"(","");
}
}
}
}
} else {
return and__5041__auto__;
}
});
frontend.handler.editor.wrapped_by_QMARK_ = (function frontend$handler$editor$wrapped_by_QMARK_(input,before,end){
if(cljs.core.truth_(input)){
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
if((pos >= (0))){
return frontend.util.text.wrapped_by_QMARK_(value,pos,before,end);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return matched page names
 */
frontend.handler.editor.get_matched_pages = (function frontend$handler$editor$get_matched_pages(q){
var block = frontend.state.get_edit_block();
var editing_page = (function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5804__auto__)){
var page_id = temp__5804__auto__;
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(page_id) : frontend.db.entity.call(null,page_id)));
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
var pages = frontend.search.page_search.cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(editing_page)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p) : frontend.util.page_name_sanity_lc.call(null,p)),editing_page);
}),pages);
} else {
return pages;
}
});
frontend.handler.editor.get_matched_blocks = (function frontend$handler$editor$get_matched_blocks(q,block_id){
var current_block = frontend.state.get_edit_block();
var block_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),(function (){var G__106017 = frontend.state.get_current_repo();
var G__106018 = block_id;
var G__106019 = (99);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__106017,G__106018,G__106019) : frontend.db.get_block_parents.call(null,G__106017,G__106018,G__106019));
})()));
var current_and_parents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block))]),block_parents);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(frontend.state.get_current_repo(),q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(20)], null)),(function (result){
return promesa.protocols._promise(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (h){
return cljs.core.contains_QMARK_(current_and_parents,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(h));
}),result));
}));
}));
});
frontend.handler.editor.get_matched_templates = (function frontend$handler$editor$get_matched_templates(q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1(q);
});
frontend.handler.editor.get_matched_properties = (function frontend$handler$editor$get_matched_properties(q){
return frontend.search.property_search.cljs$core$IFn$_invoke$arity$1(q);
});
frontend.handler.editor.get_matched_property_values = (function frontend$handler$editor$get_matched_property_values(property,q){
return frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$2(property,q);
});
frontend.handler.editor.get_matched_commands = (function frontend$handler$editor$get_matched_commands(input){
try{var edit_content = (function (){var or__5043__auto__ = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var pos = frontend.util.cursor.pos(input);
var last_slash_caret_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data()));
var last_command = (function (){var and__5041__auto__ = last_slash_caret_pos;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,last_slash_caret_pos,pos);
} else {
return and__5041__auto__;
}
})();
if((pos > (0))){
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.commands.command_trigger,frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__5041__auto__){
return cljs.core.deref(frontend.commands._STAR_initial_commands);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = last_command;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$1(last_command);
} else {
return and__5041__auto__;
}
}
} else {
return null;
}
}catch (e106020){var e = e106020;
console.error(e);

return null;
}});
frontend.handler.editor.get_matched_block_commands = (function frontend$handler$editor$get_matched_block_commands(input){
try{var edit_content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var last_command = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(edit_content,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data())),pos);
if((pos > (0))){
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",frontend.util.nth_safe(edit_content,(pos - (1))));
if(and__5041__auto__){
return frontend.commands.block_commands_map();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = last_command;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.commands.get_matched_commands.cljs$core$IFn$_invoke$arity$2(last_command,frontend.commands.block_commands_map());
} else {
return and__5041__auto__;
}
}
} else {
return null;
}
}catch (e106021){var _error = e106021;
return null;
}});
frontend.handler.editor.auto_complete_QMARK_ = (function frontend$handler$editor$auto_complete_QMARK_(){
var or__5043__auto__ = cljs.core.deref(frontend.handler.editor._STAR_asset_uploading_QMARK_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_editor_action();
}
});
frontend.handler.editor.get_current_input_char = (function frontend$handler$editor$get_current_input_char(input){
var temp__5804__auto__ = frontend.util.cursor.pos(input);
if(cljs.core.truth_(temp__5804__auto__)){
var pos = temp__5804__auto__;
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if((((cljs.core.count(value) >= (pos + (1)))) && ((pos >= (1))))){
return frontend.util.nth_safe(value,pos);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.move_up_down = (function frontend$handler$editor$move_up_down(up_QMARK_){
return (function (event){
frontend.util.stop(event);

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var edit_block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
var move_nodes = (function (blocks){
var transact_data__102865__auto___106582 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106583 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106584 = (cljs.core.truth_(transact_data__102865__auto___106582)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
var before_editor_cursor__102868__auto___106585 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106582)){
if(cljs.core.truth_(transaction_opts__102866__auto___106583)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106583,opts__102867__auto___106584);
} else {
}

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__106022_106586 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106023_106587 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106024_106588 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106025_106589 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106024_106588);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106025_106589);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106583,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106584], 0));

frontend.modules.outliner.core.move_blocks_up_down_BANG_(blocks,up_QMARK_);

var r__102869__auto___106590 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106591 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106590], 0));
var tx_meta__102871__auto___106592 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106590));
var all_tx__102872__auto___106593 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106591,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106584));
var o__102873__auto___106594 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106594));
var opts_SHARP___102875__auto___106596 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106595,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106592], 0));
if(cljs.core.seq(all_tx__102872__auto___106593)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106584))){
} else {
var result__102876__auto___106597 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106593,opts_SHARP___102875__auto___106596,before_editor_cursor__102868__auto___106585);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106593,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106592,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106597], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106023_106587);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106022_106586);
}}

var temp__5804__auto__ = frontend.util.get_first_block_by_id(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
if(cljs.core.truth_(temp__5804__auto__)){
var block_node = temp__5804__auto__;
return block_node.scrollIntoView(({"behavior": "smooth", "block": "nearest"}));
} else {
return null;
}
});
if(cljs.core.truth_(edit_block_id)){
var temp__5804__auto__ = (function (){var G__106026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),edit_block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106026) : frontend.db.pull.call(null,G__106026));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var blocks_106598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null);
move_nodes(blocks_106598);

var temp__5804__auto____$1 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto____$1)){
var input_id = temp__5804__auto____$1;
var temp__5804__auto____$2 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5804__auto____$2)){
var input = temp__5804__auto____$2;
input.focus();

return setTimeout((function (){
return frontend.util.scroll_editor_cursor(input);
}),(100));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
var ids = frontend.state.get_selection_block_ids();
if(cljs.core.seq(ids)){
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids);
var blocks = (function (){var G__106027 = frontend.state.get_current_repo();
var G__106028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__106029 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__106027,G__106028,G__106029) : frontend.db.pull_many.call(null,G__106027,G__106028,G__106029));
})();
return move_nodes(blocks);
} else {
return null;
}
}
});
});
frontend.handler.editor.get_selected_ordered_blocks = (function frontend$handler$editor$get_selected_ordered_blocks(){
var repo = frontend.state.get_current_repo();
var ids = frontend.state.get_selection_block_ids();
var lookup_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids));
var G__106030 = repo;
var G__106031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__106032 = lookup_refs;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__106030,G__106031,G__106032) : frontend.db.pull_many.call(null,G__106030,G__106031,G__106032));
});
/**
 * `direction` = :left | :right.
 */
frontend.handler.editor.on_tab = (function frontend$handler$editor$on_tab(direction){
var blocks = frontend.handler.editor.get_selected_ordered_blocks();
if(cljs.core.seq(blocks)){
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__106033 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106034 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106035 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106036 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106035);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106036);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(blocks,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106034);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106033);
}}
} else {
return null;
}
});
frontend.handler.editor.get_link = (function frontend$handler$editor$get_link(format,link,label){
var link__$1 = (function (){var or__5043__auto__ = link;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var G__106037 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__106037__$1 = (((G__106037 instanceof cljs.core.Keyword))?G__106037.fqn:null);
switch (G__106037__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link__$1,label__$1], 0));

break;
default:
return null;

}
});
frontend.handler.editor.get_image_link = (function frontend$handler$editor$get_image_link(format,link,label){
var link__$1 = (function (){var or__5043__auto__ = link;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var label__$1 = (function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var G__106038 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__106038__$1 = (((G__106038 instanceof cljs.core.Keyword))?G__106038.fqn:null);
switch (G__106038__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label__$1,link__$1], 0));

break;
case "org":
return frontend.util.format("[[%s]]");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106038__$1)].join('')));

}
});
frontend.handler.editor.handle_command_input_close = (function frontend$handler$editor$handle_command_input_close(id){
frontend.state.set_editor_show_input_BANG_(null);

var temp__5804__auto__ = frontend.state.get_editor_last_pos();
if(cljs.core.truth_(temp__5804__auto__)){
var saved_cursor = temp__5804__auto__;
var temp__5804__auto____$1 = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var input = temp__5804__auto____$1;
input.focus();

return frontend.util.cursor.move_cursor_to(input,saved_cursor);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.handle_command_input = (function frontend$handler$editor$handle_command_input(command,id,format,m){
var G__106039_106601 = command;
var G__106039_106602__$1 = (((G__106039_106601 instanceof cljs.core.Keyword))?G__106039_106601.fqn:null);
switch (G__106039_106602__$1) {
case "link":
var map__106040_106604 = m;
var map__106040_106605__$1 = cljs.core.__destructure_map(map__106040_106604);
var link_106606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106040_106605__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_106607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106040_106605__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(((clojure.string.blank_QMARK_(link_106606)) || (clojure.string.blank_QMARK_(label_106607)))){
} else {
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_link(format,link_106606,label_106607),format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[frontend.commands.command_trigger,"link"].join(''),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"link","link",-1769163468)], null));
}

break;
case "image-link":
var map__106041_106608 = m;
var map__106041_106609__$1 = cljs.core.__destructure_map(map__106041_106608);
var link_106610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106041_106609__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var label_106611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106041_106609__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if((!(clojure.string.blank_QMARK_(link_106610)))){
frontend.handler.editor.insert_command_BANG_(id,frontend.handler.editor.get_image_link(format,link_106610,label_106611),format,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[frontend.commands.command_trigger,"link"].join(''),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"image-link","image-link",1877271958)], null));
} else {
}

break;
default:

}

return frontend.handler.editor.handle_command_input_close(id);
});
frontend.handler.editor.close_autocomplete_if_outside = (function frontend$handler$editor$close_autocomplete_if_outside(input){
if(cljs.core.truth_((function (){var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-search","page-search",1842925280),null,new cljs.core.Keyword(null,"block-search","block-search",-897517253),null,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573),null], null), null),frontend.state.get_editor_action())) && (((cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.page_ref.left_brackets,logseq.graph_parser.util.page_ref.right_brackets))) && (((cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.block_ref.left_parens,logseq.graph_parser.util.block_ref.right_parens))) && ((!(frontend.util.text.wrapped_by_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input.value,(0),frontend.util.cursor.pos(input)),frontend.util.cursor.pos(input),frontend.commands.hashtag,"")))))))));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;
}
});
frontend.handler.editor.resize_image_BANG_ = (function frontend$handler$editor$resize_image_BANG_(block_id,metadata,full_text,size){
var new_meta = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,size], 0));
var image_part = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(full_text,/\{/));
var new_full_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_part),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_meta], 0))].join('');
var block = (function (){var G__106042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106042) : frontend.db.pull.call(null,G__106042));
})();
var value = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var new_value = clojure.string.replace(value,full_text,new_full_text);
return frontend.handler.editor.save_block_aux_BANG_(block,new_value,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.handler.editor.mark_last_input_time_BANG_ = (function frontend$handler$editor$mark_last_input_time_BANG_(repo){
if(cljs.core.truth_(repo)){
frontend.state.set_editor_last_input_time_BANG_(repo,frontend.util.time_ms());

return frontend.db.clear_repo_persistent_job_BANG_(repo);
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.editor !== 'undefined') && (typeof frontend.handler.editor._STAR_auto_save_timeout !== 'undefined')){
} else {
frontend.handler.editor._STAR_auto_save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.editor.edit_box_on_change_BANG_ = (function frontend$handler$editor$edit_box_on_change_BANG_(e,_block,id){
var value = frontend.util.evalue(e);
var repo = frontend.state.get_current_repo();
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(id,value,false);

if(cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout))){
clearTimeout(cljs.core.deref(frontend.handler.editor._STAR_auto_save_timeout));
} else {
}

frontend.handler.editor.mark_last_input_time_BANG_(repo);

return cljs.core.reset_BANG_(frontend.handler.editor._STAR_auto_save_timeout,setTimeout((function (){
if(cljs.core.truth_(frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diff","diff",2135942783),(500)], 0)))){
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"auto-save","auto-save",1805740650));

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-properties?","skip-properties?",329398686),true], null));

return frontend.state.set_editor_op_BANG_(null);
} else {
return null;
}
}),(500)));
});
frontend.handler.editor.start_of_new_word_QMARK_ = (function frontend$handler$editor$start_of_new_word_QMARK_(input,pos){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(input.value,(pos - (2))));
});
frontend.handler.editor.handle_last_input = (function frontend$handler$editor$handle_last_input(){
var input = frontend.state.get_input();
var input_id = frontend.state.get_edit_input_id();
var edit_block = frontend.state.get_edit_block();
var pos = frontend.util.cursor.pos(input);
var content = input.value;
var last_input_char = frontend.util.nth_safe(content,(pos - (1)));
var last_prev_input_char = frontend.util.nth_safe(content,((pos - (1)) - (1)));
var prev_prev_input_char = frontend.util.nth_safe(content,(pos - (3)));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content,"1. ");
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char," ");
if(and__5041__auto____$1){
var and__5041__auto____$2 = input_id;
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = edit_block;
if(cljs.core.truth_(and__5041__auto____$3)){
return (!(frontend.handler.editor.own_order_number_list_QMARK_(edit_block)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),edit_block], null)),(function (___37148__auto__){
return promesa.protocols._promise(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(input_id,""));
}));
}));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.command_trigger);
if(and__5041__auto__){
var or__5043__auto__ = cljs.core.re_find(/^\//m,cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.editor.start_of_new_word_QMARK_(input,pos);
}
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

frontend.commands.reinit_matched_commands_BANG_();

return frontend.state.set_editor_show_commands_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.angle_bracket)){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

frontend.commands.reinit_matched_block_commands_BANG_();

return frontend.state.set_editor_show_block_commands_BANG_();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(last_input_char,last_prev_input_char,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.commands.colon], 0))) && ((((prev_prev_input_char == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_prev_input_char,"\n")))))){
frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,(2));

frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"property-search","property-search",1730602043));
} else {
if((function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-search","property-search",1730602043),frontend.state.get_editor_action());
if(and__5041__auto__){
var map__106043 = frontend.util.text.get_current_line_by_pos(input.value,(pos - (1)));
var map__106043__$1 = cljs.core.__destructure_map(map__106043);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106043__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
return frontend.util.text.wrapped_by_QMARK_(line,(pos - start_pos),"",logseq.graph_parser.property.colons);
} else {
return and__5041__auto__;
}
})()){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"property-search","property-search",1730602043));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.colon)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-search","property-search",1730602043),frontend.state.get_editor_action())))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_input_char,frontend.commands.hashtag);
if(and__5041__auto__){
var or__5043__auto__ = cljs.core.re_find(/^#/m,cljs.core.str.cljs$core$IFn$_invoke$arity$1(input.value));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.editor.start_of_new_word_QMARK_(input,pos);
}
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

frontend.state.set_editor_last_pos_BANG_(pos);

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
} else {
return null;

}
}
}
}
}
}
}
});
frontend.handler.editor.get_selected_text = (function frontend$handler$editor$get_selected_text(){
var text = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(frontend.state.get_editor_action_data());
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
return text;
}
});
frontend.handler.editor.block_on_chosen_handler = (function frontend$handler$editor$block_on_chosen_handler(id,q,format,selected_text){
return (function (chosen,_click_QMARK_){
frontend.state.clear_editor_action_BANG_();

var uuid_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen));
frontend.handler.editor.insert_command_BANG_(id,logseq.graph_parser.util.block_ref.__GT_block_ref(uuid_string),format,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[logseq.graph_parser.util.block_ref.left_parens,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(selected_text)?"":q))].join(''),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),logseq.graph_parser.util.block_ref.right_parens,new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first(logseq.graph_parser.util.block_ref.right_parens,s,"");
}),new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715),(3),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"block-ref","block-ref",362929756)], null));

frontend.handler.editor.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(chosen),new cljs.core.Keyword(null,"id","id",-1388402092),uuid_string);

var temp__5804__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
return input.focus();
} else {
return null;
}
});
});
frontend.handler.editor.block_non_exist_handler = (function frontend$handler$editor$block_non_exist_handler(input){
return (function (){
frontend.state.clear_editor_action_BANG_();

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,(2));
});
});
frontend.handler.editor.paste_block_cleanup = (function frontend$handler$editor$paste_block_cleanup(block,page,exclude_properties,format,content_update_fn,keep_uuid_QMARK_){
var new_content = (cljs.core.truth_(content_update_fn)?(function (){var G__106044 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
return (content_update_fn.cljs$core$IFn$_invoke$arity$1 ? content_update_fn.cljs$core$IFn$_invoke$arity$1(G__106044) : content_update_fn.call(null,G__106044));
})():new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block));
var new_content__$1 = (function (){var G__106045 = new_content;
var G__106045__$1 = ((cljs.core.not(keep_uuid_QMARK_))?frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"id",G__106045):G__106045);
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"custom_id",G__106045__$1);

})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,block,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(keep_uuid_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null)),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153)], 0))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.Keyword("block","format","block/format",-1212045901),format,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(keep_uuid_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom_id","custom_id",834948303),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exclude_properties], 0))),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708).cljs$core$IFn$_invoke$arity$1(block),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keep_uuid_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),exclude_properties)),new cljs.core.Keyword("block","content","block/content",-161885195),new_content__$1], null)], 0));
});
frontend.handler.editor.edit_last_block_after_inserted_BANG_ = (function frontend$handler$editor$edit_last_block_after_inserted_BANG_(result){
return setTimeout((function (){
var temp__5804__auto__ = cljs.core.last(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(result));
if(cljs.core.truth_(temp__5804__auto__)){
var last_block = temp__5804__auto__;
frontend.handler.editor.clear_when_saved_BANG_();

var last_block_SINGLEQUOTE_ = (function (){var G__106046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106046) : frontend.db.pull.call(null,G__106046));
})();
var G__106047 = last_block_SINGLEQUOTE_;
var G__106048 = new cljs.core.Keyword(null,"max","max",61366548);
var G__106049 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(last_block_SINGLEQUOTE_);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__106047,G__106048,G__106049) : frontend.handler.editor.edit_block_BANG_.call(null,G__106047,G__106048,G__106049));
} else {
return null;
}
}),(0));
});
frontend.handler.editor.nested_blocks = (function frontend$handler$editor$nested_blocks(blocks){
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
return (!((cljs.core.some((function (p1__106050_SHARP_){
var G__106051 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(p1__106050_SHARP_));
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__106051) : ids.call(null,G__106051));
}),blocks) == null)));
});
/**
 * Given a vec of blocks, insert them into the target page.
 * keep-uuid?: if true, keep the uuid provided in the block structure.
 */
frontend.handler.editor.paste_blocks = (function frontend$handler$editor$paste_blocks(blocks,p__106052){
var map__106053 = p__106052;
var map__106053__$1 = cljs.core.__destructure_map(map__106053);
var content_update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"content-update-fn","content-update-fn",132456615));
var exclude_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106053__$1,new cljs.core.Keyword(null,"exclude-properties","exclude-properties",1449787201),cljs.core.PersistentVector.EMPTY);
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var revert_cut_txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"revert-cut-txs","revert-cut-txs",1919904845));
var skip_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106053__$1,new cljs.core.Keyword(null,"skip-empty-target?","skip-empty-target?",-1452855908));
frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"paste-blocks","paste-blocks",538514211));

var editing_block_106612 = (function (){var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var editing_block_106612 = temp__5804__auto__;
var G__106054 = (function (){var G__106055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(editing_block_106612)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106055) : frontend.db.pull.call(null,G__106055));
})();
if((G__106054 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__106054,new cljs.core.Keyword("block","content","block/content",-161885195),frontend.state.get_edit_content());
}
} else {
return null;
}
})();
var has_unsaved_edits_106613 = (function (){var and__5041__auto__ = editing_block_106612;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1((function (){var G__106056 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(editing_block_106612);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106056) : frontend.db.pull.call(null,G__106056));
})()),frontend.state.get_edit_content());
} else {
return and__5041__auto__;
}
})();
var target_block_106614__$1 = (function (){var or__5043__auto__ = target_block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return editing_block_106612;
}
})();
var block_106615 = (function (){var G__106057 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106057) : frontend.db.entity.call(null,G__106057));
})();
var page_106616 = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block_106615))?block_106615:(cljs.core.truth_(target_block_106614__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__106058 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106058) : frontend.db.entity.call(null,G__106058));
})()):null));
var empty_target_QMARK__106617 = ((skip_empty_target_QMARK_ === true)?false:clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1)));
var paste_nested_blocks_QMARK__106618 = frontend.handler.editor.nested_blocks(blocks);
var target_block_has_children_QMARK__106619 = (function (){var G__106059 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__106059) : frontend.db.has_children_QMARK_.call(null,G__106059));
})();
var replace_empty_target_QMARK__106620 = (function (){var and__5041__auto__ = empty_target_QMARK__106617;
if(and__5041__auto__){
var and__5041__auto____$1 = (function (){var or__5043__auto__ = cljs.core.not(target_block_has_children_QMARK__106619);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto____$1 = target_block_has_children_QMARK__106619;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(1));
} else {
return and__5041__auto____$1;
}
}
})();
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.handler.editor.block_has_no_ref_QMARK_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var target_block_SINGLEQUOTE__106621 = (cljs.core.truth_((function (){var and__5041__auto__ = empty_target_QMARK__106617;
if(and__5041__auto__){
var and__5041__auto____$1 = target_block_has_children_QMARK__106619;
if(cljs.core.truth_(and__5041__auto____$1)){
return paste_nested_blocks_QMARK__106618;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?(function (){var G__106060 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106060) : frontend.db.pull.call(null,G__106060));
})():target_block_106614__$1);
var sibling_QMARK__106622__$1 = ((((paste_nested_blocks_QMARK__106618) && (empty_target_QMARK__106617)))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE__106621),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block_106614__$1)):(((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_(target_block_has_children_QMARK__106619)?false:true
)));
if(cljs.core.truth_(has_unsaved_edits_106613)){
var transact_data__102865__auto___106623 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106624 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106625 = (cljs.core.truth_(transact_data__102865__auto___106623)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
var before_editor_cursor__102868__auto___106626 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106623)){
if(cljs.core.truth_(transaction_opts__102866__auto___106624)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106624,opts__102867__auto___106625);
} else {
}

frontend.modules.outliner.core.save_block_BANG_(editing_block_106612);
} else {
var _STAR_transaction_data_STAR__orig_val__106061_106627 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106062_106628 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106063_106629 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106064_106630 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106063_106629);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106064_106630);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106624,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106625], 0));

frontend.modules.outliner.core.save_block_BANG_(editing_block_106612);

var r__102869__auto___106631 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106632 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106631], 0));
var tx_meta__102871__auto___106633 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106631));
var all_tx__102872__auto___106634 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106632,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106625));
var o__102873__auto___106635 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106635));
var opts_SHARP___102875__auto___106637 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106636,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106633], 0));
if(cljs.core.seq(all_tx__102872__auto___106634)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106625))){
} else {
var result__102876__auto___106638 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106634,opts_SHARP___102875__auto___106637,before_editor_cursor__102868__auto___106626);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106634,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106633,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106638], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106062_106628);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106061_106627);
}}
} else {
}

var transact_data__102865__auto___106639 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106640 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106641 = (cljs.core.truth_(transact_data__102865__auto___106639)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),revert_cut_txs], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),revert_cut_txs], null));
var before_editor_cursor__102868__auto___106642 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106639)){
if(cljs.core.truth_(transaction_opts__102866__auto___106640)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106640,opts__102867__auto___106641);
} else {
}

if(cljs.core.truth_(target_block_SINGLEQUOTE__106621)){
var format_106643 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE__106621);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE__106644 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page_106616,exclude_properties,format_106643,content_update_fn,keep_uuid_QMARK_);
}),blocks);
var result_106645 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE__106644,target_block_SINGLEQUOTE__106621,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__106622__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK__106620,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
frontend.state.set_block_op_type_BANG_(null);

frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_106645);
} else {
}
} else {
var _STAR_transaction_data_STAR__orig_val__106065_106646 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106066_106647 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106067_106648 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106068_106649 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106067_106648);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106068_106649);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106640,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106641], 0));

if(cljs.core.truth_(target_block_SINGLEQUOTE__106621)){
var format_106650 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE__106621);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var blocks_SINGLEQUOTE__106651 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page_106616,exclude_properties,format_106650,content_update_fn,keep_uuid_QMARK_);
}),blocks);
var result_106652 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE__106651,target_block_SINGLEQUOTE__106621,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__106622__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK__106620,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_], null));
frontend.state.set_block_op_type_BANG_(null);

frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_106652);
} else {
}

var r__102869__auto___106653 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106654 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106653], 0));
var tx_meta__102871__auto___106655 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106653));
var all_tx__102872__auto___106656 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106654,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106641));
var o__102873__auto___106657 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106657));
var opts_SHARP___102875__auto___106659 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106658,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106655], 0));
if(cljs.core.seq(all_tx__102872__auto___106656)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106641))){
} else {
var result__102876__auto___106660 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106656,opts_SHARP___102875__auto___106659,before_editor_cursor__102868__auto___106642);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106656,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106655,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106660], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106066_106647);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106065_106646);
}}

return frontend.state.set_editor_op_BANG_(null);
});
/**
 * keep-uuid? - maintain the existing :uuid in tree vec
 */
frontend.handler.editor.block_tree__GT_blocks = (function frontend$handler$editor$block_tree__GT_blocks(tree_vec,format,keep_uuid_QMARK_,page_name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block);
var props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(block));
var content_STAR_ = [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format))?"- ":"* "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.property.insert_properties(format,content,props))].join('');
var ast = frontend.format.mldoc.__GT_edn(content_STAR_,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var blocks = frontend.format.block.extract_blocks(ast,content_STAR_,format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name], null));
var fst_block = cljs.core.first(blocks);
var fst_block__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = keep_uuid_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(block)):fst_block);
if(cljs.core.truth_(fst_block__$1)){
} else {
throw (new Error(["Assert failed: ","fst-block shouldn't be nil","\n","fst-block"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block__$1,new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
}),frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1(tree_vec));
});
/**
 * `tree-vec`: a vector of blocks.
 * A block element: {:content :properties :children [block-1, block-2, ...]}
 */
frontend.handler.editor.insert_block_tree = (function frontend$handler$editor$insert_block_tree(tree_vec,format,p__106069){
var map__106070 = p__106069;
var map__106070__$1 = cljs.core.__destructure_map(map__106070);
var opts = map__106070__$1;
var target_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106070__$1,new cljs.core.Keyword(null,"target-block","target-block",348392017));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106070__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
var page_name = (function (){var G__106071 = page_id;
var G__106071__$1 = (((G__106071 == null))?null:(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106071) : frontend.db.entity.call(null,G__106071)));
if((G__106071__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__106071__$1);
}
})();
var blocks = frontend.handler.editor.block_tree__GT_blocks(tree_vec,format,keep_uuid_QMARK_,page_name);
var blocks__$1 = logseq.graph_parser.block.with_parent_and_left(page_id,blocks);
var block_refs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref){
return ((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))));
}),cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks__$1], 0))));
if(cljs.core.seq(block_refs)){
var G__106072_106661 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106073){
var vec__106074 = p__106073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106074,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106074,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_refs);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__106072_106661) : frontend.db.transact_BANG_.call(null,G__106072_106661));
} else {
}

return frontend.handler.editor.paste_blocks(blocks__$1,opts);
});
/**
 * `tree-vec`: a vector of blocks.
 * A block element: {:content :properties :children [block-1, block-2, ...]}
 */
frontend.handler.editor.insert_block_tree_after_target = (function frontend$handler$editor$insert_block_tree_after_target(target_block_id,sibling_QMARK_,tree_vec,format,keep_uuid_QMARK_){
return frontend.handler.editor.insert_block_tree(tree_vec,format,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target-block","target-block",348392017),(frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(target_block_id) : frontend.db.pull.call(null,target_block_id)),new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"skip-empty-target?","skip-empty-target?",-1452855908),true,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null));
});
frontend.handler.editor.insert_template_BANG_ = (function frontend$handler$editor$insert_template_BANG_(var_args){
var G__106078 = arguments.length;
switch (G__106078) {
case 2:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,db_id){
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,db_id,p__106079){
var map__106080 = p__106079;
var map__106080__$1 = cljs.core.__destructure_map(map__106080);
var opts = map__106080__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106080__$1,new cljs.core.Keyword(null,"target","target",253001721));
var temp__5804__auto__ = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_template_by_name(cljs.core.name(db_id))));
if(cljs.core.truth_(temp__5804__auto__)){
var db_id__$1 = temp__5804__auto__;
var journal_QMARK_ = new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(target);
var repo = frontend.state.get_current_repo();
var target__$1 = (function (){var or__5043__auto__ = target;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_edit_block();
}
})();
var block = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id__$1) : frontend.db.entity.call(null,db_id__$1));
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var template_including_parent_QMARK_ = (!(new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block)) === false));
var blocks = (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,block_uuid) : frontend.db.get_block_and_children.call(null,repo,block_uuid));
var root_block = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(db_id__$1) : frontend.db.pull.call(null,db_id__$1));
var blocks_exclude_root = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),db_id__$1);
}),blocks);
var sorted_blocks = frontend.modules.outliner.tree.sort_blocks(blocks_exclude_root,root_block);
var sorted_blocks__$1 = cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.first(sorted_blocks),new cljs.core.Keyword("block","properties-text-values","block/properties-text-values",1271244708),cljs.core.dissoc,new cljs.core.Keyword(null,"template","template",-702405684)),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),(function (keys){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template","template",-702405684),null], null), null),keys));
})),cljs.core.rest(sorted_blocks));
var blocks__$1 = ((template_including_parent_QMARK_)?sorted_blocks__$1:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),sorted_blocks__$1));
if(cljs.core.truth_(element_id)){
frontend.handler.editor.insert_command_BANG_(element_id,"",format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),frontend.commands.command_trigger], null));
} else {
}

var exclude_properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665)], null);
var content_update_fn = (function (content){
return frontend.template.resolve_dynamic_template_BANG_(frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"template-including-parent",frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,"template",content)));
});
var page = (cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?block:(cljs.core.truth_(target__$1)?new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__106081 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106081) : frontend.db.entity.call(null,G__106081));
})()):null));
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return frontend.handler.editor.paste_block_cleanup(block__$1,page,exclude_properties,format,content_update_fn,false);
}),blocks__$1);
var sibling_QMARK_ = new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(opts);
var sibling_QMARK__SINGLEQUOTE_ = (((!((sibling_QMARK_ == null))))?sibling_QMARK_:(cljs.core.truth_((function (){var G__106082 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target__$1);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__106082) : frontend.db.has_children_QMARK_.call(null,G__106082));
})())?false:true
));
try{var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"created-from-journal-template?","created-from-journal-template?",-2127356314),journal_QMARK_], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"created-from-journal-template?","created-from-journal-template?",-2127356314),journal_QMARK_], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
return frontend.handler.editor.edit_last_block_after_inserted_BANG_(result);
} else {
var _STAR_transaction_data_STAR__orig_val__106084 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106085 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106086 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106087 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106086);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106087);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var result_106663 = frontend.modules.outliner.core.insert_blocks_BANG_(blocks_SINGLEQUOTE_,target__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__SINGLEQUOTE_));
frontend.handler.editor.edit_last_block_after_inserted_BANG_(result_106663);

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106085);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106084);
}}
}catch (e106083){var e = e106083;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Template insert error: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.message], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
}} else {
return null;
}
}));

(frontend.handler.editor.insert_template_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.editor.template_on_chosen_handler = (function frontend$handler$editor$template_on_chosen_handler(element_id){
return (function (p__106088,_click_QMARK_){
var vec__106089 = p__106088;
var _template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106089,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106089,(1),null);
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,db_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
});
});
frontend.handler.editor.get_searching_property = (function frontend$handler$editor$get_searching_property(input){
var value = input.value;
var pos = frontend.util.get_selection_start(input);
var postfix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,pos);
var end_index = (function (){var temp__5804__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(postfix,logseq.graph_parser.property.colons);
if(cljs.core.truth_(temp__5804__auto__)){
var idx = temp__5804__auto__;
return ((function (){var x__5128__auto__ = (0);
var y__5129__auto__ = ((cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),pos)).length);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() + idx);
} else {
return null;
}
})();
var start_index = (function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),pos),"\n");
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return (p + (1));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-index","end-index",1056180246),end_index,new cljs.core.Keyword(null,"searching-property","searching-property",495243376),(cljs.core.truth_((function (){var and__5041__auto__ = start_index;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = end_index;
if(cljs.core.truth_(and__5041__auto____$1)){
return (end_index >= start_index);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start_index,end_index):null)], null);
});
frontend.handler.editor.property_on_chosen_handler = (function frontend$handler$editor$property_on_chosen_handler(element_id,q){
return (function (property){
var temp__5804__auto__ = goog.dom.getElement(element_id);
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
var map__106092 = frontend.handler.editor.get_searching_property(input);
var map__106092__$1 = cljs.core.__destructure_map(map__106092);
var end_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106092__$1,new cljs.core.Keyword(null,"end-index","end-index",1056180246));
var searching_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106092__$1,new cljs.core.Keyword(null,"searching-property","searching-property",495243376));
frontend.util.cursor.move_cursor_to(input,(end_index + (2)));

frontend.commands.insert_BANG_(element_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = property;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return q;
}
})()),logseq.graph_parser.property.colons," "].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(searching_property),logseq.graph_parser.property.colons].join('')], null));

frontend.state.clear_editor_action_BANG_();

return setTimeout((function (){
var pos = (function (){var input__$1 = goog.dom.getElement(element_id);
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input__$1);
})();
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),(function (){var or__5043__auto__ = property;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return q;
}
})(),new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null));

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"property-value-search","property-value-search",1985137335));
}),(50));
} else {
return null;
}
});
});
frontend.handler.editor.property_value_on_chosen_handler = (function frontend$handler$editor$property_value_on_chosen_handler(element_id,q){
return (function (property_value){
frontend.commands.insert_BANG_(element_id,[logseq.graph_parser.property.colons," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = property_value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return q;
}
})())].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),[logseq.graph_parser.property.colons," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('')], null));

return frontend.state.clear_editor_action_BANG_();
});
});
frontend.handler.editor.parent_is_page_QMARK_ = (function frontend$handler$editor$parent_is_page_QMARK_(p__106093){
var map__106094 = p__106093;
var map__106094__$1 = cljs.core.__destructure_map(map__106094);
var node = map__106094__$1;
var map__106095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106094__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__106095__$1 = cljs.core.__destructure_map(map__106095);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106095__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106095__$1,new cljs.core.Keyword("block","page","block/page",822314108));
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(node)){
} else {
throw (new Error("Assert failed: (tree/satisfied-inode? node)"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,page);
});
frontend.handler.editor.outdent_on_enter = (function frontend$handler$editor$outdent_on_enter(node){
if(frontend.handler.editor.parent_is_page_QMARK_(node)){
return null;
} else {
var parent_node = frontend.modules.outliner.tree._get_parent(node);
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);
} else {
var _STAR_transaction_data_STAR__orig_val__106096 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106097 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106098 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106099 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106098);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106099);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.modules.outliner.core.move_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_node),true);

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106097);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106096);
}}
}
});
frontend.handler.editor.last_top_level_child_QMARK_ = (function frontend$handler$editor$last_top_level_child_QMARK_(p__106100,current_node){
var map__106101 = p__106100;
var map__106101__$1 = cljs.core.__destructure_map(map__106101);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
var temp__5804__auto__ = (function (){var temp__5802__auto__ = cljs.core.parse_uuid(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5802__auto__)){
var id_SINGLEQUOTE_ = temp__5802__auto__;
var G__106102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id_SINGLEQUOTE_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106102) : frontend.db.entity.call(null,G__106102));
} else {
var G__106103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(id) : frontend.util.page_name_sanity_lc.call(null,id))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106103) : frontend.db.entity.call(null,G__106103));
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var entity = temp__5804__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity),frontend.modules.outliner.tree._get_parent_id(current_node));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.insert = (function frontend$handler$editor$insert(var_args){
var G__106105 = arguments.length;
switch (G__106105) {
case 1:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1 = (function (insertion){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2(insertion,false);
}));

(frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$2 = (function (insertion,auto_complete_enabled_QMARK_){
if(cljs.core.truth_((function (){var or__5043__auto__ = auto_complete_enabled_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.handler.editor.auto_complete_QMARK_());
}
})())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var value = input.value;
var s1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),selected_start);
var s2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,selected_end);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),[s1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion)].join(''));

var scroll_container = frontend.util.nearest_scrollable_container(input);
var scroll_pos = scroll_container.scrollTop;
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),[s1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(insertion),s2].join(''));

frontend.util.cursor.move_cursor_to(input,(selected_start + cljs.core.count(insertion)));

return (scroll_container.scrollTop = scroll_pos);
} else {
return null;
}
}));

(frontend.handler.editor.insert.cljs$lang$maxFixedArity = 2);

/**
 * Insert newline to current cursor position
 */
frontend.handler.editor.keydown_new_line = (function frontend$handler$editor$keydown_new_line(){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n");
});
frontend.handler.editor.dwim_in_properties = (function frontend$handler$editor$dwim_in_properties(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__106106 = frontend.handler.editor.get_state();
var map__106106__$1 = cljs.core.__destructure_map(map__106106);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106106__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_state()));
var property_key = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)));
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var move_to_pos = ((org_QMARK_)?(2):(3));
if(org_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = property_key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__5041__auto__;
}
})())){
var G__106107 = property_key;
switch (G__106107) {
case "PROPERTIES":
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n:: ");

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,move_to_pos);

break;
case "END":
frontend.util.cursor.move_cursor_to_end(input);

frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);

break;
default:
if(frontend.util.property.property_key_exist_QMARK_(format,content,property_key)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Property key \"%s\" already exists!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_key], 0))], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return frontend.util.cursor.move_cursor_to_line_end(input);
}

}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = property_key;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_key,"");
} else {
return and__5041__auto__;
}
})())){
var G__106108_106666 = input;
var G__106109_106667 = frontend.util.cursor.line_beginning_pos(input);
var G__106110_106668 = (frontend.util.cursor.line_end_pos(input) + (1));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__106108_106666,G__106109_106667,G__106110_106668) : frontend.handler.editor.delete_and_update.call(null,G__106108_106666,G__106109_106667,G__106110_106668));

frontend.util.property.goto_properties_end(format,input);

return frontend.util.cursor.move_cursor_to_line_end(input);
} else {
frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n:: ");

return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,move_to_pos);

}
}
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1("\n");
}
} else {
return null;
}
}
});
frontend.handler.editor.toggle_list_checkbox = (function frontend$handler$editor$toggle_list_checkbox(p__106111,item_content){
var map__106112 = p__106111;
var map__106112__$1 = cljs.core.__destructure_map(map__106112);
var block = map__106112__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106112__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var toggle_fn = (function (m,x_mark){
var G__106113 = clojure.string.lower_case(x_mark);
switch (G__106113) {
case "[ ]":
return ["[x] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content)].join('');

break;
case "[x]":
return ["[ ] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content)].join('');

break;
default:
return m;

}
});
var pattern = cljs.core.re_pattern(["(\\[[xX ]\\])\\s+?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(item_content))].join(''));
var new_content = clojure.string.replace_first(content,pattern,toggle_fn);
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
});
frontend.handler.editor.dwim_in_list = (function frontend$handler$editor$dwim_in_list(){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__106114 = frontend.handler.editor.get_state();
var map__106114__$1 = cljs.core.__destructure_map(map__106114);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106114__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var temp__5804__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5804__auto__)){
var item = temp__5804__auto__;
var map__106115 = item;
var map__106115__$1 = cljs.core.__destructure_map(map__106115);
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106115__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var next_bullet = (cljs.core.truth_(ordered)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((bullet + (1))),"."].join(''):bullet);
var checkbox__$1 = (cljs.core.truth_(checkbox)?"[ ] ":null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(full_content),((cljs.core.truth_(ordered)?(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(bullet)).length) + (2)):(2)) + (cljs.core.truth_(checkbox__$1)?((checkbox__$1).length):null)))) && (clojure.string.includes_QMARK_(input.value,"\n")))){
var G__106116 = input;
var G__106117 = frontend.util.cursor.line_beginning_pos(input);
var G__106118 = frontend.util.cursor.line_end_pos(input);
return (frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(G__106116,G__106117,G__106118) : frontend.handler.editor.delete_and_update.call(null,G__106116,G__106117,G__106118));
} else {
var start_pos = frontend.util.get_selection_start(input);
var value = input.value;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start_pos);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,start_pos);
var cursor_in_item_content_QMARK_ = (function (){var and__5041__auto__ = cljs.core.re_find(/^(\d+){1}\./,cljs.core.last(clojure.string.split_lines(before)));
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(cljs.core.first(clojure.string.split_lines(after)))));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(cursor_in_item_content_QMARK_)){
} else {
frontend.util.cursor.move_cursor_to_line_end(input);

frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," ",checkbox__$1].join(''));
}

if(cljs.core.truth_(ordered)){
var value__$1 = input.value;
var start_pos__$1 = frontend.util.get_selection_start(input);
var after_lists_str = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value__$1,start_pos__$1));
var after_lists_str__$1 = (cljs.core.truth_(cursor_in_item_content_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," ",after_lists_str].join(''):after_lists_str);
var lines = clojure.string.split_lines(after_lists_str__$1);
var after_lists_str_SINGLEQUOTE_ = frontend.util.list.re_order_items(lines,(cljs.core.truth_(cursor_in_item_content_QMARK_)?bullet:(bullet + (1))));
var value_SINGLEQUOTE_ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),start_pos__$1),"\n",after_lists_str_SINGLEQUOTE_].join('');
var cursor_SINGLEQUOTE_ = (cljs.core.truth_(cursor_in_item_content_QMARK_)?((([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),start_pos__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_bullet)," "].join('')).length) + (1)):((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(item) + cljs.core.count(next_bullet)) + (2)));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),value_SINGLEQUOTE_);

return frontend.util.cursor.move_cursor_to(input,cursor_SINGLEQUOTE_);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}
});
frontend.handler.editor.toggle_page_reference_embed = (function frontend$handler$editor$toggle_page_reference_embed(parent_id){
var map__106119 = frontend.handler.editor.get_state();
var map__106119__$1 = cljs.core.__destructure_map(map__106119);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106119__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var new_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var page_ref_fn = (function (bounds,backward_pos){
return frontend.commands.simple_insert_BANG_(parent_id,bounds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),backward_pos,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (_,___$1,___$2){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos], null));

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));
})], null));
});
frontend.state.clear_editor_action_BANG_();

var selection = frontend.handler.editor.get_selection_and_format();
var map__106120 = selection;
var map__106120__$1 = cljs.core.__destructure_map(map__106120);
var selection_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106120__$1,new cljs.core.Keyword(null,"selection-start","selection-start",-888859581));
var selection_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106120__$1,new cljs.core.Keyword(null,"selection-end","selection-end",696987835));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106120__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core.truth_(selection__$1)){
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,selection_start,selection_end) : frontend.handler.editor.delete_and_update.call(null,input,selection_start,selection_end));

return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.page_ref.__GT_page_ref(selection__$1));
} else {
var temp__5802__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5802__auto__)){
var embed_ref = temp__5802__auto__;
var map__106121 = embed_ref;
var map__106121__$1 = cljs.core.__destructure_map(map__106121);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106121__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106121__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106121__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return page_ref_fn(logseq.graph_parser.util.page_ref.left_and_right_brackets,(2));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(raw_content);
}
} else {
var temp__5802__auto____$1 = frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5802__auto____$1)){
var page_ref = temp__5802__auto____$1;
var map__106122 = page_ref;
var map__106122__$1 = cljs.core.__destructure_map(map__106122);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106122__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106122__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106122__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106122__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return page_ref_fn("{{embed [[]]}}",(4));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
}
} else {
return page_ref_fn(logseq.graph_parser.util.page_ref.left_and_right_brackets,(2));
}
}
}
} else {
return null;
}
});
frontend.handler.editor.toggle_block_reference_embed = (function frontend$handler$editor$toggle_block_reference_embed(parent_id){
var map__106123 = frontend.handler.editor.get_state();
var map__106123__$1 = cljs.core.__destructure_map(map__106123);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106123__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var new_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var block_ref_fn = (function (bounds,backward_pos){
return frontend.commands.simple_insert_BANG_(parent_id,bounds,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),backward_pos,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),(function (_,___$1,___$2){
frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new_pos], null));

return frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652)], null));
})], null));
});
frontend.state.clear_editor_action_BANG_();

var temp__5802__auto__ = frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5802__auto__)){
var embed_ref = temp__5802__auto__;
var map__106124 = embed_ref;
var map__106124__$1 = cljs.core.__destructure_map(map__106124);
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106124__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106124__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106124__$1,new cljs.core.Keyword(null,"end","end",-268185958));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),cljs.core.count(raw_content))){
return block_ref_fn(logseq.graph_parser.util.block_ref.left_and_right_parens,(2));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(raw_content);
}
} else {
var temp__5802__auto____$1 = frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5802__auto____$1)){
var page_ref = temp__5802__auto____$1;
var map__106125 = page_ref;
var map__106125__$1 = cljs.core.__destructure_map(map__106125);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106125__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106125__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var full_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106125__$1,new cljs.core.Keyword(null,"full-content","full-content",-817477443));
var raw_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106125__$1,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159));
(frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.delete_and_update.cljs$core$IFn$_invoke$arity$3(input,start,end) : frontend.handler.editor.delete_and_update.call(null,input,start,end));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_content,"")){
return block_ref_fn("{{embed (())}}",(4));
} else {
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([full_content], 0)));
}
} else {
return block_ref_fn(logseq.graph_parser.util.block_ref.left_and_right_parens,(2));
}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_new_block = (function frontend$handler$editor$keydown_new_block(state){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
var map__106126 = frontend.handler.editor.get_state();
var map__106126__$1 = cljs.core.__destructure_map(map__106126);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106126__$1,new cljs.core.Keyword(null,"block","block",664686210));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106126__$1,new cljs.core.Keyword(null,"config","config",994861415));
if(cljs.core.truth_(block)){
var input = frontend.state.get_input();
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"keydown-new-block","keydown-new-block",-676183329),true);
var content = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var pos = frontend.util.cursor.pos(input);
var current_node = frontend.modules.outliner.core.block(block);
var has_right_QMARK_ = frontend.modules.outliner.tree.satisfied_inode_QMARK_(frontend.modules.outliner.tree._get_right(current_node));
var thing_at_point = (function (){var or__5043__auto__ = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"admonition&src?","admonition&src?",1506556328)))?frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"markup?","markup?",-1222732996)))?frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853)))?frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143)))?frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = (cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"properties?","properties?",3428414)))?frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)):null);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
if(cljs.core.truth_(frontend.util.thingatpt.get_setting(new cljs.core.Keyword(null,"list?","list?",-1642026156)))){
var and__5041__auto__ = cljs.core.not(frontend.util.cursor.beginning_of_line_QMARK_(input));
if(and__5041__auto__){
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
} else {
return and__5041__auto__;
}
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(thing_at_point)){
var G__106127 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_at_point);
switch (G__106127) {
case "markup":
var right_bound = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(thing_at_point);
return frontend.util.cursor.move_cursor_to(input,(clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right_bound,pos) + cljs.core.count(right_bound)));

break;
case "admonition-block":
return frontend.handler.editor.keydown_new_line();

break;
case "source-block":
frontend.handler.editor.keydown_new_line();

var G__106128 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var G__106128__$1 = (((G__106128 instanceof cljs.core.Keyword))?G__106128.fqn:null);
switch (G__106128__$1) {
case "into-code-editor":
return frontend.state.into_code_editor_mode_BANG_();

break;
default:
return null;

}

break;
case "block-ref":
return frontend.handler.editor.open_block_in_sidebar_BANG_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point));

break;
case "page-ref":
if(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point))){
return null;
} else {
var page = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(thing_at_point);
var page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page);
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}

break;
case "list-item":
return frontend.handler.editor.dwim_in_list();

break;
case "properties-drawer":
return frontend.handler.editor.dwim_in_properties(state);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106127)].join('')));

}
} else {
if(((clojure.string.blank_QMARK_(content)) && (((frontend.handler.editor.own_order_number_list_QMARK_(block)) && (cljs.core.not((function (){var G__106129 = frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if((G__106129 == null)){
return null;
} else {
return frontend.handler.editor.own_order_number_list_QMARK_(G__106129);
}
})())))))){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
if(((clojure.string.blank_QMARK_(content)) && ((((!(has_right_QMARK_))) && (cljs.core.not(frontend.handler.editor.last_top_level_child_QMARK_(config__$1,current_node))))))){
return frontend.handler.editor.outdent_on_enter(current_node);
} else {
if(cljs.core.truth_(goog.DEBUG)){
var k__62654__auto__ = "Insert block";
console.time(k__62654__auto__);

var res__62655__auto__ = (function (){var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
} else {
var _STAR_transaction_data_STAR__orig_val__106130 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106131 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106132 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106133 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106132);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106133);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106131);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106130);
}}
})();
console.timeEnd(k__62654__auto__);

return res__62655__auto__;
} else {
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);
} else {
var _STAR_transaction_data_STAR__orig_val__106134 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106135 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106136 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106137 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106136);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106137);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(state);

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106135);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106134);
}}
}

}
}
}
} else {
return null;
}
}
});
/**
 * When we are in a single block wrapper, we should always insert a new line instead of new block
 */
frontend.handler.editor.inside_of_single_block = (function frontend$handler$editor$inside_of_single_block(el){
return (!((dommy.core.closest.cljs$core$IFn$_invoke$arity$2(el,".single-block") == null)));
});
frontend.handler.editor.keydown_new_block_handler = (function frontend$handler$editor$keydown_new_block_handler(state,e){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.doc_mode_enter_for_new_line_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.editor.inside_of_single_block(rum.core.dom_node(state));
}
})())){
return frontend.handler.editor.keydown_new_line();
} else {
e.preventDefault();

return frontend.handler.editor.keydown_new_block(state);
}
});
frontend.handler.editor.keydown_new_line_handler = (function frontend$handler$editor$keydown_new_line_handler(state,e){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.doc_mode_enter_for_new_line_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.handler.editor.inside_of_single_block(rum.core.dom_node(state))));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.keydown_new_block(state);
} else {
e.preventDefault();

return frontend.handler.editor.keydown_new_line();
}
});
/**
 * Select first or last block in viewpoint
 */
frontend.handler.editor.select_first_last = (function frontend$handler$editor$select_first_last(direction){
var f = (function (){var G__106138 = direction;
var G__106138__$1 = (((G__106138 instanceof cljs.core.Keyword))?G__106138.fqn:null);
switch (G__106138__$1) {
case "up":
return cljs.core.last;

break;
case "down":
return cljs.core.first;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106138__$1)].join('')));

}
})();
var block = (function (){var G__106139 = frontend.util.get_blocks_noncollapse.cljs$core$IFn$_invoke$arity$0();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__106139) : f.call(null,G__106139));
})();
if(cljs.core.truth_(block)){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(block);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));
} else {
return null;
}
});
frontend.handler.editor.select_up_down = (function frontend$handler$editor$select_up_down(direction){
var selected_blocks = frontend.state.get_selection_blocks();
var selected = (function (){var G__106140 = direction;
var G__106140__$1 = (((G__106140 instanceof cljs.core.Keyword))?G__106140.fqn:null);
switch (G__106140__$1) {
case "up":
return cljs.core.first(selected_blocks);

break;
case "down":
return cljs.core.last(selected_blocks);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106140__$1)].join('')));

}
})();
var f = (function (){var G__106141 = direction;
var G__106141__$1 = (((G__106141 instanceof cljs.core.Keyword))?G__106141.fqn:null);
switch (G__106141__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106141__$1)].join('')));

}
})();
var sibling_block = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(selected) : f.call(null,selected));
if(cljs.core.truth_((function (){var and__5041__auto__ = sibling_block;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.attr(sibling_block,"blockid");
} else {
return and__5041__auto__;
}
})())){
frontend.util.scroll_to_block.cljs$core$IFn$_invoke$arity$1(sibling_block);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling_block], null));
} else {
return null;
}
});
frontend.handler.editor.move_cross_boundary_up_down = (function frontend$handler$editor$move_cross_boundary_up_down(direction){
var input = frontend.state.get_input();
var line_pos = frontend.util.get_first_or_last_line_pos(input);
var repo = frontend.state.get_current_repo();
var f = (function (){var G__106143 = direction;
var G__106143__$1 = (((G__106143 instanceof cljs.core.Keyword))?G__106143.fqn:null);
switch (G__106143__$1) {
case "up":
return frontend.util.get_prev_block_non_collapsed;

break;
case "down":
return frontend.util.get_next_block_non_collapsed;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106143__$1)].join('')));

}
})();
var sibling_block = (function (){var G__106144 = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__106144) : f.call(null,G__106144));
})();
var map__106142 = frontend.state.get_edit_block();
var map__106142__$1 = cljs.core.__destructure_map(map__106142);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106142__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106142__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106142__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
if(cljs.core.truth_(sibling_block)){
var temp__5804__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5804__auto__)){
var sibling_block_id = temp__5804__auto__;
var value_106676 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content),clojure.string.trim(value_106676))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_106676);
} else {
}

var new_id = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get(sibling_block,"id"),"ls-block","edit-block");
var new_uuid = cljs.core.uuid(sibling_block_id);
var block = (function (){var G__106145 = repo;
var G__106146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__106147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__106145,G__106146,G__106147) : frontend.db.pull.call(null,G__106145,G__106146,G__106147));
})();
var G__106148 = block;
var G__106149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction,line_pos], null);
var G__106150 = new_id;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__106148,G__106149,G__106150) : frontend.handler.editor.edit_block_BANG_.call(null,G__106148,G__106149,G__106150));
} else {
return null;
}
} else {
var G__106151 = direction;
var G__106151__$1 = (((G__106151 instanceof cljs.core.Keyword))?G__106151.fqn:null);
switch (G__106151__$1) {
case "up":
return frontend.util.cursor.move_cursor_to(input,(0));

break;
case "down":
return frontend.util.cursor.move_cursor_to_end(input);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106151__$1)].join('')));

}
}
});
frontend.handler.editor.keydown_up_down_handler = (function frontend$handler$editor$keydown_up_down_handler(direction){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(up_QMARK_){
return frontend.util.cursor.move_cursor_to(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to(input,selected_end);
}
} else {
if(((((up_QMARK_) && (frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)))) || (((down_QMARK_) && (frontend.util.cursor.textarea_cursor_last_row_QMARK_(input)))))){
return frontend.handler.editor.move_cross_boundary_up_down(direction);
} else {
if(up_QMARK_){
return frontend.util.cursor.move_cursor_up(input);
} else {
return frontend.util.cursor.move_cursor_down(input);
}

}
}
});
frontend.handler.editor.move_to_block_when_cross_boundary = (function frontend$handler$editor$move_to_block_when_cross_boundary(direction){
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction);
var pos = ((up_QMARK_)?new cljs.core.Keyword(null,"max","max",61366548):(0));
var map__106152 = frontend.state.get_edit_block();
var map__106152__$1 = cljs.core.__destructure_map(map__106152);
var block = map__106152__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106152__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106152__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var id = frontend.state.get_edit_input_id();
var repo = frontend.state.get_current_repo();
var editing_block = goog.dom.getElement(frontend.state.get_editing_block_dom_id());
var f = ((up_QMARK_)?frontend.util.get_prev_block_non_collapsed:frontend.util.get_next_block_non_collapsed);
var sibling_block = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(editing_block) : f.call(null,editing_block));
var same_container_QMARK_ = (cljs.core.truth_((function (){var and__5041__auto__ = editing_block;
if(cljs.core.truth_(and__5041__auto__)){
return sibling_block;
} else {
return and__5041__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return b.closest(".blocks-container");
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [editing_block,sibling_block], null))):null);
if(cljs.core.truth_((function (){var and__5041__auto__ = sibling_block;
if(cljs.core.truth_(and__5041__auto__)){
return same_container_QMARK_;
} else {
return and__5041__auto__;
}
})())){
var temp__5804__auto__ = dommy.core.attr(sibling_block,"blockid");
if(cljs.core.truth_(temp__5804__auto__)){
var sibling_block_id = temp__5804__auto__;
var content_106678 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var value_106679 = frontend.state.get_edit_content();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.clean_content_BANG_(format,content_106678),clojure.string.trim(value_106679))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,uuid,value_106679);
} else {
}

var block__$1 = (function (){var G__106153 = repo;
var G__106154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__106155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(sibling_block_id)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$3(G__106153,G__106154,G__106155) : frontend.db.pull.call(null,G__106153,G__106154,G__106155));
})();
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block__$1,pos,id) : frontend.handler.editor.edit_block_BANG_.call(null,block__$1,pos,id));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.keydown_arrow_handler = (function frontend$handler$editor$keydown_arrow_handler(direction){
var input = frontend.state.get_input();
var element = document.activeElement;
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,element)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
if(left_QMARK_){
return frontend.util.cursor.move_cursor_to(input,selected_start);
} else {
return frontend.util.cursor.move_cursor_to(input,selected_end);
}
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var and__5041__auto__ = left_QMARK_;
if(and__5041__auto__){
return frontend.util.cursor.start_QMARK_(input);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = right_QMARK_;
if(and__5041__auto__){
return frontend.util.cursor.end_QMARK_(input);
} else {
return and__5041__auto__;
}
}
})())){
return frontend.handler.editor.move_to_block_when_cross_boundary(direction);
} else {
if(left_QMARK_){
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1(input);
} else {
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
}

}
}
} else {
return null;
}
});
frontend.handler.editor.delete_and_update = (function frontend$handler$editor$delete_and_update(input,start,end){
frontend.util.safe_set_range_text_BANG_.cljs$core$IFn$_invoke$arity$4(input,"",start,end);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.delete_concat = (function frontend$handler$editor$delete_concat(current_block){
var input = frontend.state.get_input();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var right = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(current_block));
var current_block_has_children_QMARK_ = (function (){var G__106156 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__106156) : frontend.db.has_children_QMARK_.call(null,G__106156));
})();
var collapsed_QMARK_ = frontend.util.collapsed_QMARK_(current_block);
var first_child = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(current_block)));
var next_block = (cljs.core.truth_((function (){var or__5043__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(current_block_has_children_QMARK_);
}
})())?(cljs.core.truth_(right)?(function (){var G__106157 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106157) : frontend.db.pull.call(null,G__106157));
})():null):first_child);
if((next_block == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = right;
if(cljs.core.truth_(and__5041__auto____$1)){
var G__106158 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(right);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__106158) : frontend.db.has_children_QMARK_.call(null,G__106158));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(collapsed_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = first_child;
if(cljs.core.truth_(and__5041__auto____$1)){
var G__106159 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
return (frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(G__106159) : frontend.db.has_children_QMARK_.call(null,G__106159));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
var edit_block = frontend.state.get_edit_block();
var transact_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.Keyword(null,"concat-data","concat-data",670825070),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block),new cljs.core.Keyword(null,"end?","end?",-1423391609),true], null)], null);
var next_block_has_refs_QMARK_ = (!((new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__106160 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(next_block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106160) : frontend.db.entity.call(null,G__106160));
})()) == null)));
var new_content = ((next_block_has_refs_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.drawer.remove_logbook(frontend.util.property.remove_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(next_block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(next_block))))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(next_block))].join(''));
var repo = frontend.state.get_current_repo();
var edit_block_SINGLEQUOTE_ = ((next_block_has_refs_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(edit_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","additional-properties","block.temp/additional-properties",-1828325767),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(next_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))], 0)):edit_block);
var transact_data__102865__auto___106680 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106681 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106682 = (cljs.core.truth_(transact_data__102865__auto___106680)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transact_opts,new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):transact_opts);
var before_editor_cursor__102868__auto___106683 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106680)){
if(cljs.core.truth_(transaction_opts__102866__auto___106681)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106681,opts__102867__auto___106682);
} else {
}

frontend.handler.editor.delete_block_aux_BANG_(next_block,false);

frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,edit_block_SINGLEQUOTE_,new_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null));
} else {
var _STAR_transaction_data_STAR__orig_val__106161_106684 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106162_106685 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106163_106686 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106164_106687 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106163_106686);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106164_106687);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106682], 0));

frontend.handler.editor.delete_block_aux_BANG_(next_block,false);

frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$4(repo,edit_block_SINGLEQUOTE_,new_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null));

var r__102869__auto___106688 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106689 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106688], 0));
var tx_meta__102871__auto___106690 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106688));
var all_tx__102872__auto___106691 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106689,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106682));
var o__102873__auto___106692 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106692));
var opts_SHARP___102875__auto___106694 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106693,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106690], 0));
if(cljs.core.seq(all_tx__102872__auto___106691)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106682))){
} else {
var result__102876__auto___106695 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106691,opts_SHARP___102875__auto___106694,before_editor_cursor__102868__auto___106683);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106691,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106690,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106695], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106162_106685);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106161_106684);
}}

var block = ((next_block_has_refs_QMARK_)?next_block:edit_block);
var G__106165 = block;
var G__106166 = current_pos;
var G__106167 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__106165,G__106166,G__106167) : frontend.handler.editor.edit_block_BANG_.call(null,G__106165,G__106166,G__106167));

}
}
}
});
frontend.handler.editor.keydown_delete_handler = (function frontend$handler$editor$keydown_delete_handler(_e){
var input = frontend.state.get_input();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_pos,cljs.core.count(value));
var current_block = frontend.state.get_edit_block();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
if(cljs.core.truth_(current_block)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = end_QMARK_;
if(and__5041__auto__){
return current_block;
} else {
return and__5041__auto__;
}
})())){
var editor_state = frontend.handler.editor.get_state();
var custom_query_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951)], null));
if(cljs.core.truth_(custom_query_QMARK_)){
return null;
} else {
return frontend.handler.editor.delete_concat(current_block);
}
} else {
return frontend.handler.editor.delete_and_update(input,current_pos,frontend.util.safe_inc_current_pos_from_start(input.value,current_pos));

}
}
} else {
return null;
}
});
frontend.handler.editor.keydown_backspace_handler = (function frontend$handler$editor$keydown_backspace_handler(cut_QMARK_,e){
var input = frontend.state.get_input();
var id = frontend.state.get_edit_input_id();
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var deleted = (function (){var and__5041__auto__ = (current_pos > (0));
if(and__5041__auto__){
return frontend.util.nth_safe(value,(current_pos - (1)));
} else {
return and__5041__auto__;
}
})();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var block = frontend.state.get_edit_block();
var repo = frontend.state.get_current_repo();
var top_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
var single_block_QMARK_ = frontend.handler.editor.inside_of_single_block(e.target);
var root_block_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block.temp","container","block.temp/container",-493626206).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
frontend.handler.editor.mark_last_input_time_BANG_(repo);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
frontend.util.stop(e);

if(cljs.core.truth_(cut_QMARK_)){
document.execCommand("copy");
} else {
}

return frontend.handler.editor.delete_and_update(input,selected_start,selected_end);
} else {
if((current_pos === (0))){
var editor_state = frontend.handler.editor.get_state();
var custom_query_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951)], null));
frontend.util.stop(e);

if((function (){var and__5041__auto__ = ((top_block_QMARK_)?clojure.string.blank_QMARK_(value):true);
if(and__5041__auto__){
return (((!(root_block_QMARK_))) && ((((!(single_block_QMARK_))) && (cljs.core.not(custom_query_QMARK_)))));
} else {
return and__5041__auto__;
}
})()){
if(frontend.handler.editor.own_order_number_list_QMARK_(block)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
return frontend.handler.editor.delete_block_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
}
} else {
return null;
}
} else {
if((((current_pos > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,(current_pos - (1))),frontend.commands.command_trigger)))){
frontend.util.stop(e);

frontend.commands.restore_state();

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if((((current_pos > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,(current_pos - (1))),frontend.commands.angle_bracket)))){
frontend.util.stop(e);

frontend.commands.restore_state();

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = deleted;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(frontend.handler.editor.delete_map)),deleted)) && ((((cljs.core.count(value) >= (current_pos + (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(value,current_pos),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.delete_map,deleted))))));
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

frontend.commands.delete_pair_BANG_(id);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"[")) && (frontend.state.get_editor_show_page_search_QMARK_()))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"(")) && (frontend.state.get_editor_show_block_search_QMARK_()))){
return frontend.state.clear_editor_action_BANG_();
} else {
return null;

}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deleted,"#")) && (frontend.state.get_editor_show_page_search_hashtag_QMARK_()))){
frontend.state.clear_editor_action_BANG_();

return frontend.handler.editor.delete_and_update(input,(current_pos - (1)),current_pos);
} else {
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return frontend.handler.editor.delete_and_update(input,frontend.util.safe_dec_current_pos_from_end(input.value,current_pos),current_pos);
}

}
}
}
}
}
}
});
frontend.handler.editor.indent_outdent = (function frontend$handler$editor$indent_outdent(indent_QMARK_){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747));

var pos = (function (){var G__106169 = frontend.state.get_input();
if((G__106169 == null)){
return null;
} else {
return frontend.util.cursor.pos(G__106169);
}
})();
var map__106168 = frontend.handler.editor.get_state();
var map__106168__$1 = cljs.core.__destructure_map(map__106168);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106168__$1,new cljs.core.Keyword(null,"block","block",664686210));
if(cljs.core.truth_(block)){
frontend.state.set_editor_last_pos_BANG_(pos);

var transact_data__102865__auto___106696 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106697 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106698 = (cljs.core.truth_(transact_data__102865__auto___106696)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)], null));
var before_editor_cursor__102868__auto___106699 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106696)){
if(cljs.core.truth_(transaction_opts__102866__auto___106697)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106697,opts__102867__auto___106698);
} else {
}

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);
} else {
var _STAR_transaction_data_STAR__orig_val__106170_106700 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106171_106701 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106172_106702 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106173_106703 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106172_106702);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106173_106703);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106697,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106698], 0));

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),indent_QMARK_);

var r__102869__auto___106704 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106705 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106704], 0));
var tx_meta__102871__auto___106706 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106704));
var all_tx__102872__auto___106707 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106705,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106698));
var o__102873__auto___106708 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106708));
var opts_SHARP___102875__auto___106710 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106709,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106706], 0));
if(cljs.core.seq(all_tx__102872__auto___106707)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106698))){
} else {
var result__102876__auto___106711 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106707,opts_SHARP___102875__auto___106710,before_editor_cursor__102868__auto___106699);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106707,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106706,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106711], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106171_106701);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106170_106700);
}}

var G__106174_106712 = (function (){var G__106177 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106177) : frontend.db.pull.call(null,G__106177));
})();
var G__106175_106713 = frontend.util.cursor.pos(frontend.state.get_input());
var G__106176_106714 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
(frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__106174_106712,G__106175_106713,G__106176_106714) : frontend.handler.editor.edit_block_BANG_.call(null,G__106174_106712,G__106175_106713,G__106176_106714));
} else {
}

return frontend.state.set_editor_op_BANG_(new cljs.core.Keyword(null,"nil","nil",99600501));
});
frontend.handler.editor.keydown_tab_handler = (function frontend$handler$editor$keydown_tab_handler(direction){
return (function (e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
if(cljs.core.truth_(frontend.state.get_editor_action())){
} else {
frontend.util.stop(e);

frontend.handler.editor.indent_outdent((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),direction))));
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
frontend.util.stop(e);

frontend.handler.editor.on_tab(direction);
} else {
}
}

return null;
});
});
/**
 * NOTE: Keydown cannot be used on Android platform
 */
frontend.handler.editor.keydown_not_matched_handler = (function frontend$handler$editor$keydown_not_matched_handler(format){
return (function (e,_key_code){
var input_id = frontend.state.get_edit_input_id();
var input = frontend.state.get_input();
var key = frontend.handler.editor.goog$module$goog$object.get(e,"key");
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var ctrlKey = frontend.handler.editor.goog$module$goog$object.get(e,"ctrlKey");
var metaKey = frontend.handler.editor.goog$module$goog$object.get(e,"metaKey");
var pos = frontend.util.cursor.pos(input);
var hashtag_QMARK_ = (function (){var or__5043__auto__ = frontend.handler.editor.surround_by_QMARK_(input,"#"," ");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.handler.editor.surround_by_QMARK_(input,"#",new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#");
}
}
})();
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowRight",null,"ArrowLeft",null], null), null),key)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value-search","property-value-search",1985137335),null,new cljs.core.Keyword(null,"property-search","property-search",1730602043),null], null), null),frontend.state.get_editor_action())))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true);
if(cljs.core.truth_(and__5041__auto__)){
return (((!(hashtag_QMARK_))) && ((!(frontend.state.get_editor_show_page_search_hashtag_QMARK_()))));
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = ctrlKey;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return metaKey;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")) && ((((pos === (0))) && (clojure.string.blank_QMARK_(window.getSelection().toString())))));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.keydown_backspace_handler(false,e);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"#")) && ((((pos > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(pos - (1))))))))){
return frontend.state.clear_editor_action_BANG_();
} else {
if(((cljs.core.contains_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.reversed_autopair_map)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["`",null], null), null)),key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_current_input_char(input),key)))){
frontend.util.stop(e);

return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.editor.autopair_when_selected.cljs$core$IFn$_invoke$arity$1(key) : frontend.handler.editor.autopair_when_selected.call(null,key));
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(frontend.util.get_selected_text());
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
if((!((new cljs.core.Keyword("editor","action","editor/action",449993861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) == null)))){
return null;
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,key)))){
frontend.handler.editor.autopair(input_id,"[",format,null);

return frontend.util.stop(e);
} else {
if((((!(clojure.string.blank_QMARK_(frontend.util.get_selected_text())))) && (cljs.core.contains_QMARK_(frontend.util.keycode.left_paren_keys,key)))){
frontend.util.stop(e);

return frontend.handler.editor.autopair(input_id,"(",format,null);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.contains_QMARK_(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(frontend.handler.editor.autopair_map)),"("),key);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return frontend.handler.editor.autopair_left_paren_QMARK_(input,key);
}
})())){
var curr = frontend.handler.editor.get_current_input_char(input);
var prev = frontend.util.nth_safe(value,(pos - (1)));
frontend.util.stop(e);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"`")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",curr)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("`",prev)))))){
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1(input);
} else {
return frontend.handler.editor.autopair(input_id,key,format,null);
}
} else {
if((function (){var sym = "$";
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.count(value) >= (1));
if(and__5041__auto____$1){
var and__5041__auto____$2 = (pos > (0));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__5041__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})()){
return frontend.commands.simple_insert_BANG_(input_id,"$$",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
} else {
if((function (){var sym = "^";
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.count(value) >= (1));
if(and__5041__auto____$1){
var and__5041__auto____$2 = (pos > (0));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(pos - (1))),sym);
if(and__5041__auto____$3){
if((cljs.core.count(value) > pos)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,pos),sym);
} else {
return true;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})()){
return frontend.commands.simple_insert_BANG_(input_id,"^^",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null));
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
});
});
frontend.handler.editor.input_page_ref_QMARK_ = (function frontend$handler$editor$input_page_ref_QMARK_(k,current_pos,blank_selected_QMARK_,last_key_code){
var and__5041__auto__ = blank_selected_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.contains_QMARK_(frontend.util.keycode.left_square_brackets_keys,k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(last_key_code),k)) && ((current_pos > (0))))));
} else {
return and__5041__auto__;
}
});
frontend.handler.editor.default_case_for_keyup_handler = (function frontend$handler$editor$default_case_for_keyup_handler(input,current_pos,k,code,is_processed_QMARK_,c){
var last_key_code = frontend.state.get_last_key_code();
var blank_selected_QMARK_ = clojure.string.blank_QMARK_(frontend.util.get_selected_text());
var non_enter_processed_QMARK_ = (function (){var and__5041__auto__ = is_processed_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(code,frontend.util.keycode.enter_code);
} else {
return and__5041__auto__;
}
})();
var editor_action = frontend.state.get_editor_action();
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editor_action,new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
if(and__5041__auto__){
return frontend.handler.editor.input_page_ref_QMARK_(k,current_pos,blank_selected_QMARK_,last_key_code);
} else {
return and__5041__auto__;
}
})())){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),logseq.graph_parser.util.page_ref.right_brackets,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),new cljs.core.Keyword(null,"skip-check","skip-check",-1698571130),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null));

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));
} else {
if(((cljs.core.not(editor_action)) && (cljs.core.not(non_enter_processed_QMARK_)))){
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null,"Escape",null], null), null),k)));
if(and__5041__auto__){
return frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.page_ref.left_brackets,logseq.graph_parser.util.page_ref.right_brackets);
} else {
return and__5041__auto__;
}
})())){
var orig_pos = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var square_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(orig_pos)),logseq.graph_parser.util.page_ref.left_brackets);
var pos = (square_pos + (2));
var _ = frontend.state.set_editor_last_pos_BANG_(pos);
var pos__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(orig_pos,new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
var command_step = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",frontend.util.nth_safe(value,(square_pos - (1)))))?new cljs.core.Keyword("editor","search-page-hashtag","editor/search-page-hashtag",2082188401):new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812));
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_step], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos__$1], null));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.editor.input_page_ref_QMARK_(k,current_pos,blank_selected_QMARK_,last_key_code);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.page_ref.left_brackets,logseq.graph_parser.util.page_ref.right_brackets));
} else {
return and__5041__auto__;
}
})())){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),logseq.graph_parser.util.page_ref.left_and_right_brackets,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744),(2),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null));

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-page","editor/search-page",-1746049812)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));
} else {
if(((blank_selected_QMARK_) && (((cljs.core.contains_QMARK_(frontend.util.keycode.left_paren_keys,k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(last_key_code),k)) && ((((current_pos > (0))) && (cljs.core.not(frontend.handler.editor.wrapped_by_QMARK_(input,logseq.graph_parser.util.block_ref.left_parens,logseq.graph_parser.util.block_ref.right_parens))))))))))){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),logseq.graph_parser.util.block_ref.left_and_right_parens,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backward-truncate-number","backward-truncate-number",-2044126744),(2),new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null));

frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","search-block","editor/search-block",1664588652),new cljs.core.Keyword(null,"reference","reference",-1711695023)], null));

return frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u3008",c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u300A",frontend.util.nth_safe(frontend.handler.editor.goog$module$goog$object.get(input,"value"),((current_pos - (1)) - (1))))) && ((current_pos > (0))))))){
frontend.commands.handle_step.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),frontend.commands.angle_bracket,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),"\u300A\u3008",new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(0)], null)], null));

frontend.state.set_editor_action_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)], null));

return frontend.state.set_editor_show_block_commands_BANG_();
} else {
return null;

}
}
}
}
} else {
return null;
}
}
});
frontend.handler.editor.keyup_handler = (function frontend$handler$editor$keyup_handler(_state,input,input_id){
return (function (e,key_code){
if(cljs.core.truth_(frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1(e))){
return null;
} else {
var current_pos = frontend.util.cursor.pos(input);
var value = frontend.handler.editor.goog$module$goog$object.get(input,"value");
var c = frontend.util.nth_safe(value,(current_pos - (1)));
var vec__106178 = (cljs.core.truth_((function (){var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(229))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,(0))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [value.charCodeAt((current_pos - (1))),c,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," "))?"Space":(cljs.core.truth_(cljs.core.parse_long(c))?["Digit",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''):["Key",clojure.string.upper_case(c)].join('')
)),false], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_code,frontend.handler.editor.goog$module$goog$object.get(e,"key"),(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?frontend.handler.editor.goog$module$goog$object.get(e,"key"):frontend.handler.editor.goog$module$goog$object.getValueByKeys(e,"event_","code")),frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$2(e,true)], null));
var key_code__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106178,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106178,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106178,(2),null);
var is_processed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106178,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commands","commands",161008658),frontend.state.get_editor_action())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,frontend.commands.command_trigger)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.commands.command_trigger,cljs.core.second(cljs.core.re_find(/(\S+)\s+$/,value)))){
frontend.state.clear_editor_action_BANG_();
} else {
var matched_commands_106715 = frontend.handler.editor.get_matched_commands(input);
if(cljs.core.seq(matched_commands_106715)){
cljs.core.reset_BANG_(frontend.commands._STAR_matched_commands,matched_commands_106715);
} else {
frontend.state.clear_editor_action_BANG_();
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497),frontend.state.get_editor_action())) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_code__$1,(188))))){
var matched_block_commands_106716 = frontend.handler.editor.get_matched_block_commands(input);
var format_106717 = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(frontend.handler.editor.get_state());
if(cljs.core.seq(matched_block_commands_106716)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code__$1,(9))){
frontend.util.stop(e);

frontend.handler.editor.insert_command_BANG_(input_id,cljs.core.last(cljs.core.first(matched_block_commands_106716)),format_106717,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),frontend.commands.angle_bracket,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497)], null));
} else {
cljs.core.reset_BANG_(frontend.commands._STAR_matched_block_commands,matched_block_commands_106716);

}
} else {
frontend.state.clear_editor_action_BANG_();
}
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497),null], null), null),frontend.state.get_editor_action())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(c,frontend.util.nth_safe(value,((current_pos - (1)) - (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0))))){
frontend.state.clear_editor_action_BANG_();
} else {
if(((frontend.state.get_editor_show_page_search_hashtag_QMARK_()) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," ")))){
frontend.state.clear_editor_action_BANG_();
} else {
frontend.handler.editor.default_case_for_keyup_handler(input,current_pos,k,code,is_processed_QMARK_,c);

}
}
}
}

frontend.handler.editor.close_autocomplete_if_outside(input);

if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"Shift");
if(or__5043__auto__){
return or__5043__auto__;
} else {
return is_processed_QMARK_;
}
})())){
return null;
} else {
return frontend.state.set_last_key_code_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code__$1,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"shift?","shift?",-1034734696),e.shiftKey], null));
}
}
});
});
frontend.handler.editor.editor_on_click_BANG_ = (function frontend$handler$editor$editor_on_click_BANG_(id){
return (function (_e){
var input = goog.dom.getElement(id);
frontend.util.scroll_editor_cursor(input);

return frontend.handler.editor.close_autocomplete_if_outside(input);
});
});
frontend.handler.editor.editor_on_change_BANG_ = (function frontend$handler$editor$editor_on_change_BANG_(block,id,search_timeout){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-search","block-search",-897517253),frontend.state.sub(new cljs.core.Keyword("editor","action","editor/action",449993861)))){
var timeout = (300);
if(cljs.core.truth_(cljs.core.deref(search_timeout))){
clearTimeout(cljs.core.deref(search_timeout));
} else {
}

return cljs.core.reset_BANG_(search_timeout,setTimeout((function (){
return frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);
}),timeout));
} else {
var input = goog.dom.getElement(id);
frontend.handler.editor.edit_box_on_change_BANG_(e,block,id);

return frontend.util.scroll_editor_cursor(input);
}
});
});
frontend.handler.editor.cut_blocks_and_clear_selections_BANG_ = (function frontend$handler$editor$cut_blocks_and_clear_selections_BANG_(copy_QMARK_){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword(null,"active?","active?",459499776)], null)))){
return null;
} else {
frontend.handler.editor.cut_selection_blocks(copy_QMARK_);

return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
}
});
frontend.handler.editor.shortcut_copy_selection = (function frontend$handler$editor$shortcut_copy_selection(_e){
return frontend.handler.editor.copy_selection_blocks(true);
});
frontend.handler.editor.shortcut_cut_selection = (function frontend$handler$editor$shortcut_cut_selection(e){
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(true);
});
frontend.handler.editor.shortcut_delete_selection = (function frontend$handler$editor$shortcut_delete_selection(e){
frontend.util.stop(e);

return frontend.handler.editor.cut_blocks_and_clear_selections_BANG_(false);
});
frontend.handler.editor.copy_current_block_ref = (function frontend$handler$editor$copy_current_block_ref(format){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var current_block = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block);
if(cljs.core.truth_(temp__5804__auto____$1)){
var block_id = temp__5804__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"embed")){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__106181_SHARP_){
return ["{{embed ((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__106181_SHARP_),"))}}"].join('');
}));
} else {
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,logseq.graph_parser.util.block_ref.__GT_block_ref);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.editor.copy_current_block_embed = (function frontend$handler$editor$copy_current_block_embed(){
return frontend.handler.editor.copy_current_block_ref("embed");
});
/**
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode but no text selected, copy current block ref
 *   * when in edit mode with text selected, copy selected text as normal
 *   * when text is selected on a PDF, copy the highlighted text
 */
frontend.handler.editor.shortcut_copy = (function frontend$handler$editor$shortcut_copy(e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_copy_selection(e);
} else {
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_start,selected_end)){
return frontend.handler.editor.copy_current_block_ref("ref");
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.get_current_pdf();
if(cljs.core.truth_(and__5041__auto__)){
return window.getSelection().baseNode.parentElement.closest(".pdfViewer");
} else {
return and__5041__auto__;
}
})())){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.pdf.utils.fix_selection_text_breakline(window.getSelection().toString()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
} else {
return null;
}
}
}
}
});
/**
 * shortcut copy action:
 *   * when in selection mode, copy selected blocks
 *   * when in edit mode with text selected, copy selected text as normal
 */
frontend.handler.editor.shortcut_copy_text = (function frontend$handler$editor$shortcut_copy_text(_e){
if(cljs.core.truth_(frontend.handler.editor.auto_complete_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.copy_selection_blocks(false);
} else {
return document.execCommand("copy");

}
}
});
frontend.handler.editor.whiteboard_QMARK_ = (function frontend$handler$editor$whiteboard_QMARK_(){
var and__5041__auto__ = frontend.state.whiteboard_route_QMARK_();
if(and__5041__auto__){
return document.activeElement.closest(".logseq-tldraw");
} else {
return and__5041__auto__;
}
});
/**
 * shortcut cut action:
 *   * when in selection mode, cut selected blocks
 *   * when in edit mode with text selected, cut selected text
 *   * otherwise nothing need to be handled.
 */
frontend.handler.editor.shortcut_cut = (function frontend$handler$editor$shortcut_cut(e){
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_cut_selection(e);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.editing_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.input_text_selected_QMARK_(goog.dom.getElement(frontend.state.get_edit_input_id()));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.editor.keydown_backspace_handler(true,e);
} else {
if(cljs.core.truth_(frontend.handler.editor.whiteboard_QMARK_())){
return frontend.state.active_tldraw_app().cut();
} else {
return null;

}
}
}
});
frontend.handler.editor.delete_selection = (function frontend$handler$editor$delete_selection(e){
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.editor.shortcut_delete_selection(e);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.editor.whiteboard_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.state.editing_QMARK_());
} else {
return and__5041__auto__;
}
})())){
return frontend.state.active_tldraw_app().api.deleteShapes();
} else {
return null;

}
}
});
frontend.handler.editor.editor_delete = (function frontend$handler$editor$editor_delete(_state,e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
frontend.util.stop(e);

return frontend.handler.editor.keydown_delete_handler(e);
} else {
return null;
}
});
frontend.handler.editor.editor_backspace = (function frontend$handler$editor$editor_backspace(_state,e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return frontend.handler.editor.keydown_backspace_handler(false,e);
} else {
return null;
}
});
frontend.handler.editor.slide_focused_QMARK_ = (function frontend$handler$editor$slide_focused_QMARK_(){
var G__106182 = cljs.core.first(dommy.utils.__GT_Array(document.getElementsByClassName("reveal")));
if((G__106182 == null)){
return null;
} else {
return dommy.core.has_class_QMARK_(G__106182,"focused");
}
});
frontend.handler.editor.shortcut_up_down = (function frontend$handler$editor$shortcut_up_down(direction){
return (function (e){
if(((cljs.core.not(frontend.handler.editor.auto_complete_QMARK_())) && (((cljs.core.not(frontend.handler.editor.slide_focused_QMARK_())) && (cljs.core.not(frontend.state.get_timestamp_block())))))){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
frontend.handler.editor.keydown_up_down_handler(direction);
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
frontend.handler.editor.select_up_down(direction);
} else {
if(cljs.core.not(frontend.state.get_edit_input_id())){
frontend.handler.editor.select_first_last(direction);
} else {
}
}
}
} else {
}

return null;
});
});
frontend.handler.editor.shortcut_select_up_down = (function frontend$handler$editor$shortcut_select_up_down(direction){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var input = frontend.state.get_input();
var selected_start = frontend.util.get_selection_start(input);
var selected_end = frontend.util.get_selection_end(input);
var vec__106183 = (function (){var G__106186 = frontend.util.get_selection_direction(input);
switch (G__106186) {
case "backward":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_end,selected_start], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_start,selected_end], null);

}
})();
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106183,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106183,(1),null);
var cursor_rect = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2(input,cursor);
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113))) && (frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_(cursor_rect)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570))) && (frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_(cursor_rect)))))){
return frontend.handler.editor.select_block_up_down(direction);
} else {
return frontend.util.cursor.select_up_down(input,direction,anchor,cursor_rect);
}
} else {
return frontend.handler.editor.select_block_up_down(direction);
}
});
});
frontend.handler.editor.open_selected_block_BANG_ = (function frontend$handler$editor$open_selected_block_BANG_(direction,e){
var selected_blocks = frontend.state.get_selection_blocks();
var f = (function (){var G__106187 = direction;
var G__106187__$1 = (((G__106187 instanceof cljs.core.Keyword))?G__106187.fqn:null);
switch (G__106187__$1) {
case "left":
return cljs.core.first;

break;
case "right":
return cljs.core.last;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__106187__$1)].join('')));

}
})();
var temp__5804__auto__ = (function (){var G__106188 = selected_blocks;
var G__106188__$1 = (((G__106188 == null))?null:(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__106188) : f.call(null,G__106188)));
var G__106188__$2 = (((G__106188__$1 == null))?null:dommy.core.attr(G__106188__$1,"blockid"));
if((G__106188__$2 == null)){
return null;
} else {
return cljs.core.uuid(G__106188__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
frontend.util.stop(e);

var block = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var block_id__$1 = clojure.string.replace(frontend.handler.editor.goog$module$goog$object.get((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(selected_blocks) : f.call(null,selected_blocks)),"id"),"ls-block","edit-block");
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937));
var G__106189 = block;
var G__106190 = ((left_QMARK_)?(0):new cljs.core.Keyword(null,"max","max",61366548));
var G__106191 = block_id__$1;
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__106189,G__106190,G__106191) : frontend.handler.editor.edit_block_BANG_.call(null,G__106189,G__106190,G__106191));
} else {
return null;
}
});
frontend.handler.editor.shortcut_left_right = (function frontend$handler$editor$shortcut_left_right(direction){
return (function (e){
if(((cljs.core.not(frontend.handler.editor.auto_complete_QMARK_())) && (cljs.core.not(frontend.state.get_timestamp_block())))){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
frontend.util.stop(e);

return frontend.handler.editor.keydown_arrow_handler(direction);
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
frontend.util.stop(e);

return frontend.handler.editor.open_selected_block_BANG_(direction,e);
} else {
return null;

}
}
} else {
return null;
}
});
});
frontend.handler.editor.clear_block_content_BANG_ = (function frontend$handler$editor$clear_block_content_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),"");
});
frontend.handler.editor.kill_line_before_BANG_ = (function frontend$handler$editor$kill_line_before_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_before_BANG_(frontend.state.get_input());
});
frontend.handler.editor.kill_line_after_BANG_ = (function frontend$handler$editor$kill_line_after_BANG_(){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

return frontend.util.kill_line_after_BANG_(frontend.state.get_input());
});
frontend.handler.editor.beginning_of_block = (function frontend$handler$editor$beginning_of_block(){
return frontend.util.cursor.move_cursor_to(frontend.state.get_input(),(0));
});
frontend.handler.editor.end_of_block = (function frontend$handler$editor$end_of_block(){
return frontend.util.cursor.move_cursor_to_end(frontend.state.get_input());
});
frontend.handler.editor.cursor_forward_word = (function frontend$handler$editor$cursor_forward_word(){
return frontend.util.cursor.move_cursor_forward_by_word(frontend.state.get_input());
});
frontend.handler.editor.cursor_backward_word = (function frontend$handler$editor$cursor_backward_word(){
return frontend.util.cursor.move_cursor_backward_by_word(frontend.state.get_input());
});
frontend.handler.editor.backward_kill_word = (function frontend$handler$editor$backward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.backward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.forward_kill_word = (function frontend$handler$editor$forward_kill_word(){
var input = frontend.state.get_input();
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));

frontend.util.forward_kill_word(input);

return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),input.value);
});
frontend.handler.editor.block_with_title_QMARK_ = (function frontend$handler$editor$block_with_title_QMARK_(format,content,semantic_QMARK_){
var and__5041__auto__ = clojure.string.includes_QMARK_(content,"\n");
if(and__5041__auto__){
if(cljs.core.truth_(semantic_QMARK_)){
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var first_elem_type = cljs.core.first(cljs.core.ffirst(ast));
return frontend.format.mldoc.block_with_title_QMARK_(first_elem_type);
} else {
return true;
}
} else {
return and__5041__auto__;
}
});
/**
 * Whether block has a valid dsl query.
 */
frontend.handler.editor.valid_dsl_query_block_QMARK_ = (function frontend$handler$editor$valid_dsl_query_block_QMARK_(block){
return cljs.core.some((function (macro){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("query",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(macro,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.macro-name","logseq.macro-name",1789949403)], null)));
if(and__5041__auto__){
return cljs.core.first(new cljs.core.Keyword(null,"logseq.macro-arguments","logseq.macro-arguments",-655551868).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(macro)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var query_body = temp__5804__auto__;
return cljs.core.seq(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1((function (){try{return frontend.db.query_dsl.parse_query(query_body);
}catch (e106192){var _e = e106192;
return null;
}})()));
} else {
return null;
}
}),new cljs.core.Keyword("block","macros","block/macros",650396438).cljs$core$IFn$_invoke$arity$1((function (){var G__106193 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106193) : frontend.db.entity.call(null,G__106193));
})()));
});
/**
 * Whether block has a valid customl query.
 */
frontend.handler.editor.valid_custom_query_block_QMARK_ = (function frontend$handler$editor$valid_custom_query_block_QMARK_(block){
var entity = (function (){var G__106194 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106194) : frontend.db.entity.call(null,G__106194));
})();
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(entity);
if(((clojure.string.includes_QMARK_(content,"#+BEGIN_QUERY")) && (clojure.string.includes_QMARK_(content,"#+END_QUERY")))){
var ast = frontend.format.mldoc.__GT_edn(clojure.string.trim(content),logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})()));
var q = frontend.format.mldoc.extract_first_query_from_ast(ast);
return (!((new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(q)) == null)));
} else {
return null;
}
});
frontend.handler.editor.collapsable_QMARK_ = (function frontend$handler$editor$collapsable_QMARK_(var_args){
var G__106196 = arguments.length;
switch (G__106196) {
case 1:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__106197){
var map__106198 = p__106197;
var map__106198__$1 = cljs.core.__destructure_map(map__106198);
var semantic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106198__$1,new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),false);
if(cljs.core.truth_(block_id)){
var temp__5802__auto__ = frontend.db.model.query_block_by_uuid(block_id);
if(cljs.core.truth_(temp__5802__auto__)){
var block = temp__5802__auto__;
var or__5043__auto__ = frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.handler.editor.valid_dsl_query_block_QMARK_(block);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.handler.editor.valid_custom_query_block_QMARK_(block);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var and__5041__auto__ = new cljs.core.Keyword("outliner","block-title-collapse-enabled?","outliner/block-title-collapse-enabled?",1547538161).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.editor.block_with_title_QMARK_(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),semantic_QMARK_);
} else {
return and__5041__auto__;
}
}
}
}
} else {
return false;
}
} else {
return null;
}
}));

(frontend.handler.editor.collapsable_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Return all blocks associated with correct level
 * if :root-block is not nil, only return root block with its children
 * if :expanded? true, return expanded children
 * if :collapse? true, return without any collapsed children
 * if :incremental? true, collapse/expand will be step by step
 * for example:
 * - a
 *  - b (collapsed)
 *   - c
 *   - d
 *  - e
 * return:
 *  blocks
 *  [{:block a :level 1}
 *   {:block b :level 2}
 *   {:block e :level 2}]
 */
frontend.handler.editor.all_blocks_with_level = (function frontend$handler$editor$all_blocks_with_level(p__106199){
var map__106200 = p__106199;
var map__106200__$1 = cljs.core.__destructure_map(map__106200);
var collapse_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106200__$1,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),false);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106200__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),false);
var incremental_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106200__$1,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),true);
var root_block = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106200__$1,new cljs.core.Keyword(null,"root-block","root-block",-645043721),null);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106200__$1,new cljs.core.Keyword(null,"page","page",849072397));
var temp__5804__auto__ = (function (){var or__5043__auto__ = page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.date.today();
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page__$1 = temp__5804__auto__;
var block_id = (function (){var or__5043__auto__ = root_block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.parse_uuid(page__$1);
}
})();
var blocks = (cljs.core.truth_(block_id)?(function (){var G__106201 = frontend.state.get_current_repo();
var G__106202 = block_id;
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__106201,G__106202) : frontend.db.get_block_and_children.call(null,G__106201,G__106202));
})():(frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page__$1) : frontend.db.get_page_blocks_no_cache.call(null,page__$1)));
var root_block__$1 = (function (){var or__5043__auto__ = block_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return root_block;
}
})();
if(cljs.core.truth_(incremental_QMARK_)){
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,(function (){var or__5043__auto__ = block_id;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page__$1;
}
})());
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var G__106203 = blocks__$1;
var G__106203__$1 = (cljs.core.truth_(root_block__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function frontend$handler$editor$all_blocks_with_level_$_find(root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return root;
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend$handler$editor$all_blocks_with_level_$_find,new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$2(root,cljs.core.PersistentVector.EMPTY)));
}
}),G__106203):G__106203);
var G__106203__$2 = (cljs.core.truth_(collapse_QMARK_)?clojure.walk.postwalk((function (b){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(b);
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.util.collapsed_QMARK_(b);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_block__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.PersistentVector.EMPTY);
} else {
return b;
}
}),G__106203__$1):G__106203__$1);
var G__106203__$3 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
return cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword("block","children","block/children",-1040716209),x);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__106203__$2], 0))
;
var G__106203__$4 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__106203__$3):G__106203__$3);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),G__106203__$4);

})());
} else {
var G__106204 = blocks;
var G__106204__$1 = (cljs.core.truth_(collapse_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,G__106204):G__106204);
var G__106204__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
}),G__106204__$1):G__106204__$1);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,G__106204__$2);

}
} else {
return null;
}
});
frontend.handler.editor.skip_collapsing_in_db_QMARK_ = (function frontend$handler$editor$skip_collapsing_in_db_QMARK_(){
var config = cljs.core.last(frontend.state.get_editor_args());
return new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
});
frontend.handler.editor.set_blocks_collapsed_BANG_ = (function frontend$handler$editor$set_blocks_collapsed_BANG_(block_ids,value){
var block_ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_id){
if(typeof block_id === 'string'){
return cljs.core.uuid(block_id);
} else {
return block_id;
}
}),block_ids);
var repo = frontend.state.get_current_repo();
var value__$1 = cljs.core.boolean$(value);
if(cljs.core.truth_(repo)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

var transact_data__102865__auto___106721 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto___106722 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto___106723 = (cljs.core.truth_(transact_data__102865__auto___106721)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367)], null));
var before_editor_cursor__102868__auto___106724 = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto___106721)){
if(cljs.core.truth_(transaction_opts__102866__auto___106722)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto___106722,opts__102867__auto___106723);
} else {
}

var seq__106205_106725 = cljs.core.seq(block_ids__$1);
var chunk__106206_106726 = null;
var count__106207_106727 = (0);
var i__106208_106728 = (0);
while(true){
if((i__106208_106728 < count__106207_106727)){
var block_id_106729 = chunk__106206_106726.cljs$core$IIndexed$_nth$arity$2(null,i__106208_106728);
var temp__5804__auto___106730 = (function (){var G__106211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106729], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106211) : frontend.db.entity.call(null,G__106211));
})();
if(cljs.core.truth_(temp__5804__auto___106730)){
var block_106731 = temp__5804__auto___106730;
var current_value_106732 = cljs.core.boolean$(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_106731));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_106732,value__$1)){
} else {
var block_106733__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106729,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_106733__$1);
}
} else {
}


var G__106734 = seq__106205_106725;
var G__106735 = chunk__106206_106726;
var G__106736 = count__106207_106727;
var G__106737 = (i__106208_106728 + (1));
seq__106205_106725 = G__106734;
chunk__106206_106726 = G__106735;
count__106207_106727 = G__106736;
i__106208_106728 = G__106737;
continue;
} else {
var temp__5804__auto___106738 = cljs.core.seq(seq__106205_106725);
if(temp__5804__auto___106738){
var seq__106205_106739__$1 = temp__5804__auto___106738;
if(cljs.core.chunked_seq_QMARK_(seq__106205_106739__$1)){
var c__5565__auto___106740 = cljs.core.chunk_first(seq__106205_106739__$1);
var G__106741 = cljs.core.chunk_rest(seq__106205_106739__$1);
var G__106742 = c__5565__auto___106740;
var G__106743 = cljs.core.count(c__5565__auto___106740);
var G__106744 = (0);
seq__106205_106725 = G__106741;
chunk__106206_106726 = G__106742;
count__106207_106727 = G__106743;
i__106208_106728 = G__106744;
continue;
} else {
var block_id_106745 = cljs.core.first(seq__106205_106739__$1);
var temp__5804__auto___106746__$1 = (function (){var G__106212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106745], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106212) : frontend.db.entity.call(null,G__106212));
})();
if(cljs.core.truth_(temp__5804__auto___106746__$1)){
var block_106747 = temp__5804__auto___106746__$1;
var current_value_106748 = cljs.core.boolean$(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_106747));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_106748,value__$1)){
} else {
var block_106749__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106745,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_106749__$1);
}
} else {
}


var G__106750 = cljs.core.next(seq__106205_106739__$1);
var G__106751 = null;
var G__106752 = (0);
var G__106753 = (0);
seq__106205_106725 = G__106750;
chunk__106206_106726 = G__106751;
count__106207_106727 = G__106752;
i__106208_106728 = G__106753;
continue;
}
} else {
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__106213_106754 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106214_106755 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106215_106756 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106216_106757 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106215_106756);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106216_106757);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto___106722,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto___106723], 0));

var seq__106217_106758 = cljs.core.seq(block_ids__$1);
var chunk__106218_106759 = null;
var count__106219_106760 = (0);
var i__106220_106761 = (0);
while(true){
if((i__106220_106761 < count__106219_106760)){
var block_id_106762 = chunk__106218_106759.cljs$core$IIndexed$_nth$arity$2(null,i__106220_106761);
var temp__5804__auto___106763 = (function (){var G__106223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106762], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106223) : frontend.db.entity.call(null,G__106223));
})();
if(cljs.core.truth_(temp__5804__auto___106763)){
var block_106764 = temp__5804__auto___106763;
var current_value_106765 = cljs.core.boolean$(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_106764));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_106765,value__$1)){
} else {
var block_106766__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106762,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_106766__$1);
}
} else {
}


var G__106767 = seq__106217_106758;
var G__106768 = chunk__106218_106759;
var G__106769 = count__106219_106760;
var G__106770 = (i__106220_106761 + (1));
seq__106217_106758 = G__106767;
chunk__106218_106759 = G__106768;
count__106219_106760 = G__106769;
i__106220_106761 = G__106770;
continue;
} else {
var temp__5804__auto___106771 = cljs.core.seq(seq__106217_106758);
if(temp__5804__auto___106771){
var seq__106217_106772__$1 = temp__5804__auto___106771;
if(cljs.core.chunked_seq_QMARK_(seq__106217_106772__$1)){
var c__5565__auto___106773 = cljs.core.chunk_first(seq__106217_106772__$1);
var G__106774 = cljs.core.chunk_rest(seq__106217_106772__$1);
var G__106775 = c__5565__auto___106773;
var G__106776 = cljs.core.count(c__5565__auto___106773);
var G__106777 = (0);
seq__106217_106758 = G__106774;
chunk__106218_106759 = G__106775;
count__106219_106760 = G__106776;
i__106220_106761 = G__106777;
continue;
} else {
var block_id_106778 = cljs.core.first(seq__106217_106772__$1);
var temp__5804__auto___106779__$1 = (function (){var G__106224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106778], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106224) : frontend.db.entity.call(null,G__106224));
})();
if(cljs.core.truth_(temp__5804__auto___106779__$1)){
var block_106780 = temp__5804__auto___106779__$1;
var current_value_106781 = cljs.core.boolean$(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block_106780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value_106781,value__$1)){
} else {
var block_106782__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id_106778,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),value__$1], null);
frontend.modules.outliner.core.save_block_BANG_(block_106782__$1);
}
} else {
}


var G__106783 = cljs.core.next(seq__106217_106772__$1);
var G__106784 = null;
var G__106785 = (0);
var G__106786 = (0);
seq__106217_106758 = G__106783;
chunk__106218_106759 = G__106784;
count__106219_106760 = G__106785;
i__106220_106761 = G__106786;
continue;
}
} else {
}
}
break;
}

var r__102869__auto___106787 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto___106788 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto___106787], 0));
var tx_meta__102871__auto___106789 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto___106787));
var all_tx__102872__auto___106790 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto___106788,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106723));
var o__102873__auto___106791 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto___106792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto___106791));
var opts_SHARP___102875__auto___106793 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto___106792,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto___106789], 0));
if(cljs.core.seq(all_tx__102872__auto___106790)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto___106723))){
} else {
var result__102876__auto___106794 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto___106790,opts_SHARP___102875__auto___106793,before_editor_cursor__102868__auto___106724);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto___106790,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto___106789,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto___106794], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106214_106755);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106213_106754);
}}

var seq__106225 = cljs.core.seq(block_ids__$1);
var chunk__106226 = null;
var count__106227 = (0);
var i__106228 = (0);
while(true){
if((i__106228 < count__106227)){
var block_id = chunk__106226.cljs$core$IIndexed$_nth$arity$2(null,i__106228);
frontend.state.set_collapsed_block_BANG_(block_id,value__$1);


var G__106795 = seq__106225;
var G__106796 = chunk__106226;
var G__106797 = count__106227;
var G__106798 = (i__106228 + (1));
seq__106225 = G__106795;
chunk__106226 = G__106796;
count__106227 = G__106797;
i__106228 = G__106798;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__106225);
if(temp__5804__auto__){
var seq__106225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__106225__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__106225__$1);
var G__106799 = cljs.core.chunk_rest(seq__106225__$1);
var G__106800 = c__5565__auto__;
var G__106801 = cljs.core.count(c__5565__auto__);
var G__106802 = (0);
seq__106225 = G__106799;
chunk__106226 = G__106800;
count__106227 = G__106801;
i__106228 = G__106802;
continue;
} else {
var block_id = cljs.core.first(seq__106225__$1);
frontend.state.set_collapsed_block_BANG_(block_id,value__$1);


var G__106803 = cljs.core.next(seq__106225__$1);
var G__106804 = null;
var G__106805 = (0);
var G__106806 = (0);
seq__106225 = G__106803;
chunk__106226 = G__106804;
count__106227 = G__106805;
i__106228 = G__106806;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.handler.editor.collapse_block_BANG_ = (function frontend$handler$editor$collapse_block_BANG_(block_id){
if(cljs.core.truth_(frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(block_id))){
if(cljs.core.truth_(frontend.handler.editor.skip_collapsing_in_db_QMARK_())){
return null;
} else {
return frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),true);
}
} else {
return null;
}
});
frontend.handler.editor.expand_block_BANG_ = (function frontend$handler$editor$expand_block_BANG_(block_id){
if(cljs.core.truth_(frontend.handler.editor.skip_collapsing_in_db_QMARK_())){
return null;
} else {
return frontend.handler.editor.set_blocks_collapsed_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),false);
}
});
frontend.handler.editor.expand_BANG_ = (function frontend$handler$editor$expand_BANG_(var_args){
var G__106230 = arguments.length;
switch (G__106230) {
case 1:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
return frontend.handler.editor.expand_block_BANG_(block_id);
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
return frontend.handler.editor.expand_block_BANG_(cljs.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__5041__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5041__auto__;
}
} else {
if(cljs.core.truth_(frontend.handler.editor.whiteboard_QMARK_())){
return frontend.state.active_tldraw_app().api.setCollapsed(false);
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(cljs.core.PersistentArrayMap.EMPTY);
var max_level = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (99);
}
})();
var level = (1);
while(true){
if((level > max_level)){
return null;
} else {
var blocks_to_expand = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.util.collapsed_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b),level);
});})(level,blocks_with_level,max_level))
,blocks_with_level));
if(cljs.core.empty_QMARK_(blocks_to_expand)){
var G__106808 = (level + (1));
level = G__106808;
continue;
} else {
var seq__106231 = cljs.core.seq(blocks_to_expand);
var chunk__106232 = null;
var count__106233 = (0);
var i__106234 = (0);
while(true){
if((i__106234 < count__106233)){
var map__106237 = chunk__106232.cljs$core$IIndexed$_nth$arity$2(null,i__106234);
var map__106237__$1 = cljs.core.__destructure_map(map__106237);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106237__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__106809 = seq__106231;
var G__106810 = chunk__106232;
var G__106811 = count__106233;
var G__106812 = (i__106234 + (1));
seq__106231 = G__106809;
chunk__106232 = G__106810;
count__106233 = G__106811;
i__106234 = G__106812;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__106231);
if(temp__5804__auto__){
var seq__106231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__106231__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__106231__$1);
var G__106813 = cljs.core.chunk_rest(seq__106231__$1);
var G__106814 = c__5565__auto__;
var G__106815 = cljs.core.count(c__5565__auto__);
var G__106816 = (0);
seq__106231 = G__106813;
chunk__106232 = G__106814;
count__106233 = G__106815;
i__106234 = G__106816;
continue;
} else {
var map__106238 = cljs.core.first(seq__106231__$1);
var map__106238__$1 = cljs.core.__destructure_map(map__106238);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106238__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.expand_block_BANG_(uuid);


var G__106817 = cljs.core.next(seq__106231__$1);
var G__106818 = null;
var G__106819 = (0);
var G__106820 = (0);
seq__106231 = G__106817;
chunk__106232 = G__106818;
count__106233 = G__106819;
i__106234 = G__106820;
continue;
}
} else {
return null;
}
}
break;
}
}
}
break;
}

}
}
}
}));

(frontend.handler.editor.expand_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_BANG_ = (function frontend$handler$editor$collapse_BANG_(var_args){
var G__106240 = arguments.length;
switch (G__106240) {
case 1:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
return frontend.handler.editor.collapse_block_BANG_(block_id);
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dom){
return frontend.handler.editor.collapse_block_BANG_(cljs.core.uuid(dommy.core.attr(dom,"blockid")));
}),frontend.handler.editor.get_selected_blocks()));

var and__5041__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5041__auto__;
}
} else {
if(cljs.core.truth_(frontend.handler.editor.whiteboard_QMARK_())){
return frontend.state.active_tldraw_app().api.setCollapsed(true);
} else {
var blocks_with_level = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null));
var max_level = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971),blocks_with_level));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (99);
}
})();
var level = max_level;
while(true){
if((level === (0))){
return null;
} else {
var blocks_to_collapse = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b));
});})(level,blocks_with_level,max_level))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (level,blocks_with_level,max_level){
return (function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b),level);
});})(level,blocks_with_level,max_level))
,blocks_with_level));
if(cljs.core.empty_QMARK_(blocks_to_collapse)){
var G__106822 = (level - (1));
level = G__106822;
continue;
} else {
var seq__106249 = cljs.core.seq(blocks_to_collapse);
var chunk__106250 = null;
var count__106251 = (0);
var i__106252 = (0);
while(true){
if((i__106252 < count__106251)){
var map__106255 = chunk__106250.cljs$core$IIndexed$_nth$arity$2(null,i__106252);
var map__106255__$1 = cljs.core.__destructure_map(map__106255);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106255__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__106823 = seq__106249;
var G__106824 = chunk__106250;
var G__106825 = count__106251;
var G__106826 = (i__106252 + (1));
seq__106249 = G__106823;
chunk__106250 = G__106824;
count__106251 = G__106825;
i__106252 = G__106826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__106249);
if(temp__5804__auto__){
var seq__106249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__106249__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__106249__$1);
var G__106827 = cljs.core.chunk_rest(seq__106249__$1);
var G__106828 = c__5565__auto__;
var G__106829 = cljs.core.count(c__5565__auto__);
var G__106830 = (0);
seq__106249 = G__106827;
chunk__106250 = G__106828;
count__106251 = G__106829;
i__106252 = G__106830;
continue;
} else {
var map__106256 = cljs.core.first(seq__106249__$1);
var map__106256__$1 = cljs.core.__destructure_map(map__106256);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106256__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
frontend.handler.editor.collapse_block_BANG_(uuid);


var G__106831 = cljs.core.next(seq__106249__$1);
var G__106832 = null;
var G__106833 = (0);
var G__106834 = (0);
seq__106249 = G__106831;
chunk__106250 = G__106832;
count__106251 = G__106833;
i__106252 = G__106834;
continue;
}
} else {
return null;
}
}
break;
}
}
}
break;
}

}
}
}
}));

(frontend.handler.editor.collapse_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.toggle_collapse_BANG_ = (function frontend$handler$editor$toggle_collapse_BANG_(var_args){
var G__106259 = arguments.length;
switch (G__106259) {
case 1:
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,false);
}));

(frontend.handler.editor.toggle_collapse_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,clear_selection_QMARK_){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
var temp__5804__auto__ = frontend.state.get_edit_block();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var block__$1 = (function (){var G__106260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106260) : frontend.db.pull.call(null,G__106260));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block__$1))){
return frontend.handler.editor.expand_BANG_.cljs$core$IFn$_invoke$arity$2(e,clear_selection_QMARK_);
} else {
return frontend.handler.editor.collapse_BANG_.cljs$core$IFn$_invoke$arity$2(e,clear_selection_QMARK_);
}
} else {
return null;
}
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
var block_ids_106836 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__106257_SHARP_){
return cljs.core.uuid(dommy.core.attr(p1__106257_SHARP_,"blockid"));
}),frontend.handler.editor.get_selected_blocks());
var first_block_id_106837 = cljs.core.first(block_ids_106836);
if(cljs.core.truth_(first_block_id_106837)){
var first_block_106838 = (function (){var G__106261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),first_block_id_106837], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106261) : frontend.db.pull.call(null,G__106261));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(first_block_106838))){
var seq__106262_106839 = cljs.core.seq(block_ids_106836);
var chunk__106263_106840 = null;
var count__106264_106841 = (0);
var i__106265_106842 = (0);
while(true){
if((i__106265_106842 < count__106264_106841)){
var block_id_106843 = chunk__106263_106840.cljs$core$IIndexed$_nth$arity$2(null,i__106265_106842);
frontend.handler.editor.expand_block_BANG_(block_id_106843);


var G__106844 = seq__106262_106839;
var G__106845 = chunk__106263_106840;
var G__106846 = count__106264_106841;
var G__106847 = (i__106265_106842 + (1));
seq__106262_106839 = G__106844;
chunk__106263_106840 = G__106845;
count__106264_106841 = G__106846;
i__106265_106842 = G__106847;
continue;
} else {
var temp__5804__auto___106848 = cljs.core.seq(seq__106262_106839);
if(temp__5804__auto___106848){
var seq__106262_106849__$1 = temp__5804__auto___106848;
if(cljs.core.chunked_seq_QMARK_(seq__106262_106849__$1)){
var c__5565__auto___106850 = cljs.core.chunk_first(seq__106262_106849__$1);
var G__106851 = cljs.core.chunk_rest(seq__106262_106849__$1);
var G__106852 = c__5565__auto___106850;
var G__106853 = cljs.core.count(c__5565__auto___106850);
var G__106854 = (0);
seq__106262_106839 = G__106851;
chunk__106263_106840 = G__106852;
count__106264_106841 = G__106853;
i__106265_106842 = G__106854;
continue;
} else {
var block_id_106855 = cljs.core.first(seq__106262_106849__$1);
frontend.handler.editor.expand_block_BANG_(block_id_106855);


var G__106856 = cljs.core.next(seq__106262_106849__$1);
var G__106857 = null;
var G__106858 = (0);
var G__106859 = (0);
seq__106262_106839 = G__106856;
chunk__106263_106840 = G__106857;
count__106264_106841 = G__106858;
i__106265_106842 = G__106859;
continue;
}
} else {
}
}
break;
}
} else {
var seq__106266_106860 = cljs.core.seq(block_ids_106836);
var chunk__106267_106861 = null;
var count__106268_106862 = (0);
var i__106269_106863 = (0);
while(true){
if((i__106269_106863 < count__106268_106862)){
var block_id_106864 = chunk__106267_106861.cljs$core$IIndexed$_nth$arity$2(null,i__106269_106863);
frontend.handler.editor.collapse_block_BANG_(block_id_106864);


var G__106865 = seq__106266_106860;
var G__106866 = chunk__106267_106861;
var G__106867 = count__106268_106862;
var G__106868 = (i__106269_106863 + (1));
seq__106266_106860 = G__106865;
chunk__106267_106861 = G__106866;
count__106268_106862 = G__106867;
i__106269_106863 = G__106868;
continue;
} else {
var temp__5804__auto___106869 = cljs.core.seq(seq__106266_106860);
if(temp__5804__auto___106869){
var seq__106266_106870__$1 = temp__5804__auto___106869;
if(cljs.core.chunked_seq_QMARK_(seq__106266_106870__$1)){
var c__5565__auto___106871 = cljs.core.chunk_first(seq__106266_106870__$1);
var G__106872 = cljs.core.chunk_rest(seq__106266_106870__$1);
var G__106873 = c__5565__auto___106871;
var G__106874 = cljs.core.count(c__5565__auto___106871);
var G__106875 = (0);
seq__106266_106860 = G__106872;
chunk__106267_106861 = G__106873;
count__106268_106862 = G__106874;
i__106269_106863 = G__106875;
continue;
} else {
var block_id_106876 = cljs.core.first(seq__106266_106870__$1);
frontend.handler.editor.collapse_block_BANG_(block_id_106876);


var G__106877 = cljs.core.next(seq__106266_106870__$1);
var G__106878 = null;
var G__106879 = (0);
var G__106880 = (0);
seq__106266_106860 = G__106877;
chunk__106267_106861 = G__106878;
count__106268_106862 = G__106879;
i__106269_106863 = G__106880;
continue;
}
} else {
}
}
break;
}
}
} else {
}

var and__5041__auto__ = clear_selection_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.editor.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.editor.clear_selection_BANG_.call(null));
} else {
return and__5041__auto__;
}
} else {
if(cljs.core.truth_(frontend.handler.editor.whiteboard_QMARK_())){
return null;
} else {
return null;

}
}
}
}));

(frontend.handler.editor.toggle_collapse_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.collapse_all_BANG_ = (function frontend$handler$editor$collapse_all_BANG_(var_args){
var G__106271 = arguments.length;
switch (G__106271) {
case 0:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (block_id,p__106272){
var map__106273 = p__106272;
var map__106273__$1 = cljs.core.__destructure_map(map__106273);
var collapse_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__106273__$1,new cljs.core.Keyword(null,"collapse-self?","collapse-self?",1736127396),true);
var blocks = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null));
var block_ids = (function (){var G__106274 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
if(cljs.core.not(collapse_self_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([block_id]),G__106274);
} else {
return G__106274;
}
})();
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,true);
}));

(frontend.handler.editor.collapse_all_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.editor.expand_all_BANG_ = (function frontend$handler$editor$expand_all_BANG_(var_args){
var G__106276 = arguments.length;
switch (G__106276) {
case 0:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
var blocks = frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null));
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,false);
}));

(frontend.handler.editor.expand_all_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.collapse_all_selection_BANG_ = (function frontend$handler$editor$collapse_all_selection_BANG_(){
var block_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__106277_SHARP_){
return frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),p1__106277_SHARP_], null));
}),frontend.handler.editor.get_selected_toplevel_block_uuids()))));
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,true);
});
frontend.handler.editor.expand_all_selection_BANG_ = (function frontend$handler$editor$expand_all_selection_BANG_(){
var block_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__106278_SHARP_){
return frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),p1__106278_SHARP_], null));
}),frontend.handler.editor.get_selected_toplevel_block_uuids()))));
return frontend.handler.editor.set_blocks_collapsed_BANG_(block_ids,false);
});
frontend.handler.editor.toggle_open_BANG_ = (function frontend$handler$editor$toggle_open_BANG_(){
var all_expanded_QMARK_ = cljs.core.empty_QMARK_(frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null)));
if(all_expanded_QMARK_){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}
});
frontend.handler.editor.toggle_open_block_children_BANG_ = (function frontend$handler$editor$toggle_open_block_children_BANG_(block_id){
var all_expanded_QMARK_ = cljs.core.empty_QMARK_(frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),false,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true,new cljs.core.Keyword(null,"root-block","root-block",-645043721),block_id], null)));
if(all_expanded_QMARK_){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapse-self?","collapse-self?",1736127396),false], null));
} else {
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
}
});
frontend.handler.editor.select_all_blocks_BANG_ = (function frontend$handler$editor$select_all_blocks_BANG_(p__106279){
var map__106280 = p__106279;
var map__106280__$1 = cljs.core.__destructure_map(map__106280);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106280__$1,new cljs.core.Keyword(null,"page","page",849072397));
var temp__5802__auto___106883 = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5802__auto___106883)){
var current_input_id_106884 = temp__5802__auto___106883;
var input_106885 = goog.dom.getElement(current_input_id_106884);
var blocks_container_106886 = frontend.util.rec_get_blocks_container(input_106885);
var blocks_106887 = dommy.utils.__GT_Array(blocks_container_106886.getElementsByClassName("ls-block"));
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks_106887);
} else {
frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(goog.dom.getElementByClass,cljs.core.str,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),frontend.handler.editor.all_blocks_with_level(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"collapse?","collapse?",720716709),true], null))));
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),true);
});
frontend.handler.editor.select_parent = (function frontend$handler$editor$select_parent(e){
var edit_input = (function (){var G__106281 = frontend.state.get_edit_input_id();
if((G__106281 == null)){
return null;
} else {
return goog.dom.getElement(G__106281);
}
})();
var edit_block = frontend.state.get_edit_block();
var target_element = e.target.nodeName;
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_block;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = edit_input;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.get_selected_text(),edit_input.value);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.getElementByClass(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(edit_block)))], null));
} else {
if(cljs.core.truth_(edit_block)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["INPUT",null,"TEXTAREA",null], null), null),target_element)){
return null;
} else {
if(cljs.core.truth_(frontend.handler.editor.whiteboard_QMARK_())){
frontend.util.stop(e);

return frontend.state.active_tldraw_app().api.selectAll();
} else {
frontend.util.stop(e);

if(cljs.core.truth_(new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
var temp__5802__auto__ = (function (){var G__106282 = cljs.core.first(frontend.state.get_selection_blocks());
var G__106282__$1 = (((G__106282 == null))?null:dommy.core.attr(G__106282,"blockid"));
if((G__106282__$1 == null)){
return null;
} else {
return cljs.core.uuid(G__106282__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var block_id = temp__5802__auto__;
var temp__5804__auto__ = (function (){var G__106283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106283) : frontend.db.entity.call(null,G__106283));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_page(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return and__5041__auto__;
}
})())){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.getElementByClass(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent))], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(parent))){
return frontend.handler.editor.select_all_blocks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(parent)], null));
} else {
return null;
}
}
}
} else {
return null;
}
} else {
return frontend.handler.editor.select_all_blocks_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
}

}
}
}
}
});
frontend.handler.editor.escape_editing = (function frontend$handler$editor$escape_editing(var_args){
var G__106285 = arguments.length;
switch (G__106285) {
case 0:
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1 = (function (select_QMARK_){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
if(cljs.core.truth_(select_QMARK_)){
return frontend.handler.editor.select_block_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
} else {
return frontend.state.clear_edit_BANG_();
}
} else {
return null;
}
}));

(frontend.handler.editor.escape_editing.cljs$lang$maxFixedArity = 1);

frontend.handler.editor.replace_block_reference_with_content_at_point = (function frontend$handler$editor$replace_block_reference_with_content_at_point(){
var temp__5804__auto__ = frontend.util.thingatpt.block_ref_at_point();
if(cljs.core.truth_(temp__5804__auto__)){
var map__106286 = temp__5804__auto__;
var map__106286__$1 = cljs.core.__destructure_map(map__106286);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106286__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106286__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106286__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var temp__5804__auto____$1 = (function (){var G__106287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),link], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106287) : frontend.db.pull.call(null,G__106287));
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var block = temp__5804__auto____$1;
var block_content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var block_content_without_prop = frontend.util.drawer.remove_logbook(frontend.util.property.remove_properties(format,block_content));
var temp__5804__auto____$2 = frontend.state.get_input();
if(cljs.core.truth_(temp__5804__auto____$2)){
var input = temp__5804__auto____$2;
var temp__5804__auto____$3 = frontend.handler.editor.goog$module$goog$object.get(input,"value");
if(cljs.core.truth_(temp__5804__auto____$3)){
var current_block_content = temp__5804__auto____$3;
var block_content_STAR_ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_block_content,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_content_without_prop),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_block_content,end)].join('');
return frontend.state.set_block_content_and_last_pos_BANG_(input,block_content_STAR_,(1));
} else {
return null;
}
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
frontend.handler.editor.copy_current_ref = (function frontend$handler$editor$copy_current_ref(block_id){
if(cljs.core.truth_(block_id)){
return frontend.util.copy_to_clipboard_BANG_(logseq.graph_parser.util.block_ref.__GT_block_ref(block_id));
} else {
return null;
}
});
frontend.handler.editor.delete_current_ref_BANG_ = (function frontend$handler$editor$delete_current_ref_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
}
})())){
var match = cljs.core.re_pattern(["\\s?",clojure.string.replace(logseq.graph_parser.util.block_ref.__GT_block_ref(ref_id),/([\(\)])/,"\\$1")].join(''));
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,"");
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_text_BANG_ = (function frontend$handler$editor$replace_ref_with_text_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
}
})())){
var match = logseq.graph_parser.util.block_ref.__GT_block_ref(ref_id);
var ref_block = (function (){var G__106288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106288) : frontend.db.entity.call(null,G__106288));
})();
var block_ref_content = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(ref_block),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(ref_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()));
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,block_ref_content);
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
frontend.handler.editor.replace_ref_with_embed_BANG_ = (function frontend$handler$editor$replace_ref_with_embed_BANG_(block,ref_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return ref_id;
} else {
return and__5041__auto__;
}
})())){
var match = logseq.graph_parser.util.block_ref.__GT_block_ref(ref_id);
var content = clojure.string.replace_first(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),match,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_id)], 0)));
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),content);
} else {
return null;
}
});
/**
 * Whether a block should be collapsed by default.
 *   Currently, this handles several cases:
 *   1. References.
 *   2. Custom queries.
 */
frontend.handler.editor.block_default_collapsed_QMARK_ = (function frontend$handler$editor$block_default_collapsed_QMARK_(block,config){
var or__5043__auto__ = (function (){var and__5041__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block) >= frontend.state.get_ref_open_blocks_level());
if(and__5041__auto____$1){
return cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__106289 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__106289) : frontend.db.entity.call(null,G__106289));
})()));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.collapsed_QMARK_(block);
}
});
frontend.handler.editor.set_heading_aux_BANG_ = (function frontend$handler$editor$set_heading_aux_BANG_(block_id,heading){
var block = (function (){var G__106290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__106290) : frontend.db.pull.call(null,G__106290));
})();
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var old_heading = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"heading","heading",-1312171873)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089))){
if((((((old_heading == null)) && ((heading == null)))) || (((((old_heading === true) && (heading === true))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_heading,heading)))))){
return null;
} else {
if((((((old_heading == null)) && (heading === true))) || (((old_heading === true) && ((heading == null)))))){
return frontend.handler.editor.set_block_property_aux_BANG_(block,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading);
} else {
if((((((heading == null)) || (heading === true))) && (typeof old_heading === 'number'))){
var block_SINGLEQUOTE_ = frontend.handler.editor.set_block_property_aux_BANG_(block,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading);
var content = frontend.commands.clear_markdown_heading(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","content","block/content",-161885195),content], null)], 0));
} else {
if((((((old_heading == null)) || (old_heading === true))) && (typeof heading === 'number'))){
var block_SINGLEQUOTE_ = frontend.handler.editor.set_block_property_aux_BANG_(block,new cljs.core.Keyword(null,"heading","heading",-1312171873),null);
var properties = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"heading","heading",-1312171873),heading);
var content = frontend.commands.set_markdown_heading(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_),heading);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","content","block/content",-161885195),content,new cljs.core.Keyword("block","properties","block/properties",708347145),properties], null)], 0));
} else {
var properties = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"heading","heading",-1312171873),heading);
var content = frontend.commands.set_markdown_heading(frontend.commands.clear_markdown_heading(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block)),heading);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","properties","block/properties",708347145),properties,new cljs.core.Keyword("block","content","block/content",-161885195),content], null);

}
}
}
}
} else {
return frontend.handler.editor.set_block_property_aux_BANG_(block,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading);
}
});
frontend.handler.editor.set_heading_BANG_ = (function frontend$handler$editor$set_heading_BANG_(block_id,heading){
var temp__5804__auto__ = frontend.handler.editor.set_heading_aux_BANG_(block_id,heading);
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.modules.outliner.core.save_block_BANG_(block);
} else {
var _STAR_transaction_data_STAR__orig_val__106291 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106292 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106293 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106294 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106293);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106294);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.modules.outliner.core.save_block_BANG_(block);

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106292);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106291);
}}
} else {
return null;
}
});
frontend.handler.editor.remove_heading_BANG_ = (function frontend$handler$editor$remove_heading_BANG_(block_id){
return frontend.handler.editor.set_heading_BANG_(block_id,null);
});
frontend.handler.editor.batch_set_heading_BANG_ = (function frontend$handler$editor$batch_set_heading_BANG_(block_ids,heading){
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

var seq__106295 = cljs.core.seq(block_ids);
var chunk__106296 = null;
var count__106297 = (0);
var i__106298 = (0);
while(true){
if((i__106298 < count__106297)){
var block_id = chunk__106296.cljs$core$IIndexed$_nth$arity$2(null,i__106298);
var temp__5804__auto___106889 = frontend.handler.editor.set_heading_aux_BANG_(block_id,heading);
if(cljs.core.truth_(temp__5804__auto___106889)){
var block_106890 = temp__5804__auto___106889;
frontend.modules.outliner.core.save_block_BANG_(block_106890);
} else {
}


var G__106891 = seq__106295;
var G__106892 = chunk__106296;
var G__106893 = count__106297;
var G__106894 = (i__106298 + (1));
seq__106295 = G__106891;
chunk__106296 = G__106892;
count__106297 = G__106893;
i__106298 = G__106894;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__106295);
if(temp__5804__auto__){
var seq__106295__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__106295__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__106295__$1);
var G__106895 = cljs.core.chunk_rest(seq__106295__$1);
var G__106896 = c__5565__auto__;
var G__106897 = cljs.core.count(c__5565__auto__);
var G__106898 = (0);
seq__106295 = G__106895;
chunk__106296 = G__106896;
count__106297 = G__106897;
i__106298 = G__106898;
continue;
} else {
var block_id = cljs.core.first(seq__106295__$1);
var temp__5804__auto___106899__$1 = frontend.handler.editor.set_heading_aux_BANG_(block_id,heading);
if(cljs.core.truth_(temp__5804__auto___106899__$1)){
var block_106900 = temp__5804__auto___106899__$1;
frontend.modules.outliner.core.save_block_BANG_(block_106900);
} else {
}


var G__106901 = cljs.core.next(seq__106295__$1);
var G__106902 = null;
var G__106903 = (0);
var G__106904 = (0);
seq__106295 = G__106901;
chunk__106296 = G__106902;
count__106297 = G__106903;
i__106298 = G__106904;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_transaction_data_STAR__orig_val__106299 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__106300 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__106301 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__106302 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__106301);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__106302);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

var seq__106303_106905 = cljs.core.seq(block_ids);
var chunk__106304_106906 = null;
var count__106305_106907 = (0);
var i__106306_106908 = (0);
while(true){
if((i__106306_106908 < count__106305_106907)){
var block_id_106909 = chunk__106304_106906.cljs$core$IIndexed$_nth$arity$2(null,i__106306_106908);
var temp__5804__auto___106910 = frontend.handler.editor.set_heading_aux_BANG_(block_id_106909,heading);
if(cljs.core.truth_(temp__5804__auto___106910)){
var block_106911 = temp__5804__auto___106910;
frontend.modules.outliner.core.save_block_BANG_(block_106911);
} else {
}


var G__106912 = seq__106303_106905;
var G__106913 = chunk__106304_106906;
var G__106914 = count__106305_106907;
var G__106915 = (i__106306_106908 + (1));
seq__106303_106905 = G__106912;
chunk__106304_106906 = G__106913;
count__106305_106907 = G__106914;
i__106306_106908 = G__106915;
continue;
} else {
var temp__5804__auto___106916 = cljs.core.seq(seq__106303_106905);
if(temp__5804__auto___106916){
var seq__106303_106917__$1 = temp__5804__auto___106916;
if(cljs.core.chunked_seq_QMARK_(seq__106303_106917__$1)){
var c__5565__auto___106918 = cljs.core.chunk_first(seq__106303_106917__$1);
var G__106919 = cljs.core.chunk_rest(seq__106303_106917__$1);
var G__106920 = c__5565__auto___106918;
var G__106921 = cljs.core.count(c__5565__auto___106918);
var G__106922 = (0);
seq__106303_106905 = G__106919;
chunk__106304_106906 = G__106920;
count__106305_106907 = G__106921;
i__106306_106908 = G__106922;
continue;
} else {
var block_id_106923 = cljs.core.first(seq__106303_106917__$1);
var temp__5804__auto___106924__$1 = frontend.handler.editor.set_heading_aux_BANG_(block_id_106923,heading);
if(cljs.core.truth_(temp__5804__auto___106924__$1)){
var block_106925 = temp__5804__auto___106924__$1;
frontend.modules.outliner.core.save_block_BANG_(block_106925);
} else {
}


var G__106926 = cljs.core.next(seq__106303_106917__$1);
var G__106927 = null;
var G__106928 = (0);
var G__106929 = (0);
seq__106303_106905 = G__106926;
chunk__106304_106906 = G__106927;
count__106305_106907 = G__106928;
i__106306_106908 = G__106929;
continue;
}
} else {
}
}
break;
}

var r__102869__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__102870__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__102869__auto__], 0));
var tx_meta__102871__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__102869__auto__));
var all_tx__102872__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__102870__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__));
var o__102873__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_opts_STAR_);
var full_opts__102874__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.reverse(o__102873__auto__));
var opts_SHARP___102875__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(full_opts__102874__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281)], 0)),tx_meta__102871__auto__], 0));
if(cljs.core.seq(all_tx__102872__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__102867__auto__))){
return null;
} else {
var result__102876__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__102872__auto__,opts_SHARP___102875__auto__,before_editor_cursor__102868__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__102872__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__102871__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__102876__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__106300);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__106299);
}}
});
frontend.handler.editor.batch_remove_heading_BANG_ = (function frontend$handler$editor$batch_remove_heading_BANG_(block_ids){
return frontend.handler.editor.batch_set_heading_BANG_(block_ids,null);
});
/**
 * Set block or page name to the given event's dataTransfer. Used in dnd.
 */
frontend.handler.editor.block__GT_data_transfer_BANG_ = (function frontend$handler$editor$block__GT_data_transfer_BANG_(block_or_page_name,event){
return frontend.handler.editor.goog$module$goog$object.get(event,"dataTransfer").setData(((frontend.db.model.page_QMARK_(block_or_page_name))?"page-name":"block-uuid"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_or_page_name));
});

//# sourceMappingURL=frontend.handler.editor.js.map
