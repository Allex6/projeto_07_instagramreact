/*jshint esversion:11 */

export default function PostBody(props){
    
    return (
        <div className="post-body">
            <img src={props.postMedia} alt="" onClick={props.toggleLike} />
        </div>
    );

}