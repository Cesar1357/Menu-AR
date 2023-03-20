AFRAME.registerComponent("create-buttons",{
    init: function(){
        var button1 = document.createElement("button");
        button1.innerHTML = "calificar";
        button1.setAttribute("id","rating-button");
        button1.setAttribute("class","btn btn-warning mr-3");

        var button2 = document.createElement("button");
        button2.innerHTML = "ordenar";
        button2.setAttribute("id","order-button");
        button2.setAttribute("class","btn btn-warning mr-4");

        var button_div = document.getElementById("button-div");
        button_div.appendChild(button1);
        button_div.appendChild(button2);
    }

})