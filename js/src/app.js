
(function($){

  var main = function(){

    var template = Handlebars.compile($.tmpl.main);
    var context = {'text': '\'Don\'t be afraid of making mistakes. If you hide your ignorance, no one will hit you and you\'ll never learn.'};
    var html    = template(context);

    $('#viewport').prepend(html);

  };


  $(document).ready(function(){
    main();
  });

})(jQuery);
