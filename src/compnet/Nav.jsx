export default function Nav({ niveau, counter }) {
  return (
    <div className="nav-bar">
      <div>menu</div>
      <div> {niveau} / 8</div>
      <div>death : {counter}</div>
    </div>
  );
}
