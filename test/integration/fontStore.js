var fontStore = require('../../lib/fontStore');
var expect = require('chai').expect
var fs = require('fs');

describe('fontStore', function () {
  it('should generate a file called ... for the font Dosis', function (done) {
    var options = {
      format: 'woff'
    };
    fontStore('http://fonts.googleapis.com/css?family=Dosis', options, function(err,fileName,json){
      var fileExists = fs.existsSync(fileName)
      expect(fileExists).to.be.true;
      fs.unlink(fileName)
      done();
    });
  });

  it('generate a file called as per the output option supplied', function (done) {
    var options = {
      format: 'woff',
      output: 'myFilename'
    };

    fontStore('http://fonts.googleapis.com/css?family=Dosis', options, function(err,fileName,json){
      expect(fileName).to.equal(options.output);
      fs.unlink(fileName)
      done();
    });
  });
});
