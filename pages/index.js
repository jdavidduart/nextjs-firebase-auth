import { useNavbar } from "../hooks";

export default function Home() {
  const { logout } = useNavbar();
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Home</h1>
    </div>
  );
}
