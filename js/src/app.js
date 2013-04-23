
(function($){

  var main = function(){

    var template = Handlebars.compile($.tmpl.main);
    var context = {'text': 'Hello from handlebars+javascript'};
    var html    = template(context);

    $('#viewport').html(html);

  };


  $(document).ready(function(){
    main();
  });

})(jQuery);