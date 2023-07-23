
import getCurrentUser from "../actions/getCurrentUser";
import getPost from "../actions/getPost";
import PublishedOffersContent from "../components/PublishedOffers/PublishedOffersContent";
import Client from "../components/client/Client";


export default async function PublishedOffers() {

    const currentUser = await getCurrentUser();
    const posts = await getPost();
    
        
    return (
        <Client>
            <PublishedOffersContent
                currentUser={currentUser}
                posts={posts}
            />
        </Client>
    )
}