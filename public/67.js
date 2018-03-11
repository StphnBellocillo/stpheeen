webpackJsonp([67],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(332)
/* template */
var __vue_template__ = __webpack_require__(333)
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
Component.options.__file = "resources\\assets\\js\\components\\Inventories\\Inventory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2268921a", Component.options)
  } else {
    hotAPI.reload("data-v-2268921a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 332:
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



var vm = this;
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        this.fetchAllInventoryItems();
        this.fetchWarehouses();
    },
    data: function data() {

        return {
            columns: [{
                label: 'SKU',
                field: 'item_sku',
                type: 'string',
                html: false,
                width: '200px',
                filterable: true
            }, {
                label: 'ITEM NAME',
                field: 'item_name',
                html: false,
                filterable: true
            }, {
                label: 'DESC',
                field: 'item_desc',
                html: false,
                filterable: true
            }, {
                label: 'WAREHOUSE',
                field: 'whouse_name',
                html: false,
                filterable: true
            }, {
                label: 'AVL.STOCKS(cases)',
                field: 'total_qty',
                html: false,
                filterable: false
            }, {
                label: 'INVENTORY VALUE',
                field: function field(row) {

                    return (parseFloat(row.total_qty) * parseFloat(row.purchase_price)).formatMoney(2, '.', ',');
                },
                html: false,
                filterable: false
            }, {
                label: 'RETAIL VALUE',
                field: function field(row) {

                    return (parseFloat(row.total_qty * row.conversion_qty) * parseFloat(row.retail_price)).formatMoney(2, '.', ',');
                },
                html: false,
                filterable: false
            }],
            selectedWarehouseToExport: null,
            warehouses: [],
            allWarehouseItems: [],
            warehouseItems: [],
            warehouseItemLogs: [],
            error: null,
            loading: true
        };
    },


    computed: {
        warehouseQtyOnHand: function warehouseQtyOnHand() {}
    },

    methods: {
        getProductCount: function getProductCount(warehouseId) {
            // var  = 0
            return linq.from(this.allWarehouseItems).where(function (item) {
                return item.whouse_id == warehouseId;
            }).count();
        },
        getWarehouseQtyOnHand: function getWarehouseQtyOnHand(warehouseId) {
            var totalQtyOnHand = 0;
            var warehouseItems = linq.from(this.allWarehouseItems).where(function (item) {
                return item.whouse_id == warehouseId;
            }).toArray();
            warehouseItems.forEach(function (item) {
                return totalQtyOnHand += parseFloat(item.total_qty);
            });
            return totalQtyOnHand;
        },
        getWarehouseValue: function getWarehouseValue(warehouseId) {
            var totalWarehouseValue = 0;
            var warehouseItems = linq.from(this.allWarehouseItems).where(function (item) {
                return item.whouse_id == warehouseId;
            }).toArray();
            warehouseItems.forEach(function (item) {
                return totalWarehouseValue += parseFloat(item.total_qty) * parseFloat(item.purchase_price);
            });
            return totalWarehouseValue;
        },
        exportWarehouseDataToCSV: function exportWarehouseDataToCSV() {
            var _this = this;

            // get the warehouse 
            this.fetchItemsByWarehouse(this.selectedWarehouseToExport);
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouse-items/events/export-to-csv', { warehouse_items: this.warehouseItems }).then(function (response) {

                // console.log(response.data)
                _this.loading = false;
            });
        },
        fetchWarehouses: function fetchWarehouses() {
            var _this2 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses').then(function (response) {
                console.log(response.statusText);
                _this2.$set(_this2, 'warehouses', response.data);
            });
        },
        fetchItemsByWarehouse: function fetchItemsByWarehouse(warehouseId) {
            // alert(warehouseId)
            var vm = this;
            var queryResult = linq.from(this.allWarehouseItems).where(function (item) {
                return item.whouse_id == warehouseId;
            }).toArray();
            console.log(JSON.stringify(queryResult));
            this.warehouseItems = queryResult;
        },
        itemCountOnWarehouse: function itemCountOnWarehouse(warehouseId) {
            var vm = this;
            var queryResult = linq.from(this.allWarehouseItems).where(function (item) {
                return item.whouse_id == warehouseId;
            }).toArray();
            return queryResult.length;
        },
        fetchAllInventoryItems: function fetchAllInventoryItems() {
            var _this3 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouse-items').then(function (response) {
                _this3.$set(_this3, 'allWarehouseItems', response.data.warehouse_items);
                // console.log(JSON.stringify(allWarehouseItems))
                _this3.$set(_this3, 'warehouseItemLogs', response.data.warehouse_item_logs);
                _this3.loading = false;
            });
        },
        viewData: function viewData(rmrId) {

            this.$router.push({ path: '/return-material-receipts/' + rmrId });
        },
        viewStockSources: function viewStockSources(row) {
            this.$router.push({ path: '/inventory/items/' + row.item_id + '/stock-movements' });
        }
    }

});

/***/ }),

/***/ 333:
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
        _c("div", { staticClass: "btn-toolbar pull-right" }),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [_vm._v(" Inventory ")])
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
        attrs: { role: "tabpanel" }
      },
      [
        _c(
          "ul",
          { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.warehouses, function(warehouse) {
              return _c("li", { attrs: { role: "presentation" } }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#warehouse",
                      "aria-controls": "tab",
                      role: "tab",
                      "data-toggle": "tab"
                    },
                    on: {
                      click: function($event) {
                        _vm.fetchItemsByWarehouse(warehouse.whouse_id)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(warehouse.whouse_name) +
                        "\n                "
                    )
                  ]
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
              _c("vue-good-table", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading && !_vm.error,
                    expression: "!loading && !error"
                  }
                ],
                attrs: {
                  columns: _vm.columns,
                  rows: _vm.allWarehouseItems,
                  paginate: true,
                  lineNumbers: true,
                  onClick: _vm.viewStockSources,
                  styleClass: _vm.styleClass
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane",
              attrs: { role: "tabpanel", id: "warehouse" }
            },
            [
              _c("vue-good-table", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading && !_vm.error,
                    expression: "!loading && !error"
                  }
                ],
                attrs: {
                  columns: _vm.columns,
                  rows: _vm.warehouseItems,
                  paginate: true,
                  lineNumbers: true,
                  onClick: _vm.viewStockSources,
                  styleClass: _vm.styleClass
                }
              })
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-export-csv" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Warehouse")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedWarehouseToExport,
                        expression: "selectedWarehouseToExport"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { required: "required" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.selectedWarehouseToExport = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.warehouses, function(warehouse) {
                    return _c(
                      "option",
                      { domProps: { value: warehouse.whouse_id } },
                      [_vm._v(_vm._s(warehouse.whouse_name) + " ")]
                    )
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.exportWarehouseDataToCSV()
                    }
                  }
                },
                [_vm._v("Export")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "h3",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading && !_vm.error,
            expression: "!loading && !error"
          }
        ]
      },
      [_vm._v(" INVENTORY SUMMARY ")]
    ),
    _vm._v(" "),
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
          _vm._l(_vm.warehouses, function(warehouse) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(warehouse.whouse_name) + " ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      _vm.getProductCount(warehouse.whouse_id),
                      "",
                      2
                    )
                  ) + " "
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      _vm.getWarehouseQtyOnHand(warehouse.whouse_id),
                      "",
                      2
                    )
                  ) + " "
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    _vm._f("currency")(
                      _vm.getWarehouseValue(warehouse.whouse_id),
                      "PHP",
                      2
                    )
                  ) + " "
                )
              ])
            ])
          })
        )
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
          [_vm._v("ALL WAREHOUSES")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Export Inventory Data to CSV")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" Warehouse")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Product count ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Qty on hand (cases)  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Warehouse Value  ")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2268921a", module.exports)
  }
}

/***/ })

});