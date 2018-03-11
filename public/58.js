webpackJsonp([58],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(314)
/* template */
var __vue_template__ = __webpack_require__(315)
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
Component.options.__file = "resources\\assets\\js\\components\\PickLists\\AllPickLists.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84e21ddc", Component.options)
  } else {
    hotAPI.reload("data-v-84e21ddc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 314:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        console.log('Pick List Component ready.');
        this.fetchPickLists();
        this.initializePlugins();
    },


    data: function data() {
        return {

            error: false,
            styleClass: 'table table-hover',
            loading: false,
            picklists: [],
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            newPickList: {
                corp_id: null,
                pick_list_ref_no: null,
                pick_list_date_issued: null,
                pick_list_status: 'ACTIVE'
            },
            columns: [{
                label: 'DATE',
                field: 'pick_list_date_issued',
                type: 'string',
                html: false,
                width: '150px',
                filterable: true
            }, {
                label: 'PICKLIST #',
                field: 'pick_list_no',
                type: 'number',
                html: false,
                filterable: true,
                width: '90px'
            }, {
                label: 'PICKLIST REFERENCE #',
                field: 'pick_list_ref_no',
                type: 'number',
                html: false,
                filterable: true,
                width: '180px'
            }, {
                label: 'STATUS',
                field: 'pick_list_status',
                html: false,
                width: '100px'
            }]
        };
    },

    methods: {
        addPickList: function addPickList() {
            var _this = this;

            this.formIsSubmitted = true;
            this.newPickList.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists/create-new-picklist', this.newPickList).then(function (response) {

                console.log(response.data);
                _this.formIsSubmitted = false;
                alert('Picklist has been added !');
                _this.fetchPickLists();
            }, function (response) {

                // error
                _this.error = response.status;
                _this.loading = false;
                _this.formIsSubmitted = false;
            });
        },
        fetchPickLists: function fetchPickLists() {
            var _this2 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/picklists').then(function (response) {

                console.log(response.data);
                _this2.$set(_this2, 'picklists', response.data);
                _this2.loading = false;
            }, function (response) {

                // error
                _this2.error = response.status;
                _this2.loading = false;
            });
        },
        viewData: function viewData(row) {
            this.$router.push({ path: '/pick-lists/' + row.pick_list_id });
        },
        initializePlugins: function initializePlugins() {

            // $(".modal").modal({backdrop: false});
            $("[data-toggle=tooltip]").tooltip();
        }
    }

});

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.error && !_vm.loading,
              expression: "!error && !loading"
            }
          ],
          staticClass: "page-title"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [_vm._v("Pick Lists")])
        ]
      ),
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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.error,
              expression: "error"
            }
          ]
        },
        [
          _c("div", { staticClass: "load-error" }, [
            _vm._v(" " + _vm._s(_vm.error))
          ]),
          _vm._v(" "),
          _c("p", { attrs: { align: "center" } }, [
            _vm._v(" An error occured while we load your data. ")
          ])
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
          rows: _vm.picklists,
          paginate: true,
          lineNumbers: true,
          styleClass: _vm.styleClass
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "modal-add-new-picklist" } },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
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
                        _vm.addPickList()
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
                          [_vm._v(" Date Issued")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newPickList.pick_list_date_issued,
                                expression: "newPickList.pick_list_date_issued"
                              }
                            ],
                            staticClass: "form-control m-b",
                            attrs: { type: "date" },
                            domProps: {
                              value: _vm.newPickList.pick_list_date_issued
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newPickList,
                                  "pick_list_date_issued",
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
                          [_vm._v(" Reference #")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newPickList.pick_list_ref_no,
                                expression: "newPickList.pick_list_ref_no"
                              }
                            ],
                            staticClass: "form-control m-b",
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.newPickList.pick_list_ref_no
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.newPickList,
                                  "pick_list_ref_no",
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
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success btn-outline",
                    attrs: { disabled: _vm.formIsSubmitted, type: "button" },
                    on: {
                      click: function($event) {
                        _vm.addPickList()
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
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ])
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
        "a",
        {
          staticClass: "btn btn-primary btn-outline pull-right",
          attrs: {
            "data-backdrop": "false",
            "data-toggle": "modal",
            href: "#modal-add-new-picklist"
          }
        },
        [_vm._v("\n      ADD New\n      ")]
      )
    ])
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("ADD NEW PICKLIST")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84e21ddc", module.exports)
  }
}

/***/ })

});