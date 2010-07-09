var csv  = require('csv'),
    sys  = require('sys');

sys.log('start');

if (process.argv.length < 3) {
    sys.error("Usage: node " + process.argv[1] + " <csv file>");
    process.exit(1);
}

var file = process.argv[2];

var csvIn = csv.createCsvFileReader(file, {
    'separator': ':',
    'comment': '#',
});
var csvOut = new csv.CsvWriter(process.stdout);

csvIn.addListener('end', function() {
    sys.log('end');
});
csvIn.addListener('data', function(data) {
    csvOut.writeRecord(data);
});
