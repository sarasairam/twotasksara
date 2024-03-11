import Loader from 'react-loader-spinner'
import {Component} from 'react'

import './index.css'

class ProductDetails extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://fakestoreapi.com/products/${id}`
    const responsedata = await fetch(url)
    const data = await responsedata.json()
    this.setState({data, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    const {title, image, price, rating, description, category} = data

    return (
      <div className="home-page">
        <h1 className="store-name">
          Zoya Stores
          <span className="store-name-span"> -- one stop solution</span>
        </h1>
        <h3 className="to-left">
          We hold - Wide range of products and trust of consumers
        </h3>
        {isLoading ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="list-box-detail">
            <h1>{category}</h1>
            <p className="title">{title}</p>
            <img src={image} alt="product" className="detail-image" />
            <p className="para">Price : {price} $</p>
            <p className="para">Rating : {rating.rate} / 5</p>
            <p className="para">Rating Count : {rating.count} Users</p>
            <p className="para">Description : {description}</p>
          </div>
        )}
      </div>
    )
  }
}
export default ProductDetails
