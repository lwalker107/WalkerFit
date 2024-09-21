import { Hero,
Achievements,
Challenges, 
Community, 
Download,
FitnessInfluencers,
TrackingStats,
Personalization,
Footer } from './sections'
import Nav from './components/Nav';

const App = () => (
    <main className='relative'> 
      <Nav />
      <section className='xl:padding-1 wide:padding-r 
      padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <Personalization />
      </section>
      <section className='padding'>
        <TrackingStats />
      </section>
      <section className='padding'>
        <Community />
      </section>
      <section className='padding'>
        <FitnessInfluencers />
      </section>
      <section className='padding'>
        <Challenges />
      </section>
      <section className='padding'>
        <Achievements />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Download />
      </section>
      <section className='bg-black 
      padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
    
)

export default App;