function Menu() {





    return (
        <main className="bg-dark p-5">

            <div className="display-3 text-center text-white p-5">THE MENU</div>
            <div className="container1 border border-1 ">
                <div className=" border border-1 heading d-flex justify-content-between">
                    <div className="text-white  d-inline-block display-6 menus p-3" >PIZZA</div>
                    <div className="text-white  d-inline-block display-6 menus p-3">SALADS</div>
                    <div className="text-white  d-inline-block display-6 menus p-3">STARTER</div>
                </div>
                <div className=" bg-white content p-5">
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
                    <p className="mt-3 h3">Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil

                    </p>
                    <hr></hr>

                    <div className="d-flex justify-content-between">
                        <p className="h2 d-inline-block text-danger">Meat Town  <span className="border border-1 h4  bg-danger text-white p-2 rounded">HOT !</span></p>
                        <span className="border border-1 h2 border-dark bg-dark text-white p-2 rounded">$20.00</span></div>
                    <p className="mt-3 h3">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken

                    </p>
                    <hr></hr>

                </div>
            </div>
        </main>
    )
}
export default Menu