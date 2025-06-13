import './Browsetherange.css'

function Browsetherange(){
     const imageUrl = "/diner.png";
          const imageUrl1 = "/living2.png";
                  const imageUrl2 = "/bedroom.png";



    return(
        <>
        <h1 className='head'>Browse The Range</h1>
        <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. babar Azam </p>
        <div className='images'>
            <div className='images1'>
                <img src={imageUrl}/>
                <h5>Dinning</h5>
            </div>
             <div className='images2'>
<img src={imageUrl1}/>
                <h5>Living</h5>
            </div>
             <div className='images3'>


        <img src={imageUrl2}/>
                <h5>Bedroom</h5>
            </div>
        </div>
        </>
    )
}
export default Browsetherange;