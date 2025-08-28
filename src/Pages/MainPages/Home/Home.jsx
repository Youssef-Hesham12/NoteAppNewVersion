import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import NoteModal from "../../../Components/NoteModal";
import { getAllNoteApi } from "../../../lib/Apis/NoteApi";
import Note from "../../../Components/Note";
import { CountNoteContext } from "../../../lib/Context/CountNote";

export default function Home() {
  const [show, setShow] = useState(false);
  const [AllNotes, setAllNotes] = useState(null);
  const [isUpdateMode, setisUpdateMode] = useState(false);
  const [SelectedNote, setSelectedNote] = useState(null);
  let {setCountNote}=useContext(CountNoteContext)

  const handleClose = () => {
    setShow(false);
    setisUpdateMode(false);
    setSelectedNote(null);
  };
  const handleShow = () => setShow(true);

  function handelUpateModel(note) {
    setShow(true);
    setisUpdateMode(true);
    setSelectedNote(note);
  }

  function getNotes() {
    getAllNoteApi()
      .then((res) => {
        setAllNotes(res.data.notes);
        setCountNote(res.data.notes.length)
      })
      .catch((err) => {
        if (err.response?.data.msg == "not notes found") {
          setAllNotes(null);
          setCountNote(0)
        }
        console.log(err);
      });
  }

  useEffect(function () {
    getNotes();
  }, []);

  return (
    <>
      <div className="mt-3 flex justify-center">
        <Button
          variant=""
          style={{ background: "yellow" }}
          onClick={handleShow}
        >
          Add Note
        </Button>
      </div>

      <div className="mt-3 container">
        <div className="row g-4">
          {AllNotes != null ? (
            AllNotes?.map((note) => (
              <Note
                handelUpateModel={() => handelUpateModel(note)}
                getNotes={getNotes}
                note={note}
                key={note._id}
              />
            ))
          ) : (
            <>
              <h1>No Notes Found</h1>
            </>
          )}
        </div>
      </div>

      <NoteModal
        SelectedNote={SelectedNote}
        isUpdateMode={isUpdateMode}
        getNotes={getNotes}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}
