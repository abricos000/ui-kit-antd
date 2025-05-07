import type { ThemeConfig } from 'antd';

export const defaultTheme: ThemeConfig = {
  "token": {
    "colorPrimary": "#91f246",
    "colorInfo": "#62f9ef",
    "colorSuccess": "#da3de6",
    "colorWarning": "#b3801c",
    "colorError": "#ff0004",
    "colorLink": "#7e6f12",
    "colorTextBase": "#040941",
    "colorBgBase": "#f7eaea",
    "fontSize": 16,
    "sizeStep": 6,
    "sizeUnit": 3,
    "borderRadius": 8,
    "wireframe": false,
    "boxShadow": "0 6px 10px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)"
  },
  "components": {
    "Button": {
      "algorithm": true
    }
  }
}