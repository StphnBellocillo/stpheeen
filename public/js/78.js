webpackJsonp([78],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(472),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Auth\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1032042", Component.options)
  } else {
    hotAPI.reload("data-v-b1032042", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_localstorage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_localstorage___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {},


    data: function data() {
        return {
            formIsSubmitted: false,
            loginText: '<i class="fa fa-spinner fa-spin"></i> Logging in...',
            buttonText: 'Login',
            input: {
                email: '',
                password: ''
            },
            loginInvalid: false
        };
    },

    localStorage: {

        authUser: {

            type: Object,

            default: {

                name: 'Test',
                token: '123token'
            }

        }

    },

    methods: {
        signIn: function signIn() {
            // this.formIsSubmitted = true
            this.loginInvalid = false;
            console.log(this.input);
            var signIn = __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */].login(this, this.input, '/');
        }
    }
});

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "app signin usersession"
  }, [_c('div', {
    staticClass: "session-wrapper"
  }, [_c('div', {
    staticClass: "page-height-o row-equal align-middle"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "card bg-white no-border"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-layout",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "text-center m-b"
  }, [_c('h4', {
    staticClass: "text-uppercase"
  }, [_vm._v("Welcome back")]), _vm._v(" "), _c('p', [_vm._v("Please sign in to your account")]), _vm._v(" "), (_vm.loginInvalid) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Jeezz ! ")]), _vm._v(" Invalid username or password !  ...\n                ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-inputs"
  }, [_c('label', {
    staticClass: "text-uppercase"
  }, [_vm._v("Your email address")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input.email),
      expression: "input.email"
    }],
    staticClass: "form-control input-lg",
    attrs: {
      "type": "email",
      "placeholder": "Email Address",
      "required": ""
    },
    domProps: {
      "value": (_vm.input.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "text-uppercase"
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input.password),
      expression: "input.password"
    }],
    staticClass: "form-control input-lg",
    attrs: {
      "type": "password",
      "placeholder": "Password",
      "required": ""
    },
    domProps: {
      "value": (_vm.input.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.loginText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" Login ")]) : _vm._e()])])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b1032042", module.exports)
  }
}

/***/ })

});