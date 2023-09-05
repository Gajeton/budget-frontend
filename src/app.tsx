import { Auth0Provider } from "@auth0/auth0-react";
import "./app.css";
import AxiosInstanceProvider from "./components/axios-instance-provider";
import Router from "./router/router";
import { AuthProviderOverride } from "./components/auth-provider-override";

function App() {
  const url = import.meta.env.VITE_API_URL
  return (
    <div className="bg-[#EEEEEE] font-latoRegular text-[#272829]">
      <AuthProviderOverride >
        <Router />
      </AuthProviderOverride>
    </div>
  );
}

export default App;
