import Counter from './Counter';
import GreetingForm from './GreetingForm';

export default function Dashboard() {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem' }}>
      <h2>Panel</h2>
      <Counter />
      <GreetingForm />
    </section>
  );
}
