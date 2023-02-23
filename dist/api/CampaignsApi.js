"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignsApi = void 0;
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
* Campaigns service.
* @module api/CampaignsApi
* @version 2023-02-22
*/
var CampaignsApi = /*#__PURE__*/_createClass(
/**
* Constructs a new CampaignsApi. 
* @alias module:api/CampaignsApi
* @class
* @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
* default to {@link module:ApiClient#instance} if unspecified.
*/
function CampaignsApi(apiClient) {
  var _this = this;
  _classCallCheck(this, CampaignsApi);
  _defineProperty(this, "apiClient", void 0);
  /**
   * Create Campaign
   * Creates a campaign given a set of parameters, then returns it.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Creates a campaign from parameters
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createCampaign", /*#__PURE__*/function () {
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
            throw new Error("Missing the required parameter 'body' when calling createCampaign");
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
              return _this.apiClient.callApi('/api/campaigns/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
   * Create Campaign Clone
   * Clones an existing campaign, returning a new campaign based on the original with a new ID and name.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Clones a campaign from an existing campaign
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createCampaignClone", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context2.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling createCampaignClone");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context2.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-clone/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * Create Campaign Message Assign Template
   * Creates a non-reusable version of the template and assigns it to the message.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Takes a reusable template, clones it, and assigns the non-reusable clone to the message.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createCampaignMessageAssignTemplate", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context3.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling createCampaignMessageAssignTemplate");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context3.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-message-assign-template/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  /**
   * Create Campaign Recipient Estimation Job
   * Trigger an asynchronous job to update the estimated number of recipients for the given campaign ID. Use the &#x60;Get Campaign Recipient Estimation Job&#x60; endpoint to retrieve the status of this estimation job. Use the &#x60;Get Campaign Recipient Estimation&#x60; endpoint to retrieve the estimated recipient count for a given campaign.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Trigger an asynchronous job to update the estimated number of recipients for the given campaign ID. Use the &#x60;Get Campaign Recipient Estimation Job&#x60; endpoint to retrieve the status of this estimation job. Use the &#x60;Get Campaign Recipient Estimation&#x60; endpoint to retrieve the estimated recipient count for a given campaign.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createCampaignRecipientEstimationJob", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context4.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling createCampaignRecipientEstimationJob");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context4.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-recipient-estimation-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  /**
   * Create Campaign Send Job
   * Trigger a campaign to send asynchronously&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Trigger the campaign to send asynchronously
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "createCampaignSendJob", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(body) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context5.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling createCampaignSendJob");
          case 3:
            pathParams = {};
            queryParams = {};
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = ['application/json'];
            accepts = ['application/json'];
            returnType = Object;
            return _context5.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-send-jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  /**
   * Delete Campaign
   * Delete a campaign with the given campaign ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The campaign ID to be deleted
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "deleteCampaign", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context6.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling deleteCampaign");
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
            return _context6.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign
   * Returns a specific campaign based on a required id.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The campaign ID to be retrieved
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaign For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaign", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context7.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaign");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[campaign]': _this.apiClient.buildCollectionParam(opts['fieldsCampaign'], 'csv'),
              'fields[tag]': _this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv'),
              'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context7.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Message
   * Returns a specific message based on a required id.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The message ID to be retrieved
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaignMessage For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignMessage", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context8.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaignMessage");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[campaign-message]': _this.apiClient.buildCollectionParam(opts['fieldsCampaignMessage'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context8.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-messages/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x9, _x10) {
      return _ref8.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Recipient Estimation
   * Get the estimated recipient count for a campaign with the provided campaign ID. You can refresh this count by using the &#x60;Create Campaign Recipient Estimation Job&#x60; endpoint.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The ID of the campaign for which to get the estimated number of recipients
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaignRecipientEstimation For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignRecipientEstimation", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context9.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaignRecipientEstimation");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[campaign-recipient-estimation]': _this.apiClient.buildCollectionParam(opts['fieldsCampaignRecipientEstimation'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context9.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-recipient-estimations/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function (_x11, _x12) {
      return _ref9.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Recipient Estimation Job
   * Retrieve the status of a recipient estimation job triggered with the &#x60;Create Campaign Recipient Estimation Job&#x60; endpoint.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The ID of the campaign to get recipient estimation status
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaignRecipientEstimationJob For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignRecipientEstimationJob", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context10.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaignRecipientEstimationJob");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[campaign-recipient-estimation-job]': _this.apiClient.buildCollectionParam(opts['fieldsCampaignRecipientEstimationJob'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context10.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-recipient-estimation-jobs/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function (_x13, _x14) {
      return _ref10.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Relationships
   * If the &#x60;related_resource&#x60; is &#x60;tags&#x60;, returns the IDs of all tags associated with the given campaign.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60; &#x60;Tags Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id 
   * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignRelationships", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context11.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaignRelationships");
          case 3:
            if (!(relatedResource === undefined || relatedResource === null)) {
              _context11.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'relatedResource' when calling getCampaignRelationships");
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
            return _context11.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context11.stop();
        }
      }, _callee11);
    }));
    return function (_x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Send Job
   * Get a campaign send job&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} id The ID of the campaign to send
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaignSendJob For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignSendJob", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'id' is set
            if (!(id === undefined || id === null)) {
              _context12.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling getCampaignSendJob");
          case 4:
            pathParams = {
              'id': id
            };
            queryParams = {
              'fields[campaign-send-job]': _this.apiClient.buildCollectionParam(opts['fieldsCampaignSendJob'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context12.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-send-jobs/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context12.stop();
        }
      }, _callee12);
    }));
    return function (_x17, _x18) {
      return _ref12.apply(this, arguments);
    };
  }());
  /**
   * Get Campaign Tags
   * Return all tags that belong to the given campaign.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60; &#x60;Tags Read&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaignTags", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(campaignId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            opts = opts || {};
            postBody = null; // verify the required parameter 'campaignId' is set
            if (!(campaignId === undefined || campaignId === null)) {
              _context13.next = 4;
              break;
            }
            throw new Error("Missing the required parameter 'campaignId' when calling getCampaignTags");
          case 4:
            pathParams = {
              'campaign_id': campaignId
            };
            queryParams = {
              'fields[tag]': _this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv')
            };
            headerParams = {};
            formParams = {};
            authNames = ['Klaviyo-API-Key'];
            contentTypes = [];
            accepts = ['application/json'];
            returnType = Object;
            return _context13.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/{campaign_id}/tags/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context13.stop();
        }
      }, _callee13);
    }));
    return function (_x19, _x20) {
      return _ref13.apply(this, arguments);
    };
  }());
  /**
   * Get Campaigns
   * Returns some or all campaigns based on [optional] filters&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Read&#x60;
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/String>} opts.fieldsCampaign For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {Array.<module:model/String>} opts.fieldsTag For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sparse-fieldsets
   * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;contains&#x60;&lt;br&gt;&#x60;status&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;archived&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;created_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;scheduled_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;updated_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;
   * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#relationships
   * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#pagination
   * @param {module:model/String} opts.sort For more information please visit https://developers.klaviyo.com/en/v2023-02-22/reference/api-overview#sorting
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "getCampaigns", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            opts = opts || {};
            postBody = null;
            pathParams = {};
            queryParams = {
              'fields[campaign]': _this.apiClient.buildCollectionParam(opts['fieldsCampaign'], 'csv'),
              'fields[tag]': _this.apiClient.buildCollectionParam(opts['fieldsTag'], 'csv'),
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
            return _context14.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function (_x21) {
      return _ref14.apply(this, arguments);
    };
  }());
  /**
   * Update Campaign
   * Update a campaign with the given campaign ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Update a campaign and return it
   * @param {<&vendorExtensions.x-jsdoc-type>} id The campaign ID to be retrieved
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "updateCampaign", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context15.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling updateCampaign");
          case 3:
            if (!(id === undefined || id === null)) {
              _context15.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling updateCampaign");
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
            return _context15.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaigns/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context15.stop();
        }
      }, _callee15);
    }));
    return function (_x22, _x23) {
      return _ref15.apply(this, arguments);
    };
  }());
  /**
   * Update Campaign Message
   * Update a campaign message&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Update a message and return it
   * @param {<&vendorExtensions.x-jsdoc-type>} id The message ID to be retrieved
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "updateCampaignMessage", /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context16.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling updateCampaignMessage");
          case 3:
            if (!(id === undefined || id === null)) {
              _context16.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling updateCampaignMessage");
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
            return _context16.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-messages/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context16.stop();
        }
      }, _callee16);
    }));
    return function (_x24, _x25) {
      return _ref16.apply(this, arguments);
    };
  }());
  /**
   * Update Campaign Send Job
   * Permanently cancel the campaign, setting the status to CANCELED or revert the campaign, setting the status back to DRAFT&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Campaigns Write&#x60;
   * @param {<&vendorExtensions.x-jsdoc-type>} body Permanently cancel the campaign, setting the status to CANCELED or revert the campaign, setting the status back to DRAFT
   * @param {<&vendorExtensions.x-jsdoc-type>} id The ID of the currently sending campaign to cancel or revert
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  _defineProperty(this, "updateCampaignSendJob", /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            postBody = body; // verify the required parameter 'body' is set
            if (!(body === undefined || body === null)) {
              _context17.next = 3;
              break;
            }
            throw new Error("Missing the required parameter 'body' when calling updateCampaignSendJob");
          case 3:
            if (!(id === undefined || id === null)) {
              _context17.next = 5;
              break;
            }
            throw new Error("Missing the required parameter 'id' when calling updateCampaignSendJob");
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
            return _context17.abrupt("return", (0, _exponentialBackoff.backOff)(function () {
              return _this.apiClient.callApi('/api/campaign-send-jobs/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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
            return _context17.stop();
        }
      }, _callee17);
    }));
    return function (_x26, _x27) {
      return _ref17.apply(this, arguments);
    };
  }());
  this.apiClient = apiClient || _ApiClient.ApiClient.instance;
});
exports.CampaignsApi = CampaignsApi;