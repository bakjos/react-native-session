import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";
import { Text } from "../components/Themed";
import styled from "styled-components/native";
import StyledInputText from "../components/StyledInputText";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CounterState } from "../types/state";
import * as actions from "../actions";

type CounterStateProps = {
  count?: number;
};

type CounterActionProps = {
  increment?: () => void;
  decrement?: () => void;
};

type CounterProps = CounterStateProps &
  CounterActionProps & {
    onUpdated?: (increment: boolean) => void;
  };

type CounterClassState = {
  text: string;
};

const mapStateToProps = (state: CounterState = {}): CounterStateProps => {
  return {
    count: state?.count || 0,
  };
};

const mapDispatchToProps = (dispatch: any): CounterActionProps => {
  return bindActionCreators(
    {
      increment: actions.incrementCounter,
      decrement: actions.decrementCounter,
    },
    dispatch
  );
};

const StyleButton = styled(Button)`
  color: red;
  background-color: #ff0000;
  height: 50px;
  width: 50px;
  align-self: center;
  justify-content: center;
  margin: 10px;
  border-radius: 25px;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  opacity: ${({ visible = true }: { visible?: boolean }) => (visible ? 1 : 0)};
  margin: 20px 30px;
`;

// @connect<CounterStateProps, CounterActionProps, CounterProps, CounterState>(
//   mapStateToProps,
//   mapDispatchToProps
// )
class CounterClass extends React.PureComponent<
  CounterProps,
  CounterClassState
> {
  inputTextRef: React.RefObject<TextInput>;
  currentCount: number;

  constructor(props: Readonly<CounterProps>) {
    super(props);
    this.state = { text: "" };
    this.inputTextRef = React.createRef<TextInput>();
    this.currentCount = 0;
    //this.updateText = this.updateText.bind(this);
  }

  componentDidMount() {
    //console.log("Component did mount");
    //this.inputTextRef.current?.focus();
  }

  componentDidUpdate(prevProps: CounterProps, prevState: CounterClassState) {
    //console.log("Component did Update", prevProps, prevState);
  }

  updateText = (text: string) => {
    this.setState({
      text: text,
    });
  };

  incrementCount = () => {
    this.props.increment!();

    if (this.props.onUpdated) {
      this.props.onUpdated(true);
    }
    this.currentCount++;
  };

  decrementCount = () => {
    this.props.decrement!();
    if (this.props.onUpdated) {
      this.props.onUpdated(true);
    }

    this.currentCount--;
  };

  //static contextType = StateContext;

  render() {
    //this.context.
    console.log("Render");
    return (
      <View style={styles.mainView}>
        <StyledText>Current Count: {this.props.count}</StyledText>
        <StyleButton
          labelStyle={styles.labelStyle}
          title="+"
          onPress={this.incrementCount}
        />
        <StyleButton
          labelStyle={styles.labelStyle}
          title="-"
          onPress={this.decrementCount}
        />

        <StyledInputText
          value={this.state.text}
          onChangeText={this.updateText}
          ref={this.inputTextRef}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    margin: 20,
    padding: 20,
    flex: 2,
  },
  labelStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

//export default CounterClass;