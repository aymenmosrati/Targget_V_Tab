import {useEffect, useState} from "react";

const App = () => {
    const [state, setState] = useState({items: []})
    const handleChange = (elem, id) => {
        console.log(id)
        let name = elem.target.name
        let value = elem.target.value
        setState(({items}) => ({
            items: [
                ...items.slice(0, id + 1),
                {
                    eva:'',
                    obs:'',
                    note:'',
                    id: id + 1,
                    ...items[id + 1],
                    [name]: value,
                },
                ...items.slice(id + 2)
            ]
        }))
    }
    const handleSubmit = () => {
        let ArrayToSend = state.items.slice(1)
        alert(JSON.stringify(ArrayToSend))
    }
    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <div className="App">
            <table>
                <tbody>
                {Array.from(Array(5).keys()).map((elem, index) => {
                    return <tr key={index}>
                        <td><input name={'eva'} onChange={(elem) => handleChange(elem, index)}/></td>
                        <td><input name={'obs'} onChange={(elem) => handleChange(elem, index)}/></td>
                        <td><input name={'note'} onChange={(elem) => handleChange(elem, index)}/></td>
                    </tr>
                })}
                </tbody>
            </table>
            <button onClick={handleSubmit}>Click me</button>
        </div>
    );
}

export default App;

