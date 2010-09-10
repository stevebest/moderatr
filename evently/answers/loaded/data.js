function (event, data) {
  return {
    answers : data.rows.map(function (row) {
      var result = {
        id : row.doc._id,
        rev : row.doc._rev
      };
      result.answer = $.linkify(row.doc.answer);
      result.created_at = {
        raw : row.doc.created_at,
        pretty : $.prettyDate(row.doc.created_at)
      };
      result.profile = row.doc.profile;
      return result;
    })
  };
}
