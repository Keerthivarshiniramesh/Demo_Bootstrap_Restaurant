import { useState } from "react"

function Menu() {

    let [menubutton, setMenubutton] = useState("PIZZA")
    function menus(menu) {
        setMenubutton(menu)
    }

    return (
        <main className="bg-dark p-5">

            <div className="display-3 text-center text-white p-5">THE MENU</div>
            <div className="container1 border border-1 ">
                <div className=" border border-1 heading d-flex justify-content-between">
                    <div className={`text-white  d-inline-block display-6  p-3 ${menubutton === "PIZZA" ? "bg-danger" : ""}`} onClick={() => menus("PIZZA")} >PIZZA</div>
                    <div className={`text-white  d-inline-block display-6  p-3 ${menubutton === "SALADS" ? "bg-danger" : ""}`} onClick={() => menus("SALADS")}>SALADS</div>
                    <div className={`text-white  d-inline-block display-6  p-3 ${menubutton === "STARTER" ? "bg-danger" : ""}`} onClick={() => menus("STARTER")}>STARTER</div>
                </div>

                {menubutton === "PIZZA" &&

                    <div className=" bg-white p-5 " >
                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Margherita</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$12.50</span></div>
                        <p className="mt-3 h3">Fresh tomatoes, fresh mozzarella, fresh basil</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Formaggio</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$15.50</span></div>
                        <p className="mt-3 h3">Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Chicken</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$17.00</span></div>
                        <p className="mt-3 h3">Fresh tomatoes, mozzarella, chicken, onions</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Pineapple'o'clock</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$16.50</span></div>
                        <p className="mt-3 h3">Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Meat Town  <span className="border border-1 h4  bg-danger text-white p-2 rounded">HOT !</span></p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$20.00</span></div>
                        <p className="mt-3 h3">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
                        <hr></hr>
                    </div>
                }

                {
                    menubutton === "SALADS" &&
                    <div className=" bg-white p-5 ">
                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Lasagna </p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$13.50</span></div>
                        <p className="mt-3 h3">Special sauce, mozzarella, parmesan, ground beef</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Ravioli</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$14.50</span></div>
                        <p className="mt-3 h3">Ravioli filled with cheese</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Spaghetti Classica</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$11.00</span></div>
                        <p className="mt-3 h3">Fresh tomatoes, onions, ground beef</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Seafood pasta</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$25.50</span></div>
                        <p className="mt-3 h3">Salmon, shrimp, lobster, garlic</p>
                        <hr></hr>

                    </div>
                }

                {
                    menubutton === "STARTER" &&
                    <div className=" bg-white p-5 ">
                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Today's Soup Seasonal</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$5.50</span></div>
                        <p className="mt-3 h3">Ask the waiter</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Bruschetta</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$8.50</span></div>
                        <p className="mt-3 h3">Bread with pesto, tomatoes, onion, garlic</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Garlic bread</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$9.50</span></div>
                        <p className="mt-3 h3">Grilled ciabatta, garlic butter, onions</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p className="h2 d-inline-block text-danger">Tomozzarella</p>
                            <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$10.50</span></div>
                        <p className="mt-3 h3">Tomatoes and mozzarella</p>
                        <hr></hr>

                    </div>
                }
            </div>

        </main>
    )
}
export default Menu