(function (root) {
  var jQuery = function () {
    return new jQuery.prototype.init();
  };

  jQuery.fn = jQuery.prototype = {
    init: function () {},
    css: function () {},
  };

  jQuery.fn.extend = jQuery.extend = function () {
    var target = arguments[0] || {};
    var length = arguments.length;
    var i = 1;
    var deep = false;
    var option, name, copy, src, copyIsArray, clone;

    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1];
      i = 2;
    }

    if (typeof target !== "object") {
      target = {};
    }

    if (length === i) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      if ((option = arguments[i]) != null) {
        for (name in option) {
          copy = option[name];
          src = target[name];
          if (deep && (jQuery.isPlainObjecy(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObjecy(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy != undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  };

  // 共享原型对象
  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.extend({
    isPlainObjecy: function (obj) {
      return toString.call(obj) === "[object Object]";
    },
    isArray: function (obj) {
      return toString.call(obj) === "[object Array]";
    },
  });

  root.$ = root.jQuery = jQuery;
})(this);
