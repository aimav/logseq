goog.provide('frontend.search');
goog.scope(function(){
  frontend.search.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.get_engine = (function frontend$search$get_engine(repo){
return frontend.search.agency.__GT_Agency(repo);
});
frontend.search.str_len_distance = (function frontend$search$str_len_distance(s1,s2){
var c1 = cljs.core.count(s1);
var c2 = cljs.core.count(s2);
var maxed = (function (){var x__5128__auto__ = c1;
var y__5129__auto__ = c2;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var mined = (function (){var x__5131__auto__ = c1;
var y__5132__auto__ = c2;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return ((1) - ((maxed - mined) / maxed));
});
frontend.search.MAX_STRING_LENGTH = 1000.0;
frontend.search.clean_str = (function frontend$search$clean_str(s){
return clojure.string.replace(clojure.string.lower_case(s),/[\[ \\\/_\]\(\)]+/,"");
});
frontend.search.escape_str = frontend.regex.escape;
frontend.search.char_array = (function frontend$search$char_array(s){
return cljs_bean.core.__GT_js(cljs.core.seq(s));
});
frontend.search.score = (function frontend$search$score(oquery,ostr){
var query = frontend.search.clean_str(oquery);
var str = frontend.search.clean_str(ostr);
var q = cljs.core.seq(frontend.search.char_array(query));
var s = cljs.core.seq(frontend.search.char_array(str));
var mult = (1);
var idx = frontend.search.MAX_STRING_LENGTH;
var score = (0);
while(true){
if(cljs.core.empty_QMARK_(q)){
return ((score + frontend.search.str_len_distance(query,str)) + ((((0) <= ostr.indexOf(oquery)))?frontend.search.MAX_STRING_LENGTH:(0)));
} else {
if(cljs.core.empty_QMARK_(s)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(q),cljs.core.first(s))){
var G__102078 = cljs.core.rest(q);
var G__102079 = cljs.core.rest(s);
var G__102080 = (mult + (1));
var G__102081 = (idx - (1));
var G__102082 = (mult + score);
q = G__102078;
s = G__102079;
mult = G__102080;
idx = G__102081;
score = G__102082;
continue;
} else {
var G__102083 = q;
var G__102084 = cljs.core.rest(s);
var G__102085 = (1);
var G__102086 = (idx - (1));
var G__102087 = score;
q = G__102083;
s = G__102084;
mult = G__102085;
idx = G__102086;
score = G__102087;
continue;
}

}
}
break;
}
});
frontend.search.fuzzy_search = (function frontend$search$fuzzy_search(var_args){
var args__5772__auto__ = [];
var len__5766__auto___102088 = arguments.length;
var i__5767__auto___102089 = (0);
while(true){
if((i__5767__auto___102089 < len__5766__auto___102088)){
args__5772__auto__.push((arguments[i__5767__auto___102089]));

var G__102090 = (i__5767__auto___102089 + (1));
i__5767__auto___102089 = G__102090;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic = (function (data,query,p__102041){
var map__102042 = p__102041;
var map__102042__$1 = cljs.core.__destructure_map(map__102042);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102042__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var extract_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102042__$1,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723));
var query__$1 = frontend.util.search_normalize(query,frontend.state.enable_search_remove_accents_QMARK_());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__102037_SHARP_){
return ((0) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__102037_SHARP_));
}),(function (){var iter__5520__auto__ = (function frontend$search$iter__102043(s__102044){
return (new cljs.core.LazySeq(null,(function (){
var s__102044__$1 = s__102044;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__102044__$1);
if(temp__5804__auto__){
var s__102044__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__102044__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__102044__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__102046 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__102045 = (0);
while(true){
if((i__102045 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__102045);
cljs.core.chunk_append(b__102046,(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s,frontend.state.enable_search_remove_accents_QMARK_()))], null);
})());

var G__102091 = (i__102045 + (1));
i__102045 = G__102091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__102046),frontend$search$iter__102043(cljs.core.chunk_rest(s__102044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__102046),null);
}
} else {
var item = cljs.core.first(s__102044__$2);
return cljs.core.cons((function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(extract_fn)?(extract_fn.cljs$core$IFn$_invoke$arity$1 ? extract_fn.cljs$core$IFn$_invoke$arity$1(item) : extract_fn.call(null,item)):item));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),item,new cljs.core.Keyword(null,"score","score",-1963588780),frontend.search.score(query__$1,frontend.util.search_normalize(s,frontend.state.enable_search_remove_accents_QMARK_()))], null);
})(),frontend$search$iter__102043(cljs.core.rest(s__102044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(data);
})()))));
}));

(frontend.search.fuzzy_search.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.search.fuzzy_search.cljs$lang$applyTo = (function (seq102038){
var G__102039 = cljs.core.first(seq102038);
var seq102038__$1 = cljs.core.next(seq102038);
var G__102040 = cljs.core.first(seq102038__$1);
var seq102038__$2 = cljs.core.next(seq102038__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102039,G__102040,seq102038__$2);
}));

frontend.search.block_search = (function frontend$search$block_search(repo,q,option){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
var q__$1 = frontend.util.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_());
var q__$2 = (cljs.core.truth_(frontend.util.electron_QMARK_())?q__$1:(frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1 ? frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1(q__$1) : frontend.search.escape_str.call(null,q__$1)));
if(clojure.string.blank_QMARK_(q__$2)){
return null;
} else {
return engine.frontend$search$protocol$Engine$query$arity$3(null,q__$2,option);
}
} else {
return null;
}
});
frontend.search.page_content_search = (function frontend$search$page_content_search(repo,q,option){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
var q__$1 = frontend.util.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_());
var q__$2 = (cljs.core.truth_(frontend.util.electron_QMARK_())?q__$1:(frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1 ? frontend.search.escape_str.cljs$core$IFn$_invoke$arity$1(q__$1) : frontend.search.escape_str.call(null,q__$1)));
if(clojure.string.blank_QMARK_(q__$2)){
return null;
} else {
return engine.frontend$search$protocol$Engine$query_page$arity$3(null,q__$2,option);
}
} else {
return null;
}
});
frontend.search.transact_blocks_BANG_ = (function frontend$search$transact_blocks_BANG_(repo,data){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
return engine.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2(null,data);
} else {
return null;
}
});
/**
 * Transact pages to search engine
 * :pages-to-remove-set the set of pages to remove (not include those to update)
 * :pages-to-add        the page entities to add
 */
frontend.search.transact_pages_BANG_ = (function frontend$search$transact_pages_BANG_(repo,data){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
return engine.frontend$search$protocol$Engine$transact_pages_BANG_$arity$2(null,data);
} else {
return null;
}
});
/**
 * Check if two strings points toward same search result
 */
frontend.search.exact_matched_QMARK_ = (function frontend$search$exact_matched_QMARK_(q,match){
if(((typeof q === 'string') && (typeof match === 'string'))){
return cljs.core.boolean$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (coll,char$){
var coll_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__102047_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__102047_SHARP_);
}),coll);
if(cljs.core.seq(coll_SINGLEQUOTE_)){
return cljs.core.rest(coll_SINGLEQUOTE_);
} else {
return cljs.core.reduced(false);
}
}),cljs.core.seq(frontend.util.search_normalize(match,frontend.state.enable_search_remove_accents_QMARK_())),cljs.core.seq(frontend.util.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_()))));
} else {
return null;
}
});
/**
 * Return a list of page names that match the query
 */
frontend.search.page_search = (function frontend$search$page_search(var_args){
var G__102049 = arguments.length;
switch (G__102049) {
case 1:
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.page_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.page_search.cljs$core$IFn$_invoke$arity$2(q,(100));
}));

(frontend.search.page_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var q__$1 = frontend.util.search_normalize(q,frontend.state.enable_search_remove_accents_QMARK_());
var q__$2 = frontend.search.clean_str(q__$1);
if(clojure.string.blank_QMARK_(q__$2)){
return null;
} else {
var indice = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.search.db.make_pages_title_indice_BANG_();
}
})();
var result = cljs_bean.core.__GT_clj(indice.search(q__$2,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (original_name){
return frontend.search.exact_matched_QMARK_(q__$2,original_name);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__102050){
var map__102051 = p__102050;
var map__102051__$1 = cljs.core.__destructure_map(map__102051);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102051__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.Keyword(null,"original-name","original-name",-1427702839).cljs$core$IFn$_invoke$arity$1(item);
}),frontend.util.distinct_by((function (i){
return clojure.string.trim(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
}),result))))));
}
} else {
return null;
}
}));

(frontend.search.page_search.cljs$lang$maxFixedArity = 2);

frontend.search.file_search = (function frontend$search$file_search(var_args){
var G__102053 = arguments.length;
switch (G__102053) {
case 1:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(q,(3));
}));

(frontend.search.file_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
var q__$1 = frontend.search.clean_str(q);
if(clojure.string.blank_QMARK_(q__$1)){
return null;
} else {
var mldoc_exts = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,logseq.graph_parser.config.mldoc_support_formats));
var files = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var G__102054 = frontend.util.get_file_ext(file);
return (mldoc_exts.cljs$core$IFn$_invoke$arity$1 ? mldoc_exts.cljs$core$IFn$_invoke$arity$1(G__102054) : mldoc_exts.call(null,G__102054));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__102055 = frontend.state.get_current_repo();
return (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(G__102055) : frontend.db.get_files.call(null,G__102055));
})()));
if(cljs.core.seq(files)){
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(files,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
} else {
return null;
}
}
}));

(frontend.search.file_search.cljs$lang$maxFixedArity = 2);

frontend.search.template_search = (function frontend$search$template_search(var_args){
var G__102057 = arguments.length;
switch (G__102057) {
case 1:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.template_search.cljs$core$IFn$_invoke$arity$2(q,(100));
}));

(frontend.search.template_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
if(cljs.core.truth_(q)){
var q__$1 = frontend.search.clean_str(q);
var templates = (frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_templates.call(null));
if(cljs.core.seq(templates)){
var result = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(templates),q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
return cljs.core.vec(cljs.core.select_keys(templates,result));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.template_search.cljs$lang$maxFixedArity = 2);

frontend.search.get_all_properties = (function frontend$search$get_all_properties(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__102058_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__102058_SHARP_),(1));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.property.hidden_properties(),frontend.db.model.get_all_properties()));
});
frontend.search.property_search = (function frontend$search$property_search(var_args){
var G__102060 = arguments.length;
switch (G__102060) {
case 1:
return frontend.search.property_search.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.search.property_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.property_search.cljs$core$IFn$_invoke$arity$1 = (function (q){
return frontend.search.property_search.cljs$core$IFn$_invoke$arity$2(q,(100));
}));

(frontend.search.property_search.cljs$core$IFn$_invoke$arity$2 = (function (q,limit){
if(cljs.core.truth_(q)){
var q__$1 = frontend.search.clean_str(q);
var properties = frontend.search.get_all_properties();
if(cljs.core.seq(properties)){
if(clojure.string.blank_QMARK_(q__$1)){
return properties;
} else {
var result = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(properties,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
return cljs.core.vec(result);
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.property_search.cljs$lang$maxFixedArity = 2);

frontend.search.property_value_search = (function frontend$search$property_value_search(var_args){
var G__102062 = arguments.length;
switch (G__102062) {
case 2:
return frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$2 = (function (property,q){
return frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$3(property,q,(100));
}));

(frontend.search.property_value_search.cljs$core$IFn$_invoke$arity$3 = (function (property,q,limit){
if(cljs.core.truth_(q)){
var q__$1 = frontend.search.clean_str(q);
var result = frontend.db.model.get_property_values(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property));
if(cljs.core.seq(result)){
if(clojure.string.blank_QMARK_(q__$1)){
return result;
} else {
var result__$1 = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(result,q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], 0));
return cljs.core.vec(result__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.property_value_search.cljs$lang$maxFixedArity = 3);

frontend.search.get_pages_from_datoms_impl = (function frontend$search$get_pages_from_datoms_impl(pages){
var pages_result = (function (){var G__102063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null);
var G__102064 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),pages));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__102063,G__102064) : frontend.db.pull_many.call(null,G__102063,G__102064));
})();
var pages_to_add_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
var pages_to_add = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.contains_QMARK_(pages_to_add_set,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
}),pages_result))));
var pages_to_remove_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
var pages_to_remove_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),pages)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pages-to-add","pages-to-add",-707496279),pages_to_add,new cljs.core.Keyword(null,"pages-to-remove-set","pages-to-remove-set",-722220438),pages_to_remove_set,new cljs.core.Keyword(null,"pages-to-add-id-set","pages-to-add-id-set",-10290495),pages_to_add_set,new cljs.core.Keyword(null,"pages-to-remove-id-set","pages-to-remove-id-set",-1251089837),pages_to_remove_id_set], null);
});
frontend.search.get_blocks_from_datoms_impl = (function frontend$search$get_blocks_from_datoms_impl(blocks){
if(cljs.core.seq(blocks)){
var blocks_result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
}),(function (){var G__102065 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","page","block/page",822314108)], null);
var G__102066 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),blocks));
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$2(G__102065,G__102066) : frontend.db.pull_many.call(null,G__102065,G__102066));
})());
var blocks_to_add_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),blocks)));
var blocks_to_add = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.block__GT_index,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.contains_QMARK_(blocks_to_add_set,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}),blocks_result)));
var blocks_to_remove_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added","added",2057651688),blocks)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009),blocks_to_remove_set,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792),blocks_to_add], null);
} else {
return null;
}
});
frontend.search.get_direct_blocks_and_pages = (function frontend$search$get_direct_blocks_and_pages(tx_report){
var data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","content","block/content",-161885195),null,new cljs.core.Keyword("block","name","block/name",1619760316),null,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
}),data);
if(cljs.core.seq(datoms)){
var datoms__$1 = cljs.core.group_by(new cljs.core.Keyword(null,"a","a",-2123407586),datoms);
var blocks = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(datoms__$1);
var pages = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(datoms__$1),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(datoms__$1));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.search.get_blocks_from_datoms_impl(blocks),frontend.search.get_pages_from_datoms_impl(pages)], 0));
} else {
return null;
}
});
/**
 * Return the set of pages that will have content updated
 */
frontend.search.get_indirect_pages = (function frontend$search$get_indirect_pages(tx_report){
var data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
var and__5041__auto__ = new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","content","file/content",12680964),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
} else {
return and__5041__auto__;
}
}),data);
if(cljs.core.seq(datoms)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (datom){
var tar_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_file","block/_file",-172791231).cljs$core$IFn$_invoke$arity$1(frontend.modules.datascript_report.core.safe_pull(tar_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_file","block/_file",-172791231)], null),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)))));
if(cljs.core.truth_(temp__5804__auto__)){
var page_id = temp__5804__auto__;
return frontend.modules.datascript_report.core.safe_pull(tar_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","content","file/content",12680964)], null)], null)], null),page_id);
} else {
return null;
}
}),datoms));
} else {
return null;
}
});
frontend.search.sync_search_indice_BANG_ = (function frontend$search$sync_search_indice_BANG_(repo,tx_report){
var map__102067 = frontend.search.get_direct_blocks_and_pages(tx_report);
var map__102067__$1 = cljs.core.__destructure_map(map__102067);
var pages_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102067__$1,new cljs.core.Keyword(null,"pages-to-add","pages-to-add",-707496279));
var pages_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102067__$1,new cljs.core.Keyword(null,"pages-to-remove-set","pages-to-remove-set",-722220438));
var pages_to_remove_id_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102067__$1,new cljs.core.Keyword(null,"pages-to-remove-id-set","pages-to-remove-id-set",-1251089837));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102067__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102067__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var updated_pages = frontend.search.get_indirect_pages(tx_report);
if(((cljs.core.seq(pages_to_add)) || (cljs.core.seq(pages_to_remove_set)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__102068_102097 = cljs.core.seq(pages_to_remove_set);
var chunk__102069_102098 = null;
var count__102070_102099 = (0);
var i__102071_102100 = (0);
while(true){
if((i__102071_102100 < count__102070_102099)){
var page_name_102101 = chunk__102069_102098.cljs$core$IIndexed$_nth$arity$2(null,i__102071_102100);
indice.remove(((function (seq__102068_102097,chunk__102069_102098,count__102070_102099,i__102071_102100,page_name_102101,map__102067,map__102067__$1,pages_to_add,pages_to_remove_set,pages_to_remove_id_set,blocks_to_add,blocks_to_remove_set,updated_pages){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_102101),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__102068_102097,chunk__102069_102098,count__102070_102099,i__102071_102100,page_name_102101,map__102067,map__102067__$1,pages_to_add,pages_to_remove_set,pages_to_remove_id_set,blocks_to_add,blocks_to_remove_set,updated_pages))
);


var G__102102 = seq__102068_102097;
var G__102103 = chunk__102069_102098;
var G__102104 = count__102070_102099;
var G__102105 = (i__102071_102100 + (1));
seq__102068_102097 = G__102102;
chunk__102069_102098 = G__102103;
count__102070_102099 = G__102104;
i__102071_102100 = G__102105;
continue;
} else {
var temp__5804__auto___102106 = cljs.core.seq(seq__102068_102097);
if(temp__5804__auto___102106){
var seq__102068_102107__$1 = temp__5804__auto___102106;
if(cljs.core.chunked_seq_QMARK_(seq__102068_102107__$1)){
var c__5565__auto___102108 = cljs.core.chunk_first(seq__102068_102107__$1);
var G__102109 = cljs.core.chunk_rest(seq__102068_102107__$1);
var G__102110 = c__5565__auto___102108;
var G__102111 = cljs.core.count(c__5565__auto___102108);
var G__102112 = (0);
seq__102068_102097 = G__102109;
chunk__102069_102098 = G__102110;
count__102070_102099 = G__102111;
i__102071_102100 = G__102112;
continue;
} else {
var page_name_102113 = cljs.core.first(seq__102068_102107__$1);
indice.remove(((function (seq__102068_102097,chunk__102069_102098,count__102070_102099,i__102071_102100,page_name_102113,seq__102068_102107__$1,temp__5804__auto___102106,map__102067,map__102067__$1,pages_to_add,pages_to_remove_set,pages_to_remove_id_set,blocks_to_add,blocks_to_remove_set,updated_pages){
return (function (page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(page_name_102113),frontend.util.safe_page_name_sanity_lc(frontend.search.goog$module$goog$object.get(page,"original-name")));
});})(seq__102068_102097,chunk__102069_102098,count__102070_102099,i__102071_102100,page_name_102113,seq__102068_102107__$1,temp__5804__auto___102106,map__102067,map__102067__$1,pages_to_add,pages_to_remove_set,pages_to_remove_id_set,blocks_to_add,blocks_to_remove_set,updated_pages))
);


var G__102114 = cljs.core.next(seq__102068_102107__$1);
var G__102115 = null;
var G__102116 = (0);
var G__102117 = (0);
seq__102068_102097 = G__102114;
chunk__102069_102098 = G__102115;
count__102070_102099 = G__102116;
i__102071_102100 = G__102117;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(pages_to_add)){
var seq__102072_102118 = cljs.core.seq(pages_to_add);
var chunk__102073_102119 = null;
var count__102074_102120 = (0);
var i__102075_102121 = (0);
while(true){
if((i__102075_102121 < count__102074_102120)){
var page_102122 = chunk__102073_102119.cljs$core$IIndexed$_nth$arity$2(null,i__102075_102121);
indice.add(cljs_bean.core.__GT_js(page_102122));


var G__102123 = seq__102072_102118;
var G__102124 = chunk__102073_102119;
var G__102125 = count__102074_102120;
var G__102126 = (i__102075_102121 + (1));
seq__102072_102118 = G__102123;
chunk__102073_102119 = G__102124;
count__102074_102120 = G__102125;
i__102075_102121 = G__102126;
continue;
} else {
var temp__5804__auto___102127 = cljs.core.seq(seq__102072_102118);
if(temp__5804__auto___102127){
var seq__102072_102128__$1 = temp__5804__auto___102127;
if(cljs.core.chunked_seq_QMARK_(seq__102072_102128__$1)){
var c__5565__auto___102129 = cljs.core.chunk_first(seq__102072_102128__$1);
var G__102130 = cljs.core.chunk_rest(seq__102072_102128__$1);
var G__102131 = c__5565__auto___102129;
var G__102132 = cljs.core.count(c__5565__auto___102129);
var G__102133 = (0);
seq__102072_102118 = G__102130;
chunk__102073_102119 = G__102131;
count__102074_102120 = G__102132;
i__102075_102121 = G__102133;
continue;
} else {
var page_102134 = cljs.core.first(seq__102072_102128__$1);
indice.add(cljs_bean.core.__GT_js(page_102134));


var G__102135 = cljs.core.next(seq__102072_102128__$1);
var G__102136 = null;
var G__102137 = (0);
var G__102138 = (0);
seq__102072_102118 = G__102135;
chunk__102073_102119 = G__102136;
count__102074_102120 = G__102137;
i__102075_102121 = G__102138;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return indice;
}));
} else {
}

if(((cljs.core.seq(blocks_to_add)) || (cljs.core.seq(blocks_to_remove_set)))){
frontend.search.transact_blocks_BANG_(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009),blocks_to_remove_set,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792),blocks_to_add], null));
} else {
}

if(((cljs.core.seq(pages_to_remove_id_set)) || (cljs.core.seq(updated_pages)))){
var indice_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.page__GT_index,updated_pages);
var invalid_set = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (updated,indiced){
if(cljs.core.truth_(indiced)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(updated);
}
}),updated_pages,indice_pages)));
var pages_to_add__$1 = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,indice_pages));
var pages_to_remove_set__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(pages_to_remove_id_set,invalid_set);
return frontend.search.transact_pages_BANG_(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages-to-remove-set","pages-to-remove-set",-722220438),pages_to_remove_set__$1,new cljs.core.Keyword(null,"pages-to-add","pages-to-add",-707496279),pages_to_add__$1], null));
} else {
return null;
}
});
frontend.search.rebuild_indices_BANG_ = (function frontend$search$rebuild_indices_BANG_(var_args){
var G__102077 = arguments.length;
switch (G__102077) {
case 0:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
var page_titles = frontend.search.db.make_pages_title_indice_BANG_();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(engine.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1(null),(function (blocks){
return promesa.protocols._promise((function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),page_titles,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc,repo,result);

return frontend.search.db.indices;
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.search.rebuild_indices_BANG_.cljs$lang$maxFixedArity = 1);

frontend.search.reset_indice_BANG_ = (function frontend$search$reset_indice_BANG_(repo){
var temp__5804__auto___102140 = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto___102140)){
var engine_102141 = temp__5804__auto___102140;
engine_102141.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1(null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),null);
});
frontend.search.remove_db_BANG_ = (function frontend$search$remove_db_BANG_(repo){
var temp__5804__auto__ = frontend.search.get_engine(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var engine = temp__5804__auto__;
return engine.frontend$search$protocol$Engine$remove_db_BANG_$arity$1(null);
} else {
return null;
}
});

//# sourceMappingURL=frontend.search.js.map
