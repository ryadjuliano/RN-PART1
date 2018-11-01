import React, { Component } from 'react';
import { Image, View, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, FooterTab, Footer,Badge, } from 'native-base';
var moment = require('moment');

export default class Index extends Component {

  constructor(props) {
      super(props)
      this.state = {
          JsonDataVenue: '',
          JsonDataLokasi :'',
          JsonDataNegara : '',
          JsonDataProvinsi: '',
          JsonDataAttends: '',
          JsonDataDate: ''

      }
  }

  __contData() {

        const dataJson = {
          "data": [
              {
                "venue": "Camp Perahu Mountain",
                "venueImage": "https://someurl.example",
                "datetime": "2018-08-04T08:30:20Z",
                "location": {
                    "city": "Wonosobo",
                    "state": "Jawa Tengah",
                    "country": "Indonesia"
                  },
                   "attendees": {
                     "data": [
                        {
                          "name": "Jane Doe",
                          "username": "jane.doe",
                          "avatar": "https://someurl.example"
                        },
                     ]
                   },
              },
          ]
        }
        console.log(dataJson.data[0].datetime)
        const date = dataJson.data[0].datetime
        const subS = date.substring(0,10)
        dateparsing = moment(subS).format('DD MMM YYYY')

        this.setState({
            JsonDataVenue : dataJson.data[0].venue,
            JsonDataLokasi : dataJson.data[0].location.city,
            JsonDataNegara : dataJson.data[0].location.country,
            JsonDataProvinsi : dataJson.data[0].location.state,
            JsonDataAttends : dataJson.data[0].attendees.data[0].name,
            JsonDataDate : dateparsing,
        })

  }


  componentDidMount() {
    this.__contData()

  }


  render() {
    return (
      <Container style={{backgroundColor:'#ECECEC'}}>
        <Header />
        <View style={{marginTop:30, marginBottom:30,marginLeft:8,}}>
          <Text style={{fontSize:36,marginLeft:8, marginRight:8,}}>Event</Text>
          <Text style={{fontSize:16,marginLeft:8, marginRight:8,}}>You have 1 schedules in August</Text>
          <Thumbnail source={{uri: 'http://placehold.it/45x45'}} style={{marginLeft:300, marginTop:-50, }}/>
        </View>
        <Content>
          <Card style={{marginLeft:8,marginRight:8,}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://placehold.it/45x45'}} />
                <Body>
                  <Text note>{this.state.JsonDataDate}</Text>
                  <Text style={{fontSize:18, fontWeight:'bold', marginBottom:5,}}>{this.state.JsonDataVenue}</Text>
                  <Text style={{fontSize:12,}} ><Icon name="navigate" style={{fontSize:12,}}/> {this.state.JsonDataLokasi},{this.state.JsonDataProvinsi} {this.state.JsonDataNegara} </Text>
                  <Text note><Icon name="logo-github" /> <Icon name="logo-github" /> <Icon name="logo-github" /></Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer>
         <FooterTab>
           <Button vertical>
             <Icon name="apps" />
             <Text>Apps</Text>
           </Button>
           <Button vertical>
             <Icon name="camera" />
             <Text>Camera</Text>
           </Button>
           <Button vertical active>
             <Icon active name="navigate" />
             <Text>Navigate</Text>
           </Button>
           <Button vertical>
             <Icon name="person" />
             <Text>Contact</Text>
           </Button>
         </FooterTab>
       </Footer>
      </Container>
    );
  }
}
