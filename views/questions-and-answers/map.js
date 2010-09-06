/**
 * A collated view of questions and corresponding answers.
 */
function (doc) {
  if (doc.question) {
    emit([doc._id, 1], doc);
  } else if (doc.answer && doc.answerTo) {
    emit([doc.answerTo, 2], doc);
  }
}

