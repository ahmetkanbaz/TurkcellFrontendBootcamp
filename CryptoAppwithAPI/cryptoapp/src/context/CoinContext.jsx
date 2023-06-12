import {useState, useEffect, useContext, createContext} from 'react'
import PropTypes from 'prop-types'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {
  const [allCoins, setAllCoins] = useState([])

  const getAllCoins = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=tr')
    const data = await response.json()
    setAllCoins(data)
  }

  useEffect(() => {
    getAllCoins()
  }, [])

  return <CoinContext.Provider value={allCoins}>{children}</CoinContext.Provider>
}

CoinProvider.propTypes = {
  children: PropTypes.node
}

export const useCoins = () => useContext(CoinContext)