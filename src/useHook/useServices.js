import { useEffect, useState } from 'react';
const useServices = () => {
    const [services, setServices] = useState([]);
    const baseUrl = "http://localhost:3000";
    // const baseUrl = "https://aysha-dental-care.web.app";
    useEffect(() => {
        fetch(`${baseUrl}/fakeData/services.json`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return [services]

}
export default useServices