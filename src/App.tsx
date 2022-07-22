import styles from './App.module.scss';
import { Footer, Hero, Join, Plans, Programs, Reasons, Testimonials, Up } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
      <Up />
    </div>
  );
}

export default App;
