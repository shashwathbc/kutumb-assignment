import React from "react";
import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import QuoteListPage from "./components/QuoteListPage";
// import QuoteCreationPage from "./components/QuoteCreationPage";
import LoginPage from "./components/loginPage";
import QuoteListPage from "./components/quoteListPage";
import QuoteCreationPage from "./components/quoteCreationPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/quotes" element={<QuoteListPage />} />
      <Route path="/create" element={<QuoteCreationPage />} />
    </Routes>
  );
};

export default AppRoutes;
