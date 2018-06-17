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
            <h3>A good rule of thumb is that elements inside the map() call need keys.</h3>
                {list.map((item)=>{
                    return (
                        <div key = {item.objectID}>
                        <a href = {item.url}>{item.title} </a>
                        <p>Number of comments: {item.num_comments}</p>
                        <p>Author: {item.author}</p>
                        <p>Points: {item.points}</p>
                        </div>
                    )
              })}
            </div>
        );
    };
}

--

ReactDOM.render(<App />,document.getElementById('app'));