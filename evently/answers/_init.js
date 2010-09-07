function () {
  var widget = $(this);
  var db = $$(widget).app.db;

  // FIXME Is there a better way of getting question ID?
  var path = $$(widget).app.req.path;
  $$(widget).questionId = path[path.length - 1];

  var changes = db.changes(null, {
    'filter'   : 'moderatr/answers',
    'answerTo' : $$(widget).questionId
  });
  changes.onChange(function () {
    widget.trigger('reload');
  });

  widget.trigger('reload');
}
