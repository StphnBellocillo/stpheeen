webpackJsonp([14],{

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("a7607c16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-740d115b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reports.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-740d115b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reports.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\nul.nav-reports {\n    margin-bottom: 0;\n    padding-left: 0;\n    list-style: none;\n    font-family: 'Proxima Nova Regular','Arial',sans-serif;\n}\nul.nav-reports a li  {\n    padding: 10px;\n    border-bottom: 1px dashed #E9E9E9;\n    color: #206ec5;\n    font-size: 15px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 456:
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
//
//
//
//
//
//
//
//


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

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-4", staticStyle: { "margin-right": "100px" } },
      [
        _c("h3", { staticClass: "title" }, [_vm._v("Inventory")]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "nav-reports" },
          [
            _c("router-link", { attrs: { to: "/reports/per-rmr" } }, [
              _c("li", [
                _vm._v(
                  "\n                    ❯ Returned Materials By Customer\n                "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2)
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-4" }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Sales")]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "nav-reports" },
        [
          _c("router-link", { attrs: { to: "/reports/per-salespersons" } }, [
            _c("li", [_vm._v("❯ Reports By Salesperson  ")])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/reports/per-principal" } }, [
            _c("li", [_vm._v("❯ Reports By Principal ")])
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/reports/invoice-register" } }, [
            _c("li", [_vm._v("❯ Invoice Register ")])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "title" }, [_vm._v("Reports")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("li", [
        _vm._v(
          "\n                    ❯ Active Purchase Orders Report (N/A)\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("li", [
        _vm._v(
          "\n                    ❯ Inventory Valuation Summary (N/A)\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("li", [_vm._v("❯ Payments Received (N/A)")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-740d115b", module.exports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(454)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(456)
/* template */
var __vue_template__ = __webpack_require__(457)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\Reports\\Reports.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-740d115b", Component.options)
  } else {
    hotAPI.reload("data-v-740d115b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});