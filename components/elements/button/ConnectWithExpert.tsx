"use client";

export default function ConnectWithExpert() {
  const onClick = () => {
    window.open("https://calendar.app.google/VriTd83Lz2NwsvRB9", "_blank");
  };
  return (
    <button
      onClick={onClick}
      className="px-9 py-4 mb-5 text-xl font-semibold text-white rounded-2xl cursor-pointer bg-[color:var(--primary-blue)] border-[none] hover:opacity-90 transition-opacity"
    >
      Connect 1-1 with our Experts*
    </button>
  );
}
