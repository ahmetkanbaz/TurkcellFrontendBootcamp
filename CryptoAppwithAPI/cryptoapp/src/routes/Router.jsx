import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'

const Router = () => {
  const routers = useRoutes([
    {path: '/', element: <Home />}
  ])
  return routers
}

export default Router
