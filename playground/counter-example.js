class Counter extends React.Component {
    constructor(props){
        super(props);
            this.handleAddOne = this.handleAddOne.bind(this);
            this.handleMinusOne = this.handleMinusOne.bind(this);
            this.handleRemoveAll = this.handleRemoveAll.bind(this);
            this.state = {
                count: 0
            };
    }
    handleAddOne(){
         this.setState((prevState)=>{
             return {
                count: prevState.count + 1
             };
         });
    }
    handleMinusOne(){
         this.setState((prevState)=>{
            return {
                count: prevState.count -1   
            };
         });
    }
    handleRemoveAll(){
         this.setState(()=>{
             return{
                 count: 0
             }
         });
    }

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);

        if(!isNaN(count)){
            this.setState(()=> ({count}));
        };
    };

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        };       
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleRemoveAll}>Reset</button>
            </div>
        );
    };
};
 
ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();    
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
    
// }

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
    
//     );

//     ReactDOM.render(templateTwo,appRoot);

// };

// let appRoot = document.getElementById('app');

// renderCounterApp();


// //Rendering
// /*
// //JSX - Javascript XML
// var appObject = {
//     title : 'Avengers: Inifinity war',
//     subtitle: 'Ilocano',
//     options: []
// };
// // var template =( 
// //     <div>
// //          <h1> Movie Title: {appObject.title}</h1> 
// //         <p>Subtitle: {appObject.subtitle}</p>
// //     </div>
// // );

// var template = (
//     <div>
//         {(appObject.title) && <h1>{appObject.title}</h1>}
//         {(appObject.subtitle) && <p>subtitle: {appObject.subtitle}</p>}
//         {(appObject.options && appObject.options.length > 0 )? <p>Here are your options: {appObject.options +  '\n'}</p> : 'No options available'}
//     </div>
// );
// */