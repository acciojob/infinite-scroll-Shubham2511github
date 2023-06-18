//your code here!
// Get the list element
const list = document.getElementById('infi-list');

// Add initial list items
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = 'List item ' + i;
  list.appendChild(listItem);
}

// Function to check if user has reached the end of the list
function isScrollAtBottom() {
  return list.scrollTop + list.clientHeight >= list.scrollHeight;
}

// Function to add more list items
function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = 'List item ' + (list.childElementCount + i);
    list.appendChild(listItem);
  }
}

// Event listener for scroll event
list.addEventListener('scroll', function() {
  if (isScrollAtBottom()) {
    addMoreItems();
  }
});

