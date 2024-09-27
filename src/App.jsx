import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import "./css/Basket.css"

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
        <Drawer open={drawer} onClose={() => dispatch(setDrawer())} anchor="right" >
          {
            products && products.map((product) => {
              return (
                <div className='drawer-container'>
                  <div className='drw-list'>
                    <img className='drw-img' src={product.image} />
                    <div className="drw-prd-info">
                      <p className='drw-title'>{product.title} ({product.count})</p>
                      <p className='drw-price'>{product.price} $</p>
                    </div>
                    <button className='drw-remowe'>Remove</button>
                  </div>
                </div>
              )
            })
          }
          <div>
            <p className='drw-amount'>Total Amount: {totalAmount} $</p>
          </div>
        </Drawer>
      </PageContainer>
    </>
  )
}

export default App