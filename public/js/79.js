webpackJsonp([79],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);




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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(372),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\SystemSetup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74add2ff", Component.options)
  } else {
    hotAPI.reload("data-v-74add2ff", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});