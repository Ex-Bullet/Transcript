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
    for(let time of timestamps){
        for(let line of obj){
            if(line.start < time && line.end > time) {
                console.log(line.Mot);
            }
        }
    }
}

getWord()
obj.sort( compare );