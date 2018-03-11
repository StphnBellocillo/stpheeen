webpackJsonp([17],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(316)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(318)
/* template */
var __vue_template__ = __webpack_require__(319)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\GatePasses\\AllGatePasses.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5efe5250", Component.options)
  } else {
    hotAPI.reload("data-v-5efe5250", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("df314caa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5efe5250\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllGatePasses.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5efe5250\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllGatePasses.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\ntable tr {\n  font-size: 12px;\n  font-family: 'Proxima Nova';\n}\n\n", ""]);

// exports


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.fetchGatePasses();
    },


    data: function data() {
        return {
            styleClass: 'table table-hover',
            gatepasses: [],
            error: false,
            loading: false,
            columns: [{
                label: 'DATE',
                field: 'gate_pass_date_issued',
                type: 'string',
                html: false,
                width: '150px',
                filterable: true
            }, {
                label: 'PICKLIST #',
                field: 'gate_pass_no',
                type: 'number',
                html: false,
                filterable: true,
                width: '90px'
            }, {
                label: 'PICKLIST REFERENCE #',
                field: 'gate_pass_ref_no',
                type: 'number',
                html: false,
                filterable: true,
                width: '180px'
            }, {
                label: 'STATUS',
                field: 'gate_pass_status',
                html: false,
                filterable: true,
                width: '100px'
            }]
        };
    },

    methods: {

        fetchGatePasses: function fetchGatePasses() {
            var _this = this;

            this.loading = true;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/gate-passes').then(function (response) {

                _this.$set(_this, 'gatepasses', response.data);
                _this.loading = false;
            }, function (response) {

                _this.loading = false;
                _this.error = response.status;
            });
        },

        viewData: function viewData(row) {
            this.$router.push({ path: '/gate-passes/' + row.gate_pass_id });
        }
    }

});

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.loading && !_vm.error,
              expression: "!loading && !error"
            }
          ],
          staticClass: "page-title"
        },
        [_c("div", { staticClass: "title" }, [_vm._v("Gate Passes")])]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticStyle: { "margin-top": "14rem" },
          attrs: { align: "center" }
        },
        [
          _c("i", { staticClass: "fa fa-spinner fa-spin fa-3x fa-fw" }),
          _vm._v(" "),
          _c(
            "p",
            {
              staticStyle: {
                "font-size": "13px",
                "font-family": "Proxima Nova Regular",
                "margin-top": "5px"
              }
            },
            [_vm._v(" Preparing data... ")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.error,
              expression: "error"
            }
          ]
        },
        [
          _c("div", { staticClass: "load-error" }, [
            _vm._v(" " + _vm._s(_vm.error))
          ]),
          _vm._v(" "),
          _c("p", { attrs: { align: "center" } }, [
            _vm._v(" An error occured while we load your data. ")
          ])
        ]
      ),
      _vm._v(" "),
      _c("vue-good-table", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading && !_vm.error,
            expression: "!loading && !error"
          }
        ],
        attrs: {
          onClick: _vm.viewData,
          columns: _vm.columns,
          rows: _vm.gatepasses,
          paginate: true,
          lineNumbers: true,
          styleClass: _vm.styleClass
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5efe5250", module.exports)
  }
}

/***/ })

});