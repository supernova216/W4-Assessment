const fortunetBtn = document.getElementById("fortuneButton")
const postBtn = document.getElementById('addButton')
const newFort = document.querySelector('#newFortune')
const fortDiv = document.querySelector('#fortuneDisplay')
const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#fortuneId')
const allBtn = document.querySelector('#allButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postFortune = () => {
    
    fortDiv.innerHTML = ''

    let bodyObj = {
        name: newFort.value
    }
    
    axios.post("http://localhost:4000/api/fortune/",bodyObj)
    .then((res)=>{
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            fortDiv.appendChild(newSpan)
        }   
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    const deleteFortune = () => {
        fortDiv.innerHTML = ''
    
        let idToDelete = deleteInput.value
    
        axios.delete(`http://localhost:4000/api/fortune/${idToDelete}`)
            .then((res) => {
                console.log(res.data)
    
                for(let i = 0; i < res.data.length; i++){
                    let newSpan = document.createElement('p')
                    newSpan.textContent = `${i + 1}. ${res.data[i]}`
                    fortDiv.appendChild(newSpan)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAll = () => {
        fortDiv.innerHTML = ''

        axios.get("http://localhost:4000/api/fortune")
        .then((res)=>{
            console.log(res.data)

            for (let i = 0; i < res.data.length; i++) {
                let newSpan = document.createElement('p');
                newSpan.textContent = `${i+1}.${res.data[i]}`
                fortDiv.appendChild(newSpan)
            }
        })
    }

fortunetBtn.addEventListener('click', getFortune)
postBtn.addEventListener('click',postFortune)
deleteBtn.addEventListener('click',deleteFortune)
allBtn.addEventListener('click',getAll)