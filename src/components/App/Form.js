import { useState } from 'react';
import './Form.css';

function Form({ addIdea }) { // Destructuring to directly access addIdea
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitIdeas(event) {
    event.preventDefault();
    if (!title || !description) return; // Prevent submitting empty ideas

    const newIdea = {
      id: Date.now(),
      title,
      description
    };

    addIdea(newIdea); // Call the function passed as a prop
    clearInput();
  }

  function clearInput() {
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={submitIdeas}> {/* Better practice: handle form submission via onSubmit */}
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Form;