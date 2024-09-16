export default function Bac({ children }) {
  return (
    <div className="container">
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
