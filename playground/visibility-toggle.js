
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }

    }
    handleVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
        
        
        
    }
    render(){
        return (
            <div>
               <h1>Visbility Toggle</h1>
               <h3>Visbility Value: {this.state.visibility ? 'False' : 'True'} </h3>
               <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'HideDetails' : 'ShowDetails'}</button>
               {
                 this.state.visibility && (
                     <p>
                        Hello there! Wow never thought the learning React is Great!!!
                        Behold the power of react.
                     </p>
                 )  
               }
            </div>
        );
    };
};

// console.log('Visibility Toggle is working!');

// let visible = false;

// const setDetails = () => {
//     visible = !visible;

//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={setDetails}>{visible ? 'Hide details' : 'Show details'}</button>
//             {visible && (
//                 <div>
//                     <p>Hey! Magtanim ay di biro, maghapong naka yuko... ow ow ow</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template,appRoot);
// };

// const appRoot = document.getElementById('app');

// renderApp();

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
