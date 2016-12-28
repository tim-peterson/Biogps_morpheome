

var samples = "GSM258609.CEL.gz		GSM258610.CEL.gz	GSM258611.CEL.gz	GSM258612.CEL.gz	GSM258613.CEL.gz	GSM258614.CEL.gz	GSM258615.CEL.gz	GSM258616.CEL.gz	GSM258617.CEL.gz	GSM258618.CEL.gz	GSM258619.CEL.gz	GSM258620.CEL.gz	GSM258621.CEL.gz	GSM258622.CEL.gz	GSM258623.CEL.gz	GSM258624.CEL.gz	GSM258625.CEL.gz	GSM258626.CEL.gz	GSM258627.CEL.gz	GSM258628.CEL.gz	GSM258629.CEL.gz	GSM258630.CEL.gz	GSM258631.CEL.gz	GSM258632.CEL.gz	GSM258633.CEL.gz	GSM258634.CEL.gz	GSM258635.CEL.gz	GSM258636.CEL.gz	GSM258637.CEL.gz	GSM258638.CEL.gz	GSM258639.CEL.gz	GSM258640.CEL.gz	GSM258641.CEL.gz	GSM258642.CEL.gz	GSM258643.CEL.gz	GSM258644.CEL.gz	GSM258645.CEL.gz	GSM258646.CEL.gz	GSM258647.CEL.gz	GSM258648.CEL.gz	GSM258649.CEL.gz	GSM258650.CEL.gz	GSM258651.CEL.gz	GSM258652.CEL.gz	GSM258653.CEL.gz	GSM258654.CEL.gz	GSM258655.CEL.gz	GSM258656.CEL.gz	GSM258657.CEL.gz	GSM258658.CEL.gz	GSM258659.CEL.gz	GSM258660.CEL.gz	GSM258661.CEL.gz	GSM258662.CEL.gz	GSM258663.CEL.gz	GSM258664.CEL.gz	GSM258665.CEL.gz	GSM258666.CEL.gz	GSM258667.CEL.gz	GSM258668.CEL.gz	GSM258669.CEL.gz	GSM258670.CEL.gz	GSM258671.CEL.gz	GSM258672.CEL.gz	GSM258673.CEL.gz	GSM258674.CEL.gz	GSM258675.CEL.gz	GSM258676.CEL.gz	GSM258677.CEL.gz	GSM258678.CEL.gz	GSM258679.CEL.gz	GSM258680.CEL.gz	GSM258681.CEL.gz	GSM258682.CEL.gz	GSM258683.CEL.gz	GSM258684.CEL.gz	GSM258685.CEL.gz	GSM258686.CEL.gz	GSM258687.CEL.gz	GSM258688.CEL.gz	GSM258689.CEL.gz	GSM258690.CEL.gz	GSM258691.CEL.gz	GSM258692.CEL.gz	GSM258693.CEL.gz	GSM258694.CEL.gz	GSM258695.CEL.gz	GSM258696.CEL.gz	GSM258697.CEL.gz	GSM258698.CEL.gz	GSM258699.CEL.gz	GSM258700.CEL.gz	GSM258701.CEL.gz	GSM258702.CEL.gz	GSM258703.CEL.gz	GSM258704.CEL.gz	GSM258705.CEL.gz	GSM258706.CEL.gz	GSM258707.CEL.gz	GSM258708.CEL.gz	GSM258709.CEL.gz	GSM258710.CEL.gz	GSM258711.CEL.gz	GSM258712.CEL.gz	GSM258713.CEL.gz	GSM258714.CEL.gz	GSM258715.CEL.gz	GSM258716.CEL.gz	GSM258717.CEL.gz	GSM258718.CEL.gz	GSM258719.CEL.gz	GSM258720.CEL.gz	GSM258721.CEL.gz	GSM258722.CEL.gz	GSM258723.CEL.gz	GSM258724.CEL.gz	GSM258725.CEL.gz	GSM258726.CEL.gz	GSM258727.CEL.gz	GSM258728.CEL.gz	GSM258729.CEL.gz	GSM258730.CEL.gz	GSM258731.CEL.gz	GSM258732.CEL.gz	GSM258733.CEL.gz	GSM258734.CEL.gz	GSM258735.CEL.gz	GSM258736.CEL.gz	GSM258737.CEL.gz	GSM258738.CEL.gz	GSM258739.CEL.gz	GSM258740.CEL.gz	GSM258741.CEL.gz	GSM258742.CEL.gz	GSM258743.CEL.gz	GSM258744.CEL.gz	GSM258745.CEL.gz	GSM258746.CEL.gz	GSM258747.CEL.gz	GSM258748.CEL.gz	GSM258749.CEL.gz	GSM258750.CEL.gz	GSM258751.CEL.gz	GSM258752.CEL.gz	GSM258753.CEL.gz	GSM258754.CEL.gz	GSM258755.CEL.gz	GSM258756.CEL.gz	GSM258757.CEL.gz	GSM258758.CEL.gz	GSM258759.CEL.gz	GSM258760.CEL.gz	GSM258761.CEL.gz	GSM258762.CEL.gz	GSM258763.CEL.gz	GSM258764.CEL.gz	GSM258765.CEL.gz	GSM258766.CEL.gz	GSM258767.CEL.gz	GSM258768.CEL.gz	GSM258769.CEL.gz	GSM258770.CEL.gz	GSM258771.CEL.gz	GSM258772.CEL.gz	GSM258773.CEL.gz	GSM258774.CEL.gz	GSM258775.CEL.gz	GSM258776.CEL.gz	GSM258777.CEL.gz	GSM258778.CEL.gz	GSM258779.CEL.gz	GSM258780.CEL.gz	GSM258781.CEL.gz	GSM258782.CEL.gz	GSM258783.CEL.gz	GSM258784.CEL.gz	GSM258785.CEL.gz	GSM258786.CEL.gz	GSM258787.CEL.gz	GSM258788.CEL.gz	GSM258789.CEL.gz	GSM258790.CEL.gz";

//https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=GSE10246 map GSM files to tissues

var arr = samples.trim().split(/\s+/g);

//console.log(arr.length);

for(var i = 0; i < arr.length; i++){
	if(arr[i].indexOf("258739") > -1 || arr[i].indexOf("258740") > -1){ //osteoblast day 21
		//console.log(i);

	}

	if(arr[i].indexOf("258625") > -1 || arr[i].indexOf("258626") > -1){
		//console.log(i);

	}


	if(arr[i].indexOf("258743") > -1 || arr[i].indexOf("258744") > -1){
		//console.log(i);

	}

	if(arr[i].indexOf("258681") > -1 || arr[i].indexOf("258682") > -1){
		//console.log(i);

	}

	if(arr[i].indexOf("258611") > -1 || arr[i].indexOf("258612") > -1){
		//console.log(i);

	}

	if(arr[i].indexOf("258613") > -1 || arr[i].indexOf("258614") > -1){
		//console.log(i);

	}

	if(arr[i].indexOf("258609") > -1 || arr[i].indexOf("258610") > -1){
		//console.log(i);

	}


	if(arr[i].indexOf("258677") > -1 || arr[i].indexOf("258678") > -1){
		//console.log(i);

	}


	if(arr[i].indexOf("258693") > -1 || arr[i].indexOf("258694") > -1){
		//console.log(i);

	}

	if(arr[i].indexOf("258641") > -1 || arr[i].indexOf("258642") > -1){
		console.log(i);

	}


	//if(i==103) console.log('103: ' + arr[i]);
	//if(i==124) console.log('124: ' + arr[i]);

}

//exit;

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

function mymax(a)
{
    var m = -Infinity, i = 0, n = a.length;

    for (; i != n; ++i) {
        if (a[i] > m) {
            m = a[i];
        }
    }

    return m;
}


var fs = require('fs')
    , util = require('util')
    , stream = require('stream')
    , es = require('event-stream');

var lineNr = 0;

var s = fs.createReadStream('GSE10246.txt') //test.txt GSE10246.txt
    .pipe(es.split())
    .pipe(es.mapSync(function(line){

        // pause the readstream
        s.pause();

        lineNr += 1;

        // process line here and call s.resume() when rdy
        // function below was for logging memory usage

			var arr = line.trim().split(/\s+/g);

			var affy = arr[0];

			arr.shift();

			//var largest = mymax(arr);

			var largest0 = Math.max.apply( Math, arr );

			//console.log('largest: ' + largest);
			//console.log('largest0: ' + largest0);

			 var index = arr.indexOf(largest0.toString());
			// console.log("index: " + index);

			 //console.log(arr);
			 if(index == 130 || index == 131){ //osteoblast day 21
			 	//console.log(affy);
			 }

			 if(index == 16 || index == 17){  //bone
			 	//console.log(affy);
			 }

			 if(index == 134 || index == 135){  //osteoclast
			 	//console.log(affy);
			 }

			 if(index == 72 || index == 73){  //kidney
			 	//console.log(affy);
			 }


			 if(index == 2 || index == 3){  //adipose brown
			 	//console.log(affy);
			 }

			 if(index == 4 || index == 5){  //adipose white
			 	//console.log(affy);
			 }

			 if(index == 0 || index == 1){  //3t3-L1
			 	//console.log(affy);
			 }

			 if(index == 68 || index == 69){  //small intetine
			 	//console.log(affy);
			 }

			 if(index == 84 || index == 85){  //macrophage_bone_marrow
			 	//console.log(affy);
			 }

			 if(index == 32 || index == 33){  //osteoblast day 5
			 	console.log(affy);
			 }

        //logMemoryUsage(lineNr);

        // resume the readstream, possibly from a callback
        s.resume();
    })
    .on('error', function(){
        console.log('Error while reading file.');
    })
    .on('end', function(){
        console.log('Read entire file.')
    })
);


