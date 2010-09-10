function (event, data) {
  var userCtx = $$('#account').userCtx;
  var isAdmin = userCtx && userCtx.roles
      && (userCtx.roles.indexOf('_admin') != -1);

  return {
    answers : data.rows.map(function (row) {
      var result = {
        id : row.doc._id,
        rev : row.doc._rev
      };

      // TODO Улучшить форматирование ответов
      result.answer = $.linkify(row.doc.answer);

      result.created_at = {
        raw : row.doc.created_at,
        pretty : $.prettyDate(row.doc.created_at)
      };

      result.profile = row.doc.profile;

      result.actions = {
        edit : isAdmin || (false),
        delete : isAdmin
      };

      return result;
    })
  };
}
