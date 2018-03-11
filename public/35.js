webpackJsonp([35],{

/***/ 434:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.priceListId = this.$route.params.id;
        this.fetchPriceList();
    },


    data: function data() {
        return {

            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            loading: false,
            priceListId: null,
            error: false,
            priceList: {},
            priceListItems: []
        };
    },

    methods: {
        fetchPriceList: function fetchPriceList() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/pricelists/' + this.priceListId).then(function (response) {
                console.log(response.statusText);
                _this.$set(_this, 'priceList', response.data.pricelist);
                _this.$set(_this, 'priceListItems', response.data.items);
                _this.loading = false;
            });
        }
    }

});

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "btn-toolbar pull-right" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-default btn-outline",
            attrs: { to: "/settings/price-lists" }
          },
          [_vm._v("Back to pricelists ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-page-title" }, [
      _vm._v("Price Lists  > " + _vm._s(_vm.priceList.price_list_name) + " ")
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
    !_vm.loading
      ? _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "panel panel-default" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c("h3", { staticClass: "panel-title" }, [
                _vm._v(_vm._s(_vm.priceList.price_list_name) + " ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.priceListItems, function(item) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(
                          _vm._s(item.item_name) +
                            " - " +
                            _vm._s(item.item_desc) +
                            " "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.item_sku) + " ")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.retail_price) + " ")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(item.price_list_item_original_rate) + " ")
                      ])
                    ])
                  })
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Item Name & DESC ")]),
        _vm._v(" "),
        _c("th", [_vm._v("SKU ")]),
        _vm._v(" "),
        _c("th", [_vm._v("ORIGINAL RATE ")]),
        _vm._v(" "),
        _c("th", [_vm._v("PRICELIST RATE ")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dbafb000", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(434)
/* template */
var __vue_template__ = __webpack_require__(435)
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\ViewPriceList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dbafb000", Component.options)
  } else {
    hotAPI.reload("data-v-dbafb000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});