import MuiTooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  ["& .MuiTooltip-tooltip"]: {
    backgroundColor: "#000000DE",
    color: "#fff",
    fontSize: 12,
    borderRadius: 6,
    padding: "3px 16px",
  },
}));

export default Tooltip;
