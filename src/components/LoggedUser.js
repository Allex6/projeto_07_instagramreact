/*jshint esversion:11 */

export default function LoggedUser(props){
    
    return (
        <div className="logged-account flex">

            <img src={props.img} alt="" />
            <div>
                <h3 className="roboto14 primary-black-color"><strong>{props.username}</strong></h3>
                <h5 className="roboto14 secondary-black-color">{props.displayName}</h5>
            </div>

        </div>
    );

};