function Footer() {
  return (
    <footer>
      <small>© 2023 last name here development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
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

function Page() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

// function MyApp() {
//   return (
//       <Page />
//   );
// }

const div = document.querySelector('#root');
const root = ReactDOM.createRoot(div);
root.render(<Page />);