goog.provide('frontend.handler.block');
frontend.handler.block.walk_block = (function frontend$handler$block$walk_block(block,check_QMARK_,transform){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (x){
if(cljs.core.truth_((check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? check_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : check_QMARK_.call(null,x)))){
return cljs.core.reset_BANG_(result,(transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(x) : transform.call(null,x)));
} else {
return x;
}
}),new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));

return cljs.core.deref(result);
});
frontend.handler.block.get_timestamp = (function frontend$handler$block$get_timestamp(block,typ){
return frontend.handler.block.walk_block(block,(function (x){
return ((logseq.graph_parser.block.timestamp_block_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,cljs.core.first(cljs.core.second(x)))));
}),(function (p1__102895_SHARP_){
return cljs.core.second(cljs.core.second(p1__102895_SHARP_));
}));
});
frontend.handler.block.get_scheduled_ast = (function frontend$handler$block$get_scheduled_ast(block){
return frontend.handler.block.get_timestamp(block,"Scheduled");
});
frontend.handler.block.get_deadline_ast = (function frontend$handler$block$get_deadline_ast(block){
return frontend.handler.block.get_timestamp(block,"Deadline");
});
frontend.handler.block.load_more_BANG_ = (function frontend$handler$block$load_more_BANG_(db_id,start_id){
var repo = frontend.state.get_current_repo();
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var block = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,db_id) : frontend.db.entity.call(null,repo,db_id));
var block_QMARK_ = cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block));
var k = ((block_QMARK_)?new cljs.core.Keyword("frontend.db.react","block-and-children","frontend.db.react/block-and-children",-1481509175):new cljs.core.Keyword("frontend.db.react","page-blocks","frontend.db.react/page-blocks",1515328263));
var query_k = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,k,db_id], null);
var option = (function (){var G__102897 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.step_loading_blocks], null);
if(block_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__102897,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),db_id);
} else {
return G__102897;
}
})();
var more_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102896_SHARP_){
var G__102898 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102896_SHARP_);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__102898) : frontend.db.pull.call(null,G__102898));
}),frontend.db.model.get_paginated_blocks_no_cache(db,start_id,option));
return frontend.db.react.swap_new_result_BANG_(query_k,(function (result){
return frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,more_data));
}));
});
frontend.handler.block.indentable_QMARK_ = (function frontend$handler$block$indentable_QMARK_(p__102899){
var map__102900 = p__102899;
var map__102900__$1 = cljs.core.__destructure_map(map__102900);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102900__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102900__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
if(cljs.core.truth_(parent)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent,left);
} else {
return null;
}
});
frontend.handler.block.outdentable_QMARK_ = (function frontend$handler$block$outdentable_QMARK_(p__102901){
var map__102902 = p__102901;
var map__102902__$1 = cljs.core.__destructure_map(map__102902);
var _block = map__102902__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102902__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level,(1));
});
frontend.handler.block.indent_outdent_block_BANG_ = (function frontend$handler$block$indent_outdent_block_BANG_(block,direction){
var transact_data__102865__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var transaction_opts__102866__auto__ = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var opts__102867__auto__ = (cljs.core.truth_(transact_data__102865__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
var before_editor_cursor__102868__auto__ = frontend.state.get_current_edit_block_and_position();
if(cljs.core.truth_(transact_data__102865__auto__)){
if(cljs.core.truth_(transaction_opts__102866__auto__)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(transaction_opts__102866__auto__,opts__102867__auto__);
} else {
}

return frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
var _STAR_transaction_data_STAR__orig_val__102903 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_opts_STAR__orig_val__102904 = frontend.modules.outliner.core._STAR_transaction_opts_STAR_;
var _STAR_transaction_data_STAR__temp_val__102905 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _STAR_transaction_opts_STAR__temp_val__102906 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__102905);

(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__temp_val__102906);

try{cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.outliner.core._STAR_transaction_opts_STAR_,transaction_opts__102866__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__102867__auto__], 0));

frontend.modules.outliner.core.indent_outdent_blocks_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833)));

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
}finally {(frontend.modules.outliner.core._STAR_transaction_opts_STAR_ = _STAR_transaction_opts_STAR__orig_val__102904);

(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__102903);
}}
});
frontend.handler.block.select_block_BANG_ = (function frontend$handler$block$select_block_BANG_(block_uuid){
var blocks = document.getElementsByClassName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_uuid));
if(cljs.core.seq(blocks)){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(blocks);
} else {
return null;
}
});
frontend.handler.block._STAR_swipe = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block._STAR_touch_start = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.handler.block.target_disable_swipe_QMARK_ = (function frontend$handler$block$target_disable_swipe_QMARK_(target){
var user_defined_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword("gestures","disabled-in-block-with-tags","gestures/disabled-in-block-with-tags",-620432781)], null));
var or__5043__auto__ = target.closest(".dsl-query");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = target.closest(".drawer");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = target.closest(".draw-wrap");
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return cljs.core.some((function (p1__102907_SHARP_){
return target.closest(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[data-refs-self*=%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__102907_SHARP_], 0)));
}),user_defined_tags);
}
}
}
});
frontend.handler.block.on_touch_start = (function frontend$handler$block$on_touch_start(event,uuid){
var target = event.target;
var input = frontend.state.get_input();
var input_id = frontend.state.get_edit_input_id();
var selection_type = document.getSelection().type;
cljs.core.reset_BANG_(frontend.handler.block._STAR_touch_start,Date.now());

if(cljs.core.truth_((function (){var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(input_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
} else {
return and__5041__auto__;
}
})())){
} else {
frontend.state.clear_edit_BANG_();
}

if(cljs.core.truth_(frontend.handler.block.target_disable_swipe_QMARK_(target))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selection_type,"Range")){
var temp__5804__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5804__auto__)){
var touches = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1))){
var touch = (touches[(0)]);
var x = touch.clientX;
var y = touch.clientY;
return cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x0","x0",410843387),x,new cljs.core.Keyword(null,"y0","y0",111454807),y,new cljs.core.Keyword(null,"xi","xi",-163483319),x,new cljs.core.Keyword(null,"yi","yi",-1352135633),y,new cljs.core.Keyword(null,"tx","tx",466630418),x,new cljs.core.Keyword(null,"ty","ty",158290825),y,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
});
frontend.handler.block.on_touch_move = (function frontend$handler$block$on_touch_move(event,block,uuid,edit_QMARK_,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
var temp__5804__auto__ = event.targetTouches;
if(cljs.core.truth_(temp__5804__auto__)){
var touches = temp__5804__auto__;
var selection_type = document.getSelection().type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_type,"Range")){
return null;
} else {
if(((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417)))) || (((Date.now() - cljs.core.deref(frontend.handler.block._STAR_touch_start)) < (600))))){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1));
if(and__5041__auto__){
return cljs.core.deref(frontend.handler.block._STAR_swipe);
} else {
return and__5041__auto__;
}
})())){
var map__102910 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__102910__$1 = cljs.core.__destructure_map(map__102910);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102910__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var xi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102910__$1,new cljs.core.Keyword(null,"xi","xi",-163483319));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102910__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var touch = (touches[(0)]);
var tx = touch.clientX;
var ty = touch.clientY;
var direction__$1 = (((direction == null))?(((tx > x0))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)):direction);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__102908_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__102908_SHARP_,new cljs.core.Keyword(null,"tx","tx",466630418),tx),new cljs.core.Keyword(null,"ty","ty",158290825),ty),new cljs.core.Keyword(null,"xi","xi",-163483319),tx),new cljs.core.Keyword(null,"yi","yi",-1352135633),ty),new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1);
}));

if((((xi - x0) * (tx - xi)) < (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.block._STAR_swipe,(function (p1__102909_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__102909_SHARP_,new cljs.core.Keyword(null,"x0","x0",410843387),tx),new cljs.core.Keyword(null,"y0","y0",111454807),ty);
}));
} else {
}

var map__102911 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__102911__$1 = cljs.core.__destructure_map(map__102911);
var x0__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102911__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var y0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102911__$1,new cljs.core.Keyword(null,"y0","y0",111454807));
var dx = (tx - x0__$1);
var dy = (ty - y0);
if((((Math.abs(dy) < (30))) && ((Math.abs(dx) > (30))))){
var left = goog.dom.getElement(["block-left-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var right = goog.dom.getElement(["block-right-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction__$1,new cljs.core.Keyword(null,"right","right",-452581833))){
cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,true);

if(cljs.core.truth_(left)){
if((dx >= (0))){
(left.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dx),"px"].join(''));
} else {
}

if((dx < (0))){
(left.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5128__auto__ = ((40) + dx);
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()),"px"].join(''));
} else {
}

var indent = goog.dom.getFirstElementChild(left);
if(cljs.core.truth_(frontend.handler.block.indentable_QMARK_(block))){
if((left.clientWidth >= (40))){
return (indent.style.opacity = "100%");
} else {
return (indent.style.opacity = "30%");
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction__$1,new cljs.core.Keyword(null,"left","left",-399115937))){
cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,true);

if(cljs.core.truth_(right)){
if((dx <= (0))){
(right.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((- dx)),"px"].join(''));
} else {
}

if((dx > (0))){
(right.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5128__auto__ = ((80) - dx);
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()),"px"].join(''));
} else {
}

var outdent = goog.dom.getFirstElementChild(right);
var more = (cljs.core.truth_(edit_QMARK_)?null:goog.dom.getLastElementChild(right));
if(cljs.core.truth_((function (){var and__5041__auto__ = outdent;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.block.outdentable_QMARK_(block);
} else {
return and__5041__auto__;
}
})())){
if((((right.clientWidth >= (40))) && ((right.clientWidth < (80))))){
(outdent.style.opacity = "100%");
} else {
(outdent.style.opacity = "30%");
}
} else {
}

if(cljs.core.truth_(more)){
if((right.clientWidth >= (80))){
return (more.style.opacity = "100%");
} else {
return (more.style.opacity = "30%");
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
}
} else {
return null;
}
});
frontend.handler.block.on_touch_end = (function frontend$handler$block$on_touch_end(_event,block,uuid,_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
if(cljs.core.truth_(cljs.core.deref(frontend.handler.block._STAR_swipe))){
var left_menu = goog.dom.getElement(["block-left-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var right_menu = goog.dom.getElement(["block-right-menu-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''));
var map__102912 = cljs.core.deref(frontend.handler.block._STAR_swipe);
var map__102912__$1 = cljs.core.__destructure_map(map__102912);
var x0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102912__$1,new cljs.core.Keyword(null,"x0","x0",410843387));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102912__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var dx = (tx - x0);
try{if((Math.abs(dx) > (10))){
if(cljs.core.truth_((function (){var and__5041__auto__ = left_menu;
if(cljs.core.truth_(and__5041__auto__)){
return (left_menu.clientWidth >= (40));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.handler.block.indentable_QMARK_(block))){
return frontend.mobile.haptics.with_haptics_impact(frontend.handler.block.indent_outdent_block_BANG_(block,new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"light","light",1918998747));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = right_menu;
if(cljs.core.truth_(and__5041__auto__)){
return ((((40) <= right_menu.clientWidth)) && ((right_menu.clientWidth <= (79))));
} else {
return and__5041__auto__;
}
})())){
if(frontend.handler.block.outdentable_QMARK_(block)){
return frontend.mobile.haptics.with_haptics_impact(frontend.handler.block.indent_outdent_block_BANG_(block,new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"light","light",1918998747));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = right_menu;
if(cljs.core.truth_(and__5041__auto__)){
return (right_menu.clientWidth >= (80));
} else {
return and__5041__auto__;
}
})())){
return frontend.mobile.haptics.with_haptics_impact((function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),true);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","actioned-block","mobile/actioned-block",347869705),block);

return frontend.handler.block.select_block_BANG_(uuid);
})()
,new cljs.core.Keyword(null,"light","light",1918998747));
} else {
return null;

}
}
}
} else {
return null;
}
}catch (e102913){var e = e102913;
return console.error(e);
}finally {cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,false);

cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,false);

cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);
}} else {
return null;
}
});
frontend.handler.block.on_touch_cancel = (function frontend$handler$block$on_touch_cancel(_STAR_show_left_menu_QMARK_,_STAR_show_right_menu_QMARK_){
cljs.core.reset_BANG_(_STAR_show_left_menu_QMARK_,false);

cljs.core.reset_BANG_(_STAR_show_right_menu_QMARK_,false);

return cljs.core.reset_BANG_(frontend.handler.block._STAR_swipe,null);
});
frontend.handler.block.get_blocks_refed_pages = (function frontend$handler$block$get_blocks_refed_pages(aliases,p__102915){
var vec__102916 = p__102915;
var seq__102917 = cljs.core.seq(vec__102916);
var first__102918 = cljs.core.first(seq__102917);
var seq__102917__$1 = cljs.core.next(seq__102917);
var block = first__102918;
var children = seq__102917__$1;
var children_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
var refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__102914_SHARP_){
var G__102919 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102914_SHARP_);
return (aliases.cljs$core$IFn$_invoke$arity$1 ? aliases.cljs$core$IFn$_invoke$arity$1(G__102919) : aliases.call(null,G__102919));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children_refs,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block)));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (ref){
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(ref)], null);
} else {
return null;
}
}),refs);
});
frontend.handler.block.filter_blocks = (function frontend$handler$block$filter_blocks(ref_blocks,filters){
if(cljs.core.empty_QMARK_(filters)){
return ref_blocks;
} else {
var exclude_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__102920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102920) : frontend.db.entity.call(null,G__102920));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,false)));
var include_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__102921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__102921) : frontend.db.entity.call(null,G__102921));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,true)));
var G__102922 = ref_blocks;
var G__102922__$1 = ((cljs.core.seq(exclude_ids))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block)));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(exclude_ids,ids));
}),G__102922):G__102922);
if(cljs.core.seq(include_ids)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block)));
return clojure.set.subset_QMARK_(include_ids,ids);
}),G__102922__$1);
} else {
return G__102922__$1;
}
}
});
frontend.handler.block.get_filtered_ref_blocks_with_parents = (function frontend$handler$block$get_filtered_ref_blocks_with_parents(all_ref_blocks,filtered_ref_blocks){
if(cljs.core.seq(filtered_ref_blocks)){
var id__GT_block = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),all_ref_blocks),all_ref_blocks);
var get_parents = (function (block){
var block__$1 = block;
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null);
while(true){
var parent = (function (){var G__102924 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block__$1));
return (id__GT_block.cljs$core$IFn$_invoke$arity$1 ? id__GT_block.cljs$core$IFn$_invoke$arity$1(G__102924) : id__GT_block.call(null,G__102924));
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return and__5041__auto__;
}
})())){
var G__102934 = parent;
var G__102935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,parent);
block__$1 = G__102934;
result = G__102935;
continue;
} else {
return result;
}
break;
}
});
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(get_parents,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filtered_ref_blocks], 0)));
} else {
return null;
}
});
frontend.handler.block.get_idx_of_order_list_block = (function frontend$handler$block$get_idx_of_order_list_block(block,order_list_type){
var order_block_fn_QMARK_ = (function (p1__102925_SHARP_){
var G__102927 = p1__102925_SHARP_;
var G__102927__$1 = (((G__102927 == null))?null:new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(G__102927));
var G__102927__$2 = (((G__102927__$1 == null))?null:new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366).cljs$core$IFn$_invoke$arity$1(G__102927__$1));
if((G__102927__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__102927__$2,order_list_type);
}
});
var prev_block_fn = (function (p1__102926_SHARP_){
var G__102928 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__102926_SHARP_);
if((G__102928 == null)){
return null;
} else {
return frontend.db.model.get_prev_sibling(frontend.state.get_current_repo(),G__102928);
}
});
var prev_block = prev_block_fn(block);
var page_fn_QMARK_ = (function frontend$handler$block$get_idx_of_order_list_block_$_page_fn_QMARK_(b){
var G__102930 = b;
var G__102930__$1 = (((G__102930 == null))?null:new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(G__102930));
if((G__102930__$1 == null)){
return null;
} else {
return (!((G__102930__$1 == null)));
}
});
var order_sibling_list = (function frontend$handler$block$get_idx_of_order_list_block_$_order_sibling_list(b){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(page_fn_QMARK_(b));
if(and__5041__auto__){
return order_block_fn_QMARK_(b);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.cons(b,frontend$handler$block$get_idx_of_order_list_block_$_order_sibling_list(prev_block_fn(b)));
} else {
return null;
}
}),null,null));
});
var order_parent_list = (function frontend$handler$block$get_idx_of_order_list_block_$_order_parent_list(b){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(page_fn_QMARK_(b));
if(and__5041__auto__){
return order_block_fn_QMARK_(b);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.cons(b,frontend$handler$block$get_idx_of_order_list_block_$_order_parent_list(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))));
} else {
return null;
}
}),null,null));
});
var idx = (cljs.core.truth_(prev_block)?cljs.core.count(order_sibling_list(block)):(1));
var order_parents_count = (cljs.core.count(order_parent_list(block)) - (1));
var delta = (((order_parents_count < (0)))?(0):cljs.core.mod(order_parents_count,(3)));
if((delta === (0))){
return idx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delta,(1))){
var G__102931 = (frontend.util.convert_to_letters.cljs$core$IFn$_invoke$arity$1 ? frontend.util.convert_to_letters.cljs$core$IFn$_invoke$arity$1(idx) : frontend.util.convert_to_letters.call(null,idx));
if((G__102931 == null)){
return null;
} else {
return frontend.util.safe_lower_case(G__102931);
}
} else {
return (frontend.util.convert_to_roman.cljs$core$IFn$_invoke$arity$1 ? frontend.util.convert_to_roman.cljs$core$IFn$_invoke$arity$1(idx) : frontend.util.convert_to_roman.call(null,idx));

}
}
});
frontend.handler.block.attach_order_list_state = (function frontend$handler$block$attach_order_list_state(config,block){
var own_order_list_type = (function (){var G__102932 = block;
var G__102932__$1 = (((G__102932 == null))?null:new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(G__102932));
var G__102932__$2 = (((G__102932__$1 == null))?null:new cljs.core.Keyword(null,"logseq.order-list-type","logseq.order-list-type",-1819806366).cljs$core$IFn$_invoke$arity$1(G__102932__$1));
var G__102932__$3 = (((G__102932__$2 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102932__$2));
if((G__102932__$3 == null)){
return null;
} else {
return clojure.string.lower_case(G__102932__$3);
}
})();
var own_order_list_index = (function (){var G__102933 = own_order_list_type;
if((G__102933 == null)){
return null;
} else {
return frontend.handler.block.get_idx_of_order_list_block(block,G__102933);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"own-order-list-type","own-order-list-type",507157714),own_order_list_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"own-order-list-index","own-order-list-index",2051635079),own_order_list_index,new cljs.core.Keyword(null,"own-order-number-list?","own-order-number-list?",2048042976),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(own_order_list_type,"number")], 0));
});

//# sourceMappingURL=frontend.handler.block.js.map
