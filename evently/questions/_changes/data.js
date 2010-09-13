function (data) {
//  $.log(data);
  var p;
  return {
    questions : data.rows.map(function(r) {
      p = (r.doc && r.doc.profile) || {};
      p.id = r.id;
      p.question = r.doc && r.doc.question;
      p.created_at = $.prettyDate(r.doc.created_at);
      return p;
    })
  }
}

