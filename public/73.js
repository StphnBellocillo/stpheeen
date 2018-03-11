webpackJsonp([73],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(302)
/* template */
var __vue_template__ = __webpack_require__(303)
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
Component.options.__file = "resources\\assets\\js\\components\\Dashboard\\Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb6f2af6", Component.options)
  } else {
    hotAPI.reload("data-v-eb6f2af6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 302:
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


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row",
        staticStyle: { "font-family": "'Proxima Nova'", "font-size": "13px" }
      },
      [
        _c("p", { attrs: { align: "center" } }, [
          _vm._v(
            "\n      WareVent - a warehouse & inventory management solution\n\n    "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-offset-1 col-md-10" }, [
          _c("div", { staticClass: "card bg-white" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-block" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("h3", [_vm._v(" Keep track of your sales ")]),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/sales-orders/new" } }, [
                      _c("p", [
                        _c("i", { staticClass: "fa fa-file fa-2x" }),
                        _vm._v(" Create Sales Orders\n              ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/contacts" } }, [
                      _c("p", [
                        _c("i", { staticClass: "fa fa-heart-o fa-2x" }),
                        _vm._v(" My Contacts\n              ")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("h3", [_vm._v(" Keep track of your purchases ")]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/purchase-orders/new" } },
                      [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-file-text fa-2x" }),
                          _vm._v(" Create Purchase Orders\n              ")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("h3", [_vm._v(" Monitor your inventory ")]),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/items" } }, [
                      _c("p", [
                        _c("i", { staticClass: "fa fa-gift fa-2x" }),
                        _vm._v(" My Items\n              ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/settings/warehouses" } },
                      [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-building-o fa-2x" }),
                          _vm._v(" My Warehouses\n              ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/inventory" } }, [
                      _c("p", [
                        _c("i", { staticClass: "icon-layers fa-2x" }),
                        _vm._v(" My Inventory\n              ")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("h3", [_vm._v(" Generate reports ")]),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/reports/per-rmr" } }, [
                      _c("p", [
                        _c("i", { staticClass: "fa fa-file-text fa-2x" }),
                        _vm._v(
                          " Returned Materials By Customer\n              "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/reports/per-salespersons" } },
                      [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-file-text fa-2x" }),
                          _vm._v(" Reports By SalesPerson\n              ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/reports/per-principal" } },
                      [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-file-text fa-2x" }),
                          _vm._v(" Reports By Principal\n              ")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "title", attrs: { align: "center" } }, [
        _vm._v("Welcome Aboard")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-success text-white" }, [
      _c("div", { staticClass: "pull-left" }, [
        _c("h4", [_vm._v(" Ready to start working ? ")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-controls" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eb6f2af6", module.exports)
  }
}

/***/ })

});