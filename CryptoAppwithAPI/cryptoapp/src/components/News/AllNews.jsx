import { useCoins } from "../../context/CoinContext"
const AllCoins = () => {
  const allCoins = useCoins()
  console.log(allCoins)
  return (
    <div>
      AllCoins
    </div>
  )
}

export default AllCoins
