import "./index.css"
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";



export default function Additional({ list }) 
    {
    return (
        <Box>
            <Heading>Пам'ятки поблизу</Heading>
            <ul>
                {Object.entries(list).map(([key, value]) => (
                    <ListItem title
                        key={key} 
                        
                    >
                       <a style={{ color: "#000" }} href={value.link}> {value.name} </a>
                    
                    </ListItem>
                ))}
            </ul>
        </Box>
    );
}