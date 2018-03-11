webpackJsonp([65],{

/***/ 404:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.invoiceId = this.$route.params.id;
        this.fetchResourceData(this.invoiceId);
        this.fetchPayments();
    },


    data: function data() {
        return {

            invoiceItems: [],
            invoice: {},
            error: null,
            loading: false,
            payments: [],
            salesDiscounts: [],
            invoiceJournals: []
        };
    },

    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.invoiceItems.forEach(function (item) {
                return total += item.inv_item_qty * item.inv_item_rate;
            });
            return Number(total).toFixed(2);
        },
        totalPayments: function totalPayments() {
            var payments = 0;

            this.payments.forEach(function (payment) {
                return payments += parseFloat(payment.payment_amount);
            });
            console.log("total payments : " + payments);
            return Number(payments).toFixed(2);
        },
        taxAmountWitheld: function taxAmountWitheld() {
            var amount = 0;
            this.payments.forEach(function (payment) {
                return amount += parseFloat(payment.tax_amount_witheld);
            });
            console.log("tax : " + amount);
            return Number(amount).toFixed(2);
        }
    },

    methods: {
        getInvoiceJournals: function getInvoiceJournals() {
            var _this = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId + '/journals?ref_no=' + this.invoice.inv_ref_no).then(function (response) {

                _this.$set(_this, 'invoiceJournals', response.data);

                console.log("invoice journals " + response.data);
            }, function (response) {
                // error
                _this.error = response.status;
                _this.loading = false;
            });
        },
        archiveInvoice: function archiveInvoice() {
            var _this2 = this;

            if (confirm("Are you sure you want to archive this invoice ? This action is irreversible")) {
                this.loading = true;

                this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId).then(function (response) {

                    console.log(response.data);
                    alert("Invoice has been archive !");
                    _this2.$router.push({ path: '/invoices' });
                    _this2.loading = false;
                }, function (response) {
                    // error
                    _this2.error = response.status;
                    _this2.loading = false;
                });
            }
        },
        fetchSalesDiscounts: function fetchSalesDiscounts() {
            var _this3 = this;

            // console.log("getting discounts" + this.salesOrder.so_no )
            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/sales-orders/' + this.invoice.inv_order_no + '/discounts').then(function (response) {

                _this3.$set(_this3, 'salesDiscounts', response.data.sales_discounts);

                console.log("sales discounts " + response.data);

                _this3.loading = false;
            }, function (response) {
                // error
                _this3.error = response.status;
                _this3.loading = false;
            });
        },
        exportToPdf: function exportToPdf() {
            var _this4 = this;

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/' + this.invoice.inv_id + '/export-pdf', { invoice_items: this.invoiceItems, invoice: this.invoice }).then(function (response) {

                console.log(response);
                _this4.loading = false;
                // this.closeModal()
            }, function (response) {

                _this4.loading = false;
                _this4.error = response.statusText;
            });
        },
        printInvoice: function printInvoice() {
            this.$router.push({ path: '/invoices/' + this.invoiceId + '/print' });
        },
        addReturns: function addReturns() {
            this.$router.push({ path: '/invoices/' + this.invoiceId + '/returns/new' });
        },
        addPayment: function addPayment() {

            this.$router.push({ path: '/invoices/' + this.invoiceId + '/payments/new' });
        },
        fetchResourceData: function fetchResourceData(invoiceId) {
            var _this5 = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + invoiceId).then(function (response) {

                console.log(response.data);

                _this5.$set(_this5, 'invoiceItems', response.data.items);
                _this5.$set(_this5, 'invoice', response.data.invoice);

                _this5.fetchSalesDiscounts();
                _this5.getInvoiceJournals();

                console.log(response);

                _this5.loading = false;
            }, function (response) {
                _this5.loading = false;
                // error
                _this5.error = response.statusText;
            });
        },
        fetchPayments: function fetchPayments() {
            var _this6 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId + '/payments').then(function (response) {

                _this6.$set(_this6, 'payments', response.data);
            });
        }
    }

});

/***/ }),

/***/ 405:
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
          _c("div", { staticClass: "btn-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.exportToPdf()
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
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function($event) {
                    _vm.printInvoice()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-print" })]
            )
          ]),
          _vm._v(" "),
          _vm.invoice.inv_type == "Regular Invoice"
            ? _c("div", { staticClass: "btn-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default ",
                    attrs: {
                      type: "button",
                      disabled: _vm.invoice.inv_balance_amount == "0.00"
                    },
                    on: {
                      click: function($event) {
                        _vm.addReturns()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        ISSUE RETURNS\n                    "
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "btn-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default ",
                attrs: {
                  disabled: _vm.invoice.inv_balance_amount == "0.00",
                  type: "button"
                },
                on: {
                  click: function($event) {
                    _vm.addPayment()
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Record Transaction \n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-danger ",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.archiveInvoice()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-trash" })]
            )
          ])
        ]),
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
            staticClass: "title"
          },
          [
            _vm._v(
              "\n              " + _vm._s(_vm.invoice.inv_no) + "\n          "
            )
          ]
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
        _vm.invoice.inv_type == "Migrated Invoice"
          ? _c(
              "div",
              [
                _c("h3", [_vm._v("INVOICE")]),
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
                  [_vm._v(_vm._s(_vm.invoice.inv_no))]
                ),
                _vm._v(" "),
                _c("P", [
                  _vm._v("INVOICE DATE : " + _vm._s(_vm.invoice.inv_date))
                ]),
                _vm._v(" "),
                _c("P", [
                  _vm._v("TERMS : " + _vm._s(_vm.invoice.inv_payment_terms))
                ]),
                _vm._v(" "),
                _c("P", [
                  _vm._v("DUE DATE : " + _vm._s(_vm.invoice.inv_due_date))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "pull-right" },
                  [
                    _c("strong", [
                      _vm._v(
                        "Total :   " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.invoice.inv_total_amount,
                              "",
                              2
                            )
                          )
                      )
                    ]),
                    _c("Br"),
                    _vm._v(" "),
                    _c("strong", [
                      _vm._v(
                        "Payments Made :  (-) " +
                          _vm._s(_vm._f("currency")(_vm.totalPayments, "", 2))
                      )
                    ]),
                    _c("Br"),
                    _vm._v(" "),
                    _c("strong", [
                      _vm._v(
                        " Balance Due : " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.invoice.inv_balance_amount,
                              "",
                              2
                            )
                          ) +
                          " "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.invoice.inv_type == "Regular Invoice"
          ? _c("div", { staticClass: "preview-details" }, [
              _c("span", { staticClass: "pull-left" }, [
                _vm._v("\n                Issued To :"),
                _c("br"),
                _vm._v(" "),
                !_vm.loading
                  ? _c(
                      "p",
                      { staticStyle: { "text-transform": "uppercase" } },
                      [
                        _c("strong", [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.invoiceItems[0].contact_company_name)
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "TIN : " + _vm._s(_vm.invoiceItems[0].contact_tin_no) + " "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticStyle: { "text-transform": "none" } }, [
                  _c("strong", [_vm._v("ADDRESS :")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(_vm._s(_vm.invoiceItems[0].contact_street) + " "),
                  _c("br"),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.invoiceItems[0].contact_brgy) +
                      " "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.invoiceItems[0].contact_city) +
                      "\n                  "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pull-right" },
                [
                  _c("h3", [_vm._v("INVOICE")]),
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
                      ]
                    },
                    [_vm._v(_vm._s(_vm.invoice.inv_no))]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "label label-success" }, [
                    _vm._v(_vm._s(_vm.invoice.inv_status))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._f("currency")(
                          _vm.invoice.inv_balance_amount,
                          "",
                          2
                        )
                      ) + " "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px !important" } }, [
                    _vm._v("Balance Due")
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("INVOICE DATE : " + _vm._s(_vm.invoice.inv_date))
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("TERMS : " + _vm._s(_vm.invoice.inv_payment_terms))
                  ]),
                  _vm._v(" "),
                  _c("P", [
                    _vm._v("DUE DATE : " + _vm._s(_vm.invoice.inv_due_date))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.invoice.inv_type == "Regular Invoice"
                ? _c("table", { staticClass: "table table-responsive" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.invoiceItems, function(item) {
                          return _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\n                            [ " +
                                  _vm._s(item.item_sku) +
                                  " ]  " +
                                  _vm._s(item.item_name) +
                                  " \n                            "
                              ),
                              _c("br"),
                              _vm._v(
                                " " +
                                  _vm._s(item.item_desc) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            parseFloat(item.inv_item_qty) <
                            parseFloat(item.conversion_qty)
                              ? _c("td", [_vm._v(" 0 ")])
                              : _vm._e(),
                            _vm._v(" "),
                            parseFloat(item.inv_item_qty) <
                            parseFloat(item.conversion_qty)
                              ? _c("td", [
                                  _vm._v(_vm._s(item.inv_item_qty) + " ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            parseFloat(item.inv_item_qty) >=
                            parseFloat(item.conversion_qty)
                              ? _c("td", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        Math.floor(
                                          parseInt(item.inv_item_qty) /
                                            parseInt(item.conversion_qty)
                                        )
                                      ) +
                                      "  "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            parseFloat(item.inv_item_qty) >=
                            parseFloat(item.conversion_qty)
                              ? _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      item.inv_item_qty % item.conversion_qty
                                    ) + "  "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm._f("currency")(
                                      item.inv_item_rate,
                                      "PHP",
                                      2
                                    )
                                  ) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm._f("currency")(
                                      item.inv_item_rate * item.inv_item_qty,
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
                          _c("td"),
                          _vm._v(" "),
                          _c("td", [_vm._v(" Sub Total")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm._f("currency")(_vm.subTotal, "PHP", 2)
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
                                  _vm._f("currency")(
                                    _vm.invoice.inv_total_amount,
                                    "PHP",
                                    2
                                  )
                                ) +
                                " "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.salesDiscounts, function(discount) {
                          return _c("tr", [
                            _c("td"),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(discount.discount_name) +
                                  " (" +
                                  _vm._s(discount.tran_discount_percentage) +
                                  "%)\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm._f("currency")(
                                      discount.tran_discount_amount,
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
                                  _vm._f("currency")(
                                    _vm.invoice.inv_total_amount *
                                      0.10714285714,
                                    "PHP",
                                    2
                                  )
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
                          _c("td"),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                         Payment Made\n                     "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { color: "#ff0000" } }, [
                            _vm._v(
                              " (-) " +
                                _vm._s(
                                  _vm._f("currency")(_vm.totalPayments, "", 2)
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
                          _c("td"),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      Amount Witheld\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { color: "#ff0000" } }, [
                            _vm._v(
                              " (-) " +
                                _vm._s(
                                  _vm._f("currency")(
                                    _vm.taxAmountWitheld,
                                    "PHP",
                                    2
                                  )
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
                          _c("td"),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm._f("currency")(
                                      _vm.invoice.inv_balance_amount,
                                      "PHP",
                                      2
                                    )
                                  ) +
                                  " "
                              )
                            ])
                          ])
                        ])
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("p", [_vm._v("Notes : ")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v(" " + _vm._s(_vm.invoice.inv_customer_notes) + " ")
              ]),
              _vm._v(" "),
              !_vm.loading
                ? _c("p", [
                    _vm._v(" Sales Person : "),
                    _c("strong", [
                      _vm._v(
                        " " + _vm._s(_vm.invoiceItems[0].display_name) + " "
                      )
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("h3", { staticStyle: { "margin-top": "80px" } }, [
          _vm._v("Payments Made")
        ]),
        _vm._v(" "),
        _vm.payments.lenght == 0
          ? _c("p", [_vm._v("No payments made yet.")])
          : _vm._e(),
        _vm._v(" "),
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.payments, function(payment) {
              return _c("tr", [
                _c("td", [_vm._v(" " + _vm._s(payment.payment_date) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(payment.acct_name) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(payment.payment_ref_no) + "  ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(payment.payment_mode) + "  ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    " PHP " +
                      _vm._s(
                        _vm._f("currency")(payment.payment_amount, "", 2)
                      ) +
                      "  "
                  )
                ])
              ])
            })
          )
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
        _c("th", [_vm._v("CASE")]),
        _vm._v(" "),
        _c("th", [_vm._v("PCS")]),
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
    return _c("td", [_c("strong", [_vm._v(" Balance Due ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("Deposited To")]),
        _vm._v(" "),
        _c("th", [_vm._v("REFERENCE #")]),
        _vm._v(" "),
        _c("th", [_vm._v("PAYMENT MODE")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-12a903a9", module.exports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(404)
/* template */
var __vue_template__ = __webpack_require__(405)
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
Component.options.__file = "resources\\assets\\js\\components\\Invoices\\ViewInvoice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12a903a9", Component.options)
  } else {
    hotAPI.reload("data-v-12a903a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});