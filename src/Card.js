import * as React from "react";
import axios from "axios";

export const CardList = (props) => (
    <div>
        {props.profiles.map(prof => <Card key={prof.id} {...prof}/>)}

    </div>)

export class Form extends React.Component {
    state = {userName :""};

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({userName:""});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="github username"
                       value={this.state.userName}
                       onChange={e => this.setState({userName: e.target.value})}
                       required/>
                <button>Add card</button>
            </form>
        );
    };
}

export class Card extends React.Component {

    render() {
        const profile = this.props;
        return (
            <div className="profile">
                <img src={profile.avatar_url} alt={profile.name}/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company-info">{profile.company}</div>
                </div>
            </div>

        )
    }
}
