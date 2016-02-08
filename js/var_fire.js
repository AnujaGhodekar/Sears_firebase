/*js file to fetch data from firebase into the div s on index.html */

var myFirebaseRef = new Firebase("https://booksinformation.firebaseio.com/");

myFirebaseRef.child("Title").on("value", function(snapshot) {
  var s1 = snapshot.val(); 
  //document.getElementById("d1").innerHTML = s1;
});

myFirebaseRef.child("Author").on("value", function(snapshot) {	
  var s2 = snapshot.val(); 
  //document.getElementById("d2").innerHTML = s2;
});

var s3;
myFirebaseRef.child("DescWings").on("value", function(snapshot) {
  s3 = snapshot.val();  
  document.getElementById("t3").innerHTML = s3;
});

var s7;
myFirebaseRef.child("DescIndia").on("value", function(snapshot) {
  s7 = snapshot.val();  
	document.getElementById("t7").innerHTML = s7;
	});

var s5;
myFirebaseRef.child("DesAPJ").on("value", function(snapshot) {
  s5 = snapshot.val();  
	document.getElementById("t5").innerHTML = s5;
	});

var s6;
myFirebaseRef.child("DescIgnited").on("value", function(snapshot) {
  s6 = snapshot.val();  
	document.getElementById("t6").innerHTML = s6;
	});