// Write your code here
import './index.css'

const DestinationItem = props => {
  const {img, name} = props
  return (
    <li>
      <img className="image" src={img} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
