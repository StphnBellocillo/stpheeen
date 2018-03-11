webpackJsonp([59],{

/***/ 372:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            rmr_id: null,
            rowsNotEmpty: false,
            creditrowsNotEmpty: false,
            negativeInvoice: false,
            errorInAmount: false,
            internalError: false,
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
            invoice: [],
            overpaid: false,
            showCreditPaymentDropdown: false,
            credit_payment_mode: null,
            credit_payment_rmr_ids: [],
            rmr_credit_payment_data: [{
                rmr_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00,
                data_obj: {},
                rows: [{}]

            }],
            credit_note_credit_payment_data: [{
                memo_obj: {},
                avail_credit_balance: 0.00,
                payment_amount: 0.00,
                data_obj: {},
                creditrows: [{}]
            }],
            credit_payment_data: [{
                data_obj: [{}],
                avail_credit_balance: 0.00,
                payment_amount: 0.00
            }],
            credit_payment_amounts: [],
            isLoadingRMR: false,
            isLoadingCreditNotes: false,
            rows: [{
                return_credit_balance: 0.00,
                return_tax_amount: 0.00,
                rmr_id: null,
                deduct_balance: 0.00,
                exceeds: false
            }],

            creditrows: [{
                memo_balance_amount: 0.00,
                document_memo_id: null,
                deduct_balance: 0.00,
                exceeds: false
            }]
        };
    },

    computed: {
        checkIfRowsEmpty: function checkIfRowsEmpty() {
            if (this.rows.length < 0) {
                this.rowsNotEmpty = false;
                console.log('not empty');
                return false;
            }
        },
        totalCreditBalanceUsed: function totalCreditBalanceUsed() {
            var total = 0;
            if (this.credit_payment_mode == 'viarmr') {
                this.rows.map(function (payment, key) {
                    if (payment.deduct_balance == '') {
                        return;
                    }
                    total += parseFloat(payment.deduct_balance);
                });

                this.newPayment.payment_amount = Number(total).toFixed(2);
                return Number(total).toFixed(2);
            } else if (this.credit_payment_mode == 'viacreditnote') {
                this.creditrows.map(function (payment, key) {
                    if (payment.deduct_balance == '') {
                        return;
                    }
                    total += parseFloat(payment.deduct_balance);
                });
                this.newPayment.payment_amount = Number(total).toFixed(2);
                return Number(total).toFixed(2);
            }
            return Number(total).toFixed(2);
        },
        invoiceBalanceDue: function invoiceBalanceDue() {
            var vm = this;
            var balance_due = 0;

            if (this.newPayment.payment_mode == 'CREDITS') {
                balance_due = this.invoice.inv_balance_amount - this.totalCreditBalanceUsed;
            }
            if (this.newPayment.payment_mode == null) {
                return this.invoice.inv_balance_amount;
            }
            if (this.newPayment.payment_mode != null && this.newPayment.payment_mode != null) {
                balance_due = this.invoice.inv_balance_amount - this.newPayment.payment_amount;
            }

            if (balance_due < 0) {
                this.negativeInvoice = true;
            } else {
                this.negativeInvoice = false;
            }

            return Number(balance_due).toFixed(2);
        }
    },

    methods: {
        amountExceeds: function amountExceeds(index) {

            console.log(parseFloat(this.rows[index].deduct_balance));
            console.log(parseFloat(this.rows[index].return_credit_balance));

            if (parseFloat(this.rows[index].return_credit_balance) < parseFloat(this.rows[index].deduct_balance)) {
                this.errorInAmount = true;
                this.rows[index].exceeds = true;
                // this.negativeInvoice = true
                return;
            }
            this.errorInAmount = false;
            this.rows[index].exceeds = false;
            this.negativeInvoice = false;
        },
        saveRMR: function saveRMR() {

            if (this.invoiceBalanceDue < 0) {
                this.negativeInvoice = true;
                alert('Invoice balance due cannot be negative');
                return;
            }

            this.negativeInvoice = false;
        },

        // populate the default amount and compute for total payment of credit balance
        populateNecessaryCreditData: function populateNecessaryCreditData(index) {
            var currentCreditDataCreditBalance = 0;
            // console.log("credit payment data  :"  + JSON.stringify(this.credit_payment_data[index].data_obj))

            this.newPayment.payment_amount = 0;
            var remainingAmountToPay = this.invoice.inv_balance_amount - this.totalCreditBalanceUsed;

            if (this.credit_payment_mode == 'viarmr') {
                // currentCreditDataCreditBalance = this.rmr_credit_payment_data[index].data_obj.return_credit_balance
                this.calculateRMRCreditBalance(index, remainingAmountToPay);
                // this.rmr_credit_payment_data[0].data_obj.rmr_id)
            }
            if (this.credit_payment_mode == 'viacreditnote') {
                // currentCreditDataCreditBalance = this.credit_payment_data[index].data_obj.memo_credit_balance
                this.calculateCreditNoteCreditBalance(index, remainingAmountToPay);
            }

            // if (  currentCreditDataCreditBalance < remainingAmountToPay   ){
            //     // enable the adding of row
            //     this.credit_payment_data[index].payment_amount = currentCreditDataCreditBalance
            //     this.credit_payment_data[index].avail_credit_balance = currentCreditDataCreditBalance
            //     this.credit_payment_data[index].data_obj = this.credit_payment_data[index].data_obj
            //     this.newPayment.payment_amount = this.totalCreditBalanceUsed
            //     return
            // }
            // // if credit balance of the current rmr is greater than remaining amount
            // // just deduct the remaining amount to pay from the current credit balance
            // this.credit_payment_data[index].payment_amount =  remainingAmountToPay
            // this.credit_payment_data[index].avail_credit_balance = currentCreditDataCreditBalance
            // this.credit_payment_data[index].data_obj = this.credit_payment_data[index].data_obj
            // this.newPayment.payment_amount = this.totalCreditBalanceUsed
            // return
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

            var vm = this;

            $('#modal-rmr-list').modal({ backdrop: false });
            vm.isLoadingRMR = true;
            vm.newPayment.contact_id = vm.invoice.contact_id;

            var contact_id = vm.invoice.contact_id;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/return-material-receipts/' + vm.invoice.contact_id + '/contacts').then(function (response) {
                console.log('COOBTATBcontact id' + vm.invoice.contact_id);
                _this.$set(_this, 'rmrs', response.data.rmr);
                _this.isLoadingRMR = false;
            });
        },
        beginCreditNoteAsPayment: function beginCreditNoteAsPayment() {
            var _this2 = this;

            var vm = this;

            $('#modal-documentmemo-list').modal({ backdrop: false });
            vm.isLoadingCreditNotes = true;
            vm.newPayment.contact_id = vm.invoice.contact_id;

            var contact_id = vm.invoice.contact_id;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/document-memorandums/' + vm.invoice.contact_id + '/contacts').then(function (response) {
                console.log('COOBTATBcontact id' + vm.invoice.contact_id);
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
            this.rows = [];
            this.totalCreditBalanceUsed = this.invoice.inv_balance_amount;
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

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId + '/payments/new', { payment: this.newPayment }).then(function (response) {

                console.log(response.data);
                if (_this3.newPayment.payment_mode == 'CREDITS') {
                    console.log('HALLLO');
                    return _this3.createCreditJournals();
                }

                return _this3.createJournal();
                _this3.formIsSubmitted = false;
            }, function (response) {
                _this3.formIsSubmitted = false;
                _this3.errors = [];
                _this3.errors = response.data;
                _this3.error = true;
                console.log("ERROR : " + _this3.error);
            });
        },
        createCreditJournals: function createCreditJournals() {
            var vm = this;
            this.rows.map(function (creditPayment, key) {
                var journal = {
                    'currency_id': 1,
                    'journ_date': vm.newPayment.payment_date,
                    'journ_reference_number': creditPayment.rmr_no + '/RMRID-' + creditPayment.rmr_id,
                    'journ_notes': vm.newPayment.payment_notes,
                    'journ_total_amount': creditPayment.payment_amount,
                    'corp_id': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(vm),
                    'encoded_by': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getAuthenticatedUser(vm)
                };
                vm.formIsSubmitted = true;
                var responseData = null;
                console.log(journal);

                vm.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journals/create-from-inventory', { journal: journal, payment: this.newPayment }).then(function (response) {

                    console.log(response.data);

                    // alert('journal id is' + response.data.data.journ_id)
                    // alert('Journal has been created !')
                    // vm.$router.push({path : '/invoices' })
                    return vm.createCreditJournalEntries(journal, creditPayment);
                }, function (response) {
                    vm.error = response.statusText;
                });
            });
        },
        createCreditJournalEntries: function createCreditJournalEntries(journal, creditPayment) {
            var _this4 = this;

            // console.log('CREDIT PAYMENT : '+ creditPayment)
            // console.log('credit - credit payment: ' + creditPayment.payment_amount)
            // console.log('debit : ' + creditPayment.payment_amount - this.newPayment.tax_amount_witheld)
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
                entry_credit: creditPayment.deduct_balance,
                entry_desc: 'Accounts Receivable',
                cost_center_id: this.userCorporationId
            },
            // cash in bank
            {
                acct_id: this.newPayment.deposit_account_id, // account of cash in bank
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: creditPayment.deduct_balance - this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Cash In Bank',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId, payment: this.newPayment, rows: this.rows, creditrows: this.creditrows, total_credit_payment_amount: this.totalCreditBalanceUsed, credit_payment_mode: this.credit_payment_mode }).then(function (response) {

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
                'encoded_by': __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getAuthenticatedUser(this),
                'payment': true
            };

            this.formIsSubmitted = true;
            var responseData = null;
            console.log(journal);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journals/create-from-inventory', journal).then(function (response) {

                return _this5.createJournalEntries(journal);
            }, function (response) {
                this.error = response.statusText;
            });
        },
        createJournalEntries: function createJournalEntries(journal) {
            var _this6 = this;

            var entries = [
            // output tax
            {
                acct_id: 100, // output tax account id 
                // journal_id      :       journal.journalId, 
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Output tax',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 24, // accounts receivable id
                // journal_id      :       journal.journalId, 
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
                // journal_id      :       journal.journalId, 
                tax_id: 1,
                contact_id: this.invoice.contact_id,
                entry_debit: this.newPayment.payment_amount - this.newPayment.tax_amount_witheld,
                entry_credit: 0.00,
                entry_desc: 'Cash In Bank',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal: journal, journal_entries: entries, journal_id: journal.journalId, payment: this.newPayment, rows: this.rows, creditrows: this.creditrows, total_credit_payment_amount: this.totalCreditBalanceUsed, credit_payment_mode: this.credit_payment_mode, invoice_id: this.invoiceId }).then(function (response) {

                console.log(response.data);

                //UNCOMMENT LATER
                alert('Payment has been recorded  !');
                _this6.$router.push({ path: '/invoices/' + _this6.invoiceId });
                // //////
            }, function (response) {
                if (response.statusText == "Internal Server Error") {
                    this.errors = [];
                    this.error = false;
                    this.internalError = "Internal Server Error";
                    console.log(this.internalError);
                } else {
                    this.errors = [];
                    this.error = true;
                    this.errors = response.data;
                }

                this.formIsSubmitted = false;
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

        // addRow(){
        //         

        //     },
        addRMRrow: function addRMRrow() {

            if (this.rows.length == 1 && this.rows[0].return_credit_balance == 0) {
                this.rows[0].rmr_no = this.rmr_credit_payment_data[0].data_obj.rmr_no;
                this.rows[0].return_tax_amount = this.rmr_credit_payment_data[0].data_obj.return_tax_amount;
                this.rows[0].return_credit_balance = this.rmr_credit_payment_data[0].data_obj.return_credit_balance;
                this.rows[0].rmr_id = this.rmr_credit_payment_data[0].data_obj.rmr_id;
                this.rows[0].deduct_balance = this.rmr_credit_payment_data[0].data_obj.return_credit_balance;
                this.rowsNotEmpty = true;
            } else {

                this.rows.push({
                    rmr_no: this.rmr_credit_payment_data[0].data_obj.rmr_no,
                    return_tax_amount: this.rmr_credit_payment_data[0].data_obj.return_tax_amount,
                    return_credit_balance: this.rmr_credit_payment_data[0].data_obj.return_credit_balance,
                    deduct_balance: this.rmr_credit_payment_data[0].data_obj.return_credit_balance,
                    rmr_id: this.rmr_credit_payment_data[0].data_obj.rmr_id
                });
            }

            this.credit_payment_data.splice(this.credit_payment_data.length + 1, 0, {
                data_obj: {
                    memo_credit_balance: 0.00,
                    return_credit_balance: 0.00
                },
                avail_credit_balance: 0.00,
                payment_amount: this.rmr_credit_payment_data[0].data_obj.return_credit_balance
            });
        },
        addDMrow: function addDMrow() {

            if (this.creditrows.length == 1 && this.creditrows[0].memo_balance_amount == 0) {
                this.creditrows[0].memo_no = this.credit_note_credit_payment_data[0].data_obj.memo_no;
                this.creditrows[0].memo_balance_amount = this.credit_note_credit_payment_data[0].data_obj.memo_balance_amount;
                this.creditrows[0].document_memo_id = this.credit_note_credit_payment_data[0].data_obj.document_memo_id;
                this.creditrows[0].deduct_balance = this.credit_note_credit_payment_data[0].data_obj.memo_balance_amount;
                this.creditrowsNotEmpty = true;
            } else {

                this.creditrows.push({
                    memo_no: this.credit_note_credit_payment_data[0].data_obj.memo_no,
                    memo_balance_amount: this.credit_note_credit_payment_data[0].data_obj.memo_balance_amount,
                    deduct_balance: this.credit_note_credit_payment_data[0].data_obj.memo_balance_amount,
                    document_memo_id: this.credit_note_credit_payment_data[0].data_obj.document_memo_id
                });
            }

            this.credit_payment_data.splice(this.credit_payment_data.length + 1, 0, {
                data_obj: {
                    memo_credit_balance: 0.00,
                    return_credit_balance: 0.00
                },
                avail_credit_balance: 0.00,
                payment_amount: this.rmr_credit_payment_data[0].data_obj.return_credit_balance
            });
        },


        removeRow: function removeRow(index) {

            console.log("Removing data with an index of " + index);
            this.rows.splice(index, 1);

            this.credit_payment_data.splice(index, 1);
        }

    }

});

/***/ }),

/***/ 373:
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
        _vm.invoice.inv_no != null
          ? _c("div", { staticClass: "title" }, [
              _vm._v(" " + _vm._s(_vm.invoice.inv_no) + " / Record Transaction")
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
    _vm.error
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
    _vm.overpaid ? _c("div", [_vm._m(1)]) : _vm._e(),
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
        attrs: { role: "form" }
      },
      [
        _c("div", { staticClass: "form-content" }, [
          _c("div", { staticClass: "striped" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "col-md-2 control-label " }, [
                _vm._v("Invoice Balance")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.invoiceBalanceDue,
                      expression: "invoiceBalanceDue"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "text" },
                  domProps: { value: _vm.invoiceBalanceDue },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.invoiceBalanceDue = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm.newPayment.payment_mode != "CREDITS"
                ? _c(
                    "label",
                    { staticClass: "col-md-2 control-label required-field" },
                    [_vm._v("Amount Received")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.newPayment.payment_mode == "CREDITS"
                ? _c(
                    "label",
                    { staticClass: "col-md-2 control-label required-field" },
                    [_vm._v("Credits Received")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _vm.newPayment.payment_mode != "CREDITS"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newPayment.payment_amount,
                          expression: "newPayment.payment_amount"
                        }
                      ],
                      staticClass: "form-control m-b",
                      attrs: { type: "text" },
                      domProps: { value: _vm.newPayment.payment_amount },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.newPayment,
                              "payment_amount",
                              $event.target.value
                            )
                          },
                          _vm.inputChecker
                        ]
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.newPayment.payment_mode == "CREDITS"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newPayment.payment_amount,
                          expression: "newPayment.payment_amount"
                        }
                      ],
                      staticClass: "form-control m-b",
                      attrs: { disabled: "disabled", type: "text" },
                      domProps: { value: _vm.newPayment.payment_amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newPayment,
                            "payment_amount",
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.negativeInvoice
                ? _c(
                    "p",
                    { staticClass: "error", staticStyle: { color: "#ff5353" } },
                    [_vm._v("Invoice Balance Due must not be less than 0")]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-md-offset-2 col-md-5" }, [
                _c("div", { staticClass: "checkbox" }, [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.chckTaxDeducted,
                          expression: "chckTaxDeducted"
                        }
                      ],
                      attrs: { type: "checkbox", value: "" },
                      domProps: {
                        checked: Array.isArray(_vm.chckTaxDeducted)
                          ? _vm._i(_vm.chckTaxDeducted, "") > -1
                          : _vm.chckTaxDeducted
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.chckTaxDeducted,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.chckTaxDeducted = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.chckTaxDeducted = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.chckTaxDeducted = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(
                      "\n                              Tax Deducted\n                          "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.chckTaxDeducted
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-2 control-label required-field" },
                      [_vm._v("Account")]
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
                              value: _vm.newPayment.tax_account_id,
                              expression: "newPayment.tax_account_id"
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
                                "tax_account_id",
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
                                  "\n                               "
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
                      [_vm._v("Amount withheld")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newPayment.tax_amount_witheld,
                            expression: "newPayment.tax_amount_witheld"
                          }
                        ],
                        staticClass: "form-control m-b",
                        attrs: { type: "text" },
                        domProps: { value: _vm.newPayment.tax_amount_witheld },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.newPayment,
                              "tax_amount_witheld",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              : _vm._e(),
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
                        value: _vm.newPayment.payment_mode,
                        expression: "newPayment.payment_mode"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "49%" },
                    attrs: { required: "required" },
                    on: {
                      change: [
                        function($event) {
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
                            "payment_mode",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          _vm.determineIfCreditPaymentModeIsCredits()
                        }
                      ]
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
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "CREDITS" } }, [
                      _vm._v("Credits")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _vm.showCreditPaymentDropdown
                  ? _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-2 control-label required-field"
                        },
                        [_vm._v("Credit Payment Mode")]
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
                                value: _vm.credit_payment_mode,
                                expression: "credit_payment_mode"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { width: "39%" },
                            attrs: { required: "required" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.credit_payment_mode = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  _vm.showMenuForChoosingCreditsAsPayment()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "viarmr" } }, [
                              _vm._v("Via Return Material Receipts")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "viacreditnote" } },
                              [_vm._v("Via DM-(Credit Note)")]
                            )
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "col-md-2 control-label required-field " },
                [_vm._v("Deposit To")]
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
                        value: _vm.newPayment.deposit_account_id,
                        expression: "newPayment.deposit_account_id"
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
                      value: _vm.newPayment.payment_date,
                      expression: "newPayment.payment_date"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "date" },
                  domProps: { value: _vm.newPayment.payment_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "payment_date",
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
                { staticClass: "col-md-2 control-label required-field " },
                [_vm._v("Reference #")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPayment.payment_ref_no,
                      expression: "newPayment.payment_ref_no"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "text" },
                  domProps: { value: _vm.newPayment.payment_ref_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "payment_ref_no",
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
                      value: _vm.newPayment.payment_notes,
                      expression: "newPayment.payment_notes"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "3" },
                  domProps: { value: _vm.newPayment.payment_notes },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPayment,
                        "payment_notes",
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
                  attrs: {
                    disabled: _vm.formIsSubmitted || _vm.negativeInvoice,
                    type: "button"
                  },
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
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-documentmemo-list" } },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog",
            staticStyle: { "min-width": "800px !important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { "max-height": "500px", overflow: "scroll" }
                },
                [
                  _vm.isLoadingCreditNotes
                    ? _c("p", [_vm._v(" Preparing data ...")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.credit_note_credit_payment_data, function(
                    creditrow,
                    index
                  ) {
                    return !_vm.isLoadingCreditNotes
                      ? _c("div", { key: creditrow }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              staticStyle: {
                                "margin-bottom": "1px #ccc dotted"
                              }
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "col-md-2 control-label" },
                                [_vm._v("Select Credit Note  : ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: creditrow.data_obj,
                                      expression: "creditrow.data_obj"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  staticStyle: { width: "50%" },
                                  attrs: { required: "required" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          creditrow,
                                          "data_obj",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        _vm.populateNecessaryCreditData(index)
                                      }
                                    ]
                                  }
                                },
                                _vm._l(_vm.creditNotes, function(creditNote) {
                                  return _c(
                                    "option",
                                    { domProps: { value: creditNote } },
                                    [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(creditNote.memo_no) +
                                          " - "
                                      ),
                                      _c("strong", [
                                        _vm._v(
                                          " Avail.bal (" +
                                            _vm._s(
                                              creditNote.memo_balance_amount
                                            ) +
                                            ") "
                                        )
                                      ])
                                    ]
                                  )
                                })
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.addDMrow()
                                    }
                                  }
                                },
                                [_vm._v("Add Row")]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-bordered" },
                                  [
                                    _c(
                                      "thead",
                                      [
                                        _vm._m(3, true),
                                        _vm._v(" "),
                                        _vm._l(_vm.creditrows, function(
                                          creditrow,
                                          index
                                        ) {
                                          return _vm.creditrowsNotEmpty
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(creditrow.memo_no)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      creditrow.memo_balance_amount
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-md-5" },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              creditrow.deduct_balance,
                                                            expression:
                                                              "creditrow.deduct_balance"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control m-b",
                                                        attrs: { type: "text" },
                                                        domProps: {
                                                          value:
                                                            creditrow.deduct_balance
                                                        },
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            _vm.amountExceedsCredits(
                                                              index
                                                            )
                                                          },
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              creditrow,
                                                              "deduct_balance",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  creditrow.exceeds
                                                    ? _c("div", [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticStyle: {
                                                              color: "#FF0000"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              " Amount should not exceed credit balance"
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        _vm.removeRow(index)
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Remove")]
                                                )
                                              ])
                                            : _vm._e()
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c("p", [
                  _c("strong", [
                    _vm._v(
                      "\n                                    Total Credit Balance Used  : " +
                        _vm._s(_vm.totalCreditBalanceUsed) +
                        "\n                                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("p", [
                    _c("strong", [
                      _vm._v(
                        "\n                                    Invoice Balance Due  : " +
                          _vm._s(_vm.invoiceBalanceDue) +
                          "\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.resetSelectedCreditPayments()
                      }
                    }
                  },
                  [_vm._v("Reset")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button", "data-dismiss": "modal" },
                    on: {
                      click: function($event) {
                        _vm.saveDM()
                      }
                    }
                  },
                  [_vm._v("Save & Close")]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "modal-rmr-list" } }, [
      _c(
        "div",
        {
          staticClass: "modal-dialog",
          staticStyle: { "min-width": "800px !important" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal-body",
                staticStyle: { "max-height": "500px", overflow: "scroll" }
              },
              [
                _vm.isLoadingRMR
                  ? _c("p", [_vm._v(" Preparing data ...")])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.rmr_credit_payment_data, function(row, index) {
                  return !_vm.isLoadingRMR
                    ? _c("div", { key: row }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            staticStyle: { "margin-bottom": "1px #ccc dotted" }
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "col-md-2 control-label" },
                              [_vm._v("Select RMR  : ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.data_obj,
                                    expression: "row.data_obj"
                                  }
                                ],
                                staticClass: "form-control",
                                staticStyle: { width: "50%" },
                                attrs: { required: "required" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        row,
                                        "data_obj",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      _vm.populateNecessaryCreditData(index)
                                    }
                                  ]
                                }
                              },
                              _vm._l(_vm.rmrs, function(rmr) {
                                return _c(
                                  "option",
                                  { domProps: { value: rmr } },
                                  [
                                    _vm._v(
                                      "\n                                           " +
                                        _vm._s(rmr.rmr_no) +
                                        " - "
                                    ),
                                    _c("strong", [
                                      _vm._v(
                                        " Avail.bal (" +
                                          _vm._s(rmr.return_credit_balance) +
                                          ") "
                                      )
                                    ])
                                  ]
                                )
                              })
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.addRMRrow()
                                  }
                                }
                              },
                              [_vm._v(" Add RMR ")]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "table",
                                { staticClass: "table table-bordered" },
                                [
                                  _c(
                                    "thead",
                                    [
                                      _vm._m(5, true),
                                      _vm._v(" "),
                                      _vm._l(_vm.rows, function(row, index) {
                                        return _vm.rowsNotEmpty
                                          ? _c("tr", [
                                              _c("td", [
                                                _vm._v(_vm._s(row.rmr_no))
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(row.return_tax_amount)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    row.return_credit_balance
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-md-5" },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            row.deduct_balance,
                                                          expression:
                                                            "row.deduct_balance"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control m-b",
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        minlength: "1",
                                                        value: "0"
                                                      },
                                                      domProps: {
                                                        value:
                                                          row.deduct_balance
                                                      },
                                                      on: {
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          _vm.amountExceeds(
                                                            index
                                                          )
                                                        },
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            row,
                                                            "deduct_balance",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                row.exceeds
                                                  ? _c("div", [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticStyle: {
                                                            color: "#FF0000"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            " Amount should not exceed credit balance"
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.removeRow(index)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Remove")]
                                              )
                                            ])
                                          : _vm._e()
                                      })
                                    ],
                                    2
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm._e()
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c("p", [
                _c("strong", [
                  _vm._v(
                    "\n                        Total Credit Balance Used  : " +
                      _vm._s(_vm.totalCreditBalanceUsed) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [
                  _vm._v(
                    "\n                        Invoice Balance Due  : " +
                      _vm._s(_vm.invoiceBalanceDue) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.resetSelectedCreditPayments()
                    }
                  }
                },
                [_vm._v("Reset")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    disabled: _vm.errorInAmount
                  },
                  on: {
                    click: function($event) {
                      _vm.saveRMR()
                    }
                  }
                },
                [_vm._v("Save & Close")]
              )
            ])
          ])
        ]
      )
    ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-error" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("strong", [_vm._v("Almost there but ...")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          " You've recorded more payment than the actual invoice balance. Please check again. "
        )
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Select Credit Note")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Credit No.")]),
      _vm._v(" "),
      _c("th", [_vm._v("Balance Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Amount to Deduct")]),
      _vm._v(" "),
      _c("th")
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
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Choose RMR to be used as credit payment")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("RMR No.")]),
      _vm._v(" "),
      _c("th", [_vm._v("VAT")]),
      _vm._v(" "),
      _c("th", [_vm._v("Credit Balance")]),
      _vm._v(" "),
      _c("th", [_vm._v("Amount to Deduct")]),
      _vm._v(" "),
      _c("th")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34212ca6", module.exports)
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(372)
/* template */
var __vue_template__ = __webpack_require__(373)
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
Component.options.__file = "resources\\assets\\js\\components\\Payments\\AddPayment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34212ca6", Component.options)
  } else {
    hotAPI.reload("data-v-34212ca6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});