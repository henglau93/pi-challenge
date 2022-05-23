var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 5000;
var app = express();
const cors = require("cors");
app.use(cors());
//var piAlgo = require("./server");

let pi = 3;
let n = 0;
let termValue = 0;
let digit = 2;
let denom = 1;
//Calculate Pi value using Nilakantha Series formula
// pi = 3 + 4/(2*3*4) + 4/(4*5*6) + 4/(6*7*8) + ...
//nth term, n=0, pi = 3

let flag = 0;
let piDigitPos = 0;
let digitStr = "";
let selectedDigitStr = "3";
let latestAccuratePiValue = "";
let result = true;
let showPiValue = "";
// first 100 digits of Pi = 3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067
let publishedPiValue = "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067";
// future work can verify with Pi API https://pi.delivery/#apipi_get


while (result) {
    n++;
    //console.log("n = ",n);
    //console.log("digit = ",digit);
    denom = digit;
    //console.log("denom = ",denom);
    for (let i=0; i<2; i++){
        digit += 1;
        //console.log("digit = ",digit);
        denom *= digit;
    }
    //console.log("denom = ",denom);
    termValue = 4 / denom;
    //console.log("termValue = ",termValue);
    if (n % 2 == 0) {
        pi = pi - termValue;
    }
    else {
        pi = pi + termValue;
    }

    let piStr = pi.toString().replace(/\./g, "");
    //pi = pi.toString().replace(/./g, "");
    //console.log("piStr = ",piStr);

    showPiValue = registerPiDigit(piStr);
    //console.log("showPiValue: ",showPiValue);
    //checkPiValue(pi);
}

//console.log("pi value is ",pi);

function registerPiDigit (value){
    digitStr = value.slice(piDigitPos,piDigitPos+1);
    console.log("digitStr: ",digitStr);
    if (digitStr == selectedDigitStr) {
        flag++;
    }
    else {
        flag = 0;
        selectedDigitStr = digitStr;
    }
    console.log("flag: ",flag);
    console.log("piDigitPos: ",piDigitPos);
    console.log("selectedDigitStr: ",selectedDigitStr);
    if (flag == 3) {
        selectedDigitStr = digitStr;
        if (verifyPiValue(piDigitPos,digitStr)) {
            latestAccuratePiValue = latestAccuratePiValue.concat(digitStr);
            console.log("latestAccuratePiValue: ",latestAccuratePiValue);
            piDigitPos++;
            //console.log("piDigitPos: ",piDigitPos);
            selectedDigitStr = value.slice(piDigitPos,piDigitPos+1);
            //console.log("selectedDigitStr: ",selectedDigitStr);
            flag = 0;
        }
        else {
            flag = 0;  
        }
        
    }
    //console.log("latestAccuratePiValue: ",latestAccuratePiValue);
    return latestAccuratePiValue;
}

function verifyPiValue(pos,str){
    let publishedDigitStr = publishedPiValue.slice(pos,pos+1);

    result = (str == publishedDigitStr)? true : false;
    console.log("result: ", result);
    return result;
}

app.use(bodyParser.json());

app.get("/pi-challenge", function(req, res) {
    //res.status(200).json({message: "Hello welcome to the Pi Challenge!!!"});
    res.status(200).json({message: latestAccuratePiValue});
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});