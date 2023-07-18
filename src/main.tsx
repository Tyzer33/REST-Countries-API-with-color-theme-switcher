import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './components/Header/Header'
import { DataProvider } from './context/DataContext'
import CountrySelection from './components/Country Selection/CountrySelection'
import CountryInfoPage from './components/Country Info Page/CountryInfoPage'
import GlobalStyle from './styles/globalStyles'
import { CustomThemeProvider } from './context/CustomThemeContext'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorMessage />}>
      <CustomThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <DataProvider>
            <Routes>
              <Route path="/" element={<CountrySelection />} />
              <Route path="/:country" element={<CountryInfoPage />} />
            </Routes>
          </DataProvider>
        </BrowserRouter>
      </CustomThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
