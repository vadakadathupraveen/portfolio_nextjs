import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto p-4 flex-grow">
        <section>
          <h2 className="text-2xl font-bold">Praveen Prakash Vadakadathu</h2>
          <p>DevOps Engineer | Scarborough, Ontario, Canada</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mt-4">Professional Summary</h3>
          <p>DevOps Engineer with 2 years of experience in software development, cloud migration, and automation...</p>
        </section>

        {/* Experience Section */}
        <br></br>
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Fetch Contact Section */}
        <Contact />
        
      </main>

      <Footer />
    </div>
  );
}
