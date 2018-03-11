webpackJsonp([68],{

/***/ 410:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        this.gatePassNumber = this.$route.params.id;
        console.log('Room Component ready.');
        this.fetchResourceData(this.gatePassNumber);
        this.fetchGatePassItems(this.gatePassNumber);
        this.fetchInvoices(this.gatePassNumber);
        this.fetchShipments(this.gatePassNumber);
        this.currentCorporationName = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationName(this);
    },


    data: function data() {
        return {
            gatePassNumber: null,
            currentCorporationName: null,
            gatePass: [],
            invoices: [],
            shipments: [],
            gatePassItems: [],
            error: false,
            loading: false
        };
    },

    computed: {
        totalOfCases: function totalOfCases() {
            var total = 0;
            this.gatePassItems.forEach(function (item) {
                return total += item.total_qty / item.conversion_qty;
            });
            return total;
        }
    },

    methods: {
        printGatePass: function printGatePass() {
            this.$router.push({ path: '/gate-passes/' + this.gatePassNumber + '/print' });
        },
        fetchResourceData: function fetchResourceData(gatepassId) {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/gate-passes/' + gatepassId).then(function (response) {

                _this.$set(_this, 'gatePass', response.data);
                _this.loading = false;
            }, function (response) {

                _this.error = response.status;
                _this.loading = false;
            });
        },
        fetchInvoices: function fetchInvoices(gatepassId) {
            var _this2 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/gate-passes/' + gatepassId + '/invoices').then(function (response) {
                _this2.$set(_this2, 'invoices', response.data);
                _this2.loading = false;
            }, function (response) {

                _this2.error = response.status;
                _this2.loading = false;
            });
        },
        fetchShipments: function fetchShipments(gatepassId) {
            var _this3 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/gate-passes/' + gatepassId + '/shipments').then(function (response) {
                _this3.$set(_this3, 'shipments', response.data);
                _this3.loading = false;
            }, function (response) {

                _this3.error = response.status;
                _this3.loading = false;
            });
        },
        fetchGatePassItems: function fetchGatePassItems(gatepassId) {
            var _this4 = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/gate-passes/' + gatepassId + '/items').then(function (response) {

                _this4.$set(_this4, 'gatePassItems', response.data);
                _this4.loading = false;
            }, function (response) {

                _this4.error = response.status;
                _this4.loading = false;
            });
        },
        viewInvoice: function viewInvoice(invoiceId) {
            this.$router.push({ path: '/invoices/' + invoiceId });
        },
        markShipmentAsDelivered: function markShipmentAsDelivered(shipmentId) {
            var _this5 = this;

            this.loading = true;
            this.$http.put(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/shipments/' + shipmentId + '/events/mark-as-delivered', { gate_pass_id: this.gatePassNumber }).then(function (response) {

                alert("Shipment has been marked as Delivered !");
                _this5.fetchShipments();
                _this5.loading = false;
            }, function (response) {

                _this5.error = response.status;
                _this5.loading = false;
            });
        }
    }

});

/***/ }),

/***/ 411:
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
            value: !_vm.error && !_vm.loading,
            expression: "!error && !loading"
          }
        ],
        staticClass: "page-title"
      },
      [
        _c(
          "div",
          { staticClass: "btn-toolbar pull-right" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function($event) {
                    _vm.printGatePass()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-print" })]
            ),
            _vm._v(" "),
            _vm.shipments.length == 0
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-outline",
                    attrs: {
                      to: {
                        path: "/shipments/new",
                        query: {
                          order_number: _vm.gatePassNumber,
                          ref_module: "gatepass",
                          gatepass_no: _vm.gatePassNumber
                        }
                      },
                      type: "button",
                      "data-toggle": "dropdown"
                    }
                  },
                  [_vm._v("\n                    CREATE SHIPMENT ")]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v("Gate Pass > " + _vm._s(_vm.gatePass.gate_pass_no) + " ")
        ])
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
        staticClass: "col-md-offset-2 col-md-8"
      },
      [
        _c("div", { attrs: { role: "tabpanel" } }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane active",
                attrs: { role: "tabpanel", id: "invoices" }
              },
              [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.invoices, function(invoice) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              _vm.viewInvoice(invoice.inv_id)
                            }
                          }
                        },
                        [
                          _c("td", [
                            _vm._v(" " + _vm._s(invoice.inv_no) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              " " + _vm._s(invoice.contact_company_name) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(invoice.inv_date) + "  ")
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoice.inv_status) + " ")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(invoice.inv_due_date) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("currency")(
                                  invoice.inv_total_amount,
                                  "PHP",
                                  2
                                )
                              ) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("currency")(
                                  invoice.inv_balance_amount,
                                  "PHP",
                                  2
                                )
                              ) + " "
                            )
                          ])
                        ]
                      )
                    })
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane ",
                attrs: { role: "tabpanel", id: "shipments" }
              },
              [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.shipments, function(shipment) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              _vm.viewInvoice(_vm.invoice.so_id)
                            }
                          }
                        },
                        [
                          _c("td", [
                            _vm._v("SHIP-" + _vm._s(shipment.ship_id) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(shipment.ship_date) + "  ")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(shipment.ship_status) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(shipment.ship_tracking_no) + " ")
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
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.markShipmentAsDelivered(
                                              shipment.ship_id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Mark as Delivered")]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    })
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "preview-details" },
          [
            _c("p", [_vm._v(" " + _vm._s(_vm.currentCorporationName) + " ")]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "11px",
                  position: "relative",
                  bottom: "10px",
                  color: "gray"
                }
              },
              [_vm._v("Bacolod City, Philippines")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "pull-right",
                staticStyle: {
                  border: "1px solid #2E7D32",
                  padding: "5px",
                  "font-size": "15px",
                  "text-transform": "uppercase",
                  color: "#2E7D32"
                }
              },
              [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.gatePass.gate_pass_status) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "pull-right",
                staticStyle: { "margin-top": "50px", "font-size": "11px" }
              },
              [
                _vm._m(4),
                _vm._v(" "),
                _vm.shipments.length == 0
                  ? _c("p", [_vm._v(" No shipment information found")])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loading && _vm.shipments.length > 0
                  ? _c("p", [
                      _vm._v(
                        "Carrier : " +
                          _vm._s(_vm.shipments[0].carrier_name) +
                          " "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loading && _vm.shipments.length > 0
                  ? _c("p", [
                      _vm._v(
                        "Tracking # : " +
                          _vm._s(_vm.shipments[0].ship_tracking_no) +
                          " "
                      )
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "title" }, [_vm._v("GATE PASS")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.gatePass.gate_pass_no))]),
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
              [
                _vm._v(
                  "REFERENCE# : " + _vm._s(_vm.gatePass.gate_pass_ref_no) + " "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "P",
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
              [
                _vm._v(
                  "DATE ISSUED : " + _vm._s(_vm.gatePass.gate_pass_date_issued)
                )
              ]
            ),
            _vm._v(" "),
            _c("table", { staticClass: "table table-responsive" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.gatePassItems, function(item) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.item_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.item_desc) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.item_sku) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      parseFloat(item.total_qty) <
                      parseFloat(item.conversion_qty)
                        ? _c("td", { attrs: { width: "25%" } }, [
                            _vm._v(
                              "  0 " +
                                _vm._s(item.purchase_unit_name) +
                                " / " +
                                _vm._s(item.total_qty) +
                                " " +
                                _vm._s(item.sales_unit) +
                                " "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      parseFloat(item.total_qty) >=
                      parseFloat(item.conversion_qty)
                        ? _c("td", { attrs: { width: "25%" } }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  Math.floor(
                                    parseInt(item.total_qty) /
                                      parseInt(item.conversion_qty)
                                  )
                                ) +
                                "  " +
                                _vm._s(item.purchase_unit_name) +
                                " / " +
                                _vm._s(item.total_qty % item.conversion_qty) +
                                " " +
                                _vm._s(item.sales_unit) +
                                "  "
                            )
                          ])
                        : _vm._e()
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total Qty")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(Number(_vm.totalOfCases).toFixed(2)) + " cases "
                      )
                    ])
                  ])
                ],
                2
              )
            ])
          ],
          1
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
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
      [
        _c("li", { staticClass: "active", attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              attrs: {
                href: "#invoices",
                "aria-controls": "tab",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("INVOICES")]
          )
        ]),
        _vm._v(" "),
        _c("li", { attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              attrs: {
                href: "#shipments",
                "aria-controls": "tab",
                role: "tab",
                "data-toggle": "tab"
              }
            },
            [_vm._v("SHIPMENT")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("INVOICE #")]),
        _vm._v(" "),
        _c("th", [_vm._v("CUSTOMER NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("STATUS")]),
        _vm._v(" "),
        _c("th", [_vm._v("DUE DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("AMOUNT")]),
        _vm._v(" "),
        _c("th", [_vm._v("BALANCE DUE")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("SHIPMENT #")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("STATUS")]),
        _vm._v(" "),
        _c("th", [_vm._v("TRACKING #")]),
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
        staticClass: "btn btn-default btn-outline",
        staticStyle: { border: "0px !important" },
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
    return _c("p", { staticStyle: { "font-size": "13px !important" } }, [
      _c("strong", [_vm._v("Shipment Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ITEMS & DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("SKU")]),
        _vm._v(" "),
        _c("th", [_vm._v("TOTAL QTY")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ecd23a8", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(410)
/* template */
var __vue_template__ = __webpack_require__(411)
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
Component.options.__file = "resources\\assets\\js\\components\\GatePasses\\ViewGatePass.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ecd23a8", Component.options)
  } else {
    hotAPI.reload("data-v-1ecd23a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});