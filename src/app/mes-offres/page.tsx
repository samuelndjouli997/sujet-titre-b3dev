import getCurrentUser from "../actions/getCurrentUser";
import { getPostsByUser } from "../actions/getPostsByUser";
import Client from "../components/client/Client";
import MyOffersContent from "../components/myOffers/MyOffersContent";


export default async function MyOffers() {

    const currentUser = await getCurrentUser();
    const userPosts = await getPostsByUser(currentUser?.id);

    return (
        <Client>
            <MyOffersContent
                currentUser={currentUser}
                posts={userPosts}
            />
        </Client>
    )

    
}