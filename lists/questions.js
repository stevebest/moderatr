function () {
  var ddoc = this;
  var Mustache = require('vendor/couchapp/lib/mustache');
  var List = require("vendor/couchapp/lib/list");

  function html() {
    var list = [], r = null;
    while (r = getRow()) { 
      list.push(r);
    }

    var stash = {
      questions : list.map(function (r) {
        var q = r.doc;
        return {
          "id" : r.id,
          "question" : q.question,
          "created_at" : {
            "raw"    : q.created_at,
            "pretty" : "Не так давно"
          },
          "profile" : q.profile
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
