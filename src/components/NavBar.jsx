import { motion } from 'framer-motion';

const background = "bg-backgroundColorSecondary bg-opacity-0";
const navigation = [
    { name: 'PRICING', href: '#Price' },
    { name: 'ABOUT US', href: '#About' },
    { name: 'CAREERS', href: '#Career' },
];

function NavBar(props) {
    return (
        <div className=''>
            {/* NavBar Background */}
            <div className={`absolute inset-x-0 top-0 z-50 ${background}`}>
                {/* Desktop NavBar */}
                <div className="flex py-8 mx-auto max-w-screen-xl">
                    {/* Second Element Desktop navigation links */}
                    <div className="flex text-xs text-white md:text-textColorSecondary font-DMS font-thin tracking-widest" style={{ letterSpacing: '0.2em' }}>
                        {navigation.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.5+ index * 0.2 }}
                                className={`relative after:absolute after:h-1 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer px-4 md:px-8 xl:px-12 hover:text-white`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
