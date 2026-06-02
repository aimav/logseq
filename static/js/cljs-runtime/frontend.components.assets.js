goog.provide('frontend.components.assets');
frontend.components.assets._get_all_formats = (function frontend$components$assets$_get_all_formats(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115987_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)],[p1__115987_SHARP_,cljs.core.name(p1__115987_SHARP_)]);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(frontend.config.doc_formats,frontend.config.audio_formats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.video_formats,frontend.config.image_formats,frontend.config.markup_formats], 0)));
});
frontend.components.assets.input_auto_complete = rum.core.lazy_build(rum.core.build_defc,(function (p__115991){
var map__115992 = p__115991;
var map__115992__$1 = cljs.core.__destructure_map(map__115992);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var item_cp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"item-cp","item-cp",294728683));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_keydown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495));
var input_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115992__$1,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135));
var vec__115993 = rum.core.use_state(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var _STAR_input_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115993,(0),null);
var set__STAR_input_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115993,(1),null);
var vec__115996 = rum.core.use_state(true);
var input_empty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115996,(0),null);
var set_input_empty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115996,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__115999 = clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input_val));
return (set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1(G__115999) : set_input_empty_QMARK_.call(null,G__115999));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_input_val)], null));

return frontend.components.select.select(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tap-*input-val","tap-*input-val",1531539652),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"item-cp","item-cp",294728683),new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),new cljs.core.Keyword(null,"host-opts","host-opts",-933691505),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"on-input","on-input",-267523366)],[(function (p1__115989_SHARP_){
return (set__STAR_input_val.cljs$core$IFn$_invoke$arity$1 ? set__STAR_input_val.cljs$core$IFn$_invoke$arity$1(p1__115989_SHARP_) : set__STAR_input_val.call(null,p1__115989_SHARP_));
}),on_chosen,item_cp,(function (){var G__116002 = input_opts;
if(cljs.core.fn_QMARK_(on_keydown)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__116002,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__115990_SHARP_){
return (on_keydown.cljs$core$IFn$_invoke$arity$2 ? on_keydown.cljs$core$IFn$_invoke$arity$2(p1__115990_SHARP_,_STAR_input_val) : on_keydown.call(null,p1__115990_SHARP_,_STAR_input_val));
}));
} else {
return G__116002;
}
})(),(function (results){
if(cljs.core.truth_((function (){var and__5041__auto__ = _STAR_input_val;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_input_val))))) && (cljs.core.not(cljs.core.seq(results))));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(_STAR_input_val)], null)], null);
} else {
return results;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cp__input-ac","cp__input-ac",-714359157),class$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-empty-input","is-empty-input",484547677),input_empty_QMARK_], null)], null))], null),false,items,(function (p1__115988_SHARP_){
var G__116003 = clojure.string.blank_QMARK_(p1__115988_SHARP_);
return (set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_input_empty_QMARK_.cljs$core$IFn$_invoke$arity$1(G__116003) : set_input_empty_QMARK_.call(null,G__116003));
})]));
}),null,"frontend.components.assets/input-auto-complete");
frontend.components.assets.confirm_dir_with_alias_name = rum.core.lazy_build(rum.core.build_defc,(function (dir,set_dir_BANG_){
var vec__116004 = rum.core.use_state("");
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116004,(0),null);
var set_val_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116004,(1),null);
var on_submit = (function (){
if(clojure.string.blank_QMARK_(val)){
return null;
} else {
if(cljs.core.not(frontend.handler.assets.get_alias_by_name(val))){
(set_dir_BANG_.cljs$core$IFn$_invoke$arity$3 ? set_dir_BANG_.cljs$core$IFn$_invoke$arity$3(val,dir,null) : set_dir_BANG_.call(null,val,dir,null));

return frontend.state.close_modal_BANG_();
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Alias name of [%s] already exists!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}
});
return daiquiri.core.create_element("div",{'className':"cp__assets-alias-name-content"},[daiquiri.core.create_element("h1",{'className':"text-2xl opacity-90 mb-6"},["What's the alias name of this selected directory?"]),daiquiri.core.create_element("p",null,[daiquiri.core.create_element("strong",null,["Directory path:"]),daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
})},[daiquiri.interpreter.interpret(dir)])]),daiquiri.core.create_element("p",null,[daiquiri.core.create_element("strong",null,["Alias name:"]),daiquiri.core.create_element("input",{'autoFocus':true,'value':val,'placeholder':"eg. Books",'onChange':rum.core.mark_sync_update((function (e){
var G__116014 = frontend.util.trim_safe(e.target.value);
return (set_val_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_BANG_.cljs$core$IFn$_invoke$arity$1(G__116014) : set_val_BANG_.call(null,G__116014));
})),'onKeyUp':(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.which)) && ((!(clojure.string.blank_QMARK_(val)))))){
return on_submit();
} else {
return null;
}
}),'className':"px-1 border rounded"},[])]),(function (){var attrs116009 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(val),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_submit], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116009))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-6","flex","justify-end"], null)], null),attrs116009], 0))):{'className':"pt-6 flex justify-end"}),((cljs.core.map_QMARK_(attrs116009))?null:[daiquiri.interpreter.interpret(attrs116009)]));
})()]);
}),null,"frontend.components.assets/confirm-dir-with-alias-name");
frontend.components.assets.restart_button = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0)));
}),null,"frontend.components.assets/restart-button");
frontend.components.assets.alias_directories = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
var _STAR_ext_editing_dir = new cljs.core.Keyword("frontend.components.assets","ext-editing-dir","frontend.components.assets/ext-editing-dir",-1152145802).cljs$core$IFn$_invoke$arity$1(_state);
var directories = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,frontend.state.sub(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020)));
var pick_exist = frontend.handler.assets.get_alias_by_dir;
var set_dir_BANG_ = (function (name,dir,exts){
if(cljs.core.truth_((function (){var and__5041__auto__ = name;
if(cljs.core.truth_(and__5041__auto__)){
return dir;
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_assets_alias_dirs_BANG_((function (){var exist = (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
if(cljs.core.truth_(exist)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(directories,cljs.core.first(exist),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"exts","exts",-946342126),cljs.core.set(exts)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(directories,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"exts","exts",-946342126),cljs.core.set(exts)], null));
}
})());
} else {
return null;
}
});
var rm_dir = (function (dir){
var temp__5804__auto__ = (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
if(cljs.core.truth_(temp__5804__auto__)){
var exist = temp__5804__auto__;
return frontend.state.set_assets_alias_dirs_BANG_(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(exist),directories));
} else {
return null;
}
});
var del_ext = (function (dir,ext){
var temp__5804__auto__ = (function (){var and__5041__auto__ = ext;
if(cljs.core.truth_(and__5041__auto__)){
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var exist = temp__5804__auto__;
var exts = new cljs.core.Keyword(null,"exts","exts",-946342126).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
var exts__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(exts,cljs.core.PersistentHashSet.createAsIfByAssoc([ext]));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
return set_dir_BANG_(name,dir,exts__$1);
} else {
return null;
}
});
var add_ext = (function (dir,ext){
var temp__5804__auto__ = (function (){var and__5041__auto__ = ext;
if(cljs.core.truth_(and__5041__auto__)){
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(dir) : pick_exist.call(null,dir));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var exist = temp__5804__auto__;
var exts = new cljs.core.Keyword(null,"exts","exts",-946342126).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
var exts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(exts,frontend.util.safe_lower_case(ext));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(exist));
return set_dir_BANG_(name,dir,exts__$1);
} else {
return null;
}
});
var confirm_dir = (function (dir,set_dir_BANG___$1){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.assets.confirm_dir_with_alias_name(dir,set_dir_BANG___$1);
}));
});
return daiquiri.core.create_element("div",{'className':"cp__assets-alias-directories"},[daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$assets$iter__116016(s__116017){
return (new cljs.core.LazySeq(null,(function (){
var s__116017__$1 = s__116017;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116017__$1);
if(temp__5804__auto__){
var s__116017__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116017__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116017__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116019 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116018 = (0);
while(true){
if((i__116018 < size__5519__auto__)){
var map__116020 = cljs.core._nth(c__5518__auto__,i__116018);
var map__116020__$1 = cljs.core.__destructure_map(map__116020);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116020__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var exts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116020__$1,new cljs.core.Keyword(null,"exts","exts",-946342126));
cljs.core.chunk_append(b__116019,daiquiri.core.create_element("li",{'className':"item px-2 py-2"},[daiquiri.core.create_element("div",{'className':"flex justify-between items-center"},[daiquiri.core.create_element("span",{'className':"font-semibold"},[["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')]),daiquiri.core.create_element("div",{'className':"flex items-center space-x-2"},[daiquiri.core.create_element("a",{'onClick':((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"opacity-90 active:opacity-50 text-sm flex space-x-1"},[daiquiri.interpreter.interpret(frontend.ui.icon("folder")),daiquiri.interpreter.interpret(dir)])])]),daiquiri.core.create_element("div",{'className':"flex justify-between items-center"},[daiquiri.core.create_element("div",{'className':"flex mt-2 space-x-2 pr-6"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function frontend$components$assets$iter__116016_$_iter__116021(s__116022){
return (new cljs.core.LazySeq(null,((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
var s__116022__$1 = s__116022;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116022__$1);
if(temp__5804__auto____$1){
var s__116022__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116022__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__116022__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__116024 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__116023 = (0);
while(true){
if((i__116023 < size__5519__auto____$1)){
var ext = cljs.core._nth(c__5518__auto____$1,i__116023);
cljs.core.chunk_append(b__116024,daiquiri.core.create_element("small",{'key':ext,'onClick':((function (i__116023,i__116018,ext,c__5518__auto____$1,size__5519__auto____$1,b__116024,s__116022__$2,temp__5804__auto____$1,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__116023,i__116018,ext,c__5518__auto____$1,size__5519__auto____$1,b__116024,s__116022__$2,temp__5804__auto____$1,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-del"},[(function (){var attrs116025 = ext;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116025))?daiquiri.interpreter.element_attributes(attrs116025):null),((cljs.core.map_QMARK_(attrs116025))?null:[daiquiri.interpreter.interpret(attrs116025)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("circle-minus"))]));

var G__116057 = (i__116023 + (1));
i__116023 = G__116057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116024),frontend$components$assets$iter__116016_$_iter__116021(cljs.core.chunk_rest(s__116022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116024),null);
}
} else {
var ext = cljs.core.first(s__116022__$2);
return cljs.core.cons(daiquiri.core.create_element("small",{'key':ext,'onClick':((function (i__116018,ext,s__116022__$2,temp__5804__auto____$1,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__116018,ext,s__116022__$2,temp__5804__auto____$1,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-del"},[(function (){var attrs116025 = ext;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116025))?daiquiri.interpreter.element_attributes(attrs116025):null),((cljs.core.map_QMARK_(attrs116025))?null:[daiquiri.interpreter.interpret(attrs116025)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("circle-minus"))]),frontend$components$assets$iter__116016_$_iter__116021(cljs.core.rest(s__116022__$2)));
}
} else {
return null;
}
break;
}
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,null,null));
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
;
return iter__5520__auto__(exts);
})()),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,cljs.core.deref(_STAR_ext_editing_dir)))?frontend.components.assets.input_auto_complete(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),frontend.components.assets._get_all_formats(),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"item-cp","item-cp",294728683),((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__116031){
var map__116032 = p__116031;
var map__116032__$1 = cljs.core.__destructure_map(map__116032);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116032__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ext-select-item","div.ext-select-item",38152439),value], null);
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__116033){
var map__116034 = p__116033;
var map__116034__$1 = cljs.core.__destructure_map(map__116034);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116034__$1,new cljs.core.Keyword(null,"value","value",305978217));
add_ext(dir,value);

return cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (e,_STAR_input_val){
var input = e.target;
var G__116035 = e.which;
switch (G__116035) {
case (27):
if((!(clojure.string.blank_QMARK_(input.value)))){
cljs.core.reset_BANG_(_STAR_input_val,"");
} else {
cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
}

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__assets-alias-ext-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"E.g. mp3",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null)], null)):daiquiri.core.create_element("small",{'onClick':((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return cljs.core.reset_BANG_(_STAR_ext_editing_dir,dir);
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-plus"},[daiquiri.interpreter.interpret(frontend.ui.icon("plus")),"Acceptable file extensions"]))]),daiquiri.core.create_element("span",{'className':"ctrls flex space-x-3 text-xs opacity-30 hover:opacity-100 whitespace-nowrap hidden mt-1"},[daiquiri.core.create_element("a",{'onClick':((function (i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return rm_dir(dir);
});})(i__116018,map__116020,map__116020__$1,name,dir,exts,c__5518__auto__,size__5519__auto__,b__116019,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
},[daiquiri.interpreter.interpret(frontend.ui.icon("trash-x"))])])])]));

var G__116059 = (i__116018 + (1));
i__116018 = G__116059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116019),frontend$components$assets$iter__116016(cljs.core.chunk_rest(s__116017__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116019),null);
}
} else {
var map__116036 = cljs.core.first(s__116017__$2);
var map__116036__$1 = cljs.core.__destructure_map(map__116036);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116036__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var exts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116036__$1,new cljs.core.Keyword(null,"exts","exts",-946342126));
return cljs.core.cons(daiquiri.core.create_element("li",{'className':"item px-2 py-2"},[daiquiri.core.create_element("div",{'className':"flex justify-between items-center"},[daiquiri.core.create_element("span",{'className':"font-semibold"},[["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')]),daiquiri.core.create_element("div",{'className':"flex items-center space-x-2"},[daiquiri.core.create_element("a",{'onClick':((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return apis.openPath(dir);
} else {
return null;
}
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"opacity-90 active:opacity-50 text-sm flex space-x-1"},[daiquiri.interpreter.interpret(frontend.ui.icon("folder")),daiquiri.interpreter.interpret(dir)])])]),daiquiri.core.create_element("div",{'className':"flex justify-between items-center"},[daiquiri.core.create_element("div",{'className':"flex mt-2 space-x-2 pr-6"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function frontend$components$assets$iter__116016_$_iter__116037(s__116038){
return (new cljs.core.LazySeq(null,(function (){
var s__116038__$1 = s__116038;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__116038__$1);
if(temp__5804__auto____$1){
var s__116038__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__116038__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116038__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116040 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116039 = (0);
while(true){
if((i__116039 < size__5519__auto__)){
var ext = cljs.core._nth(c__5518__auto__,i__116039);
cljs.core.chunk_append(b__116040,daiquiri.core.create_element("small",{'key':ext,'onClick':((function (i__116039,ext,c__5518__auto__,size__5519__auto__,b__116040,s__116038__$2,temp__5804__auto____$1,map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(i__116039,ext,c__5518__auto__,size__5519__auto__,b__116040,s__116038__$2,temp__5804__auto____$1,map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-del"},[(function (){var attrs116025 = ext;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116025))?daiquiri.interpreter.element_attributes(attrs116025):null),((cljs.core.map_QMARK_(attrs116025))?null:[daiquiri.interpreter.interpret(attrs116025)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("circle-minus"))]));

var G__116060 = (i__116039 + (1));
i__116039 = G__116060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116040),frontend$components$assets$iter__116016_$_iter__116037(cljs.core.chunk_rest(s__116038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116040),null);
}
} else {
var ext = cljs.core.first(s__116038__$2);
return cljs.core.cons(daiquiri.core.create_element("small",{'key':ext,'onClick':((function (ext,s__116038__$2,temp__5804__auto____$1,map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return del_ext(dir,ext);
});})(ext,s__116038__$2,temp__5804__auto____$1,map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-del"},[(function (){var attrs116025 = ext;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116025))?daiquiri.interpreter.element_attributes(attrs116025):null),((cljs.core.map_QMARK_(attrs116025))?null:[daiquiri.interpreter.interpret(attrs116025)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("circle-minus"))]),frontend$components$assets$iter__116016_$_iter__116037(cljs.core.rest(s__116038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
;
return iter__5520__auto__(exts);
})()),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,cljs.core.deref(_STAR_ext_editing_dir)))?frontend.components.assets.input_auto_complete(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),frontend.components.assets._get_all_formats(),new cljs.core.Keyword(null,"close-modal?","close-modal?",-207518383),false,new cljs.core.Keyword(null,"item-cp","item-cp",294728683),((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__116046){
var map__116047 = p__116046;
var map__116047__$1 = cljs.core.__destructure_map(map__116047);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116047__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ext-select-item","div.ext-select-item",38152439),value], null);
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (p__116048){
var map__116049 = p__116048;
var map__116049__$1 = cljs.core.__destructure_map(map__116049);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116049__$1,new cljs.core.Keyword(null,"value","value",305978217));
add_ext(dir,value);

return cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (e,_STAR_input_val){
var input = e.target;
var G__116050 = e.which;
switch (G__116050) {
case (27):
if((!(clojure.string.blank_QMARK_(input.value)))){
cljs.core.reset_BANG_(_STAR_input_val,"");
} else {
cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
}

return frontend.util.stop(e);

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,new cljs.core.Keyword(null,"input-opts","input-opts",1688681135),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"cp__assets-alias-ext-input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"E.g. mp3",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return cljs.core.reset_BANG_(_STAR_ext_editing_dir,null);
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
], null)], null)):daiquiri.core.create_element("small",{'onClick':((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return cljs.core.reset_BANG_(_STAR_ext_editing_dir,dir);
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
,'className':"ext-label is-plus"},[daiquiri.interpreter.interpret(frontend.ui.icon("plus")),"Acceptable file extensions"]))]),daiquiri.core.create_element("span",{'className':"ctrls flex space-x-3 text-xs opacity-30 hover:opacity-100 whitespace-nowrap hidden mt-1"},[daiquiri.core.create_element("a",{'onClick':((function (map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir){
return (function (){
return rm_dir(dir);
});})(map__116036,map__116036__$1,name,dir,exts,s__116017__$2,temp__5804__auto__,_STAR_ext_editing_dir,directories,pick_exist,set_dir_BANG_,rm_dir,del_ext,add_ext,confirm_dir))
},[daiquiri.interpreter.interpret(frontend.ui.icon("trash-x"))])])])]),frontend$components$assets$iter__116016(cljs.core.rest(s__116017__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(directories);
})())]),(function (){var attrs116015 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("+ Add directory",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"openDialog","openDialog",1438895893)], 0)),(function (path){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = clojure.string.blank_QMARK_(path);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return (pick_exist.cljs$core$IFn$_invoke$arity$1 ? pick_exist.cljs$core$IFn$_invoke$arity$1(path) : pick_exist.call(null,path));
}
})())?null:confirm_dir(path,set_dir_BANG_)));
}));
}));
}),new cljs.core.Keyword(null,"small?","small?",95242445),true], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs116015))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-2"], null)], null),attrs116015], 0))):{'className':"pt-2"}),((cljs.core.map_QMARK_(attrs116015))?null:[daiquiri.interpreter.interpret(attrs116015)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.assets","ext-editing-dir","frontend.components.assets/ext-editing-dir",-1152145802))], null),"frontend.components.assets/alias-directories");
frontend.components.assets.settings_content = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
var _STAR_pre_alias_enabled_QMARK_ = new cljs.core.Keyword("frontend.components.assets","alias-enabled?","frontend.components.assets/alias-enabled?",-1555900219).cljs$core$IFn$_invoke$arity$1(_state);
var alias_enabled_QMARK_ = frontend.state.sub(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727));
var alias_enabled_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_pre_alias_enabled_QMARK_),alias_enabled_QMARK_);
return daiquiri.core.create_element("div",{'className':"cp__assets-settings panel-wrap"},[daiquiri.core.create_element("div",{'className':"it"},[daiquiri.core.create_element("label",{'className':"block text-sm font-medium leading-5 opacity-70"},["Alias directories"]),(function (){var attrs116053 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(alias_enabled_QMARK_,(function (){
return frontend.state.set_assets_alias_enabled_BANG_(cljs.core.not(alias_enabled_QMARK_));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116053))?daiquiri.interpreter.element_attributes(attrs116053):null),((cljs.core.map_QMARK_(attrs116053))?null:[daiquiri.interpreter.interpret(attrs116053)]));
})(),(function (){var attrs116054 = ((alias_enabled_changed_QMARK_)?frontend.components.assets.restart_button():null);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116054))?daiquiri.interpreter.element_attributes(attrs116054):null),((cljs.core.map_QMARK_(attrs116054))?null:[daiquiri.interpreter.interpret(attrs116054)]));
})()]),(cljs.core.truth_(alias_enabled_QMARK_)?daiquiri.core.create_element("div",{'className':"pt-4"},[daiquiri.core.create_element("h2",{'className':"font-bold opacity-80"},["Selected directories:"]),frontend.components.assets.alias_directories()]):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727)),new cljs.core.Keyword("frontend.components.assets","alias-enabled?","frontend.components.assets/alias-enabled?",-1555900219))], null),"frontend.components.assets/settings-content");

//# sourceMappingURL=frontend.components.assets.js.map
