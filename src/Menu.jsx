import { useParams } from "react-router-dom";

export default function Menu() {
  const { category } = useParams();

  return <h1>Menu - {category}</h1>;
}
