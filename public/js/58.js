webpackJsonp([58],{

/***/ 331:
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

var url = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {

    console.log('Room Component ready.');
    // this.fetchData()
  },


  data: function data() {
    return {
      rooms: []
    };
  },

  methods: {}

});

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Packages")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-cube"
  }), _vm._v(" Packages, Not Shipped")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('a', {
    staticClass: "list-group-item ",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 1")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 2")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-info"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-truck"
  }), _vm._v(" Shipped Packages")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('a', {
    staticClass: "list-group-item ",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 1")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 2")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-success"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v(" Delivered Packages")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('a', {
    staticClass: "list-group-item ",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 1")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("Package 2")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Content goes here")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69b6a82e", module.exports)
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(453),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Packages\\AllPackages.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AllPackages.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69b6a82e", Component.options)
  } else {
    hotAPI.reload("data-v-69b6a82e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});