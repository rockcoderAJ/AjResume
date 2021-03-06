var Recommend = React.createClass({
    displayName: "Recommend",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-6 " },
                    React.createElement(Img, { src: this.props.reco.image, style: Img_style, alt: "logo", className: "img-circle", id: "img-circle" }),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            this.props.reco.desc
                        )
                    )
                )
            )
        );
    }
});

var Img_style = { width: '4em', height: '4em' };
