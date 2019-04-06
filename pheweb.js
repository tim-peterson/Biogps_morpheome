
//http://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

var filename = "/Users/timrpeterson/OneDrive\ -\ Washington University in St. Louis/Data/MORPHEOME/general/morpheome-3-22-19-aliases_name_only.csv";
// read the entire file into memory and then spit it out
var parse = require('csv-parse');
//require('should');
var fs = require("fs");

var request = require("request"),
  cheerio = require("cheerio");

  //https://github.com/alltherooms/throttled-request
  var throttledRequest = require('throttled-request')(request),
  startedAt = Date.now();

  throttledRequest.configure({
    requests: 1,
    milliseconds: function() {
      var minSeconds = 5, maxSeconds = 25;
      return Math.floor((Math.random() * (maxSeconds - minSeconds) + minSeconds) * 1000);  // in milliseconds
    }
  });//This will throttle the requests so no more than 1 is made every 1 to 3 seconds (random delay)


var input ='';
var values = [];
var writeToFileCounter=0;

var one = fs.readFile(filename, "utf-8", function(err, data){
  if (err) throw err;
  //console.log(data.length);
  input = data;

  //var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
  parse(input, function(err, output){ // {comment: '#'}
    //console.log(output);

    var len = output.length;

    len = 50; //TESTING

    output=output.slice(1,1000); //US only

   // console.log(output);

    for(var i=0; i<1; i++){

      //console.log(output[i][0]);
      //https://www.google.com/search?sclient=psy-ab&biw=1392&bih=681&noj=1&q=princeton+biology+faculty+directory&oq=princeton&gs_l=serp.1.1.35i39l2j0i20j0j0i20j0l5.22044.31415.1.33071.41.25.15.1.2.0.145.2033.22j3.25.0....0...1c.1.64.serp..1.40.2041.0.E7bHygTQVQE

      //var url = "https://www.google.com/search?q="+output[i][1]+"biology+faculty+directory";
      var url = "http://pheweb.sph.umich.edu:5000/gene/"+output[i][0];
      //console.log(url);
      googleIt(url);

    }

    //output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
  });

//  response.write(data, 'utf8');
  //response.end();
});


throttledRequest.on('request', function () {
  //console.log('Making a request. Elapsed time: %d ms', Date.now() - startedAt);
});



function googleIt(url){



    //console.log("outside google");
    throttledRequest(url, function (error, response, body) {


        //console.log("inside google"+body);

      	if (error) {
      	   //console.log("Couldn’t get page because of error: " + error);
      		return;
      	}

      	var $ = cheerio.load(body); //,
            //links = $(".st_pagination > li > a"); //bing
      		  //links = $(".r a"); //google
           // $ = cheerio.load(html);

            var textNode = $('head script').map((i, x) => x.children[0])
                                             .filter((i, x) => x && x.data.match(/significant_phenos/)).get(0);

            //console.log("textNode: \r\n");                                 
            //console.log(textNode);

            if (textNode){
                var scriptText = textNode.data.replace(/\r?\n|\r/g, "");


                //var scriptText = textNode.data.replace(/e-/g, "");
                 // console.log("scriptText: \r\n");
                 //console.log(scriptText);

                                              //.replace(/file:/g, '"file":')
                                              //.replace(/label:/g, '"label":');
                var jsonString = /significant_phenos = (.*);  window/.exec(scriptText);

                  //console.log("jsonString: \r\n");
                 //console.log(jsonString);

                var sources    = JSON.parse(jsonString);

                  console.log("sources: \r\n");
                 console.log(sources);

                fs.appendFile('genes.json', sources, function(err){ //JSON.stringify(emails, null, 4)
                    //console.log('File successfully written! - Check your project directory for the faculty.json file');
                });

            }
    

    }); //request(url to google)


} //googleIt
