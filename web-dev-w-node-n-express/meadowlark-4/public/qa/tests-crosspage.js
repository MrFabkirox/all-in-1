var Browser = require('zombie'), assert = require('chai').assert;
var browser;
suite('Cross-Page Tests', function(){
  setup(function(){
    browser = new Browser();
  });
  test('request group raters populate the referrer field',
    function(done){
      var referrer = 'http://localhost:3000/tours/hood-rXXiver';
      browser.visit(referrer, function(){
        browser.clickLink('.requestGroupRate', function(){
          assert(browser.field('referrer').value === referrer);
          done();
        });
      }); 
    });
    test('Group rate request from oregon coast populates referrer field',
      function(done){
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function(){
          browser.clickLink('.requestGroupRate', function(){
            assert(browser.field('referrer').value === referrer);
            done();
          }); 
        }); 
      });
      test('"request group rate" dirctly result empty referrer field',
        function(done){
          browser.visit('http://localhost:3000/tours/request-group-rate',
            function(){
              assert(browser.field('referrer').value === '');
              done();
            });
        });
});
