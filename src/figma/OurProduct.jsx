// import "./OurProduct.css"
// import { useEffect, useState } from "react";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// function OurProduct(){
// const [showOptions, setShowOptions] = useState(false); 
//   const toggleOptions = () => {
//     setShowOptions((prev) => !prev);
//   };
//     const [currentImages, setCurrentImages] = useState(Array(8).fill(true));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImages((prev) => prev.map((val) => !val));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);


//  const data  =[
//   {
//     id: 1,
//     span : 'Living and Room',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   },
//   {
//     id: 2,
//      span : 'BedRoom',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   },
//   {
//     id: 3,
//      span : 'Dinning Room',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   },
//   {
//     id: 4,
//      span : 'Home Office',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   },
//   {
//     id: 5,
//      span : 'OutDoor',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   },
//   {
//     id: 6,
//      span : 'Kids Room',
//     option: "Sofas and Sectionals",
//     option: "   Desks and Chairs",
//     option: " Tv Units",
//   }
//  ]



//      const imageUrl1 = "/image 1.png";
//           const imageUrl2 = "/leviosa.webp";
//                   const imageUrl3 = "/image 3.png";
//      const imageUrl4 = "/image 4.png";
//           const imageUrl5 = "/image 9.png";
//          const imageUrl6 = "/image 6.png";
//          const imageUrl7 = "/image 7.png";
//          const imageUrl8 = "/image 8.png";
//     return(
//         <>
//         <h1 className="our">Our Product's</h1>
//         <div className="product-con">
//             <div className="conta">
//                  <div className="side">
   

//    <div>
//       <div onClick={toggleOptions}>
//         <span>Options</span>
//         <span>{showOptions ? "−" : "+"}</span>
//       </div>
//       {showOptions && (
//         <div>
//           <input type="checkbox" id="scales" />
//           <label htmlFor="scales">Scales</label>
//           <br />
//           <input type="checkbox" id="babar" />
//           <label htmlFor="babar">Babar</label>
//         </div>
//       )}
//     </div>


//     <div>
//       <div onClick={toggleOptions}>
//         <span>Options</span>
//         <span>{showOptions ? "−" : "+"}</span>
//       </div>
//       {showOptions && (
//         <div>
//           <input type="checkbox" id="scales" />
//           <label htmlFor="scales">Scales</label>
//           <br />
//           <input type="checkbox" id="babar" />
//           <label htmlFor="babar">Babar</label>
//         </div>
//       )}
//     </div>

      
// </div>


//                 <main className="sec-1" >
// <img  src={currentImages[0] ? "/image 1.png" : "/image 3.png"}/>
//                 <h1>Syltherine</h1>
//                 <p>stylish cafe chair</p>
//                 <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 2.500. 000</h3>
//                 </main>
//                  <main className="sec-2">

//                     <img  src={currentImages[0] ? "/image 9.png" : "https://furniro.archisacademy.com/assets/sofa2-a518c854.jpg"}/>

//                 <h1>Leviosa</h1>
//                 <p>stylish cafe chair's</p>

//                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 2.500. 000</h3>
//                  </main>
//                 <main className="sec-3">
//                     <img  src={currentImages[0] ? "/image 8.png" : "https://furniro.archisacademy.com/assets/barstool3-e6e28e0e.jpg"}/>
//                 <h1>Lolita</h1>
//                 <p>Luxary Big sofa</p>

//                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 7.000.000</h3>
//                 </main>
//                 <main className="sec-4">
//                                         <img  src={currentImages[0] ? "/image 7.png" : "https://furniro.archisacademy.com/assets/coffeetable3-930b9966.jpg"}/>

//                 <h1>Respira</h1>
//                 <p>Outdoor Bar table and stool</p>

//                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 5.00.000</h3>
//                 </main>



//             </div>
//             <div className="conta1">
//                 <main className="sec-5">
//                     <img  src={currentImages[0] ? "/image 6.png" : "https://furniro.archisacademy.com/assets/table1-3da3ce85.jpg"}/>

//                 <h1>Grifo</h1>
//                 <p>Night Champ</p>

//                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp :- 1.500.000</h3>
//                 </main>
//                  <main className="sec-6">

//                     <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/bedframe2-e1034b8b.jpg" : "https://furniro.archisacademy.com/assets/chair2-c83481e8.jpg"} />
//                 <h1>Leviosa</h1>
//                 <p>Small mug</p>

//                                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 1.500.000</h3>
//                  </main>
//                 <main className="sec-7">
//                     <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/coffeetable1-9bd09ccf.jpg" : "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg"} />
//                 <h1>Pingky</h1>
//                 <p>Cute bed set</p>

//                                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 7.000.000</h3>
//                 </main>
//                 <main className="sec-8">
//                      <img src={currentImages [0] ? "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg" : "https://furniro.archisacademy.com/assets/wardrobe2-f21b4d35.jpg"} />
//                 <h1>Potty</h1>
//                 <p>Minimalist flower pot</p>

//                                   <span style={{marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem'}}>                
//              <FontAwesomeIcon icon={faStar} style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//             <FontAwesomeIcon icon={faStar}   style={{color: '#f90'}} />
//              <FontAwesomeIcon icon={faStar}  style={{color: 'gray'}} />
// </span>
//                 <h3>Rp 500.000</h3>
//                 </main>

//             </div>
//                 <button>Show More</button>

//         </div>
//         </>
//     )
// }
// export default OurProduct;



import "./OurProduct.css";
import { useEffect, useState } from "react";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OurProduct() {
  const [currentImages, setCurrentImages] = useState(Array(8).fill(true));
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => prev.map((val) => !val));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      id: 1,
      span: 'Living and Room',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    },
    {
      id: 2,
      span: 'BedRoom',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    },
    {
      id: 3,
      span: 'Dinning Room',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    },
    {
      id: 4,
      span: 'Home Office',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    },
    {
      id: 5,
      span: 'OutDoor',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    },
    {
      id: 6,
      span: 'Kids Room',
      options: ["Sofas and Sectionals", "Desks and Chairs", "Tv Units"]
    }
  ];

  return (
    <>
      <h1 className="our">Our Product's</h1>
      <div className="product-con">
        <div className="conta">
          <div className="side">
            {data.map((item) => (
              <div key={item.id} style={{ marginBottom: "1rem",  }}>
                <div
                  onClick={() => toggleSection(item.id)}
                  style={{
                                        cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                    marginTop: '1rem'

                  }}
                >
                  <span style={{marginLeft: '1rem',fontWeight:'bold',fontSize: '1.1rem', fontFamily: 'sans-serif',     color: 'rgb(58, 58, 58)'
                  }}>{item.span}</span>

                  <span className="checkMark" style={{ marginRight: '1rem'}}>{openSections[item.id] ? "−" : "+   "}</span>

                </div>
                                        
              <hr style={{marginTop: '0.3rem', width: '85%', marginLeft: '1rem',}} />

                {openSections[item.id] && (
                  <div style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                    {item.options.map((opt, i) => (
                      <div  key={i}>
                        <input style={{background:'red'}} type="checkbox" id={`${item.id}-${i}`} />
                        <label htmlFor={`${item.id}-${i}`} style={{ marginLeft: "0.5rem" }}>{opt}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <main className="sec-1">
            <img src={currentImages[0] ? "/image 1.png" : "/image 3.png"} />
            <h1>Syltherine</h1>
            <p>stylish cafe chair</p>
            <StarRating />
            <h3>Rp 2.500.000</h3>
          </main>

          <main className="sec-2">
            <img src={currentImages[0] ? "/image 9.png" : "https://furniro.archisacademy.com/assets/sofa2-a518c854.jpg"} />
            <h1>Leviosa</h1>
            <p>stylish cafe chair's</p>
            <StarRating />
            <h3>Rp 2.500.000</h3>
          </main>

          <main className="sec-3">
            <img src={currentImages[0] ? "/image 8.png" : "https://furniro.archisacademy.com/assets/barstool3-e6e28e0e.jpg"} />
            <h1>Lolita</h1>
            <p>Luxary Big sofa</p>
            <StarRating />
            <h3>Rp 7.000.000</h3>
          </main>

          <main className="sec-4">
            <img src={currentImages[0] ? "/image 7.png" : "https://furniro.archisacademy.com/assets/coffeetable3-930b9966.jpg"} />
            <h1>Respira</h1>
            <p>Outdoor Bar table and stool</p>
            <StarRating />
            <h3>Rp 5.00.000</h3>
          </main>
        </div>

        <div className="conta1">
          <main className="sec-5">
            <img src={currentImages[0] ? "/image 6.png" : "https://furniro.archisacademy.com/assets/table1-3da3ce85.jpg"} />
            <h1>Grifo</h1>
            <p>Night Champ</p>
            <StarRating />
            <h3>Rp :- 1.500.000</h3>
          </main>

          <main className="sec-6">
            <img src={currentImages[0] ? "https://furniro.archisacademy.com/assets/bedframe2-e1034b8b.jpg" : "https://furniro.archisacademy.com/assets/chair2-c83481e8.jpg"} />
            <h1>Leviosa</h1>
            <p>Small mug</p>
            <StarRating />
            <h3>Rp 1.500.000</h3>
          </main>

          <main className="sec-7">
            <img src={currentImages[0] ? "https://furniro.archisacademy.com/assets/coffeetable1-9bd09ccf.jpg" : "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg"} />
            <h1>Pingky</h1>
            <p>Cute bed set</p>
            <StarRating />
            <h3>Rp 7.000.000</h3>
          </main>

          <main className="sec-8">
            <img src={currentImages[0] ? "https://furniro.archisacademy.com/assets/bedframe1-66429eda.jpg" : "https://furniro.archisacademy.com/assets/wardrobe2-f21b4d35.jpg"} />
            <h1>Potty</h1>
            <p>Minimalist flower pot</p>
            <StarRating />
            <h3>Rp 500.000</h3>
          </main>
        </div>

        <button>Show More</button>
      </div>
    </>
  );
}

function StarRating() {
  return (
    <span style={{ marginLeft: '1rem', display: 'flex', paddingTop: '1rem', gap: '1rem' }}>
      <FontAwesomeIcon icon={faStar} style={{ color: '#f90' }} />
      <FontAwesomeIcon icon={faStar} style={{ color: '#f90' }} />
      <FontAwesomeIcon icon={faStar} style={{ color: '#f90' }} />
      <FontAwesomeIcon icon={faStar} style={{ color: 'gray' }} />
    </span>
  );
}

export default OurProduct;
