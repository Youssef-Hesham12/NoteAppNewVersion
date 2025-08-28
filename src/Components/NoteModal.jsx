import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addNoteApi, updateNoteApi } from "../lib/Apis/NoteApi";
import { Bounce, toast } from "react-toastify";
import { fa } from "zod/locales";

export default function NoteModal({
  show,
  handleClose,
  getNotes,
  isUpdateMode,
  SelectedNote,
}) {
  const [noteTilte, setnoteTilte] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [isLoading, setisLoading] = useState(false);

  function addNote() {
    setisLoading(true);
    addNoteApi(noteTilte, noteContent)
      .then((res) => {
        toast.success("Note is added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        getNotes();
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .finally(() => {
        setisLoading(false);
        handleClose();
      });
  }


    function updateNote(){
        setisLoading(true)
        updateNoteApi(noteTilte,noteContent,SelectedNote._id).then((res)=>{
            console.log(res)
             toast.success("Note is added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        getNotes();
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setisLoading(false)
            handleClose()
        })
    }





  function handelSubmitForm(e) {
    e.preventDefault();

    if (isUpdateMode){
        updateNote()
    }
    else{
        addNote();

    }

    
  }

  useEffect(
    function () {
      if (SelectedNote) {
        setNoteContent(SelectedNote.content);
        setnoteTilte(SelectedNote.title);
      } else {
        setNoteContent("");
        setnoteTilte("");
      }
    },
    [show]
  );

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdateMode ? "Update Note" : "Add Note"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmitForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={noteTilte}
                onChange={(e) => setnoteTilte(e.target.value)}
                type="text"
                placeholder="Title....."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content.....</Form.Label>
              <Form.Control
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              {isUpdateMode ? (
                <>
                  <Button type="submit" variant="primary">
                    {isLoading ? (
                      <>
                        <span className="loader"></span>
                      </>
                    ) : (
                      "Update Note"
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <Button type="submit" variant="primary">
                    {isLoading ? (
                      <>
                        <span className="loader"></span>
                      </>
                    ) : (
                      "Add Note"
                    )}
                  </Button>
                </>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
