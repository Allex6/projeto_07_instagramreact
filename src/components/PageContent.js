/*jshint esversion:11 */

import getPosts from '../data/getPosts';
import getStories from '../data/getStories';
import getSuggestions from './../data/getSuggestions';
import Footer from './Footer';
import LoggedUser from './LoggedUser';
import PostItem from './PostItem';
import StoryItem from './StoryItem';
import SuggestionItem from './SuggestionItem';

export default function PageContent(){

    const stories = getStories();
    const posts = getPosts();
    const suggestions = getSuggestions();
    const loggedUser = {
        username: "alex_s.16",
        displayName: "Alex Souza",
        img: "./img/my-account.jpg"
    };

    return (
        <div className="max-content-width page-content flex">

            <div className="left-column flex">

                <div className="stories-box flex card-default">

                    { stories.map(story => <StoryItem img={story.img} text={story.text} /> ) }

                    <ion-icon name="chevron-forward-circle" className="story-arrow-right"></ion-icon>
        
                </div>

                <div className="posts-box">

                    { posts.map(post => <PostItem authorPic={post.authorPic} authorName={post.authorName} postMedia={post.postMedia} importantLike={post.importantLike} likesQty={post.likesQty} />) }

                </div>

            </div>

            <div className="sidebar">

                <LoggedUser img={loggedUser.img} username={loggedUser.username} displayName={loggedUser.displayName} />

                <div className="suggestions">

                    <div className="flex suggestions-header">
                        <h6 className="roboto12 secondary-black-color">Sugestões para você</h6>
                        <h6 className="roboto12 primary-black-color"><strong>Ver tudo</strong></h6>
                    </div>

                    { suggestions.map(suggestion => <SuggestionItem img={suggestion.img} username={suggestion.username} label={suggestion.label} />) }

                </div>

                <Footer />

            </div>

        </div>
    );

};