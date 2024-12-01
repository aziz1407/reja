// const { response } = require("../app");
console.log('Lets see if it is running fine');

function itemTemplate(item) {
    return ` <li 
                class="list-group-item list-group-item-info d-flex
                align-items-center justify-content-between">
                <span class="text">${item.reja}</span>
                <div>
                    <button data-id=${item._id}
                    class="edit-me btn btn-secondary btn-sm mr-1">
                        Edit
                    </button>
                    <button data-id=${item._id}
                    class="delete-me btn btn-danger btn-sm">Delete</button>
                    </div>
                </li>`
}

    const createField = document.getElementById("create-field");

    document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log('STEP-1 Requesting to backend')

    axios.post("/create-item", {reja: createField.value})
    // console.log('STEP-7 Came back to FrontEnd')
    .then((response) => {
        // console.log('STEP-8 Applying derived data to FrontEnd')
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
    createField.value = "";
    createField.focus();
    })
    .catch((err) => {
    console.log('Go try again!');
    });

    });

document.addEventListener("click", (e) => {
    // delete oper
    console.log(e.target)
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Sure to delete?")) {
           axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
           .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove()
           })
           .catch((err) => {
            console.log('Please try again')
           });
        } 
     }
    
    // edit oper
    if(e.target.classList.contains("edit-me")) {
         let userInput = prompt("Insert your edit", 
        e.target.parentElement.parentElement.querySelector(".text").innerHTML);
         if(userInput) {
           axios
           .post("/edit-item", {id: e.target.getAttribute("data-id"),
            new_input: userInput})
            .then(response => {
                console.log(response.data)
                e.target.parentElement.parentElement.querySelector('.text')
                .innerHTML = userInput;
            })
            .catch(err => {
            console.log('Please try again')
            })
         }
    }
})
document.getElementById('clean-all').addEventListener("click", () => {
    axios.post("/delete-all", {delete_all: true})
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
    .catch()
})