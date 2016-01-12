console.log("JavaScript working")

//creating XMLHttpRequest
function ajaxPost () {

  //first step, create our XMLHttpRequest object
  //hr is short for httpRequest

  var hr = new XMLHttpRequest();

  // Create some variables we need to send to our PHP file
  //firstly, we need to send to a url or files, in this case a php file
  //secondly, we need to send values to that url or file
    var url = "http://127.0.0.1:8887/my_parse_file.php";

    //These are the values that we are sending
    //fn for first name
    var fn = document.getElementById("first_name").value;
    //ln is for last name
    var ln = document.getElementById("last_name").value;
    var vars = "firstname="+fn+"&lastname="+ln;


    //use the open method
    hr.open("POST", url, true);

    // Set content type header information for sending url encoded variables in the request
      hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // Access the onreadystatechange event for the XMLHttpRequest object
      hr.onreadystatechange = function() {
        //0 means not connected
        //1 means establishing connection
        //2 menas stablishing communication
        //4 means complete
        //For httpRequest status, 200 is OK
  	    if(hr.readyState == 4 && hr.status == 200) {
  		    var return_data = hr.responseText;
  			document.getElementById("status").innerHTML = return_data;
        }

          console.log('trying')
      
      }

      // Send the data to PHP now... and wait for response to update the status div
      hr.send(vars); // Actually execute the request
      document.getElementById("status").innerHTML = "processing...";
  }
