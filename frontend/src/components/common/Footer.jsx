import { Link } from "react-router-dom";
import { useState } from "react";
import {  FaLinkedin, FaInstagram, FaFacebook , } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md"; 
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
const Footer = () => {

  const Menu = ["Home" ,"Our services","Properties", "Contact us"]
  const [choses] = useState(Menu)
  const setSocialIconss =["facebook", "instagram","linkedin",]
  const [socialIcons]=useState(setSocialIconss)

  return (
  
  <section className="bg-[#EEEEEE]   pt-[40px] pb-[40px]  ">
    
    <div className=" px-[30px] mx-auto">
                        <div className="grid md:grid-cols-4 gap-[10px] grid-cols-1 sm:gap-[15px] sm:grid-cols-2   ">

              
                          <div  className=" flex-col items-start gap-[15px]   ">
                            <a href="/">
                              <img  src="/src/assets/logoo.svg" alt="logo-img" className=" w-[103.18px] h-[56.39px]  object-contain  "/> 
                              </a>
                              <p className=" font-medium text-black mt-[8px] ">Renting real estate <br/> platform.</p>
                          </div>


                            <ul className="flex flex-col gap-[15px] w-full md:w-auto  ">
                                <li className=" font-semibold mb-[22px]  ">Menu</li> 
                                {choses.map((chose) => {
                                  return(
                                  <li  key={chose}> <a href={`/${chose.toLowerCase()}`} className="mb hover:text-[#0051CB] transition-colors duration-200 text-base  ">{chose}</a></li>
                                  )})}
                              
                            </ul>
                            <div className="  flex-col  gap-[20px] w-full md:w-auto  ">
                              <p className="font-semibold mb-[29px]  ">Contact us</p>
                              <ul className=" flex flex-col   gap-[20px]   ">
                              <li className="flex gap-[7px] items-center py-2  hover:text-[#0051CB] transition-colors duration-200 text-base "><FiPhone/>05 54 76 76 11</li>
                              <li className=" flex items-center md:gap-0 gap-[7px] sm:w-full lg:gap-[7px] py-2  hover:text-[#0051CB] transition-colors duration-200 text-base  "><MdOutlineMailOutline/>axxam@gmail.com</li>
                              <li className=" flex items-center gap-[7px] py-2  hover:text-[#0051CB] transition-colors duration-200 text-base 
                              "><LuMapPin/>Amizour, N-76 Béjaia</li>
                              </ul>
                              
                              </div>

                         
                      
                            <div className="flex-col items-center gap-[15px]  ">
                                <p className="font-semibold mb-[10px]">Your Opinion About<br/> AXXAM !</p>
                              <div className="w-[220px] h-[193px] lg:w-[220px]  md:max-w-full  bg-[#F7F7F7] rounded-lg   shadow-lg shadow-[#6D6D6D] ">
                              <textarea
                                placeholder="Your message (optional)."
                                className="text-[#6D6D6D]    text-sm border-transparent  outline-none h-full w-full mb-4 px-2.5 py-2.5 bg-transparent  "
                              />
                            </div> 
                              <div className="order-first sm:order-last mt-2 ">
                                  <a href="/" className="btn lg:w-[220px] w-[220px]  h-[43px] md:max-w-full  bg-[#0051CB] text-white font-medium element-center  rounded-xl ">
                                  Send your message
                                      </a>
                              </div>
                             </div>
                             
                            </div> 
                        
               
      <div className=" flex items-center justify-center flex-wrap  align-items flex-col-1  gap-[30px]  mt-[30px] ">
        
         
        
        <ul className="flex gap-[5px] items-center justify-start sm:justify-center   ">
        <p className="font-semibold "> Follow us on </p>
            {socialIcons.map((item) => ( 
              <li key={item}>
                <Link to={item} className="group">
                  <div  className="w-[40px] h-[40px] element-center     rounded-[50%]">
                  {item === "facebook" ? (
                      <a
                      className="text-[#0051CB]  hover: transform  hover:scale-150 
                  transition-all duration-150 ease-in-out" href="">
                      <FaFacebook/>
                  </a>
                    ) : item === "linkedin" ? (
                      <a
                      className="text-[#0051CB]  hover: transform  hover:scale-150 
                  transition-all duration-150 ease-in-out" href="">
                      <FaLinkedin />
                  </a>
                    ) : (
                      <a
                      className="text-[#0051CB]  hover: transform  hover:scale-150 
                  transition-all duration-150 ease-in-out" href="">
                      <FaInstagram />
                  </a>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
         
          
        </div>
          
       
    
        </div>
  </section>);
 
  
}
export default Footer;


