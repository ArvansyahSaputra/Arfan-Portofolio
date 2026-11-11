import { useState } from "react";
import spriteSheet from "/assets/profile/coin_spritesheet.png";
import "../css/Coin.css";

const FRAMES = 16; // jumlah frame di sprite sheet
const RATIO = 380 / 396; // tinggi / lebar satu frame

/**
 * Koin retro: ngambang terus, berputar 360° saat diklik.
 *
 * Props:
 *  - size      lebar koin dalam px (default 128)
 *  - floating  nyalakan animasi ngambang (default true)
 *  - onSpin    dipanggil setiap koin mulai berputar
 */
export default function Coin({ size = 128, floating = true, onSpin }) {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
    onSpin?.();
  };

  const handleAnimationEnd = (e) => {
    if (e.animationName === "coin-frames") setSpinning(false);
  };

  return (
    <div
      className="coin-stage"
      style={{
        "--coin-w": `${size}px`,
        "--coin-h": `${Math.round(size * RATIO)}px`,
        "--frames": FRAMES,
      }}
    >
      <div className={`coin-float ${floating ? "is-floating" : ""}`}>
        <button
          type="button"
          className={`coin ${spinning ? "is-spinning" : ""}`}
          style={{ backgroundImage: `url(${spriteSheet})` }}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
          aria-label="Putar koin"
        />
      </div>
      <div className={`coin-shadow ${floating ? "is-floating" : ""}`} />
    </div>
  );
}
