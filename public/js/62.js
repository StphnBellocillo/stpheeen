webpackJsonp([62],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var url = 'http://inventory.ctesales.ph/api/v1';
/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        console.log('Room Component ready.');
        this.fetchItems();
    },


    data: function data() {
        return {
            items: []
        };
    },

    methods: {

        fetchItems: function fetchItems() {
            var _this = this;

            this.$http.get(url + '/items').then(function (response) {

                _this.$set(_this, 'items', response.data);
            });
        },
        viewData: function viewData() {
            this.$router.push({ path: '/adjustments/1' });
        }
    }

});

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('router-link', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "to": "/adjustments/new"
    }
  }, [_vm._v("\n               ADD New\n            ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Inventory Adjustments")])]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover "
  }, [_vm._m(1), _vm._v(" "), _c('tbody', [_c('tr', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": function($event) {
        _vm.viewData()
      }
    }
  }, [_c('td', [_vm._v(" 04/26/17 ")]), _vm._v(" "), _c('td', [_vm._v(" Damaged Goods ")]), _vm._v(" "), _c('td', [_vm._v(" Return to vendor  ")]), _vm._v(" "), _c('td', [_vm._v(" REF#12345 ")]), _vm._v(" "), _c('td', [_vm._v(" Quantity ")]), _vm._v(" "), _c('td', [_vm._v(" Raymund ")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-success btn-icon-icon btn-md mr5"
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("DATE")]), _vm._v(" "), _c('th', [_vm._v("REASON")]), _vm._v(" "), _c('th', [_vm._v("DESC")]), _vm._v(" "), _c('th', [_vm._v("REFENCE #")]), _vm._v(" "), _c('th', [_vm._v("ADJUSTMENT TYPE")]), _vm._v(" "), _c('th', [_vm._v("ADJUSTED BY")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b992c04", module.exports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Items\\AllItemAdjustments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AllItemAdjustments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b992c04", Component.options)
  } else {
    hotAPI.reload("data-v-2b992c04", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});