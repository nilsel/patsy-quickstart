

//(function(tmpl, $, Handlebars){

  var main = function(){
    console.log(tmpl.main);

    var template = Handlebars.compile(tmpl.main);
    var context = {'text': 'Hello from javascript'};
    var html    = template(context);
    console.log(html);

    $('#viewport').html(html);

  };


$(document).ready(function(){
  main();
});

//})(tmpl, jQuery, Handlebars);