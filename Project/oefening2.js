const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {

    for (let i = 0; i < rainbow.length; i++) {
        
        let element = document.createElement("td");
        element.setAttribute("id", rainbow[i]);
        element.setAttribute("class", "text-center")
        element.setAttribute("style", "background-color: white;");
        element.addEventListener("mouseenter", function(){
            element.style.backgroundColor = rainbow[i];
            element.style.color = "white";
        });

        element.addEventListener("mouseleave", function(){
            element.style.backgroundColor = "white";
            element.style.color = "black";
        });

        element.addEventListener("click", function(){
            let positie = parseInt(prompt(`At wich position should I add it (1-${rainbow.length})?`));
            
            let tableBody = document.querySelector("#tableBody");
            let tableRow = document.createElement("tr");

            let number = tableBody.childElementCount;

            tableRow.setAttribute("id", `tableRow${number + 1}`);

            tableBody.appendChild(tableRow);

            for (let e = 0; e < rainbow.length; e++) {
                
                let tableColum = document.createElement("td");
                tableColum.setAttribute("id", `row${number}Colom${e + 1}`);
                tableColum.setAttribute("class", "text-center");
                tableColum.addEventListener("click", function(){
                    let color = prompt("Wich color would you like to add?");

                    this.style.backgroundColor = color;
                    this.style.color = "white";
                    this.innerHTML = color;
                });

                if (e === positie - 1) {
                    
                    tableColum.style.backgroundColor = this.innerHTML;
                    tableColum.innerHTML = this.innerHTML;
                    tableColum.style.color = "white";
                }

                tableRow.appendChild(tableColum);
            }
        });

        element.innerHTML = rainbow[i];

        document.querySelector("#tableRow").appendChild(element);
    }
}