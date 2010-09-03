function (data, b) {
  var answer;
  var result = {
    answers : data.rows.map(function (row) {
      answer = {};
      answer.answer = row.value.answer;
//      answer.created_at = $.prettyDate(row.value.created_at);
      return answer;
    })
  };

  return result;
}

