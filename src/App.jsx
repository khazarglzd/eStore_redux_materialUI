import React from 'react'
import "./App.css"
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import ProductList from './components/ProductList'
import Loading from './components/Loading'

const App = () => {
  return (
    <PageContainer>
      <Loading />
      <Header />
      <ProductList />
    </PageContainer>

  )
}

export default App