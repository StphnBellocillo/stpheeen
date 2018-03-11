webpackJsonp([38],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var url = '';
/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        console.log('Room Component ready.');
        // this.fetchData()
    },


    data: function data() {
        return {
            rooms: []
        };
    },

    methods: {

        fetchData: function fetchData() {
            var _this = this;

            this.$http.get(url + '/api/rooms').then(function (response) {
                _this.$set(_this, 'rooms', response.data);
            });
        }
    }

});

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "no-padding" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [_c("settings-menu")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [_c("router-view")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3605c916", module.exports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(480)
/* template */
var __vue_template__ = __webpack_require__(481)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Settings\\Settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3605c916", Component.options)
  } else {
    hotAPI.reload("data-v-3605c916", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});