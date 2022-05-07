/*jshint esversion:11 */

export default function SuggestionItem(props){
    
    return (
        <div className="suggestion-item flex">

            <div className="flex">
                <img src={props.img} alt="" />
                <div>
                    <h3 className="roboto14 primary-black-color"><strong>{props.username}</strong></h3>
                    <h5 className="roboto12 secondary-black-color">{props.label}</h5>
                </div>
            </div>

            <a href="#" className="roboto12">Seguir</a>

        </div>
    );

}