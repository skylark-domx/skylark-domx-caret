/**
 * skylark-domx-carets - The skylark carets library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./carets","skylark-domx-velm","skylark-domx-query","skylark-domx-eventer"],function(e,r,a,n){return a.delegate(["caret","insertAtCaret","range","selectAll"],r),n.fn.caret=n.wraps.wrapper_value(r.caret,r,r.caret),n.fn.range=n.wraps.wrapper_value(r.range,r,r.range),r});
//# sourceMappingURL=sourcemaps/main.js.map
