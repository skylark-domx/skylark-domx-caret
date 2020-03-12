define([
    "skylark-langx/langx",
    "./carets",
    "skylark-domx-velm",
    "skylark-domx-query",        
    "skylark-domx-eventer"        
],function(langx,carets,velm,$){

    velm.delegate([
        "caret",
        "insertAtCaret",
        "range",
        "selectAll"
    ], carets);

    $.fn.caret = $.wraps.wrapper_value(carets.caret, carets, carets.caret);
    $.fn.range = $.wraps.wrapper_value(carets.range, carets, carets.range);


	return carets;
});