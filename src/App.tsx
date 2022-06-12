import { ThemeProvider } from "@emotion/react";

import theme from "./theme";
import {DashboardPage} from "./pages";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage></DashboardPage>
    </ThemeProvider>
  );
}
