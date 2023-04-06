// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

function MyApp() {
    return (
        <nav>
            <h1>website</h1>
            <ul>
                <li>pricing</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
        );
};
    
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);