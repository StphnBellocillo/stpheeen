webpackJsonp([86],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(324)
/* template */
var __vue_template__ = __webpack_require__(325)
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
Component.options.__file = "resources\\assets\\js\\components\\Items\\AllItemsVueTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96db45cc", Component.options)
  } else {
    hotAPI.reload("data-v-96db45cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 324:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.fetchItems();
    },

    data: function data() {
        return {
            items: [],
            loading: true,
            error: null,
            columns: [{
                label: 'SKU',
                field: 'item_sku',
                type: 'number',
                html: false,
                width: '200px',
                filterable: true
            }, {
                label: 'ITEM NAME',
                field: 'item_name',
                html: false,
                filterable: true
            }, {
                label: 'DESCRIPTION',
                field: 'item_desc',
                html: false,
                filterable: true
            }, {
                label: 'OPENING STOCK',
                field: 'opening_stock',
                type: 'number',
                html: false,
                width: '40px'

            }, {
                label: 'RETAIL PRICE(PHP)',
                field: 'retail_price',
                type: 'float',
                html: false,
                width: '40px'

            }, {
                label: 'PURCHASE PRICE(PHP)',
                field: 'purchase_price',
                type: 'float',
                html: false,
                width: '40px'

            }],
            rows: [{ id: 1, name: "John", age: "20", btn: 0.03343 }, { id: 2, name: "Jane", age: "24", btn: 0.03343 }, { id: 3, name: "Susan", age: "16", btn: 0.03343 }, { id: 4, name: "Chris", age: "55", btn: 0.03343 }, { id: 5, name: "Dan", age: "40", btn: 0.03343 }, { id: 6, name: "John", age: "20", btn: 0.03343 }, { id: 7, name: "Jane", age: "24", btn: 0.03343 }, { id: 8, name: "Susan", age: "16", btn: 0.03343 }, { id: 9, name: "Chris", age: "55", btn: 0.03343 }, { id: 10, name: "Dan", age: "40", btn: 0.03343 }]
        };
    },

    methods: {

        fetchItems: function fetchItems() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/items').then(function (response) {

                _this.$set(_this, 'items', response.data);
                _this.loading = false;
            });
        }
    }

});

/***/ }),

/***/ 325:
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
              value: !_vm.loading,
              expression: "!loading"
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
                  attrs: { to: "/items/new" }
                },
                [_vm._v("\n                   ADD New\n                ")]
              ),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [_vm._v("Items")])
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
      [
        _c(
          "div",
          [
            _c("vue-good-table", {
              attrs: {
                columns: _vm.columns,
                rows: _vm.items,
                paginate: true,
                lineNumbers: true
              }
            })
          ],
          1
        )
      ]
    ],
    2
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
    require("vue-hot-reload-api")      .rerender("data-v-96db45cc", module.exports)
  }
}

/***/ })

});