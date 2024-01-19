
import Container from "../components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ServiceCard from "../components/ui/ServiceCard";


const Services = () => {
    
    const axios = useAxios();
    const getServices = async () => {
        const res = await axios.get('/services');
        return res;
    }
    const {data: services , isError , isLoading , error} = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    })

    if(isLoading){
      return <p>Loading...</p>
    }
    if(isError){
       return <p>Something Went Wrong: {error}</p>
    }
    
    return (
        <div>
            <Container className="mt-10">
                <header title="Services">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia commodi blanditiis autem quidem harum odit quasi, suscipit dignissimos neque libero quos ullam? Rem eos voluptatum architecto velit, quae in!
                </header>
            </Container>
            <Container className="mb-64">
                <div className="grid grid-cols-3 gap-10">
                    {/* services cards goes here */}
                    {
                        services?.data?.map((item) => (
                            <ServiceCard key={item?._id} services={item}></ServiceCard>
                            ))
                    }
                </div>

            </Container>
        </div>
    );
};

export default Services;
