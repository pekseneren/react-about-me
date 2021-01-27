import '../App.css'

function Repo(props) {
const {url, name, description} = props.repo

return (
<div className="Repo">
    <a href={url} target="blank">{name}</a>
    <span>{description}</span>
</div>
);
}

export default Repo;