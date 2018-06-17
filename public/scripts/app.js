'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = [{
    title: 'React',
    url: 'https:facebook.github.io/react/',
    author: 'Cyngynn',
    num_comments: 3,
    points: 4,
    objectID: 0

}, {
    title: 'Redux',
    url: 'https://github.com/react.js/redux',
    author: 'Anne',
    num_comments: 2,
    points: 5,
    objectID: 1
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'A good rule of thumb is that elements inside the map() call need keys.'
                ),
                list.map(function (item) {
                    return React.createElement(
                        'div',
                        { key: item.objectID },
                        React.createElement(
                            'a',
                            { href: item.url },
                            item.title,
                            ' '
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Number of comments: ',
                            item.num_comments
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Author: ',
                            item.author
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Points: ',
                            item.points
                        )
                    );
                })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
