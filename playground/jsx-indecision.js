console.log('App.js is working.');

var userObject = {
 name: 'Indecision App',
 age: '32',
 location: 'Make life easy',
 options: []
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>
    }    
}

const onSubmitForm = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        userObject.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp();
    }
}

const removeAll = () => {
    userObject.options.length = 0;
    renderFormApp();
};

const selectOption = () => {
    const randomNum = Math.floor(Math.random() * userObject.options.length);
    const option = userObject.options[randomNum];
    alert(option);    
}

const renderFormApp = () => {
    const template2 = (
        <div>
            <h1>{userObject.name ? userObject.name : 'Anonymous'}</h1>
            {(userObject.age && userObject.age >= 18) && <p>Age: {userObject.age}</p>}
            {getLocation(userObject.location)}
            <p key='1'>{userObject.options && userObject.options.length > 0 ? 'Here are your options' : ''}</p>
            <p>{userObject.options.length}</p>
            <button disabled = {userObject.options.length === 0} onClick={selectOption}>Select option</button>
            <button onClick={removeAll}> Remove All</button>
            <ol>{
                 userObject.options.map((strings) => {
                     return <li key= {strings}>{strings}</li>
                 })
                }
            </ol>
            <form  onSubmit={onSubmitForm}>
                <input type='text' name='option' /> 
                <button>Submit</button>
            </form>
        </div> 
       
    );

    ReactDOM.render(template2,appRoot);


};

const appRoot = document.getElementById('app');
renderFormApp();

