"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogsApi = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Catalogs service.
* @module api/CatalogsApi
* @version 2022-10-17
*/
var CatalogsApi = /*#__PURE__*/_createClass(
/**
* Constructs a new CatalogsApi. 
* @alias module:api/CatalogsApi
* @class
* @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
* default to {@link module:ApiClient#instance} if unspecified.
*/
function CatalogsApi(apiClient) {
  var _this = this;
  _classCallCheck(this, CatalogsApi);
  _defineProperty(this, "apiClient", void 0);
  _defineProperty(this, "createCatalogCategory", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling createCatalogCategory");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createCatalogCategoryRelationships", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context2.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling createCatalogCategoryRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context2.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling createCatalogCategoryRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context2.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling createCatalogCategoryRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context2.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/relationships/{related_resource}/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createCatalogItem", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context3.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling createCatalogItem");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context3.abrupt("return", _this.apiClient.callApi('/api/catalog-items/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function (_x5) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createCatalogItemRelationships", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context4.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling createCatalogItemRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context4.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling createCatalogItemRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context4.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling createCatalogItemRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context4.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/relationships/{related_resource}/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x6, _x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createCatalogVariant", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context5.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling createCatalogVariant");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context5.abrupt("return", _this.apiClient.callApi('/api/catalog-variants/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function (_x9) {
      return _ref5.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteCatalogCategory", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context6.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling deleteCatalogCategory");
            case 3:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context6.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return function (_x10) {
      return _ref6.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteCatalogCategoryRelationships", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context7.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling deleteCatalogCategoryRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context7.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling deleteCatalogCategoryRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context7.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling deleteCatalogCategoryRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context7.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/relationships/{related_resource}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function (_x11, _x12, _x13) {
      return _ref7.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteCatalogItem", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context8.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling deleteCatalogItem");
            case 3:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context8.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return function (_x14) {
      return _ref8.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteCatalogItemRelationships", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context9.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling deleteCatalogItemRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context9.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling deleteCatalogItemRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context9.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling deleteCatalogItemRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context9.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/relationships/{related_resource}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return function (_x15, _x16, _x17) {
      return _ref9.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteCatalogVariant", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context10.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling deleteCatalogVariant");
            case 3:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context10.abrupt("return", _this.apiClient.callApi('/api/catalog-variants/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return function (_x18) {
      return _ref10.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogCategories", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-category]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategory'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context11.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));
    return function (_x19) {
      return _ref11.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogCategory", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context12.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling getCatalogCategory");
            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[catalog-category]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategory'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context12.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));
    return function (_x20, _x21) {
      return _ref12.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogCategoryItems", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(categoryId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'categoryId' is set
              if (!(categoryId === undefined || categoryId === null)) {
                _context13.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'categoryId' when calling getCatalogCategoryItems");
            case 4:
              pathParams = {
                'category_id': categoryId
              };
              queryParams = {
                'fields[catalog-item]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItem'], 'csv'),
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'filter': opts['filter'],
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv'),
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context13.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{category_id}/items/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));
    return function (_x22, _x23) {
      return _ref13.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogCategoryRelationships", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id, relatedResource, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context14.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling getCatalogCategoryRelationships");
            case 4:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context14.next = 6;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling getCatalogCategoryRelationships");
            case 6:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context14.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 15:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));
    return function (_x24, _x25, _x26) {
      return _ref14.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogItem", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context15.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling getCatalogItem");
            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[catalog-item]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItem'], 'csv'),
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context15.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));
    return function (_x27, _x28) {
      return _ref15.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogItemCategories", /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(itemId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'itemId' is set
              if (!(itemId === undefined || itemId === null)) {
                _context16.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'itemId' when calling getCatalogItemCategories");
            case 4:
              pathParams = {
                'item_id': itemId
              };
              queryParams = {
                'fields[catalog-category]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategory'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context16.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{item_id}/categories/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));
    return function (_x29, _x30) {
      return _ref16.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogItemRelationships", /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(id, relatedResource, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context17.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling getCatalogItemRelationships");
            case 4:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context17.next = 6;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling getCatalogItemRelationships");
            case 6:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context17.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 15:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));
    return function (_x31, _x32, _x33) {
      return _ref17.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogItemVariants", /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(itemId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'itemId' is set
              if (!(itemId === undefined || itemId === null)) {
                _context18.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'itemId' when calling getCatalogItemVariants");
            case 4:
              pathParams = {
                'item_id': itemId
              };
              queryParams = {
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context18.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{item_id}/variants/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));
    return function (_x34, _x35) {
      return _ref18.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogItems", /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-item]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItem'], 'csv'),
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'filter': opts['filter'],
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv'),
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context19.abrupt("return", _this.apiClient.callApi('/api/catalog-items/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));
    return function (_x36) {
      return _ref19.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogVariant", /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set
              if (!(id === undefined || id === null)) {
                _context20.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling getCatalogVariant");
            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context20.abrupt("return", _this.apiClient.callApi('/api/catalog-variants/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));
    return function (_x37, _x38) {
      return _ref20.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCatalogVariants", /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context21.abrupt("return", _this.apiClient.callApi('/api/catalog-variants/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }));
    return function (_x39) {
      return _ref21.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateCategoriesJob", /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context22.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getCreateCategoriesJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-category-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkCreateJob'], 'csv'),
                'fields[catalog-category]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategory'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context22.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-create-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }));
    return function (_x40, _x41) {
      return _ref22.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateCategoriesJobs", /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-category-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkCreateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context23.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-create-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    }));
    return function (_x42) {
      return _ref23.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateItemsJob", /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context24.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getCreateItemsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-item-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkCreateJob'], 'csv'),
                'fields[catalog-item]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItem'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context24.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-create-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }));
    return function (_x43, _x44) {
      return _ref24.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateItemsJobs", /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-item-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkCreateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context25.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-create-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25);
    }));
    return function (_x45) {
      return _ref25.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateVariantsJob", /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context26.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getCreateVariantsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-variant-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkCreateJob'], 'csv'),
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context26.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-create-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }));
    return function (_x46, _x47) {
      return _ref26.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getCreateVariantsJobs", /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-variant-bulk-create-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkCreateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context27.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-create-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }));
    return function (_x48) {
      return _ref27.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteCategoriesJob", /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context28.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getDeleteCategoriesJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-category-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkDeleteJob'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context28.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-delete-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }));
    return function (_x49, _x50) {
      return _ref28.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteCategoriesJobs", /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-category-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkDeleteJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context29.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-delete-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }));
    return function (_x51) {
      return _ref29.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteItemsJob", /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context30.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getDeleteItemsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-item-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkDeleteJob'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context30.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-delete-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }));
    return function (_x52, _x53) {
      return _ref30.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteItemsJobs", /*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-item-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkDeleteJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context31.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-delete-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));
    return function (_x54) {
      return _ref31.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteVariantsJob", /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context32.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getDeleteVariantsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-variant-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkDeleteJob'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context32.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-delete-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }));
    return function (_x55, _x56) {
      return _ref32.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getDeleteVariantsJobs", /*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-variant-bulk-delete-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkDeleteJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context33.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-delete-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33);
    }));
    return function (_x57) {
      return _ref33.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateCategoriesJob", /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context34.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getUpdateCategoriesJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-category-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkUpdateJob'], 'csv'),
                'fields[catalog-category]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategory'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context34.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-update-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34);
    }));
    return function (_x58, _x59) {
      return _ref34.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateCategoriesJobs", /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-category-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogCategoryBulkUpdateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context35.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-update-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35);
    }));
    return function (_x60) {
      return _ref35.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateItemsJob", /*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context36.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getUpdateItemsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-item-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkUpdateJob'], 'csv'),
                'fields[catalog-item]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItem'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context36.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-update-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36);
    }));
    return function (_x61, _x62) {
      return _ref36.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateItemsJobs", /*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-item-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogItemBulkUpdateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context37.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-update-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37);
    }));
    return function (_x63) {
      return _ref37.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateVariantsJob", /*#__PURE__*/function () {
    var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(jobId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'jobId' is set
              if (!(jobId === undefined || jobId === null)) {
                _context38.next = 4;
                break;
              }
              throw new Error("Missing the required parameter 'jobId' when calling getUpdateVariantsJob");
            case 4:
              pathParams = {
                'job_id': jobId
              };
              queryParams = {
                'fields[catalog-variant-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkUpdateJob'], 'csv'),
                'fields[catalog-variant]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariant'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context38.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-update-jobs/{job_id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 13:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38);
    }));
    return function (_x64, _x65) {
      return _ref38.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUpdateVariantsJobs", /*#__PURE__*/function () {
    var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[catalog-variant-bulk-update-job]': _this.apiClient.buildCollectionParam(opts['fieldsCatalogVariantBulkUpdateJob'], 'csv'),
                'filter': opts['filter'],
                'page[cursor]': opts['pageCursor']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context39.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-update-jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 11:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39);
    }));
    return function (_x66) {
      return _ref39.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnCreateCategoriesJob", /*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context40.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnCreateCategoriesJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context40.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40);
    }));
    return function (_x67) {
      return _ref40.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnCreateItemsJob", /*#__PURE__*/function () {
    var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context41.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnCreateItemsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context41.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41);
    }));
    return function (_x68) {
      return _ref41.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnCreateVariantsJob", /*#__PURE__*/function () {
    var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context42.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnCreateVariantsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context42.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee42);
    }));
    return function (_x69) {
      return _ref42.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnDeleteCategoriesJob", /*#__PURE__*/function () {
    var _ref43 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context43.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnDeleteCategoriesJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context43.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-delete-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43);
    }));
    return function (_x70) {
      return _ref43.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnDeleteItemsJob", /*#__PURE__*/function () {
    var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context44.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnDeleteItemsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context44.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-delete-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44);
    }));
    return function (_x71) {
      return _ref44.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnDeleteVariantsJob", /*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context45.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnDeleteVariantsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context45.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-delete-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45);
    }));
    return function (_x72) {
      return _ref45.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnUpdateCategoriesJob", /*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context46.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnUpdateCategoriesJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context46.abrupt("return", _this.apiClient.callApi('/api/catalog-category-bulk-update-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee46);
    }));
    return function (_x73) {
      return _ref46.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnUpdateItemsJob", /*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context47.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnUpdateItemsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context47.abrupt("return", _this.apiClient.callApi('/api/catalog-item-bulk-update-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee47);
    }));
    return function (_x74) {
      return _ref47.apply(this, arguments);
    };
  }());
  _defineProperty(this, "spawnUpdateVariantsJob", /*#__PURE__*/function () {
    var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context48.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling spawnUpdateVariantsJob");
            case 3:
              pathParams = {};
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context48.abrupt("return", _this.apiClient.callApi('/api/catalog-variant-bulk-update-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 12:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee48);
    }));
    return function (_x75) {
      return _ref48.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCatalogCategory", /*#__PURE__*/function () {
    var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context49.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling updateCatalogCategory");
            case 3:
              if (!(id === undefined || id === null)) {
                _context49.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling updateCatalogCategory");
            case 5:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context49.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 14:
            case "end":
              return _context49.stop();
          }
        }
      }, _callee49);
    }));
    return function (_x76, _x77) {
      return _ref49.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCatalogCategoryRelationships", /*#__PURE__*/function () {
    var _ref50 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee50$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context50.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling updateCatalogCategoryRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context50.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling updateCatalogCategoryRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context50.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling updateCatalogCategoryRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context50.abrupt("return", _this.apiClient.callApi('/api/catalog-categories/{id}/relationships/{related_resource}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context50.stop();
          }
        }
      }, _callee50);
    }));
    return function (_x78, _x79, _x80) {
      return _ref50.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCatalogItem", /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee51$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context51.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling updateCatalogItem");
            case 3:
              if (!(id === undefined || id === null)) {
                _context51.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling updateCatalogItem");
            case 5:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context51.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 14:
            case "end":
              return _context51.stop();
          }
        }
      }, _callee51);
    }));
    return function (_x81, _x82) {
      return _ref51.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCatalogItemRelationships", /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(body, id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee52$(_context52) {
        while (1) {
          switch (_context52.prev = _context52.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context52.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling updateCatalogItemRelationships");
            case 3:
              if (!(id === undefined || id === null)) {
                _context52.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling updateCatalogItemRelationships");
            case 5:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context52.next = 7;
                break;
              }
              throw new Error("Missing the required parameter 'relatedResource' when calling updateCatalogItemRelationships");
            case 7:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context52.abrupt("return", _this.apiClient.callApi('/api/catalog-items/{id}/relationships/{related_resource}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 16:
            case "end":
              return _context52.stop();
          }
        }
      }, _callee52);
    }));
    return function (_x83, _x84, _x85) {
      return _ref52.apply(this, arguments);
    };
  }());
  _defineProperty(this, "updateCatalogVariant", /*#__PURE__*/function () {
    var _ref53 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee53$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set
              if (!(body === undefined || body === null)) {
                _context53.next = 3;
                break;
              }
              throw new Error("Missing the required parameter 'body' when calling updateCatalogVariant");
            case 3:
              if (!(id === undefined || id === null)) {
                _context53.next = 5;
                break;
              }
              throw new Error("Missing the required parameter 'id' when calling updateCatalogVariant");
            case 5:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context53.abrupt("return", _this.apiClient.callApi('/api/catalog-variants/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));
            case 14:
            case "end":
              return _context53.stop();
          }
        }
      }, _callee53);
    }));
    return function (_x86, _x87) {
      return _ref53.apply(this, arguments);
    };
  }());
  this.apiClient = apiClient || _ApiClient.ApiClient.instance;
}

/**
 * Create Catalog Category
 * Create a new catalog category.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;Catalogs Write&#x60;
 * @param {<&vendorExtensions.x-jsdoc-type>} body 
 * @return {Promise} a {@link https://www.promisejs.org/|Promise}
 */);
exports.CatalogsApi = CatalogsApi;