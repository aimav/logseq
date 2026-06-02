goog.provide('frontend.extensions.graph.pixi');
goog.scope(function(){
  frontend.extensions.graph.pixi.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$d3_force$src$index=shadow.js.require("module$node_modules$d3_force$src$index", {});
var module$node_modules$graphology$dist$graphology_umd_min=shadow.js.require("module$node_modules$graphology$dist$graphology_umd_min", {});
var module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs=shadow.js.require("module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs", {});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_graph_instance !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_graph_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_simulation !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_simulation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_ !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.graph.pixi.Graph = frontend.extensions.graph.pixi.goog$module$goog$object.get(module$node_modules$graphology$dist$graphology_umd_min,"Graph");
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi.colors !== 'undefined')){
} else {
frontend.extensions.graph.pixi.colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"], null);
}
frontend.extensions.graph.pixi.default_style = (function frontend$extensions$graph$pixi$default_style(dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(function (node){
var or__5043__auto__ = node.size;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (8);
}
}),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),(function (node){
var temp__5802__auto__ = frontend.extensions.graph.pixi.goog$module$goog$object.get(node,"parent");
if(cljs.core.truth_(temp__5802__auto__)){
var parent = temp__5802__auto__;
var temp__5804__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,"ls-selected-nodes"))?parent:node.id);
if(cljs.core.truth_(temp__5804__auto__)){
var parent__$1 = temp__5804__auto__;
var v = Math.abs(cljs.core.hash(parent__$1));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.colors,cljs.core.mod(v,cljs.core.count(frontend.extensions.graph.pixi.colors)));
} else {
return null;
}
} else {
return node.color;
}
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),(function (node){
return node.id;
}),new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.TextType.TEXT,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"),new cljs.core.Keyword(null,"padding","padding",1660304693),(4)], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?(function (){var or__5043__auto__ = frontend.colors.get_accent_color();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "#094b5a";
}
})():"#cccccc")], null)], null);
});
frontend.extensions.graph.pixi.default_hover_style = (function frontend$extensions$graph$pixi$default_hover_style(_dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5043__auto__ = frontend.colors.get_accent_color();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "#6366F1";
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(238, 238, 238, 1)",new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#A5B4FC"], null)], null);
});
/**
 * Node forces documentation can be read in more detail here https://d3js.org/d3-force
 */
frontend.extensions.graph.pixi.layout_BANG_ = (function frontend$extensions$graph$pixi$layout_BANG_(nodes,links,link_dist,charge_strength,charge_range){
var simulation = module$node_modules$d3_force$src$index.forceSimulation(nodes);
simulation.force("link",module$node_modules$d3_force$src$index.forceLink().id((function (d){
return d.id;
})).distance(link_dist).links(links)).force("charge",module$node_modules$d3_force$src$index.forceManyBody().distanceMin((1)).distanceMax(charge_range).theta(0.5).strength(charge_strength)).force("collision",module$node_modules$d3_force$src$index.forceCollide().radius(((8) + (18))).iterations((2))).force("x",module$node_modules$d3_force$src$index.forceX((0)).strength(0.02)).force("y",module$node_modules$d3_force$src$index.forceY((0)).strength(0.02)).force("center",module$node_modules$d3_force$src$index.forceCenter()).velocityDecay(0.5);

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,simulation);

return simulation;
});
frontend.extensions.graph.pixi.clear_nodes_BANG_ = (function frontend$extensions$graph$pixi$clear_nodes_BANG_(graph){
return graph.forEachNode((function (node){
return graph.dropNode(node);
}));
});
frontend.extensions.graph.pixi.destroy_instance_BANG_ = (function frontend$extensions$graph$pixi$destroy_instance_BANG_(){
var temp__5804__auto___114613 = new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance));
if(cljs.core.truth_(temp__5804__auto___114613)){
var instance_114614 = temp__5804__auto___114613;
instance_114614.destroy();

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,null);

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,null);
} else {
}

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_,false);
});
frontend.extensions.graph.pixi.stop_simulation_BANG_ = (function frontend$extensions$graph$pixi$stop_simulation_BANG_(){
var temp__5804__auto__ = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5804__auto__)){
var simulation = temp__5804__auto__;
simulation.stop();

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_,true);
} else {
return null;
}
});
frontend.extensions.graph.pixi.resume_simulation_BANG_ = (function frontend$extensions$graph$pixi$resume_simulation_BANG_(){
var temp__5804__auto___114615 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5804__auto___114615)){
var simulation_114616 = temp__5804__auto___114615;
simulation_114616.restart();
} else {
}

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_,false);
});
frontend.extensions.graph.pixi.update_position_BANG_ = (function frontend$extensions$graph$pixi$update_position_BANG_(node,obj){
if(cljs.core.truth_(node)){
try{return node.updatePosition(({"x": obj.x, "y": obj.y}));
}catch (e114581){var e = e114581;
return console.error(e);
}} else {
return null;
}
});
frontend.extensions.graph.pixi.tick_BANG_ = (function frontend$extensions$graph$pixi$tick_BANG_(pixi,_graph,nodes_js,links_js){
return (function (){
try{var nodes_objects = pixi.getNodesObjects();
var edges_objects = pixi.getEdgesObjects();
var seq__114583_114617 = cljs.core.seq(nodes_js);
var chunk__114584_114618 = null;
var count__114585_114619 = (0);
var i__114586_114620 = (0);
while(true){
if((i__114586_114620 < count__114585_114619)){
var node_114621 = chunk__114584_114618.cljs$core$IIndexed$_nth$arity$2(null,i__114586_114620);
var temp__5804__auto___114622 = nodes_objects.get(node_114621.id);
if(cljs.core.truth_(temp__5804__auto___114622)){
var node_object_114623 = temp__5804__auto___114622;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_114623,node_114621);
} else {
}


var G__114624 = seq__114583_114617;
var G__114625 = chunk__114584_114618;
var G__114626 = count__114585_114619;
var G__114627 = (i__114586_114620 + (1));
seq__114583_114617 = G__114624;
chunk__114584_114618 = G__114625;
count__114585_114619 = G__114626;
i__114586_114620 = G__114627;
continue;
} else {
var temp__5804__auto___114628 = cljs.core.seq(seq__114583_114617);
if(temp__5804__auto___114628){
var seq__114583_114629__$1 = temp__5804__auto___114628;
if(cljs.core.chunked_seq_QMARK_(seq__114583_114629__$1)){
var c__5565__auto___114630 = cljs.core.chunk_first(seq__114583_114629__$1);
var G__114631 = cljs.core.chunk_rest(seq__114583_114629__$1);
var G__114632 = c__5565__auto___114630;
var G__114633 = cljs.core.count(c__5565__auto___114630);
var G__114634 = (0);
seq__114583_114617 = G__114631;
chunk__114584_114618 = G__114632;
count__114585_114619 = G__114633;
i__114586_114620 = G__114634;
continue;
} else {
var node_114635 = cljs.core.first(seq__114583_114629__$1);
var temp__5804__auto___114636__$1 = nodes_objects.get(node_114635.id);
if(cljs.core.truth_(temp__5804__auto___114636__$1)){
var node_object_114637 = temp__5804__auto___114636__$1;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_114637,node_114635);
} else {
}


var G__114638 = cljs.core.next(seq__114583_114629__$1);
var G__114639 = null;
var G__114640 = (0);
var G__114641 = (0);
seq__114583_114617 = G__114638;
chunk__114584_114618 = G__114639;
count__114585_114619 = G__114640;
i__114586_114620 = G__114641;
continue;
}
} else {
}
}
break;
}

var seq__114587 = cljs.core.seq(links_js);
var chunk__114588 = null;
var count__114589 = (0);
var i__114590 = (0);
while(true){
if((i__114590 < count__114589)){
var edge = chunk__114588.cljs$core$IIndexed$_nth$arity$2(null,i__114590);
var temp__5804__auto___114642 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5804__auto___114642)){
var edge_object_114643 = temp__5804__auto___114642;
edge_object_114643.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__114644 = seq__114587;
var G__114645 = chunk__114588;
var G__114646 = count__114589;
var G__114647 = (i__114590 + (1));
seq__114587 = G__114644;
chunk__114588 = G__114645;
count__114589 = G__114646;
i__114590 = G__114647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__114587);
if(temp__5804__auto__){
var seq__114587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__114587__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__114587__$1);
var G__114648 = cljs.core.chunk_rest(seq__114587__$1);
var G__114649 = c__5565__auto__;
var G__114650 = cljs.core.count(c__5565__auto__);
var G__114651 = (0);
seq__114587 = G__114648;
chunk__114588 = G__114649;
count__114589 = G__114650;
i__114590 = G__114651;
continue;
} else {
var edge = cljs.core.first(seq__114587__$1);
var temp__5804__auto___114652__$1 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5804__auto___114652__$1)){
var edge_object_114653 = temp__5804__auto___114652__$1;
edge_object_114653.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__114654 = cljs.core.next(seq__114587__$1);
var G__114655 = null;
var G__114656 = (0);
var G__114657 = (0);
seq__114587 = G__114654;
chunk__114588 = G__114655;
count__114589 = G__114656;
i__114590 = G__114657;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e114582){var e = e114582;
console.error(e);

return null;
}});
});
frontend.extensions.graph.pixi.set_up_listeners_BANG_ = (function frontend$extensions$graph$pixi$set_up_listeners_BANG_(pixi_graph){
if(cljs.core.truth_(pixi_graph)){
var _STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var nodes = pixi_graph.getNodesObjects();
var on_drag_end = (function (_node,event){
event.stopPropagation();

var temp__5804__auto___114658 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5804__auto___114658)){
var s_114659 = temp__5804__auto___114658;
if(cljs.core.truth_(event.active)){
} else {
s_114659.alphaTarget((0));
}
} else {
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,false);
});
pixi_graph.on("nodeMousedown",(function (event,node_key){
var temp__5804__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5804__auto____$1)){
var s = temp__5804__auto____$1;
if(cljs.core.truth_((function (){var or__5043__auto__ = event.active;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation_paused_QMARK_);
}
})())){
} else {
s.alphaTarget(0.3).restart();

setTimeout((function (){
return s.alphaTarget((0));
}),(2000));
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,true);
} else {
return null;
}
} else {
return null;
}
}));

pixi_graph.on("nodeMouseup",(function (event,node_key){
var temp__5804__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
return on_drag_end(node,event);
} else {
return null;
}
}));

return pixi_graph.on("nodeMousemove",(function (event,node_key){
var temp__5804__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5804__auto__)){
var node = temp__5804__auto__;
if(cljs.core.truth_(cljs.core.deref(_STAR_dragging_QMARK_))){
return frontend.extensions.graph.pixi.update_position_BANG_(node,event);
} else {
return null;
}
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.extensions.graph.pixi.render_BANG_ = (function frontend$extensions$graph$pixi$render_BANG_(state){
try{if(cljs.core.truth_(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance))){
frontend.extensions.graph.pixi.clear_nodes_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance)));

frontend.extensions.graph.pixi.destroy_instance_BANG_();
} else {
}

var map__114592_114660 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__114592_114661__$1 = cljs.core.__destructure_map(map__114592_114660);
var hover_style_114662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var links_114663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var height_114664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var charge_range_114665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"charge-range","charge-range",509183775));
var charge_strength_114666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var link_dist_114667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"link-dist","link-dist",48179915));
var register_handlers_fn_114668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094));
var dark_QMARK__114669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var style_114670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var nodes_114671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114592_114661__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var style_114672__$1 = (function (){var or__5043__auto__ = style_114670;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_style(dark_QMARK__114669);
}
})();
var hover_style_114673__$1 = (function (){var or__5043__auto__ = hover_style_114662;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_hover_style(dark_QMARK__114669);
}
})();
var graph_114674 = (new frontend.extensions.graph.pixi.Graph());
var nodes_set_114675 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes_114671));
var links_114676__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link){
var and__5041__auto__ = (function (){var G__114593 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_114675.cljs$core$IFn$_invoke$arity$1 ? nodes_set_114675.cljs$core$IFn$_invoke$arity$1(G__114593) : nodes_set_114675.call(null,G__114593));
})();
if(cljs.core.truth_(and__5041__auto__)){
var G__114594 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_114675.cljs$core$IFn$_invoke$arity$1 ? nodes_set_114675.cljs$core$IFn$_invoke$arity$1(G__114594) : nodes_set_114675.call(null,G__114594));
} else {
return and__5041__auto__;
}
}),links_114663));
var nodes_114677__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes_114671);
var links_114678__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__114595){
var map__114596 = p__114595;
var map__114596__$1 = cljs.core.__destructure_map(map__114596);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114596__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__114596__$1,new cljs.core.Keyword(null,"target","target",253001721));
return (((source == null)) || ((target == null)));
}),links_114676__$1);
var nodes_js_114679 = cljs_bean.core.__GT_js(nodes_114677__$1);
var links_js_114680 = cljs_bean.core.__GT_js(links_114678__$2);
var simulation_114681 = frontend.extensions.graph.pixi.layout_BANG_(nodes_js_114679,links_js_114680,link_dist_114667,charge_strength_114666,charge_range_114665);
var seq__114597_114682 = cljs.core.seq(nodes_js_114679);
var chunk__114598_114683 = null;
var count__114599_114684 = (0);
var i__114600_114685 = (0);
while(true){
if((i__114600_114685 < count__114599_114684)){
var node_114686 = chunk__114598_114683.cljs$core$IIndexed$_nth$arity$2(null,i__114600_114685);
try{graph_114674.addNode(node_114686.id,node_114686);
}catch (e114603){var e_114687 = e114603;
console.error(e_114687);
}

var G__114688 = seq__114597_114682;
var G__114689 = chunk__114598_114683;
var G__114690 = count__114599_114684;
var G__114691 = (i__114600_114685 + (1));
seq__114597_114682 = G__114688;
chunk__114598_114683 = G__114689;
count__114599_114684 = G__114690;
i__114600_114685 = G__114691;
continue;
} else {
var temp__5804__auto___114692 = cljs.core.seq(seq__114597_114682);
if(temp__5804__auto___114692){
var seq__114597_114693__$1 = temp__5804__auto___114692;
if(cljs.core.chunked_seq_QMARK_(seq__114597_114693__$1)){
var c__5565__auto___114694 = cljs.core.chunk_first(seq__114597_114693__$1);
var G__114695 = cljs.core.chunk_rest(seq__114597_114693__$1);
var G__114696 = c__5565__auto___114694;
var G__114697 = cljs.core.count(c__5565__auto___114694);
var G__114698 = (0);
seq__114597_114682 = G__114695;
chunk__114598_114683 = G__114696;
count__114599_114684 = G__114697;
i__114600_114685 = G__114698;
continue;
} else {
var node_114699 = cljs.core.first(seq__114597_114693__$1);
try{graph_114674.addNode(node_114699.id,node_114699);
}catch (e114604){var e_114700 = e114604;
console.error(e_114700);
}

var G__114701 = cljs.core.next(seq__114597_114693__$1);
var G__114702 = null;
var G__114703 = (0);
var G__114704 = (0);
seq__114597_114682 = G__114701;
chunk__114598_114683 = G__114702;
count__114599_114684 = G__114703;
i__114600_114685 = G__114704;
continue;
}
} else {
}
}
break;
}

var seq__114605_114705 = cljs.core.seq(links_js_114680);
var chunk__114606_114706 = null;
var count__114607_114707 = (0);
var i__114608_114708 = (0);
while(true){
if((i__114608_114708 < count__114607_114707)){
var link_114709 = chunk__114606_114706.cljs$core$IIndexed$_nth$arity$2(null,i__114608_114708);
var source_114710 = link_114709.source.id;
var target_114711 = link_114709.target.id;
try{graph_114674.addEdge(source_114710,target_114711,link_114709);
}catch (e114611){var e_114712 = e114611;
console.error(e_114712);
}

var G__114713 = seq__114605_114705;
var G__114714 = chunk__114606_114706;
var G__114715 = count__114607_114707;
var G__114716 = (i__114608_114708 + (1));
seq__114605_114705 = G__114713;
chunk__114606_114706 = G__114714;
count__114607_114707 = G__114715;
i__114608_114708 = G__114716;
continue;
} else {
var temp__5804__auto___114717 = cljs.core.seq(seq__114605_114705);
if(temp__5804__auto___114717){
var seq__114605_114718__$1 = temp__5804__auto___114717;
if(cljs.core.chunked_seq_QMARK_(seq__114605_114718__$1)){
var c__5565__auto___114719 = cljs.core.chunk_first(seq__114605_114718__$1);
var G__114720 = cljs.core.chunk_rest(seq__114605_114718__$1);
var G__114721 = c__5565__auto___114719;
var G__114722 = cljs.core.count(c__5565__auto___114719);
var G__114723 = (0);
seq__114605_114705 = G__114720;
chunk__114606_114706 = G__114721;
count__114607_114707 = G__114722;
i__114608_114708 = G__114723;
continue;
} else {
var link_114724 = cljs.core.first(seq__114605_114718__$1);
var source_114725 = link_114724.source.id;
var target_114726 = link_114724.target.id;
try{graph_114674.addEdge(source_114725,target_114726,link_114724);
}catch (e114612){var e_114727 = e114612;
console.error(e_114727);
}

var G__114728 = cljs.core.next(seq__114605_114718__$1);
var G__114729 = null;
var G__114730 = (0);
var G__114731 = (0);
seq__114605_114705 = G__114728;
chunk__114606_114706 = G__114729;
count__114607_114707 = G__114730;
i__114608_114708 = G__114731;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___114732 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto___114732)){
var container_ref_114733 = temp__5804__auto___114732;
var pixi_graph_114734 = (new module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.PixiGraph(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.deref(container_ref_114733),new cljs.core.Keyword(null,"graph","graph",1558099509),graph_114674,new cljs.core.Keyword(null,"style","style",-496642736),style_114672__$1,new cljs.core.Keyword(null,"hoverStyle","hoverStyle",1695150190),hover_style_114673__$1,new cljs.core.Keyword(null,"height","height",1025178622),height_114664], null))));
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_114674,new cljs.core.Keyword(null,"pixi","pixi",808009198),pixi_graph_114734], null));

if(cljs.core.truth_(register_handlers_fn_114668)){
(register_handlers_fn_114668.cljs$core$IFn$_invoke$arity$1 ? register_handlers_fn_114668.cljs$core$IFn$_invoke$arity$1(pixi_graph_114734) : register_handlers_fn_114668.call(null,pixi_graph_114734));
} else {
}

frontend.extensions.graph.pixi.set_up_listeners_BANG_(pixi_graph_114734);

simulation_114681.on("tick",frontend.extensions.graph.pixi.tick_BANG_(pixi_graph_114734,graph_114674,nodes_js_114679,links_js_114680));
} else {
}
}catch (e114591){var e_114735 = e114591;
console.error(e_114735);
}
return state;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
