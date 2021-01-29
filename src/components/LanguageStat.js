import '../App.css'

function LanguageStat(props) {
    const {name, percent} = props.stat

    return (
        <div>
            <p className="text-small">{name} - {percent}</p>
        </div>
    );
}

export default LanguageStat;