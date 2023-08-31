import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import AxiosInstanceProvider from "./components/AxiosInstanceProvider";
import Router from "./router/Router";
import { AuthProviderOverride } from "./components/AuthProviderOverride";

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
