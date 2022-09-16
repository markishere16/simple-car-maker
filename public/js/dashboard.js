(self["webpackChunk"] = self["webpackChunk"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      cardheaders: [{
        title: "Total Cars",
        icon: 'mdi-car',
        count: 0
      }, {
        title: "Total Manufacturers",
        icon: 'mdi-watermark',
        count: 0
      }, {
        title: "Total Car Types",
        icon: 'mdi-car-settings',
        count: 0
      }, {
        title: "Total Car Colors",
        icon: 'mdi-palette',
        count: 0
      }]
    };
  },
  mounted: function mounted() {
    this.getoverview();
  },
  methods: {
    getoverview: function getoverview() {
      var _this = this;

      //this.isGetting = true;
      axios.get("/api/car/overview").then(function (res) {
        _this.cardheaders[0].count = res.data.total_cars;
        _this.cardheaders[1].count = res.data.total_manufacturers;
        _this.cardheaders[2].count = res.data.total_types;
        _this.cardheaders[3].count = res.data.total_colors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-row", {
    staticClass: "pt-4"
  }, _vm._l(_vm.cardheaders, function (item, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12",
        lg: "3",
        md: "6",
        sm: "12",
        xs: "12"
      }
    }, [_c("v-card", [_c("v-card-title", {
      staticClass: "pb-0 py-1 cardTitle"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c("v-card-text", {
      staticClass: "pb-0"
    }, [_c("v-row", {
      attrs: {
        align: "center"
      }
    }, [_c("v-col", {
      staticClass: "text-h3 primary--text",
      attrs: {
        cols: "6"
      }
    }, [_vm._v("\n                            " + _vm._s(item.count) + "\n                        ")]), _vm._v(" "), _c("v-col", {
      staticClass: "text-right",
      attrs: {
        cols: "6"
      }
    }, [_c("v-icon", {
      staticClass: "text-h2",
      staticStyle: {
        "font-size": "2 rem"
      }
    }, [_vm._v(_vm._s(item.icon))])], 1)], 1)], 1)], 1)], 1);
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=e1aead0a& */ "./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_e1aead0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=e1aead0a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard.vue?vue&type=template&id=e1aead0a&");


/***/ })

}]);