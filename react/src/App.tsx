import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { IPublicClientApplication } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { PageLayout } from './components/PageLayout';
import { Grid } from '@mui/material';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { CustomNavigationClient } from './utils/CustomNavigationClient';
import './App.css';

const Pages = () => {
  return <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/" element={<Home />} />
  </Routes>
}

interface AppProps {
  pca: IPublicClientApplication
}

export const App = ({ pca }: AppProps) => {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return <div className="App">
    <MsalProvider instance={pca}>
      <PageLayout>
        <Grid container justifyContent="center">
          <UnauthenticatedTemplate>
            <Home />
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            <Pages />
          </AuthenticatedTemplate>
        </Grid>
      </PageLayout>
    </MsalProvider>
  </div>
};
