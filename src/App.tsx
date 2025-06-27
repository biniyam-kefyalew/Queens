import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BranchesPage from "./pages/BranchesPage";
import BranchDetailPage from "./pages/BranchDetailPage";
import PaymentsPage from "./pages/PaymentsPage";
import AboutPage from "./pages/AboutPage";
import HowToBuyPage from "./pages/HowToBuyPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/branches/:id" element={<BranchDetailPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-to-buy" element={<HowToBuyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
