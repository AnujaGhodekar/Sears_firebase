/*js file to fetch data from firebase into the div on next.html */


var myFirebaseRef = new Firebase("https://booksinformation.firebaseio.com/");

myFirebaseRef.child("DescWings").on("value", function(snapshot) {
  var s3 = snapshot.val();  
  document.getElementById("demo").innerHTML = s3;
});


myFirebaseRef.child("DescIndia").on("value", function(snapshot) {
  var s7 = snapshot.val();  
	document.getElementById("demo").innerHTML = s7;
	});


myFirebaseRef.child("DesAPJ").on("value", function(snapshot) {
  var s5 = snapshot.val();  
	document.getElementById("demo").innerHTML = s5;
	});


myFirebaseRef.child("DescIgnited").on("value", function(snapshot) {
  var s6 = snapshot.val();  
	document.getElementById("demo").innerHTML = s6;
	});