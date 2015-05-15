var nopt = require('nopt')

module.exports = function(known, sh, argv, slice) {
  return function(def) {
    var parsed = nopt(known, sh, argv, slice)
    if (!def || typeof def !== 'object') {
      return parsed
    }
    var keys = Object.keys(def)
    for (var i=0, len=keys.length; i<len; i++) {
      var key = keys[i]
      if (!parsed.hasOwnProperty(key)) {
        parsed[key] = def[key]
      }
    }

    return parsed
  }
}
