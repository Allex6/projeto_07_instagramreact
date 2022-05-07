/*jshint esversion:11 */

import React from "react";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function PostItem(props){

    const [liked, setLiked] = React.useState(false);

    function toggleLike(){
        setLiked(!liked);
    }

    return (
        <div className="post-item card-default">

            <PostHeader authorPic={props.authorPic} authorName={props.authorName} />
            <PostBody postMedia={props.postMedia} toggleLike={toggleLike} />
            <PostFooter likesQty={props.likesQty} importantLike={props.importantLike} liked={liked} toggleLike={toggleLike} />

        </div>
    );

}