webpackJsonp([55],{

/***/ 335:
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




Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_sweetalert___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.initializePlugins();
        this.pickListId = this.$route.params.id;
        this.fetchResourceData(this.pickListId);
        // this.fetchSalesOrders(this.pickListId)
        this.checkIfHasGatePass();
        this.fetchPickListItems(this.pickListId);
        this.currentCorporationName = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationName(this);
    },

    computed: {
        getTotalMerchandiseInventoryAmount: function getTotalMerchandiseInventoryAmount() {
            var vm = this;
            this.picklistItems.forEach(function (item) {
                return vm.merchandiseInventoryAmount += parseInt(item.total_qty) / parseFloat(item.conversion_qty) * parseFloat(item.purchase_price);
            });
            return this.merchandiseInventoryAmount;
        }
    },
    data: function data() {
        return {

            merchandiseInventoryAmount: 0.00,
            currentCorporationName: null,
            pickListId: null,
            pickList: {

                corp_id: null,
                pick_list_ref_no: null,
                pick_list_status: null,
                pick_list_date_issued: null
            },
            gatepass: [],
            unInvoicedSalesOrder: null,
            error: false,
            loading: false,
            salesorders: [],
            picklistItems: [],
            invoicesId: []
        };
    },

    methods: {
        removeSalesOrder: function removeSalesOrder(soId) {
            var _this = this;

            if (!confirm('Are you sure you want to remove this sales order ?')) {
                return false;
            }
            this.loading = true;
            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + this.pickListId + '/events/remove-salesorder?so_id=' + soId).then(function (response) {

                alert("Sales order has been removed from picklist !");
                window.reload();
                _this.loading = false;
            }, function (response) {

                _this.error = response.status;
                _this.loading = false;
            });
        },


        // calculate(){
        //   console.log("picklist items are" + JSON.stringify(this.picklistItems))
        //     var vm = this
        //       this.picklistItems.forEach( (item) => 
        //       vm.merchandiseInventoryAmount +=  ( parseFloat(item.total_qty) / parseFloat(item.conversion_qty) ) * parseFloat(item.purchase_price)
        //     )

        //       console.log("Inventory amount is " + this.merchandiseInventoryAmount)
        //     return this.merchandiseInventoryAmount
        // },

        fetchResourceData: function fetchResourceData(pickListId) {
            var _this2 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + pickListId).then(function (response) {

                _this2.$set(_this2, 'pickList', response.data);
                _this2.loading = false;
            }, function (response) {

                _this2.error = response.status;
                _this2.loading = false;
            });
        },
        fetchSalesOrders: function fetchSalesOrders(pickListId) {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + pickListId + '/salesorders').then(function (response) {
                _this3.$set(_this3, 'salesorders', response.data.salesorders);
                _this3.countNumberOfUnInvoicedSalesOrder(response.data);
                _this3.loading = false;
            }, function (response) {

                _this3.error = response.status;
                _this3.loading = false;
            });
        },
        countNumberOfUnInvoicedSalesOrder: function countNumberOfUnInvoicedSalesOrder(data) {
            this.unInvoicedSalesOrder = data.uninvoiced_salesorder;
        },
        fetchPickListItems: function fetchPickListItems(pickListId) {
            var _this4 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + pickListId + '/items').then(function (response) {

                _this4.$set(_this4, 'picklistItems', response.data);
                _this4.loading = false;
            }, function (response) {

                _this4.error = response.status;
                _this4.loading = false;
            });
        },
        viewSalesOrder: function viewSalesOrder(salesOrderId) {

            this.$router.push({ path: '/sales-orders/' + salesOrderId });
        },
        convertSalesOrdersToInvoices: function convertSalesOrdersToInvoices() {
            var _this5 = this;

            alert('Merchandise inventory amount is :' + this.getTotalMerchandiseInventoryAmount);
            this.loading = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + this.pickListId + '/events/convert-salesorders-to-invoices', {
                merchandise_inv_amount: this.getTotalMerchandiseInventoryAmount,
                salesorders: this.salesorders,
                corp_id: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
                current_user: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getAuthenticatedUser(this)
            }).then(function (response) {
                alert("Sales orders has been converted to invoices !");
                window.location.reload();
                _this5.loading = false;
            }, function (response) {

                _this5.error = response.status + ' ' + response.statusText;
                _this5.loading = false;
            });
        },
        createInvoices: function createInvoices() {

            if (this.gatepass.length == 0) {
                alert("No gatepass found on this picklist. Please create one before proceeding");
                // window.location.reload()
                return false;
            }

            var vm = this;
            var responseData = null;
            console.log("I creating invoices ...");
            this.$swal({
                title: 'Confirmation',
                text: "This will convert sales orders to invoices",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#2E7D32',
                cancelButtonColor: '#d33',
                confirmButtonText: "Yes,that's great",
                showLoaderOnConfirm: true,
                preConfirm: function preConfirm() {
                    return new Promise(function (resolve, reject) {

                        responseData = vm.convertSalesOrdersToInvoices();
                        console.log(JSON.stringify(responseData));
                        if (responseData) {
                            reject('An error occured');
                        } else {
                            resolve();
                        }
                    });
                },
                allowOutsideClick: false
            }).then(function (response) {
                vm.fetchSalesOrders();
                console.log(response.data);
                this.invoicesId = response.data.invoice_ids;
                if (response.data.code == 200) {
                    vm.$swal({
                        type: 'success',
                        title: 'Invoices has been created ! '
                    });
                }
            });
        },
        createGatePassRequest: function createGatePassRequest() {
            var _this6 = this;

            this.loading = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + this.pickListId + '/events/create-gate-pass', {
                corp_id: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this),
                items: this.picklistItems,
                salesorders: this.salesorders
            }).then(function (response) {
                window.location.reload();
                alert("Gate pass has been created !");
                _this6.loading = false;
            }, function (response) {

                _this6.error = response.status + ' ' + response.statusText;
                _this6.loading = false;
            });
        },
        createGatePass: function createGatePass() {
            var vm = this;
            var responseData = null;
            console.log("I creating invoices ...");
            this.$swal({
                title: 'Confirmation',
                text: "Are you sure ?",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#2E7D32',
                cancelButtonColor: '#d33',
                confirmButtonText: "Yep,no more Q !",
                showLoaderOnConfirm: true,
                preConfirm: function preConfirm() {
                    return new Promise(function (resolve, reject) {
                        responseData = vm.createGatePassRequest();
                        console.log(JSON.stringify(responseData));
                        if (responseData) {
                            reject('An error occured');
                        } else {
                            resolve();
                        }
                    });
                },
                allowOutsideClick: false
            }).then(function (response) {
                console.log(response);
                this.fetchSalesOrders();
                vm.$swal({
                    type: 'success',
                    title: 'Gate pass been created ! '
                });
            });
        },
        checkIfHasGatePass: function checkIfHasGatePass() {
            var _this7 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/' + this.pickListId + '/events/check-for-gate-pass').then(function (response) {
                _this7.gatepass = response.data;
                _this7.loading = false;
            }, function (response) {

                _this7.error = response.status + ' ' + response.statusText;
                _this7.loading = false;
            });
        },

        initializePlugins: function initializePlugins() {

            $("[data-toggle=tooltip]").tooltip();
        }

    }

});

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.error && !_vm.loading),
      expression: "!error && !loading"
    }],
    staticClass: "page-title"
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
      value: (!_vm.error && !_vm.loading),
      expression: "!error && !loading"
    }],
    staticClass: "col-md-offset-2 col-md-8",
    staticStyle: {
      "font-family": "'Proxima Nova'",
      "color": "#000"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_c('p', {
    staticStyle: {
      "margin-top": "30px"
    },
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" " + _vm._s(_vm.currentCorporationName) + " ")]), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.gatepass.length != 0) ? _c('span', {
    staticClass: "pull-right",
    staticStyle: {
      "border": "1px solid #000",
      "padding": "5px",
      "font-size": "15px",
      "text-transform": "uppercase",
      "color": "#000"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.gatepass.gate_pass_no) + "\n            ")]) : _vm._e(), _vm._v(" "), _c('h3', {
    staticClass: "title"
  }, [_vm._v("PICK LIST")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.pickList.pick_list_no))]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_vm._v("REFERENCE# : " + _vm._s(_vm.pickList.pick_list_ref_no) + " ")]), _vm._v(" "), _c('P', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_vm._v("DATE ISSUED : " + _vm._s(_vm.pickList.pick_list_date_issued))]), _vm._v(" "), _c('p', [_vm._v("Status : "), _c('span', {
    staticStyle: {
      "text-transform": "uppercase",
      "color": "#000",
      "text-style": "underline"
    }
  }, [_c('strong', [_vm._v("\n              " + _vm._s(_vm.pickList.pick_list_status))])])]), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.picklistItems), function(item) {
    return _c('tr', [_c('td', [_vm._v("\n                            " + _vm._s(item.item_name) + " "), _c('br'), _vm._v("\n                            " + _vm._s(item.item_desc) + "\n                        ")]), _vm._v(" "), _c('td', [_vm._v("\n                          " + _vm._s(item.item_sku) + "\n                        ")]), _vm._v(" "), (parseFloat(item.total_qty) < parseFloat(item.conversion_qty)) ? _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v("  0 " + _vm._s(item.purchase_unit_name) + " / " + _vm._s(item.total_qty) + " " + _vm._s(item.sales_unit) + " ")]) : _vm._e(), _vm._v(" "), (parseFloat(item.total_qty) >= parseFloat(item.conversion_qty)) ? _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v("  " + _vm._s(Math.floor(parseInt(item.total_qty) / parseInt(item.conversion_qty))) + "  " + _vm._s(item.purchase_unit_name) + " / " + _vm._s(item.total_qty % item.conversion_qty) + " " + _vm._s(item.sales_unit) + " ")]) : _vm._e(), _vm._v(" "), _c('td')])
  })), _vm._v(" "), _c('tfoot', [_c('div', {
    staticClass: "pull-left",
    staticStyle: {
      "margin-top": "55%"
    }
  }, [_vm._v("\n                        Notes : "), _c('br'), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "relative",
      "left": "95%",
      "margin-top": "95%"
    }
  }, [_vm._v("\n                        Checked by : "), _c('br'), _c('br'), _vm._v("\n                        _______________________________________"), _c('br'), _vm._v("\n                        Warehouse Personnel\n                    ")])])], 1)], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ITEMS & DESCRIPTION")]), _vm._v(" "), _c('th', [_vm._v("SKU")]), _vm._v(" "), _c('th', [_vm._v("QTY ORDERED")]), _vm._v(" "), _c('th', [_vm._v("AVAILABLE QTY")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c47c978", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(445),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\PickLists\\PrintPickList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrintPickList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c47c978", Component.options)
  } else {
    hotAPI.reload("data-v-5c47c978", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});