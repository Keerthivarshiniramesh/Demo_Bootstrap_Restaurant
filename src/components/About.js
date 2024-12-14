import chef from '../images/chef.png'
import page from '../images/onepage.jpg'
import map from '../images/map.jpg'


function About() {
    return (
        <main className=" mains bg-dark">
            <p className="display-3 text-center text-white p-4">About</p>
            <p className="h4 text-white  lh-lg abt1 ">
                The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                <br></br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='d-flex justify-content-around align-content-center m-5'>
                <p className='p-5 h4'>
                    <span style={{ fontWeight: "bold" }}>The Chef?</span> Mr. Italiano himselfChef<br></br><br></br>

                    We are proud of our interiors.


                </p>
                <img src={chef} alt="chef" style={{ width: "200px", height: "200px", marginTop: "0px" }}></img>
            </div>
            <img src={page} style={{ marginLeft: "200px", height: "700px" }}></img>


            <div className='pt-5 m-5 abt1'>
                <p className='display-3'>Opening Hours</p>
                <div className='d-flex justify-content-around pt-5 mt-5'>
                    <p className=' h4 lh-lg'>
                        Mon & Tue CLOSED<br></br>

                        Wednesday 10.00 - 24.00 <br></br>

                        Thursday 10:00 - 24:00</p>

                    <p className='h4  lh-lg'> Friday 10:00 - 12:00<br></br>

                        Saturday 10:00 - 23:00<br></br>

                        Sunday Closed
                    </p>
                </div>
            </div>
            <img src={map} className='map_1' ></img>
        </main>
    )
}
export default About