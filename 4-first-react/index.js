function MyApp() {
    return (
        <ul>
        <li>item 1</li>
        <li>item 2</li>
        </ul>
        );
    };
    
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<MyApp />);