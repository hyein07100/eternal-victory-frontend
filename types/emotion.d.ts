import "@emotion/react";
import type { AppTheme } from "../src/theme";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
