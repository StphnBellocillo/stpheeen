webpackJsonp([77],{

/***/ 422:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.billId = this.$route.params.id;
        this.fetchResourceData(this.billId);
        this.fetchBillPayments();
        this.userCurrentCorporationName = this.$localStorage.get('corp_name');
    },


    data: function data() {
        return {
            userCurrentCorporationName: null,
            poNumber: null,
            contact: [],
            error: null,
            loading: false,
            bill: {},
            items: [],
            payments: []
        };
    },
    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.items.forEach(function (item) {
                return total += item.bill_item_qty * item.bill_item_rate;
            });
            return Number(total).toFixed(2);
        }
    },

    methods: {
        printPurchaseOrder: function printPurchaseOrder() {
            var _this = this;

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + this.bill.bill_id + '/print', { purchase_order_items: this.items, purchase_order: this.bill }).then(function (response) {

                console.log(response);
                _this.loading = false;
            }, function (response) {

                _this.loading = false;
                _this.error = response.statusText;
            });
        },
        addPayment: function addPayment() {

            this.$router.push({ path: '/bills/' + this.billId + '/payments/new' });
        },
        fetchResourceData: function fetchResourceData(billId) {
            var _this2 = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/bills/' + billId).then(function (response) {
                _this2.$set(_this2, 'bill', response.data.bill);
                _this2.$set(_this2, 'items', response.data.items);
                console.log(response);
                _this2.loading = false;
            }, function (response) {

                _this2.loading = false;
                _this2.error = response.statusText;
            });
        },
        fetchBillPayments: function fetchBillPayments() {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/bills/' + this.billId + '/payments').then(function (response) {
                _this3.$set(_this3, 'payments', response.data);
                console.log(response);
                _this3.loading = false;
            }, function (response) {
                _this3.loading = false;
                // error
                _this3.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 423:
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
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "page-title"
      },
      [
        _c("div", { staticClass: "btn-toolbar pull-right" }, [
          _c("div", { staticClass: "btn-group" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.printPurchaseOrder()
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "fa fa-file-pdf-o",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(1)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-group" }, [
            _vm.bill.bill_status != "Paid"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: { type: "button", "data-toggle": "dropdown" },
                    on: {
                      click: function($event) {
                        _vm.addPayment()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    RECORD PAYMENT \n                "
                    )
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]),
        _vm._v(" "),
        !_vm.loading
          ? _c("div", { staticClass: "title" }, [
              _vm._v("\n        " + _vm._s(_vm.bill.bill_no) + "\n      ")
            ])
          : _vm._e()
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
        _c("div", { attrs: { role: "tabpanel" } }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane active",
                attrs: { role: "tabpanel", id: "Receives" }
              },
              [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.payments, function(payment) {
                      return _c("tr", [
                        _c("td", [
                          _vm._v(_vm._s(payment.bill_payment_id) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                     " +
                              _vm._s(payment.bill_payment_date) +
                              "\n                                 "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                  " +
                              _vm._s(payment.bill_payment_amount) +
                              "\n                                 "
                          )
                        ])
                      ])
                    })
                  )
                ])
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-offset-2 col-md-8" }, [
      _vm.bill.bill_type == "Migrated Bill"
        ? _c(
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
              staticClass: "preview-details"
            },
            [
              _c("h3", [_vm._v("BILL")]),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "!loading"
                    }
                  ],
                  staticStyle: {
                    "border-bottom": "2px #ccc dotted",
                    "margin-bottom": "10px"
                  }
                },
                [_vm._v(_vm._s(_vm.bill.bill_no))]
              ),
              _vm._v(" "),
              _c("table", { staticClass: "table", attrs: { width: "50%" } }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("Bill Date ")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.bill.bill_date) + " ")]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td")
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("TERMS")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.bill.bill_payment_terms))]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td")
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("DUE DATE")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.bill.bill_due_date))]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td")
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.bill.bill_total_amount,
                              "",
                              2
                            )
                          )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Payments Made :  (-)")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(_vm._f("currency")(_vm.totalPayments, "", 2)) +
                          " "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Balance Due")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("currency")(_vm.bill.bill_balance_due, "", 2)
                          )
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Notes : ")]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.bill.bill_notes) +
                    "\n            "
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.bill.bill_type != "Migrated Bill"
        ? _c(
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
              staticClass: "preview-details"
            },
            [
              _c(
                "div",
                { staticClass: "pull-right" },
                [
                  _c("h3", { staticClass: "title" }, [_vm._v("Bill")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.bill.bill_no) + " ")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "label label-success" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.bill.bill_status) +
                        "\n                "
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v(" " + _vm._s(_vm.bill.bill_balance_due) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px !important" } }, [
                    _vm._v("Balance Due")
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("Bill Date :  " + _vm._s(_vm.bill.bill_date))
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("TERMS :  " + _vm._s(_vm.bill.bill_payment_terms))
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("DUE DATE :  " + _vm._s(_vm.bill.bill_due_date))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "pull-left",
                  staticStyle: { "margin-top": "10rem !important" }
                },
                [
                  _c("p", { staticStyle: { color: "gray" } }, [
                    _vm._v(" Billed From ")
                  ]),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("p", [_vm._v(" " + _vm._s(_vm.items[0].buss_name))])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("p", { staticStyle: { color: "gray" } }, [
                    _vm._v(" Billed To ")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(" " + _vm._s(_vm.userCurrentCorporationName) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("table", { staticClass: "table table-responsive" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.items, function(item) {
                      return _c("tr", [
                        _c("td", { attrs: { width: "55%" } }, [
                          _vm._v(
                            "\n                           [ " +
                              _vm._s(item.item_sku) +
                              " ] " +
                              _vm._s(item.item_name)
                          ),
                          _c("br"),
                          _vm._v(
                            " " +
                              _vm._s(item.item_desc) +
                              " \n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                            " +
                              _vm._s(item.bill_item_qty) +
                              " " +
                              _vm._s(item.unit_name) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { width: "20%" } }, [
                          _vm._v(_vm._s(item.bill_item_rate) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            " \n                        PHP" +
                              _vm._s(item.bill_item_rate * item.bill_item_qty) +
                              "\n                         "
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
                      _c("td", [_vm._v(" Sub Total")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(" " + _vm._s(_vm.subTotal) + " ")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            Total\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " +
                            _vm._s(
                              Number(_vm.bill.bill_total_amount).toFixed(2)
                            ) +
                            " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            Purchase Discount ( " +
                            _vm._s(
                              _vm.bill.bill_discount_percentage == null
                                ? 0
                                : _vm.bill.bill_discount_percentage
                            ) +
                            "% )\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          " " + _vm._s(_vm.bill.bill_discounted_amount) + " "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            VAT \n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "  " +
                            _vm._s(
                              Number(
                                _vm.bill.bill_total_amount * 0.10714285714
                              ).toFixed(2)
                            ) +
                            " "
                        )
                      ])
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-default", attrs: { type: "button" } },
      [_c("i", { staticClass: "fa fa-pencil" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-default", attrs: { type: "button" } },
      [_c("i", { staticClass: "fa fa-print" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", "data-toggle": "dropdown" }
        },
        [_c("i", { staticClass: "fa fa-bars" })]
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
              _vm._v("Mark as Issued")
            ])
          ]),
          _vm._v(" "),
          _c("li"),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Delete")
            ])
          ])
        ]
      )
    ])
  },
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
                href: "#Receives",
                "aria-controls": "Receives",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("PAYMENTS")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("PAYMENT #")]),
        _vm._v(" "),
        _c("th", [_vm._v("RECEIVED ON")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")])
      ])
    ])
  },
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
        _c("th", [_vm._v("RATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-098fbe33", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(422)
/* template */
var __vue_template__ = __webpack_require__(423)
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
Component.options.__file = "resources\\assets\\js\\components\\Bills\\ViewBill.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-098fbe33", Component.options)
  } else {
    hotAPI.reload("data-v-098fbe33", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});