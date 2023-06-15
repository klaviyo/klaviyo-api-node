"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesApi = void 0;
var _ApiClient = require("../ApiClient.js");
var _exponentialBackoff = require("exponential-backoff");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-06-15
                                                                                                                                                                                                                                                                                                                                                                                               * Contact: developers@klaviyo.com
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.41
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* Profiles service.
* @module api/ProfilesApi
* @version 2023-06-15
*/
var ProfilesApi = /*#__PURE__*/_createClass(
/**
* Constructs a new ProfilesApi. 
* @alias module:api/ProfilesApi
* @class
* @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
* default to {@link module:ApiClient#instance} if unspecified.
*/
function ProfilesApi(apiClient) {
  var _this = this;
  _classCallCheck(this, ProfilesApi);
  _defineProperty(this, "apiClient", void 0);
  /**
   * Create Profile
   * Create a new profile. If you use a phone number as the profile identifier and SMS is not set up in the Klaviyo account, you&#x27;ll need to include at least one other identifier attribute (&#x60;email&#x60; or &#x60;external_id&#x60;) in addition to the &#x60;phone_number&#x60; attribute for the API call to work.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createProfile", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling createProfile");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  /**
   * Get Profile
   * Get the profile with the given profile ID. Include parameters can be provided to get the following related resource data: &#x60;lists&#x60; memberships, &#x60;segments&#x60; memberships\&quot;&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.additionalFieldsProfile Request additional fields not included by default in the response. Supported values: &#x27;predictive_analytics&#x27;
   * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#relationships
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfile", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context2.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getProfile");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'additional-fields[profile]': _this.apiClient.buildCollectionParam(opts['additionalFieldsProfile'], 'csv'),
              'fields[list]': _this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv'),
              'fields[profile]': _this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),
              'fields[segment]': _this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv'),
              'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context2.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * Get Profile Lists
   * Get list memberships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;list:read&#x60; &#x60;profiles:read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfileLists", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context3.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getProfileLists");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[list]': _this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context3.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/lists/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
  /**
   * Get Profile Relationships Lists
   * Get list memberships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;list:read&#x60; &#x60;profiles:read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfileRelationshipsLists", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context4.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getProfileRelationshipsLists");
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
            return _context4.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/relationships/lists/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x6) {
      return _ref4.apply(this, arguments);
    };
  }());
  /**
   * Get Profile Relationships Segments
   * Get segment membership relationships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;profiles:read&#x60; &#x60;segments:read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfileRelationshipsSegments", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context5.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getProfileRelationshipsSegments");
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
            return _context5.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/relationships/segments/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x7) {
      return _ref5.apply(this, arguments);
    };
  }());
  /**
   * Get Profile Segments
   * Get segment memberships for a profile with the given profile ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;profiles:read&#x60; &#x60;segments:read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfileSegments", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context6.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getProfileSegments");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[segment]': _this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context6.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/segments/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }());
  /**
   * Get Profiles
   * Get all profiles in an account. Profiles can be sorted by the following fields in ascending and descending order: &#x60;id&#x60;, &#x60;created&#x60;, &#x60;updated&#x60;, &#x60;email&#x60;&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;profiles:read&#x60;
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.additionalFieldsProfile Request additional fields not included by default in the response. Supported values: &#x27;predictive_analytics&#x27;
   * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sparse-fieldsets
   * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;external_id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;, &#x60;less-than&#x60;
   * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#pagination
   * @param {Number} opts.pageSize Default: 20. Min: 1. Max: 100. (default to <.>)
   * @param {module:model/String} opts.sort For more information please visit https://developers.klaviyo.com/en/v2023-06-15/reference/api-overview#sorting
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getProfiles", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            opts = opts || {};
            postBody = null;
            pathParams = {};
            queryParams = {
              'additional-fields[profile]': _this.apiClient.buildCollectionParam(opts['additionalFieldsProfile'], 'csv'),
              'fields[profile]': _this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),
              'filter': opts['filter'],
              'page[cursor]': opts['pageCursor'],
              'page[size]': opts['pageSize'],
              'sort': opts['sort']
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context7.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 11:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x10) {
      return _ref7.apply(this, arguments);
    };
  }());
  /**
   * Subscribe Profiles
   * Subscribe one or more profiles to email marketing, SMS marketing, or both. If the list has double opt-in enabled, profiles will receive a message requiring their confirmation before subscribing. Otherwise, profiles will be immediately subscribed without receiving a confirmation message. To add someone to a list without changing their subscription status, use [Add Profile to List](https://developers.klaviyo.com/en/reference/create_list_relationships). This API will remove any &#x60;UNSUBSCRIBE&#x60;, &#x60;SPAM_REPORT&#x60; or &#x60;USER_SUPPRESSED&#x60; suppressions from the provided profiles. Learn more about suppressed profiles in [this document](https://help.klaviyo.com/hc/en-us/articles/115005246108-Understanding-suppressed-email-profiles#what-is-a-suppressed-profile-1). Maximum number of profile can be submitted for subscription: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;list:write&#x60; &#x60;profiles:write&#x60; &#x60;subscriptions:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Subscribes one or more profiles to marketing. Currently, supports email and SMS only. All profiles will be added to the provided list. Either email or phone number is required. Both may be specified to subscribe to both channels. If a profile cannot be found matching the given identifier(s), a new profile will be created and then subscribed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "subscribeProfiles", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context8.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling subscribeProfiles");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context8.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profile-subscription-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x11) {
      return _ref8.apply(this, arguments);
    };
  }());
  /**
   * Suppress Profiles
   * Manually suppress one or more profiles. Such profiles will have &#x60;USER_SUPPRESSED&#x60; as their suppression reason. Manually suppressed profiles _will not_ receive email marketing. Learn more about suppressed profiles [in this document](https://help.klaviyo.com/hc/en-us/articles/115005246108-Understanding-suppressed-email-profiles#what-is-a-suppressed-profile-1). Not supported for SMS marketing. Maximum number of profile can be submitted for suppression: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:write&#x60; &#x60;subscriptions:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Suppresses one or more profiles from receiving marketing. Currently, supports email only. If a profile is not found with the given email, one will be created and immediately suppressed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "suppressProfiles", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context9.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling suppressProfiles");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context9.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profile-suppression-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function (_x12) {
      return _ref9.apply(this, arguments);
    };
  }());
  /**
   * Unsubscribe Profiles
   * Unsubscribe one or more profiles to email marketing, SMS marketing, or both. To remove someone from a list without changing their subscription status, use [Remove Profile from List](https://developers.klaviyo.com/en/reference/delete_list_relationships). Maximum number of profile can be submitted for unsubscription: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;list:write&#x60; &#x60;profiles:write&#x60; &#x60;subscriptions:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Unsubscribes one or more profiles from marketing. Currently, supports email and SMS only. All profiles will be removed from the provided list. Either email or phone number is required. If a profile cannot be found matching the given identifier(s), a new profile will be created and then unsubscribed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "unsubscribeProfiles", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context10.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling unsubscribeProfiles");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context10.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profile-unsubscription-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function (_x13) {
      return _ref10.apply(this, arguments);
    };
  }());
  /**
   * Unsuppress Profiles
   * Unsuppress one or more profiles, this will remove any Manual Suppressions (USER_SUPPRESSED) on these profiles. A profile may receive email marketing after a manual suppression is removed so long as they have not revoked consent, i.e. unsubscribed. Not supported for SMS marketing. Only manual suppressions (USER_SUPPRESSED) will be removed. &#x60;UNSUBSCRIBE&#x60; and &#x60;SPAM_REPORT&#x60; suppressions are removed whenever a [profile resubscribes](https://developers.klaviyo.com/en/reference/subscribe_profiles). &#x60;INVALID_EMAIL&#x60; and &#x60;HARD_BOUNCE&#x60; suppressions cannot be removed by the API. Maximum number of profile can be submitted for unsuppression: 100&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;subscriptions:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Unsuppresses one or more profiles from receiving marketing. Currently, supports email only. If a profile is not found with the given email, no action will be taken.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "unsuppressProfiles", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context11.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling unsuppressProfiles");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context11.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profile-unsuppression-bulk-create-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 12:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function (_x14) {
      return _ref11.apply(this, arguments);
    };
  }());
  /**
   * Update Profile
   * Update the profile with the given profile ID. If you use a phone number as the profile identifier and SMS is not set up in the Klaviyo account, you&#x27;ll need to include at least one other identifier attribute (&#x60;email&#x60; or &#x60;external_id&#x60;) in addition to the &#x60;phone_number&#x60; attribute for the API call to work.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;75/s&#x60;&lt;br&gt;Steady: &#x60;700/m&#x60;  **Scopes:** &#x60;profiles:write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body 
   * @param {<&vendorExtensions.x-jsdoc-type>} id Primary key that uniquely identifies this profile. Generated by Klaviyo.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "updateProfile", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context12.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling updateProfile");
          case 3:
            if (!(id === undefined || id === null)) {
              _context12.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling updateProfile");
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
            return _context12.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/profiles/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return {
                  body: response_and_data.data,
                  headers: response_and_data.response.headers,
                  status: response_and_data.response.status
                };
              });
            }, {
              jitter: "full",
              numOfAttempts: _this.apiClient.RETRY_MAX_ATTEMPTS,
              timeMultiple: _this.apiClient.TIME_MULTIPLE,
              startingDelay: _this.apiClient.STARTING_DELAY,
              retry: function retry(res) {
                return _this.apiClient.RETRY_CODES.includes(res.status);
              }
            }));
          case 14:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function (_x15, _x16) {
      return _ref12.apply(this, arguments);
    };
  }());
  this.apiClient = apiClient || _ApiClient.ApiClient.instance;
});
exports.ProfilesApi = ProfilesApi;