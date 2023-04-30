import '../../App.css'

function PullRequest(props) {
    const { url, title } = props.pr

    return (
        <div className="box mb-2">
            <div className="repo-container mb-2">
                <a target="blank" href={url}>{title}</a>
            </div>
        </div>
    );
}

export default PullRequest;