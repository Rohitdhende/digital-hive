import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnsavedChangesPrompt = ({ when, message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (when) {
        event.preventDefault();
        event.returnValue =
          message || "Are you sure you want to leave this page?";
      }
    };

    const handleNavigate = (event) => {
      if (when) {
        event.preventDefault();
        const confirmation = window.confirm(
          message || "Are you sure you want to leave this page?"
        );
        if (confirmation) {
          navigate(event.target.getAttribute("href"));
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleNavigate);
    });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleNavigate);
      });
    };
  }, [when, message, navigate]);

  return null;
};

export default UnsavedChangesPrompt;
