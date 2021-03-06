import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';

class AppComponent extends React.Component {
    sports = [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 }
    ];
    state = {
        // Since the reference of the initial value is not from the 'sports' collection,
        // 'dataItemKey' have to be set.
        value: { text: 'Football', id: 2 }
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.value)}
                </div>
                <DropDownList
                    data={this.sports}
                    textField="text"
                    dataItemKey="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.querySelector('my-app')
);
