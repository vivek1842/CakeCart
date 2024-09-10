import { useEffect, useState } from 'react';
import './index.css'


const Home = () => {
    const cake_img = [
        {id: 1, src : `${process.env.PUBLIC_URL}/images/1.png`, alt : "Image-1 not found"},
        {id: 2, src : `${process.env.PUBLIC_URL}/images/2.png`, alt : "Image-2 not found"},
        {id: 3, src : `${process.env.PUBLIC_URL}/images/3.png`, alt : "Image-3 not found"}
    ]

    let [selectedImage, setSelectedImage] = useState(cake_img[0]);
    // let [color, setColor] = useState("red");

    // const changeColor = (color) => {
    //     setColor(color);
    // }
    useEffect(() => {
        let gradient = "";
        const body = document.body;
        if(selectedImage.id === 1){
            gradient = "linear-gradient(to right,  rgb(254, 129, 150) 70%,rgb(255, 204, 213) 30%)";
            console.log("first color");
        } else if(selectedImage.id === 2) {
            gradient = "linear-gradient(to right,  rgb(0, 190, 190) 70%,#7ce3ff 30%)";
            console.log("second color");
        } else if(selectedImage.id === 3) {
            gradient = "linear-gradient(to right, rgb(247 125 0) 70%, rgb(251 150 0) 30%)";
            console.log("third color");
        }
        body.style.background = gradient;
        console.log(gradient);
    },[selectedImage])

    

    const handleImageClick = (image) => {
        setSelectedImage(image)
    }


    // let img_1 = `${process.env.PUBLIC_URL}/images/1.png`;
    // let img_2 = `${process.env.PUBLIC_URL}/images/2.png`;
    // let img_3 = `${process.env.PUBLIC_URL}/images/3.png`;

    return(
        <> 
        <div className="main">
            {/* <div className='img-box'>
                <button><img src={img_1} onClick={ () => {click("red")}} alt="cake png not found" /></button>
                <button><img src={img_2} onClick={ () => {click("blue")}} alt="cake png not found" /></button>
                <button><img src={img_3} onClick={ () => {click("purple")}} alt="cake png not found" /></button>
            </div> */}
            <div className='img-box'>
                {cake_img.map((image) => (
                <button key={image.id} onClick={() => handleImageClick(image)}>
                    {/* <img src={image.src} onClick={ () => { changeColor(image.id)}} alt={image.alt} /> */}
                    <img src={image.src} alt={image.alt} />

                    {/* {image.alt} */}
                </button>
                ))}
            </div>
            <div className="content">
                <h1>Cake Kart</h1>
                <p>Love at first bite</p>
                <h3>Unleash your sweetest taste with our heavenly cup cakes!</h3>
                <button type="button">Get Started</button>
            </div>
            <div className="main-img">
                <img src={selectedImage.src} id='main-img' alt="Main cake png not found" />
            </div>
        </div>
        </>
    );
}

export default Home;