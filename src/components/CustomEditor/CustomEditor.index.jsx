import React from "react";
import CustomEditorPresentation from "./CustomEditor.presentation";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

function CustomEditor(props) {
  const handleSubmit = async (title, slug, description, content) => {
    if (!title.trim()) {
      return toast.error("Missing data", {
        toastId: "errorMissingData",
      });
    }

    if (
      content.blocks.length === 1 &&
      content.blocks.every((elm) => elm.text.trim() === "")
    ) {
      return toast.error("Missing data", {
        toastId: "errorMissingData",
      });
    }

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        description,
        content: JSON.stringify(content),
        authKey: props.authKey,
      }),
    });

    if (response.status !== 200) {
      return toast.error("Post failed", {
        toastId: "postFailed",
      });
    }

    return toast.success("Success", {
      toastId: "postSuccess",
    });
  };

  return <CustomEditorPresentation {...props} handleSubmit={handleSubmit} />;
}

CustomEditor.propTypes = {
  authKey: PropTypes.string,
};

export default CustomEditor;
