export default function Parent(props: { children: React.ReactNode }) {
  return (
    <div>
      <h3>Parent is here</h3>
      <div style={{ display: "flex" }}>{props.children}</div>
    </div>
  );
}
