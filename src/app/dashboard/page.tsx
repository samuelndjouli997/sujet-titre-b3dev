import Client from "@/app/components/client/Client";

import getUser from "@/app/actions/getUser";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Sidebar from "@/app/components/home/Sidebar";
import useMedia from "@/app/hooks/useMedia";
import { useState } from "react";
import Dashboard from "@/app/components/home/Dashboard";
import HomeContent from "@/app/components/home/HomeContent";
import Content from "../components/dashboard/Content";


export default async function Settings() {
  
  const currentUser = await getCurrentUser();

  return (
    <Client>
        <Content currentUser={currentUser} />
    </Client>
  );
}