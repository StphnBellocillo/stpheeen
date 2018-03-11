webpackJsonp([39],{

/***/ 368:
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('h3', [_vm._v("Organization Profile")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-141f43d1", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(368),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\Organizations.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Organizations.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-141f43d1", Component.options)
  } else {
    hotAPI.reload("data-v-141f43d1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});