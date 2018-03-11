webpackJsonp([22],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.$upload.new('profile-avatar', {
      url: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv',
      extensions: false,
      onSuccess: function onSuccess(res) {
        console.log("success uploading avatar");
        // this.$msgbag.success('Avatar uploaded successfully.');
      },
      onError: function onError() {
        console.log("error uploading avatar");
        // this.$msgbag.error('Error uploading avatar.');
      }
    });
  },
  mounted: function mounted() {
    this.fetchInvoices();
    this.$upload.reset('profile-avatar', {
      url: __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv'
    });
  },
  data: function data() {
    return {
      csvFile: null,
      invoices: [],
      error: null,
      loading: false,
      styleClass: 'table table-hover',
      columns: [{
        label: 'DATE',
        field: 'inv_date',
        type: 'string',
        html: false,
        width: '150px',
        filterable: true
      }, {
        label: 'INVOICE #',
        field: 'inv_no',
        type: 'numeric',
        html: false,
        filterable: true,
        width: '180px'
      }, {
        label: 'CUSTOMER NAME',
        field: 'contact_company_name',
        html: false,
        filterable: true,
        width: '300px'
      }, {
        label: 'STATUS',
        field: 'inv_status',
        html: false,
        width: '100px'
      }, {
        label: 'REFERENCE #',
        field: 'inv_ref_no',
        html: false,
        filterable: true,
        width: '100px'
      }, {
        label: 'AMOUNT (PHP)',
        field: 'inv_total_amount',
        html: false,
        width: '100px'
      }]
    };
  },


  methods: {
    processFileImport: function processFileImport(e) {

      var files = e.target.files || e.dataTransfer.files;
      this.csvFile = files[0];
      // this.createFile(files[0])
    },
    createFile: function createFile(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = function (e) {
        vm.csvFile = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadFile: function uploadFile() {
      var _this = this;

      this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices/events/import-csv', { csvFile: this.csvFile }).then(function (response) {
        _this.loading = false;
      }, function (response) {
        // error
        _this.error = response.status;
        _this.loading = false;
      });
    },
    fetchInvoices: function fetchInvoices() {
      var _this2 = this;

      this.loading = true;
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/invoices').then(function (response) {
        _this2.$set(_this2, 'invoices', response.data);
        _this2.loading = false;
      }, function (response) {

        // error
        _this2.error = response.status;
        _this2.loading = false;
      });
    },
    viewData: function viewData(row) {
      this.$router.push({ path: '/invoices/' + row.inv_id });
    }
  }
});

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\ntable tr {\n  background: #fff;\n  font-size: 12px;\n  font-family: 'Arial';\n}\n", ""]);

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    staticClass: "page-title"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Invoices")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" An error occured while we load your data. ")])]), _vm._v(" "), _c('vue-good-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    attrs: {
      "onClick": _vm.viewData,
      "columns": _vm.columns,
      "rows": _vm.invoices,
      "paginate": true,
      "lineNumbers": true,
      "styleClass": _vm.styleClass
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-import-csv"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', [_c('button', {
    attrs: {
      "disabled": _vm.$upload.meta('profile-avatar').status === 'sending'
    },
    on: {
      "click": function($event) {
        _vm.$upload.select('profile-avatar')
      }
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.$upload.meta('profile-avatar').status === 'sending'),
      expression: "$upload.meta('profile-avatar').status === 'sending'"
    }]
  }, [_vm._v("Updating...")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.$upload.meta('profile-avatar').status === 'sending'),
      expression: "!$upload.meta('profile-avatar').status === 'sending'"
    }]
  }, [_vm._v("Update Photo")])])]), _vm._v(" "), (_vm.$upload.files('profile-avatar').error.length) ? _c('div', [_vm._v("\n    " + _vm._s(_vm.$upload.files('profile-avatar').error[0].errors[0].message) + "\n")]) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "action": "",
      "method": "POST",
      "role": "form",
      "enctype": "multipart/form-data"
    }
  }, [_c('legend', [_vm._v("Select CSV File")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Filename")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": function($event) {
        _vm.processFileImport($event)
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.uploadFile()
      }
    }
  }, [_vm._v("Import")])])]), _vm._v(" "), _vm._m(2)])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('button', {
    staticClass: "btn btn-success btn-icon-icon btn-md mr5"
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Import CSV File")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Cancel")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-180b915b", module.exports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(487)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(407),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Invoices\\AllInvoices.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AllInvoices.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-180b915b", Component.options)
  } else {
    hotAPI.reload("data-v-180b915b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(384);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9d67ebbc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-180b915b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllInvoices.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-180b915b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllInvoices.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});