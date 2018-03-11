webpackJsonp([34],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchWarehouses();
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
            warehouses: [],
            newWarehouse: {
                whouse_id: '',
                corp_id: 1,
                whouse_name: '',
                whouse_tel_num: '',
                whouse_city: '',
                country: '',
                phone: '',
                whouse_zip: '',
                whouse_street: ''
            }
        };
    },

    methods: {

        fetchWarehouses: function fetchWarehouses() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses').then(function (response) {
                console.log(response.statusText);
                _this.$set(_this, 'warehouses', response.data);
                _this.loading = false;
            });
        },
        saveWarehouse: function saveWarehouse(warehouseId) {
            if (this.edit) {
                return this.updateWarehouse(warehouseId);
            }
            return this.addWarehouse();
        },
        addWarehouse: function addWarehouse() {
            var _this2 = this;

            this.newWarehouse.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.edit = false;
            this.formIsSubmitted = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses/create', this.newWarehouse).then(function (response) {

                alert('warehouse has been added !');
                console.log(response);
                _this2.clearInputs();
                _this2.loading = false;
                _this2.formIsSubmitted = false;
                _this2.fetchWarehouses();
            }, function (response) {

                this.error = response.data.statusText;
            });
        },
        showWarehouse: function showWarehouse(warehouseId) {
            var _this3 = this;

            this.edit = true;
            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses/' + warehouseId).then(function (response) {
                _this3.newWarehouse = response.data;
                _this3.loading = false;
                _this3.error = false;
            }, function (response) {
                this.error = response.data.statusText;
            });
            this.openModal();
        },
        updateStatus: function updateStatus(warehouseId, status) {
            var _this4 = this;

            alert(status);
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses/' + warehouseId + '/update-status?status=' + status).then(function (response) {
                console.log(response);
                alert("Warehouse has beeen set as primary !");
                _this4.loading = true;
                _this4.fetchWarehouses();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });
        },
        updateWarehouse: function updateWarehouse(warehouseId) {
            var _this5 = this;

            // alert(warehouseId)
            this.formIsSubmitted = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses/' + warehouseId, this.newWarehouse).then(function (response) {
                console.log(response.data);
                alert('warehouse has been updated !');

                _this5.formIsSubmitted = false;
                _this5.edit = false;
                _this5.clearInputs();
                _this5.closeModal();
                _this5.fetchWarehouses();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });

            this.loading = false;
        },
        deleteWarehouse: function deleteWarehouse(warehouseId) {
            var _this6 = this;

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/warehouses/' + warehouseId + '/delete').then(function (response) {
                alert("Warehouse has been deleted !");
                _this6.loading = false;
                _this6.error = false;
            }, function (response) {
                this.error = response.statusText;
            });
            this.fetchWarehouses();
        },
        showSuccessMessage: function showSuccessMessage() {
            // this.$swea
        },
        clearInputs: function clearInputs() {
            this.newWarehouse = {};
            this.edit = false;
            this.formIsSubmitted = false;
            this.error = null;
        },
        openModal: function openModal() {
            $('#modal-new-warehouse').modal({ 'backdrop': false });
        },
        closeModal: function closeModal() {

            $('#modal-new-warehouse').modal({ 'display': 'none', 'backdrop': false });
        }
    }
});

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("h3", { staticClass: "settings-page-title" }, [_vm._v("Warehouses")]),
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
      _vm._l(_vm.warehouses, function(warehouse) {
        return _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "panel panel-default" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c("h3", { staticClass: "wpanel-title panel-title" }, [
                _vm._v(
                  " " +
                    _vm._s(warehouse.whouse_name) +
                    " [ " +
                    _vm._s(warehouse.whouse_status) +
                    " ] "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-footer" }, [
              _c("div", { staticClass: "btn-group" }, [
                _vm._m(1, true),
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
                          attrs: {
                            "data-toggle": "modal",
                            href: "#modalReceiveAll"
                          },
                          on: {
                            click: function($event) {
                              _vm.updateStatus(warehouse.whouse_id, "Primary")
                            }
                          }
                        },
                        [_vm._v("Make as Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: {
                            "data-toggle": "modal",
                            href: "#modalReceiveAll"
                          },
                          on: {
                            click: function($event) {
                              _vm.updateStatus(warehouse.whouse_id, "Inactive")
                            }
                          }
                        },
                        [_vm._v("Mark as Inactive")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { "data-toggle": "modal" },
                          on: {
                            click: function($event) {
                              _vm.deleteWarehouse(warehouse.whouse_id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-default",
                    attrs: { title: "Edit", type: "button" },
                    on: {
                      click: function($event) {
                        _vm.showWarehouse(warehouse.whouse_id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-pencil" }),
                    _vm._v(" Edit\n                    ")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body wpanel-body" }, [
              warehouse.whouse_status == "Primary"
                ? _c("span", { staticClass: "pull-right" }, [_vm._m(2, true)])
                : _vm._e(),
              _vm._v(" "),
              _c("strong", [_vm._v(" Address ")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v("City     : " + _vm._s(warehouse.whouse_city) + " ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Country  : " + _vm._s(warehouse.whouse_country) + " ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Zip Code : " + _vm._s(warehouse.whouse_zip) + " ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Phone    : " + _vm._s(warehouse.whouse_tel_num) + " ")
              ])
            ])
          ])
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "modal-new-warehouse" } },
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
                      _vm._v("New Warehouse")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.edit
                  ? _c("h4", { staticClass: "modal-title" }, [
                      _vm._v("Edit Warehouse")
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
                _vm.error
                  ? _c("div", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.error) +
                          "\n                    "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loading && !_vm.error
                  ? _c(
                      "form",
                      {
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
                            _vm.saveWarehouse(_vm.newWarehouse.whouse_id)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-content" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-md-3 control-label required-field"
                              },
                              [_vm._v("Warehouse Name")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newWarehouse.whouse_name,
                                    expression: "newWarehouse.whouse_name"
                                  }
                                ],
                                staticClass: "form-control m-b",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.newWarehouse.whouse_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newWarehouse,
                                      "whouse_name",
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
                              { staticClass: "col-md-3 control-label" },
                              [_vm._v("City")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newWarehouse.whouse_city,
                                    expression: "newWarehouse.whouse_city"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.newWarehouse.whouse_city
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newWarehouse,
                                      "whouse_city",
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
                                staticClass:
                                  "col-md-3 control-label required-field"
                              },
                              [_vm._v("Country")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newWarehouse.whouse_country,
                                    expression: "newWarehouse.whouse_country"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.newWarehouse.whouse_country
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newWarehouse,
                                      "whouse_country",
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
                              { staticClass: "col-md-3 control-label" },
                              [_vm._v("Zip Code")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newWarehouse.whouse_zip,
                                    expression: "newWarehouse.whouse_zip"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.newWarehouse.whouse_zip
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newWarehouse,
                                      "whouse_zip",
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
                              { staticClass: "col-md-3 control-label" },
                              [_vm._v("Phone")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newWarehouse.whouse_tel_num,
                                    expression: "newWarehouse.whouse_tel_num"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.newWarehouse.whouse_tel_num
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newWarehouse,
                                      "whouse_tel_num",
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
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                !_vm.edit
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-outline",
                        attrs: {
                          disabled: _vm.formIsSubmitted,
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            _vm.addWarehouse()
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
                        attrs: {
                          disabled: _vm.formIsSubmitted,
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            _vm.updateWarehouse(_vm.newWarehouse.whouse_id)
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
    ],
    2
  )
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
            href: "#modal-new-warehouse"
          }
        },
        [_c("i", { staticClass: "fa fa-plus" }), _vm._v("\n        ADD NEW")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-default",
        attrs: { title: "Settings", type: "button", "data-toggle": "dropdown" }
      },
      [
        _c("i", { staticClass: "fa fa-cog" }),
        _vm._v(" "),
        _c("span", { staticClass: "caret" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "label label-success",
        staticStyle: { "font-size": "13px", padding: "10px" },
        attrs: { title: "Currently set as primary warehouse" }
      },
      [_c("i", { staticClass: "fa  fa-star" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4aa11862", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(483)
/* template */
var __vue_template__ = __webpack_require__(484)
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\Warehouses.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aa11862", Component.options)
  } else {
    hotAPI.reload("data-v-4aa11862", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});