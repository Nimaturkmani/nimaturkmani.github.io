$(document).ready(function(){ //ensures that the script runs only 
							//after the HTML document has been fully loaded.
    setBindings();
});

function setBindings() {
    $("nav a").click(function(e){ //This selects all anchor elements inside the "nav" element 
									//and attaches a click event handler.
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        $("html, body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 600);
    });
}