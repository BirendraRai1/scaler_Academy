const list = document.getElementById('draggable-list');
let draggedItem = null

// Add dragstart and dragend event listeners to all list items
list.querySelectorAll('li').forEach(item => {
    item.addEventListener('dragstart', () => {
      draggedItem = item;
      item.classList.add('dragging');
    });
  
    item.addEventListener('dragend', () => {
      draggedItem = null;
      item.classList.remove('dragging');
    });
  });
  
  // Add dragover and drop event listeners to the list itself
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(list, e.clientY);
    const draggingItem = list.querySelector('.dragging');
    if (afterElement == null) {
      list.appendChild(draggingItem);
    } else {
      list.insertBefore(draggingItem, afterElement);
    }
  });
  
  // Helper function to find the position of the dragged item
  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll('li:not(.dragging)')
    ];
  
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }