webpackJsonp([29],{

/***/ 430:
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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.stockTransferId = this.$route.params.id;
        this.fetchResourceData();
    },


    data: function data() {
        return {
            total: 0.00,
            stockTransferId: null,
            error: null,
            loading: false,
            stockTransferItems: [],
            stockTransfer: {}
        };
    },
    computed: {
        subTotal: function subTotal() {
            var subTotal = 0.00;
            this.stockTransferItems.forEach(function (row) {
                return subTotal += row.purchase_price * row.transfer_qty;
            });

            return Number(subTotal).toFixed(2);
        }
    },

    methods: {
        fetchResourceData: function fetchResourceData() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/stock-transfers/' + this.stockTransferId).then(function (response) {
                console.log(response.data);
                _this.$set(_this, 'stockTransfer', response.data.stock_transfer[0]);
                _this.$set(_this, 'stockTransferItems', response.data.items);
                _this.loading = false;
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 431:
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
        _c("div", { staticClass: "title" }, [
          _vm._v("\n                STOCK TRANSFER DETAILS\n          ")
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
          [_vm._v(" Preparing data ... ")]
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
      [_vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]
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
        staticClass: "col-md-offset-2 col-md-8"
      },
      [
        _c("div", { staticClass: "preview-details" }, [
          _c(
            "div",
            { staticClass: "pull-right" },
            [
              _c("h3", [_vm._v("STOCK TRANSFER ")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.stockTransfer.stock_transfer_no))]),
              _vm._v(" "),
              _c("span", { staticClass: "label label-success" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.stockTransfer.stock_transfer_status)
                )
              ]),
              _c("br"),
              _vm._v(" "),
              _c("P", [
                _vm._v(
                  "Stock Transfer Date : " +
                    _vm._s(_vm.stockTransfer.stock_transfer_date)
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pull-left" }, [
            _c("h5", [_vm._v("SOURCE WAREHOUSE ")]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [
                _vm._v(_vm._s(_vm.stockTransfer.source_warehouse_name))
              ])
            ]),
            _c("br"),
            _vm._v(" "),
            _c("h5", [_vm._v("DESTINATION WAREHOUSE ")]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [
                _vm._v(_vm._s(_vm.stockTransfer.destination_warehouse_name))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-responsive" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.stockTransferItems, function(stockTransfer) {
                  return _c("tr", [
                    _c("td", { attrs: { width: "55%" } }, [
                      _vm._v(
                        "\n                                [ " +
                          _vm._s(stockTransfer.item_sku) +
                          " ]  " +
                          _vm._s(stockTransfer.item_name) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        " " +
                          _vm._s(stockTransfer.item_desc) +
                          " \n\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { width: "25%" } }, [
                      _vm._v(
                        _vm._s(stockTransfer.transfer_qty) +
                          "  " +
                          _vm._s(stockTransfer.purchase_unit_name) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                                " +
                          _vm._s(stockTransfer.purchase_price) +
                          "\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("currency")(
                              stockTransfer.purchase_price *
                                stockTransfer.transfer_qty,
                              "PHP",
                              2
                            )
                          ) +
                          " "
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.subTotal, "PHP", 2)))
                    ])
                  ])
                ])
              ],
              2
            )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ITEMS & DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("TRANSFERRED QTY")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("RATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("TRANSFER VALUE")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53226e2e", module.exports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(430)
/* template */
var __vue_template__ = __webpack_require__(431)
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
Component.options.__file = "resources\\assets\\js\\components\\StockTransfers\\ViewStockTransfer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53226e2e", Component.options)
  } else {
    hotAPI.reload("data-v-53226e2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});