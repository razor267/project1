import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
            <Provider store={store}>
                <App/>
            </Provider>
            {/*</React.StrictMode>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender();

store.subscribe(() => {
    rerender();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
