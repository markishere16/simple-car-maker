(self["webpackChunk"] = self["webpackChunk"] || []).push([["cars"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['action_type', 'car'],
  data: function data() {
    return {
      valid: false,
      isloading: false,
      name_rules: [function (v) {
        return !!v || 'required';
      }],
      select_rules: [function (v) {
        return !!v || "required";
      }],
      form_data: {
        id: null,
        name: '',
        manufacturer: null,
        color: null,
        type: null
      }
    };
  },
  mounted: function mounted() {
    if (this.action_type == 'edit') {
      this.form_data = this.car;
    } else {
      this.resetForm();
    }
  },
  methods: {
    validate: function validate() {
      this.isloading = true;

      if (this.$refs.form.validate()) {
        this.upsertType();
      } else {
        this.isloading = false;
      }
    },
    resetForm: function resetForm() {
      this.form_data = {
        id: null,
        name: '',
        manufacturer: null,
        color: null,
        type: null
      };
    },
    upsertType: function upsertType() {
      var _this = this;

      if (this.action_type == 'add') {
        this.$store.dispatch('insertCar', {
          vm: this,
          payload: this.form_data
        }).then(function () {
          _this.isloading = false;

          _this.$emit('closeDialog');
        });
      } else {
        this.form_data.id = this.car.id;
        this.$store.dispatch('updateCar', {
          vm: this,
          payload: this.form_data
        }).then(function () {
          _this.isloading = false;

          _this.$emit('closeDialog');
        })["catch"](function () {
          _this.car = _this.form_data;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['cars'],
  data: function data() {
    return {
      headers: [{
        text: 'ID',
        value: 'car',
        align: 'start'
      }, {
        text: 'Name',
        value: 'name',
        align: 'start'
      }, {
        text: 'Manufacturer',
        value: 'manufacturer',
        align: 'start'
      }, {
        text: 'Manufacturer',
        value: 'manufacturer',
        align: 'start'
      }, {
        text: 'Color',
        value: 'color',
        align: 'start'
      }, {
        text: 'Actions',
        value: 'status',
        align: 'center'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['action_type', 'car'],
  data: function data() {
    return {
      isloading: false
    };
  },
  methods: {
    deleteCar: function deleteCar() {
      var _this = this;

      this.$store.dispatch('deleteCar', {
        vm: this,
        payload: this.car
      }).then(function () {
        _this.isloading = false;

        _this.$emit('closeDialog');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_car_carForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/car/carForm.vue */ "./resources/js/components/car/carForm.vue");
/* harmony import */ var _components_car_deleteForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/car/deleteForm.vue */ "./resources/js/components/car/deleteForm.vue");
/* harmony import */ var _components_car_carTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/car/carTable.vue */ "./resources/js/components/car/carTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      ComponentKey: 0,
      dialog: false,
      selected_car: null,
      action_type: '',
      properties: []
    };
  },
  components: {
    carForm: _components_car_carForm_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    deleteForm: _components_car_deleteForm_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    carTableVue: _components_car_carTable_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    this.$store.dispatch('fetchCars');
    this.$store.dispatch('fetchCarProperties');
  },
  methods: {
    closeDialog: function closeDialog() {
      this.dialog = !this.dialog;
    },
    openAddDialog: function openAddDialog() {
      this.dialog = true;
      this.action_type = 'add';
    },
    openEditDialog: function openEditDialog(car) {
      this.dialog = true;
      this.selected_car = car;
      this.action_type = 'edit';
    },
    openDeleteDialog: function openDeleteDialog(car) {
      this.dialog = true;
      this.selected_car = car;
      this.action_type = 'delete';
    }
  }
});

/***/ }),

/***/ "./resources/js/components/car/carForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/car/carForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carForm.vue?vue&type=template&id=65b6dc02& */ "./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02&");
/* harmony import */ var _carForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carForm.vue?vue&type=script&lang=js& */ "./resources/js/components/car/carForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _carForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__.render,
  _carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/car/carForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/car/carTable.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/car/carTable.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carTable.vue?vue&type=template&id=71600d80& */ "./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80&");
/* harmony import */ var _carTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carTable.vue?vue&type=script&lang=js& */ "./resources/js/components/car/carTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _carTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__.render,
  _carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/car/carTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/car/deleteForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/car/deleteForm.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteForm.vue?vue&type=template&id=3c80af96& */ "./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96&");
/* harmony import */ var _deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteForm.vue?vue&type=script&lang=js& */ "./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/car/deleteForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/cars.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/cars.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.vue?vue&type=template&id=80d9caf0& */ "./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0&");
/* harmony import */ var _cars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars.vue?vue&type=script&lang=js& */ "./resources/js/pages/cars.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _cars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__.render,
  _cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/cars.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/car/carForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/car/carForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/car/carTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/car/carTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/cars.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/cars.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carForm_vue_vue_type_template_id_65b6dc02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carForm.vue?vue&type=template&id=65b6dc02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02&");


/***/ }),

/***/ "./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carTable_vue_vue_type_template_id_71600d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carTable.vue?vue&type=template&id=71600d80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80&");


/***/ }),

/***/ "./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_3c80af96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteForm.vue?vue&type=template&id=3c80af96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96&");


/***/ }),

/***/ "./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cars_vue_vue_type_template_id_80d9caf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cars.vue?vue&type=template&id=80d9caf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carForm.vue?vue&type=template&id=65b6dc02& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validate($event)
                }
              },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [
                  _vm._v(
                    "\r\n                    " +
                      _vm._s(
                        _vm.action_type == "add" ? "Add Type" : "Edit Type"
                      ) +
                      "\r\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    ref: "name",
                    attrs: {
                      rules: _vm.name_rules,
                      type: "text",
                      label: "Car Name",
                      placeholder: "Ranger, Model X, etc"
                    },
                    model: {
                      value: _vm.form_data.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form_data, "name", $$v)
                      },
                      expression: "form_data.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      rules: _vm.select_rules,
                      items:
                        _vm.$store.getters.get_car_properties.manufacturers,
                      label: "Manufacturer",
                      "return-object": "",
                      "item-text": "name",
                      dense: ""
                    },
                    model: {
                      value: _vm.form_data.manufacturer,
                      callback: function($$v) {
                        _vm.$set(_vm.form_data, "manufacturer", $$v)
                      },
                      expression: "form_data.manufacturer"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      rules: _vm.select_rules,
                      items: _vm.$store.getters.get_car_properties.types,
                      label: "Type",
                      "return-object": "",
                      "item-text": "name",
                      dense: ""
                    },
                    model: {
                      value: _vm.form_data.type,
                      callback: function($$v) {
                        _vm.$set(_vm.form_data, "type", $$v)
                      },
                      expression: "form_data.type"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      rules: _vm.select_rules,
                      items: _vm.$store.getters.get_car_properties.colors,
                      label: "Color",
                      "return-object": "",
                      "item-text": "name",
                      dense: ""
                    },
                    model: {
                      value: _vm.form_data.color,
                      callback: function($$v) {
                        _vm.$set(_vm.form_data, "color", $$v)
                      },
                      expression: "form_data.color"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("closeDialog")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Close\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        type: "submit",
                        loading: _vm.isloading,
                        disabled: !_vm.valid || _vm.isloading
                      }
                    },
                    [_vm._v("\r\n                    Save\r\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/carTable.vue?vue&type=template&id=71600d80& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.cars, "items-per-page": 10 },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function(ref) {
              var items = ref.items
              return [
                _c(
                  "tbody",
                  [
                    _vm._l(items, function(car) {
                      return _c("tr", { key: car.id }, [
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(car.id) + " ")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(car.name) +
                              " \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(car.manufacturer.name) +
                              " \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(car.type.name) +
                              " \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(car.color.name) +
                              " \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: { color: "green", dark: "", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("openEditDialog", car)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { left: "" } }, [
                                  _vm._v(
                                    "\n                                mdi-pencil\n                            "
                                  )
                                ]),
                                _vm._v(
                                  "\n                            Edit\n                        "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: { color: "red", dark: "", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("openDeleteDialog", car)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { left: "" } }, [
                                  _vm._v(
                                    "\n                                mdi-delete\n                            "
                                  )
                                ]),
                                _vm._v(
                                  "\n                            Delete\n                        "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    _vm._v(" "),
                    items.length == 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              attrs: { colspan: "100" }
                            },
                            [
                              _vm._v(
                                "\n                        No data available\n                    "
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/car/deleteForm.vue?vue&type=template&id=3c80af96& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-form",
            { ref: "form", attrs: { "lazy-validation": "" } },
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [_vm._v("Delete")])
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v("\n                Are you sure you want to delete "),
                _c("b", [_vm._v(_vm._s(_vm.car.name))])
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("closeDialog")
                        }
                      }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        loading: _vm.isloading,
                        disabled: _vm.isloading
                      },
                      on: { click: _vm.deleteCar }
                    },
                    [_vm._v("\n                    Yes\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cars.vue?vue&type=template&id=80d9caf0& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5" },
    [
      _c(
        "v-card",
        { attrs: { elevation: "4" } },
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n            Cars\n            "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { width: "50%" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.openAddDialog }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v(
                          "\n                        mdi-plus\n                    "
                        )
                      ]),
                      _vm._v("\n                    Add Cars\n                ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c("carTableVue", {
            key: _vm.ComponentKey,
            attrs: { cars: _vm.$store.getters.get_cars },
            on: {
              openEditDialog: _vm.openEditDialog,
              openDeleteDialog: _vm.openDeleteDialog
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm.action_type != "delete" && _vm.dialog
            ? _c("carForm", {
                key: _vm.ComponentKey,
                attrs: { action_type: _vm.action_type, car: _vm.selected_car },
                on: { closeDialog: _vm.closeDialog }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.action_type == "delete" && _vm.dialog
            ? _c("deleteForm", {
                key: _vm.ComponentKey,
                attrs: { action_type: _vm.action_type, car: _vm.selected_car },
                on: {
                  closeDialog: function($event) {
                    _vm.dialog = !_vm.dialog
                  }
                }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);