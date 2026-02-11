import "@/globals.css";

export default function Button({ color, children }) {
  return (
    <button
      onClick={console.log("Hola, mundo")}
      className={`bg-${color}-600 text-center p-2.5 border-0 rounded-3xl`}
    >
      {" "}
      {children}
    </button>
  );
}
