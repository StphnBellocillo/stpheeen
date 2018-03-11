webpackJsonp([15],{

/***/ 353:
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

    methods: {

        fetchData: function fetchData() {
            var _this = this;

            this.$http.get(url + '/api/rooms').then(function (response) {
                _this.$set(_this, 'rooms', response.data);
            });
        }
    }

});

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\nul.nav-reports {\n    margin-bottom: 0;\n    padding-left: 0;\n    list-style: none;\n    font-family: 'Proxima Nova Regular','Arial',sans-serif;\n}\nul.nav-reports a li  {\n    padding: 10px;\n    border-bottom: 1px dashed #E9E9E9;\n    color: #206ec5;\n    font-size: 15px;\n}\n\n", ""]);

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-md-4",
    staticStyle: {
      "margin-right": "100px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("Inventory")]), _vm._v(" "), _c('ul', {
    staticClass: "nav-reports"
  }, [_c('router-link', {
    attrs: {
      "to": "/reports/per-rmr"
    }
  }, [_c('li', [_vm._v("\n                    ❯ Returned Materials By Customer\n                ")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("Sales")]), _vm._v(" "), _c('ul', {
    staticClass: "nav-reports"
  }, [_c('router-link', {
    attrs: {
      "to": "/reports/per-salespersons"
    }
  }, [_c('li', [_vm._v("❯ Reports By Salesperson  ")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/reports/per-principal"
    }
  }, [_c('li', [_vm._v("❯ Reports By Principal ")])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/reports/invoice-register"
    }
  }, [_c('li', [_vm._v("❯ Invoice Register ")])])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Reports")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('li', [_vm._v("\n                    ❯ Active Purchase Orders Report (N/A)\n                ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('li', [_vm._v("\n                    ❯ Inventory Valuation Summary (N/A)\n                ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('li', [_vm._v("❯ Payments Received (N/A)")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c307162", module.exports)
  }
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("157e21a6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c307162\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reports.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c307162\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reports.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(491)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(353),
  /* template */
  __webpack_require__(438),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Reports\\Reports.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Reports.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c307162", Component.options)
  } else {
    hotAPI.reload("data-v-4c307162", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});