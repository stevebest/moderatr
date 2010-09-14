function (doc, req) {
  var ddoc = this;
  var Mustache = require('vendor/couchapp/lib/mustache');
  var Markdown = require('vendor/couchapp/lib/markdown');
  var Path = require('vendor/couchapp/lib/path').init(req);

  var links = require('lib/links').init(req);

  var stash = {
    db : req.path[0],
    design : req.path[2],
    assets : Path.asset(),
    links : links
  };

  stash._id = doc._id;

  stash.question = doc || {};
  stash.question.question = Markdown.encode(doc.question || "");

  return Mustache.to_html(
      ddoc.templates.question,
      stash,
      ddoc.templates.partials);
}
