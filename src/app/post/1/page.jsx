"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;
//usePathname basically gives the part of the website URL I am on
//pathname displays the part of the URL after the domain name.
//example for pathname is '/post/1'
}