"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventsApi = void 0;
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
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Events service.
* @module api/EventsApi
* @version 2023-02-22
*/
var EventsApi = /*#__PURE__*/_createClass(
/**
* Constructs a new EventsApi. 
* @alias module:api/EventsApi
* @class
* @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
* default to {@link module:ApiClient#instance} if unspecified.
*/
function EventsApi(apiClient) {
  var _this = this;
  _classCallCheck(this, EventsApi);
  _defineProperty(this, "apiClient", void 0);
  /**
   * Create Event
   * Create an event. Events are created asynchronously. Successful response indicates that the event was validated and submitted for processing, but does not guarantee that processing is complete.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Event to create.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createEvent", /*#__PURE__*/function () {
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
            throw new Error("Missing the required parameter 'body' when calling createEvent");
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
              return _this.apiClient.callApi('/api/events/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
   * Get Event
   * Get an event with the given event ID. Include parameters can be provided to get the following related resource data: &#x60;metrics&#x60;, &#x60;profiles&#x60;&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Events Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getEvent", /*#__PURE__*/function () {
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
            throw new Error("Missing the required parameter 'id' when calling getEvent");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[event]': _this.apiClient.buildCollectionParam(opts['fieldsEvent'], 'csv'),
              'fields[metric]': _this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv'),
              'fields[profile]': _this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),
              'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context2.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/events/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
   * Get Event Metrics
   * Get the metric for an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Metrics Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getEventMetrics", /*#__PURE__*/function () {
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
            throw new Error("Missing the required parameter 'id' when calling getEventMetrics");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[metric]': _this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context3.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/events/{id}/metrics/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
   * Get Event Profiles
   * Get the profile associated with an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Profiles Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id ID of the event
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getEventProfiles", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context4.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getEventProfiles");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[profile]': _this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context4.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/events/{id}/profiles/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }());
  /**
   * Get Event Relationships
   * Get metrics or profile [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for an event with the given event ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60; &#x60;Metrics Read&#x60; &#x60;Profiles Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getEventRelationships", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context5.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getEventRelationships");
          case 3:
            if (!(relatedResource === undefined || relatedResource === null)) {
              _context5.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'relatedResource' when calling getEventRelationships");
          case 5:
            pathParams = {
              'id': id,
              'related_resource': relatedResource
            };
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context5.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/events/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }());
  /**
   * Get Events
   * Get all events in an account Requests can be sorted by the following fields: &#x60;datetime&#x60;, &#x60;timestamp&#x60; Include parameters can be provided to get the following related resource data: &#x60;metrics&#x60;, &#x60;profiles&#x60; Returns a maximum of 200 events per page.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Read&#x60;
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;metric_id&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;datetime&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;timestamp&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;
   * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
   * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
   * @param {module:model/String} opts.sort For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sorting
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getEvents", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            opts = opts || {};
            postBody = null;
            pathParams = {};
            queryParams = {
              'fields[event]': _this.apiClient.buildCollectionParam(opts['fieldsEvent'], 'csv'),
              'fields[metric]': _this.apiClient.buildCollectionParam(opts['fieldsMetric'], 'csv'),
              'fields[profile]': _this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),
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
            return _context6.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/events/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x10) {
      return _ref6.apply(this, arguments);
    };
  }());
  this.apiClient = apiClient || _ApiClient.ApiClient.instance;
});
exports.EventsApi = EventsApi;