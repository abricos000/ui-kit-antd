import React from "react";
import {Menu} from "antd";
import { withTheme } from "../../hocs/withTheme";

const ThemedMenu = withTheme(Menu) as typeof Menu;
export default ThemedMenu;
