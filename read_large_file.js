var csv = require('csv-parser')
var fs = require('fs')
var data = []

//NODE_OPTIONS=--max-old-space-size=8192

fs.createReadStream('/Users/timrpeterson/CRISPRia_pearsons_results_13_good_screens_no_quotes_v2.csv')
  .pipe(csv())
  .on('data', function (row) {
  	//console.log(row)
  	//process.exit()
    data.push(row)
  })
  .on('end', function () {
    console.log('Data loaded')
  })