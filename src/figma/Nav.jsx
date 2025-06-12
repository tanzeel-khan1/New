import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function Nav(){
      const imageUrl = "/logo.png";
            const imageUrl1 = "/image.png";


    return(
        <>
        <nav>
  <a> <img src={imageUrl}/> <h1>Furniro</h1></a>

  <ul>
<li>Home</li>
 <li>Shop</li>
 <li>About</li>
 <li>Contact</li>


  </ul>
<div className='icon'>
    <FontAwesomeIcon icon={faUser} style={{marginTop: '2rem'}} />
<FontAwesomeIcon icon={faHeart} style={{marginTop: '2rem', marginLeft: '5rem'}} />
<FontAwesomeIcon icon={faMagnifyingGlass} style={{marginTop: '2rem', marginLeft: '5rem'}} />
<FontAwesomeIcon icon={faCartShopping} style={{marginTop: '2rem', marginLeft: '5rem'}} />
</div>
   </nav>
   <img className='part' src={imageUrl1}/>
   <div style={{position: 'relative'}}>
    <div className='text-sec'>
        <h4>New Arrival</h4>
        <h1 style={{marginTop: '1rem'}}>Discover our</h1>
        <h1>New collection</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit hgfytru.?</p>
        <p>Businessman and former   </p>
        <button>Started</button>

    </div>
   </div>
        </>
    )
}
export default Nav;