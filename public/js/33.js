webpackJsonp([33],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('router-link', {
    staticClass: "btn btn-default btn-outline",
    attrs: {
      "to": "/settings/price-lists"
    }
  }, [_vm._v("Back to pricelists ")])], 1), _vm._v(" "), _c('h3', {
    staticClass: "settings-page-title"
  }, [_vm._v("Price Lists  > " + _vm._s(_vm.priceList.price_list_name) + " ")]), _c('hr'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "margin-top": "14rem"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x fa-fw"
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "13px",
      "font-family": "Proxima Nova Regular",
      "margin-top": "5px"
    }
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), (!_vm.loading) ? _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.priceList.price_list_name) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.priceListItems), function(item) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(item.item_name) + " - " + _vm._s(item.item_desc) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.item_sku) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.retail_price) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.price_list_item_original_rate) + " ")])])
  }))])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Item Name & DESC ")]), _vm._v(" "), _c('th', [_vm._v("SKU ")]), _vm._v(" "), _c('th', [_vm._v("ORIGINAL RATE ")]), _vm._v(" "), _c('th', [_vm._v("PRICELIST RATE ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-84211cda", module.exports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(375),
  /* template */
  __webpack_require__(467),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\ViewPriceList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ViewPriceList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84211cda", Component.options)
  } else {
    hotAPI.reload("data-v-84211cda", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});