
(function($){

  var main = function(){

    var template = Handlebars.compile($.tmpl.main);
    var context = {'text': 'Hello from handlebars+javascript'};
    var html    = template(context);

    $('#viewport').prepend(html);

  };

  var parseTweets = function(json){

    var template = Handlebars.compile($.tmpl.tweets);
    var context = {tweet: json.results};
    var html = template(context);

    $('#tweets').append(html);
  };

  var getTweets = function(){

    $.ajax({
      //url: '/twitter/search.json',
      url: '/static/testdata.json',
      data: {'q': 'from:horse_js'},
      dataType: 'json',
      type: 'get',
      success: parseTweets
    });

  };


  $(document).ready(function(){
    main();
    getTweets();
  });

})(jQuery);
