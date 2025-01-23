import chefImage from "../assets/chef-claude-icon.png"
import Main from "./Main.jsx"

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={chefImage} alt="chefClaude"></img>
        <h1>Chef Claude</h1>
      </header>
      <Main />
    </>
  );
}

