webpackJsonp([61],{

/***/ 416:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        var contact_id = this.$route.params.id;
        console.log('Contact id is' + contact_id);
        this.fetchResourceData(contact_id);
        this.poNumber = this.$route.params.id;
    },


    data: function data() {
        return {

            poNumber: null,
            contact: [],
            error: null,
            loading: false
        };
    },

    filters: {

        truncate: function truncate(string, value) {

            return string.substring(0, value) + '...';
        }

    },

    methods: {
        getData: function getData(contact) {

            console.log("contact" + contact.contact_company_name + " was clicked");
        },
        createPurchaseReturn: function createPurchaseReturn() {
            this.$router.push({ path: '/purchase-orders/' + this.poNumber + '/purchase-returns/new' });
        },
        fetchResourceData: function fetchResourceData(contactId) {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.api_url + 'contacts/' + contactId).then(function (response) {

                _this.$set(_this, 'contact', response.data);
                console.log(response);
                _this.loading = false;
            }, function (response) {

                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: "btn-toolbar pull-right" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "dropdown-menu",
              staticStyle: { "font-family": "Proxima Nova Regular !important" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item",
                      attrs: {
                        to: {
                          path: "/bills/new",
                          query: { order_number: _vm.poNumber }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n\n                        Convert to Bill\n\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(3)
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [
        _vm._v("\n            Adjustment Details - IA-001\n      ")
      ])
    ]),
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
      [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-offset-2 col-md-8" }, [
      _c("div", { staticClass: "preview-details" }, [
        _c(
          "div",
          { staticClass: "pull-right" },
          [
            _c("h3", { staticClass: "title" }, [_vm._v("ITEM ADJUSTMENT")]),
            _vm._v(" "),
            _c("p", [_vm._v("Mode : Quantity Adjustment ")]),
            _vm._v(" "),
            _c("P", [_vm._v(" Date : 05/26/17")]),
            _vm._v(" "),
            _c("P", [_vm._v("Reason : Damaged Goods")]),
            _vm._v(" "),
            _c("P", [_vm._v("Account : Cost of Goods Sold")]),
            _vm._v(" "),
            _c("P", [_vm._v("Adjusted By : Raymund ")])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5)
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "modalReceiveAll" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(6),
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
                attrs: { role: "form" }
              },
              [_vm._m(7)]
            )
          ]),
          _vm._v(" "),
          _vm._m(8)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-show-notif-mark-as-complete" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog",
            staticStyle: { "min-width": "900px !important" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(9),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: { "data-dismiss": "modal" },
                    on: {
                      click: function($event) {
                        _vm.createPurchaseReturn()
                      }
                    }
                  },
                  [_vm._v("YES, CREATE PURCHASE RETURN")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("OH WAIT, NO")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "btn-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "button" } },
        [_c("i", { staticClass: "fa fa-pencil" })]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "button" } },
        [
          _c("i", {
            staticClass: "fa fa-file-pdf-o",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "button" } },
        [_c("i", { staticClass: "fa fa-print" })]
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
        staticClass: "btn btn-primary",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Mark as Issued")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
        _vm._v("Delete")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "pull-left",
        staticStyle: { "margin-top": "10rem !important" }
      },
      [_c("p", [_vm._v("Reference # : SO-01")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-responsive" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("ITEMS & DESCRIPTION")]),
          _vm._v(" "),
          _c("th", [_vm._v("Warehouse")]),
          _vm._v(" "),
          _c("th", [_vm._v("Quantity Adjusted")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [
            _vm._v(
              "\n                            Papaya Soap\n                        "
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "\n                            NEPAN INC.\n                        "
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v(" 50(pack)")])
        ])
      ])
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("RECEIVE ALL ITEMS")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-content" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticClass: "col-md-3 control-label required-field" }, [
          _vm._v("Purchase Receive #")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("input", {
            staticClass: "form-control m-b",
            attrs: { type: "text" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticClass: "col-md-3 control-label required-field" }, [
          _vm._v("Receive Date")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("input", {
            staticClass: "form-control m-b",
            attrs: { type: "text", "data-provide": "datepicker" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group " }, [
        _c("label", { staticClass: "col-md-3 control-label" }, [
          _vm._v("Notes ( For  Internal Use )")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("textarea", { staticClass: "form-control", attrs: { rows: "2" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("button", { staticClass: "btn btn-primary btn-outline" }, [
        _vm._v(" Receive ")
      ]),
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
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Confirm Mark as Complete")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("p", [
        _vm._v(
          "Are you sure you want to mark this purchase order as complete ? This will create a purchase return to your principal supplier for the remaining undelivered items."
        )
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-hover" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("ITEM DETAILS")]),
            _vm._v(" "),
            _c("th", [_vm._v("REMAINING QTY")]),
            _vm._v(" "),
            _c("th", [_vm._v("QTY DELIVERED")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("PAPAYA SOAP [ SKU : PS-0001 ]")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 20pcs ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 30pcs ")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-52707898", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(416)
/* template */
var __vue_template__ = __webpack_require__(417)
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
Component.options.__file = "resources\\assets\\js\\components\\Items\\ViewItemAdjustment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52707898", Component.options)
  } else {
    hotAPI.reload("data-v-52707898", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});