"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var BookService =
/*#__PURE__*/
function () {
  function BookService() {
    (0, _classCallCheck2["default"])(this, BookService);
  }

  (0, _createClass2["default"])(BookService, null, [{
    key: "getAllBooks",
    value: function getAllBooks() {
      return _regenerator["default"].async(function getAllBooks$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _regenerator["default"].awrap(_models["default"].Book.findAll());

            case 3:
              return _context.abrupt("return", _context.sent);

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "addBook",
    value: function addBook(newBook) {
      return _regenerator["default"].async(function addBook$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regenerator["default"].awrap(_models["default"].Book.create(newBook));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "updateBook",
    value: function updateBook(id, _updateBook) {
      var bookToUpdate;
      return _regenerator["default"].async(function updateBook$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _regenerator["default"].awrap(_models["default"].Book.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              bookToUpdate = _context3.sent;

              if (!bookToUpdate) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return _regenerator["default"].awrap(_models["default"].Book.update(_updateBook, {
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              return _context3.abrupt("return", _updateBook);

            case 8:
              return _context3.abrupt("return", null);

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "getABook",
    value: function getABook(id) {
      var theBook;
      return _regenerator["default"].async(function getABook$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _regenerator["default"].awrap(_models["default"].Book.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              theBook = _context4.sent;
              return _context4.abrupt("return", theBook);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "deleteBook",
    value: function deleteBook(id) {
      var bookToDelete, deletedBook;
      return _regenerator["default"].async(function deleteBook$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _regenerator["default"].awrap(_models["default"].Book.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              bookToDelete = _context5.sent;

              if (!bookToDelete) {
                _context5.next = 9;
                break;
              }

              _context5.next = 7;
              return _regenerator["default"].awrap(_models["default"].Book.destroy({
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              deletedBook = _context5.sent;
              return _context5.abrupt("return", deletedBook);

            case 9:
              return _context5.abrupt("return", null);

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);
  return BookService;
}();

var _default = BookService;
exports["default"] = _default;
//# sourceMappingURL=BookService.js.map