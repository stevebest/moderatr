function () {
  /*
   * Creates a new answer document and saves it.
   * TODO Validate answer before saving
   */
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.answerTo = $$("#question").id;
  fdoc.created_at = new Date();
  fdoc.profile = $$("#profile").profile;
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  form.trigger('answerAdded', [fdoc]);
  return false;
}
