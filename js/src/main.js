
(function(){

  var main = function(){

    var template = Handlebars.compile(tmpl.main);
    var context = {'text': 'Hello from javascript'};
    var html    = template(context);

    $('#viewport').append(html);

  };


  $(document).ready(function(){
    main();
  });

})();
