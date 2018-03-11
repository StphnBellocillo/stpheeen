webpackJsonp([84],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(418)
/* template */
var __vue_template__ = __webpack_require__(419)
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
Component.options.__file = "resources\\assets\\js\\components\\ReturnMaterialReceipt\\ViewReturnMaterialReceipt.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f5656fa", Component.options)
  } else {
    hotAPI.reload("data-v-6f5656fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 418:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.rmrId = this.$route.params.id;
        this.fetchResourceData();
    },


    data: function data() {
        return {
            total: 0.00,
            rmrId: null,
            error: null,
            loading: false,
            rmrItems: [],
            discountValues: [],
            transactionDiscounts: [],
            totalDiscount: 0.00,
            rmr: {}
        };
    },
    computed: {
        subTotal: function subTotal() {
            var subTotal = 0.00;
            this.rmrItems.forEach(function (row) {
                return subTotal += row.retail_price * row.return_qty;
            });

            return parseFloat(subTotal, 2);
        },
        grandTotal: function grandTotal() {
            return this.total = (this.subTotal - this.totalContactDiscountedAmount) * 1.12;
            // return Number(this.total).toFixed(2)
        },
        totalAmount: function totalAmount() {
            var _this = this;

            this.rmrItems.forEach(function (row) {
                return _this.total += row.return_qty * row.retail_price;
            });
            return parseFloat(this.total.toFixed(2));
        },
        taxTotal: function taxTotal() {
            var taxAmount = 0;
            taxAmount = this.total * 0.10714285714;
            return parseFloat(taxAmount.toFixed(2));
        },
        totalContactDiscountedAmount: function totalContactDiscountedAmount() {
            var total = 0.00;
            this.transactionDiscounts.map(function (discount, key) {
                total += parseFloat(discount.tran_discount_amount);
            });
            return total;
        }
    },

    methods: {
        printRMR: function printRMR() {
            this.$router.push({ path: '/return-material-receipts/' + this.rmrId + '/print' });
        },
        fetchResourceData: function fetchResourceData() {
            var _this2 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/return-material-receipts/' + this.rmrId).then(function (response) {
                console.log(response.data);
                _this2.$set(_this2, 'rmr', response.data.rmr[0]);
                _this2.$set(_this2, 'rmrItems', response.data.items);
                _this2.loading = false;
                _this2.fetchTransactionDiscounts();
            }, function (response) {
                _this2.loading = false;
                // error
                _this2.error = response.statusText;
            });
        },
        fetchTransactionDiscounts: function fetchTransactionDiscounts() {
            var _this3 = this;

            this.loading = true;
            this.discountValues = [];
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/transaction-discounts/RMRID-' + this.rmrId).then(function (response) {

                _this3.$set(_this3, 'transactionDiscounts', response.data);

                console.log(response);

                _this3.loading = false;
            }, function (response) {

                // error
                _this3.error = response.status;
                _this3.loading = true;
            });
        }
    }

});

/***/ }),

/***/ 419:
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
            "button",
            {
              staticClass: "btn btn-default",
              attrs: { title: "Print" },
              on: {
                click: function($event) {
                  _vm.printRMR()
                }
              }
            },
            [_c("i", { staticClass: "fa fa-print" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v("\n            CREDIT NOTE DETAILS\n      ")
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
      [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]
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
              _c("h3", [_vm._v("CREDIT NOTE ")]),
              _vm._v(" "),
              _c("p", [_vm._v(" " + _vm._s(_vm.rmr.rmr_no) + " ")]),
              _vm._v(" "),
              _c("p", [_vm._v(" " + _vm._s(_vm.rmr.return_ref_no) + " ")]),
              _vm._v(" "),
              _c("span", { staticClass: "label label-success" }, [
                _vm._v("\n                " + _vm._s(_vm.rmr.return_status))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("P", [_vm._v("RMR DATE : " + _vm._s(_vm.rmr.return_date))]),
              _vm._v(" "),
              _c("P", [_vm._v("Warehouse : " + _vm._s(_vm.rmr.whouse_name))])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pull-left" }, [
            _c("h5", [_vm._v("ISSUED TO ")]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v(_vm._s(_vm.rmr.contact_company_name))])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                _vm._s(_vm.rmr.contact_company_city) +
                  ",\n                 " +
                  _vm._s(_vm.rmr.contact_company_country) +
                  " "
              )
            ])
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-responsive" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.rmrItems, function(rmr) {
                  return _c("tr", [
                    _c("td", { attrs: { width: "55%" } }, [
                      _vm._v(
                        "\n                            [ " +
                          _vm._s(rmr.item_sku) +
                          " ]  " +
                          _vm._s(rmr.item_name) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        " " +
                          _vm._s(rmr.item_desc) +
                          " \n\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    parseFloat(rmr.return_qty) < parseFloat(rmr.conversion_qty)
                      ? _c("td", { attrs: { width: "25%" } }, [
                          _vm._v(
                            _vm._s(rmr.return_qty) +
                              " " +
                              _vm._s(rmr.sales_unit) +
                              " / 0 " +
                              _vm._s(rmr.purchase_unit_name) +
                              " "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    parseFloat(rmr.return_qty) >= parseFloat(rmr.conversion_qty)
                      ? _c("td", { attrs: { width: "25%" } }, [
                          _vm._v(
                            _vm._s(rmr.return_qty % rmr.conversion_qty) +
                              " " +
                              _vm._s(rmr.sales_unit) +
                              " / " +
                              _vm._s(
                                Math.floor(
                                  parseInt(rmr.return_qty) /
                                    parseInt(rmr.conversion_qty)
                                )
                              ) +
                              "  " +
                              _vm._s(rmr.purchase_unit_name) +
                              " "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(rmr.retail_price) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("currency")(
                              rmr.retail_price * rmr.return_qty,
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
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [_vm._v("Subtotal")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                             " +
                        _vm._s(_vm._f("currency")(_vm.subTotal, "PHP", 2)) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.transactionDiscounts, function(discount, index) {
                  return _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "3" } }, [
                      _vm._v(
                        " " +
                          _vm._s(discount.discount_name) +
                          " (" +
                          _vm._s(
                            Number(
                              parseFloat(discount.tran_discount_percentage)
                            ).toFixed(0)
                          ) +
                          "%)"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                                         " +
                          _vm._s(
                            _vm._f("currency")(
                              discount.tran_discount_amount,
                              "PHP",
                              2
                            )
                          ) +
                          "\n                                    "
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("td", [
                    _c("strong", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("currency")(_vm.grandTotal, "PHP", 2)) +
                          " "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "3" } }, [_vm._v("VAT")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                             " +
                        _vm._s(_vm._f("currency")(_vm.taxTotal, "PHP", 2)) +
                        "\n                        "
                    )
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
        _c("th", [_vm._v("QTY")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("RATE")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "3" } }, [
      _c("strong", [_vm._v(" Total ")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f5656fa", module.exports)
  }
}

/***/ })

});