import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { GlobalContentFeedbackType } from "../context/FeedbackContext";

function FeedbackItem({ item }: any) {
  const { deleteFeedback, editFeedback } = useContext(
    FeedbackContext
  ) as GlobalContentFeedbackType;

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <i className="fa fa-times"></i>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <i className="fa fa-edit"></i>
      </button>
    </div>
  );
}

export default FeedbackItem;
