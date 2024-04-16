function ScopeSelector({selectedScope, setSelectedScope}) {
    function handleScopeSelection(e) {
        setSelectedScope(e.target.value)
    }

    return <form>
        <h3>Where would you like to see signatures from?</h3>
        <label>
            <input type="radio" value="world" name="scope" checked={selectedScope === "world"} onChange={handleScopeSelection}></input>World
        </label>
        <label>
            <input type="radio" value="uk-regions" name="scope" checked={selectedScope === "uk-regions"} onChange={handleScopeSelection}></input>UK (regions)
        </label>
        <label>
            <input type="radio" value="uk-constituencies" name="scope" checked={selectedScope === "uk-constituencies"} onChange={handleScopeSelection}></input>UK (constituencies)
        </label>
    </form>
}

export default ScopeSelector