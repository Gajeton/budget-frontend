import { Auth0Provider } from "@auth0/auth0-react";
import React, { ReactElement } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface AuthProviderOverrideProps {
    children: ReactElement
}

export const AuthProviderOverride = ({ children } : AuthProviderOverrideProps) => {


  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState :any) => {
    redirect(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};