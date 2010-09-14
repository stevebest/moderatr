/*
 * Commonly used application links
 */

exports.init = function (req) {
  var Path = require('vendor/couchapp/lib/path').init(req);

  var links = {
    "index" : Path.asset('index.html'),
    "questions" : Path.list('questions', 'latest-questions', {
      "descending" : true,
      "limit" : 20,
      "include_docs" : true
    }),
    "ask" : Path.show('question')
  };

  if (req.userCtx && req.userCtx.name) {
    var name = req.userCtx.name;
    links["myQuestions"] = Path.list('questions', 'questions-by-author', {
      "startkey" : [name],
      "endkey" : [name, {}],
      "include_docs" : true
    });
  }
  
  return links;
};
