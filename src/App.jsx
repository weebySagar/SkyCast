import City from "./components/city/City";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@styles/global/global.scss";
import Header from "./components/Header";
import Search from "./components/search/Search";
import Homepage from "@pages/Homepage";
import WeatherPage from "@pages/WeatherPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
