//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  const listItemLimit = 10;
  let currentPage = 1;

  function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  function addListItems(start, end) {
    for (let i = start; i <= end; i++) {
      const listItem = createListItem("List Item " + i);
      list.appendChild(listItem);
    }
  }

  function isEndOfList() {
    const listRect = list.getBoundingClientRect();
    const lastItem = list.lastElementChild;
    const lastItemRect = lastItem.getBoundingClientRect();

    return lastItemRect.bottom <= listRect.bottom;
  }

  function loadMoreItems() {
    const start = (currentPage - 1) * listItemLimit + 1;
    const end = currentPage * listItemLimit;

    addListItems(start, end);
    currentPage++;
  }

  // Initial load
  addListItems(1, listItemLimit);

  // Scroll event listener
  list.addEventListener("scroll", function () {
    if (isEndOfList()) {
      loadMoreItems();
    }
  });
});
