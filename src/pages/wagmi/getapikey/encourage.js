import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/UserContext';

const Encourage = () => {
  const { userName } = useUser();
  const [message, setMessage] = useState('');

  const encouragements = [
    {
      sw: "Umefika mbali, {name}!",
      en: "Look at how far you've come, {name}!"
    },
    {
      sw: "Unafanya vizuri, {name}!",
      en: "You're doing amazing, {name}!"
    },
    {
      sw: "Huu ni mwanzo tu, {name}!",
      en: "You've come a long way, {name}!"
    },
    {
      sw: "Endelea hivi hivi, {name}!",
      en: "Keep it up, {name}, you're doing great!"
    },
    {
      sw: "Keep it 100, {name}!",
      en: "Stay true, {name}!"
    },
    {
      sw: "Anguka Nayo {name}!"
    },
    {
      sw: "Hapo Vipi! Hapo sawa {name}"
    }
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    const selectedMessage = encouragements[randomIndex];
    
    const swMessage = selectedMessage.sw.replace('{name}', userName);
    if (selectedMessage.en) {
      const enMessage = selectedMessage.en.replace('{name}', userName);
      setMessage(`${swMessage} - ${enMessage}`);
    } else {
      setMessage(swMessage);
    }
  }, [userName]);

  return (
    <div className="mb-8 px-4 py-3 bg-flame/10 rounded-lg border border-flame/20">
      <p className="text-flame text-lg font-medium text-center">
        {message}
      </p>
    </div>
  );
};

export default Encourage;