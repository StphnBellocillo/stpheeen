webpackJsonp([49],{

/***/ 344:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.purchaseReceivingId = this.$route.params.id;
        this.fetchResourceData();
    },


    data: function data() {
        return {
            purchaseReceivingId: null,
            error: null,
            loading: false,
            purchaseReceivingItems: [],
            purchaseReceive: {}
        };
    },
    computed: {
        totalAmount: function totalAmount() {

            var total = 0;
            this.purchaseReceivingItems.forEach(function (row) {
                return total += row.purchase_rcvd_item_qty_received * row.purchase_price;
            });
            return Number(total).toFixed(2);
        }
    },

    methods: {
        fetchResourceData: function fetchResourceData() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-receivings/' + this.purchaseReceivingId).then(function (response) {
                console.log(response.data);
                _this.$set(_this, 'purchaseReceive', response.data.purchase_receive[0]);
                _this.$set(_this, 'purchaseReceivingItems', response.data.items);
                _this.loading = false;
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("\n            DELIVERY RECEIPT DETAILS\n          ")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" Preparing data ... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "col-md-offset-2 col-md-8"
  }, [_c('div', {
    staticClass: "preview-details"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('h3', [_vm._v("DELIVERY RECEIPT # " + _vm._s(_vm.purchaseReceivingId))]), _vm._v(" "), _c('P', [_vm._v("Purchase Receive Date : " + _vm._s(_vm.purchaseReceive.return_date))]), _vm._v(" "), _c('P', [_vm._v("Warehouse : " + _vm._s(_vm.purchaseReceive.whouse_name))])], 1), _vm._v(" "), _c('div', {
    staticClass: "pull-left"
  }, [_c('h5', [_vm._v(" DELIVERED BY ")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.purchaseReceive.contact_name))])])]), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.purchaseReceivingItems), function(purchaseReceive) {
    return _c('tr', [_c('td', [_vm._v("\n                                [ " + _vm._s(purchaseReceive.item_sku) + " ]  " + _vm._s(purchaseReceive.item_name) + " \n                            ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(purchaseReceive.purchase_rcvd_item_qty_received) + " " + _vm._s(purchaseReceive.unit_name) + " ")]), _vm._v(" "), _c('td', [_vm._v("\n                                " + _vm._s(purchaseReceive.purchase_price) + "\n                            ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(purchaseReceive.purchase_price * purchaseReceive.purchase_rcvd_item_qty_received, 'PHP', 2)) + " ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Subtotal")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.totalAmount, 'PHP', 2)) + "\n                            ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Total")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.purchaseReceive.purchase_rcvd_total_amount, 'PHP', 2)) + "\n                            ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("VAT")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.purchaseReceive.purchase_rcvd_tax_amount, 'PHP', 2)) + "\n                            ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Freight Charges")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.purchaseReceive.po_freight_charge_amount, 'PHP', 2)) + "\n                            ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Purchase Discount")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.purchaseReceive.purchase_rcvd_discounted_amount, 'PHP', 2)) + "\n                            ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("VATable")]), _vm._v(" "), _c('td', [_vm._v("\n                                 " + _vm._s(_vm._f("currency")(_vm.purchaseReceive.purchase_rcvd_total_amount * 0.89285714285, 'PHP', 2)) + "\n                            ")])])], 2), _vm._v(" "), _c('tfoot', [_vm._v("\n                        Notes : \n                        " + _vm._s(_vm.purchaseReceive.purchase_rcvd_notes) + "\n                    ")])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ITEMS & DESCRIPTION")]), _vm._v(" "), _c('th', [_vm._v("QTY")]), _vm._v(" "), _c('th', [_vm._v("RATE")]), _vm._v(" "), _c('th', [_vm._v("AMOUNT")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7631eabc", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(344),
  /* template */
  __webpack_require__(459),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\PurchaseReceivings\\ViewPurchaseReceiving.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ViewPurchaseReceiving.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7631eabc", Component.options)
  } else {
    hotAPI.reload("data-v-7631eabc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});