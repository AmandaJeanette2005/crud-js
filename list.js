document.title = "Sekolah Unggul Mulia";
const data = [
    {
        nama:'Jeje',
        class: '12',
        age: '16yo'
       
    },
    {
        nama:'Ilyas',
        class: '11',
        age: '16yo'
     
    },
    {
        nama:'Raissa',
        class: '10',
        age: '17yo'
        
    },
    {
        nama:'Kurnia',
        class: '12',
        age: '18yo'
    },
    {
        nama:'Illa',
        class: '11',
        age: '19yo'
    },
    {
        nama:'nabila',
        class: '13',
        age: '19yo'
    }
]

const listStudents = document.getElementById('listStudent')
let tr = ''

let indexToUpdate = null
let isUpdating = false;

function read(){
    let tr = ''
        data.forEach((x,index) =>{
            tr += `<tr>
                <td>${x.nama}</td>
                <td>${x.class}</td>
                <td>${x.age}</td>
                <td>
                <Button onclick ="destroy(${index})" data-index="${index}">Delete</Button>
                <Button onclick ="update(${index})" data-index="${index}">update</Button>
                </td>
                </tr>`
            })

            console.log(data);
    listStudents.innerHTML = tr
}

const elData = document.getElementById('listStudent')

//delete
function destroy(index){ 
  data.splice(index, 1)
  tr = ''
  read()
}

read()

//add
const btn_save = document.getElementById("btn_save")
btn_save.onclick = () => {
    const inputNama = document.getElementById('nama')
    const inputClass= document.getElementById('class')
    const inputAge = document.getElementById('age')
if(!isUpdating){
    data.push({
        nama: inputNama.value,
        class: inputClass.value,
        age: inputAge.value
    })
    console.log("add new data")
}else{
    data.splice(indexToUpdate, 1, {
        nama: inputNama.value,
        class: inputClass.value,
        age: inputAge.value
    })
}
    read()
}


// update
function update(x){
    indexToUpdate = x;
    isUpdating = true;

        const inputNama = document.getElementById('nama')
        const inputClass = document.getElementById('class')
        const inputAge = document.getElementById('age')

    console.log(data[x])
        inputNama.value = data[x].nama;
        inputClass.value = data[x].class;
        inputAge.value = data[x].age;

    const objBaru = {
        nama: inputNama.value,
        class: inputClass.value,
        age: inputAge.value
    }
}

