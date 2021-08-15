import React from "react";
import BookManagerPresentation from "./BookManager.presentation";
import { toast } from "react-toastify";

function BookManager(props) {
  const { listBooks } = props;
  const parsedList = JSON.parse(listBooks);

  const handleSubmitPost = async (event, formData) => {
    event.preventDefault();

    const response = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status !== 200) {
      const { message } = await response.json();
      return toast.error(message, { toastId: "postFailed" });
    }

    toast.success("success", { toastId: "success" });
    window.location = "/admin/dashboard";
  };

  const handleSubmitPut = async (event, formData) => {
    event.preventDefault();

    const response = await fetch("/api/book", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status !== 200) {
      const { message } = await response.json();
      return toast.error(message, { toastId: "putFailed" });
    }

    toast.success("success", { toastId: "success" });
    window.location = "/admin/dashboard";
  };

  const handleDelete = async (formData) => {
    const response = await fetch("/api/book", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status !== 200) {
      const { message } = await response.json();
      return toast.error(message, { toastId: "delFailed" });
    }

    toast.success("success", { toastId: "success" });
    window.location = "/admin/dashboard";
  };

  return (
    <BookManagerPresentation
      handleSubmitPost={handleSubmitPost}
      handleSubmitPut={handleSubmitPut}
      listBooks={parsedList}
      handleDelete={handleDelete}
    />
  );
}

export default BookManager;
