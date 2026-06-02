goog.provide('frontend.handler.whiteboard');
goog.scope(function(){
  frontend.handler.whiteboard.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.whiteboard.js__GT_clj_keywordize = (function frontend$handler$whiteboard$js__GT_clj_keywordize(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
frontend.handler.whiteboard.shape__GT_block = (function frontend$handler$whiteboard$shape__GT_block(shape,page_name){
var properties = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),new cljs.core.Keyword(null,"whiteboard-shape","whiteboard-shape",-1784390938),new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905),shape], null);
var block = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null),new cljs.core.Keyword("block","properties","block/properties",708347145),properties], null);
var additional_props = logseq.graph_parser.whiteboard.with_whiteboard_block_props(block,page_name);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,additional_props], 0));
});
frontend.handler.whiteboard.get_whiteboard_clj = (function frontend$handler$whiteboard$get_whiteboard_clj(page_name){
if(cljs.core.truth_(frontend.db.model.page_exists_QMARK_(page_name))){
var page_block = frontend.db.model.get_page(page_name);
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_block,blocks], null);
} else {
return null;
}
});
frontend.handler.whiteboard.build_shapes = (function frontend$handler$whiteboard$build_shapes(page_block,blocks){
var shapes_index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page_block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.Keyword(null,"shapes-index","shapes-index",-1480605060)], null));
var shape_id__GT_index = cljs.core.zipmap(shapes_index,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(shapes_index)));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.whiteboard.block__GT_shape,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.whiteboard.shape_block_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape_id__GT_index,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),(0)));
}),blocks))));
});
frontend.handler.whiteboard.whiteboard_clj__GT_tldr = (function frontend$handler$whiteboard$whiteboard_clj__GT_tldr(page_block,blocks){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_block));
var shapes = frontend.handler.whiteboard.build_shapes(page_block,blocks);
var tldr_page = logseq.graph_parser.whiteboard.page_block__GT_tldr_page(page_block);
var assets = new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(tldr_page);
var tldr_page__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tldr_page,new cljs.core.Keyword(null,"assets","assets",210278279));
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"currentPageId","currentPageId",1489236563),id,new cljs.core.Keyword(null,"assets","assets",210278279),(function (){var or__5043__auto__ = assets;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [];
}
})(),new cljs.core.Keyword(null,"selectedIds","selectedIds",1314450094),[],new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tldr_page__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_block),new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes], null)], 0))], null)], null));
});
frontend.handler.whiteboard.build_page_block = (function frontend$handler$whiteboard$build_page_block(page_name,tldraw_page,assets,shapes_index){
var page_entity = frontend.db.model.get_page(page_name);
var get_k = (function (p1__108962_SHARP_){
return frontend.handler.whiteboard.goog$module$goog$object.get(tldraw_page,p1__108962_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","type","block/type",1537584409),"whiteboard",new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),new cljs.core.Keyword(null,"whiteboard-page","whiteboard-page",-432281646),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),get_k("id"),new cljs.core.Keyword(null,"name","name",1843675177),get_k("name"),new cljs.core.Keyword(null,"bindings","bindings",1271397192),frontend.handler.whiteboard.js__GT_clj_keywordize(get_k("bindings")),new cljs.core.Keyword(null,"nonce","nonce",564330331),get_k("nonce"),new cljs.core.Keyword(null,"assets","assets",210278279),frontend.handler.whiteboard.js__GT_clj_keywordize(assets),new cljs.core.Keyword(null,"shapes-index","shapes-index",-1480605060),shapes_index], null)], null),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.util.time_ms(),new cljs.core.Keyword("block","created-at","block/created-at",1440015),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.time_ms();
}
})()], null);
});
frontend.handler.whiteboard.compute_tx = (function frontend$handler$whiteboard$compute_tx(app,tl_page,new_id_nonces,db_id_nonces,page_name,replace_QMARK_){
var assets = frontend.handler.whiteboard.js__GT_clj_keywordize(app.getCleanUpAssets());
var new_shapes = tl_page.shapes;
var shapes_index = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108963_SHARP_){
return frontend.handler.whiteboard.goog$module$goog$object.get(p1__108963_SHARP_,"id");
}),new_shapes);
var shape_id__GT_index = cljs.core.zipmap(shapes_index,cljs.core.range.cljs$core$IFn$_invoke$arity$1(new_shapes.length));
var upsert_shapes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__108966){
var map__108967 = p__108966;
var map__108967__$1 = cljs.core.__destructure_map(map__108967);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108967__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.handler.whiteboard.js__GT_clj_keywordize(tl_page.getShapeById(id).serialized),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_id__GT_index,id));
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_id_nonces,db_id_nonces)));
var old_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),db_id_nonces));
var new_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_id_nonces));
var created_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_ids,old_ids)));
var created_shapes = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__108964_SHARP_){
var G__108968 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__108964_SHARP_);
return (created_ids.cljs$core$IFn$_invoke$arity$1 ? created_ids.cljs$core$IFn$_invoke$arity$1(G__108968) : created_ids.call(null,G__108968));
}),upsert_shapes));
var deleted_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_ids,new_ids));
var repo = frontend.state.get_current_repo();
var deleted_shapes = ((cljs.core.seq(deleted_ids))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905)], null));
}),(function (){var G__108969 = repo;
var G__108970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__108971 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(id)], null);
}),deleted_ids);
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__108969,G__108970,G__108971) : frontend.db.pull_many.call(null,G__108969,G__108970,G__108971));
})()):null);
var deleted_shapes_tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(id)], null)], null);
}),deleted_ids);
var with_timestamps = (function (block){
if(cljs.core.contains_QMARK_(created_ids,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.util.time_ms());
} else {
return frontend.modules.outliner.core.block_with_timestamps(block);
}
});
var changed_shapes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(upsert_shapes,created_shapes);
var prev_changed_blocks = ((cljs.core.seq(changed_shapes))?(function (){var G__108972 = repo;
var G__108973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__108974 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (shape){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))], null);
}),changed_shapes);
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__108972,G__108973,G__108974) : frontend.db.pull_many.call(null,G__108972,G__108973,G__108974));
})():null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-block","page-block",504302814),frontend.handler.whiteboard.build_page_block(page_name,tl_page,assets,shapes_index),new cljs.core.Keyword(null,"upserted-blocks","upserted-blocks",-1257152432),cljs.core.map.cljs$core$IFn$_invoke$arity$2(with_timestamps,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108965_SHARP_){
return frontend.handler.whiteboard.shape__GT_block(p1__108965_SHARP_,page_name);
}),upsert_shapes)),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),deleted_shapes_tx,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("whiteboard","transact?","whiteboard/transact?",-1793205629),cljs.core.not(replace_QMARK_),new cljs.core.Keyword(null,"replace?","replace?",-877816403),replace_QMARK_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name,new cljs.core.Keyword(null,"deleted-shapes","deleted-shapes",-866326203),deleted_shapes,new cljs.core.Keyword(null,"new-shapes","new-shapes",1387380119),created_shapes,new cljs.core.Keyword(null,"changed-shapes","changed-shapes",743121443),changed_shapes,new cljs.core.Keyword(null,"prev-changed-blocks","prev-changed-blocks",-990519563),prev_changed_blocks], null)], null)], null);
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.whiteboard !== 'undefined') && (typeof frontend.handler.whiteboard._STAR_last_shapes_nonce !== 'undefined')){
} else {
frontend.handler.whiteboard._STAR_last_shapes_nonce = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.whiteboard.transact_tldr_delta_BANG_ = (function frontend$handler$whiteboard$transact_tldr_delta_BANG_(page_name,app,replace_QMARK_){
var tl_page = cljs.core.second(cljs.core.first(app.pages));
var shapes = tl_page.shapes;
var page_block = frontend.db.model.get_page(page_name);
var prev_shapes_index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page_block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.Keyword(null,"shapes-index","shapes-index",-1480605060)], null));
var shape_id__GT_prev_index = cljs.core.zipmap(prev_shapes_index,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(prev_shapes_index)));
var new_id_nonces = cljs.core.set(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,shape){
var id = shape.id;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"nonce","nonce",564330331),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_id__GT_prev_index,id)))?shape.nonce:Date.now())], null);
}),shapes));
var repo = frontend.state.get_current_repo();
var db_id_nonces = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.handler.whiteboard._STAR_last_shapes_nonce),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_name], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108975_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__108975_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str);
}),frontend.db.model.get_whiteboard_id_nonces(repo,page_name)));
}
})();
var map__108979 = frontend.handler.whiteboard.compute_tx(app,tl_page,new_id_nonces,db_id_nonces,page_name,replace_QMARK_);
var map__108979__$1 = cljs.core.__destructure_map(map__108979);
var page_block__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"page-block","page-block",504302814));
var upserted_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"upserted-blocks","upserted-blocks",-1257152432));
var delete_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(delete_blocks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_block__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upserted_blocks], 0));
var new_shapes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"new-shapes","new-shapes",1387380119)], null));
var deleted_shapes = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"deleted-shapes","deleted-shapes",-866326203)], null));
var metadata_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.some((function (p1__108976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("group",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__108976_SHARP_));
}),new_shapes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430),new cljs.core.Keyword(null,"group","group",582596132)):(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not_empty(deleted_shapes);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.every_QMARK_((function (p1__108977_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("group",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__108977_SHARP_));
}),deleted_shapes);
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430),new cljs.core.Keyword(null,"un-group","un-group",1594045164)):(cljs.core.truth_(cljs.core.some((function (p1__108978_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("line",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__108978_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("arrow ",new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decorations","decorations",-1882398759).cljs$core$IFn$_invoke$arity$1(p1__108978_SHARP_)))));
}),new_shapes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430),new cljs.core.Keyword(null,"new-arrow","new-arrow",2027535819)):metadata
)));
var metadata_SINGLEQUOTE___$1 = ((cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(upserted_blocks,delete_blocks)))?metadata_SINGLEQUOTE_:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword(null,"undo?","undo?",85877626),true));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.whiteboard._STAR_last_shapes_nonce,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,page_name], null),new_id_nonces);

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-arrow","new-arrow",2027535819),null], null), null),new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430).cljs$core$IFn$_invoke$arity$1(metadata_SINGLEQUOTE___$1))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("whiteboard","pending-tx-data","whiteboard/pending-tx-data",66525729),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data,new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata_SINGLEQUOTE___$1], null));
} else {
var pending_tx_data = new cljs.core.Keyword("whiteboard","pending-tx-data","whiteboard/pending-tx-data",66525729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var tx_data_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(pending_tx_data),tx_data);
var metadata_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_SINGLEQUOTE___$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(pending_tx_data)], 0));
frontend.state.set_state_BANG_(new cljs.core.Keyword("whiteboard","pending-tx-data","whiteboard/pending-tx-data",66525729),cljs.core.PersistentArrayMap.EMPTY);

return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo,tx_data_SINGLEQUOTE_,metadata_SINGLEQUOTE__SINGLEQUOTE_);
}
});
frontend.handler.whiteboard.get_default_new_whiteboard_tx = (function frontend$handler$whiteboard$get_default_new_whiteboard_tx(page_name,id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page_name,new cljs.core.Keyword("block","type","block/type",1537584409),"whiteboard",new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),new cljs.core.Keyword(null,"whiteboard-page","whiteboard-page",-432281646),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),page_name,new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),new cljs.core.Keyword(null,"whiteboard-page","whiteboard-page",-432281646),new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"nonce","nonce",564330331),(1),new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.util.time_ms(),new cljs.core.Keyword("block","created-at","block/created-at",1440015),frontend.util.time_ms()], null)], null);
});
frontend.handler.whiteboard.get_whiteboard_entity = (function frontend$handler$whiteboard$get_whiteboard_entity(page_name){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
});
frontend.handler.whiteboard.create_new_whiteboard_page_BANG_ = (function frontend$handler$whiteboard$create_new_whiteboard_page_BANG_(var_args){
var G__108981 = arguments.length;
switch (G__108981) {
case 0:
return frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
var uuid = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = name;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.parse_uuid(name);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
}
})();
var name__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid);
}
})();
var G__108982_109013 = frontend.handler.whiteboard.get_default_new_whiteboard_tx(name__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid));
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__108982_109013) : frontend.db.transact_BANG_.call(null,G__108982_109013));

var entity = frontend.handler.whiteboard.get_whiteboard_entity(name__$1);
var tx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));

var page_entity = frontend.handler.whiteboard.get_whiteboard_entity(name__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = page_entity;
if(cljs.core.truth_(and__5041__auto__)){
return (new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_entity) == null);
} else {
return and__5041__auto__;
}
})())){
return frontend.modules.outliner.file.sync_to_file.cljs$core$IFn$_invoke$arity$1(page_entity);
} else {
return null;
}
}));

(frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_ = (function frontend$handler$whiteboard$create_new_whiteboard_and_redirect_BANG_(var_args){
var G__108984 = arguments.length;
switch (G__108984) {
case 0:
return frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))));
}));

(frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (name){
if(frontend.config.publishing_QMARK_){
return null;
} else {
frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1(name);

return frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-whiteboard?","new-whiteboard?",-360865129),true], null));
}
}));

(frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.whiteboard.__GT_logseq_portal_shape = (function frontend$handler$whiteboard$__GT_logseq_portal_shape(block_id,point){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"blockType","blockType",85218785),(cljs.core.truth_(cljs.core.parse_uuid(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)))?"B":"P"),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1((datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null))),new cljs.core.Keyword(null,"compact","compact",-348732150),false,new cljs.core.Keyword(null,"pageId","pageId",276948616),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"logseq-portal"], null);
});
/**
 * Given the block uuid, add a new shape to the referenced block.
 * By default it will be placed next to the given shape id
 */
frontend.handler.whiteboard.add_new_block_portal_shape_BANG_ = (function frontend$handler$whiteboard$add_new_block_portal_shape_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___109015 = arguments.length;
var i__5767__auto___109016 = (0);
while(true){
if((i__5767__auto___109016 < len__5766__auto___109015)){
args__5772__auto__.push((arguments[i__5767__auto___109016]));

var G__109017 = (i__5767__auto___109016 + (1));
i__5767__auto___109016 = G__109017;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.handler.whiteboard.add_new_block_portal_shape_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.handler.whiteboard.add_new_block_portal_shape_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block_uuid,source_shape,p__108988){
var map__108989 = p__108988;
var map__108989__$1 = cljs.core.__destructure_map(map__108989);
var link_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108989__$1,new cljs.core.Keyword(null,"link?","link?",-1241171248));
var bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108989__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628));
var temp__5804__auto__ = frontend.state.active_tldraw_app();
if(cljs.core.truth_(temp__5804__auto__)){
var app = temp__5804__auto__;
var api = app.api;
var point = (function (bounds){
if(cljs.core.truth_(bottom_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.minX,((64) + bounds.maxY)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((64) + bounds.maxX),bounds.minY], null);
}
})(app.getShapeById(source_shape).bounds);
var shape = frontend.handler.whiteboard.__GT_logseq_portal_shape(block_uuid,point);
if(cljs.core.uuid_QMARK_(block_uuid)){
frontend.handler.editor.set_blocks_id_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid], null));
} else {
}

api.createShapes(cljs.core.clj__GT_js(shape));

if(cljs.core.truth_(link_QMARK_)){
return api.createNewLineBinding(source_shape,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.whiteboard.add_new_block_portal_shape_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.whiteboard.add_new_block_portal_shape_BANG_.cljs$lang$applyTo = (function (seq108985){
var G__108986 = cljs.core.first(seq108985);
var seq108985__$1 = cljs.core.next(seq108985);
var G__108987 = cljs.core.first(seq108985__$1);
var seq108985__$2 = cljs.core.next(seq108985__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108986,G__108987,seq108985__$2);
}));

frontend.handler.whiteboard.page_name__GT_tldr_BANG_ = (function frontend$handler$whiteboard$page_name__GT_tldr_BANG_(page_name){
return cljs.core.clj__GT_js((cljs.core.truth_(page_name)?(function (){var temp__5802__auto__ = frontend.handler.whiteboard.get_whiteboard_clj(page_name);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__108990 = temp__5802__auto__;
var page_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108990,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108990,(1),null);
return frontend.handler.whiteboard.whiteboard_clj__GT_tldr(page_block,blocks);
} else {
return frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}
})():frontend.handler.whiteboard.create_new_whiteboard_page_BANG_.cljs$core$IFn$_invoke$arity$1(null)));
});
/**
 * Given a page, return all the logseq blocks (exclude all shapes)
 */
frontend.handler.whiteboard.get_whiteboard_blocks = (function frontend$handler$whiteboard$get_whiteboard_blocks(page_name){
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.whiteboard.shape_block_QMARK_,blocks);
});
/**
 * Get the last root Logseq block in the page. Main purpose is to calculate the new :block/left id
 */
frontend.handler.whiteboard.get_last_root_block = (function frontend$handler$whiteboard$get_last_root_block(page_name){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page(page_name));
var blocks = frontend.handler.whiteboard.get_whiteboard_blocks(page_name);
var root_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)));
}),blocks);
var root_block_left_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),null);
}),root_blocks)));
var blocks_with_no_next = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__108993_SHARP_){
var G__108994 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__108993_SHARP_);
return (root_block_left_ids.cljs$core$IFn$_invoke$arity$1 ? root_block_left_ids.cljs$core$IFn$_invoke$arity$1(G__108994) : root_block_left_ids.call(null,G__108994));
}),root_blocks);
if(cljs.core.seq(blocks_with_no_next)){
return cljs.core.first(blocks_with_no_next);
} else {
return null;
}
});
frontend.handler.whiteboard.add_new_block_BANG_ = (function frontend$handler$whiteboard$add_new_block_BANG_(page_name,content){
var uuid = (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
var page_entity = frontend.db.model.get_page(page_name);
var last_root_block = (function (){var or__5043__auto__ = frontend.handler.whiteboard.get_last_root_block(page_name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_entity;
}
})();
var tx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("block","left","block/left",-443712566),cljs.core.select_keys(last_root_block,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),(function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page_name], null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)], null);
frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));

return uuid;
});
frontend.handler.whiteboard.inside_portal_QMARK_ = (function frontend$handler$whiteboard$inside_portal_QMARK_(target){
return (!((dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,".tl-logseq-cp-container") == null)));
});
frontend.handler.whiteboard.closest_shape = (function frontend$handler$whiteboard$closest_shape(target){
var temp__5804__auto__ = dommy.core.closest.cljs$core$IFn$_invoke$arity$2(target,"[data-shape-id]");
if(cljs.core.truth_(temp__5804__auto__)){
var shape_el = temp__5804__auto__;
return shape_el.getAttribute("data-shape-id");
} else {
return null;
}
});
frontend.handler.whiteboard.get_onboard_whiteboard_edn = (function frontend$handler$whiteboard$get_onboard_whiteboard_edn(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(fetch("./whiteboard/onboarding.edn"),(function (res){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(res.text(),(function (text){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.safe_read_string.cljs$core$IFn$_invoke$arity$1(text),(function (edn){
return promesa.protocols._promise(edn);
}));
}));
}));
}));
});
/**
 * Given a tldr, clone the whiteboard page into current active whiteboard
 */
frontend.handler.whiteboard.clone_whiteboard_from_edn = (function frontend$handler$whiteboard$clone_whiteboard_from_edn(var_args){
var G__108996 = arguments.length;
switch (G__108996) {
case 1:
return frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$1 = (function (edn){
var temp__5804__auto__ = frontend.state.active_tldraw_app();
if(cljs.core.truth_(temp__5804__auto__)){
var app = temp__5804__auto__;
return frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$2(edn,app.api);
} else {
return null;
}
}));

(frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$2 = (function (p__108997,api){
var map__108998 = p__108997;
var map__108998__$1 = cljs.core.__destructure_map(map__108998);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108998__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108998__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var page_block = cljs.core.first(pages);
var shapes = frontend.handler.whiteboard.build_shapes(page_block,blocks);
var tldr_page = logseq.graph_parser.whiteboard.page_block__GT_tldr_page(page_block);
var assets = new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(tldr_page);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(tldr_page);
return api.cloneShapesIntoCurrentPage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null)));
}));

(frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$lang$maxFixedArity = 2);

/**
 * When there is no whiteboard, or there is only one whiteboard that has the given page name, we should populate the onboarding shapes
 */
frontend.handler.whiteboard.should_populate_onboarding_whiteboard_QMARK_ = (function frontend$handler$whiteboard$should_populate_onboarding_whiteboard_QMARK_(page_name){
var whiteboards = frontend.db.model.get_all_whiteboards(frontend.state.get_current_repo());
return ((((cljs.core.empty_QMARK_(whiteboards)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(whiteboards))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.first(whiteboards)))))))) && (cljs.core.not(frontend.state.get_onboarding_whiteboard_QMARK_())));
});
frontend.handler.whiteboard.populate_onboarding_whiteboard = (function frontend$handler$whiteboard$populate_onboarding_whiteboard(api){
if((!((api == null)))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.whiteboard.get_onboard_whiteboard_edn(),(function (edn){
return promesa.protocols._promise((function (){
frontend.handler.whiteboard.clone_whiteboard_from_edn.cljs$core$IFn$_invoke$arity$2(edn,api);

return frontend.state.set_onboarding_whiteboard_BANG_(true);
})()
);
}));
})),(function (e){
return console.warn("Failed to populate onboarding whiteboard",e);
}));
} else {
return null;
}
});
frontend.handler.whiteboard.delete_shapes_BANG_ = (function frontend$handler$whiteboard$delete_shapes_BANG_(api,shapes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api.deleteShapes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes));
});
frontend.handler.whiteboard.create_shapes_BANG_ = (function frontend$handler$whiteboard$create_shapes_BANG_(api,shapes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api.createShapes,cljs_bean.core.__GT_js(shapes));
});
frontend.handler.whiteboard.update_shapes_BANG_ = (function frontend$handler$whiteboard$update_shapes_BANG_(api,shapes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api.updateShapes,cljs_bean.core.__GT_js(shapes));
});
frontend.handler.whiteboard.select_shapes = (function frontend$handler$whiteboard$select_shapes(api,ids){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api.selectShapes,ids);
});
frontend.handler.whiteboard.cleanup_BANG_ = (function frontend$handler$whiteboard$cleanup_BANG_(tl_page){
var shapes = tl_page.shapes;
return tl_page.cleanup(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108999_SHARP_){
return p1__108999_SHARP_.id;
}),shapes));
});
frontend.handler.whiteboard.update_bindings_BANG_ = (function frontend$handler$whiteboard$update_bindings_BANG_(tl_page,page_name){
var temp__5804__auto__ = (function (){var G__109000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109000) : frontend.db.entity.call(null,G__109000));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var bindings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null));
if(cljs.core.seq(bindings)){
return tl_page.updateBindings(cljs_bean.core.__GT_js(bindings));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.whiteboard.update_shapes_index_BANG_ = (function frontend$handler$whiteboard$update_shapes_index_BANG_(tl_page,page_name){
var temp__5804__auto__ = (function (){var G__109001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109001) : frontend.db.entity.call(null,G__109001));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var shapes_index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.page","logseq.tldraw.page",-1937463021),new cljs.core.Keyword(null,"shapes-index","shapes-index",-1480605060)], null));
if(cljs.core.seq(shapes_index)){
return tl_page.updateShapesIndex(cljs_bean.core.__GT_js(shapes_index));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.whiteboard.undo_BANG_ = (function frontend$handler$whiteboard$undo_BANG_(p__109002){
var map__109003 = p__109002;
var map__109003__$1 = cljs.core.__destructure_map(map__109003);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109003__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
frontend.modules.editor.undo_redo.pause_listener_BANG_();

try{var temp__5804__auto___109019 = frontend.state.active_tldraw_app();
if(cljs.core.truth_(temp__5804__auto___109019)){
var app_109020 = temp__5804__auto___109019;
var map__109005_109021 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_meta);
var map__109005_109022__$1 = cljs.core.__destructure_map(map__109005_109021);
var page_name_109023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109005_109022__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var deleted_shapes_109024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109005_109022__$1,new cljs.core.Keyword(null,"deleted-shapes","deleted-shapes",-866326203));
var new_shapes_109025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109005_109022__$1,new cljs.core.Keyword(null,"new-shapes","new-shapes",1387380119));
var changed_shapes_109026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109005_109022__$1,new cljs.core.Keyword(null,"changed-shapes","changed-shapes",743121443));
var prev_changed_blocks_109027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109005_109022__$1,new cljs.core.Keyword(null,"prev-changed-blocks","prev-changed-blocks",-990519563));
var whiteboard_op_109028 = new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430).cljs$core$IFn$_invoke$arity$1(tx_meta);
var api_109029 = app_109020.api;
var tl_page_109030 = cljs.core.second(cljs.core.first(app_109020.pages));
if(cljs.core.truth_(api_109029)){
frontend.handler.whiteboard.update_bindings_BANG_(tl_page_109030,page_name_109023);

frontend.handler.whiteboard.update_shapes_index_BANG_(tl_page_109030,page_name_109023);

var G__109006_109031 = whiteboard_op_109028;
var G__109006_109032__$1 = (((G__109006_109031 instanceof cljs.core.Keyword))?G__109006_109031.fqn:null);
switch (G__109006_109032__$1) {
case "group":
frontend.handler.whiteboard.select_shapes(api_109029,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_shapes_109025));

api_109029.unGroup();

break;
case "un-group":
frontend.handler.whiteboard.select_shapes(api_109029,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deleted_shapes_109024], 0)));

api_109029.doGroup();

break;
default:
if(cljs.core.seq(deleted_shapes_109024)){
frontend.handler.whiteboard.create_shapes_BANG_(api_109029,deleted_shapes_109024);
} else {
}

if(cljs.core.seq(new_shapes_109025)){
frontend.handler.whiteboard.delete_shapes_BANG_(api_109029,new_shapes_109025);
} else {
}

if(cljs.core.seq(changed_shapes_109026)){
var prev_shapes_109034 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.tldraw.shape","logseq.tldraw.shape",-771542905)], null));
}),prev_changed_blocks_109027);
frontend.handler.whiteboard.update_shapes_BANG_(api_109029,prev_shapes_109034);
} else {
}

}
} else {
}
} else {
}
}catch (e109004){var e_109035 = e109004;
console.error(e_109035);
}
return frontend.modules.editor.undo_redo.resume_listener_BANG_();
});
frontend.handler.whiteboard.redo_BANG_ = (function frontend$handler$whiteboard$redo_BANG_(p__109007){
var map__109008 = p__109007;
var map__109008__$1 = cljs.core.__destructure_map(map__109008);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109008__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
frontend.modules.editor.undo_redo.pause_listener_BANG_();

try{var temp__5804__auto___109036 = frontend.state.active_tldraw_app();
if(cljs.core.truth_(temp__5804__auto___109036)){
var app_109037 = temp__5804__auto___109036;
var map__109010_109038 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_meta);
var map__109010_109039__$1 = cljs.core.__destructure_map(map__109010_109038);
var page_name_109040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109010_109039__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var deleted_shapes_109041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109010_109039__$1,new cljs.core.Keyword(null,"deleted-shapes","deleted-shapes",-866326203));
var new_shapes_109042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109010_109039__$1,new cljs.core.Keyword(null,"new-shapes","new-shapes",1387380119));
var changed_shapes_109043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109010_109039__$1,new cljs.core.Keyword(null,"changed-shapes","changed-shapes",743121443));
var whiteboard_op_109044 = new cljs.core.Keyword("whiteboard","op","whiteboard/op",-2143996430).cljs$core$IFn$_invoke$arity$1(tx_meta);
var api_109045 = app_109037.api;
var tl_page_109046 = cljs.core.second(cljs.core.first(app_109037.pages));
if(cljs.core.truth_(api_109045)){
frontend.handler.whiteboard.update_bindings_BANG_(tl_page_109046,page_name_109040);

frontend.handler.whiteboard.update_shapes_index_BANG_(tl_page_109046,page_name_109040);

var G__109011_109047 = whiteboard_op_109044;
var G__109011_109048__$1 = (((G__109011_109047 instanceof cljs.core.Keyword))?G__109011_109047.fqn:null);
switch (G__109011_109048__$1) {
case "group":
frontend.handler.whiteboard.select_shapes(api_109045,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_shapes_109042], 0)));

api_109045.doGroup();

break;
case "un-group":
frontend.handler.whiteboard.select_shapes(api_109045,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),deleted_shapes_109041));

api_109045.unGroup();

break;
default:
if(cljs.core.seq(deleted_shapes_109041)){
frontend.handler.whiteboard.delete_shapes_BANG_(api_109045,deleted_shapes_109041);
} else {
}

if(cljs.core.seq(new_shapes_109042)){
frontend.handler.whiteboard.create_shapes_BANG_(api_109045,new_shapes_109042);
} else {
}

if(cljs.core.seq(changed_shapes_109043)){
frontend.handler.whiteboard.update_shapes_BANG_(api_109045,changed_shapes_109043);
} else {
}

}
} else {
}
} else {
}
}catch (e109009){var e_109050 = e109009;
console.error(e_109050);
}
return frontend.modules.editor.undo_redo.resume_listener_BANG_();
});
frontend.handler.whiteboard.onboarding_show = (function frontend$handler$whiteboard$onboarding_show(){
if(cljs.core.not((function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.Keyword("whiteboard","onboarding-tour?","whiteboard/onboarding-tour?",2082551629));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.util.mobile_QMARK_();
}
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","onboarding","whiteboard/onboarding",-1343828989)], null));

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","onboarding-tour?","whiteboard/onboarding-tour?",2082551629)], null),true);

return frontend.storage.set(new cljs.core.Keyword(null,"whiteboard-onboarding-tour?","whiteboard-onboarding-tour?",1650413719),true);
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.whiteboard.js.map
