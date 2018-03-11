webpackJsonp([50],{

/***/ 428:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.purchaseReturnId = this.$route.params.id;
        this.fetchResourceData(this.purchaseReturnId);
    },


    data: function data() {
        return {

            purchaseReturnItems: [],
            purchaseReturn: {},
            error: null,
            loading: false,
            payments: []
        };
    },

    computed: {
        subTotal: function subTotal() {

            var total = 0;
            this.purchaseReturnItems.forEach(function (item) {
                return total += item.purchase_rturn_item_qty * item.purchase_rturn_item_rate;
            });
            return Number(total).toFixed(2);
        }
    },

    methods: {
        fetchResourceData: function fetchResourceData(purchaseReturnId) {
            var _this = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/purchase-returns/' + purchaseReturnId).then(function (response) {

                console.log(response.data);

                _this.$set(_this, 'purchaseReturnItems', response.data.items);
                _this.$set(_this, 'purchaseReturn', response.data.purchaseReturn);

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

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
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
        _c("div", { staticClass: "btn-toolbar pull-right" }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loading,
                expression: "!loading"
              }
            ],
            staticClass: "title"
          },
          [
            _vm._v(
              "\n          " +
                _vm._s(_vm.purchaseReturn.purchase_rturn_no) +
                "\n      "
            )
          ]
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
          [_vm._v(" Preparing data ... ")]
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "col-md-offset-2 col-md-8"
      },
      [
        _c("br"),
        _vm._v(" "),
        !_vm.loading
          ? _c("p", [
              _vm._v("Here are the short landed items from "),
              _c("strong", [
                _vm._v(_vm._s(_vm.purchaseReturnItems[0].contact_company_name))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "pull-right",
            attrs: {
              to: {
                name: "view-purchaseorder",
                params: { id: _vm.purchaseReturn.po_id }
              }
            }
          },
          [_vm._v("continue to my Purchase Order ➔")]
        ),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "preview-details" }, [
          _c("span", { staticClass: "pull-left" }, [
            _vm._v("\n                Issued To :"),
            _c("br"),
            _vm._v(" "),
            !_vm.loading
              ? _c("p", { staticStyle: { "text-transform": "uppercase" } }, [
                  _c("strong", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.purchaseReturnItems[0].contact_company_name)
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("p", [_vm._v("Bacolod City,Philippines")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pull-right" },
            [
              _c("h3", [_vm._v("PURCHASE RETURN")]),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "!loading"
                    }
                  ]
                },
                [_vm._v(_vm._s(_vm.purchaseReturn.purchase_rturn_no))]
              ),
              _vm._v(" "),
              _c("P", [
                _vm._v(
                  " REFERENCE # : " +
                    _vm._s(_vm.purchaseReturn.purchase_rturn_ref_no)
                )
              ]),
              _vm._v(" "),
              _c("P", [
                _vm._v(
                  " DATE : " + _vm._s(_vm.purchaseReturn.purchase_rturn_date)
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table table-responsive" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.purchaseReturnItems, function(item) {
                  return _c("tr", [
                    _c("td", [
                      _vm._v(
                        "\n                            [ " +
                          _vm._s(item.item_sku) +
                          " ]  " +
                          _vm._s(item.item_name) +
                          " \n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(item.purchase_rturn_item_ordered_qty) +
                          " " +
                          _vm._s(item.purchase_unit_name) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                           " +
                          _vm._s(item.purchase_rturn_item_received_qty) +
                          " " +
                          _vm._s(item.purchase_unit_name) +
                          "\n                       "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                           " +
                          _vm._s(item.purchase_rturn_item_qty) +
                          " " +
                          _vm._s(item.purchase_unit_name) +
                          "\n                       "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            PHP" +
                          _vm._s(item.purchase_rturn_item_rate) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("currency")(
                              item.purchase_rturn_item_rate *
                                item.purchase_rturn_item_qty,
                              "PHP",
                              2
                            )
                          ) +
                          " "
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [_vm._v(" Sub Total")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(_vm._f("currency")(_vm.subTotal, "PHP", 2)) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [
                    _vm._v(
                      "\n                            Total\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseReturn.purchase_rturn_total_amount,
                            "PHP",
                            2
                          )
                        ) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [
                    _vm._v(
                      "\n                            Purchase Discount ( " +
                        _vm._s(
                          _vm.purchaseReturn
                            .purchase_rturn_discount_percentage == _vm.NULL
                            ? 0
                            : _vm.purchaseReturn
                                .purchase_rturn_discount_percentage
                        ) +
                        "% )\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseReturn.purchase_rturn_discounted_amount,
                            "PHP",
                            2
                          )
                        ) +
                        " "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [
                    _vm._v(
                      "\n                            VAT \n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "  " +
                        _vm._s(
                          _vm._f("currency")(
                            _vm.purchaseReturn.purchase_rturn_total_amount *
                              0.10714285714,
                            "PHP",
                            2
                          )
                        ) +
                        " "
                    )
                  ])
                ])
              ],
              2
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ITEMS & DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("QTY ORDERED")]),
        _vm._v(" "),
        _c("th", [_vm._v("QTY RECEIVED")]),
        _vm._v(" "),
        _c("th", [_vm._v("QTY RETURNED")]),
        _vm._v(" "),
        _c("th", [_vm._v("UNIT PRICE")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-918dbaf2", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(428)
/* template */
var __vue_template__ = __webpack_require__(429)
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
Component.options.__file = "resources\\assets\\js\\components\\PurchaseReturns\\ViewPurchaseReturn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-918dbaf2", Component.options)
  } else {
    hotAPI.reload("data-v-918dbaf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});