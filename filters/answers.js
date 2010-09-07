function (doc, req) {
  // Allows one to filter only changes to answer documents,
  // and even answers to specific question.

  if (!doc.answer) return false;

  if (req.query.answerTo) {
    return doc.answerTo == req.query.answerTo;
  }
  return true;
}
