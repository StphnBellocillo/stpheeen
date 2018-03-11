webpackJsonp([66],{

/***/ 424:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.itemId = this.$route.params.item_id;
        this.fetchInventoryItemMovements();
        this.fetchWarehouses();
    },
    data: function data() {

        return {

            itemId: null,
            item: [],
            warehouses: [],
            warehouseItemLogs: [],
            warehouseItemMovements: [],
            error: null,
            loading: true
        };
    },


    methods: {
        showItemMovementsOnWarehouse: function showItemMovementsOnWarehouse(warehouseId) {
            var vm = this;
            var queryResult = linq.from(this.warehouseItemLogs).where(function (item) {
                return item.whouse_id == warehouseId;
            }).toArray();
            console.log(JSON.stringify(queryResult));
            this.warehouseItemMovements = queryResult;
        },
        fetchInventoryItemMovements: function fetchInventoryItemMovements() {
            var _this = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouse-items/' + this.itemId + '/stock-movements').then(function (response) {

                _this.$set(_this, 'warehouseItemLogs', response.data.item_movements);
                _this.$set(_this, 'item', response.data.item[0]);
                _this.loading = false;
            });
        },
        fetchWarehouses: function fetchWarehouses() {
            var _this2 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses').then(function (response) {
                console.log(response.statusText);
                _this2.$set(_this2, 'warehouses', response.data);
            });
        }
    }

});

/***/ }),

/***/ 425:
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
            value: !_vm.loading && !_vm.error,
            expression: "!loading && !error"
          }
        ],
        staticClass: "page-title"
      },
      [
        _c("div", { staticClass: "btn-toolbar pull-right" }, [
          _c(
            "div",
            { staticClass: "btn-toolbar pull-right" },
            [
              _c(
                "router-link",
                { staticClass: "text-link", attrs: { to: "/inventory" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" }
                    },
                    [
                      _c("i", { staticClass: "icon-arrow-left" }),
                      _vm._v(" Back to Inventory\n                ")
                    ]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v(" Inventory > Item Movements \n        \n      ")
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
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("h4", [_vm._v(_vm._s(_vm.item.item_name) + " ")]),
          _vm._v(" "),
          _c("table", { staticClass: "table" }, [
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v(" Description ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(_vm.item.item_desc) + " ")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v(" SKU Code ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(_vm.item.item_sku) + " ")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v(" Primary Unit ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(_vm.item.unit_name) + " ")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v(" Purchase Price ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(_vm.item.purchase_price) + " ")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v(" Selling Price ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(_vm.item.retail_price) + " ")])
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { attrs: { role: "tabpanel" } }, [
        _c(
          "ul",
          { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._l(_vm.warehouses, function(warehouse) {
              return _c("li", { attrs: { role: "presentation" } }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#warehouse",
                      "aria-controls": "warehouse",
                      role: "tab",
                      "data-toggle": "tab"
                    },
                    on: {
                      click: function($event) {
                        _vm.showItemMovementsOnWarehouse(warehouse.whouse_id)
                      }
                    }
                  },
                  [_vm._v(" " + _vm._s(warehouse.whouse_name) + " ")]
                )
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tab-content" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane active",
              attrs: { role: "tabpanel", id: "all" }
            },
            [
              _c(
                "table",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading && !_vm.error,
                      expression: "!loading && !error"
                    }
                  ],
                  staticClass: "table table-hover "
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.warehouseItemLogs, function(item) {
                      return _c("tr", [
                        _c("td", [
                          _vm._v(" " + _vm._s(item.transaction_date) + " ")
                        ]),
                        _vm._v(" "),
                        item.whouse_item_total_stocks >= 0
                          ? _c("td", [
                              _vm._v(
                                _vm._s(item.whouse_item_total_stocks) + " "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks >= 0
                          ? _c("td", [_vm._v("0.00")])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks < 0
                          ? _c("td", [_vm._v(" 0.00 ")])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks < 0
                          ? _c("td", [
                              _vm._v(
                                _vm._s(item.whouse_item_total_stocks) + " "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(item.whouse_item_stock_type) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.whouse_name) + " ")])
                      ])
                    })
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane",
              attrs: { role: "tabpanel", id: "warehouse" }
            },
            [
              _c(
                "table",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading && !_vm.error,
                      expression: "!loading && !error"
                    }
                  ],
                  staticClass: "table table-hover "
                },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.warehouseItemMovements, function(item) {
                      return _c("tr", [
                        item.whouse_item_total_stocks >= 0
                          ? _c("td", [
                              _vm._v(
                                _vm._s(item.whouse_item_total_stocks) + " "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks >= 0
                          ? _c("td", [_vm._v("0.00")])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks < 0
                          ? _c("td", [_vm._v(" 0.00 ")])
                          : _vm._e(),
                        _vm._v(" "),
                        item.whouse_item_total_stocks < 0
                          ? _c("td", [
                              _vm._v(
                                _vm._s(item.whouse_item_total_stocks) + " "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(item.whouse_item_stock_type) + " ")
                        ])
                      ])
                    })
                  )
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("img", {
        staticClass: "img-responsive",
        attrs: {
          src:
            "http://www.myiconfinder.com/uploads/iconsets/256-256-323c59a9f2afd00a83d41dcf738c5978.png"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "active", attrs: { role: "presentation" } },
      [
        _c(
          "a",
          {
            attrs: {
              href: "#all",
              "aria-controls": "all",
              role: "tab",
              "data-toggle": "tab"
            }
          },
          [_vm._v("All Movements")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" DATETIME  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" IN  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" OUT  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" CLASSIFICATION  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" WAREHOUSE  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" IN  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" OUT  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" CLASSIFICATION  ")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75225b81", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(424)
/* template */
var __vue_template__ = __webpack_require__(425)
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
Component.options.__file = "resources\\assets\\js\\components\\Inventories\\ViewInventoryItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75225b81", Component.options)
  } else {
    hotAPI.reload("data-v-75225b81", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});