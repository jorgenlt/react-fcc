// const page = (
//   <div>
//   <img src="./react-logo.png" width="40px" />
//   <h1>Fun facts about React</h1>
//   <ul>
//     <li>Was first released in 2013</li>
//     <li>Was originally created by Jordan Walke</li>
//     <li>Has well over 100 stars on GitHub</li>
//     <li>Is maintained by Facebook</li>
//     <li>Power thousands of enterprise apps, including mobile apps</li>
//   </ul>
// </div>
// )

// function Page() {
//   return (
//     <div>
//     <img src="./react-logo.png" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100 stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Power thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
//   );
// };

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Page />);


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function Page() {
  return (
    <div>
      <h1>Descriptive headline</h1>
      <ol>
        <li>reason 1</li>
        <li>reason 2</li>
      </ol>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="60px" />
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>© 2023 last name here development. All rights reserved.</footer>
  )
}

function MyApp() {
  return (
    <div>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

const div = document.querySelector('#root');
const root = ReactDOM.createRoot(div);
root.render(<MyApp />);