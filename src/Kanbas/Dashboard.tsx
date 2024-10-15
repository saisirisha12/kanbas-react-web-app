import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Fall 2024 Sec 01
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px",marginTop: "30px", marginBottom: "30px" }}> 
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/java.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 Java
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Spring 2024 Sec 02
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/python.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1236 Python
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Fall 2024 Sec 03
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/mysql.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1237 MySQL
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Spring 2024 Sec 01
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/php.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1238 PHP
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Fall 2024 Sec 02
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/csharp.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1239 C#
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Fall 2023 Sec 01
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/dataanalytics.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1240 Data Analytics
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Spring 2023 Sec 02
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px", marginTop: "30px", marginBottom: "30px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/algorithms.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1241 Algorithms
                 </h5>
              <p className="wd-dashboard-course-title card-text">
                Spring 2024 Sec 01
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div></div>
  );
}
