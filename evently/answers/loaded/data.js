function (event, data) {
  return {
    answers : data.rows.map(function (row) {
      var result = {
        id : row.id
      };
      result.answer = $.linkify(row.value.answer);
      result.created_at = {
        raw : row.key[1],
        pretty : $.prettyDate(row.key[1])
      };
      result.profile = row.value.profile;
      return result;
    })
  };
}
