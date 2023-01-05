import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { PUBLIC_ROUTES } from './Config/routes';

import { AppThemeProvider } from './Provider';
import { Layout } from './Layouts/Layout';

import { Home } from './Pages/Home';
import StoreProvider from './Context/StoreContext';
import { CreatePresale } from './Pages/CreatePresale';
import { CoinExplore } from './Pages/CoinExplore';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <StoreProvider>
          <AppThemeProvider>
            <Layout>
              <Routes>
                <Route path={PUBLIC_ROUTES.default} element={<Home />} />
                <Route path={PUBLIC_ROUTES.home} element={<Home />} />
                <Route path={PUBLIC_ROUTES.explore} element={<CoinExplore />} />
                <Route path={PUBLIC_ROUTES.create} element={<CreatePresale />} />
              </Routes>
            </Layout>
          </AppThemeProvider>
        </StoreProvider>
      </Router>
    </Suspense>
  );
}

export default App;
