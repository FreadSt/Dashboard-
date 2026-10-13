import { useState } from "react"

const listNames = ["Margo", "John", "Alice", "Dave"]

export const Test = () => {
    const [names, setNames] = useState(listNames)
    const [newName, setNewName] = useState('')

    const handleChangeInputName = (e) => {
        setNewName(e.target.value)
    }

    const handleAddName = () => {
        if (!newName.trim()) return 
        setNames(prev => [...prev, newName])
        setNewName('')
    }

    function returnEvenSum(arr) {
        return arr.reduce((sum, i) => i % 2 === 0 ? sum + i : sum, 0)
    }

    return (
        <div>
            <h1>Test</h1>
            {returnEvenSum([1, 2, 6, 9, 4])}
            <div>
                <p>List Names</p>
                <div className="flex justify-center my-3">
                    <input value={newName} onChange={handleChangeInputName} className="border"/>
                    <button className="border p-1.5 mt-2" onClick={handleAddName}>Add Name</button>
                </div>
                {names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </div>
        </div>
    )
}