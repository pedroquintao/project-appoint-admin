import { useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import Page from './components/Page'
import Footer from './components/Footer'

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

export default App
