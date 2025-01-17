import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div>
            <hr />
            <section className="mx-20">
                <div className="flex justify-between items-center my-10">
                    <div>
                        <img src="/Logo.png" alt="logo" className="w-64" />
                    </div>
                    <div className="w-2/4 text-gray-400 text-center">
                        <FontAwesomeIcon icon={faLocationDot} fade size="2xl" className="p-8" style={{ color: '#be9f5c' }} />
                        <p className="">Corner Store, Main Street, Downtown Beirut, Lebanon. PO Box 12345
                        </p>
                    </div>
                    <div className="w-1/4 text-right">
                        <h6 className="font-semibold text-white">Follow Us</h6>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Footer;