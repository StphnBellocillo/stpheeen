webpackJsonp([44],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_sweetalert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_sweetalert__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_sweetalert___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.soNumber = this.$route.params.so_id;
        this.fetchResourceData(this.soNumber);
        this.initializePlugins();

        this.findInvoices(this.soNumber);
        this.findPickLists(this.soNumber);
        this.fetchPickLists();

        this.newPickList.sales_order_id = this.soNumber;
    },


    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.salesOrderItems.forEach(function (item) {
                return total += item.so_item_qty * item.so_item_rate;
            });
            return Number(total).toFixed(2);
        }
    },

    data: function data() {
        return {

            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            salesDiscounts: [],
            contact: [],
            error: null,
            loading: true,
            soNumber: null,
            salesOrder: null,
            salesOrderItems: [],
            invoices: [],
            picklists: [],
            soPickLists: [],
            newPickList: {
                pick_list_id: null,
                corp_id: 1,
                pick_list_ref_no: '',
                sales_order_id: null
            }
        };
    },

    methods: {
        editSalesOrder: function editSalesOrder() {

            this.$router.push({ path: '/sales-orders/' + this.soNumber + '/edit' });
        },
        addPickList: function addPickList() {
            var _this = this;

            this.loading = true;
            this.formIsSubmitted = true;

            console.log(this.newPickList);
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/create', this.newPickList).then(function (response) {

                console.log(response.data);
                alert("Sales order  has been added to pick list ! !");
                _this.loading = false;
                _this.formIsSubmitted = false;
                _this.$router.push({ path: '/pick-lists/' + response.data.pick_list_id });
            }, function (response) {

                this.error = response.statusText;
                this.loading = false;
                this.formIsSubmitted = false;
            });
        },
        createInvoice: function createInvoice() {
            var vm = this;
            this.$swal({
                title: 'Confirmation',
                text: "This will mark your sales order as 'Confirmed'",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#2E7D32',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, I confirm'
            }).then(function () {
                vm.$router.push({
                    path: '/sales-orders/invoices/new',
                    query: {
                        order_number: vm.soNumber,
                        ref_module: 'salesorders',
                        sales_order_number: vm.soNumber
                    }
                });
            });
        },
        fetchPickLists: function fetchPickLists() {
            var _this2 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/get-by-status?status=Active').then(function (response) {
                console.log(response.data);
                _this2.$set(_this2, 'picklists', response.data);
            }, function (response) {

                // error
                _this2.error = response.status;
                _this2.loading = false;
            });
        },
        viewInvoice: function viewInvoice(invoiceId) {
            this.$router.push({ path: '/invoices/' + invoiceId });
        },
        viewPickList: function viewPickList(pickListId) {
            this.$router.push({ path: '/pick-lists/' + pickListId });
        },
        findInvoices: function findInvoices(soId) {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/salesorders/find-by-order-no?order_no=' + soId).then(function (response) {

                console.log(response.data);

                _this3.$set(_this3, 'invoices', response.data);
            }, function (response) {

                // error
                _this3.error = response.status;
                _this3.loading = false;
            });
        },
        findPickLists: function findPickLists(soId) {
            var _this4 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/sales-orders/' + soId + '/pick_lists').then(function (response) {
                console.log(response.data);
                _this4.$set(_this4, 'soPickLists', response.data);
            }, function (response) {
                // error
                _this4.error = response.status;
                _this4.loading = false;
            });
        },
        fetchSalesDiscounts: function fetchSalesDiscounts() {
            var _this5 = this;

            console.log("getting discounts" + this.salesOrder.so_no);
            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/sales-orders/' + this.salesOrder.so_id + '/discounts').then(function (response) {

                _this5.$set(_this5, 'salesDiscounts', response.data.sales_discounts);

                console.log(response.data);

                _this5.loading = false;
            }, function (response) {
                // error
                _this5.error = response.status;
                _this5.loading = false;
            });
        },
        fetchResourceData: function fetchResourceData(salesOrderId) {
            var _this6 = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/sales-orders/' + salesOrderId).then(function (response) {

                _this6.$set(_this6, 'salesOrderItems', response.data.items);
                _this6.$set(_this6, 'salesOrder', response.data.salesorder);
                _this6.fetchSalesDiscounts();
                console.log(response);

                _this6.loading = false;
            }, function (response) {
                // error
                _this6.error = response.status;
                _this6.loading = false;
            });
        },
        initializePlugins: function initializePlugins() {

            $("[data-toggle=tooltip]").tooltip();
        }
    }

});

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading "
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
  }, [_c('div', {
    staticClass: "load-error"
  }, [_vm._v(" " + _vm._s(_vm.error))]), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" An error occured while we load your data. ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: " !loading && !error"
    }],
    staticClass: "col-md-offset-2 col-md-8"
  }, [(!_vm.loading) ? _c('div', [_c('span', {
    staticClass: "pull-right"
  }, [_vm._v("\n                   Issued To :"), _c('br'), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_c('strong', [_vm._v("\n                   " + _vm._s(_vm.salesOrderItems[0].contact_company_name))])])]), _vm._v(" "), _c('h3', {
    staticClass: "title"
  }, [_vm._v("Sales Order")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_vm._v(_vm._s(_vm.salesOrder.so_no) + " ")]), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v("REFERENCE# : " + _vm._s(_vm.salesOrder.so_ref_no) + " ")]) : _vm._e(), _vm._v(" "), _c('P', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_vm._v("ORDER DATE : " + _vm._s(_vm.salesOrder.so_order_date) + " ")]), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.salesOrderItems), function(item) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "35%"
      }
    }, [_vm._v("\n                               [ " + _vm._s(item.item_sku) + " ]  " + _vm._s(item.item_name) + " "), _c('br'), _vm._v("\n                               " + _vm._s(item.item_desc) + " \n                           ")]), _vm._v(" "), (parseFloat(item.so_item_qty) < parseFloat(item.conversion_qty)) ? _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v(_vm._s(item.so_item_qty) + " " + _vm._s(item.sales_unit) + " / 0 " + _vm._s(item.purchase_unit_name) + " ")]) : _vm._e(), _vm._v(" "), (parseFloat(item.so_item_qty) >= parseFloat(item.conversion_qty)) ? _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v("  " + _vm._s(Math.floor(parseInt(item.so_item_qty) / parseInt(item.conversion_qty))) + "  " + _vm._s(item.purchase_unit_name) + " / " + _vm._s(item.so_item_qty % item.conversion_qty) + " " + _vm._s(item.sales_unit) + " ")]) : _vm._e(), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
      attrs: {
        "width": "20%"
      }
    }, [_vm._v("\n                               " + _vm._s(item.so_item_rate) + "\n                           ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(item.so_item_rate * item.so_item_qty, 'PHP', 2)) + " ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v(" Sub Total")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.subTotal, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                               Total\n                           ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.salesOrder.so_total_amount, 'PHP', 2)) + " ")])]), _vm._v(" "), _vm._l((_vm.salesDiscounts), function(discount) {
    return _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                               " + _vm._s(discount.discount_name) + " (" + _vm._s(discount.tran_discount_percentage) + "%)\n                           ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(discount.tran_discount_amount, 'PHP', 2)) + " ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                               VAT \n                           ")]), _vm._v(" "), _c('td', [_vm._v("  " + _vm._s(_vm._f("currency")(_vm.salesOrder.so_total_amount * 0.10714285714, 'PHP', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                               Balance Due \n                           ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.salesOrder.so_balance_due, 'PHP', 2)) + " ")])])], 2)]), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v(" Sales Person : "), _c('strong', [_vm._v(" " + _vm._s(_vm.salesOrderItems[0].display_name) + " ")])]) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-add-to-picklist"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Choose Pick List")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPickList.pick_list_id),
      expression: "newPickList.pick_list_id"
    }],
    staticClass: "form-control m-b",
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
        _vm.newPickList.pick_list_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.picklists), function(picklist) {
    return _c('option', {
      domProps: {
        "value": picklist.pick_list_id
      }
    }, [_vm._v("\n                                               " + _vm._s(picklist.pick_list_no) + "\n                                              ")])
  })), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPickList.sales_order_id),
      expression: "newPickList.sales_order_id"
    }],
    attrs: {
      "type": "hidden"
    },
    domProps: {
      "value": _vm.newPickList.sales_order_id,
      "value": (_vm.newPickList.sales_order_id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPickList.sales_order_id = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('p', {
    staticClass: "col-md-offset-1"
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [(!_vm.formIsSubmitted) ? _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "type": "button"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.buttonText)
    },
    on: {
      "click": function($event) {
        _vm.addPickList()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.formIsSubmitted) ? _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "type": "button"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    },
    on: {
      "click": function($event) {
        _vm.addPickList()
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ITEMS & DESCRIPTION")]), _vm._v(" "), _c('th', [_vm._v(" QTY ")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v("RATE")]), _vm._v(" "), _c('th', [_vm._v("AMOUNT")])])])
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
  }, [_vm._v("ADD TO PICK LIST")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-473898d4", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(362),
  /* template */
  __webpack_require__(435),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Sales Orders\\PrintSalesOrder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrintSalesOrder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-473898d4", Component.options)
  } else {
    hotAPI.reload("data-v-473898d4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});