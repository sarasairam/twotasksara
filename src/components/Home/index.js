import Loader from 'react-loader-spinner'
import {Component} from 'react'
import ProductItem from '../ProductItem'

import './index.css'

class Home extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://fakestoreapi.com/products'
    const responsedata = await fetch(url)
    const data = await responsedata.json()
    this.setState({data, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="home-page">
        <h1 className="store-name">
          Zoya Stores
          <span className="store-name-span"> -- one stop solution</span>
        </h1>
        <h3>We hold - Wide range of products and trust of consumers</h3>
        {isLoading ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="list-space">
            <ul className="list">
              {data.map(each => (
                <ProductItem key={each.id} data={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
