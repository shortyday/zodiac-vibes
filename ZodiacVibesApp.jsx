
import { useState } from 'react';

const vibes = [
  "Chill", "Anxious", "Bold", "Romantic", "Chaotic", "Focused", "Tired", "Adventurous", "Sentimental", "Rebellious", "Goofy", "Melancholic", "Energetic", "Curious", "Zen"
];

const fortunes = {
  Chill: "Your energy today is smooth like jazz. Don't rush it.",
  Anxious: "Breathe. The stars say it's okay to not have it together.",
  Bold: "Kick down doors. Today, you're unstoppable.",
  Romantic: "Love is orbiting your aura. Text that person.",
  Chaotic: "You're the plot twist today. Use it wisely.",
  Focused: "Laser mode: on. You were made for productivity.",
  Tired: "Nap if you can. Cosmic permission granted.",
  Adventurous: "A random choice will lead to magic.",
  Sentimental: "Old memories are surfacing. Let them teach you.",
  Rebellious: "Break one rule — but make it fashion.",
  Goofy: "Laughter is your power. Use it recklessly.",
  Melancholic: "Feeling deep? Write something beautiful.",
  Energetic: "Your fire is contagious today. Light someone else up.",
  Curious: "Ask questions. Then more. You're the explorer.",
  Zen: "You are the eye of the storm. Stay centered."
};

function getZodiacSign(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  return "Capricorn";
}

export default function ZodiacVibesApp() {
  const [birthDate, setBirthDate] = useState("");
  const [location, setLocation] = useState("");
  const [vibe, setVibe] = useState("");
  const [fortune, setFortune] = useState("");
  const [zodiac, setZodiac] = useState("");

  const handleSubmit = () => {
    if (!birthDate || !vibe) {
      setFortune("Please enter your birthdate and choose a vibe.");
      return;
    }
    const sign = getZodiacSign(birthDate);
    setZodiac(sign);
    const base = fortunes[vibe] || "The universe is quiet today.";
    setFortune(`${sign} says: ${base}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h1>🔮 Zodiac Vibes</h1>
      <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
      <input placeholder="Your location (optional)" value={location} onChange={(e) => setLocation(e.target.value)} />
      <select onChange={(e) => setVibe(e.target.value)} defaultValue="">
        <option value="" disabled>Choose your vibe</option>
        {vibes.map(v => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Ask the Zodiac</button>
      {fortune && <div style={{ marginTop: '1em', fontStyle: 'italic' }}>{fortune}</div>}
    </div>
  );
}
