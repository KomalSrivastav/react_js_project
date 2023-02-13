export function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Time table</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-light">
            <li class="nav-item">
              <a class="nav-link text-light" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/login">Login</a>
            </li>
            <li class="nav-item">
              
              <a class="nav-link text-light" href="/register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/contact-us">Contact Us</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
)
}