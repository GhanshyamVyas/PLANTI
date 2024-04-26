export default function Ssidear() {
  return (
    <>
      <div class="sidebar">
        <div class="brandname">
          <i class="fa fa-leaf" aria-hidden="true"></i> Planti
        </div>
        <ul class="nav flex-column mx-auto">
          <li class="nav-item">
            <a href="/Sdashboard" class="nav-link">
              <i class="fa fa-dashboard px-3 fs-4" aria-hidden="true"></i>
              Dashboard
            </a>
          </li>
          {/* <li class="nav-item">
            <a href="/product" class="nav-link">
              <i class="fa fa-dashboard px-3 fs-4" aria-hidden="true"></i>
              Product
            </a>
          </li>
          <li class="nav-item">
            <a href="/cartpage" class="nav-link">
              <i class="fa fa-dashboard px-3 fs-4" aria-hidden="true"></i>
              Cart
            </a>
          </li> */}
          <li class="nav-item">
            <a href="/Sorders" class="nav-link">
              <i class="fa fa-first-order px-3 fs-4" aria-hidden="true"></i>
              My Orders
            </a>
          </li>
          <li class="nav-item">
            <a href="/Slistings" class="nav-link">
              <i class="fa fa-compass px-3 fs-4" aria-hidden="true"></i>
              Listings
            </a>
          </li>
          <li class="nav-item">
            <a href="/Saddplant" class="nav-link">
              <i class="fa fa-plus-circle px-3 fs-4" aria-hidden="true"></i>
              Add Plants
            </a>
          </li>
          <li class="nav-item">
            <a href="/Supdateplant" class="nav-link">
              <i class="fa fa-upload px-3 fs-4" aria-hidden="true"></i>
              Update Plants
            </a>
          </li>
          <li class="nav-item">
            <a href="/Sprofile" class="nav-link">
              <i class="fa fa-photo px-3 fs-4" aria-hidden="true"></i>
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link">
              <i class="bi bi-box-arrow-right px-3 fs-4"></i>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
