import CaseCard from '../components/CaseCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { cases } from '../data/cases';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <section className="case-list" aria-labelledby="cases-title">
          <div className="container">
            <div className="section-header">
              <h2 id="cases-title">Кейсы</h2>
              <p>Подборка проектов, где я отвечал за дизайн и опыт пользователей.</p>
            </div>
            <div className="cases-grid">
              {cases.map((item) => (
                <CaseCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
