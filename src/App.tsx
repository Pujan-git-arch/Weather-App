import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "./context/themeprovider";
import Weather from "./pages/weather";
import City from "./pages/city";
import Layout from "./components/Layout";
function App() {
  return (
    
     <BrowserRouter>

     <ThemeProvider defaultTheme="dark">

     <Layout>

      <Routes>

        <Route path="/" element={<Weather />} />
        <Route path="/city/:cityName" element={<City />} />
        
        
      </Routes>


     </Layout>

     </ThemeProvider>
     </BrowserRouter>
  )
}

export default App;