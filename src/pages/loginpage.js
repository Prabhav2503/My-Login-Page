import logo from "../assets/IITD_Logob.png";
import Galaxy from "../styles/background.js";

function LoginPage(params) {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: "black"}}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      <div className="LoginPage">
        <div className="mainPanel">
          <h2 id="heading">{params.heading}</h2>
          <p id="title">{params.title}</p>
        </div>
        <input
          id="username"
          className="inputs"
          type="text"
          placeholder="Enter Username"
        />
        <input
          id="password"
          className="inputs"
          type="password"
          placeholder="Password"
        />
        <div className="passwordoptions">
          <label htmlFor="showpassword">
            <input type="checkbox" id="showpassword" /> Show Password
          </label>
          <a href="" id="forgetpassword">
            Forget Password?
          </a>
        </div>
        <button type="submit" id="signin">
          Sign In
        </button>
        <div className="divider">OR</div>
        <button className="googlebtn">
          <img id="googlelogo" src="/assets/google.png" alt="Google Logo" />
          <span id="googletext">Sign in with Google</span>
        </button>
      </div>
    </>
  );
}

export default LoginPage;
