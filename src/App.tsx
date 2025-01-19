'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div className="app">
        <Header />
        <main>
          {/* Ana içerik buraya gelecek */}
        </main>
      </div>
    </I18nextProvider>
  );
}

export default App; 