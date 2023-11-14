import burger from "../assets/images/burger.jpeg"
import hotel_image from "../assets/images/hotel-image.webp"
import food1 from "../assets/images/food1.webp"
import food2 from "../assets/images/food2.jpg"
import food3 from "../assets/images/food3.webp"
import logo from "../assets/logo.png"
import food from "../assets/food.png"
import {useState} from "react";
function Home() {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>

            <div className="relative w-full">
                <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
                    <div className="container m-auto px-2 md:px-12 lg:px-7">
                        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                                <a href="" aria-label="logo" className="flex space-x-2 items-center">
                                    <img src={logo} className="w-12" alt="kramer food logo" width="144" height="133" />
                                    <span className="text-2xl font-bold text-yellow-900">Kramer <span className="text-yellow-700">Food</span></span>
                                </a>

                                <button onClick={ () => { setIsNavOpen(!isNavOpen) }} aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
                                    {!isNavOpen &&
                                        <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                                    }
                                    {!isNavOpen &&
                                        <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                                    }
                                    {isNavOpen &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    }
                                </button>
                            </div>

                            <div className={ ` ${ isNavOpen ? "" : "hidden" } w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12`}>
                                <div className="text-gray-600 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                                                <span>Restaurants</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                                                <span>Food</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                                                <span>Cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                                    <button type="button" title="Create and account" className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                            <span className="block text-yellow-800 font-semibold text-sm">
                                Sign up
                            </span>
                                    </button>
                                    <button type="button" title="Get a deilvery" className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                            <span className="block text-yellow-900 font-semibold text-sm">
                                Login
                            </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="relative bg-yellow-50">
                    <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                        <div className="flex items-center flex-wrap px-2 md:px-0">
                            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Get your favorite food, fast and fresh.</h1>
                                <form action="" className="w-full mt-12">
                                    <div className="relative flex p-1 rounded-full bg-white border border-orange-200 shadow-md md:p-2">
                                        <select className="hidden p-3 rounded-full bg-transparent md:block md:p-4" name="domain" id="domain">
                                            <option value="design">FastFood</option>
                                            <option value="development">Restaurant</option>
                                        </select>
                                        <input placeholder="Your favorite food" className="w-full p-4 rounded-full border-none outline-none" type="text" />
                                        <button type="button" title="Find food you like" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-orange-200 to-orange-300 hover:to-red-300 active:from-orange-400 focus:from-red-400 md:px-12">
                                <span className="hidden text-orange-900 font-semibold md:block">
Search
                                </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 md:hidden" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-8 text-gray-700 lg:w-10/12">
                                    Hungry? We've got you covered.
                                    <a href="#" className="text-yellow-700"> Sign up </a>
                                    now and start enjoying the convenience of food delivery to your door step!
                                </p>
                            </div>
                            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                                <img src={food} className="relative" alt="food illustration" loading="lazy" width="4500" height="4500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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