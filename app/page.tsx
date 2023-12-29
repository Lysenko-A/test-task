import { redirect } from "next/navigation";
import { ROUTERS } from "@/constants/routers";

export default function Main() {

  redirect(ROUTERS.login)
}
