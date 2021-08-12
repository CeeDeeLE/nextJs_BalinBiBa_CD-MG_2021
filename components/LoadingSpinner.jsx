// https://loading.io/css/

function LoadingSpinner({ message = '' }) {
  return (
    <div className="loading-spinner">
      {message && (
        <strong className="loading-spinner__message">{message}</strong>
      )}
      <div className="loading-spinner__animation lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
