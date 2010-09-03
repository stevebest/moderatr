/**
 * A view showing answers to specific questions, sorted by creation date
 */
function (doc) {
  if (doc.answer && doc.answerTo && doc.created_at) {
    emit([doc.answerTo, doc.created_at], {
      answer : doc.answer,
      profile : doc.profile
    });
  }
}

