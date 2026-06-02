goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_58799 = ret;
var shift_58800__$1 = shift;
while(true){
var arr_58801 = n_58799.arr;
var subidx_58802 = (((cnt - (1)) >> shift_58800__$1) & (31));
if((shift_58800__$1 === (5))){
(arr_58801[subidx_58802] = tail_node);
} else {
var child_58806 = (arr_58801[subidx_58802]);
if((child_58806 == null)){
(arr_58801[subidx_58802] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_58800__$1 - (5)),tail_node));
} else {
var editable_child_58807 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_58806);
(arr_58801[subidx_58802] = editable_child_58807);

var G__58808 = editable_child_58807;
var G__58809 = (shift_58800__$1 - (5));
n_58799 = G__58808;
shift_58800__$1 = G__58809;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__58760 = (shift - (5));
var G__58761 = ccnt;
var G__58762 = root_edit;
var G__58763 = child;
var G__58764 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__58760,G__58761,G__58762,G__58763,G__58764) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__58760,G__58761,G__58762,G__58763,G__58764));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_58810 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_58811 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_58810,data_58811);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__58768 = (shift - (5));
var G__58769 = cnt;
var G__58770 = root_edit;
var G__58771 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__58768,G__58769,G__58770,G__58771) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__58768,G__58769,G__58770,G__58771));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__58779 = (shift - (5));
var G__58780 = child_cnt;
var G__58781 = root_edit;
var G__58782 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__58779,G__58780,G__58781,G__58782) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__58779,G__58780,G__58781,G__58782));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_58812__$1 = shift;
var node_58813 = ret;
while(true){
if((shift_58812__$1 === (0))){
var arr_58814 = node_58813.arr;
(arr_58814[(i & (31))] = val);
} else {
var arr_58815 = node_58813.arr;
var subidx_58816 = ((i >> shift_58812__$1) & (31));
var child_58817 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_58815[subidx_58816]));
(arr_58815[subidx_58816] = child_58817);

var G__58818 = (shift_58812__$1 - (5));
var G__58819 = child_58817;
shift_58812__$1 = G__58818;
node_58813 = G__58819;
continue;
}
break;
}
} else {
var arr_58820 = ret.arr;
var rngs_58821 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_58822 = ((i >> shift) & (31));
var subidx_58823__$1 = (function (){var subidx_58823__$1 = subidx_58822;
while(true){
if((i < ((rngs_58821[subidx_58823__$1]) | (0)))){
return subidx_58823__$1;
} else {
var G__58825 = (subidx_58823__$1 + (1));
subidx_58823__$1 = G__58825;
continue;
}
break;
}
})();
var i_58824__$1 = (((subidx_58823__$1 === (0)))?i:(i - (rngs_58821[(subidx_58823__$1 - (1))])));
(arr_58820[subidx_58823__$1] = (function (){var G__58788 = (shift - (5));
var G__58789 = root_edit;
var G__58790 = (arr_58820[subidx_58823__$1]);
var G__58791 = i_58824__$1;
var G__58792 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__58788,G__58789,G__58790,G__58791,G__58792) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__58788,G__58789,G__58790,G__58791,G__58792));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
