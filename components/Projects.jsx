import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ceroImg from '../public/assets/projects/cero.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import streamImg from '../public/assets/projects/stream.jpg'
import voteImg from '../public/assets/projects/vote.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Cerø'
            backgroundImg={ceroImg}
            projectUrl='/cero'
            tech='Graph Protocol'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='SuperStream'
            backgroundImg={streamImg}
            projectUrl='/superstream'
            tech='SuperFluid'

          />
          <ProjectItem
            title='Vote-D'
            backgroundImg={voteImg}
            projectUrl='/vote'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
