'use client';

import { useState } from 'react';

export default function ContactFormClient() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Wysłano:', email);
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Twój e-mail"
        required
      />
      <button type="submit">Wyślij</button>
      {sent && <p>Dziękujemy za zgłoszenie!</p>}
    </form>
  );
}