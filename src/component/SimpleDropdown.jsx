import { useEffect, useRef, useState } from "react";
import "./dropdown.css";

const options = [
  "Commande #1",
  "Commande #2",
  "Commande #3",
  "Commande #4",
  "Commande #5",
  "Commande #5",
  "Commande #5",
  "Commande #5",
  "Commande #5",
  "Commande #5",
  "Commande #5",
];

export default function SimpleDropdown() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      <button
        className="dropdown-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        Vos commandes
      </button>

      <ul className={`value-list ${open ? "open" : ""}`}>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}