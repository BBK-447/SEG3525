const Intervew = () => {
    return (
        <div className=" Intervew" id = "intervew">
            <h2 >Suivez les intervew ici avec les meilleurs experts de tenis</h2>
            <div className="card">
                <iframe src="https://www.youtube.com/embed/zkYiH557xI4" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <p style={{ textAlign: "center" }}>Serena Williams</p>
            </div>


            <div className="card" style={{ width: "18 rem;" }}>
                <iframe src="https://www.youtube.com/embed/eOwolGoaEEY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <p style={{ textAlign: "center" }}>Raphael Nadal</p>
            </div>

            <div className="card" style={{ width: "18 rem;" }}>
                <iframe src="https://www.youtube.com/embed/zOqekLBuRqo" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div className="card-body">
                    <p style={{ textAlign: "center" }}>Stan Wawrinka</p>
                </div>

            </div>




        </div>
    );
}

export default Intervew;