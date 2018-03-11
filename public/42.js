webpackJsonp([42],{

/***/ 491:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.fetchDiscounts();
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
            discounts: [],
            newDiscount: {
                discount_id: null,
                discount_name: null,
                discount_desc: null
            }
        };
    },

    methods: {
        fetchDiscounts: function fetchDiscounts() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/discounts').then(function (response) {
                _this.$set(_this, 'discounts', response.data);
                _this.loading = false;
            });
        },
        saveDiscount: function saveDiscount(discountId) {
            if (this.edit) {
                return this.updateDiscount(discountId);
            }
            return this.addDiscount();
        },
        addDiscount: function addDiscount() {
            var _this2 = this;

            this.edit = false;
            this.formIsSubmitted = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/discounts/create', this.newDiscount).then(function (response) {

                alert('discount has been added !');
                console.log(response);
                _this2.clearInputs();
                _this2.loading = false;
                _this2.formIsSubmitted = false;
                _this2.fetchDiscounts();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        showDiscount: function showDiscount(discountId) {
            var _this3 = this;

            this.edit = true;
            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/discounts/' + discountId).then(function (response) {
                _this3.newDiscount = response.data;
                _this3.loading = false;
                _this3.error = false;
            }, function (response) {
                this.error = response.statusText;
            });

            this.openModal();
        },
        updateDiscount: function updateDiscount(discountId) {
            var _this4 = this;

            this.formIsSubmitted = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/discounts/' + discountId, this.newDiscount).then(function (response) {

                console.log(response.data);
                alert('discount has been updated !');
                _this4.formIsSubmitted = false;
                _this4.edit = false;
                _this4.clearInputs();
                _this4.closeModal();
                _this4.fetchDiscounts();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });

            this.loading = false;
        },
        deleteDiscount: function deleteDiscount(discountId) {
            var _this5 = this;

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/discounts/' + discountId + '/delete').then(function (response) {

                alert("discount has been deleted !");
                _this5.loading = false;
                _this5.error = false;
                _this5.fetchDiscounts();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        clearInputs: function clearInputs() {
            this.newDiscount = {};
            this.edit = false;
            this.formIsSubmitted = false;
            this.error = null;
        },
        openModal: function openModal() {
            $('#modal-new-discount').modal({ 'backdrop': false });
        },
        closeModal: function closeModal() {
            $('#modal-new-tax').modal({ 'display': 'none', 'backdrop': false });
        }
    }

});

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-page-title" }, [_vm._v("Discounts")]),
    _c("hr"),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading"
          }
        ],
        staticStyle: { "margin-top": "14rem" },
        attrs: { align: "center" }
      },
      [
        _c("i", { staticClass: "fa fa-spinner fa-spin fa-3x fa-fw" }),
        _vm._v(" "),
        _c(
          "p",
          {
            staticStyle: {
              "font-size": "13px",
              "font-family": "Proxima Nova Regular",
              "margin-top": "5px"
            }
          },
          [_vm._v(" Preparing data... ")]
        )
      ]
    ),
    _vm._v(" "),
    !_vm.loading
      ? _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "panel panel-default" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.discounts, function(discount) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(" " + _vm._s(discount.discount_name) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(" " + _vm._s(discount.discount_desc) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "btn-group" }, [
                          _vm._m(3, true),
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
                                        _vm.showDiscount(discount.discount_id)
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
                                        _vm.deleteDiscount(discount.discount_id)
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
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "modal-new-discount" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
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
              !_vm.edit
                ? _c("h4", { staticClass: "modal-title" }, [
                    _vm._v("New discount")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.edit
                ? _c("h4", { staticClass: "modal-title" }, [
                    _vm._v("Edit discount ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c("div", { attrs: { align: "center" } }, [
                    _vm._v(" Loading data...")
                  ])
                : _vm._e()
            ]),
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
                      _vm.saveDiscount(_vm.newDiscount.discount_id)
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
                        [_vm._v("Discount Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newDiscount.discount_name,
                              expression: "newDiscount.discount_name"
                            }
                          ],
                          staticClass: "form-control m-b",
                          attrs: { type: "text" },
                          domProps: { value: _vm.newDiscount.discount_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newDiscount,
                                "discount_name",
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
                        [_vm._v("Description")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newDiscount.discount_desc,
                              expression: "newDiscount.discount_desc"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { rows: "3", required: "required" },
                          domProps: { value: _vm.newDiscount.discount_desc },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.newDiscount,
                                "discount_desc",
                                $event.target.value
                              )
                            }
                          }
                        })
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
                          _vm.addDiscount()
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
                          _vm.updateDiscount(_vm.newDiscount.discount_id)
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
            href: "#modal-new-discount"
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
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [
        _vm._v("LIST OF APPLICABLE DISCOUNTS")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("DISCOUNT NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("DESCRIPTION")]),
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b2d8420", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(491)
/* template */
var __vue_template__ = __webpack_require__(492)
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\Discounts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b2d8420", Component.options)
  } else {
    hotAPI.reload("data-v-4b2d8420", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});