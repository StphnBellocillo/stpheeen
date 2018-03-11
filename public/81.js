webpackJsonp([81],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.action = this.$route.query.action;
        this.selectedCorporationId = this.$route.query.corp_id;
        this.selectedCorporationName = this.$route.query.corp_name;
        this.determineAction(this.action);
    },


    data: function data() {
        return {

            action: null,
            selectedCorporationId: null,
            selectedCorporationName: null

        };
    },

    methods: {

        fetchCurrencies: function fetchCurrencies() {
            var _this = this;

            this.$http.get(url + '/currencies').then(function (response) {
                _this.$set(_this, 'currencies', response.data);
            });
        },
        determineAction: function determineAction(action) {

            if (action == 'switch-organization') {

                this.processSwitchingOfOrganization();
            }
        },
        processSwitchingOfOrganization: function processSwitchingOfOrganization() {

            __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].switchOrganization(this, this.selectedCorporationId, this.selectedCorporationName);

            window.location.href = '/';
        }
    }

});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(482)
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Settings\\SystemSetup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a8b40ac", Component.options)
  } else {
    hotAPI.reload("data-v-4a8b40ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});