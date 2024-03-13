let items = [];

const itemsDiv = document.getElementById("items")


function renderItems() {
    items.innerHTML = null;

    for (const [idx, item] of object.entries(items)){
        const text = document.createElement("p")
        text.textContent = item;

        itemsDiv.appendChild(text)
    }
}

function loadItems() {}

function saveItems() {}

function removeItems() {}