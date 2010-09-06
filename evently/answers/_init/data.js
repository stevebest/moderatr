function (data) {
  $.log(data);

  var result = {
    answers : data.rows.map(function (row) {
      var answer = {};
      answer.answer = row.value.answer;
      answer.created_at = row.key[1];
      answer.pretty_created_at = $.prettyDate(answer.created_at);
      answer.profile = row.value.profile;
      return answer;
    })
  };
  return result;
}

