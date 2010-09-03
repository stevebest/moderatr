function (data) {
//  $.log(data);
  var p;
  return {
    questions : data.rows.map(function(r) {
      p = (r.value && r.value.profile) || {};
      p.id = r.id;
      p.question = r.value && r.value.question;
      p.created_at = $.prettyDate(r.value.created_at);
      return p;
    })
  }
}

