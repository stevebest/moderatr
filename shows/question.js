function (doc) {
  var Mustache = require('vendor/couchapp/lib/mustache');
  var Markdown = require('vendor/couchapp/lib/markdown');
  // !json templates
  doc = doc || {};
  doc.question = Markdown.encode(doc.question || "");

  return Mustache.to_html(templates.question, doc, templates.partials);
}

