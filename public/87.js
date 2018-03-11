webpackJsonp([87],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(412)
/* template */
var __vue_template__ = __webpack_require__(413)
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
Component.options.__file = "resources\\assets\\js\\components\\GatePasses\\ViewGatePassSourceOrders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-861509a8", Component.options)
  } else {
    hotAPI.reload("data-v-861509a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
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

var url = '';
/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.gatePassNumber = this.$route.params.id;

        console.log('Room Component ready.');
        // this.fetchData()
    },


    data: function data() {
        return {

            gatePassNumber: null,
            error: false,
            loading: false,
            rooms: []
        };
    },

    methods: {

        fetchData: function fetchData() {
            var _this = this;

            this.loading = true;

            this.$http.get(url + '/api/rooms').then(function (response) {
                _this.$set(_this, 'rooms', response.data);
            }, function (response) {

                _this.error = response.status;
                _this.loading = false;
            });
        },

        viewData: function viewData() {

            this.$router.push({ path: '/invoices/1' });
        }
    }

});

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.error && !_vm.loading,
            expression: "!error && !loading"
          }
        ],
        staticClass: "page-title"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v(
            "Gate Passes > " +
              _vm._s(_vm.gatePassNumber) +
              " > Source of Orders"
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading"
          }
        ],
        staticStyle: { "margin-top": "14rem" },
        attrs: { align: "center" }
      },
      [
        _c("i", { staticClass: "fa fa-spinner fa-spin fa-3x fa-fw" }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticStyle: {
              "font-size": "13px",
              "font-family": "Proxima Nova Regular",
              "margin-top": "5px"
            }
          },
          [_vm._v(" Preparing data... ")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.error,
            expression: "error"
          }
        ]
      },
      [
        _c("div", { staticClass: "load-error" }, [
          _vm._v(" " + _vm._s(_vm.error))
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "center" } }, [
          _vm._v(" An error occured while we load your data. ")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "table",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.error && !_vm.loading,
            expression: "!error && !loading"
          }
        ],
        staticClass: "table table-hover "
      },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v(" INV-0001  ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 5 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" PHP2,250.00 ")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "btn-group" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu",
                    staticStyle: {
                      "font-family": "Proxima Nova Regular !important"
                    }
                  },
                  [
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.viewData()
                            }
                          }
                        },
                        [_vm._v("View Invoice Slip")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(" INV-0002  ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 5 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" PHP2,250.00 ")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "btn-group" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu",
                    staticStyle: {
                      "font-family": "Proxima Nova Regular !important"
                    }
                  },
                  [
                    _c("li", [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.viewData()
                            }
                          }
                        },
                        [_vm._v("View Invoice Slip")]
                      )
                    ])
                  ]
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
    return _c("div", { staticClass: "btn-toolbar pull-right" }, [
      _c("div", { staticClass: "btn-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-outline",
            attrs: { type: "button", "data-toggle": "dropdown" }
          },
          [
            _vm._v("\n                    ACTION "),
            _c("span", { staticClass: "caret" })
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "dropdown-menu",
            staticStyle: { "font-family": "Proxima Nova Regular !important" }
          },
          [
            _c("li", [
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v("Mark as Complete")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "divider" }),
            _vm._v(" "),
            _c("li", [
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v("Empty List")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
                _vm._v("Delete Pick List")
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" INVOICE  # ")]),
        _vm._v(" "),
        _c("th", [_vm._v("NUMBER OF ITEMS")]),
        _vm._v(" "),
        _c("th", [_vm._v("TOTAL AMOUNT")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-861509a8", module.exports)
  }
}

/***/ })

});