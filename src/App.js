import logo from './logo.svg';
import './App.css';
import {Box, CssBaseline} from "@mui/material";
import Home from "./pages/Home/Home";
import {
    Switch,
    Route,
} from "react-router-dom";
import Appbar from "./shared/Appbar/Appbar";


function App() {
  return (
    <Box>
        <CssBaseline />
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Box>
  );
}

export default App;
