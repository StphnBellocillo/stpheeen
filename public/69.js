webpackJsonp([69],{

/***/ 452:
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

    methods: {
        printGatePass: function printGatePass() {
            this.$router.push({ path: 'gate-passes/' + this.gatepassId + '/print' });
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

/***/ 453:
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
        _c(
          "div",
          {
            staticClass: "preview-details",
            staticStyle: { border: "0px !important" }
          },
          [
            _c("p", { attrs: { align: "center" } }, [
              _vm._v(" " + _vm._s(_vm.currentCorporationName) + " ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "pull-right",
                staticStyle: { "margin-top": "50px", "font-size": "11px" }
              },
              [
                _vm._m(0),
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
            _c("p", [
              _vm._v("Status : "),
              _c(
                "span",
                {
                  staticStyle: {
                    "text-transform": "uppercase",
                    color: "#000",
                    "text-style": "underline"
                  }
                },
                [
                  _c("strong", [
                    _vm._v(
                      "\n              " + _vm._s(_vm.gatePass.gate_pass_status)
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-responsive" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
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
                        "\n                           " +
                          _vm._s(item.item_sku) +
                          "\n                       "
                      )
                    ]),
                    _vm._v(" "),
                    parseFloat(item.total_qty) < parseFloat(item.conversion_qty)
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
                })
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
    require("vue-hot-reload-api")      .rerender("data-v-ca5c6224", module.exports)
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(452)
/* template */
var __vue_template__ = __webpack_require__(453)
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
Component.options.__file = "resources\\assets\\js\\components\\GatePasses\\PrintGatePass.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca5c6224", Component.options)
  } else {
    hotAPI.reload("data-v-ca5c6224", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});