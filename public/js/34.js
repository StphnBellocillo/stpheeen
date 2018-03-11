webpackJsonp([34],{

/***/ 374:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchUnits();
    },

    watch: {
        isUnitConvertable: function isUnitConvertable() {
            this.newItem.conversion_rate = null;
            this.newItem.conversion_unit = null;
        }
    },

    data: function data() {
        return {

            formIsSubmitted: false,
            isUnitConvertable: false,
            createText: '<i class="fa fa-spinner fa-spin"></i> CREATING...',
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            loading: false,
            error: false,
            edit: false,
            units: [],
            newUnit: {
                unit_name: null,
                unit_id: null
            },
            newUnitConversion: {
                conversion_rate: null,
                unit_id: null,
                conversion_unit: null
            }
        };
    },

    methods: {
        fetchUnits: function fetchUnits() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/units').then(function (response) {
                _this.$set(_this, 'units', response.data);
                _this.loading = false;
            });
        },
        saveUnit: function saveUnit(unitId) {
            if (this.edit) {
                return this.updateUnit(unitId);
            }
            return this.addUnit();
        },
        addUnit: function addUnit() {
            var _this2 = this;

            this.edit = false;
            this.formIsSubmitted = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/units/create', { unit: this.newUnit, conversion: this.newUnitConversion }).then(function (response) {

                alert('unit has been added !');
                console.log(response);
                _this2.clearInputs();
                _this2.loading = false;
                _this2.formIsSubmitted = false;
                _this2.fetchUnits();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        showUnit: function showUnit(unitId) {
            var _this3 = this;

            this.edit = true;
            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/units/' + unitId).then(function (response) {
                _this3.newUnit.unit_id = response.data[0].unit_id;
                _this3.newUnit.unit_name = response.data[0].unit_name;
                _this3.newUnitConversion.conversion_rate = response.data[0].conversion_rate;

                _this3.newUnitConversion.conversion_unit = response.data[0].conversion_unit;

                _this3.loading = false;
                _this3.error = false;
            }, function (response) {
                this.error = response.statusText;
            });

            this.openModal();
        },
        updateUnit: function updateUnit(unitId) {
            var _this4 = this;

            this.formIsSubmitted = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/units/' + unitId, { unit: this.newUnit, conversion: this.newUnitConversion }).then(function (response) {

                console.log(response.data);
                alert('unit has been updated !');
                _this4.formIsSubmitted = false;
                _this4.edit = false;
                _this4.clearInputs();
                _this4.closeModal();
                _this4.fetchUnits();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });

            this.loading = false;
        },
        deleteUnit: function deleteUnit(unitId) {
            var _this5 = this;

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/units/' + unitId + '/delete').then(function (response) {

                alert("unit has been deleted !");
                _this5.loading = false;
                _this5.error = false;
                _this5.fetchDiscounts();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        clearInputs: function clearInputs() {
            this.newUnit = {};
            this.edit = false;
            this.formIsSubmitted = false;
            this.error = null;
        },
        openModal: function openModal() {
            $('#modal-new-unit').modal({ 'backdrop': false });
        },
        closeModal: function closeModal() {
            $('#modal-new-unit').modal({ 'display': 'none', 'backdrop': false });
        }
    }

});

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('h3', {
    staticClass: "settings-page-title"
  }, [_vm._v("Units")]), _c('hr'), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), (!_vm.loading) ? _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l((_vm.units), function(unit) {
    return _c('tr', [_c('td', [_vm._v(" " + _vm._s(unit.unit_name) + " ")]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-group"
    }, [_vm._m(3, true), _vm._v(" "), _c('ul', {
      staticClass: "dropdown-menu",
      staticStyle: {
        "font-family": "Proxima Nova Regular !important"
      }
    }, [_c('li', [_c('a', {
      staticClass: "dropdown-item",
      attrs: {
        "data-toggle": "modal"
      },
      on: {
        "click": function($event) {
          _vm.showUnit(unit.unit_id)
        }
      }
    }, [_vm._v("Edit")])]), _vm._v(" "), _c('li', [_c('a', {
      staticClass: "dropdown-item",
      attrs: {
        "data-toggle": "modal"
      },
      on: {
        "click": function($event) {
          _vm.deleteUnit(unit.unit_id)
        }
      }
    }, [_vm._v("Delete")])])])])])])
  }))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-new-unit"
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
  }, [_vm._v("×")]), _vm._v(" "), (!_vm.edit) ? _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("New unit")]) : _vm._e(), _vm._v(" "), (_vm.edit) ? _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Edit unit ")]) : _vm._e(), _vm._v(" "), (_vm.loading) ? _c('div', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" Loading data...")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.saveUnit(_vm.newUnit.unit_id)
      }
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label required-field"
  }, [_vm._v("Unit Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newUnit.unit_name),
      expression: "newUnit.unit_name"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newUnit.unit_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newUnit.unit_name = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [(!_vm.edit) ? _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addUnit()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.createText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" CREATE ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.edit) ? _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.updateUnit(_vm.newUnit.unit_id)
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" SAVE ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    },
    on: {
      "click": function($event) {
        _vm.clearInputs()
      }
    }
  }, [_vm._v("Close")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "type": "button",
      "data-toggle": "modal",
      "href": "#modal-new-unit"
    }
  }, [_vm._v("ADD NEW")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("LIST OF Units")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("UNIT NAME")]), _vm._v(" "), _c('th')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-primary ",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_c('i', {
    staticClass: "fa fa-bars"
  }), _vm._v(" "), _c('span', {
    staticClass: "caret"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bb9e9c0", module.exports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(374),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\Units.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Units.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bb9e9c0", Component.options)
  } else {
    hotAPI.reload("data-v-2bb9e9c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});