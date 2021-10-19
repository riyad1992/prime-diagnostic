import { useEffect, useState } from "react"

const useEffects = () => {
    const [services, setServices] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/riyad1992/prime-diagonstic-servicesData/main/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/riyad1992/prime-diagonstic-servicesData/main/team.json')
        .then(res => res.json())
        .then(data => setTeams(data))
    } ,[])

    return [services, teams]
}

export default useEffects;