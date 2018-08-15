var Browser = require('zombie'), assert = require('chai').assert;

var browser;
suite('Cross-Page Tests', function(){
  setup(function(){
    browser = new Browser();
  });
//   test('requesting a group rate quote should populate the referrer field', // ko
//     function(done){
//       var referrer = 'http://localhost:3000/tours/hood-river';
//       browser.visit(referrer, function(){
//         browser.clickLink('.requestGroupRate', function(){
// 	  assert(browser.field('referrer').value === referrer);
//           done();
//         }); 
//       });
//     });
//     test('Group rate request from oregon coast tour page should populate referrer field',
//       function(done){
//         var referrer = 'http://localhost:3000/tours/oregon-coast'; browser.visit(referrer,
// 	  function(){
//             browser.clickLink('.requestGroupRate', function(){
// 	      assert(browser.field('referrer').value === referrer);
//               done();
//         }); 
//       });
//     });
    test('visit "request group rate" dirctly should result of an empty referrer field',
      function(done){
        browser.visit('http://localhost:3000/tours/request-group-rate',
	  function(){
            assert(browser.field('referrer').value === '');
            done();
          });
      });
});
