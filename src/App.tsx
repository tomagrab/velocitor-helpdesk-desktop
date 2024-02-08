import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Dashboard from "@/routes/Dashboard/Dashboard";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
