goog.provide('frontend.fs.protocol');

/**
 * @interface
 */
frontend.fs.protocol.Fs = function(){};

var frontend$fs$protocol$Fs$mkdir_BANG_$dyn_84736 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.mkdir_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.mkdir_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.mkdir!",this$);
}
}
});
frontend.fs.protocol.mkdir_BANG_ = (function frontend$fs$protocol$mkdir_BANG_(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$mkdir_BANG_$dyn_84736(this$,dir);
}
});

var frontend$fs$protocol$Fs$mkdir_recur_BANG_$dyn_84737 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.mkdir_recur_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.mkdir_recur_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.mkdir-recur!",this$);
}
}
});
frontend.fs.protocol.mkdir_recur_BANG_ = (function frontend$fs$protocol$mkdir_recur_BANG_(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$mkdir_recur_BANG_$dyn_84737(this$,dir);
}
});

var frontend$fs$protocol$Fs$readdir$dyn_84738 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.readdir[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.readdir["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.readdir",this$);
}
}
});
/**
 * Read directory and return list of files. Won't read file out.
 *   Used by initial watcher, version files of Logseq Sync.
 *   
 *   => [string]
 */
frontend.fs.protocol.readdir = (function frontend$fs$protocol$readdir(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$readdir$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$readdir$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$readdir$dyn_84738(this$,dir);
}
});

var frontend$fs$protocol$Fs$unlink_BANG_$dyn_84739 = (function (this$,repo,path,opts){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.unlink_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,path,opts) : m__5391__auto__.call(null,this$,repo,path,opts));
} else {
var m__5389__auto__ = (frontend.fs.protocol.unlink_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,path,opts) : m__5389__auto__.call(null,this$,repo,path,opts));
} else {
throw cljs.core.missing_protocol("Fs.unlink!",this$);
}
}
});
frontend.fs.protocol.unlink_BANG_ = (function frontend$fs$protocol$unlink_BANG_(this$,repo,path,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 == null)))))){
return this$.frontend$fs$protocol$Fs$unlink_BANG_$arity$4(this$,repo,path,opts);
} else {
return frontend$fs$protocol$Fs$unlink_BANG_$dyn_84739(this$,repo,path,opts);
}
});

var frontend$fs$protocol$Fs$rmdir_BANG_$dyn_84740 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.rmdir_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.rmdir_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.rmdir!",this$);
}
}
});
frontend.fs.protocol.rmdir_BANG_ = (function frontend$fs$protocol$rmdir_BANG_(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$rmdir_BANG_$dyn_84740(this$,dir);
}
});

var frontend$fs$protocol$Fs$read_file$dyn_84741 = (function (this$,dir,path,opts){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.read_file[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,dir,path,opts) : m__5391__auto__.call(null,this$,dir,path,opts));
} else {
var m__5389__auto__ = (frontend.fs.protocol.read_file["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,dir,path,opts) : m__5389__auto__.call(null,this$,dir,path,opts));
} else {
throw cljs.core.missing_protocol("Fs.read-file",this$);
}
}
});
frontend.fs.protocol.read_file = (function frontend$fs$protocol$read_file(this$,dir,path,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$read_file$arity$4 == null)))))){
return this$.frontend$fs$protocol$Fs$read_file$arity$4(this$,dir,path,opts);
} else {
return frontend$fs$protocol$Fs$read_file$dyn_84741(this$,dir,path,opts);
}
});

var frontend$fs$protocol$Fs$write_file_BANG_$dyn_84742 = (function (this$,repo,dir,path,content,opts){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.write_file_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$6(this$,repo,dir,path,content,opts) : m__5391__auto__.call(null,this$,repo,dir,path,content,opts));
} else {
var m__5389__auto__ = (frontend.fs.protocol.write_file_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$6(this$,repo,dir,path,content,opts) : m__5389__auto__.call(null,this$,repo,dir,path,content,opts));
} else {
throw cljs.core.missing_protocol("Fs.write-file!",this$);
}
}
});
frontend.fs.protocol.write_file_BANG_ = (function frontend$fs$protocol$write_file_BANG_(this$,repo,dir,path,content,opts){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 == null)))))){
return this$.frontend$fs$protocol$Fs$write_file_BANG_$arity$6(this$,repo,dir,path,content,opts);
} else {
return frontend$fs$protocol$Fs$write_file_BANG_$dyn_84742(this$,repo,dir,path,content,opts);
}
});

var frontend$fs$protocol$Fs$rename_BANG_$dyn_84743 = (function (this$,repo,old_path,new_path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.rename_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,old_path,new_path) : m__5391__auto__.call(null,this$,repo,old_path,new_path));
} else {
var m__5389__auto__ = (frontend.fs.protocol.rename_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,old_path,new_path) : m__5389__auto__.call(null,this$,repo,old_path,new_path));
} else {
throw cljs.core.missing_protocol("Fs.rename!",this$);
}
}
});
frontend.fs.protocol.rename_BANG_ = (function frontend$fs$protocol$rename_BANG_(this$,repo,old_path,new_path){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$rename_BANG_$arity$4 == null)))))){
return this$.frontend$fs$protocol$Fs$rename_BANG_$arity$4(this$,repo,old_path,new_path);
} else {
return frontend$fs$protocol$Fs$rename_BANG_$dyn_84743(this$,repo,old_path,new_path);
}
});

var frontend$fs$protocol$Fs$copy_BANG_$dyn_84744 = (function (this$,repo,old_path,new_path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.copy_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,old_path,new_path) : m__5391__auto__.call(null,this$,repo,old_path,new_path));
} else {
var m__5389__auto__ = (frontend.fs.protocol.copy_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,repo,old_path,new_path) : m__5389__auto__.call(null,this$,repo,old_path,new_path));
} else {
throw cljs.core.missing_protocol("Fs.copy!",this$);
}
}
});
frontend.fs.protocol.copy_BANG_ = (function frontend$fs$protocol$copy_BANG_(this$,repo,old_path,new_path){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$copy_BANG_$arity$4 == null)))))){
return this$.frontend$fs$protocol$Fs$copy_BANG_$arity$4(this$,repo,old_path,new_path);
} else {
return frontend$fs$protocol$Fs$copy_BANG_$dyn_84744(this$,repo,old_path,new_path);
}
});

var frontend$fs$protocol$Fs$stat$dyn_84745 = (function (this$,path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.stat[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5391__auto__.call(null,this$,path));
} else {
var m__5389__auto__ = (frontend.fs.protocol.stat["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5389__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Fs.stat",this$);
}
}
});
/**
 * => {:type string :size number :mtime number}
 */
frontend.fs.protocol.stat = (function frontend$fs$protocol$stat(this$,path){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$stat$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$stat$arity$2(this$,path);
} else {
return frontend$fs$protocol$Fs$stat$dyn_84745(this$,path);
}
});

var frontend$fs$protocol$Fs$open_dir$dyn_84746 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.open_dir[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.open_dir["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.open-dir",this$);
}
}
});
/**
 * Open a directory and return the files in it.
 *   Used by open a new graph.
 *   
 *   => {:path string :files [{...}]}
 */
frontend.fs.protocol.open_dir = (function frontend$fs$protocol$open_dir(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$open_dir$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$open_dir$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$open_dir$dyn_84746(this$,dir);
}
});

var frontend$fs$protocol$Fs$get_files$dyn_84747 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.get_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.get_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.get-files",this$);
}
}
});
/**
 * Almost the same as `open-dir`. For returning files.
 *   Used by re-index/refresh.
 *   
 *   => [{:path string :content string}] (absolute path)
 */
frontend.fs.protocol.get_files = (function frontend$fs$protocol$get_files(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$get_files$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$get_files$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$get_files$dyn_84747(this$,dir);
}
});

var frontend$fs$protocol$Fs$watch_dir_BANG_$dyn_84748 = (function (this$,dir,options){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.watch_dir_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,dir,options) : m__5391__auto__.call(null,this$,dir,options));
} else {
var m__5389__auto__ = (frontend.fs.protocol.watch_dir_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,dir,options) : m__5389__auto__.call(null,this$,dir,options));
} else {
throw cljs.core.missing_protocol("Fs.watch-dir!",this$);
}
}
});
frontend.fs.protocol.watch_dir_BANG_ = (function frontend$fs$protocol$watch_dir_BANG_(this$,dir,options){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$3 == null)))))){
return this$.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$3(this$,dir,options);
} else {
return frontend$fs$protocol$Fs$watch_dir_BANG_$dyn_84748(this$,dir,options);
}
});

var frontend$fs$protocol$Fs$unwatch_dir_BANG_$dyn_84749 = (function (this$,dir){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.protocol.unwatch_dir_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5391__auto__.call(null,this$,dir));
} else {
var m__5389__auto__ = (frontend.fs.protocol.unwatch_dir_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__5389__auto__.call(null,this$,dir));
} else {
throw cljs.core.missing_protocol("Fs.unwatch-dir!",this$);
}
}
});
frontend.fs.protocol.unwatch_dir_BANG_ = (function frontend$fs$protocol$unwatch_dir_BANG_(this$,dir){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$protocol$Fs$unwatch_dir_BANG_$arity$2 == null)))))){
return this$.frontend$fs$protocol$Fs$unwatch_dir_BANG_$arity$2(this$,dir);
} else {
return frontend$fs$protocol$Fs$unwatch_dir_BANG_$dyn_84749(this$,dir);
}
});


//# sourceMappingURL=frontend.fs.protocol.js.map
