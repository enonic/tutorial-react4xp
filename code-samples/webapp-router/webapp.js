var thymeleaf = require('/lib/thymeleaf'); // Load template engine
var router = require('/lib/router')(); // Load router library

router.get('/', function() { return renderPage('Routing FTW'); } );
router.get('/page', function() { return renderPage('Gone to page, you have'); } );
router.get('/page/subpage', function() { return renderPage('Gone to sub page indeed, you have'); } );

function renderPage(message) {
  var model = {
    title: "Hello router",
    message: message
  };
  return  {
    body: thymeleaf.render(resolve('hello.html'), model)
  }
};

exports.get = function (req) {
    return router.dispatch(req);
};
