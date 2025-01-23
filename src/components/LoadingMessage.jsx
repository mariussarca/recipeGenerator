export default function LoadingMessage({ isLoading, children }) {
  return (
    <div>
      {isLoading ? (
        <div className="loading-message">Chef Claude is thinking...</div>
      ) : (
        children
      )}
    </div>
  );
}
