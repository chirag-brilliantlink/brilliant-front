import GrandChild from "./GrandChild";

export default function FirstChild({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: "white",
        border: "0.1px dashed gray",
      }}
    >
      <p>First Child </p>
      {children}
    </div>
  );
}
