const App = () => (
    <main className='relative'> 
      nav
      <section className='xl:padding-1 wide:padding-r 
      padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <WorkoutLibrary />
      </section>
      <section className='padding'>
        <CustomWorkouts />
      </section>
      <section className='padding'>
        <Community />
      </section>
      <section className='padding'>
        <FitnessInfluencers />
      </section>
      <section className='padding'>
        Tracking stats
      </section>
      <section className='padding'>
        Challenges
      </section>
      <section className='padding'>
        Achievements
      </section>
      <section className='bg-pale-blue padding'>
        Testimonies
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        Call to Action
      </section>
      <section className='bg-black 
      padding-x padding-t pb-8'>
        Footer
      </section>
    </main>
    
)

export default App;