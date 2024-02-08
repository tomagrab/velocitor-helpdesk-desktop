import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Dashboard from "@/routes/Dashboard/Dashboard";
import Tickets from "@/routes/Tickets/Tickets";
import Companies from "@/routes/Companies/Companies";
import Branches from "@/routes/Branches/Branches";
import Users from "@/routes/Users/Users";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/user" element={<Users />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
