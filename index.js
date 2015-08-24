var qwery = require('qwery')
var unescape = require('lodash/string/unescape')

module.exports = function () {
  return qwery('script[type="application/json"]').reduce(function (obj, el) {
    var key = el.getAttribute('data-key')

    if (key) {
      try {
        obj[key] = JSON.parse(unescape(el.textContent))
      } catch (e) {
      }
    }

    return obj
  }, {})
}
