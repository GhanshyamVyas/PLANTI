export default function Snavbar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: "280px", height: "100vh", backgroundColor: "" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="*" className="nav-link text-white active">
              <svg className="bi me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="*" className="nav-link text-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="*" className="nav-link text-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Listings
            </a>
          </li>
          <li>
            <a href="*" className="nav-link text-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Add Products
            </a>
          </li>
          <li>
            <a href="*" className="nav-link text-dark">
              <svg className="bi me-2" width="16" height="16"></svg>
              Update Products
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="*"
            className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-light text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="*">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="*">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
