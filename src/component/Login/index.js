import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const dataLoginDefault = {
  user: "admin",
  password: "admin",
};

export default function Login() {
  const router = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    user: "",
    password: "",
  });
  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = () => {
    if (
      dataLogin.user === dataLoginDefault.user &&
      dataLogin.password === dataLoginDefault.password
    ) {
      localStorage.setItem("login", JSON.stringify(true));
      router("/floor-seven");
    }
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
                    className="form-control form-control-lg"
                    onChange={(e) =>
                      setDataLogin({ ...dataLogin, user: e.target.value })
                    }
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
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
