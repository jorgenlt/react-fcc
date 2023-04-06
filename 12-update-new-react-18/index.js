// import 'React' from 'react' (deprecrated)
// import ReactDOM from 'react-dom/client'

// function MyApp() {
//     return (
//         <nav>
//             <h1>website</h1>
//             <ul>
//                 <li>pricing</li>
//                 <li>about</li>
//                 <li>contact</li>
//             </ul>
//         </nav>
//         );
// };
    
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<MyApp />);




const navBar = (
        <nav>
            <h1>website</h1>
            <ul>
                <li>pricing</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
);

    
const rootDiv = document.getElementById('root');

const root = ReactDOM.createRoot(rootDiv);
root.render(navBar);