webpackJsonp([52],{

/***/ 368:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.poNumber = this.$route.params.id;
        this.fetchReceivedItems();
        this.fetchPurchaseOrder();
        this.fetchWarehouses();
    },
    data: function data() {
        return {

            userCorporationId: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
            errors: [],
            qtyExceeded: false,
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> RECEIVING...',
            buttonText: 'RECEIVE',
            loading: false,
            poNumber: null,
            purchaseOrder: {},
            purchaseOrderItems: [{
                purchase_rcvd_id: null,
                item_id: null,
                purchse_order_item_qty: null, // since i can't override the model value 
                purchase_rcvd_item_qty_received: 0,
                purchase_rcvd_item_date_received: null,
                purchse_order_item_rate: 0.00,
                qtyExceeded: false
                // purchase_rcvd_item_qty_received : null,
            }],
            warehouses: [],
            prItems: [],
            rows: [{
                purchase_rcvd_id: null,
                item_id: null,
                purchse_order_item_qty: null, // since i can't override the model value 
                purchase_rcvd_item_qty_received: null,
                purchase_rcvd_item_date_received: null
            }],
            newPurchaseReceive: {

                po_id: null,
                corp_id: null,
                whouse_id: null,
                purchase_rcvd_ref_no: null,
                purchase_rcvd_notes: null,
                purchase_rcvd_date: null,
                purchase_rcvd_tax_amount: 0.00,
                purchase_rcvd_discounted_amount: 0.00,
                purchase_rcvd_total_amount: 0.00,
                purchase_rcvd_discount_percentage: 0.00

            },
            totalCalculatedReceivedAmount: 0.00,
            totalDiscountedAmount: 0.00,
            total: 0.00
        };
    },


    computed: {
        taxTotal: function taxTotal() {
            var taxAmount = 0;

            taxAmount = this.total * 0.10714285714;
            this.newPurchaseReceive.purchase_rcvd_tax_amount = taxAmount;
            return Number(taxAmount).toFixed(2);
        }
    },

    methods: {
        getSubTotal: function getSubTotal() {
            var total = 0.00;
            // this.$nextTick(function () {

            this.purchaseOrderItems.map(function (value, key) {

                total += value.purchase_rcvd_item_qty_received * parseFloat(value.purchse_order_item_rate);
                console.log("Values : " + JSON.stringify(value));
                console.log("Rate : " + value.purchse_order_item_rate);
                console.log("Qty : " + value.purchase_rcvd_item_qty_received);
            });
            console.log("Subtotal " + total);
            total += parseFloat(this.purchaseOrder.po_freight_charge_amount);
            console.log("Total with freight" + total);

            // })
            this.totalCalculatedReceivedAmount = Number(total).toFixed(2);
            this.getDiscountedAmount();
            this.getGrandTotal();
        },
        getGrandTotal: function getGrandTotal() {

            console.log("Total Discount : " + this.totalDiscountedAmount);
            var grandTotal = 0;
            this.total = (this.totalCalculatedReceivedAmount - this.totalDiscountedAmount) * 1.12;

            this.newPurchaseReceive.purchase_rcvd_total_amount = this.total;
            return Number(this.total).toFixed(2);
        },
        getDiscountedAmount: function getDiscountedAmount() {

            this.totalDiscountedAmount = Number(this.purchaseOrder.po_discount_percentage * this.totalCalculatedReceivedAmount / 100);
            console.log("Discounted amount : " + this.totalDiscountedAmount);
            this.newPurchaseReceive.purchase_rcvd_discounted_amount = this.totalDiscountedAmount;
            return Number(this.totalDiscountedAmount).toFixed(2);
        },
        checkIfItExistOnTheOrdereredQuantity: function checkIfItExistOnTheOrdereredQuantity(index) {

            // count the number of items that is already received
            var qtyReceived = 0;
            if (this.prItems.length != 0) {
                qtyReceived = this.prItems[index].purchase_rcvd_item_qty_received;
            }

            console.log(JSON.stringify(this.purchaseOrderItems));
            var totalQuantity = parseInt(this.purchaseOrderItems[index].purchase_rcvd_item_qty_received) + qtyReceived;

            console.log("Qty received is :  " + qtyReceived);
            console.log("Qty to receive is :  " + this.purchaseOrderItems[index].purchase_rcvd_item_qty_received);

            this.getSubTotal();
            console.log("Total qty is " + totalQuantity);

            if (totalQuantity > this.purchaseOrderItems[index].purchse_order_item_qty) {
                this.purchaseOrderItems[index].qtyExceeded = true;
                this.qtyExceeded = true;
                return;
            }

            this.qtyExceeded = false;

            return this.purchaseOrderItems[index].qtyExceeded = false;
        },
        createJournal: function createJournal() {
            var journal = {

                'currency_id': 1,
                'journ_date': this.newPurchaseReceive.purchase_rcvd_date,
                'journ_reference_number': this.newPurchaseReceive.purchase_rcvd_ref_no,
                'journ_notes': this.newPurchaseReceive.purchase_rcvd_notes,
                'journ_total_amount': this.newPurchaseReceive.purchase_rcvd_total_amount + this.totalDiscountedAmount,
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
                // return this.createJournalEntries(response.data.data.journ_id)
            }, function (response) {
                this.error = response.statusText;
            });
        },
        createJournalEntries: function createJournalEntries(journalId) {
            var subTotal = (parseFloat(this.purchaseOrder.po_total_amount) + parseFloat(this.purchaseOrder.po_discounted_amount)) / 1.12;

            var entries = [
            // input tax
            {
                acct_id: 114, // input tax account id 
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.purchaseOrder.contact_id,
                entry_debit: parseFloat(this.newPurchaseReceive.purchase_rcvd_tax_amount),
                entry_credit: 0.00,
                entry_desc: 'Input tax',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 50, // Freight
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.purchaseOrder.contact_id,
                entry_debit: parseFloat(this.purchaseOrder.po_freight_charge_amount),
                entry_credit: 0.00,
                entry_desc: 'Freight Charges',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 42, // merchandise inventory account id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.purchaseOrder.contact_id,
                entry_debit: Number(this.totalCalculatedReceivedAmount - this.purchaseOrder.po_freight_charge_amount).toFixed(2),
                entry_credit: 0.00,
                entry_desc: 'Merchandise Inventory',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 39, // trade payable id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.purchaseOrder.contact_id,
                entry_debit: 0.00,
                entry_credit: this.newPurchaseReceive.purchase_rcvd_total_amount,
                entry_desc: 'Accounts Payable',
                cost_center_id: this.userCorporationId
            }, {
                acct_id: 40, // purchase discount id
                journal_id: journalId,
                tax_id: 1,
                contact_id: this.purchaseOrder.contact_id,
                entry_debit: 0.00,
                entry_credit: this.totalDiscountedAmount,
                entry_desc: 'Purchase Discount',
                cost_center_id: this.userCorporationId
            }];

            this.formIsSubmitted = true;

            console.log(entries);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.COMPACCT_API_URL + '/journal-entries/create', { journal_entries: entries, journal_id: journalId }).then(function (response) {

                console.log(response.data);

                // return this.checkForShortLandedOrders()
            }, function (response) {

                this.error = response.statusText;
            });
        },
        addPurchaseReceiving: function addPurchaseReceiving() {
            var _this = this;

            this.formIsSubmitted = true;
            this.newPurchaseReceive.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.newPurchaseReceive.po_id = this.purchaseOrder.po_id;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-receivings/create', this.newPurchaseReceive).then(function (response) {
                console.log(response.data);
                // alert('Purchase Receive has been created !')

                return _this.addPurchaseReceiveItems(response.data);
                _this.formIsSubmitted = false;
            }, function (response) {
                this.formIsSubmitted = false;
                this.errors = [];
                this.errors = response.data;
                this.error = true;
                console.log("ERROR : " + this.error);
            });
        },
        addPurchaseReceiveItems: function addPurchaseReceiveItems(data) {
            var _this2 = this;

            console.log(this.rows);

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-receiving-items/create', { rows: this.purchaseOrderItems, new_purchase_receive: this.newPurchaseReceive }).then(function (response) {

                console.log(response.data);
                _this2.loading = false;
                alert("Purchase receiving has been created !");
                return _this2.checkForShortLandedOrders();
                _this2.$router.push({ path: '/purchase-receives/' });
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
        checkForShortLandedOrders: function checkForShortLandedOrders() {
            var vm = this;
            var item = {
                qty_ordered: null,
                remaining_qty: null,
                item_id: null
            };
            var shortLandedItems = [];
            this.purchaseOrderItems.map(function (value, key) {
                console.log("Ordered : " + value.purchse_order_item_qty);
                console.log("Received : " + value.purchase_rcvd_item_qty_received);

                item.qty_ordered = value.purchse_order_item_qty;
                item.remaining_qty = parseInt(value.purchse_order_item_qty) - parseInt(value.purchase_rcvd_item_qty_received);
                item.item_id = value.item_id;

                if (parseInt(value.purchse_order_item_qty) > parseInt(value.purchase_rcvd_item_qty_received)) {
                    // alert("Short landed qty for item " + value.item_id)
                    shortLandedItems.push(item);
                }
                //reset the item
                item = {};
            });
            console.log("Purchase order items " + JSON.stringify(this.purchaseOrderItems));
            console.log("Short landed items " + JSON.stringify(shortLandedItems));

            if (shortLandedItems.length > 0) {
                // redirect to purchase returns page
                this.$router.push({ path: '/purchase-orders/' + this.purchaseOrder.po_id + '/purchase-returns/new', query: { 'po_no': this.purchaseOrder.po_no } });
                return;
            }

            return this.$router.push({ path: '/purchase-orders/' + this.purchaseOrder.po_id });
        },
        fetchPurchaseOrder: function fetchPurchaseOrder() {
            var _this3 = this;

            this.startLoadingPlease();

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + this.poNumber).then(function (response) {

                //setting all accounts from the server response
                _this3.$set(_this3, 'purchaseOrder', response.data.purchaseorder);
                _this3.$set(_this3, 'purchaseOrderItems', response.data.items);

                _this3.purchaseOrderItems.map(function (row, key) {
                    row.purchase_rcvd_item_qty_received = "";
                });

                _this3.stopLoadingPlease();
            }, function (response) {
                // error
                _this3.error = response.statusText;
                _this3.stopLoadingPlease();
            });
        },
        fetchWarehouses: function fetchWarehouses() {
            var _this4 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses').then(function (response) {
                console.log(response.statusText);
                _this4.$set(_this4, 'warehouses', response.data);
            });
        },
        fetchReceivedItems: function fetchReceivedItems() {
            var _this5 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-receivings/events/get-by-purchase-order?po_id=' + this.poNumber).then(function (response) {
                console.log(response.statusText);
                _this5.$set(_this5, 'prItems', response.data.pr_items);
            });
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.purchaseOrder.po_no) + " / NEW PURCHASE RECEIVE")
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
            _vm.addPurchaseReceiving()
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
                [_vm._v("Purchase Receive Ref #")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPurchaseReceive.purchase_rcvd_ref_no,
                      expression: "newPurchaseReceive.purchase_rcvd_ref_no"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.newPurchaseReceive.purchase_rcvd_ref_no
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPurchaseReceive,
                        "purchase_rcvd_ref_no",
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
                [_vm._v("Receive Date")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPurchaseReceive.purchase_rcvd_date,
                      expression: "newPurchaseReceive.purchase_rcvd_date"
                    }
                  ],
                  staticClass: "form-control m-b",
                  attrs: { type: "date" },
                  domProps: {
                    value: _vm.newPurchaseReceive.purchase_rcvd_date
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.newPurchaseReceive,
                        "purchase_rcvd_date",
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
                [_vm._v("Warehouse")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newPurchaseReceive.whouse_id,
                        expression: "newPurchaseReceive.whouse_id"
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "50%" },
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
                          _vm.newPurchaseReceive,
                          "whouse_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      { domProps: { value: _vm.purchaseOrder.whouse_id } },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.purchaseOrderItems[0].whouse_name) +
                            "\n                            "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "plain" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.purchaseOrderItems, function(row, index) {
                    return _c("tr", [
                      _c("td", { attrs: { width: "50%" } }, [
                        _vm._v(
                          "\n                               [" +
                            _vm._s(row.item_sku) +
                            " " +
                            _vm._s(row.item_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               " +
                            _vm._s(row.item_desc) +
                            "\n\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm._f("currency")(
                                row.purchse_order_item_rate,
                                "PHP",
                                2
                              )
                            ) +
                            " \n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                              " +
                            _vm._s(row.purchse_order_item_qty) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.prItems.length == 0
                        ? _c("td", [
                            _vm._v(
                              "\n                              0\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.prItems.length != 0
                        ? _c("td", [
                            _vm._v(
                              "\n                                  " +
                                _vm._s(
                                  _vm.prItems[index]
                                    .purchase_rcvd_item_qty_received
                                ) +
                                "\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "form-group col-md-5" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.purchase_rcvd_item_qty_received,
                                expression:
                                  "row.purchase_rcvd_item_qty_received"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { width: "210px" },
                            attrs: { type: "number", required: "required" },
                            domProps: {
                              value: row.purchase_rcvd_item_qty_received
                            },
                            on: {
                              keyup: function($event) {
                                _vm.checkIfItExistOnTheOrdereredQuantity(index)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  row,
                                  "purchase_rcvd_item_qty_received",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm._f("currency")(
                                parseInt(row.purchase_rcvd_item_qty_received) *
                                  parseFloat(row.purchse_order_item_rate),
                                "PHP",
                                2
                              )
                            ) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: row.item_id,
                            expression: "row.item_id"
                          }
                        ],
                        attrs: { type: "hidden" },
                        domProps: { value: row.item_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(row, "item_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: row.purchse_order_item_qty,
                            expression: "row.purchse_order_item_qty"
                          }
                        ],
                        attrs: { type: "hidden" },
                        domProps: { value: row.purchse_order_item_qty },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              row,
                              "purchse_order_item_qty",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("td", { attrs: { width: "30%" } }, [
                        row.qtyExceeded
                          ? _c("span", { staticStyle: { color: "#ff0000" } }, [
                              _vm._v(
                                "\n                                Quantity exceeded. You cannot receive quantity that exceeds your actual order.\n                            "
                              )
                            ])
                          : _vm._e()
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Subtotal ")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                               " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.totalCalculatedReceivedAmount,
                              "PHP",
                              2
                            )
                          ) +
                          "\n                            "
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "Purchase Discount(" +
                          _vm._s(_vm.purchaseOrder.po_discount_percentage) +
                          "% ) "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                               " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.totalDiscountedAmount,
                              "PHP",
                              2
                            )
                          ) +
                          "\n                            "
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Freight Charges ")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                               " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.purchaseOrder.po_freight_charge_amount,
                              "PHP",
                              2
                            )
                          ) +
                          "\n                            "
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("TOTAL ")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                               " +
                          _vm._s(_vm._f("currency")(_vm.total, "PHP", 2)) +
                          "\n                            "
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("VATable ")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(
                            _vm._f("currency")(
                              _vm.total * 0.89285714285,
                              "PHP",
                              2
                            )
                          ) +
                          "\n                            "
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
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("VAT ")]),
                    _vm._v(" "),
                    _c("td", { attrs: { colspan: "2" } }, [
                      _vm._v(
                        "\n                               " +
                          _vm._s(_vm._f("currency")(_vm.taxTotal, "PHP", 2)) +
                          "\n                            "
                      )
                    ])
                  ])
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "stripe" }, [
            _c(
              "div",
              {
                staticClass: "form-group ",
                staticStyle: {
                  "margin-top": "9px",
                  position: "relative",
                  left: "30%"
                }
              },
              [
                _c("label", { staticClass: "col-md-2 control-label" }, [
                  _vm._v("Notes ( For  Internal Use )")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newPurchaseReceive.purchase_rcvd_notes,
                        expression: "newPurchaseReceive.purchase_rcvd_notes"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "2" },
                    domProps: {
                      value: _vm.newPurchaseReceive.purchase_rcvd_notes
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newPurchaseReceive,
                          "purchase_rcvd_notes",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "container-action-bottom" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-outline",
                  attrs: {
                    disabled: _vm.formIsSubmitted || _vm.qtyExceeded,
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      _vm.addPurchaseReceiving()
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
                    ? _c("span", [_vm._v(" RECEIVE ")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Item Details")]),
        _vm._v(" "),
        _c("th", [_vm._v("PURCHASE PRICE")]),
        _vm._v(" "),
        _c("th", [_vm._v("ORDERED")]),
        _vm._v(" "),
        _c("th", [_vm._v("RECEIVED")]),
        _vm._v(" "),
        _c("th", [_vm._v("QTY TO RECEIVE")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dffee4c2", module.exports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(368)
/* template */
var __vue_template__ = __webpack_require__(369)
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
Component.options.__file = "resources\\assets\\js\\components\\PurchaseReceivings\\AddPurchaseReceiving.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dffee4c2", Component.options)
  } else {
    hotAPI.reload("data-v-dffee4c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});