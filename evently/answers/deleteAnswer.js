function (event) {
  var widget = $(this);
  var db = $$(this).app.db;

  var link = $(event.target);
  var answerDiv = link.parents('div.answer');
  var idRev = answerDiv.attr('id').match(/^(?:answer-)(.*?)-(.*)$/);
  var answerId = idRev[1];
  var rev = idRev[2];

  db.removeDoc({
    _id : answerId,
    _rev : rev
  }, {
    error : function (status, error, reason) {
      $.log('ACHTUNG!');
    },
    success : function () {
      // Falling out animation
      answerDiv.animate({ top: "200px", "opacity": 0 }, function () {
        answerDiv.remove();
        widget.trigger('reload');
      });
    }
  });
}
