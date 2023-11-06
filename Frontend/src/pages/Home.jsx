import logo from "../assets/images/logo.png"
import burger from "../assets/images/burger.jpeg"
import hotel_image from "../assets/images/hotel-image.webp"
import food1 from "../assets/images/food1.webp"
import food2 from "../assets/images/food2.jpg"
import food3 from "../assets/images/food3.webp"
function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                I have tailwind classes
            </h1>
            {/*page 1 div*/}
            <div className="page1">
                {/*header*/}
                <div className="header">
                    <img src={logo} className="my-logo"  alt=""/>

                    {/*header links*/}
                    <div className="nav-links">
                        <a href="" className="text-blue-500">Trending</a>
                        <a href="">Save on Bundles</a>
                        <a href="">Gift cards</a>
                        <a href="">Delivery</a>
                    </div>

                    {/*end of header*/}
                </div>

                {/*main content*/}
                <div className="main-content">
                    <h1>
                        The Taste That <br />Make you feel <br />
                        awesome <span><img src={burger} className="burger" alt="" /></span>
                    </h1>
                    <p>
                        During the pandemic, six unlikely friends living in <br />
                        different cities india meet online every week
                    </p>
                    <button>View Our Menu</button><br />

                    <img src={hotel_image} className="main-image" alt="" />
                </div>

                {/*middle content*/}
                <div className="middle-content">
                    <label>Address:</label><br />
                    <p>Lake House,Hanway <br />KCA</p>
                    <br /><br />

                    <label>Contact:</label><br />
                    <p>020-7718364<br />Kaphiya@info.com</p>
                    <br /><br />

                    <label>Opening:</label><br />
                    <p>Monday to Friday <br />6.45am-3.00pm</p>
                </div>
            </div>
            {/*end of page 1*/}

            {/*page2*/}
            <div className="page2">
                <div className="content1">
                    <img src={food1} className="food1" alt="" /><br />
                    <p>
                        Raw Scallops from Erqury <br />
                        Candied Jerusalem artichokes <br />$32.08
                    </p>
                </div>

                <div className="content2">
                    <img src={food2} className="food2" alt=""/><br />
                    <p>
                        Tender Octopus & Fennel <br />Candied Jerusalem artichokes <br />
                        $17.95
                    </p>
                </div>

                <div className="content3">
                    <img src={food3} className="food3"  alt=""/><br />
                    <p>
                        Celeriac & Truffle Ravioli <br />Candied Jerusalem artichokes <br />
                        kes 3000/=
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home