import "./navbar.css";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";
export default function Sorders() {
  return (
    <>
      <Ssidebar />
      <div id="content">
        <div class="container">
          <Sheader />
          <div className="container">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Plant Name</th>
                  <th scope="col">Plant Price</th>
                  <th scope="col">Accept/Reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Rose</td>
                  <td>$120</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Thorn</td>
                  <td>$30</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Agarwood</td>
                  <td>$90</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Rose</td>
                  <td>$120</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Thorn</td>
                  <td>$30</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Agarwood</td>
                  <td>$90</td>
                  <td>
                    <button className="btn btn-success">Accept</button>{" "}
                    <button className="btn btn-secondary">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
