import React from 'react';

const PackageManagementList = ({ data }) => {
  return (
    <div class="dashboard-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-auto me-auto">
            <h2>Package Management</h2>
          </div>
          <div class="col-auto">
            <a href="#!" class="btn btn-primary btn-sm">Add new</a>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-9 text-end">
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-funnel"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Option
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Option
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Option
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Option
                      </label>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-search"></i></span>
              <input type="text" class="form-control" placeholder="search" />
            </div>
          </div>
          <div class="col-12">
            <div class="table-responsive mt-3">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Package name</th>
                    <th>Itinerary</th>
                    <th>Price</th>
                    <th>Group size</th>
                    <th>Documents required</th>
                    <th>Accommodation</th>
                    <th>Transportation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#!" class="coloured-link">Package</a></td>
                    <td>Itinerary details</td>
                    <td>$1000.00</td>
                    <td>3+</td>
                    <td>Shariah-compliant</td>
                    <td>2 days 3 nights</td>
                    <td>Included</td>
                    <td>
                      <a href="#!" class="me-2"><i class="bi bi-pencil-square"></i></a>
                      <a href="#!"><i class="bi bi-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#!" class="coloured-link">Package 1</a></td>
                    <td>Itinerary details</td>
                    <td>$1500.00</td>
                    <td>5+</td>
                    <td>Visa</td>
                    <td>2 days 3 nights</td>
                    <td>Included</td>
                    <td>
                      <a href="#!" class="me-2"><i class="bi bi-pencil-square"></i></a>
                      <a href="#!"><i class="bi bi-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#!" class="coloured-link">Package 2</a></td>
                    <td>Itinerary details</td>
                    <td>$1000.00</td>
                    <td>Solo</td>
                    <td>Visa</td>
                    <td>2 days 3 nights</td>
                    <td>Included</td>
                    <td>
                      <a href="#!" class="me-2"><i class="bi bi-pencil-square"></i></a>
                      <a href="#!"><i class="bi bi-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="#!" class="coloured-link">Package 3</a></td>
                    <td>Itinerary details</td>
                    <td>$2000.00</td>
                    <td>2+</td>
                    <td>Visa</td>
                    <td>2 days 3 nights</td>
                    <td>Included</td>
                    <td>
                      <a href="#!" class="me-2"><i class="bi bi-pencil-square"></i></a>
                      <a href="#!"><i class="bi bi-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-6">
            <p>Showing 1-4 of 4</p>
          </div>
          <div class="col-6">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageManagementList;