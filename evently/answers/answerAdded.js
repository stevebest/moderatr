function (e, answer) {
  // Render and append an answer to the list using fade-in animation
//  answer.pretty_created_at = $.prettyDate(answer.created_at);
  var html = $.mustache($$(this).evently.loaded.mustache,
                        { 'answers' : [answer] });
  var element = $(html);
  $(this).append(element.hide().fadeIn('slow'));
}
