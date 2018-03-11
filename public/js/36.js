webpackJsonp([36],{

/***/ 371:
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

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "no-padding"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('settings-menu')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('router-view')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08bce202", module.exports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(371),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\Settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Settings.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08bce202", Component.options)
  } else {
    hotAPI.reload("data-v-08bce202", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});