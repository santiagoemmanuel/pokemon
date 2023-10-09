"use strict";
(self["webpackChunksvfac_frontend"] = self["webpackChunksvfac_frontend"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _carga_carga_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga/carga.component */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: 'carga',
  component: _carga_carga_component__WEBPACK_IMPORTED_MODULE_0__.CargaComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);




class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'svfac-frontend';
    this.showMenu = true;
    this.hideLogoutButton = false;
  }
  ngOnInit() {}
  logout() {}
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 9,
  vars: 0,
  consts: [["color", "#fafafa", 1, "navbar-principal"], ["title", "", "href", "#/home"], ["src", "/assets/pokemonletras.png", "width", "110"], [1, "spacer-by-menu20"], ["fullscreen", "", 2, "margin-top", "75px !important"], [1, "content"], [2, "padding", "5px"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-container", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6)(8, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer],
  styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #343a40;\n  color: #fff;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);\n}\n\n.content[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-width: 200px;\n  background-color: rgba(228, 228, 228, 0.35);\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.toolbar-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  margin-left: -15px;\n}\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.filler-content[_ngcontent-%COMP%] {\n  padding: 60px;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.principal-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.spacer-by-menu10[_ngcontent-%COMP%] {\n  width: 10px;\n}\n\n.spacer-by-menu20[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.navbar-principal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.logoMenarini[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.logoutEvent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: block;\n  cursor: pointer;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  border: 1px solid #343a40;\n  color: #fff;\n  background: #343a40;\n  padding: 10px 20px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=submit][_ngcontent-%COMP%]:hover {\n  background: #343a40;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDRyxXQUFBO0FBQUg7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlBOzs7Ozs7Ozs7O0VBQUE7QUFXQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcbiAgXHJcbi5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbn1cclxuICBcclxuLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjI4LCAyMjgsIDAuMzUpO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbn1cclxuXHJcbi50b29sYmFyLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4ubWVudS1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZmlsbGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuICBcclxuLnByaW5jaXBhbC1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5zcGFjZXItYnktbWVudTEwIHtcclxuICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXItYnktbWVudTIwIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gfVxyXG5cclxuXHJcblxyXG4ubmF2YmFyLXByaW5jaXBhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi8qXHJcbi5sb2dvTWVuYXJpbmlcdHsgXHJcbiAgICB3aWR0aDogNTVweDsgXHJcbiAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiXCIpIG5vLXJlcGVhdCBzY3JvbGwgbGVmdCB0b3AgdHJhbnNwYXJlbnQ7IFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IFxyXG4gICAgbWFyZ2luLXRvcDo1cHg7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7ICBcclxufVxyXG4gKi9cclxuLmxvZ29NZW5hcmluaSBhIHsgXHJcbiAgICBkaXNwbGF5OmJsb2NrOyBcclxuICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgaGVpZ2h0OjEwMCU7IFxyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG59XHJcblxyXG4ubG9nb3V0RXZlbnQgYSB7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _carga_carga_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga/carga.component */ 5474);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil/perfil.component */ 8911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [
  //{provide: MAT_DATE_LOCALE, useValue: 'es-ES' } ,
  {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true
    }
  }
  //{provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS}
  ],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _carga_carga_component__WEBPACK_IMPORTED_MODULE_2__.CargaComponent, _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__.PerfilComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule]
  });
})();

/***/ }),

/***/ 5474:
/*!******************************************!*\
  !*** ./src/app/carga/carga.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargaComponent: () => (/* binding */ CargaComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/pokemon.service */ 1879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil/perfil.component */ 8911);

















function CargaComponent_div_7_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r11.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11.nombre, " ");
  }
}
function CargaComponent_div_7_mat_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CargaComponent_div_7_mat_label_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Carnet de minoridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CargaComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "mat-card", 5)(2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-title", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tu informacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "completa la siguiente informacion de tu perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content")(9, "form", 7)(10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Pasatiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CargaComponent_div_7_mat_option_21_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field")(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "cumplea\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function CargaComponent_div_7_Template_input_dateChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.onfechaCambiada($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "mat-datepicker-toggle", 15)(29, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CargaComponent_div_7_mat_label_33_Template, 2, 0, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CargaComponent_div_7_mat_label_34_Template, 2, 0, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-card-actions")(38, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CargaComponent_div_7_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.enviarDatosPerfil(_r3.value, _r4.value, _r6.value, _r10.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.dataForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.itemsPasatiempo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.mayor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.mayor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.dataForm.valid || ctx_r0.data.imagenUrl == null);
  }
}
function CargaComponent_div_8_mat_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CargaComponent_div_8_mat_list_item_11_Template_mat_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const image_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.toggleImageSelection(image_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", image_r16.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#001 ", image_r16.nombre, "");
  }
}
function CargaComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "mat-card", 22)(2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-title", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Pokemon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Selecciona 3 pokemons para que sean de tu equipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content")(9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function CargaComponent_div_8_Template_input_keyup_enter_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.buscarFiltro());
    })("ngModelChange", function CargaComponent_div_8_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.pokemonBuscar = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CargaComponent_div_8_mat_list_item_11_Template, 5, 4, "mat-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card-actions")(13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CargaComponent_div_8_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.guardarPokemons());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.pokemonBuscar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.imagesSelected.length < 3);
  }
}
function CargaComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " HP: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Ataque: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Defensa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Defensa Especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Ataque Especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Velocidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br")(21, "br")(22, "mat-progress-bar", 32)(23, "br")(24, "mat-progress-bar", 32)(25, "br")(26, "mat-progress-bar", 32)(27, "br")(28, "mat-progress-bar", 32)(29, "br")(30, "mat-progress-bar", 32)(31, "br")(32, "mat-progress-bar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r24.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", image_r24.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[0].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[1].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[2].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[3].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[4].base_stat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", image_r24.stats[5].base_stat);
  }
}
function CargaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Mis pok\u00E9mons");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CargaComponent_div_9_div_3_Template, 33, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.imagesSelected);
  }
}
class CargaComponent {
  constructor(router, fb, pokeSrv) {
    this.router = router;
    this.fb = fb;
    this.pokeSrv = pokeSrv;
    this.mayor = true;
    this.data = {};
    this.listaPokemons = {};
    this.images = new Array();
    this.imagesSelected = new Array();
    this.imagesConfirmados = new Array();
    this.dataForm = this.fb.group({
      nombre: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pasatiempo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      cumpleAnios: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      documento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{8}-\d$/)]]
    });
    /* Etapa 2 */
    this.pokemonBuscar = "";
  }
  ngOnInit() {
    this.itemsPasatiempo = this.pasatiempos();
    //this.enviarData('','','','');
  }

  receiveDataFromChild(data) {
    this.data.imagenUrl = data.imagenUrl;
  }
  enviarDatosPerfil(nombre, pasatiempo, cumpleanios, documento) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Por favor espere..',
      html: '...',
      imageUrl: 'assets/loadingPokebola.gif',
      imageAlt: 'Custom image',
      allowOutsideClick: false,
      showConfirmButton: false,
      customClass: {
        container: 'fullscreen-alert'
      }
    });
    setTimeout(() => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
    }, 1000); // simulando loading
    //console.log("data corecta" )    
    this.data.nombre = nombre;
    this.data.pasatiempo = pasatiempo;
    this.data.cumpleanios = cumpleanios;
    this.data.edad = this.edad;
    this.data.documento = documento;
    /*
        this.data.nombre= "Emmanuel Santgiago";
        this.data.pasatiempo ="jugar  y bailar ";
        this.data.cumpleanios= new Date();
        this.data.edad = 18;
        this.data.documento = "102030-6"
        */
    this.data.etapa = 2;
    this.cargarTados();
  }
  guardarPokemons() {
    this.data.etapa = 3;
  }
  onfechaCambiada(event) {
    this.edad = this.calcularEdad(event.value);
    if (this.edad >= 18) {
      console.log('es mayor');
      this.mayor = true;
      const documentoControl = this.dataForm.get('documento');
      documentoControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{8}-\d$/)]);
      documentoControl.updateValueAndValidity();
    } else {
      console.log('es menor');
      const documentoControl = this.dataForm.get('documento');
      documentoControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
      documentoControl.updateValueAndValidity();
      this.mayor = false;
    }
  }
  calcularEdad(fechaNac) {
    let hoy = new Date();
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    const dia = hoy.getDate() - fechaNac.getDate();
    if (mes < 0 || mes === 0 && dia < 0) {
      return edad - 1;
    }
    return edad;
  }
  buscarFiltro() {
    if (this.pokemonBuscar.length > 0) {
      this.images.length = 0;
      this.pokeSrv.getPokemonByIdOrName(this.pokemonBuscar.toLocaleLowerCase()).subscribe(det => {
        this.images.push({
          url: det.sprites.front_default,
          nombre: det.name,
          selected: false,
          stats: det.stats
        });
      });
    } else {
      this.cargarTados();
    }
  }
  cargarTados() {
    this.images = new Array();
    this.pokeSrv.getPokemons().subscribe(resp => {
      this.listaPokemons = resp;
      this.listaPokemons.results.forEach(poke => {
        this.pokeSrv.getPokemonByUrl(poke.url).subscribe(det => {
          this.images.push({
            url: det.sprites.front_default,
            nombre: poke.name,
            selected: false,
            stats: det.stats
          });
        });
      });
    });
  }
  toggleImageSelection(image) {
    if (this.imagesSelected.length >= 3 && !image.selected) {
      return;
    } else if (!image.selected) {
      image.selected = !image.selected;
      this.imagesSelected.push(image);
    } else {
      let index = this.imagesSelected.findIndex(i => i.nombre === image.nombre);
      this.imagesSelected.splice(index, 1);
      image.selected = !image.selected;
    }
    //console.log(this.imagesSelected.length)    
  }

  pasatiempos() {
    return [{
      nombre: "Jugar Futbol"
    }, {
      nombre: "Jugar Basquet"
    }, {
      nombre: "Jugar Tenis"
    }, {
      nombre: "Jugar Voleibol"
    }];
  }
}
CargaComponent.ɵfac = function CargaComponent_Factory(t) {
  return new (t || CargaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_1__.PokemonService));
};
CargaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CargaComponent,
  selectors: [["app-carga"]],
  decls: 10,
  vars: 4,
  consts: [[1, "colorAzul"], [1, "row"], [1, "form-group", "col-md-6"], [3, "dataFromParent", "sendDataToParent"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "card-izquierda", 2, "width", "100%"], ["mat-card-avatar", "", 1, "example-header-image"], [3, "formGroup"], ["matInput", "", "type", "text", "maxlength", "50", "autocomplete", "off", "name", "nombre", "formControlName", "nombre"], ["inNombre", ""], ["required", "", "formControlName", "pasatiempo"], ["inPasatiempo", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "F. Inicial", "formControlName", "cumpleAnios", 3, "matDatepicker", "dateChange"], ["inCumpleanios", ""], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["matInput", "", "type", "text", "maxlength", "10", "autocomplete", "off", "name", "documento", "formControlName", "documento"], ["inDocumento", ""], ["mat-button", "", 1, "w-75", "btn", "btn-lg", "btn-primary", 2, "background-color", "royalblue", "color", "antiquewhite", 3, "disabled", "click"], [3, "value"], [1, "card-izquierda"], ["placeholder", "Buscar por codigo o nombre ", "matInput", "", "type", "text", "name", "input", "maxlength", "15", "autocomplete", "off", 1, "form-control", 3, "ngModel", "keyup.enter", "ngModelChange"], [1, "image-list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "form-group", "col-md-4"], ["alt", "miniatura", 1, "selectable-image", 3, "src"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "imagenTeam", 3, "src"], [2, "text-align", "center"], ["mode", "determinate", 3, "value"]],
  template: function CargaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u00A1Hola! Configuremos tu perfil");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "queremos conocerte mejor");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "app-perfil", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sendDataToParent", function CargaComponent_Template_app_perfil_sendDataToParent_6_listener($event) {
        return ctx.receiveDataFromChild($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CargaComponent_div_7_Template, 40, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CargaComponent_div_8_Template, 15, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CargaComponent_div_9_Template, 4, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataFromParent", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.etapa == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.etapa == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.etapa == 3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar, _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__.PerfilComponent],
  styles: ["@charset \"UTF-8\";\n.card-izquierda[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n\n.card-derecha[_ngcontent-%COMP%] {\n  max-width: 85%;\n}\n\n.default-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/verde.png\"); \n\n  align-items: center;\n  justify-content: center;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 24px;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  display: none; \n\n}\n\n.colorAzul[_ngcontent-%COMP%] {\n  color: royalblue;\n  font-weight: bold;\n}\n\n.selectable-image[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  width: calc(33.33% - 10px); \n\n  display: block; \n\n  margin: 0 auto; \n\n  width: 300%;\n}\n\n.image-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; \n\n}\n\n\n\n.selectable-image[_ngcontent-%COMP%]:not(.selected) {\n  background-color: #F0F0F0; \n\n}\n\n\n\n.selectable-image.selected[_ngcontent-%COMP%] {\n  background-color: #FFD700; \n\n}\n\n.selectable-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1); \n\n}\n\n.imagenTeam[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyZ2EvY2FyZ2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWQ7RUFDRSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSwwQ0FBQSxFQUFBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBLEVBQUEsaUNBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBLEVBQUEsd0NBQUE7RUFFQSxjQUFBLEVBQUEsK0JBQUE7RUFDQSxjQUFBLEVBQUEscUNBQUE7RUFFQSxXQUFBO0FBSEo7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBLEVBQUEsd0NBQUE7QUFKSjs7QUFTRSwyQ0FBQTtBQUNBO0VBQ0UseUJBQUEsRUFBQSx5Q0FBQTtBQU5KOztBQVNFLHdDQUFBO0FBQ0E7RUFDRSx5QkFBQSxFQUFBLDBDQUFBO0FBTko7O0FBU0U7RUFDRSxxQkFBQSxFQUFBLHVEQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jYXJkLWl6cXVpZXJkYSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTsgICAgXHJcbiAgfVxyXG5cclxuICAuY2FyZC1kZXJlY2hhIHtcclxuICAgIG1heC13aWR0aDogODUlOyAgICAgICBcclxuICB9XHJcbiAgICAgIFxyXG4gIC5kZWZhdWx0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3ZlcmRlLnBuZycpOyAvKiBpbWFnZW4gZGUgZm9uZG8gUG9rw4PCqW1vbiB2ZXJkZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAuZmlsZS1uYW1lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIE9jdWx0YSBlbCBub21icmUgZGVsIGFyY2hpdm8gKi9cclxuICB9XHJcblxyXG4gIC5jb2xvckF6dWx7XHJcbiAgICBjb2xvcjogcm95YWxibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLnNlbGVjdGFibGUtaW1hZ2UgeyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDEwcHgpOyAvKiBBbmNobyBkZWwgMzMuMzMlIGNvbiBtYXJnZW4gZGVyZWNobyAqL1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogRWxpbWluYSBlc3BhY2lvcyBlbiBibGFuY28gKi9cclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50cmEgbGEgaW1hZ2VuIGhvcml6b250YWxtZW50ZSAqL1xyXG4gICAgLy93aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAzMDAlO1xyXG4gIH1cclxuICAgICAgXHJcbiAgXHJcbiAgLmltYWdlLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogRXNwYWNpbyB1bmlmb3JtZSBlbnRyZSBsYXMgY29sdW1uYXMgKi9cclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICAvKiBFc3RpbG9zIHBhcmEgaW3Dg8KhZ2VuZXMgbm8gc2VsZWNjaW9uYWRhcyAqL1xyXG4gIC5zZWxlY3RhYmxlLWltYWdlOm5vdCguc2VsZWN0ZWQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7IC8qIEZvbmRvIGdyaXMgcGFyYSBsYXMgbm8gc2VsZWNjaW9uYWRhcyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG9zIHBhcmEgaW3Dg8KhZ2VuZXMgc2VsZWNjaW9uYWRhcyAqL1xyXG4gIC5zZWxlY3RhYmxlLWltYWdlLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7IC8qIEZvbmRvIGFtYXJpbGxvIHBhcmEgbGFzIHNlbGVjY2lvbmFkYXMgKi9cclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdGFibGUtaW1hZ2U6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmVjdG8gZGUgZXNjYWxhIGFsIHBhc2FyIGVsIG1vdXNlIHNvYnJlIGxhIGltYWdlbiAqL1xyXG4gIH1cclxuXHJcbiAgLmltYWdlblRlYW17XHJcbiAgICB3aWR0aDogODAlO1xyXG5cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8911:
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilComponent: () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);




function PerfilComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PerfilComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Pasatiempo:", ctx_r1.dataFromParent.pasatiempo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Edad: ", ctx_r1.dataFromParent.edad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Dui: ", ctx_r1.dataFromParent.documento, " ");
  }
}
function PerfilComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PerfilComponent_div_14_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.cargarImagen($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7)(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Adjuntar imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class PerfilComponent {
  constructor() {
    this.listaPokemons = {};
    this.sendDataToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  emitData() {
    this.sendDataToParent.emit(this.dataFromParent);
  }
  ngOnInit() {
    this.dataFromParent.etapa = 1;
  }
  cargarImagen(event) {
    const archivo = event.target.files[0];
    this.nombreArchivo = archivo.name;
    const reader = new FileReader();
    reader.onload = e => {
      //this.imagenUrl = e.target.result;      
      this.dataFromParent.imagenUrl = e.target.result;
      this.emitData();
    };
    reader.readAsDataURL(archivo);
  }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) {
  return new (t || PerfilComponent)();
};
PerfilComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PerfilComponent,
  selectors: [["app-perfil"]],
  inputs: {
    dataFromParent: "dataFromParent"
  },
  outputs: {
    sendDataToParent: "sendDataToParent"
  },
  decls: 15,
  vars: 5,
  consts: [[1, "card-izquierda", "default-background", 2, "width", "100%"], ["mat-card-avatar", "", 1, "example-header-image"], ["alt", "Foto de perfil", 1, "rounded-image", 3, "src"], [4, "ngIf"], ["class", "file-upload ", "style", "background-color: antiquewhite;", 4, "ngIf"], [1, "file-upload", 2, "background-color", "antiquewhite"], ["hidden", "", "type", "file", "id", "inputFile", "value", "seleccionar", 1, "btn", "btn-primary", 3, "change"], ["for", "inputFile", 1, "file-label"], [1, "material-icons", "colorAzul"]],
  template: function PerfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content")(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br")(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PerfilComponent_div_11_Template, 4, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PerfilComponent_div_12_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PerfilComponent_div_14_Template, 6, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataFromParent.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.dataFromParent.imagenUrl || "/assets/default-user.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataFromParent.etapa == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataFromParent.etapa >= 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataFromParent.etapa != 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
  styles: ["@charset \"UTF-8\";\n.card-izquierda[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n\n.card-derecha[_ngcontent-%COMP%] {\n  max-width: 85%;\n}\n\n.rounded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 210px;\n  height: 220px;\n  border-color: antiquewhite;\n  border-style: outset;\n  border-width: 10px;\n}\n\n.default-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/verde.png\"); \n\n  align-items: center;\n  justify-content: center;\n}\n\n.file-upload[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.file-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 24px;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  display: none; \n\n}\n\n.colorAzul[_ngcontent-%COMP%] {\n  color: royalblue;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBTUU7RUFDRSwwQ0FBQSxFQUFBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU9FO0VBQ0Usa0JBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQSxFQUFBLGlDQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1penF1aWVyZGEge1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7ICAgIFxyXG4gIH1cclxuXHJcbiAgLmNhcmQtZGVyZWNoYSB7XHJcbiAgICBtYXgtd2lkdGg6IDg1JTsgICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgICBcclxuICAucm91bmRlZC1pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC5kZWZhdWx0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3ZlcmRlLnBuZycpOyAvKiBpbWFnZW4gZGUgZm9uZG8gUG9rw4PCqW1vbiB2ZXJkZSAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5maWxlLXVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlLWxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlLW5hbWUge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogT2N1bHRhIGVsIG5vbWJyZSBkZWwgYXJjaGl2byAqL1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yQXp1bHtcclxuICAgIGNvbG9yOiByb3lhbGJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAgXHJcbiAgfVxyXG4gICAgICAgICAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1879:
/*!**********************************************!*\
  !*** ./src/app/servicios/pokemon.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonService: () => (/* binding */ PokemonService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class PokemonService {
  constructor(http) {
    this.http = http;
    this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.pokemonesUrl = "https://pokeapi.co/api/v2/pokemon/";
    this.pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
  }
  getPokemons() {
    return this.http.get(`${this.pokemonesUrl}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }
  getPokemonByUrl(url) {
    return this.http.get(`${url}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }
  getPokemonByIdOrName(idName) {
    return this.http.get(`${this.pokemonUrl}/${idName}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }
}
PokemonService.ɵfac = function PokemonService_Factory(t) {
  return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
PokemonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PokemonService,
  factory: PokemonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map