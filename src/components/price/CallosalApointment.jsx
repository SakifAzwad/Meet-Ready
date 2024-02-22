import CardCarousel from "./CardCalosal"


const CarouselAppointment = () => {
    return (
        <div className="w-[90vw] mx-auto grid items-center justify-center gap-4">
            <div>
                <h1 className="text-2xl text-justify  p-4 font-bold ">Appointed delivers exceptional service to companies all around the world</h1>
            </div>
            <div className="carousel w-full grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div id="item1" className="carousel-item">
                   <CardCarousel content="Our techs are saving two to three minutes per ticket on over 22,000 tickets a year. That adds up, fast.” – Brad Immanuel, Director of CRC" name='Standfort University' name1='Standfort University'/>
                </div>
                <div id="item2" className="carousel-item">
                    <CardCarousel content='“We manage 150+ real estate agents, helping homeowners to stage rooms in their house for prospective buyers. Appointed has alleviated the confusion that happens with manual bookings.” – Leigh Newport' name="Stage By Design" name1="Stage By Design" />
                </div>
                <div id="item3" className="carousel-item">
                   <CardCarousel content="“We manage 150+ real estate agents, helping homeowners to stage rooms in their house for prospective buyers. Appointlet has alleviated the confusion that happens with manual bookings.” – Leigh Newport"  name="Columbia University" name1="Columbia University"/>
                </div>
                <div id="item4" className="carousel-item">
                    <CardCarousel content="“Our team has been using Appointed successfully for over three years, acquiring more than 2,000 bookings in that time period.” – Kim Pomares" name='Mendability' name1='Mendability'/>
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

export default CarouselAppointment;
