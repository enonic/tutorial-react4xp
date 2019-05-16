var thymeleaf = require('/lib/thymeleaf'); // Load template engine

exports.get = function (req) {
  var view = resolve('hello.html') // Lookup template file
  var model = { // Build model object
    title: "Hello Web app",
    message: "Views are working too!"
  };

  return  {
    body: thymeleaf.render(view, model) // Render page
  }

};
