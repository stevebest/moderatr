function () {
  // Translate question text into English and use it as a question ID.
  var text = this.value;
  if (google && google.language && google.language.translate) {
    google.language.translate(text, 'ru', 'en', function(result) {
      if (result.translation) {
        $('#questionSlugPreview').html(result.translation);
      }
    });
  }
}
