$(".project-item").click(function() {
    if($(this).find("a")) {
        window.location = $(this).find("a").attr("href"); 
    }
    return false;
  });