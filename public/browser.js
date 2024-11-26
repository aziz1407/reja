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

axios.post("/create-item", {reja: createField.value})
.then((response) => {
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
        alert("Now edit button is pressed!")
    }
})