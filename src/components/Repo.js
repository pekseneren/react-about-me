import '../App.css'

function Repo(props) {
    const {key, url, name, description, forked} = props.repo

    return (
        <div className="Repo">
            <input type="hidden" value={forked} />
            <a key={key} href={url} target="blank">{name}</a>
            <span> - {description}</span>
        </div>
    );
}

export default Repo;