import '../App.css'

function Repo(props) {
const {key, url, name, description} = props.repo

return (
<div className="Repo">
    <input type="hidden" key={key}></input>
    <a key={key} href={url} target="blank">{name} - {description}</a>
</div>
);
}

export default Repo;