webpackJsonp([62],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    this.itemId = this.$route.params.id;
    this.fetchResourceData(this.itemId);
    this.fetchItemStocks(this.itemId);
  },


  data: function data() {
    return {

      itemId: null,
      item: [],
      stocks: [],
      error: null,
      loading: false
    };
  },

  methods: {
    viewStockMovements: function viewStockMovements(itemId) {
      this.$router.push({ path: '/inventory/items/' + itemId + '/stock-movements' });
    },
    editItem: function editItem(itemId) {
      this.$router.push({ path: '/items/' + itemId + '/edit' });
    },
    fetchResourceData: function fetchResourceData(itemId) {
      var _this = this;

      this.loading = true;

      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/items/' + itemId).then(function (response) {

        _this.$set(_this, 'item', response.data[0]);

        console.log(response);

        _this.loading = false;
      }, function (response) {
        // error
        _this.error = response.status;
        _this.loading = false;
      });
    },
    fetchItemStocks: function fetchItemStocks(itemId) {
      var _this2 = this;

      this.loading = true;

      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouse-items/' + itemId + '/stocks-per-warehouse').then(function (response) {

        _this2.$set(_this2, 'stocks', response.data.stocks);

        console.log(response);

        _this2.loading = false;
      }, function (response) {
        // error
        _this2.error = response.status;
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    !_vm.loading
      ? _c("div", { staticClass: "page-title" }, [
          _c("div", { staticClass: "btn-toolbar pull-right" }, [
            _c("div", { staticClass: "btn-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.editItem(_vm.item.item_id)
                    }
                  }
                },
                [_c("i", { staticClass: "fa fa-pencil" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [
            _vm._v("\n        " + _vm._s(_vm.item.item_name)),
            _c("br")
          ])
        ])
      : _vm._e(),
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
          [_vm._v(" Preparing data.. ")]
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
      [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "row"
      },
      [
        _c("div", { staticClass: "col-md-10" }, [
          _c("div", { attrs: { role: "tabpanel" } }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "tab-content" }, [
              _c(
                "div",
                {
                  staticClass: "tab-pane active",
                  attrs: { role: "tabpanel", id: "item-details" }
                },
                [
                  _c("div", { staticClass: "panel panel-default" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "panel-body" }, [
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("table", { staticClass: "table" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", [_vm._v(" Item Name ")]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(" " + _vm._s(_vm.item.item_name) + " ")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" Description ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(_vm.item.item_desc) + " ")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" SKU Code ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(_vm.item.item_sku) + " ")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" Purchase Price ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  " " + _vm._s(_vm.item.purchase_price) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" Selling Price ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  " " + _vm._s(_vm.item.retail_price) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" Sales Unit ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(_vm.item.sales_unit) + " ")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v(" Purchase Unit ")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  " " + _vm._s(_vm.item.purchase_unit) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(_vm.item.opening_stock) +
                                      " " +
                                      _vm._s(_vm.item.purchase_unit) +
                                      " "
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel panel-default" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.stocks, function(stock) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(stock.whouse_name) + " ")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(stock.total_qty) +
                            " " +
                            _vm._s(_vm.item.purchase_unit) +
                            " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-default",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.viewStockMovements(stock.item_id)
                              }
                            }
                          },
                          [_vm._v("View Stock Movements")]
                        )
                      ])
                    ])
                  })
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
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
      [
        _c("li", { staticClass: "active", attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              attrs: {
                href: "#item-details",
                "aria-controls": "item-details",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("Item Details")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Item information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Starting Inventory")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 pull-right" }, [
      _c("img", {
        staticClass: "img-responsive",
        attrs: {
          width: "150",
          src:
            "http://humanrobot.biz/littner/wp-content/themes/portfolio-press/images/placeholder-thumbnail-fullwidth.gif"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("STOCK LOCATIONS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("WAREHOUSE NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("STOCKS COUNT")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-20e0c14b", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(427)
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
Component.options.__file = "resources\\assets\\js\\components\\Items\\ViewItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20e0c14b", Component.options)
  } else {
    hotAPI.reload("data-v-20e0c14b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});