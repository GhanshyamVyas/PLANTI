export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 text-success" href="#">
            <i class="bi bi-tree-fill me-2"></i>PlantI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-success">
              <li className="nav-item">
                <a className="nav-link active text-success fw-bold" href="*">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success fw-bold" href="*">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success fw-bold" href="*">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success fw-bold" href="*">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success fw-bold" href="*">
                  Login
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
