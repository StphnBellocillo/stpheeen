webpackJsonp([47],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchInvoices();
        this.corpName = __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationName(this);
    },
    data: function data() {
        return {

            corpName: null,
            date_from: '',
            date_to: '',
            invoices: [],
            contacts: [],
            contact_company_name: null,

            formIsSubmitted: false,
            createText: '<i class="fa fa-spinner fa-spin"></i> CREATING...',
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            loading: false,
            error: false

        };
    },


    methods: {
        fetchInvoices: function fetchInvoices() {
            var _this = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/invoices/').then(function (response) {
                _this.$set(_this, 'invoices', response.data);
                _this.loading = false;
            });
        },
        fetchContacts: function fetchContacts() {
            var _this2 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/contacts').then(function (response) {
                console.log(response.statusText);
                _this2.$set(_this2, 'contacts', response.data);
            });
        },
        viewInvoice: function viewInvoice(invoiceId) {
            this.$router.push({ path: '/invoices/' + invoiceId });
        },
        exportToExcel: function exportToExcel() {
            window.open('/exports/reports/invoice-register?type=excel&corp_id=' + __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationId(this) + '&date_from=' + this.date_from + '&date_to=' + this.date_to + '&corp_name=' + __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationName(this), '_blank');
        },
        filterByDate: function filterByDate() {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/reports/generate/invoice-register?date_from=' + this.date_from + '&date_to=' + this.date_to + 'corp_id=' + __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationId(this)).then(function (response) {
                // console.log(response.statusText);
                _this3.$set(_this3, 'invoices', response.data);
                _this3.loading = false;
            });
        }
    }
});

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: " pull-right"
  }, [_c('div', {
    staticClass: "btn-toolbar"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#",
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "title": "Export to excel",
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.exportToExcel()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-file-excel-o"
  })])])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#modal-filter",
      "data-toggle": "modal",
      "data-placement": "bottom",
      "title": "Filter by date"
    }
  }, [_vm._v("\n            Filter by date\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Invoice Register Report")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('h3', [_vm._v("Invoices")]), _vm._v(" "), _c('p', [_vm._v(" Corporation : "), _c('strong', [_vm._v(" " + _vm._s(_vm.corpName) + " ")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" Fetching data... ")])]), _vm._v(" "), (_vm.invoices.length < 1) ? _c('p', [_vm._v(" No invoices found.")]) : _vm._e(), _vm._v(" "), _c('table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "table table-hover"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [(_vm.loading) ? _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "150"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-2x fa-fw"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.invoices), function(invoice) {
    return (_vm.invoices.length != 0) ? _c('tr', {
      staticStyle: {
        "cursor": "pointer"
      },
      on: {
        "click": function($event) {
          _vm.viewInvoice(invoice.inv_id)
        }
      }
    }, [_c('td', [_vm._v(" " + _vm._s(invoice.inv_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(invoice.inv_ref_no) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(invoice.inv_date) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(invoice.inv_total_amount, 'PHP', 2)) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(invoice.inv_balance_amount) + " ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(invoice.inv_status) + " ")])]) : _vm._e()
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-filter"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    attrs: {
      "action": "",
      "method": "POST",
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("From")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.date_from),
      expression: "date_from"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.date_from)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.date_from = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("To")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.date_to),
      expression: "date_to"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.date_to)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.date_to = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.filterByDate()
      }
    }
  }, [_vm._v("Filter")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.fetchInvoices()
      }
    }
  }, [_vm._v("Reset")])])]), _vm._v(" "), _vm._m(2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("SI # ")]), _vm._v(" "), _c('th', [_vm._v("REF#")]), _vm._v(" "), _c('th', [_vm._v("DATE")]), _vm._v(" "), _c('th', [_vm._v("TOTAL")]), _vm._v(" "), _c('th', [_vm._v("BALANCE")]), _vm._v(" "), _c('th', [_vm._v("STATUS")])])])
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
  }, [_vm._v("Filter By Date")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-242285da", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Reports\\InvoiceRegister.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InvoiceRegister.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-242285da", Component.options)
  } else {
    hotAPI.reload("data-v-242285da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});