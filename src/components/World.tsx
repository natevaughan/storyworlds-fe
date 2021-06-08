import React from "react";
import { World } from "../model/World";

interface WorldProps {
    world: World
}

export default class WorldCard extends React.Component<WorldProps> {
    render() {
        return (
            <div>
                {this.props.world.Name}
            </div>
        );
    }
}