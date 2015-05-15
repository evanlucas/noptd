var nopt = require('./')
  , test = require('tape')

test('should work without defaults', function(t) {
  t.plan(1)
  var input = ['--help']
  var parsed = nopt({
    help: Boolean
  , name: String
  }, null, input, 0)()
  t.equal(parsed.help, true)
})

test('should work with defaults', function(t) {
  t.plan(4)
  var input = ['--help']
  var parsed = nopt({
    help: Boolean
  , name: String
  }, null, input, 0)({
    name: 'evan'
  })
  t.equal(parsed.help, true)
  t.equal(parsed.name, 'evan')

  var input = ['--help', '--name', 'name']
  var parsed = nopt({
    help: Boolean
  , name: String
  }, null, input, 0)({
    name: 'evan'
  })
  t.equal(parsed.help, true)
  t.equal(parsed.name, 'name')
})
