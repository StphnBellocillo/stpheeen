webpackJsonp([57],{

/***/ 332:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        this.fetchInvoiceData();
        this.fetchAccounts();
    },


    data: function data() {
        return {

            userCorporationId: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            chckTaxDeducted: false,
            invoiceId: null,
            loading: false,
            error: null,
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
            accounts: [],
            rmrs: [{ return_credit_balance: 0.00 }],
            creditNotes: [{}],
            invoice: null,
            overpaid: false,
            showCreditPaymentDropdown: false,
            credit_payment_mode: null,
            credit_payment_rmr_ids: [],
            rmr_credit_payment_data: [{
                rmr_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }],
            credit_note_credit_payment_data: [{
                memo_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }],
            credit_payment_data: [{
                data_obj: [{}],
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }],
            credit_payment_amounts: [],
            isLoadingRMR: false,
            isLoadingCreditNotes: false

        };
    },

    computed: {
        totalCreditBalanceUsed: function totalCreditBalanceUsed() {
            var vm = this;
            var total = 0;
            this.credit_payment_data.map(function (payment, key) {
                total += parseFloat(payment.payment_amount);
            });
            return Number(total).toFixed(2);
        }
    },

    methods: {
        // populate the default amount and compute for total payment of credit balance
        populateNecessaryCreditData: function populateNecessaryCreditData(index) {
            var currentCreditDataCreditBalance = 0;
            // console.log("credit payment data  :"  + JSON.stringify(this.credit_payment_data[index].data_obj))

            this.newPayment.payment_amount = 0;
            var remainingAmountToPay = this.invoice.inv_balance_amount - this.totalCreditBalanceUsed;

            if (this.credit_payment_mode == 'viarmr') {
                // currentCreditDataCreditBalance = this.rmr_credit_payment_data[index].data_obj.return_credit_balance
                this.calculateRMRCreditBalance(index, remainingAmountToPay);
            }
            if (this.credit_payment_mode == 'viacreditnote') {
                // currentCreditDataCreditBalance = this.credit_payment_data[index].data_obj.memo_credit_balance
                this.calculateCreditNoteCreditBalance(index, remainingAmountToPay);
            }

            if (currentCreditDataCreditBalance < remainingAmountToPay) {
                // enable the adding of row
                this.credit_payment_data[index].payment_amount = currentCreditDataCreditBalance;
                this.credit_payment_data[index].avail_credit_balance = currentCreditDataCreditBalance;
                this.credit_payment_data[index].data_obj = this.credit_payment_data[index].data_obj;
                this.newPayment.payment_amount = this.totalCreditBalanceUsed;
                return;
            }
            // if credit balance of the current rmr is greater than remaining amount
            // just deduct the remaining amount to pay from the current credit balance
            this.credit_payment_data[index].payment_amount = remainingAmountToPay;
            this.credit_payment_data[index].avail_credit_balance = currentCreditDataCreditBalance;
            this.credit_payment_data[index].data_obj = this.credit_payment_data[index].data_obj;
            this.newPayment.payment_amount = this.totalCreditBalanceUsed;
            return;
        },
        calculateRMadRCreditBalance: function calculateRMadRCreditBalance(currentCreditData, remainingAmountToPay) {

            var currentCreditDataCreditBalance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
            if (currentRMRCreditBalance < remainingAmountToPay) {
                // enable the adding of row
                this.rmr_credit_payment_data[index].payment_amount = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
                this.rmr_credit_payment_data[index].avail_credit_balance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
                this.newPayment.payment_amount = this.totalCreditBalanceUsed;
                return;
            }
            // if credit balance of the current rmr is greater than remaining amount
            // just deduct the remaining amount to pay from the current credit balance
            this.rmr_credit_payment_data[index].payment_amount = remainingAmountToPay;
            this.rmr_credit_payment_data[index].avail_credit_balance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
            this.newPayment.payment_amount = this.totalCreditBalanceUsed;
            return;
        },
        calculateRMRCreditBalance: function calculateRMRCreditBalance(index, remainingAmountToPay) {

            var currentRMRCreditBalance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
            if (currentRMRCreditBalance < remainingAmountToPay) {
                // enable the adding of row
                this.rmr_credit_payment_data[index].payment_amount = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
                this.rmr_credit_payment_data[index].avail_credit_balance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
                this.newPayment.payment_amount = this.totalCreditBalanceUsed;
                return;
            }
            // if credit balance of the current rmr is greater than remaining amount
            // just deduct the remaining amount to pay from the current credit balance
            this.rmr_credit_payment_data[index].payment_amount = remainingAmountToPay;
            this.rmr_credit_payment_data[index].avail_credit_balance = this.rmr_credit_payment_data[index].rmr_obj.return_credit_balance;
            this.newPayment.payment_amount = this.totalCreditBalanceUsed;
            return;
        },
        calculateCreditNoteCreditBalance: function calculateCreditNoteCreditBalance(index, remainingAmountToPay) {
            var currentCreditNoteCreditBalance = this.credit_note_credit_payment_data[index].memo_obj.memo_credit_balance;
            if (currentCreditNoteCreditBalance < remainingAmountToPay) {
                // enable the adding of row
                this.credit_note_credit_payment_data[index].payment_amount = this.credit_note_credit_payment_data[index].memo_obj.memo_credit_balance;
                this.credit_note_credit_payment_data[index].avail_credit_balance = this.credit_note_credit_payment_data[index].memo_obj.memo_credit_balance;
                this.newPayment.payment_amount = this.totalCreditBalanceUsed;
                return;
            }
            // if credit balance of the current rmr is greater than remaining amount
            // just deduct the remaining amount to pay from the current credit balance
            this.credit_note_credit_payment_data[index].payment_amount = remainingAmountToPay;
            this.credit_note_credit_payment_data[index].avail_credit_balance = this.credit_note_credit_payment_data[index].memo_obj.memo_credit_balance;
            this.newPayment.payment_amount = this.totalCreditBalanceUsed;
            return;
        },

        // show the modal
        showMenuForChoosingCreditsAsPayment: function showMenuForChoosingCreditsAsPayment() {
            this.credit_payment_data = [{
                data_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }];
            switch (this.credit_payment_mode) {
                case 'viarmr':
                    this.beginRMRAsPayment();
                    break;
                case 'viacreditnote':
                    this.beginCreditNoteAsPayment();
                    break;
                default:
                    alert('Invalid selection!');
            }
        },
        beginRMRAsPayment: function beginRMRAsPayment() {
            var _this = this;

            $('#modal-rmr-list').modal({ backdrop: false });
            this.isLoadingRMR = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/return-material-receipts').then(function (response) {

                _this.$set(_this, 'rmrs', response.data);
                _this.isLoadingRMR = false;
            });
        },
        beginCreditNoteAsPayment: function beginCreditNoteAsPayment() {
            var _this2 = this;

            $('#modal-documentmemo-list').modal({ backdrop: false });
            this.isLoadingCreditNotes = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums?type=Credit Note').then(function (response) {

                _this2.$set(_this2, 'creditNotes', response.data);
                _this2.isLoadingCreditNotes = false;
            });
        },
        resetSelectedCreditPayments: function resetSelectedCreditPayments() {
            this.credit_payment_data = [{
                data_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }];
        },
        determineIfCreditPaymentModeIsCredits: function determineIfCreditPaymentModeIsCredits() {
            if (this.newPayment.payment_mode == 'CREDITS') {
                // show the dropdown of credit payments
                this.showCreditPaymentDropdown = true;
                return;
            }
            this.showCreditPaymentDropdown = false;
        },
        checkPayment: function checkPayment() {
            this.overpaid = false;
            this.formIsSubmitted = true;
            // if ( this.isOverPaid() ){

            //     return false
            // }
            // client supported an overpaid payment for an invoice, so what the fuck
            this.addPayment();
        },
        isOverPaid: function isOverPaid() {
            if (parseFloat(this.newPayment.payment_amount) + parseFloat(this.newPayment.tax_amount_witheld) > this.invoice.inv_balance_amount) {
                // alert("Total payment :" +this.newPayment.payment_amount + this.newPayment.tax_amount_witheld)
                // alert("Balance :" + this.invoice.inv_balance_amount)
                //overpaid
                this.overpaid = true;
                this.formIsSubmitted = false;
                return true;
            }

            return false;
        },
        addPayment: function addPayment() {
            var _this3 = this;

            this.formIsSubmitted = true;
            this.newPayment.inv_id = this.invoiceId;
            this.newPayment.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId + '/payments/new', { payment: this.newPayment, credit_payments: this.credit_payment_data, total_credit_payment_amount: this.totalCreditBalanceUsed, credit_payment_mode: this.credit_payment_mode }).then(function (response) {

                console.log(response.data);
                _this3.formIsSubmitted = false;
                if (_this3.newPayment.payment_mode == 'CREDITS') {
                    return _this3.createCreditJournals();
                }

                return _this3.createJournal();
            }, function (response) {
                _this3.loading = false;
                // error
                _this3.error = response.statusText;
                _this3.errors = response.data;
                _this3.formIsSubmitted = false;
            });
        },
        createCreditJournals: function createCreditJournals() {
            var vm = this;
            this.credit_payment_data.map(function (creditPayment, key) {
                var journal = {
                    'currency_id': 1,
                    'journ_date': vm.newPayment.payment_date,
                    'journ_reference_number': creditPayment.rmr_obj.rmr_no + '/RMRID-' + creditPayment.rmr_obj.rmr_id,
                    'journ_notes': vm.newPayment.payment_notes,
                    'journ_total_amount': creditPayment.payment_amount,
                    'corp_id': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(vm),
                    'encoded_by': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getAuthenticatedUser(vm)
                };
                vm.formIsSubmitted = true;
                var responseData = null;
                console.log(journal);

                vm.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journals/create-from-inventory', journal).then(function (response) {

                    console.log(response.data);

                    alert('journal id is' + response.data.data.journ_id);
                    alert('Journal has been created !');
                    // vm.$router.push({path : '/invoices' })
                    return vm.createCreditJournalEntries(response.data.data.journ_id, creditPayment);
                }, function (response) {
                    vm.error = response.statusText;
                });
            });
        },
        createCreditJournalEntries: function createCreditJournalEntries(journalId, creditPayment) {
            var _this4 = this;

            var entries = [
            // output tax
            {
                acct_id: 100, // output tax account id 
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Output tax',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 24, // accounts receivable id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: 0.00,
                entry_credit: creditPayment.payment_amount,
                entry_desc: 'Accounts Receivable',
                cost_center_id: this.userCorporationId
            },
            // cash in bank
            {
                acct_id: this.newPayment.deposit_account_id, // account of cash in bank
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: creditPayment.payment_amount - this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Cash In Bank',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                console.log(response.data);

                // alert('Journal entry has been created !')
                alert('Payment has been recorded  !');
                _this4.$router.push({ path: '/invoices/' + _this4.invoiceId });
            }, function (response) {

                this.error = response.statusText;
            });
        },
        createJournal: function createJournal() {
            var _this5 = this;

            var journal = {
                'currency_id': 1,
                'journ_date': this.newPayment.payment_date,
                'journ_reference_number': this.newPayment.payment_ref_no,
                'journ_notes': this.newPayment.payment_notes,
                'journ_total_amount': this.newPayment.payment_amount,
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
                return _this5.createJournalEntries(response.data.data.journ_id);
            }, function (response) {
                this.error = response.statusText;
            });
        },
        createJournalEntries: function createJournalEntries(journalId) {
            var _this6 = this;

            var entries = [
            // output tax
            {
                acct_id: 100, // output tax account id 
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Output tax',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 24, // accounts receivable id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: 0.00,
                entry_credit: this.newPayment.payment_amount,
                entry_desc: 'Accounts Receivable',
                cost_center_id: this.userCorporationId
            },
            // cash in bank
            {
                acct_id: this.newPayment.deposit_account_id, // account of cash in bank
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: this.newPayment.payment_amount - this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Cash In Bank',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                console.log(response.data);

                // alert('Journal entry has been created !')
                alert('Payment has been recorded  !');
                _this6.$router.push({ path: '/invoices/' + _this6.invoiceId });
            }, function (response) {

                this.error = response.statusText;
            });
        },
        fetchAccounts: function fetchAccounts() {
            var _this7 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/accounts').then(function (response) {
                console.log(response.statusText);
                _this7.$set(_this7, 'accounts', response.data);
            });
        },
        fetchInvoiceData: function fetchInvoiceData() {
            var _this8 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId).then(function (response) {
                console.log(response.statusText);
                _this8.$set(_this8, 'invoice', response.data.invoice);
                // populate the textfields
                _this8.newPayment.payment_amount = _this8.invoice.inv_balance_amount;
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
        },
        addRow: function addRow() {
            this.credit_payment_data.splice(this.credit_payment_data.length + 1, 0, {
                data_obj: {
                    memo_credit_balance: 0.00,
                    return_credit_balance: 0.00
                },
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            });
        }
    }

});

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
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
  }), _vm._v(" Back\n           ")])]), _vm._v(" "), (_vm.invoice.inv_no != null) ? _c('div', {
    staticClass: "title"
  }, [_vm._v(" " + _vm._s(_vm.invoice.inv_no) + " / Record Transaction")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
    }, [_vm._v("\n          " + _vm._s(error[0]) + "\n      ")])
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
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "striped"
  }, [_c('div', {
    staticClass: "form-group"
  }, [(_vm.newPayment.payment_mode != 'CREDITS') ? _c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Amount Received")]) : _vm._e(), _vm._v(" "), (_vm.newPayment.payment_mode == 'CREDITS') ? _c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Credits Received")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [(_vm.newPayment.payment_mode != 'CREDITS') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.payment_amount),
      expression: "newPayment.payment_amount"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.payment_amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.payment_amount = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.newPayment.payment_mode == 'CREDITS') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.payment_amount),
      expression: "newPayment.payment_amount"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "disabled": "disabled",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.payment_amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.payment_amount = $event.target.value
      }
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-md-offset-2 col-md-5"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.chckTaxDeducted),
      expression: "chckTaxDeducted"
    }],
    attrs: {
      "type": "checkbox",
      "value": ""
    },
    domProps: {
      "checked": Array.isArray(_vm.chckTaxDeducted) ? _vm._i(_vm.chckTaxDeducted, "") > -1 : (_vm.chckTaxDeducted)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.chckTaxDeducted,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.chckTaxDeducted = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.chckTaxDeducted = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.chckTaxDeducted = $$c
        }
      }
    }
  }), _vm._v("\n                              Tax Deducted\n                          ")])])])]), _vm._v(" "), (_vm.chckTaxDeducted) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Account")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.tax_account_id),
      expression: "newPayment.tax_account_id"
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
        _vm.newPayment.tax_account_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.accounts), function(account) {
    return _c('option', {
      domProps: {
        "value": account.acct_id
      }
    }, [_vm._v("\n                                   " + _vm._s(account.acct_name) + "\n                               ")])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Amount withheld")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.tax_amount_witheld),
      expression: "newPayment.tax_amount_witheld"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.tax_amount_witheld)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.tax_amount_witheld = $event.target.value
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Payment Mode")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.payment_mode),
      expression: "newPayment.payment_mode"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "49%"
    },
    attrs: {
      "required": "required"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newPayment.payment_mode = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.determineIfCreditPaymentModeIsCredits()
      }]
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
  }, [_vm._v("Credit Card")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CREDITS"
    }
  }, [_vm._v("Credits")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), (_vm.showCreditPaymentDropdown) ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Credit Payment Mode")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.credit_payment_mode),
      expression: "credit_payment_mode"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "39%"
    },
    attrs: {
      "required": "required"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.credit_payment_mode = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.showMenuForChoosingCreditsAsPayment()
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }), _vm._v(" "), _c('option', {
    attrs: {
      "value": "viarmr"
    }
  }, [_vm._v("Via Return Material Receipts")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "viacreditnote"
    }
  }, [_vm._v("Via DM-(Credit Note)")])])])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field "
  }, [_vm._v("Deposit To")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.deposit_account_id),
      expression: "newPayment.deposit_account_id"
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
        _vm.newPayment.deposit_account_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
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
      value: (_vm.newPayment.payment_date),
      expression: "newPayment.payment_date"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.newPayment.payment_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.payment_date = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field "
  }, [_vm._v("Reference #")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPayment.payment_ref_no),
      expression: "newPayment.payment_ref_no"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPayment.payment_ref_no)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.payment_ref_no = $event.target.value
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
      value: (_vm.newPayment.payment_notes),
      expression: "newPayment.payment_notes"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": (_vm.newPayment.payment_notes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPayment.payment_notes = $event.target.value
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
  }, [_vm._v(" Cancel")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-documentmemo-list"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    staticStyle: {
      "min-width": "800px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    staticStyle: {
      "max-height": "500px",
      "overflow": "scroll"
    }
  }, [(_vm.isLoadingCreditNotes) ? _c('p', [_vm._v(" Preparing data ...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.memo_credit_payment_data), function(row, index) {
    return (!_vm.isLoadingCreditNotes) ? _c('div', {
      key: row
    }, [_c('div', {
      staticClass: "form-group",
      staticStyle: {
        "margin-bottom": "1px #ccc dotted"
      }
    }, [_c('label', {
      staticClass: "col-md-2 control-label"
    }, [_vm._v("Select Credit Note  : ")]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (row.data_obj),
        expression: "row.data_obj"
      }],
      staticClass: "form-control",
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "required": "required"
      },
      on: {
        "change": [function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          row.data_obj = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }, function($event) {
          _vm.populateNecessaryCreditData(index)
        }]
      }
    }, _vm._l((_vm.creditNotes), function(creditNote) {
      return _c('option', {
        domProps: {
          "value": creditNote
        }
      }, [_vm._v("\n                                           " + _vm._s(creditNote.memo_no) + " - "), _c('strong', [_vm._v(" Avail.bal (" + _vm._s(creditNote.memo_credit_balance) + ") ")])])
    })), _vm._v(" "), _c('br')]), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "col-md-5 control-label"
    }, [_vm._v("How much would you like to use : ")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (row.payment_amount),
        expression: "row.payment_amount"
      }],
      staticClass: "form-control",
      attrs: {
        "disabled": "disabled",
        "placeholder": "How much would you like to use",
        "type": "text"
      },
      domProps: {
        "value": (row.payment_amount)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          row.payment_amount = $event.target.value
        }
      }
    })])]) : _vm._e()
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addRow()
      }
    }
  }, [_vm._v("Add Row")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('p', [_c('strong', [_vm._v("\n                        Total Credit Balance Used  : " + _vm._s(_vm.totalCreditBalanceUsed) + "\n                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.resetSelectedCreditPayments()
      }
    }
  }, [_vm._v("Reset")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Save & Close")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-rmr-list"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    staticStyle: {
      "min-width": "800px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "modal-body",
    staticStyle: {
      "max-height": "500px",
      "overflow": "scroll"
    }
  }, [(_vm.isLoadingRMR) ? _c('p', [_vm._v(" Preparing data ...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.rmr_credit_payment_data), function(row, index) {
    return (!_vm.isLoadingRMR) ? _c('div', {
      key: row
    }, [_c('div', {
      staticClass: "form-group",
      staticStyle: {
        "margin-bottom": "1px #ccc dotted"
      }
    }, [_c('label', {
      staticClass: "col-md-2 control-label"
    }, [_vm._v("Select RMR  : ")]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (row.data_obj),
        expression: "row.data_obj"
      }],
      staticClass: "form-control",
      staticStyle: {
        "width": "50%"
      },
      attrs: {
        "required": "required"
      },
      on: {
        "change": [function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          row.data_obj = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }, function($event) {
          _vm.populateNecessaryCreditData(index)
        }]
      }
    }, _vm._l((_vm.rmrs), function(rmr) {
      return _c('option', {
        domProps: {
          "value": rmr
        }
      }, [_vm._v("\n                                           " + _vm._s(rmr.rmr_no) + " - "), _c('strong', [_vm._v(" Avail.bal (" + _vm._s(rmr.return_credit_balance) + ") ")])])
    })), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "col-md-5 control-label"
    }, [_vm._v("How much would you like to use : ")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (row.payment_amount),
        expression: "row.payment_amount"
      }],
      staticClass: "form-control",
      attrs: {
        "disabled": "disabled",
        "placeholder": "How much would you like to use",
        "type": "text"
      },
      domProps: {
        "value": (row.payment_amount)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          row.payment_amount = $event.target.value
        }
      }
    })])])]) : _vm._e()
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addRow()
      }
    }
  }, [_vm._v("Add Row")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('p', [_c('strong', [_vm._v("\n                        Total Credit Balance Used  : " + _vm._s(_vm.totalCreditBalanceUsed) + "\n                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.resetSelectedCreditPayments()
      }
    }
  }, [_vm._v("Reset")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Save & Close")])])])])])])
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
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Almost there but ...")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('li', [_vm._v(" You've recorded more payment than the actual invoice balance. Please check again. ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Select Credit Note")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Choose RMR to be used as credit payment")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18d7c0fa", module.exports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Payments\\AddPayment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddPayment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18d7c0fa", Component.options)
  } else {
    hotAPI.reload("data-v-18d7c0fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});