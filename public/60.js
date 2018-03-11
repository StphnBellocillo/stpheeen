webpackJsonp([60],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(312)
/* template */
var __vue_template__ = __webpack_require__(313)
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
Component.options.__file = "resources\\assets\\js\\components\\Packages\\AllPackages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdfbccd4", Component.options)
  } else {
    hotAPI.reload("data-v-bdfbccd4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 312:
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

  methods: {}

});

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("div", { staticClass: "title" }, [_vm._v("Packages")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _c("h3", { staticClass: "panel-title" }, [
              _c("i", { staticClass: "fa fa-cube" }),
              _vm._v(" Packages, Not Shipped")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "list-group" }, [
              _c(
                "a",
                { staticClass: "list-group-item ", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 1")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "list-group-item", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 2")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "panel panel-info" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _c("h3", { staticClass: "panel-title" }, [
              _c("i", { staticClass: "fa fa-truck" }),
              _vm._v(" Shipped Packages")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "list-group" }, [
              _c(
                "a",
                { staticClass: "list-group-item ", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 1")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "list-group-item", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 2")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "panel panel-success" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _c("h3", { staticClass: "panel-title" }, [
              _c("i", { staticClass: "fa fa-check" }),
              _vm._v(" Delivered Packages")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "list-group" }, [
              _c(
                "a",
                { staticClass: "list-group-item ", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 1")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "list-group-item", attrs: { href: "#" } },
                [
                  _c("h4", { staticClass: "list-group-item-heading" }, [
                    _vm._v("Package 2")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "list-group-item-text" }, [
                    _vm._v("Content goes here")
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bdfbccd4", module.exports)
  }
}

/***/ })

});