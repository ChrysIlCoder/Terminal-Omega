import { useState, useEffect } from 'react';
import { STYLES, ScpLiner } from "./utils/utils.jsx"
import '../app.css'

export default function RandomScpComponent() {
  const [scp, setScp] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (999 - 2 + 1)) + 2;
    const scpNumberString = `SCP-${String(randomNumber).padStart(3, '0')}`;

    fetch('https://scp-data.tedivm.com/data/scp/items/content_series-1.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        return response.json();
      })
      .then(data => {
        const scpData = data[scpNumberString];
        setScp(scpData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {scp ? (
        <>
          <span>{scp.scp}</span>
          <ScpLiner />
          <a href={scp.url} target='_blank'>{scp.url}</a>
        </>
      ) : (
        <p style={STYLES.colors.purple}>Caricamento in corso...</p>
      )}
    </div>
  );
}