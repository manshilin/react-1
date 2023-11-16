import "./index.css"
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additional({ 
    heading,
    children,
    title
    }) 
    {
    return (
        <Box>
            <Heading>{heading}</Heading>
            <ul>
                {Object.entries(children).map(([key, value]) => (
                    <ListItem title
                        key={key} 
                        
                    >
                        <span className="list-item__title"> {value.title}:</span> {value.value}
                    </ListItem>
                ))}
            </ul>
        </Box>
    );
}