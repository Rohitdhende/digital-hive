import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

const UnsavedChangesPrompt = ({ when, message }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const shouldPromptRef = useRef(false);

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
          shouldPromptRef.current = false;
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

  useEffect(() => {
    shouldPromptRef.current = true;
  }, [location]);

  const handleRouteChange = (toLocation) => {
    if (when && shouldPromptRef.current) {
      const confirmation = window.confirm(
        message || "Are you sure you want to leave this page?"
      );
      if (!confirmation) {
        navigate(toLocation.pathname, { replace: true });
      }
    }
  };
  const routes = useRoutes([
    {
      path: "*",
      element: null,
      caseSensitive: false,
      navigate: handleRouteChange,
    },
  ]);

  return routes;
};

export default UnsavedChangesPrompt;
