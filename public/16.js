webpackJsonp([16],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(310)
/* template */
var __vue_template__ = __webpack_require__(311)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\Invoices\\AllInvoices.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-242e01f0", Component.options)
  } else {
    hotAPI.reload("data-v-242e01f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("b181d650", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-242e01f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllInvoices.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-242e01f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllInvoices.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\ntable tr {\n  background: #fff;\n  font-size: 12px;\n  font-family: 'Arial';\n}\n", ""]);

// exports


/***/ }),

/***/ 310:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$upload.new('profile-avatar', {
      url: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv',
      extensions: false,
      onSuccess: function onSuccess(res) {
        console.log("success uploading avatar");
        // this.$msgbag.success('Avatar uploaded successfully.');
      },
      onError: function onError() {
        console.log("error uploading avatar");
        // this.$msgbag.error('Error uploading avatar.');
      }
    });
  },
  mounted: function mounted() {
    this.fetchInvoices();
    this.$upload.reset('profile-avatar', {
      url: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv'
    });
  },
  data: function data() {
    return {
      csvFile: null,
      invoices: [],
      error: null,
      loading: false,
      styleClass: 'table table-hover',
      columns: [{
        label: 'DATE',
        field: 'inv_date',
        type: 'string',
        html: false,
        width: '150px',
        filterable: true
      }, {
        label: 'INVOICE #',
        field: 'inv_no',
        type: 'numeric',
        html: false,
        filterable: true,
        width: '180px'
      }, {
        label: 'CUSTOMER NAME',
        field: 'contact_company_name',
        html: false,
        filterable: true,
        width: '300px'
      }, {
        label: 'STATUS',
        field: 'inv_status',
        html: false,
        width: '100px'
      }, {
        label: 'REFERENCE #',
        field: 'inv_ref_no',
        html: false,
        filterable: true,
        width: '100px'
      }, {
        label: 'AMOUNT (PHP)',
        field: 'inv_total_amount',
        html: false,
        width: '100px'
      }]
    };
  },


  methods: {
    processFileImport: function processFileImport(e) {

      var files = e.target.files || e.dataTransfer.files;
      this.csvFile = files[0];
      // this.createFile(files[0])
    },
    createFile: function createFile(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.csvFile = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadFile: function uploadFile() {
      var _this = this;

      this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv', { csvFile: this.csvFile }).then(function (response) {
        _this.loading = false;
      }, function (response) {
        // error
        _this.error = response.status;
        _this.loading = false;
      });
    },
    fetchInvoices: function fetchInvoices() {
      var _this2 = this;

      this.loading = true;
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices').then(function (response) {
        _this2.$set(_this2, 'invoices', response.data);
        _this2.loading = false;
      }, function (response) {

        // error
        _this2.error = response.status;
        _this2.loading = false;
      });
    },
    viewData: function viewData(row) {
      this.$router.push({ path: '/invoices/' + row.inv_id });
    }
  }
});

/***/ }),

/***/ 311:
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
              value: !_vm.loading && !_vm.error,
              expression: "!loading && !error"
            }
          ],
          staticClass: "page-title"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [_vm._v("Invoices")])
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
          rows: _vm.invoices,
          paginate: true,
          lineNumbers: true,
          styleClass: _vm.styleClass
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "modal-import-csv" } },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", [
                  _c(
                    "button",
                    {
                      attrs: {
                        disabled:
                          _vm.$upload.meta("profile-avatar").status ===
                          "sending"
                      },
                      on: {
                        click: function($event) {
                          _vm.$upload.select("profile-avatar")
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$upload.meta("profile-avatar").status ===
                                "sending",
                              expression:
                                "$upload.meta('profile-avatar').status === 'sending'"
                            }
                          ]
                        },
                        [_vm._v("Updating...")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.$upload.meta("profile-avatar").status ===
                                "sending",
                              expression:
                                "!$upload.meta('profile-avatar').status === 'sending'"
                            }
                          ]
                        },
                        [_vm._v("Update Photo")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.$upload.files("profile-avatar").error.length
                  ? _c("div", [
                      _vm._v(
                        "\n    " +
                          _vm._s(
                            _vm.$upload.files("profile-avatar").error[0]
                              .errors[0].message
                          ) +
                          "\n"
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: {
                      action: "",
                      method: "POST",
                      role: "form",
                      enctype: "multipart/form-data"
                    }
                  },
                  [
                    _c("legend", [_vm._v("Select CSV File")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Filename")]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "file" },
                        on: {
                          change: function($event) {
                            _vm.processFileImport($event)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-outline",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.uploadFile()
                          }
                        }
                      },
                      [_vm._v("Import")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
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
        "button",
        { staticClass: "btn btn-success btn-icon-icon btn-md mr5" },
        [_c("i", { staticClass: "fa fa-bars" })]
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Import CSV File")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Cancel")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-242e01f0", module.exports)
  }
}

/***/ })

});