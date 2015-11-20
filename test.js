var tape = require('tape');

tape('it works?', function (t) {
  t.plan(1)
  t.equal(require('./lib'), 'it works', 'module should be equal to "it works"');
});
