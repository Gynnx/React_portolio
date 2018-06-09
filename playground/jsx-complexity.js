const list = [
    {
        title: 'React',
        url: 'https:facebook.github.io/react/',
        author: 'Cyngynn',
        num_comments: 3,
        points: 4,
        objectID: 0

    },
    {
        title: 'Redux',
        url: 'https://github.com/react.js/redux',
        author: 'Anne',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
];

class App extends React.Component{
    render(){
        return (
            <div>
                <p>{list.map((item)=>{
                    return (
                        <p>{item.title}</p>
                    )
                })}</p>
            </div>
        );
    };
}

--

ReactDOM.render(<App />,document.getElementById('app'));