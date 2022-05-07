/*jshint esversion:11 */

export default function PostHeader(props){
    
    return (
        <div className="post-header flex">

            <div className="flex">
                <img src={props.authorPic} alt="" />
                <h4 className="roboto14">{props.authorName}</h4>
            </div>

            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>

        </div>
    );

}