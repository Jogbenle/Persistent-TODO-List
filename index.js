let items = [];

const itemsDiv = document.getElementById("items")


function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const text = document.createElement("p")
        text.textContent = item;

        itemsDiv.appendChild(text)
    }
}


function loadItems() {}

function saveItems() {}

function addItem() {}

function removeItems() {}