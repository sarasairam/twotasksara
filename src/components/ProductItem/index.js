import {Link} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
  const {data} = props
  const {id, image, price, rating, title} = data
  const {rate, count} = rating
  return (
    <li className="list-item">
      <Link to={`/product/${id}`} className="link">
        <img src={image} alt="product" className="image" />
        <p className="title">{title}</p>
        <p className="para">Price : {price} $</p>
        <p className="para">Rating : {rate} / 5</p>
        <p className="para">In stock : {count} units</p>
      </Link>
    </li>
  )
}
export default ProductItem
