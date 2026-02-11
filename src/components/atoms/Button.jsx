import "@/globals.css";

export default function Button({ color, children }) {
  return (
    <button
      onClick={console.log("Hola, mundo")}
      className={`self-center w-auto bg-${color}-600 hover:bg-blue-600 text-center p-2.5 border-0 cursor-pointer rounded-2xl shadow`}
    >
      {" "}
      {children}
    </button>
  );
}
