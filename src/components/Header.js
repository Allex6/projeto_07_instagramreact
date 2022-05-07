/*jshint esversion:11 */

export default function Header(){

    return (
        <div className="header">
            <div className="header-content max-content-width flex header-desktop">
                <div className="brand flex">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="brand-separator"></div>
                    <img src="./img/logo.png" className="brand-img" alt="Logomarca do Instagram" />
                </div>
                <div className="search-bar flex">
                    <input className="roboto12" type="text" placeholder="Pesquisar" />
                </div>
                <div className="menu flex">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            
            <div className="header-mobile">
                <div className="header-content flex">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./img/logo.png" className="brand-img" alt="Logomarca do Instagram" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );

};