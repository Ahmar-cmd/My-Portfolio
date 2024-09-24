import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import About from '@/components/About';


export default function Home() {
  return (
   <main className='flex flex-col items-center sm:pt-28 pt-12'>
    <Intro/>
    <SectionDivider/>
    <About/>
    <SectionDivider/>
    <Skills/>
    <SectionDivider/>
    <Projects/>
    <SectionDivider/>
    <Contact/>
   </main>
  );
}
