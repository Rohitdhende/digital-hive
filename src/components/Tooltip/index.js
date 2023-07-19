import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip(props) {
  const { title, children, color } = props;
  return (
    <Tooltip
      title={title}
      arrow={true}
      placement="top-start"
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: "#fff",
            color: color,
            padding: " 0.7rem 1rem",
            borderRadius: 0,
            boxShadow: "5px 5px 10px #aaaaaa",
          },
        },
        arrow: {
          sx: {
            "&:before": {
              backgroundColor: "#fff",
              //   border: "1px solid #E6E8ED",
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}
