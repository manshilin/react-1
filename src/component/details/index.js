
import "./index.css";
import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";

export default function Details({ title, children }) {
    return (
        <Box className="description" shadow>
            <Heading>{title}</Heading>
            {/* Rendering property_details as a list */}
            <ul>
                {Object.entries(children).map(([key, value]) => (
                    <ListItem
                        key={key} // Ensure to use the 'key' prop if it is not used elsewhere in the code
                        imageSrc={value.imageSrc}
                        className="description__list"
                    >
                        <strong>{value.text}:</strong> {value.value}
                    </ListItem>
                ))}
            </ul>
        </Box>
    );
}
