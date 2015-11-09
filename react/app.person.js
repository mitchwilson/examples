var Person = React.createClass({
    createLessButton: function() {
        return <span><button onClick={this.less}>Less</button><span>{this.props.children}</span></span>;
    },
    createMoreButton: function() {
        return <button onClick={this.more}>More</button>;
    },
    getInitialState: function() {
        return {
            more: this.createMoreButton()
        }
    },
    less: function() {
        this.setState({
            more: this.createMoreButton()
        });
    },
    more: function() {
        this.setState({
            more: this.createLessButton()
        });
    },
    render: function() {
        return (
            <div id={this.props.name}>
                <h2>{this.props.name} likes {this.props.food}</h2>
                <div>{this.state.more}</div>
            </div>
        );
    }
});
