import PropTypes from 'prop-types'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({starCount}) => {
  const maxStarsCount = 5
  const allStarsCount = Math.floor(starCount)
  const halfStarsCount = starCount % 1 !== 0
  const emptyStarsCount = maxStarsCount - allStarsCount - (halfStarsCount && 1)

  const renderStars = () => {
    const tempStars = []

    for (let i = 0; i < allStarsCount; i++) {
      tempStars.push(<BsStarFill key={i} color='gold'/>)
    }

    if(halfStarsCount) {
      tempStars.push(<BsStarHalf key={allStarsCount} color='gold'/>)
    }

    for (let i = 0; i < emptyStarsCount; i++) {
      tempStars.push(<BsStar  key={allStarsCount + (halfStarsCount && 1) + i} color='gold'/>)
    }
    return tempStars
  }
  return (
    <div className='d-flex gap-1 fs-6'>{renderStars()}</div>
  )
}

Stars.propTypes = {
  starCount: PropTypes.number
}

export default Stars