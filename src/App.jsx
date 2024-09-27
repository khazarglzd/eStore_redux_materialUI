import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])


  return (
    <>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer className='drawer' open={drawer} onClose={() => dispatch(setDrawer())} anchor="right" >
          {
            products && products.map((product) => {
              return (
                <div className='flex-row'>
                  <img src={product.image} width={50} height={50} />
                  <p>{product.title}({product.count})</p>
                  <p>{product.price}</p>
                  <button>Remove</button>
                </div>
              )
            })
          }
          <div>
            <p>Total Amount: {totalAmount}$</p>
          </div>
        </Drawer>
      </PageContainer>
    </>
  )
}

export default App