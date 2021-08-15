import React from "react";
import ChapterManagerPresentation from "./ChapterManager.presentation";

function ChapterManager(props) {
  return <ChapterManagerPresentation listBooks={JSON.parse(props.listBooks)} />;
}

export default ChapterManager;
