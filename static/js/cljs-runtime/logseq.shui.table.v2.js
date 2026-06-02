goog.provide('logseq.shui.table.v2');
logseq.shui.table.v2.COLORS = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, ["blue",null,"cyan",null,"purple",null,"mint",null,"plum",null,"crimson",null,"orange",null,"lime",null,"violet",null,"yellow",null,"pink",null,"teal",null,"green",null,"red",null,"grass",null,"brown",null,"amber",null,"tomato",null,"indigo",null,"sky",null], null), null);
logseq.shui.table.v2.MAX_WIDTH = (30);
logseq.shui.table.v2.MIN_WIDTH = (4);
logseq.shui.table.v2.CELL_PADDING = parseFloat(cljs.core.re_find(/\d+\.?\d*/,"px-[0.75rem]"));
logseq.shui.table.v2.CELL_PADDING_COMPACT = parseFloat(cljs.core.re_find(/\d+\.?\d*/,"px-[0.25rem]"));
logseq.shui.table.v2.BORDER_WIDTH = parseFloat(cljs.core.re_find(/\d+\.?\d*/,"border-[1px]"));
logseq.shui.table.v2.get_in_first = (function logseq$shui$table$v2$get_in_first(var_args){
var G__109659 = arguments.length;
switch (G__109659) {
case 2:
return logseq.shui.table.v2.get_in_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___109875 = arguments.length;
var i__5767__auto___109876 = (0);
while(true){
if((i__5767__auto___109876 < len__5766__auto___109875)){
args_arr__5791__auto__.push((arguments[i__5767__auto___109876]));

var G__109877 = (i__5767__auto___109876 + (1));
i__5767__auto___109876 = G__109877;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return logseq.shui.table.v2.get_in_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(logseq.shui.table.v2.get_in_first.cljs$core$IFn$_invoke$arity$2 = (function (obj,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(obj,path);
}));

(logseq.shui.table.v2.get_in_first.cljs$core$IFn$_invoke$arity$variadic = (function (obj,path,more){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,path,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(logseq.shui.table.v2.get_in_first,obj,more));
}));

/** @this {Function} */
(logseq.shui.table.v2.get_in_first.cljs$lang$applyTo = (function (seq109656){
var G__109657 = cljs.core.first(seq109656);
var seq109656__$1 = cljs.core.next(seq109656);
var G__109658 = cljs.core.first(seq109656__$1);
var seq109656__$2 = cljs.core.next(seq109656__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109657,G__109658,seq109656__$2);
}));

(logseq.shui.table.v2.get_in_first.cljs$lang$maxFixedArity = (2));

logseq.shui.table.v2.get_in_first_fallback = (function logseq$shui$table$v2$get_in_first_fallback(var_args){
var G__109665 = arguments.length;
switch (G__109665) {
case 2:
return logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___109879 = arguments.length;
var i__5767__auto___109880 = (0);
while(true){
if((i__5767__auto___109880 < len__5766__auto___109879)){
args_arr__5791__auto__.push((arguments[i__5767__auto___109880]));

var G__109881 = (i__5767__auto___109880 + (1));
i__5767__auto___109880 = G__109881;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$2 = (function (obj,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(obj,path);
}));

(logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$3 = (function (obj,path,fallback){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,path,fallback);
}));

(logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$variadic = (function (obj,path,path_b,more){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,path,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(logseq.shui.table.v2.get_in_first_fallback,obj,path_b,more));
}));

/** @this {Function} */
(logseq.shui.table.v2.get_in_first_fallback.cljs$lang$applyTo = (function (seq109661){
var G__109662 = cljs.core.first(seq109661);
var seq109661__$1 = cljs.core.next(seq109661);
var G__109663 = cljs.core.first(seq109661__$1);
var seq109661__$2 = cljs.core.next(seq109661__$1);
var G__109664 = cljs.core.first(seq109661__$2);
var seq109661__$3 = cljs.core.next(seq109661__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109662,G__109663,G__109664,seq109661__$3);
}));

(logseq.shui.table.v2.get_in_first_fallback.cljs$lang$maxFixedArity = (3));

logseq.shui.table.v2.read_prop = (function logseq$shui$table$v2$read_prop(value){
var G__109666 = value;
switch (G__109666) {
case "false":
return false;

break;
case "true":
return true;

break;
default:
return value;

}
});
/**
 * Get the config for a specified item. Can be overridden in blocks, specified in config, 
 *   fallback to default config, or fallback to the provided parameters
 */
logseq.shui.table.v2.get_view_prop = (function logseq$shui$table$v2$get_view_prop(var_args){
var G__109668 = arguments.length;
switch (G__109668) {
case 2:
return logseq.shui.table.v2.get_view_prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.table.v2.get_view_prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.shui.table.v2.get_view_prop.cljs$core$IFn$_invoke$arity$2 = (function (context,kw){
return logseq.shui.table.v2.read_prop(logseq.shui.table.v2.get_in_first.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"properties","properties",685819552),kw], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","properties","block/properties",708347145),kw], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),kw], null)], 0)));
}));

(logseq.shui.table.v2.get_view_prop.cljs$core$IFn$_invoke$arity$3 = (function (context,kw,fallback){
return logseq.shui.table.v2.read_prop(logseq.shui.table.v2.get_in_first_fallback.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"properties","properties",685819552),kw], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","properties","block/properties",708347145),kw], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),kw], null),fallback], 0)));
}));

(logseq.shui.table.v2.get_view_prop.cljs$lang$maxFixedArity = 3);

logseq.shui.table.v2.color__GT_gray = (function logseq$shui$table$v2$color__GT_gray(color){
var G__109669 = color;
switch (G__109669) {
case "tomato":
case "red":
case "crimson":
case "pink":
case "plum":
case "purple":
case "violet":
return "mauve";

break;
case "indigo":
case "blue":
case "sky":
case "cyan":
return "slate";

break;
case "teal":
case "mint":
case "green":
return "sage";

break;
case "grass":
case "lime":
return "olive";

break;
case "yellow":
case "amber":
case "orange":
case "brown":
return "sand";

break;
default:
return null;

}
});
logseq.shui.table.v2.rdx = (function logseq$shui$table$v2$rdx(var_args){
var G__109671 = arguments.length;
switch (G__109671) {
case 2:
return logseq.shui.table.v2.rdx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.shui.table.v2.rdx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.shui.table.v2.rdx.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
return ["bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join('');
}));

(logseq.shui.table.v2.rdx.cljs$core$IFn$_invoke$arity$3 = (function (param,color,step){
return [cljs.core.name(param),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join('');
}));

(logseq.shui.table.v2.rdx.cljs$lang$maxFixedArity = 3);

/**
 * This is a temporary bridge between the radix color grading and the
 *   current logseq theming variables. Should set the prop to the given css variable
 */
logseq.shui.table.v2.lsx = (function logseq$shui$table$v2$lsx(var_args){
var G__109673 = arguments.length;
switch (G__109673) {
case 1:
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1 = (function (step){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bg","bg",-206688421),step);
}));

(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2 = (function (param,step){
var G__109674 = step;
switch (G__109674) {
case (1):
var G__109676 = cljs.core.name(param);
var fexpr__109675 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-primary-background-color)]"], null);
return (fexpr__109675.cljs$core$IFn$_invoke$arity$1 ? fexpr__109675.cljs$core$IFn$_invoke$arity$1(G__109676) : fexpr__109675.call(null,G__109676));

break;
case (2):
var G__109678 = cljs.core.name(param);
var fexpr__109677 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-secondary-background-color)]"], null);
return (fexpr__109677.cljs$core$IFn$_invoke$arity$1 ? fexpr__109677.cljs$core$IFn$_invoke$arity$1(G__109678) : fexpr__109677.call(null,G__109678));

break;
case (3):
var G__109680 = cljs.core.name(param);
var fexpr__109679 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-tertiary-background-color)]"], null);
return (fexpr__109679.cljs$core$IFn$_invoke$arity$1 ? fexpr__109679.cljs$core$IFn$_invoke$arity$1(G__109680) : fexpr__109679.call(null,G__109680));

break;
case (4):
var G__109682 = cljs.core.name(param);
var fexpr__109681 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-quaternary-background-color)]"], null);
return (fexpr__109681.cljs$core$IFn$_invoke$arity$1 ? fexpr__109681.cljs$core$IFn$_invoke$arity$1(G__109682) : fexpr__109681.call(null,G__109682));

break;
case (5):
var G__109684 = cljs.core.name(param);
var fexpr__109683 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-quinary-background-color)]"], null);
return (fexpr__109683.cljs$core$IFn$_invoke$arity$1 ? fexpr__109683.cljs$core$IFn$_invoke$arity$1(G__109684) : fexpr__109683.call(null,G__109684));

break;
case (6):
var G__109686 = cljs.core.name(param);
var fexpr__109685 = new cljs.core.PersistentArrayMap(null, 1, ["bg","bg-[color:var(--ls-senary-background-color)]"], null);
return (fexpr__109685.cljs$core$IFn$_invoke$arity$1 ? fexpr__109685.cljs$core$IFn$_invoke$arity$1(G__109686) : fexpr__109685.call(null,G__109686));

break;
case (7):
var G__109688 = cljs.core.name(param);
var fexpr__109687 = new cljs.core.PersistentArrayMap(null, 2, ["bg","bg-[color:var(--ls-border-color)]","border","border-[color:var(--ls-border-color)]"], null);
return (fexpr__109687.cljs$core$IFn$_invoke$arity$1 ? fexpr__109687.cljs$core$IFn$_invoke$arity$1(G__109688) : fexpr__109687.call(null,G__109688));

break;
case (11):
var G__109690 = cljs.core.name(param);
var fexpr__109689 = new cljs.core.PersistentArrayMap(null, 1, ["text","text-[color:var(--ls-secondary-text-color)]"], null);
return (fexpr__109689.cljs$core$IFn$_invoke$arity$1 ? fexpr__109689.cljs$core$IFn$_invoke$arity$1(G__109690) : fexpr__109689.call(null,G__109690));

break;
case (12):
var G__109692 = cljs.core.name(param);
var fexpr__109691 = new cljs.core.PersistentArrayMap(null, 1, ["text","text-[color:var(--ls-primary-text-color)]"], null);
return (fexpr__109691.cljs$core$IFn$_invoke$arity$1 ? fexpr__109691.cljs$core$IFn$_invoke$arity$1(G__109692) : fexpr__109691.call(null,G__109692));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109674)].join('')));

}
}));

(logseq.shui.table.v2.lsx.cljs$lang$maxFixedArity = 2);

logseq.shui.table.v2.varc = (function logseq$shui$table$v2$varc(color,step){
return ["var(--color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step),")"].join('');
});
/**
 * Given an inline AST, return the last string element you can walk to
 */
logseq.shui.table.v2.last_str = (function logseq$shui$table$v2$last_str(inline){
if((inline instanceof cljs.core.Keyword)){
return cljs.core.name(inline);
} else {
if(typeof inline === 'string'){
return inline;
} else {
if(cljs.core.coll_QMARK_(inline)){
var G__109693 = cljs.core.last(inline);
return (logseq.shui.table.v2.last_str.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.table.v2.last_str.cljs$core$IFn$_invoke$arity$1(G__109693) : logseq.shui.table.v2.last_str.call(null,G__109693));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline], 0));

}
}
}
});
/**
 * Some instances of the table provide us with raw data, others provide us with 
 *   inline ASTs. This function renders the content appropriately, passing the AST along 
 *   to map-inline if necessary.
 */
logseq.shui.table.v2.render_cell_in_context = (function logseq$shui$table$v2$render_cell_in_context(p__109694,cell_data){
var map__109695 = p__109694;
var map__109695__$1 = cljs.core.__destructure_map(map__109695);
var map_inline_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109695__$1,new cljs.core.Keyword(null,"map-inline-block","map-inline-block",-1961752782));
var int__GT_local_time_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109695__$1,new cljs.core.Keyword(null,"int->local-time-2","int->local-time-2",1621408837));
if(cljs.core.sequential_QMARK_(cell_data)){
var G__109696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"v2","v2",235023456)], null);
var G__109697 = cell_data;
return (map_inline_block.cljs$core$IFn$_invoke$arity$2 ? map_inline_block.cljs$core$IFn$_invoke$arity$2(G__109696,G__109697) : map_inline_block.call(null,G__109696,G__109697));
} else {
if(typeof cell_data === 'string'){
return cell_data;
} else {
if((cell_data instanceof cljs.core.Keyword)){
return cljs.core.name(cell_data);
} else {
if(cljs.core.boolean_QMARK_(cell_data)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell_data], 0));
} else {
if(typeof cell_data === 'number'){
var temp__5802__auto__ = (int__GT_local_time_2.cljs$core$IFn$_invoke$arity$1 ? int__GT_local_time_2.cljs$core$IFn$_invoke$arity$1(cell_data) : int__GT_local_time_2.call(null,cell_data));
if(cljs.core.truth_(temp__5802__auto__)){
var date = temp__5802__auto__;
return date;
} else {
return cell_data;
}
} else {
return null;
}
}
}
}
}
});
logseq.shui.table.v2.map_with_all_indices = (function logseq$shui$table$v2$map_with_all_indices(data){
var _BANG_row_index = cljs.core.volatile_BANG_((-1));
var iter__5520__auto__ = (function logseq$shui$table$v2$map_with_all_indices_$_iter__109698(s__109699){
return (new cljs.core.LazySeq(null,(function (){
var s__109699__$1 = s__109699;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109699__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__109704 = cljs.core.first(xs__6360__auto__);
var group_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109704,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109704,(1),null);
var iterys__5516__auto__ = ((function (s__109699__$1,vec__109704,group_index,group,xs__6360__auto__,temp__5804__auto__,_BANG_row_index){
return (function logseq$shui$table$v2$map_with_all_indices_$_iter__109698_$_iter__109700(s__109701){
return (new cljs.core.LazySeq(null,((function (s__109699__$1,vec__109704,group_index,group,xs__6360__auto__,temp__5804__auto__,_BANG_row_index){
return (function (){
var s__109701__$1 = s__109701;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__109701__$1);
if(temp__5804__auto____$1){
var s__109701__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__109701__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109701__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109703 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109702 = (0);
while(true){
if((i__109702 < size__5519__auto__)){
var vec__109707 = cljs.core._nth(c__5518__auto__,i__109702);
var group_row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109707,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109707,(1),null);
var row_index = _BANG_row_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(_BANG_row_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.core.chunk_append(b__109703,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_index,group_row_index,row_index,group,row], null));

var G__109888 = (i__109702 + (1));
i__109702 = G__109888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109703),logseq$shui$table$v2$map_with_all_indices_$_iter__109698_$_iter__109700(cljs.core.chunk_rest(s__109701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109703),null);
}
} else {
var vec__109710 = cljs.core.first(s__109701__$2);
var group_row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109710,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109710,(1),null);
var row_index = _BANG_row_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(_BANG_row_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_index,group_row_index,row_index,group,row], null),logseq$shui$table$v2$map_with_all_indices_$_iter__109698_$_iter__109700(cljs.core.rest(s__109701__$2)));
}
} else {
return null;
}
break;
}
});})(s__109699__$1,vec__109704,group_index,group,xs__6360__auto__,temp__5804__auto__,_BANG_row_index))
,null,null));
});})(s__109699__$1,vec__109704,group_index,group,xs__6360__auto__,temp__5804__auto__,_BANG_row_index))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,group)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,logseq$shui$table$v2$map_with_all_indices_$_iter__109698(cljs.core.rest(s__109699__$1)));
} else {
var G__109889 = cljs.core.rest(s__109699__$1);
s__109699__$1 = G__109889;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,data));
});
logseq.shui.table.v2.get_columns = (function logseq$shui$table$v2$get_columns(block,data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.trim),(function (){var or__5043__auto__ = (function (){var G__109713 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"logseq.table.cols","logseq.table.cols",-996161614)], null));
if((G__109713 == null)){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__109713,/, ?/);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.table.v2.last_str,cljs.core.ffirst(data));
}
})());
});
/**
 * We track the cell the cursor last entered and update the cells according to the configured 
 *   hover preference: cell, row, col, both, or none.
 *   We also have to account for the header cells and stripes cells
 */
logseq.shui.table.v2.cell_bg_classes = (function logseq$shui$table$v2$cell_bg_classes(p__109714){
var map__109715 = p__109714;
var map__109715__$1 = cljs.core.__destructure_map(map__109715);
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
var gray = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"gray","gray",1013268388));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var stripes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"stripes?","stripes?",1562692216));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109715__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var row_highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,cljs.core.second(cursor));
var col_highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_index,cljs.core.first(cursor));
var cell_highlighted_QMARK_ = ((row_highlighted_QMARK_) && (col_highlighted_QMARK_));
var highlight_row_QMARK_ = (function (){var and__5041__auto__ = row_highlighted_QMARK_;
if(and__5041__auto__){
var fexpr__109716 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["both",null,"row",null], null), null);
return (fexpr__109716.cljs$core$IFn$_invoke$arity$1 ? fexpr__109716.cljs$core$IFn$_invoke$arity$1(hover) : fexpr__109716.call(null,hover));
} else {
return and__5041__auto__;
}
})();
var highlight_col_QMARK_ = (function (){var and__5041__auto__ = col_highlighted_QMARK_;
if(and__5041__auto__){
var fexpr__109717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["both",null,"col",null], null), null);
return (fexpr__109717.cljs$core$IFn$_invoke$arity$1 ? fexpr__109717.cljs$core$IFn$_invoke$arity$1(hover) : fexpr__109717.call(null,hover));
} else {
return and__5041__auto__;
}
})();
var highlight_cell_QMARK_ = (function (){var and__5041__auto__ = cell_highlighted_QMARK_;
if(and__5041__auto__){
var fexpr__109718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["cell",null,"both",null,"col",null,"row",null], null), null);
return (fexpr__109718.cljs$core$IFn$_invoke$arity$1 ? fexpr__109718.cljs$core$IFn$_invoke$arity$1(hover) : fexpr__109718.call(null,hover));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(highlight_cell_QMARK_)){
if(cljs.core.truth_(header_QMARK_)){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((6));
} else {
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((4));
}
} else {
if(cljs.core.truth_(highlight_row_QMARK_)){
if(cljs.core.truth_(header_QMARK_)){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((5));
} else {
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((3));
}
} else {
if(cljs.core.truth_(highlight_col_QMARK_)){
if(cljs.core.truth_(header_QMARK_)){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((5));
} else {
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((3));
}
} else {
if(cljs.core.truth_(header_QMARK_)){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((4));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = stripes_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.even_QMARK_(row_index);
} else {
return and__5041__auto__;
}
})())){
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((2));
} else {
return logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((1));

}
}
}
}
}
});
/**
 * Depending on where the cell is, and whether there is a gradient accent, we need to round specific corners 
 * The cond-> is used to account for single row or single column talbes that may have multiple rounded corners.
 */
logseq.shui.table.v2.cell_rounded_classes = (function logseq$shui$table$v2$cell_rounded_classes(p__109719){
var map__109720 = p__109719;
var map__109720__$1 = cljs.core.__destructure_map(map__109720);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109720__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109720__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109720__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109720__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var total_cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109720__$1,new cljs.core.Keyword(null,"total-cols","total-cols",181071623));
var no_gradient_accent_QMARK_ = (color == null);
var G__109721 = "";
var G__109721__$1 = ((((no_gradient_accent_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,col_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))))?[G__109721," rounded-tl"].join(''):G__109721);
var G__109721__$2 = ((((no_gradient_accent_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,col_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(total_cols - (1))], null)))))?[G__109721__$1," rounded-tr"].join(''):G__109721__$1);
var G__109721__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,col_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(total_rows - (1)),(0)], null)))?[G__109721__$2," rounded-bl"].join(''):G__109721__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,col_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(total_rows - (1)),(total_cols - (1))], null))){
return [G__109721__$3," rounded-br"].join('');
} else {
return G__109721__$3;
}
});
logseq.shui.table.v2.cell_text_transform_classes = (function logseq$shui$table$v2$cell_text_transform_classes(p__109722){
var map__109723 = p__109722;
var map__109723__$1 = cljs.core.__destructure_map(map__109723);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109723__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109723__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
if(cljs.core.truth_(header_QMARK_)){
var G__109724 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["none",null,"lowercase",null,"capitalize",null,"capitalize-first",null,"uppercase",null], null), null),headers,"none");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(headers,"capitalize-first")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109724)," lowercase"].join('');
} else {
return G__109724;
}
} else {
return null;
}
});
logseq.shui.table.v2.cell_padding_classes = (function logseq$shui$table$v2$cell_padding_classes(p__109725){
var map__109726 = p__109725;
var map__109726__$1 = cljs.core.__destructure_map(map__109726);
var compact_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109726__$1,new cljs.core.Keyword(null,"compact?","compact?",1216893298));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109726__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
if(cljs.core.truth_((function (){var and__5041__auto__ = compact_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return header_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return ["px-[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.CELL_PADDING_COMPACT),"rem] py-0.5"].join('');
} else {
if(cljs.core.truth_(compact_QMARK_)){
return ["px-[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.CELL_PADDING_COMPACT),"rem] py-0.5"].join('');
} else {
if(cljs.core.truth_(header_QMARK_)){
return ["px-[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.CELL_PADDING),"rem] py-1.5"].join('');
} else {
return ["px-[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.CELL_PADDING),"rem] py-2"].join('');

}
}
}
});
logseq.shui.table.v2.cell_text_classes = (function logseq$shui$table$v2$cell_text_classes(p__109727){
var map__109728 = p__109727;
var map__109728__$1 = cljs.core.__destructure_map(map__109728);
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109728__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
if(cljs.core.truth_(header_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),(11)))," text-sm tracking-wide font-bold"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),(12)))," text-base"].join('');
}
});
logseq.shui.table.v2.cell_classes = (function logseq$shui$table$v2$cell_classes(table_opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.table.v2.cell_bg_classes(table_opts),logseq.shui.table.v2.cell_rounded_classes(table_opts),logseq.shui.table.v2.cell_text_classes(table_opts),logseq.shui.table.v2.cell_text_transform_classes(table_opts),logseq.shui.table.v2.cell_padding_classes(table_opts)], null));
});
logseq.shui.table.v2.handle_cell_pointer_down = (function logseq$shui$table$v2$handle_cell_pointer_down(e,p__109729){
var map__109730 = p__109729;
var map__109730__$1 = cljs.core.__destructure_map(map__109730);
var cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109730__$1,new cljs.core.Keyword(null,"cell-focus","cell-focus",1530044451));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109730__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109730__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cell_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null))){
e.stopPropagation();

return e.preventDefault();
} else {
return null;
}
});
/**
 * When a cell is clicked, we need to update the cursor position and the selected cells
 */
logseq.shui.table.v2.handle_cell_click = (function logseq$shui$table$v2$handle_cell_click(e,p__109731,cell_ref){
var map__109732 = p__109731;
var map__109732__$1 = cljs.core.__destructure_map(map__109732);
var cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"cell-focus","cell-focus",1530044451));
var set_cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"set-cell-focus","set-cell-focus",1908320916));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109732__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null))){
return null;
} else {
var G__109733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109733) : set_cell_focus.call(null,G__109733));
}
});
/**
 * When a cell is focused, we need to update the cursor position and the selected cells
 */
logseq.shui.table.v2.handle_cell_keydown = (function logseq$shui$table$v2$handle_cell_keydown(e,p__109734){
var map__109735 = p__109734;
var map__109735__$1 = cljs.core.__destructure_map(map__109735);
var cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"cell-focus","cell-focus",1530044451));
var set_cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"set-cell-focus","set-cell-focus",1908320916));
var header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"header?","header?",-106649173));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var total_cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109735__$1,new cljs.core.Keyword(null,"total-cols","total-cols",181071623));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null))){
var and__5041__auto__ = (function (){var G__109736 = e.key;
switch (G__109736) {
case "ArrowUp":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))){
var G__109737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109737) : set_cell_focus.call(null,G__109737));
} else {
var G__109738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,(row_index - (1))], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109738) : set_cell_focus.call(null,G__109738));
}

break;
case "ArrowDown":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(total_rows - (1)))){
var G__109739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109739) : set_cell_focus.call(null,G__109739));
} else {
var G__109740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,(row_index + (1))], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109740) : set_cell_focus.call(null,G__109740));
}

break;
case "ArrowLeft":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))))){
var G__109741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109741) : set_cell_focus.call(null,G__109741));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_index,(0))){
var G__109742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(total_cols - (1)),(row_index - (1))], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109742) : set_cell_focus.call(null,G__109742));
} else {
var G__109743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(col_index - (1)),row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109743) : set_cell_focus.call(null,G__109743));

}
}

break;
case "ArrowRight":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_index,(total_cols - (1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(total_rows - (1)))))){
var G__109744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109744) : set_cell_focus.call(null,G__109744));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col_index,(total_cols - (1)))){
var G__109745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(row_index + (1))], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109745) : set_cell_focus.call(null,G__109745));
} else {
var G__109746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(col_index + (1)),row_index], null);
return (set_cell_focus.cljs$core$IFn$_invoke$arity$1 ? set_cell_focus.cljs$core$IFn$_invoke$arity$1(G__109746) : set_cell_focus.call(null,G__109746));

}
}

break;
default:
return null;

}
})();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = e.preventDefault();
if(cljs.core.truth_(and__5041__auto____$1)){
return e.stopPropagation();
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
/**
 * A hook that wraps use-state to allow for interaction with 
 *   the state as if it were an atom
 */
logseq.shui.table.v2.use_atom = (function logseq$shui$table$v2$use_atom(initial_value){
var atom_ref = rum.core.use_ref(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_value));
var atom_current = atom_ref.current;
var vec__109747 = rum.core.use_state(initial_value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109747,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109747,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__109750_109891 = cljs.core.deref(atom_current);
(set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__109750_109891) : set_state.call(null,G__109750_109891));

return cljs.core.identity;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [atom_current], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,atom_current], null);
});
logseq.shui.table.v2.use_dynamic_widths = (function logseq$shui$table$v2$use_dynamic_widths(data){
var vec__109751 = logseq.shui.table.v2.use_atom(cljs.core.PersistentArrayMap.EMPTY);
var static$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109751,(0),null);
var atomic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109751,(1),null);
var add_column_width = (function (col_index,width){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(atomic),col_index,(0)) < (function (){var x__5131__auto__ = logseq.shui.table.v2.MAX_WIDTH;
var y__5132__auto__ = width;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(atomic,cljs.core.assoc,col_index,(function (){var x__5131__auto__ = logseq.shui.table.v2.MAX_WIDTH;
var y__5132__auto__ = width;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());

return cljs.core.identity;
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
cljs.core.reset_BANG_(atomic,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.identity;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$,add_column_width], null);
});
logseq.shui.table.v2.use_table_flow_at_width = (function logseq$shui$table$v2$use_table_flow_at_width(table_px,max_cols_px){
var vec__109754 = rum.core.use_state(false);
var overflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109754,(0),null);
var set_overflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109754,(1),null);
var vec__109757 = rum.core.use_state(false);
var underflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109757,(0),null);
var set_underflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109757,(1),null);
var handle_container_width = (function (container_px){
var G__109760_109892 = (max_cols_px < container_px);
(set_underflow.cljs$core$IFn$_invoke$arity$1 ? set_underflow.cljs$core$IFn$_invoke$arity$1(G__109760_109892) : set_underflow.call(null,G__109760_109892));

var G__109761 = (container_px < table_px);
return (set_overflow.cljs$core$IFn$_invoke$arity$1 ? set_overflow.cljs$core$IFn$_invoke$arity$1(G__109761) : set_overflow.call(null,G__109761));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [overflow,underflow,handle_container_width], null);
});
logseq.shui.table.v2.table_scrollable_overflow = rum.core.lazy_build(rum.core.build_defc,(function (handle_root_width_change,child){
var vec__109762 = logseq.shui.util.use_ref_bounding_client_rect.cljs$core$IFn$_invoke$arity$0();
var set_root_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109762,(0),null);
var root_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109762,(1),null);
var root_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109762,(2),null);
var main_content_rect = logseq.shui.util.use_dom_bounding_client_rect.cljs$core$IFn$_invoke$arity$1(logseq.shui.util.$main_content());
var left_adjustment = (new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(root_rect) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(main_content_rect));
var right_adjustment = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(main_content_rect) - (new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(root_rect) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(main_content_rect)));
var handle_pointer_down = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_ref,e.target.parentElement)){
return e.preventDefault();
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__109765 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(root_rect);
return (handle_root_width_change.cljs$core$IFn$_invoke$arity$1 ? handle_root_width_change.cljs$core$IFn$_invoke$arity$1(G__109765) : handle_root_width_change.call(null,G__109765));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(root_rect)], null));

return daiquiri.core.create_element("div",{'ref':set_root_ref},[daiquiri.core.create_element("div",{'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(main_content_rect),'marginLeft':(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(main_content_rect) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(root_rect)),'paddingLeft':left_adjustment,'paddingRight':right_adjustment,'overflowX':"scroll"},'onPointerDown':handle_pointer_down,'className':"mt-2"},[daiquiri.interpreter.interpret(child)])]);
}),null,"logseq.shui.table.v2/table-scrollable-overflow");
logseq.shui.table.v2.table_gradient_accent = rum.core.lazy_build(rum.core.build_defc,(function (p__109766){
var map__109767 = p__109766;
var map__109767__$1 = cljs.core.__destructure_map(map__109767);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109767__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109767__$1,new cljs.core.Keyword(null,"color-gradient","color-gradient",1884828173));
var linear_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109767__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
return daiquiri.core.create_element("div",{'style':{'gridColumn':"1 / -1",'order':(-999),'background':(linear_gradient.cljs$core$IFn$_invoke$arity$3 ? linear_gradient.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"09","09",-2019125985),color_gradient) : linear_gradient.call(null,color,new cljs.core.Keyword(null,"09","09",-2019125985),color_gradient))},'data-testid':"v2-table-gradient-accent",'className':"rounded-t h-2 -ml-px -mt-px -mr-px"},[]);
}),null,"logseq.shui.table.v2/table-gradient-accent");
logseq.shui.table.v2.table_header_row = rum.core.lazy_build(rum.core.build_defc,(function (handle_cell_width_change,cells,p__109768){
var map__109769 = p__109768;
var map__109769__$1 = cljs.core.__destructure_map(map__109769);
var opts = map__109769__$1;
var cell_col_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109769__$1,new cljs.core.Keyword(null,"cell-col-map","cell-col-map",860177618));
return daiquiri.core.create_element(daiquiri.core.fragment,null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function logseq$shui$table$v2$iter__109770(s__109771){
return (new cljs.core.LazySeq(null,(function (){
var s__109771__$1 = s__109771;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109771__$1);
if(temp__5804__auto__){
var s__109771__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109771__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109771__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109773 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109772 = (0);
while(true){
if((i__109772 < size__5519__auto__)){
var vec__109774 = cljs.core._nth(c__5518__auto__,i__109772);
var cell_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109774,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109774,(1),null);
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_col_map,cell_index);
if(cljs.core.truth_(col_index)){
cljs.core.chunk_append(b__109773,daiquiri.interpreter.interpret((function (){var G__109780 = handle_cell_width_change;
var G__109781 = cell;
var G__109782 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"cell-index","cell-index",1503504976),cell_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-index","col-index",1087102376),col_index,new cljs.core.Keyword(null,"header?","header?",-106649173),true], 0));
return (logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3(G__109780,G__109781,G__109782) : logseq.shui.table.v2.table_cell.call(null,G__109780,G__109781,G__109782));
})()));

var G__109893 = (i__109772 + (1));
i__109772 = G__109893;
continue;
} else {
var G__109894 = (i__109772 + (1));
i__109772 = G__109894;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109773),logseq$shui$table$v2$iter__109770(cljs.core.chunk_rest(s__109771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109773),null);
}
} else {
var vec__109783 = cljs.core.first(s__109771__$2);
var cell_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109783,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109783,(1),null);
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_col_map,cell_index);
if(cljs.core.truth_(col_index)){
return cljs.core.cons(daiquiri.interpreter.interpret((function (){var G__109789 = handle_cell_width_change;
var G__109790 = cell;
var G__109791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"cell-index","cell-index",1503504976),cell_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-index","col-index",1087102376),col_index,new cljs.core.Keyword(null,"header?","header?",-106649173),true], 0));
return (logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3(G__109789,G__109790,G__109791) : logseq.shui.table.v2.table_cell.call(null,G__109789,G__109790,G__109791));
})()),logseq$shui$table$v2$iter__109770(cljs.core.rest(s__109771__$2)));
} else {
var G__109895 = cljs.core.rest(s__109771__$2);
s__109771__$1 = G__109895;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cells));
})())]);
}),null,"logseq.shui.table.v2/table-header-row");
logseq.shui.table.v2.table_data_row = rum.core.lazy_build(rum.core.build_defc,(function (handle_cell_width_change,cells,p__109792){
var map__109793 = p__109792;
var map__109793__$1 = cljs.core.__destructure_map(map__109793);
var opts = map__109793__$1;
var cell_col_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109793__$1,new cljs.core.Keyword(null,"cell-col-map","cell-col-map",860177618));
return daiquiri.core.create_element(daiquiri.core.fragment,null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function logseq$shui$table$v2$iter__109794(s__109795){
return (new cljs.core.LazySeq(null,(function (){
var s__109795__$1 = s__109795;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109795__$1);
if(temp__5804__auto__){
var s__109795__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109795__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109795__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109797 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109796 = (0);
while(true){
if((i__109796 < size__5519__auto__)){
var vec__109798 = cljs.core._nth(c__5518__auto__,i__109796);
var cell_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109798,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109798,(1),null);
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_col_map,cell_index);
if(cljs.core.truth_(col_index)){
cljs.core.chunk_append(b__109797,daiquiri.interpreter.interpret((function (){var G__109804 = handle_cell_width_change;
var G__109805 = cell;
var G__109806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"cell-index","cell-index",1503504976),cell_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-index","col-index",1087102376),col_index], 0));
return (logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3(G__109804,G__109805,G__109806) : logseq.shui.table.v2.table_cell.call(null,G__109804,G__109805,G__109806));
})()));

var G__109896 = (i__109796 + (1));
i__109796 = G__109896;
continue;
} else {
var G__109897 = (i__109796 + (1));
i__109796 = G__109897;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109797),logseq$shui$table$v2$iter__109794(cljs.core.chunk_rest(s__109795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109797),null);
}
} else {
var vec__109807 = cljs.core.first(s__109795__$2);
var cell_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109807,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109807,(1),null);
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_col_map,cell_index);
if(cljs.core.truth_(col_index)){
return cljs.core.cons(daiquiri.interpreter.interpret((function (){var G__109813 = handle_cell_width_change;
var G__109814 = cell;
var G__109815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"cell-index","cell-index",1503504976),cell_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-index","col-index",1087102376),col_index], 0));
return (logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.table.v2.table_cell.cljs$core$IFn$_invoke$arity$3(G__109813,G__109814,G__109815) : logseq.shui.table.v2.table_cell.call(null,G__109813,G__109814,G__109815));
})()),logseq$shui$table$v2$iter__109794(cljs.core.rest(s__109795__$2)));
} else {
var G__109898 = cljs.core.rest(s__109795__$2);
s__109795__$1 = G__109898;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cells));
})())]);
}),null,"logseq.shui.table.v2/table-data-row");
logseq.shui.table.v2.table_cell = rum.core.lazy_build(rum.core.build_defc,(function (handle_cell_width_change,cell,p__109819){
var map__109820 = p__109819;
var map__109820__$1 = cljs.core.__destructure_map(map__109820);
var opts = map__109820__$1;
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var col_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"col-index","col-index",1087102376));
var render_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"render-cell","render-cell",-515359581));
var show_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"show-separator?","show-separator?",-312649107));
var total_cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"total-cols","total-cols",181071623));
var set_cell_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"set-cell-hover","set-cell-hover",1045629376));
var cell_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"cell-focus","cell-focus",1530044451));
var table_underflow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109820__$1,new cljs.core.Keyword(null,"table-underflow?","table-underflow?",-11288232));
var cell_ref = rum.core.use_ref(null);
var cell_order = ((row_index * total_cols) + col_index);
var static_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-widths","static-widths",-1036358283),col_index], null));
var dynamic_width = (cljs.core.truth_(static_width)?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-widths","dynamic-widths",-497830473),col_index], null)));
rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__109821 = col_index;
var G__109822 = cljs.core.count(cell_ref.current.innerText);
return (handle_cell_width_change.cljs$core$IFn$_invoke$arity$2 ? handle_cell_width_change.cljs$core$IFn$_invoke$arity$2(G__109821,G__109822) : handle_cell_width_change.call(null,G__109821,G__109822));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell], null));

rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null))){
var G__109823 = cell_ref;
var G__109823__$1 = (((G__109823 == null))?null:G__109823.current);
if((G__109823__$1 == null)){
return null;
} else {
return G__109823__$1.focus();
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_focus], null));

return daiquiri.core.create_element("div",{'ref':cell_ref,'style':daiquiri.interpreter.element_attributes((function (){var G__109824 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"border-box","border-box",1278054804)], null);
var G__109824__$1 = ((cljs.core.not(table_underflow_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109824,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.MAX_WIDTH),"rem"].join('')):G__109824);
var G__109824__$2 = (cljs.core.truth_(static_width)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109824__$1,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(static_width),"rem"].join('')):G__109824__$1);
var G__109824__$3 = (cljs.core.truth_(dynamic_width)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109824__$2,new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__5128__auto__ = logseq.shui.table.v2.MIN_WIDTH;
var y__5129__auto__ = dynamic_width;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()),"rem"].join('')):G__109824__$2);
var G__109824__$4 = (cljs.core.truth_(cell_order)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109824__$3,new cljs.core.Keyword(null,"order","order",-1254677256),cell_order):G__109824__$3);
if(cljs.core.truth_(show_separator_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__109824__$4,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(3));
} else {
return G__109824__$4;
}
})()),'tabIndex':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_focus,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null)))?"-1":null),'onPointerEnter':(function (){
var G__109825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_index,row_index], null);
return (set_cell_hover.cljs$core$IFn$_invoke$arity$1 ? set_cell_hover.cljs$core$IFn$_invoke$arity$1(G__109825) : set_cell_hover.call(null,G__109825));
}),'onClick':(function (p1__109816_SHARP_){
return logseq.shui.table.v2.handle_cell_click(p1__109816_SHARP_,opts,cell_ref);
}),'onPointerDown':(function (p1__109817_SHARP_){
return logseq.shui.table.v2.handle_cell_pointer_down(p1__109817_SHARP_,opts);
}),'onKeyDown':(function (p1__109818_SHARP_){
return logseq.shui.table.v2.handle_cell_keydown(p1__109818_SHARP_,opts);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.shui.table.v2.cell_classes(opts)], null))},[daiquiri.interpreter.interpret((render_cell.cljs$core$IFn$_invoke$arity$1 ? render_cell.cljs$core$IFn$_invoke$arity$1(cell) : render_cell.call(null,cell)))]);
}),null,"logseq.shui.table.v2/table-cell");
logseq.shui.table.v2.table_container = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__109899__delegate = function (p__109826,children){
var map__109827 = p__109826;
var map__109827__$1 = cljs.core.__destructure_map(map__109827);
var opts = map__109827__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var borders_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"borders?","borders?",-440383042));
var table_overflow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"table-overflow?","table-overflow?",-729910793));
var total_table_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"total-table-width","total-table-width",431452847));
var gray = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"gray","gray",1013268388));
var set_cell_hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109827__$1,new cljs.core.Keyword(null,"set-cell-hover","set-cell-hover",1045629376));
var grid_template_columns = ["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(columns)),", minmax(max-content, 1fr))"].join('');
return daiquiri.core.create_element("div",{'style':{'gridTemplateColumns':grid_template_columns,'gap':(cljs.core.truth_(borders_QMARK_)?logseq.shui.table.v2.BORDER_WIDTH:null),'width':(cljs.core.truth_(table_overflow_QMARK_)?total_table_width:null)},'data-testid':"v2-table-container",'onPointerLeave':(function (){
var G__109828 = cljs.core.PersistentVector.EMPTY;
return (set_cell_hover.cljs$core$IFn$_invoke$arity$1 ? set_cell_hover.cljs$core$IFn$_invoke$arity$1(G__109828) : set_cell_hover.call(null,G__109828));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grid","border","rounded",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$1((7)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.shui.table.v2.lsx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(7)))].join('')], null))},[daiquiri.interpreter.interpret(children)]);
};
var G__109899 = function (p__109826,var_args){
var children = null;
if (arguments.length > 1) {
var G__109900__i = 0, G__109900__a = new Array(arguments.length -  1);
while (G__109900__i < G__109900__a.length) {G__109900__a[G__109900__i] = arguments[G__109900__i + 1]; ++G__109900__i;}
  children = new cljs.core.IndexedSeq(G__109900__a,0,null);
} 
return G__109899__delegate.call(this,p__109826,children);};
G__109899.cljs$lang$maxFixedArity = 1;
G__109899.cljs$lang$applyTo = (function (arglist__109901){
var p__109826 = cljs.core.first(arglist__109901);
var children = cljs.core.rest(arglist__109901);
return G__109899__delegate(p__109826,children);
});
G__109899.cljs$core$IFn$_invoke$arity$variadic = G__109899__delegate;
return G__109899;
})()
,null,"logseq.shui.table.v2/table-container");
logseq.shui.table.v2.root = rum.core.lazy_build(rum.core.build_defc,(function (p__109832,p__109833){
var map__109834 = p__109832;
var map__109834__$1 = cljs.core.__destructure_map(map__109834);
var _props = map__109834__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109834__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__109835 = p__109833;
var map__109835__$1 = cljs.core.__destructure_map(map__109835);
var context = map__109835__$1;
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109835__$1,new cljs.core.Keyword(null,"block","block",664686210));
var color_accent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109835__$1,new cljs.core.Keyword(null,"color-accent","color-accent",-843871719));
var color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109835__$1,new cljs.core.Keyword(null,"color-gradient","color-gradient",1884828173));
var linear_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109835__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
var vec__109836 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var vec__109839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109836,(0),null);
var _cell_hover_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109839,(0),null);
var _cell_hover_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109839,(1),null);
var cell_hover = vec__109839;
var set_cell_hover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109836,(1),null);
var vec__109842 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var vec__109845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109842,(0),null);
var _cell_focus_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109845,(0),null);
var _cell_focus_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109845,(1),null);
var cell_focus = vec__109845;
var set_cell_focus = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109842,(1),null);
var vec__109848 = logseq.shui.table.v2.use_dynamic_widths(data);
var dynamic_widths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109848,(0),null);
var handle_cell_width_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109848,(1),null);
var get_view_prop_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.table.v2.get_view_prop,context);
var table_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"set-cell-hover","set-cell-hover",1045629376),new cljs.core.Keyword(null,"cell-focus","cell-focus",1530044451),new cljs.core.Keyword(null,"render-cell","render-cell",-515359581),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047),new cljs.core.Keyword(null,"total-rows","total-rows",1745495528),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"color-gradient","color-gradient",1884828173),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"compact?","compact?",1216893298),new cljs.core.Keyword(null,"set-cell-focus","set-cell-focus",1908320916),new cljs.core.Keyword(null,"cell-hover","cell-hover",-1799187434),new cljs.core.Keyword(null,"dynamic-widths","dynamic-widths",-497830473),new cljs.core.Keyword(null,"stripes?","stripes?",1562692216),new cljs.core.Keyword(null,"borders?","borders?",-440383042)],[set_cell_hover,cell_focus,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.shui.table.v2.render_cell_in_context,context),logseq.shui.table.v2.color__GT_gray(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"logseq.color","logseq.color",-42542213)], null))),get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.color","logseq.color",-42542213),color_accent),linear_gradient,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data)),logseq.shui.table.v2.get_columns(block,data),(function (){var or__5043__auto__ = cljs.core.not_empty(cell_focus);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_empty(cell_hover);
}
})(),color_gradient,get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.table.headers","logseq.table.headers",-900536583),"none"),get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.table.hover","logseq.table.hover",-1465923417),"cell"),get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.table.compact","logseq.table.compact",615654834),false),set_cell_focus,cell_hover,dynamic_widths,get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.table.stripes","logseq.table.stripes",1430094207),false),get_view_prop_STAR_(new cljs.core.Keyword(null,"logseq.table.borders","logseq.table.borders",-1178350466),true)]);
var cell_padding_width = ((2) * (cljs.core.truth_(new cljs.core.Keyword(null,"compact?","compact?",1216893298).cljs$core$IFn$_invoke$arity$1(table_opts))?logseq.shui.table.v2.CELL_PADDING_COMPACT:logseq.shui.table.v2.CELL_PADDING));
var total_border_width = (cljs.core.count(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table_opts)) * logseq.shui.table.v2.BORDER_WIDTH);
var total_table_width = (total_border_width + logseq.shui.util.rem__GT_px(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cell_padding_width),cljs.core.vals(dynamic_widths)))));
var total_max_col_width = (logseq.shui.util.rem__GT_px((cljs.core.count(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table_opts)) * logseq.shui.table.v2.MAX_WIDTH)) + total_border_width);
var vec__109851 = logseq.shui.table.v2.use_table_flow_at_width(total_table_width,total_max_col_width);
var table_overflow_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109851,(0),null);
var table_underflow_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109851,(1),null);
var handle_root_width_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109851,(2),null);
var cell_col_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),cljs.core.second),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__109829_SHARP_){
return cljs.core.identity(p1__109829_SHARP_);
}),(function (p1__109831_SHARP_,p2__109830_SHARP_){
return new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table_opts).indexOf(logseq.shui.table.v2.last_str(p2__109830_SHARP_).toLowerCase());
})),cljs.core.ffirst(data))));
var table_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table_opts,new cljs.core.Keyword(null,"total-cols","total-cols",181071623),cljs.core.count(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(table_opts)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total-table-width","total-table-width",431452847),total_table_width,new cljs.core.Keyword(null,"table-overflow?","table-overflow?",-729910793),table_overflow_QMARK_,new cljs.core.Keyword(null,"table-underflow?","table-underflow?",-11288232),table_underflow_QMARK_,new cljs.core.Keyword(null,"cell-col-map","cell-col-map",860177618),cell_col_map], 0));
console.log("shui table opts",cljs.core.clj__GT_js(table_opts__$1));

return logseq.shui.table.v2.table_scrollable_overflow(handle_root_width_change,logseq.shui.table.v2.table_container(table_opts__$1,(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(table_opts__$1))?logseq.shui.table.v2.table_gradient_accent(table_opts__$1):null),(function (){var iter__5520__auto__ = (function logseq$shui$table$v2$iter__109864(s__109865){
return (new cljs.core.LazySeq(null,(function (){
var s__109865__$1 = s__109865;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109865__$1);
if(temp__5804__auto__){
var s__109865__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109865__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109865__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109867 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109866 = (0);
while(true){
if((i__109866 < size__5519__auto__)){
var vec__109868 = cljs.core._nth(c__5518__auto__,i__109866);
var group_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109868,(0),null);
var group_row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109868,(1),null);
var row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109868,(2),null);
var _group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109868,(3),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109868,(4),null);
var show_separator_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),group_row_index)) && (((1) < group_index)));
var opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table_opts__$1,new cljs.core.Keyword(null,"group-index","group-index",-144136801),group_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-row-index","group-row-index",459727634),group_row_index,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"show-separator?","show-separator?",-312649107),show_separator_QMARK_], 0));
cljs.core.chunk_append(b__109867,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),group_index))?logseq.shui.table.v2.table_header_row(handle_cell_width_change,row,opts):logseq.shui.table.v2.table_data_row(handle_cell_width_change,row,opts)));

var G__109902 = (i__109866 + (1));
i__109866 = G__109902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109867),logseq$shui$table$v2$iter__109864(cljs.core.chunk_rest(s__109865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109867),null);
}
} else {
var vec__109871 = cljs.core.first(s__109865__$2);
var group_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109871,(0),null);
var group_row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109871,(1),null);
var row_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109871,(2),null);
var _group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109871,(3),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109871,(4),null);
var show_separator_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),group_row_index)) && (((1) < group_index)));
var opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(table_opts__$1,new cljs.core.Keyword(null,"group-index","group-index",-144136801),group_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-row-index","group-row-index",459727634),group_row_index,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"show-separator?","show-separator?",-312649107),show_separator_QMARK_], 0));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),group_index))?logseq.shui.table.v2.table_header_row(handle_cell_width_change,row,opts):logseq.shui.table.v2.table_data_row(handle_cell_width_change,row,opts)),logseq$shui$table$v2$iter__109864(cljs.core.rest(s__109865__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(logseq.shui.table.v2.map_with_all_indices(data));
})()));
}),null,"logseq.shui.table.v2/root");

//# sourceMappingURL=logseq.shui.table.v2.js.map
