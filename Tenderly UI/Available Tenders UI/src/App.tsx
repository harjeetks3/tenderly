import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TenderFeed } from "./pages/TenderFeed";
import { TenderDetails } from "./pages/TenderDetails";
import { ProposalEditor } from "./pages/ProposalEditor";
import { CompanyProfile } from "./pages/CompanyProfile";
import { ReputationPage } from "./pages/ReputationPage";
import { Settings } from "./pages/Settings";
import { Help } from "./pages/Help";

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TenderFeed />} />
        <Route path="/tenders" element={<TenderFeed />} />
        <Route path="/tender/:id" element={<TenderDetails />} />
        <Route path="/proposal/:tenderId" element={<ProposalEditor />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/reputation" element={<ReputationPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Layout>
  );
};