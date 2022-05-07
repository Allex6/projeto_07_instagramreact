/*jshint esversion:11 */

export default function PostFooter(props){
    
    const heartType = (props.liked) ? <ion-icon onClick={props.toggleLike} name="heart" className="liked"></ion-icon> : <ion-icon onClick={props.toggleLike} name="heart-outline"></ion-icon>;
    
    return (
        <div className="post-footer">

            <div className="post-actions flex">
                <div>
                    {heartType}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div className="post-likes flex">
                <img src="./img/stories/6.png" alt="" />
                <p className="roboto14">Curtido por <strong>{props.importantLike}</strong> e <strong>outras {props.likesQty} pessoas</strong></p>
            </div>

        </div>
    );

}