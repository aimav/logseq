goog.provide('frontend.components.reference');
frontend.components.reference.frequencies_sort = (function frontend$components$reference$frequencies_sort(references){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,(function (p1__114517_SHARP_,p2__114518_SHARP_){
return (p1__114517_SHARP_ > p2__114518_SHARP_);
}),references);
});
frontend.components.reference.filtered_refs = (function frontend$components$reference$filtered_refs(page_name,filters,filters_atom,filtered_references){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.flex-wrap.items-center","div.flex.gap-2.flex-wrap.items-center",-484417061),(function (){var iter__5520__auto__ = (function frontend$components$reference$filtered_refs_$_iter__114520(s__114521){
return (new cljs.core.LazySeq(null,(function (){
var s__114521__$1 = s__114521;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114521__$1);
if(temp__5804__auto__){
var s__114521__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114521__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114521__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114523 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114522 = (0);
while(true){
if((i__114522 < size__5519__auto__)){
var vec__114524 = cljs.core._nth(c__5518__auto__,i__114522);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114524,(0),null);
var ref_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114524,(1),null);
cljs.core.chunk_append(b__114523,(cljs.core.truth_(ref_name)?(function (){var lc_reference = clojure.string.lower_case(ref_name);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ref_name,(cljs.core.truth_(ref_count)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346)," ",ref_count], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__114522,lc_reference,vec__114524,ref_name,ref_count,c__5518__auto__,size__5519__auto__,b__114523,s__114521__$2,temp__5804__auto__){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filters_atom,((function (i__114522,lc_reference,vec__114524,ref_name,ref_count,c__5518__auto__,size__5519__auto__,b__114523,s__114521__$2,temp__5804__auto__){
return (function (p1__114519_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__114519_SHARP_,lc_reference,cljs.core.not(e.shiftKey));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__114519_SHARP_,lc_reference);
}
});})(i__114522,lc_reference,vec__114524,ref_name,ref_count,c__5518__auto__,size__5519__auto__,b__114523,s__114521__$2,temp__5804__auto__))
);

return frontend.handler.page.save_filter_BANG_(page_name,cljs.core.deref(filters_atom));
});})(i__114522,lc_reference,vec__114524,ref_name,ref_count,c__5518__auto__,size__5519__auto__,b__114523,s__114521__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"key","key",-1516042587),ref_name], 0));
})():null));

var G__114576 = (i__114522 + (1));
i__114522 = G__114576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114523),frontend$components$reference$filtered_refs_$_iter__114520(cljs.core.chunk_rest(s__114521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114523),null);
}
} else {
var vec__114527 = cljs.core.first(s__114521__$2);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114527,(0),null);
var ref_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114527,(1),null);
return cljs.core.cons((cljs.core.truth_(ref_name)?(function (){var lc_reference = clojure.string.lower_case(ref_name);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),ref_name,(cljs.core.truth_(ref_count)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346)," ",ref_count], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (lc_reference,vec__114527,ref_name,ref_count,s__114521__$2,temp__5804__auto__){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(filters_atom,(function (p1__114519_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,lc_reference) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__114519_SHARP_,lc_reference,cljs.core.not(e.shiftKey));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__114519_SHARP_,lc_reference);
}
}));

return frontend.handler.page.save_filter_BANG_(page_name,cljs.core.deref(filters_atom));
});})(lc_reference,vec__114527,ref_name,ref_count,s__114521__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"key","key",-1516042587),ref_name], 0));
})():null),frontend$components$reference$filtered_refs_$_iter__114520(cljs.core.rest(s__114521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(filtered_references);
})()], null);
});
frontend.components.reference.filter_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,filters_atom,_STAR_references,page_name){
var filter_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.reference","filterSearch","frontend.components.reference/filterSearch",6950897));
var references = rum.core.react(_STAR_references);
var filtered_references = frontend.components.reference.frequencies_sort(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filter_search),""))?references:frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(references,cljs.core.deref(filter_search),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(500),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),cljs.core.first], 0))));
var filters = rum.core.react(filters_atom);
var includes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__114530){
var vec__114531 = p__114530;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114531,(0),null);
var include_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114531,(1),null);
var page_SINGLEQUOTE_ = frontend.db.model.get_page_original_name(page);
if(cljs.core.truth_(include_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_SINGLEQUOTE_], null);
} else {
return null;
}
}),filters);
var excludes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__114534){
var vec__114535 = p__114534;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114535,(0),null);
var include_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114535,(1),null);
var page_SINGLEQUOTE_ = frontend.db.model.get_page_original_name(page);
if(cljs.core.truth_(include_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_SINGLEQUOTE_], null);
}
}),filters);
return daiquiri.core.create_element("div",{'className':"ls-filters filters"},[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[(function (){var attrs114541 = frontend.ui.icon("filter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114541))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mx-auto","flex-shrink-0","flex","items-center","justify-center","h-12","w-12","rounded-full","bg-gray-200","text-gray-500","sm:mx-0","sm:h-10","sm:w-10"], null)], null),attrs114541], 0))):{'className':"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-500 sm:mx-0 sm:h-10 sm:w-10"}),((cljs.core.map_QMARK_(attrs114541))?null:[daiquiri.interpreter.interpret(attrs114541)]));
})(),daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left pb-2"},[(function (){var attrs114542 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-heading","linked-references/filter-heading",872972306)], 0));
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs114542))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"modal-headline",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-lg","leading-6","font-medium"], null)], null),attrs114542], 0))):{'id':"modal-headline",'className':"text-lg leading-6 font-medium"}),((cljs.core.map_QMARK_(attrs114542))?null:[daiquiri.interpreter.interpret(attrs114542)]));
})(),(function (){var attrs114543 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-directions","linked-references/filter-directions",652165062)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs114543))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-xs"], null)], null),attrs114543], 0))):{'className':"text-xs"}),((cljs.core.map_QMARK_(attrs114543))?null:[daiquiri.interpreter.interpret(attrs114543)]));
})()])]),((cljs.core.seq(filters))?(function (){var attrs114538 = ((cljs.core.seq(includes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.center-items","div.flex.flex-row.flex-wrap.center-items",1436274387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-1.font-medium.py-1","div.mr-1.font-medium.py-1",-483586395),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-includes","linked-references/filter-includes",-398466826)], 0))], null),frontend.components.reference.filtered_refs(page_name,filters,filters_atom,includes)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114538))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__filters","mb-4","ml-2"], null)], null),attrs114538], 0))):{'className':"cp__filters mb-4 ml-2"}),((cljs.core.map_QMARK_(attrs114538))?[((cljs.core.seq(excludes))?daiquiri.core.create_element("div",{'className':"flex flex-row flex-wrap"},[(function (){var attrs114544 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-excludes","linked-references/filter-excludes",-1023807982)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114544))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1","font-medium","py-1"], null)], null),attrs114544], 0))):{'className':"mr-1 font-medium py-1"}),((cljs.core.map_QMARK_(attrs114544))?null:[daiquiri.interpreter.interpret(attrs114544)]));
})(),daiquiri.interpreter.interpret(frontend.components.reference.filtered_refs(page_name,filters,filters_atom,excludes))]):null)]:[daiquiri.interpreter.interpret(attrs114538),((cljs.core.seq(excludes))?daiquiri.core.create_element("div",{'className':"flex flex-row flex-wrap"},[(function (){var attrs114545 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-excludes","linked-references/filter-excludes",-1023807982)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114545))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1","font-medium","py-1"], null)], null),attrs114545], 0))):{'className':"mr-1 font-medium py-1"}),((cljs.core.map_QMARK_(attrs114545))?null:[daiquiri.interpreter.interpret(attrs114545)]));
})(),daiquiri.interpreter.interpret(frontend.components.reference.filtered_refs(page_name,filters,filters_atom,excludes))]):null)]));
})():null),(function (){var attrs114539 = frontend.ui.icon("search");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114539))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__filters-input-panel","flex"], null)], null),attrs114539], 0))):{'className':"cp__filters-input-panel flex"}),((cljs.core.map_QMARK_(attrs114539))?[daiquiri.core.create_element("input",{'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-search","linked-references/filter-search",-1331351362)], 0)),'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(filter_search,frontend.util.evalue(e));
})),'className':"cp__filters-input w-full"},[])]:[daiquiri.interpreter.interpret(attrs114539),daiquiri.core.create_element("input",{'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-search","linked-references/filter-search",-1331351362)], 0)),'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(filter_search,frontend.util.evalue(e));
})),'className':"cp__filters-input w-full"},[])]));
})(),(function (){var all_filters = cljs.core.set(cljs.core.keys(filters));
var refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__114546){
var vec__114547 = p__114546;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114547,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114547,(1),null);
var G__114550 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
return (all_filters.cljs$core$IFn$_invoke$arity$1 ? all_filters.cljs$core$IFn$_invoke$arity$1(G__114550) : all_filters.call(null,G__114550));
}),filtered_references);
if(cljs.core.seq(refs)){
var attrs114540 = frontend.components.reference.filtered_refs(page_name,filters,filters_atom,refs);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114540))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-4"], null)], null),attrs114540], 0))):{'className':"mt-4"}),((cljs.core.map_QMARK_(attrs114540))?null:[daiquiri.interpreter.interpret(attrs114540)]));
} else {
return null;
}
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.reference","filterSearch","frontend.components.reference/filterSearch",6950897))], null),"frontend.components.reference/filter-dialog-inner");
frontend.components.reference.filter_dialog = (function frontend$components$reference$filter_dialog(filters_atom,_STAR_references,page_name){
return (function (){
return frontend.components.reference.filter_dialog_inner(filters_atom,_STAR_references,page_name);
});
});
frontend.components.reference.block_linked_references = rum.core.lazy_build(rum.core.build_defc,(function (block_id){
var e = (function (){var G__114551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__114551) : frontend.db.entity.call(null,G__114551));
})();
var page_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e) == null)));
var ref_blocks = ((page_QMARK_)?frontend.db.utils.group_by_page((function (){var G__114552 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e);
return (frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(G__114552) : frontend.db.get_page_referenced_blocks.call(null,G__114552));
})()):(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.get_block_referenced_blocks.call(null,block_id)));
var ref_hiccup = frontend.components.block.__GT_hiccup(ref_blocks,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",{'className':"references-blocks"},[frontend.components.content.content(block_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.reference/block-linked-references");
frontend.components.reference.references_inner = rum.core.lazy_build(rum.core.build_defc,(function (page_name,filters,filtered_ref_blocks){
var attrs114553 = (function (){var ref_hiccup = frontend.components.block.__GT_hiccup(filtered_ref_blocks,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),page_name,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"filters","filters",974726919),filters], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114553))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["references-blocks"], null)], null),attrs114553], 0))):{'className':"references-blocks"}),((cljs.core.map_QMARK_(attrs114553))?null:[daiquiri.interpreter.interpret(attrs114553)]));
}),null,"frontend.components.reference/references-inner");
frontend.components.reference.references_cp = rum.core.lazy_build(rum.core.build_defc,(function (page_name,filters,filters_atom,filter_state,total,filter_n,filtered_ref_blocks,_STAR_ref_pages){
var threshold = frontend.state.get_linked_references_collapsed_threshold();
var default_collapsed_QMARK_ = (total >= threshold);
var _STAR_collapsed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-1.justify-between.items-center","div.flex.flex-row.flex-1.justify-between.items-center",-2124603115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-medium","h2.font-medium",-613933304),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","reference-count","linked-references/reference-count",610174976),((cljs.core.seq(filters))?filter_n:null),total], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.filter.fade-link","a.filter.fade-link",2055145599),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","filter-heading","linked-references/filter-heading",872972306)], 0)),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (_e){
if(cljs.core.truth_(cljs.core.deref(_STAR_collapsed_QMARK_))){
return cljs.core.reset_BANG_(cljs.core.deref(_STAR_collapsed_QMARK_),false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.reference.filter_dialog(filters_atom,_STAR_ref_pages,page_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], null),frontend.ui.icon("filter",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.empty_QMARK_(filter_state))?"opacity-60 hover:opacity-100":((cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.vals(filter_state)))?"text-success":((cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.vals(filter_state)))?"text-error":"text-warning"
))),new cljs.core.Keyword(null,"size","size",1098693007),(22)], null))], null)], null),(function (){
return frontend.components.reference.references_inner(page_name,filters,filtered_ref_blocks);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),default_collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true,new cljs.core.Keyword(null,"init-collapsed","init-collapsed",-220931385),(function (collapsed_atom){
return cljs.core.reset_BANG_(_STAR_collapsed_QMARK_,collapsed_atom);
})], null));
}),null,"frontend.components.reference/references-cp");
frontend.components.reference.get_filtered_children = (function frontend$components$reference$get_filtered_children(block,parent__GT_blocks){
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.set((function (){var blocks = children;
var result = cljs.core.vec(children);
while(true){
if(cljs.core.empty_QMARK_(blocks)){
return result;
} else {
var fb = cljs.core.first(blocks);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(fb));
var G__114577 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children__$1,cljs.core.rest(blocks));
var G__114578 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,fb);
blocks = G__114577;
result = G__114578;
continue;
}
break;
}
})());
});
frontend.components.reference.sub_page_properties_changed = rum.core.lazy_build(rum.core.build_defc,(function (page_name,v,filters_atom){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.reset_BANG_(filters_atom,frontend.handler.page.get_filters((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name,v,filters_atom], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.reference/sub-page-properties-changed");
frontend.components.reference.references_STAR_ = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name){
if(cljs.core.truth_(page_name)){
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_props_v = frontend.state.sub_page_properties_changed(page_name__$1);
var _STAR_ref_pages = new cljs.core.Keyword("frontend.components.reference","ref-pages","frontend.components.reference/ref-pages",-1178245116).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var filters_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.reference","filters","frontend.components.reference/filters",-526646216));
var filter_state = rum.core.react(filters_atom);
var ref_blocks = (frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.get_page_referenced_blocks.call(null,page_name__$1));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__114557 = repo;
var G__114558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__114557,G__114558) : frontend.db.entity.call(null,G__114557,G__114558));
})());
var aliases = (frontend.db.page_alias_set.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_alias_set.cljs$core$IFn$_invoke$arity$2(repo,page_name__$1) : frontend.db.page_alias_set.call(null,repo,page_name__$1));
var aliases_exclude_self = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]),aliases));
var top_level_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.some(aliases,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(b))));
}),ref_blocks);
var top_level_blocks_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),top_level_blocks));
var filters = ((cljs.core.seq(filter_state))?cljs.core.update_vals(cljs.core.group_by(cljs.core.second,filter_state),(function (p1__114556_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__114556_SHARP_);
})):null);
var filtered_ref_blocks = frontend.handler.block.get_filtered_ref_blocks_with_parents(ref_blocks,frontend.handler.block.filter_blocks(ref_blocks,filters));
var total = cljs.core.count(top_level_blocks);
var filtered_top_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
var G__114559 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
return (top_level_blocks_ids.cljs$core$IFn$_invoke$arity$1 ? top_level_blocks_ids.cljs$core$IFn$_invoke$arity$1(G__114559) : top_level_blocks_ids.call(null,G__114559));
}),filtered_ref_blocks);
var filter_n = cljs.core.count(filtered_top_blocks);
var parent__GT_blocks = cljs.core.group_by((function (x){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064)) : x.call(null,new cljs.core.Keyword("block","parent","block/parent",-918309064))));
}),filtered_ref_blocks);
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__114560){
var vec__114561 = p__114560;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114561,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114561,(1),null);
var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)));
}),blocks);
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var filtered_children = frontend.components.reference.get_filtered_children(block,parent__GT_blocks);
var refs = ((cljs.core.contains_QMARK_(top_level_blocks_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block))))?null:frontend.handler.block.get_blocks_refed_pages(aliases,cljs.core.cons(block,filtered_children)));
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.modules.outliner.tree.block_entity__GT_map(block),new cljs.core.Keyword("block","children","block/children",-1040716209),filtered_children);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_SINGLEQUOTE_,refs], null);
}),blocks__$1);
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,result);
var page_SINGLEQUOTE_ = ((cljs.core.contains_QMARK_(aliases_exclude_self,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page)], null):page);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_SINGLEQUOTE_,blocks_SINGLEQUOTE_], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
}),cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),filtered_top_blocks));
var filtered_ref_blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,result);
var ref_pages = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))));
cljs.core.reset_BANG_(_STAR_ref_pages,ref_pages);

if(((cljs.core.seq(filter_state)) || ((filter_n > (0))))){
return daiquiri.core.create_element("div",{'className':"references page-linked flex-1 flex-row"},[frontend.components.reference.sub_page_properties_changed(page_name__$1,page_props_v,filters_atom),daiquiri.core.create_element("div",{'className':"content pt-6"},[frontend.components.reference.references_cp(page_name__$1,filters,filters_atom,filter_state,total,filter_n,filtered_ref_blocks_SINGLEQUOTE_,_STAR_ref_pages)])]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.reference","ref-pages","frontend.components.reference/ref-pages",-1178245116)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var page_name = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var filters = (cljs.core.truth_(page_name)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.reference","filters","frontend.components.reference/filters",-526646216),filters);
})], null)], null),"frontend.components.reference/references*");
frontend.components.reference.references = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
return frontend.ui.catch_error(frontend.ui.component_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("linked-references","unexpected-error","linked-references/unexpected-error",-623512709)], 0))),frontend.ui.lazy_visible((function (){
return frontend.components.reference.references_STAR_(page_name);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-id","debug-id",-938947038),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)," references"].join('')], null)));
}),null,"frontend.components.reference/references");
frontend.components.reference.unlinked_references_aux = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name,_n_ref){
var ref_blocks = (frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_unlinked_references.call(null,page_name));
var attrs114564 = (function (){var ref_hiccup = frontend.components.block.__GT_hiccup(ref_blocks,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"-unlinked-"].join(''),new cljs.core.Keyword(null,"ref?","ref?",1932693720),true,new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),true,new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box], null),cljs.core.PersistentArrayMap.EMPTY);
return frontend.components.content.content(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),ref_hiccup], null));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs114564))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["references-blocks"], null)], null),attrs114564], 0))):{'className':"references-blocks"}),((cljs.core.map_QMARK_(attrs114564))?null:[daiquiri.interpreter.interpret(attrs114564)]));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
cljs.core.reset_BANG_(cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__5520__auto__ = (function frontend$components$reference$iter__114565(s__114566){
return (new cljs.core.LazySeq(null,(function (){
var s__114566__$1 = s__114566;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__114566__$1);
if(temp__5804__auto__){
var s__114566__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__114566__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__114566__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__114568 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__114567 = (0);
while(true){
if((i__114567 < size__5519__auto__)){
var vec__114569 = cljs.core._nth(c__5518__auto__,i__114567);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114569,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114569,(1),null);
cljs.core.chunk_append(b__114568,cljs.core.count(rfs));

var G__114579 = (i__114567 + (1));
i__114567 = G__114579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__114568),frontend$components$reference$iter__114565(cljs.core.chunk_rest(s__114566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__114568),null);
}
} else {
var vec__114572 = cljs.core.first(s__114566__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114572,(0),null);
var rfs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114572,(1),null);
return cljs.core.cons(cljs.core.count(rfs),frontend$components$reference$iter__114565(cljs.core.rest(s__114566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__((function (){var G__114575 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return (frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_unlinked_references.cljs$core$IFn$_invoke$arity$1(G__114575) : frontend.db.get_page_unlinked_references.call(null,G__114575));
})());
})()));

return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
});
})], null)], null),"frontend.components.reference/unlinked-references-aux");
frontend.components.reference.unlinked_references = rum.core.lazy_build(rum.core.build_defcs,(function (state,page_name){
var n_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186));
if(cljs.core.truth_(page_name)){
var page_name__$1 = clojure.string.lower_case(page_name);
return daiquiri.core.create_element("div",{'className':"references page-unlinked mt-6 flex-1 flex-row"},[daiquiri.core.create_element("div",{'className':"content flex-1"},[frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.font-medium","h2.font-medium",-613933304),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("unlinked-references","reference-count","unlinked-references/reference-count",-1425498489),cljs.core.deref(n_ref)], 0))], null),(function (){
return frontend.components.reference.unlinked_references_aux(page_name__$1,n_ref);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.reference","n-ref","frontend.components.reference/n-ref",318098186))], null),"frontend.components.reference/unlinked-references");

//# sourceMappingURL=frontend.components.reference.js.map
