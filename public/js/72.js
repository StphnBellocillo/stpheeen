webpackJsonp([72],{

/***/ 304:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.contact_id = this.$route.params.id;

        this.fetchResourceData(this.contact_id);
        this.fetchSalesOrders(this.contact_id);
        this.fetchPayments(this.contact_id);
        this.fetchInvoices(this.contact_id);
        this.fetchDiscounts();
        this.fetchContactDiscounts(this.contact_id);
    },


    data: function data() {
        return {
            showDiscountsLoader: true,
            discounts: [],
            givenDiscounts: [],
            newDiscounts: {
                discount_id: [],
                discount_percentage: []
            },
            contact_id: null,
            contact: [],
            purchases: [],
            salesOrders: [],
            invoices: [],
            payments: [],
            error: null,
            loading: false
        };
    },

    methods: {
        removeDiscount: function removeDiscount(contactDiscountId) {
            var _this = this;

            if (!confirm("Are you sure you want to remove this discount ?")) {
                return false;
            }

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + this.contact_id + '/remove-discount?contact_discount_id=' + contactDiscountId).then(function (response) {

                alert("Discounts has been removed !");
                console.log(response);
                _this.fetchContactDiscounts();
            });
        },
        addDiscounts: function addDiscounts() {
            var _this2 = this;

            this.showDiscountsLoader = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + this.contact_id + '/discounts', { contact_id: this.contact_id, discounts: this.newDiscounts }).then(function (response) {

                alert("Discounts has been added !");

                console.log(response);

                _this2.showDiscountsLoader = false;
                _this2.fetchContactDiscounts();
            }, function (response) {

                // error
                _this2.error = response.status;
                _this2.showDiscountsLoader = false;
            });
        },
        editContact: function editContact() {

            this.$router.push({ path: '/contacts/' + this.contact_id + '/edit' });
        },
        fetchSalesOrders: function fetchSalesOrders(contactId) {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + contactId + '/transactions/sales-orders').then(function (response) {

                _this3.$set(_this3, 'salesOrders', response.data);

                console.log(response);

                _this3.loading = false;
            }, function (response) {

                // error
                _this3.error = response.status;
                _this3.loading = false;
            });
        },
        fetchDiscounts: function fetchDiscounts() {
            var _this4 = this;

            this.showDiscountsLoader = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/discounts').then(function (response) {

                _this4.$set(_this4, 'discounts', response.data);

                console.log(response);

                _this4.showDiscountsLoader = false;
            }, function (response) {

                // error
                _this4.error = response.status;
                _this4.showDiscountsLoader = false;
            });
        },
        fetchContactDiscounts: function fetchContactDiscounts(contactId) {
            var _this5 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + contactId + '/discounts').then(function (response) {

                _this5.$set(_this5, 'givenDiscounts', response.data);

                console.log(response);

                _this5.loading = false;
            }, function (response) {

                // error
                _this5.error = response.status;
                _this5.loading = false;
            });
        },
        fetchPayments: function fetchPayments(contactId) {
            var _this6 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + contactId + '/transactions/invoices/payments').then(function (response) {

                _this6.$set(_this6, 'payments', response.data);

                console.log(response);

                _this6.loading = false;
            }, function (response) {

                // error
                _this6.error = response.status;
                _this6.loading = false;
            });
        },
        fetchInvoices: function fetchInvoices(contactId) {
            var _this7 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + contactId + '/transactions/invoices').then(function (response) {

                _this7.$set(_this7, 'invoices', response.data);

                console.log(response);

                _this7.loading = false;
            }, function (response) {

                // error
                _this7.error = response.status;
                _this7.loading = false;
            });
        },
        fetchResourceData: function fetchResourceData(contactId) {
            var _this8 = this;

            this.loading = true;
            console.log("Contact id" + contactId);
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/' + contactId).then(function (response) {

                _this8.$set(_this8, 'contact', response.data[0]);

                console.log(response.data);

                _this8.loading = false;
            }, function (response) {

                // error
                _this8.error = response.status;
                _this8.loading = false;
            });
        }
    }

});

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(304),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Contacts\\ViewContact.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ViewContact.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-271188dc", Component.options)
  } else {
    hotAPI.reload("data-v-271188dc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    staticStyle: {
      "font-family": "Proxima Nova Regular !important"
    }
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": {
        path: '/sales-orders/new',
        query: {
          contact_id: _vm.contact_id
        }
      }
    }
  }, [_vm._v("Sales Order")])], 1), _vm._v(" "), _c('li', {
    staticClass: "divider"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_vm._m(1), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    staticStyle: {
      "font-family": "Proxima Nova Regular !important"
    }
  }, [_c('li', [_c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.editContact()
      }
    }
  }, [_vm._v("Edit Contact")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.contact.contact_company_name)), _c('br')])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n    " + _vm._s(_vm.error) + "\n")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("Address Information")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v(" City  ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_city) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" Street ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_street) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" Country ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_country) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" Zip Code ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_zip) + " ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("Company Information")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v(" TIN #  ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_tin_no) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" Payment Terms ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_payment_terms) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" District ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_district) + " ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(" Classification ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm.contact.contact_classification) + " ")])])])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "box-tab m-b-0"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "transactions"
    }
  }, [(_vm.contact.contact_type_id == 2) ? _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n                  Invoices\n              \n          ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(5), _vm._v(" "), _c('tbody', [(_vm.loading) ? _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "150"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.invoices), function(transaction) {
    return (_vm.invoices.length != 0) ? _c('tr', [_c('td', [_vm._v(" INV-" + _vm._s(transaction.inv_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.inv_ref_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.inv_date) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(transaction.inv_total_amount, '', 2)) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.inv_status) + " ")])]) : _vm._e()
  })], 2)])])]) : _vm._e(), _vm._v(" "), (_vm.contact.contact_type_id == 2) ? _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n          Invoice Payments\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(6), _vm._v(" "), _c('tbody', [(_vm.loading) ? _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "150"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.payments), function(transaction) {
    return (_vm.payments.length != 0) ? _c('tr', [_c('td', [_vm._v(" " + _vm._s(transaction.payment_id) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.payment_ref_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.payment_mode) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(transaction.payment_amount, '', 2)) + " ")])]) : _vm._e()
  })], 2)])])]) : _vm._e(), _vm._v(" "), (_vm.contact.contact_type_id == 2) ? _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n      Sales Orders\n  \n    ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(7), _vm._v(" "), _c('tbody', [(_vm.loading) ? _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "150"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.salesOrders), function(transaction) {
    return (_vm.salesOrders.length != 0) ? _c('tr', [_c('td', [_vm._v(" SO-" + _vm._s(transaction.so_id) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_ref_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_order_date) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(transaction.so_total_amount, '', 2)) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_status) + " ")])]) : _vm._e()
  })], 2)])])]) : _vm._e(), _vm._v(" "), (_vm.contact.contact_type_id == 2) ? _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n      Return Materials\n  \n    ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(8), _vm._v(" "), _c('tbody', [(_vm.loading) ? _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "150"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.salesOrders), function(transaction) {
    return (_vm.salesOrders.length != 0) ? _c('tr', [_c('td', [_vm._v(" SO-" + _vm._s(transaction.so_id) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_ref_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_order_date) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_total_amount) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(transaction.so_status) + " ")])]) : _vm._e()
  })], 2)])])]) : _vm._e()])])])]), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("Discounts List")]), _c('hr'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDiscountsLoader),
      expression: "showDiscountsLoader"
    }],
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "list-group"
  }, _vm._l((_vm.givenDiscounts), function(discount, index) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('div', {
      staticClass: "pull-right"
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.removeDiscount(discount.contact_discount_id)
        }
      }
    }, [_vm._v("Remove")])]), _vm._v("\n                                " + _vm._s(discount.discount_name) + "  -  " + _vm._s(Number(discount.discount_percentage).toFixed(0)) + "%")])
  })), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(10)])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-add-discount"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('p', [_vm._v("Discounts List")]), _vm._v(" "), _c('ul', _vm._l((_vm.discounts), function(discount, index) {
    return _c('li', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.newDiscounts.discount_id),
        expression: "newDiscounts.discount_id"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": discount.discount_id,
        "checked": Array.isArray(_vm.newDiscounts.discount_id) ? _vm._i(_vm.newDiscounts.discount_id, discount.discount_id) > -1 : (_vm.newDiscounts.discount_id)
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.newDiscounts.discount_id,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = discount.discount_id,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.newDiscounts.discount_id = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.newDiscounts.discount_id = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.newDiscounts.discount_id = $$c
          }
        }
      }
    }), _vm._v(" \n                                    " + _vm._s(discount.discount_name) + "\n                                    "), _c('div', {
      staticClass: "input-group"
    }, [_c('span', {
      staticClass: "input-group-addon"
    }, [_vm._v("%")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.newDiscounts.discount_percentage[index]),
        expression: "newDiscounts.discount_percentage[index]"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number"
      },
      domProps: {
        "value": (_vm.newDiscounts.discount_percentage[index])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          var $$exp = _vm.newDiscounts.discount_percentage,
            $$idx = index;
          if (!Array.isArray($$exp)) {
            _vm.newDiscounts.discount_percentage[index] = $event.target.value
          } else {
            $$exp.splice($$idx, 1, $event.target.value)
          }
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addDiscounts()
      }
    }
  }, [_vm._v("SAVE ")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                        NEW TRANSACTION "), _c('span', {
    staticClass: "caret"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-default btn-outline ",
    attrs: {
      "data-toggle": "dropdown"
    }
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-3"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "http://www.marinediscoverycenter.org/wp-content/uploads/2017/06/placeholder.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#transactions",
      "data-toggle": "tab"
    }
  }, [_vm._v("Transactions")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "defaults"
    }
  }, [_c('h3', [_vm._v("Transaction Defaults")]), _vm._v(" "), _c('p', [_vm._v(" Payment Terms : Due on Receipt ")]), _vm._v(" "), _c('p', [_vm._v("Discounts")]), _c('hr'), _vm._v(" "), _c('ul', [_c('li', [_vm._v(" PHP500 on Sales Order ")]), _vm._v(" "), _c('li', [_vm._v(" PHP900 on Purchase Orders ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("inv_no")]), _vm._v(" "), _c('th', [_vm._v("Reference#")]), _vm._v(" "), _c('th', [_vm._v("Date")]), _vm._v(" "), _c('th', [_vm._v("Amount")]), _vm._v(" "), _c('th', [_vm._v("Status")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Payment # ")]), _vm._v(" "), _c('th', [_vm._v("Reference#")]), _vm._v(" "), _c('th', [_vm._v("Payment Mode")]), _vm._v(" "), _c('th', [_vm._v("Amount")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Sales Order# ")]), _vm._v(" "), _c('th', [_vm._v("Reference#")]), _vm._v(" "), _c('th', [_vm._v("Date")]), _vm._v(" "), _c('th', [_vm._v("Amount")]), _vm._v(" "), _c('th', [_vm._v("Status")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Sales Order# ")]), _vm._v(" "), _c('th', [_vm._v("Reference#")]), _vm._v(" "), _c('th', [_vm._v("Date")]), _vm._v(" "), _c('th', [_vm._v("Amount")]), _vm._v(" "), _c('th', [_vm._v("Status")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("TRANSACTION DEFAULTS")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "data-toggle": "modal",
      "href": "#modal-add-discount"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  }), _vm._v(" Add Discounts")])
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
  }, [_vm._v("Add Privilege Discount")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-271188dc", module.exports)
  }
}

/***/ })

});