function Contact() {
    return (
        <footer className="bg-secondary">
            <p className="display-3 text-center text-white p-4">CONTACT</p>

            <p className="h4 text-white  lh-lg abt1">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>

            <form className="form1">
                <div className="mb-4">

                    <input type="text" class="form-control" id="name" placeholder="Name" />
                </div>

                <div className="mb-4">

                    <input type="number" class="form-control" id="seats" placeholder="number of seats" />
                </div>

                <div className="mb-4">

                    <input type="datetime-local" class="form-control w-5" id="date" placeholder="date" />
                </div>

                <div className="mb-4">

                    <input type="text" class="form-control" id="msg" placeholder="Message" />
                </div>
                <div className="mb-4">

                    <button type="submit" >Submit</button>

                </div>
            </form>
        </footer>

    )
}
export default Contact