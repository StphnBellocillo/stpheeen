webpackJsonp([70],{

/***/ 436:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.documentMemoId = this.$route.params.id;
        this.fetchResourceData();
        this.fetchAccounts();
        this.fetchPayments();
    },


    data: function data() {
        return {
            actionText: 'Preparing data...',
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            total: 0.00,
            rmrId: null,
            error: null,
            loading: false,
            documentMemoEntries: [],
            documentMemoPayments: [],
            accounts: [],
            transactionDiscounts: [],
            newPayment: {
                inv_id: null,
                deposit_account_id: null,
                tax_account_id: null,
                tax_amount_witheld: 0.00,
                bank_charge_amount: 0.00,
                payment_amount: 0.00,
                payment_date: null,
                payment_mode: null,
                payment_ref_no: null,
                payment_notes: null
            },
            documentMemo: {}
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
        }
    },

    methods: {
        fetchPayments: function fetchPayments() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + this.documentMemoId + '/payments').then(function (response) {
                console.log(response.data);
                _this.$set(_this, 'documentMemoPayments', response.data);
                _this.loading = false;
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        },
        createJournalEntry: function createJournalEntry() {
            var _this2 = this;

            if (!confirm("Hey, are you sure you want to create a dedicated journal for this document ? ")) {
                return false;
            }

            this.loading = true;
            this.actionText = 'Creating journal entries ...';
            var journal = {

                'currency_id': 1,
                'journ_date': this.documentMemo.memo_date,
                'journ_reference_number': this.documentMemo.memo_ref_no,
                'journ_notes': this.documentMemo.memo_notes,
                'journ_total_amount': this.documentMemo.memo_total_amount,
                'corp_id': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
                'encoded_by': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getAuthenticatedUser(this)
            };

            this.formIsSubmitted = true;
            var responseData = null;
            console.log(journal);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journals/create-from-inventory', journal).then(function (response) {

                console.log(response.data);

                alert('journal id is' + response.data.data.journ_id);
                alert('Journal has been created !');
                // this.$router.push({path : '/invoices' })
                return _this2.createJournalEntries(response.data.data.journ_id);
            }, function (response) {
                this.error = response.statusText;
            });
        },
        createJournalEntries: function createJournalEntries(journalId) {

            var entries = [];
            var vm = this;
            this.documentMemoEntries.map(function (entry, index) {
                var entry = {
                    acct_id: entry.acct_id,
                    journal_id: journalId,
                    tax_id: 1,
                    contact_id: vm.documentMemo.contact_id,
                    entry_debit: entry.entry_debit,
                    entry_credit: entry.entry_credit,
                    entry_desc: entry.entry_description,
                    cost_center_id: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this)
                };
                entries.push(entry);
            });

            console.log("Entries" + JSON.stringify(entries));

            this.storeEntries(entries, journalId);
        },
        storeEntries: function storeEntries(entries, journalId) {
            var _this3 = this;

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                _this3.loading = false;
                console.log(response.data);
                window.location.reload();
                alert("Journal entries has been created ! Please check on accounting module");
            }, function (response) {

                this.loading = false;
                this.error = response.statusText;
            });
        },
        addPayment: function addPayment() {
            this.$router.push({ path: '/document-memorandums/' + this.documentMemoId + '/payments/new' });
        },
        applyToInvoice: function applyToInvoice() {
            this.formIsSubmitted = true;
            this.newPayment.inv_id = this.documentMemo.inv_id, this.newPayment.tax_account_id = 1, this.newPayment.tax_amount_witheld = 0.00, this.newPayment.bank_charge_amount = 0.00, this.newPayment.payment_amount = this.documentMemo.memo_total_amount, this.newPayment.payment_date = this.documentMemo.memo_date, this.newPayment.payment_mode = 'CREDIT NOTE', this.newPayment.payment_ref_no = this.documentMemo.memo_ref_no, this.newPayment.payment_notes = this.documentMemo.memo_notes;
            this.newPayment.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.sendPayment();
        },
        sendPayment: function sendPayment() {
            var _this4 = this;

            this.formIsSubmitted = true;

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.documentMemo.inv_id + '/payments/new', this.newPayment).then(function (response) {
                console.log(response.data);
                alert("Credit note has been credited !");
                _this4.updateCreditNoteStatus();
                _this4.saveText = 'RELOADING PAGE...';
                window.location.reload();
            }, function (response) {
                _this4.loading = false;
                // error
                _this4.error = response.statusText;
            });
        },

        // update credit note status to CREDITED
        updateCreditNoteStatus: function updateCreditNoteStatus() {
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + this.documentMemoId + '/edit').then(function (response) {
                console.log(response.statusText);
            });
        },
        fetchAccounts: function fetchAccounts() {
            var _this5 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/accounts').then(function (response) {
                console.log(response.statusText);
                _this5.$set(_this5, 'accounts', response.data);
            });
        },
        fetchResourceData: function fetchResourceData() {
            var _this6 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + this.documentMemoId).then(function (response) {
                console.log(response.data);
                _this6.$set(_this6, 'documentMemo', response.data.document_memo[0]);
                _this6.$set(_this6, 'documentMemoEntries', response.data.entries);
                _this6.loading = false;
            }, function (response) {
                _this6.loading = false;
                // error
                _this6.error = response.statusText;
            });
        },
        closeModal: function closeModal() {
            $('#modal-show-dialog').modal({ 'display': 'none', 'backdrop': false });
        }
    }

});

/***/ }),

/***/ 437:
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
          ),
          _vm._v(" "),
          _vm.documentMemo.memo_type == "Debit Note"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function($event) {
                      _vm.addPayment()
                    }
                  }
                },
                [_vm._v("Add Payment")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.documentMemo.memo_type == "Debit Note"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function($event) {
                      _vm.createJournalEntry()
                    }
                  }
                },
                [_vm._v("Create Journal")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.documentMemo.memo_type == "Credit Note" &&
          _vm.documentMemo.memo_status != "CREDITED"
            ? _c(
                "a",
                {
                  staticClass: "btn btn-default",
                  attrs: { "data-toggle": "modal", href: "#modal-show-dialog" }
                },
                [_vm._v("Apply to invoice")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v(
            "\n            " + _vm._s(_vm.documentMemo.memo_no) + "\n      "
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
          [_vm._v(" " + _vm._s(_vm.actionText) + " ")]
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
        _c("div", { staticClass: "alert alert-danger" }, [
          _vm._v("\n           Ooopppss.. something went wrong :  "),
          _c("strong", [_vm._v(" " + _vm._s(_vm.error) + " ")])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.documentMemo.memo_type == "Credit Note" &&
    _vm.documentMemo.memo_status != "CREDITED"
      ? _c("div", { staticClass: "col-md-offset-2 col-md-8" }, [
          _c("div", { staticClass: "card card-block bg-white" }, [
            _c("h4", { staticClass: "card-title" }, [
              _vm._v(
                "PENDING FOR INVOICE #" + _vm._s(_vm.documentMemo.inv_no) + " "
              )
            ]),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(
                '\n            This credit note will credit on the accounts receivable account when applied. To apply on invoice, click the "Apply to invoice" button above.\n        '
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.documentMemo.memo_type == "Credit Note" &&
    _vm.documentMemo.memo_status == "CREDITED"
      ? _c("div", { staticClass: "col-md-offset-2 col-md-8" }, [
          _c("div", { staticClass: "card card-block bg-white" }, [
            _c(
              "h4",
              { staticClass: "card-title", staticStyle: { color: "#049004" } },
              [
                _vm._v(
                  "CREDITED ON INVOICE #" +
                    _vm._s(_vm.documentMemo.inv_no) +
                    " "
                )
              ]
            ),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(
                "\n            This credit note has been successfully credited.\n        "
              )
            ])
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
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "col-md-offset-2 col-md-8"
      },
      [
        _vm.documentMemo.memo_type == "Debit Note"
          ? _c("div", { attrs: { role: "tabpanel" } }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane active",
                    attrs: { role: "tabpanel", id: "payments" }
                  },
                  [
                    _c("table", { staticClass: "table table-hover" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.documentMemoPayments, function(payment) {
                          return _c("tr", [
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(payment.memo_payment_date) + " "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(" " + _vm._s(payment.acct_name) + " ")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(payment.memo_payment_ref_no) + " "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(payment.memo_payment_mode) + " "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(payment.memo_payment_amount) + " "
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
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "preview-details" }, [
          _c(
            "div",
            { staticClass: "pull-right" },
            [
              _vm.documentMemo.memo_type == "Credit Note"
                ? _c("h3", [_vm._v(" CREDIT NOTE ")])
                : _vm._e(),
              _vm._v(" "),
              _vm.documentMemo.memo_type == "Debit Note"
                ? _c("h3", [_vm._v(" DEBIT NOTE ")])
                : _vm._e(),
              _vm._v(" "),
              _c("p", [_vm._v(" " + _vm._s(_vm.documentMemo.memo_no) + " ")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(" Ref #: " + _vm._s(_vm.documentMemo.memo_ref_no) + " ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(" Balance :   "),
                _c("strong", [
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm._f("currency")(
                          _vm.documentMemo.memo_balance_amount,
                          "",
                          2
                        )
                      ) +
                      " "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "label label-success" }, [
                _vm._v(
                  "\n                " + _vm._s(_vm.documentMemo.memo_status)
                )
              ]),
              _c("br"),
              _vm._v(" "),
              _c("P", [_vm._v("DATE : " + _vm._s(_vm.documentMemo.memo_date))])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pull-left" }, [
            _c("h5", [_vm._v("ISSUED TO ")]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [
                _vm._v(_vm._s(_vm.documentMemo.contact_company_name))
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                _vm._s(_vm.documentMemo.contact_company_city) +
                  ",\n                 " +
                  _vm._s(_vm.documentMemo.contact_company_country) +
                  " "
              )
            ])
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-responsive" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.documentMemoEntries, function(memo) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(memo.acct_name) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(memo.entry_description) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(memo.entry_debit) + " ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(memo.entry_credit) + " ")])
                ])
              })
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-show-dialog" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Deposit this payment to ")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newPayment.deposit_account_id,
                        expression: "newPayment.deposit_account_id"
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
                        _vm.$set(
                          _vm.newPayment,
                          "deposit_account_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.accounts, function(account) {
                    return _c(
                      "option",
                      { domProps: { value: account.acct_id } },
                      [_vm._v(_vm._s(account.acct_name))]
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
                  staticClass: "btn btn-default",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-outline",
                  attrs: { disabled: _vm.formIsSubmitted, type: "button" },
                  on: {
                    click: function($event) {
                      _vm.applyToInvoice()
                    }
                  }
                },
                [
                  _vm.formIsSubmitted
                    ? _c("span", {
                        domProps: { innerHTML: _vm._s(_vm.saveText) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.formIsSubmitted
                    ? _c("span", [_vm._v(" SAVE ")])
                    : _vm._e()
                ]
              )
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
                href: "#payments",
                "aria-controls": "payments",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("Payments")]
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ACCOUNT")]),
        _vm._v(" "),
        _c("th", [_vm._v("DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("DEBIT")]),
        _vm._v(" "),
        _c("th", [_vm._v("CREDIT")])
      ])
    ])
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Account Selection")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4681a249", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(436)
/* template */
var __vue_template__ = __webpack_require__(437)
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
Component.options.__file = "resources\\assets\\js\\components\\DocumentMemorandums\\ViewDocumentMemorandum.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4681a249", Component.options)
  } else {
    hotAPI.reload("data-v-4681a249", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});