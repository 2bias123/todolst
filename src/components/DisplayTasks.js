export default function DisplayTasks({TaskData}){

    return(
        <div>
            {
            TaskData.map((value) => (
                <div className="TodoBox">
                    <h2>{value.Title}</h2>
                    <p>{value.Discription}</p>
                </div>
            ))
            }
        </div>
    )
}