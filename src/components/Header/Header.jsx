
import LwsLogo from '../../assets/lws-logo.svg'
const Header = () => {
    return (
        <nav className="py-6 md:py-8  top-0 w-full !bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img className="h-[45px]" src={LwsLogo} alt="Logo"/>
                </a>
            </div>
        </nav>
    );
};

export default Header;
