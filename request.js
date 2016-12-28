

var requestify = require('requestify');

requestify.get('http://mygene.info/v3/gene/').then(function(response) {
    // Get the response body
    response.getBody();
});


