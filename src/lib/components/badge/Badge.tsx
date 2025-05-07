import React from "react";
import AntBadge from "antd/es/badge";
import type { BadgeProps, RibbonProps } from "./types";
import { withTheme } from "../../hocs/withTheme";

const Badge = (props: BadgeProps) => {
  const { children, ...rest } = props;
  return (<AntBadge {...rest}>{children}</AntBadge>);
};

Badge.Ribbon = (props: RibbonProps) => {
  const { children, ...rest } = props;
  return (<AntBadge.Ribbon {...rest}>{children}</AntBadge.Ribbon>);
};

export default withTheme(Badge);
