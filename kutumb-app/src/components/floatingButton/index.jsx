const FloatingButton = ({ onClick }) => (
    <button
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        borderRadius: "50%",
        padding: "1em",
      }}
      onClick={onClick}
    >
      +
    </button>
  );
  export default FloatingButton;
  