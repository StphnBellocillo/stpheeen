webpackJsonp([53],{

/***/ 414:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        console.log("PURCHASE ORDER # " + this.poNumber);
        this.fetchResourceData(this.poNumber);
        this.fetchReceivings(this.poNumber);
        this.fetchPurchaseReturns(this.poNumber);
        this.userCurrentCorporationName = this.$localStorage.get('corp_name');
    },


    data: function data() {
        return {

            isReceivingnotYetConvertedToBill: true,
            userCurrentCorporationName: null,
            poNumber: null,
            contact: [],
            error: null,
            loading: false,
            purchaseOrder: {},
            items: [],
            receivings: {},
            receivingBill: {},
            purchaseReturns: []
        };
    },
    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.items.forEach(function (item) {
                return total += item.purchse_order_item_qty * item.purchse_order_item_rate;
            });
            return Number(total).toFixed(2);
        }
    },

    methods: {
        convertToBill: function convertToBill(purchaseReceiveId) {

            this.$router.push({ path: '/purchase-receivings/' + purchaseReceiveId + '/bills/new', query: { order_number: purchaseReceiveId, ref_module: 'purchase-recevings' } });
        },
        exportToPdf: function exportToPdf() {
            var _this = this;

            this.showLoadingModal();
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + this.purchaseOrder.po_id + '/print', { purchase_order_items: this.items, purchase_order: this.purchaseOrder }).then(function (response) {

                console.log(response);
                _this.loading = false;
                _this.closeModal();
            }, function (response) {

                _this.loading = false;
                _this.error = response.statusText;
            });
        },
        printPurchaseOrder: function printPurchaseOrder() {
            this.$router.push({ path: '/purchase-orders/' + this.poNumber + '/print' });
        },
        showLoadingModal: function showLoadingModal() {
            $('#modal-show-export-pdf-dialog').modal();
        },
        closeModal: function closeModal() {

            $('#modal-show-export-pdf-dialog .close').click();
        },
        viewPurchaseReceiving: function viewPurchaseReceiving(prId) {
            this.$router.push({ path: '/purchase-receivings/' + prId });
        },
        viewPurchaseReturn: function viewPurchaseReturn(purchaseReturnId) {
            this.$router.push({ path: '/purchase-returns/' + purchaseReturnId });
        },
        createPurchaseReturn: function createPurchaseReturn() {

            this.$router.push({ path: '/purchase-orders/' + this.poNumber + '/purchase-returns/new' });
        },
        addPartialPurchaseReceiving: function addPartialPurchaseReceiving() {
            this.$router.push({ path: '/purchase-orders/' + this.poNumber + '/receive' });
        },
        fetchResourceData: function fetchResourceData(poId) {
            var _this2 = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + poId).then(function (response) {
                _this2.$set(_this2, 'purchaseOrder', response.data.purchaseorder);
                _this2.$set(_this2, 'items', response.data.items);
                console.log(response);
                _this2.loading = false;
            }, function (response) {

                _this2.loading = false;
                _this2.error = response.statusText;
            });
        },
        fetchReceivings: function fetchReceivings(poId) {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + poId + '/receivings').then(function (response) {
                _this3.$set(_this3, 'receivings', response.data.receivings);
                _this3.$set(_this3, 'receivingBill', response.data.bill);
                console.log(response);
                _this3.loading = false;
            }, function (response) {
                _this3.loading = false;
                // error
                _this3.error = response.statusText;
            });
        },
        fetchPurchaseReturns: function fetchPurchaseReturns(poId) {
            var _this4 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-orders/' + poId + '/returns').then(function (response) {
                _this4.$set(_this4, 'purchaseReturns', response.data);
                console.log(response);
                _this4.loading = false;
            }, function (response) {
                _this4.loading = false;
                // error
                _this4.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 415:
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
                attrs: { title: "Export to pdf", type: "button" },
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
                attrs: { title: "Print data", type: "button" },
                on: {
                  click: function($event) {
                    _vm.printPurchaseOrder()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-print" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btn-group" }, [
            _vm.purchaseOrder.po_status != "CLOSED"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: { type: "button", "data-toggle": "dropdown" },
                    on: {
                      click: function($event) {
                        _vm.addPartialPurchaseReceiving()
                      }
                    }
                  },
                  [_vm._v("\n                    RECEIVE ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.purchaseOrder.po_status == "CLOSED"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: {
                      disabled: "disabled",
                      title: "Purchase order has been received",
                      type: "button",
                      "data-toggle": "dropdown"
                    }
                  },
                  [_vm._v("\n                    RECEIVE ")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v("\n        " + _vm._s(_vm.purchaseOrder.po_no) + "\n      ")
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
          _vm._m(2),
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c("tbody", [
                    _vm.receivings == null
                      ? _c("tr", [_c("p", [_vm._v("No receivings.")])])
                      : _c("tr", [
                          _c("td", [
                            _vm._v(
                              "DR-" +
                                _vm._s(_vm.receivings.purchase_rcvd_id) +
                                " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                     " +
                                _vm._s(_vm.receivings.purchase_rcvd_date) +
                                "\n                                 "
                            )
                          ]),
                          _vm._v(" "),
                          _vm.receivingBill != null
                            ? _c("td", [
                                _vm._v(
                                  " " + _vm._s(_vm.receivingBill.bill_no) + " "
                                )
                              ])
                            : _c("td", [_vm._v(" NO BILL YET ")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm.receivingBill == null
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn-outline",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.convertToBill(
                                          _vm.receivings.purchase_rcvd_id
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Convert to bill")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn-outline",
                                on: {
                                  click: function($event) {
                                    _vm.viewPurchaseReceiving(
                                      _vm.receivings.purchase_rcvd_id
                                    )
                                  }
                                }
                              },
                              [_vm._v("View")]
                            )
                          ])
                        ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane",
                attrs: { role: "tabpanel", id: "purchase-returns" }
              },
              [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.purchaseReturns, function(purchaseReturn) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              _vm.viewPurchaseReturn(
                                purchaseReturn.purchase_rturn_id
                              )
                            }
                          }
                        },
                        [
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(purchaseReturn.purchase_rturn_no) +
                                " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " + _vm._s(purchaseReturn.purchase_rturn_date)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " +
                                _vm._s(
                                  purchaseReturn.purchase_rturn_total_amount
                                )
                            )
                          ])
                        ]
                      )
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
          staticClass: "preview-details"
        },
        [
          _c(
            "div",
            { staticClass: "pull-right" },
            [
              _c("h3", { staticClass: "title" }, [_vm._v("Purchase Order")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.purchaseOrder.po_no) + " ")]),
              _vm._v(" "),
              _c("span", { staticClass: "label label-success" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.purchaseOrder.po_status) +
                    "\n                "
                )
              ]),
              _c("br"),
              _vm._v(" "),
              _c("strong", [
                _vm._v(
                  " " +
                    _vm._s(
                      _vm._f("currency")(
                        _vm.purchaseOrder.po_balance_due,
                        "PHP",
                        2
                      )
                    ) +
                    " "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "font-size": "12px !important" } }, [
                _vm._v("Balance Due")
              ]),
              _vm._v(" "),
              _c("P", [
                _vm._v(
                  "Purchase Order Date :  " + _vm._s(_vm.purchaseOrder.po_date)
                )
              ]),
              _vm._v(" "),
              _c("P", [
                _vm._v("TERMS :  " + _vm._s(_vm.purchaseOrder.payment_terms))
              ]),
              _vm._v(" "),
              _c("P", [
                _vm._v("DUE DATE :  " + _vm._s(_vm.purchaseOrder.po_due_date))
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
                _vm._v(" Supplier / Contact  ")
              ]),
              _vm._v(" "),
              _vm.items.length != 0
                ? _c("p", [
                    _vm._v(" " + _vm._s(_vm.items[0].contact_company_name))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("p", { staticStyle: { color: "gray" } }, [
                _vm._v(" Deliver To")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(" " + _vm._s(_vm.userCurrentCorporationName) + " ")
              ])
            ]
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table table-responsive" }, [
            _vm._m(6),
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
                    _c("td", { attrs: { width: "25%" } }, [
                      _vm._v(
                        _vm._s(item.purchse_order_item_qty) +
                          " " +
                          _vm._s(item.purchase_unit_name) +
                          "  "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { width: "20%" } }, [
                      _vm._v(_vm._s(item.purchse_order_item_rate) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " \n                        " +
                          _vm._s(
                            _vm._f("currency")(
                              item.purchse_order_item_rate *
                                item.purchse_order_item_qty,
                              "PHP",
                              2
                            )
                          ) +
                          " \n                         "
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
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(_vm._f("currency")(_vm.subTotal, "PHP", 2)) +
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
                      "\n                            Total\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseOrder.po_total_amount,
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
                  _c("td", [
                    _vm._v(
                      "\n                            Freight Charges \n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "  " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseOrder.po_freight_charge_amount,
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
                  _c("td", [
                    _vm._v(
                      "\n                            Purchase Discount ( " +
                        _vm._s(
                          _vm.purchaseOrder.po_discount_percentage == null
                            ? 0
                            : _vm.purchaseOrder.po_discount_percentage
                        ) +
                        "% )\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseOrder.po_discounted_amount,
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
                            _vm.purchaseOrder.po_total_amount * 0.10714285714,
                            "PHP",
                            2
                          )
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              2
            )
          ]),
          _vm._v(" "),
          !_vm.loading
            ? _c("p", [
                _vm._v(" Issued By : "),
                _c("strong", [
                  _vm._v(" " + _vm._s(_vm.purchaseOrder.po_issued_by) + " ")
                ])
              ])
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "modalReceiveAll" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(7),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
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
              [_vm._m(8)]
            )
          ]),
          _vm._v(" "),
          _vm._m(9)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-show-notif-mark-as-complete" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog",
            staticStyle: { "min-width": "900px !important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(10),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: { "data-dismiss": "modal" },
                    on: {
                      click: function($event) {
                        _vm.createPurchaseReturn()
                      }
                    }
                  },
                  [_vm._v("YES, CREATE PURCHASE RETURN")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("OH WAIT, NO")]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(12)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default",
        attrs: { title: "Edit data", type: "button" }
      },
      [_c("i", { staticClass: "fa fa-pencil" })]
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
            [_vm._v("RECEIVES")]
          )
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              attrs: {
                href: "#purchase-returns",
                "aria-controls": "tab",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("SHORTLANDED CARGOS / RETURNS ")]
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
        _c("th", [_vm._v("PURCHASE RECEIVE #")]),
        _vm._v(" "),
        _c("th", [_vm._v("RECEIVED ON")]),
        _vm._v(" "),
        _c("th", [_vm._v("BILL # ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "tab-pane", attrs: { role: "tabpanel", id: "bills" } },
      [
        _c("table", { staticClass: "table table-hover" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("BILL #")]),
              _vm._v(" "),
              _c("th", [_vm._v("DATE")]),
              _vm._v(" "),
              _c("th", [_vm._v("STATUS")]),
              _vm._v(" "),
              _c("th", [_vm._v("DUE DATE")]),
              _vm._v(" "),
              _c("th", [_vm._v("AMOUNT")]),
              _vm._v(" "),
              _c("th", [_vm._v("BALANCE DUE")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("BO-0001")]),
              _vm._v(" "),
              _c("td", [_vm._v("04/26/17")]),
              _vm._v(" "),
              _c("td", [_vm._v("PAID")]),
              _vm._v(" "),
              _c("td", [_vm._v("04/26/17")]),
              _vm._v(" "),
              _c("td", [_vm._v("PHP1,000.00")]),
              _vm._v(" "),
              _c("td", [_vm._v("PHP0.00")])
            ])
          ])
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
        _c("th", [_vm._v("RETURN #")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE")]),
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("RECEIVE ALL ITEMS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-content" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticClass: "col-md-3 control-label required-field" }, [
          _vm._v("Purchase Receive #")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("input", {
            staticClass: "form-control m-b",
            attrs: { type: "text" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticClass: "col-md-3 control-label required-field" }, [
          _vm._v("Receive Date")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("input", {
            staticClass: "form-control m-b",
            attrs: { type: "text", "data-provide": "datepicker" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group " }, [
        _c("label", { staticClass: "col-md-3 control-label" }, [
          _vm._v("Notes ( For  Internal Use )")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("textarea", { staticClass: "form-control", attrs: { rows: "2" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("button", { staticClass: "btn btn-primary btn-outline" }, [
        _vm._v(" Receive ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
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
        _vm._v("Confirm Mark as Complete")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [
        _vm._v(
          "Are you sure you want to mark this purchase order as complete ? This will create a purchase return to your principal supplier for the remaining undelivered items."
        )
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-hover" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("ITEM DETAILS")]),
            _vm._v(" "),
            _c("th", [_vm._v("REMAINING QTY")]),
            _vm._v(" "),
            _c("th", [_vm._v("QTY DELIVERED")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("PAPAYA SOAP [ SKU : PS-0001 ]")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 20pcs ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 30pcs ")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-show-export-pdf-dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
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
                _vm._v("Export to pdf")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [_vm._v("Please wait...")])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-09ae2cc9", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(414)
/* template */
var __vue_template__ = __webpack_require__(415)
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
Component.options.__file = "resources\\assets\\js\\components\\Purchase Orders\\ViewPurchaseOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09ae2cc9", Component.options)
  } else {
    hotAPI.reload("data-v-09ae2cc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});