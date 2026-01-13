import React from "react";
import MintForm from "./MintForm";

export default function MintCTA({ action, context }) {
  switch (action) {
    case "CONTACT_FORM":
      return <MintForm {...context} />;

    case "REQUEST_STRATEGY_CALL":
      return <button>Request Strategy Call</button>;

    case "OPEN_CHAT":
      return <button>Chat with Advisor</button>;

    case "SHOW_CASE_STUDY":
      return <button>View Case Study</button>;

    default:
      return null;
  }
}
