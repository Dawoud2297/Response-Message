const positions = [
    {
        position: 'top-left',
        id: 'tl'
    },
    {
        position: 'top-center',
        id: 'tc'
    },
    {
        position: 'top-right',
        id: 'tr'
    },
    {
        position: 'bottom-left',
        id: 'bl'
    },
    {
        position: 'bottom-center',
        id: 'bc'
    },
    {
        position: 'bottom-right',
        id: 'br'
    },
]
const Positions = () => {
    return (
        <div className="positionsContainer">
            {
                positions.map((position) => (
                    <label key={position.id}>
                        <input type="radio" name="po" />
                        <span>{position.position}</span>
                    </label>
                ))
            }
        </div>
    )
}
export default Positions