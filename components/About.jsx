import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 '>Who Am I</h2>
          <p className='py-2 text-gray-600 mb-[50px]'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning and implementing new technologies like Blockchain.
            Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>

          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Interests
          </p>
          <h2 className='py-4'>What I love to do</h2>
          <p className='py-2 text-gray-600 mb-[50px]'>
            My interests include developing applications that can change the world. I love to work in the 
            Web3 space and BUIDL decentralized apps. I work with dApps and Smart Contracts based on Blockchain 
            Technology, as well as understanding the architecture and protocols of the technology. I love to study about 
            the different SDKs, protocols and their whitepapers.
          </p>

          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
