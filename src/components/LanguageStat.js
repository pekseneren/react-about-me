import '../App.css'

function LanguageStat(props) {
    const {name, usage, percent} = props.stat

    return (
        <div key={name} className="languageStat">
            <div className="container">
                <div>{name} - {percent}</div>
            </div>
        </div>
    );
}

export default LanguageStat;