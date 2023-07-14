import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { DataProvider } from './context/DataContext'
import CountrySelection from './components/Country Selection/CountrySelection'
import CountryInfoPage from './components/Country Info Page/CountryInfoPage'
import GlobalStyle from './styles/globalStyles'
import { CustomThemeProvider } from './context/CustomThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
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
  </React.StrictMode>
)
