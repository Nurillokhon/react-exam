import React,{useState,useEffect} from 'react';
import Crousel from './Crousel';
import axios from "axios";

const Sotuv = () => {
    const [data, setdata] = useState("");
    const [data1, setdata1] = useState("");
    const [data2, setdata2] = useState("");
    const [select, setSelect] = useState("Barchasi");
    const [alldata, setalldata] = useState([]);
    useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/in1t")
        .then(res =>{
            setdata(res.data)
            setalldata(data)
            
        })
    }, []);

    useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/5kdd")
        .then(res =>{
            setdata1(res.data)
            console.log(res.data);
            setalldata(data1)
        })
    }, [ ]);

    useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/7htd")
        .then(res =>{
            setdata2(res.data)
            console.log(res.data);
            setalldata(data2)
        })
    }, [ ]);
       
    function one(){
        let search 
        if(select == "Barchasi"){
            search = data
            search = data1
            search = data2
        }else{
            search =  data.filter(box =>{
                return select.toLocaleLowerCase() === box.category.toLocaleLowerCase()
            })
            search =  data1.filter(box =>{
                return select.toLocaleLowerCase() === box.category.toLocaleLowerCase()
            })
            search =  data2.filter(box =>{
                return select.toLocaleLowerCase() === box.category.toLocaleLowerCase()
            })
        }
    }
    one()
    
    return (
        <div className='container'>
            <div className='my-3 d-flex justify-content-around' >
                <select className='form-control w-25' onInput={e =>setSelect(e.target.value)}>
                    <option value="Aксессуары" key="">Barchasi</option>
                    <option value="Aксессуары" key="">Aксессуары</option>
                    <option value="Одежды" key="">Одежды</option>
                    <option value="Krasovka" key="">Krasovka</option>
                </select>
                <div className='d-flex justify-content-around'>
                    <input type="text" className='form-control' placeholder='start'/>
                    <input type="text" className='form-control' placeholder='end'/>
                </div>

            </div>
            <input type="search" className='form-control' placeholder='qidir' />

            <Crousel/>

            <div className='row my-2'>
                {
                    (data.length>0) && data.map((item ,index) =>{
                        return(
                            <div className='col-3' key={index}>
                                <div className='card p-2'>
                                    <img src={item.img_src} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <p>$ {item.cost}</p>
                                    <button className='btn btn-primary'>buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='row my-2'>
                {
                    (data1.length>0) && data1.map((item1 ,index) =>{
                        return(
                            <div className='col-3' key={index}>
                                <div className='card p-2'>
                                    <img src={item1.img_src} alt={item1.name} />
                                    <h4>{item1.name}</h4>
                                    <p>$ {item1.cost}</p>
                                    <button className='btn btn-primary'>buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='row my-2'>
                {
                    (data2.length>0) && data2.map((box ,index) =>{
                        return(
                            <div className='col-3' key={index}>
                                <div className='card p-2'>
                                    <img src={box.img_src} alt={box.name} />
                                    <h4>{box.name}</h4>
                                    <p>$ {box.cost}</p>
                                    <button className='btn btn-primary'>buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Sotuv;
