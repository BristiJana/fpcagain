import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constant/Constant';
import DatePicker from 'react-native-date-picker';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Date of Birth Click Here',
      open: false,
    };
  }
  render() {
    return (
      <View style={style.mainView}>
        <View>
          <Text style={style.heading}>Name As Per Aadhar Card</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={changedText => this.setState({value: changedText})}
            placeholderTextColor={'grey'}
          />
        </View>
        <View>
          <Text style={style.heading}>Aadhar No (Identity Proof)</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={changedText => this.setState({value: changedText})}
            keyboardType={'numeric'}
            placeholderTextColor={'grey'}
          />
        </View>
        <View>
          <Text style={style.heading}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={changedText => this.setState({value: changedText})}
            keyboardType={'numeric'}
            placeholderTextColor={'grey'}
          />
        </View>
        <View>
          <Text style={style.heading}>Phone Number</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={changedText => this.setState({value: changedText})}
            keyboardType={'numeric'}
            placeholderTextColor={'grey'}
          />
        </View>
        <View>
          <Text style={style.heading}>Birth Of Date</Text>
          <TouchableOpacity onPress={() => this.setState({open: true})}>
            <Text
              style={{
                padding: 15,
                color: 'black',
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              {this.state.date}
            </Text>
            {/* <Text style={{color:"#000",marginStart:10,marginTop:10, marginBottom:15}}>{date.toDateString()}</Text> */}
            <DatePicker
              modal
              mode="date"
              open={this.state.open}
              date={new Date()}
              onConfirm={date => {
                this.setState({open: false});
                // this.props.Collect_date(date.toISOString().slice(0, 10));
                this.setState({value: date.toISOString().slice(0, 10)});
                this.setState({
                  date: date.toISOString().slice(0, 10),
                });

                console.log(date.toISOString().slice(0, 10));
              }}
              onCancel={() => {
                this.setState({open: false});
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView: {
    elevation: 20,
    marginVertical: 10,
    // marginBottom:30,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textInputStyle: {
    padding: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  heading: {
    fontSize: (SCREEN_HEIGHT * 1.75) / 100,
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});
