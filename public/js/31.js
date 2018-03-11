webpackJsonp([31],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(377),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Shipments\\AddShipment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddShipment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b7949d0", Component.options)
  } else {
    hotAPI.reload("data-v-2b7949d0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 377:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.orderNumber = this.$route.query.order_number;
        this.newShipment.ship_order_no = 'GP-' + this.$route.query.order_number;
        this.newShipment.gate_pass_id = this.$route.query.order_number;
        this.fetchCarriers();
    },


    data: function data() {
        return {

            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            orderNumber: null,
            carriers: [],
            loading: false,
            error: null,
            newShipment: {
                gate_pass_id: null,
                corp_id: null,
                carrier_id: null,
                ship_date: null,
                ship_order_no: null,
                ship_tracking_no: null,
                ship_shipping_charges: null,
                ship_notes: null
            }
        };
    },

    methods: {
        addNewShipment: function addNewShipment() {
            var _this = this;

            this.newShipment.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.formIsSubmitted = true;
            this.startLoadingPlease();
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/shipments/create', this.newShipment).then(function (response) {

                console.log(response.data);
                alert('Shipment has been created !');
                _this.$router.push({ path: '/gate-passes/' + _this.orderNumber });
                _this.stopLoadingPlease();
            }, function (response) {
                // error
                _this.error = response.statusText;
                _this.stopLoadingPlease();
            });

            this.formIsSubmitted = false;
        },
        fetchCarriers: function fetchCarriers() {
            var _this2 = this;

            this.startLoadingPlease();

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/carriers').then(function (response) {

                //setting all accounts from the server response
                _this2.$set(_this2, 'carriers', response.data);
                _this2.stopLoadingPlease();
            }, function (response) {
                // error
                _this2.error = response.statusText;
                _this2.stopLoadingPlease();
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
        }
    }

});

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        _vm.backToPreviousPage()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Back\n           ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("GP-" + _vm._s(_vm.orderNumber) + " > CREATE SHIPMENT")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.addNewShipment()
      }
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "striped"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Gate Pass #")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.gate_pass_id),
      expression: "newShipment.gate_pass_id"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "49%"
    },
    attrs: {
      "disabled": "disabled",
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
        _vm.newShipment.gate_pass_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    domProps: {
      "value": _vm.newShipment.gate_pass_id
    }
  }, [_vm._v(" GP-" + _vm._s(_vm.orderNumber) + " ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Shipment Order #")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.ship_order_no),
      expression: "newShipment.ship_order_no"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newShipment.ship_order_no)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newShipment.ship_order_no = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Ship Date")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.ship_date),
      expression: "newShipment.ship_date"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": (_vm.newShipment.ship_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newShipment.ship_date = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Carrier")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.carrier_id),
      expression: "newShipment.carrier_id"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "49%"
    },
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
        _vm.newShipment.carrier_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.carriers), function(carrier) {
    return _c('option', {
      domProps: {
        "value": carrier.carrier_id
      }
    }, [_vm._v("\n                            " + _vm._s(carrier.carrier_name) + " \n                             ")])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field "
  }, [_vm._v("Tracking#")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.ship_tracking_no),
      expression: "newShipment.ship_tracking_no"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newShipment.ship_tracking_no)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newShipment.ship_tracking_no = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Shipping Charges(if any)")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.ship_shipping_charges),
      expression: "newShipment.ship_shipping_charges"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newShipment.ship_shipping_charges)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newShipment.ship_shipping_charges = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Notes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newShipment.ship_notes),
      expression: "newShipment.ship_notes"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3"
    },
    domProps: {
      "value": (_vm.newShipment.ship_notes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newShipment.ship_notes = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "container-action-bottom"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted
    },
    on: {
      "click": function($event) {
        _vm.addNewShipment()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" SAVE ")]) : _vm._e()]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v(" Cancel")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-md-offset-2 col-md-5"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": ""
    }
  }), _vm._v("\n                              Shipment already delivered\n                          ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b7949d0", module.exports)
  }
}

/***/ })

});