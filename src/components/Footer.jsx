import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black px-10 lg:px-20 pt-20 pb-8 mt-20 ">
        <div className=' text-white grid grid-cols-1 lg:grid-cols-6 gap-16'>
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3">CS — Ticket System</h3>
                <p className="text-[#A1A1AA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
                <h3 className="text-xl font-medium mb-3">Company</h3>
                <ul className='text-[#A1A1AA] space-y-3'>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact saled</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-xl font-medium mb-3">Services</h3>
                <ul className='text-[#A1A1AA] space-y-3'>
                    <li>Products & Services</li>
                    <li>Customer Stories</li>
                    <li>Download Apps</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-xl font-medium mb-3">Information</h3>
                <ul className='text-[#A1A1AA] space-y-3'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
            <div className=" ">
                <h3 className="text-xl font-medium mb-3">Social Links</h3>
                <ul className='text-[#A1A1AA] space-y-3'>
                    <li className='flex gap-2'><Facebook />@CS — Ticket System</li>
                    <li className='flex gap-2'><Twitter />@CS — Ticket System</li>
                    <li className='flex gap-2'><Linkedin />@CS — Ticket System</li>
                    <li className='flex gap-2'><Mail />support@cst.com</li>
                </ul>
            </div>

            
        </div>
        <div className="text-white text-center mt-20">© 2025 CS — Ticket System. All rights reserved.</div>
        </div>
    );
};

export default Footer;