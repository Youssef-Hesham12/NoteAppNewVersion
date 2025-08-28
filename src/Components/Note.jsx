import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteNoteApi } from "../lib/Apis/NoteApi";
import { Bounce, toast } from "react-toastify";

export default function Note({ note,getNotes,handelUpateModel }) {
  const [isLoading, setisLoading] = useState(false);

  function deleteNote() {
    setisLoading(true)
    deleteNoteApi(note._id)

      .then((res) => {
        console.log(res);
        toast.success("Note is delete", {
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
        console.log(err);
      }).finally(()=>{
        setisLoading(false)
      })
  }


  

  return (
    <>
      <div className="col-md-3">
        <Card>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Button onClick={deleteNote} variant="danger">
              {isLoading ? (
                <>
                  <span className="loader"></span>
                </>
              ) : (
                "Delete"
              )}
            </Button>
            <Button onClick={handelUpateModel} className="mx-2"  variant="success">
             Update
            </Button>
             
          </Card.Body>
        </Card>


      </div>
    </>
  );
}
