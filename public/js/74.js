webpackJsonp([74],{

/***/ 301:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mounted: function mounted() {},


    data: function data() {
        return {

            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',

            newContact: {
                contact_salutation: null,
                contact_fname: null,
                contact_lname: null,
                contact_suffix: null,
                contact_email: null,
                contact_mobile: null,
                contact_phone: null,
                contact_designation: null,
                contact_department: null,
                contact_company_name: null,
                contact_display_name: null,
                contact_remarks: null,
                contact_tin_no: null,
                contact_payment_terms: null,
                contact_district: null,
                contact_classification: null,
                contact_city: null,
                contact_country: null,
                contact_brgy: null,
                contact_street: null,
                contact_zip: null
            },
            errors: []
        };
    },

    methods: {
        addContact: function addContact() {
            var _this = this;

            this.formIsSubmitted = true;
            this.newContact.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/contacts/create', this.newContact).then(function (response) {

                alert('Contact has been added !');
                _this.$router.push({ path: '/contacts/' + response.data.contact_id });
                console.log(response);
                _this.loading = false;
                _this.formIsSubmitted = false;
            }, function (response) {
                this.formIsSubmitted = false;
                this.errors = response.data;
                this.error = response.data.statusText;
            });
        }
    }

});

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(301),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Contacts\\AddContact.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddContact.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fcf942e", Component.options)
  } else {
    hotAPI.reload("data-v-2fcf942e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('router-link', {
    staticClass: "text-link",
    attrs: {
      "to": "/contacts"
    }
  }, [_c('i', {
    staticClass: "icon-arrow-left"
  }), _vm._v(" Back to Contacts\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("New Contact")])]), _vm._v(" "), (_vm.errors.length != 0) ? _c('div', {
    ref: "formErrors",
    staticClass: "alert",
    staticStyle: {
      "background": "#f0f0f0"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.errors), function(error) {
    return _c('li', {
      staticStyle: {
        "color": "#fd1414"
      }
    }, [_vm._v("\n          " + _vm._s(error[0]) + "\n      ")])
  })], 2) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "striped"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label"
  }, [_vm._v("Contact Type")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_type_id),
      expression: "newContact.contact_type_id"
    }],
    attrs: {
      "name": "optradio",
      "type": "radio",
      "checked": "checked",
      "value": "2"
    },
    domProps: {
      "checked": _vm._q(_vm.newContact.contact_type_id, "2")
    },
    on: {
      "__c": function($event) {
        _vm.newContact.contact_type_id = "2"
      }
    }
  }), _vm._v("\n                                Client/Customer\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_type_id),
      expression: "newContact.contact_type_id"
    }],
    attrs: {
      "name": "optradio",
      "type": "radio",
      "value": "3"
    },
    domProps: {
      "checked": _vm._q(_vm.newContact.contact_type_id, "3")
    },
    on: {
      "__c": function($event) {
        _vm.newContact.contact_type_id = "3"
      }
    }
  }), _vm._v("\n                                Employee\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_type_id),
      expression: "newContact.contact_type_id"
    }],
    attrs: {
      "name": "optradio",
      "type": "radio",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.newContact.contact_type_id, "1")
    },
    on: {
      "__c": function($event) {
        _vm.newContact.contact_type_id = "1"
      }
    }
  }), _vm._v("\n                                Principal/Supplier\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_type_id),
      expression: "newContact.contact_type_id"
    }],
    attrs: {
      "name": "optradio",
      "type": "radio",
      "value": "4"
    },
    domProps: {
      "checked": _vm._q(_vm.newContact.contact_type_id, "4")
    },
    on: {
      "__c": function($event) {
        _vm.newContact.contact_type_id = "4"
      }
    }
  }), _vm._v("\n                                Others\n                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_fname),
      expression: "newContact.contact_fname"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Firstname",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_fname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_fname = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_lname),
      expression: "newContact.contact_lname"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Lastname",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_lname)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_lname = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field "
  }, [_vm._v("Company  \n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_company_name),
      expression: "newContact.contact_company_name"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Company Name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_company_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_company_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_department),
      expression: "newContact.contact_department"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Department",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_department)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_department = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_designation),
      expression: "newContact.contact_designation"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Designation",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_designation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_designation = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Contact Display Name\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_display_name),
      expression: "newContact.contact_display_name"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_display_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_display_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Email\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_email),
      expression: "newContact.contact_email"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Contact Numbers\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_phone),
      expression: "newContact.contact_phone"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Work Phone",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_mobile),
      expression: "newContact.contact_mobile"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Mobile",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_mobile = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("TIN # \n                   \n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_tin_no),
      expression: "newContact.contact_tin_no"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_tin_no)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_tin_no = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label"
  }, [_vm._v("District\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_district),
      expression: "newContact.contact_district"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_district)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_district = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("Classification\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_classification),
      expression: "newContact.contact_classification"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_classification)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_classification = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("\n                    Payment Terms\n                    ")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_payment_terms),
      expression: "newContact.contact_payment_terms"
    }],
    staticClass: "form-control",
    staticStyle: {
      "width": "41%"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newContact.contact_payment_terms = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Due On Receipt"
    }
  }, [_vm._v("Due On Receipt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Net 7"
    }
  }, [_vm._v("Net 7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Net 15"
    }
  }, [_vm._v("Net 15")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Net 30"
    }
  }, [_vm._v("Net 30")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Net 45"
    }
  }, [_vm._v("Net 45")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Net 60"
    }
  }, [_vm._v("Net 60")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "End of Next Month"
    }
  }, [_vm._v("End of Next Month")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("\n                    Address\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_brgy),
      expression: "newContact.contact_brgy"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Barangay name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_brgy)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_brgy = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_street),
      expression: "newContact.contact_street"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Street",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_street)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_street = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_city),
      expression: "newContact.contact_city"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "City",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_city = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_country),
      expression: "newContact.contact_country"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Country",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_country)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_country = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_zip),
      expression: "newContact.contact_zip"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "placeholder": "Zip Code",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newContact.contact_zip)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_zip = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label "
  }, [_vm._v("\n                        Remarks \n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newContact.contact_remarks),
      expression: "newContact.contact_remarks"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "required": "required"
    },
    domProps: {
      "value": (_vm.newContact.contact_remarks)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newContact.contact_remarks = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "container-action-bottom"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addContact()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" SAVE ")]) : _vm._e()]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v(" Cancel")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_vm._v("Jeezz!"), _vm._v(" Almost there but...")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Name\n                     "), _c('i', {
    staticClass: "icon-question",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "Your primary contact person"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fcf942e", module.exports)
  }
}

/***/ })

});