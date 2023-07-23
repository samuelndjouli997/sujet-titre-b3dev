import EditContent from "@/app/components/edit/EditContent";


import Client from "../components/client/Client";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getUser from "@/app/actions/getUser";




export default async function Edit() {


  const currentUser = await getCurrentUser();

  return (
    <Client>
      <EditContent currentUser={currentUser} />
    </Client>
  );
}
