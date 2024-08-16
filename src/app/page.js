import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Button variant="contained" >
        <a href="http://localhost:3000/form">CLICK</a>
      </Button>
    </div>
  );
}
