import { ScrollView, Card, Text, Phone, Email } from 'react-native';

const ContactScreen = () => {
    return(
        <ScrollView>
            <Card
                wrapperStyle={{margin: 20}}
            >
                <Card.Tile>Contact Information</Card.Tile>
                <Card.Divider/>
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text
                    style={{marginBottom: 10}}
                    >U.S.A.</Text>
                    <Phone>Phone: 1-206-555-1234</Phone>
                    <Email>Email: campsites@nucamp.co</Email>
            </Card>
        </ScrollView>
    );
}


export default ContactScreen;
