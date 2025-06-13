import "./OurProduct.css"
import { useEffect, useState } from "react";

import { faStar } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function OurProduct(){


    const [currentImages, setCurrentImages] = useState(Array(8).fill(true));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => prev.map((val) => !val));
    }, 3000);
    return () => clearInterval(interval);
  }, []);


     const imageUrl1 = "/image 1.png";
          const imageUrl2 = "/leviosa.webp";
                  const imageUrl3 = "/image 3.png";
     const imageUrl4 = "/image 4.png";
          const imageUrl5 = "/image 9.png";
         const imageUrl6 = "/image 6.png";
         const imageUrl7 = "/image 7.png";
         const imageUrl8 = "/image 8.png";





    return(
        <>
        <h1 className="our">Our Product's</h1>
        <div className="product-con">
            <div className="conta">
                <main className="sec-1" >
{/* <img src={imageUrl1}/> */}
<img  src={currentImages[0] ? "/image 1.png" : "/image 3.png"}/>
                <h1>Syltherine</h1>
                <p>stylish cafe chair</p>
                <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 2.500. 000</h3>
                </main>
                 <main className="sec-2">

                    <img  src={currentImages[0] ? "/image 9.png" : "https://furniro.archisacademy.com/assets/sofa2-a518c854.jpg"}/>

                <h1>Leviosa</h1>
                <p>stylish cafe chair's</p>

                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 2.500. 000</h3>
                 </main>
                <main className="sec-3">
                    <img  src={currentImages[0] ? "/image 8.png" : "https://furniro.archisacademy.com/assets/barstool3-e6e28e0e.jpg"}/>
                <h1>Lolita</h1>
                <p>Luxary Big sofa</p>

                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 7.000.000</h3>
                </main>
                <main className="sec-4">
                                        <img  src={currentImages[0] ? "/image 7.png" : "https://furniro.archisacademy.com/assets/coffeetable3-930b9966.jpg"}/>

                <h1>Respira</h1>
                <p>Outdoor Bar table and stool</p>

                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 5.00.000</h3>
                </main>



            </div>
            <div className="conta1">
                <main className="sec-1">
                    <img  src={currentImages[0] ? "/image 6.png" : "https://furniro.archisacademy.com/assets/table1-3da3ce85.jpg"}/>

                <h1>Grifo</h1>
                <p>Night Champ</p>

                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp :- 1.500.000</h3>
                </main>
                 <main className="sec-2">

                    <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/bedframe2-e1034b8b.jpg" : "https://furniro.archisacademy.com/assets/chair2-c83481e8.jpg"} />
                <h1>Leviosa</h1>
                <p>Small mug</p>

                                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 1.500.000</h3>
                 </main>
                <main className="sec-3">
                    <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/coffeetable1-9bd09ccf.jpg" : "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg"} />
                <h1>Pingky</h1>
                <p>Cute bed set</p>

                                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 7.000.000</h3>
                </main>
                <main className="sec-4">
                     <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg" : "https://furniro.archisacademy.com/assets/wardrobe2-f21b4d35.jpg"} />
                <h1>Potty</h1>
                <p>Minimalist flower pot</p>

                                  <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
             <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
            <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
             <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
</span>
                <h3>Rp 500.000</h3>
                </main>

            </div>
                <button>Show More</button>

        </div>
        </>
    )
}
export default OurProduct;



