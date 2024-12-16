import { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
// import { signupUser } from "../../../../server/controller/user-controller";
import { API } from "../../service/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 3px 2px 3px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  width: "200px",
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
  borderRadius: "8px", // Rounded corners for a professional look
  transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth transitions for scaling and opacity
  "&:hover": {
    transform: "scale(1.05)", // Slight zoom effect
    opacity: "0.9", // Slight fade effect on hover
  },
});
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #002d62;
  color: #fff;
  height: 48px;
  border-radius: 8px;
  transition: transform 0.3s ease, border-radius 0.3s ease;
  &:hover {
    transform: scale(1.05);
    border-radius: 16px;
    background: #004080;
  }
`;
const SignUpButton = styled(Button)`
  text-transform: none;
  background: #eff9fd;
  border-radius: 8px;
  transition: transform 0.3s ease, border-radius 0.3s ease;
  &:hover {
    transform: scale(1.03);
    border-radius: 10px;
    background: #ddf1f9;
  }
`;
const Text = styled(Typography)`
  color: #878787;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageURL =
    "/vecteezy_content-creator-png-graphic-clipart-design_20047227.png";

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);

  const toggleSignUp = () => {
    account === "signUp" ? toggleAccount("login") : toggleAccount("signUp");
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center", padding: "20px 0 0" }}>OR</Text>
            <SignUpButton onClick={() => toggleSignUp()}>
              Create an account
            </SignUpButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label=" Full name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label=" Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label=" Password"
            />
            <LoginButton onClick={() => signupUser()} variant="contained">
              SIGN UP
            </LoginButton>
            <Text style={{ textAlign: "center", padding: "20px 0 0" }}>OR</Text>
            <SignUpButton onClick={() => toggleSignUp()}>
              Already have an existing account?
            </SignUpButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};
export default Login;
