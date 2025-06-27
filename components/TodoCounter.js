class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updateText();
  }
  
  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
    updateCompleted = (increment) => {
    if (increment) {
        this._completed += 1;
    } else {
        this._completed -= 1;
    }
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is   
  // created via the form. 
  updateTotal = (increment) => {
    if (increment) {
        this._total += 1;
    } else {
        this._total -= 1;
    }
    this._updateText();  
  };

  // Call the method to update the text content
  _updateText() {
    // Sets the text content of corresponding text element.  
    // Call this in the constructor, and whenever the counts get updated.
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;