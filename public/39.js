webpackJsonp([39],{

/***/ 487:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchSalesPersons();
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
            salespersons: [],
            newSalesPerson: {
                corp_id: __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationId(this),
                display_name: '',
                fname: '',
                lastname: '',
                email: '',
                phone: '',
                city: '',
                state: '',
                country: '',
                zip_code: ''
            }
        };
    },

    methods: {

        fetchSalesPersons: function fetchSalesPersons() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/salespersons').then(function (response) {
                _this.$set(_this, 'salespersons', response.data);
                _this.loading = false;
            });
        },
        saveSalesPerson: function saveSalesPerson(salesPersonId) {
            if (this.edit) {
                return this.updateSalesPerson(salesPersonsId);
            }
            return this.addSalesPerson();
        },
        addSalesPerson: function addSalesPerson() {
            var _this2 = this;

            this.edit = false;
            this.formIsSubmitted = true;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/salespersons/create', this.newSalesPerson).then(function (response) {

                alert('salesperson has been added !');
                console.log(response);
                _this2.clearInputs();
                _this2.loading = false;
                _this2.formIsSubmitted = false;
                _this2.fetchSalesPersons();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        showSalesPerson: function showSalesPerson(salesPersonId) {
            var _this3 = this;

            this.edit = true;
            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/salespersons/' + salesPersonId).then(function (response) {
                _this3.newSalesPerson = response.data;
                _this3.loading = false;
                _this3.error = false;
            }, function (response) {
                this.error = response.statusText;
            });

            this.openModal();
        },
        updateSalesPerson: function updateSalesPerson(salesPersonId) {
            var _this4 = this;

            this.formIsSubmitted = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/salespersons/' + salesPersonId, this.newSalesPerson).then(function (response) {

                console.log(response.data);
                alert('salesperson has been updated !');
                _this4.formIsSubmitted = false;
                _this4.edit = false;
                _this4.clearInputs();
                _this4.closeModal();
                _this4.fetchSalesPersons();
            }, function (response) {

                this.error = response.statusText;
                this.saveText = 'An error occured';
                console.log(this.error);
            });

            this.loading = false;
        },
        deleteSalesPerson: function deleteSalesPerson(salesPersonId) {
            var _this5 = this;

            this.$http.delete(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/salespersons/' + salesPersonId + '/delete').then(function (response) {

                alert("Salesperson has been deleted !");
                _this5.loading = false;
                _this5.error = false;
                _this5.fetchSalesPersons();
            }, function (response) {
                this.error = response.statusText;
            });
        },
        clearInputs: function clearInputs() {
            this.newSalesPerson = {};
            this.edit = false;
            this.formIsSubmitted = false;
            this.error = null;
        },
        openModal: function openModal() {
            $('#modal-new-salesperson').modal({ 'backdrop': false });
        },
        closeModal: function closeModal() {
            $('#modal-new-salesperson').modal({ 'display': 'none', 'backdrop': false });
        }
    }

});

/***/ }),

/***/ 488:
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
      _c("h3", { staticClass: "settings-page-title" }, [
        _vm._v("Sales Persons")
      ]),
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
      _c("vue-good-table", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading && !_vm.error,
            expression: "!loading && !error"
          }
        ],
        attrs: {
          onClick: _vm.viewData,
          columns: _vm.columns,
          rows: _vm.salespersons,
          paginate: true,
          lineNumbers: true,
          styleClass: _vm.styleClass
        }
      }),
      _vm._v(" "),
      !_vm.loading
        ? _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "panel panel-default" }, [
              _c("div", { staticClass: "panel-heading" }, [
                _vm._v("\n              Sales Persons List\n            ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.salespersons, function(salesperson) {
                      return _c("tr", [
                        _c("td", [
                          _vm._v(_vm._s(salesperson.display_name) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            " " +
                              _vm._s(
                                salesperson.phone == _vm.NULL
                                  ? "No data provided"
                                  : salesperson.phone
                              ) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            " " +
                              _vm._s(
                                salesperson.email == _vm.NULL
                                  ? "No data provided"
                                  : salesperson.email
                              ) +
                              " "
                          )
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
                                  "font-family":
                                    "Proxima Nova Regular !important"
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
                                          _vm.showSalesPerson(
                                            salesperson.sales_person_id
                                          )
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
                                          _vm.deleteSalesPerson(
                                            salesperson.sales_person_id
                                          )
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
        { staticClass: "modal fade", attrs: { id: "modal-new-salesperson" } },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog",
              staticStyle: { "min-width": "900px !important" }
            },
            [
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
                        _vm._v("New Sales Person")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.edit
                    ? _c("h4", { staticClass: "modal-title" }, [
                        _vm._v("Edit Sales Person")
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
                  !_vm.loading && !_vm.error
                    ? _c(
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
                              _vm.saveSalesPerson(
                                _vm.newSalesPerson.sales_person_id
                              )
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-content" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-12" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-3 control-label required-field"
                                    },
                                    [_vm._v("Display Name")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-8" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.newSalesPerson.display_name,
                                          expression:
                                            "newSalesPerson.display_name"
                                        }
                                      ],
                                      staticClass: "form-control m-b",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.newSalesPerson.display_name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newSalesPerson,
                                            "display_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-6" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-offset-3 col-md-3 control-label"
                                    },
                                    [_vm._v("Firstname")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newSalesPerson.fname,
                                          expression: "newSalesPerson.fname"
                                        }
                                      ],
                                      staticClass: "form-control m-b",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.newSalesPerson.fname
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newSalesPerson,
                                            "fname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-offset-2 form-group col-md-6"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: " col-md-3 control-label " },
                                    [_vm._v("Lastname")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-7" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newSalesPerson.lastname,
                                          expression: "newSalesPerson.lastname"
                                        }
                                      ],
                                      staticClass: "form-control m-b",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.newSalesPerson.lastname
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newSalesPerson,
                                            "lastname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "form-group col-md-6" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-md-offset-3 col-md-3 control-label"
                                    },
                                    [_vm._v("Email")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newSalesPerson.email,
                                          expression: "newSalesPerson.email"
                                        }
                                      ],
                                      staticClass: "form-control m-b",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.newSalesPerson.email
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newSalesPerson,
                                            "email",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-offset-2 form-group col-md-6"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: " col-md-3 control-label " },
                                    [_vm._v("Phone")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-7" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newSalesPerson.phone,
                                          expression: "newSalesPerson.phone"
                                        }
                                      ],
                                      staticClass: "form-control m-b",
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.newSalesPerson.phone
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newSalesPerson,
                                            "phone",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "col-md-offset-2" }, [
                              _vm._v(" Address Information  ")
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
                                      value: _vm.newSalesPerson.city,
                                      expression: "newSalesPerson.city"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.newSalesPerson.city },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.newSalesPerson,
                                        "city",
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
                                [_vm._v("State")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newSalesPerson.state,
                                      expression: "newSalesPerson.state"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.newSalesPerson.state },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.newSalesPerson,
                                        "state",
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
                                [_vm._v("Country")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newSalesPerson.country,
                                      expression: "newSalesPerson.country"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.newSalesPerson.country
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.newSalesPerson,
                                        "country",
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
                                      value: _vm.newSalesPerson.zip_code,
                                      expression: "newSalesPerson.zip_code"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.newSalesPerson.zip_code
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.newSalesPerson,
                                        "zip_code",
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
                              _vm.addSalesPerson()
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
                              _vm.updateSalesPerson(
                                _vm.newSalesPerson.sales_person_id
                              )
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
            ]
          )
        ]
      )
    ],
    1
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
            href: "#modal-new-salesperson"
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-10fabbe4", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(487)
/* template */
var __vue_template__ = __webpack_require__(488)
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\SalesPersons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10fabbe4", Component.options)
  } else {
    hotAPI.reload("data-v-10fabbe4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});