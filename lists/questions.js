function () {
  var Mustache = require('vendor/couchapp/lib/mustache');
  // !json templates

  start({
    "headers": {
      "Content-Type": "text/html;charset=utf-8"
     }
  });

  var row;
  while (row = getRow()) {
    Mustache.to_html(templates.partials.question, row.value, {}, send);
  }
}

