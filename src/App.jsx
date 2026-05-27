import { Routes, Route } from "react-router-dom";

/* AUTH */
import AgencyLogin from "./pages/auth/AgencyLogin";
import ClientLogin from "./pages/auth/ClientLogin";

/* MAIN */
import ClientDashboard from "./pages/ClientDashboard";
import ClientCampaigns from "./pages/ClientCampaigns";
import CampaignAnalytics from "./pages/CampaignAnalytics";
import CampaignInsights from "./pages/CampaignInsights";
import CampaignReports from "./pages/CampaignReports";
import AgencyAuth from "./pages/AgencyAuth";
import AgencyForgotPassword from "./pages/AgencyForgotPassword";
import ClientAuth from "./pages/ClientAuth";
import ClientForgotPassword from "./pages/ClientForgotPassword";
import Dashboard from "./pages/Dashboard";
import AnalyzeAccount from "./pages/AnalyzeAccount";
import Analytics from "./pages/Analytics";
import Predictions from "./pages/Predictions";
import Recommendations from "./pages/Recommendations";
import Comparisons from "./pages/Comparisons";
import PostAnalysis from "./pages/PostAnalysis";
import Reports from "./pages/Reports";
import AgencySettings from "./pages/AgencySettings";
import ClientSettings from "./pages/ClientSettings";

function App() {

  return (

    <Routes>

      <Route path="/"
       element={<AgencyAuth />}
      />
      <Route
      path="/agency-forgot-password"
      element={<AgencyForgotPassword />}
      />
      <Route
      path="/client-auth"
      element={<ClientAuth />}
      />
      <Route
      path="/client-forgot-password"
      element={<ClientForgotPassword />}
      />
      <Route
      path="/client-dashboard"
      element={<ClientDashboard />}
      />
      <Route
      path="/client-campaigns"
      element={<ClientCampaigns />}
      />
      <Route
      path="/campaign-analytics"
      element={<CampaignAnalytics />}
      />
      <Route
      path="/campaign-insights"
      element={<CampaignInsights />}
      />
      <Route
      path="/campaign-reports"
      element={<CampaignReports />}
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* ANALYZE */}
      <Route path="/analyze-account" element={<AnalyzeAccount />} />

      {/* ANALYTICS */}
     <Route path="/feature-extraction" element={<Analytics />} />

      {/* PREDICTIONS */}
      <Route
        path="/predictions"
        element={<Predictions />}
      />

      {/* RECOMMENDATIONS */}
      <Route
        path="/recommendations"
        element={<Recommendations />}
      />

      {/* COMPARISONS */}
      <Route
        path="/comparisons"
        element={<Comparisons />}
      />

      {/* POST ANALYSIS */}
      <Route
        path="/post-analysis"
        element={<PostAnalysis />}
      />
      <Route path="/reports"
       element={<Reports />} 
       />
       <Route path="/settings" element={<AgencySettings />} />
       <Route
       path="/client-settings"
       element={<ClientSettings />}
       />

    </Routes>

  );
}

export default App;