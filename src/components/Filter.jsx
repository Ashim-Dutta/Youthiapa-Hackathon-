import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Filter = ({ label = "Filter by", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full px-4 py-2 text-left border rounded-lg bg-white text-gray-800 border-gray-300 hover:shadow transition-all flex items-center justify-between"
      >
        <span>{selected || label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg border-gray-200 max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 italic">No options</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Filter;
