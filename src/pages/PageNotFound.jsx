import image2 from '../assets/image/page-not-found.png'

export function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div className="pnf-button-container">
        <button>
          <a href="/">Return to Home</a>
        </button>
      </div>

      <div className="pnf-img-container">
        <img
          className="page-not-found"
          src={image2}
          alt="page-not-found-img"
        />
      </div>
    </div>
  );
}
