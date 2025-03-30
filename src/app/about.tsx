import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h2>Professional Summary</h2>
          <p>DevOps Engineer with 2 years of experience in software development, cloud migration, and automation...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
