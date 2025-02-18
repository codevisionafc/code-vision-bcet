import React from 'react';

function Modal({ open, setOpen, data }) {
  return (
    open && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={e => {
          // Close the modal if the click event originated from this div
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
      >
        <div className="bg-slate-500 rounded-lg p-8 sm:w-3/4 md:w-1/2 mx-2">
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          <p>{data.description}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-1 rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
