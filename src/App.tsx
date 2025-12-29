import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "./context/themeprovider";
import Weather from "./pages/weather";
import City from "./pages/city";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>

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
     <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App;