import { useEffect, useState } from "react";


const Marquee = () => {

    const [mar,setMar] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/company.json'); 
          const data = await response.json();
          setMar(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
       console.log(mar)
















    return (
        <div>
            <p>length:{mar?.length}</p>
        </div>
    );
};

export default Marquee;