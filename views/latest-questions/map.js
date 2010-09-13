function (doc) {
  if (doc.question && doc.created_at) {
    emit(doc.created_at, doc.question);
  }
}
