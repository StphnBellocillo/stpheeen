webpackJsonp([32],{

/***/ 336:
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.fetchTransfers();
    },


    data: function data() {
        return {

            stockAdjustments: [],
            styleClass: 'table table-hover',
            error: null,
            loading: false,
            columns: [{
                label: 'DATE',
                field: 'stock_adjustment_date',
                type: 'string',
                html: false,
                width: '150px',
                filterable: true
            }, {
                label: 'Adjustment #',
                field: 'stock_adjustment_no',
                type: 'string',
                html: false,
                filterable: true,
                width: '180px'
            }, {
                label: 'STATUS',
                field: 'stock_adjustment_status',
                html: false,
                width: '100px'
            }, {
                label: 'REFERENCE #',
                field: 'stock_adjustment_ref_no',
                html: false,
                width: '100px'
            }]
        };
    },

    methods: {
        fetchTransfers: function fetchTransfers() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/stock-adjustments').then(function (response) {
                _this.$set(_this, 'stockAdjustments', response.data);
                _this.loading = false;
            }, function (response) {

                // error
                _this.error = response.status;
                _this.loading = false;
            });
        },
        viewData: function viewData(row) {
            this.$router.push({ path: '/inventory/stock-adjustments/' + row.stock_adjustment_id });
        }
    }
});

/***/ }),

/***/ 337:
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
          _c(
            "div",
            { staticClass: "btn-toolbar pull-right" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary btn-outline",
                  attrs: { to: "/inventory/stock-adjustments/new" }
                },
                [_vm._v("\n        Add New\n      ")]
              ),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [_vm._v("Stock Adjustments")])
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
          rows: _vm.stockAdjustments,
          paginate: true,
          lineNumbers: true,
          styleClass: _vm.styleClass
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success btn-icon-icon btn-md mr5" },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d619c9c", module.exports)
  }
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(336)
/* template */
var __vue_template__ = __webpack_require__(337)
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
Component.options.__file = "resources\\assets\\js\\components\\StockAdjustments\\AllStockAdjustments.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d619c9c", Component.options)
  } else {
    hotAPI.reload("data-v-0d619c9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});