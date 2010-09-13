function () {
  var text = this.value;
  text = text || "";
  text = text.toLowerCase().match(/^([^!?.]+)[!?.]?/);
  text = text[0];

  // Translate question text into English and use it as a question ID.
  function generateSlug() {
    if (google && google.language && google.language.translate) {
      google.language.translate(text, 'ru', 'en', function(result) {
        if (result.translation) {
          var slug = result.translation.toLowerCase();
          slug = slug.replace(/\W+/g, ' ');
          slug = slug.replace(/^\s+/, '').replace(/\s+$/, '');
          slug = slug.replace(/\s+/g, '-');
          $('input[name=slug]').val(slug);
        }
      });
    }
  }

  if (text != $$(this).text) {
    $$(this).text = text;
    if ($$(this).timeout) {
      clearTimeout($$(this).timeout);
    }
    $$(this).timeout = setTimeout(generateSlug, 800);
  }
}
