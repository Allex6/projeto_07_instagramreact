/*jshint esversion:11 */

export default function StoryItem(props){
    
    return (
        <div className="story-item">
            <div className="story-cover flex">
                <img src={props.img} alt="" />
            </div>
            <p className="roboto12 primary-black-color">{props.text}</p>
        </div>
    );

};