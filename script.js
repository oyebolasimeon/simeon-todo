const addTask = () =>{
    let resultDiv = document.getElementById("results");
    let inputText = document.querySelector("input");
    let addTodo = document.getElementById("addMe");

    console.log(inputText.value);
    var fontAwe = document.createElement('span');

        var linePara = document.createElement('p');
        linePara.innerText = inputText.value
        if(linePara.innerText === ""){
            alert("cannot insert empty task")
        }else{
            
            fontAwe.classList.add('far');
            fontAwe.classList.add('fa-window-close')
            fontAwe.classList.add('fon')
            linePara.classList.add('nike');
            resultDiv.appendChild(linePara);
            linePara.appendChild(fontAwe)

            inputText.value = "";

            fontAwe.addEventListener('click', () =>{
                resultDiv.removeChild(linePara)
            })
        }



    

        
    

 }