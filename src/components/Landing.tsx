import React, { Component } from "react";
import { World } from "../model/World";
import WorldCard from "./World";

interface LandingProps {

}

interface LandingState {
    worlds: World[],
    loading: boolean
}

export default class Landing extends Component<LandingProps, LandingState> {

    constructor(props: LandingProps) {  super(props);
        this.state = {
            worlds: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch('http://localhost:8081/world')
            .then(Response => Response.json())
            .then(res => {
                console.log(res);
                this.setState({
                    worlds: res,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    loading...
                </div>
            )
        } else {
            let worlds = this.state.worlds.map((w) => {
                return (
                    <WorldCard world={w} />
                )
            })
            return (
                <div className="container">
                    {worlds}
                </div>
            )
        }
    }
}