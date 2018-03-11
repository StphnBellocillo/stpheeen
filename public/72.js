webpackJsonp([72],{

/***/ 374:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        this.documentMemoId = this.$route.params.id;
        this.fetchDocumentMemo();
        this.fetchAccounts();
    },


    data: function data() {
        return {

            userCorporationId: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            documentMemoId: null,
            loading: false,
            error: null,
            internalError: false,
            errors: [],
            newPayment: {
                corp_id: null,
                document_memo_id: null,
                deduct_from_account_id: null,
                memo_payment_amount: 0.00,
                memo_payment_date: null,
                memo_payment_mode: null,
                memo_payment_ref_no: null,
                memo_payment_notes: null
            },
            accounts: [],
            documentMemo: {},
            overpaid: false
        };
    },

    methods: {
        checkPayment: function checkPayment() {
            this.overpaid = false;
            this.formIsSubmitted = true;
            if (parseFloat(this.newPayment.memo_payment_amount) > this.documentMemo.memo_balance_due) {

                // alert("Balance :" + this.invoice.inv_balance_amount)
                //overpaid
                this.overpaid = true;
                this.formIsSubmitted = false;
                return false;
            }

            this.addPayment();
        },
        addPayment: function addPayment() {
            var _this = this;

            this.formIsSubmitted = true;
            this.newPayment.document_memo_id = this.documentMemoId;
            this.newPayment.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + this.documentMemoId + '/payments/new', this.newPayment).then(function (response) {
                console.log(response.data);

                _this.formIsSubmitted = false;
                return _this.createJournal();
            }, function (response) {
                if (response.statusText == "Internal Server Error") {
                    _this.errors = [];
                    _this.error = false;
                    _this.internalError = "Internal Server Error";
                    console.log(_this.internalError);
                } else {
                    _this.errors = [];
                    _this.error = true;
                    _this.errors = response.data;
                }

                _this.formIsSubmitted = false;
            });

            //  console.log(response.data);
            //     this.loading = false
            //     alert("Purchase receiving has been created !")
            //     return this.checkForShortLandedOrders()
            //     this.$router.push({ path : '/purchase-receives/'})
            //   },function(response){

            //     if(response.statusText == "Internal Server Error"){
            //             this.errors=[]
            //             this.error = false
            //             this.internalError = "Internal Server Error"
            //             console.log(this.internalError)
            //         }
            //         else{
            //             this.errors=[]
            //             this.error = true
            //             this.errors = response.data
            //         }

            //         this.formIsSubmitted = false
            // });

        },
        createJournal: function createJournal() {
            var _this2 = this;

            var journal = {
                'currency_id': 1,
                'journ_date': this.newPayment.memo_payment_date,
                'journ_reference_number': this.newPayment.memo_payment_ref_no,
                'journ_notes': this.newPayment.memo_payment_notes,
                'journ_total_amount': this.newPayment.memo_payment_amount,
                'corp_id': this.userCorporationId,
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
            var _this3 = this;

            var entries = [{
                acct_id: 24, // accounts receivable id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.documentMemo.contact_id,
                entry_debit: 0.00,
                entry_credit: this.newPayment.memo_payment_amount,
                entry_desc: 'Accounts Receivable',
                cost_center_id: this.userCorporationId
            },
            // cash in bank
            {
                acct_id: this.newPayment.deduct_from_account_id, // account of cash in bank
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.documentMemo.contact_id,
                entry_debit: this.newPayment.memo_payment_amount,
                entry_credit: 0.00,
                entry_desc: 'Cash In Bank/Cash On Hand',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                console.log(response.data);

                // alert('Journal entry has been created !')
                alert('Payment has been recorded  !');
                _this3.$router.push({ path: '/document-memorandums/' + _this3.documentMemoId });
            }, function (response) {

                this.error = response.statusText;
            });
        },
        fetchAccounts: function fetchAccounts() {
            var _this4 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/accounts').then(function (response) {
                console.log(response.statusText);
                _this4.$set(_this4, 'accounts', response.data);
            });
        },
        fetchDocumentMemo: function fetchDocumentMemo() {
            var _this5 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + this.documentMemoId).then(function (response) {
                console.log(response.statusText);
                _this5.$set(_this5, 'documentMemo', response.data.document_memo[0]);
                // populate the textfields
                _this5.newPayment.memo_payment_amount = _this5.documentMemo.memo_balance_amount;
            });
        },
        backToPreviousPage: function backToPreviousPage() {
            this.$router.back();
        },
        startLoadingPlease: function startLoadingPlease() {

            this.loading = true;
        },
        stopLoadingPlease: function stopLoadingPlease() {

            this.loading = false;
        }
    }

});

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "btn-toolbar pull-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-default",
            on: {
              click: function($event) {
                _vm.backToPreviousPage()
              }
            }
          },
          [
            _c("i", { staticClass: "fa fa-arrow-left" }),
            _vm._v(" Back\n           ")
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [
        _vm._v(" " + _vm._s(_vm.documentMemo.memo_no) + " / Record Payment")
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
            value: _vm.internalError,
            expression: "internalError"
          }
        ]
      },
      [
        _c("div", { staticClass: "alert alert-danger" }, [
          _vm._v("\n             Ooopppss.. something went wrong :  "),
          _c("strong", [_vm._v(" " + _vm._s(_vm.internalError) + " ")])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.errors.length != 0
      ? _c(
          "div",
          {
            ref: "formErrors",
            staticClass: "alert",
            staticStyle: { background: "#f0f0f0" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.errors, function(error) {
              return _c("li", { staticStyle: { color: "#fd1414" } }, [
                _vm._v("\n          " + _vm._s(error[0]) + "\n      ")
              ])
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "form-horizontal",
        attrs: { role: "form" },
        on: {
          keyup: function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "enter", 13, $event.key)
            ) {
              return null
            }
            _vm.checkPayment()
          }
        }
      },
      [
        _c("div", { staticClass: "form-content" }, [
          _c("div", { staticClass: "striped" }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "col-md-2 control-label required-field" },
                [_vm._v("Amount Received")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPayment.memo_payment_amount,
                      expression: "newPayment.memo_payment_amount"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "text" },
                  domProps: { value: _vm.newPayment.memo_payment_amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "memo_payment_amount",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "col-md-2 control-label required-field" },
                [_vm._v("Payment Mode")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newPayment.memo_payment_mode,
                        expression: "newPayment.memo_payment_mode"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "49%" },
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
                          "memo_payment_mode",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "CASH" } }, [
                      _vm._v("Cash")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "BANK REMITTANCE" } }, [
                      _vm._v("Bank Remittance")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "BANK TRANSFER" } }, [
                      _vm._v("Bank Transfer")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "CHECK" } }, [
                      _vm._v("Check")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "CREDIT CARD" } }, [
                      _vm._v("Credit Card")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "col-md-2 control-label " }, [
                _vm._v("Deposit To")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newPayment.deduct_from_account_id,
                        expression: "newPayment.deduct_from_account_id"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "49%" },
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
                          "deduct_from_account_id",
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
                      [
                        _vm._v(
                          "\n                                   " +
                            _vm._s(account.acct_name) +
                            "\n                            "
                        )
                      ]
                    )
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "col-md-2 control-label required-field" },
                [_vm._v("Payment Date")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPayment.memo_payment_date,
                      expression: "newPayment.memo_payment_date"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "date" },
                  domProps: { value: _vm.newPayment.memo_payment_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "memo_payment_date",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "col-md-2 control-label required-field" },
                [_vm._v("Reference #")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPayment.memo_payment_ref_no,
                      expression: "newPayment.memo_payment_ref_no"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "text" },
                  domProps: { value: _vm.newPayment.memo_payment_ref_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "memo_payment_ref_no",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "col-md-2 control-label " }, [
                _vm._v("Notes")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPayment.memo_payment_notes,
                      expression: "newPayment.memo_payment_notes"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "3" },
                  domProps: { value: _vm.newPayment.memo_payment_notes },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "memo_payment_notes",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "container-action-bottom" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-outline",
                  attrs: { disabled: _vm.formIsSubmitted, type: "button" },
                  on: {
                    click: function($event) {
                      _vm.checkPayment()
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
                    ? _c("span", [_vm._v(" RECORD PAYMENT ")])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-default", attrs: { type: "button" } },
                [_vm._v(" Cancel")]
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
    return _c("h4", [
      _c("strong", [_vm._v("Jeezz!")]),
      _vm._v(" Almost there but...")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-649a4637", module.exports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(374)
/* template */
var __vue_template__ = __webpack_require__(375)
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
Component.options.__file = "resources\\assets\\js\\components\\DocumentMemorandums\\AddPayment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-649a4637", Component.options)
  } else {
    hotAPI.reload("data-v-649a4637", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});