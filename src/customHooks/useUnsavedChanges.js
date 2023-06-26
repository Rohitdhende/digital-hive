import { useEffect, useState } from "react";
import DialogueBox from "../components/DialogueBox";


export const useUnsavedChanges = (
  message = "Are you sure want to discard changes?"
) => {
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    window.onbeforeunload = isDirty && (() => message);
    return () => {
      window.onbeforeunload = null;
    };
  }, [isDirty, message]);
  
  const routerPrompt = <DialogueBox />;

  return [routerPrompt, () => setDirty(true), () => setDirty(false)];
};
