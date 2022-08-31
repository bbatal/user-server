import React from "react";
import { get } from "./Fetcher";

const withHOC = (WrappedComponent, entity) => {
    return class extends React.Component {

    state = {
        data: this.props.userList,
        term: '',
        sort: true
    }

    componentDidMount() {
        const fetchData = async () => {
            const response = await get();
            this.setState({...this.state, data: response})
        }

        fetchData();
        this.setState({...this.state, data: this.props.userList})
    }

        sorted = () => {
        let newArr = this.state.data.sort((a,b) => b["dateAdded"] - a["dateAdded"])
        this.setState({...this.state, data: newArr, sort: false})
    }

        sortedDown = () => {
        let newArr = this.state.data.sort((a,b) => a["dateAdded"] - b["dateAdded"])
        this.setState({...this.state, data: newArr, sort: true})
    }

        render() {
            let { term, data, sort } = this.state;

            console.log(this.props.userList);

            let filteredData = data.filter(item => {
                if (entity === "users") {
                    const {name} = item;
                    let newName = name.toLowerCase();
                    return newName.indexOf(term) >= 0;

                }         
                return false;
                // Add other entities in future
            })
            let button;
            if(sort) {
                button = <div className="sort-container"><button onClick={() => this.sorted()}>Sort by newest</button></div>
            } else {
                button = <div className="sort-container"><button onClick={() => this.sortedDown()}>Sort by oldest</button></div>
            }
             return (   
                <div className="search-list">
                    <label htmlFor="search">Search User</label>
                    <input
                        id="search"
                        type="text"
                        value={term}
                        onChange={(e) => this.setState({ ...this.state, term: e.target.value })}
                    />
                    {button}
                    

                    <WrappedComponent data={filteredData} setEditModal={this.props.setEditModal} ></WrappedComponent>
                </div>
                        
                    )
            }
        }
    }

export default withHOC;