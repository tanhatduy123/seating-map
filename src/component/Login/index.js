import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const dataLoginDefault = {
  user: "admin1",
  password: "admin",
};

const dataAdmin = {
  user: "admin",
  password: "T@mnguyen94",
};

export default function Login() {
  const router = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    user: "",
    password: "",
  });
  const [errorValidate, setErrorValidate] = useState({});
  const [isLogin, setIslogin] = useState(false);
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = () => {
    validate(dataLogin);
    setIslogin(true);
  };
  useEffect(() => {
    if (Object.keys(errorValidate).length > 0) {
      setIslogin(false);
    }
    if (Object.keys(errorValidate).length === 0 && isLogin) {
      if (
        dataLogin.user === dataLoginDefault.user &&
        dataLogin.password === dataLoginDefault.password
      ) {
        localStorage.setItem("login", JSON.stringify(true));
        router("/receptionist");
      } else if (
        dataLogin.user === dataAdmin.user &&
        dataLogin.password === dataAdmin.password
      ) {
        localStorage.setItem("login", JSON.stringify(true));
        sessionStorage.setItem("admin", JSON.stringify(true));
        router("/receptionist");
      }
    }
  }, [errorValidate, dataLogin, router, isLogin]);
  const validate = (data) => {
    const error = {};
    if (
      !data.user ||
      (data.user !== dataLoginDefault.user && data.user !== dataAdmin.user)
    ) {
      error.user = true;
    }
    if (
      !data.password ||
      (data.password !== dataLoginDefault.password &&
        data.password !== dataAdmin.password)
    ) {
      error.password = true;
    }
    setErrorValidate(error);
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Đăng Nhập</h3>

                <div className="form-outline mb-4">
                  <label className="form-label">Tên đăng nhập</label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${
                      errorValidate.user && "is-invalid"
                    }`}
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, user: e.target.value })
                    }
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className={`form-control form-control-lg ${
                      errorValidate.password && "is-invalid"
                    }`}
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, password: e.target.value })
                    }
                  />
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label ms-2">Nhớ mật khẩu</label>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
