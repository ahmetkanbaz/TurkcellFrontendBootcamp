/* eslint-disable react/prop-types */
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
const Rate = ({ rate }) => {
  const maxStars = 5;
  const allStars = Math.floor(rate);
  const halfStars = rate % 1 !== 0;

  const renderStars = () => {
    const renderStars = [];

    for (let i = 0; i < allStars; i++) {
      renderStars.push(<BsStarFill key={i} color='gold'/>);
    }

    if (halfStars) {
      renderStars.push(<BsStarHalf key = {allStars} color='gold'/>);
    }

    const remain = maxStars - allStars - (halfStars ? 1 : 0);

    for (let i = 0; i < remain; i++) {
      renderStars.push(
        <BsStar
          key={allStars + (halfStars ? 1 : 0) + i}
        ></BsStar>
      );
    }
    return renderStars;
  };
  return <div>
    <h1>Yıldızlar</h1>
    {renderStars()}</div>;
};

export default Rate;
