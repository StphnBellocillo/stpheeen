webpackJsonp([61],{

/***/ 325:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {

    this.fetchItems();
  },

  data: function data() {
    return {
      items: [],
      styleClass: 'table table-hover',
      loading: true,
      error: null,
      columns: [{
        label: 'ITEM ID',
        field: 'item_id',
        type: 'string',
        html: false,
        filterable: true
      }, {
        label: 'SKU',
        field: 'item_sku',
        type: 'string',
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

      }]

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
    },
    viewItem: function viewItem(row) {
      this.$router.push({ path: '/items/' + row.item_id });
    },
    exportToExcel: function exportToExcel() {
      window.open('/exports/excel/' + __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].getCorporationId(this) + '/items', '_blank');
    }
  }

});

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('router-link', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "to": "/items/new"
    }
  }, [_vm._v("\n               ADD New\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "title": "Export to excel",
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.exportToExcel()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-file-excel-o",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Items")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_c('div', {
    staticClass: "load-error"
  }, [_vm._v(" " + _vm._s(_vm.error))]), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" An error occured while we load your data. ")])]), _vm._v(" "), _c('div', [_c('vue-good-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    attrs: {
      "columns": _vm.columns,
      "rows": _vm.items,
      "paginate": true,
      "lineNumbers": true,
      "onClick": _vm.viewItem,
      "styleClass": _vm.styleClass
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05ab1b6b", module.exports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(325),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Items\\AllItems.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AllItems.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05ab1b6b", Component.options)
  } else {
    hotAPI.reload("data-v-05ab1b6b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});