import React from 'react'
import "./App.css"
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <PageContainer>
      <Header />
      <ProductList />
    </PageContainer>

  )
}

export default App