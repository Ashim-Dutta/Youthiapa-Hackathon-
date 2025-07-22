import { X } from 'lucide-react';

const Search = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white backdrop-blur-lg z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
  isOpen ? 'translate-x-0' : 'translate-x-full'
}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Search our site</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        <div className="p-6 flex relative">
                 
          <input
            type="text"
            placeholder="Im looking for..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <i className="ri-search-line text-xl cursor-pointer absolute right-12 top-8"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
