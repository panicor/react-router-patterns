import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
  let [form, setForm] = useState({ name: "", hex: "#ffffff" });
  let history = useHistory();

  function handleChange(e) {
    e.persist();
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  let { hex, name } = form;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color</label>
          <input
            name="name"
            id="name"
            placeholder="Enter the name of a color"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <button type="submit">Add Color </button>
      </form>
    </div>
  );
}

export default NewColorForm;
