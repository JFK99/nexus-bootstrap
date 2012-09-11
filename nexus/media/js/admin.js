$(document).ready(function(){
	$(document).on("click", "#js-filter-toggle", function(){
		$("#changelist-filter").toggle("fast"); 
		return false;
	});
	$("#changelist-filter").on("click", ".close", function(){
		$("#changelist-filter").hide("fast"); 
		return false;
	});
	
 
});
