/*jshint esversion:11 */

import ReactDOM from 'react-dom';
import Header from './components/Header';
import PageContent from './components/PageContent';
import MobileNav from './components/MobileNav';

function App(){

    return (
        <div>
            <Header />
            <PageContent />
            <MobileNav />
        </div>
    );

}

ReactDOM.render(App(), document.querySelector('.root'));