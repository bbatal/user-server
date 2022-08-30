import React from "react";
import { get } from "./Fetcher";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {

    state = {
        data: [],
        term: ''
    }

    componentDidMount() {
        const fetchData = async () => {
            const response = await get();
            this.setState({...this.state, data: response})
        }

        fetchData();
    }

        render() {
            let { term, data } = this.state;
            let filteredData = data.filter(item => {
                if (entity === "users") {
                    const {name} = item;
                    return name.indexOf(term) >= 0;
                    // return name.toLowerCase().indexOf(term) >= 0;
                } else {
 console.log('whats going onm hhere');
                return false;
                }
               
                // Add other entities in future
            })
             return (   
                <>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => this.setState({ ...this.state, term: e.target.value })}
                    />
                    <WrappedComponent data={filteredData}></WrappedComponent>
                </>
                        
                    )
            }
        }
    }

export default HOC;