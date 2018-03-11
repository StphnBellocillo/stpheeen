webpackJsonp([52],{

/***/ 340:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.poNumber = this.$route.params.po_id;
        console.log("PURCHASE ORDER # " + this.poNumber);
        this.fetchResourceData(this.poNumber);
        this.fetchReceivings(this.poNumber);
        this.fetchPurchaseReturns(this.poNumber);
        this.userCurrentCorporationName = this.$localStorage.get('corp_name');
    },


    data: function data() {
        return {
            userCurrentCorporationName: null,
            poNumber: null,
            contact: [],
            error: null,
            loading: false,
            purchaseOrder: {},
            items: [],
            receivings: [],
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
        printPurchaseOrder: function printPurchaseOrder() {
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
        showLoadingModal: function showLoadingModal() {
            $('#modal-show-export-pdf-dialog').modal();
        },
        closeModal: function closeModal() {

            $('#modal-show-export-pdf-dialog').modal({ 'display': 'none', 'backdrop': false });
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
                _this3.$set(_this3, 'receivings', response.data);
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

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-offset-2 col-md-8"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("Purchase Order")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.purchaseOrder.po_no) + " ")]), _vm._v(" "), _c('strong', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.purchaseOrder.po_balance_due, 'PHP', 2)) + " ")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("Balance Due")]), _vm._v(" "), _c('P', [_vm._v("Purchase Order Date :  " + _vm._s(_vm.purchaseOrder.po_date))]), _vm._v(" "), _c('P', [_vm._v("TERMS :  " + _vm._s(_vm.purchaseOrder.payment_terms))]), _vm._v(" "), _c('P', [_vm._v("DUE DATE :  " + _vm._s(_vm.purchaseOrder.po_due_date))])], 1), _vm._v(" "), _c('div', {
    staticClass: "pull-left",
    staticStyle: {
      "margin-top": "10rem !important"
    }
  }, [_c('p', {
    staticStyle: {
      "color": "gray"
    }
  }, [_vm._v(" Supplier / Contact  ")]), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v(" " + _vm._s(_vm.items[0].contact_company_name))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "gray"
    }
  }, [_vm._v(" Deliver To")]), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(_vm.userCurrentCorporationName) + " ")])]), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.items), function(item) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "55%"
      }
    }, [_vm._v("\n                           [ " + _vm._s(item.item_sku) + " ] " + _vm._s(item.item_name)), _c('br'), _vm._v(" " + _vm._s(item.item_desc) + " \n                        ")]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v(_vm._s(item.purchse_order_item_qty) + " " + _vm._s(item.purchase_unit_name) + "  ")]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "20%"
      }
    }, [_vm._v(_vm._s(item.purchse_order_item_rate) + " ")]), _vm._v(" "), _c('td', [_vm._v(" \n                        " + _vm._s(_vm._f("currency")(item.purchse_order_item_rate * item.purchse_order_item_qty, 'PHP', 2)) + " \n                         ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v(" Sub Total")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.subTotal, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                            Total\n                        ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.purchaseOrder.po_total_amount, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                            Freight Charges \n                        ")]), _vm._v(" "), _c('td', [_vm._v("  " + _vm._s(_vm._f("currency")(_vm.purchaseOrder.po_freight_charge_amount, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                            Purchase Discount ( " + _vm._s(_vm.purchaseOrder.po_discount_percentage == null ? 0 : _vm.purchaseOrder.po_discount_percentage) + "% )\n                        ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.purchaseOrder.po_discounted_amount, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                            VAT \n                        ")]), _vm._v(" "), _c('td', [_vm._v("  " + _vm._s(_vm._f("currency")(_vm.purchaseOrder.po_total_amount * 0.10714285714, 'PHP', 2)) + " ")])])], 2)]), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v(" Issued By : "), _c('strong', [_vm._v(" " + _vm._s(_vm.purchaseOrder.po_issued_by) + " ")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modalReceiveAll"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
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
  }, [_vm._m(2)])]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-show-notif-mark-as-complete"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    staticStyle: {
      "min-width": "900px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "data-dismiss": "modal"
    },
    on: {
      "click": function($event) {
        _vm.createPurchaseReturn()
      }
    }
  }, [_vm._v("YES, CREATE PURCHASE RETURN")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("OH WAIT, NO")])])])])]), _vm._v(" "), _vm._m(6)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ITEMS & DESCRIPTION")]), _vm._v(" "), _c('th', [_vm._v("QTY")]), _vm._v(" "), _c('th', [_vm._v("RATE")]), _vm._v(" "), _c('th', [_vm._v("AMOUNT")])])])
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
  }, [_vm._v("RECEIVE ALL ITEMS")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label required-field"
  }, [_vm._v("Purchase Receive #")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label required-field"
  }, [_vm._v("Receive Date")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    staticClass: "form-control m-b",
    attrs: {
      "type": "text",
      "data-provide": "datepicker"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group "
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Notes ( For  Internal Use )")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('textarea', {
    staticClass: "form-control",
    attrs: {
      "rows": "2"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline"
  }, [_vm._v(" Receive ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
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
  }, [_vm._v("Confirm Mark as Complete")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-body"
  }, [_c('p', [_vm._v("Are you sure you want to mark this purchase order as complete ? This will create a purchase return to your principal supplier for the remaining undelivered items.")]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("ITEM DETAILS")]), _vm._v(" "), _c('th', [_vm._v("REMAINING QTY")]), _vm._v(" "), _c('th', [_vm._v("QTY DELIVERED")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("PAPAYA SOAP [ SKU : PS-0001 ]")]), _vm._v(" "), _c('td', [_vm._v(" 20pcs ")]), _vm._v(" "), _c('td', [_vm._v(" 30pcs ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-show-export-pdf-dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
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
  }, [_vm._v("Export to pdf")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('p', [_vm._v("Please wait...")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-990cdb30", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(340),
  /* template */
  __webpack_require__(470),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Purchase Orders\\PrintPurchaseOrder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrintPurchaseOrder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-990cdb30", Component.options)
  } else {
    hotAPI.reload("data-v-990cdb30", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});