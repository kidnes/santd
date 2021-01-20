/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"16":1,"17":1,"18":1,"19":1,"20":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "static/css/" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				var onLinkComplete = function (event) {
/******/ 					// avoid mem leaks.
/******/ 					linkTag.onerror = linkTag.onload = null;
/******/ 					if (event.type === 'load') {
/******/ 						resolve();
/******/ 					} else {
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realHref = event && event.target && event.target.href || fullhref;
/******/ 						var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 						err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 						err.type = errorType;
/******/ 						err.request = realHref;
/******/ 						delete installedCssChunks[chunkId]
/******/ 						linkTag.parentNode.removeChild(linkTag)
/******/ 						reject(err);
/******/ 					}
/******/ 				};
/******/ 				linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				document.head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/santd/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([234,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * san-router
 * Copyright 2017 Baidu Inc. All rights reserved.
 */
(function (root) {
  /**
   * 元素选择器
   *
   * @param {string|Element} selector 选择器
   * @returns {Element}
   */
  function elementSelector(selector) {
    switch (typeof selector) {
      case 'object':
        return selector;

      case 'string':
        if (document.querySelector) {
          return document.querySelector(selector);
        }

        return document.getElementById(selector.replace(/#/i, ''));
    }
  }
  /**
   * 解析URL，返回包含path、query、queryString的对象
   *
   * @param {string} url 要解析的url
   * @return {Object}
   */


  function parseURL(url) {
    var result = {
      hash: '',
      queryString: '',
      params: {},
      query: {},
      path: url
    }; // parse hash

    var hashStart = result.path.indexOf('#');

    if (hashStart >= 0) {
      result.hash = result.path.slice(hashStart + 1);
      result.path = result.path.slice(0, hashStart);
    } // parse query


    var query = result.query;
    var queryStart = result.path.indexOf('?');

    if (queryStart >= 0) {
      result.queryString = result.path.slice(queryStart + 1);
      result.path = result.path.slice(0, queryStart);
      var querySegs = result.queryString.split('&');

      for (var i = 0; i < querySegs.length; i++) {
        var querySeg = querySegs[i]; // 考虑到有可能因为未处理转义问题，
        // 导致value中存在**=**字符，因此不使用`split`函数

        var equalIndex = querySeg.indexOf('=');
        var value = '';

        if (equalIndex > 0) {
          value = querySeg.slice(equalIndex + 1);
          querySeg = querySeg.slice(0, equalIndex);
        }

        var key = decodeURIComponent(querySeg);
        value = decodeURIComponent(value); // 已经存在这个参数，且新的值不为空时，把原来的值变成数组

        if (query.hasOwnProperty(key)) {
          /* eslint-disable */
          query[key] = [].concat(query[key], value);
          /* eslint-disable */
        } else {
          query[key] = value;
        }
      }
    }

    return result;
  }
  /**
   * 将 URL 中相对路径部分展开
   *
   * @param {string} source 要展开的url
   * @param {string} base 当前所属环境的url
   * @return {string}
   */


  function resolveURL(source, base) {
    var sourceLoc = parseURL(source);
    var baseLoc = parseURL(base);
    var sourcePath = sourceLoc.path;

    if (sourcePath.indexOf('/') === 0) {
      return source;
    }

    var sourceSegs = sourcePath.split('/');
    var baseSegs = baseLoc.path.split('/');
    baseSegs.pop();

    for (var i = 0; i < sourceSegs.length; i++) {
      var seg = sourceSegs[i];

      switch (seg) {
        case '..':
          baseSegs.pop();
          break;

        case '.':
          break;

        default:
          baseSegs.push(seg);
      }
    }

    if (baseSegs[0] !== '') {
      baseSegs.unshift('');
    }

    return baseSegs.join('/') + (sourceLoc.queryString ? '?' + sourceLoc.queryString : '');
  }

  var isBrowser = typeof window !== 'undefined';

  function EventTarget() {}
  /**
   * 注册一个事件处理函数
   *
   * @param {string} type 事件的类型
   * @param {Function | boolean} fn 事件的处理函数
   */


  EventTarget.prototype.on = function (type, fn) {
    if (typeof fn !== 'function') {
      return;
    }

    if (!this._eventListeners) {
      this._eventListeners = {};
    }

    if (!this._eventListeners[type]) {
      this._eventListeners[type] = [];
    }

    this._eventListeners[type].push(fn);
  };
  /**
   * 注销一个事件处理函数
   *
   * @param {string} type 事件的类型，如果值为`*`仅会注销通过`*`为类型注册的事件，并不会将所有事件注销
   * @param {Function} [fn] 事件的处理函数，无此参数则注销`type`指定类型的所有事件处理函数
   */


  EventTarget.prototype.un = function (type, fn) {
    if (!this._eventListeners || !this._eventListeners[type]) {
      return;
    }

    if (!fn) {
      this._eventListeners[type] = [];
    } else {
      var listeners = this._eventListeners[type];
      var len = listeners.length;

      while (len--) {
        if (listeners[len] === fn) {
          listeners.splice(len, 1);
        }
      }
    }
  };
  /**
   * 触发指定类型的事件
   *
   * @param {string} type 事件类型
   * @param {*} [args] 事件对象
   */


  EventTarget.prototype.fire = function (type, args) {
    if (!type) {
      throw new Error('No event type specified');
    }

    var listeners = this._eventListeners && this._eventListeners[type];

    if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](args);
      }
    }
  };
  /**
   * 获取hash当前URL
   *
   * @return {string}
   */


  function getHashLocation() {
    if (!isBrowser) {
      return '';
    } // Firefox下`location.hash`存在自动解码的情况，
    // 比如hash的值是**abc%3def**，
    // 在Firefox下获取会成为**abc=def**
    // 为了避免这一情况，需要从`location.href`中分解


    var index = location.href.indexOf('#');
    var url = index < 0 ? '/' : location.href.slice(index + 1) || '/';
    return url;
  }
  /**
   * hash 模式地址监听器
   *
   * @class
   */


  function HashLocator() {
    this.current = getHashLocation();
    this.referrer = '';
    var me = this;

    this.hashChangeHandler = function () {
      me.redirect(getHashLocation());
    };
  }

  HashLocator.prototype = new EventTarget();
  HashLocator.prototype.constructor = HashLocator;
  /**
   * 开始监听 url 变化
   */

  HashLocator.prototype.start = function () {
    if (window.addEventListener) {
      window.addEventListener('hashchange', this.hashChangeHandler, false);
    }

    if (window.attachEvent) {
      window.attachEvent('onhashchange', this.hashChangeHandler);
    }
  };
  /**
   * 停止监听
   */


  HashLocator.prototype.stop = function () {
    if (window.removeEventListener) {
      window.removeEventListener('hashchange', this.hashChangeHandler, false);
    }

    if (window.detachEvent) {
      window.detachEvent('onhashchange', this.hashChangeHandler);
    }
  };
  /**
   * 重定向
   *
   * @param {string} url 重定向的地址
   * @param {Object?} options 重定向的行为配置
   * @param {boolean?} options.force 是否强制刷新
   */


  HashLocator.prototype.redirect = function (url, options) {
    options = options || {};
    url = resolveURL(url, this.current);
    var referrer = this.current;
    var isChanged = url !== referrer;

    if (isChanged) {
      this.referrer = referrer;
      this.current = url;
      location.hash = url;
    } else {
      referrer = this.referrer;
    }

    if ((isChanged || options.force) && !options.silent) {
      this.fire('redirect', {
        url: url,
        referrer: referrer
      });
    }
  };
  /**
   * 刷新当前 url
   */


  HashLocator.prototype.reload = function () {
    this.redirect(this.current, {
      force: true
    });
  };
  /**
   * 获取当前URL
   *
   * @return {string}
   */


  function getLocation() {
    return isBrowser ? location.pathname + location.search : '';
  }
  /**
   * html5 模式地址监听器
   *
   * @class
   */


  function HTML5Locator() {
    this.current = getLocation();
    this.referrer = '';
    var me = this;

    this.popstateHandler = function () {
      me.referrer = me.current;
      me.current = getLocation();
      me.fire('redirect', {
        url: me.current,
        referrer: me.referrer
      });
    };
  }

  HTML5Locator.prototype = new EventTarget();
  HTML5Locator.prototype.constructor = HashLocator;
  /**
   * 开始监听 url 变化
   */

  HTML5Locator.prototype.start = function () {
    window.addEventListener('popstate', this.popstateHandler);
  };
  /**
   * 停止监听
   */


  HTML5Locator.prototype.stop = function () {
    window.removeEventListener('popstate', this.popstateHandler);
  };
  /**
   * 重定向
   *
   * @param {string} url 重定向的地址
   * @param {Object?} options 重定向的行为配置
   * @param {boolean?} options.force 是否强制刷新
   */


  HTML5Locator.prototype.redirect = function (url, options) {
    options = options || {};
    url = resolveURL(url, this.current);
    var referrer = this.current;
    var isChanged = url !== referrer;

    if (isChanged) {
      this.referrer = referrer;
      this.current = url;
      history.pushState({}, '', url);
    }

    if ((isChanged || options.force) && !options.silent) {
      this.fire('redirect', {
        url: url,
        referrer: referrer
      });
    }
  };
  /**
   * 刷新当前 url
   */


  HTML5Locator.prototype.reload = function () {
    this.fire('redirect', {
      url: this.current,
      referrer: this.referrer
    });
  }; // HTML5Locator.isSupport = 'pushState' in window.history;


  var routeID = 0x5942b;

  function guid() {
    return (++routeID).toString();
  }

  function isComponent(C) {
    return C.prototype && (C.prototype.nodeType === 5 || C.prototype._type === 'san-cmpt');
  }
  /**
   * 获取 router 的 locator redirect 事件监听函数
   *
   * @return {Function}
   */


  function getLocatorRedirectHandler(router) {
    return function (e) {
      var url = parseURL(e.url);
      var routeItem;

      for (var i = 0; i < router.routes.length; i++) {
        var item = router.routes[i];
        var match = item.rule.exec(url.path);

        if (match) {
          routeItem = item; // fill params

          var keys = item.keys || [];

          for (var j = 1; j < match.length; j++) {
            var key = keys[j] || j;
            var value = match[j];
            url.query[key] = value;
            url.params[key] = value;
          } // fill referrer


          url.referrer = e.referrer;
          url.config = item.config;
          break;
        }
      }

      var i = 0;
      var state = 1;
      /**
       * listener 事件对象
       *
       * @type {Object}
       */

      var listenerEvent = {
        url: e.url,
        hash: url.hash,
        queryString: url.queryString,
        query: url.query,
        path: url.path,
        referrer: url.referrer,
        config: url.config,
        resume: next,
        suspend: function () {
          state = 0;
        },
        stop: function () {
          state = -1;
        }
      };
      /**
       * 尝试运行下一个listener
       *
       * @inner
       */

      function doNext() {
        if (state > 0) {
          if (i < router.listeners.length) {
            router.listeners[i].call(router, listenerEvent, url.config);

            if (state > 0) {
              next();
            }
          } else {
            routeAction();
          }
        }
      }
      /**
       * 运行下一个listener
       *
       * @inner
       */


      function next() {
        state = 1;
        i++;
        doNext();
      }
      /**
       * 运行路由行为
       *
       * @inner
       */


      function routeAction() {
        if (routeItem) {
          router.doRoute(routeItem, url);
        } else {
          var len = router.routeAlives.length;

          while (len--) {
            router.routeAlives[len].component.dispose();
            router.routeAlives.splice(len, 1);
          }
        }
      }

      ;
      doNext();
    };
  }
  /**
   * 路由器类
   *
   * @class
   * @param {Object?} options 初始化参数
   * @param {string?} options.mode 路由模式，hash | html5
   */


  function Router(options) {
    options = options || {};
    var mode = options.mode || 'hash';
    this.routes = [];
    this.routeAlives = [];
    this.listeners = [];
    this.afterListeners = [];
    this.locatorRedirectHandler = getLocatorRedirectHandler(this);
    this.setMode(mode);
  }
  /**
   * 添加路由监听器
   *
   * @param {function(e, config)} listener 监听器
   */


  Router.prototype.listen = function (listener) {
    this.listeners.push(listener);
  };

  Router.prototype.afterEach = function (listener) {
    this.afterListeners.push(listener);
  };
  /**
   * 移除路由监听器
   *
   * @param {Function} listener 监听器
   */


  Router.prototype.unlisten = function (listener) {
    var len = this.listeners.length;

    while (len--) {
      if (this.listeners[len] === listener) {
        this.listeners.splice(len, 1);
      }
    }

    len = this.afterListeners.length;

    while (len--) {
      if (this.afterListeners[len] === listener) {
        this.afterListeners.splice(len, 1);
      }
    }
  };
  /**
   * 启动路由功能
   *
   * @return {Object} san-router 实例
   */


  Router.prototype.start = function () {
    if (!this.isStarted) {
      this.isStarted = true;
      this.locator.on('redirect', this.locatorRedirectHandler);
      this.locator.start();
      this.locator.reload();
    }

    return this;
  };
  /**
   * 停止路由功能
   *
   * @return {Object} san-router 实例
   */


  Router.prototype.stop = function () {
    this.locator.un('redirect', this.locatorRedirectHandler);
    this.locator.stop();
    this.isStarted = false;
    return this;
  };
  /**
   * 设置路由模式
   *
   * @param {string} mode 路由模式，hash | html5
   * @return {Object} san-router 实例
   */


  Router.prototype.setMode = function (mode) {
    mode = mode.toLowerCase();

    if (this.mode === mode) {
      return;
    }

    this.mode = mode;
    var restart = false;

    if (this.isStarted) {
      this.stop();
      restart = true;
    }

    switch (mode) {
      case 'hash':
        this.locator = new HashLocator();
        break;

      case 'html5':
        this.locator = new HTML5Locator();
    }

    if (restart) {
      this.start();
    }

    return this;
  };
  /**
   * 执行路由
   *
   * @private
   * @param {Object} routeItem 路由项
   * @param {Object} e 路由信息
   */


  Router.prototype.doRoute = function (routeItem, e) {
    var isUpdateAlive = false;
    var len = this.routeAlives.length;

    while (len--) {
      var routeAlive = this.routeAlives[len];

      if (routeAlive.id === routeItem.id) {
        routeAlive.component.data.set('route', e);

        routeAlive.component._callHook('route');

        isUpdateAlive = true;
      } else {
        routeAlive.component.dispose();
        this.routeAlives.splice(len, 1);
      }
    }

    if (isUpdateAlive) {
      return;
    }

    if (routeItem.Component) {
      if (isComponent(routeItem.Component)) {
        this.attachCmpt(routeItem, e);
      } else {
        var me = this;
        routeItem.Component().then(function (Cmpt) {
          // eslint-disable-line
          if (isComponent(Cmpt)) {
            routeItem.Component = Cmpt;
          } else if (Cmpt.__esModule && isComponent(Cmpt['default'])) {
            routeItem.Component = Cmpt['default'];
          }

          me.attachCmpt(routeItem, e);
        });
      }
    } else {
      routeItem.handler.call(this, e);
    }
  };

  Router.prototype.attachCmpt = function (routeItem, e) {
    var component = new routeItem.Component();
    component.data.set('route', e);

    component._callHook('route');

    var target = routeItem.target;
    var targetEl = elementSelector(target);

    if (!targetEl) {
      throw new Error('[SAN-ROUTER ERROR] ' + 'Attach failed, target element "' + routeItem.target + '" is not found.');
    }

    component.attach(targetEl);
    this.routeAlives.push({
      component: component,
      id: routeItem.id
    });
    this.afterListeners.forEach(listener => {
      listener.call(router, routeItem);
    });
  };
  /**
   * 添加路由项
   * 当规则匹配时，路由将优先将Component渲染到target中。如果没有包含Component，则执行handler函数
   *
   * @private
   * @param {Object} config 路由项配置
   * @param {string|RegExp} config.rule 路由规则
   * @param {Function?} config.handler 路由函数
   * @param {Function?} config.Component 路由组件
   * @param {string} config.target 路由组件要渲染到的目标位置
   * @return {Object} san-router 实例
   */


  Router.prototype.add = function (config) {
    var rule = config.rule;
    var keys = [''];

    if (typeof rule === 'string') {
      // 没用path-to-regexp，暂时不提供这么多功能支持
      var regText = rule.replace(/\/:([a-z0-9_-]+)(?=\/|$)/ig, function (match, key) {
        keys.push(key);
        return '/([^/\\s]+)';
      });
      rule = new RegExp('^' + regText + '$', 'i');
    }

    if (!(rule instanceof RegExp)) {
      throw new Error('[SAN-ROUTER ERROR] Rule must be string or RegExp!');
    }

    var id = guid();
    this.routes.push({
      id: id,
      rule: rule,
      handler: config.handler,
      keys: keys,
      target: config.target || '#main',
      Component: config.Component,
      config: config
    });
    return this;
  };

  var router = new Router();

  var Link = __webpack_require__(0).defineComponent({
    template: '<a href="{{hrefPrefix}}{{href}}" onclick="return false;" on-click="clicker($event)" ' + 'target="{{target}}" class="{{isActive ? activeClass : \'\'}}"><slot/></a>',
    clicker: function (e) {
      var href = this.data.get('href');

      if (typeof href === 'string') {
        router.locator.redirect(href.replace(/^#/, ''));
      }

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    inited: function () {
      var me = this;

      this.routeListener = function (e) {
        me.data.set('isActive', e.url === me.data.get('href'));
      };

      this.routeListener({
        url: router.locator.current
      });
      router.listen(this.routeListener);
    },
    disposed: function () {
      router.unlisten(this.routeListener);
      this.routeListener = null;
    },
    initData: function () {
      return {
        isActive: false,
        hrefPrefix: router.mode === 'hash' ? '#' : ''
      };
    },
    computed: {
      href: function () {
        var url = this.data.get('to') || '';
        return resolveURL(url, router.locator.current);
      }
    }
  });

  var main = {
    /**
     * 路由链接的 San 组件
     */
    Link: Link,
    router: router,
    Router: Router,
    HashLocator: HashLocator,
    HTML5Locator: HTML5Locator,
    resolveURL: resolveURL,
    parseURL: parseURL,
    version: '1.2.2'
  }; // For AMD

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (main),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @file Event Hub
 */

const hub = new san__WEBPACK_IMPORTED_MODULE_0__["Component"]({});
global.hub = hub;
/* harmony default export */ __webpack_exports__["a"] = (hub);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_san_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _common_san_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_san_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);
/* harmony import */ var _content_area__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_area__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(145);
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_hub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'router-link': _common_san_router__WEBPACK_IMPORTED_MODULE_1__["Link"],
    'content-area': _content_area__WEBPACK_IMPORTED_MODULE_2___default.a,
    drawer: (_components_drawer__WEBPACK_IMPORTED_MODULE_4___default()),
    tree: (_components_tree__WEBPACK_IMPORTED_MODULE_3___default())
  },
  dataTypes: {
    docit: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].object
  },
  computed: {
    sidebar() {
      const docit = this.data.get('docit');
      const sidebar = docit.themeConfig.sidebar;
      const current = docit.pathname || location.pathname;

      if (sidebar[current]) {
        return sidebar[current];
      }

      for (let route in sidebar) {
        let list = sidebar[route];

        for (let i = 0; i < list.length; i++) {
          if (list[i].path === current) {
            return list;
          }
        }
      }

      return sidebar['/'] || [];
    }

  },

  initData() {
    return {
      isShowSidebar: true,
      selectedNode: []
    };
  },

  inited() {
    _common_hub__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].on('RouterChanged', this.isActive.bind(this));
  },

  isActive(e) {
    const selected = [];
    const base = _common_utils__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].base;
    const sidebar = this.data.get('sidebar');
    _common_utils__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].treeWalk(sidebar, item => {
      if (base + item.path === e.path) {
        selected.push(item);
      }
    });
    this.data.set('selectedNodes', selected);
  },

  getPath(node) {
    return _common_utils__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].base + node.path;
  },

  onClick(e) {
    const target = e.target;
    const href = target.getAttribute('data-href');
    global.history.pushState({}, '', href);
  }

});
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var san_src_browser_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var san_src_browser_on__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san_src_browser_on__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var san_src_browser_un__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var san_src_browser_un__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(san_src_browser_un__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    tree: (_components_tree__WEBPACK_IMPORTED_MODULE_2___default())
  },

  initData() {
    return {
      toc: {},
      isShowToc: true,
      selectedNodes: []
    };
  },

  inited() {
    let toc = {}; // SSR 时，可从最外层传入docit；client-entry时，从全局变量取

    const docit = this.data.get('docit');

    if (docit && docit.toc) {
      toc = docit.toc;
    } else if (global.SAN_DOCIT && global.SAN_DOCIT.toc) {
      toc = global.SAN_DOCIT.toc;
    }

    this.data.set('toc', toc);
  },

  attached() {
    // router 子组件无法通过组件事件或DOM树向上传递事件
    global.hub.on('changed', this.onChanged.bind(this));
    this.__onScroll = this.onScroll.bind(this);
    this.__onResize = this.onResize.bind(this);
    san_src_browser_on__WEBPACK_IMPORTED_MODULE_0___default()(global, 'scroll', this.__onScroll);
    san_src_browser_on__WEBPACK_IMPORTED_MODULE_0___default()(global, 'resize', this.__onResize);
    this.initScroll();
    this.resize(); // SSR 时默认存在 HTML，清空后由 Router 渲染

    this.ref('view').innerHTML = '';
  },

  getHash(hash) {
    const docit = this.data.get('docit');
    const pathname = docit.pathname ? _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].base + docit.pathname : location.pathname;
    return pathname + '#' + hash;
  },

  onChanged(toc) {
    this.data.set('toc', toc);
    this.nextTick(this.initScroll.bind(this));
    this.resize();
  },

  getTocCount() {
    const toc = this.data.get('toc');
    let count = 0;
    _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].treeWalk(toc, () => count++);
    return count;
  },

  onResize() {
    if (this.timer) {
      global.clearTimeout(this.timer);
    }

    this.timer = global.setTimeout(() => {
      this.resize();
      this.timer = null;
    }, 10);
  },

  resize() {
    const width = document.documentElement.clientWidth || document.body.clientWidth;
    const isShowToc = width > 1000 && this.getTocCount() > 2;

    if (isShowToc !== this.data.get('isShowToc')) {
      this.data.set('isShowToc', isShowToc);
    }

    const isShowSidebar = width > 800;

    if (isShowSidebar !== this.parent.data.get('isShowSidebar')) {
      this.parent.data.set('isShowSidebar', isShowSidebar);
    }
  },

  initScroll() {
    const view = this.ref('view');
    const doms = view.querySelectorAll('H2, H3');

    if (!doms) {
      return;
    }

    this.postions = [];
    this.hashs = [];
    doms.forEach(dom => {
      this.postions.push(dom.offsetTop);
      this.hashs.push(dom.id);
    });
    const len = this.hashs.length;
    this.postions[len] = Number.MAX_VALUE;
    this.hashs[len] = this.hashs[this.hashs.length - 1];
    const toc = this.data.get('toc');

    if (toc && toc.children && toc.children.length > 0) {
      this.data.set('selectedNodes', [toc.children[0]]);
    }
  },

  onScroll(evt) {
    if (this.timer) {
      global.clearTimeout(this.timer);
    }

    this.timer = global.setTimeout(() => {
      this.scrollPostion();
      this.timer = null;
    }, 10);
  },

  scrollPostion() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const index = this.postions.findIndex(pos => pos >= scrollTop);

    if (index !== -1) {
      this.changeSelected(this.hashs[index]);
    }
  },

  changeSelected(hash) {
    if (this.selected === hash) {
      return;
    }

    const selected = [];
    const toc = this.data.get('toc');
    _common_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].treeWalk(toc, item => {
      if (item.hash === hash) {
        selected.push(item);
      }
    });
    this.data.set('selectedNodes', selected);
    this.selected = hash;
  },

  detached() {
    san_src_browser_un__WEBPACK_IMPORTED_MODULE_1___default()(global, 'scroll', this.__onScroll);
    san_src_browser_un__WEBPACK_IMPORTED_MODULE_1___default()(global, 'resize', this.__onResize);
  }

});
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// SSR 不支持 self 啊。。
    // 'tree-node': 'self'
  },
  dataTypes: {
    treeNode: san__WEBPACK_IMPORTED_MODULE_0__["DataTypes"].object
  },

  getNodeId(node) {
    return node.path || node.hash;
  }

});
/* san-hmr disable */

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  initData() {
    return {
      isOpened: false
    };
  },

  onClick() {
    this.data.set('isOpened', !this.data.get('isOpened'));
  }

});
/* san-hmr disable */

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  initData() {
    return {
      isExpand: false
    };
  },

  toggleExpand() {
    this.data.set('isExpand', !this.data.get('isExpand'));
  }

});
/* san-hmr disable */

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});
/* san-hmr disable */

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);

// EXTERNAL MODULE: ../src/components/tree-node.san
var tree_node = __webpack_require__(144);
var tree_node_default = /*#__PURE__*/__webpack_require__.n(tree_node);

// CONCATENATED MODULE: ../src/common/dom.js
const hasClass = (dom, name) => {
  return new RegExp('(\\s|^)' + name + '(\\s|$)').test(dom.className);
};

const addClass = (dom, name) => {
  if (hasClass(dom, name)) {
    return;
  }

  dom.className += ' ' + name;
};

const removeClass = (dom, name) => {
  if (!hasClass(dom, name)) {
    return;
  }

  const reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
  dom.className = dom.className.replace(reg, '');
};

/* harmony default export */ var dom = ({
  hasClass,
  addClass,
  removeClass
});
// CONCATENATED MODULE: ../src/components/tree.san?lang=js&san=&type=script



/* harmony default export */ var treelang_js_san_type_script = __webpack_exports__["default"] = ({
  components: {
    'tree-node': tree_node_default.a
  },
  dataTypes: {
    treeData: san_dev["DataTypes"].object,
    selectedNodes: san_dev["DataTypes"].array
  },

  attached() {
    this.watch('selectedNodes', this.active);
    const selectedNodes = this.data.get('selectedNodes');

    if (selectedNodes && selectedNodes.length > 0) {
      this.active(selectedNodes);
    }
  },

  active(val) {
    const list = this.el.querySelectorAll('li[data-id]');

    for (let i = 0; i < list.length; i++) {
      const el = list[i];
      const dataId = el.getAttribute('data-id');
      const finded = val.find(item => {
        return dataId === (item.path || item.hash);
      });
      const isActive = finded !== undefined;
      isActive ? dom.addClass(el, 'active') : dom.removeClass(el, 'active');
    }
  }

});
/* san-hmr disable */

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        __webpack_require__(221);
var injectStyles = [];

        var template = __webpack_require__(222);
        
        var script = __webpack_require__(135).default;
        module.exports = __webpack_require__(135);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(223);
        
        var script = __webpack_require__(136).default;
        module.exports = __webpack_require__(136);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(225);
        
        var script = __webpack_require__(137).default;
        module.exports = __webpack_require__(137);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        __webpack_require__(226);
var injectStyles = [];

        var template = __webpack_require__(227);
        
        var script = __webpack_require__(138).default;
        module.exports = __webpack_require__(138);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        __webpack_require__(228);
var injectStyles = [];

        var template = __webpack_require__(229);
        
        var script = __webpack_require__(139).default;
        module.exports = __webpack_require__(139);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(231);
        
        var script = __webpack_require__(140).default;
        module.exports = __webpack_require__(140);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(224);
        
        var script = __webpack_require__(141).default;
        module.exports = __webpack_require__(141);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_layout_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_layout_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_layout_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

// Module
var code = " <div id=\"site\"> <header id=\"header\"> <a href=\"{{docit.base}}\" class=\"navbar\"> <img src=\"{{docit.base + docit.logo}}\" alt=\"Home\" class=\"logo\"/> <span>{{docit.title}}</span> </a> <ul> <li s-for=\"nav in docit.themeConfig.nav\"> <a target=\"{{nav.target || '_blank'}}\" href=\"{{nav.link}}\"> {{nav.text}} </a> </li> </ul> </header> <aside s-if=\"isShowSidebar\" id=\"sidebar\" class=\"sidebar\"> <tree treeData=\"{{sidebar}}\" selectedNodes=\"{{selectedNodes}}\"> <router-link s-if=\"treeNode.path\" to=\"{{getPath(treeNode)}}\">{{treeNode.title}}</router-link> <span s-else>{{treeNode.title}}</span> </tree> </aside> <drawer s-else class=\"sidebar\" style=\"width:0\"> <tree treeData=\"{{sidebar}}\" selectedNodes=\"{{selectedNodes}}\" style=\"padding:50px 0\"> <router-link s-if=\"treeNode.path\" to=\"{{getPath(treeNode)}}\">{{treeNode.title}}</router-link> <span s-else>{{treeNode.title}}</span> </tree> </drawer> <content-area docit=\"{{docit}}\" class=\"{{isShowSidebar ? '' : 'hidden'}}\"></content-area> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// Module
var code = " <article id=\"content\"> <div id=\"router-view\" class=\"router-view {{isShowToc ? '' : 'hidden'}}\" s-ref=\"view\"> {{docit.content | raw}} </div> <aside class=\"toc\" s-if=\"isShowToc\"> <tree treeData=\"{{toc}}\" selectedNodes=\"{{selectedNodes}}\"> <a href=\"{{getHash(treeNode.hash)}}\">{{treeNode.title}}</a> </tree> </aside> </article> ";
// Exports
module.exports = code;

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// Module
var code = " <ul class=\"tree\"> <tree-node s-for=\"treeNode in treeData.children\" treeNode=\"{{treeNode}}\" selectedNodes=\"{{selectedNodes}}\"> <slot var-treeNode=\"treeNode\"></slot> </tree-node> </ul> ";
// Exports
module.exports = code;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// Module
var code = " <li data-id=\"{{getNodeId(treeNode)}}\"> <slot var-treeNode=\"treeNode\"></slot> <ul s-if=\"treeNode.children\"> <li data-id=\"{{getNodeId(treeNode2)}}\" s-for=\"treeNode2 in treeNode.children\"> <slot var-treeNode=\"treeNode2\"></slot> <ul s-if=\"treeNode2.children\"> <li data-id=\"{{getNodeId(treeNode3)}}\" s-for=\"treeNode3 in treeNode2.children\"> <slot var-treeNode=\"treeNode3\"></slot> <ul s-if=\"treeNode3.children\"> <li data-id=\"{{getNodeId(treeNode4)}}\" s-for=\"treeNode4 in treeNode3.children\"> <slot var-treeNode=\"treeNode4\"></slot> </li> </ul> </li> </ul> </li> </ul> </li> ";
// Exports
module.exports = code;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_drawer_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_drawer_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_drawer_san_lang_less_scoped_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"drawer-wrapper\"> <div class=\"drawer drawer-left {{isOpened ? 'drawer-open' : ''}}\"> <div class=\"drawer-mask\" on-click=\"onClick\"></div> <div class=\"drawer-content-wrapper\"> <div class=\"drawer-content\"><slot></slot></div> <div class=\"drawer-handle\" on-click=\"onClick\"> <i class=\"drawer-handle-icon\"></i> </div> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_13_2_node_modules_san_loader_index_js_codebox_san_lang_less_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// Module
var code = " <section class=\"code-box {{isExpand ? 'expand' : ''}}\"> <section class=\"code-box-demo\"> <slot name=\"code-preview\"></slot> </section> <section class=\"code-box-meta\"> <slot name=\"text-place-holder\"></slot> <span class=\"code-expand-icon\" on-click=\"toggleExpand\"> <img alt=\"expand code\" src=\"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg\" class=\"{{isExpand ? 'code-expand-icon-hide':'code-expand-icon-show'}}\"> <img alt=\"expand code\" src=\"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg\" class=\"{{isExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}}\"> </span> </section> <section class=\"highlight-wrapper {{isExpand ? 'highlight-wrapper-expand' : ''}}\"> <slot name=\"code-place-holder\"></slot> </section> </section> ";
// Exports
module.exports = code;

/***/ }),

/***/ 230:
/***/ (function(module, exports) {



/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// Module
var code = " <div>Not Found</div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 233;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ client_entry_Index; });

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);

// EXTERNAL MODULE: ../src/views/layout.san
var layout = __webpack_require__(142);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!../src/styles/index.less
var styles = __webpack_require__(34);

// CONCATENATED MODULE: ../src/styles/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(styles["a" /* default */], options);



/* harmony default export */ var src_styles = (styles["a" /* default */].locals || {});
// EXTERNAL MODULE: ../src/common/hub.js
var hub = __webpack_require__(13);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san-component/src/index.js
var src = __webpack_require__(1);

// EXTERNAL MODULE: ../plugins/components/codebox.san
var codebox = __webpack_require__(146);
var codebox_default = /*#__PURE__*/__webpack_require__.n(codebox);

// CONCATENATED MODULE: ../src/common/register-components.js


const components = {
  "codebox": codebox_default.a
};
Object(src["b" /* registerComponents */])(components);
// EXTERNAL MODULE: /Volumes/Source/san/santd/docs/.sandocit/theme/index.js
var theme = __webpack_require__(230);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!../plugins/theme/styles/index.less
var theme_styles = __webpack_require__(36);

// CONCATENATED MODULE: ../plugins/theme/styles/index.less

            

var styles_options = {};

styles_options.insert = "head";
styles_options.singleton = false;

var styles_update = injectStylesIntoStyleTag_default()(theme_styles["a" /* default */], styles_options);



/* harmony default export */ var plugins_theme_styles = (theme_styles["a" /* default */].locals || {});
// CONCATENATED MODULE: ../plugins/theme/index.js

// CONCATENATED MODULE: ../src/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class src_Index extends san_dev["Component"] {}

_defineProperty(src_Index, "components", {
  layout: layout_default.a
});

_defineProperty(src_Index, "dataTypes", {
  docit: san_dev["DataTypes"].object
});

_defineProperty(src_Index, "template", '<layout docit="{{docit}}"><layout>');

;
// EXTERNAL MODULE: ../src/common/san-router.js
var san_router = __webpack_require__(10);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/NProgress/nprogress.js
var nprogress = __webpack_require__(14);
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// EXTERNAL MODULE: ../src/common/utils.js
var utils = __webpack_require__(9);

// EXTERNAL MODULE: ../src/views/not-found.san
var not_found = __webpack_require__(147);
var not_found_default = /*#__PURE__*/__webpack_require__.n(not_found);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__(232);

// CONCATENATED MODULE: ../src/router/index.js






san_router["router"].setMode('html5'); // Webpack Inject

const config = {"base":"/santd/","title":"santd","head":[["link",{"rel":"icon","href":"/favicon.ico"}]],"logo":"logo.svg","themeConfig":{"nav":[{"text":"San","link":"https://baidu.github.io/san/"},{"text":"Santd","link":"https://ecomfe.github.io/santd/"}],"sidebar":{"/":{"children":[{"path":"/introduce/","filename":"/Volumes/Source/san/santd/docs/introduce.md","title":"Ant Design of San"},{"path":"/","filename":"/Volumes/Source/san/santd/docs/quickstart.md","title":"快速上手"},{"path":"/theme/","filename":"/Volumes/Source/san/santd/docs/theme.md","title":"定制主题"},{"path":"/changelog/","filename":"/Volumes/Source/san/santd/docs/changelog.md","title":"更新日志"},{"path":"/i18n/","filename":"/Volumes/Source/san/santd/docs/i18n.md","title":"国际化"},{"title":"组件","children":[{"title":"通用","children":[{"path":"/components/button/","filename":"/Volumes/Source/san/santd/src/button/docs/index.js","title":"Button 按钮"},{"path":"/components/icon/","filename":"/Volumes/Source/san/santd/src/icon/docs/index.js","title":"Icon 图标"}]},{"title":"布局","children":[{"path":"/components/grid/","filename":"/Volumes/Source/san/santd/src/grid/docs/index.js","title":"Grid 栅格"}]},{"title":"导航","children":[{"path":"/components/affix/","filename":"/Volumes/Source/san/santd/src/affix/docs/index.js","title":"Affix 固钉"}]}]}]}}},"headHtmlSnippet":"<link rel=\"icon\" href=\"/favicon.ico\"></link>"};
const router_components = {
  "/": () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.t.bind(null, 206, 7)),
  "/basic/": () => Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(21)]).then(__webpack_require__.t.bind(null, 207, 7)),
  "/block/": () => Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(20)]).then(__webpack_require__.t.bind(null, 208, 7)),
  "/changelog/": () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.t.bind(null, 209, 7)),
  "/i18n/": () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.t.bind(null, 210, 7)),
  "/introduce/": () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.t.bind(null, 211, 7)),
  "/quickstart/": () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.t.bind(null, 212, 7)),
  "/theme/": () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.t.bind(null, 213, 7)),
  "/components/button/": () => Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 217)),
  "/components/icon/": () => Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 215)),
  "/components/grid/": () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 216)),
  "/components/affix/": () => Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 214))
};
const base = utils["a" /* default */].base;
const sidebar = config.themeConfig.sidebar;

const addRouter = node => {
  if (!node || !node.path) {
    return;
  }

  const path = node.path;
  let component = router_components[path] ? router_components[path] : /\.js/.test(node.filename) ? __webpack_require__(233)(node.filename) : '';

  if (component) {
    san_router["router"].add({
      rule: base + path,
      Component: component,
      target: '#router-view'
    });
  }
};

const parseRouter = (root, callback) => {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => {
    callback(item);

    if (item && item.children) {
      parseRouter(item, callback);
    }
  });
}; // router.add 注册路由


Object.keys(sidebar).forEach(path => {
  parseRouter(sidebar[path], node => addRouter(node));
});
const routes = [{
  path: '/notfound/',
  component: not_found_default.a
}];
routes.forEach(route => {
  san_router["router"].add({
    rule: base + route.path,
    Component: route.component,
    target: '#router-view'
  });
});
san_router["router"].listen(e => {
  // if (!components[e.path.substr(base.length)]) {
  //     // e.stop();
  //     // this.locator.stop();
  //     setTimeout(() => {this.locator.redirect(base + 'notfound/');}, 0);
  //     return;
  // }
  if (e.path === e.referrer) {
    e.stop();
    return;
  } // 加载进度条


  if (nprogress_default.a.isRendered) {
    nprogress_default.a.remove();
  }

  nprogress_default.a.inc();
  hub["a" /* default */].fire('RouterChanged', e);
});
san_router["router"].afterEach(e => {
  nprogress_default.a.done(true);
});
/* harmony default export */ var router = (san_router["router"]);
// CONCATENATED MODULE: ../src/client-entry.js
function client_entry_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class client_entry_Index extends san_dev["Component"] {
  attached() {
    router.start();
  }

}

client_entry_defineProperty(client_entry_Index, "components", {
  index: src_Index
});

client_entry_defineProperty(client_entry_Index, "template", '<index docit="{{docit}}"><index>');

client_entry_defineProperty(client_entry_Index, "computed", {
  docit() {
    return {"base":"/santd/","title":"santd","head":[["link",{"rel":"icon","href":"/favicon.ico"}]],"logo":"logo.svg","themeConfig":{"nav":[{"text":"San","link":"https://baidu.github.io/san/"},{"text":"Santd","link":"https://ecomfe.github.io/santd/"}],"sidebar":{"/":{"children":[{"path":"/introduce/","filename":"/Volumes/Source/san/santd/docs/introduce.md","title":"Ant Design of San"},{"path":"/","filename":"/Volumes/Source/san/santd/docs/quickstart.md","title":"快速上手"},{"path":"/theme/","filename":"/Volumes/Source/san/santd/docs/theme.md","title":"定制主题"},{"path":"/changelog/","filename":"/Volumes/Source/san/santd/docs/changelog.md","title":"更新日志"},{"path":"/i18n/","filename":"/Volumes/Source/san/santd/docs/i18n.md","title":"国际化"},{"title":"组件","children":[{"title":"通用","children":[{"path":"/components/button/","filename":"/Volumes/Source/san/santd/src/button/docs/index.js","title":"Button 按钮"},{"path":"/components/icon/","filename":"/Volumes/Source/san/santd/src/icon/docs/index.js","title":"Icon 图标"}]},{"title":"布局","children":[{"path":"/components/grid/","filename":"/Volumes/Source/san/santd/src/grid/docs/index.js","title":"Grid 栅格"}]},{"title":"导航","children":[{"path":"/components/affix/","filename":"/Volumes/Source/san/santd/src/affix/docs/index.js","title":"Affix 固钉"}]}]}]}}},"headHtmlSnippet":"<link rel=\"icon\" href=\"/favicon.ico\"></link>"};
  }

});

; // 组件反解：传入el

new client_entry_Index({
  el: document.getElementById('site')
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const base = (() => {
  const baseUrl = "/santd/";
  const base = baseUrl.length > 1 ? baseUrl.slice(0, -1) : '';
  return base;
})();

const treeWalk = (root, callback) => {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => {
    callback(item);

    if (item.children) {
      treeWalk(item, callback);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  base,
  treeWalk
});

/***/ })

/******/ });