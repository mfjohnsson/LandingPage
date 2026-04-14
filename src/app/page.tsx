import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import FadeInSection from '@/components/FadeInSection';
import BentoGrid from '@/components/BentoGrid';
import ContactGrid from '@/components/ContactGrid';

const projects = [
  {
    title: 'SoundStage',
    description:
      'En interaktiv visuell plattform för musik och boards. Byggd främst för att skapa ett smidigt workflow för ett album jag håller på med. Jag kan lyssna på varje demo/mix osv, och lätt se i vilken process varje låt är i.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'dnd-kit',
      'PostgreSQL via Supabase',
      'Prisma',
      'Vercel',
    ],
    link: 'https://sound-stage-f2xk.vercel.app/?boardId=cmmdz0ibd0000uuvsuquk8sa8',
    github: 'https://github.com/mfjohnsson/SoundStage',
    image: '/soundstage-screenshot.png',
  },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full bg-background'>
      {/* Section 1 Home */}
      <FadeInSection>
        <section
          id='home'
          className='min-h-[calc(100vh-64px)] w-full flex items-center justify-center border-b border-card-border/50'
        >
          <Hero />
        </section>
      </FadeInSection>

      {/* Section 2 Projects */}
      <FadeInSection>
        <section
          id='projects'
          className='min-h-screen w-full max-w-6xl px-6 py-32'
        >
          <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'>
            <div>
              <h2 className='text-3xl font-bold mb-2 italic uppercase tracking-tighter'>
                Utvalda Projekt
              </h2>
              <div className='h-px flex-1 border hidden md:block mb-2' />
              <p className='text-muted'>Några saker jag byggt.</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Section 3 About */}
      <FadeInSection>
        <section
          id='about'
          className='min-h-screen w-full max-w-6xl px-6 py-32 border-t border-card-border/50'
        >
          <h2 className='text-3xl font-bold mb-10 italic uppercase tracking-tighter text-center'>
            Om Mig
          </h2>
          <BentoGrid />
        </section>
      </FadeInSection>

      {/* Section 4 Contact */}
      <FadeInSection>
        <section
          id='contact'
          className='min-h-screen flex flex-col items-center gap-6 justify-center px-6'
        >
          <ContactGrid />
        </section>
      </FadeInSection>
    </div>
  );
}
