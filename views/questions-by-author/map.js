function (doc) {
  if (doc.question && doc.profile && doc.profile.name) {
    emit([doc.profile.name, doc.created_at], doc.question);
  }
}
