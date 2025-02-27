import Pic from'./assets/india.jpg'

function Card() {

    return(
        <div className="card">
             <img className="card-img" src={Pic} alt="Shiva Picture" />
             <h2 className='card-title'>Bharat, India</h2>
             <p className='card-text'>The land of gods, culture and peace</p>
        </div>
    );
}

export default Card