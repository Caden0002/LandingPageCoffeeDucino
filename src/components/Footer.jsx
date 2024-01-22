import React from 'react';
import { FaLinkedin, FaGithub, FaUserTie, FaBlog} from 'react-icons/fa';


const background = "bg-backgroundColorPrimary";

const FooterPrivacyText = 'Designed & Built by Caden Chen';
const FooterDisclaimer = 'This webpage is intended for personal and educational purposes and does not support or endorse commercial usage of any copyrighted material.'
const FooterIcons = [
    <a href="https://www.linkedin.com/in/caden-chen-576189205/" key="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>,
    <a href="https://github.com/Caden0002" key="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>,
];

function Footer(props) {
    return (
        <div className={background}>
            {/*container for the section*/}
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-4 px-10 text-textColorPrimary">
                <div className="lg:w-8/12 w-full">

                    {/* Footer icons */}
                    <div className="flex text-xs justify-center mb-4 space-x-5">
                        {FooterIcons.map((Icon, index) => (
                            <div key={index}>
                                {Icon}
                            </div>
                        ))}
                    </div>


                    <p className="block text-xs text-center ">
                        {FooterPrivacyText}
                    </p>





                </div>

            </div>
        </div>
    );
}

export default Footer;
