function () {
  var widget = $(this);
  var db = $$(widget).app.db;
  var questionId = $$(widget).questionId;

  db.view('moderatr/answers', {
    'startkey' : [questionId],
    'endkey'   : [questionId, {}],
    'reduce'   : false,
    success : function (data) {
      widget.trigger('loaded', [data]);
    }
  });
}
