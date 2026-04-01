import { useEffect, useState } from "react";
import { getGifts } from "../services/api";

function Gifts() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    getGifts().then(setGifts);
  }, []);

  return (
    <div>
      <h2>Gift List</h2>
      {gifts.map((g) => (
        <div key={g.id}>
          {g.name} - {g.price}
        </div>
      ))}
    </div>
  );
}

export default Gifts;