import React from "react";

function CreateArea(props) {
  var [note, setNote] = React.useState({ title: "", content: "" });

  function settingNote(event) {
    const val = event.target.value;
    const name = event.target.name;
    if (name === "title") {
      setNote({ title: val, content: note.content });
    } else if (name === "content") {
      setNote({ title: note.title, content: val });
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={settingNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={settingNote}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdder(note.title, note.content);
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
