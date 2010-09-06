function (event, data) {
  return {
    answers : data.rows.map(function (row) {
      var answer = {};
      answer.answer = $.linkify(row.value.answer);
      answer.created_at = row.key[1];
      answer.pretty_created_at = $.prettyDate(answer.created_at);
      answer.profile = row.value.profile;
      return answer;
    })
  };
}
