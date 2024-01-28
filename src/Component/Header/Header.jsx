import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
    return (
        <section>
            <section>
                <div>
                    {/* logo */}
                    <a href="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></a>
                    {/* delivery */}
                    <span>
                    <SlLocationPin />
                    </span>
                </div>
                <div>
                    <p>Delivered to</p>
                    <span>Canada</span>
                </div>
                <div>
                    {/* search */}
                    <div>
                        <select name="" id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" name='' id='' placeholder='search product'/>
                        <BsSearch />
                    </div>
                </div>
                <div>
                    {/* right side link */}
                </div>
                <div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Canada_flag_icon.png/800px-Canada_flag_icon.png?20200402074802" alt="" />
                        <section name="" id="">
                            <option value="">EN</option>
                        </section>
                    </div>
                    {/* three components */}
                    <div>
                        <a href="">
                            <div>
                                <p>Sign In</p>
                                <span>Account & Lists</span>
                            </div>
                        </a>
                        {/* orders */}
                        <a href="">
                            <p>Returns & Orders</p>
                        </a>
                         {/* cart */}
                        <a href="/cart">
                        <BiCart />
                        <span>0</span>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Header