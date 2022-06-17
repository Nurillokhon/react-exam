import React ,{useState, useEffect}from 'react';
import axios from "axios";
import 'swiffy-slider'
// import puublic from './public'
import "swiffy-slider/css"


const Crousel = () => {
    const [data, setdata] = useState("");
    const [data1, setdata1] = useState("");
    const [data2, setdata2] = useState("");
    useEffect(() => {
        axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then(res =>{
         setdata(res.data);
         console.log(res.data);
         
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/dohr")
        .then(ress =>{
            // console.log(ress.data);
            setdata1(ress.data)
        })
     }, []);

     useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
        .then(rees =>{
            // console.log(rees.data);
            setdata2(rees.data)
        })
     }, []);
    return (
        <div className='container'>
            <div className="swiffy-slider slider-item-show5 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white  py-2 py-lg-3" data-slider-nav-autoplay-interval="2000">
            <div className="slider-container">
                {
                    (data.length>0) && data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img_src}  loading="lazy" alt="" />
                            </div>
                        )
                    })
                }
            </div>

            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

            </div>



            <div className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9" id="slider1">
                <ul className="slider-container">
                    {
                        (data1.length>0) && data1.map((box ,index)=>{
                            return(
                                <li key={index}>
                                    <img src={box.img_src} loading="lazy" alt="" />
                                </li>
                            )
                        })
                    }
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>
            </div>
            
            <div className='row'>
                {
                    (data2.length > 0) && data2.map((box1 , index) =>{
                        return(
                            <div className='col-4 my-2 ' key={index}>
                                <div className='myCard'>
                                    <img src={box1.img_src} alt="" />
                                    <p>{box1.name}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>        

            
        </div>
    );
}

export default Crousel;
