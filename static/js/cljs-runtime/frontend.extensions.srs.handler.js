goog.provide('frontend.extensions.srs.handler');
frontend.extensions.srs.handler.click = (function frontend$extensions$srs$handler$click(id){
var nodes = dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#cards-modal","#cards-modal",-1829868740),[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))));
var seq__108662 = cljs.core.seq(nodes);
var chunk__108663 = null;
var count__108664 = (0);
var i__108665 = (0);
while(true){
if((i__108665 < count__108664)){
var node = chunk__108663.cljs$core$IIndexed$_nth$arity$2(null,i__108665);
node.click();


var G__108666 = seq__108662;
var G__108667 = chunk__108663;
var G__108668 = count__108664;
var G__108669 = (i__108665 + (1));
seq__108662 = G__108666;
chunk__108663 = G__108667;
count__108664 = G__108668;
i__108665 = G__108669;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__108662);
if(temp__5804__auto__){
var seq__108662__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__108662__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__108662__$1);
var G__108670 = cljs.core.chunk_rest(seq__108662__$1);
var G__108671 = c__5565__auto__;
var G__108672 = cljs.core.count(c__5565__auto__);
var G__108673 = (0);
seq__108662 = G__108670;
chunk__108663 = G__108671;
count__108664 = G__108672;
i__108665 = G__108673;
continue;
} else {
var node = cljs.core.first(seq__108662__$1);
node.click();


var G__108674 = cljs.core.next(seq__108662__$1);
var G__108675 = null;
var G__108676 = (0);
var G__108677 = (0);
seq__108662 = G__108674;
chunk__108663 = G__108675;
count__108664 = G__108676;
i__108665 = G__108677;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.extensions.srs.handler.toggle_answers = (function frontend$extensions$srs$handler$toggle_answers(){
return frontend.extensions.srs.handler.click("card-answers");
});
frontend.extensions.srs.handler.next_card = (function frontend$extensions$srs$handler$next_card(){
return frontend.extensions.srs.handler.click("card-next");
});
frontend.extensions.srs.handler.forgotten = (function frontend$extensions$srs$handler$forgotten(){
return frontend.extensions.srs.handler.click("card-forgotten");
});
frontend.extensions.srs.handler.remembered = (function frontend$extensions$srs$handler$remembered(){
return frontend.extensions.srs.handler.click("card-remembered");
});
frontend.extensions.srs.handler.recall = (function frontend$extensions$srs$handler$recall(){
return frontend.extensions.srs.handler.click("card-recall");
});

//# sourceMappingURL=frontend.extensions.srs.handler.js.map
