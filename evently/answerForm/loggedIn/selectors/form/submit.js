function () {
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.answerTo = $$("#question").id;
  fdoc.created_at = new Date();
  fdoc.profile = $$("#account").profile;
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
}
