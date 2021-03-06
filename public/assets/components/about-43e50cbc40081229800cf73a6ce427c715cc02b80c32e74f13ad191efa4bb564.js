var AboutContent = React.createClass({
  displayName: "AboutContent",

  render: function () {

    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-sm-12" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-sm-6 text-left" },
              React.createElement(
                "p",
                null,
                this.props.about
              ),
              React.createElement(Img, { src: "/assets/pic.png", alt: "logo", className: "img-circle", id: "img-circle" })
            )
          )
        ),
        React.createElement("div", { className: "col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big" })
      )
    );
  }
});
