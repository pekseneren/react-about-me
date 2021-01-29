import '../App.css'

function PullRequest(props) {
    const {url, title} = props.pr

    return (
        <li>
            <div className="Box">
                <div className="container">
                    <div>
                        <a target="blank" href={url}>{title}</a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PullRequest;