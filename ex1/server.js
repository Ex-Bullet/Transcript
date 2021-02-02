const express = require('express')
const app = express();

const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./transcript.json', 'utf8'));
const timestamps = [5.99, 12.7, 37.5]

function compare( time1, time2 ) {
    if ( time1.start < time2.start ){
        return -1;
    }
    if ( time1.start > time2.start ){
        return 1;
    }
    return 0;
}

function getWord(){
    const array = []
    for(let time of timestamps){
        for(let line of obj){
            if(line.start < time && line.end > time) {
                array.push(line.Mot)
            }
        }
    }

    return array
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    obj.sort( compare );
    res.json(obj);
});

app.get('/getWords', (req, res) => {
    res.json(getWord());
});
 
 
app.listen(8080, () =>
  console.log(`Example app listening on port 8080!`),
);