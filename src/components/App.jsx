import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = React.useState([
    { title: "sample Note", content: "nothing to see here" }
  ]);

  function addNotes(noteHeading, noteBody) {
    setNotes((preValue) => [
      ...preValue,
      { title: noteHeading, content: noteBody }
    ]);
  }

  function deleteNotes(val) {
    setNotes(
      notes.filter((items, index) => {
        return index !== val;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdder={addNotes} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
