import { ThemeProvider } from "@emotion/react";

import theme from "./theme";
import {DashboardPage} from "./pages";
import { ListProvider } from "./components/ListState";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ListProvider>
        <DashboardPage></DashboardPage>
      </ListProvider>
    </ThemeProvider>
  );
}
