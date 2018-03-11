webpackJsonp([77],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(298),
  /* template */
  __webpack_require__(480),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Bills\\AddPayment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddPayment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f06c8836", Component.options)
  } else {
    hotAPI.reload("data-v-f06c8836", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        this.fetchBill();
        this.fetchAccounts();
    },


    data: function data() {
        return {

            userCorporationId: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            billId: null,
            loading: false,
            error: null,
            newPayment: {
                bill_id: null,
                deduct_from_account_id: null,
                tax_account_id: null,
                bill_payment_amount: 0.00,
                bill_payment_date: null,
                bill_payment_mode: null,
                bill_payment_ref_no: null,
                bill_payment_notes: null
            },
            accounts: [],
            bill: null,
            overpaid: false
        };
    },

    methods: {
        checkPayment: function checkPayment() {
            this.overpaid = false;
            this.formIsSubmitted = true;
            if (parseFloat(this.newPayment.bill_payment_amount) > this.bill.bill_balance_due) {

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
            this.newPayment.bill_id = this.billId;
            this.newPayment.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/bills/' + this.billId + '/payments/new', this.newPayment).then(function (response) {
                console.log(response.data);

                _this.formIsSubmitted = false;
                return _this.createJournal();
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
                _this.errors = response.data;
                _this.formIsSubmitted = false;
            });
        },
        createJournal: function createJournal() {
            var _this2 = this;

            var journal = {
                'currency_id': 1,
                'journ_date': this.newPayment.bill_payment_date,
                'journ_reference_number': this.newPayment.bill_payment_ref_no,
                'journ_notes': this.newPayment.bill_payment_notes,
                'journ_total_amount': this.newPayment.bill_payment_amount,
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
                acct_id: 39, // trade payable id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.bill.contact_id,
                entry_debit: this.newPayment.bill_payment_amount,
                entry_credit: 0.00,
                entry_desc: 'Accounts Payable',
                cost_center_id: this.userCorporationId
            },
            // cash in bank
            {
                acct_id: this.newPayment.deduct_from_account_id, // account of cash in bank
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.bill.contact_id,
                entry_debit: 0.00,
                entry_credit: this.newPayment.bill_payment_amount,
                entry_desc: 'Cash In Bank',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                console.log(response.data);

                // alert('Journal entry has been created !')
                alert('Payment has been recorded  !');
                _this3.$router.push({ path: '/bills/' + _this3.billId });
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
        fetchBill: function fetchBill() {
            var _this5 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/bills/' + this.billId).then(function (response) {
                console.log(response.statusText);
                _this5.$set(_this5, 'bill', response.data.bill);
                // populate the textfields
                _this5.newPayment.bill_payment_amount = _this5.bill.bill_balance_due;
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

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.backToPreviousPage()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Back\n           ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(" " + _vm._s(_vm.bill.bill_no) + " / Record Payment")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "margin-top": "14rem"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x fa-fw"
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "13px",
      "font-family": "Proxima Nova Regular",
      "margin-top": "5px"
    }
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), (_vm.error || _vm.errors) ? _c('div', {
    ref: "formErrors",
    staticClass: "alert",
    staticStyle: {
      "background": "#f0f0f0"
    }
  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _vm._l((_vm.errors), function(error) {
    return _c('li', {
      staticStyle: {
        "color": "#fd1414"
      }
    }, [_vm._v("\n          " + _vm._s(error) + "\n      ")])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.overpaid) ? _c('div', [_vm._m(1)]) : _vm._e(), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.checkPayment()
      }
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "striped"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Amount Received")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.bill_payment_amount),
      expression: "newPayment.bill_payment_amount"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.bill_payment_amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.bill_payment_amount = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Payment Mode")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.bill_payment_mode),
      expression: "newPayment.bill_payment_mode"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "49%"
    },
    attrs: {
      "required": "required"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newPayment.bill_payment_mode = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "CASH"
    }
  }, [_vm._v("Cash")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BANK REMITTANCE"
    }
  }, [_vm._v("Bank Remittance")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BANK TRANSFER"
    }
  }, [_vm._v("Bank Transfer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CHECK"
    }
  }, [_vm._v("Check")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREDIT CARD"
    }
  }, [_vm._v("Credit Card")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Deduct From")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.deduct_from_account_id),
      expression: "newPayment.deduct_from_account_id"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "49%"
    },
    attrs: {
      "required": "required"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newPayment.deduct_from_account_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.accounts), function(account) {
    return _c('option', {
      domProps: {
        "value": account.acct_id
      }
    }, [_vm._v("\n                                   " + _vm._s(account.acct_name) + "\n                            ")])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Payment Date")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.bill_payment_date),
      expression: "newPayment.bill_payment_date"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.newPayment.bill_payment_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.bill_payment_date = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Reference #")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.bill_payment_ref_no),
      expression: "newPayment.bill_payment_ref_no"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.bill_payment_ref_no)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.bill_payment_ref_no = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Notes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.bill_payment_notes),
      expression: "newPayment.bill_payment_notes"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": (_vm.newPayment.bill_payment_notes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.bill_payment_notes = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "container-action-bottom"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.checkPayment()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" RECORD PAYMENT ")]) : _vm._e()]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v(" Cancel")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_c('strong', [_vm._v("Jeezz!")]), _vm._v(" Almost there but...")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-error"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Almost there but ...")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('li', [_vm._v(" You've recorded more payment than the actual bill balance. Please check again. ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f06c8836", module.exports)
  }
}

/***/ })

});