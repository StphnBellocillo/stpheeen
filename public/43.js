webpackJsonp([43],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchCurrencies();
    },


    data: function data() {
        return {

            formIsSubmitted: false,
            createText: '<i class="fa fa-spinner fa-spin"></i> CREATING...',
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            loading: false,
            error: false,
            edit: false,
            currencies: [],
            newCurrency: {
                currncy_code: null,
                currncy_symbol: null,
                currncy_decimal_places: null
            }
        };
    },

    methods: {

        fetchCurrencies: function fetchCurrencies() {
            var _this = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/currencies').then(function (response) {
                _this.$set(_this, 'currencies', response.data);
            });
        },

        saveCurrency: function saveCurrency(currencyId) {
            if (this.edit) {
                return this.updateCurrency(currencyId);
            }
            return this.addCurrency();
        },
        addCurrency: function addCurrency() {
            var _this2 = this;

            this.edit = false;
            this.formIsSubmitted = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/currencies/create', this.newCurrency).then(function (response) {

                alert('Currency has been added !');
                console.log(response);
                _this2.clearInputs();
                _this2.loading = false;
                _this2.formIsSubmitted = false;
                _this2.fetchCurrencies();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        showCurrency: function showCurrency(currencyId) {
            var _this3 = this;

            this.edit = true;
            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/currencies/' + currencyId).then(function (response) {
                _this3.newCurrency = response.data;
                _this3.loading = false;
                _this3.error = false;
            }, function (response) {
                this.error = response.statusText;
            });

            this.openModal();
        },
        updateCurrency: function updateCurrency(currencyId) {
            var _this4 = this;

            this.formIsSubmitted = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/currencies/' + currencyId, this.newCurrency).then(function (response) {

                console.log(response.data);
                alert('tax has been updated !');
                _this4.formIsSubmitted = false;
                _this4.edit = false;
                _this4.clearInputs();
                _this4.closeModal();
                _this4.fetchCurrencies();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });

            this.loading = false;
        },
        deleteCurrency: function deleteCurrency(currencyId) {
            var _this5 = this;

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/currencies/' + currencyId + '/delete').then(function (response) {

                alert("Currency has been deleted !");
                _this5.loading = false;
                _this5.error = false;
                _this5.fetchCurrencies();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        clearInputs: function clearInputs() {
            this.newCurrency = {};
            this.edit = false;
            this.formIsSubmitted = false;
            this.error = null;
        },
        openModal: function openModal() {
            $('#modal-new-currency').modal({ 'backdrop': false });
        },
        closeModal: function closeModal() {
            $('#modal-new-currency').modal({ 'display': 'none', 'backdrop': false });
        }
    }

});

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-page-title" }, [_vm._v("Currencies")]),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _vm._v("\n                Currency List\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.currencies, function(currency) {
                return _c("tr", [
                  _c("td", [_vm._v(" " + _vm._s(currency.currncy_code))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(currency.currncy_symbol) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(currency.currncy_decimal_places) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", { staticClass: "btn-group" }, [
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "dropdown-menu",
                          staticStyle: {
                            "font-family": "Proxima Nova Regular !important"
                          }
                        },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { "data-toggle": "modal" },
                                on: {
                                  click: function($event) {
                                    _vm.showCurrency(currency.currncy_id)
                                  }
                                }
                              },
                              [_vm._v("Edit")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { "data-toggle": "modal" },
                                on: {
                                  click: function($event) {
                                    _vm.deleteCurrency(currency.currncy_id)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              })
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-new-currency" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
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
                  attrs: { role: "form" },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key)
                      ) {
                        return null
                      }
                      _vm.saveCurrency(_vm.newCurrency.currncy_id)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-content" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-3 control-label required-field"
                        },
                        [_vm._v("Currency Code")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newCurrency.currncy_code,
                              expression: "newCurrency.currncy_code"
                            }
                          ],
                          staticClass: "form-control m-b",
                          attrs: { type: "text" },
                          domProps: { value: _vm.newCurrency.currncy_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newCurrency,
                                "currncy_code",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-3 control-label required-field"
                        },
                        [_vm._v("Currency Symbol")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newCurrency.currncy_symbol,
                              expression: "newCurrency.currncy_symbol"
                            }
                          ],
                          staticClass: "form-control m-b",
                          attrs: { type: "text" },
                          domProps: { value: _vm.newCurrency.currncy_symbol },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newCurrency,
                                "currncy_symbol",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "col-md-3 control-label" }, [
                        _vm._v("Decimal Places")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newCurrency.currncy_decimal_places,
                                expression: "newCurrency.currncy_decimal_places"
                              }
                            ],
                            staticClass: "form-control m-b",
                            attrs: { required: "required" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.newCurrency,
                                  "currncy_decimal_places",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("0")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("2")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("3")
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              !_vm.edit
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-outline",
                      attrs: { disabled: _vm.formIsSubmitted, type: "button" },
                      on: {
                        click: function($event) {
                          _vm.addCurrency()
                        }
                      }
                    },
                    [
                      _vm.formIsSubmitted
                        ? _c("span", {
                            domProps: { innerHTML: _vm._s(_vm.createText) }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.formIsSubmitted
                        ? _c("span", [_vm._v(" CREATE ")])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.edit
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-outline",
                      attrs: { disabled: _vm.formIsSubmitted, type: "button" },
                      on: {
                        click: function($event) {
                          _vm.updateCurrency(_vm.newCurrency.currncy_id)
                        }
                      }
                    },
                    [
                      _vm.formIsSubmitted
                        ? _c("span", {
                            domProps: { innerHTML: _vm._s(_vm.saveText) }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.formIsSubmitted
                        ? _c("span", [_vm._v(" SAVE ")])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button", "data-dismiss": "modal" },
                  on: {
                    click: function($event) {
                      _vm.clearInputs()
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-toolbar pull-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-outline",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            href: "#modal-new-currency"
          }
        },
        [_vm._v("ADD NEW")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("SYMBOL")]),
        _vm._v(" "),
        _c("th", [_vm._v("EXCHANGE RATE")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary ",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [
        _c("i", { staticClass: "fa fa-bars" }),
        _vm._v(" "),
        _c("span", { staticClass: "caret" })
      ]
    )
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("New Currency")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0732b341", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(489)
/* template */
var __vue_template__ = __webpack_require__(490)
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\Currencies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0732b341", Component.options)
  } else {
    hotAPI.reload("data-v-0732b341", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});