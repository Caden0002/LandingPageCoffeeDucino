// Import necessary dependencies
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Component definition
function Hero() {
    // Background and content data
    const background = "bg-backgroundColorPrimary";
    const backgroundImage = "/coffeebackground.png";
    const logo = "/logo.png";
    const header = 'EVERYONE DESERVES';
    const header2 = 'Ducino coffee.';
    const content = "Ducino makes more than a first-of-its-kind,\nzero-emissions, commercial roaster. We maake it\npossible for you to source, create, roast, and share \ncoffee in a responsible way that connects our \ncommunity and brings equality to our industry.";
    const button = 'MENU';
    const button2 = 'RESERVE A TABLE';

    // Social media icons
    const Facebook = <FaFacebook />;
    const Twitter = <FaTwitter />;
    const Instagram =  <FaInstagram />;

    // Common styles
    const logoStyles = "absolute w-20 h-20 top-0 left-1/2 transform -translate-x-1/2 mt-4";
    const buttonStyles = "text-sm font-DMS font-semibold text-textColorSecondary border-2 border-backgroundColorSecondary py-2 transition-all duration-300 ease-in-out";

    //delay timing
    const delay1 = 1.1;
    const delay2 = 1.3;
    const delay3 = 1.5;


    // JSX structure
    return (
        <div className={`relative min-h-screen ${background}`}>
            {/* Background Image */}
            <motion.div
                className="absolute top-0 right-0 bottom-0 w-full md:w-1/2"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            ></motion.div>


            {/* Content */}
            <div className="container max-w-screen-xl mx-auto my-auto flex flex-col justify-center relative z-10 md:h-screen">
                {/* Logo */}
                <img src={logo} alt="Logo" className={logoStyles} />

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center h-screen mb-8 md:mb-0">

                    <motion.div
                        className="text-xl text-textColorSecondary font-DMS font-extralight tracking-widest mt-36 text-center"
                        style={{ letterSpacing: '1rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: delay1 }}
                    >
                        {header}
                    </motion.div>

                    <motion.div
                        className="text-9xl text-textColorPrimary font-AME ml-12 md:ml-0 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: delay1+0.1 }}
                    >
                        {header2}
                    </motion.div>

                    <motion.div
                        className="text-sm text-textColorSecondary font-DMS whitespace-pre-line font-normal tracking-wider leading-6 mt-4 xl:mt-8 md:mr-48"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: delay1+0.2 }}
                    >
                        {content}
                    </motion.div>


                    {/* Action Buttons */}
                    <motion.button
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
                        className={`${buttonStyles} mt-16 xl:mt-24 w-1/2 md:w-1/4 hover:bg-backgroundColorSecondary hover:text-white`}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.3, delay: delay2 }}
                    >
                        {button}
                    </motion.button>

                    <motion.button
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
                        className={`${buttonStyles} mt-4 w-1/2 md:w-1/4 hover:bg-backgroundColorSecondary hover:text-white`}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: delay2+0.1 }}
                    >
                        {button2}
                    </motion.button>

                </div>

                {/* Social Media Buttons (Visible on Larger Screens) */}
                <div className="hidden md:block ml-12 mb-8 mt-4 space-x-4">
                    <motion.button
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                        className={`${buttonStyles} text-base font-DMS font-semibold text-textColorSecondary border-2 border-backgroundColorSecondary p-2 hover:text-white`}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: delay3 }}
                    >
                        {Facebook}
                    </motion.button>

                    {/* Twitter */}
                    <motion.button
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                        className={`${buttonStyles} text-base font-DMS font-semibold text-textColorSecondary border-2 border-backgroundColorSecondary p-2 ml-2 hover:text-white`}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: delay3 + 0.2}}
                    >
                        {Twitter}
                    </motion.button>

                    {/* Instagram */}
                    <motion.button
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                        className={`${buttonStyles} text-base font-DMS font-semibold text-textColorSecondary border-2 border-backgroundColorSecondary p-2 ml-2 hover:text-white`}
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: delay3 + 0.4 }}
                    >
                        {Instagram}
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
