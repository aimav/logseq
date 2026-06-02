goog.provide('frontend.components.git');
frontend.components.git.set_git_username_and_email = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.git","username","frontend.components.git/username",363897048));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.git","email","frontend.components.git/email",1650425180));
return daiquiri.core.create_element("div",{'className':"container"},[daiquiri.core.create_element("div",{'className':"text-lg mb-4"},["Git requires to setup your username and email address to commit, both of them will be stored locally."]),daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"leading-6 font-medium"},["Your username:"])])]),daiquiri.core.create_element("input",{'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(username,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2 mb-4"},[]),daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"leading-6 font-medium"},["Your email address:"])])]),daiquiri.core.create_element("input",{'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(email,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),(function (){var attrs117519 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var username__$1 = cljs.core.deref(username);
var email__$1 = cljs.core.deref(email);
if((((!(clojure.string.blank_QMARK_(username__$1)))) && ((!(clojure.string.blank_QMARK_(email__$1)))))){
return frontend.handler.shell.set_git_username_and_email(username__$1,email__$1);
} else {
return null;
}
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117519))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-5","sm:mt-4","flex"], null)], null),attrs117519], 0))):{'className':"mt-5 sm:mt-4 flex"}),((cljs.core.map_QMARK_(attrs117519))?null:[daiquiri.interpreter.interpret(attrs117519)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.git","username","frontend.components.git/username",363897048)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.git","email","frontend.components.git/email",1650425180))], null),"frontend.components.git/set-git-username-and-email");
frontend.components.git.file_version_selector = rum.core.lazy_build(rum.core.build_defc,(function (versions,path,get_content){
var vec__117520 = rum.core.use_state(null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117520,(0),null);
var set_content_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117520,(1),null);
var vec__117523 = rum.core.use_state("HEAD");
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117523,(0),null);
var set_hash_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117523,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((get_content.cljs$core$IFn$_invoke$arity$2 ? get_content.cljs$core$IFn$_invoke$arity$2(hash,path) : get_content.call(null,hash,path)),(function (c){
return promesa.protocols._promise((set_content_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content_BANG_.cljs$core$IFn$_invoke$arity$1(c) : set_content_BANG_.call(null,c)));
}));
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hash,path], null);
}));

return daiquiri.core.create_element("div",{'className':"flex"},[daiquiri.core.create_element("div",{'className':"overflow-y-auto w-48 max-h-[calc(85vh_-_4rem)] "},[daiquiri.core.create_element("div",{'className':"font-bold"},["File history - ",daiquiri.interpreter.interpret(path)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$git$iter__117526(s__117527){
return (new cljs.core.LazySeq(null,(function (){
var s__117527__$1 = s__117527;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117527__$1);
if(temp__5804__auto__){
var s__117527__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117527__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117527__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117529 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117528 = (0);
while(true){
if((i__117528 < size__5519__auto__)){
var line = cljs.core._nth(c__5518__auto__,i__117528);
cljs.core.chunk_append(b__117529,(function (){var vec__117530 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"$$$");
var hash__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117530,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117530,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117530,(2),null);
var hash__$2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash__$1,(8));
return daiquiri.core.create_element("div",{'key':hash__$2,'className':"my-4"},[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"mb-2"},[daiquiri.core.create_element("a",{'onClick':((function (i__117528,vec__117530,hash__$1,title,time,hash__$2,line,c__5518__auto__,size__5519__auto__,b__117529,s__117527__$2,temp__5804__auto__,vec__117520,content,set_content_BANG_,vec__117523,hash,set_hash_BANG_){
return (function (){
return (set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hash_BANG_.cljs$core$IFn$_invoke$arity$1(hash__$2) : set_hash_BANG_.call(null,hash__$2));
});})(i__117528,vec__117530,hash__$1,title,time,hash__$2,line,c__5518__auto__,size__5519__auto__,b__117529,s__117527__$2,temp__5804__auto__,vec__117520,content,set_content_BANG_,vec__117523,hash,set_hash_BANG_))
,'className':"font-medium mr-1 block"},[hash__$2]),daiquiri.interpreter.interpret(title)]),(function (){var attrs117535 = time;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117535))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50"], null)], null),attrs117535], 0))):{'className':"opacity-50"}),((cljs.core.map_QMARK_(attrs117535))?null:[daiquiri.interpreter.interpret(attrs117535)]));
})()]);
})());

var G__117540 = (i__117528 + (1));
i__117528 = G__117540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117529),frontend$components$git$iter__117526(cljs.core.chunk_rest(s__117527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117529),null);
}
} else {
var line = cljs.core.first(s__117527__$2);
return cljs.core.cons((function (){var vec__117536 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"$$$");
var hash__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117536,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117536,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117536,(2),null);
var hash__$2 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash__$1,(8));
return daiquiri.core.create_element("div",{'key':hash__$2,'className':"my-4"},[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"mb-2"},[daiquiri.core.create_element("a",{'onClick':((function (vec__117536,hash__$1,title,time,hash__$2,line,s__117527__$2,temp__5804__auto__,vec__117520,content,set_content_BANG_,vec__117523,hash,set_hash_BANG_){
return (function (){
return (set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hash_BANG_.cljs$core$IFn$_invoke$arity$1(hash__$2) : set_hash_BANG_.call(null,hash__$2));
});})(vec__117536,hash__$1,title,time,hash__$2,line,s__117527__$2,temp__5804__auto__,vec__117520,content,set_content_BANG_,vec__117523,hash,set_hash_BANG_))
,'className':"font-medium mr-1 block"},[hash__$2]),daiquiri.interpreter.interpret(title)]),(function (){var attrs117535 = time;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117535))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50"], null)], null),attrs117535], 0))):{'className':"opacity-50"}),((cljs.core.map_QMARK_(attrs117535))?null:[daiquiri.interpreter.interpret(attrs117535)]));
})()]);
})(),frontend$components$git$iter__117526(cljs.core.rest(s__117527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(versions);
})())]),daiquiri.core.create_element("div",{'className':"flex-1 p-4"},[daiquiri.core.create_element("div",{'style':{'width':(700)},'className':"w-full sm:max-w-lg"},[daiquiri.core.create_element("div",{'className':"font-bold mb-4"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hash], 0)))].join('')]),(function (){var attrs117539 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs117539))?daiquiri.interpreter.element_attributes(attrs117539):null),((cljs.core.map_QMARK_(attrs117539))?null:[daiquiri.interpreter.interpret(attrs117539)]));
})(),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Revert",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file.alter_file(frontend.state.get_current_repo(),path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
})], 0)))])])]);
}),null,"frontend.components.git/file-version-selector");

//# sourceMappingURL=frontend.components.git.js.map
