import CardCalosal from "./CardCalosal"


const CallosalApointment = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center p-4 font-bold ">Appointlet delivers exceptional service <br/> to companies all around the world</h1>
            </div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-1/3">
                   <CardCalosal content="Our techs are saving two to three minutes per ticket on over 22,000 tickets a year. That adds up, fast.” – Brad Immanuel, Director of CRC" name='Standfort University' name1='Standfort University'/>
                </div>
                <div id="item2" className="carousel-item w-1/3">
                    <CardCalosal content='“We manage 150+ real estate agents, helping homeowners to stage rooms in their house for prospective buyers. Appointlet has alleviated the confusion that happens with manual bookings.” – Leigh Newport' name="Stage By Design" name1="Stage By Design" />
                </div>
                <div id="item3" className="carousel-item w-1/3">
                   <CardCalosal content="“We manage 150+ real estate agents, helping homeowners to stage rooms in their house for prospective buyers. Appointlet has alleviated the confusion that happens with manual bookings.” – Leigh Newport"  name="Columbia University" name1="Columbia University"/>
                </div>
                <div id="item4" className="carousel-item w-1/3">
                    <CardCalosal content="“Our team has been using Appointlet successfully for over three years, acquiring more than 2,000 bookings in that time period.” – Kim Pomares" name='Mendability' name1='Mendability'/>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    )
}

export default CallosalApointment;
