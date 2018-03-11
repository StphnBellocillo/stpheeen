webpackJsonp([13],{

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("fb85828a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ade08fb4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintReturnMaterialReceipt.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ade08fb4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintReturnMaterialReceipt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\ntable#tblItems {\n    font-size: 11px !important;\n    position: absolute;\n    margin-top: 260px;\n    width: 600px;\n}\n#tblItems tr td {\n    padding: 1px !important;\n}\n#amountSidebar { \n    margin-left: 760px;\n    position: absolute !important;\n    margin-top: 350px;\n    position: absolute;\n    width: 200px !important;\n}\n#amountSidebar table tr {\n    padding: 0px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 448:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.rmrId = this.$route.params.rmr_id;
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
            rmr: {}
        };
    },
    computed: {
        subTotal: function subTotal() {
            var subTotal = 0.00;
            this.rmrItems.forEach(function (row) {
                return subTotal += row.retail_price * row.return_qty;
            });

            return Number(subTotal).toFixed(2);
        },
        grandTotal: function grandTotal() {
            this.total = (this.subTotal - this.totalContactDiscountedAmount) * 1.12;
            return Number(this.total).toFixed(2);
        },
        totalAmount: function totalAmount() {
            var _this = this;

            this.rmrItems.forEach(function (row) {
                return _this.total += row.return_qty * row.retail_price;
            });
            return Number(this.total).toFixed(2);
        },
        taxTotal: function taxTotal() {
            var taxAmount = 0;

            taxAmount = this.total * 0.10714285714;
            return Number(taxAmount).toFixed(2);
        },
        totalContactDiscountedAmount: function totalContactDiscountedAmount() {

            var total = 0.00;
            if (this.discountValues.length > 0) {

                this.discountValues.forEach(function (discount) {
                    return total += discount;
                });
            }
            return Number(total).toFixed(2);
        },
        getDiscountValues: function getDiscountValues() {

            var vm = this;
            var totalDiscount = 0.00;
            // reset the discountValues
            this.discountValues = [];

            // sum the initial subtotal
            var initialSubtotal = 0;
            var amount = 0;
            var discountedAmount = 0;
            this.rmrItems.forEach(function (row) {
                return initialSubtotal += row.return_qty * parseFloat(row.retail_price);
            });
            console.log("Initial subtotal" + initialSubtotal);
            console.log("Contact discounts" + JSON.stringify(this.transactionDiscounts));

            this.transactionDiscounts.map(function (discount, key) {

                discountedAmount = parseInt(discount.tran_discount_percentage) * initialSubtotal / 100, console.log("Discount percentage : " + discount.tran_discount_percentage), console.log("Discounted amount : " + discountedAmount), amount = initialSubtotal - discountedAmount, initialSubtotal = amount, vm.discountValues.push(parseFloat(discountedAmount));
                totalDiscount += parseFloat(discount.tran_discount_percentage);
            });
        }
    },

    methods: {
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

/***/ 449:
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
        staticClass: "col-md-offset-2 col-md-8",
        staticStyle: { "font-size": "11px !important" }
      },
      [
        _c("div", [
          _c("div", [
            _c(
              "p",
              {
                staticStyle: {
                  position: "absolute",
                  "margin-top": "-20px",
                  "margin-left": "590px",
                  "font-size": "25px"
                }
              },
              [_vm._v(" " + _vm._s(_vm.rmr.rmr_no) + " ")]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticStyle: {
                  position: "absolute",
                  "margin-left": "735px",
                  "margin-top": "60px",
                  "font-size": "18px"
                }
              },
              [_vm._v(_vm._s(_vm.rmr.return_date))]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticStyle: {
                  position: "absolute",
                  "margin-top": "550px",
                  "margin-left": "800px",
                  "font-size": "20px"
                }
              },
              [
                _vm._v(
                  " " + _vm._s(_vm._f("currency")(_vm.grandTotal, "", 2)) + " "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pull-left" }, [
            _c(
              "p",
              {
                staticStyle: {
                  position: "absolute",
                  "margin-top": "90px",
                  "font-size": "20px"
                }
              },
              [_c("strong", [_vm._v(_vm._s(_vm.rmr.contact_company_name))])]
            ),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                _vm._s(_vm.rmr.contact_company_city) +
                  ",\n                     " +
                  _vm._s(_vm.rmr.contact_company_country) +
                  " "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "amountSidebar" } }, [
            _c("table", [
              _c(
                "tbody",
                [
                  _c("tr", [
                    _c("td", [_vm._v("Subtotal : ")]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("currency")(_vm.subTotal, "", 2)) + " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Total : ")]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.grandTotal, "", 2)))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.transactionDiscounts, function(discount, index) {
                    return _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-right", attrs: { colspan: "3" } },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(discount.discount_name) +
                              " (" +
                              _vm._s(
                                Number(discount.discount_percentage).toFixed(0)
                              ) +
                              "%)\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                     " +
                            _vm._s(
                              _vm._f("currency")(
                                _vm.discountValues[index],
                                "",
                                2
                              )
                            ) +
                            "\n                                    " +
                            _vm._s(_vm.getDiscountValues) +
                            "\n                                "
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("VAT")]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " + _vm._s(_vm._f("currency")(_vm.taxTotal, "", 2))
                      )
                    ])
                  ])
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass: "table table-responsive",
              attrs: { id: "tblItems" }
            },
            [
              _c(
                "tbody",
                _vm._l(_vm.rmrItems, function(rmr) {
                  return _c("tr", [
                    parseFloat(rmr.return_qty) < parseFloat(rmr.conversion_qty)
                      ? _c("td", [
                          _vm._v(
                            "\n                                [0] " +
                              _vm._s(rmr.purchase_unit_name) +
                              " & [" +
                              _vm._s(rmr.return_qty) +
                              "] " +
                              _vm._s(rmr.sales_unit) +
                              " of  " +
                              _vm._s(rmr.item_name) +
                              " [ " +
                              _vm._s(rmr.item_sku) +
                              " ]\n                            "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    parseFloat(rmr.return_qty) >= parseFloat(rmr.conversion_qty)
                      ? _c("td", [
                          _vm._v(
                            "\n                             [" +
                              _vm._s(
                                Math.floor(
                                  parseInt(rmr.return_qty) /
                                    parseInt(rmr.conversion_qty)
                                )
                              ) +
                              "]   " +
                              _vm._s(rmr.purchase_unit_name) +
                              " & [" +
                              _vm._s(rmr.return_qty % rmr.conversion_qty) +
                              "] " +
                              _vm._s(rmr.sales_unit) +
                              "  of " +
                              _vm._s(rmr.item_name) +
                              " [ " +
                              _vm._s(rmr.item_sku) +
                              " ]\n\n                             "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          width: "20%",
                          "margin-left": "-130px",
                          position: "absolute"
                        }
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm._f("currency")(
                                rmr.retail_price * rmr.return_qty,
                                "",
                                2
                              )
                            ) +
                            " "
                        )
                      ]
                    )
                  ])
                })
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ade08fb4", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(446)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(448)
/* template */
var __vue_template__ = __webpack_require__(449)
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
Component.options.__file = "resources\\assets\\js\\components\\ReturnMaterialReceipt\\PrintReturnMaterialReceipt.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ade08fb4", Component.options)
  } else {
    hotAPI.reload("data-v-ade08fb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});