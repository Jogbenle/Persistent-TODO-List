let items = ["Hello", "123"];

const itemsDiv = document.getElementById("items")


function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display ="inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)
        

        itemsDiv.appendChild(container)
    }
}



function loadItems() {}

function saveItems() {}

function addItems() {}

function removeItems(idx) {
    items.splice(idx,1)
    renderItems()
}