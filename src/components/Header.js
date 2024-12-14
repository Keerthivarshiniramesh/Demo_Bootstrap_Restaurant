import { useState } from 'react'
import Style from '../css/newcss.module.css'

function Header(props) {
    let [click, setClick] = useState(false)

    // console.log('student info declared in parent: ',props.student)
    // onClick={()=>props.funcName(4, 5)}
    // let shop = document.getElementById("shop")
    // if(shop){
    //     shop.addEventListener("click", () => {
    //         let fruit = props.fruits
    //         fruit.array.forEach(element => {
    //             console.log(element)

    //         }); 
    //     })
    // }

    return (
        <header className="" style={{ height: "700px" }
        }>
            <nav className="d-flex justify-around nav_bar d-lg-flex ">
                <a href="#home" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Home</a>
                <a href="#menu" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Menu</a>
                <div className='position-relative'>
                    <a href="#" className="p-4 text-decoration-none text-white d-sm-none d-lg-block " onClick={() => setClick(!click)}>About</a>
                    {
                        click &&
                        <div className='d-block position-absolute p-4 bg-primary'>
                            <a href="#home" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Home</a>
                            <a href="#menu" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Menu</a>
                            <a href="#contact" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Contact</a>
                        </div>
                    }
                </div>
                <a href="#contact" className="p-4 text-decoration-none text-white d-sm-none d-lg-block">Contact</a>
            </nav>

            <div className="d-flex justify-content-center align-items-center thin" >
                <p className="text-white text-center" id="shop" >Thin<br></br>
                    CRUST PIZZA</p>
            </div>
            <div className='d-flex justify-content-around align-content-center'>
                <div className=" text-center text-white border border-0  p-2  box">
                    <a href="#menu" className='text-decoration-none text-white'>Let me see Menu</a>
                </div>

                <div className=" text-center text-white border border-0 p-2 h5 box1 ">
                    Open from 10am to 12pm
                </div>
            </div>
        </header >
    )
}
export default Header