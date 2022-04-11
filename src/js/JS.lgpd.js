docReady(function () {
    
        if (!localStorage.noFirstVisit) {
            console.log("Primeiro acesso")
            $('#footer-lgpd').modal('show');
            $('.modal-backdrop').removeClass("modal-backdrop");  
        }
        
        $("#btnlgpd").on("click", function(){
            localStorage.noFirstVisit = "1";
            console.log("aceito")
        })  
            
    })