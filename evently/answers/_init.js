function () {
  var widget = $(this);
  var db = $$(widget).app.db;
  var questionId = $$(widget).app.req.path.pop();

  db.view(db.name + '/answers', {
    'startkey' : [questionId],
    'endkey'   : [questionId, {}],
    'reduce'   : false,
    success : function (data) {
      widget.trigger('loaded', [data]);
    }
  });
}
