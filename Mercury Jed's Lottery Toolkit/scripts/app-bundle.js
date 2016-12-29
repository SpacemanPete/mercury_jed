define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.textInput = "";
    }

    _createClass(App, [{
      key: 'textValue',
      get: function get() {
        var charArray = {
          'a': 1,
          'b': 2,
          'c': 3,
          'd': 4,
          'e': 5,
          'f': 6,
          'g': 7,
          'h': 8,
          'i': 9,
          'j': 10,
          'k': 11,
          'l': 12,
          'm': 13,
          'n': 14,
          'o': 15,
          'p': 16,
          'q': 17,
          'r': 18,
          's': 19,
          't': 20,
          'u': 21,
          'v': 22,
          'w': 23,
          'x': 24,
          'y': 25,
          'z': 26
        };

        return this.textInput.split('').filter(function (char) {
          return char.match(/[a-zA-Z]/g);
        }).map(function (char) {
          return charArray[char.toLowerCase()];
        }).reduce(function (prevNum, currentNum) {
          return prevNum + currentNum;
        }, 0);
      }
    }]);

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"header\">\r\n    <h1>Mercury Jed's Lottery Toolkit!</h1>\r\n    <p>This tool is a text to number value converter.</p>\r\n    <p>It sums up the numerical value of each character in the text.</p>\r\n    <p>Special characters and spaces are ignored.</p>\r\n  </div>\r\n\r\n  <div class=\"text-value\">Text value = ${textValue}</div>\r\n  <div class=\"text-input\">\r\n    <input type=\"text\" value.bind=\"textInput\" placeholder=\"Enter text here...\">\r\n  </div>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map