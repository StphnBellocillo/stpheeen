webpackJsonp([71],{

/***/ 305:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(443),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Dashboard\\Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56740368", Component.options)
  } else {
    hotAPI.reload("data-v-56740368", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row",
    staticStyle: {
      "font-family": "'Proxima Nova'",
      "font-size": "13px"
    }
  }, [_c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v("\n      WareVent - a warehouse & inventory management solution\n\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-offset-1 col-md-10"
  }, [_c('div', {
    staticClass: "card bg-white"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h3', [_vm._v(" Keep track of your sales ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/sales-orders/new"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-file fa-2x"
  }), _vm._v(" Create Sales Orders\n              ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/contacts"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-heart-o fa-2x"
  }), _vm._v(" My Contacts\n              ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h3', [_vm._v(" Keep track of your purchases ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/purchase-orders/new"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-file-text fa-2x"
  }), _vm._v(" Create Purchase Orders\n              ")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h3', [_vm._v(" Monitor your inventory ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/items"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-gift fa-2x"
  }), _vm._v(" My Items\n              ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/settings/warehouses"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-building-o fa-2x"
  }), _vm._v(" My Warehouses\n              ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/inventory"
    }
  }, [_c('p', [_c('i', {
    staticClass: "icon-layers fa-2x"
  }), _vm._v(" My Inventory\n              ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h3', [_vm._v(" Generate reports ")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/reports/per-rmr"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-file-text fa-2x"
  }), _vm._v(" Returned Materials By Customer\n              ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/reports/per-salespersons"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-file-text fa-2x"
  }), _vm._v(" Reports By SalesPerson\n              ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/reports/per-principal"
    }
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-file-text fa-2x"
  }), _vm._v(" Reports By Principal\n              ")])])], 1)])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "title",
    attrs: {
      "align": "center"
    }
  }, [_vm._v("Welcome Aboard")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-header bg-success text-white"
  }, [_c('div', {
    staticClass: "pull-left"
  }, [_c('h4', [_vm._v(" Ready to start working ? ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-controls"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56740368", module.exports)
  }
}

/***/ })

});