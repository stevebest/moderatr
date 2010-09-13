function (doc) {
  var ddoc = this;
  var Mustache = require('vendor/couchapp/lib/mustache');
  var Markdown = require('vendor/couchapp/lib/markdown');

  doc = doc || {};
  doc.question = Markdown.encode(doc.question || "");

  return Mustache.to_html(
      ddoc.templates.question,
      doc,
      ddoc.templates.partials);
}
