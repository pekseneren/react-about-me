import '../App.css'

function LanguageStat(props) {
    const {name, percent} = props.stat

    return (
        <div className="languageStat">
            <div className="container">
                <div>{name} - {percent}</div>
            </div>
        </div>
    );
}

export default LanguageStat;