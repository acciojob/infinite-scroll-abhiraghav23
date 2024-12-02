// Select the list element
const list = document.getElementById('infi-list');

// Function to add new list items
function addListItems(count = 2) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

// Initial list items
addListItems(10);

// Function to handle infinite scroll
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Debugging log to check values
    console.log("ScrollTop:", scrollTop, "ClientHeight:", clientHeight, "ScrollHeight:", scrollHeight);

    // Check if the user is at the bottom
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        addListItems(2); // Add 2 more items
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);



