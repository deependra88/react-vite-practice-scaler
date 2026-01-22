import React, { useState } from 'react';


function Form() {

    const [name, setName] = useState({ firstName: '', lastName: '' });

    // function handleChange(e) {
    //     setText(e.target.value)
    //     console.log(e)
    // }
    function handleSubmit(e){
        e.preventDefault;
        console.log(name);
    }

    return (
        <div>
            <h1>{name.firstName}- {name.lastName}</h1>
            <form>
                <label>FirstName</label>
                <input onChange={(e) => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} />
                <label>LastName</label>
                <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" value={name.lastName} />
                <button onClick={(e) => handleSubmit(e)}> submit</button>
            </form>
        </div>
    )

}

export default Form;