var http = require("http");
var request = require("request");
var tableify= require("tableify");
const express = require("express");
const app=express();
const url="https://jasonbase.com/things/LW3j/";
const javaServiceUrl="http://localhost:8080/pnl/calc";
const nodeServiceUrl="http://localhost:8040/pnl/calc";

// Server default Welcome Page
app.get('/',function(req, res){

     res.sendFile(__dirname + '\\index.html');
});

/* Makes a call to Java Rest API and returns HTML of PNS details*/
app.get('/Pnlj',function(req, res){


    request({
        url: url,
        json: true
    }, function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
            
                        request({
                        url: javaServiceUrl,
                        headers: {'Content-Type': 'application/json'},
                         method: "POST",
                         json: true,
                        body: body
                    }, (error, response, body) => {
                        if(error) {
                            res.status(404).send(" Service Error, please call your Account Manager at 212-123-4567"); 
                        }
                        else{
                        console.log("Success");
                         res.write(tableify(body));
                         res.end();
                        }
                    });
        }
       
    });
});

/* Makes a call to NODE API and returns HTML of PNS details*/
app.get('/pnl',function(req, res){
       
                        request({
                        url: nodeServiceUrl,
                        method: "GET",
                         json: true
                    }, (error, response, body) => {
                        if(error) {
                            res.status(404).send(" Service Error, please call your Account Manager at 212-123-4567"); 
                        }
                        else{
                        console.log("Success");
                        res.write(tableify(body));
                        res.end();
                    }
                        
                    });
        
       
 
});

// Client server listens on 8000 port
app.listen(8000, function(){
    console.log("Listening on 8000 port");
})


