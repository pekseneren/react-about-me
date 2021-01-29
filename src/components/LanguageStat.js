import '../App.css'

function LanguageStat(props) {
    const {name, percent} = props.stat

    return (
        <div className="languageStat">
            <p className="text-small">{name} - {percent}</p>
        </div>
    );
}

export default LanguageStat;