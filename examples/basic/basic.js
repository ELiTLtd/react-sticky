import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import { Sticky, StickyContainer } from "../../src";

let i = 0;
class Header extends PureComponent {
  render() {
    return (
      <div
        style={{
          ...this.props.style,
          height: 80,
          overflow: "auto",
          background: "#aaa"
        }}
      >
        <h2>
          <span className="pull-left">
            &lt;Sticky /&gt; <small>(invocation: #{i++})</small>
          </span>
        </h2>
      </div>
    );
  }
}

class Document extends PureComponent {
  render() {
    return (
      <div style={{ height: 1500, margin: "0 30px" }}>
        <div style={{ marginBottom: 200 }} />
            <StickyContainer
	
        style={{ height: 500, background: "#ddd", padding: "0 30px", overflow: "scroll",}}
            >
        <div style={{ marginBottom: 200 }} />
            <Sticky relative>
            {({
              isSticky,
              wasSticky,
              style,
              distanceFromTop,
              distanceFromBottom,
		calculatedHeight,
		relative
            }) => {
		console.log({
	        relative,
                isSticky,
                wasSticky,
                style,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              });
              return <Header style={style} />;
            }}
        </Sticky>
	    <div style={{ marginBottom: 800 }} />

	
        </StickyContainer>
        <div style={{ marginBottom: 800 }} />
      </div>
    );
  }
}

ReactDOM.render(<Document />, document.getElementById("mount"));
