webpackJsonp([21],{

/***/ 320:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.invoiceId = this.$route.params.id;
        this.fetchResourceData(this.invoiceId);
        this.fetchPayments();
    },


    watch: {
        isReadyToPrint: function isReadyToPrint() {
            window.print();
        }
    },

    data: function data() {
        return {

            isReadyToPrint: false,
            invoiceItems: [],
            invoice: {},
            error: null,
            loading: false,
            payments: []
        };
    },

    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.invoiceItems.forEach(function (item) {
                return total += item.inv_item_qty * item.inv_item_rate;
            });
            return Number(total).toFixed(2);
        },
        totalPayments: function totalPayments() {
            var payments = 0;

            this.payments.forEach(function (payment) {
                return payments += parseFloat(payment.payment_amount);
            });
            console.log("total payments : " + payments);
            return Number(payments).toFixed(2);
        },
        taxAmountWitheld: function taxAmountWitheld() {
            var amount = 0;
            this.payments.forEach(function (payment) {
                return amount += parseFloat(payment.tax_amount_witheld);
            });
            console.log("tax : " + amount);
            this.isReadyToPrint = true;
            return Number(amount).toFixed(2);
        }
    },

    methods: {
        printInvoice: function printInvoice() {
            this.$router.push({ path: '/invoices/' + this.invoiceId + '/print' });
        },
        fetchResourceData: function fetchResourceData(invoiceId) {
            var _this = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + invoiceId).then(function (response) {

                console.log(response.data);

                _this.$set(_this, 'invoiceItems', response.data.items);
                _this.$set(_this, 'invoice', response.data.invoice);

                console.log(response);

                _this.loading = false;
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        },
        fetchPayments: function fetchPayments() {
            var _this2 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/' + this.invoiceId + '/payments').then(function (response) {

                _this2.$set(_this2, 'payments', response.data);
            });
        }
    }

});

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\ntable#inv-items tbody tr td {\n    border :0px !important;\n    padding:0px !important;\n}\n", ""]);

/***/ }),

/***/ 432:
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
  }), _vm._v(" "), _c('div', {
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
    staticClass: "col-md-offset-2 col-md-8",
    staticStyle: {
      "z-index": "99",
      "position": "relative"
    }
  }, [_c('div', {}, [_c('p', {
    staticStyle: {
      "position": "absolute",
      "margin-left": "470px",
      "margin-top": "-65px"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.invoice.inv_no) + " ")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "position": "absolute",
      "margin-left": "500px",
      "margin-top": "-45px"
    }
  }, [_vm._v(_vm._s(_vm.invoice.inv_date))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "position": "absolute",
      "margin-left": "510px",
      "margin-top": "770px"
    }
  }, [_vm._v(_vm._s(_vm._f("currency")(_vm.invoice.inv_total_amount, '', 2)))]), _vm._v(" "), _c('span', {
    staticClass: "pull-left"
  }, [_c('br'), _vm._v(" "), (!_vm.loading) ? _c('p', {
    staticStyle: {
      "text-transform": "uppercase",
      "position": "relative",
      "top": "55",
      "bottom": "20px"
    }
  }, [_c('strong', [_vm._v("\n                    " + _vm._s(_vm.invoiceItems[0].contact_company_name))])]) : _vm._e(), _c('br'), _c('br'), _vm._v(" "), (!_vm.loading) ? _c('p', {
    staticStyle: {
      "text-transform": "uppercase",
      "position": "relative",
      "bottom": "50px"
    }
  }, [_c('strong', [_vm._v("\n                    " + _vm._s(_vm.invoiceItems[0].contact_street) + ", " + _vm._s(_vm.invoiceItems[0].contact_brgy) + ", " + _vm._s(_vm.invoiceItems[0].contact_city) + " ")])]) : _vm._e()]), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "pull-right",
    staticStyle: {
      "font-size": "10px !important"
    }
  }, [(!_vm.loading) ? _c('p', {
    staticStyle: {
      "text-transform": "uppercase",
      "position": "relative",
      "bottom": "35px",
      "right": "280px"
    }
  }, [_c('strong', [_vm._v("\n                   " + _vm._s(_vm.invoice.inv_payment_terms))])]) : _vm._e(), _vm._v(" "), (!_vm.loading) ? _c('p', {
    staticStyle: {
      "text-transform": "uppercase",
      "position": "relative",
      "bottom": "40px",
      "right": "280px"
    }
  }, [_c('strong', [_vm._v("\n                        " + _vm._s(_vm.invoiceItems[0].display_name) + " ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "pull-right"
  }, [_c('p', {
    staticStyle: {
      "font-size": "12px !important",
      "position": "relative",
      "top": "37px",
      "right": "60px"
    }
  }, [_vm._v(" " + _vm._s(_vm.invoiceItems[0].contact_tin_no) + " \n                     ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive",
    staticStyle: {
      "position": "absolute",
      "margin-top": "65px",
      "background": "transparent",
      "text-transform": "uppercase",
      "font-size": "10px !important",
      "width": "380px"
    },
    attrs: {
      "id": "inv-items"
    }
  }, [_c('thead'), _vm._v(" "), _c('tbody', [_c('br'), _c('br'), _vm._v(" "), _vm._l((_vm.invoiceItems), function(item) {
    return _c('tr', {
      staticStyle: {
        "font-size": "10px !important"
      }
    }, [_c('td', [_vm._v("\n                              [ " + _vm._s(item.item_sku) + " ]   " + _vm._s(item.item_name) + "\n                            ")]), _vm._v(" "), (parseFloat(item.inv_item_qty) < parseFloat(item.conversion_qty)) ? _c('td', {
      staticStyle: {
        "position": "absolute !important",
        "margin-left": "20px !important"
      }
    }, [_vm._v(" 0 ")]) : _vm._e(), _vm._v(" "), (parseFloat(item.inv_item_qty) < parseFloat(item.conversion_qty)) ? _c('td', {
      staticStyle: {
        "position": "absolute !important",
        "margin-left": "100px !important"
      }
    }, [_vm._v(_vm._s(item.inv_item_qty) + " ")]) : _vm._e(), _vm._v(" "), (parseFloat(item.inv_item_qty) >= parseFloat(item.conversion_qty)) ? _c('td', {
      staticStyle: {
        "position": "absolute !important",
        "margin-left": "20px !important"
      }
    }, [_vm._v(" " + _vm._s(Math.floor(parseInt(item.inv_item_qty) / parseInt(item.conversion_qty))) + "  ")]) : _vm._e(), _vm._v(" "), (parseFloat(item.inv_item_qty) >= parseFloat(item.conversion_qty)) ? _c('td', {
      staticStyle: {
        "position": "absolute !important",
        "margin-left": "100px !important"
      }
    }, [_vm._v(_vm._s(item.inv_item_qty % item.conversion_qty) + "  ")]) : _vm._e(), _vm._v(" "), _c('td', {
      staticStyle: {
        "margin-left": "135px !important",
        "position": "absolute",
        "text-align": "right",
        "width": "10%"
      }
    }, [_vm._v("\n                                " + _vm._s(_vm._f("currency")(item.inv_item_rate * item.conversion_qty, '', 2)) + "\n                            ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "margin-left": "190px !important",
        "position": "absolute",
        "text-align": "right !important",
        "width": "20%"
      }
    }, [_vm._v(" " + _vm._s(_vm._f("currency")(item.inv_item_rate * item.inv_item_qty, '', 2)) + " ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("SUBTOTAL")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "margin-left": "130px !important",
      "position": "absolute"
    }
  }, [_vm._v("  " + _vm._s(_vm._f("currency")(_vm.subTotal, '', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(" S.D " + _vm._s(_vm.invoice.inv_discount_percentage == _vm.NULL ? 0 : _vm.invoice.inv_discount_percentage) + "% ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "margin-left": "130px !important",
      "position": "absolute"
    }
  }, [_vm._v(" " + _vm._s(_vm._f("currency")(_vm.invoice.inv_discounted_amount, '', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("VAT")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "margin-left": "130px !important",
      "position": "absolute"
    }
  }, [_vm._v("  " + _vm._s(_vm._f("currency")(_vm.invoice.inv_total_amount * 0.10714285714, '', 2)) + " ")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', {
    staticStyle: {
      "margin-left": "130px !important",
      "position": "absolute"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm._f("currency")(_vm.invoice.inv_total_amount, '', 2)) + " ")])])])], 2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v("Total")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e54273c", module.exports)
  }
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("028e1193", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e54273c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintInvoice.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e54273c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintInvoice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(489)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Invoices\\PrintInvoice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrintInvoice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e54273c", Component.options)
  } else {
    hotAPI.reload("data-v-3e54273c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});