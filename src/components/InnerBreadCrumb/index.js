import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CustomSeparator() {
  const navigate = useNavigate();
  const location = useLocation();

  const breadcrumbs = [
    <Box
      sx={{
        padding: "0.2rem 0.4rem 0.2rem 0.2rem",
        clipPath: "polygon(0% 0%, 75% 0%, 97% 50%, 75% 100%, 0% 100%)",
        backgroundColor: "#6CB4EE",
        borderRadius: "0.3rem",
      }}
    >
      <Box
        sx={{
          padding: "1rem 5rem 1rem 1rem",
          clipPath: "polygon(0% 0%, 75% 0%, 97% 50%, 75% 100%, 0% 100%)",
          backgroundColor: "#B9D9EB",
          fontWeight: location.pathname.includes("basic-info") ? "500" : "400",
          fontSize: "0.9rem",
          cursor: "pointer",
          borderRadius: "0.3rem",
        }}
        onClick={() => {
          navigate("/dashboard/create/basic-info");
        }}
      >
        Basic Info
      </Box>
    </Box>,
    <Box
      sx={{
        padding: "0.2rem 0.4rem 0.2rem 0.4rem",
        clipPath:
          "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 15% 50%, 0% 0%)",
        backgroundColor:
          location.pathname.includes("client-access") ||
          location.pathname.includes("firm-access")
            ? "#6CB4EE "
            : "#a1bbcf",
        borderRadius: "0.3rem",
        "&:hover": {
          backgroundColor: "#6CB4EE",
        },
      }}
    >
      <Box
        sx={{
          padding: "1rem 5rem 1rem 3rem",
          clipPath:
            "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 15% 50%, 0% 0%)",
          backgroundColor:
            location.pathname.includes("client-access") ||
            location.pathname.includes("firm-access")
              ? "#B9D9EB"
              : "white",
          fontWeight: location.pathname.includes("client-access")
            ? "500"
            : "400",
          fontSize: "0.9rem",
          cursor: "pointer",
          borderRadius: "0.3rem",
          color:
            location.pathname.includes("client-access") ||
            location.pathname.includes("firm-access")
              ? "black"
              : "#7c7c7c",
          "&:hover": {
            backgroundColor: "#B9D9EB",
          },
        }}
        onClick={() => {
          navigate("/dashboard/create/client-access");
        }}
      >
        Client Access
      </Box>
    </Box>,
    <Box
      sx={{
        padding: "0.1rem 0.2rem 0.1rem 0.6rem",
        clipPath:
          "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 20% 50%, 0% 0%)",
        backgroundColor: location.pathname.includes("firm-access")
          ? "#6CB4EE "
          : "#a1bbcf",
        borderRadius: "0.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#6CB4EE",
        },
        fontWeight: location.pathname.includes("firm-access") ? "500" : "400",
      }}
    >
      <Box
        key="3"
        color="text.primary"
        sx={{
          padding: "1rem 5rem 1rem 4rem",
          clipPath:
            "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 20% 50%, 0% 0%)",
          backgroundColor: location.pathname.includes("firm-access")
            ? "#B9D9EB"
            : "white",
          color: location.pathname.includes("firm-access")
            ? "black"
            : "#7c7c7c",
          fontSize: "0.9rem",
          borderRadius: "0.3rem",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#B9D9EB",
          },
        }}
        onClick={() => {
          navigate("/dashboard/create/firm-access");
        }}
      >
        Firm Access
      </Box>{" "}
    </Box>,
  ];

  return (
    <Stack spacing={-3} direction="row">
      {breadcrumbs}
    </Stack>
  );
}
