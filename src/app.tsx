import "./app.css";
import { AuthProviderOverride } from "./components/auth/auth-provider-override";
import Router from "./router/router";

function App() {
  return (
    <div className="bg-[#EEEEEE] font-latoRegular text-[#272829]">
      <AuthProviderOverride >
        <Router />
      </AuthProviderOverride>
    </div>
  );
}

export default App;
