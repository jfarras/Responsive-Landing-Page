//to ensure all is loaded
window.onload = function() {
	// Get the pop-up
	var modal = document.getElementById('myModal');

	var span = document.getElementsByClassName("close")[0];

	// close when the user clicks on the x button
	span.onclick = function() {
	    modal.style.display = "none";
	}
	//funciton that closes the pop-up when the user clicks outside
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	 $("#formInput").submit(function(event){
	    event.preventDefault();
	    modal.style.display = "block";
	    $.ajax({
	        url: "",//If I have a controller, I would specify the path
	        type:"POST",
	        data:
	        {
	        /*The form fields will be here*/
	        }
	    });
	});
}