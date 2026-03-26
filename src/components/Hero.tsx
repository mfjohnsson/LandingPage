export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 text-center'>
      {/* En subtil glow-effekt i bakgrunden */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-accent-p/20 blur-[120px] rounded-full -z-10' />

      <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6'>
        Bygger{' '}
        <span className='bg-linear-to-r from-accent-p to-accent-s bg-clip-text text-transparent'>
          framtidens
        </span>{' '}
        webb
      </h1>

      <p className='max-w-2xl text-lg md:text-xl text-muted mb-10 leading-relaxed'>
        Fullstack-utvecklare med passion för design, AI, ljud och spel. Just nu
        fokuserad på Next.js, .NET, AI-verktyg och Spelutveckling.
      </p>

      <div className='flex gap-4'>
        <button className='px-8 py-3 rounded-full bg-accent-p text-white font-semibold hover:scale-105 transition-transform'>
          Se projekt
        </button>
        <button className='px-8 py-3 rounded-full border border-card-border bg-card-bg hover:bg-card-border transition-colors'>
          Säg hej!
        </button>
      </div>
    </div>
  );
}
