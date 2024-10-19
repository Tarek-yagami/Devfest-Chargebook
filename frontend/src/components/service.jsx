import '../styles/service.css'

function Service({titre,description}){
  return (
    <div className='ser-container'>
      <div className="rectangle"></div>
      <div className='ser-contenue'>
        <h2 className='service-name'>{titre}</h2>
        <p className='service-description'>{description}</p>
      </div>
    </div>
  )
}export default Service;