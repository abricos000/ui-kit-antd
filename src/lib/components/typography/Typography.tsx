import React from "react";
import { Typography } from "antd";
import { withTheme } from "../../hocs/withTheme";

const ThemedTypography = withTheme(Typography) as typeof Typography;
export default ThemedTypography;
