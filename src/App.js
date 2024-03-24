import { Sidebar } from "react-pro-sidebar";
import TopBar from "./scenes/global/TopBar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <ProSidebarProvider>
          <Sidebar/>
        </ProSidebarProvider>
          <main className="content">
            <TopBar/>
            <Routes>
              {/*<Route path="/" element={<Dashboard/>}/>*/}
              {/*<Route path="/" element={<Clients/>}/>*/}
              {/*<Route path="/" element={<Reservations/>}/>*/}
              {/*<Route path="/" element={<Contacts/>}/>*/}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
