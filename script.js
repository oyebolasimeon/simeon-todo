const addTask = () =>{
    let resultDiv = document.getElementById("results");
    let inputText = document.querySelector("input");
  //  let addTodo = document.getElementById("addMe");

    console.log(inputText.value);
    var fontAwe = document.createElement('span');

    //Date and Time

    let d = new Date();
    currentDate = " "+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    console.log(currentDate)

        var linePara = document.createElement('p');
        var dt = document.createElement('i')
        dt.innerText = currentDate;
        dt.style.paddingLeft = "20px"
        dt.style.fontSize = "16px"
        //console.log(dt.innerText)
        linePara.innerText = inputText.value

       // var sim = [];
        if(linePara.innerText === ""){
            alert("cannot insert empty task")
        }else{
            
            fontAwe.classList.add('far');
            fontAwe.classList.add('fa-window-close')
            fontAwe.classList.add('fon')
            linePara.classList.add('nike');
            linePara.appendChild(dt);
            resultDiv.appendChild(linePara);
            linePara.appendChild(fontAwe)

            var htmlContents = document.body.inn
            localStorage.setItem('myBook', JSON.stringify(htmlContents ));

            
        //     let initstoreMemory = linePara.innerText;

        //     localStorage.setItem('store', initstoreMemory)
        //     let storeMemory = localStorage.store;
        //    // sim.push(linePara)
        //     console.log(storeMemory);
            
        //     console.log(sim) currentDate and InputText
            
            // resultDiv.append(storeMemory)

            // console.log(typeof(linePara))

            // var lineParas = JSON.stringify(resultDiv.innertext)
            // console.log(lineParas)
            if(inputText){
                localStorage.setItem('keys', inputText)
                localStorage.setItem('dates', currentDate)
            
                
            }

            for(let i = 0; i < localStorage.length; i++){
                const value = localStorage.keys
                const data = localStorage.dates
            }

            inputText.value = "";

            fontAwe.addEventListener('click', () =>{
                resultDiv.removeChild(linePara)
            })
        }



    

        
    

 }
