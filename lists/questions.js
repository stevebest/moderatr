function (head, req) {
  var ddoc = this;

  var Mustache = require('vendor/couchapp/lib/mustache');
  var Markdown = require('vendor/couchapp/lib/markdown');
  var Path = require('vendor/couchapp/lib/path').init(req);

  var List = require("vendor/couchapp/lib/list");

  function html() {
    var list = [], r = null;
    while (r = getRow()) { 
      list.push(r);
    }

    var stash = {
      db : req.path[0],
      design : req.path[2],
      assets : Path.asset(),

      questions : list.map(function (r) {
        var q = r.doc || null;
        if (!q) return;
        return {
          "id" : r.id,
          "question" : Markdown.encode(q.question),
          "created_at" : {
            "raw"    : q.created_at,
            "pretty" : "Не так давно"
          },
          "profile" : q.profile,

          "actions" : {
            "show" : Path.show('question', r.id)
          }
        };
      })
    };

    return Mustache.to_html(
        ddoc.templates.questions,
        stash,
        ddoc.templates.partials,
        List.send);
  };

  function atom() {
    var feed = <feed/>;
    return feed.toXMLString();
  };

  provides('html', html);
  provides('atom', atom);
}
